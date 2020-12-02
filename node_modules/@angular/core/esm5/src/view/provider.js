/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread } from "tslib";
import { ChangeDetectorRef, SimpleChange, WrappedValue } from '../change_detection/change_detection';
import { INJECTOR, Injector, resolveForwardRef } from '../di';
import { ElementRef } from '../linker/element_ref';
import { TemplateRef } from '../linker/template_ref';
import { ViewContainerRef } from '../linker/view_container_ref';
import { Renderer2 } from '../render/api';
import { isObservable } from '../util/lang';
import { stringify } from '../util/stringify';
import { createChangeDetectorRef, createInjector } from './refs';
import { asElementData, asProviderData, Services, shouldCallLifecycleInitHook } from './types';
import { calcBindingFlags, checkBinding, dispatchEvent, isComponentView, splitDepsDsl, splitMatchedQueriesDsl, tokenKey, viewParentEl } from './util';
var Renderer2TokenKey = tokenKey(Renderer2);
var ElementRefTokenKey = tokenKey(ElementRef);
var ViewContainerRefTokenKey = tokenKey(ViewContainerRef);
var TemplateRefTokenKey = tokenKey(TemplateRef);
var ChangeDetectorRefTokenKey = tokenKey(ChangeDetectorRef);
var InjectorRefTokenKey = tokenKey(Injector);
var INJECTORRefTokenKey = tokenKey(INJECTOR);
export function directiveDef(checkIndex, flags, matchedQueries, childCount, ctor, deps, props, outputs) {
    var bindings = [];
    if (props) {
        for (var prop in props) {
            var _a = __read(props[prop], 2), bindingIndex = _a[0], nonMinifiedName = _a[1];
            bindings[bindingIndex] = {
                flags: 8 /* TypeProperty */,
                name: prop,
                nonMinifiedName: nonMinifiedName,
                ns: null,
                securityContext: null,
                suffix: null
            };
        }
    }
    var outputDefs = [];
    if (outputs) {
        for (var propName in outputs) {
            outputDefs.push({ type: 1 /* DirectiveOutput */, propName: propName, target: null, eventName: outputs[propName] });
        }
    }
    flags |= 16384 /* TypeDirective */;
    return _def(checkIndex, flags, matchedQueries, childCount, ctor, ctor, deps, bindings, outputDefs);
}
export function pipeDef(flags, ctor, deps) {
    flags |= 16 /* TypePipe */;
    return _def(-1, flags, null, 0, ctor, ctor, deps);
}
export function providerDef(flags, matchedQueries, token, value, deps) {
    return _def(-1, flags, matchedQueries, 0, token, value, deps);
}
export function _def(checkIndex, flags, matchedQueriesDsl, childCount, token, value, deps, bindings, outputs) {
    var _a = splitMatchedQueriesDsl(matchedQueriesDsl), matchedQueries = _a.matchedQueries, references = _a.references, matchedQueryIds = _a.matchedQueryIds;
    if (!outputs) {
        outputs = [];
    }
    if (!bindings) {
        bindings = [];
    }
    // Need to resolve forwardRefs as e.g. for `useValue` we
    // lowered the expression and then stopped evaluating it,
    // i.e. also didn't unwrap it.
    value = resolveForwardRef(value);
    var depDefs = splitDepsDsl(deps, stringify(token));
    return {
        // will bet set by the view definition
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        // regular values
        checkIndex: checkIndex,
        flags: flags,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: matchedQueries,
        matchedQueryIds: matchedQueryIds,
        references: references,
        ngContentIndex: -1,
        childCount: childCount,
        bindings: bindings,
        bindingFlags: calcBindingFlags(bindings),
        outputs: outputs,
        element: null,
        provider: { token: token, value: value, deps: depDefs },
        text: null,
        query: null,
        ngContent: null
    };
}
export function createProviderInstance(view, def) {
    return _createProviderInstance(view, def);
}
export function createPipeInstance(view, def) {
    // deps are looked up from component.
    var compView = view;
    while (compView.parent && !isComponentView(compView)) {
        compView = compView.parent;
    }
    // pipes can see the private services of the component
    var allowPrivateServices = true;
    // pipes are always eager and classes!
    return createClass(compView.parent, viewParentEl(compView), allowPrivateServices, def.provider.value, def.provider.deps);
}
export function createDirectiveInstance(view, def) {
    // components can see other private services, other directives can't.
    var allowPrivateServices = (def.flags & 32768 /* Component */) > 0;
    // directives are always eager and classes!
    var instance = createClass(view, def.parent, allowPrivateServices, def.provider.value, def.provider.deps);
    if (def.outputs.length) {
        for (var i = 0; i < def.outputs.length; i++) {
            var output = def.outputs[i];
            var outputObservable = instance[output.propName];
            if (isObservable(outputObservable)) {
                var subscription = outputObservable.subscribe(eventHandlerClosure(view, def.parent.nodeIndex, output.eventName));
                view.disposables[def.outputIndex + i] = subscription.unsubscribe.bind(subscription);
            }
            else {
                throw new Error("@Output " + output.propName + " not initialized in '" + instance.constructor.name + "'.");
            }
        }
    }
    return instance;
}
function eventHandlerClosure(view, index, eventName) {
    return function (event) { return dispatchEvent(view, index, eventName, event); };
}
export function checkAndUpdateDirectiveInline(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    var providerData = asProviderData(view, def.nodeIndex);
    var directive = providerData.instance;
    var changed = false;
    var changes = undefined;
    var bindLen = def.bindings.length;
    if (bindLen > 0 && checkBinding(view, def, 0, v0)) {
        changed = true;
        changes = updateProp(view, providerData, def, 0, v0, changes);
    }
    if (bindLen > 1 && checkBinding(view, def, 1, v1)) {
        changed = true;
        changes = updateProp(view, providerData, def, 1, v1, changes);
    }
    if (bindLen > 2 && checkBinding(view, def, 2, v2)) {
        changed = true;
        changes = updateProp(view, providerData, def, 2, v2, changes);
    }
    if (bindLen > 3 && checkBinding(view, def, 3, v3)) {
        changed = true;
        changes = updateProp(view, providerData, def, 3, v3, changes);
    }
    if (bindLen > 4 && checkBinding(view, def, 4, v4)) {
        changed = true;
        changes = updateProp(view, providerData, def, 4, v4, changes);
    }
    if (bindLen > 5 && checkBinding(view, def, 5, v5)) {
        changed = true;
        changes = updateProp(view, providerData, def, 5, v5, changes);
    }
    if (bindLen > 6 && checkBinding(view, def, 6, v6)) {
        changed = true;
        changes = updateProp(view, providerData, def, 6, v6, changes);
    }
    if (bindLen > 7 && checkBinding(view, def, 7, v7)) {
        changed = true;
        changes = updateProp(view, providerData, def, 7, v7, changes);
    }
    if (bindLen > 8 && checkBinding(view, def, 8, v8)) {
        changed = true;
        changes = updateProp(view, providerData, def, 8, v8, changes);
    }
    if (bindLen > 9 && checkBinding(view, def, 9, v9)) {
        changed = true;
        changes = updateProp(view, providerData, def, 9, v9, changes);
    }
    if (changes) {
        directive.ngOnChanges(changes);
    }
    if ((def.flags & 65536 /* OnInit */) &&
        shouldCallLifecycleInitHook(view, 256 /* InitState_CallingOnInit */, def.nodeIndex)) {
        directive.ngOnInit();
    }
    if (def.flags & 262144 /* DoCheck */) {
        directive.ngDoCheck();
    }
    return changed;
}
export function checkAndUpdateDirectiveDynamic(view, def, values) {
    var providerData = asProviderData(view, def.nodeIndex);
    var directive = providerData.instance;
    var changed = false;
    var changes = undefined;
    for (var i = 0; i < values.length; i++) {
        if (checkBinding(view, def, i, values[i])) {
            changed = true;
            changes = updateProp(view, providerData, def, i, values[i], changes);
        }
    }
    if (changes) {
        directive.ngOnChanges(changes);
    }
    if ((def.flags & 65536 /* OnInit */) &&
        shouldCallLifecycleInitHook(view, 256 /* InitState_CallingOnInit */, def.nodeIndex)) {
        directive.ngOnInit();
    }
    if (def.flags & 262144 /* DoCheck */) {
        directive.ngDoCheck();
    }
    return changed;
}
function _createProviderInstance(view, def) {
    // private services can see other private services
    var allowPrivateServices = (def.flags & 8192 /* PrivateProvider */) > 0;
    var providerDef = def.provider;
    switch (def.flags & 201347067 /* Types */) {
        case 512 /* TypeClassProvider */:
            return createClass(view, def.parent, allowPrivateServices, providerDef.value, providerDef.deps);
        case 1024 /* TypeFactoryProvider */:
            return callFactory(view, def.parent, allowPrivateServices, providerDef.value, providerDef.deps);
        case 2048 /* TypeUseExistingProvider */:
            return resolveDep(view, def.parent, allowPrivateServices, providerDef.deps[0]);
        case 256 /* TypeValueProvider */:
            return providerDef.value;
    }
}
function createClass(view, elDef, allowPrivateServices, ctor, deps) {
    var len = deps.length;
    switch (len) {
        case 0:
            return new ctor();
        case 1:
            return new ctor(resolveDep(view, elDef, allowPrivateServices, deps[0]));
        case 2:
            return new ctor(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]));
        case 3:
            return new ctor(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]), resolveDep(view, elDef, allowPrivateServices, deps[2]));
        default:
            var depValues = [];
            for (var i = 0; i < len; i++) {
                depValues.push(resolveDep(view, elDef, allowPrivateServices, deps[i]));
            }
            return new (ctor.bind.apply(ctor, __spread([void 0], depValues)))();
    }
}
function callFactory(view, elDef, allowPrivateServices, factory, deps) {
    var len = deps.length;
    switch (len) {
        case 0:
            return factory();
        case 1:
            return factory(resolveDep(view, elDef, allowPrivateServices, deps[0]));
        case 2:
            return factory(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]));
        case 3:
            return factory(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]), resolveDep(view, elDef, allowPrivateServices, deps[2]));
        default:
            var depValues = [];
            for (var i = 0; i < len; i++) {
                depValues.push(resolveDep(view, elDef, allowPrivateServices, deps[i]));
            }
            return factory.apply(void 0, __spread(depValues));
    }
}
// This default value is when checking the hierarchy for a token.
//
// It means both:
// - the token is not provided by the current injector,
// - only the element injectors should be checked (ie do not check module injectors
//
//          mod1
//         /
//       el1   mod2
//         \  /
//         el2
//
// When requesting el2.injector.get(token), we should check in the following order and return the
// first found value:
// - el2.injector.get(token, default)
// - el1.injector.get(token, NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR) -> do not check the module
// - mod2.injector.get(token, default)
export var NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR = {};
export function resolveDep(view, elDef, allowPrivateServices, depDef, notFoundValue) {
    if (notFoundValue === void 0) { notFoundValue = Injector.THROW_IF_NOT_FOUND; }
    if (depDef.flags & 8 /* Value */) {
        return depDef.token;
    }
    var startView = view;
    if (depDef.flags & 2 /* Optional */) {
        notFoundValue = null;
    }
    var tokenKey = depDef.tokenKey;
    if (tokenKey === ChangeDetectorRefTokenKey) {
        // directives on the same element as a component should be able to control the change detector
        // of that component as well.
        allowPrivateServices = !!(elDef && elDef.element.componentView);
    }
    if (elDef && (depDef.flags & 1 /* SkipSelf */)) {
        allowPrivateServices = false;
        elDef = elDef.parent;
    }
    var searchView = view;
    while (searchView) {
        if (elDef) {
            switch (tokenKey) {
                case Renderer2TokenKey: {
                    var compView = findCompView(searchView, elDef, allowPrivateServices);
                    return compView.renderer;
                }
                case ElementRefTokenKey:
                    return new ElementRef(asElementData(searchView, elDef.nodeIndex).renderElement);
                case ViewContainerRefTokenKey:
                    return asElementData(searchView, elDef.nodeIndex).viewContainer;
                case TemplateRefTokenKey: {
                    if (elDef.element.template) {
                        return asElementData(searchView, elDef.nodeIndex).template;
                    }
                    break;
                }
                case ChangeDetectorRefTokenKey: {
                    var cdView = findCompView(searchView, elDef, allowPrivateServices);
                    return createChangeDetectorRef(cdView);
                }
                case InjectorRefTokenKey:
                case INJECTORRefTokenKey:
                    return createInjector(searchView, elDef);
                default:
                    var providerDef_1 = (allowPrivateServices ? elDef.element.allProviders :
                        elDef.element.publicProviders)[tokenKey];
                    if (providerDef_1) {
                        var providerData = asProviderData(searchView, providerDef_1.nodeIndex);
                        if (!providerData) {
                            providerData = { instance: _createProviderInstance(searchView, providerDef_1) };
                            searchView.nodes[providerDef_1.nodeIndex] = providerData;
                        }
                        return providerData.instance;
                    }
            }
        }
        allowPrivateServices = isComponentView(searchView);
        elDef = viewParentEl(searchView);
        searchView = searchView.parent;
        if (depDef.flags & 4 /* Self */) {
            searchView = null;
        }
    }
    var value = startView.root.injector.get(depDef.token, NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR);
    if (value !== NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR ||
        notFoundValue === NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR) {
        // Return the value from the root element injector when
        // - it provides it
        //   (value !== NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR)
        // - the module injector should not be checked
        //   (notFoundValue === NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR)
        return value;
    }
    return startView.root.ngModule.injector.get(depDef.token, notFoundValue);
}
function findCompView(view, elDef, allowPrivateServices) {
    var compView;
    if (allowPrivateServices) {
        compView = asElementData(view, elDef.nodeIndex).componentView;
    }
    else {
        compView = view;
        while (compView.parent && !isComponentView(compView)) {
            compView = compView.parent;
        }
    }
    return compView;
}
function updateProp(view, providerData, def, bindingIdx, value, changes) {
    if (def.flags & 32768 /* Component */) {
        var compView = asElementData(view, def.parent.nodeIndex).componentView;
        if (compView.def.flags & 2 /* OnPush */) {
            compView.state |= 8 /* ChecksEnabled */;
        }
    }
    var binding = def.bindings[bindingIdx];
    var propName = binding.name;
    // Note: This is still safe with Closure Compiler as
    // the user passed in the property name as an object has to `providerDef`,
    // so Closure Compiler will have renamed the property correctly already.
    providerData.instance[propName] = value;
    if (def.flags & 524288 /* OnChanges */) {
        changes = changes || {};
        var oldValue = WrappedValue.unwrap(view.oldValues[def.bindingIndex + bindingIdx]);
        var binding_1 = def.bindings[bindingIdx];
        changes[binding_1.nonMinifiedName] =
            new SimpleChange(oldValue, value, (view.state & 2 /* FirstCheck */) !== 0);
    }
    view.oldValues[def.bindingIndex + bindingIdx] = value;
    return changes;
}
// This function calls the ngAfterContentCheck, ngAfterContentInit,
// ngAfterViewCheck, and ngAfterViewInit lifecycle hooks (depending on the node
// flags in lifecycle). Unlike ngDoCheck, ngOnChanges and ngOnInit, which are
// called during a pre-order traversal of the view tree (that is calling the
// parent hooks before the child hooks) these events are sent in using a
// post-order traversal of the tree (children before parents). This changes the
// meaning of initIndex in the view state. For ngOnInit, initIndex tracks the
// expected nodeIndex which a ngOnInit should be called. When sending
// ngAfterContentInit and ngAfterViewInit it is the expected count of
// ngAfterContentInit or ngAfterViewInit methods that have been called. This
// ensure that despite being called recursively or after picking up after an
// exception, the ngAfterContentInit or ngAfterViewInit will be called on the
// correct nodes. Consider for example, the following (where E is an element
// and D is a directive)
//  Tree:       pre-order index  post-order index
//    E1        0                6
//      E2      1                1
//       D3     2                0
//      E4      3                5
//       E5     4                4
//        E6    5                2
//        E7    6                3
// As can be seen, the post-order index has an unclear relationship to the
// pre-order index (postOrderIndex === preOrderIndex - parentCount +
// childCount). Since number of calls to ngAfterContentInit and ngAfterViewInit
// are stable (will be the same for the same view regardless of exceptions or
// recursion) we just need to count them which will roughly correspond to the
// post-order index (it skips elements and directives that do not have
// lifecycle hooks).
//
// For example, if an exception is raised in the E6.onAfterViewInit() the
// initIndex is left at 3 (by shouldCallLifecycleInitHook() which set it to
// initIndex + 1). When checkAndUpdateView() is called again D3, E2 and E6 will
// not have their ngAfterViewInit() called but, starting with E7, the rest of
// the view will begin getting ngAfterViewInit() called until a check and
// pass is complete.
//
// This algorthim also handles recursion. Consider if E4's ngAfterViewInit()
// indirectly calls E1's ChangeDetectorRef.detectChanges(). The expected
// initIndex is set to 6, the recusive checkAndUpdateView() starts walk again.
// D3, E2, E6, E7, E5 and E4 are skipped, ngAfterViewInit() is called on E1.
// When the recursion returns the initIndex will be 7 so E1 is skipped as it
// has already been called in the recursively called checkAnUpdateView().
export function callLifecycleHooksChildrenFirst(view, lifecycles) {
    if (!(view.def.nodeFlags & lifecycles)) {
        return;
    }
    var nodes = view.def.nodes;
    var initIndex = 0;
    for (var i = 0; i < nodes.length; i++) {
        var nodeDef = nodes[i];
        var parent_1 = nodeDef.parent;
        if (!parent_1 && nodeDef.flags & lifecycles) {
            // matching root node (e.g. a pipe)
            callProviderLifecycles(view, i, nodeDef.flags & lifecycles, initIndex++);
        }
        if ((nodeDef.childFlags & lifecycles) === 0) {
            // no child matches one of the lifecycles
            i += nodeDef.childCount;
        }
        while (parent_1 && (parent_1.flags & 1 /* TypeElement */) &&
            i === parent_1.nodeIndex + parent_1.childCount) {
            // last child of an element
            if (parent_1.directChildFlags & lifecycles) {
                initIndex = callElementProvidersLifecycles(view, parent_1, lifecycles, initIndex);
            }
            parent_1 = parent_1.parent;
        }
    }
}
function callElementProvidersLifecycles(view, elDef, lifecycles, initIndex) {
    for (var i = elDef.nodeIndex + 1; i <= elDef.nodeIndex + elDef.childCount; i++) {
        var nodeDef = view.def.nodes[i];
        if (nodeDef.flags & lifecycles) {
            callProviderLifecycles(view, i, nodeDef.flags & lifecycles, initIndex++);
        }
        // only visit direct children
        i += nodeDef.childCount;
    }
    return initIndex;
}
function callProviderLifecycles(view, index, lifecycles, initIndex) {
    var providerData = asProviderData(view, index);
    if (!providerData) {
        return;
    }
    var provider = providerData.instance;
    if (!provider) {
        return;
    }
    Services.setCurrentNode(view, index);
    if (lifecycles & 1048576 /* AfterContentInit */ &&
        shouldCallLifecycleInitHook(view, 512 /* InitState_CallingAfterContentInit */, initIndex)) {
        provider.ngAfterContentInit();
    }
    if (lifecycles & 2097152 /* AfterContentChecked */) {
        provider.ngAfterContentChecked();
    }
    if (lifecycles & 4194304 /* AfterViewInit */ &&
        shouldCallLifecycleInitHook(view, 768 /* InitState_CallingAfterViewInit */, initIndex)) {
        provider.ngAfterViewInit();
    }
    if (lifecycles & 8388608 /* AfterViewChecked */) {
        provider.ngAfterViewChecked();
    }
    if (lifecycles & 131072 /* OnDestroy */) {
        provider.ngOnDestroy();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy92aWV3L3Byb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsWUFBWSxFQUFpQixZQUFZLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNsSCxPQUFPLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUM1RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFNUMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLGNBQWMsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFFLGNBQWMsRUFBdUgsUUFBUSxFQUFFLDJCQUEyQixFQUFpQyxNQUFNLFNBQVMsQ0FBQztBQUNsUCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFcEosSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsSUFB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SSxDQUFDO1FBQ2YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJ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QUcsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE9BQU87S0FDUjtJQUNELElBQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDdkMsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNiLE9BQU87S0FDUjtJQUNELFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLElBQUksVUFBVSxpQ0FBNkI7UUFDdkMsMkJBQTJCLENBQUMsSUFBSSwrQ0FBK0MsU0FBUyxDQUFDLEVBQUU7UUFDN0YsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDL0I7SUFDRCxJQUFJLFVBQVUsb0NBQWdDLEVBQUU7UUFDOUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDbEM7SUFDRCxJQUFJLFVBQVUsOEJBQTBCO1FBQ3BDLDJCQUEyQixDQUFDLElBQUksNENBQTRDLFNBQVMsQ0FBQyxFQUFFO1FBQzFGLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUM1QjtJQUNELElBQUksVUFBVSxpQ0FBNkIsRUFBRTtRQUMzQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMvQjtJQUNELElBQUksVUFBVSx5QkFBc0IsRUFBRTtRQUNwQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDeEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMsIFdyYXBwZWRWYWx1ZX0gZnJvbSAnLi4vY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7SU5KRUNUT1IsIEluamVjdG9yLCByZXNvbHZlRm9yd2FyZFJlZn0gZnJvbSAnLi4vZGknO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICcuLi9saW5rZXIvZWxlbWVudF9yZWYnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlZn0gZnJvbSAnLi4vbGlua2VyL3RlbXBsYXRlX3JlZic7XG5pbXBvcnQge1ZpZXdDb250YWluZXJSZWZ9IGZyb20gJy4uL2xpbmtlci92aWV3X2NvbnRhaW5lcl9yZWYnO1xuaW1wb3J0IHtSZW5kZXJlcjJ9IGZyb20gJy4uL3JlbmRlci9hcGknO1xuaW1wb3J0IHtpc09ic2VydmFibGV9IGZyb20gJy4uL3V0aWwvbGFuZyc7XG5pbXBvcnQge3N0cmluZ2lmeX0gZnJvbSAnLi4vdXRpbC9zdHJpbmdpZnknO1xuXG5pbXBvcnQge2NyZWF0ZUNoYW5nZURldGVjdG9yUmVmLCBjcmVhdGVJbmplY3Rvcn0gZnJvbSAnLi9yZWZzJztcbmltcG9ydCB7YXNFbGVtZW50RGF0YSwgYXNQcm92aWRlckRhdGEsIEJpbmRpbmdEZWYsIEJpbmRpbmdGbGFncywgRGVwRGVmLCBEZXBGbGFncywgTm9kZURlZiwgTm9kZUZsYWdzLCBPdXRwdXREZWYsIE91dHB1dFR5cGUsIFByb3ZpZGVyRGF0YSwgUXVlcnlWYWx1ZVR5cGUsIFNlcnZpY2VzLCBzaG91bGRDYWxsTGlmZWN5Y2xlSW5pdEhvb2ssIFZpZXdEYXRhLCBWaWV3RmxhZ3MsIFZpZXdTdGF0ZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2NhbGNCaW5kaW5nRmxhZ3MsIGNoZWNrQmluZGluZywgZGlzcGF0Y2hFdmVudCwgaXNDb21wb25lbnRWaWV3LCBzcGxpdERlcHNEc2wsIHNwbGl0TWF0Y2hlZFF1ZXJpZXNEc2wsIHRva2VuS2V5LCB2aWV3UGFyZW50RWx9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IFJlbmRlcmVyMlRva2VuS2V5ID0gdG9rZW5LZXkoUmVuZGVyZXIyKTtcbmNvbnN0IEVsZW1lbnRSZWZUb2tlbktleSA9IHRva2VuS2V5KEVsZW1lbnRSZWYpO1xuY29uc3QgVmlld0NvbnRhaW5lclJlZlRva2VuS2V5ID0gdG9rZW5LZXkoVmlld0NvbnRhaW5lclJlZik7XG5jb25zdCBUZW1wbGF0ZVJlZlRva2VuS2V5ID0gdG9rZW5LZXkoVGVtcGxhdGVSZWYpO1xuY29uc3QgQ2hhbmdlRGV0ZWN0b3JSZWZUb2tlbktleSA9IHRva2VuS2V5KENoYW5nZURldGVjdG9yUmVmKTtcbmNvbnN0IEluamVjdG9yUmVmVG9rZW5LZXkgPSB0b2tlbktleShJbmplY3Rvcik7XG5jb25zdCBJTkpFQ1RPUlJlZlRva2VuS2V5ID0gdG9rZW5LZXkoSU5KRUNUT1IpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlRGVmKFxuICAgIGNoZWNrSW5kZXg6IG51bWJlciwgZmxhZ3M6IE5vZGVGbGFncywgbWF0Y2hlZFF1ZXJpZXM6IG51bGx8W3N0cmluZyB8IG51bWJlciwgUXVlcnlWYWx1ZVR5cGVdW10sXG4gICAgY2hpbGRDb3VudDogbnVtYmVyLCBjdG9yOiBhbnksIGRlcHM6IChbRGVwRmxhZ3MsIGFueV18YW55KVtdLFxuICAgIHByb3BzPzogbnVsbHx7W25hbWU6IHN0cmluZ106IFtudW1iZXIsIHN0cmluZ119LFxuICAgIG91dHB1dHM/OiBudWxsfHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfSk6IE5vZGVEZWYge1xuICBjb25zdCBiaW5kaW5nczogQmluZGluZ0RlZltdID0gW107XG4gIGlmIChwcm9wcykge1xuICAgIGZvciAobGV0IHByb3AgaW4gcHJvcHMpIHtcbiAgICAgIGNvbnN0IFtiaW5kaW5nSW5kZXgsIG5vbk1pbmlmaWVkTmFtZV0gPSBwcm9wc1twcm9wXTtcbiAgICAgIGJpbmRpbmdzW2JpbmRpbmdJbmRleF0gPSB7XG4gICAgICAgIGZsYWdzOiBCaW5kaW5nRmxhZ3MuVHlwZVByb3BlcnR5LFxuICAgICAgICBuYW1lOiBwcm9wLFxuICAgICAgICBub25NaW5pZmllZE5hbWUsXG4gICAgICAgIG5zOiBudWxsLFxuICAgICAgICBzZWN1cml0eUNvbnRleHQ6IG51bGwsXG4gICAgICAgIHN1ZmZpeDogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgb3V0cHV0RGVmczogT3V0cHV0RGVmW10gPSBbXTtcbiAgaWYgKG91dHB1dHMpIHtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBvdXRwdXRzKSB7XG4gICAgICBvdXRwdXREZWZzLnB1c2goXG4gICAgICAgICAge3R5cGU6IE91dHB1dFR5cGUuRGlyZWN0aXZlT3V0cHV0LCBwcm9wTmFtZSwgdGFyZ2V0OiBudWxsLCBldmVudE5hbWU6IG91dHB1dHNbcHJvcE5hbWVdfSk7XG4gICAgfVxuICB9XG4gIGZsYWdzIHw9IE5vZGVGbGFncy5UeXBlRGlyZWN0aXZlO1xuICByZXR1cm4gX2RlZihcbiAgICAgIGNoZWNrSW5kZXgsIGZsYWdzLCBtYXRjaGVkUXVlcmllcywgY2hpbGRDb3VudCwgY3RvciwgY3RvciwgZGVwcywgYmluZGluZ3MsIG91dHB1dERlZnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGlwZURlZihmbGFnczogTm9kZUZsYWdzLCBjdG9yOiBhbnksIGRlcHM6IChbRGVwRmxhZ3MsIGFueV18YW55KVtdKTogTm9kZURlZiB7XG4gIGZsYWdzIHw9IE5vZGVGbGFncy5UeXBlUGlwZTtcbiAgcmV0dXJuIF9kZWYoLTEsIGZsYWdzLCBudWxsLCAwLCBjdG9yLCBjdG9yLCBkZXBzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVyRGVmKFxuICAgIGZsYWdzOiBOb2RlRmxhZ3MsIG1hdGNoZWRRdWVyaWVzOiBudWxsfFtzdHJpbmcgfCBudW1iZXIsIFF1ZXJ5VmFsdWVUeXBlXVtdLCB0b2tlbjogYW55LFxuICAgIHZhbHVlOiBhbnksIGRlcHM6IChbRGVwRmxhZ3MsIGFueV18YW55KVtdKTogTm9kZURlZiB7XG4gIHJldHVybiBfZGVmKC0xLCBmbGFncywgbWF0Y2hlZFF1ZXJpZXMsIDAsIHRva2VuLCB2YWx1ZSwgZGVwcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZGVmKFxuICAgIGNoZWNrSW5kZXg6IG51bWJlciwgZmxhZ3M6IE5vZGVGbGFncywgbWF0Y2hlZFF1ZXJpZXNEc2w6IFtzdHJpbmd8bnVtYmVyLCBRdWVyeVZhbHVlVHlwZV1bXXxudWxsLFxuICAgIGNoaWxkQ291bnQ6IG51bWJlciwgdG9rZW46IGFueSwgdmFsdWU6IGFueSwgZGVwczogKFtEZXBGbGFncywgYW55XXxhbnkpW10sXG4gICAgYmluZGluZ3M/OiBCaW5kaW5nRGVmW10sIG91dHB1dHM/OiBPdXRwdXREZWZbXSk6IE5vZGVEZWYge1xuICBjb25zdCB7bWF0Y2hlZFF1ZXJpZXMsIHJlZmVyZW5jZXMsIG1hdGNoZWRRdWVyeUlkc30gPSBzcGxpdE1hdGNoZWRRdWVyaWVzRHNsKG1hdGNoZWRRdWVyaWVzRHNsKTtcbiAgaWYgKCFvdXRwdXRzKSB7XG4gICAgb3V0cHV0cyA9IFtdO1xuICB9XG4gIGlmICghYmluZGluZ3MpIHtcbiAgICBiaW5kaW5ncyA9IFtdO1xuICB9XG4gIC8vIE5lZWQgdG8gcmVzb2x2ZSBmb3J3YXJkUmVmcyBhcyBlLmcuIGZvciBgdXNlVmFsdWVgIHdlXG4gIC8vIGxvd2VyZWQgdGhlIGV4cHJlc3Npb24gYW5kIHRoZW4gc3RvcHBlZCBldmFsdWF0aW5nIGl0LFxuICAvLyBpLmUuIGFsc28gZGlkbid0IHVud3JhcCBpdC5cbiAgdmFsdWUgPSByZXNvbHZlRm9yd2FyZFJlZih2YWx1ZSk7XG5cbiAgY29uc3QgZGVwRGVmcyA9IHNwbGl0RGVwc0RzbChkZXBzLCBzdHJpbmdpZnkodG9rZW4pKTtcblxuICByZXR1cm4ge1xuICAgIC8vIHdpbGwgYmV0IHNldCBieSB0aGUgdmlldyBkZWZpbml0aW9uXG4gICAgbm9kZUluZGV4OiAtMSxcbiAgICBwYXJlbnQ6IG51bGwsXG4gICAgcmVuZGVyUGFyZW50OiBudWxsLFxuICAgIGJpbmRpbmdJbmRleDogLTEsXG4gICAgb3V0cHV0SW5kZXg6IC0xLFxuICAgIC8vIHJlZ3VsYXIgdmFsdWVzXG4gICAgY2hlY2tJbmRleCxcbiAgICBmbGFncyxcbiAgICBjaGlsZEZsYWdzOiAwLFxuICAgIGRpcmVjdENoaWxkRmxhZ3M6IDAsXG4gICAgY2hpbGRNYXRjaGVkUXVlcmllczogMCxcbiAgICBtYXRjaGVkUXVlcmllcyxcbiAgICBtYXRjaGVkUXVlcnlJZHMsXG4gICAgcmVmZXJlbmNlcyxcbiAgICBuZ0NvbnRlbnRJbmRleDogLTEsXG4gICAgY2hpbGRDb3VudCxcbiAgICBiaW5kaW5ncyxcbiAgICBiaW5kaW5nRmxhZ3M6IGNhbGNCaW5kaW5nRmxhZ3MoYmluZGluZ3MpLFxuICAgIG91dHB1dHMsXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBwcm92aWRlcjoge3Rva2VuLCB2YWx1ZSwgZGVwczogZGVwRGVmc30sXG4gICAgdGV4dDogbnVsbCxcbiAgICBxdWVyeTogbnVsbCxcbiAgICBuZ0NvbnRlbnQ6IG51bGxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb3ZpZGVySW5zdGFuY2UodmlldzogVmlld0RhdGEsIGRlZjogTm9kZURlZik6IGFueSB7XG4gIHJldHVybiBfY3JlYXRlUHJvdmlkZXJJbnN0YW5jZSh2aWV3LCBkZWYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGlwZUluc3RhbmNlKHZpZXc6IFZpZXdEYXRhLCBkZWY6IE5vZGVEZWYpOiBhbnkge1xuICAvLyBkZXBzIGFyZSBsb29rZWQgdXAgZnJvbSBjb21wb25lbnQuXG4gIGxldCBjb21wVmlldyA9IHZpZXc7XG4gIHdoaWxlIChjb21wVmlldy5wYXJlbnQgJiYgIWlzQ29tcG9uZW50Vmlldyhjb21wVmlldykpIHtcbiAgICBjb21wVmlldyA9IGNvbXBWaWV3LnBhcmVudDtcbiAgfVxuICAvLyBwaXBlcyBjYW4gc2VlIHRoZSBwcml2YXRlIHNlcnZpY2VzIG9mIHRoZSBjb21wb25lbnRcbiAgY29uc3QgYWxsb3dQcml2YXRlU2VydmljZXMgPSB0cnVlO1xuICAvLyBwaXBlcyBhcmUgYWx3YXlzIGVhZ2VyIGFuZCBjbGFzc2VzIVxuICByZXR1cm4gY3JlYXRlQ2xhc3MoXG4gICAgICBjb21wVmlldy5wYXJlbnQhLCB2aWV3UGFyZW50RWwoY29tcFZpZXcpISwgYWxsb3dQcml2YXRlU2VydmljZXMsIGRlZi5wcm92aWRlciEudmFsdWUsXG4gICAgICBkZWYucHJvdmlkZXIhLmRlcHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlyZWN0aXZlSW5zdGFuY2UodmlldzogVmlld0RhdGEsIGRlZjogTm9kZURlZik6IGFueSB7XG4gIC8vIGNvbXBvbmVudHMgY2FuIHNlZSBvdGhlciBwcml2YXRlIHNlcnZpY2VzLCBvdGhlciBkaXJlY3RpdmVzIGNhbid0LlxuICBjb25zdCBhbGxvd1ByaXZhdGVTZXJ2aWNlcyA9IChkZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuQ29tcG9uZW50KSA+IDA7XG4gIC8vIGRpcmVjdGl2ZXMgYXJlIGFsd2F5cyBlYWdlciBhbmQgY2xhc3NlcyFcbiAgY29uc3QgaW5zdGFuY2UgPVxuICAgICAgY3JlYXRlQ2xhc3ModmlldywgZGVmLnBhcmVudCEsIGFsbG93UHJpdmF0ZVNlcnZpY2VzLCBkZWYucHJvdmlkZXIhLnZhbHVlLCBkZWYucHJvdmlkZXIhLmRlcHMpO1xuICBpZiAoZGVmLm91dHB1dHMubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWYub3V0cHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gZGVmLm91dHB1dHNbaV07XG4gICAgICBjb25zdCBvdXRwdXRPYnNlcnZhYmxlID0gaW5zdGFuY2Vbb3V0cHV0LnByb3BOYW1lIV07XG4gICAgICBpZiAoaXNPYnNlcnZhYmxlKG91dHB1dE9ic2VydmFibGUpKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG91dHB1dE9ic2VydmFibGUuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyQ2xvc3VyZSh2aWV3LCBkZWYucGFyZW50IS5ub2RlSW5kZXgsIG91dHB1dC5ldmVudE5hbWUpKTtcbiAgICAgICAgdmlldy5kaXNwb3NhYmxlcyFbZGVmLm91dHB1dEluZGV4ICsgaV0gPSBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUuYmluZChzdWJzY3JpcHRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEBPdXRwdXQgJHtvdXRwdXQucHJvcE5hbWV9IG5vdCBpbml0aWFsaXplZCBpbiAnJHtpbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lfScuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuZnVuY3Rpb24gZXZlbnRIYW5kbGVyQ2xvc3VyZSh2aWV3OiBWaWV3RGF0YSwgaW5kZXg6IG51bWJlciwgZXZlbnROYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChldmVudDogYW55KSA9PiBkaXNwYXRjaEV2ZW50KHZpZXcsIGluZGV4LCBldmVudE5hbWUsIGV2ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQW5kVXBkYXRlRGlyZWN0aXZlSW5saW5lKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBkZWY6IE5vZGVEZWYsIHYwOiBhbnksIHYxOiBhbnksIHYyOiBhbnksIHYzOiBhbnksIHY0OiBhbnksIHY1OiBhbnksIHY2OiBhbnksXG4gICAgdjc6IGFueSwgdjg6IGFueSwgdjk6IGFueSk6IGJvb2xlYW4ge1xuICBjb25zdCBwcm92aWRlckRhdGEgPSBhc1Byb3ZpZGVyRGF0YSh2aWV3LCBkZWYubm9kZUluZGV4KTtcbiAgY29uc3QgZGlyZWN0aXZlID0gcHJvdmlkZXJEYXRhLmluc3RhbmNlO1xuICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICBsZXQgY2hhbmdlczogU2ltcGxlQ2hhbmdlcyA9IHVuZGVmaW5lZCE7XG4gIGNvbnN0IGJpbmRMZW4gPSBkZWYuYmluZGluZ3MubGVuZ3RoO1xuICBpZiAoYmluZExlbiA+IDAgJiYgY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgMCwgdjApKSB7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gICAgY2hhbmdlcyA9IHVwZGF0ZVByb3AodmlldywgcHJvdmlkZXJEYXRhLCBkZWYsIDAsIHYwLCBjaGFuZ2VzKTtcbiAgfVxuICBpZiAoYmluZExlbiA+IDEgJiYgY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgMSwgdjEpKSB7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gICAgY2hhbmdlcyA9IHVwZGF0ZVByb3AodmlldywgcHJvdmlkZXJEYXRhLCBkZWYsIDEsIHYxLCBjaGFuZ2VzKTtcbiAgfVxuICBpZiAoYmluZExlbiA+IDIgJiYgY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgMiwgdjIpKSB7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gICAgY2hhbmdlcyA9IHVwZGF0ZVByb3AodmlldywgcHJvdmlkZXJEYXRhLCBkZWYsIDIsIHYyLCBjaGFuZ2VzKTtcbiAgfVxuICBpZiAoYmluZExlbiA+IDMgJiYgY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgMywgdjMpKSB7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gICAgY2hhbmdlcyA9IHVwZGF0ZVByb3AodmlldywgcHJvdmlkZXJEYXRhLCBkZWYsIDMsIHYzLCBjaGFuZ2VzKTtcbiAgfVxuICBpZiAoYmluZExlbiA+IDQgJiYgY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgNCwgdjQpKSB7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gICAgY2hhbmdlcyA9IHVwZGF0ZVByb3AodmlldywgcHJvdmlkZXJEYXRhLCBkZWYsIDQsIHY0LCBjaGFuZ2VzKTtcbiAgfVxuICBpZiAoYmluZExlbiA+IDUgJiYgY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgNSwgdjUpKSB7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gICAgY2hhbmdlcyA9IHVwZGF0ZVByb3AodmlldywgcHJvdmlkZXJEYXRhLCBkZWYsIDUsIHY1LCBjaGFuZ2VzKTtcbiAgfVxuICBpZiAoYmluZExlbiA+IDYgJiYgY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgNiwgdjYpKSB7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gICAgY2hhbmdlcyA9IHVwZGF0ZVByb3AodmlldywgcHJvdmlkZXJEYXRhLCBkZWYsIDYsIHY2LCBjaGFuZ2VzKTtcbiAgfVxuICBpZiAoYmluZExlbiA+IDcgJiYgY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgNywgdjcpKSB7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gICAgY2hhbmdlcyA9IHVwZGF0ZVByb3AodmlldywgcHJvdmlkZXJEYXRhLCBkZWYsIDcsIHY3LCBjaGFuZ2VzKTtcbiAgfVxuICBpZiAoYmluZExlbiA+IDggJiYgY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgOCwgdjgpKSB7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gICAgY2hhbmdlcyA9IHVwZGF0ZVByb3AodmlldywgcHJvdmlkZXJEYXRhLCBkZWYsIDgsIHY4LCBjaGFuZ2VzKTtcbiAgfVxuICBpZiAoYmluZExlbiA+IDkgJiYgY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgOSwgdjkpKSB7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gICAgY2hhbmdlcyA9IHVwZGF0ZVByb3AodmlldywgcHJvdmlkZXJEYXRhLCBkZWYsIDksIHY5LCBjaGFuZ2VzKTtcbiAgfVxuICBpZiAoY2hhbmdlcykge1xuICAgIGRpcmVjdGl2ZS5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxuICBpZiAoKGRlZi5mbGFncyAmIE5vZGVGbGFncy5PbkluaXQpICYmXG4gICAgICBzaG91bGRDYWxsTGlmZWN5Y2xlSW5pdEhvb2sodmlldywgVmlld1N0YXRlLkluaXRTdGF0ZV9DYWxsaW5nT25Jbml0LCBkZWYubm9kZUluZGV4KSkge1xuICAgIGRpcmVjdGl2ZS5uZ09uSW5pdCgpO1xuICB9XG4gIGlmIChkZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuRG9DaGVjaykge1xuICAgIGRpcmVjdGl2ZS5uZ0RvQ2hlY2soKTtcbiAgfVxuICByZXR1cm4gY2hhbmdlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQW5kVXBkYXRlRGlyZWN0aXZlRHluYW1pYyhcbiAgICB2aWV3OiBWaWV3RGF0YSwgZGVmOiBOb2RlRGVmLCB2YWx1ZXM6IGFueVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IHByb3ZpZGVyRGF0YSA9IGFzUHJvdmlkZXJEYXRhKHZpZXcsIGRlZi5ub2RlSW5kZXgpO1xuICBjb25zdCBkaXJlY3RpdmUgPSBwcm92aWRlckRhdGEuaW5zdGFuY2U7XG4gIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gIGxldCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzID0gdW5kZWZpbmVkITtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgaSwgdmFsdWVzW2ldKSkge1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICBjaGFuZ2VzID0gdXBkYXRlUHJvcCh2aWV3LCBwcm92aWRlckRhdGEsIGRlZiwgaSwgdmFsdWVzW2ldLCBjaGFuZ2VzKTtcbiAgICB9XG4gIH1cbiAgaWYgKGNoYW5nZXMpIHtcbiAgICBkaXJlY3RpdmUubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cbiAgaWYgKChkZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuT25Jbml0KSAmJlxuICAgICAgc2hvdWxkQ2FsbExpZmVjeWNsZUluaXRIb29rKHZpZXcsIFZpZXdTdGF0ZS5Jbml0U3RhdGVfQ2FsbGluZ09uSW5pdCwgZGVmLm5vZGVJbmRleCkpIHtcbiAgICBkaXJlY3RpdmUubmdPbkluaXQoKTtcbiAgfVxuICBpZiAoZGVmLmZsYWdzICYgTm9kZUZsYWdzLkRvQ2hlY2spIHtcbiAgICBkaXJlY3RpdmUubmdEb0NoZWNrKCk7XG4gIH1cbiAgcmV0dXJuIGNoYW5nZWQ7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm92aWRlckluc3RhbmNlKHZpZXc6IFZpZXdEYXRhLCBkZWY6IE5vZGVEZWYpOiBhbnkge1xuICAvLyBwcml2YXRlIHNlcnZpY2VzIGNhbiBzZWUgb3RoZXIgcHJpdmF0ZSBzZXJ2aWNlc1xuICBjb25zdCBhbGxvd1ByaXZhdGVTZXJ2aWNlcyA9IChkZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuUHJpdmF0ZVByb3ZpZGVyKSA+IDA7XG4gIGNvbnN0IHByb3ZpZGVyRGVmID0gZGVmLnByb3ZpZGVyO1xuICBzd2l0Y2ggKGRlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlcykge1xuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVDbGFzc1Byb3ZpZGVyOlxuICAgICAgcmV0dXJuIGNyZWF0ZUNsYXNzKFxuICAgICAgICAgIHZpZXcsIGRlZi5wYXJlbnQhLCBhbGxvd1ByaXZhdGVTZXJ2aWNlcywgcHJvdmlkZXJEZWYhLnZhbHVlLCBwcm92aWRlckRlZiEuZGVwcyk7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZUZhY3RvcnlQcm92aWRlcjpcbiAgICAgIHJldHVybiBjYWxsRmFjdG9yeShcbiAgICAgICAgICB2aWV3LCBkZWYucGFyZW50ISwgYWxsb3dQcml2YXRlU2VydmljZXMsIHByb3ZpZGVyRGVmIS52YWx1ZSwgcHJvdmlkZXJEZWYhLmRlcHMpO1xuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVVc2VFeGlzdGluZ1Byb3ZpZGVyOlxuICAgICAgcmV0dXJuIHJlc29sdmVEZXAodmlldywgZGVmLnBhcmVudCEsIGFsbG93UHJpdmF0ZVNlcnZpY2VzLCBwcm92aWRlckRlZiEuZGVwc1swXSk7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVZhbHVlUHJvdmlkZXI6XG4gICAgICByZXR1cm4gcHJvdmlkZXJEZWYhLnZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBlbERlZjogTm9kZURlZiwgYWxsb3dQcml2YXRlU2VydmljZXM6IGJvb2xlYW4sIGN0b3I6IGFueSwgZGVwczogRGVwRGVmW10pOiBhbnkge1xuICBjb25zdCBsZW4gPSBkZXBzLmxlbmd0aDtcbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gbmV3IGN0b3IoKTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gbmV3IGN0b3IocmVzb2x2ZURlcCh2aWV3LCBlbERlZiwgYWxsb3dQcml2YXRlU2VydmljZXMsIGRlcHNbMF0pKTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gbmV3IGN0b3IoXG4gICAgICAgICAgcmVzb2x2ZURlcCh2aWV3LCBlbERlZiwgYWxsb3dQcml2YXRlU2VydmljZXMsIGRlcHNbMF0pLFxuICAgICAgICAgIHJlc29sdmVEZXAodmlldywgZWxEZWYsIGFsbG93UHJpdmF0ZVNlcnZpY2VzLCBkZXBzWzFdKSk7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIG5ldyBjdG9yKFxuICAgICAgICAgIHJlc29sdmVEZXAodmlldywgZWxEZWYsIGFsbG93UHJpdmF0ZVNlcnZpY2VzLCBkZXBzWzBdKSxcbiAgICAgICAgICByZXNvbHZlRGVwKHZpZXcsIGVsRGVmLCBhbGxvd1ByaXZhdGVTZXJ2aWNlcywgZGVwc1sxXSksXG4gICAgICAgICAgcmVzb2x2ZURlcCh2aWV3LCBlbERlZiwgYWxsb3dQcml2YXRlU2VydmljZXMsIGRlcHNbMl0pKTtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc3QgZGVwVmFsdWVzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGRlcFZhbHVlcy5wdXNoKHJlc29sdmVEZXAodmlldywgZWxEZWYsIGFsbG93UHJpdmF0ZVNlcnZpY2VzLCBkZXBzW2ldKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IGN0b3IoLi4uZGVwVmFsdWVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsRmFjdG9yeShcbiAgICB2aWV3OiBWaWV3RGF0YSwgZWxEZWY6IE5vZGVEZWYsIGFsbG93UHJpdmF0ZVNlcnZpY2VzOiBib29sZWFuLCBmYWN0b3J5OiBhbnksXG4gICAgZGVwczogRGVwRGVmW10pOiBhbnkge1xuICBjb25zdCBsZW4gPSBkZXBzLmxlbmd0aDtcbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gZmFjdG9yeSgpO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBmYWN0b3J5KHJlc29sdmVEZXAodmlldywgZWxEZWYsIGFsbG93UHJpdmF0ZVNlcnZpY2VzLCBkZXBzWzBdKSk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGZhY3RvcnkoXG4gICAgICAgICAgcmVzb2x2ZURlcCh2aWV3LCBlbERlZiwgYWxsb3dQcml2YXRlU2VydmljZXMsIGRlcHNbMF0pLFxuICAgICAgICAgIHJlc29sdmVEZXAodmlldywgZWxEZWYsIGFsbG93UHJpdmF0ZVNlcnZpY2VzLCBkZXBzWzFdKSk7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGZhY3RvcnkoXG4gICAgICAgICAgcmVzb2x2ZURlcCh2aWV3LCBlbERlZiwgYWxsb3dQcml2YXRlU2VydmljZXMsIGRlcHNbMF0pLFxuICAgICAgICAgIHJlc29sdmVEZXAodmlldywgZWxEZWYsIGFsbG93UHJpdmF0ZVNlcnZpY2VzLCBkZXBzWzFdKSxcbiAgICAgICAgICByZXNvbHZlRGVwKHZpZXcsIGVsRGVmLCBhbGxvd1ByaXZhdGVTZXJ2aWNlcywgZGVwc1syXSkpO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zdCBkZXBWYWx1ZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZGVwVmFsdWVzLnB1c2gocmVzb2x2ZURlcCh2aWV3LCBlbERlZiwgYWxsb3dQcml2YXRlU2VydmljZXMsIGRlcHNbaV0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWN0b3J5KC4uLmRlcFZhbHVlcyk7XG4gIH1cbn1cblxuLy8gVGhpcyBkZWZhdWx0IHZhbHVlIGlzIHdoZW4gY2hlY2tpbmcgdGhlIGhpZXJhcmNoeSBmb3IgYSB0b2tlbi5cbi8vXG4vLyBJdCBtZWFucyBib3RoOlxuLy8gLSB0aGUgdG9rZW4gaXMgbm90IHByb3ZpZGVkIGJ5IHRoZSBjdXJyZW50IGluamVjdG9yLFxuLy8gLSBvbmx5IHRoZSBlbGVtZW50IGluamVjdG9ycyBzaG91bGQgYmUgY2hlY2tlZCAoaWUgZG8gbm90IGNoZWNrIG1vZHVsZSBpbmplY3RvcnNcbi8vXG4vLyAgICAgICAgICBtb2QxXG4vLyAgICAgICAgIC9cbi8vICAgICAgIGVsMSAgIG1vZDJcbi8vICAgICAgICAgXFwgIC9cbi8vICAgICAgICAgZWwyXG4vL1xuLy8gV2hlbiByZXF1ZXN0aW5nIGVsMi5pbmplY3Rvci5nZXQodG9rZW4pLCB3ZSBzaG91bGQgY2hlY2sgaW4gdGhlIGZvbGxvd2luZyBvcmRlciBhbmQgcmV0dXJuIHRoZVxuLy8gZmlyc3QgZm91bmQgdmFsdWU6XG4vLyAtIGVsMi5pbmplY3Rvci5nZXQodG9rZW4sIGRlZmF1bHQpXG4vLyAtIGVsMS5pbmplY3Rvci5nZXQodG9rZW4sIE5PVF9GT1VORF9DSEVDS19PTkxZX0VMRU1FTlRfSU5KRUNUT1IpIC0+IGRvIG5vdCBjaGVjayB0aGUgbW9kdWxlXG4vLyAtIG1vZDIuaW5qZWN0b3IuZ2V0KHRva2VuLCBkZWZhdWx0KVxuZXhwb3J0IGNvbnN0IE5PVF9GT1VORF9DSEVDS19PTkxZX0VMRU1FTlRfSU5KRUNUT1IgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVEZXAoXG4gICAgdmlldzogVmlld0RhdGEsIGVsRGVmOiBOb2RlRGVmLCBhbGxvd1ByaXZhdGVTZXJ2aWNlczogYm9vbGVhbiwgZGVwRGVmOiBEZXBEZWYsXG4gICAgbm90Rm91bmRWYWx1ZTogYW55ID0gSW5qZWN0b3IuVEhST1dfSUZfTk9UX0ZPVU5EKTogYW55IHtcbiAgaWYgKGRlcERlZi5mbGFncyAmIERlcEZsYWdzLlZhbHVlKSB7XG4gICAgcmV0dXJuIGRlcERlZi50b2tlbjtcbiAgfVxuICBjb25zdCBzdGFydFZpZXcgPSB2aWV3O1xuICBpZiAoZGVwRGVmLmZsYWdzICYgRGVwRmxhZ3MuT3B0aW9uYWwpIHtcbiAgICBub3RGb3VuZFZhbHVlID0gbnVsbDtcbiAgfVxuICBjb25zdCB0b2tlbktleSA9IGRlcERlZi50b2tlbktleTtcblxuICBpZiAodG9rZW5LZXkgPT09IENoYW5nZURldGVjdG9yUmVmVG9rZW5LZXkpIHtcbiAgICAvLyBkaXJlY3RpdmVzIG9uIHRoZSBzYW1lIGVsZW1lbnQgYXMgYSBjb21wb25lbnQgc2hvdWxkIGJlIGFibGUgdG8gY29udHJvbCB0aGUgY2hhbmdlIGRldGVjdG9yXG4gICAgLy8gb2YgdGhhdCBjb21wb25lbnQgYXMgd2VsbC5cbiAgICBhbGxvd1ByaXZhdGVTZXJ2aWNlcyA9ICEhKGVsRGVmICYmIGVsRGVmLmVsZW1lbnQhLmNvbXBvbmVudFZpZXcpO1xuICB9XG5cbiAgaWYgKGVsRGVmICYmIChkZXBEZWYuZmxhZ3MgJiBEZXBGbGFncy5Ta2lwU2VsZikpIHtcbiAgICBhbGxvd1ByaXZhdGVTZXJ2aWNlcyA9IGZhbHNlO1xuICAgIGVsRGVmID0gZWxEZWYucGFyZW50ITtcbiAgfVxuXG4gIGxldCBzZWFyY2hWaWV3OiBWaWV3RGF0YXxudWxsID0gdmlldztcbiAgd2hpbGUgKHNlYXJjaFZpZXcpIHtcbiAgICBpZiAoZWxEZWYpIHtcbiAgICAgIHN3aXRjaCAodG9rZW5LZXkpIHtcbiAgICAgICAgY2FzZSBSZW5kZXJlcjJUb2tlbktleToge1xuICAgICAgICAgIGNvbnN0IGNvbXBWaWV3ID0gZmluZENvbXBWaWV3KHNlYXJjaFZpZXcsIGVsRGVmLCBhbGxvd1ByaXZhdGVTZXJ2aWNlcyk7XG4gICAgICAgICAgcmV0dXJuIGNvbXBWaWV3LnJlbmRlcmVyO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgRWxlbWVudFJlZlRva2VuS2V5OlxuICAgICAgICAgIHJldHVybiBuZXcgRWxlbWVudFJlZihhc0VsZW1lbnREYXRhKHNlYXJjaFZpZXcsIGVsRGVmLm5vZGVJbmRleCkucmVuZGVyRWxlbWVudCk7XG4gICAgICAgIGNhc2UgVmlld0NvbnRhaW5lclJlZlRva2VuS2V5OlxuICAgICAgICAgIHJldHVybiBhc0VsZW1lbnREYXRhKHNlYXJjaFZpZXcsIGVsRGVmLm5vZGVJbmRleCkudmlld0NvbnRhaW5lcjtcbiAgICAgICAgY2FzZSBUZW1wbGF0ZVJlZlRva2VuS2V5OiB7XG4gICAgICAgICAgaWYgKGVsRGVmLmVsZW1lbnQhLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXNFbGVtZW50RGF0YShzZWFyY2hWaWV3LCBlbERlZi5ub2RlSW5kZXgpLnRlbXBsYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYW5nZURldGVjdG9yUmVmVG9rZW5LZXk6IHtcbiAgICAgICAgICBsZXQgY2RWaWV3ID0gZmluZENvbXBWaWV3KHNlYXJjaFZpZXcsIGVsRGVmLCBhbGxvd1ByaXZhdGVTZXJ2aWNlcyk7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYW5nZURldGVjdG9yUmVmKGNkVmlldyk7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBJbmplY3RvclJlZlRva2VuS2V5OlxuICAgICAgICBjYXNlIElOSkVDVE9SUmVmVG9rZW5LZXk6XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUluamVjdG9yKHNlYXJjaFZpZXcsIGVsRGVmKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zdCBwcm92aWRlckRlZiA9XG4gICAgICAgICAgICAgIChhbGxvd1ByaXZhdGVTZXJ2aWNlcyA/IGVsRGVmLmVsZW1lbnQhLmFsbFByb3ZpZGVycyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsRGVmLmVsZW1lbnQhLnB1YmxpY1Byb3ZpZGVycykhW3Rva2VuS2V5XTtcbiAgICAgICAgICBpZiAocHJvdmlkZXJEZWYpIHtcbiAgICAgICAgICAgIGxldCBwcm92aWRlckRhdGEgPSBhc1Byb3ZpZGVyRGF0YShzZWFyY2hWaWV3LCBwcm92aWRlckRlZi5ub2RlSW5kZXgpO1xuICAgICAgICAgICAgaWYgKCFwcm92aWRlckRhdGEpIHtcbiAgICAgICAgICAgICAgcHJvdmlkZXJEYXRhID0ge2luc3RhbmNlOiBfY3JlYXRlUHJvdmlkZXJJbnN0YW5jZShzZWFyY2hWaWV3LCBwcm92aWRlckRlZil9O1xuICAgICAgICAgICAgICBzZWFyY2hWaWV3Lm5vZGVzW3Byb3ZpZGVyRGVmLm5vZGVJbmRleF0gPSBwcm92aWRlckRhdGEgYXMgYW55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyRGF0YS5pbnN0YW5jZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWxsb3dQcml2YXRlU2VydmljZXMgPSBpc0NvbXBvbmVudFZpZXcoc2VhcmNoVmlldyk7XG4gICAgZWxEZWYgPSB2aWV3UGFyZW50RWwoc2VhcmNoVmlldykhO1xuICAgIHNlYXJjaFZpZXcgPSBzZWFyY2hWaWV3LnBhcmVudCE7XG5cbiAgICBpZiAoZGVwRGVmLmZsYWdzICYgRGVwRmxhZ3MuU2VsZikge1xuICAgICAgc2VhcmNoVmlldyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmFsdWUgPSBzdGFydFZpZXcucm9vdC5pbmplY3Rvci5nZXQoZGVwRGVmLnRva2VuLCBOT1RfRk9VTkRfQ0hFQ0tfT05MWV9FTEVNRU5UX0lOSkVDVE9SKTtcblxuICBpZiAodmFsdWUgIT09IE5PVF9GT1VORF9DSEVDS19PTkxZX0VMRU1FTlRfSU5KRUNUT1IgfHxcbiAgICAgIG5vdEZvdW5kVmFsdWUgPT09IE5PVF9GT1VORF9DSEVDS19PTkxZX0VMRU1FTlRfSU5KRUNUT1IpIHtcbiAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIGZyb20gdGhlIHJvb3QgZWxlbWVudCBpbmplY3RvciB3aGVuXG4gICAgLy8gLSBpdCBwcm92aWRlcyBpdFxuICAgIC8vICAgKHZhbHVlICE9PSBOT1RfRk9VTkRfQ0hFQ0tfT05MWV9FTEVNRU5UX0lOSkVDVE9SKVxuICAgIC8vIC0gdGhlIG1vZHVsZSBpbmplY3RvciBzaG91bGQgbm90IGJlIGNoZWNrZWRcbiAgICAvLyAgIChub3RGb3VuZFZhbHVlID09PSBOT1RfRk9VTkRfQ0hFQ0tfT05MWV9FTEVNRU5UX0lOSkVDVE9SKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGFydFZpZXcucm9vdC5uZ01vZHVsZS5pbmplY3Rvci5nZXQoZGVwRGVmLnRva2VuLCBub3RGb3VuZFZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZmluZENvbXBWaWV3KHZpZXc6IFZpZXdEYXRhLCBlbERlZjogTm9kZURlZiwgYWxsb3dQcml2YXRlU2VydmljZXM6IGJvb2xlYW4pIHtcbiAgbGV0IGNvbXBWaWV3OiBWaWV3RGF0YTtcbiAgaWYgKGFsbG93UHJpdmF0ZVNlcnZpY2VzKSB7XG4gICAgY29tcFZpZXcgPSBhc0VsZW1lbnREYXRhKHZpZXcsIGVsRGVmLm5vZGVJbmRleCkuY29tcG9uZW50VmlldztcbiAgfSBlbHNlIHtcbiAgICBjb21wVmlldyA9IHZpZXc7XG4gICAgd2hpbGUgKGNvbXBWaWV3LnBhcmVudCAmJiAhaXNDb21wb25lbnRWaWV3KGNvbXBWaWV3KSkge1xuICAgICAgY29tcFZpZXcgPSBjb21wVmlldy5wYXJlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb21wVmlldztcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvcChcbiAgICB2aWV3OiBWaWV3RGF0YSwgcHJvdmlkZXJEYXRhOiBQcm92aWRlckRhdGEsIGRlZjogTm9kZURlZiwgYmluZGluZ0lkeDogbnVtYmVyLCB2YWx1ZTogYW55LFxuICAgIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiBTaW1wbGVDaGFuZ2VzIHtcbiAgaWYgKGRlZi5mbGFncyAmIE5vZGVGbGFncy5Db21wb25lbnQpIHtcbiAgICBjb25zdCBjb21wVmlldyA9IGFzRWxlbWVudERhdGEodmlldywgZGVmLnBhcmVudCEubm9kZUluZGV4KS5jb21wb25lbnRWaWV3O1xuICAgIGlmIChjb21wVmlldy5kZWYuZmxhZ3MgJiBWaWV3RmxhZ3MuT25QdXNoKSB7XG4gICAgICBjb21wVmlldy5zdGF0ZSB8PSBWaWV3U3RhdGUuQ2hlY2tzRW5hYmxlZDtcbiAgICB9XG4gIH1cbiAgY29uc3QgYmluZGluZyA9IGRlZi5iaW5kaW5nc1tiaW5kaW5nSWR4XTtcbiAgY29uc3QgcHJvcE5hbWUgPSBiaW5kaW5nLm5hbWUhO1xuICAvLyBOb3RlOiBUaGlzIGlzIHN0aWxsIHNhZmUgd2l0aCBDbG9zdXJlIENvbXBpbGVyIGFzXG4gIC8vIHRoZSB1c2VyIHBhc3NlZCBpbiB0aGUgcHJvcGVydHkgbmFtZSBhcyBhbiBvYmplY3QgaGFzIHRvIGBwcm92aWRlckRlZmAsXG4gIC8vIHNvIENsb3N1cmUgQ29tcGlsZXIgd2lsbCBoYXZlIHJlbmFtZWQgdGhlIHByb3BlcnR5IGNvcnJlY3RseSBhbHJlYWR5LlxuICBwcm92aWRlckRhdGEuaW5zdGFuY2VbcHJvcE5hbWVdID0gdmFsdWU7XG4gIGlmIChkZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuT25DaGFuZ2VzKSB7XG4gICAgY2hhbmdlcyA9IGNoYW5nZXMgfHwge307XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBXcmFwcGVkVmFsdWUudW53cmFwKHZpZXcub2xkVmFsdWVzW2RlZi5iaW5kaW5nSW5kZXggKyBiaW5kaW5nSWR4XSk7XG4gICAgY29uc3QgYmluZGluZyA9IGRlZi5iaW5kaW5nc1tiaW5kaW5nSWR4XTtcbiAgICBjaGFuZ2VzW2JpbmRpbmcubm9uTWluaWZpZWROYW1lIV0gPVxuICAgICAgICBuZXcgU2ltcGxlQ2hhbmdlKG9sZFZhbHVlLCB2YWx1ZSwgKHZpZXcuc3RhdGUgJiBWaWV3U3RhdGUuRmlyc3RDaGVjaykgIT09IDApO1xuICB9XG4gIHZpZXcub2xkVmFsdWVzW2RlZi5iaW5kaW5nSW5kZXggKyBiaW5kaW5nSWR4XSA9IHZhbHVlO1xuICByZXR1cm4gY2hhbmdlcztcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBjYWxscyB0aGUgbmdBZnRlckNvbnRlbnRDaGVjaywgbmdBZnRlckNvbnRlbnRJbml0LFxuLy8gbmdBZnRlclZpZXdDaGVjaywgYW5kIG5nQWZ0ZXJWaWV3SW5pdCBsaWZlY3ljbGUgaG9va3MgKGRlcGVuZGluZyBvbiB0aGUgbm9kZVxuLy8gZmxhZ3MgaW4gbGlmZWN5Y2xlKS4gVW5saWtlIG5nRG9DaGVjaywgbmdPbkNoYW5nZXMgYW5kIG5nT25Jbml0LCB3aGljaCBhcmVcbi8vIGNhbGxlZCBkdXJpbmcgYSBwcmUtb3JkZXIgdHJhdmVyc2FsIG9mIHRoZSB2aWV3IHRyZWUgKHRoYXQgaXMgY2FsbGluZyB0aGVcbi8vIHBhcmVudCBob29rcyBiZWZvcmUgdGhlIGNoaWxkIGhvb2tzKSB0aGVzZSBldmVudHMgYXJlIHNlbnQgaW4gdXNpbmcgYVxuLy8gcG9zdC1vcmRlciB0cmF2ZXJzYWwgb2YgdGhlIHRyZWUgKGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzKS4gVGhpcyBjaGFuZ2VzIHRoZVxuLy8gbWVhbmluZyBvZiBpbml0SW5kZXggaW4gdGhlIHZpZXcgc3RhdGUuIEZvciBuZ09uSW5pdCwgaW5pdEluZGV4IHRyYWNrcyB0aGVcbi8vIGV4cGVjdGVkIG5vZGVJbmRleCB3aGljaCBhIG5nT25Jbml0IHNob3VsZCBiZSBjYWxsZWQuIFdoZW4gc2VuZGluZ1xuLy8gbmdBZnRlckNvbnRlbnRJbml0IGFuZCBuZ0FmdGVyVmlld0luaXQgaXQgaXMgdGhlIGV4cGVjdGVkIGNvdW50IG9mXG4vLyBuZ0FmdGVyQ29udGVudEluaXQgb3IgbmdBZnRlclZpZXdJbml0IG1ldGhvZHMgdGhhdCBoYXZlIGJlZW4gY2FsbGVkLiBUaGlzXG4vLyBlbnN1cmUgdGhhdCBkZXNwaXRlIGJlaW5nIGNhbGxlZCByZWN1cnNpdmVseSBvciBhZnRlciBwaWNraW5nIHVwIGFmdGVyIGFuXG4vLyBleGNlcHRpb24sIHRoZSBuZ0FmdGVyQ29udGVudEluaXQgb3IgbmdBZnRlclZpZXdJbml0IHdpbGwgYmUgY2FsbGVkIG9uIHRoZVxuLy8gY29ycmVjdCBub2Rlcy4gQ29uc2lkZXIgZm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmcgKHdoZXJlIEUgaXMgYW4gZWxlbWVudFxuLy8gYW5kIEQgaXMgYSBkaXJlY3RpdmUpXG4vLyAgVHJlZTogICAgICAgcHJlLW9yZGVyIGluZGV4ICBwb3N0LW9yZGVyIGluZGV4XG4vLyAgICBFMSAgICAgICAgMCAgICAgICAgICAgICAgICA2XG4vLyAgICAgIEUyICAgICAgMSAgICAgICAgICAgICAgICAxXG4vLyAgICAgICBEMyAgICAgMiAgICAgICAgICAgICAgICAwXG4vLyAgICAgIEU0ICAgICAgMyAgICAgICAgICAgICAgICA1XG4vLyAgICAgICBFNSAgICAgNCAgICAgICAgICAgICAgICA0XG4vLyAgICAgICAgRTYgICAgNSAgICAgICAgICAgICAgICAyXG4vLyAgICAgICAgRTcgICAgNiAgICAgICAgICAgICAgICAzXG4vLyBBcyBjYW4gYmUgc2VlbiwgdGhlIHBvc3Qtb3JkZXIgaW5kZXggaGFzIGFuIHVuY2xlYXIgcmVsYXRpb25zaGlwIHRvIHRoZVxuLy8gcHJlLW9yZGVyIGluZGV4IChwb3N0T3JkZXJJbmRleCA9PT0gcHJlT3JkZXJJbmRleCAtIHBhcmVudENvdW50ICtcbi8vIGNoaWxkQ291bnQpLiBTaW5jZSBudW1iZXIgb2YgY2FsbHMgdG8gbmdBZnRlckNvbnRlbnRJbml0IGFuZCBuZ0FmdGVyVmlld0luaXRcbi8vIGFyZSBzdGFibGUgKHdpbGwgYmUgdGhlIHNhbWUgZm9yIHRoZSBzYW1lIHZpZXcgcmVnYXJkbGVzcyBvZiBleGNlcHRpb25zIG9yXG4vLyByZWN1cnNpb24pIHdlIGp1c3QgbmVlZCB0byBjb3VudCB0aGVtIHdoaWNoIHdpbGwgcm91Z2hseSBjb3JyZXNwb25kIHRvIHRoZVxuLy8gcG9zdC1vcmRlciBpbmRleCAoaXQgc2tpcHMgZWxlbWVudHMgYW5kIGRpcmVjdGl2ZXMgdGhhdCBkbyBub3QgaGF2ZVxuLy8gbGlmZWN5Y2xlIGhvb2tzKS5cbi8vXG4vLyBGb3IgZXhhbXBsZSwgaWYgYW4gZXhjZXB0aW9uIGlzIHJhaXNlZCBpbiB0aGUgRTYub25BZnRlclZpZXdJbml0KCkgdGhlXG4vLyBpbml0SW5kZXggaXMgbGVmdCBhdCAzIChieSBzaG91bGRDYWxsTGlmZWN5Y2xlSW5pdEhvb2soKSB3aGljaCBzZXQgaXQgdG9cbi8vIGluaXRJbmRleCArIDEpLiBXaGVuIGNoZWNrQW5kVXBkYXRlVmlldygpIGlzIGNhbGxlZCBhZ2FpbiBEMywgRTIgYW5kIEU2IHdpbGxcbi8vIG5vdCBoYXZlIHRoZWlyIG5nQWZ0ZXJWaWV3SW5pdCgpIGNhbGxlZCBidXQsIHN0YXJ0aW5nIHdpdGggRTcsIHRoZSByZXN0IG9mXG4vLyB0aGUgdmlldyB3aWxsIGJlZ2luIGdldHRpbmcgbmdBZnRlclZpZXdJbml0KCkgY2FsbGVkIHVudGlsIGEgY2hlY2sgYW5kXG4vLyBwYXNzIGlzIGNvbXBsZXRlLlxuLy9cbi8vIFRoaXMgYWxnb3J0aGltIGFsc28gaGFuZGxlcyByZWN1cnNpb24uIENvbnNpZGVyIGlmIEU0J3MgbmdBZnRlclZpZXdJbml0KClcbi8vIGluZGlyZWN0bHkgY2FsbHMgRTEncyBDaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCkuIFRoZSBleHBlY3RlZFxuLy8gaW5pdEluZGV4IGlzIHNldCB0byA2LCB0aGUgcmVjdXNpdmUgY2hlY2tBbmRVcGRhdGVWaWV3KCkgc3RhcnRzIHdhbGsgYWdhaW4uXG4vLyBEMywgRTIsIEU2LCBFNywgRTUgYW5kIEU0IGFyZSBza2lwcGVkLCBuZ0FmdGVyVmlld0luaXQoKSBpcyBjYWxsZWQgb24gRTEuXG4vLyBXaGVuIHRoZSByZWN1cnNpb24gcmV0dXJucyB0aGUgaW5pdEluZGV4IHdpbGwgYmUgNyBzbyBFMSBpcyBza2lwcGVkIGFzIGl0XG4vLyBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZCBpbiB0aGUgcmVjdXJzaXZlbHkgY2FsbGVkIGNoZWNrQW5VcGRhdGVWaWV3KCkuXG5leHBvcnQgZnVuY3Rpb24gY2FsbExpZmVjeWNsZUhvb2tzQ2hpbGRyZW5GaXJzdCh2aWV3OiBWaWV3RGF0YSwgbGlmZWN5Y2xlczogTm9kZUZsYWdzKSB7XG4gIGlmICghKHZpZXcuZGVmLm5vZGVGbGFncyAmIGxpZmVjeWNsZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5vZGVzID0gdmlldy5kZWYubm9kZXM7XG4gIGxldCBpbml0SW5kZXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZURlZiA9IG5vZGVzW2ldO1xuICAgIGxldCBwYXJlbnQgPSBub2RlRGVmLnBhcmVudDtcbiAgICBpZiAoIXBhcmVudCAmJiBub2RlRGVmLmZsYWdzICYgbGlmZWN5Y2xlcykge1xuICAgICAgLy8gbWF0Y2hpbmcgcm9vdCBub2RlIChlLmcuIGEgcGlwZSlcbiAgICAgIGNhbGxQcm92aWRlckxpZmVjeWNsZXModmlldywgaSwgbm9kZURlZi5mbGFncyAmIGxpZmVjeWNsZXMsIGluaXRJbmRleCsrKTtcbiAgICB9XG4gICAgaWYgKChub2RlRGVmLmNoaWxkRmxhZ3MgJiBsaWZlY3ljbGVzKSA9PT0gMCkge1xuICAgICAgLy8gbm8gY2hpbGQgbWF0Y2hlcyBvbmUgb2YgdGhlIGxpZmVjeWNsZXNcbiAgICAgIGkgKz0gbm9kZURlZi5jaGlsZENvdW50O1xuICAgIH1cbiAgICB3aGlsZSAocGFyZW50ICYmIChwYXJlbnQuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZUVsZW1lbnQpICYmXG4gICAgICAgICAgIGkgPT09IHBhcmVudC5ub2RlSW5kZXggKyBwYXJlbnQuY2hpbGRDb3VudCkge1xuICAgICAgLy8gbGFzdCBjaGlsZCBvZiBhbiBlbGVtZW50XG4gICAgICBpZiAocGFyZW50LmRpcmVjdENoaWxkRmxhZ3MgJiBsaWZlY3ljbGVzKSB7XG4gICAgICAgIGluaXRJbmRleCA9IGNhbGxFbGVtZW50UHJvdmlkZXJzTGlmZWN5Y2xlcyh2aWV3LCBwYXJlbnQsIGxpZmVjeWNsZXMsIGluaXRJbmRleCk7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsRWxlbWVudFByb3ZpZGVyc0xpZmVjeWNsZXMoXG4gICAgdmlldzogVmlld0RhdGEsIGVsRGVmOiBOb2RlRGVmLCBsaWZlY3ljbGVzOiBOb2RlRmxhZ3MsIGluaXRJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgZm9yIChsZXQgaSA9IGVsRGVmLm5vZGVJbmRleCArIDE7IGkgPD0gZWxEZWYubm9kZUluZGV4ICsgZWxEZWYuY2hpbGRDb3VudDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZURlZiA9IHZpZXcuZGVmLm5vZGVzW2ldO1xuICAgIGlmIChub2RlRGVmLmZsYWdzICYgbGlmZWN5Y2xlcykge1xuICAgICAgY2FsbFByb3ZpZGVyTGlmZWN5Y2xlcyh2aWV3LCBpLCBub2RlRGVmLmZsYWdzICYgbGlmZWN5Y2xlcywgaW5pdEluZGV4KyspO1xuICAgIH1cbiAgICAvLyBvbmx5IHZpc2l0IGRpcmVjdCBjaGlsZHJlblxuICAgIGkgKz0gbm9kZURlZi5jaGlsZENvdW50O1xuICB9XG4gIHJldHVybiBpbml0SW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGxQcm92aWRlckxpZmVjeWNsZXMoXG4gICAgdmlldzogVmlld0RhdGEsIGluZGV4OiBudW1iZXIsIGxpZmVjeWNsZXM6IE5vZGVGbGFncywgaW5pdEluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgcHJvdmlkZXJEYXRhID0gYXNQcm92aWRlckRhdGEodmlldywgaW5kZXgpO1xuICBpZiAoIXByb3ZpZGVyRGF0YSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwcm92aWRlciA9IHByb3ZpZGVyRGF0YS5pbnN0YW5jZTtcbiAgaWYgKCFwcm92aWRlcikge1xuICAgIHJldHVybjtcbiAgfVxuICBTZXJ2aWNlcy5zZXRDdXJyZW50Tm9kZSh2aWV3LCBpbmRleCk7XG4gIGlmIChsaWZlY3ljbGVzICYgTm9kZUZsYWdzLkFmdGVyQ29udGVudEluaXQgJiZcbiAgICAgIHNob3VsZENhbGxMaWZlY3ljbGVJbml0SG9vayh2aWV3LCBWaWV3U3RhdGUuSW5pdFN0YXRlX0NhbGxpbmdBZnRlckNvbnRlbnRJbml0LCBpbml0SW5kZXgpKSB7XG4gICAgcHJvdmlkZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG4gIH1cbiAgaWYgKGxpZmVjeWNsZXMgJiBOb2RlRmxhZ3MuQWZ0ZXJDb250ZW50Q2hlY2tlZCkge1xuICAgIHByb3ZpZGVyLm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpO1xuICB9XG4gIGlmIChsaWZlY3ljbGVzICYgTm9kZUZsYWdzLkFmdGVyVmlld0luaXQgJiZcbiAgICAgIHNob3VsZENhbGxMaWZlY3ljbGVJbml0SG9vayh2aWV3LCBWaWV3U3RhdGUuSW5pdFN0YXRlX0NhbGxpbmdBZnRlclZpZXdJbml0LCBpbml0SW5kZXgpKSB7XG4gICAgcHJvdmlkZXIubmdBZnRlclZpZXdJbml0KCk7XG4gIH1cbiAgaWYgKGxpZmVjeWNsZXMgJiBOb2RlRmxhZ3MuQWZ0ZXJWaWV3Q2hlY2tlZCkge1xuICAgIHByb3ZpZGVyLm5nQWZ0ZXJWaWV3Q2hlY2tlZCgpO1xuICB9XG4gIGlmIChsaWZlY3ljbGVzICYgTm9kZUZsYWdzLk9uRGVzdHJveSkge1xuICAgIHByb3ZpZGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==