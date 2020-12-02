/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { devModeEqual, WrappedValue } from '../change_detection/change_detection';
import { SOURCE } from '../di/injector_compatibility';
import { ViewEncapsulation } from '../metadata/view';
import { looseIdentical } from '../util/comparison';
import { stringify } from '../util/stringify';
import { expressionChangedAfterItHasBeenCheckedError } from './errors';
import { asElementData, asTextData, Services } from './types';
/** @type {?} */
export const NOOP = (/**
 * @return {?}
 */
() => { });
/** @type {?} */
const _tokenKeyCache = new Map();
/**
 * @param {?} token
 * @return {?}
 */
export function tokenKey(token) {
    /** @type {?} */
    let key = _tokenKeyCache.get(token);
    if (!key) {
        key = stringify(token) + '_' + _tokenKeyCache.size;
        _tokenKeyCache.set(token, key);
    }
    return key;
}
/**
 * @param {?} view
 * @param {?} nodeIdx
 * @param {?} bindingIdx
 * @param {?} value
 * @return {?}
 */
export function unwrapValue(view, nodeIdx, bindingIdx, value) {
    if (WrappedValue.isWrapped(value)) {
        value = WrappedValue.unwrap(value);
        /** @type {?} */
        const globalBindingIdx = view.def.nodes[nodeIdx].bindingIndex + bindingIdx;
        /** @type {?} */
        const oldValue = WrappedValue.unwrap(view.oldValues[globalBindingIdx]);
        view.oldValues[globalBindingIdx] = new WrappedValue(oldValue);
    }
    return value;
}
/** @type {?} */
const UNDEFINED_RENDERER_TYPE_ID = '$$undefined';
/** @type {?} */
const EMPTY_RENDERER_TYPE_ID = '$$empty';
// Attention: this function is called as top level function.
// Putting any logic in here will destroy closure tree shaking!
/**
 * @param {?} values
 * @return {?}
 */
export function createRendererType2(values) {
    return {
        id: UNDEFINED_RENDERER_TYPE_ID,
        styles: values.styles,
        encapsulation: values.encapsulation,
        data: values.data
    };
}
/** @type {?} */
let _renderCompCount = 0;
/**
 * @param {?=} type
 * @return {?}
 */
export function resolveRendererType2(type) {
    if (type && type.id === UNDEFINED_RENDERER_TYPE_ID) {
        // first time we see this RendererType2. Initialize it...
        /** @type {?} */
        const isFilled = ((type.encapsulation != null && type.encapsulation !== ViewEncapsulation.None) ||
            type.styles.length || Object.keys(type.data).length);
        if (isFilled) {
            type.id = `c${_renderCompCount++}`;
        }
        else {
            type.id = EMPTY_RENDERER_TYPE_ID;
        }
    }
    if (type && type.id === EMPTY_RENDERER_TYPE_ID) {
        type = null;
    }
    return type || null;
}
/**
 * @param {?} view
 * @param {?} def
 * @param {?} bindingIdx
 * @param {?} value
 * @return {?}
 */
export function checkBinding(view, def, bindingIdx, value) {
    /** @type {?} */
    const oldValues = view.oldValues;
    if ((view.state & 2 /* FirstCheck */) ||
        !looseIdentical(oldValues[def.bindingIndex + bindingIdx], value)) {
        return true;
    }
    return false;
}
/**
 * @param {?} view
 * @param {?} def
 * @param {?} bindingIdx
 * @param {?} value
 * @return {?}
 */
export function checkAndUpdateBinding(view, def, bindingIdx, value) {
    if (checkBinding(view, def, bindingIdx, value)) {
        view.oldValues[def.bindingIndex + bindingIdx] = value;
        return true;
    }
    return false;
}
/**
 * @param {?} view
 * @param {?} def
 * @param {?} bindingIdx
 * @param {?} value
 * @return {?}
 */
export function checkBindingNoChanges(view, def, bindingIdx, value) {
    /** @type {?} */
    const oldValue = view.oldValues[def.bindingIndex + bindingIdx];
    if ((view.state & 1 /* BeforeFirstCheck */) || !devModeEqual(oldValue, value)) {
        /** @type {?} */
        const bindingName = def.bindings[bindingIdx].name;
        throw expressionChangedAfterItHasBeenCheckedError(Services.createDebugContext(view, def.nodeIndex), `${bindingName}: ${oldValue}`, `${bindingName}: ${value}`, (view.state & 1 /* BeforeFirstCheck */) !== 0);
    }
}
/**
 * @param {?} view
 * @return {?}
 */
export function markParentViewsForCheck(view) {
    /** @type {?} */
    let currView = view;
    while (currView) {
        if (currView.def.flags & 2 /* OnPush */) {
            currView.state |= 8 /* ChecksEnabled */;
        }
        currView = currView.viewContainerParent || currView.parent;
    }
}
/**
 * @param {?} view
 * @param {?} endView
 * @return {?}
 */
export function markParentViewsForCheckProjectedViews(view, endView) {
    /** @type {?} */
    let currView = view;
    while (currView && currView !== endView) {
        currView.state |= 64 /* CheckProjectedViews */;
        currView = currView.viewContainerParent || currView.parent;
    }
}
/**
 * @param {?} view
 * @param {?} nodeIndex
 * @param {?} eventName
 * @param {?} event
 * @return {?}
 */
export function dispatchEvent(view, nodeIndex, eventName, event) {
    try {
        /** @type {?} */
        const nodeDef = view.def.nodes[nodeIndex];
        /** @type {?} */
        const startView = nodeDef.flags & 33554432 /* ComponentView */ ?
            asElementData(view, nodeIndex).componentView :
            view;
        markParentViewsForCheck(startView);
        return Services.handleEvent(view, nodeIndex, eventName, event);
    }
    catch (e) {
        // Attention: Don't rethrow, as it would cancel Observable subscriptions!
        view.root.errorHandler.handleError(e);
    }
}
/**
 * @param {?} view
 * @return {?}
 */
export function declaredViewContainer(view) {
    if (view.parent) {
        /** @type {?} */
        const parentView = view.parent;
        return asElementData(parentView, (/** @type {?} */ (view.parentNodeDef)).nodeIndex);
    }
    return null;
}
/**
 * for component views, this is the host element.
 * for embedded views, this is the index of the parent node
 * that contains the view container.
 * @param {?} view
 * @return {?}
 */
export function viewParentEl(view) {
    /** @type {?} */
    const parentView = view.parent;
    if (parentView) {
        return (/** @type {?} */ (view.parentNodeDef)).parent;
    }
    else {
        return null;
    }
}
/**
 * @param {?} view
 * @param {?} def
 * @return {?}
 */
export function renderNode(view, def) {
    switch (def.flags & 201347067 /* Types */) {
        case 1 /* TypeElement */:
            return asElementData(view, def.nodeIndex).renderElement;
        case 2 /* TypeText */:
            return asTextData(view, def.nodeIndex).renderText;
    }
}
/**
 * @param {?} target
 * @param {?} name
 * @return {?}
 */
export function elementEventFullName(target, name) {
    return target ? `${target}:${name}` : name;
}
/**
 * @param {?} view
 * @return {?}
 */
export function isComponentView(view) {
    return !!view.parent && !!((/** @type {?} */ (view.parentNodeDef)).flags & 32768 /* Component */);
}
/**
 * @param {?} view
 * @return {?}
 */
export function isEmbeddedView(view) {
    return !!view.parent && !((/** @type {?} */ (view.parentNodeDef)).flags & 32768 /* Component */);
}
/**
 * @param {?} queryId
 * @return {?}
 */
