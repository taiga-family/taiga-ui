/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isForwardRef, resolveForwardRef } from '../di/forward_ref';
import { injectRootLimpMode, setInjectImplementation } from '../di/injector_compatibility';
import { getInjectorDef } from '../di/interface/defs';
import { InjectFlags } from '../di/interface/injector';
import { assertDefined, assertEqual } from '../util/assert';
import { noSideEffects } from '../util/closure';
import { assertDirectiveDef } from './assert';
import { getFactoryDef } from './definition';
import { NG_ELEMENT_ID, NG_FACTORY_DEF } from './fields';
import { registerPreOrderHooks } from './hooks';
import { isFactory, NO_PARENT_INJECTOR, PARENT_INJECTOR, TNODE } from './interfaces/injector';
import { isComponentDef, isComponentHost } from './interfaces/type_checks';
import { DECLARATION_COMPONENT_VIEW, DECLARATION_VIEW, INJECTOR, T_HOST, TVIEW } from './interfaces/view';
import { assertNodeOfPossibleTypes } from './node_assert';
import { enterDI, leaveDI } from './state';
import { isNameOnlyAttributeMarker } from './util/attrs_utils';
import { getParentInjectorIndex, getParentInjectorView, hasParentInjector } from './util/injector_utils';
import { stringifyForError } from './util/misc_utils';
/**
 * Defines if the call to `inject` should include `viewProviders` in its resolution.
 *
 * This is set to true when we try to instantiate a component. This value is reset in
 * `getNodeInjectable` to a value which matches the declaration location of the token about to be
 * instantiated. This is done so that if we are injecting a token which was declared outside of
 * `viewProviders` we don't accidentally pull `viewProviders` in.
 *
 * Example:
 *
 * ```
 * @Injectable()
 * class MyService {
 *   constructor(public value: String) {}
 * }
 *
 * @Component({
 *   providers: [
 *     MyService,
 *     {provide: String, value: 'providers' }
 *   ]
 *   viewProviders: [
 *     {provide: String, value: 'viewProviders'}
 *   ]
 * })
 * class MyComponent {
 *   constructor(myService: MyService, value: String) {
 *     // We expect that Component can see into `viewProviders`.
 *     expect(value).toEqual('viewProviders');
 *     // `MyService` was not declared in `viewProviders` hence it can't see it.
 *     expect(myService.value).toEqual('providers');
 *   }
 * }
 *
 * ```
 */
var includeViewProviders = true;
export function setIncludeViewProviders(v) {
    var oldValue = includeViewProviders;
    includeViewProviders = v;
    return oldValue;
}
/**
 * The number of slots in each bloom filter (used by DI). The larger this number, the fewer
 * directives that will share slots, and thus, the fewer false positives when checking for
 * the existence of a directive.
 */
var BLOOM_SIZE = 256;
var BLOOM_MASK = BLOOM_SIZE - 1;
/** Counter used to generate unique IDs for directives. */
var nextNgElementId = 0;
/**
 * Registers this directive as present in its node's injector by flipping the directive's
 * corresponding bit in the injector's bloom filter.
 *
 * @param injectorIndex The index of the node injector where this token should be registered
 * @param tView The TView for the injector's bloom filters
 * @param type The directive token to register
 */
export function bloomAdd(injectorIndex, tView, type) {
    ngDevMode && assertEqual(tView.firstCreatePass, true, 'expected firstCreatePass to be true');
    var id = typeof type !== 'string' ? type[NG_ELEMENT_ID] : type.charCodeAt(0) || 0;
    // Set a unique ID on the directive type, so if something tries to inject the directive,
    // we can easily retrieve the ID and hash it into the bloom bit that should be checked.
    if (id == null) {
        id = type[NG_ELEMENT_ID] = nextNgElementId++;
    }
    // We only have BLOOM_SIZE (256) slots in our bloom filter (8 buckets * 32 bits each),
    // so all unique IDs must be modulo-ed into a number from 0 - 255 to fit into the filter.
    var bloomBit = id & BLOOM_MASK;
    // Create a mask that targets the specific bit associated with the directive.
    // JS bit operations are 32 bits, so this will be a number between 2^0 and 2^31, corresponding
    // to bit positions 0 - 31 in a 32 bit integer.
    var mask = 1 << bloomBit;
    // Use the raw bloomBit number to determine which bloom filter bucket we should check
    // e.g: bf0 = [0 - 31], bf1 = [32 - 63], bf2 = [64 - 95], bf3 = [96 - 127], etc
    var b7 = bloomBit & 0x80;
    var b6 = bloomBit & 0x40;
    var b5 = bloomBit & 0x20;
    var tData = tView.data;
    if (b7) {
        b6 ? (b5 ? (tData[injectorIndex + 7] |= mask) : (tData[injectorIndex + 6] |= mask)) :
            (b5 ? (tData[injectorIndex + 5] |= mask) : (tData[injectorIndex + 4] |= mask));
    }
    else {
        b6 ? (b5 ? (tData[injectorIndex + 3] |= mask) : (tData[injectorIndex + 2] |= mask)) :
            (b5 ? (tData[injectorIndex + 1] |= mask) : (tData[injectorIndex] |= mask));
    }
}
/**
 * Creates (or gets an existing) injector for a given element or container.
 *
 * @param tNode for which an injector should be retrieved / created.
 * @param hostView View where the node is stored
 * @returns Node injector
 */
export function getOrCreateNodeInjectorForNode(tNode, hostView) {
    var existingInjectorIndex = getInjectorIndex(tNode, hostView);
    if (existingInjectorIndex !== -1) {
        return existingInjectorIndex;
    }
    var tView = hostView[TVIEW];
    if (tView.firstCreatePass) {
        tNode.injectorIndex = hostView.length;
        insertBloom(tView.data, tNode); // foundation for node bloom
        insertBloom(hostView, null); // foundation for cumulative bloom
        insertBloom(tView.blueprint, null);
    }
    var parentLoc = getParentInjectorLocation(tNode, hostView);
    var injectorIndex = tNode.injectorIndex;
    // If a parent injector can't be found, its location is set to -1.
    // In that case, we don't need to set up a cumulative bloom
    if (hasParentInjector(parentLoc)) {
        var parentIndex = getParentInjectorIndex(parentLoc);
        var parentLView = getParentInjectorView(parentLoc, hostView);
        var parentData = parentLView[TVIEW].data;
        // Creates a cumulative bloom filter that merges the parent's bloom filter
        // and its own cumulative bloom (which contains tokens for all ancestors)
        for (var i = 0; i < 8; i++) {
            hostView[injectorIndex + i] = parentLView[parentIndex + i] | parentData[parentIndex + i];
        }
    }
    hostView[injectorIndex + PARENT_INJECTOR] = parentLoc;
    return injectorIndex;
}
function insertBloom(arr, footer) {
    arr.push(0, 0, 0, 0, 0, 0, 0, 0, footer);
}
export function getInjectorIndex(tNode, hostView) {
    if (tNode.injectorIndex === -1 ||
        // If the injector index is the same as its parent's injector index, then the index has been
        // copied down from the parent node. No injector has been created yet on this node.
        (tNode.parent && tNode.parent.injectorIndex === tNode.injectorIndex) ||
        // After the first template pass, the injector index might exist but the parent values
        // might not have been calculated yet for this instance
        hostView[tNode.injectorIndex + PARENT_INJECTOR] == null) {
        return -1;
    }
    else {
        return tNode.injectorIndex;
    }
}
/**
 * Finds the index of the parent injector, with a view offset if applicable. Used to set the
 * parent injector initially.
 *
 * Returns a combination of number of `ViewData` we have to go up and index in that `Viewdata`
 */
export function getParentInjectorLocation(tNode, view) {
    if (tNode.parent && tNode.parent.injectorIndex !== -1) {
        return tNode.parent.injectorIndex; // ViewOffset is 0
    }
    // For most cases, the parent injector index can be found on the host node (e.g. for component
    // or container), so this loop will be skipped, but we must keep the loop here to support
    // the rarer case of deeply nested <ng-template> tags or inline views.
    var hostTNode = view[T_HOST];
    var viewOffset = 1;
    while (hostTNode && hostTNode.injectorIndex === -1) {
        view = view[DECLARATION_VIEW];
        hostTNode = view ? view[T_HOST] : null;
        viewOffset++;
    }
    return hostTNode ?
        hostTNode.injectorIndex | (viewOffset << 16 /* ViewOffsetShift */) :
        -1;
}
/**
 * Makes a type or an injection token public to the DI system by adding it to an
 * injector's bloom filter.
 *
 * @param di The node injector in which a directive will be added
 * @param token The type or the injection token to be made public
 */
export function diPublicInInjector(injectorIndex, tView, token) {
    bloomAdd(injectorIndex, tView, token);
}
/**
 * Inject static attribute value into directive constructor.
 *
 * This method is used with `factory` functions which are generated as part of
 * `defineDirective` or `defineComponent`. The method retrieves the static value
 * of an attribute. (Dynamic attributes are not supported since they are not resolved
 *  at the time of injection and can change over time.)
 *
 * # Example
 * Given:
 * ```
 * @Component(...)
 * class MyComponent {
 *   constructor(@Attribute('title') title: string) { ... }
 * }
 * ```
 * When instantiated with
 * ```
 * <my-component title="Hello"></my-component>
 * ```
 *
 * Then factory method generated is:
 * ```
 * MyComponent.ɵcmp = defineComponent({
 *   factory: () => new MyComponent(injectAttribute('title'))
 *   ...
 * })
 * ```
 *
 * @publicApi
 */
export function injectAttributeImpl(tNode, attrNameToInject) {
    ngDevMode &&
        assertNodeOfPossibleTypes(tNode, 0 /* Container */, 3 /* Element */, 4 /* ElementContainer */);
    ngDevMode && assertDefined(tNode, 'expecting tNode');
    if (attrNameToInject === 'class') {
        return tNode.classes;
    }
    if (attrNameToInject === 'style') {
        return tNode.styles;
    }
    var attrs = tNode.attrs;
    if (attrs) {
        var attrsLength = attrs.length;
        var i = 0;
        while (i < attrsLength) {
            var value = attrs[i];
            // If we hit a `Bindings` or `Template` marker then we are done.
            if (isNameOnlyAttributeMarker(value))
                break;
            // Skip namespaced attributes
            if (value === 0 /* NamespaceURI */) {
                // we skip the next two values
                // as namespaced attributes looks like
                // [..., AttributeMarker.NamespaceURI, 'http://someuri.com/test', 'test:exist',
                // 'existValue', ...]
                i = i + 2;
            }
            else if (typeof value === 'number') {
                // Skip to the first value of the marked attribute.
                i++;
                while (i < attrsLength && typeof attrs[i] === 'string') {
                    i++;
                }
            }
            else if (value === attrNameToInject) {
                return attrs[i + 1];
            }
            else {
                i = i + 2;
            }
        }
    }
    return null;
}
/**
 * Returns the value associated to the given token from the NodeInjectors => ModuleInjector.
 *
 * Look for the injector providing the token by walking up the node injector tree and then
 * the module injector tree.
 *
 * This function patches `token` with `__NG_ELEMENT_ID__` which contains the id for the bloom
 * filter. Negative values are reserved for special objects.
 *   - `-1` is reserved for injecting `Injector` (implemented by `NodeInjector`)
 *
 * @param tNode The Node where the search for the injector should start
 * @param lView The `LView` that contains the `tNode`
 * @param token The token to look for
 * @param flags Injection flags
 * @param notFoundValue The value to return when the injection flags is `InjectFlags.Optional`
 * @returns the value from the injector, `null` when not found, or `notFoundValue` if provided
 */
