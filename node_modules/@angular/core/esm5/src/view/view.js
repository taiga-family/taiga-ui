/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { checkAndUpdateElementDynamic, checkAndUpdateElementInline, createElement, listenToElementOutputs } from './element';
import { expressionChangedAfterItHasBeenCheckedError } from './errors';
import { appendNgContent } from './ng_content';
import { callLifecycleHooksChildrenFirst, checkAndUpdateDirectiveDynamic, checkAndUpdateDirectiveInline, createDirectiveInstance, createPipeInstance, createProviderInstance } from './provider';
import { checkAndUpdatePureExpressionDynamic, checkAndUpdatePureExpressionInline, createPureExpression } from './pure_expression';
import { checkAndUpdateQuery, createQuery } from './query';
import { createTemplateData, createViewContainerData } from './refs';
import { checkAndUpdateTextDynamic, checkAndUpdateTextInline, createText } from './text';
import { asElementData, asQueryList, asTextData, Services, shiftInitState } from './types';
import { checkBindingNoChanges, isComponentView, markParentViewsForCheckProjectedViews, NOOP, resolveDefinition, tokenKey } from './util';
import { detachProjectedView } from './view_attach';
export function viewDef(flags, nodes, updateDirectives, updateRenderer) {
    // clone nodes and set auto calculated values
    var viewBindingCount = 0;
    var viewDisposableCount = 0;
    var viewNodeFlags = 0;
    var viewRootNodeFlags = 0;
    var viewMatchedQueries = 0;
    var currentParent = null;
    var currentRenderParent = null;
    var currentElementHasPublicProviders = false;
    var currentElementHasPrivateProviders = false;
    var lastRenderRootNode = null;
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        node.nodeIndex = i;
        node.parent = currentParent;
        node.bindingIndex = viewBindingCount;
        node.outputIndex = viewDisposableCount;
        node.renderParent = currentRenderParent;
        viewNodeFlags |= node.flags;
        viewMatchedQueries |= node.matchedQueryIds;
        if (node.element) {
            var elDef = node.element;
            elDef.publicProviders =
                currentParent ? currentParent.element.publicProviders : Object.create(null);
            elDef.allProviders = elDef.publicProviders;
            // Note: We assume that all providers of an element are before any child element!
            currentElementHasPublicProviders = false;
            currentElementHasPrivateProviders = false;
            if (node.element.template) {
                viewMatchedQueries |= node.element.template.nodeMatchedQueries;
            }
        }
        validateNode(currentParent, node, nodes.length);
        viewBindingCount += node.bindings.length;
        viewDisposableCount += node.outputs.length;
        if (!currentRenderParent && (node.flags & 3 /* CatRenderNode */)) {
            lastRenderRootNode = node;
        }
        if (node.flags & 20224 /* CatProvider */) {
            if (!currentElementHasPublicProviders) {
                currentElementHasPublicProviders = true;
                // Use prototypical inheritance to not get O(n^2) complexity...
                currentParent.element.publicProviders =
                    Object.create(currentParent.element.publicProviders);
                currentParent.element.allProviders = currentParent.element.publicProviders;
            }
            var isPrivateService = (node.flags & 8192 /* PrivateProvider */) !== 0;
            var isComponent = (node.flags & 32768 /* Component */) !== 0;
            if (!isPrivateService || isComponent) {
                currentParent.element.publicProviders[tokenKey(node.provider.token)] = node;
            }
            else {
                if (!currentElementHasPrivateProviders) {
                    currentElementHasPrivateProviders = true;
                    // Use prototypical inheritance to not get O(n^2) complexity...
                    currentParent.element.allProviders =
                        Object.create(currentParent.element.publicProviders);
                }
                currentParent.element.allProviders[tokenKey(node.provider.token)] = node;
            }
            if (isComponent) {
                currentParent.element.componentProvider = node;
            }
        }
        if (currentParent) {
            currentParent.childFlags |= node.flags;
            currentParent.directChildFlags |= node.flags;
            currentParent.childMatchedQueries |= node.matchedQueryIds;
            if (node.element && node.element.template) {
                currentParent.childMatchedQueries |= node.element.template.nodeMatchedQueries;
            }
        }
        else {
            viewRootNodeFlags |= node.flags;
        }
        if (node.childCount > 0) {
            currentParent = node;
            if (!isNgContainer(node)) {
                currentRenderParent = node;
            }
        }
        else {
            // When the current node has no children, check if it is the last children of its parent.
            // When it is, propagate the flags up.
            // The loop is required because an element could be the last transitive children of several
            // elements. We loop to either the root or the highest opened element (= with remaining
            // children)
            while (currentParent && i === currentParent.nodeIndex + currentParent.childCount) {
                var newParent = currentParent.parent;
                if (newParent) {
                    newParent.childFlags |= currentParent.childFlags;
                    newParent.childMatchedQueries |= currentParent.childMatchedQueries;
                }
                currentParent = newParent;
                // We also need to update the render parent & account for ng-container
                if (currentParent && isNgContainer(currentParent)) {
                    currentRenderParent = currentParent.renderParent;
                }
                else {
                    currentRenderParent = currentParent;
                }
            }
        }
    }
    var handleEvent = function (view, nodeIndex, eventName, event) {
        return nodes[nodeIndex].element.handleEvent(view, eventName, event);
    };
    return {
        // Will be filled later...
        factory: null,
        nodeFlags: viewNodeFlags,
        rootNodeFlags: viewRootNodeFlags,
        nodeMatchedQueries: viewMatchedQueries,
        flags: flags,
        nodes: nodes,
        updateDirectives: updateDirectives || NOOP,
        updateRenderer: updateRenderer || NOOP,
        handleEvent: handleEvent,
        bindingCount: viewBindingCount,
        outputCount: viewDisposableCount,
        lastRenderRootNode: lastRenderRootNode
    };
}
function isNgContainer(node) {
    return (node.flags & 1 /* TypeElement */) !== 0 && node.element.name === null;
}
function validateNode(parent, node, nodeCount) {
    var template = node.element && node.element.template;
    if (template) {
        if (!template.lastRenderRootNode) {
            throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
        }
        if (template.lastRenderRootNode &&
            template.lastRenderRootNode.flags & 16777216 /* EmbeddedViews */) {
            throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + node.nodeIndex + "!");
        }
    }
    if (node.flags & 20224 /* CatProvider */) {
        var parentFlags = parent ? parent.flags : 0;
        if ((parentFlags & 1 /* TypeElement */) === 0) {
            throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + node.nodeIndex + "!");
        }
    }
    if (node.query) {
        if (node.flags & 67108864 /* TypeContentQuery */ &&
            (!parent || (parent.flags & 16384 /* TypeDirective */) === 0)) {
            throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + node.nodeIndex + "!");
        }
        if (node.flags & 134217728 /* TypeViewQuery */ && parent) {
            throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + node.nodeIndex + "!");
        }
    }
    if (node.childCount) {
        var parentEnd = parent ? parent.nodeIndex + parent.childCount : nodeCount - 1;
        if (node.nodeIndex <= parentEnd && node.nodeIndex + node.childCount > parentEnd) {
            throw new Error("Illegal State: childCount of node leads outside of parent, at index " + node.nodeIndex + "!");
        }
    }
}
export function createEmbeddedView(parent, anchorDef, viewDef, context) {
    // embedded views are seen as siblings to the anchor, so we need
    // to get the parent of the anchor and use it as parentIndex.
    var view = createView(parent.root, parent.renderer, parent, anchorDef, viewDef);
    initView(view, parent.component, context);
    createViewNodes(view);
    return view;
}
export function createRootView(root, def, context) {
    var view = createView(root, root.renderer, null, null, def);
    initView(view, context, context);
    createViewNodes(view);
    return view;
}
export function createComponentView(parentView, nodeDef, viewDef, hostElement) {
    var rendererType = nodeDef.element.componentRendererType;
    var compRenderer;
    if (!rendererType) {
        compRenderer = parentView.root.renderer;
    }
    else {
        compRenderer = parentView.root.rendererFactory.createRenderer(hostElement, rendererType);
    }
    return createView(parentView.root, compRenderer, parentView, nodeDef.element.componentProvider, viewDef);
}
function createView(root, renderer, parent, parentNodeDef, def) {
    var nodes = new Array(def.nodes.length);
    var disposables = def.outputCount ? new Array(def.outputCount) : null;
    var view = {
        def: def,
        parent: parent,
        viewContainerParent: null,
        parentNodeDef: parentNodeDef,
        context: null,
        component: null,
        nodes: nodes,
        state: 13 /* CatInit */,
        root: root,
        renderer: renderer,
        oldValues: new Array(def.bindingCount),
        disposables: disposables,
        initIndex: -1
    };
    return view;
}
function initView(view, component, context) {
    view.component = component;
    view.context = context;
}
function createViewNodes(view) {
    var renderHost;
    if (isComponentView(view)) {
        var hostDef = view.parentNodeDef;
        renderHost = asElementData(view.parent, hostDef.parent.nodeIndex).renderElement;
    }
    var def = view.def;
    var nodes = view.nodes;
    for (var i = 0; i < def.nodes.length; i++) {
        var nodeDef = def.nodes[i];
        Services.setCurrentNode(view, i);
        var nodeData = void 0;
        switch (nodeDef.flags & 201347067 /* Types */) {
            case 1 /* TypeElement */:
                var el = createElement(view, renderHost, nodeDef);
                var componentView = undefined;
                if (nodeDef.flags & 33554432 /* ComponentView */) {
                    var compViewDef = resolveDefinition(nodeDef.element.componentView);
                    componentView = Services.createComponentView(view, nodeDef, compViewDef, el);
                }
                listenToElementOutputs(view, componentView, nodeDef, el);
                nodeData = {
                    renderElement: el,
                    componentView: componentView,
                    viewContainer: null,
                    template: nodeDef.element.template ? createTemplateData(view, nodeDef) : undefined
                };
                if (nodeDef.flags & 16777216 /* EmbeddedViews */) {
                    nodeData.viewContainer = createViewContainerData(view, nodeDef, nodeData);
                }
                break;
            case 2 /* TypeText */:
                nodeData = createText(view, renderHost, nodeDef);
                break;
            case 512 /* TypeClassProvider */:
            case 1024 /* TypeFactoryProvider */:
            case 2048 /* TypeUseExistingProvider */:
            case 256 /* TypeValueProvider */: {
                nodeData = nodes[i];
                if (!nodeData && !(nodeDef.flags & 4096 /* LazyProvider */)) {
                    var instance = createProviderInstance(view, nodeDef);
                    nodeData = { instance: instance };
                }
                break;
            }
            case 16 /* TypePipe */: {
                var instance = createPipeInstance(view, nodeDef);
                nodeData = { instance: instance };
                break;
            }
            case 16384 /* TypeDirective */: {
                nodeData = nodes[i];
                if (!nodeData) {
                    var instance = createDirectiveInstance(view, nodeDef);
                    nodeData = { instance: instance };
                }
                if (nodeDef.flags & 32768 /* Component */) {
                    var compView = asElementData(view, nodeDef.parent.nodeIndex).componentView;
                    initView(compView, nodeData.instance, nodeData.instance);
                }
                break;
            }
            case 32 /* TypePureArray */:
            case 64 /* TypePureObject */:
            case 128 /* TypePurePipe */:
                nodeData = createPureExpression(view, nodeDef);
                break;
            case 67108864 /* TypeContentQuery */:
            case 134217728 /* TypeViewQuery */:
                nodeData = createQuery();
                break;
            case 8 /* TypeNgContent */:
                appendNgContent(view, renderHost, nodeDef);
                // no runtime data needed for NgContent...
                nodeData = undefined;
                break;
        }
        nodes[i] = nodeData;
    }
    // Create the ViewData.nodes of component views after we created everything else,
    // so that e.g. ng-content works
    execComponentViewsAction(view, ViewAction.CreateViewNodes);
    // fill static content and view queries
    execQueriesAction(view, 67108864 /* TypeContentQuery */ | 134217728 /* TypeViewQuery */, 268435456 /* StaticQuery */, 0 /* CheckAndUpdate */);
}
export function checkNoChangesView(view) {
    markProjectedViewsForCheck(view);
    Services.updateDirectives(view, 1 /* CheckNoChanges */);
    execEmbeddedViewsAction(view, ViewAction.CheckNoChanges);
    Services.updateRenderer(view, 1 /* CheckNoChanges */);
    execComponentViewsAction(view, ViewAction.CheckNoChanges);
    // Note: We don't check queries for changes as we didn't do this in v2.x.
    // TODO(tbosch): investigate if we can enable the check again in v5.x with a nicer error message.
    view.state &= ~(64 /* CheckProjectedViews */ | 32 /* CheckProjectedView */);
}
export function checkAndUpdateView(view) {
    if (view.state & 1 /* BeforeFirstCheck */) {
        view.state &= ~1 /* BeforeFirstCheck */;
        view.state |= 2 /* FirstCheck */;
    }
    else {
        view.state &= ~2 /* FirstCheck */;
    }
    shiftInitState(view, 0 /* InitState_BeforeInit */, 256 /* InitState_CallingOnInit */);
    markProjectedViewsForCheck(view);
    Services.updateDirectives(view, 0 /* CheckAndUpdate */);
    execEmbeddedViewsAction(view, ViewAction.CheckAndUpdate);
    execQueriesAction(view, 67108864 /* TypeContentQuery */, 536870912 /* DynamicQuery */, 0 /* CheckAndUpdate */);
    var callInit = shiftInitState(view, 256 /* InitState_CallingOnInit */, 512 /* InitState_CallingAfterContentInit */);
    callLifecycleHooksChildrenFirst(view, 2097152 /* AfterContentChecked */ | (callInit ? 1048576 /* AfterContentInit */ : 0));
    Services.updateRenderer(view, 0 /* CheckAndUpdate */);
    execComponentViewsAction(view, ViewAction.CheckAndUpdate);
    execQueriesAction(view, 134217728 /* TypeViewQuery */, 536870912 /* DynamicQuery */, 0 /* CheckAndUpdate */);
    callInit = shiftInitState(view, 512 /* InitState_CallingAfterContentInit */, 768 /* InitState_CallingAfterViewInit */);
    callLifecycleHooksChildrenFirst(view, 8388608 /* AfterViewChecked */ | (callInit ? 4194304 /* AfterViewInit */ : 0));
    if (view.def.flags & 2 /* OnPush */) {
        view.state &= ~8 /* ChecksEnabled */;
    }
    view.state &= ~(64 /* CheckProjectedViews */ | 32 /* CheckProjectedView */);
    shiftInitState(view, 768 /* InitState_CallingAfterViewInit */, 1024 /* InitState_AfterInit */);
}
export function checkAndUpdateNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    if (argStyle === 0 /* Inline */) {
        return checkAndUpdateNodeInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
    }
    else {
        return checkAndUpdateNodeDynamic(view, nodeDef, v0);
    }
}
function markProjectedViewsForCheck(view) {
    var def = view.def;
    if (!(def.nodeFlags & 4 /* ProjectedTemplate */)) {
        return;
    }
    for (var i = 0; i < def.nodes.length; i++) {
        var nodeDef = def.nodes[i];
        if (nodeDef.flags & 4 /* ProjectedTemplate */) {
            var projectedViews = asElementData(view, i).template._projectedViews;
            if (projectedViews) {
                for (var i_1 = 0; i_1 < projectedViews.length; i_1++) {
                    var projectedView = projectedViews[i_1];
                    projectedView.state |= 32 /* CheckProjectedView */;
                    markParentViewsForCheckProjectedViews(projectedView, view);
                }
            }
        }
        else if ((nodeDef.childFlags & 4 /* ProjectedTemplate */) === 0) {
            // a parent with leafs
            // no child is a component,
            // then skip the children
            i += nodeDef.childCount;
        }
    }
}
function checkAndUpdateNodeInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    switch (nodeDef.flags & 201347067 /* Types */) {
        case 1 /* TypeElement */:
            return checkAndUpdateElementInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
        case 2 /* TypeText */:
            return checkAndUpdateTextInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
        case 16384 /* TypeDirective */:
            return checkAndUpdateDirectiveInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
        case 32 /* TypePureArray */:
        case 64 /* TypePureObject */:
        case 128 /* TypePurePipe */:
            return checkAndUpdatePureExpressionInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
        default:
            throw 'unreachable';
    }
}
function checkAndUpdateNodeDynamic(view, nodeDef, values) {
    switch (nodeDef.flags & 201347067 /* Types */) {
        case 1 /* TypeElement */:
            return checkAndUpdateElementDynamic(view, nodeDef, values);
        case 2 /* TypeText */:
            return checkAndUpdateTextDynamic(view, nodeDef, values);
        case 16384 /* TypeDirective */:
            return checkAndUpdateDirectiveDynamic(view, nodeDef, values);
        case 32 /* TypePureArray */:
        case 64 /* TypePureObject */:
        case 128 /* TypePurePipe */:
            return checkAndUpdatePureExpressionDynamic(view, nodeDef, values);
        default:
            throw 'unreachable';
    }
}
export function checkNoChangesNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    if (argStyle === 0 /* Inline */) {
        checkNoChangesNodeInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
    }
    else {
        checkNoChangesNodeDynamic(view, nodeDef, v0);
    }
    // Returning false is ok here as we would have thrown in case of a change.
    return false;
}
function checkNoChangesNodeInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    var bindLen = nodeDef.bindings.length;
    if (bindLen > 0)
        checkBindingNoChanges(view, nodeDef, 0, v0);
    if (bindLen > 1)
        checkBindingNoChanges(view, nodeDef, 1, v1);
    if (bindLen > 2)
        checkBindingNoChanges(view, nodeDef, 2, v2);
    if (bindLen > 3)
        checkBindingNoChanges(view, nodeDef, 3, v3);
    if (bindLen > 4)
        checkBindingNoChanges(view, nodeDef, 4, v4);
    if (bindLen > 5)
        checkBindingNoChanges(view, nodeDef, 5, v5);
    if (bindLen > 6)
        checkBindingNoChanges(view, nodeDef, 6, v6);
    if (bindLen > 7)
        checkBindingNoChanges(view, nodeDef, 7, v7);
    if (bindLen > 8)
        checkBindingNoChanges(view, nodeDef, 8, v8);
    if (bindLen > 9)
        checkBindingNoChanges(view, nodeDef, 9, v9);
}
function checkNoChangesNodeDynamic(view, nodeDef, values) {
    for (var i = 0; i < values.length; i++) {
        checkBindingNoChanges(view, nodeDef, i, values[i]);
    }
}
/**
 * Workaround https://github.com/angular/tsickle/issues/497
 * @suppress {misplacedTypeAnnotation}
 */