export function filterQueryId(queryId) {
    return 1 << (queryId % 32);
}
/**
 * @param {?} matchedQueriesDsl
 * @return {?}
 */
export function splitMatchedQueriesDsl(matchedQueriesDsl) {
    /** @type {?} */
    const matchedQueries = {};
    /** @type {?} */
    let matchedQueryIds = 0;
    /** @type {?} */
    const references = {};
    if (matchedQueriesDsl) {
        matchedQueriesDsl.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ([queryId, valueType]) => {
            if (typeof queryId === 'number') {
                matchedQueries[queryId] = valueType;
                matchedQueryIds |= filterQueryId(queryId);
            }
            else {
                references[queryId] = valueType;
            }
        }));
    }
    return { matchedQueries, references, matchedQueryIds };
}
/**
 * @param {?} deps
 * @param {?=} sourceName
 * @return {?}
 */
export function splitDepsDsl(deps, sourceName) {
    return deps.map((/**
     * @param {?} value
     * @return {?}
     */
    value => {
        /** @type {?} */
        let token;
        /** @type {?} */
        let flags;
        if (Array.isArray(value)) {
            [flags, token] = value;
        }
        else {
            flags = 0 /* None */;
            token = value;
        }
        if (token && (typeof token === 'function' || typeof token === 'object') && sourceName) {
            Object.defineProperty(token, SOURCE, { value: sourceName, configurable: true });
        }
        return { flags, token, tokenKey: tokenKey(token) };
    }));
}
/**
 * @param {?} view
 * @param {?} renderHost
 * @param {?} def
 * @return {?}
 */
export function getParentRenderElement(view, renderHost, def) {
    /** @type {?} */
    let renderParent = def.renderParent;
    if (renderParent) {
        if ((renderParent.flags & 1 /* TypeElement */) === 0 ||
            (renderParent.flags & 33554432 /* ComponentView */) === 0 ||
            ((/** @type {?} */ (renderParent.element)).componentRendererType &&
                (/** @type {?} */ ((/** @type {?} */ (renderParent.element)).componentRendererType)).encapsulation === ViewEncapsulation.Native)) {
            // only children of non components, or children of components with native encapsulation should
            // be attached.
            return asElementData(view, (/** @type {?} */ (def.renderParent)).nodeIndex).renderElement;
        }
    }
    else {
        return renderHost;
    }
}
/** @type {?} */
const DEFINITION_CACHE = new WeakMap();
/**
 * @template D
 * @param {?} factory
 * @return {?}
 */
export function resolveDefinition(factory) {
    /** @type {?} */
    let value = (/** @type {?} */ ((/** @type {?} */ (DEFINITION_CACHE.get(factory)))));
    if (!value) {
        value = factory((/**
         * @return {?}
         */
        () => NOOP));
        value.factory = factory;
        DEFINITION_CACHE.set(factory, value);
    }
    return value;
}
/**
 * @param {?} view
 * @return {?}
 */
export function rootRenderNodes(view) {
    /** @type {?} */
    const renderNodes = [];
    visitRootRenderNodes(view, 0 /* Collect */, undefined, undefined, renderNodes);
    return renderNodes;
}
/** @enum {number} */
const RenderNodeAction = {
    Collect: 0,
    AppendChild: 1,
    InsertBefore: 2,
    RemoveChild: 3,
};
export { RenderNodeAction };
/**
 * @param {?} view
 * @param {?} action
 * @param {?} parentNode
 * @param {?} nextSibling
 * @param {?=} target
 * @return {?}
 */
export function visitRootRenderNodes(view, action, parentNode, nextSibling, target) {
    // We need to re-compute the parent node in case the nodes have been moved around manually
    if (action === 3 /* RemoveChild */) {
        parentNode = view.renderer.parentNode(renderNode(view, (/** @type {?} */ (view.def.lastRenderRootNode))));
    }
    visitSiblingRenderNodes(view, action, 0, view.def.nodes.length - 1, parentNode, nextSibling, target);
}
/**
 * @param {?} view
 * @param {?} action
 * @param {?} startIndex
 * @param {?} endIndex
 * @param {?} parentNode
 * @param {?} nextSibling
 * @param {?=} target
 * @return {?}
 */
export function visitSiblingRenderNodes(view, action, startIndex, endIndex, parentNode, nextSibling, target) {
    for (let i = startIndex; i <= endIndex; i++) {
        /** @type {?} */
        const nodeDef = view.def.nodes[i];
        if (nodeDef.flags & (1 /* TypeElement */ | 2 /* TypeText */ | 8 /* TypeNgContent */)) {
            visitRenderNode(view, nodeDef, action, parentNode, nextSibling, target);
        }
        // jump to next sibling
        i += nodeDef.childCount;
    }
}
/**
 * @param {?} view
 * @param {?} ngContentIndex
 * @param {?} action
 * @param {?} parentNode
 * @param {?} nextSibling
 * @param {?=} target
 * @return {?}
 */
export function visitProjectedRenderNodes(view, ngContentIndex, action, parentNode, nextSibling, target) {
    /** @type {?} */
    let compView = view;
    while (compView && !isComponentView(compView)) {
        compView = compView.parent;
    }
    /** @type {?} */
    const hostView = (/** @type {?} */ (compView)).parent;
    /** @type {?} */
    const hostElDef = viewParentEl((/** @type {?} */ (compView)));
    /** @type {?} */
    const startIndex = (/** @type {?} */ (hostElDef)).nodeIndex + 1;
    /** @type {?} */
    const endIndex = (/** @type {?} */ (hostElDef)).nodeIndex + (/** @type {?} */ (hostElDef)).childCount;
    for (let i = startIndex; i <= endIndex; i++) {
        /** @type {?} */
        const nodeDef = (/** @type {?} */ (hostView)).def.nodes[i];
        if (nodeDef.ngContentIndex === ngContentIndex) {
            visitRenderNode((/** @type {?} */ (hostView)), nodeDef, action, parentNode, nextSibling, target);
        }
        // jump to next sibling
        i += nodeDef.childCount;
    }
    if (!(/** @type {?} */ (hostView)).parent) {
        // a root view
        /** @type {?} */
        const projectedNodes = view.root.projectableNodes[ngContentIndex];
        if (projectedNodes) {
            for (let i = 0; i < projectedNodes.length; i++) {
                execRenderNodeAction(view, projectedNodes[i], action, parentNode, nextSibling, target);
            }
        }
    }
}
/**
 * @param {?} view
 * @param {?} nodeDef
 * @param {?} action
 * @param {?} parentNode
 * @param {?} nextSibling
 * @param {?=} target
 * @return {?}
 */