export function getOrCreateInjectable(tNode, lView, token, flags, notFoundValue) {
    if (flags === void 0) { flags = InjectFlags.Default; }
    if (tNode !== null) {
        var bloomHash = bloomHashBitOrFactory(token);
        // If the ID stored here is a function, this is a special object like ElementRef or TemplateRef
        // so just call the factory function to create it.
        if (typeof bloomHash === 'function') {
            enterDI(lView, tNode);
            try {
                var value = bloomHash();
                if (value == null && !(flags & InjectFlags.Optional)) {
                    throw new Error("No provider for " + stringifyForError(token) + "!");
                }
                else {
                    return value;
                }
            }
            finally {
                leaveDI();
            }
        }
        else if (typeof bloomHash == 'number') {
            if (bloomHash === -1) {
                // `-1` is a special value used to identify `Injector` types.
                return new NodeInjector(tNode, lView);
            }
            // If the token has a bloom hash, then it is a token which could be in NodeInjector.
            // A reference to the previous injector TView that was found while climbing the element
            // injector tree. This is used to know if viewProviders can be accessed on the current
            // injector.
            var previousTView = null;
            var injectorIndex = getInjectorIndex(tNode, lView);
            var parentLocation = NO_PARENT_INJECTOR;
            var hostTElementNode = flags & InjectFlags.Host ? lView[DECLARATION_COMPONENT_VIEW][T_HOST] : null;
            // If we should skip this injector, or if there is no injector on this node, start by
            // searching
            // the parent injector.
            if (injectorIndex === -1 || flags & InjectFlags.SkipSelf) {
                parentLocation = injectorIndex === -1 ? getParentInjectorLocation(tNode, lView) :
                    lView[injectorIndex + PARENT_INJECTOR];
                if (!shouldSearchParent(flags, false)) {
                    injectorIndex = -1;
                }
                else {
                    previousTView = lView[TVIEW];
                    injectorIndex = getParentInjectorIndex(parentLocation);
                    lView = getParentInjectorView(parentLocation, lView);
                }
            }
            // Traverse up the injector tree until we find a potential match or until we know there
            // *isn't* a match.
            while (injectorIndex !== -1) {
                parentLocation = lView[injectorIndex + PARENT_INJECTOR];
                // Check the current injector. If it matches, see if it contains token.
                var tView = lView[TVIEW];
                if (bloomHasToken(bloomHash, injectorIndex, tView.data)) {
                    // At this point, we have an injector which *may* contain the token, so we step through
                    // the providers and directives associated with the injector's corresponding node to get
                    // the instance.
                    var instance = searchTokensOnInjector(injectorIndex, lView, token, previousTView, flags, hostTElementNode);
                    if (instance !== NOT_FOUND) {
                        return instance;
                    }
                }
                if (shouldSearchParent(flags, lView[TVIEW].data[injectorIndex + TNODE] === hostTElementNode) &&
                    bloomHasToken(bloomHash, injectorIndex, lView)) {
                    // The def wasn't found anywhere on this node, so it was a false positive.
                    // Traverse up the tree and continue searching.
                    previousTView = tView;
                    injectorIndex = getParentInjectorIndex(parentLocation);
                    lView = getParentInjectorView(parentLocation, lView);
                }
                else {
                    // If we should not search parent OR If the ancestor bloom filter value does not have the
                    // bit corresponding to the directive we can give up on traversing up to find the specific
                    // injector.
                    injectorIndex = -1;
                }
            }
        }
    }
    if (flags & InjectFlags.Optional && notFoundValue === undefined) {
        // This must be set or the NullInjector will throw for optional deps
        notFoundValue = null;
    }
    if ((flags & (InjectFlags.Self | InjectFlags.Host)) === 0) {
        var moduleInjector = lView[INJECTOR];
        // switch to `injectInjectorOnly` implementation for module injector, since module injector
        // should not have access to Component/Directive DI scope (that may happen through
        // `directiveInject` implementation)
        var previousInjectImplementation = setInjectImplementation(undefined);
        try {
            if (moduleInjector) {
                return moduleInjector.get(token, notFoundValue, flags & InjectFlags.Optional);
            }
            else {
                return injectRootLimpMode(token, notFoundValue, flags & InjectFlags.Optional);
            }
        }
        finally {
            setInjectImplementation(previousInjectImplementation);
        }
    }
    if (flags & InjectFlags.Optional) {
        return notFoundValue;
    }
    else {
        throw new Error("NodeInjector: NOT_FOUND [" + stringifyForError(token) + "]");
    }
}
var NOT_FOUND = {};
function searchTokensOnInjector(injectorIndex, lView, token, previousTView, flags, hostTElementNode) {
    var currentTView = lView[TVIEW];
    var tNode = currentTView.data[injectorIndex + TNODE];
    // First, we need to determine if view providers can be accessed by the starting element.
    // There are two possibities
    var canAccessViewProviders = previousTView == null ?
        // 1) This is the first invocation `previousTView == null` which means that we are at the
        // `TNode` of where injector is starting to look. In such a case the only time we are allowed
        // to look into the ViewProviders is if:
        // - we are on a component
        // - AND the injector set `includeViewProviders` to true (implying that the token can see
        // ViewProviders because it is the Component or a Service which itself was declared in
        // ViewProviders)
        (isComponentHost(tNode) && includeViewProviders) :
        // 2) `previousTView != null` which means that we are now walking across the parent nodes.
        // In such a case we are only allowed to look into the ViewProviders if:
        // - We just crossed from child View to Parent View `previousTView != currentTView`
        // - AND the parent TNode is an Element.
        // This means that we just came from the Component's View and therefore are allowed to see
        // into the ViewProviders.
        (previousTView != currentTView && (tNode.type === 3 /* Element */));
    // This special case happens when there is a @host on the inject and when we are searching
    // on the host element node.
    var isHostSpecialCase = (flags & InjectFlags.Host) && hostTElementNode === tNode;
    var injectableIdx = locateDirectiveOrProvider(tNode, currentTView, token, canAccessViewProviders, isHostSpecialCase);
    if (injectableIdx !== null) {
        return getNodeInjectable(lView, currentTView, injectableIdx, tNode);
    }
    else {
        return NOT_FOUND;
    }
}
/**
 * Searches for the given token among the node's directives and providers.
 *
 * @param tNode TNode on which directives are present.
 * @param tView The tView we are currently processing
 * @param token Provider token or type of a directive to look for.
 * @param canAccessViewProviders Whether view providers should be considered.
 * @param isHostSpecialCase Whether the host special case applies.
 * @returns Index of a found directive or provider, or null when none found.
 */
export function locateDirectiveOrProvider(tNode, tView, token, canAccessViewProviders, isHostSpecialCase) {
    var nodeProviderIndexes = tNode.providerIndexes;
    var tInjectables = tView.data;
    var injectablesStart = nodeProviderIndexes & 65535 /* ProvidersStartIndexMask */;
    var directivesStart = tNode.directiveStart;
    var directiveEnd = tNode.directiveEnd;
    var cptViewProvidersCount = nodeProviderIndexes >> 16 /* CptViewProvidersCountShift */;
    var startingIndex = canAccessViewProviders ? injectablesStart : injectablesStart + cptViewProvidersCount;
    // When the host special case applies, only the viewProviders and the component are visible
    var endIndex = isHostSpecialCase ? injectablesStart + cptViewProvidersCount : directiveEnd;
    for (var i = startingIndex; i < endIndex; i++) {
        var providerTokenOrDef = tInjectables[i];
        if (i < directivesStart && token === providerTokenOrDef ||
            i >= directivesStart && providerTokenOrDef.type === token) {
            return i;
        }
    }
    if (isHostSpecialCase) {
        var dirDef = tInjectables[directivesStart];
        if (dirDef && isComponentDef(dirDef) && dirDef.type === token) {
            return directivesStart;
        }
    }
    return null;
}
/**
 * Retrieve or instantiate the injectable from the `LView` at particular `index`.
 *
 * This function checks to see if the value has already been instantiated and if so returns the
 * cached `injectable`. Otherwise if it detects that the value is still a factory it
 * instantiates the `injectable` and caches the value.
 */
export function getNodeInjectable(lView, tView, index, tNode) {
    var value = lView[index];
    var tData = tView.data;
    if (isFactory(value)) {
        var factory = value;
        if (factory.resolving) {
            throw new Error("Circular dep for " + stringifyForError(tData[index]));
        }
        var previousIncludeViewProviders = setIncludeViewProviders(factory.canSeeViewProviders);
        factory.resolving = true;
        var previousInjectImplementation = void 0;
        if (factory.injectImpl) {
            previousInjectImplementation = setInjectImplementation(factory.injectImpl);
        }
        enterDI(lView, tNode);
        try {
            value = lView[index] = factory.factory(undefined, tData, lView, tNode);
            // This code path is hit for both directives and providers.
            // For perf reasons, we want to avoid searching for hooks on providers.
            // It does no harm to try (the hooks just won't exist), but the extra
            // checks are unnecessary and this is a hot path. So we check to see
            // if the index of the dependency is in the directive range for this
            // tNode. If it's not, we know it's a provider and skip hook registration.
            if (tView.firstCreatePass && index >= tNode.directiveStart) {
                ngDevMode && assertDirectiveDef(tData[index]);
                registerPreOrderHooks(index, tData[index], tView);
            }
        }
        finally {
            if (factory.injectImpl)
                setInjectImplementation(previousInjectImplementation);
            setIncludeViewProviders(previousIncludeViewProviders);
            factory.resolving = false;
            leaveDI();
        }
    }
    return value;
}
/**
 * Returns the bit in an injector's bloom filter that should be used to determine whether or not
 * the directive might be provided by the injector.
 *
 * When a directive is public, it is added to the bloom filter and given a unique ID that can be
 * retrieved on the Type. When the directive isn't public or the token is not a directive `null`
 * is returned as the node injector can not possibly provide that token.
 *
 * @param token the injection token
 * @returns the matching bit to check in the bloom filter or `null` if the token is not known.
 *   When the returned value is negative then it represents special values such as `Injector`.
 */
export function bloomHashBitOrFactory(token) {
    ngDevMode && assertDefined(token, 'token must be defined');
    if (typeof token === 'string') {
        return token.charCodeAt(0) || 0;
    }
    var tokenId = token[NG_ELEMENT_ID];
    // Negative token IDs are used for special objects such as `Injector`
    return (typeof tokenId === 'number' && tokenId > 0) ? tokenId & BLOOM_MASK : tokenId;
}
export function bloomHasToken(bloomHash, injectorIndex, injectorView) {
    // Create a mask that targets the specific bit associated with the directive we're looking for.
    // JS bit operations are 32 bits, so this will be a number between 2^0 and 2^31, corresponding
    // to bit positions 0 - 31 in a 32 bit integer.
    var mask = 1 << bloomHash;
    var b7 = bloomHash & 0x80;
    var b6 = bloomHash & 0x40;
    var b5 = bloomHash & 0x20;
    // Our bloom filter size is 256 bits, which is eight 32-bit bloom filter buckets:
    // bf0 = [0 - 31], bf1 = [32 - 63], bf2 = [64 - 95], bf3 = [96 - 127], etc.
    // Get the bloom filter value from the appropriate bucket based on the directive's bloomBit.
    var value;
    if (b7) {
        value = b6 ? (b5 ? injectorView[injectorIndex + 7] : injectorView[injectorIndex + 6]) :
            (b5 ? injectorView[injectorIndex + 5] : injectorView[injectorIndex + 4]);
    }
    else {
        value = b6 ? (b5 ? injectorView[injectorIndex + 3] : injectorView[injectorIndex + 2]) :
            (b5 ? injectorView[injectorIndex + 1] : injectorView[injectorIndex]);
    }
    // If the bloom filter value has the bit corresponding to the directive's bloomBit flipped on,
    // this injector is a potential match.
    return !!(value & mask);
}
/** Returns true if flags prevent parent injector from being searched for tokens */
function shouldSearchParent(flags, isFirstHostTNode) {
    return !(flags & InjectFlags.Self) && !(flags & InjectFlags.Host && isFirstHostTNode);
}
var NodeInjector = /** @class */ (function () {
    function NodeInjector(_tNode, _lView) {
        this._tNode = _tNode;
        this._lView = _lView;
    }
    NodeInjector.prototype.get = function (token, notFoundValue) {
        return getOrCreateInjectable(this._tNode, this._lView, token, undefined, notFoundValue);
    };
    return NodeInjector;
}());
export { NodeInjector };
/**
 * @codeGenApi
 */
export function ɵɵgetFactoryOf(type) {
    var typeAny = type;
    if (isForwardRef(type)) {
        return (function () {
            var factory = ɵɵgetFactoryOf(resolveForwardRef(typeAny));
            return factory ? factory() : null;
        });
    }
    var factory = getFactoryDef(typeAny);
    if (factory === null) {
        var injectorDef = getInjectorDef(typeAny);
        factory = injectorDef && injectorDef.factory;
    }
    return factory || null;
}
/**
 * @codeGenApi
 */