function checkNoChangesQuery(view, nodeDef) {
    var queryList = asQueryList(view, nodeDef.nodeIndex);
    if (queryList.dirty) {
        throw expressionChangedAfterItHasBeenCheckedError(Services.createDebugContext(view, nodeDef.nodeIndex), "Query " + nodeDef.query.id + " not dirty", "Query " + nodeDef.query.id + " dirty", (view.state & 1 /* BeforeFirstCheck */) !== 0);
    }
}
export function destroyView(view) {
    if (view.state & 128 /* Destroyed */) {
        return;
    }
    execEmbeddedViewsAction(view, ViewAction.Destroy);
    execComponentViewsAction(view, ViewAction.Destroy);
    callLifecycleHooksChildrenFirst(view, 131072 /* OnDestroy */);
    if (view.disposables) {
        for (var i = 0; i < view.disposables.length; i++) {
            view.disposables[i]();
        }
    }
    detachProjectedView(view);
    if (view.renderer.destroyNode) {
        destroyViewNodes(view);
    }
    if (isComponentView(view)) {
        view.renderer.destroy();
    }
    view.state |= 128 /* Destroyed */;
}
function destroyViewNodes(view) {
    var len = view.def.nodes.length;
    for (var i = 0; i < len; i++) {
        var def = view.def.nodes[i];
        if (def.flags & 1 /* TypeElement */) {
            view.renderer.destroyNode(asElementData(view, i).renderElement);
        }
        else if (def.flags & 2 /* TypeText */) {
            view.renderer.destroyNode(asTextData(view, i).renderText);
        }
        else if (def.flags & 67108864 /* TypeContentQuery */ || def.flags & 134217728 /* TypeViewQuery */) {
            asQueryList(view, i).destroy();
        }
    }
}
var ViewAction;
(function (ViewAction) {
    ViewAction[ViewAction["CreateViewNodes"] = 0] = "CreateViewNodes";
    ViewAction[ViewAction["CheckNoChanges"] = 1] = "CheckNoChanges";
    ViewAction[ViewAction["CheckNoChangesProjectedViews"] = 2] = "CheckNoChangesProjectedViews";
    ViewAction[ViewAction["CheckAndUpdate"] = 3] = "CheckAndUpdate";
    ViewAction[ViewAction["CheckAndUpdateProjectedViews"] = 4] = "CheckAndUpdateProjectedViews";
    ViewAction[ViewAction["Destroy"] = 5] = "Destroy";
})(ViewAction || (ViewAction = {}));
function execComponentViewsAction(view, action) {
    var def = view.def;
    if (!(def.nodeFlags & 33554432 /* ComponentView */)) {
        return;
    }
    for (var i = 0; i < def.nodes.length; i++) {
        var nodeDef = def.nodes[i];
        if (nodeDef.flags & 33554432 /* ComponentView */) {
            // a leaf
            callViewAction(asElementData(view, i).componentView, action);
        }
        else if ((nodeDef.childFlags & 33554432 /* ComponentView */) === 0) {
            // a parent with leafs
            // no child is a component,
            // then skip the children
            i += nodeDef.childCount;
        }
    }
}
function execEmbeddedViewsAction(view, action) {
    var def = view.def;
    if (!(def.nodeFlags & 16777216 /* EmbeddedViews */)) {
        return;
    }
    for (var i = 0; i < def.nodes.length; i++) {
        var nodeDef = def.nodes[i];
        if (nodeDef.flags & 16777216 /* EmbeddedViews */) {
            // a leaf
            var embeddedViews = asElementData(view, i).viewContainer._embeddedViews;
            for (var k = 0; k < embeddedViews.length; k++) {
                callViewAction(embeddedViews[k], action);
            }
        }
        else if ((nodeDef.childFlags & 16777216 /* EmbeddedViews */) === 0) {
            // a parent with leafs
            // no child is a component,
            // then skip the children
            i += nodeDef.childCount;
        }
    }
}
function callViewAction(view, action) {
    var viewState = view.state;
    switch (action) {
        case ViewAction.CheckNoChanges:
            if ((viewState & 128 /* Destroyed */) === 0) {
                if ((viewState & 12 /* CatDetectChanges */) === 12 /* CatDetectChanges */) {
                    checkNoChangesView(view);
                }
                else if (viewState & 64 /* CheckProjectedViews */) {
                    execProjectedViewsAction(view, ViewAction.CheckNoChangesProjectedViews);
                }
            }
            break;
        case ViewAction.CheckNoChangesProjectedViews:
            if ((viewState & 128 /* Destroyed */) === 0) {
                if (viewState & 32 /* CheckProjectedView */) {
                    checkNoChangesView(view);
                }
                else if (viewState & 64 /* CheckProjectedViews */) {
                    execProjectedViewsAction(view, action);
                }
            }
            break;
        case ViewAction.CheckAndUpdate:
            if ((viewState & 128 /* Destroyed */) === 0) {
                if ((viewState & 12 /* CatDetectChanges */) === 12 /* CatDetectChanges */) {
                    checkAndUpdateView(view);
                }
                else if (viewState & 64 /* CheckProjectedViews */) {
                    execProjectedViewsAction(view, ViewAction.CheckAndUpdateProjectedViews);
                }
            }
            break;
        case ViewAction.CheckAndUpdateProjectedViews:
            if ((viewState & 128 /* Destroyed */) === 0) {
                if (viewState & 32 /* CheckProjectedView */) {
                    checkAndUpdateView(view);
                }
                else if (viewState & 64 /* CheckProjectedViews */) {
                    execProjectedViewsAction(view, action);
                }
            }
            break;
        case ViewAction.Destroy:
            // Note: destroyView recurses over all views,
            // so we don't need to special case projected views here.
            destroyView(view);
            break;
        case ViewAction.CreateViewNodes:
            createViewNodes(view);
            break;
    }
}
function execProjectedViewsAction(view, action) {
    execEmbeddedViewsAction(view, action);
    execComponentViewsAction(view, action);
}
function execQueriesAction(view, queryFlags, staticDynamicQueryFlag, checkType) {
    if (!(view.def.nodeFlags & queryFlags) || !(view.def.nodeFlags & staticDynamicQueryFlag)) {
        return;
    }
    var nodeCount = view.def.nodes.length;
    for (var i = 0; i < nodeCount; i++) {
        var nodeDef = view.def.nodes[i];
        if ((nodeDef.flags & queryFlags) && (nodeDef.flags & staticDynamicQueryFlag)) {
            Services.setCurrentNode(view, nodeDef.nodeIndex);
            switch (checkType) {
                case 0 /* CheckAndUpdate */:
                    checkAndUpdateQuery(view, nodeDef);
                    break;
                case 1 /* CheckNoChanges */:
                    checkNoChangesQuery(view, nodeDef);
                    break;
            }
        }
        if (!(nodeDef.childFlags & queryFlags) || !(nodeDef.childFlags & staticDynamicQueryFlag)) {
            // no child has a matching query
            // then skip the children
            i += nodeDef.childCount;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3ZpZXcvdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFJSCxPQUFPLEVBQUMsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzNILE9BQU8sRUFBQywyQ0FBMkMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBQywrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUMvTCxPQUFPLEVBQUMsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoSSxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNuRSxPQUFPLEVBQUMseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZGLE9BQU8sRUFBZSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0YsUUFBUSxFQUFFLGNBQWMsRUFBa0YsTUFBTSxTQUFTLENBQUM7QUFDdFEsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxxQ0FBcUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3hJLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVsRCxNQUFNLFVB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R0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUMsRUFBRTtRQUN4RixPQUFPO0tBQ1I7SUFDRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUMsRUFBRTtZQUM1RSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakQsUUFBUSxTQUFTLEVBQUU7Z0JBQ2pCO29CQUNFLG1CQUFtQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDbkMsTUFBTTtnQkFDUjtvQkFDRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ25DLE1BQU07YUFDVDtTQUNGO1FBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxFQUFFO1lBQ3hGLGdDQUFnQztZQUNoQyx5QkFBeUI7WUFDekIsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDekI7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UmVuZGVyZXIyfSBmcm9tICcuLi9yZW5kZXIvYXBpJztcblxuaW1wb3J0IHtjaGVja0FuZFVwZGF0ZUVsZW1lbnREeW5hbWljLCBjaGVja0FuZFVwZGF0ZUVsZW1lbnRJbmxpbmUsIGNyZWF0ZUVsZW1lbnQsIGxpc3RlblRvRWxlbWVudE91dHB1dHN9IGZyb20gJy4vZWxlbWVudCc7XG5pbXBvcnQge2V4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXJyb3J9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7YXBwZW5kTmdDb250ZW50fSBmcm9tICcuL25nX2NvbnRlbnQnO1xuaW1wb3J0IHtjYWxsTGlmZWN5Y2xlSG9va3NDaGlsZHJlbkZpcnN0LCBjaGVja0FuZFVwZGF0ZURpcmVjdGl2ZUR5bmFtaWMsIGNoZWNrQW5kVXBkYXRlRGlyZWN0aXZlSW5saW5lLCBjcmVhdGVEaXJlY3RpdmVJbnN0YW5jZSwgY3JlYXRlUGlwZUluc3RhbmNlLCBjcmVhdGVQcm92aWRlckluc3RhbmNlfSBmcm9tICcuL3Byb3ZpZGVyJztcbmltcG9ydCB7Y2hlY2tBbmRVcGRhdGVQdXJlRXhwcmVzc2lvbkR5bmFtaWMsIGNoZWNrQW5kVXBkYXRlUHVyZUV4cHJlc3Npb25JbmxpbmUsIGNyZWF0ZVB1cmVFeHByZXNzaW9ufSBmcm9tICcuL3B1cmVfZXhwcmVzc2lvbic7XG5pbXBvcnQge2NoZWNrQW5kVXBkYXRlUXVlcnksIGNyZWF0ZVF1ZXJ5fSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB7Y3JlYXRlVGVtcGxhdGVEYXRhLCBjcmVhdGVWaWV3Q29udGFpbmVyRGF0YX0gZnJvbSAnLi9yZWZzJztcbmltcG9ydCB7Y2hlY2tBbmRVcGRhdGVUZXh0RHluYW1pYywgY2hlY2tBbmRVcGRhdGVUZXh0SW5saW5lLCBjcmVhdGVUZXh0fSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHtBcmd1bWVudFR5cGUsIGFzRWxlbWVudERhdGEsIGFzUXVlcnlMaXN0LCBhc1RleHREYXRhLCBDaGVja1R5cGUsIEVsZW1lbnREYXRhLCBOb2RlRGF0YSwgTm9kZURlZiwgTm9kZUZsYWdzLCBQcm92aWRlckRhdGEsIFJvb3REYXRhLCBTZXJ2aWNlcywgc2hpZnRJbml0U3RhdGUsIFZpZXdEYXRhLCBWaWV3RGVmaW5pdGlvbiwgVmlld0ZsYWdzLCBWaWV3SGFuZGxlRXZlbnRGbiwgVmlld1N0YXRlLCBWaWV3VXBkYXRlRm59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtjaGVja0JpbmRpbmdOb0NoYW5nZXMsIGlzQ29tcG9uZW50VmlldywgbWFya1BhcmVudFZpZXdzRm9yQ2hlY2tQcm9qZWN0ZWRWaWV3cywgTk9PUCwgcmVzb2x2ZURlZmluaXRpb24sIHRva2VuS2V5fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtkZXRhY2hQcm9qZWN0ZWRWaWV3fSBmcm9tICcuL3ZpZXdfYXR0YWNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdEZWYoXG4gICAgZmxhZ3M6IFZpZXdGbGFncywgbm9kZXM6IE5vZGVEZWZbXSwgdXBkYXRlRGlyZWN0aXZlcz86IG51bGx8Vmlld1VwZGF0ZUZuLFxuICAgIHVwZGF0ZVJlbmRlcmVyPzogbnVsbHxWaWV3VXBkYXRlRm4pOiBWaWV3RGVmaW5pdGlvbiB7XG4gIC8vIGNsb25lIG5vZGVzIGFuZCBzZXQgYXV0byBjYWxjdWxhdGVkIHZhbHVlc1xuICBsZXQgdmlld0JpbmRpbmdDb3VudCA9IDA7XG4gIGxldCB2aWV3RGlzcG9zYWJsZUNvdW50ID0gMDtcbiAgbGV0IHZpZXdOb2RlRmxhZ3MgPSAwO1xuICBsZXQgdmlld1Jvb3ROb2RlRmxhZ3MgPSAwO1xuICBsZXQgdmlld01hdGNoZWRRdWVyaWVzID0gMDtcbiAgbGV0IGN1cnJlbnRQYXJlbnQ6IE5vZGVEZWZ8bnVsbCA9IG51bGw7XG4gIGxldCBjdXJyZW50UmVuZGVyUGFyZW50OiBOb2RlRGVmfG51bGwgPSBudWxsO1xuICBsZXQgY3VycmVudEVsZW1lbnRIYXNQdWJsaWNQcm92aWRlcnMgPSBmYWxzZTtcbiAgbGV0IGN1cnJlbnRFbGVtZW50SGFzUHJpdmF0ZVByb3ZpZGVycyA9IGZhbHNlO1xuICBsZXQgbGFzdFJlbmRlclJvb3ROb2RlOiBOb2RlRGVmfG51bGwgPSBudWxsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGUubm9kZUluZGV4ID0gaTtcbiAgICBub2RlLnBhcmVudCA9IGN1cnJlbnRQYXJlbnQ7XG4gICAgbm9kZS5iaW5kaW5nSW5kZXggPSB2aWV3QmluZGluZ0NvdW50O1xuICAgIG5vZGUub3V0cHV0SW5kZXggPSB2aWV3RGlzcG9zYWJsZUNvdW50O1xuICAgIG5vZGUucmVuZGVyUGFyZW50ID0gY3VycmVudFJlbmRlclBhcmVudDtcblxuICAgIHZpZXdOb2RlRmxhZ3MgfD0gbm9kZS5mbGFncztcbiAgICB2aWV3TWF0Y2hlZFF1ZXJpZXMgfD0gbm9kZS5tYXRjaGVkUXVlcnlJZHM7XG5cbiAgICBpZiAobm9kZS5lbGVtZW50KSB7XG4gICAgICBjb25zdCBlbERlZiA9IG5vZGUuZWxlbWVudDtcbiAgICAgIGVsRGVmLnB1YmxpY1Byb3ZpZGVycyA9XG4gICAgICAgICAgY3VycmVudFBhcmVudCA/IGN1cnJlbnRQYXJlbnQuZWxlbWVudCEucHVibGljUHJvdmlkZXJzIDogT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGVsRGVmLmFsbFByb3ZpZGVycyA9IGVsRGVmLnB1YmxpY1Byb3ZpZGVycztcbiAgICAgIC8vIE5vdGU6IFdlIGFzc3VtZSB0aGF0IGFsbCBwcm92aWRlcnMgb2YgYW4gZWxlbWVudCBhcmUgYmVmb3JlIGFueSBjaGlsZCBlbGVtZW50IVxuICAgICAgY3VycmVudEVsZW1lbnRIYXNQdWJsaWNQcm92aWRlcnMgPSBmYWxzZTtcbiAgICAgIGN1cnJlbnRFbGVtZW50SGFzUHJpdmF0ZVByb3ZpZGVycyA9IGZhbHNlO1xuXG4gICAgICBpZiAobm9kZS5lbGVtZW50LnRlbXBsYXRlKSB7XG4gICAgICAgIHZpZXdNYXRjaGVkUXVlcmllcyB8PSBub2RlLmVsZW1lbnQudGVtcGxhdGUubm9kZU1hdGNoZWRRdWVyaWVzO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWxpZGF0ZU5vZGUoY3VycmVudFBhcmVudCwgbm9kZSwgbm9kZXMubGVuZ3RoKTtcblxuXG4gICAgdmlld0JpbmRpbmdDb3VudCArPSBub2RlLmJpbmRpbmdzLmxlbmd0aDtcbiAgICB2aWV3RGlzcG9zYWJsZUNvdW50ICs9IG5vZGUub3V0cHV0cy5sZW5ndGg7XG5cbiAgICBpZiAoIWN1cnJlbnRSZW5kZXJQYXJlbnQgJiYgKG5vZGUuZmxhZ3MgJiBOb2RlRmxhZ3MuQ2F0UmVuZGVyTm9kZSkpIHtcbiAgICAgIGxhc3RSZW5kZXJSb290Tm9kZSA9IG5vZGU7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuZmxhZ3MgJiBOb2RlRmxhZ3MuQ2F0UHJvdmlkZXIpIHtcbiAgICAgIGlmICghY3VycmVudEVsZW1lbnRIYXNQdWJsaWNQcm92aWRlcnMpIHtcbiAgICAgICAgY3VycmVudEVsZW1lbnRIYXNQdWJsaWNQcm92aWRlcnMgPSB0cnVlO1xuICAgICAgICAvLyBVc2UgcHJvdG90eXBpY2FsIGluaGVyaXRhbmNlIHRvIG5vdCBnZXQgTyhuXjIpIGNvbXBsZXhpdHkuLi5cbiAgICAgICAgY3VycmVudFBhcmVudCEuZWxlbWVudCEucHVibGljUHJvdmlkZXJzID1cbiAgICAgICAgICAgIE9iamVjdC5jcmVhdGUoY3VycmVudFBhcmVudCEuZWxlbWVudCEucHVibGljUHJvdmlkZXJzKTtcbiAgICAgICAgY3VycmVudFBhcmVudCEuZWxlbWVudCEuYWxsUHJvdmlkZXJzID0gY3VycmVudFBhcmVudCEuZWxlbWVudCEucHVibGljUHJvdmlkZXJzO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNQcml2YXRlU2VydmljZSA9IChub2RlLmZsYWdzICYgTm9kZUZsYWdzLlByaXZhdGVQcm92aWRlcikgIT09IDA7XG4gICAgICBjb25zdCBpc0NvbXBvbmVudCA9IChub2RlLmZsYWdzICYgTm9kZUZsYWdzLkNvbXBvbmVudCkgIT09IDA7XG4gICAgICBpZiAoIWlzUHJpdmF0ZVNlcnZpY2UgfHwgaXNDb21wb25lbnQpIHtcbiAgICAgICAgY3VycmVudFBhcmVudCEuZWxlbWVudCEucHVibGljUHJvdmlkZXJzIVt0b2tlbktleShub2RlLnByb3ZpZGVyIS50b2tlbildID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY3VycmVudEVsZW1lbnRIYXNQcml2YXRlUHJvdmlkZXJzKSB7XG4gICAgICAgICAgY3VycmVudEVsZW1lbnRIYXNQcml2YXRlUHJvdmlkZXJzID0gdHJ1ZTtcbiAgICAgICAgICAvLyBVc2UgcHJvdG90eXBpY2FsIGluaGVyaXRhbmNlIHRvIG5vdCBnZXQgTyhuXjIpIGNvbXBsZXhpdHkuLi5cbiAgICAgICAgICBjdXJyZW50UGFyZW50IS5lbGVtZW50IS5hbGxQcm92aWRlcnMgPVxuICAgICAgICAgICAgICBPYmplY3QuY3JlYXRlKGN1cnJlbnRQYXJlbnQhLmVsZW1lbnQhLnB1YmxpY1Byb3ZpZGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFBhcmVudCEuZWxlbWVudCEuYWxsUHJvdmlkZXJzIVt0b2tlbktleShub2RlLnByb3ZpZGVyIS50b2tlbildID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0NvbXBvbmVudCkge1xuICAgICAgICBjdXJyZW50UGFyZW50IS5lbGVtZW50IS5jb21wb25lbnRQcm92aWRlciA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYXJlbnQpIHtcbiAgICAgIGN1cnJlbnRQYXJlbnQuY2hpbGRGbGFncyB8PSBub2RlLmZsYWdzO1xuICAgICAgY3VycmVudFBhcmVudC5kaXJlY3RDaGlsZEZsYWdzIHw9IG5vZGUuZmxhZ3M7XG4gICAgICBjdXJyZW50UGFyZW50LmNoaWxkTWF0Y2hlZFF1ZXJpZXMgfD0gbm9kZS5tYXRjaGVkUXVlcnlJZHM7XG4gICAgICBpZiAobm9kZS5lbGVtZW50ICYmIG5vZGUuZWxlbWVudC50ZW1wbGF0ZSkge1xuICAgICAgICBjdXJyZW50UGFyZW50LmNoaWxkTWF0Y2hlZFF1ZXJpZXMgfD0gbm9kZS5lbGVtZW50LnRlbXBsYXRlLm5vZGVNYXRjaGVkUXVlcmllcztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmlld1Jvb3ROb2RlRmxhZ3MgfD0gbm9kZS5mbGFncztcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jaGlsZENvdW50ID4gMCkge1xuICAgICAgY3VycmVudFBhcmVudCA9IG5vZGU7XG5cbiAgICAgIGlmICghaXNOZ0NvbnRhaW5lcihub2RlKSkge1xuICAgICAgICBjdXJyZW50UmVuZGVyUGFyZW50ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2hlbiB0aGUgY3VycmVudCBub2RlIGhhcyBubyBjaGlsZHJlbiwgY2hlY2sgaWYgaXQgaXMgdGhlIGxhc3QgY2hpbGRyZW4gb2YgaXRzIHBhcmVudC5cbiAgICAgIC8vIFdoZW4gaXQgaXMsIHByb3BhZ2F0ZSB0aGUgZmxhZ3MgdXAuXG4gICAgICAvLyBUaGUgbG9vcCBpcyByZXF1aXJlZCBiZWNhdXNlIGFuIGVsZW1lbnQgY291bGQgYmUgdGhlIGxhc3QgdHJhbnNpdGl2ZSBjaGlsZHJlbiBvZiBzZXZlcmFsXG4gICAgICAvLyBlbGVtZW50cy4gV2UgbG9vcCB0byBlaXRoZXIgdGhlIHJvb3Qgb3IgdGhlIGhpZ2hlc3Qgb3BlbmVkIGVsZW1lbnQgKD0gd2l0aCByZW1haW5pbmdcbiAgICAgIC8vIGNoaWxkcmVuKVxuICAgICAgd2hpbGUgKGN1cnJlbnRQYXJlbnQgJiYgaSA9PT0gY3VycmVudFBhcmVudC5ub2RlSW5kZXggKyBjdXJyZW50UGFyZW50LmNoaWxkQ291bnQpIHtcbiAgICAgICAgY29uc3QgbmV3UGFyZW50OiBOb2RlRGVmfG51bGwgPSBjdXJyZW50UGFyZW50LnBhcmVudDtcbiAgICAgICAgaWYgKG5ld1BhcmVudCkge1xuICAgICAgICAgIG5ld1BhcmVudC5jaGlsZEZsYWdzIHw9IGN1cnJlbnRQYXJlbnQuY2hpbGRGbGFncztcbiAgICAgICAgICBuZXdQYXJlbnQuY2hpbGRNYXRjaGVkUXVlcmllcyB8PSBjdXJyZW50UGFyZW50LmNoaWxkTWF0Y2hlZFF1ZXJpZXM7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFBhcmVudCA9IG5ld1BhcmVudDtcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHVwZGF0ZSB0aGUgcmVuZGVyIHBhcmVudCAmIGFjY291bnQgZm9yIG5nLWNvbnRhaW5lclxuICAgICAgICBpZiAoY3VycmVudFBhcmVudCAmJiBpc05nQ29udGFpbmVyKGN1cnJlbnRQYXJlbnQpKSB7XG4gICAgICAgICAgY3VycmVudFJlbmRlclBhcmVudCA9IGN1cnJlbnRQYXJlbnQucmVuZGVyUGFyZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRSZW5kZXJQYXJlbnQgPSBjdXJyZW50UGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRXZlbnQ6IFZpZXdIYW5kbGVFdmVudEZuID0gKHZpZXcsIG5vZGVJbmRleCwgZXZlbnROYW1lLCBldmVudCkgPT5cbiAgICAgIG5vZGVzW25vZGVJbmRleF0uZWxlbWVudCEuaGFuZGxlRXZlbnQhKHZpZXcsIGV2ZW50TmFtZSwgZXZlbnQpO1xuXG4gIHJldHVybiB7XG4gICAgLy8gV2lsbCBiZSBmaWxsZWQgbGF0ZXIuLi5cbiAgICBmYWN0b3J5OiBudWxsLFxuICAgIG5vZGVGbGFnczogdmlld05vZGVGbGFncyxcbiAgICByb290Tm9kZUZsYWdzOiB2aWV3Um9vdE5vZGVGbGFncyxcbiAgICBub2RlTWF0Y2hlZFF1ZXJpZXM6IHZpZXdNYXRjaGVkUXVlcmllcyxcbiAgICBmbGFncyxcbiAgICBub2Rlczogbm9kZXMsXG4gICAgdXBkYXRlRGlyZWN0aXZlczogdXBkYXRlRGlyZWN0aXZlcyB8fCBOT09QLFxuICAgIHVwZGF0ZVJlbmRlcmVyOiB1cGRhdGVSZW5kZXJlciB8fCBOT09QLFxuICAgIGhhbmRsZUV2ZW50LFxuICAgIGJpbmRpbmdDb3VudDogdmlld0JpbmRpbmdDb3VudCxcbiAgICBvdXRwdXRDb3VudDogdmlld0Rpc3Bvc2FibGVDb3VudCxcbiAgICBsYXN0UmVuZGVyUm9vdE5vZGVcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNOZ0NvbnRhaW5lcihub2RlOiBOb2RlRGVmKTogYm9vbGVhbiB7XG4gIHJldHVybiAobm9kZS5mbGFncyAmIE5vZGVGbGFncy5UeXBlRWxlbWVudCkgIT09IDAgJiYgbm9kZS5lbGVtZW50IS5uYW1lID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU5vZGUocGFyZW50OiBOb2RlRGVmfG51bGwsIG5vZGU6IE5vZGVEZWYsIG5vZGVDb3VudDogbnVtYmVyKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gbm9kZS5lbGVtZW50ICYmIG5vZGUuZWxlbWVudC50ZW1wbGF0ZTtcbiAgaWYgKHRlbXBsYXRlKSB7XG4gICAgaWYgKCF0ZW1wbGF0ZS5sYXN0UmVuZGVyUm9vdE5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBTdGF0ZTogRW1iZWRkZWQgdGVtcGxhdGVzIHdpdGhvdXQgbm9kZXMgYXJlIG5vdCBhbGxvd2VkIWApO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGUubGFzdFJlbmRlclJvb3ROb2RlICYmXG4gICAgICAgIHRlbXBsYXRlLmxhc3RSZW5kZXJSb290Tm9kZS5mbGFncyAmIE5vZGVGbGFncy5FbWJlZGRlZFZpZXdzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYElsbGVnYWwgU3RhdGU6IExhc3Qgcm9vdCBub2RlIG9mIGEgdGVtcGxhdGUgY2FuJ3QgaGF2ZSBlbWJlZGRlZCB2aWV3cywgYXQgaW5kZXggJHtcbiAgICAgICAgICAgICAgbm9kZS5ub2RlSW5kZXh9IWApO1xuICAgIH1cbiAgfVxuICBpZiAobm9kZS5mbGFncyAmIE5vZGVGbGFncy5DYXRQcm92aWRlcikge1xuICAgIGNvbnN0IHBhcmVudEZsYWdzID0gcGFyZW50ID8gcGFyZW50LmZsYWdzIDogMDtcbiAgICBpZiAoKHBhcmVudEZsYWdzICYgTm9kZUZsYWdzLlR5cGVFbGVtZW50KSA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbGxlZ2FsIFN0YXRlOiBTdGF0aWNQcm92aWRlci9EaXJlY3RpdmUgbm9kZXMgbmVlZCB0byBiZSBjaGlsZHJlbiBvZiBlbGVtZW50cyBvciBhbmNob3JzLCBhdCBpbmRleCAke1xuICAgICAgICAgICAgICBub2RlLm5vZGVJbmRleH0hYCk7XG4gICAgfVxuICB9XG4gIGlmIChub2RlLnF1ZXJ5KSB7XG4gICAgaWYgKG5vZGUuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZUNvbnRlbnRRdWVyeSAmJlxuICAgICAgICAoIXBhcmVudCB8fCAocGFyZW50LmZsYWdzICYgTm9kZUZsYWdzLlR5cGVEaXJlY3RpdmUpID09PSAwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbGxlZ2FsIFN0YXRlOiBDb250ZW50IFF1ZXJ5IG5vZGVzIG5lZWQgdG8gYmUgY2hpbGRyZW4gb2YgZGlyZWN0aXZlcywgYXQgaW5kZXggJHtcbiAgICAgICAgICAgICAgbm9kZS5ub2RlSW5kZXh9IWApO1xuICAgIH1cbiAgICBpZiAobm9kZS5mbGFncyAmIE5vZGVGbGFncy5UeXBlVmlld1F1ZXJ5ICYmIHBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIFN0YXRlOiBWaWV3IFF1ZXJ5IG5vZGVzIGhhdmUgdG8gYmUgdG9wIGxldmVsIG5vZGVzLCBhdCBpbmRleCAke1xuICAgICAgICAgIG5vZGUubm9kZUluZGV4fSFgKTtcbiAgICB9XG4gIH1cbiAgaWYgKG5vZGUuY2hpbGRDb3VudCkge1xuICAgIGNvbnN0IHBhcmVudEVuZCA9IHBhcmVudCA/IHBhcmVudC5ub2RlSW5kZXggKyBwYXJlbnQuY2hpbGRDb3VudCA6IG5vZGVDb3VudCAtIDE7XG4gICAgaWYgKG5vZGUubm9kZUluZGV4IDw9IHBhcmVudEVuZCAmJiBub2RlLm5vZGVJbmRleCArIG5vZGUuY2hpbGRDb3VudCA+IHBhcmVudEVuZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbGxlZ2FsIFN0YXRlOiBjaGlsZENvdW50IG9mIG5vZGUgbGVhZHMgb3V0c2lkZSBvZiBwYXJlbnQsIGF0IGluZGV4ICR7bm9kZS5ub2RlSW5kZXh9IWApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgIHBhcmVudDogVmlld0RhdGEsIGFuY2hvckRlZjogTm9kZURlZiwgdmlld0RlZjogVmlld0RlZmluaXRpb24sIGNvbnRleHQ/OiBhbnkpOiBWaWV3RGF0YSB7XG4gIC8vIGVtYmVkZGVkIHZpZXdzIGFyZSBzZWVuIGFzIHNpYmxpbmdzIHRvIHRoZSBhbmNob3IsIHNvIHdlIG5lZWRcbiAgLy8gdG8gZ2V0IHRoZSBwYXJlbnQgb2YgdGhlIGFuY2hvciBhbmQgdXNlIGl0IGFzIHBhcmVudEluZGV4LlxuICBjb25zdCB2aWV3ID0gY3JlYXRlVmlldyhwYXJlbnQucm9vdCwgcGFyZW50LnJlbmRlcmVyLCBwYXJlbnQsIGFuY2hvckRlZiwgdmlld0RlZik7XG4gIGluaXRWaWV3KHZpZXcsIHBhcmVudC5jb21wb25lbnQsIGNvbnRleHQpO1xuICBjcmVhdGVWaWV3Tm9kZXModmlldyk7XG4gIHJldHVybiB2aWV3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm9vdFZpZXcocm9vdDogUm9vdERhdGEsIGRlZjogVmlld0RlZmluaXRpb24sIGNvbnRleHQ/OiBhbnkpOiBWaWV3RGF0YSB7XG4gIGNvbnN0IHZpZXcgPSBjcmVhdGVWaWV3KHJvb3QsIHJvb3QucmVuZGVyZXIsIG51bGwsIG51bGwsIGRlZik7XG4gIGluaXRWaWV3KHZpZXcsIGNvbnRleHQsIGNvbnRleHQpO1xuICBjcmVhdGVWaWV3Tm9kZXModmlldyk7XG4gIHJldHVybiB2aWV3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50VmlldyhcbiAgICBwYXJlbnRWaWV3OiBWaWV3RGF0YSwgbm9kZURlZjogTm9kZURlZiwgdmlld0RlZjogVmlld0RlZmluaXRpb24sIGhvc3RFbGVtZW50OiBhbnkpOiBWaWV3RGF0YSB7XG4gIGNvbnN0IHJlbmRlcmVyVHlwZSA9IG5vZGVEZWYuZWxlbWVudCEuY29tcG9uZW50UmVuZGVyZXJUeXBlO1xuICBsZXQgY29tcFJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIGlmICghcmVuZGVyZXJUeXBlKSB7XG4gICAgY29tcFJlbmRlcmVyID0gcGFyZW50Vmlldy5yb290LnJlbmRlcmVyO1xuICB9IGVsc2Uge1xuICAgIGNvbXBSZW5kZXJlciA9IHBhcmVudFZpZXcucm9vdC5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIoaG9zdEVsZW1lbnQsIHJlbmRlcmVyVHlwZSk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVZpZXcoXG4gICAgICBwYXJlbnRWaWV3LnJvb3QsIGNvbXBSZW5kZXJlciwgcGFyZW50Vmlldywgbm9kZURlZi5lbGVtZW50IS5jb21wb25lbnRQcm92aWRlciwgdmlld0RlZik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXcoXG4gICAgcm9vdDogUm9vdERhdGEsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHBhcmVudDogVmlld0RhdGF8bnVsbCwgcGFyZW50Tm9kZURlZjogTm9kZURlZnxudWxsLFxuICAgIGRlZjogVmlld0RlZmluaXRpb24pOiBWaWV3RGF0YSB7XG4gIGNvbnN0IG5vZGVzOiBOb2RlRGF0YVtdID0gbmV3IEFycmF5KGRlZi5ub2Rlcy5sZW5ndGgpO1xuICBjb25zdCBkaXNwb3NhYmxlcyA9IGRlZi5vdXRwdXRDb3VudCA/IG5ldyBBcnJheShkZWYub3V0cHV0Q291bnQpIDogbnVsbDtcbiAgY29uc3QgdmlldzogVmlld0RhdGEgPSB7XG4gICAgZGVmLFxuICAgIHBhcmVudCxcbiAgICB2aWV3Q29udGFpbmVyUGFyZW50OiBudWxsLFxuICAgIHBhcmVudE5vZGVEZWYsXG4gICAgY29udGV4dDogbnVsbCxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgbm9kZXMsXG4gICAgc3RhdGU6IFZpZXdTdGF0ZS5DYXRJbml0LFxuICAgIHJvb3QsXG4gICAgcmVuZGVyZXIsXG4gICAgb2xkVmFsdWVzOiBuZXcgQXJyYXkoZGVmLmJpbmRpbmdDb3VudCksXG4gICAgZGlzcG9zYWJsZXMsXG4gICAgaW5pdEluZGV4OiAtMVxuICB9O1xuICByZXR1cm4gdmlldztcbn1cblxuZnVuY3Rpb24gaW5pdFZpZXcodmlldzogVmlld0RhdGEsIGNvbXBvbmVudDogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgdmlldy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIHZpZXcuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdOb2Rlcyh2aWV3OiBWaWV3RGF0YSkge1xuICBsZXQgcmVuZGVySG9zdDogYW55O1xuICBpZiAoaXNDb21wb25lbnRWaWV3KHZpZXcpKSB7XG4gICAgY29uc3QgaG9zdERlZiA9IHZpZXcucGFyZW50Tm9kZURlZjtcbiAgICByZW5kZXJIb3N0ID0gYXNFbGVtZW50RGF0YSh2aWV3LnBhcmVudCEsIGhvc3REZWYhLnBhcmVudCEubm9kZUluZGV4KS5yZW5kZXJFbGVtZW50O1xuICB9XG4gIGNvbnN0IGRlZiA9IHZpZXcuZGVmO1xuICBjb25zdCBub2RlcyA9IHZpZXcubm9kZXM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZURlZiA9IGRlZi5ub2Rlc1tpXTtcbiAgICBTZXJ2aWNlcy5zZXRDdXJyZW50Tm9kZSh2aWV3LCBpKTtcbiAgICBsZXQgbm9kZURhdGE6IGFueTtcbiAgICBzd2l0Y2ggKG5vZGVEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZXMpIHtcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVFbGVtZW50OlxuICAgICAgICBjb25zdCBlbCA9IGNyZWF0ZUVsZW1lbnQodmlldywgcmVuZGVySG9zdCwgbm9kZURlZikgYXMgYW55O1xuICAgICAgICBsZXQgY29tcG9uZW50VmlldzogVmlld0RhdGEgPSB1bmRlZmluZWQhO1xuICAgICAgICBpZiAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5Db21wb25lbnRWaWV3KSB7XG4gICAgICAgICAgY29uc3QgY29tcFZpZXdEZWYgPSByZXNvbHZlRGVmaW5pdGlvbihub2RlRGVmLmVsZW1lbnQhLmNvbXBvbmVudFZpZXchKTtcbiAgICAgICAgICBjb21wb25lbnRWaWV3ID0gU2VydmljZXMuY3JlYXRlQ29tcG9uZW50Vmlldyh2aWV3LCBub2RlRGVmLCBjb21wVmlld0RlZiwgZWwpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RlblRvRWxlbWVudE91dHB1dHModmlldywgY29tcG9uZW50Vmlldywgbm9kZURlZiwgZWwpO1xuICAgICAgICBub2RlRGF0YSA9IDxFbGVtZW50RGF0YT57XG4gICAgICAgICAgcmVuZGVyRWxlbWVudDogZWwsXG4gICAgICAgICAgY29tcG9uZW50VmlldyxcbiAgICAgICAgICB2aWV3Q29udGFpbmVyOiBudWxsLFxuICAgICAgICAgIHRlbXBsYXRlOiBub2RlRGVmLmVsZW1lbnQhLnRlbXBsYXRlID8gY3JlYXRlVGVtcGxhdGVEYXRhKHZpZXcsIG5vZGVEZWYpIDogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgICAgIGlmIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLkVtYmVkZGVkVmlld3MpIHtcbiAgICAgICAgICBub2RlRGF0YS52aWV3Q29udGFpbmVyID0gY3JlYXRlVmlld0NvbnRhaW5lckRhdGEodmlldywgbm9kZURlZiwgbm9kZURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVRleHQ6XG4gICAgICAgIG5vZGVEYXRhID0gY3JlYXRlVGV4dCh2aWV3LCByZW5kZXJIb3N0LCBub2RlRGVmKSBhcyBhbnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZUNsYXNzUHJvdmlkZXI6XG4gICAgICBjYXNlIE5vZGVGbGFncy5UeXBlRmFjdG9yeVByb3ZpZGVyOlxuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVVzZUV4aXN0aW5nUHJvdmlkZXI6XG4gICAgICBjYXNlIE5vZGVGbGFncy5UeXBlVmFsdWVQcm92aWRlcjoge1xuICAgICAgICBub2RlRGF0YSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAoIW5vZGVEYXRhICYmICEobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5MYXp5UHJvdmlkZXIpKSB7XG4gICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBjcmVhdGVQcm92aWRlckluc3RhbmNlKHZpZXcsIG5vZGVEZWYpO1xuICAgICAgICAgIG5vZGVEYXRhID0gPFByb3ZpZGVyRGF0YT57aW5zdGFuY2V9O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVBpcGU6IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBjcmVhdGVQaXBlSW5zdGFuY2Uodmlldywgbm9kZURlZik7XG4gICAgICAgIG5vZGVEYXRhID0gPFByb3ZpZGVyRGF0YT57aW5zdGFuY2V9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVEaXJlY3RpdmU6IHtcbiAgICAgICAgbm9kZURhdGEgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKCFub2RlRGF0YSkge1xuICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gY3JlYXRlRGlyZWN0aXZlSW5zdGFuY2Uodmlldywgbm9kZURlZik7XG4gICAgICAgICAgbm9kZURhdGEgPSA8UHJvdmlkZXJEYXRhPntpbnN0YW5jZX07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGVEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuQ29tcG9uZW50KSB7XG4gICAgICAgICAgY29uc3QgY29tcFZpZXcgPSBhc0VsZW1lbnREYXRhKHZpZXcsIG5vZGVEZWYucGFyZW50IS5ub2RlSW5kZXgpLmNvbXBvbmVudFZpZXc7XG4gICAgICAgICAgaW5pdFZpZXcoY29tcFZpZXcsIG5vZGVEYXRhLmluc3RhbmNlLCBub2RlRGF0YS5pbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVGbGFncy5UeXBlUHVyZUFycmF5OlxuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVB1cmVPYmplY3Q6XG4gICAgICBjYXNlIE5vZGVGbGFncy5UeXBlUHVyZVBpcGU6XG4gICAgICAgIG5vZGVEYXRhID0gY3JlYXRlUHVyZUV4cHJlc3Npb24odmlldywgbm9kZURlZikgYXMgYW55O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVDb250ZW50UXVlcnk6XG4gICAgICBjYXNlIE5vZGVGbGFncy5UeXBlVmlld1F1ZXJ5OlxuICAgICAgICBub2RlRGF0YSA9IGNyZWF0ZVF1ZXJ5KCkgYXMgYW55O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVOZ0NvbnRlbnQ6XG4gICAgICAgIGFwcGVuZE5nQ29udGVudCh2aWV3LCByZW5kZXJIb3N0LCBub2RlRGVmKTtcbiAgICAgICAgLy8gbm8gcnVudGltZSBkYXRhIG5lZWRlZCBmb3IgTmdDb250ZW50Li4uXG4gICAgICAgIG5vZGVEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbm9kZXNbaV0gPSBub2RlRGF0YTtcbiAgfVxuICAvLyBDcmVhdGUgdGhlIFZpZXdEYXRhLm5vZGVzIG9mIGNvbXBvbmVudCB2aWV3cyBhZnRlciB3ZSBjcmVhdGVkIGV2ZXJ5dGhpbmcgZWxzZSxcbiAgLy8gc28gdGhhdCBlLmcuIG5nLWNvbnRlbnQgd29ya3NcbiAgZXhlY0NvbXBvbmVudFZpZXdzQWN0aW9uKHZpZXcsIFZpZXdBY3Rpb24uQ3JlYXRlVmlld05vZGVzKTtcblxuICAvLyBmaWxsIHN0YXRpYyBjb250ZW50IGFuZCB2aWV3IHF1ZXJpZXNcbiAgZXhlY1F1ZXJpZXNBY3Rpb24oXG4gICAgICB2aWV3LCBOb2RlRmxhZ3MuVHlwZUNvbnRlbnRRdWVyeSB8IE5vZGVGbGFncy5UeXBlVmlld1F1ZXJ5LCBOb2RlRmxhZ3MuU3RhdGljUXVlcnksXG4gICAgICBDaGVja1R5cGUuQ2hlY2tBbmRVcGRhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb0NoYW5nZXNWaWV3KHZpZXc6IFZpZXdEYXRhKSB7XG4gIG1hcmtQcm9qZWN0ZWRWaWV3c0ZvckNoZWNrKHZpZXcpO1xuICBTZXJ2aWNlcy51cGRhdGVEaXJlY3RpdmVzKHZpZXcsIENoZWNrVHlwZS5DaGVja05vQ2hhbmdlcyk7XG4gIGV4ZWNFbWJlZGRlZFZpZXdzQWN0aW9uKHZpZXcsIFZpZXdBY3Rpb24uQ2hlY2tOb0NoYW5nZXMpO1xuICBTZXJ2aWNlcy51cGRhdGVSZW5kZXJlcih2aWV3LCBDaGVja1R5cGUuQ2hlY2tOb0NoYW5nZXMpO1xuICBleGVjQ29tcG9uZW50Vmlld3NBY3Rpb24odmlldywgVmlld0FjdGlvbi5DaGVja05vQ2hhbmdlcyk7XG4gIC8vIE5vdGU6IFdlIGRvbid0IGNoZWNrIHF1ZXJpZXMgZm9yIGNoYW5nZXMgYXMgd2UgZGlkbid0IGRvIHRoaXMgaW4gdjIueC5cbiAgLy8gVE9ETyh0Ym9zY2gpOiBpbnZlc3RpZ2F0ZSBpZiB3ZSBjYW4gZW5hYmxlIHRoZSBjaGVjayBhZ2FpbiBpbiB2NS54IHdpdGggYSBuaWNlciBlcnJvciBtZXNzYWdlLlxuICB2aWV3LnN0YXRlICY9IH4oVmlld1N0YXRlLkNoZWNrUHJvamVjdGVkVmlld3MgfCBWaWV3U3RhdGUuQ2hlY2tQcm9qZWN0ZWRWaWV3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQW5kVXBkYXRlVmlldyh2aWV3OiBWaWV3RGF0YSkge1xuICBpZiAodmlldy5zdGF0ZSAmIFZpZXdTdGF0ZS5CZWZvcmVGaXJzdENoZWNrKSB7XG4gICAgdmlldy5zdGF0ZSAmPSB+Vmlld1N0YXRlLkJlZm9yZUZpcnN0Q2hlY2s7XG4gICAgdmlldy5zdGF0ZSB8PSBWaWV3U3RhdGUuRmlyc3RDaGVjaztcbiAgfSBlbHNlIHtcbiAgICB2aWV3LnN0YXRlICY9IH5WaWV3U3RhdGUuRmlyc3RDaGVjaztcbiAgfVxuICBzaGlmdEluaXRTdGF0ZSh2aWV3LCBWaWV3U3RhdGUuSW5pdFN0YXRlX0JlZm9yZUluaXQsIFZpZXdTdGF0ZS5Jbml0U3RhdGVfQ2FsbGluZ09uSW5pdCk7XG4gIG1hcmtQcm9qZWN0ZWRWaWV3c0ZvckNoZWNrKHZpZXcpO1xuICBTZXJ2aWNlcy51cGRhdGVEaXJlY3RpdmVzKHZpZXcsIENoZWNrVHlwZS5DaGVja0FuZFVwZGF0ZSk7XG4gIGV4ZWNFbWJlZGRlZFZpZXdzQWN0aW9uKHZpZXcsIFZpZXdBY3Rpb24uQ2hlY2tBbmRVcGRhdGUpO1xuICBleGVjUXVlcmllc0FjdGlvbihcbiAgICAgIHZpZXcsIE5vZGVGbGFncy5UeXBlQ29udGVudFF1ZXJ5LCBOb2RlRmxhZ3MuRHluYW1pY1F1ZXJ5LCBDaGVja1R5cGUuQ2hlY2tBbmRVcGRhdGUpO1xuICBsZXQgY2FsbEluaXQgPSBzaGlmdEluaXRTdGF0ZShcbiAgICAgIHZpZXcsIFZpZXdTdGF0ZS5Jbml0U3RhdGVfQ2FsbGluZ09uSW5pdCwgVmlld1N0YXRlLkluaXRTdGF0ZV9DYWxsaW5nQWZ0ZXJDb250ZW50SW5pdCk7XG4gIGNhbGxMaWZlY3ljbGVIb29rc0NoaWxkcmVuRmlyc3QoXG4gICAgICB2aWV3LCBOb2RlRmxhZ3MuQWZ0ZXJDb250ZW50Q2hlY2tlZCB8IChjYWxsSW5pdCA/IE5vZGVGbGFncy5BZnRlckNvbnRlbnRJbml0IDogMCkpO1xuXG4gIFNlcnZpY2VzLnVwZGF0ZVJlbmRlcmVyKHZpZXcsIENoZWNrVHlwZS5DaGVja0FuZFVwZGF0ZSk7XG5cbiAgZXhlY0NvbXBvbmVudFZpZXdzQWN0aW9uKHZpZXcsIFZpZXdBY3Rpb24uQ2hlY2tBbmRVcGRhdGUpO1xuICBleGVjUXVlcmllc0FjdGlvbihcbiAgICAgIHZpZXcsIE5vZGVGbGFncy5UeXBlVmlld1F1ZXJ5LCBOb2RlRmxhZ3MuRHluYW1pY1F1ZXJ5LCBDaGVja1R5cGUuQ2hlY2tBbmRVcGRhdGUpO1xuICBjYWxsSW5pdCA9IHNoaWZ0SW5pdFN0YXRlKFxuICAgICAgdmlldywgVmlld1N0YXRlLkluaXRTdGF0ZV9DYWxsaW5nQWZ0ZXJDb250ZW50SW5pdCwgVmlld1N0YXRlLkluaXRTdGF0ZV9DYWxsaW5nQWZ0ZXJWaWV3SW5pdCk7XG4gIGNhbGxMaWZlY3ljbGVIb29rc0NoaWxkcmVuRmlyc3QoXG4gICAgICB2aWV3LCBOb2RlRmxhZ3MuQWZ0ZXJWaWV3Q2hlY2tlZCB8IChjYWxsSW5pdCA/IE5vZGVGbGFncy5BZnRlclZpZXdJbml0IDogMCkpO1xuXG4gIGlmICh2aWV3LmRlZi5mbGFncyAmIFZpZXdGbGFncy5PblB1c2gpIHtcbiAgICB2aWV3LnN0YXRlICY9IH5WaWV3U3RhdGUuQ2hlY2tzRW5hYmxlZDtcbiAgfVxuICB2aWV3LnN0YXRlICY9IH4oVmlld1N0YXRlLkNoZWNrUHJvamVjdGVkVmlld3MgfCBWaWV3U3RhdGUuQ2hlY2tQcm9qZWN0ZWRWaWV3KTtcbiAgc2hpZnRJbml0U3RhdGUodmlldywgVmlld1N0YXRlLkluaXRTdGF0ZV9DYWxsaW5nQWZ0ZXJWaWV3SW5pdCwgVmlld1N0YXRlLkluaXRTdGF0ZV9BZnRlckluaXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBbmRVcGRhdGVOb2RlKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBub2RlRGVmOiBOb2RlRGVmLCBhcmdTdHlsZTogQXJndW1lbnRUeXBlLCB2MD86IGFueSwgdjE/OiBhbnksIHYyPzogYW55LFxuICAgIHYzPzogYW55LCB2ND86IGFueSwgdjU/OiBhbnksIHY2PzogYW55LCB2Nz86IGFueSwgdjg/OiBhbnksIHY5PzogYW55KTogYm9vbGVhbiB7XG4gIGlmIChhcmdTdHlsZSA9PT0gQXJndW1lbnRUeXBlLklubGluZSkge1xuICAgIHJldHVybiBjaGVja0FuZFVwZGF0ZU5vZGVJbmxpbmUodmlldywgbm9kZURlZiwgdjAsIHYxLCB2MiwgdjMsIHY0LCB2NSwgdjYsIHY3LCB2OCwgdjkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjaGVja0FuZFVwZGF0ZU5vZGVEeW5hbWljKHZpZXcsIG5vZGVEZWYsIHYwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrUHJvamVjdGVkVmlld3NGb3JDaGVjayh2aWV3OiBWaWV3RGF0YSkge1xuICBjb25zdCBkZWYgPSB2aWV3LmRlZjtcbiAgaWYgKCEoZGVmLm5vZGVGbGFncyAmIE5vZGVGbGFncy5Qcm9qZWN0ZWRUZW1wbGF0ZSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWYubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlRGVmID0gZGVmLm5vZGVzW2ldO1xuICAgIGlmIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLlByb2plY3RlZFRlbXBsYXRlKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ZWRWaWV3cyA9IGFzRWxlbWVudERhdGEodmlldywgaSkudGVtcGxhdGUuX3Byb2plY3RlZFZpZXdzO1xuICAgICAgaWYgKHByb2plY3RlZFZpZXdzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdGVkVmlld3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBwcm9qZWN0ZWRWaWV3ID0gcHJvamVjdGVkVmlld3NbaV07XG4gICAgICAgICAgcHJvamVjdGVkVmlldy5zdGF0ZSB8PSBWaWV3U3RhdGUuQ2hlY2tQcm9qZWN0ZWRWaWV3O1xuICAgICAgICAgIG1hcmtQYXJlbnRWaWV3c0ZvckNoZWNrUHJvamVjdGVkVmlld3MocHJvamVjdGVkVmlldywgdmlldyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChub2RlRGVmLmNoaWxkRmxhZ3MgJiBOb2RlRmxhZ3MuUHJvamVjdGVkVGVtcGxhdGUpID09PSAwKSB7XG4gICAgICAvLyBhIHBhcmVudCB3aXRoIGxlYWZzXG4gICAgICAvLyBubyBjaGlsZCBpcyBhIGNvbXBvbmVudCxcbiAgICAgIC8vIHRoZW4gc2tpcCB0aGUgY2hpbGRyZW5cbiAgICAgIGkgKz0gbm9kZURlZi5jaGlsZENvdW50O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0FuZFVwZGF0ZU5vZGVJbmxpbmUoXG4gICAgdmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYsIHYwPzogYW55LCB2MT86IGFueSwgdjI/OiBhbnksIHYzPzogYW55LCB2ND86IGFueSwgdjU/OiBhbnksXG4gICAgdjY/OiBhbnksIHY3PzogYW55LCB2OD86IGFueSwgdjk/OiBhbnkpOiBib29sZWFuIHtcbiAgc3dpdGNoIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVzKSB7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZUVsZW1lbnQ6XG4gICAgICByZXR1cm4gY2hlY2tBbmRVcGRhdGVFbGVtZW50SW5saW5lKHZpZXcsIG5vZGVEZWYsIHYwLCB2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2NywgdjgsIHY5KTtcbiAgICBjYXNlIE5vZGVGbGFncy5UeXBlVGV4dDpcbiAgICAgIHJldHVybiBjaGVja0FuZFVwZGF0ZVRleHRJbmxpbmUodmlldywgbm9kZURlZiwgdjAsIHYxLCB2MiwgdjMsIHY0LCB2NSwgdjYsIHY3LCB2OCwgdjkpO1xuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVEaXJlY3RpdmU6XG4gICAgICByZXR1cm4gY2hlY2tBbmRVcGRhdGVEaXJlY3RpdmVJbmxpbmUodmlldywgbm9kZURlZiwgdjAsIHYxLCB2MiwgdjMsIHY0LCB2NSwgdjYsIHY3LCB2OCwgdjkpO1xuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlQXJyYXk6XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVB1cmVPYmplY3Q6XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVB1cmVQaXBlOlxuICAgICAgcmV0dXJuIGNoZWNrQW5kVXBkYXRlUHVyZUV4cHJlc3Npb25JbmxpbmUoXG4gICAgICAgICAgdmlldywgbm9kZURlZiwgdjAsIHYxLCB2MiwgdjMsIHY0LCB2NSwgdjYsIHY3LCB2OCwgdjkpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyAndW5yZWFjaGFibGUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrQW5kVXBkYXRlTm9kZUR5bmFtaWModmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYsIHZhbHVlczogYW55W10pOiBib29sZWFuIHtcbiAgc3dpdGNoIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVzKSB7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZUVsZW1lbnQ6XG4gICAgICByZXR1cm4gY2hlY2tBbmRVcGRhdGVFbGVtZW50RHluYW1pYyh2aWV3LCBub2RlRGVmLCB2YWx1ZXMpO1xuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVUZXh0OlxuICAgICAgcmV0dXJuIGNoZWNrQW5kVXBkYXRlVGV4dER5bmFtaWModmlldywgbm9kZURlZiwgdmFsdWVzKTtcbiAgICBjYXNlIE5vZGVGbGFncy5UeXBlRGlyZWN0aXZlOlxuICAgICAgcmV0dXJuIGNoZWNrQW5kVXBkYXRlRGlyZWN0aXZlRHluYW1pYyh2aWV3LCBub2RlRGVmLCB2YWx1ZXMpO1xuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlQXJyYXk6XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVB1cmVPYmplY3Q6XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVB1cmVQaXBlOlxuICAgICAgcmV0dXJuIGNoZWNrQW5kVXBkYXRlUHVyZUV4cHJlc3Npb25EeW5hbWljKHZpZXcsIG5vZGVEZWYsIHZhbHVlcyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93ICd1bnJlYWNoYWJsZSc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9DaGFuZ2VzTm9kZShcbiAgICB2aWV3OiBWaWV3RGF0YSwgbm9kZURlZjogTm9kZURlZiwgYXJnU3R5bGU6IEFyZ3VtZW50VHlwZSwgdjA/OiBhbnksIHYxPzogYW55LCB2Mj86IGFueSxcbiAgICB2Mz86IGFueSwgdjQ/OiBhbnksIHY1PzogYW55LCB2Nj86IGFueSwgdjc/OiBhbnksIHY4PzogYW55LCB2OT86IGFueSk6IGFueSB7XG4gIGlmIChhcmdTdHlsZSA9PT0gQXJndW1lbnRUeXBlLklubGluZSkge1xuICAgIGNoZWNrTm9DaGFuZ2VzTm9kZUlubGluZSh2aWV3LCBub2RlRGVmLCB2MCwgdjEsIHYyLCB2MywgdjQsIHY1LCB2NiwgdjcsIHY4LCB2OSk7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2tOb0NoYW5nZXNOb2RlRHluYW1pYyh2aWV3LCBub2RlRGVmLCB2MCk7XG4gIH1cbiAgLy8gUmV0dXJuaW5nIGZhbHNlIGlzIG9rIGhlcmUgYXMgd2Ugd291bGQgaGF2ZSB0aHJvd24gaW4gY2FzZSBvZiBhIGNoYW5nZS5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja05vQ2hhbmdlc05vZGVJbmxpbmUoXG4gICAgdmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYsIHYwOiBhbnksIHYxOiBhbnksIHYyOiBhbnksIHYzOiBhbnksIHY0OiBhbnksIHY1OiBhbnksIHY2OiBhbnksXG4gICAgdjc6IGFueSwgdjg6IGFueSwgdjk6IGFueSk6IHZvaWQge1xuICBjb25zdCBiaW5kTGVuID0gbm9kZURlZi5iaW5kaW5ncy5sZW5ndGg7XG4gIGlmIChiaW5kTGVuID4gMCkgY2hlY2tCaW5kaW5nTm9DaGFuZ2VzKHZpZXcsIG5vZGVEZWYsIDAsIHYwKTtcbiAgaWYgKGJpbmRMZW4gPiAxKSBjaGVja0JpbmRpbmdOb0NoYW5nZXModmlldywgbm9kZURlZiwgMSwgdjEpO1xuICBpZiAoYmluZExlbiA+IDIpIGNoZWNrQmluZGluZ05vQ2hhbmdlcyh2aWV3LCBub2RlRGVmLCAyLCB2Mik7XG4gIGlmIChiaW5kTGVuID4gMykgY2hlY2tCaW5kaW5nTm9DaGFuZ2VzKHZpZXcsIG5vZGVEZWYsIDMsIHYzKTtcbiAgaWYgKGJpbmRMZW4gPiA0KSBjaGVja0JpbmRpbmdOb0NoYW5nZXModmlldywgbm9kZURlZiwgNCwgdjQpO1xuICBpZiAoYmluZExlbiA+IDUpIGNoZWNrQmluZGluZ05vQ2hhbmdlcyh2aWV3LCBub2RlRGVmLCA1LCB2NSk7XG4gIGlmIChiaW5kTGVuID4gNikgY2hlY2tCaW5kaW5nTm9DaGFuZ2VzKHZpZXcsIG5vZGVEZWYsIDYsIHY2KTtcbiAgaWYgKGJpbmRMZW4gPiA3KSBjaGVja0JpbmRpbmdOb0NoYW5nZXModmlldywgbm9kZURlZiwgNywgdjcpO1xuICBpZiAoYmluZExlbiA+IDgpIGNoZWNrQmluZGluZ05vQ2hhbmdlcyh2aWV3LCBub2RlRGVmLCA4LCB2OCk7XG4gIGlmIChiaW5kTGVuID4gOSkgY2hlY2tCaW5kaW5nTm9DaGFuZ2VzKHZpZXcsIG5vZGVEZWYsIDksIHY5KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tOb0NoYW5nZXNOb2RlRHluYW1pYyh2aWV3OiBWaWV3RGF0YSwgbm9kZURlZjogTm9kZURlZiwgdmFsdWVzOiBhbnlbXSk6IHZvaWQge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGNoZWNrQmluZGluZ05vQ2hhbmdlcyh2aWV3LCBub2RlRGVmLCBpLCB2YWx1ZXNbaV0pO1xuICB9XG59XG5cbi8qKlxuICogV29ya2Fyb3VuZCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci90c2lja2xlL2lzc3Vlcy80OTdcbiAqIEBzdXBwcmVzcyB7bWlzcGxhY2VkVHlwZUFubm90YXRpb259XG4gKi9cbmZ1bmN0aW9uIGNoZWNrTm9DaGFuZ2VzUXVlcnkodmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYpIHtcbiAgY29uc3QgcXVlcnlMaXN0ID0gYXNRdWVyeUxpc3Qodmlldywgbm9kZURlZi5ub2RlSW5kZXgpO1xuICBpZiAocXVlcnlMaXN0LmRpcnR5KSB7XG4gICAgdGhyb3cgZXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvcihcbiAgICAgICAgU2VydmljZXMuY3JlYXRlRGVidWdDb250ZXh0KHZpZXcsIG5vZGVEZWYubm9kZUluZGV4KSxcbiAgICAgICAgYFF1ZXJ5ICR7bm9kZURlZi5xdWVyeSEuaWR9IG5vdCBkaXJ0eWAsIGBRdWVyeSAke25vZGVEZWYucXVlcnkhLmlkfSBkaXJ0eWAsXG4gICAgICAgICh2aWV3LnN0YXRlICYgVmlld1N0YXRlLkJlZm9yZUZpcnN0Q2hlY2spICE9PSAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveVZpZXcodmlldzogVmlld0RhdGEpIHtcbiAgaWYgKHZpZXcuc3RhdGUgJiBWaWV3U3RhdGUuRGVzdHJveWVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGV4ZWNFbWJlZGRlZFZpZXdzQWN0aW9uKHZpZXcsIFZpZXdBY3Rpb24uRGVzdHJveSk7XG4gIGV4ZWNDb21wb25lbnRWaWV3c0FjdGlvbih2aWV3LCBWaWV3QWN0aW9uLkRlc3Ryb3kpO1xuICBjYWxsTGlmZWN5Y2xlSG9va3NDaGlsZHJlbkZpcnN0KHZpZXcsIE5vZGVGbGFncy5PbkRlc3Ryb3kpO1xuICBpZiAodmlldy5kaXNwb3NhYmxlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlldy5kaXNwb3NhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmlldy5kaXNwb3NhYmxlc1tpXSgpO1xuICAgIH1cbiAgfVxuICBkZXRhY2hQcm9qZWN0ZWRWaWV3KHZpZXcpO1xuICBpZiAodmlldy5yZW5kZXJlci5kZXN0cm95Tm9kZSkge1xuICAgIGRlc3Ryb3lWaWV3Tm9kZXModmlldyk7XG4gIH1cbiAgaWYgKGlzQ29tcG9uZW50Vmlldyh2aWV3KSkge1xuICAgIHZpZXcucmVuZGVyZXIuZGVzdHJveSgpO1xuICB9XG4gIHZpZXcuc3RhdGUgfD0gVmlld1N0YXRlLkRlc3Ryb3llZDtcbn1cblxuZnVuY3Rpb24gZGVzdHJveVZpZXdOb2Rlcyh2aWV3OiBWaWV3RGF0YSkge1xuICBjb25zdCBsZW4gPSB2aWV3LmRlZi5ub2Rlcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBkZWYgPSB2aWV3LmRlZi5ub2Rlc1tpXTtcbiAgICBpZiAoZGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVFbGVtZW50KSB7XG4gICAgICB2aWV3LnJlbmRlcmVyLmRlc3Ryb3lOb2RlIShhc0VsZW1lbnREYXRhKHZpZXcsIGkpLnJlbmRlckVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoZGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVUZXh0KSB7XG4gICAgICB2aWV3LnJlbmRlcmVyLmRlc3Ryb3lOb2RlIShhc1RleHREYXRhKHZpZXcsIGkpLnJlbmRlclRleHQpO1xuICAgIH0gZWxzZSBpZiAoZGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVDb250ZW50UXVlcnkgfHwgZGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVWaWV3UXVlcnkpIHtcbiAgICAgIGFzUXVlcnlMaXN0KHZpZXcsIGkpLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cblxuZW51bSBWaWV3QWN0aW9uIHtcbiAgQ3JlYXRlVmlld05vZGVzLFxuICBDaGVja05vQ2hhbmdlcyxcbiAgQ2hlY2tOb0NoYW5nZXNQcm9qZWN0ZWRWaWV3cyxcbiAgQ2hlY2tBbmRVcGRhdGUsXG4gIENoZWNrQW5kVXBkYXRlUHJvamVjdGVkVmlld3MsXG4gIERlc3Ryb3lcbn1cblxuZnVuY3Rpb24gZXhlY0NvbXBvbmVudFZpZXdzQWN0aW9uKHZpZXc6IFZpZXdEYXRhLCBhY3Rpb246IFZpZXdBY3Rpb24pIHtcbiAgY29uc3QgZGVmID0gdmlldy5kZWY7XG4gIGlmICghKGRlZi5ub2RlRmxhZ3MgJiBOb2RlRmxhZ3MuQ29tcG9uZW50VmlldykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWYubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlRGVmID0gZGVmLm5vZGVzW2ldO1xuICAgIGlmIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLkNvbXBvbmVudFZpZXcpIHtcbiAgICAgIC8vIGEgbGVhZlxuICAgICAgY2FsbFZpZXdBY3Rpb24oYXNFbGVtZW50RGF0YSh2aWV3LCBpKS5jb21wb25lbnRWaWV3LCBhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoKG5vZGVEZWYuY2hpbGRGbGFncyAmIE5vZGVGbGFncy5Db21wb25lbnRWaWV3KSA9PT0gMCkge1xuICAgICAgLy8gYSBwYXJlbnQgd2l0aCBsZWFmc1xuICAgICAgLy8gbm8gY2hpbGQgaXMgYSBjb21wb25lbnQsXG4gICAgICAvLyB0aGVuIHNraXAgdGhlIGNoaWxkcmVuXG4gICAgICBpICs9IG5vZGVEZWYuY2hpbGRDb3VudDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhlY0VtYmVkZGVkVmlld3NBY3Rpb24odmlldzogVmlld0RhdGEsIGFjdGlvbjogVmlld0FjdGlvbikge1xuICBjb25zdCBkZWYgPSB2aWV3LmRlZjtcbiAgaWYgKCEoZGVmLm5vZGVGbGFncyAmIE5vZGVGbGFncy5FbWJlZGRlZFZpZXdzKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZi5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGVEZWYgPSBkZWYubm9kZXNbaV07XG4gICAgaWYgKG5vZGVEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuRW1iZWRkZWRWaWV3cykge1xuICAgICAgLy8gYSBsZWFmXG4gICAgICBjb25zdCBlbWJlZGRlZFZpZXdzID0gYXNFbGVtZW50RGF0YSh2aWV3LCBpKS52aWV3Q29udGFpbmVyIS5fZW1iZWRkZWRWaWV3cztcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZW1iZWRkZWRWaWV3cy5sZW5ndGg7IGsrKykge1xuICAgICAgICBjYWxsVmlld0FjdGlvbihlbWJlZGRlZFZpZXdzW2tdLCBhY3Rpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKG5vZGVEZWYuY2hpbGRGbGFncyAmIE5vZGVGbGFncy5FbWJlZGRlZFZpZXdzKSA9PT0gMCkge1xuICAgICAgLy8gYSBwYXJlbnQgd2l0aCBsZWFmc1xuICAgICAgLy8gbm8gY2hpbGQgaXMgYSBjb21wb25lbnQsXG4gICAgICAvLyB0aGVuIHNraXAgdGhlIGNoaWxkcmVuXG4gICAgICBpICs9IG5vZGVEZWYuY2hpbGRDb3VudDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFZpZXdBY3Rpb24odmlldzogVmlld0RhdGEsIGFjdGlvbjogVmlld0FjdGlvbikge1xuICBjb25zdCB2aWV3U3RhdGUgPSB2aWV3LnN0YXRlO1xuICBzd2l0Y2ggKGFjdGlvbikge1xuICAgIGNhc2UgVmlld0FjdGlvbi5DaGVja05vQ2hhbmdlczpcbiAgICAgIGlmICgodmlld1N0YXRlICYgVmlld1N0YXRlLkRlc3Ryb3llZCkgPT09IDApIHtcbiAgICAgICAgaWYgKCh2aWV3U3RhdGUgJiBWaWV3U3RhdGUuQ2F0RGV0ZWN0Q2hhbmdlcykgPT09IFZpZXdTdGF0ZS5DYXREZXRlY3RDaGFuZ2VzKSB7XG4gICAgICAgICAgY2hlY2tOb0NoYW5nZXNWaWV3KHZpZXcpO1xuICAgICAgICB9IGVsc2UgaWYgKHZpZXdTdGF0ZSAmIFZpZXdTdGF0ZS5DaGVja1Byb2plY3RlZFZpZXdzKSB7XG4gICAgICAgICAgZXhlY1Byb2plY3RlZFZpZXdzQWN0aW9uKHZpZXcsIFZpZXdBY3Rpb24uQ2hlY2tOb0NoYW5nZXNQcm9qZWN0ZWRWaWV3cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVmlld0FjdGlvbi5DaGVja05vQ2hhbmdlc1Byb2plY3RlZFZpZXdzOlxuICAgICAgaWYgKCh2aWV3U3RhdGUgJiBWaWV3U3RhdGUuRGVzdHJveWVkKSA9PT0gMCkge1xuICAgICAgICBpZiAodmlld1N0YXRlICYgVmlld1N0YXRlLkNoZWNrUHJvamVjdGVkVmlldykge1xuICAgICAgICAgIGNoZWNrTm9DaGFuZ2VzVmlldyh2aWV3KTtcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3U3RhdGUgJiBWaWV3U3RhdGUuQ2hlY2tQcm9qZWN0ZWRWaWV3cykge1xuICAgICAgICAgIGV4ZWNQcm9qZWN0ZWRWaWV3c0FjdGlvbih2aWV3LCBhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFZpZXdBY3Rpb24uQ2hlY2tBbmRVcGRhdGU6XG4gICAgICBpZiAoKHZpZXdTdGF0ZSAmIFZpZXdTdGF0ZS5EZXN0cm95ZWQpID09PSAwKSB7XG4gICAgICAgIGlmICgodmlld1N0YXRlICYgVmlld1N0YXRlLkNhdERldGVjdENoYW5nZXMpID09PSBWaWV3U3RhdGUuQ2F0RGV0ZWN0Q2hhbmdlcykge1xuICAgICAgICAgIGNoZWNrQW5kVXBkYXRlVmlldyh2aWV3KTtcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3U3RhdGUgJiBWaWV3U3RhdGUuQ2hlY2tQcm9qZWN0ZWRWaWV3cykge1xuICAgICAgICAgIGV4ZWNQcm9qZWN0ZWRWaWV3c0FjdGlvbih2aWV3LCBWaWV3QWN0aW9uLkNoZWNrQW5kVXBkYXRlUHJvamVjdGVkVmlld3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFZpZXdBY3Rpb24uQ2hlY2tBbmRVcGRhdGVQcm9qZWN0ZWRWaWV3czpcbiAgICAgIGlmICgodmlld1N0YXRlICYgVmlld1N0YXRlLkRlc3Ryb3llZCkgPT09IDApIHtcbiAgICAgICAgaWYgKHZpZXdTdGF0ZSAmIFZpZXdTdGF0ZS5DaGVja1Byb2plY3RlZFZpZXcpIHtcbiAgICAgICAgICBjaGVja0FuZFVwZGF0ZVZpZXcodmlldyk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlld1N0YXRlICYgVmlld1N0YXRlLkNoZWNrUHJvamVjdGVkVmlld3MpIHtcbiAgICAgICAgICBleGVjUHJvamVjdGVkVmlld3NBY3Rpb24odmlldywgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBWaWV3QWN0aW9uLkRlc3Ryb3k6XG4gICAgICAvLyBOb3RlOiBkZXN0cm95VmlldyByZWN1cnNlcyBvdmVyIGFsbCB2aWV3cyxcbiAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gc3BlY2lhbCBjYXNlIHByb2plY3RlZCB2aWV3cyBoZXJlLlxuICAgICAgZGVzdHJveVZpZXcodmlldyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFZpZXdBY3Rpb24uQ3JlYXRlVmlld05vZGVzOlxuICAgICAgY3JlYXRlVmlld05vZGVzKHZpZXcpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhlY1Byb2plY3RlZFZpZXdzQWN0aW9uKHZpZXc6IFZpZXdEYXRhLCBhY3Rpb246IFZpZXdBY3Rpb24pIHtcbiAgZXhlY0VtYmVkZGVkVmlld3NBY3Rpb24odmlldywgYWN0aW9uKTtcbiAgZXhlY0NvbXBvbmVudFZpZXdzQWN0aW9uKHZpZXcsIGFjdGlvbik7XG59XG5cbmZ1bmN0aW9uIGV4ZWNRdWVyaWVzQWN0aW9uKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBxdWVyeUZsYWdzOiBOb2RlRmxhZ3MsIHN0YXRpY0R5bmFtaWNRdWVyeUZsYWc6IE5vZGVGbGFncyxcbiAgICBjaGVja1R5cGU6IENoZWNrVHlwZSkge1xuICBpZiAoISh2aWV3LmRlZi5ub2RlRmxhZ3MgJiBxdWVyeUZsYWdzKSB8fCAhKHZpZXcuZGVmLm5vZGVGbGFncyAmIHN0YXRpY0R5bmFtaWNRdWVyeUZsYWcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5vZGVDb3VudCA9IHZpZXcuZGVmLm5vZGVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IG5vZGVEZWYgPSB2aWV3LmRlZi5ub2Rlc1tpXTtcbiAgICBpZiAoKG5vZGVEZWYuZmxhZ3MgJiBxdWVyeUZsYWdzKSAmJiAobm9kZURlZi5mbGFncyAmIHN0YXRpY0R5bmFtaWNRdWVyeUZsYWcpKSB7XG4gICAgICBTZXJ2aWNlcy5zZXRDdXJyZW50Tm9kZSh2aWV3LCBub2RlRGVmLm5vZGVJbmRleCk7XG4gICAgICBzd2l0Y2ggKGNoZWNrVHlwZSkge1xuICAgICAgICBjYXNlIENoZWNrVHlwZS5DaGVja0FuZFVwZGF0ZTpcbiAgICAgICAgICBjaGVja0FuZFVwZGF0ZVF1ZXJ5KHZpZXcsIG5vZGVEZWYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENoZWNrVHlwZS5DaGVja05vQ2hhbmdlczpcbiAgICAgICAgICBjaGVja05vQ2hhbmdlc1F1ZXJ5KHZpZXcsIG5vZGVEZWYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIShub2RlRGVmLmNoaWxkRmxhZ3MgJiBxdWVyeUZsYWdzKSB8fCAhKG5vZGVEZWYuY2hpbGRGbGFncyAmIHN0YXRpY0R5bmFtaWNRdWVyeUZsYWcpKSB7XG4gICAgICAvLyBubyBjaGlsZCBoYXMgYSBtYXRjaGluZyBxdWVyeVxuICAgICAgLy8gdGhlbiBza2lwIHRoZSBjaGlsZHJlblxuICAgICAgaSArPSBub2RlRGVmLmNoaWxkQ291bnQ7XG4gICAgfVxuICB9XG59XG4iXX0=