function visitRenderNode(view, nodeDef, action, parentNode, nextSibling, target) {
    if (nodeDef.flags & 8 /* TypeNgContent */) {
        visitProjectedRenderNodes(view, (/** @type {?} */ (nodeDef.ngContent)).index, action, parentNode, nextSibling, target);
    }
    else {
        /** @type {?} */
        const rn = renderNode(view, nodeDef);
        if (action === 3 /* RemoveChild */ && (nodeDef.flags & 33554432 /* ComponentView */) &&
            (nodeDef.bindingFlags & 48 /* CatSyntheticProperty */)) {
            // Note: we might need to do both actions.
            if (nodeDef.bindingFlags & (16 /* SyntheticProperty */)) {
                execRenderNodeAction(view, rn, action, parentNode, nextSibling, target);
            }
            if (nodeDef.bindingFlags & (32 /* SyntheticHostProperty */)) {
                /** @type {?} */
                const compView = asElementData(view, nodeDef.nodeIndex).componentView;
                execRenderNodeAction(compView, rn, action, parentNode, nextSibling, target);
            }
        }
        else {
            execRenderNodeAction(view, rn, action, parentNode, nextSibling, target);
        }
        if (nodeDef.flags & 16777216 /* EmbeddedViews */) {
            /** @type {?} */
            const embeddedViews = (/** @type {?} */ (asElementData(view, nodeDef.nodeIndex).viewContainer))._embeddedViews;
            for (let k = 0; k < embeddedViews.length; k++) {
                visitRootRenderNodes(embeddedViews[k], action, parentNode, nextSibling, target);
            }
        }
        if (nodeDef.flags & 1 /* TypeElement */ && !(/** @type {?} */ (nodeDef.element)).name) {
            visitSiblingRenderNodes(view, action, nodeDef.nodeIndex + 1, nodeDef.nodeIndex + nodeDef.childCount, parentNode, nextSibling, target);
        }
    }
}
/**
 * @param {?} view
 * @param {?} renderNode
 * @param {?} action
 * @param {?} parentNode
 * @param {?} nextSibling
 * @param {?=} target
 * @return {?}
 */
function execRenderNodeAction(view, renderNode, action, parentNode, nextSibling, target) {
    /** @type {?} */
    const renderer = view.renderer;
    switch (action) {
        case 1 /* AppendChild */:
            renderer.appendChild(parentNode, renderNode);
            break;
        case 2 /* InsertBefore */:
            renderer.insertBefore(parentNode, renderNode, nextSibling);
            break;
        case 3 /* RemoveChild */:
            renderer.removeChild(parentNode, renderNode);
            break;
        case 0 /* Collect */:
            (/** @type {?} */ (target)).push(renderNode);
            break;
    }
}
/** @type {?} */
const NS_PREFIX_RE = /^:([^:]+):(.+)$/;
/**
 * @param {?} name
 * @return {?}
 */
export function splitNamespace(name) {
    if (name[0] === ':') {
        /** @type {?} */
        const match = (/** @type {?} */ (name.match(NS_PREFIX_RE)));
        return [match[1], match[2]];
    }
    return ['', name];
}
/**
 * @param {?} bindings
 * @return {?}
 */
export function calcBindingFlags(bindings) {
    /** @type {?} */
    let flags = 0;
    for (let i = 0; i < bindings.length; i++) {
        flags |= bindings[i].flags;
    }
    return flags;
}
/**
 * @param {?} valueCount
 * @param {?} constAndInterp
 * @return {?}
 */
export function interpolate(valueCount, constAndInterp) {
    /** @type {?} */
    let result = '';
    for (let i = 0; i < valueCount * 2; i = i + 2) {
        result = result + constAndInterp[i] + _toStringWithNull(constAndInterp[i + 1]);
    }
    return result + constAndInterp[valueCount * 2];
}
/**
 * @param {?} valueCount
 * @param {?} c0
 * @param {?} a1
 * @param {?} c1
 * @param {?=} a2
 * @param {?=} c2
 * @param {?=} a3
 * @param {?=} c3
 * @param {?=} a4
 * @param {?=} c4
 * @param {?=} a5
 * @param {?=} c5
 * @param {?=} a6
 * @param {?=} c6
 * @param {?=} a7
 * @param {?=} c7
 * @param {?=} a8
 * @param {?=} c8
 * @param {?=} a9
 * @param {?=} c9
 * @return {?}
 */
export function inlineInterpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
    switch (valueCount) {
        case 1:
            return c0 + _toStringWithNull(a1) + c1;
        case 2:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
        case 3:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3;
        case 4:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4;
        case 5:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
        case 6:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6;
        case 7:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7;
        case 8:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
        case 9:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) + c9;
        default:
            throw new Error(`Does not support more than 9 expressions`);
    }
}
/**
 * @param {?} v
 * @return {?}
 */
