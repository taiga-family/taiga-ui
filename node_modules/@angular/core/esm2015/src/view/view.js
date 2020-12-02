/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/view.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * @param {?} flags
 * @param {?} nodes
 * @param {?=} updateDirectives
 * @param {?=} updateRenderer
 * @return {?}
 */
export function viewDef(flags, nodes, updateDirectives, updateRenderer) {
    // clone nodes and set auto calculated values
    /** @type {?} */
    let viewBindingCount = 0;
    /** @type {?} */
    let viewDisposableCount = 0;
    /** @type {?} */
    let viewNodeFlags = 0;
    /** @type {?} */
    let viewRootNodeFlags = 0;
    /** @type {?} */
    let viewMatchedQueries = 0;
    /** @type {?} */
    let currentParent = null;
    /** @type {?} */
    let currentRenderParent = null;
    /** @type {?} */
    let currentElementHasPublicProviders = false;
    /** @type {?} */
    let currentElementHasPrivateProviders = false;
    /** @type {?} */
    let lastRenderRootNode = null;
    for (let i = 0; i < nodes.length; i++) {
        /** @type {?} */
        const node = nodes[i];
        node.nodeIndex = i;
        node.parent = currentParent;
        node.bindingIndex = viewBindingCount;
        node.outputIndex = viewDisposableCount;
        node.renderParent = currentRenderParent;
        viewNodeFlags |= node.flags;
        viewMatchedQueries |= node.matchedQueryIds;
        if (node.element) {
            /** @type {?} */
            const elDef = node.element;
            elDef.publicProviders =
                currentParent ? (/** @type {?} */ (currentParent.element)).publicProviders : Object.create(null);
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
                (/** @type {?} */ ((/** @type {?} */ (currentParent)).element)).publicProviders =
                    Object.create((/** @type {?} */ ((/** @type {?} */ (currentParent)).element)).publicProviders);
                (/** @type {?} */ ((/** @type {?} */ (currentParent)).element)).allProviders = (/** @type {?} */ ((/** @type {?} */ (currentParent)).element)).publicProviders;
            }
            /** @type {?} */
            const isPrivateService = (node.flags & 8192 /* PrivateProvider */) !== 0;
            /** @type {?} */
            const isComponent = (node.flags & 32768 /* Component */) !== 0;
            if (!isPrivateService || isComponent) {
                (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (currentParent)).element)).publicProviders))[tokenKey((/** @type {?} */ (node.provider)).token)] = node;
            }
            else {
                if (!currentElementHasPrivateProviders) {
                    currentElementHasPrivateProviders = true;
                    // Use prototypical inheritance to not get O(n^2) complexity...
                    (/** @type {?} */ ((/** @type {?} */ (currentParent)).element)).allProviders =
                        Object.create((/** @type {?} */ ((/** @type {?} */ (currentParent)).element)).publicProviders);
                }
                (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (currentParent)).element)).allProviders))[tokenKey((/** @type {?} */ (node.provider)).token)] = node;
            }
            if (isComponent) {
                (/** @type {?} */ ((/** @type {?} */ (currentParent)).element)).componentProvider = node;
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
                /** @type {?} */
                const newParent = currentParent.parent;
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
    /** @type {?} */
    const handleEvent = (/**
     * @param {?} view
     * @param {?} nodeIndex
     * @param {?} eventName
     * @param {?} event
     * @return {?}
     */
    (view, nodeIndex, eventName, event) => (/** @type {?} */ ((/** @type {?} */ (nodes[nodeIndex].element)).handleEvent))(view, eventName, event));
    return {
        // Will be filled later...
        factory: null,
        nodeFlags: viewNodeFlags,
        rootNodeFlags: viewRootNodeFlags,
        nodeMatchedQueries: viewMatchedQueries,
        flags,
        nodes: nodes,
        updateDirectives: updateDirectives || NOOP,
        updateRenderer: updateRenderer || NOOP,
        handleEvent,
        bindingCount: viewBindingCount,
        outputCount: viewDisposableCount,
        lastRenderRootNode
    };
}
/**
 * @param {?} node
 * @return {?}
 */
function isNgContainer(node) {
    return (node.flags & 1 /* TypeElement */) !== 0 && (/** @type {?} */ (node.element)).name === null;
}
/**
 * @param {?} parent
 * @param {?} node
 * @param {?} nodeCount
 * @return {?}
 */
function validateNode(parent, node, nodeCount) {
    /** @type {?} */
    const template = node.element && node.element.template;
    if (template) {
        if (!template.lastRenderRootNode) {
            throw new Error(`Illegal State: Embedded templates without nodes are not allowed!`);
        }
        if (template.lastRenderRootNode &&
            template.lastRenderRootNode.flags & 16777216 /* EmbeddedViews */) {
            throw new Error(`Illegal State: Last root node of a template can't have embedded views, at index ${node.nodeIndex}!`);
        }
    }
    if (node.flags & 20224 /* CatProvider */) {
        /** @type {?} */
        const parentFlags = parent ? parent.flags : 0;
        if ((parentFlags & 1 /* TypeElement */) === 0) {
            throw new Error(`Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${node.nodeIndex}!`);
        }
    }
    if (node.query) {
        if (node.flags & 67108864 /* TypeContentQuery */ &&
            (!parent || (parent.flags & 16384 /* TypeDirective */) === 0)) {
            throw new Error(`Illegal State: Content Query nodes need to be children of directives, at index ${node.nodeIndex}!`);
        }
        if (node.flags & 134217728 /* TypeViewQuery */ && parent) {
            throw new Error(`Illegal State: View Query nodes have to be top level nodes, at index ${node.nodeIndex}!`);
        }
    }
    if (node.childCount) {
        /** @type {?} */
        const parentEnd = parent ? parent.nodeIndex + parent.childCount : nodeCount - 1;
        if (node.nodeIndex <= parentEnd && node.nodeIndex + node.childCount > parentEnd) {
            throw new Error(`Illegal State: childCount of node leads outside of parent, at index ${node.nodeIndex}!`);
        }
    }
}
/**
 * @param {?} parent
 * @param {?} anchorDef
 * @param {?} viewDef
 * @param {?=} context
 * @return {?}
 */
export function createEmbeddedView(parent, anchorDef, viewDef, context) {
    // embedded views are seen as siblings to the anchor, so we need
    // to get the parent of the anchor and use it as parentIndex.
    /** @type {?} */
    const view = createView(parent.root, parent.renderer, parent, anchorDef, viewDef);
    initView(view, parent.component, context);
    createViewNodes(view);
    return view;
}
/**
 * @param {?} root
 * @param {?} def
 * @param {?=} context
 * @return {?}
 */
export function createRootView(root, def, context) {
    /** @type {?} */
    const view = createView(root, root.renderer, null, null, def);
    initView(view, context, context);
    createViewNodes(view);
    return view;
}
/**
 * @param {?} parentView
 * @param {?} nodeDef
 * @param {?} viewDef
 * @param {?} hostElement
 * @return {?}
 */
export function createComponentView(parentView, nodeDef, viewDef, hostElement) {
    /** @type {?} */
    const rendererType = (/** @type {?} */ (nodeDef.element)).componentRendererType;
    /** @type {?} */
    let compRenderer;
    if (!rendererType) {
        compRenderer = parentView.root.renderer;
    }
    else {
        compRenderer = parentView.root.rendererFactory.createRenderer(hostElement, rendererType);
    }
    return createView(parentView.root, compRenderer, parentView, (/** @type {?} */ (nodeDef.element)).componentProvider, viewDef);
}
/**
 * @param {?} root
 * @param {?} renderer
 * @param {?} parent
 * @param {?} parentNodeDef
 * @param {?} def
 * @return {?}
 */
function createView(root, renderer, parent, parentNodeDef, def) {
    /** @type {?} */
    const nodes = new Array(def.nodes.length);
    /** @type {?} */
    const disposables = def.outputCount ? new Array(def.outputCount) : null;
    /** @type {?} */
    const view = {
        def,
        parent,
        viewContainerParent: null,
        parentNodeDef,
        context: null,
        component: null,
        nodes,
        state: 13 /* CatInit */,
        root,
        renderer,
        oldValues: new Array(def.bindingCount),
        disposables,
        initIndex: -1
    };
    return view;
}
/**
 * @param {?} view
 * @param {?} component
 * @param {?} context
 * @return {?}
 */
function initView(view, component, context) {
    view.component = component;
    view.context = context;
}
/**
 * @param {?} view
 * @return {?}
 */
function createViewNodes(view) {
    /** @type {?} */
    let renderHost;
    if (isComponentView(view)) {
        /** @type {?} */
        const hostDef = view.parentNodeDef;
        renderHost = asElementData((/** @type {?} */ (view.parent)), (/** @type {?} */ ((/** @type {?} */ (hostDef)).parent)).nodeIndex).renderElement;
    }
    /** @type {?} */
    const def = view.def;
    /** @type {?} */
    const nodes = view.nodes;
    for (let i = 0; i < def.nodes.length; i++) {
        /** @type {?} */
        const nodeDef = def.nodes[i];
        Services.setCurrentNode(view, i);
        /** @type {?} */
        let nodeData;
        switch (nodeDef.flags & 201347067 /* Types */) {
            case 1 /* TypeElement */:
                /** @type {?} */
                const el = (/** @type {?} */ (createElement(view, renderHost, nodeDef)));
                /** @type {?} */
                let componentView = (/** @type {?} */ (undefined));
                if (nodeDef.flags & 33554432 /* ComponentView */) {
                    /** @type {?} */
                    const compViewDef = resolveDefinition((/** @type {?} */ ((/** @type {?} */ (nodeDef.element)).componentView)));
                    componentView = Services.createComponentView(view, nodeDef, compViewDef, el);
                }
                listenToElementOutputs(view, componentView, nodeDef, el);
                nodeData = (/** @type {?} */ ({
                    renderElement: el,
                    componentView,
                    viewContainer: null,
                    template: (/** @type {?} */ (nodeDef.element)).template ? createTemplateData(view, nodeDef) : undefined
                }));
                if (nodeDef.flags & 16777216 /* EmbeddedViews */) {
                    nodeData.viewContainer = createViewContainerData(view, nodeDef, nodeData);
                }
                break;
            case 2 /* TypeText */:
                nodeData = (/** @type {?} */ (createText(view, renderHost, nodeDef)));
                break;
            case 512 /* TypeClassProvider */:
            case 1024 /* TypeFactoryProvider */:
            case 2048 /* TypeUseExistingProvider */:
            case 256 /* TypeValueProvider */: {
                nodeData = nodes[i];
                if (!nodeData && !(nodeDef.flags & 4096 /* LazyProvider */)) {
                    /** @type {?} */
                    const instance = createProviderInstance(view, nodeDef);
                    nodeData = (/** @type {?} */ ({ instance }));
                }
                break;
            }
            case 16 /* TypePipe */: {
                /** @type {?} */
                const instance = createPipeInstance(view, nodeDef);
                nodeData = (/** @type {?} */ ({ instance }));
                break;
            }
            case 16384 /* TypeDirective */: {
                nodeData = nodes[i];
                if (!nodeData) {
                    /** @type {?} */
                    const instance = createDirectiveInstance(view, nodeDef);
                    nodeData = (/** @type {?} */ ({ instance }));
                }
                if (nodeDef.flags & 32768 /* Component */) {
                    /** @type {?} */
                    const compView = asElementData(view, (/** @type {?} */ (nodeDef.parent)).nodeIndex).componentView;
                    initView(compView, nodeData.instance, nodeData.instance);
                }
                break;
            }
            case 32 /* TypePureArray */:
            case 64 /* TypePureObject */:
            case 128 /* TypePurePipe */:
                nodeData = (/** @type {?} */ (createPureExpression(view, nodeDef)));
                break;
            case 67108864 /* TypeContentQuery */:
            case 134217728 /* TypeViewQuery */:
                nodeData = (/** @type {?} */ (createQuery()));
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
/**
 * @param {?} view
 * @return {?}
 */
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
/**
 * @param {?} view
 * @return {?}
 */
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
    /** @type {?} */
    let callInit = shiftInitState(view, 256 /* InitState_CallingOnInit */, 512 /* InitState_CallingAfterContentInit */);
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
/**
 * @param {?} view
 * @param {?} nodeDef
 * @param {?} argStyle
 * @param {?=} v0
 * @param {?=} v1
 * @param {?=} v2
 * @param {?=} v3
 * @param {?=} v4
 * @param {?=} v5
 * @param {?=} v6
 * @param {?=} v7
 * @param {?=} v8
 * @param {?=} v9
 * @return {?}
 */
export function checkAndUpdateNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    if (argStyle === 0 /* Inline */) {
        return checkAndUpdateNodeInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
    }
    else {
        return checkAndUpdateNodeDynamic(view, nodeDef, v0);
    }
}
/**
 * @param {?} view
 * @return {?}
 */
function markProjectedViewsForCheck(view) {
    /** @type {?} */
    const def = view.def;
    if (!(def.nodeFlags & 4 /* ProjectedTemplate */)) {
        return;
    }
    for (let i = 0; i < def.nodes.length; i++) {
        /** @type {?} */
        const nodeDef = def.nodes[i];
        if (nodeDef.flags & 4 /* ProjectedTemplate */) {
            /** @type {?} */
            const projectedViews = asElementData(view, i).template._projectedViews;
            if (projectedViews) {
                for (let i = 0; i < projectedViews.length; i++) {
                    /** @type {?} */
                    const projectedView = projectedViews[i];
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
/**
 * @param {?} view
 * @param {?} nodeDef
 * @param {?=} v0
 * @param {?=} v1
 * @param {?=} v2
 * @param {?=} v3
 * @param {?=} v4
 * @param {?=} v5
 * @param {?=} v6
 * @param {?=} v7
 * @param {?=} v8
 * @param {?=} v9
 * @return {?}
 */
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
/**
 * @param {?} view
 * @param {?} nodeDef
 * @param {?} values
 * @return {?}
 */
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
/**
 * @param {?} view
 * @param {?} nodeDef
 * @param {?} argStyle
 * @param {?=} v0
 * @param {?=} v1
 * @param {?=} v2
 * @param {?=} v3
 * @param {?=} v4
 * @param {?=} v5
 * @param {?=} v6
 * @param {?=} v7
 * @param {?=} v8
 * @param {?=} v9
 * @return {?}
 */
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
/**
 * @param {?} view
 * @param {?} nodeDef
 * @param {?} v0
 * @param {?} v1
 * @param {?} v2
 * @param {?} v3
 * @param {?} v4
 * @param {?} v5
 * @param {?} v6
 * @param {?} v7
 * @param {?} v8
 * @param {?} v9
 * @return {?}
 */
function checkNoChangesNodeInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    /** @type {?} */
    const bindLen = nodeDef.bindings.length;
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
/**
 * @param {?} view
 * @param {?} nodeDef
 * @param {?} values
 * @return {?}
 */
function checkNoChangesNodeDynamic(view, nodeDef, values) {
    for (let i = 0; i < values.length; i++) {
        checkBindingNoChanges(view, nodeDef, i, values[i]);
    }
}
/**
 * Workaround https://github.com/angular/tsickle/issues/497
 * @suppress {misplacedTypeAnnotation}
 * @param {?} view
 * @param {?} nodeDef
 * @return {?}
 */
function checkNoChangesQuery(view, nodeDef) {
    /** @type {?} */
    const queryList = asQueryList(view, nodeDef.nodeIndex);
    if (queryList.dirty) {
        throw expressionChangedAfterItHasBeenCheckedError(Services.createDebugContext(view, nodeDef.nodeIndex), `Query ${(/** @type {?} */ (nodeDef.query)).id} not dirty`, `Query ${(/** @type {?} */ (nodeDef.query)).id} dirty`, (view.state & 1 /* BeforeFirstCheck */) !== 0);
    }
}
/**
 * @param {?} view
 * @return {?}
 */
export function destroyView(view) {
    if (view.state & 128 /* Destroyed */) {
        return;
    }
    execEmbeddedViewsAction(view, ViewAction.Destroy);
    execComponentViewsAction(view, ViewAction.Destroy);
    callLifecycleHooksChildrenFirst(view, 131072 /* OnDestroy */);
    if (view.disposables) {
        for (let i = 0; i < view.disposables.length; i++) {
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
/**
 * @param {?} view
 * @return {?}
 */
function destroyViewNodes(view) {
    /** @type {?} */
    const len = view.def.nodes.length;
    for (let i = 0; i < len; i++) {
        /** @type {?} */
        const def = view.def.nodes[i];
        if (def.flags & 1 /* TypeElement */) {
            (/** @type {?} */ (view.renderer.destroyNode))(asElementData(view, i).renderElement);
        }
        else if (def.flags & 2 /* TypeText */) {
            (/** @type {?} */ (view.renderer.destroyNode))(asTextData(view, i).renderText);
        }
        else if (def.flags & 67108864 /* TypeContentQuery */ || def.flags & 134217728 /* TypeViewQuery */) {
            asQueryList(view, i).destroy();
        }
    }
}
/** @enum {number} */
const ViewAction = {
    CreateViewNodes: 0,
    CheckNoChanges: 1,
    CheckNoChangesProjectedViews: 2,
    CheckAndUpdate: 3,
    CheckAndUpdateProjectedViews: 4,
    Destroy: 5,
};
ViewAction[ViewAction.CreateViewNodes] = 'CreateViewNodes';
ViewAction[ViewAction.CheckNoChanges] = 'CheckNoChanges';
ViewAction[ViewAction.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews';
ViewAction[ViewAction.CheckAndUpdate] = 'CheckAndUpdate';
ViewAction[ViewAction.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews';
ViewAction[ViewAction.Destroy] = 'Destroy';
/**
 * @param {?} view
 * @param {?} action
 * @return {?}
 */
function execComponentViewsAction(view, action) {
    /** @type {?} */
    const def = view.def;
    if (!(def.nodeFlags & 33554432 /* ComponentView */)) {
        return;
    }
    for (let i = 0; i < def.nodes.length; i++) {
        /** @type {?} */
        const nodeDef = def.nodes[i];
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
/**
 * @param {?} view
 * @param {?} action
 * @return {?}
 */
function execEmbeddedViewsAction(view, action) {
    /** @type {?} */
    const def = view.def;
    if (!(def.nodeFlags & 16777216 /* EmbeddedViews */)) {
        return;
    }
    for (let i = 0; i < def.nodes.length; i++) {
        /** @type {?} */
        const nodeDef = def.nodes[i];
        if (nodeDef.flags & 16777216 /* EmbeddedViews */) {
            // a leaf
            /** @type {?} */
            const embeddedViews = (/** @type {?} */ (asElementData(view, i).viewContainer))._embeddedViews;
            for (let k = 0; k < embeddedViews.length; k++) {
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
/**
 * @param {?} view
 * @param {?} action
 * @return {?}
 */
function callViewAction(view, action) {
    /** @type {?} */
    const viewState = view.state;
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
/**
 * @param {?} view
 * @param {?} action
 * @return {?}
 */
function execProjectedViewsAction(view, action) {
    execEmbeddedViewsAction(view, action);
    execComponentViewsAction(view, action);
}
/**
 * @param {?} view
 * @param {?} queryFlags
 * @param {?} staticDynamicQueryFlag
 * @param {?} checkType
 * @return {?}
 */
function execQueriesAction(view, queryFlags, staticDynamicQueryFlag, checkType) {
    if (!(view.def.nodeFlags & queryFlags) || !(view.def.nodeFlags & staticDynamicQueryFlag)) {
        return;
    }
    /** @type {?} */
    const nodeCount = view.def.nodes.length;
    for (let i = 0; i < nodeCount; i++) {
        /** @type {?} */
        const nodeDef = view.def.nodes[i];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3ZpZXcvdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUMsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzNILE9BQU8sRUFBQywyQ0FBMkMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBQywrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUMvTCxPQUFPLEVBQUMsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoSSxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNuRSxPQUFPLEVBQUMseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZGLE9BQU8sRUFBZSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0YsUUFBUSxFQUFFLGNBQWMsRUFBa0YsTUFBTSxTQUFTLENBQUM7QUFDdFEsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxxQ0FBcUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3hJLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFFbEQsTUFBTSxVQUFVLE9B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SSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDLEVBQUU7UUFDeEYsT0FBTztLQUNSOztVQUNLLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2NBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDLEVBQUU7WUFDNUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pELFFBQVEsU0FBUyxFQUFFO2dCQUNqQjtvQkFDRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ25DLE1BQU07Z0JBQ1I7b0JBQ0UsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNuQyxNQUFNO2FBQ1Q7U0FDRjtRQUNELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsc0JBQXNCLENBQUMsRUFBRTtZQUN4RixnQ0FBZ0M7WUFDaEMseUJBQXlCO1lBQ3pCLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3pCO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1JlbmRlcmVyMn0gZnJvbSAnLi4vcmVuZGVyL2FwaSc7XG5cbmltcG9ydCB7Y2hlY2tBbmRVcGRhdGVFbGVtZW50RHluYW1pYywgY2hlY2tBbmRVcGRhdGVFbGVtZW50SW5saW5lLCBjcmVhdGVFbGVtZW50LCBsaXN0ZW5Ub0VsZW1lbnRPdXRwdXRzfSBmcm9tICcuL2VsZW1lbnQnO1xuaW1wb3J0IHtleHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQge2FwcGVuZE5nQ29udGVudH0gZnJvbSAnLi9uZ19jb250ZW50JztcbmltcG9ydCB7Y2FsbExpZmVjeWNsZUhvb2tzQ2hpbGRyZW5GaXJzdCwgY2hlY2tBbmRVcGRhdGVEaXJlY3RpdmVEeW5hbWljLCBjaGVja0FuZFVwZGF0ZURpcmVjdGl2ZUlubGluZSwgY3JlYXRlRGlyZWN0aXZlSW5zdGFuY2UsIGNyZWF0ZVBpcGVJbnN0YW5jZSwgY3JlYXRlUHJvdmlkZXJJbnN0YW5jZX0gZnJvbSAnLi9wcm92aWRlcic7XG5pbXBvcnQge2NoZWNrQW5kVXBkYXRlUHVyZUV4cHJlc3Npb25EeW5hbWljLCBjaGVja0FuZFVwZGF0ZVB1cmVFeHByZXNzaW9uSW5saW5lLCBjcmVhdGVQdXJlRXhwcmVzc2lvbn0gZnJvbSAnLi9wdXJlX2V4cHJlc3Npb24nO1xuaW1wb3J0IHtjaGVja0FuZFVwZGF0ZVF1ZXJ5LCBjcmVhdGVRdWVyeX0gZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQge2NyZWF0ZVRlbXBsYXRlRGF0YSwgY3JlYXRlVmlld0NvbnRhaW5lckRhdGF9IGZyb20gJy4vcmVmcyc7XG5pbXBvcnQge2NoZWNrQW5kVXBkYXRlVGV4dER5bmFtaWMsIGNoZWNrQW5kVXBkYXRlVGV4dElubGluZSwgY3JlYXRlVGV4dH0gZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7QXJndW1lbnRUeXBlLCBhc0VsZW1lbnREYXRhLCBhc1F1ZXJ5TGlzdCwgYXNUZXh0RGF0YSwgQ2hlY2tUeXBlLCBFbGVtZW50RGF0YSwgTm9kZURhdGEsIE5vZGVEZWYsIE5vZGVGbGFncywgUHJvdmlkZXJEYXRhLCBSb290RGF0YSwgU2VydmljZXMsIHNoaWZ0SW5pdFN0YXRlLCBWaWV3RGF0YSwgVmlld0RlZmluaXRpb24sIFZpZXdGbGFncywgVmlld0hhbmRsZUV2ZW50Rm4sIFZpZXdTdGF0ZSwgVmlld1VwZGF0ZUZufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Y2hlY2tCaW5kaW5nTm9DaGFuZ2VzLCBpc0NvbXBvbmVudFZpZXcsIG1hcmtQYXJlbnRWaWV3c0ZvckNoZWNrUHJvamVjdGVkVmlld3MsIE5PT1AsIHJlc29sdmVEZWZpbml0aW9uLCB0b2tlbktleX0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7ZGV0YWNoUHJvamVjdGVkVmlld30gZnJvbSAnLi92aWV3X2F0dGFjaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB2aWV3RGVmKFxuICAgIGZsYWdzOiBWaWV3RmxhZ3MsIG5vZGVzOiBOb2RlRGVmW10sIHVwZGF0ZURpcmVjdGl2ZXM/OiBudWxsfFZpZXdVcGRhdGVGbixcbiAgICB1cGRhdGVSZW5kZXJlcj86IG51bGx8Vmlld1VwZGF0ZUZuKTogVmlld0RlZmluaXRpb24ge1xuICAvLyBjbG9uZSBub2RlcyBhbmQgc2V0IGF1dG8gY2FsY3VsYXRlZCB2YWx1ZXNcbiAgbGV0IHZpZXdCaW5kaW5nQ291bnQgPSAwO1xuICBsZXQgdmlld0Rpc3Bvc2FibGVDb3VudCA9IDA7XG4gIGxldCB2aWV3Tm9kZUZsYWdzID0gMDtcbiAgbGV0IHZpZXdSb290Tm9kZUZsYWdzID0gMDtcbiAgbGV0IHZpZXdNYXRjaGVkUXVlcmllcyA9IDA7XG4gIGxldCBjdXJyZW50UGFyZW50OiBOb2RlRGVmfG51bGwgPSBudWxsO1xuICBsZXQgY3VycmVudFJlbmRlclBhcmVudDogTm9kZURlZnxudWxsID0gbnVsbDtcbiAgbGV0IGN1cnJlbnRFbGVtZW50SGFzUHVibGljUHJvdmlkZXJzID0gZmFsc2U7XG4gIGxldCBjdXJyZW50RWxlbWVudEhhc1ByaXZhdGVQcm92aWRlcnMgPSBmYWxzZTtcbiAgbGV0IGxhc3RSZW5kZXJSb290Tm9kZTogTm9kZURlZnxudWxsID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICBub2RlLm5vZGVJbmRleCA9IGk7XG4gICAgbm9kZS5wYXJlbnQgPSBjdXJyZW50UGFyZW50O1xuICAgIG5vZGUuYmluZGluZ0luZGV4ID0gdmlld0JpbmRpbmdDb3VudDtcbiAgICBub2RlLm91dHB1dEluZGV4ID0gdmlld0Rpc3Bvc2FibGVDb3VudDtcbiAgICBub2RlLnJlbmRlclBhcmVudCA9IGN1cnJlbnRSZW5kZXJQYXJlbnQ7XG5cbiAgICB2aWV3Tm9kZUZsYWdzIHw9IG5vZGUuZmxhZ3M7XG4gICAgdmlld01hdGNoZWRRdWVyaWVzIHw9IG5vZGUubWF0Y2hlZFF1ZXJ5SWRzO1xuXG4gICAgaWYgKG5vZGUuZWxlbWVudCkge1xuICAgICAgY29uc3QgZWxEZWYgPSBub2RlLmVsZW1lbnQ7XG4gICAgICBlbERlZi5wdWJsaWNQcm92aWRlcnMgPVxuICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPyBjdXJyZW50UGFyZW50LmVsZW1lbnQhLnB1YmxpY1Byb3ZpZGVycyA6IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBlbERlZi5hbGxQcm92aWRlcnMgPSBlbERlZi5wdWJsaWNQcm92aWRlcnM7XG4gICAgICAvLyBOb3RlOiBXZSBhc3N1bWUgdGhhdCBhbGwgcHJvdmlkZXJzIG9mIGFuIGVsZW1lbnQgYXJlIGJlZm9yZSBhbnkgY2hpbGQgZWxlbWVudCFcbiAgICAgIGN1cnJlbnRFbGVtZW50SGFzUHVibGljUHJvdmlkZXJzID0gZmFsc2U7XG4gICAgICBjdXJyZW50RWxlbWVudEhhc1ByaXZhdGVQcm92aWRlcnMgPSBmYWxzZTtcblxuICAgICAgaWYgKG5vZGUuZWxlbWVudC50ZW1wbGF0ZSkge1xuICAgICAgICB2aWV3TWF0Y2hlZFF1ZXJpZXMgfD0gbm9kZS5lbGVtZW50LnRlbXBsYXRlLm5vZGVNYXRjaGVkUXVlcmllcztcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsaWRhdGVOb2RlKGN1cnJlbnRQYXJlbnQsIG5vZGUsIG5vZGVzLmxlbmd0aCk7XG5cblxuICAgIHZpZXdCaW5kaW5nQ291bnQgKz0gbm9kZS5iaW5kaW5ncy5sZW5ndGg7XG4gICAgdmlld0Rpc3Bvc2FibGVDb3VudCArPSBub2RlLm91dHB1dHMubGVuZ3RoO1xuXG4gICAgaWYgKCFjdXJyZW50UmVuZGVyUGFyZW50ICYmIChub2RlLmZsYWdzICYgTm9kZUZsYWdzLkNhdFJlbmRlck5vZGUpKSB7XG4gICAgICBsYXN0UmVuZGVyUm9vdE5vZGUgPSBub2RlO1xuICAgIH1cblxuICAgIGlmIChub2RlLmZsYWdzICYgTm9kZUZsYWdzLkNhdFByb3ZpZGVyKSB7XG4gICAgICBpZiAoIWN1cnJlbnRFbGVtZW50SGFzUHVibGljUHJvdmlkZXJzKSB7XG4gICAgICAgIGN1cnJlbnRFbGVtZW50SGFzUHVibGljUHJvdmlkZXJzID0gdHJ1ZTtcbiAgICAgICAgLy8gVXNlIHByb3RvdHlwaWNhbCBpbmhlcml0YW5jZSB0byBub3QgZ2V0IE8obl4yKSBjb21wbGV4aXR5Li4uXG4gICAgICAgIGN1cnJlbnRQYXJlbnQhLmVsZW1lbnQhLnB1YmxpY1Byb3ZpZGVycyA9XG4gICAgICAgICAgICBPYmplY3QuY3JlYXRlKGN1cnJlbnRQYXJlbnQhLmVsZW1lbnQhLnB1YmxpY1Byb3ZpZGVycyk7XG4gICAgICAgIGN1cnJlbnRQYXJlbnQhLmVsZW1lbnQhLmFsbFByb3ZpZGVycyA9IGN1cnJlbnRQYXJlbnQhLmVsZW1lbnQhLnB1YmxpY1Byb3ZpZGVycztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzUHJpdmF0ZVNlcnZpY2UgPSAobm9kZS5mbGFncyAmIE5vZGVGbGFncy5Qcml2YXRlUHJvdmlkZXIpICE9PSAwO1xuICAgICAgY29uc3QgaXNDb21wb25lbnQgPSAobm9kZS5mbGFncyAmIE5vZGVGbGFncy5Db21wb25lbnQpICE9PSAwO1xuICAgICAgaWYgKCFpc1ByaXZhdGVTZXJ2aWNlIHx8IGlzQ29tcG9uZW50KSB7XG4gICAgICAgIGN1cnJlbnRQYXJlbnQhLmVsZW1lbnQhLnB1YmxpY1Byb3ZpZGVycyFbdG9rZW5LZXkobm9kZS5wcm92aWRlciEudG9rZW4pXSA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWN1cnJlbnRFbGVtZW50SGFzUHJpdmF0ZVByb3ZpZGVycykge1xuICAgICAgICAgIGN1cnJlbnRFbGVtZW50SGFzUHJpdmF0ZVByb3ZpZGVycyA9IHRydWU7XG4gICAgICAgICAgLy8gVXNlIHByb3RvdHlwaWNhbCBpbmhlcml0YW5jZSB0byBub3QgZ2V0IE8obl4yKSBjb21wbGV4aXR5Li4uXG4gICAgICAgICAgY3VycmVudFBhcmVudCEuZWxlbWVudCEuYWxsUHJvdmlkZXJzID1cbiAgICAgICAgICAgICAgT2JqZWN0LmNyZWF0ZShjdXJyZW50UGFyZW50IS5lbGVtZW50IS5wdWJsaWNQcm92aWRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQYXJlbnQhLmVsZW1lbnQhLmFsbFByb3ZpZGVycyFbdG9rZW5LZXkobm9kZS5wcm92aWRlciEudG9rZW4pXSA9IG5vZGU7XG4gICAgICB9XG4gICAgICBpZiAoaXNDb21wb25lbnQpIHtcbiAgICAgICAgY3VycmVudFBhcmVudCEuZWxlbWVudCEuY29tcG9uZW50UHJvdmlkZXIgPSBub2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50UGFyZW50KSB7XG4gICAgICBjdXJyZW50UGFyZW50LmNoaWxkRmxhZ3MgfD0gbm9kZS5mbGFncztcbiAgICAgIGN1cnJlbnRQYXJlbnQuZGlyZWN0Q2hpbGRGbGFncyB8PSBub2RlLmZsYWdzO1xuICAgICAgY3VycmVudFBhcmVudC5jaGlsZE1hdGNoZWRRdWVyaWVzIHw9IG5vZGUubWF0Y2hlZFF1ZXJ5SWRzO1xuICAgICAgaWYgKG5vZGUuZWxlbWVudCAmJiBub2RlLmVsZW1lbnQudGVtcGxhdGUpIHtcbiAgICAgICAgY3VycmVudFBhcmVudC5jaGlsZE1hdGNoZWRRdWVyaWVzIHw9IG5vZGUuZWxlbWVudC50ZW1wbGF0ZS5ub2RlTWF0Y2hlZFF1ZXJpZXM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXdSb290Tm9kZUZsYWdzIHw9IG5vZGUuZmxhZ3M7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2hpbGRDb3VudCA+IDApIHtcbiAgICAgIGN1cnJlbnRQYXJlbnQgPSBub2RlO1xuXG4gICAgICBpZiAoIWlzTmdDb250YWluZXIobm9kZSkpIHtcbiAgICAgICAgY3VycmVudFJlbmRlclBhcmVudCA9IG5vZGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdoZW4gdGhlIGN1cnJlbnQgbm9kZSBoYXMgbm8gY2hpbGRyZW4sIGNoZWNrIGlmIGl0IGlzIHRoZSBsYXN0IGNoaWxkcmVuIG9mIGl0cyBwYXJlbnQuXG4gICAgICAvLyBXaGVuIGl0IGlzLCBwcm9wYWdhdGUgdGhlIGZsYWdzIHVwLlxuICAgICAgLy8gVGhlIGxvb3AgaXMgcmVxdWlyZWQgYmVjYXVzZSBhbiBlbGVtZW50IGNvdWxkIGJlIHRoZSBsYXN0IHRyYW5zaXRpdmUgY2hpbGRyZW4gb2Ygc2V2ZXJhbFxuICAgICAgLy8gZWxlbWVudHMuIFdlIGxvb3AgdG8gZWl0aGVyIHRoZSByb290IG9yIHRoZSBoaWdoZXN0IG9wZW5lZCBlbGVtZW50ICg9IHdpdGggcmVtYWluaW5nXG4gICAgICAvLyBjaGlsZHJlbilcbiAgICAgIHdoaWxlIChjdXJyZW50UGFyZW50ICYmIGkgPT09IGN1cnJlbnRQYXJlbnQubm9kZUluZGV4ICsgY3VycmVudFBhcmVudC5jaGlsZENvdW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1BhcmVudDogTm9kZURlZnxudWxsID0gY3VycmVudFBhcmVudC5wYXJlbnQ7XG4gICAgICAgIGlmIChuZXdQYXJlbnQpIHtcbiAgICAgICAgICBuZXdQYXJlbnQuY2hpbGRGbGFncyB8PSBjdXJyZW50UGFyZW50LmNoaWxkRmxhZ3M7XG4gICAgICAgICAgbmV3UGFyZW50LmNoaWxkTWF0Y2hlZFF1ZXJpZXMgfD0gY3VycmVudFBhcmVudC5jaGlsZE1hdGNoZWRRdWVyaWVzO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byB1cGRhdGUgdGhlIHJlbmRlciBwYXJlbnQgJiBhY2NvdW50IGZvciBuZy1jb250YWluZXJcbiAgICAgICAgaWYgKGN1cnJlbnRQYXJlbnQgJiYgaXNOZ0NvbnRhaW5lcihjdXJyZW50UGFyZW50KSkge1xuICAgICAgICAgIGN1cnJlbnRSZW5kZXJQYXJlbnQgPSBjdXJyZW50UGFyZW50LnJlbmRlclBhcmVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50UmVuZGVyUGFyZW50ID0gY3VycmVudFBhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUV2ZW50OiBWaWV3SGFuZGxlRXZlbnRGbiA9ICh2aWV3LCBub2RlSW5kZXgsIGV2ZW50TmFtZSwgZXZlbnQpID0+XG4gICAgICBub2Rlc1tub2RlSW5kZXhdLmVsZW1lbnQhLmhhbmRsZUV2ZW50ISh2aWV3LCBldmVudE5hbWUsIGV2ZW50KTtcblxuICByZXR1cm4ge1xuICAgIC8vIFdpbGwgYmUgZmlsbGVkIGxhdGVyLi4uXG4gICAgZmFjdG9yeTogbnVsbCxcbiAgICBub2RlRmxhZ3M6IHZpZXdOb2RlRmxhZ3MsXG4gICAgcm9vdE5vZGVGbGFnczogdmlld1Jvb3ROb2RlRmxhZ3MsXG4gICAgbm9kZU1hdGNoZWRRdWVyaWVzOiB2aWV3TWF0Y2hlZFF1ZXJpZXMsXG4gICAgZmxhZ3MsXG4gICAgbm9kZXM6IG5vZGVzLFxuICAgIHVwZGF0ZURpcmVjdGl2ZXM6IHVwZGF0ZURpcmVjdGl2ZXMgfHwgTk9PUCxcbiAgICB1cGRhdGVSZW5kZXJlcjogdXBkYXRlUmVuZGVyZXIgfHwgTk9PUCxcbiAgICBoYW5kbGVFdmVudCxcbiAgICBiaW5kaW5nQ291bnQ6IHZpZXdCaW5kaW5nQ291bnQsXG4gICAgb3V0cHV0Q291bnQ6IHZpZXdEaXNwb3NhYmxlQ291bnQsXG4gICAgbGFzdFJlbmRlclJvb3ROb2RlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzTmdDb250YWluZXIobm9kZTogTm9kZURlZik6IGJvb2xlYW4ge1xuICByZXR1cm4gKG5vZGUuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZUVsZW1lbnQpICE9PSAwICYmIG5vZGUuZWxlbWVudCEubmFtZSA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVOb2RlKHBhcmVudDogTm9kZURlZnxudWxsLCBub2RlOiBOb2RlRGVmLCBub2RlQ291bnQ6IG51bWJlcikge1xuICBjb25zdCB0ZW1wbGF0ZSA9IG5vZGUuZWxlbWVudCAmJiBub2RlLmVsZW1lbnQudGVtcGxhdGU7XG4gIGlmICh0ZW1wbGF0ZSkge1xuICAgIGlmICghdGVtcGxhdGUubGFzdFJlbmRlclJvb3ROb2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgU3RhdGU6IEVtYmVkZGVkIHRlbXBsYXRlcyB3aXRob3V0IG5vZGVzIGFyZSBub3QgYWxsb3dlZCFgKTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlLmxhc3RSZW5kZXJSb290Tm9kZSAmJlxuICAgICAgICB0ZW1wbGF0ZS5sYXN0UmVuZGVyUm9vdE5vZGUuZmxhZ3MgJiBOb2RlRmxhZ3MuRW1iZWRkZWRWaWV3cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbGxlZ2FsIFN0YXRlOiBMYXN0IHJvb3Qgbm9kZSBvZiBhIHRlbXBsYXRlIGNhbid0IGhhdmUgZW1iZWRkZWQgdmlld3MsIGF0IGluZGV4ICR7XG4gICAgICAgICAgICAgIG5vZGUubm9kZUluZGV4fSFgKTtcbiAgICB9XG4gIH1cbiAgaWYgKG5vZGUuZmxhZ3MgJiBOb2RlRmxhZ3MuQ2F0UHJvdmlkZXIpIHtcbiAgICBjb25zdCBwYXJlbnRGbGFncyA9IHBhcmVudCA/IHBhcmVudC5mbGFncyA6IDA7XG4gICAgaWYgKChwYXJlbnRGbGFncyAmIE5vZGVGbGFncy5UeXBlRWxlbWVudCkgPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSWxsZWdhbCBTdGF0ZTogU3RhdGljUHJvdmlkZXIvRGlyZWN0aXZlIG5vZGVzIG5lZWQgdG8gYmUgY2hpbGRyZW4gb2YgZWxlbWVudHMgb3IgYW5jaG9ycywgYXQgaW5kZXggJHtcbiAgICAgICAgICAgICAgbm9kZS5ub2RlSW5kZXh9IWApO1xuICAgIH1cbiAgfVxuICBpZiAobm9kZS5xdWVyeSkge1xuICAgIGlmIChub2RlLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVDb250ZW50UXVlcnkgJiZcbiAgICAgICAgKCFwYXJlbnQgfHwgKHBhcmVudC5mbGFncyAmIE5vZGVGbGFncy5UeXBlRGlyZWN0aXZlKSA9PT0gMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSWxsZWdhbCBTdGF0ZTogQ29udGVudCBRdWVyeSBub2RlcyBuZWVkIHRvIGJlIGNoaWxkcmVuIG9mIGRpcmVjdGl2ZXMsIGF0IGluZGV4ICR7XG4gICAgICAgICAgICAgIG5vZGUubm9kZUluZGV4fSFgKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZVZpZXdRdWVyeSAmJiBwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBTdGF0ZTogVmlldyBRdWVyeSBub2RlcyBoYXZlIHRvIGJlIHRvcCBsZXZlbCBub2RlcywgYXQgaW5kZXggJHtcbiAgICAgICAgICBub2RlLm5vZGVJbmRleH0hYCk7XG4gICAgfVxuICB9XG4gIGlmIChub2RlLmNoaWxkQ291bnQpIHtcbiAgICBjb25zdCBwYXJlbnRFbmQgPSBwYXJlbnQgPyBwYXJlbnQubm9kZUluZGV4ICsgcGFyZW50LmNoaWxkQ291bnQgOiBub2RlQ291bnQgLSAxO1xuICAgIGlmIChub2RlLm5vZGVJbmRleCA8PSBwYXJlbnRFbmQgJiYgbm9kZS5ub2RlSW5kZXggKyBub2RlLmNoaWxkQ291bnQgPiBwYXJlbnRFbmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSWxsZWdhbCBTdGF0ZTogY2hpbGRDb3VudCBvZiBub2RlIGxlYWRzIG91dHNpZGUgb2YgcGFyZW50LCBhdCBpbmRleCAke25vZGUubm9kZUluZGV4fSFgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICBwYXJlbnQ6IFZpZXdEYXRhLCBhbmNob3JEZWY6IE5vZGVEZWYsIHZpZXdEZWY6IFZpZXdEZWZpbml0aW9uLCBjb250ZXh0PzogYW55KTogVmlld0RhdGEge1xuICAvLyBlbWJlZGRlZCB2aWV3cyBhcmUgc2VlbiBhcyBzaWJsaW5ncyB0byB0aGUgYW5jaG9yLCBzbyB3ZSBuZWVkXG4gIC8vIHRvIGdldCB0aGUgcGFyZW50IG9mIHRoZSBhbmNob3IgYW5kIHVzZSBpdCBhcyBwYXJlbnRJbmRleC5cbiAgY29uc3QgdmlldyA9IGNyZWF0ZVZpZXcocGFyZW50LnJvb3QsIHBhcmVudC5yZW5kZXJlciwgcGFyZW50LCBhbmNob3JEZWYsIHZpZXdEZWYpO1xuICBpbml0Vmlldyh2aWV3LCBwYXJlbnQuY29tcG9uZW50LCBjb250ZXh0KTtcbiAgY3JlYXRlVmlld05vZGVzKHZpZXcpO1xuICByZXR1cm4gdmlldztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJvb3RWaWV3KHJvb3Q6IFJvb3REYXRhLCBkZWY6IFZpZXdEZWZpbml0aW9uLCBjb250ZXh0PzogYW55KTogVmlld0RhdGEge1xuICBjb25zdCB2aWV3ID0gY3JlYXRlVmlldyhyb290LCByb290LnJlbmRlcmVyLCBudWxsLCBudWxsLCBkZWYpO1xuICBpbml0Vmlldyh2aWV3LCBjb250ZXh0LCBjb250ZXh0KTtcbiAgY3JlYXRlVmlld05vZGVzKHZpZXcpO1xuICByZXR1cm4gdmlldztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudFZpZXcoXG4gICAgcGFyZW50VmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYsIHZpZXdEZWY6IFZpZXdEZWZpbml0aW9uLCBob3N0RWxlbWVudDogYW55KTogVmlld0RhdGEge1xuICBjb25zdCByZW5kZXJlclR5cGUgPSBub2RlRGVmLmVsZW1lbnQhLmNvbXBvbmVudFJlbmRlcmVyVHlwZTtcbiAgbGV0IGNvbXBSZW5kZXJlcjogUmVuZGVyZXIyO1xuICBpZiAoIXJlbmRlcmVyVHlwZSkge1xuICAgIGNvbXBSZW5kZXJlciA9IHBhcmVudFZpZXcucm9vdC5yZW5kZXJlcjtcbiAgfSBlbHNlIHtcbiAgICBjb21wUmVuZGVyZXIgPSBwYXJlbnRWaWV3LnJvb3QucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKGhvc3RFbGVtZW50LCByZW5kZXJlclR5cGUpO1xuICB9XG4gIHJldHVybiBjcmVhdGVWaWV3KFxuICAgICAgcGFyZW50Vmlldy5yb290LCBjb21wUmVuZGVyZXIsIHBhcmVudFZpZXcsIG5vZGVEZWYuZWxlbWVudCEuY29tcG9uZW50UHJvdmlkZXIsIHZpZXdEZWYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWaWV3KFxuICAgIHJvb3Q6IFJvb3REYXRhLCByZW5kZXJlcjogUmVuZGVyZXIyLCBwYXJlbnQ6IFZpZXdEYXRhfG51bGwsIHBhcmVudE5vZGVEZWY6IE5vZGVEZWZ8bnVsbCxcbiAgICBkZWY6IFZpZXdEZWZpbml0aW9uKTogVmlld0RhdGEge1xuICBjb25zdCBub2RlczogTm9kZURhdGFbXSA9IG5ldyBBcnJheShkZWYubm9kZXMubGVuZ3RoKTtcbiAgY29uc3QgZGlzcG9zYWJsZXMgPSBkZWYub3V0cHV0Q291bnQgPyBuZXcgQXJyYXkoZGVmLm91dHB1dENvdW50KSA6IG51bGw7XG4gIGNvbnN0IHZpZXc6IFZpZXdEYXRhID0ge1xuICAgIGRlZixcbiAgICBwYXJlbnQsXG4gICAgdmlld0NvbnRhaW5lclBhcmVudDogbnVsbCxcbiAgICBwYXJlbnROb2RlRGVmLFxuICAgIGNvbnRleHQ6IG51bGwsXG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIG5vZGVzLFxuICAgIHN0YXRlOiBWaWV3U3RhdGUuQ2F0SW5pdCxcbiAgICByb290LFxuICAgIHJlbmRlcmVyLFxuICAgIG9sZFZhbHVlczogbmV3IEFycmF5KGRlZi5iaW5kaW5nQ291bnQpLFxuICAgIGRpc3Bvc2FibGVzLFxuICAgIGluaXRJbmRleDogLTFcbiAgfTtcbiAgcmV0dXJuIHZpZXc7XG59XG5cbmZ1bmN0aW9uIGluaXRWaWV3KHZpZXc6IFZpZXdEYXRhLCBjb21wb25lbnQ6IGFueSwgY29udGV4dDogYW55KSB7XG4gIHZpZXcuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB2aWV3LmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWaWV3Tm9kZXModmlldzogVmlld0RhdGEpIHtcbiAgbGV0IHJlbmRlckhvc3Q6IGFueTtcbiAgaWYgKGlzQ29tcG9uZW50Vmlldyh2aWV3KSkge1xuICAgIGNvbnN0IGhvc3REZWYgPSB2aWV3LnBhcmVudE5vZGVEZWY7XG4gICAgcmVuZGVySG9zdCA9IGFzRWxlbWVudERhdGEodmlldy5wYXJlbnQhLCBob3N0RGVmIS5wYXJlbnQhLm5vZGVJbmRleCkucmVuZGVyRWxlbWVudDtcbiAgfVxuICBjb25zdCBkZWYgPSB2aWV3LmRlZjtcbiAgY29uc3Qgbm9kZXMgPSB2aWV3Lm5vZGVzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZi5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGVEZWYgPSBkZWYubm9kZXNbaV07XG4gICAgU2VydmljZXMuc2V0Q3VycmVudE5vZGUodmlldywgaSk7XG4gICAgbGV0IG5vZGVEYXRhOiBhbnk7XG4gICAgc3dpdGNoIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVzKSB7XG4gICAgICBjYXNlIE5vZGVGbGFncy5UeXBlRWxlbWVudDpcbiAgICAgICAgY29uc3QgZWwgPSBjcmVhdGVFbGVtZW50KHZpZXcsIHJlbmRlckhvc3QsIG5vZGVEZWYpIGFzIGFueTtcbiAgICAgICAgbGV0IGNvbXBvbmVudFZpZXc6IFZpZXdEYXRhID0gdW5kZWZpbmVkITtcbiAgICAgICAgaWYgKG5vZGVEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuQ29tcG9uZW50Vmlldykge1xuICAgICAgICAgIGNvbnN0IGNvbXBWaWV3RGVmID0gcmVzb2x2ZURlZmluaXRpb24obm9kZURlZi5lbGVtZW50IS5jb21wb25lbnRWaWV3ISk7XG4gICAgICAgICAgY29tcG9uZW50VmlldyA9IFNlcnZpY2VzLmNyZWF0ZUNvbXBvbmVudFZpZXcodmlldywgbm9kZURlZiwgY29tcFZpZXdEZWYsIGVsKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5Ub0VsZW1lbnRPdXRwdXRzKHZpZXcsIGNvbXBvbmVudFZpZXcsIG5vZGVEZWYsIGVsKTtcbiAgICAgICAgbm9kZURhdGEgPSA8RWxlbWVudERhdGE+e1xuICAgICAgICAgIHJlbmRlckVsZW1lbnQ6IGVsLFxuICAgICAgICAgIGNvbXBvbmVudFZpZXcsXG4gICAgICAgICAgdmlld0NvbnRhaW5lcjogbnVsbCxcbiAgICAgICAgICB0ZW1wbGF0ZTogbm9kZURlZi5lbGVtZW50IS50ZW1wbGF0ZSA/IGNyZWF0ZVRlbXBsYXRlRGF0YSh2aWV3LCBub2RlRGVmKSA6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgICAgICBpZiAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5FbWJlZGRlZFZpZXdzKSB7XG4gICAgICAgICAgbm9kZURhdGEudmlld0NvbnRhaW5lciA9IGNyZWF0ZVZpZXdDb250YWluZXJEYXRhKHZpZXcsIG5vZGVEZWYsIG5vZGVEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVUZXh0OlxuICAgICAgICBub2RlRGF0YSA9IGNyZWF0ZVRleHQodmlldywgcmVuZGVySG9zdCwgbm9kZURlZikgYXMgYW55O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVDbGFzc1Byb3ZpZGVyOlxuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZUZhY3RvcnlQcm92aWRlcjpcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVVc2VFeGlzdGluZ1Byb3ZpZGVyOlxuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVZhbHVlUHJvdmlkZXI6IHtcbiAgICAgICAgbm9kZURhdGEgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKCFub2RlRGF0YSAmJiAhKG5vZGVEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuTGF6eVByb3ZpZGVyKSkge1xuICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gY3JlYXRlUHJvdmlkZXJJbnN0YW5jZSh2aWV3LCBub2RlRGVmKTtcbiAgICAgICAgICBub2RlRGF0YSA9IDxQcm92aWRlckRhdGE+e2luc3RhbmNlfTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQaXBlOiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gY3JlYXRlUGlwZUluc3RhbmNlKHZpZXcsIG5vZGVEZWYpO1xuICAgICAgICBub2RlRGF0YSA9IDxQcm92aWRlckRhdGE+e2luc3RhbmNlfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVGbGFncy5UeXBlRGlyZWN0aXZlOiB7XG4gICAgICAgIG5vZGVEYXRhID0gbm9kZXNbaV07XG4gICAgICAgIGlmICghbm9kZURhdGEpIHtcbiAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZURpcmVjdGl2ZUluc3RhbmNlKHZpZXcsIG5vZGVEZWYpO1xuICAgICAgICAgIG5vZGVEYXRhID0gPFByb3ZpZGVyRGF0YT57aW5zdGFuY2V9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLkNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IGNvbXBWaWV3ID0gYXNFbGVtZW50RGF0YSh2aWV3LCBub2RlRGVmLnBhcmVudCEubm9kZUluZGV4KS5jb21wb25lbnRWaWV3O1xuICAgICAgICAgIGluaXRWaWV3KGNvbXBWaWV3LCBub2RlRGF0YS5pbnN0YW5jZSwgbm9kZURhdGEuaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVB1cmVBcnJheTpcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlT2JqZWN0OlxuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVB1cmVQaXBlOlxuICAgICAgICBub2RlRGF0YSA9IGNyZWF0ZVB1cmVFeHByZXNzaW9uKHZpZXcsIG5vZGVEZWYpIGFzIGFueTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE5vZGVGbGFncy5UeXBlQ29udGVudFF1ZXJ5OlxuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVZpZXdRdWVyeTpcbiAgICAgICAgbm9kZURhdGEgPSBjcmVhdGVRdWVyeSgpIGFzIGFueTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE5vZGVGbGFncy5UeXBlTmdDb250ZW50OlxuICAgICAgICBhcHBlbmROZ0NvbnRlbnQodmlldywgcmVuZGVySG9zdCwgbm9kZURlZik7XG4gICAgICAgIC8vIG5vIHJ1bnRpbWUgZGF0YSBuZWVkZWQgZm9yIE5nQ29udGVudC4uLlxuICAgICAgICBub2RlRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG5vZGVzW2ldID0gbm9kZURhdGE7XG4gIH1cbiAgLy8gQ3JlYXRlIHRoZSBWaWV3RGF0YS5ub2RlcyBvZiBjb21wb25lbnQgdmlld3MgYWZ0ZXIgd2UgY3JlYXRlZCBldmVyeXRoaW5nIGVsc2UsXG4gIC8vIHNvIHRoYXQgZS5nLiBuZy1jb250ZW50IHdvcmtzXG4gIGV4ZWNDb21wb25lbnRWaWV3c0FjdGlvbih2aWV3LCBWaWV3QWN0aW9uLkNyZWF0ZVZpZXdOb2Rlcyk7XG5cbiAgLy8gZmlsbCBzdGF0aWMgY29udGVudCBhbmQgdmlldyBxdWVyaWVzXG4gIGV4ZWNRdWVyaWVzQWN0aW9uKFxuICAgICAgdmlldywgTm9kZUZsYWdzLlR5cGVDb250ZW50UXVlcnkgfCBOb2RlRmxhZ3MuVHlwZVZpZXdRdWVyeSwgTm9kZUZsYWdzLlN0YXRpY1F1ZXJ5LFxuICAgICAgQ2hlY2tUeXBlLkNoZWNrQW5kVXBkYXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9DaGFuZ2VzVmlldyh2aWV3OiBWaWV3RGF0YSkge1xuICBtYXJrUHJvamVjdGVkVmlld3NGb3JDaGVjayh2aWV3KTtcbiAgU2VydmljZXMudXBkYXRlRGlyZWN0aXZlcyh2aWV3LCBDaGVja1R5cGUuQ2hlY2tOb0NoYW5nZXMpO1xuICBleGVjRW1iZWRkZWRWaWV3c0FjdGlvbih2aWV3LCBWaWV3QWN0aW9uLkNoZWNrTm9DaGFuZ2VzKTtcbiAgU2VydmljZXMudXBkYXRlUmVuZGVyZXIodmlldywgQ2hlY2tUeXBlLkNoZWNrTm9DaGFuZ2VzKTtcbiAgZXhlY0NvbXBvbmVudFZpZXdzQWN0aW9uKHZpZXcsIFZpZXdBY3Rpb24uQ2hlY2tOb0NoYW5nZXMpO1xuICAvLyBOb3RlOiBXZSBkb24ndCBjaGVjayBxdWVyaWVzIGZvciBjaGFuZ2VzIGFzIHdlIGRpZG4ndCBkbyB0aGlzIGluIHYyLnguXG4gIC8vIFRPRE8odGJvc2NoKTogaW52ZXN0aWdhdGUgaWYgd2UgY2FuIGVuYWJsZSB0aGUgY2hlY2sgYWdhaW4gaW4gdjUueCB3aXRoIGEgbmljZXIgZXJyb3IgbWVzc2FnZS5cbiAgdmlldy5zdGF0ZSAmPSB+KFZpZXdTdGF0ZS5DaGVja1Byb2plY3RlZFZpZXdzIHwgVmlld1N0YXRlLkNoZWNrUHJvamVjdGVkVmlldyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FuZFVwZGF0ZVZpZXcodmlldzogVmlld0RhdGEpIHtcbiAgaWYgKHZpZXcuc3RhdGUgJiBWaWV3U3RhdGUuQmVmb3JlRmlyc3RDaGVjaykge1xuICAgIHZpZXcuc3RhdGUgJj0gflZpZXdTdGF0ZS5CZWZvcmVGaXJzdENoZWNrO1xuICAgIHZpZXcuc3RhdGUgfD0gVmlld1N0YXRlLkZpcnN0Q2hlY2s7XG4gIH0gZWxzZSB7XG4gICAgdmlldy5zdGF0ZSAmPSB+Vmlld1N0YXRlLkZpcnN0Q2hlY2s7XG4gIH1cbiAgc2hpZnRJbml0U3RhdGUodmlldywgVmlld1N0YXRlLkluaXRTdGF0ZV9CZWZvcmVJbml0LCBWaWV3U3RhdGUuSW5pdFN0YXRlX0NhbGxpbmdPbkluaXQpO1xuICBtYXJrUHJvamVjdGVkVmlld3NGb3JDaGVjayh2aWV3KTtcbiAgU2VydmljZXMudXBkYXRlRGlyZWN0aXZlcyh2aWV3LCBDaGVja1R5cGUuQ2hlY2tBbmRVcGRhdGUpO1xuICBleGVjRW1iZWRkZWRWaWV3c0FjdGlvbih2aWV3LCBWaWV3QWN0aW9uLkNoZWNrQW5kVXBkYXRlKTtcbiAgZXhlY1F1ZXJpZXNBY3Rpb24oXG4gICAgICB2aWV3LCBOb2RlRmxhZ3MuVHlwZUNvbnRlbnRRdWVyeSwgTm9kZUZsYWdzLkR5bmFtaWNRdWVyeSwgQ2hlY2tUeXBlLkNoZWNrQW5kVXBkYXRlKTtcbiAgbGV0IGNhbGxJbml0ID0gc2hpZnRJbml0U3RhdGUoXG4gICAgICB2aWV3LCBWaWV3U3RhdGUuSW5pdFN0YXRlX0NhbGxpbmdPbkluaXQsIFZpZXdTdGF0ZS5Jbml0U3RhdGVfQ2FsbGluZ0FmdGVyQ29udGVudEluaXQpO1xuICBjYWxsTGlmZWN5Y2xlSG9va3NDaGlsZHJlbkZpcnN0KFxuICAgICAgdmlldywgTm9kZUZsYWdzLkFmdGVyQ29udGVudENoZWNrZWQgfCAoY2FsbEluaXQgPyBOb2RlRmxhZ3MuQWZ0ZXJDb250ZW50SW5pdCA6IDApKTtcblxuICBTZXJ2aWNlcy51cGRhdGVSZW5kZXJlcih2aWV3LCBDaGVja1R5cGUuQ2hlY2tBbmRVcGRhdGUpO1xuXG4gIGV4ZWNDb21wb25lbnRWaWV3c0FjdGlvbih2aWV3LCBWaWV3QWN0aW9uLkNoZWNrQW5kVXBkYXRlKTtcbiAgZXhlY1F1ZXJpZXNBY3Rpb24oXG4gICAgICB2aWV3LCBOb2RlRmxhZ3MuVHlwZVZpZXdRdWVyeSwgTm9kZUZsYWdzLkR5bmFtaWNRdWVyeSwgQ2hlY2tUeXBlLkNoZWNrQW5kVXBkYXRlKTtcbiAgY2FsbEluaXQgPSBzaGlmdEluaXRTdGF0ZShcbiAgICAgIHZpZXcsIFZpZXdTdGF0ZS5Jbml0U3RhdGVfQ2FsbGluZ0FmdGVyQ29udGVudEluaXQsIFZpZXdTdGF0ZS5Jbml0U3RhdGVfQ2FsbGluZ0FmdGVyVmlld0luaXQpO1xuICBjYWxsTGlmZWN5Y2xlSG9va3NDaGlsZHJlbkZpcnN0KFxuICAgICAgdmlldywgTm9kZUZsYWdzLkFmdGVyVmlld0NoZWNrZWQgfCAoY2FsbEluaXQgPyBOb2RlRmxhZ3MuQWZ0ZXJWaWV3SW5pdCA6IDApKTtcblxuICBpZiAodmlldy5kZWYuZmxhZ3MgJiBWaWV3RmxhZ3MuT25QdXNoKSB7XG4gICAgdmlldy5zdGF0ZSAmPSB+Vmlld1N0YXRlLkNoZWNrc0VuYWJsZWQ7XG4gIH1cbiAgdmlldy5zdGF0ZSAmPSB+KFZpZXdTdGF0ZS5DaGVja1Byb2plY3RlZFZpZXdzIHwgVmlld1N0YXRlLkNoZWNrUHJvamVjdGVkVmlldyk7XG4gIHNoaWZ0SW5pdFN0YXRlKHZpZXcsIFZpZXdTdGF0ZS5Jbml0U3RhdGVfQ2FsbGluZ0FmdGVyVmlld0luaXQsIFZpZXdTdGF0ZS5Jbml0U3RhdGVfQWZ0ZXJJbml0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQW5kVXBkYXRlTm9kZShcbiAgICB2aWV3OiBWaWV3RGF0YSwgbm9kZURlZjogTm9kZURlZiwgYXJnU3R5bGU6IEFyZ3VtZW50VHlwZSwgdjA/OiBhbnksIHYxPzogYW55LCB2Mj86IGFueSxcbiAgICB2Mz86IGFueSwgdjQ/OiBhbnksIHY1PzogYW55LCB2Nj86IGFueSwgdjc/OiBhbnksIHY4PzogYW55LCB2OT86IGFueSk6IGJvb2xlYW4ge1xuICBpZiAoYXJnU3R5bGUgPT09IEFyZ3VtZW50VHlwZS5JbmxpbmUpIHtcbiAgICByZXR1cm4gY2hlY2tBbmRVcGRhdGVOb2RlSW5saW5lKHZpZXcsIG5vZGVEZWYsIHYwLCB2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2NywgdjgsIHY5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2hlY2tBbmRVcGRhdGVOb2RlRHluYW1pYyh2aWV3LCBub2RlRGVmLCB2MCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya1Byb2plY3RlZFZpZXdzRm9yQ2hlY2sodmlldzogVmlld0RhdGEpIHtcbiAgY29uc3QgZGVmID0gdmlldy5kZWY7XG4gIGlmICghKGRlZi5ub2RlRmxhZ3MgJiBOb2RlRmxhZ3MuUHJvamVjdGVkVGVtcGxhdGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZURlZiA9IGRlZi5ub2Rlc1tpXTtcbiAgICBpZiAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5Qcm9qZWN0ZWRUZW1wbGF0ZSkge1xuICAgICAgY29uc3QgcHJvamVjdGVkVmlld3MgPSBhc0VsZW1lbnREYXRhKHZpZXcsIGkpLnRlbXBsYXRlLl9wcm9qZWN0ZWRWaWV3cztcbiAgICAgIGlmIChwcm9qZWN0ZWRWaWV3cykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RlZFZpZXdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcHJvamVjdGVkVmlldyA9IHByb2plY3RlZFZpZXdzW2ldO1xuICAgICAgICAgIHByb2plY3RlZFZpZXcuc3RhdGUgfD0gVmlld1N0YXRlLkNoZWNrUHJvamVjdGVkVmlldztcbiAgICAgICAgICBtYXJrUGFyZW50Vmlld3NGb3JDaGVja1Byb2plY3RlZFZpZXdzKHByb2plY3RlZFZpZXcsIHZpZXcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgobm9kZURlZi5jaGlsZEZsYWdzICYgTm9kZUZsYWdzLlByb2plY3RlZFRlbXBsYXRlKSA9PT0gMCkge1xuICAgICAgLy8gYSBwYXJlbnQgd2l0aCBsZWFmc1xuICAgICAgLy8gbm8gY2hpbGQgaXMgYSBjb21wb25lbnQsXG4gICAgICAvLyB0aGVuIHNraXAgdGhlIGNoaWxkcmVuXG4gICAgICBpICs9IG5vZGVEZWYuY2hpbGRDb3VudDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tBbmRVcGRhdGVOb2RlSW5saW5lKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBub2RlRGVmOiBOb2RlRGVmLCB2MD86IGFueSwgdjE/OiBhbnksIHYyPzogYW55LCB2Mz86IGFueSwgdjQ/OiBhbnksIHY1PzogYW55LFxuICAgIHY2PzogYW55LCB2Nz86IGFueSwgdjg/OiBhbnksIHY5PzogYW55KTogYm9vbGVhbiB7XG4gIHN3aXRjaCAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlcykge1xuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVFbGVtZW50OlxuICAgICAgcmV0dXJuIGNoZWNrQW5kVXBkYXRlRWxlbWVudElubGluZSh2aWV3LCBub2RlRGVmLCB2MCwgdjEsIHYyLCB2MywgdjQsIHY1LCB2NiwgdjcsIHY4LCB2OSk7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVRleHQ6XG4gICAgICByZXR1cm4gY2hlY2tBbmRVcGRhdGVUZXh0SW5saW5lKHZpZXcsIG5vZGVEZWYsIHYwLCB2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2NywgdjgsIHY5KTtcbiAgICBjYXNlIE5vZGVGbGFncy5UeXBlRGlyZWN0aXZlOlxuICAgICAgcmV0dXJuIGNoZWNrQW5kVXBkYXRlRGlyZWN0aXZlSW5saW5lKHZpZXcsIG5vZGVEZWYsIHYwLCB2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2NywgdjgsIHY5KTtcbiAgICBjYXNlIE5vZGVGbGFncy5UeXBlUHVyZUFycmF5OlxuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlT2JqZWN0OlxuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlUGlwZTpcbiAgICAgIHJldHVybiBjaGVja0FuZFVwZGF0ZVB1cmVFeHByZXNzaW9uSW5saW5lKFxuICAgICAgICAgIHZpZXcsIG5vZGVEZWYsIHYwLCB2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2NywgdjgsIHY5KTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgJ3VucmVhY2hhYmxlJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0FuZFVwZGF0ZU5vZGVEeW5hbWljKHZpZXc6IFZpZXdEYXRhLCBub2RlRGVmOiBOb2RlRGVmLCB2YWx1ZXM6IGFueVtdKTogYm9vbGVhbiB7XG4gIHN3aXRjaCAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlcykge1xuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVFbGVtZW50OlxuICAgICAgcmV0dXJuIGNoZWNrQW5kVXBkYXRlRWxlbWVudER5bmFtaWModmlldywgbm9kZURlZiwgdmFsdWVzKTtcbiAgICBjYXNlIE5vZGVGbGFncy5UeXBlVGV4dDpcbiAgICAgIHJldHVybiBjaGVja0FuZFVwZGF0ZVRleHREeW5hbWljKHZpZXcsIG5vZGVEZWYsIHZhbHVlcyk7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZURpcmVjdGl2ZTpcbiAgICAgIHJldHVybiBjaGVja0FuZFVwZGF0ZURpcmVjdGl2ZUR5bmFtaWModmlldywgbm9kZURlZiwgdmFsdWVzKTtcbiAgICBjYXNlIE5vZGVGbGFncy5UeXBlUHVyZUFycmF5OlxuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlT2JqZWN0OlxuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlUGlwZTpcbiAgICAgIHJldHVybiBjaGVja0FuZFVwZGF0ZVB1cmVFeHByZXNzaW9uRHluYW1pYyh2aWV3LCBub2RlRGVmLCB2YWx1ZXMpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyAndW5yZWFjaGFibGUnO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja05vQ2hhbmdlc05vZGUoXG4gICAgdmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYsIGFyZ1N0eWxlOiBBcmd1bWVudFR5cGUsIHYwPzogYW55LCB2MT86IGFueSwgdjI/OiBhbnksXG4gICAgdjM/OiBhbnksIHY0PzogYW55LCB2NT86IGFueSwgdjY/OiBhbnksIHY3PzogYW55LCB2OD86IGFueSwgdjk/OiBhbnkpOiBhbnkge1xuICBpZiAoYXJnU3R5bGUgPT09IEFyZ3VtZW50VHlwZS5JbmxpbmUpIHtcbiAgICBjaGVja05vQ2hhbmdlc05vZGVJbmxpbmUodmlldywgbm9kZURlZiwgdjAsIHYxLCB2MiwgdjMsIHY0LCB2NSwgdjYsIHY3LCB2OCwgdjkpO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrTm9DaGFuZ2VzTm9kZUR5bmFtaWModmlldywgbm9kZURlZiwgdjApO1xuICB9XG4gIC8vIFJldHVybmluZyBmYWxzZSBpcyBvayBoZXJlIGFzIHdlIHdvdWxkIGhhdmUgdGhyb3duIGluIGNhc2Ugb2YgYSBjaGFuZ2UuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tOb0NoYW5nZXNOb2RlSW5saW5lKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBub2RlRGVmOiBOb2RlRGVmLCB2MDogYW55LCB2MTogYW55LCB2MjogYW55LCB2MzogYW55LCB2NDogYW55LCB2NTogYW55LCB2NjogYW55LFxuICAgIHY3OiBhbnksIHY4OiBhbnksIHY5OiBhbnkpOiB2b2lkIHtcbiAgY29uc3QgYmluZExlbiA9IG5vZGVEZWYuYmluZGluZ3MubGVuZ3RoO1xuICBpZiAoYmluZExlbiA+IDApIGNoZWNrQmluZGluZ05vQ2hhbmdlcyh2aWV3LCBub2RlRGVmLCAwLCB2MCk7XG4gIGlmIChiaW5kTGVuID4gMSkgY2hlY2tCaW5kaW5nTm9DaGFuZ2VzKHZpZXcsIG5vZGVEZWYsIDEsIHYxKTtcbiAgaWYgKGJpbmRMZW4gPiAyKSBjaGVja0JpbmRpbmdOb0NoYW5nZXModmlldywgbm9kZURlZiwgMiwgdjIpO1xuICBpZiAoYmluZExlbiA+IDMpIGNoZWNrQmluZGluZ05vQ2hhbmdlcyh2aWV3LCBub2RlRGVmLCAzLCB2Myk7XG4gIGlmIChiaW5kTGVuID4gNCkgY2hlY2tCaW5kaW5nTm9DaGFuZ2VzKHZpZXcsIG5vZGVEZWYsIDQsIHY0KTtcbiAgaWYgKGJpbmRMZW4gPiA1KSBjaGVja0JpbmRpbmdOb0NoYW5nZXModmlldywgbm9kZURlZiwgNSwgdjUpO1xuICBpZiAoYmluZExlbiA+IDYpIGNoZWNrQmluZGluZ05vQ2hhbmdlcyh2aWV3LCBub2RlRGVmLCA2LCB2Nik7XG4gIGlmIChiaW5kTGVuID4gNykgY2hlY2tCaW5kaW5nTm9DaGFuZ2VzKHZpZXcsIG5vZGVEZWYsIDcsIHY3KTtcbiAgaWYgKGJpbmRMZW4gPiA4KSBjaGVja0JpbmRpbmdOb0NoYW5nZXModmlldywgbm9kZURlZiwgOCwgdjgpO1xuICBpZiAoYmluZExlbiA+IDkpIGNoZWNrQmluZGluZ05vQ2hhbmdlcyh2aWV3LCBub2RlRGVmLCA5LCB2OSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTm9DaGFuZ2VzTm9kZUR5bmFtaWModmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYsIHZhbHVlczogYW55W10pOiB2b2lkIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjaGVja0JpbmRpbmdOb0NoYW5nZXModmlldywgbm9kZURlZiwgaSwgdmFsdWVzW2ldKTtcbiAgfVxufVxuXG4vKipcbiAqIFdvcmthcm91bmQgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdHNpY2tsZS9pc3N1ZXMvNDk3XG4gKiBAc3VwcHJlc3Mge21pc3BsYWNlZFR5cGVBbm5vdGF0aW9ufVxuICovXG5mdW5jdGlvbiBjaGVja05vQ2hhbmdlc1F1ZXJ5KHZpZXc6IFZpZXdEYXRhLCBub2RlRGVmOiBOb2RlRGVmKSB7XG4gIGNvbnN0IHF1ZXJ5TGlzdCA9IGFzUXVlcnlMaXN0KHZpZXcsIG5vZGVEZWYubm9kZUluZGV4KTtcbiAgaWYgKHF1ZXJ5TGlzdC5kaXJ0eSkge1xuICAgIHRocm93IGV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXJyb3IoXG4gICAgICAgIFNlcnZpY2VzLmNyZWF0ZURlYnVnQ29udGV4dCh2aWV3LCBub2RlRGVmLm5vZGVJbmRleCksXG4gICAgICAgIGBRdWVyeSAke25vZGVEZWYucXVlcnkhLmlkfSBub3QgZGlydHlgLCBgUXVlcnkgJHtub2RlRGVmLnF1ZXJ5IS5pZH0gZGlydHlgLFxuICAgICAgICAodmlldy5zdGF0ZSAmIFZpZXdTdGF0ZS5CZWZvcmVGaXJzdENoZWNrKSAhPT0gMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lWaWV3KHZpZXc6IFZpZXdEYXRhKSB7XG4gIGlmICh2aWV3LnN0YXRlICYgVmlld1N0YXRlLkRlc3Ryb3llZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBleGVjRW1iZWRkZWRWaWV3c0FjdGlvbih2aWV3LCBWaWV3QWN0aW9uLkRlc3Ryb3kpO1xuICBleGVjQ29tcG9uZW50Vmlld3NBY3Rpb24odmlldywgVmlld0FjdGlvbi5EZXN0cm95KTtcbiAgY2FsbExpZmVjeWNsZUhvb2tzQ2hpbGRyZW5GaXJzdCh2aWV3LCBOb2RlRmxhZ3MuT25EZXN0cm95KTtcbiAgaWYgKHZpZXcuZGlzcG9zYWJsZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZXcuZGlzcG9zYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZpZXcuZGlzcG9zYWJsZXNbaV0oKTtcbiAgICB9XG4gIH1cbiAgZGV0YWNoUHJvamVjdGVkVmlldyh2aWV3KTtcbiAgaWYgKHZpZXcucmVuZGVyZXIuZGVzdHJveU5vZGUpIHtcbiAgICBkZXN0cm95Vmlld05vZGVzKHZpZXcpO1xuICB9XG4gIGlmIChpc0NvbXBvbmVudFZpZXcodmlldykpIHtcbiAgICB2aWV3LnJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgfVxuICB2aWV3LnN0YXRlIHw9IFZpZXdTdGF0ZS5EZXN0cm95ZWQ7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lWaWV3Tm9kZXModmlldzogVmlld0RhdGEpIHtcbiAgY29uc3QgbGVuID0gdmlldy5kZWYubm9kZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZGVmID0gdmlldy5kZWYubm9kZXNbaV07XG4gICAgaWYgKGRlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlRWxlbWVudCkge1xuICAgICAgdmlldy5yZW5kZXJlci5kZXN0cm95Tm9kZSEoYXNFbGVtZW50RGF0YSh2aWV3LCBpKS5yZW5kZXJFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGRlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlVGV4dCkge1xuICAgICAgdmlldy5yZW5kZXJlci5kZXN0cm95Tm9kZSEoYXNUZXh0RGF0YSh2aWV3LCBpKS5yZW5kZXJUZXh0KTtcbiAgICB9IGVsc2UgaWYgKGRlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlQ29udGVudFF1ZXJ5IHx8IGRlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlVmlld1F1ZXJ5KSB7XG4gICAgICBhc1F1ZXJ5TGlzdCh2aWV3LCBpKS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG5cbmVudW0gVmlld0FjdGlvbiB7XG4gIENyZWF0ZVZpZXdOb2RlcyxcbiAgQ2hlY2tOb0NoYW5nZXMsXG4gIENoZWNrTm9DaGFuZ2VzUHJvamVjdGVkVmlld3MsXG4gIENoZWNrQW5kVXBkYXRlLFxuICBDaGVja0FuZFVwZGF0ZVByb2plY3RlZFZpZXdzLFxuICBEZXN0cm95XG59XG5cbmZ1bmN0aW9uIGV4ZWNDb21wb25lbnRWaWV3c0FjdGlvbih2aWV3OiBWaWV3RGF0YSwgYWN0aW9uOiBWaWV3QWN0aW9uKSB7XG4gIGNvbnN0IGRlZiA9IHZpZXcuZGVmO1xuICBpZiAoIShkZWYubm9kZUZsYWdzICYgTm9kZUZsYWdzLkNvbXBvbmVudFZpZXcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZURlZiA9IGRlZi5ub2Rlc1tpXTtcbiAgICBpZiAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5Db21wb25lbnRWaWV3KSB7XG4gICAgICAvLyBhIGxlYWZcbiAgICAgIGNhbGxWaWV3QWN0aW9uKGFzRWxlbWVudERhdGEodmlldywgaSkuY29tcG9uZW50VmlldywgYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKChub2RlRGVmLmNoaWxkRmxhZ3MgJiBOb2RlRmxhZ3MuQ29tcG9uZW50VmlldykgPT09IDApIHtcbiAgICAgIC8vIGEgcGFyZW50IHdpdGggbGVhZnNcbiAgICAgIC8vIG5vIGNoaWxkIGlzIGEgY29tcG9uZW50LFxuICAgICAgLy8gdGhlbiBza2lwIHRoZSBjaGlsZHJlblxuICAgICAgaSArPSBub2RlRGVmLmNoaWxkQ291bnQ7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4ZWNFbWJlZGRlZFZpZXdzQWN0aW9uKHZpZXc6IFZpZXdEYXRhLCBhY3Rpb246IFZpZXdBY3Rpb24pIHtcbiAgY29uc3QgZGVmID0gdmlldy5kZWY7XG4gIGlmICghKGRlZi5ub2RlRmxhZ3MgJiBOb2RlRmxhZ3MuRW1iZWRkZWRWaWV3cykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWYubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlRGVmID0gZGVmLm5vZGVzW2ldO1xuICAgIGlmIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLkVtYmVkZGVkVmlld3MpIHtcbiAgICAgIC8vIGEgbGVhZlxuICAgICAgY29uc3QgZW1iZWRkZWRWaWV3cyA9IGFzRWxlbWVudERhdGEodmlldywgaSkudmlld0NvbnRhaW5lciEuX2VtYmVkZGVkVmlld3M7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGVtYmVkZGVkVmlld3MubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgY2FsbFZpZXdBY3Rpb24oZW1iZWRkZWRWaWV3c1trXSwgYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChub2RlRGVmLmNoaWxkRmxhZ3MgJiBOb2RlRmxhZ3MuRW1iZWRkZWRWaWV3cykgPT09IDApIHtcbiAgICAgIC8vIGEgcGFyZW50IHdpdGggbGVhZnNcbiAgICAgIC8vIG5vIGNoaWxkIGlzIGEgY29tcG9uZW50LFxuICAgICAgLy8gdGhlbiBza2lwIHRoZSBjaGlsZHJlblxuICAgICAgaSArPSBub2RlRGVmLmNoaWxkQ291bnQ7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxWaWV3QWN0aW9uKHZpZXc6IFZpZXdEYXRhLCBhY3Rpb246IFZpZXdBY3Rpb24pIHtcbiAgY29uc3Qgdmlld1N0YXRlID0gdmlldy5zdGF0ZTtcbiAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICBjYXNlIFZpZXdBY3Rpb24uQ2hlY2tOb0NoYW5nZXM6XG4gICAgICBpZiAoKHZpZXdTdGF0ZSAmIFZpZXdTdGF0ZS5EZXN0cm95ZWQpID09PSAwKSB7XG4gICAgICAgIGlmICgodmlld1N0YXRlICYgVmlld1N0YXRlLkNhdERldGVjdENoYW5nZXMpID09PSBWaWV3U3RhdGUuQ2F0RGV0ZWN0Q2hhbmdlcykge1xuICAgICAgICAgIGNoZWNrTm9DaGFuZ2VzVmlldyh2aWV3KTtcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3U3RhdGUgJiBWaWV3U3RhdGUuQ2hlY2tQcm9qZWN0ZWRWaWV3cykge1xuICAgICAgICAgIGV4ZWNQcm9qZWN0ZWRWaWV3c0FjdGlvbih2aWV3LCBWaWV3QWN0aW9uLkNoZWNrTm9DaGFuZ2VzUHJvamVjdGVkVmlld3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFZpZXdBY3Rpb24uQ2hlY2tOb0NoYW5nZXNQcm9qZWN0ZWRWaWV3czpcbiAgICAgIGlmICgodmlld1N0YXRlICYgVmlld1N0YXRlLkRlc3Ryb3llZCkgPT09IDApIHtcbiAgICAgICAgaWYgKHZpZXdTdGF0ZSAmIFZpZXdTdGF0ZS5DaGVja1Byb2plY3RlZFZpZXcpIHtcbiAgICAgICAgICBjaGVja05vQ2hhbmdlc1ZpZXcodmlldyk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlld1N0YXRlICYgVmlld1N0YXRlLkNoZWNrUHJvamVjdGVkVmlld3MpIHtcbiAgICAgICAgICBleGVjUHJvamVjdGVkVmlld3NBY3Rpb24odmlldywgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBWaWV3QWN0aW9uLkNoZWNrQW5kVXBkYXRlOlxuICAgICAgaWYgKCh2aWV3U3RhdGUgJiBWaWV3U3RhdGUuRGVzdHJveWVkKSA9PT0gMCkge1xuICAgICAgICBpZiAoKHZpZXdTdGF0ZSAmIFZpZXdTdGF0ZS5DYXREZXRlY3RDaGFuZ2VzKSA9PT0gVmlld1N0YXRlLkNhdERldGVjdENoYW5nZXMpIHtcbiAgICAgICAgICBjaGVja0FuZFVwZGF0ZVZpZXcodmlldyk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlld1N0YXRlICYgVmlld1N0YXRlLkNoZWNrUHJvamVjdGVkVmlld3MpIHtcbiAgICAgICAgICBleGVjUHJvamVjdGVkVmlld3NBY3Rpb24odmlldywgVmlld0FjdGlvbi5DaGVja0FuZFVwZGF0ZVByb2plY3RlZFZpZXdzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBWaWV3QWN0aW9uLkNoZWNrQW5kVXBkYXRlUHJvamVjdGVkVmlld3M6XG4gICAgICBpZiAoKHZpZXdTdGF0ZSAmIFZpZXdTdGF0ZS5EZXN0cm95ZWQpID09PSAwKSB7XG4gICAgICAgIGlmICh2aWV3U3RhdGUgJiBWaWV3U3RhdGUuQ2hlY2tQcm9qZWN0ZWRWaWV3KSB7XG4gICAgICAgICAgY2hlY2tBbmRVcGRhdGVWaWV3KHZpZXcpO1xuICAgICAgICB9IGVsc2UgaWYgKHZpZXdTdGF0ZSAmIFZpZXdTdGF0ZS5DaGVja1Byb2plY3RlZFZpZXdzKSB7XG4gICAgICAgICAgZXhlY1Byb2plY3RlZFZpZXdzQWN0aW9uKHZpZXcsIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVmlld0FjdGlvbi5EZXN0cm95OlxuICAgICAgLy8gTm90ZTogZGVzdHJveVZpZXcgcmVjdXJzZXMgb3ZlciBhbGwgdmlld3MsXG4gICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIHNwZWNpYWwgY2FzZSBwcm9qZWN0ZWQgdmlld3MgaGVyZS5cbiAgICAgIGRlc3Ryb3lWaWV3KHZpZXcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBWaWV3QWN0aW9uLkNyZWF0ZVZpZXdOb2RlczpcbiAgICAgIGNyZWF0ZVZpZXdOb2Rlcyh2aWV3KTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4ZWNQcm9qZWN0ZWRWaWV3c0FjdGlvbih2aWV3OiBWaWV3RGF0YSwgYWN0aW9uOiBWaWV3QWN0aW9uKSB7XG4gIGV4ZWNFbWJlZGRlZFZpZXdzQWN0aW9uKHZpZXcsIGFjdGlvbik7XG4gIGV4ZWNDb21wb25lbnRWaWV3c0FjdGlvbih2aWV3LCBhY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBleGVjUXVlcmllc0FjdGlvbihcbiAgICB2aWV3OiBWaWV3RGF0YSwgcXVlcnlGbGFnczogTm9kZUZsYWdzLCBzdGF0aWNEeW5hbWljUXVlcnlGbGFnOiBOb2RlRmxhZ3MsXG4gICAgY2hlY2tUeXBlOiBDaGVja1R5cGUpIHtcbiAgaWYgKCEodmlldy5kZWYubm9kZUZsYWdzICYgcXVlcnlGbGFncykgfHwgISh2aWV3LmRlZi5ub2RlRmxhZ3MgJiBzdGF0aWNEeW5hbWljUXVlcnlGbGFnKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBub2RlQ291bnQgPSB2aWV3LmRlZi5ub2Rlcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUNvdW50OyBpKyspIHtcbiAgICBjb25zdCBub2RlRGVmID0gdmlldy5kZWYubm9kZXNbaV07XG4gICAgaWYgKChub2RlRGVmLmZsYWdzICYgcXVlcnlGbGFncykgJiYgKG5vZGVEZWYuZmxhZ3MgJiBzdGF0aWNEeW5hbWljUXVlcnlGbGFnKSkge1xuICAgICAgU2VydmljZXMuc2V0Q3VycmVudE5vZGUodmlldywgbm9kZURlZi5ub2RlSW5kZXgpO1xuICAgICAgc3dpdGNoIChjaGVja1R5cGUpIHtcbiAgICAgICAgY2FzZSBDaGVja1R5cGUuQ2hlY2tBbmRVcGRhdGU6XG4gICAgICAgICAgY2hlY2tBbmRVcGRhdGVRdWVyeSh2aWV3LCBub2RlRGVmKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDaGVja1R5cGUuQ2hlY2tOb0NoYW5nZXM6XG4gICAgICAgICAgY2hlY2tOb0NoYW5nZXNRdWVyeSh2aWV3LCBub2RlRGVmKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEobm9kZURlZi5jaGlsZEZsYWdzICYgcXVlcnlGbGFncykgfHwgIShub2RlRGVmLmNoaWxkRmxhZ3MgJiBzdGF0aWNEeW5hbWljUXVlcnlGbGFnKSkge1xuICAgICAgLy8gbm8gY2hpbGQgaGFzIGEgbWF0Y2hpbmcgcXVlcnlcbiAgICAgIC8vIHRoZW4gc2tpcCB0aGUgY2hpbGRyZW5cbiAgICAgIGkgKz0gbm9kZURlZi5jaGlsZENvdW50O1xuICAgIH1cbiAgfVxufVxuIl19