export function ɵɵgetInheritedFactory(type) {
    return noSideEffects(function () {
        var ownConstructor = type.prototype.constructor;
        var ownFactory = ownConstructor[NG_FACTORY_DEF] || ɵɵgetFactoryOf(ownConstructor);
        var objectPrototype = Object.prototype;
        var parent = Object.getPrototypeOf(type.prototype).constructor;
        // Go up the prototype until we hit `Object`.
        while (parent && parent !== objectPrototype) {
            var factory = parent[NG_FACTORY_DEF] || ɵɵgetFactoryOf(parent);
            // If we hit something that has a factory and the factory isn't the same as the type,
            // we've found the inherited factory. Note the check that the factory isn't the type's
            // own factory is redundant in most cases, but if the user has custom decorators on the
            // class, this lookup will start one level down in the prototype chain, causing us to
            // find the own factory first and potentially triggering an infinite loop downstream.
            if (factory && factory !== ownFactory) {
                return factory;
            }
            parent = Object.getPrototypeOf(parent);
        }
        // There is no factory defined. Either this was improper usage of inheritance
        // (no Angular decorator on the superclass) or there is no constructor at all
        // in the inheritance chain. Since the two cases cannot be distinguished, the
        // latter has to be assumed.
        return function (t) { return new t(); };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2RpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUdsRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRXJELE9BQU8sRUFBQyxhQUFhLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUM1QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUUsY0FBYyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUU5QyxPQUFPLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUF1QixlQUFlLEVBQTJELEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRTFLLE9BQU8sRUFBQyxjQUFjLEVBQUUsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFDLDBCQUEwQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBUyxNQUFNLEVBQVMsS0FBSyxFQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFDN0gsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8s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RUFBRTtZQUMzQyxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpFLHFGQUFxRjtZQUNyRixzRkFBc0Y7WUFDdEYsdUZBQXVGO1lBQ3ZGLHFGQUFxRjtZQUNyRixxRkFBcUY7WUFDckYsSUFBSSxPQUFPLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDckMsT0FBTyxPQUFPLENBQUM7YUFDaEI7WUFFRCxNQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QztRQUVELDZFQUE2RTtRQUM3RSw2RUFBNkU7UUFDN0UsNkVBQTZFO1FBQzdFLDRCQUE0QjtRQUM1QixPQUFPLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsRUFBUCxDQUFPLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2lzRm9yd2FyZFJlZiwgcmVzb2x2ZUZvcndhcmRSZWZ9IGZyb20gJy4uL2RpL2ZvcndhcmRfcmVmJztcbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJy4uL2RpL2luamVjdGlvbl90b2tlbic7XG5pbXBvcnQge0luamVjdG9yfSBmcm9tICcuLi9kaS9pbmplY3Rvcic7XG5pbXBvcnQge2luamVjdFJvb3RMaW1wTW9kZSwgc2V0SW5qZWN0SW1wbGVtZW50YXRpb259IGZyb20gJy4uL2RpL2luamVjdG9yX2NvbXBhdGliaWxpdHknO1xuaW1wb3J0IHtnZXRJbmplY3RvckRlZn0gZnJvbSAnLi4vZGkvaW50ZXJmYWNlL2RlZnMnO1xuaW1wb3J0IHtJbmplY3RGbGFnc30gZnJvbSAnLi4vZGkvaW50ZXJmYWNlL2luamVjdG9yJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHthc3NlcnREZWZpbmVkLCBhc3NlcnRFcXVhbH0gZnJvbSAnLi4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtub1NpZGVFZmZlY3RzfSBmcm9tICcuLi91dGlsL2Nsb3N1cmUnO1xuXG5pbXBvcnQge2Fzc2VydERpcmVjdGl2ZURlZn0gZnJvbSAnLi9hc3NlcnQnO1xuaW1wb3J0IHtnZXRGYWN0b3J5RGVmfSBmcm9tICcuL2RlZmluaXRpb24nO1xuaW1wb3J0IHtOR19FTEVNRU5UX0lELCBOR19GQUNUT1JZX0RFRn0gZnJvbSAnLi9maWVsZHMnO1xuaW1wb3J0IHtyZWdpc3RlclByZU9yZGVySG9va3N9IGZyb20gJy4vaG9va3MnO1xuaW1wb3J0IHtEaXJlY3RpdmVEZWYsIEZhY3RvcnlGbn0gZnJvbSAnLi9pbnRlcmZhY2VzL2RlZmluaXRpb24nO1xuaW1wb3J0IHtpc0ZhY3RvcnksIE5PX1BBUkVOVF9JTkpFQ1RPUiwgTm9kZUluamVjdG9yRmFjdG9yeSwgUEFSRU5UX0lOSkVDVE9SLCBSZWxhdGl2ZUluamVjdG9yTG9jYXRpb24sIFJlbGF0aXZlSW5qZWN0b3JMb2NhdGlvbkZsYWdzLCBUTk9ERX0gZnJvbSAnLi9pbnRlcmZhY2VzL2luamVjdG9yJztcbmltcG9ydCB7QXR0cmlidXRlTWFya2VyLCBUQ29udGFpbmVyTm9kZSwgVERpcmVjdGl2ZUhvc3ROb2RlLCBURWxlbWVudENvbnRhaW5lck5vZGUsIFRFbGVtZW50Tm9kZSwgVE5vZGUsIFROb2RlUHJvdmlkZXJJbmRleGVzLCBUTm9kZVR5cGV9IGZyb20gJy4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7aXNDb21wb25lbnREZWYsIGlzQ29tcG9uZW50SG9zdH0gZnJvbSAnLi9pbnRlcmZhY2VzL3R5cGVfY2hlY2tzJztcbmltcG9ydCB7REVDTEFSQVRJT05fQ09NUE9ORU5UX1ZJRVcsIERFQ0xBUkFUSU9OX1ZJRVcsIElOSkVDVE9SLCBMVmlldywgVF9IT1NULCBURGF0YSwgVFZJRVcsIFRWaWV3fSBmcm9tICcuL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2Fzc2VydE5vZGVPZlBvc3NpYmxlVHlwZXN9IGZyb20gJy4vbm9kZV9hc3NlcnQnO1xuaW1wb3J0IHtlbnRlckRJLCBsZWF2ZURJfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7aXNOYW1lT25seUF0dHJpYnV0ZU1hcmtlcn0gZnJvbSAnLi91dGlsL2F0dHJzX3V0aWxzJztcbmltcG9ydCB7Z2V0UGFyZW50SW5qZWN0b3JJbmRleCwgZ2V0UGFyZW50SW5qZWN0b3JWaWV3LCBoYXNQYXJlbnRJbmplY3Rvcn0gZnJvbSAnLi91dGlsL2luamVjdG9yX3V0aWxzJztcbmltcG9ydCB7c3RyaW5naWZ5Rm9yRXJyb3J9IGZyb20gJy4vdXRpbC9taXNjX3V0aWxzJztcblxuXG5cbi8qKlxuICogRGVmaW5lcyBpZiB0aGUgY2FsbCB0byBgaW5qZWN0YCBzaG91bGQgaW5jbHVkZSBgdmlld1Byb3ZpZGVyc2AgaW4gaXRzIHJlc29sdXRpb24uXG4gKlxuICogVGhpcyBpcyBzZXQgdG8gdHJ1ZSB3aGVuIHdlIHRyeSB0byBpbnN0YW50aWF0ZSBhIGNvbXBvbmVudC4gVGhpcyB2YWx1ZSBpcyByZXNldCBpblxuICogYGdldE5vZGVJbmplY3RhYmxlYCB0byBhIHZhbHVlIHdoaWNoIG1hdGNoZXMgdGhlIGRlY2xhcmF0aW9uIGxvY2F0aW9uIG9mIHRoZSB0b2tlbiBhYm91dCB0byBiZVxuICogaW5zdGFudGlhdGVkLiBUaGlzIGlzIGRvbmUgc28gdGhhdCBpZiB3ZSBhcmUgaW5qZWN0aW5nIGEgdG9rZW4gd2hpY2ggd2FzIGRlY2xhcmVkIG91dHNpZGUgb2ZcbiAqIGB2aWV3UHJvdmlkZXJzYCB3ZSBkb24ndCBhY2NpZGVudGFsbHkgcHVsbCBgdmlld1Byb3ZpZGVyc2AgaW4uXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBcbiAqIEBJbmplY3RhYmxlKClcbiAqIGNsYXNzIE15U2VydmljZSB7XG4gKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogU3RyaW5nKSB7fVxuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBwcm92aWRlcnM6IFtcbiAqICAgICBNeVNlcnZpY2UsXG4gKiAgICAge3Byb3ZpZGU6IFN0cmluZywgdmFsdWU6ICdwcm92aWRlcnMnIH1cbiAqICAgXVxuICogICB2aWV3UHJvdmlkZXJzOiBbXG4gKiAgICAge3Byb3ZpZGU6IFN0cmluZywgdmFsdWU6ICd2aWV3UHJvdmlkZXJzJ31cbiAqICAgXVxuICogfSlcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3IobXlTZXJ2aWNlOiBNeVNlcnZpY2UsIHZhbHVlOiBTdHJpbmcpIHtcbiAqICAgICAvLyBXZSBleHBlY3QgdGhhdCBDb21wb25lbnQgY2FuIHNlZSBpbnRvIGB2aWV3UHJvdmlkZXJzYC5cbiAqICAgICBleHBlY3QodmFsdWUpLnRvRXF1YWwoJ3ZpZXdQcm92aWRlcnMnKTtcbiAqICAgICAvLyBgTXlTZXJ2aWNlYCB3YXMgbm90IGRlY2xhcmVkIGluIGB2aWV3UHJvdmlkZXJzYCBoZW5jZSBpdCBjYW4ndCBzZWUgaXQuXG4gKiAgICAgZXhwZWN0KG15U2VydmljZS52YWx1ZSkudG9FcXVhbCgncHJvdmlkZXJzJyk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBgYGBcbiAqL1xubGV0IGluY2x1ZGVWaWV3UHJvdmlkZXJzID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEluY2x1ZGVWaWV3UHJvdmlkZXJzKHY6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgY29uc3Qgb2xkVmFsdWUgPSBpbmNsdWRlVmlld1Byb3ZpZGVycztcbiAgaW5jbHVkZVZpZXdQcm92aWRlcnMgPSB2O1xuICByZXR1cm4gb2xkVmFsdWU7XG59XG5cbi8qKlxuICogVGhlIG51bWJlciBvZiBzbG90cyBpbiBlYWNoIGJsb29tIGZpbHRlciAodXNlZCBieSBESSkuIFRoZSBsYXJnZXIgdGhpcyBudW1iZXIsIHRoZSBmZXdlclxuICogZGlyZWN0aXZlcyB0aGF0IHdpbGwgc2hhcmUgc2xvdHMsIGFuZCB0aHVzLCB0aGUgZmV3ZXIgZmFsc2UgcG9zaXRpdmVzIHdoZW4gY2hlY2tpbmcgZm9yXG4gKiB0aGUgZXhpc3RlbmNlIG9mIGEgZGlyZWN0aXZlLlxuICovXG5jb25zdCBCTE9PTV9TSVpFID0gMjU2O1xuY29uc3QgQkxPT01fTUFTSyA9IEJMT09NX1NJWkUgLSAxO1xuXG4vKiogQ291bnRlciB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMgZm9yIGRpcmVjdGl2ZXMuICovXG5sZXQgbmV4dE5nRWxlbWVudElkID0gMDtcblxuLyoqXG4gKiBSZWdpc3RlcnMgdGhpcyBkaXJlY3RpdmUgYXMgcHJlc2VudCBpbiBpdHMgbm9kZSdzIGluamVjdG9yIGJ5IGZsaXBwaW5nIHRoZSBkaXJlY3RpdmUnc1xuICogY29ycmVzcG9uZGluZyBiaXQgaW4gdGhlIGluamVjdG9yJ3MgYmxvb20gZmlsdGVyLlxuICpcbiAqIEBwYXJhbSBpbmplY3RvckluZGV4IFRoZSBpbmRleCBvZiB0aGUgbm9kZSBpbmplY3RvciB3aGVyZSB0aGlzIHRva2VuIHNob3VsZCBiZSByZWdpc3RlcmVkXG4gKiBAcGFyYW0gdFZpZXcgVGhlIFRWaWV3IGZvciB0aGUgaW5qZWN0b3IncyBibG9vbSBmaWx0ZXJzXG4gKiBAcGFyYW0gdHlwZSBUaGUgZGlyZWN0aXZlIHRva2VuIHRvIHJlZ2lzdGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9vbUFkZChcbiAgICBpbmplY3RvckluZGV4OiBudW1iZXIsIHRWaWV3OiBUVmlldywgdHlwZTogVHlwZTxhbnk+fEluamVjdGlvblRva2VuPGFueT58c3RyaW5nKTogdm9pZCB7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnRFcXVhbCh0Vmlldy5maXJzdENyZWF0ZVBhc3MsIHRydWUsICdleHBlY3RlZCBmaXJzdENyZWF0ZVBhc3MgdG8gYmUgdHJ1ZScpO1xuICBsZXQgaWQ6IG51bWJlcnx1bmRlZmluZWQgPVxuICAgICAgdHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnID8gKHR5cGUgYXMgYW55KVtOR19FTEVNRU5UX0lEXSA6IHR5cGUuY2hhckNvZGVBdCgwKSB8fCAwO1xuXG4gIC8vIFNldCBhIHVuaXF1ZSBJRCBvbiB0aGUgZGlyZWN0aXZlIHR5cGUsIHNvIGlmIHNvbWV0aGluZyB0cmllcyB0byBpbmplY3QgdGhlIGRpcmVjdGl2ZSxcbiAgLy8gd2UgY2FuIGVhc2lseSByZXRyaWV2ZSB0aGUgSUQgYW5kIGhhc2ggaXQgaW50byB0aGUgYmxvb20gYml0IHRoYXQgc2hvdWxkIGJlIGNoZWNrZWQuXG4gIGlmIChpZCA9PSBudWxsKSB7XG4gICAgaWQgPSAodHlwZSBhcyBhbnkpW05HX0VMRU1FTlRfSURdID0gbmV4dE5nRWxlbWVudElkKys7XG4gIH1cblxuICAvLyBXZSBvbmx5IGhhdmUgQkxPT01fU0laRSAoMjU2KSBzbG90cyBpbiBvdXIgYmxvb20gZmlsdGVyICg4IGJ1Y2tldHMgKiAzMiBiaXRzIGVhY2gpLFxuICAvLyBzbyBhbGwgdW5pcXVlIElEcyBtdXN0IGJlIG1vZHVsby1lZCBpbnRvIGEgbnVtYmVyIGZyb20gMCAtIDI1NSB0byBmaXQgaW50byB0aGUgZmlsdGVyLlxuICBjb25zdCBibG9vbUJpdCA9IGlkICYgQkxPT01fTUFTSztcblxuICAvLyBDcmVhdGUgYSBtYXNrIHRoYXQgdGFyZ2V0cyB0aGUgc3BlY2lmaWMgYml0IGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlLlxuICAvLyBKUyBiaXQgb3BlcmF0aW9ucyBhcmUgMzIgYml0cywgc28gdGhpcyB3aWxsIGJlIGEgbnVtYmVyIGJldHdlZW4gMl4wIGFuZCAyXjMxLCBjb3JyZXNwb25kaW5nXG4gIC8vIHRvIGJpdCBwb3NpdGlvbnMgMCAtIDMxIGluIGEgMzIgYml0IGludGVnZXIuXG4gIGNvbnN0IG1hc2sgPSAxIDw8IGJsb29tQml0O1xuXG4gIC8vIFVzZSB0aGUgcmF3IGJsb29tQml0IG51bWJlciB0byBkZXRlcm1pbmUgd2hpY2ggYmxvb20gZmlsdGVyIGJ1Y2tldCB3ZSBzaG91bGQgY2hlY2tcbiAgLy8gZS5nOiBiZjAgPSBbMCAtIDMxXSwgYmYxID0gWzMyIC0gNjNdLCBiZjIgPSBbNjQgLSA5NV0sIGJmMyA9IFs5NiAtIDEyN10sIGV0Y1xuICBjb25zdCBiNyA9IGJsb29tQml0ICYgMHg4MDtcbiAgY29uc3QgYjYgPSBibG9vbUJpdCAmIDB4NDA7XG4gIGNvbnN0IGI1ID0gYmxvb21CaXQgJiAweDIwO1xuICBjb25zdCB0RGF0YSA9IHRWaWV3LmRhdGEgYXMgbnVtYmVyW107XG5cbiAgaWYgKGI3KSB7XG4gICAgYjYgPyAoYjUgPyAodERhdGFbaW5qZWN0b3JJbmRleCArIDddIHw9IG1hc2spIDogKHREYXRhW2luamVjdG9ySW5kZXggKyA2XSB8PSBtYXNrKSkgOlxuICAgICAgICAgKGI1ID8gKHREYXRhW2luamVjdG9ySW5kZXggKyA1XSB8PSBtYXNrKSA6ICh0RGF0YVtpbmplY3RvckluZGV4ICsgNF0gfD0gbWFzaykpO1xuICB9IGVsc2Uge1xuICAgIGI2ID8gKGI1ID8gKHREYXRhW2luamVjdG9ySW5kZXggKyAzXSB8PSBtYXNrKSA6ICh0RGF0YVtpbmplY3RvckluZGV4ICsgMl0gfD0gbWFzaykpIDpcbiAgICAgICAgIChiNSA/ICh0RGF0YVtpbmplY3RvckluZGV4ICsgMV0gfD0gbWFzaykgOiAodERhdGFbaW5qZWN0b3JJbmRleF0gfD0gbWFzaykpO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyAob3IgZ2V0cyBhbiBleGlzdGluZykgaW5qZWN0b3IgZm9yIGEgZ2l2ZW4gZWxlbWVudCBvciBjb250YWluZXIuXG4gKlxuICogQHBhcmFtIHROb2RlIGZvciB3aGljaCBhbiBpbmplY3RvciBzaG91bGQgYmUgcmV0cmlldmVkIC8gY3JlYXRlZC5cbiAqIEBwYXJhbSBob3N0VmlldyBWaWV3IHdoZXJlIHRoZSBub2RlIGlzIHN0b3JlZFxuICogQHJldHVybnMgTm9kZSBpbmplY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JDcmVhdGVOb2RlSW5qZWN0b3JGb3JOb2RlKFxuICAgIHROb2RlOiBURWxlbWVudE5vZGV8VENvbnRhaW5lck5vZGV8VEVsZW1lbnRDb250YWluZXJOb2RlLCBob3N0VmlldzogTFZpZXcpOiBudW1iZXIge1xuICBjb25zdCBleGlzdGluZ0luamVjdG9ySW5kZXggPSBnZXRJbmplY3RvckluZGV4KHROb2RlLCBob3N0Vmlldyk7XG4gIGlmIChleGlzdGluZ0luamVjdG9ySW5kZXggIT09IC0xKSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nSW5qZWN0b3JJbmRleDtcbiAgfVxuXG4gIGNvbnN0IHRWaWV3ID0gaG9zdFZpZXdbVFZJRVddO1xuICBpZiAodFZpZXcuZmlyc3RDcmVhdGVQYXNzKSB7XG4gICAgdE5vZGUuaW5qZWN0b3JJbmRleCA9IGhvc3RWaWV3Lmxlbmd0aDtcbiAgICBpbnNlcnRCbG9vbSh0Vmlldy5kYXRhLCB0Tm9kZSk7ICAvLyBmb3VuZGF0aW9uIGZvciBub2RlIGJsb29tXG4gICAgaW5zZXJ0Qmxvb20oaG9zdFZpZXcsIG51bGwpOyAgICAgLy8gZm91bmRhdGlvbiBmb3IgY3VtdWxhdGl2ZSBibG9vbVxuICAgIGluc2VydEJsb29tKHRWaWV3LmJsdWVwcmludCwgbnVsbCk7XG4gIH1cblxuICBjb25zdCBwYXJlbnRMb2MgPSBnZXRQYXJlbnRJbmplY3RvckxvY2F0aW9uKHROb2RlLCBob3N0Vmlldyk7XG4gIGNvbnN0IGluamVjdG9ySW5kZXggPSB0Tm9kZS5pbmplY3RvckluZGV4O1xuXG4gIC8vIElmIGEgcGFyZW50IGluamVjdG9yIGNhbid0IGJlIGZvdW5kLCBpdHMgbG9jYXRpb24gaXMgc2V0IHRvIC0xLlxuICAvLyBJbiB0aGF0IGNhc2UsIHdlIGRvbid0IG5lZWQgdG8gc2V0IHVwIGEgY3VtdWxhdGl2ZSBibG9vbVxuICBpZiAoaGFzUGFyZW50SW5qZWN0b3IocGFyZW50TG9jKSkge1xuICAgIGNvbnN0IHBhcmVudEluZGV4ID0gZ2V0UGFyZW50SW5qZWN0b3JJbmRleChwYXJlbnRMb2MpO1xuICAgIGNvbnN0IHBhcmVudExWaWV3ID0gZ2V0UGFyZW50SW5qZWN0b3JWaWV3KHBhcmVudExvYywgaG9zdFZpZXcpO1xuICAgIGNvbnN0IHBhcmVudERhdGEgPSBwYXJlbnRMVmlld1tUVklFV10uZGF0YSBhcyBhbnk7XG4gICAgLy8gQ3JlYXRlcyBhIGN1bXVsYXRpdmUgYmxvb20gZmlsdGVyIHRoYXQgbWVyZ2VzIHRoZSBwYXJlbnQncyBibG9vbSBmaWx0ZXJcbiAgICAvLyBhbmQgaXRzIG93biBjdW11bGF0aXZlIGJsb29tICh3aGljaCBjb250YWlucyB0b2tlbnMgZm9yIGFsbCBhbmNlc3RvcnMpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIGhvc3RWaWV3W2luamVjdG9ySW5kZXggKyBpXSA9IHBhcmVudExWaWV3W3BhcmVudEluZGV4ICsgaV0gfCBwYXJlbnREYXRhW3BhcmVudEluZGV4ICsgaV07XG4gICAgfVxuICB9XG5cbiAgaG9zdFZpZXdbaW5qZWN0b3JJbmRleCArIFBBUkVOVF9JTkpFQ1RPUl0gPSBwYXJlbnRMb2M7XG4gIHJldHVybiBpbmplY3RvckluZGV4O1xufVxuXG5mdW5jdGlvbiBpbnNlcnRCbG9vbShhcnI6IGFueVtdLCBmb290ZXI6IFROb2RlfG51bGwpOiB2b2lkIHtcbiAgYXJyLnB1c2goMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgZm9vdGVyKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5qZWN0b3JJbmRleCh0Tm9kZTogVE5vZGUsIGhvc3RWaWV3OiBMVmlldyk6IG51bWJlciB7XG4gIGlmICh0Tm9kZS5pbmplY3RvckluZGV4ID09PSAtMSB8fFxuICAgICAgLy8gSWYgdGhlIGluamVjdG9yIGluZGV4IGlzIHRoZSBzYW1lIGFzIGl0cyBwYXJlbnQncyBpbmplY3RvciBpbmRleCwgdGhlbiB0aGUgaW5kZXggaGFzIGJlZW5cbiAgICAgIC8vIGNvcGllZCBkb3duIGZyb20gdGhlIHBhcmVudCBub2RlLiBObyBpbmplY3RvciBoYXMgYmVlbiBjcmVhdGVkIHlldCBvbiB0aGlzIG5vZGUuXG4gICAgICAodE5vZGUucGFyZW50ICYmIHROb2RlLnBhcmVudC5pbmplY3RvckluZGV4ID09PSB0Tm9kZS5pbmplY3RvckluZGV4KSB8fFxuICAgICAgLy8gQWZ0ZXIgdGhlIGZpcnN0IHRlbXBsYXRlIHBhc3MsIHRoZSBpbmplY3RvciBpbmRleCBtaWdodCBleGlzdCBidXQgdGhlIHBhcmVudCB2YWx1ZXNcbiAgICAgIC8vIG1pZ2h0IG5vdCBoYXZlIGJlZW4gY2FsY3VsYXRlZCB5ZXQgZm9yIHRoaXMgaW5zdGFuY2VcbiAgICAgIGhvc3RWaWV3W3ROb2RlLmluamVjdG9ySW5kZXggKyBQQVJFTlRfSU5KRUNUT1JdID09IG51bGwpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHROb2RlLmluamVjdG9ySW5kZXg7XG4gIH1cbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgaW5kZXggb2YgdGhlIHBhcmVudCBpbmplY3Rvciwgd2l0aCBhIHZpZXcgb2Zmc2V0IGlmIGFwcGxpY2FibGUuIFVzZWQgdG8gc2V0IHRoZVxuICogcGFyZW50IGluamVjdG9yIGluaXRpYWxseS5cbiAqXG4gKiBSZXR1cm5zIGEgY29tYmluYXRpb24gb2YgbnVtYmVyIG9mIGBWaWV3RGF0YWAgd2UgaGF2ZSB0byBnbyB1cCBhbmQgaW5kZXggaW4gdGhhdCBgVmlld2RhdGFgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRJbmplY3RvckxvY2F0aW9uKHROb2RlOiBUTm9kZSwgdmlldzogTFZpZXcpOiBSZWxhdGl2ZUluamVjdG9yTG9jYXRpb24ge1xuICBpZiAodE5vZGUucGFyZW50ICYmIHROb2RlLnBhcmVudC5pbmplY3RvckluZGV4ICE9PSAtMSkge1xuICAgIHJldHVybiB0Tm9kZS5wYXJlbnQuaW5qZWN0b3JJbmRleCBhcyBhbnk7ICAvLyBWaWV3T2Zmc2V0IGlzIDBcbiAgfVxuXG4gIC8vIEZvciBtb3N0IGNhc2VzLCB0aGUgcGFyZW50IGluamVjdG9yIGluZGV4IGNhbiBiZSBmb3VuZCBvbiB0aGUgaG9zdCBub2RlIChlLmcuIGZvciBjb21wb25lbnRcbiAgLy8gb3IgY29udGFpbmVyKSwgc28gdGhpcyBsb29wIHdpbGwgYmUgc2tpcHBlZCwgYnV0IHdlIG11c3Qga2VlcCB0aGUgbG9vcCBoZXJlIHRvIHN1cHBvcnRcbiAgLy8gdGhlIHJhcmVyIGNhc2Ugb2YgZGVlcGx5IG5lc3RlZCA8bmctdGVtcGxhdGU+IHRhZ3Mgb3IgaW5saW5lIHZpZXdzLlxuICBsZXQgaG9zdFROb2RlID0gdmlld1tUX0hPU1RdO1xuICBsZXQgdmlld09mZnNldCA9IDE7XG4gIHdoaWxlIChob3N0VE5vZGUgJiYgaG9zdFROb2RlLmluamVjdG9ySW5kZXggPT09IC0xKSB7XG4gICAgdmlldyA9IHZpZXdbREVDTEFSQVRJT05fVklFV10hO1xuICAgIGhvc3RUTm9kZSA9IHZpZXcgPyB2aWV3W1RfSE9TVF0gOiBudWxsO1xuICAgIHZpZXdPZmZzZXQrKztcbiAgfVxuXG4gIHJldHVybiBob3N0VE5vZGUgP1xuICAgICAgaG9zdFROb2RlLmluamVjdG9ySW5kZXggfCAodmlld09mZnNldCA8PCBSZWxhdGl2ZUluamVjdG9yTG9jYXRpb25GbGFncy5WaWV3T2Zmc2V0U2hpZnQpIDpcbiAgICAgIC0xIGFzIGFueTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhIHR5cGUgb3IgYW4gaW5qZWN0aW9uIHRva2VuIHB1YmxpYyB0byB0aGUgREkgc3lzdGVtIGJ5IGFkZGluZyBpdCB0byBhblxuICogaW5qZWN0b3IncyBibG9vbSBmaWx0ZXIuXG4gKlxuICogQHBhcmFtIGRpIFRoZSBub2RlIGluamVjdG9yIGluIHdoaWNoIGEgZGlyZWN0aXZlIHdpbGwgYmUgYWRkZWRcbiAqIEBwYXJhbSB0b2tlbiBUaGUgdHlwZSBvciB0aGUgaW5qZWN0aW9uIHRva2VuIHRvIGJlIG1hZGUgcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaVB1YmxpY0luSW5qZWN0b3IoXG4gICAgaW5qZWN0b3JJbmRleDogbnVtYmVyLCB0VmlldzogVFZpZXcsIHRva2VuOiBJbmplY3Rpb25Ub2tlbjxhbnk+fFR5cGU8YW55Pik6IHZvaWQge1xuICBibG9vbUFkZChpbmplY3RvckluZGV4LCB0VmlldywgdG9rZW4pO1xufVxuXG4vKipcbiAqIEluamVjdCBzdGF0aWMgYXR0cmlidXRlIHZhbHVlIGludG8gZGlyZWN0aXZlIGNvbnN0cnVjdG9yLlxuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgd2l0aCBgZmFjdG9yeWAgZnVuY3Rpb25zIHdoaWNoIGFyZSBnZW5lcmF0ZWQgYXMgcGFydCBvZlxuICogYGRlZmluZURpcmVjdGl2ZWAgb3IgYGRlZmluZUNvbXBvbmVudGAuIFRoZSBtZXRob2QgcmV0cmlldmVzIHRoZSBzdGF0aWMgdmFsdWVcbiAqIG9mIGFuIGF0dHJpYnV0ZS4gKER5bmFtaWMgYXR0cmlidXRlcyBhcmUgbm90IHN1cHBvcnRlZCBzaW5jZSB0aGV5IGFyZSBub3QgcmVzb2x2ZWRcbiAqICBhdCB0aGUgdGltZSBvZiBpbmplY3Rpb24gYW5kIGNhbiBjaGFuZ2Ugb3ZlciB0aW1lLilcbiAqXG4gKiAjIEV4YW1wbGVcbiAqIEdpdmVuOlxuICogYGBgXG4gKiBAQ29tcG9uZW50KC4uLilcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3IoQEF0dHJpYnV0ZSgndGl0bGUnKSB0aXRsZTogc3RyaW5nKSB7IC4uLiB9XG4gKiB9XG4gKiBgYGBcbiAqIFdoZW4gaW5zdGFudGlhdGVkIHdpdGhcbiAqIGBgYFxuICogPG15LWNvbXBvbmVudCB0aXRsZT1cIkhlbGxvXCI+PC9teS1jb21wb25lbnQ+XG4gKiBgYGBcbiAqXG4gKiBUaGVuIGZhY3RvcnkgbWV0aG9kIGdlbmVyYXRlZCBpczpcbiAqIGBgYFxuICogTXlDb21wb25lbnQuybVjbXAgPSBkZWZpbmVDb21wb25lbnQoe1xuICogICBmYWN0b3J5OiAoKSA9PiBuZXcgTXlDb21wb25lbnQoaW5qZWN0QXR0cmlidXRlKCd0aXRsZScpKVxuICogICAuLi5cbiAqIH0pXG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RBdHRyaWJ1dGVJbXBsKHROb2RlOiBUTm9kZSwgYXR0ck5hbWVUb0luamVjdDogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICBuZ0Rldk1vZGUgJiZcbiAgICAgIGFzc2VydE5vZGVPZlBvc3NpYmxlVHlwZXMoXG4gICAgICAgICAgdE5vZGUsIFROb2RlVHlwZS5Db250YWluZXIsIFROb2RlVHlwZS5FbGVtZW50LCBUTm9kZVR5cGUuRWxlbWVudENvbnRhaW5lcik7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnREZWZpbmVkKHROb2RlLCAnZXhwZWN0aW5nIHROb2RlJyk7XG4gIGlmIChhdHRyTmFtZVRvSW5qZWN0ID09PSAnY2xhc3MnKSB7XG4gICAgcmV0dXJuIHROb2RlLmNsYXNzZXM7XG4gIH1cbiAgaWYgKGF0dHJOYW1lVG9JbmplY3QgPT09ICdzdHlsZScpIHtcbiAgICByZXR1cm4gdE5vZGUuc3R5bGVzO1xuICB9XG5cbiAgY29uc3QgYXR0cnMgPSB0Tm9kZS5hdHRycztcbiAgaWYgKGF0dHJzKSB7XG4gICAgY29uc3QgYXR0cnNMZW5ndGggPSBhdHRycy5sZW5ndGg7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYXR0cnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNbaV07XG5cbiAgICAgIC8vIElmIHdlIGhpdCBhIGBCaW5kaW5nc2Agb3IgYFRlbXBsYXRlYCBtYXJrZXIgdGhlbiB3ZSBhcmUgZG9uZS5cbiAgICAgIGlmIChpc05hbWVPbmx5QXR0cmlidXRlTWFya2VyKHZhbHVlKSkgYnJlYWs7XG5cbiAgICAgIC8vIFNraXAgbmFtZXNwYWNlZCBhdHRyaWJ1dGVzXG4gICAgICBpZiAodmFsdWUgPT09IEF0dHJpYnV0ZU1hcmtlci5OYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgLy8gd2Ugc2tpcCB0aGUgbmV4dCB0d28gdmFsdWVzXG4gICAgICAgIC8vIGFzIG5hbWVzcGFjZWQgYXR0cmlidXRlcyBsb29rcyBsaWtlXG4gICAgICAgIC8vIFsuLi4sIEF0dHJpYnV0ZU1hcmtlci5OYW1lc3BhY2VVUkksICdodHRwOi8vc29tZXVyaS5jb20vdGVzdCcsICd0ZXN0OmV4aXN0JyxcbiAgICAgICAgLy8gJ2V4aXN0VmFsdWUnLCAuLi5dXG4gICAgICAgIGkgPSBpICsgMjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBTa2lwIHRvIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGUgbWFya2VkIGF0dHJpYnV0ZS5cbiAgICAgICAgaSsrO1xuICAgICAgICB3aGlsZSAoaSA8IGF0dHJzTGVuZ3RoICYmIHR5cGVvZiBhdHRyc1tpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGF0dHJOYW1lVG9JbmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGF0dHJzW2kgKyAxXSBhcyBzdHJpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpID0gaSArIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgZ2l2ZW4gdG9rZW4gZnJvbSB0aGUgTm9kZUluamVjdG9ycyA9PiBNb2R1bGVJbmplY3Rvci5cbiAqXG4gKiBMb29rIGZvciB0aGUgaW5qZWN0b3IgcHJvdmlkaW5nIHRoZSB0b2tlbiBieSB3YWxraW5nIHVwIHRoZSBub2RlIGluamVjdG9yIHRyZWUgYW5kIHRoZW5cbiAqIHRoZSBtb2R1bGUgaW5qZWN0b3IgdHJlZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhdGNoZXMgYHRva2VuYCB3aXRoIGBfX05HX0VMRU1FTlRfSURfX2Agd2hpY2ggY29udGFpbnMgdGhlIGlkIGZvciB0aGUgYmxvb21cbiAqIGZpbHRlci4gTmVnYXRpdmUgdmFsdWVzIGFyZSByZXNlcnZlZCBmb3Igc3BlY2lhbCBvYmplY3RzLlxuICogICAtIGAtMWAgaXMgcmVzZXJ2ZWQgZm9yIGluamVjdGluZyBgSW5qZWN0b3JgIChpbXBsZW1lbnRlZCBieSBgTm9kZUluamVjdG9yYClcbiAqXG4gKiBAcGFyYW0gdE5vZGUgVGhlIE5vZGUgd2hlcmUgdGhlIHNlYXJjaCBmb3IgdGhlIGluamVjdG9yIHNob3VsZCBzdGFydFxuICogQHBhcmFtIGxWaWV3IFRoZSBgTFZpZXdgIHRoYXQgY29udGFpbnMgdGhlIGB0Tm9kZWBcbiAqIEBwYXJhbSB0b2tlbiBUaGUgdG9rZW4gdG8gbG9vayBmb3JcbiAqIEBwYXJhbSBmbGFncyBJbmplY3Rpb24gZmxhZ3NcbiAqIEBwYXJhbSBub3RGb3VuZFZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gd2hlbiB0aGUgaW5qZWN0aW9uIGZsYWdzIGlzIGBJbmplY3RGbGFncy5PcHRpb25hbGBcbiAqIEByZXR1cm5zIHRoZSB2YWx1ZSBmcm9tIHRoZSBpbmplY3RvciwgYG51bGxgIHdoZW4gbm90IGZvdW5kLCBvciBgbm90Rm91bmRWYWx1ZWAgaWYgcHJvdmlkZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9yQ3JlYXRlSW5qZWN0YWJsZTxUPihcbiAgICB0Tm9kZTogVERpcmVjdGl2ZUhvc3ROb2RlfG51bGwsIGxWaWV3OiBMVmlldywgdG9rZW46IFR5cGU8VD58SW5qZWN0aW9uVG9rZW48VD4sXG4gICAgZmxhZ3M6IEluamVjdEZsYWdzID0gSW5qZWN0RmxhZ3MuRGVmYXVsdCwgbm90Rm91bmRWYWx1ZT86IGFueSk6IFR8bnVsbCB7XG4gIGlmICh0Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGJsb29tSGFzaCA9IGJsb29tSGFzaEJpdE9yRmFjdG9yeSh0b2tlbik7XG4gICAgLy8gSWYgdGhlIElEIHN0b3JlZCBoZXJlIGlzIGEgZnVuY3Rpb24sIHRoaXMgaXMgYSBzcGVjaWFsIG9iamVjdCBsaWtlIEVsZW1lbnRSZWYgb3IgVGVtcGxhdGVSZWZcbiAgICAvLyBzbyBqdXN0IGNhbGwgdGhlIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGl0LlxuICAgIGlmICh0eXBlb2YgYmxvb21IYXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbnRlckRJKGxWaWV3LCB0Tm9kZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGJsb29tSGFzaCgpO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhKGZsYWdzICYgSW5qZWN0RmxhZ3MuT3B0aW9uYWwpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwcm92aWRlciBmb3IgJHtzdHJpbmdpZnlGb3JFcnJvcih0b2tlbil9IWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgbGVhdmVESSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJsb29tSGFzaCA9PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGJsb29tSGFzaCA9PT0gLTEpIHtcbiAgICAgICAgLy8gYC0xYCBpcyBhIHNwZWNpYWwgdmFsdWUgdXNlZCB0byBpZGVudGlmeSBgSW5qZWN0b3JgIHR5cGVzLlxuICAgICAgICByZXR1cm4gbmV3IE5vZGVJbmplY3Rvcih0Tm9kZSwgbFZpZXcpIGFzIGFueTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoZSB0b2tlbiBoYXMgYSBibG9vbSBoYXNoLCB0aGVuIGl0IGlzIGEgdG9rZW4gd2hpY2ggY291bGQgYmUgaW4gTm9kZUluamVjdG9yLlxuXG4gICAgICAvLyBBIHJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgaW5qZWN0b3IgVFZpZXcgdGhhdCB3YXMgZm91bmQgd2hpbGUgY2xpbWJpbmcgdGhlIGVsZW1lbnRcbiAgICAgIC8vIGluamVjdG9yIHRyZWUuIFRoaXMgaXMgdXNlZCB0byBrbm93IGlmIHZpZXdQcm92aWRlcnMgY2FuIGJlIGFjY2Vzc2VkIG9uIHRoZSBjdXJyZW50XG4gICAgICAvLyBpbmplY3Rvci5cbiAgICAgIGxldCBwcmV2aW91c1RWaWV3OiBUVmlld3xudWxsID0gbnVsbDtcbiAgICAgIGxldCBpbmplY3RvckluZGV4ID0gZ2V0SW5qZWN0b3JJbmRleCh0Tm9kZSwgbFZpZXcpO1xuICAgICAgbGV0IHBhcmVudExvY2F0aW9uOiBSZWxhdGl2ZUluamVjdG9yTG9jYXRpb24gPSBOT19QQVJFTlRfSU5KRUNUT1I7XG4gICAgICBsZXQgaG9zdFRFbGVtZW50Tm9kZTogVE5vZGV8bnVsbCA9XG4gICAgICAgICAgZmxhZ3MgJiBJbmplY3RGbGFncy5Ib3N0ID8gbFZpZXdbREVDTEFSQVRJT05fQ09NUE9ORU5UX1ZJRVddW1RfSE9TVF0gOiBudWxsO1xuXG4gICAgICAvLyBJZiB3ZSBzaG91bGQgc2tpcCB0aGlzIGluamVjdG9yLCBvciBpZiB0aGVyZSBpcyBubyBpbmplY3RvciBvbiB0aGlzIG5vZGUsIHN0YXJ0IGJ5XG4gICAgICAvLyBzZWFyY2hpbmdcbiAgICAgIC8vIHRoZSBwYXJlbnQgaW5qZWN0b3IuXG4gICAgICBpZiAoaW5qZWN0b3JJbmRleCA9PT0gLTEgfHwgZmxhZ3MgJiBJbmplY3RGbGFncy5Ta2lwU2VsZikge1xuICAgICAgICBwYXJlbnRMb2NhdGlvbiA9IGluamVjdG9ySW5kZXggPT09IC0xID8gZ2V0UGFyZW50SW5qZWN0b3JMb2NhdGlvbih0Tm9kZSwgbFZpZXcpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxWaWV3W2luamVjdG9ySW5kZXggKyBQQVJFTlRfSU5KRUNUT1JdO1xuXG4gICAgICAgIGlmICghc2hvdWxkU2VhcmNoUGFyZW50KGZsYWdzLCBmYWxzZSkpIHtcbiAgICAgICAgICBpbmplY3RvckluZGV4ID0gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldmlvdXNUVmlldyA9IGxWaWV3W1RWSUVXXTtcbiAgICAgICAgICBpbmplY3RvckluZGV4ID0gZ2V0UGFyZW50SW5qZWN0b3JJbmRleChwYXJlbnRMb2NhdGlvbik7XG4gICAgICAgICAgbFZpZXcgPSBnZXRQYXJlbnRJbmplY3RvclZpZXcocGFyZW50TG9jYXRpb24sIGxWaWV3KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUcmF2ZXJzZSB1cCB0aGUgaW5qZWN0b3IgdHJlZSB1bnRpbCB3ZSBmaW5kIGEgcG90ZW50aWFsIG1hdGNoIG9yIHVudGlsIHdlIGtub3cgdGhlcmVcbiAgICAgIC8vICppc24ndCogYSBtYXRjaC5cbiAgICAgIHdoaWxlIChpbmplY3RvckluZGV4ICE9PSAtMSkge1xuICAgICAgICBwYXJlbnRMb2NhdGlvbiA9IGxWaWV3W2luamVjdG9ySW5kZXggKyBQQVJFTlRfSU5KRUNUT1JdO1xuXG4gICAgICAgIC8vIENoZWNrIHRoZSBjdXJyZW50IGluamVjdG9yLiBJZiBpdCBtYXRjaGVzLCBzZWUgaWYgaXQgY29udGFpbnMgdG9rZW4uXG4gICAgICAgIGNvbnN0IHRWaWV3ID0gbFZpZXdbVFZJRVddO1xuICAgICAgICBpZiAoYmxvb21IYXNUb2tlbihibG9vbUhhc2gsIGluamVjdG9ySW5kZXgsIHRWaWV3LmRhdGEpKSB7XG4gICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgd2UgaGF2ZSBhbiBpbmplY3RvciB3aGljaCAqbWF5KiBjb250YWluIHRoZSB0b2tlbiwgc28gd2Ugc3RlcCB0aHJvdWdoXG4gICAgICAgICAgLy8gdGhlIHByb3ZpZGVycyBhbmQgZGlyZWN0aXZlcyBhc3NvY2lhdGVkIHdpdGggdGhlIGluamVjdG9yJ3MgY29ycmVzcG9uZGluZyBub2RlIHRvIGdldFxuICAgICAgICAgIC8vIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgICBjb25zdCBpbnN0YW5jZTogVHxudWxsID0gc2VhcmNoVG9rZW5zT25JbmplY3RvcjxUPihcbiAgICAgICAgICAgICAgaW5qZWN0b3JJbmRleCwgbFZpZXcsIHRva2VuLCBwcmV2aW91c1RWaWV3LCBmbGFncywgaG9zdFRFbGVtZW50Tm9kZSk7XG4gICAgICAgICAgaWYgKGluc3RhbmNlICE9PSBOT1RfRk9VTkQpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFNlYXJjaFBhcmVudChcbiAgICAgICAgICAgICAgICBmbGFncywgbFZpZXdbVFZJRVddLmRhdGFbaW5qZWN0b3JJbmRleCArIFROT0RFXSA9PT0gaG9zdFRFbGVtZW50Tm9kZSkgJiZcbiAgICAgICAgICAgIGJsb29tSGFzVG9rZW4oYmxvb21IYXNoLCBpbmplY3RvckluZGV4LCBsVmlldykpIHtcbiAgICAgICAgICAvLyBUaGUgZGVmIHdhc24ndCBmb3VuZCBhbnl3aGVyZSBvbiB0aGlzIG5vZGUsIHNvIGl0IHdhcyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgICAgICAgIC8vIFRyYXZlcnNlIHVwIHRoZSB0cmVlIGFuZCBjb250aW51ZSBzZWFyY2hpbmcuXG4gICAgICAgICAgcHJldmlvdXNUVmlldyA9IHRWaWV3O1xuICAgICAgICAgIGluamVjdG9ySW5kZXggPSBnZXRQYXJlbnRJbmplY3RvckluZGV4KHBhcmVudExvY2F0aW9uKTtcbiAgICAgICAgICBsVmlldyA9IGdldFBhcmVudEluamVjdG9yVmlldyhwYXJlbnRMb2NhdGlvbiwgbFZpZXcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHdlIHNob3VsZCBub3Qgc2VhcmNoIHBhcmVudCBPUiBJZiB0aGUgYW5jZXN0b3IgYmxvb20gZmlsdGVyIHZhbHVlIGRvZXMgbm90IGhhdmUgdGhlXG4gICAgICAgICAgLy8gYml0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRpcmVjdGl2ZSB3ZSBjYW4gZ2l2ZSB1cCBvbiB0cmF2ZXJzaW5nIHVwIHRvIGZpbmQgdGhlIHNwZWNpZmljXG4gICAgICAgICAgLy8gaW5qZWN0b3IuXG4gICAgICAgICAgaW5qZWN0b3JJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGZsYWdzICYgSW5qZWN0RmxhZ3MuT3B0aW9uYWwgJiYgbm90Rm91bmRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gVGhpcyBtdXN0IGJlIHNldCBvciB0aGUgTnVsbEluamVjdG9yIHdpbGwgdGhyb3cgZm9yIG9wdGlvbmFsIGRlcHNcbiAgICBub3RGb3VuZFZhbHVlID0gbnVsbDtcbiAgfVxuXG4gIGlmICgoZmxhZ3MgJiAoSW5qZWN0RmxhZ3MuU2VsZiB8IEluamVjdEZsYWdzLkhvc3QpKSA9PT0gMCkge1xuICAgIGNvbnN0IG1vZHVsZUluamVjdG9yID0gbFZpZXdbSU5KRUNUT1JdO1xuICAgIC8vIHN3aXRjaCB0byBgaW5qZWN0SW5qZWN0b3JPbmx5YCBpbXBsZW1lbnRhdGlvbiBmb3IgbW9kdWxlIGluamVjdG9yLCBzaW5jZSBtb2R1bGUgaW5qZWN0b3JcbiAgICAvLyBzaG91bGQgbm90IGhhdmUgYWNjZXNzIHRvIENvbXBvbmVudC9EaXJlY3RpdmUgREkgc2NvcGUgKHRoYXQgbWF5IGhhcHBlbiB0aHJvdWdoXG4gICAgLy8gYGRpcmVjdGl2ZUluamVjdGAgaW1wbGVtZW50YXRpb24pXG4gICAgY29uc3QgcHJldmlvdXNJbmplY3RJbXBsZW1lbnRhdGlvbiA9IHNldEluamVjdEltcGxlbWVudGF0aW9uKHVuZGVmaW5lZCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChtb2R1bGVJbmplY3Rvcikge1xuICAgICAgICByZXR1cm4gbW9kdWxlSW5qZWN0b3IuZ2V0KHRva2VuLCBub3RGb3VuZFZhbHVlLCBmbGFncyAmIEluamVjdEZsYWdzLk9wdGlvbmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbmplY3RSb290TGltcE1vZGUodG9rZW4sIG5vdEZvdW5kVmFsdWUsIGZsYWdzICYgSW5qZWN0RmxhZ3MuT3B0aW9uYWwpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJbmplY3RJbXBsZW1lbnRhdGlvbihwcmV2aW91c0luamVjdEltcGxlbWVudGF0aW9uKTtcbiAgICB9XG4gIH1cbiAgaWYgKGZsYWdzICYgSW5qZWN0RmxhZ3MuT3B0aW9uYWwpIHtcbiAgICByZXR1cm4gbm90Rm91bmRWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vZGVJbmplY3RvcjogTk9UX0ZPVU5EIFske3N0cmluZ2lmeUZvckVycm9yKHRva2VuKX1dYCk7XG4gIH1cbn1cblxuY29uc3QgTk9UX0ZPVU5EID0ge307XG5cbmZ1bmN0aW9uIHNlYXJjaFRva2Vuc09uSW5qZWN0b3I8VD4oXG4gICAgaW5qZWN0b3JJbmRleDogbnVtYmVyLCBsVmlldzogTFZpZXcsIHRva2VuOiBUeXBlPFQ+fEluamVjdGlvblRva2VuPFQ+LFxuICAgIHByZXZpb3VzVFZpZXc6IFRWaWV3fG51bGwsIGZsYWdzOiBJbmplY3RGbGFncywgaG9zdFRFbGVtZW50Tm9kZTogVE5vZGV8bnVsbCkge1xuICBjb25zdCBjdXJyZW50VFZpZXcgPSBsVmlld1tUVklFV107XG4gIGNvbnN0IHROb2RlID0gY3VycmVudFRWaWV3LmRhdGFbaW5qZWN0b3JJbmRleCArIFROT0RFXSBhcyBUTm9kZTtcbiAgLy8gRmlyc3QsIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIGlmIHZpZXcgcHJvdmlkZXJzIGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgc3RhcnRpbmcgZWxlbWVudC5cbiAgLy8gVGhlcmUgYXJlIHR3byBwb3NzaWJpdGllc1xuICBjb25zdCBjYW5BY2Nlc3NWaWV3UHJvdmlkZXJzID0gcHJldmlvdXNUVmlldyA9PSBudWxsID9cbiAgICAgIC8vIDEpIFRoaXMgaXMgdGhlIGZpcnN0IGludm9jYXRpb24gYHByZXZpb3VzVFZpZXcgPT0gbnVsbGAgd2hpY2ggbWVhbnMgdGhhdCB3ZSBhcmUgYXQgdGhlXG4gICAgICAvLyBgVE5vZGVgIG9mIHdoZXJlIGluamVjdG9yIGlzIHN0YXJ0aW5nIHRvIGxvb2suIEluIHN1Y2ggYSBjYXNlIHRoZSBvbmx5IHRpbWUgd2UgYXJlIGFsbG93ZWRcbiAgICAgIC8vIHRvIGxvb2sgaW50byB0aGUgVmlld1Byb3ZpZGVycyBpcyBpZjpcbiAgICAgIC8vIC0gd2UgYXJlIG9uIGEgY29tcG9uZW50XG4gICAgICAvLyAtIEFORCB0aGUgaW5qZWN0b3Igc2V0IGBpbmNsdWRlVmlld1Byb3ZpZGVyc2AgdG8gdHJ1ZSAoaW1wbHlpbmcgdGhhdCB0aGUgdG9rZW4gY2FuIHNlZVxuICAgICAgLy8gVmlld1Byb3ZpZGVycyBiZWNhdXNlIGl0IGlzIHRoZSBDb21wb25lbnQgb3IgYSBTZXJ2aWNlIHdoaWNoIGl0c2VsZiB3YXMgZGVjbGFyZWQgaW5cbiAgICAgIC8vIFZpZXdQcm92aWRlcnMpXG4gICAgICAoaXNDb21wb25lbnRIb3N0KHROb2RlKSAmJiBpbmNsdWRlVmlld1Byb3ZpZGVycykgOlxuICAgICAgLy8gMikgYHByZXZpb3VzVFZpZXcgIT0gbnVsbGAgd2hpY2ggbWVhbnMgdGhhdCB3ZSBhcmUgbm93IHdhbGtpbmcgYWNyb3NzIHRoZSBwYXJlbnQgbm9kZXMuXG4gICAgICAvLyBJbiBzdWNoIGEgY2FzZSB3ZSBhcmUgb25seSBhbGxvd2VkIHRvIGxvb2sgaW50byB0aGUgVmlld1Byb3ZpZGVycyBpZjpcbiAgICAgIC8vIC0gV2UganVzdCBjcm9zc2VkIGZyb20gY2hpbGQgVmlldyB0byBQYXJlbnQgVmlldyBgcHJldmlvdXNUVmlldyAhPSBjdXJyZW50VFZpZXdgXG4gICAgICAvLyAtIEFORCB0aGUgcGFyZW50IFROb2RlIGlzIGFuIEVsZW1lbnQuXG4gICAgICAvLyBUaGlzIG1lYW5zIHRoYXQgd2UganVzdCBjYW1lIGZyb20gdGhlIENvbXBvbmVudCdzIFZpZXcgYW5kIHRoZXJlZm9yZSBhcmUgYWxsb3dlZCB0byBzZWVcbiAgICAgIC8vIGludG8gdGhlIFZpZXdQcm92aWRlcnMuXG4gICAgICAocHJldmlvdXNUVmlldyAhPSBjdXJyZW50VFZpZXcgJiYgKHROb2RlLnR5cGUgPT09IFROb2RlVHlwZS5FbGVtZW50KSk7XG5cbiAgLy8gVGhpcyBzcGVjaWFsIGNhc2UgaGFwcGVucyB3aGVuIHRoZXJlIGlzIGEgQGhvc3Qgb24gdGhlIGluamVjdCBhbmQgd2hlbiB3ZSBhcmUgc2VhcmNoaW5nXG4gIC8vIG9uIHRoZSBob3N0IGVsZW1lbnQgbm9kZS5cbiAgY29uc3QgaXNIb3N0U3BlY2lhbENhc2UgPSAoZmxhZ3MgJiBJbmplY3RGbGFncy5Ib3N0KSAmJiBob3N0VEVsZW1lbnROb2RlID09PSB0Tm9kZTtcblxuICBjb25zdCBpbmplY3RhYmxlSWR4ID0gbG9jYXRlRGlyZWN0aXZlT3JQcm92aWRlcihcbiAgICAgIHROb2RlLCBjdXJyZW50VFZpZXcsIHRva2VuLCBjYW5BY2Nlc3NWaWV3UHJvdmlkZXJzLCBpc0hvc3RTcGVjaWFsQ2FzZSk7XG4gIGlmIChpbmplY3RhYmxlSWR4ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldE5vZGVJbmplY3RhYmxlKGxWaWV3LCBjdXJyZW50VFZpZXcsIGluamVjdGFibGVJZHgsIHROb2RlIGFzIFRFbGVtZW50Tm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE5PVF9GT1VORDtcbiAgfVxufVxuXG4vKipcbiAqIFNlYXJjaGVzIGZvciB0aGUgZ2l2ZW4gdG9rZW4gYW1vbmcgdGhlIG5vZGUncyBkaXJlY3RpdmVzIGFuZCBwcm92aWRlcnMuXG4gKlxuICogQHBhcmFtIHROb2RlIFROb2RlIG9uIHdoaWNoIGRpcmVjdGl2ZXMgYXJlIHByZXNlbnQuXG4gKiBAcGFyYW0gdFZpZXcgVGhlIHRWaWV3IHdlIGFyZSBjdXJyZW50bHkgcHJvY2Vzc2luZ1xuICogQHBhcmFtIHRva2VuIFByb3ZpZGVyIHRva2VuIG9yIHR5cGUgb2YgYSBkaXJlY3RpdmUgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0gY2FuQWNjZXNzVmlld1Byb3ZpZGVycyBXaGV0aGVyIHZpZXcgcHJvdmlkZXJzIHNob3VsZCBiZSBjb25zaWRlcmVkLlxuICogQHBhcmFtIGlzSG9zdFNwZWNpYWxDYXNlIFdoZXRoZXIgdGhlIGhvc3Qgc3BlY2lhbCBjYXNlIGFwcGxpZXMuXG4gKiBAcmV0dXJucyBJbmRleCBvZiBhIGZvdW5kIGRpcmVjdGl2ZSBvciBwcm92aWRlciwgb3IgbnVsbCB3aGVuIG5vbmUgZm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2NhdGVEaXJlY3RpdmVPclByb3ZpZGVyPFQ+KFxuICAgIHROb2RlOiBUTm9kZSwgdFZpZXc6IFRWaWV3LCB0b2tlbjogVHlwZTxUPnxJbmplY3Rpb25Ub2tlbjxUPiwgY2FuQWNjZXNzVmlld1Byb3ZpZGVyczogYm9vbGVhbixcbiAgICBpc0hvc3RTcGVjaWFsQ2FzZTogYm9vbGVhbnxudW1iZXIpOiBudW1iZXJ8bnVsbCB7XG4gIGNvbnN0IG5vZGVQcm92aWRlckluZGV4ZXMgPSB0Tm9kZS5wcm92aWRlckluZGV4ZXM7XG4gIGNvbnN0IHRJbmplY3RhYmxlcyA9IHRWaWV3LmRhdGE7XG5cbiAgY29uc3QgaW5qZWN0YWJsZXNTdGFydCA9IG5vZGVQcm92aWRlckluZGV4ZXMgJiBUTm9kZVByb3ZpZGVySW5kZXhlcy5Qcm92aWRlcnNTdGFydEluZGV4TWFzaztcbiAgY29uc3QgZGlyZWN0aXZlc1N0YXJ0ID0gdE5vZGUuZGlyZWN0aXZlU3RhcnQ7XG4gIGNvbnN0IGRpcmVjdGl2ZUVuZCA9IHROb2RlLmRpcmVjdGl2ZUVuZDtcbiAgY29uc3QgY3B0Vmlld1Byb3ZpZGVyc0NvdW50ID1cbiAgICAgIG5vZGVQcm92aWRlckluZGV4ZXMgPj4gVE5vZGVQcm92aWRlckluZGV4ZXMuQ3B0Vmlld1Byb3ZpZGVyc0NvdW50U2hpZnQ7XG4gIGNvbnN0IHN0YXJ0aW5nSW5kZXggPVxuICAgICAgY2FuQWNjZXNzVmlld1Byb3ZpZGVycyA/IGluamVjdGFibGVzU3RhcnQgOiBpbmplY3RhYmxlc1N0YXJ0ICsgY3B0Vmlld1Byb3ZpZGVyc0NvdW50O1xuICAvLyBXaGVuIHRoZSBob3N0IHNwZWNpYWwgY2FzZSBhcHBsaWVzLCBvbmx5IHRoZSB2aWV3UHJvdmlkZXJzIGFuZCB0aGUgY29tcG9uZW50IGFyZSB2aXNpYmxlXG4gIGNvbnN0IGVuZEluZGV4ID0gaXNIb3N0U3BlY2lhbENhc2UgPyBpbmplY3RhYmxlc1N0YXJ0ICsgY3B0Vmlld1Byb3ZpZGVyc0NvdW50IDogZGlyZWN0aXZlRW5kO1xuICBmb3IgKGxldCBpID0gc3RhcnRpbmdJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICBjb25zdCBwcm92aWRlclRva2VuT3JEZWYgPSB0SW5qZWN0YWJsZXNbaV0gYXMgSW5qZWN0aW9uVG9rZW48YW55PnwgVHlwZTxhbnk+fCBEaXJlY3RpdmVEZWY8YW55PjtcbiAgICBpZiAoaSA8IGRpcmVjdGl2ZXNTdGFydCAmJiB0b2tlbiA9PT0gcHJvdmlkZXJUb2tlbk9yRGVmIHx8XG4gICAgICAgIGkgPj0gZGlyZWN0aXZlc1N0YXJ0ICYmIChwcm92aWRlclRva2VuT3JEZWYgYXMgRGlyZWN0aXZlRGVmPGFueT4pLnR5cGUgPT09IHRva2VuKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzSG9zdFNwZWNpYWxDYXNlKSB7XG4gICAgY29uc3QgZGlyRGVmID0gdEluamVjdGFibGVzW2RpcmVjdGl2ZXNTdGFydF0gYXMgRGlyZWN0aXZlRGVmPGFueT47XG4gICAgaWYgKGRpckRlZiAmJiBpc0NvbXBvbmVudERlZihkaXJEZWYpICYmIGRpckRlZi50eXBlID09PSB0b2tlbikge1xuICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNTdGFydDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmV0cmlldmUgb3IgaW5zdGFudGlhdGUgdGhlIGluamVjdGFibGUgZnJvbSB0aGUgYExWaWV3YCBhdCBwYXJ0aWN1bGFyIGBpbmRleGAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBjaGVja3MgdG8gc2VlIGlmIHRoZSB2YWx1ZSBoYXMgYWxyZWFkeSBiZWVuIGluc3RhbnRpYXRlZCBhbmQgaWYgc28gcmV0dXJucyB0aGVcbiAqIGNhY2hlZCBgaW5qZWN0YWJsZWAuIE90aGVyd2lzZSBpZiBpdCBkZXRlY3RzIHRoYXQgdGhlIHZhbHVlIGlzIHN0aWxsIGEgZmFjdG9yeSBpdFxuICogaW5zdGFudGlhdGVzIHRoZSBgaW5qZWN0YWJsZWAgYW5kIGNhY2hlcyB0aGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlSW5qZWN0YWJsZShcbiAgICBsVmlldzogTFZpZXcsIHRWaWV3OiBUVmlldywgaW5kZXg6IG51bWJlciwgdE5vZGU6IFREaXJlY3RpdmVIb3N0Tm9kZSk6IGFueSB7XG4gIGxldCB2YWx1ZSA9IGxWaWV3W2luZGV4XTtcbiAgY29uc3QgdERhdGEgPSB0Vmlldy5kYXRhO1xuICBpZiAoaXNGYWN0b3J5KHZhbHVlKSkge1xuICAgIGNvbnN0IGZhY3Rvcnk6IE5vZGVJbmplY3RvckZhY3RvcnkgPSB2YWx1ZTtcbiAgICBpZiAoZmFjdG9yeS5yZXNvbHZpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2lyY3VsYXIgZGVwIGZvciAke3N0cmluZ2lmeUZvckVycm9yKHREYXRhW2luZGV4XSl9YCk7XG4gICAgfVxuICAgIGNvbnN0IHByZXZpb3VzSW5jbHVkZVZpZXdQcm92aWRlcnMgPSBzZXRJbmNsdWRlVmlld1Byb3ZpZGVycyhmYWN0b3J5LmNhblNlZVZpZXdQcm92aWRlcnMpO1xuICAgIGZhY3RvcnkucmVzb2x2aW5nID0gdHJ1ZTtcbiAgICBsZXQgcHJldmlvdXNJbmplY3RJbXBsZW1lbnRhdGlvbjtcbiAgICBpZiAoZmFjdG9yeS5pbmplY3RJbXBsKSB7XG4gICAgICBwcmV2aW91c0luamVjdEltcGxlbWVudGF0aW9uID0gc2V0SW5qZWN0SW1wbGVtZW50YXRpb24oZmFjdG9yeS5pbmplY3RJbXBsKTtcbiAgICB9XG4gICAgZW50ZXJESShsVmlldywgdE5vZGUpO1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IGxWaWV3W2luZGV4XSA9IGZhY3RvcnkuZmFjdG9yeSh1bmRlZmluZWQsIHREYXRhLCBsVmlldywgdE5vZGUpO1xuICAgICAgLy8gVGhpcyBjb2RlIHBhdGggaXMgaGl0IGZvciBib3RoIGRpcmVjdGl2ZXMgYW5kIHByb3ZpZGVycy5cbiAgICAgIC8vIEZvciBwZXJmIHJlYXNvbnMsIHdlIHdhbnQgdG8gYXZvaWQgc2VhcmNoaW5nIGZvciBob29rcyBvbiBwcm92aWRlcnMuXG4gICAgICAvLyBJdCBkb2VzIG5vIGhhcm0gdG8gdHJ5ICh0aGUgaG9va3MganVzdCB3b24ndCBleGlzdCksIGJ1dCB0aGUgZXh0cmFcbiAgICAgIC8vIGNoZWNrcyBhcmUgdW5uZWNlc3NhcnkgYW5kIHRoaXMgaXMgYSBob3QgcGF0aC4gU28gd2UgY2hlY2sgdG8gc2VlXG4gICAgICAvLyBpZiB0aGUgaW5kZXggb2YgdGhlIGRlcGVuZGVuY3kgaXMgaW4gdGhlIGRpcmVjdGl2ZSByYW5nZSBmb3IgdGhpc1xuICAgICAgLy8gdE5vZGUuIElmIGl0J3Mgbm90LCB3ZSBrbm93IGl0J3MgYSBwcm92aWRlciBhbmQgc2tpcCBob29rIHJlZ2lzdHJhdGlvbi5cbiAgICAgIGlmICh0Vmlldy5maXJzdENyZWF0ZVBhc3MgJiYgaW5kZXggPj0gdE5vZGUuZGlyZWN0aXZlU3RhcnQpIHtcbiAgICAgICAgbmdEZXZNb2RlICYmIGFzc2VydERpcmVjdGl2ZURlZih0RGF0YVtpbmRleF0pO1xuICAgICAgICByZWdpc3RlclByZU9yZGVySG9va3MoaW5kZXgsIHREYXRhW2luZGV4XSBhcyBEaXJlY3RpdmVEZWY8YW55PiwgdFZpZXcpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZmFjdG9yeS5pbmplY3RJbXBsKSBzZXRJbmplY3RJbXBsZW1lbnRhdGlvbihwcmV2aW91c0luamVjdEltcGxlbWVudGF0aW9uKTtcbiAgICAgIHNldEluY2x1ZGVWaWV3UHJvdmlkZXJzKHByZXZpb3VzSW5jbHVkZVZpZXdQcm92aWRlcnMpO1xuICAgICAgZmFjdG9yeS5yZXNvbHZpbmcgPSBmYWxzZTtcbiAgICAgIGxlYXZlREkoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGJpdCBpbiBhbiBpbmplY3RvcidzIGJsb29tIGZpbHRlciB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdFxuICogdGhlIGRpcmVjdGl2ZSBtaWdodCBiZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0b3IuXG4gKlxuICogV2hlbiBhIGRpcmVjdGl2ZSBpcyBwdWJsaWMsIGl0IGlzIGFkZGVkIHRvIHRoZSBibG9vbSBmaWx0ZXIgYW5kIGdpdmVuIGEgdW5pcXVlIElEIHRoYXQgY2FuIGJlXG4gKiByZXRyaWV2ZWQgb24gdGhlIFR5cGUuIFdoZW4gdGhlIGRpcmVjdGl2ZSBpc24ndCBwdWJsaWMgb3IgdGhlIHRva2VuIGlzIG5vdCBhIGRpcmVjdGl2ZSBgbnVsbGBcbiAqIGlzIHJldHVybmVkIGFzIHRoZSBub2RlIGluamVjdG9yIGNhbiBub3QgcG9zc2libHkgcHJvdmlkZSB0aGF0IHRva2VuLlxuICpcbiAqIEBwYXJhbSB0b2tlbiB0aGUgaW5qZWN0aW9uIHRva2VuXG4gKiBAcmV0dXJucyB0aGUgbWF0Y2hpbmcgYml0IHRvIGNoZWNrIGluIHRoZSBibG9vbSBmaWx0ZXIgb3IgYG51bGxgIGlmIHRoZSB0b2tlbiBpcyBub3Qga25vd24uXG4gKiAgIFdoZW4gdGhlIHJldHVybmVkIHZhbHVlIGlzIG5lZ2F0aXZlIHRoZW4gaXQgcmVwcmVzZW50cyBzcGVjaWFsIHZhbHVlcyBzdWNoIGFzIGBJbmplY3RvcmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9vbUhhc2hCaXRPckZhY3RvcnkodG9rZW46IFR5cGU8YW55PnxJbmplY3Rpb25Ub2tlbjxhbnk+fHN0cmluZyk6IG51bWJlcnxGdW5jdGlvbnxcbiAgICB1bmRlZmluZWQge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0RGVmaW5lZCh0b2tlbiwgJ3Rva2VuIG11c3QgYmUgZGVmaW5lZCcpO1xuICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0b2tlbi5jaGFyQ29kZUF0KDApIHx8IDA7XG4gIH1cbiAgY29uc3QgdG9rZW5JZDogbnVtYmVyfHVuZGVmaW5lZCA9ICh0b2tlbiBhcyBhbnkpW05HX0VMRU1FTlRfSURdO1xuICAvLyBOZWdhdGl2ZSB0b2tlbiBJRHMgYXJlIHVzZWQgZm9yIHNwZWNpYWwgb2JqZWN0cyBzdWNoIGFzIGBJbmplY3RvcmBcbiAgcmV0dXJuICh0eXBlb2YgdG9rZW5JZCA9PT0gJ251bWJlcicgJiYgdG9rZW5JZCA+IDApID8gdG9rZW5JZCAmIEJMT09NX01BU0sgOiB0b2tlbklkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvb21IYXNUb2tlbihibG9vbUhhc2g6IG51bWJlciwgaW5qZWN0b3JJbmRleDogbnVtYmVyLCBpbmplY3RvclZpZXc6IExWaWV3fFREYXRhKSB7XG4gIC8vIENyZWF0ZSBhIG1hc2sgdGhhdCB0YXJnZXRzIHRoZSBzcGVjaWZpYyBiaXQgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmUgd2UncmUgbG9va2luZyBmb3IuXG4gIC8vIEpTIGJpdCBvcGVyYXRpb25zIGFyZSAzMiBiaXRzLCBzbyB0aGlzIHdpbGwgYmUgYSBudW1iZXIgYmV0d2VlbiAyXjAgYW5kIDJeMzEsIGNvcnJlc3BvbmRpbmdcbiAgLy8gdG8gYml0IHBvc2l0aW9ucyAwIC0gMzEgaW4gYSAzMiBiaXQgaW50ZWdlci5cbiAgY29uc3QgbWFzayA9IDEgPDwgYmxvb21IYXNoO1xuICBjb25zdCBiNyA9IGJsb29tSGFzaCAmIDB4ODA7XG4gIGNvbnN0IGI2ID0gYmxvb21IYXNoICYgMHg0MDtcbiAgY29uc3QgYjUgPSBibG9vbUhhc2ggJiAweDIwO1xuXG4gIC8vIE91ciBibG9vbSBmaWx0ZXIgc2l6ZSBpcyAyNTYgYml0cywgd2hpY2ggaXMgZWlnaHQgMzItYml0IGJsb29tIGZpbHRlciBidWNrZXRzOlxuICAvLyBiZjAgPSBbMCAtIDMxXSwgYmYxID0gWzMyIC0gNjNdLCBiZjIgPSBbNjQgLSA5NV0sIGJmMyA9IFs5NiAtIDEyN10sIGV0Yy5cbiAgLy8gR2V0IHRoZSBibG9vbSBmaWx0ZXIgdmFsdWUgZnJvbSB0aGUgYXBwcm9wcmlhdGUgYnVja2V0IGJhc2VkIG9uIHRoZSBkaXJlY3RpdmUncyBibG9vbUJpdC5cbiAgbGV0IHZhbHVlOiBudW1iZXI7XG5cbiAgaWYgKGI3KSB7XG4gICAgdmFsdWUgPSBiNiA/IChiNSA/IGluamVjdG9yVmlld1tpbmplY3RvckluZGV4ICsgN10gOiBpbmplY3RvclZpZXdbaW5qZWN0b3JJbmRleCArIDZdKSA6XG4gICAgICAgICAgICAgICAgIChiNSA/IGluamVjdG9yVmlld1tpbmplY3RvckluZGV4ICsgNV0gOiBpbmplY3RvclZpZXdbaW5qZWN0b3JJbmRleCArIDRdKTtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGI2ID8gKGI1ID8gaW5qZWN0b3JWaWV3W2luamVjdG9ySW5kZXggKyAzXSA6IGluamVjdG9yVmlld1tpbmplY3RvckluZGV4ICsgMl0pIDpcbiAgICAgICAgICAgICAgICAgKGI1ID8gaW5qZWN0b3JWaWV3W2luamVjdG9ySW5kZXggKyAxXSA6IGluamVjdG9yVmlld1tpbmplY3RvckluZGV4XSk7XG4gIH1cblxuICAvLyBJZiB0aGUgYmxvb20gZmlsdGVyIHZhbHVlIGhhcyB0aGUgYml0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRpcmVjdGl2ZSdzIGJsb29tQml0IGZsaXBwZWQgb24sXG4gIC8vIHRoaXMgaW5qZWN0b3IgaXMgYSBwb3RlbnRpYWwgbWF0Y2guXG4gIHJldHVybiAhISh2YWx1ZSAmIG1hc2spO1xufVxuXG4vKiogUmV0dXJucyB0cnVlIGlmIGZsYWdzIHByZXZlbnQgcGFyZW50IGluamVjdG9yIGZyb20gYmVpbmcgc2VhcmNoZWQgZm9yIHRva2VucyAqL1xuZnVuY3Rpb24gc2hvdWxkU2VhcmNoUGFyZW50KGZsYWdzOiBJbmplY3RGbGFncywgaXNGaXJzdEhvc3RUTm9kZTogYm9vbGVhbik6IGJvb2xlYW58bnVtYmVyIHtcbiAgcmV0dXJuICEoZmxhZ3MgJiBJbmplY3RGbGFncy5TZWxmKSAmJiAhKGZsYWdzICYgSW5qZWN0RmxhZ3MuSG9zdCAmJiBpc0ZpcnN0SG9zdFROb2RlKTtcbn1cblxuZXhwb3J0IGNsYXNzIE5vZGVJbmplY3RvciBpbXBsZW1lbnRzIEluamVjdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF90Tm9kZTogVEVsZW1lbnROb2RlfFRDb250YWluZXJOb2RlfFRFbGVtZW50Q29udGFpbmVyTm9kZXxudWxsLFxuICAgICAgcHJpdmF0ZSBfbFZpZXc6IExWaWV3KSB7fVxuXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KTogYW55IHtcbiAgICByZXR1cm4gZ2V0T3JDcmVhdGVJbmplY3RhYmxlKHRoaXMuX3ROb2RlLCB0aGlzLl9sVmlldywgdG9rZW4sIHVuZGVmaW5lZCwgbm90Rm91bmRWYWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtWdldEZhY3RvcnlPZjxUPih0eXBlOiBUeXBlPGFueT4pOiBGYWN0b3J5Rm48VD58bnVsbCB7XG4gIGNvbnN0IHR5cGVBbnkgPSB0eXBlIGFzIGFueTtcblxuICBpZiAoaXNGb3J3YXJkUmVmKHR5cGUpKSB7XG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICAgICAgICAgY29uc3QgZmFjdG9yeSA9IMm1ybVnZXRGYWN0b3J5T2Y8VD4ocmVzb2x2ZUZvcndhcmRSZWYodHlwZUFueSkpO1xuICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5ID8gZmFjdG9yeSgpIDogbnVsbDtcbiAgICAgICAgICAgfSkgYXMgYW55O1xuICB9XG5cbiAgbGV0IGZhY3RvcnkgPSBnZXRGYWN0b3J5RGVmPFQ+KHR5cGVBbnkpO1xuICBpZiAoZmFjdG9yeSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGluamVjdG9yRGVmID0gZ2V0SW5qZWN0b3JEZWY8VD4odHlwZUFueSk7XG4gICAgZmFjdG9yeSA9IGluamVjdG9yRGVmICYmIGluamVjdG9yRGVmLmZhY3Rvcnk7XG4gIH1cbiAgcmV0dXJuIGZhY3RvcnkgfHwgbnVsbDtcbn1cblxuLyoqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtWdldEluaGVyaXRlZEZhY3Rvcnk8VD4odHlwZTogVHlwZTxhbnk+KTogKHR5cGU6IFR5cGU8VD4pID0+IFQge1xuICByZXR1cm4gbm9TaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgY29uc3Qgb3duQ29uc3RydWN0b3IgPSB0eXBlLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICBjb25zdCBvd25GYWN0b3J5ID0gb3duQ29uc3RydWN0b3JbTkdfRkFDVE9SWV9ERUZdIHx8IMm1ybVnZXRGYWN0b3J5T2Yob3duQ29uc3RydWN0b3IpO1xuICAgIGNvbnN0IG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG4gICAgbGV0IHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0eXBlLnByb3RvdHlwZSkuY29uc3RydWN0b3I7XG5cbiAgICAvLyBHbyB1cCB0aGUgcHJvdG90eXBlIHVudGlsIHdlIGhpdCBgT2JqZWN0YC5cbiAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICBjb25zdCBmYWN0b3J5ID0gcGFyZW50W05HX0ZBQ1RPUllfREVGXSB8fCDJtcm1Z2V0RmFjdG9yeU9mKHBhcmVudCk7XG5cbiAgICAgIC8vIElmIHdlIGhpdCBzb21ldGhpbmcgdGhhdCBoYXMgYSBmYWN0b3J5IGFuZCB0aGUgZmFjdG9yeSBpc24ndCB0aGUgc2FtZSBhcyB0aGUgdHlwZSxcbiAgICAgIC8vIHdlJ3ZlIGZvdW5kIHRoZSBpbmhlcml0ZWQgZmFjdG9yeS4gTm90ZSB0aGUgY2hlY2sgdGhhdCB0aGUgZmFjdG9yeSBpc24ndCB0aGUgdHlwZSdzXG4gICAgICAvLyBvd24gZmFjdG9yeSBpcyByZWR1bmRhbnQgaW4gbW9zdCBjYXNlcywgYnV0IGlmIHRoZSB1c2VyIGhhcyBjdXN0b20gZGVjb3JhdG9ycyBvbiB0aGVcbiAgICAgIC8vIGNsYXNzLCB0aGlzIGxvb2t1cCB3aWxsIHN0YXJ0IG9uZSBsZXZlbCBkb3duIGluIHRoZSBwcm90b3R5cGUgY2hhaW4sIGNhdXNpbmcgdXMgdG9cbiAgICAgIC8vIGZpbmQgdGhlIG93biBmYWN0b3J5IGZpcnN0IGFuZCBwb3RlbnRpYWxseSB0cmlnZ2VyaW5nIGFuIGluZmluaXRlIGxvb3AgZG93bnN0cmVhbS5cbiAgICAgIGlmIChmYWN0b3J5ICYmIGZhY3RvcnkgIT09IG93bkZhY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIFRoZXJlIGlzIG5vIGZhY3RvcnkgZGVmaW5lZC4gRWl0aGVyIHRoaXMgd2FzIGltcHJvcGVyIHVzYWdlIG9mIGluaGVyaXRhbmNlXG4gICAgLy8gKG5vIEFuZ3VsYXIgZGVjb3JhdG9yIG9uIHRoZSBzdXBlcmNsYXNzKSBvciB0aGVyZSBpcyBubyBjb25zdHJ1Y3RvciBhdCBhbGxcbiAgICAvLyBpbiB0aGUgaW5oZXJpdGFuY2UgY2hhaW4uIFNpbmNlIHRoZSB0d28gY2FzZXMgY2Fubm90IGJlIGRpc3Rpbmd1aXNoZWQsIHRoZVxuICAgIC8vIGxhdHRlciBoYXMgdG8gYmUgYXNzdW1lZC5cbiAgICByZXR1cm4gdCA9PiBuZXcgdCgpO1xuICB9KTtcbn1cbiJdfQ==