function _toStringWithNull(v) {
    return v != null ? v.toString() : '';
}
/** @type {?} */
export const EMPTY_ARRAY = [];
/** @type {?} */
export const EMPTY_MAP = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3ZpZXcvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTVDLE9BQU8sRUFBQywyQ0FBMkMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsYUFBYSxFQUFFLFVBQVUsRUFBOEgsUUFBUSxFQUF3RSxNQUFNLFNBQVMsQ0FBQzs7QUFFL1AsTUFBTSxPQUFPLElBQUk7OztBQUFRLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQTs7TUFFM0IsY0FBYyxHQUFHLElBQUksR0FBRyxFQUFlOzs7OztBQUU3QyxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQVU7O1FBQzdCLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNuQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQztRQUNuRCxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNoQztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQWMsRUFBRSxPQUFlLEVBQUUsVUFBa0IsRUFBRSxLQUFVO0lB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LFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDdkMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sV0FBVyxHQUFVLEVBQUU7O0FBQ3BDLE1BQU0sT0FBTyxTQUFTLEdBQXlCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ZGV2TW9kZUVxdWFsLCBXcmFwcGVkVmFsdWV9IGZyb20gJy4uL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG5pbXBvcnQge1NPVVJDRX0gZnJvbSAnLi4vZGkvaW5qZWN0b3JfY29tcGF0aWJpbGl0eSc7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICcuLi9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7UmVuZGVyZXJUeXBlMn0gZnJvbSAnLi4vcmVuZGVyL2FwaSc7XG5pbXBvcnQge2xvb3NlSWRlbnRpY2FsfSBmcm9tICcuLi91dGlsL2NvbXBhcmlzb24nO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4uL3V0aWwvc3RyaW5naWZ5JztcblxuaW1wb3J0IHtleHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQge2FzRWxlbWVudERhdGEsIGFzVGV4dERhdGEsIEJpbmRpbmdEZWYsIEJpbmRpbmdGbGFncywgRGVmaW5pdGlvbiwgRGVmaW5pdGlvbkZhY3RvcnksIERlcERlZiwgRGVwRmxhZ3MsIEVsZW1lbnREYXRhLCBOb2RlRGVmLCBOb2RlRmxhZ3MsIFF1ZXJ5VmFsdWVUeXBlLCBTZXJ2aWNlcywgVmlld0RhdGEsIFZpZXdEZWZpbml0aW9uLCBWaWV3RGVmaW5pdGlvbkZhY3RvcnksIFZpZXdGbGFncywgVmlld1N0YXRlfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IE5PT1A6IGFueSA9ICgpID0+IHt9O1xuXG5jb25zdCBfdG9rZW5LZXlDYWNoZSA9IG5ldyBNYXA8YW55LCBzdHJpbmc+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbktleSh0b2tlbjogYW55KTogc3RyaW5nIHtcbiAgbGV0IGtleSA9IF90b2tlbktleUNhY2hlLmdldCh0b2tlbik7XG4gIGlmICgha2V5KSB7XG4gICAga2V5ID0gc3RyaW5naWZ5KHRva2VuKSArICdfJyArIF90b2tlbktleUNhY2hlLnNpemU7XG4gICAgX3Rva2VuS2V5Q2FjaGUuc2V0KHRva2VuLCBrZXkpO1xuICB9XG4gIHJldHVybiBrZXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bndyYXBWYWx1ZSh2aWV3OiBWaWV3RGF0YSwgbm9kZUlkeDogbnVtYmVyLCBiaW5kaW5nSWR4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiBhbnkge1xuICBpZiAoV3JhcHBlZFZhbHVlLmlzV3JhcHBlZCh2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IFdyYXBwZWRWYWx1ZS51bndyYXAodmFsdWUpO1xuICAgIGNvbnN0IGdsb2JhbEJpbmRpbmdJZHggPSB2aWV3LmRlZi5ub2Rlc1tub2RlSWR4XS5iaW5kaW5nSW5kZXggKyBiaW5kaW5nSWR4O1xuICAgIGNvbnN0IG9sZFZhbHVlID0gV3JhcHBlZFZhbHVlLnVud3JhcCh2aWV3Lm9sZFZhbHVlc1tnbG9iYWxCaW5kaW5nSWR4XSk7XG4gICAgdmlldy5vbGRWYWx1ZXNbZ2xvYmFsQmluZGluZ0lkeF0gPSBuZXcgV3JhcHBlZFZhbHVlKG9sZFZhbHVlKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmNvbnN0IFVOREVGSU5FRF9SRU5ERVJFUl9UWVBFX0lEID0gJyQkdW5kZWZpbmVkJztcbmNvbnN0IEVNUFRZX1JFTkRFUkVSX1RZUEVfSUQgPSAnJCRlbXB0eSc7XG5cbi8vIEF0dGVudGlvbjogdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYXMgdG9wIGxldmVsIGZ1bmN0aW9uLlxuLy8gUHV0dGluZyBhbnkgbG9naWMgaW4gaGVyZSB3aWxsIGRlc3Ryb3kgY2xvc3VyZSB0cmVlIHNoYWtpbmchXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVuZGVyZXJUeXBlMih2YWx1ZXM6IHtcbiAgc3R5bGVzOiAoc3RyaW5nfGFueVtdKVtdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbixcbiAgZGF0YToge1traW5kOiBzdHJpbmddOiBhbnlbXX1cbn0pOiBSZW5kZXJlclR5cGUyIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogVU5ERUZJTkVEX1JFTkRFUkVSX1RZUEVfSUQsXG4gICAgc3R5bGVzOiB2YWx1ZXMuc3R5bGVzLFxuICAgIGVuY2Fwc3VsYXRpb246IHZhbHVlcy5lbmNhcHN1bGF0aW9uLFxuICAgIGRhdGE6IHZhbHVlcy5kYXRhXG4gIH07XG59XG5cbmxldCBfcmVuZGVyQ29tcENvdW50ID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZW5kZXJlclR5cGUyKHR5cGU/OiBSZW5kZXJlclR5cGUyfG51bGwpOiBSZW5kZXJlclR5cGUyfG51bGwge1xuICBpZiAodHlwZSAmJiB0eXBlLmlkID09PSBVTkRFRklORURfUkVOREVSRVJfVFlQRV9JRCkge1xuICAgIC8vIGZpcnN0IHRpbWUgd2Ugc2VlIHRoaXMgUmVuZGVyZXJUeXBlMi4gSW5pdGlhbGl6ZSBpdC4uLlxuICAgIGNvbnN0IGlzRmlsbGVkID1cbiAgICAgICAgKCh0eXBlLmVuY2Fwc3VsYXRpb24gIT0gbnVsbCAmJiB0eXBlLmVuY2Fwc3VsYXRpb24gIT09IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUpIHx8XG4gICAgICAgICB0eXBlLnN0eWxlcy5sZW5ndGggfHwgT2JqZWN0LmtleXModHlwZS5kYXRhKS5sZW5ndGgpO1xuICAgIGlmIChpc0ZpbGxlZCkge1xuICAgICAgdHlwZS5pZCA9IGBjJHtfcmVuZGVyQ29tcENvdW50Kyt9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZS5pZCA9IEVNUFRZX1JFTkRFUkVSX1RZUEVfSUQ7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlICYmIHR5cGUuaWQgPT09IEVNUFRZX1JFTkRFUkVSX1RZUEVfSUQpIHtcbiAgICB0eXBlID0gbnVsbDtcbiAgfVxuICByZXR1cm4gdHlwZSB8fCBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCaW5kaW5nKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBkZWY6IE5vZGVEZWYsIGJpbmRpbmdJZHg6IG51bWJlciwgdmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICBjb25zdCBvbGRWYWx1ZXMgPSB2aWV3Lm9sZFZhbHVlcztcbiAgaWYgKCh2aWV3LnN0YXRlICYgVmlld1N0YXRlLkZpcnN0Q2hlY2spIHx8XG4gICAgICAhbG9vc2VJZGVudGljYWwob2xkVmFsdWVzW2RlZi5iaW5kaW5nSW5kZXggKyBiaW5kaW5nSWR4XSwgdmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBbmRVcGRhdGVCaW5kaW5nKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBkZWY6IE5vZGVEZWYsIGJpbmRpbmdJZHg6IG51bWJlciwgdmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAoY2hlY2tCaW5kaW5nKHZpZXcsIGRlZiwgYmluZGluZ0lkeCwgdmFsdWUpKSB7XG4gICAgdmlldy5vbGRWYWx1ZXNbZGVmLmJpbmRpbmdJbmRleCArIGJpbmRpbmdJZHhdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCaW5kaW5nTm9DaGFuZ2VzKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBkZWY6IE5vZGVEZWYsIGJpbmRpbmdJZHg6IG51bWJlciwgdmFsdWU6IGFueSkge1xuICBjb25zdCBvbGRWYWx1ZSA9IHZpZXcub2xkVmFsdWVzW2RlZi5iaW5kaW5nSW5kZXggKyBiaW5kaW5nSWR4XTtcbiAgaWYgKCh2aWV3LnN0YXRlICYgVmlld1N0YXRlLkJlZm9yZUZpcnN0Q2hlY2spIHx8ICFkZXZNb2RlRXF1YWwob2xkVmFsdWUsIHZhbHVlKSkge1xuICAgIGNvbnN0IGJpbmRpbmdOYW1lID0gZGVmLmJpbmRpbmdzW2JpbmRpbmdJZHhdLm5hbWU7XG4gICAgdGhyb3cgZXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvcihcbiAgICAgICAgU2VydmljZXMuY3JlYXRlRGVidWdDb250ZXh0KHZpZXcsIGRlZi5ub2RlSW5kZXgpLCBgJHtiaW5kaW5nTmFtZX06ICR7b2xkVmFsdWV9YCxcbiAgICAgICAgYCR7YmluZGluZ05hbWV9OiAke3ZhbHVlfWAsICh2aWV3LnN0YXRlICYgVmlld1N0YXRlLkJlZm9yZUZpcnN0Q2hlY2spICE9PSAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya1BhcmVudFZpZXdzRm9yQ2hlY2sodmlldzogVmlld0RhdGEpIHtcbiAgbGV0IGN1cnJWaWV3OiBWaWV3RGF0YXxudWxsID0gdmlldztcbiAgd2hpbGUgKGN1cnJWaWV3KSB7XG4gICAgaWYgKGN1cnJWaWV3LmRlZi5mbGFncyAmIFZpZXdGbGFncy5PblB1c2gpIHtcbiAgICAgIGN1cnJWaWV3LnN0YXRlIHw9IFZpZXdTdGF0ZS5DaGVja3NFbmFibGVkO1xuICAgIH1cbiAgICBjdXJyVmlldyA9IGN1cnJWaWV3LnZpZXdDb250YWluZXJQYXJlbnQgfHwgY3VyclZpZXcucGFyZW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrUGFyZW50Vmlld3NGb3JDaGVja1Byb2plY3RlZFZpZXdzKHZpZXc6IFZpZXdEYXRhLCBlbmRWaWV3OiBWaWV3RGF0YSkge1xuICBsZXQgY3VyclZpZXc6IFZpZXdEYXRhfG51bGwgPSB2aWV3O1xuICB3aGlsZSAoY3VyclZpZXcgJiYgY3VyclZpZXcgIT09IGVuZFZpZXcpIHtcbiAgICBjdXJyVmlldy5zdGF0ZSB8PSBWaWV3U3RhdGUuQ2hlY2tQcm9qZWN0ZWRWaWV3cztcbiAgICBjdXJyVmlldyA9IGN1cnJWaWV3LnZpZXdDb250YWluZXJQYXJlbnQgfHwgY3VyclZpZXcucGFyZW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KFxuICAgIHZpZXc6IFZpZXdEYXRhLCBub2RlSW5kZXg6IG51bWJlciwgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50OiBhbnkpOiBib29sZWFufHVuZGVmaW5lZCB7XG4gIHRyeSB7XG4gICAgY29uc3Qgbm9kZURlZiA9IHZpZXcuZGVmLm5vZGVzW25vZGVJbmRleF07XG4gICAgY29uc3Qgc3RhcnRWaWV3ID0gbm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5Db21wb25lbnRWaWV3ID9cbiAgICAgICAgYXNFbGVtZW50RGF0YSh2aWV3LCBub2RlSW5kZXgpLmNvbXBvbmVudFZpZXcgOlxuICAgICAgICB2aWV3O1xuICAgIG1hcmtQYXJlbnRWaWV3c0ZvckNoZWNrKHN0YXJ0Vmlldyk7XG4gICAgcmV0dXJuIFNlcnZpY2VzLmhhbmRsZUV2ZW50KHZpZXcsIG5vZGVJbmRleCwgZXZlbnROYW1lLCBldmVudCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBBdHRlbnRpb246IERvbid0IHJldGhyb3csIGFzIGl0IHdvdWxkIGNhbmNlbCBPYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnMhXG4gICAgdmlldy5yb290LmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZWRWaWV3Q29udGFpbmVyKHZpZXc6IFZpZXdEYXRhKTogRWxlbWVudERhdGF8bnVsbCB7XG4gIGlmICh2aWV3LnBhcmVudCkge1xuICAgIGNvbnN0IHBhcmVudFZpZXcgPSB2aWV3LnBhcmVudDtcbiAgICByZXR1cm4gYXNFbGVtZW50RGF0YShwYXJlbnRWaWV3LCB2aWV3LnBhcmVudE5vZGVEZWYhLm5vZGVJbmRleCk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogZm9yIGNvbXBvbmVudCB2aWV3cywgdGhpcyBpcyB0aGUgaG9zdCBlbGVtZW50LlxuICogZm9yIGVtYmVkZGVkIHZpZXdzLCB0aGlzIGlzIHRoZSBpbmRleCBvZiB0aGUgcGFyZW50IG5vZGVcbiAqIHRoYXQgY29udGFpbnMgdGhlIHZpZXcgY29udGFpbmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlld1BhcmVudEVsKHZpZXc6IFZpZXdEYXRhKTogTm9kZURlZnxudWxsIHtcbiAgY29uc3QgcGFyZW50VmlldyA9IHZpZXcucGFyZW50O1xuICBpZiAocGFyZW50Vmlldykge1xuICAgIHJldHVybiB2aWV3LnBhcmVudE5vZGVEZWYhLnBhcmVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTm9kZSh2aWV3OiBWaWV3RGF0YSwgZGVmOiBOb2RlRGVmKTogYW55IHtcbiAgc3dpdGNoIChkZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZXMpIHtcbiAgICBjYXNlIE5vZGVGbGFncy5UeXBlRWxlbWVudDpcbiAgICAgIHJldHVybiBhc0VsZW1lbnREYXRhKHZpZXcsIGRlZi5ub2RlSW5kZXgpLnJlbmRlckVsZW1lbnQ7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVRleHQ6XG4gICAgICByZXR1cm4gYXNUZXh0RGF0YSh2aWV3LCBkZWYubm9kZUluZGV4KS5yZW5kZXJUZXh0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RXZlbnRGdWxsTmFtZSh0YXJnZXQ6IHN0cmluZ3xudWxsLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdGFyZ2V0ID8gYCR7dGFyZ2V0fToke25hbWV9YCA6IG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudFZpZXcodmlldzogVmlld0RhdGEpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhdmlldy5wYXJlbnQgJiYgISEodmlldy5wYXJlbnROb2RlRGVmIS5mbGFncyAmIE5vZGVGbGFncy5Db21wb25lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbWJlZGRlZFZpZXcodmlldzogVmlld0RhdGEpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhdmlldy5wYXJlbnQgJiYgISh2aWV3LnBhcmVudE5vZGVEZWYhLmZsYWdzICYgTm9kZUZsYWdzLkNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJRdWVyeUlkKHF1ZXJ5SWQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAxIDw8IChxdWVyeUlkICUgMzIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRNYXRjaGVkUXVlcmllc0RzbChtYXRjaGVkUXVlcmllc0RzbDogW3N0cmluZ3xudW1iZXIsIFF1ZXJ5VmFsdWVUeXBlXVtdfG51bGwpOiB7XG4gIG1hdGNoZWRRdWVyaWVzOiB7W3F1ZXJ5SWQ6IHN0cmluZ106IFF1ZXJ5VmFsdWVUeXBlfSxcbiAgcmVmZXJlbmNlczoge1tyZWZJZDogc3RyaW5nXTogUXVlcnlWYWx1ZVR5cGV9LFxuICBtYXRjaGVkUXVlcnlJZHM6IG51bWJlclxufSB7XG4gIGNvbnN0IG1hdGNoZWRRdWVyaWVzOiB7W3F1ZXJ5SWQ6IHN0cmluZ106IFF1ZXJ5VmFsdWVUeXBlfSA9IHt9O1xuICBsZXQgbWF0Y2hlZFF1ZXJ5SWRzID0gMDtcbiAgY29uc3QgcmVmZXJlbmNlczoge1tyZWZJZDogc3RyaW5nXTogUXVlcnlWYWx1ZVR5cGV9ID0ge307XG4gIGlmIChtYXRjaGVkUXVlcmllc0RzbCkge1xuICAgIG1hdGNoZWRRdWVyaWVzRHNsLmZvckVhY2goKFtxdWVyeUlkLCB2YWx1ZVR5cGVdKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHF1ZXJ5SWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIG1hdGNoZWRRdWVyaWVzW3F1ZXJ5SWRdID0gdmFsdWVUeXBlO1xuICAgICAgICBtYXRjaGVkUXVlcnlJZHMgfD0gZmlsdGVyUXVlcnlJZChxdWVyeUlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZmVyZW5jZXNbcXVlcnlJZF0gPSB2YWx1ZVR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHttYXRjaGVkUXVlcmllcywgcmVmZXJlbmNlcywgbWF0Y2hlZFF1ZXJ5SWRzfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0RGVwc0RzbChkZXBzOiAoW0RlcEZsYWdzLCBhbnldfGFueSlbXSwgc291cmNlTmFtZT86IHN0cmluZyk6IERlcERlZltdIHtcbiAgcmV0dXJuIGRlcHMubWFwKHZhbHVlID0+IHtcbiAgICBsZXQgdG9rZW46IGFueTtcbiAgICBsZXQgZmxhZ3M6IERlcEZsYWdzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgW2ZsYWdzLCB0b2tlbl0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmxhZ3MgPSBEZXBGbGFncy5Ob25lO1xuICAgICAgdG9rZW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHRva2VuICYmICh0eXBlb2YgdG9rZW4gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHRva2VuID09PSAnb2JqZWN0JykgJiYgc291cmNlTmFtZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRva2VuLCBTT1VSQ0UsIHt2YWx1ZTogc291cmNlTmFtZSwgY29uZmlndXJhYmxlOiB0cnVlfSk7XG4gICAgfVxuICAgIHJldHVybiB7ZmxhZ3MsIHRva2VuLCB0b2tlbktleTogdG9rZW5LZXkodG9rZW4pfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRSZW5kZXJFbGVtZW50KHZpZXc6IFZpZXdEYXRhLCByZW5kZXJIb3N0OiBhbnksIGRlZjogTm9kZURlZik6IGFueSB7XG4gIGxldCByZW5kZXJQYXJlbnQgPSBkZWYucmVuZGVyUGFyZW50O1xuICBpZiAocmVuZGVyUGFyZW50KSB7XG4gICAgaWYgKChyZW5kZXJQYXJlbnQuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZUVsZW1lbnQpID09PSAwIHx8XG4gICAgICAgIChyZW5kZXJQYXJlbnQuZmxhZ3MgJiBOb2RlRmxhZ3MuQ29tcG9uZW50VmlldykgPT09IDAgfHxcbiAgICAgICAgKHJlbmRlclBhcmVudC5lbGVtZW50IS5jb21wb25lbnRSZW5kZXJlclR5cGUgJiZcbiAgICAgICAgIHJlbmRlclBhcmVudC5lbGVtZW50IS5jb21wb25lbnRSZW5kZXJlclR5cGUhLmVuY2Fwc3VsYXRpb24gPT09IFZpZXdFbmNhcHN1bGF0aW9uLk5hdGl2ZSkpIHtcbiAgICAgIC8vIG9ubHkgY2hpbGRyZW4gb2Ygbm9uIGNvbXBvbmVudHMsIG9yIGNoaWxkcmVuIG9mIGNvbXBvbmVudHMgd2l0aCBuYXRpdmUgZW5jYXBzdWxhdGlvbiBzaG91bGRcbiAgICAgIC8vIGJlIGF0dGFjaGVkLlxuICAgICAgcmV0dXJuIGFzRWxlbWVudERhdGEodmlldywgZGVmLnJlbmRlclBhcmVudCEubm9kZUluZGV4KS5yZW5kZXJFbGVtZW50O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVuZGVySG9zdDtcbiAgfVxufVxuXG5jb25zdCBERUZJTklUSU9OX0NBQ0hFID0gbmV3IFdlYWtNYXA8YW55LCBEZWZpbml0aW9uPGFueT4+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlRGVmaW5pdGlvbjxEIGV4dGVuZHMgRGVmaW5pdGlvbjxhbnk+PihmYWN0b3J5OiBEZWZpbml0aW9uRmFjdG9yeTxEPik6IEQge1xuICBsZXQgdmFsdWUgPSBERUZJTklUSU9OX0NBQ0hFLmdldChmYWN0b3J5KSEgYXMgRDtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHZhbHVlID0gZmFjdG9yeSgoKSA9PiBOT09QKTtcbiAgICB2YWx1ZS5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICBERUZJTklUSU9OX0NBQ0hFLnNldChmYWN0b3J5LCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm9vdFJlbmRlck5vZGVzKHZpZXc6IFZpZXdEYXRhKTogYW55W10ge1xuICBjb25zdCByZW5kZXJOb2RlczogYW55W10gPSBbXTtcbiAgdmlzaXRSb290UmVuZGVyTm9kZXModmlldywgUmVuZGVyTm9kZUFjdGlvbi5Db2xsZWN0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcmVuZGVyTm9kZXMpO1xuICByZXR1cm4gcmVuZGVyTm9kZXM7XG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIFJlbmRlck5vZGVBY3Rpb24ge1xuICBDb2xsZWN0LFxuICBBcHBlbmRDaGlsZCxcbiAgSW5zZXJ0QmVmb3JlLFxuICBSZW1vdmVDaGlsZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRSb290UmVuZGVyTm9kZXMoXG4gICAgdmlldzogVmlld0RhdGEsIGFjdGlvbjogUmVuZGVyTm9kZUFjdGlvbiwgcGFyZW50Tm9kZTogYW55LCBuZXh0U2libGluZzogYW55LCB0YXJnZXQ/OiBhbnlbXSkge1xuICAvLyBXZSBuZWVkIHRvIHJlLWNvbXB1dGUgdGhlIHBhcmVudCBub2RlIGluIGNhc2UgdGhlIG5vZGVzIGhhdmUgYmVlbiBtb3ZlZCBhcm91bmQgbWFudWFsbHlcbiAgaWYgKGFjdGlvbiA9PT0gUmVuZGVyTm9kZUFjdGlvbi5SZW1vdmVDaGlsZCkge1xuICAgIHBhcmVudE5vZGUgPSB2aWV3LnJlbmRlcmVyLnBhcmVudE5vZGUocmVuZGVyTm9kZSh2aWV3LCB2aWV3LmRlZi5sYXN0UmVuZGVyUm9vdE5vZGUhKSk7XG4gIH1cbiAgdmlzaXRTaWJsaW5nUmVuZGVyTm9kZXMoXG4gICAgICB2aWV3LCBhY3Rpb24sIDAsIHZpZXcuZGVmLm5vZGVzLmxlbmd0aCAtIDEsIHBhcmVudE5vZGUsIG5leHRTaWJsaW5nLCB0YXJnZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRTaWJsaW5nUmVuZGVyTm9kZXMoXG4gICAgdmlldzogVmlld0RhdGEsIGFjdGlvbjogUmVuZGVyTm9kZUFjdGlvbiwgc3RhcnRJbmRleDogbnVtYmVyLCBlbmRJbmRleDogbnVtYmVyLCBwYXJlbnROb2RlOiBhbnksXG4gICAgbmV4dFNpYmxpbmc6IGFueSwgdGFyZ2V0PzogYW55W10pIHtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgIGNvbnN0IG5vZGVEZWYgPSB2aWV3LmRlZi5ub2Rlc1tpXTtcbiAgICBpZiAobm9kZURlZi5mbGFncyAmIChOb2RlRmxhZ3MuVHlwZUVsZW1lbnQgfCBOb2RlRmxhZ3MuVHlwZVRleHQgfCBOb2RlRmxhZ3MuVHlwZU5nQ29udGVudCkpIHtcbiAgICAgIHZpc2l0UmVuZGVyTm9kZSh2aWV3LCBub2RlRGVmLCBhY3Rpb24sIHBhcmVudE5vZGUsIG5leHRTaWJsaW5nLCB0YXJnZXQpO1xuICAgIH1cbiAgICAvLyBqdW1wIHRvIG5leHQgc2libGluZ1xuICAgIGkgKz0gbm9kZURlZi5jaGlsZENvdW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdFByb2plY3RlZFJlbmRlck5vZGVzKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBuZ0NvbnRlbnRJbmRleDogbnVtYmVyLCBhY3Rpb246IFJlbmRlck5vZGVBY3Rpb24sIHBhcmVudE5vZGU6IGFueSxcbiAgICBuZXh0U2libGluZzogYW55LCB0YXJnZXQ/OiBhbnlbXSkge1xuICBsZXQgY29tcFZpZXc6IFZpZXdEYXRhfG51bGwgPSB2aWV3O1xuICB3aGlsZSAoY29tcFZpZXcgJiYgIWlzQ29tcG9uZW50Vmlldyhjb21wVmlldykpIHtcbiAgICBjb21wVmlldyA9IGNvbXBWaWV3LnBhcmVudDtcbiAgfVxuICBjb25zdCBob3N0VmlldyA9IGNvbXBWaWV3IS5wYXJlbnQ7XG4gIGNvbnN0IGhvc3RFbERlZiA9IHZpZXdQYXJlbnRFbChjb21wVmlldyEpO1xuICBjb25zdCBzdGFydEluZGV4ID0gaG9zdEVsRGVmIS5ub2RlSW5kZXggKyAxO1xuICBjb25zdCBlbmRJbmRleCA9IGhvc3RFbERlZiEubm9kZUluZGV4ICsgaG9zdEVsRGVmIS5jaGlsZENvdW50O1xuICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8PSBlbmRJbmRleDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZURlZiA9IGhvc3RWaWV3IS5kZWYubm9kZXNbaV07XG4gICAgaWYgKG5vZGVEZWYubmdDb250ZW50SW5kZXggPT09IG5nQ29udGVudEluZGV4KSB7XG4gICAgICB2aXNpdFJlbmRlck5vZGUoaG9zdFZpZXchLCBub2RlRGVmLCBhY3Rpb24sIHBhcmVudE5vZGUsIG5leHRTaWJsaW5nLCB0YXJnZXQpO1xuICAgIH1cbiAgICAvLyBqdW1wIHRvIG5leHQgc2libGluZ1xuICAgIGkgKz0gbm9kZURlZi5jaGlsZENvdW50O1xuICB9XG4gIGlmICghaG9zdFZpZXchLnBhcmVudCkge1xuICAgIC8vIGEgcm9vdCB2aWV3XG4gICAgY29uc3QgcHJvamVjdGVkTm9kZXMgPSB2aWV3LnJvb3QucHJvamVjdGFibGVOb2Rlc1tuZ0NvbnRlbnRJbmRleF07XG4gICAgaWYgKHByb2plY3RlZE5vZGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGV4ZWNSZW5kZXJOb2RlQWN0aW9uKHZpZXcsIHByb2plY3RlZE5vZGVzW2ldLCBhY3Rpb24sIHBhcmVudE5vZGUsIG5leHRTaWJsaW5nLCB0YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB2aXNpdFJlbmRlck5vZGUoXG4gICAgdmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYsIGFjdGlvbjogUmVuZGVyTm9kZUFjdGlvbiwgcGFyZW50Tm9kZTogYW55LCBuZXh0U2libGluZzogYW55LFxuICAgIHRhcmdldD86IGFueVtdKSB7XG4gIGlmIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVOZ0NvbnRlbnQpIHtcbiAgICB2aXNpdFByb2plY3RlZFJlbmRlck5vZGVzKFxuICAgICAgICB2aWV3LCBub2RlRGVmLm5nQ29udGVudCEuaW5kZXgsIGFjdGlvbiwgcGFyZW50Tm9kZSwgbmV4dFNpYmxpbmcsIHRhcmdldCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgcm4gPSByZW5kZXJOb2RlKHZpZXcsIG5vZGVEZWYpO1xuICAgIGlmIChhY3Rpb24gPT09IFJlbmRlck5vZGVBY3Rpb24uUmVtb3ZlQ2hpbGQgJiYgKG5vZGVEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuQ29tcG9uZW50VmlldykgJiZcbiAgICAgICAgKG5vZGVEZWYuYmluZGluZ0ZsYWdzICYgQmluZGluZ0ZsYWdzLkNhdFN5bnRoZXRpY1Byb3BlcnR5KSkge1xuICAgICAgLy8gTm90ZTogd2UgbWlnaHQgbmVlZCB0byBkbyBib3RoIGFjdGlvbnMuXG4gICAgICBpZiAobm9kZURlZi5iaW5kaW5nRmxhZ3MgJiAoQmluZGluZ0ZsYWdzLlN5bnRoZXRpY1Byb3BlcnR5KSkge1xuICAgICAgICBleGVjUmVuZGVyTm9kZUFjdGlvbih2aWV3LCBybiwgYWN0aW9uLCBwYXJlbnROb2RlLCBuZXh0U2libGluZywgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlRGVmLmJpbmRpbmdGbGFncyAmIChCaW5kaW5nRmxhZ3MuU3ludGhldGljSG9zdFByb3BlcnR5KSkge1xuICAgICAgICBjb25zdCBjb21wVmlldyA9IGFzRWxlbWVudERhdGEodmlldywgbm9kZURlZi5ub2RlSW5kZXgpLmNvbXBvbmVudFZpZXc7XG4gICAgICAgIGV4ZWNSZW5kZXJOb2RlQWN0aW9uKGNvbXBWaWV3LCBybiwgYWN0aW9uLCBwYXJlbnROb2RlLCBuZXh0U2libGluZywgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXhlY1JlbmRlck5vZGVBY3Rpb24odmlldywgcm4sIGFjdGlvbiwgcGFyZW50Tm9kZSwgbmV4dFNpYmxpbmcsIHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLkVtYmVkZGVkVmlld3MpIHtcbiAgICAgIGNvbnN0IGVtYmVkZGVkVmlld3MgPSBhc0VsZW1lbnREYXRhKHZpZXcsIG5vZGVEZWYubm9kZUluZGV4KS52aWV3Q29udGFpbmVyIS5fZW1iZWRkZWRWaWV3cztcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZW1iZWRkZWRWaWV3cy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2aXNpdFJvb3RSZW5kZXJOb2RlcyhlbWJlZGRlZFZpZXdzW2tdLCBhY3Rpb24sIHBhcmVudE5vZGUsIG5leHRTaWJsaW5nLCB0YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlRWxlbWVudCAmJiAhbm9kZURlZi5lbGVtZW50IS5uYW1lKSB7XG4gICAgICB2aXNpdFNpYmxpbmdSZW5kZXJOb2RlcyhcbiAgICAgICAgICB2aWV3LCBhY3Rpb24sIG5vZGVEZWYubm9kZUluZGV4ICsgMSwgbm9kZURlZi5ub2RlSW5kZXggKyBub2RlRGVmLmNoaWxkQ291bnQsIHBhcmVudE5vZGUsXG4gICAgICAgICAgbmV4dFNpYmxpbmcsIHRhcmdldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4ZWNSZW5kZXJOb2RlQWN0aW9uKFxuICAgIHZpZXc6IFZpZXdEYXRhLCByZW5kZXJOb2RlOiBhbnksIGFjdGlvbjogUmVuZGVyTm9kZUFjdGlvbiwgcGFyZW50Tm9kZTogYW55LCBuZXh0U2libGluZzogYW55LFxuICAgIHRhcmdldD86IGFueVtdKSB7XG4gIGNvbnN0IHJlbmRlcmVyID0gdmlldy5yZW5kZXJlcjtcbiAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICBjYXNlIFJlbmRlck5vZGVBY3Rpb24uQXBwZW5kQ2hpbGQ6XG4gICAgICByZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnROb2RlLCByZW5kZXJOb2RlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUmVuZGVyTm9kZUFjdGlvbi5JbnNlcnRCZWZvcmU6XG4gICAgICByZW5kZXJlci5pbnNlcnRCZWZvcmUocGFyZW50Tm9kZSwgcmVuZGVyTm9kZSwgbmV4dFNpYmxpbmcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSZW5kZXJOb2RlQWN0aW9uLlJlbW92ZUNoaWxkOlxuICAgICAgcmVuZGVyZXIucmVtb3ZlQ2hpbGQocGFyZW50Tm9kZSwgcmVuZGVyTm9kZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFJlbmRlck5vZGVBY3Rpb24uQ29sbGVjdDpcbiAgICAgIHRhcmdldCEucHVzaChyZW5kZXJOb2RlKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmNvbnN0IE5TX1BSRUZJWF9SRSA9IC9eOihbXjpdKyk6KC4rKSQvO1xuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXROYW1lc3BhY2UobmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICBpZiAobmFtZVswXSA9PT0gJzonKSB7XG4gICAgY29uc3QgbWF0Y2ggPSBuYW1lLm1hdGNoKE5TX1BSRUZJWF9SRSkhO1xuICAgIHJldHVybiBbbWF0Y2hbMV0sIG1hdGNoWzJdXTtcbiAgfVxuICByZXR1cm4gWycnLCBuYW1lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNCaW5kaW5nRmxhZ3MoYmluZGluZ3M6IEJpbmRpbmdEZWZbXSk6IEJpbmRpbmdGbGFncyB7XG4gIGxldCBmbGFncyA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmluZGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBmbGFncyB8PSBiaW5kaW5nc1tpXS5mbGFncztcbiAgfVxuICByZXR1cm4gZmxhZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZSh2YWx1ZUNvdW50OiBudW1iZXIsIGNvbnN0QW5kSW50ZXJwOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gIGxldCByZXN1bHQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUNvdW50ICogMjsgaSA9IGkgKyAyKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0ICsgY29uc3RBbmRJbnRlcnBbaV0gKyBfdG9TdHJpbmdXaXRoTnVsbChjb25zdEFuZEludGVycFtpICsgMV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQgKyBjb25zdEFuZEludGVycFt2YWx1ZUNvdW50ICogMl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmxpbmVJbnRlcnBvbGF0ZShcbiAgICB2YWx1ZUNvdW50OiBudW1iZXIsIGMwOiBzdHJpbmcsIGExOiBhbnksIGMxOiBzdHJpbmcsIGEyPzogYW55LCBjMj86IHN0cmluZywgYTM/OiBhbnksXG4gICAgYzM/OiBzdHJpbmcsIGE0PzogYW55LCBjND86IHN0cmluZywgYTU/OiBhbnksIGM1Pzogc3RyaW5nLCBhNj86IGFueSwgYzY/OiBzdHJpbmcsIGE3PzogYW55LFxuICAgIGM3Pzogc3RyaW5nLCBhOD86IGFueSwgYzg/OiBzdHJpbmcsIGE5PzogYW55LCBjOT86IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAodmFsdWVDb3VudCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBjMCArIF90b1N0cmluZ1dpdGhOdWxsKGExKSArIGMxO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBjMCArIF90b1N0cmluZ1dpdGhOdWxsKGExKSArIGMxICsgX3RvU3RyaW5nV2l0aE51bGwoYTIpICsgYzI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGMwICsgX3RvU3RyaW5nV2l0aE51bGwoYTEpICsgYzEgKyBfdG9TdHJpbmdXaXRoTnVsbChhMikgKyBjMiArIF90b1N0cmluZ1dpdGhOdWxsKGEzKSArXG4gICAgICAgICAgYzM7XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIGMwICsgX3RvU3RyaW5nV2l0aE51bGwoYTEpICsgYzEgKyBfdG9TdHJpbmdXaXRoTnVsbChhMikgKyBjMiArIF90b1N0cmluZ1dpdGhOdWxsKGEzKSArXG4gICAgICAgICAgYzMgKyBfdG9TdHJpbmdXaXRoTnVsbChhNCkgKyBjNDtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gYzAgKyBfdG9TdHJpbmdXaXRoTnVsbChhMSkgKyBjMSArIF90b1N0cmluZ1dpdGhOdWxsKGEyKSArIGMyICsgX3RvU3RyaW5nV2l0aE51bGwoYTMpICtcbiAgICAgICAgICBjMyArIF90b1N0cmluZ1dpdGhOdWxsKGE0KSArIGM0ICsgX3RvU3RyaW5nV2l0aE51bGwoYTUpICsgYzU7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGMwICsgX3RvU3RyaW5nV2l0aE51bGwoYTEpICsgYzEgKyBfdG9TdHJpbmdXaXRoTnVsbChhMikgKyBjMiArIF90b1N0cmluZ1dpdGhOdWxsKGEzKSArXG4gICAgICAgICAgYzMgKyBfdG9TdHJpbmdXaXRoTnVsbChhNCkgKyBjNCArIF90b1N0cmluZ1dpdGhOdWxsKGE1KSArIGM1ICsgX3RvU3RyaW5nV2l0aE51bGwoYTYpICsgYzY7XG4gICAgY2FzZSA3OlxuICAgICAgcmV0dXJuIGMwICsgX3RvU3RyaW5nV2l0aE51bGwoYTEpICsgYzEgKyBfdG9TdHJpbmdXaXRoTnVsbChhMikgKyBjMiArIF90b1N0cmluZ1dpdGhOdWxsKGEzKSArXG4gICAgICAgICAgYzMgKyBfdG9TdHJpbmdXaXRoTnVsbChhNCkgKyBjNCArIF90b1N0cmluZ1dpdGhOdWxsKGE1KSArIGM1ICsgX3RvU3RyaW5nV2l0aE51bGwoYTYpICtcbiAgICAgICAgICBjNiArIF90b1N0cmluZ1dpdGhOdWxsKGE3KSArIGM3O1xuICAgIGNhc2UgODpcbiAgICAgIHJldHVybiBjMCArIF90b1N0cmluZ1dpdGhOdWxsKGExKSArIGMxICsgX3RvU3RyaW5nV2l0aE51bGwoYTIpICsgYzIgKyBfdG9TdHJpbmdXaXRoTnVsbChhMykgK1xuICAgICAgICAgIGMzICsgX3RvU3RyaW5nV2l0aE51bGwoYTQpICsgYzQgKyBfdG9TdHJpbmdXaXRoTnVsbChhNSkgKyBjNSArIF90b1N0cmluZ1dpdGhOdWxsKGE2KSArXG4gICAgICAgICAgYzYgKyBfdG9TdHJpbmdXaXRoTnVsbChhNykgKyBjNyArIF90b1N0cmluZ1dpdGhOdWxsKGE4KSArIGM4O1xuICAgIGNhc2UgOTpcbiAgICAgIHJldHVybiBjMCArIF90b1N0cmluZ1dpdGhOdWxsKGExKSArIGMxICsgX3RvU3RyaW5nV2l0aE51bGwoYTIpICsgYzIgKyBfdG9TdHJpbmdXaXRoTnVsbChhMykgK1xuICAgICAgICAgIGMzICsgX3RvU3RyaW5nV2l0aE51bGwoYTQpICsgYzQgKyBfdG9TdHJpbmdXaXRoTnVsbChhNSkgKyBjNSArIF90b1N0cmluZ1dpdGhOdWxsKGE2KSArXG4gICAgICAgICAgYzYgKyBfdG9TdHJpbmdXaXRoTnVsbChhNykgKyBjNyArIF90b1N0cmluZ1dpdGhOdWxsKGE4KSArIGM4ICsgX3RvU3RyaW5nV2l0aE51bGwoYTkpICsgYzk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRG9lcyBub3Qgc3VwcG9ydCBtb3JlIHRoYW4gOSBleHByZXNzaW9uc2ApO1xuICB9XG59XG5cbmZ1bmN0aW9uIF90b1N0cmluZ1dpdGhOdWxsKHY6IGFueSk6IHN0cmluZyB7XG4gIHJldHVybiB2ICE9IG51bGwgPyB2LnRvU3RyaW5nKCkgOiAnJztcbn1cblxuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUkFZOiBhbnlbXSA9IFtdO1xuZXhwb3J0IGNvbnN0IEVNUFRZX01BUDoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcbiJdfQ==