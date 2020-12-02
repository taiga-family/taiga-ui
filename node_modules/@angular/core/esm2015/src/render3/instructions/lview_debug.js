/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/instructions/lview_debug.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertDefined } from '../../util/assert';
import { createNamedArrayType } from '../../util/named_array_type';
import { initNgDevMode } from '../../util/ng_dev_mode';
import { CONTAINER_HEADER_OFFSET, HAS_TRANSPLANTED_VIEWS, MOVED_VIEWS, NATIVE } from '../interfaces/container';
import { COMMENT_MARKER, ELEMENT_MARKER } from '../interfaces/i18n';
import { getTStylingRangeNext, getTStylingRangeNextDuplicate, getTStylingRangePrev, getTStylingRangePrevDuplicate } from '../interfaces/styling';
import { CHILD_HEAD, CHILD_TAIL, CLEANUP, CONTEXT, DECLARATION_VIEW, FLAGS, HEADER_OFFSET, HOST, INJECTOR, NEXT, PARENT, QUERIES, RENDERER, RENDERER_FACTORY, SANITIZER, T_HOST, TVIEW } from '../interfaces/view';
import { attachDebugObject } from '../util/debug_utils';
import { getTNode, unwrapRNode } from '../util/view_utils';
/** @type {?} */
const NG_DEV_MODE = ((typeof ngDevMode === 'undefined' || !!ngDevMode) && initNgDevMode());
/*
 * This file contains conditionally attached classes which provide human readable (debug) level
 * information for `LView`, `LContainer` and other internal data structures. These data structures
 * are stored internally as array which makes it very difficult during debugging to reason about the
 * current state of the system.
 *
 * Patching the array with extra property does change the array's hidden class' but it does not
 * change the cost of access, therefore this patching should not have significant if any impact in
 * `ngDevMode` mode. (see: https://jsperf.com/array-vs-monkey-patch-array)
 *
 * So instead of seeing:
 * ```
 * Array(30) [Object, 659, null, …]
 * ```
 *
 * You get to see:
 * ```
 * LViewDebug {
 *   views: [...],
 *   flags: {attached: true, ...}
 *   nodes: [
 *     {html: '<div id="123">', ..., nodes: [
 *       {html: '<span>', ..., nodes: null}
 *     ]}
 *   ]
 * }
 * ```
 */
/** @type {?} */
let LVIEW_COMPONENT_CACHE;
/** @type {?} */
let LVIEW_EMBEDDED_CACHE;
/** @type {?} */
let LVIEW_ROOT;
/**
 * @record
 */
function TViewDebug() { }
if (false) {
    /** @type {?} */
    TViewDebug.prototype.type;
}
/**
 * This function clones a blueprint and creates LView.
 *
 * Simple slice will keep the same type, and we need it to be LView
 * @param {?} tView
 * @return {?}
 */
export function cloneToLViewFromTViewBlueprint(tView) {
    /** @type {?} */
    const debugTView = (/** @type {?} */ (tView));
    /** @type {?} */
    const lView = getLViewToClone(debugTView.type, tView.template && tView.template.name);
    return (/** @type {?} */ (lView.concat(tView.blueprint)));
}
/**
 * @param {?} type
 * @param {?} name
 * @return {?}
 */
function getLViewToClone(type, name) {
    switch (type) {
        case 0 /* Root */:
            if (LVIEW_ROOT === undefined)
                LVIEW_ROOT = new (createNamedArrayType('LRootView'))();
            return LVIEW_ROOT;
        case 1 /* Component */:
            if (LVIEW_COMPONENT_CACHE === undefined)
                LVIEW_COMPONENT_CACHE = new Map();
            /** @type {?} */
            let componentArray = LVIEW_COMPONENT_CACHE.get(name);
            if (componentArray === undefined) {
                componentArray = new (createNamedArrayType('LComponentView' + nameSuffix(name)))();
                LVIEW_COMPONENT_CACHE.set(name, componentArray);
            }
            return componentArray;
        case 2 /* Embedded */:
            if (LVIEW_EMBEDDED_CACHE === undefined)
                LVIEW_EMBEDDED_CACHE = new Map();
            /** @type {?} */
            let embeddedArray = LVIEW_EMBEDDED_CACHE.get(name);
            if (embeddedArray === undefined) {
                embeddedArray = new (createNamedArrayType('LEmbeddedView' + nameSuffix(name)))();
                LVIEW_EMBEDDED_CACHE.set(name, embeddedArray);
            }
            return embeddedArray;
    }
    throw new Error('unreachable code');
}
/**
 * @param {?} text
 * @return {?}
 */
function nameSuffix(text) {
    if (text == null)
        return '';
    /** @type {?} */
    const index = text.lastIndexOf('_Template');
    return '_' + (index === -1 ? text : text.substr(0, index));
}
/**
 * This class is a debug version of Object literal so that we can have constructor name show up
 * in
 * debug tools in ngDevMode.
 * @type {?}
 */
export const TViewConstructor = class TView {
    /**
     * @param {?} type
     * @param {?} id
     * @param {?} blueprint
     * @param {?} template
     * @param {?} queries
     * @param {?} viewQuery
     * @param {?} node
     * @param {?} data
     * @param {?} bindingStartIndex
     * @param {?} expandoStartIndex
     * @param {?} expandoInstructions
     * @param {?} firstCreatePass
     * @param {?} firstUpdatePass
     * @param {?} staticViewQueries
     * @param {?} staticContentQueries
     * @param {?} preOrderHooks
     * @param {?} preOrderCheckHooks
     * @param {?} contentHooks
     * @param {?} contentCheckHooks
     * @param {?} viewHooks
     * @param {?} viewCheckHooks
     * @param {?} destroyHooks
     * @param {?} cleanup
     * @param {?} contentQueries
     * @param {?} components
     * @param {?} directiveRegistry
     * @param {?} pipeRegistry
     * @param {?} firstChild
     * @param {?} schemas
     * @param {?} consts
     * @param {?} incompleteFirstPass
     */
    constructor(type, //
    id, //
    blueprint, //
    template, //
    queries, //
    viewQuery, //
    node, //
    data, //
    bindingStartIndex, //
    expandoStartIndex, //
    expandoInstructions, //
    firstCreatePass, //
    firstUpdatePass, //
    staticViewQueries, //
    staticContentQueries, //
    preOrderHooks, //
    preOrderCheckHooks, //
    contentHooks, //
    contentCheckHooks, //
    viewHooks, //
    viewCheckHooks, //
    destroyHooks, //
    cleanup, //
    contentQueries, //
    components, //
    directiveRegistry, //
    pipeRegistry, //
    firstChild, //
    schemas, //
    consts, //
    incompleteFirstPass //
    ) {
        this.type = type;
        this.id = id;
        this.blueprint = blueprint;
        this.template = template;
        this.queries = queries;
        this.viewQuery = viewQuery;
        this.node = node;
        this.data = data;
        this.bindingStartIndex = bindingStartIndex;
        this.expandoStartIndex = expandoStartIndex;
        this.expandoInstructions = expandoInstructions;
        this.firstCreatePass = firstCreatePass;
        this.firstUpdatePass = firstUpdatePass;
        this.staticViewQueries = staticViewQueries;
        this.staticContentQueries = staticContentQueries;
        this.preOrderHooks = preOrderHooks;
        this.preOrderCheckHooks = preOrderCheckHooks;
        this.contentHooks = contentHooks;
        this.contentCheckHooks = contentCheckHooks;
        this.viewHooks = viewHooks;
        this.viewCheckHooks = viewCheckHooks;
        this.destroyHooks = destroyHooks;
        this.cleanup = cleanup;
        this.contentQueries = contentQueries;
        this.components = components;
        this.directiveRegistry = directiveRegistry;
        this.pipeRegistry = pipeRegistry;
        this.firstChild = firstChild;
        this.schemas = schemas;
        this.consts = consts;
        this.incompleteFirstPass = incompleteFirstPass;
    }
    /**
     * @return {?}
     */
    get template_() {
        /** @type {?} */
        const buf = [];
        processTNodeChildren(this.firstChild, buf);
        return buf.join('');
    }
};
class TNode {
    /**
     * @param {?} tView_
     * @param {?} type
     * @param {?} index
     * @param {?} injectorIndex
     * @param {?} directiveStart
     * @param {?} directiveEnd
     * @param {?} directiveStylingLast
     * @param {?} propertyBindings
     * @param {?} flags
     * @param {?} providerIndexes
     * @param {?} tagName
     * @param {?} attrs
     * @param {?} mergedAttrs
     * @param {?} localNames
     * @param {?} initialInputs
     * @param {?} inputs
     * @param {?} outputs
     * @param {?} tViews
     * @param {?} next
     * @param {?} projectionNext
     * @param {?} child
     * @param {?} parent
     * @param {?} projection
     * @param {?} styles
     * @param {?} stylesWithoutHost
     * @param {?} residualStyles
     * @param {?} classes
     * @param {?} classesWithoutHost
     * @param {?} residualClasses
     * @param {?} classBindings
     * @param {?} styleBindings
     */
    constructor(tView_, //
    type, //
    index, //
    injectorIndex, //
    directiveStart, //
    directiveEnd, //
    directiveStylingLast, //
    propertyBindings, //
    flags, //
    providerIndexes, //
    tagName, //
    attrs, //
    mergedAttrs, //
    localNames, //
    initialInputs, //
    inputs, //
    outputs, //
    tViews, //
    next, //
    projectionNext, //
    child, //
    parent, //
    projection, //
    styles, //
    stylesWithoutHost, //
    residualStyles, //
    classes, //
    classesWithoutHost, //
    residualClasses, //
    classBindings, //
    styleBindings) {
        this.tView_ = tView_;
        this.type = type;
        this.index = index;
        this.injectorIndex = injectorIndex;
        this.directiveStart = directiveStart;
        this.directiveEnd = directiveEnd;
        this.directiveStylingLast = directiveStylingLast;
        this.propertyBindings = propertyBindings;
        this.flags = flags;
        this.providerIndexes = providerIndexes;
        this.tagName = tagName;
        this.attrs = attrs;
        this.mergedAttrs = mergedAttrs;
        this.localNames = localNames;
        this.initialInputs = initialInputs;
        this.inputs = inputs;
        this.outputs = outputs;
        this.tViews = tViews;
        this.next = next;
        this.projectionNext = projectionNext;
        this.child = child;
        this.parent = parent;
        this.projection = projection;
        this.styles = styles;
        this.stylesWithoutHost = stylesWithoutHost;
        this.residualStyles = residualStyles;
        this.classes = classes;
        this.classesWithoutHost = classesWithoutHost;
        this.residualClasses = residualClasses;
        this.classBindings = classBindings;
        this.styleBindings = styleBindings;
    }
    /**
     * @return {?}
     */
    get type_() {
        switch (this.type) {
            case 0 /* Container */:
                return 'TNodeType.Container';
            case 3 /* Element */:
                return 'TNodeType.Element';
            case 4 /* ElementContainer */:
                return 'TNodeType.ElementContainer';
            case 5 /* IcuContainer */:
                return 'TNodeType.IcuContainer';
            case 1 /* Projection */:
                return 'TNodeType.Projection';
            case 2 /* View */:
                return 'TNodeType.View';
            default:
                return 'TNodeType.???';
        }
    }
    /**
     * @return {?}
     */
    get flags_() {
        /** @type {?} */
        const flags = [];
        if (this.flags & 16 /* hasClassInput */)
            flags.push('TNodeFlags.hasClassInput');
        if (this.flags & 8 /* hasContentQuery */)
            flags.push('TNodeFlags.hasContentQuery');
        if (this.flags & 32 /* hasStyleInput */)
            flags.push('TNodeFlags.hasStyleInput');
        if (this.flags & 128 /* hasHostBindings */)
            flags.push('TNodeFlags.hasHostBindings');
        if (this.flags & 2 /* isComponentHost */)
            flags.push('TNodeFlags.isComponentHost');
        if (this.flags & 1 /* isDirectiveHost */)
            flags.push('TNodeFlags.isDirectiveHost');
        if (this.flags & 64 /* isDetached */)
            flags.push('TNodeFlags.isDetached');
        if (this.flags & 4 /* isProjected */)
            flags.push('TNodeFlags.isProjected');
        return flags.join('|');
    }
    /**
     * @return {?}
     */
    get template_() {
        /** @type {?} */
        const buf = [];
        buf.push('<', this.tagName || this.type_);
        if (this.attrs) {
            for (let i = 0; i < this.attrs.length;) {
                /** @type {?} */
                const attrName = this.attrs[i++];
                if (typeof attrName == 'number') {
                    break;
                }
                /** @type {?} */
                const attrValue = this.attrs[i++];
                buf.push(' ', (/** @type {?} */ (attrName)), '="', (/** @type {?} */ (attrValue)), '"');
            }
        }
        buf.push('>');
        processTNodeChildren(this.child, buf);
        buf.push('</', this.tagName || this.type_, '>');
        return buf.join('');
    }
    /**
     * @return {?}
     */
    get styleBindings_() {
        return toDebugStyleBinding(this, false);
    }
    /**
     * @return {?}
     */
    get classBindings_() {
        return toDebugStyleBinding(this, true);
    }
}
if (false) {
    /** @type {?} */
    TNode.prototype.tView_;
    /** @type {?} */
    TNode.prototype.type;
    /** @type {?} */
    TNode.prototype.index;
    /** @type {?} */
    TNode.prototype.injectorIndex;
    /** @type {?} */
    TNode.prototype.directiveStart;
    /** @type {?} */
    TNode.prototype.directiveEnd;
    /** @type {?} */
    TNode.prototype.directiveStylingLast;
    /** @type {?} */
    TNode.prototype.propertyBindings;
    /** @type {?} */
    TNode.prototype.flags;
    /** @type {?} */
    TNode.prototype.providerIndexes;
    /** @type {?} */
    TNode.prototype.tagName;
    /** @type {?} */
    TNode.prototype.attrs;
    /** @type {?} */
    TNode.prototype.mergedAttrs;
    /** @type {?} */
    TNode.prototype.localNames;
    /** @type {?} */
    TNode.prototype.initialInputs;
    /** @type {?} */
    TNode.prototype.inputs;
    /** @type {?} */
    TNode.prototype.outputs;
    /** @type {?} */
    TNode.prototype.tViews;
    /** @type {?} */
    TNode.prototype.next;
    /** @type {?} */
    TNode.prototype.projectionNext;
    /** @type {?} */
    TNode.prototype.child;
    /** @type {?} */
    TNode.prototype.parent;
    /** @type {?} */
    TNode.prototype.projection;
    /** @type {?} */
    TNode.prototype.styles;
    /** @type {?} */
    TNode.prototype.stylesWithoutHost;
    /** @type {?} */
    TNode.prototype.residualStyles;
    /** @type {?} */
    TNode.prototype.classes;
    /** @type {?} */
    TNode.prototype.classesWithoutHost;
    /** @type {?} */
    TNode.prototype.residualClasses;
    /** @type {?} */
    TNode.prototype.classBindings;
    /** @type {?} */
    TNode.prototype.styleBindings;
}
/** @type {?} */
export const TNodeDebug = TNode;
/**
 * @record
 */
export function DebugStyleBindings() { }
/**
 * @record
 */
export function DebugStyleBinding() { }
if (false) {
    /** @type {?} */
    DebugStyleBinding.prototype.key;
    /** @type {?} */
    DebugStyleBinding.prototype.index;
    /** @type {?} */
    DebugStyleBinding.prototype.isTemplate;
    /** @type {?} */
    DebugStyleBinding.prototype.prevDuplicate;
    /** @type {?} */
    DebugStyleBinding.prototype.nextDuplicate;
    /** @type {?} */
    DebugStyleBinding.prototype.prevIndex;
    /** @type {?} */
    DebugStyleBinding.prototype.nextIndex;
}
/**
 * @param {?} tNode
 * @param {?} isClassBased
 * @return {?}
 */
function toDebugStyleBinding(tNode, isClassBased) {
    /** @type {?} */
    const tData = tNode.tView_.data;
    /** @type {?} */
    const bindings = (/** @type {?} */ ([]));
    /** @type {?} */
    const range = isClassBased ? tNode.classBindings : tNode.styleBindings;
    /** @type {?} */
    const prev = getTStylingRangePrev(range);
    /** @type {?} */
    const next = getTStylingRangeNext(range);
    /** @type {?} */
    let isTemplate = next !== 0;
    /** @type {?} */
    let cursor = isTemplate ? next : prev;
    while (cursor !== 0) {
        /** @type {?} */
        const itemKey = (/** @type {?} */ (tData[cursor]));
        /** @type {?} */
        const itemRange = (/** @type {?} */ (tData[cursor + 1]));
        bindings.unshift({
            key: itemKey,
            index: cursor,
            isTemplate: isTemplate,
            prevDuplicate: getTStylingRangePrevDuplicate(itemRange),
            nextDuplicate: getTStylingRangeNextDuplicate(itemRange),
            nextIndex: getTStylingRangeNext(itemRange),
            prevIndex: getTStylingRangePrev(itemRange),
        });
        if (cursor === prev)
            isTemplate = false;
        cursor = getTStylingRangePrev(itemRange);
    }
    bindings.push((isClassBased ? tNode.residualClasses : tNode.residualStyles) || null);
    return bindings;
}
/**
 * @param {?} tNode
 * @param {?} buf
 * @return {?}
 */
function processTNodeChildren(tNode, buf) {
    while (tNode) {
        buf.push(((/** @type {?} */ ((/** @type {?} */ (tNode))))).template_);
        tNode = tNode.next;
    }
}
/** @type {?} */
const TViewData = NG_DEV_MODE && createNamedArrayType('TViewData') || (/** @type {?} */ ((/** @type {?} */ (null))));
/** @type {?} */
let TVIEWDATA_EMPTY;
// can't initialize here or it will not be tree shaken, because
// `LView` constructor could have side-effects.
/**
 * This function clones a blueprint and creates TData.
 *
 * Simple slice will keep the same type, and we need it to be TData
 * @param {?} list
 * @return {?}
 */
export function cloneToTViewData(list) {
    if (TVIEWDATA_EMPTY === undefined)
        TVIEWDATA_EMPTY = new TViewData();
    return (/** @type {?} */ (TVIEWDATA_EMPTY.concat(list)));
}
/** @type {?} */
export const LViewBlueprint = NG_DEV_MODE && createNamedArrayType('LViewBlueprint') || (/** @type {?} */ ((/** @type {?} */ (null))));
/** @type {?} */
export const MatchesArray = NG_DEV_MODE && createNamedArrayType('MatchesArray') || (/** @type {?} */ ((/** @type {?} */ (null))));
/** @type {?} */
export const TViewComponents = NG_DEV_MODE && createNamedArrayType('TViewComponents') || (/** @type {?} */ ((/** @type {?} */ (null))));
/** @type {?} */
export const TNodeLocalNames = NG_DEV_MODE && createNamedArrayType('TNodeLocalNames') || (/** @type {?} */ ((/** @type {?} */ (null))));
/** @type {?} */
export const TNodeInitialInputs = NG_DEV_MODE && createNamedArrayType('TNodeInitialInputs') || (/** @type {?} */ ((/** @type {?} */ (null))));
/** @type {?} */
export const TNodeInitialData = NG_DEV_MODE && createNamedArrayType('TNodeInitialData') || (/** @type {?} */ ((/** @type {?} */ (null))));
/** @type {?} */
export const LCleanup = NG_DEV_MODE && createNamedArrayType('LCleanup') || (/** @type {?} */ ((/** @type {?} */ (null))));
/** @type {?} */
export const TCleanup = NG_DEV_MODE && createNamedArrayType('TCleanup') || (/** @type {?} */ ((/** @type {?} */ (null))));
/**
 * @param {?} lView
 * @return {?}
 */
export function attachLViewDebug(lView) {
    attachDebugObject(lView, new LViewDebug(lView));
}
/**
 * @param {?} lContainer
 * @return {?}
 */
export function attachLContainerDebug(lContainer) {
    attachDebugObject(lContainer, new LContainerDebug(lContainer));
}
/**
 * @param {?} obj
 * @return {?}
 */
export function toDebug(obj) {
    if (obj) {
        /** @type {?} */
        const debug = ((/** @type {?} */ (obj))).debug;
        assertDefined(debug, 'Object does not have a debug representation.');
        return debug;
    }
    else {
        return obj;
    }
}
/**
 * Use this method to unwrap a native element in `LView` and convert it into HTML for easier
 * reading.
 *
 * @param {?} value possibly wrapped native DOM node.
 * @param {?=} includeChildren If `true` then the serialized HTML form will include child elements
 * (same
 * as `outerHTML`). If `false` then the serialized HTML form will only contain the element
 * itself
 * (will not serialize child elements).
 * @return {?}
 */
function toHtml(value, includeChildren = false) {
    /** @type {?} */
    const node = (/** @type {?} */ (unwrapRNode(value)));
    if (node) {
        /** @type {?} */
        const isTextNode = node.nodeType === Node.TEXT_NODE;
        /** @type {?} */
        const outerHTML = (isTextNode ? node.textContent : node.outerHTML) || '';
        if (includeChildren || isTextNode) {
            return outerHTML;
        }
        else {
            /** @type {?} */
            const innerHTML = '>' + node.innerHTML + '<';
            return (outerHTML.split(innerHTML)[0]) + '>';
        }
    }
    else {
        return null;
    }
}
export class LViewDebug {
    /**
     * @param {?} _raw_lView
     */
    constructor(_raw_lView) {
        this._raw_lView = _raw_lView;
    }
    /**
     * Flags associated with the `LView` unpacked into a more readable state.
     * @return {?}
     */
    get flags() {
        /** @type {?} */
        const flags = this._raw_lView[FLAGS];
        return {
            __raw__flags__: flags,
            initPhaseState: flags & 3 /* InitPhaseStateMask */,
            creationMode: !!(flags & 4 /* CreationMode */),
            firstViewPass: !!(flags & 8 /* FirstLViewPass */),
            checkAlways: !!(flags & 16 /* CheckAlways */),
            dirty: !!(flags & 64 /* Dirty */),
            attached: !!(flags & 128 /* Attached */),
            destroyed: !!(flags & 256 /* Destroyed */),
            isRoot: !!(flags & 512 /* IsRoot */),
            indexWithinInitPhase: flags >> 11 /* IndexWithinInitPhaseShift */,
        };
    }
    /**
     * @return {?}
     */
    get parent() {
        return toDebug(this._raw_lView[PARENT]);
    }
    /**
     * @return {?}
     */
    get host() {
        return toHtml(this._raw_lView[HOST], true);
    }
    /**
     * @return {?}
     */
    get html() {
        return (this.nodes || []).map((/**
         * @param {?} node
         * @return {?}
         */
        node => toHtml(node.native, true))).join('');
    }
    /**
     * @return {?}
     */
    get context() {
        return this._raw_lView[CONTEXT];
    }
    /**
     * The tree of nodes associated with the current `LView`. The nodes have been normalized into
     * a
     * tree structure with relevant details pulled out for readability.
     * @return {?}
     */
    get nodes() {
        /** @type {?} */
        const lView = this._raw_lView;
        /** @type {?} */
        const tNode = lView[TVIEW].firstChild;
        return toDebugNodes(tNode, lView);
    }
    /**
     * @return {?}
     */
    get tView() {
        return this._raw_lView[TVIEW];
    }
    /**
     * @return {?}
     */
    get cleanup() {
        return this._raw_lView[CLEANUP];
    }
    /**
     * @return {?}
     */
    get injector() {
        return this._raw_lView[INJECTOR];
    }
    /**
     * @return {?}
     */
    get rendererFactory() {
        return this._raw_lView[RENDERER_FACTORY];
    }
    /**
     * @return {?}
     */
    get renderer() {
        return this._raw_lView[RENDERER];
    }
    /**
     * @return {?}
     */
    get sanitizer() {
        return this._raw_lView[SANITIZER];
    }
    /**
     * @return {?}
     */
    get childHead() {
        return toDebug(this._raw_lView[CHILD_HEAD]);
    }
    /**
     * @return {?}
     */
    get next() {
        return toDebug(this._raw_lView[NEXT]);
    }
    /**
     * @return {?}
     */
    get childTail() {
        return toDebug(this._raw_lView[CHILD_TAIL]);
    }
    /**
     * @return {?}
     */
    get declarationView() {
        return toDebug(this._raw_lView[DECLARATION_VIEW]);
    }
    /**
     * @return {?}
     */
    get queries() {
        return this._raw_lView[QUERIES];
    }
    /**
     * @return {?}
     */
    get tHost() {
        return this._raw_lView[T_HOST];
    }
    /**
     * Normalized view of child views (and containers) attached at this location.
     * @return {?}
     */
    get childViews() {
        /** @type {?} */
        const childViews = [];
        /** @type {?} */
        let child = this.childHead;
        while (child) {
            childViews.push(child);
            child = child.next;
        }
        return childViews;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    LViewDebug.prototype._raw_lView;
}
/**
 * @record
 */
export function DebugNode() { }
if (false) {
    /** @type {?} */
    DebugNode.prototype.html;
    /** @type {?} */
    DebugNode.prototype.native;
    /** @type {?} */
    DebugNode.prototype.nodes;
    /** @type {?} */
    DebugNode.prototype.component;
}
/**
 * Turns a flat list of nodes into a tree by walking the associated `TNode` tree.
 *
 * @param {?} tNode
 * @param {?} lView
 * @return {?}
 */
export function toDebugNodes(tNode, lView) {
    if (tNode) {
        /** @type {?} */
        const debugNodes = [];
        /** @type {?} */
        let tNodeCursor = tNode;
        while (tNodeCursor) {
            debugNodes.push(buildDebugNode(tNodeCursor, lView, tNodeCursor.index));
            tNodeCursor = tNodeCursor.next;
        }
        return debugNodes;
    }
    else {
        return null;
    }
}
/**
 * @param {?} tNode
 * @param {?} lView
 * @param {?} nodeIndex
 * @return {?}
 */
export function buildDebugNode(tNode, lView, nodeIndex) {
    /** @type {?} */
    const rawValue = lView[nodeIndex];
    /** @type {?} */
    const native = unwrapRNode(rawValue);
    /** @type {?} */
    const componentLViewDebug = toDebug(readLViewValue(rawValue));
    return {
        html: toHtml(native),
        native: (/** @type {?} */ (native)),
        nodes: toDebugNodes(tNode.child, lView),
        component: componentLViewDebug,
    };
}
export class LContainerDebug {
    /**
     * @param {?} _raw_lContainer
     */
    constructor(_raw_lContainer) {
        this._raw_lContainer = _raw_lContainer;
    }
    /**
     * @return {?}
     */
    get hasTransplantedViews() {
        return this._raw_lContainer[HAS_TRANSPLANTED_VIEWS];
    }
    /**
     * @return {?}
     */
    get views() {
        return this._raw_lContainer.slice(CONTAINER_HEADER_OFFSET)
            .map((/** @type {?} */ (toDebug)));
    }
    /**
     * @return {?}
     */
    get parent() {
        return toDebug(this._raw_lContainer[PARENT]);
    }
    /**
     * @return {?}
     */
    get movedViews() {
        return this._raw_lContainer[MOVED_VIEWS];
    }
    /**
     * @return {?}
     */
    get host() {
        return this._raw_lContainer[HOST];
    }
    /**
     * @return {?}
     */
    get native() {
        return this._raw_lContainer[NATIVE];
    }
    /**
     * @return {?}
     */
    get next() {
        return toDebug(this._raw_lContainer[NEXT]);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    LContainerDebug.prototype._raw_lContainer;
}
/**
 * Return an `LView` value if found.
 *
 * @param {?} value `LView` if any
 * @return {?}
 */
export function readLViewValue(value) {
    while (Array.isArray(value)) {
        // This check is not quite right, as it does not take into account `StylingContext`
        // This is why it is in debug, not in util.ts
        if (value.length >= HEADER_OFFSET - 1)
            return (/** @type {?} */ (value));
        value = value[HOST];
    }
    return null;
}
export class I18NDebugItem {
    /**
     * @param {?} __raw_opCode
     * @param {?} _lView
     * @param {?} nodeIndex
     * @param {?} type
     */
    constructor(__raw_opCode, _lView, nodeIndex, type) {
        this.__raw_opCode = __raw_opCode;
        this._lView = _lView;
        this.nodeIndex = nodeIndex;
        this.type = type;
    }
    /**
     * @return {?}
     */
    get tNode() {
        return getTNode(this._lView[TVIEW], this.nodeIndex);
    }
}
if (false) {
    /** @type {?} */
    I18NDebugItem.prototype.__raw_opCode;
    /**
     * @type {?}
     * @private
     */
    I18NDebugItem.prototype._lView;
    /** @type {?} */
    I18NDebugItem.prototype.nodeIndex;
    /** @type {?} */
    I18NDebugItem.prototype.type;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * Turns a list of "Create" & "Update" OpCodes into a human-readable list of operations for
 * debugging purposes.
 * @param {?} mutateOpCodes mutation opCodes to read
 * @param {?} updateOpCodes update opCodes to read
 * @param {?} icus list of ICU expressions
 * @param {?} lView The view the opCodes are acting on
 * @return {?}
 */
export function attachI18nOpCodesDebug(mutateOpCodes, updateOpCodes, icus, lView) {
    attachDebugObject(mutateOpCodes, new I18nMutateOpCodesDebug(mutateOpCodes, lView));
    attachDebugObject(updateOpCodes, new I18nUpdateOpCodesDebug(updateOpCodes, icus, lView));
    if (icus) {
        icus.forEach((/**
         * @param {?} icu
         * @return {?}
         */
        icu => {
            icu.create.forEach((/**
             * @param {?} icuCase
             * @return {?}
             */
            icuCase => {
                attachDebugObject(icuCase, new I18nMutateOpCodesDebug(icuCase, lView));
            }));
            icu.update.forEach((/**
             * @param {?} icuCase
             * @return {?}
             */
            icuCase => {
                attachDebugObject(icuCase, new I18nUpdateOpCodesDebug(icuCase, icus, lView));
            }));
        }));
    }
}
export class I18nMutateOpCodesDebug {
    /**
     * @param {?} __raw_opCodes
     * @param {?} __lView
     */
    constructor(__raw_opCodes, __lView) {
        this.__raw_opCodes = __raw_opCodes;
        this.__lView = __lView;
    }
    /**
     * A list of operation information about how the OpCodes will act on the view.
     * @return {?}
     */
    get operations() {
        const { __lView, __raw_opCodes } = this;
        /** @type {?} */
        const results = [];
        for (let i = 0; i < __raw_opCodes.length; i++) {
            /** @type {?} */
            const opCode = __raw_opCodes[i];
            /** @type {?} */
            let result;
            if (typeof opCode === 'string') {
                result = {
                    __raw_opCode: opCode,
                    type: 'Create Text Node',
                    nodeIndex: __raw_opCodes[++i],
                    text: opCode,
                };
            }
            if (typeof opCode === 'number') {
                switch (opCode & 7 /* MASK_OPCODE */) {
                    case 1 /* AppendChild */:
                        /** @type {?} */
                        const destinationNodeIndex = opCode >>> 17 /* SHIFT_PARENT */;
                        result = new I18NDebugItem(opCode, __lView, destinationNodeIndex, 'AppendChild');
                        break;
                    case 0 /* Select */:
                        /** @type {?} */
                        const nodeIndex = opCode >>> 3 /* SHIFT_REF */;
                        result = new I18NDebugItem(opCode, __lView, nodeIndex, 'Select');
                        break;
                    case 5 /* ElementEnd */:
                        /** @type {?} */
                        let elementIndex = opCode >>> 3 /* SHIFT_REF */;
                        result = new I18NDebugItem(opCode, __lView, elementIndex, 'ElementEnd');
                        break;
                    case 4 /* Attr */:
                        elementIndex = opCode >>> 3 /* SHIFT_REF */;
                        result = new I18NDebugItem(opCode, __lView, elementIndex, 'Attr');
                        result['attrName'] = __raw_opCodes[++i];
                        result['attrValue'] = __raw_opCodes[++i];
                        break;
                }
            }
            if (!result) {
                switch (opCode) {
                    case COMMENT_MARKER:
                        result = {
                            __raw_opCode: opCode,
                            type: 'COMMENT_MARKER',
                            commentValue: __raw_opCodes[++i],
                            nodeIndex: __raw_opCodes[++i],
                        };
                        break;
                    case ELEMENT_MARKER:
                        result = {
                            __raw_opCode: opCode,
                            type: 'ELEMENT_MARKER',
                        };
                        break;
                }
            }
            if (!result) {
                result = {
                    __raw_opCode: opCode,
                    type: 'Unknown Op Code',
                    code: opCode,
                };
            }
            results.push(result);
        }
        return results;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    I18nMutateOpCodesDebug.prototype.__raw_opCodes;
    /**
     * @type {?}
     * @private
     */
    I18nMutateOpCodesDebug.prototype.__lView;
}
export class I18nUpdateOpCodesDebug {
    /**
     * @param {?} __raw_opCodes
     * @param {?} icus
     * @param {?} __lView
     */
    constructor(__raw_opCodes, icus, __lView) {
        this.__raw_opCodes = __raw_opCodes;
        this.icus = icus;
        this.__lView = __lView;
    }
    /**
     * A list of operation information about how the OpCodes will act on the view.
     * @return {?}
     */
    get operations() {
        const { __lView, __raw_opCodes, icus } = this;
        /** @type {?} */
        const results = [];
        for (let i = 0; i < __raw_opCodes.length; i++) {
            // bit code to check if we should apply the next update
            /** @type {?} */
            const checkBit = (/** @type {?} */ (__raw_opCodes[i]));
            // Number of opCodes to skip until next set of update codes
            /** @type {?} */
            const skipCodes = (/** @type {?} */ (__raw_opCodes[++i]));
            /** @type {?} */
            let value = '';
            for (let j = i + 1; j <= (i + skipCodes); j++) {
                /** @type {?} */
                const opCode = __raw_opCodes[j];
                if (typeof opCode === 'string') {
                    value += opCode;
                }
                else if (typeof opCode == 'number') {
                    if (opCode < 0) {
                        // It's a binding index whose value is negative
                        // We cannot know the value of the binding so we only show the index
                        value += `�${-opCode - 1}�`;
                    }
                    else {
                        /** @type {?} */
                        const nodeIndex = opCode >>> 2 /* SHIFT_REF */;
                        /** @type {?} */
                        let tIcuIndex;
                        /** @type {?} */
                        let tIcu;
                        switch (opCode & 3 /* MASK_OPCODE */) {
                            case 1 /* Attr */:
                                /** @type {?} */
                                const attrName = (/** @type {?} */ (__raw_opCodes[++j]));
                                /** @type {?} */
                                const sanitizeFn = __raw_opCodes[++j];
                                results.push({
                                    __raw_opCode: opCode,
                                    checkBit,
                                    type: 'Attr',
                                    attrValue: value,
                                    attrName,
                                    sanitizeFn,
                                });
                                break;
                            case 0 /* Text */:
                                results.push({
                                    __raw_opCode: opCode,
                                    checkBit,
                                    type: 'Text',
                                    nodeIndex,
                                    text: value,
                                });
                                break;
                            case 2 /* IcuSwitch */:
                                tIcuIndex = (/** @type {?} */ (__raw_opCodes[++j]));
                                tIcu = (/** @type {?} */ (icus))[tIcuIndex];
                                /** @type {?} */
                                let result = new I18NDebugItem(opCode, __lView, nodeIndex, 'IcuSwitch');
                                result['tIcuIndex'] = tIcuIndex;
                                result['checkBit'] = checkBit;
                                result['mainBinding'] = value;
                                result['tIcu'] = tIcu;
                                results.push(result);
                                break;
                            case 3 /* IcuUpdate */:
                                tIcuIndex = (/** @type {?} */ (__raw_opCodes[++j]));
                                tIcu = (/** @type {?} */ (icus))[tIcuIndex];
                                result = new I18NDebugItem(opCode, __lView, nodeIndex, 'IcuUpdate');
                                result['tIcuIndex'] = tIcuIndex;
                                result['checkBit'] = checkBit;
                                result['tIcu'] = tIcu;
                                results.push(result);
                                break;
                        }
                    }
                }
            }
            i += skipCodes;
        }
        return results;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    I18nUpdateOpCodesDebug.prototype.__raw_opCodes;
    /**
     * @type {?}
     * @private
     */
    I18nUpdateOpCodesDebug.prototype.icus;
    /**
     * @type {?}
     * @private
     */
    I18nUpdateOpCodesDebug.prototype.__lView;
}
/**
 * @record
 */
export function I18nOpCodesDebug() { }
if (false) {
    /** @type {?} */
    I18nOpCodesDebug.prototype.operations;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHZpZXdfZGVidWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2luc3RydWN0aW9ucy9sdmlld19kZWJ1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBYyxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFekgsT0FBTyxFQUFDLGNBQWMsRUFBRSxjQUFjLEVBQWlGLE1BQU0sb0JBQW9CLENBQUM7QUFLbEosT0FBTyxFQUFDLG9CQUFvQixFQUFFLDZCQUE2QixFQUFFLG9CQUFvQixFQUFFLDZCQUE2QixFQUE2QixNQUFNLHVCQUF1QixDQUFDO0FBQzNLLE9BQU8sRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQXdDLEtBQUssRUFBRSxhQUFhLEVBQVksSUFBSSxFQUFFLFFBQVEsRUFBcUIsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVMsS0FBSyxFQUFvQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlULE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7O01BRW5ELFdBQVcsR0FBRyxDQUFDLENBQUMsT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLENBQUMsQ0FBQyxTQUFTLENB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cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZU1hcmtlciwgQ29tcG9uZW50VGVtcGxhdGV9IGZyb20gJy4uJztcbmltcG9ydCB7SW5qZWN0b3IsIFNjaGVtYU1ldGFkYXRhfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7U2FuaXRpemVyfSBmcm9tICcuLi8uLi9zYW5pdGl6YXRpb24vc2FuaXRpemVyJztcbmltcG9ydCB7S2V5VmFsdWVBcnJheX0gZnJvbSAnLi4vLi4vdXRpbC9hcnJheV91dGlscyc7XG5pbXBvcnQge2Fzc2VydERlZmluZWR9IGZyb20gJy4uLy4uL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Y3JlYXRlTmFtZWRBcnJheVR5cGV9IGZyb20gJy4uLy4uL3V0aWwvbmFtZWRfYXJyYXlfdHlwZSc7XG5pbXBvcnQge2luaXROZ0Rldk1vZGV9IGZyb20gJy4uLy4uL3V0aWwvbmdfZGV2X21vZGUnO1xuaW1wb3J0IHtDT05UQUlORVJfSEVBREVSX09GRlNFVCwgSEFTX1RSQU5TUExBTlRFRF9WSUVXUywgTENvbnRhaW5lciwgTU9WRURfVklFV1MsIE5BVElWRX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jb250YWluZXInO1xuaW1wb3J0IHtEaXJlY3RpdmVEZWZMaXN0LCBQaXBlRGVmTGlzdCwgVmlld1F1ZXJpZXNGdW5jdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kZWZpbml0aW9uJztcbmltcG9ydCB7Q09NTUVOVF9NQVJLRVIsIEVMRU1FTlRfTUFSS0VSLCBJMThuTXV0YXRlT3BDb2RlLCBJMThuTXV0YXRlT3BDb2RlcywgSTE4blVwZGF0ZU9wQ29kZSwgSTE4blVwZGF0ZU9wQ29kZXMsIFRJY3V9IGZyb20gJy4uL2ludGVyZmFjZXMvaTE4bic7XG5pbXBvcnQge1Byb3BlcnR5QWxpYXNlcywgVENvbnN0YW50cywgVENvbnRhaW5lck5vZGUsIFRFbGVtZW50Tm9kZSwgVE5vZGUgYXMgSVROb2RlLCBUTm9kZUZsYWdzLCBUTm9kZVByb3ZpZGVySW5kZXhlcywgVE5vZGVUeXBlLCBUVmlld05vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvbm9kZSc7XG5pbXBvcnQge1NlbGVjdG9yRmxhZ3N9IGZyb20gJy4uL2ludGVyZmFjZXMvcHJvamVjdGlvbic7XG5pbXBvcnQge0xRdWVyaWVzLCBUUXVlcmllc30gZnJvbSAnLi4vaW50ZXJmYWNlcy9xdWVyeSc7XG5pbXBvcnQge1JDb21tZW50LCBSRWxlbWVudCwgUmVuZGVyZXIzLCBSZW5kZXJlckZhY3RvcnkzLCBSTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yZW5kZXJlcic7XG5pbXBvcnQge2dldFRTdHlsaW5nUmFuZ2VOZXh0LCBnZXRUU3R5bGluZ1JhbmdlTmV4dER1cGxpY2F0ZSwgZ2V0VFN0eWxpbmdSYW5nZVByZXYsIGdldFRTdHlsaW5nUmFuZ2VQcmV2RHVwbGljYXRlLCBUU3R5bGluZ0tleSwgVFN0eWxpbmdSYW5nZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdHlsaW5nJztcbmltcG9ydCB7Q0hJTERfSEVBRCwgQ0hJTERfVEFJTCwgQ0xFQU5VUCwgQ09OVEVYVCwgREVDTEFSQVRJT05fVklFVywgRGVzdHJveUhvb2tEYXRhLCBFeHBhbmRvSW5zdHJ1Y3Rpb25zLCBGTEFHUywgSEVBREVSX09GRlNFVCwgSG9va0RhdGEsIEhPU1QsIElOSkVDVE9SLCBMVmlldywgTFZpZXdGbGFncywgTkVYVCwgUEFSRU5ULCBRVUVSSUVTLCBSRU5ERVJFUiwgUkVOREVSRVJfRkFDVE9SWSwgU0FOSVRJWkVSLCBUX0hPU1QsIFREYXRhLCBUVklFVywgVFZpZXcgYXMgSVRWaWV3LCBUVmlldywgVFZpZXdUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2VzL3ZpZXcnO1xuaW1wb3J0IHthdHRhY2hEZWJ1Z09iamVjdH0gZnJvbSAnLi4vdXRpbC9kZWJ1Z191dGlscyc7XG5pbXBvcnQge2dldFROb2RlLCB1bndyYXBSTm9kZX0gZnJvbSAnLi4vdXRpbC92aWV3X3V0aWxzJztcblxuY29uc3QgTkdfREVWX01PREUgPSAoKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8ICEhbmdEZXZNb2RlKSAmJiBpbml0TmdEZXZNb2RlKCkpO1xuXG4vKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGNvbmRpdGlvbmFsbHkgYXR0YWNoZWQgY2xhc3NlcyB3aGljaCBwcm92aWRlIGh1bWFuIHJlYWRhYmxlIChkZWJ1ZykgbGV2ZWxcbiAqIGluZm9ybWF0aW9uIGZvciBgTFZpZXdgLCBgTENvbnRhaW5lcmAgYW5kIG90aGVyIGludGVybmFsIGRhdGEgc3RydWN0dXJlcy4gVGhlc2UgZGF0YSBzdHJ1Y3R1cmVzXG4gKiBhcmUgc3RvcmVkIGludGVybmFsbHkgYXMgYXJyYXkgd2hpY2ggbWFrZXMgaXQgdmVyeSBkaWZmaWN1bHQgZHVyaW5nIGRlYnVnZ2luZyB0byByZWFzb24gYWJvdXQgdGhlXG4gKiBjdXJyZW50IHN0YXRlIG9mIHRoZSBzeXN0ZW0uXG4gKlxuICogUGF0Y2hpbmcgdGhlIGFycmF5IHdpdGggZXh0cmEgcHJvcGVydHkgZG9lcyBjaGFuZ2UgdGhlIGFycmF5J3MgaGlkZGVuIGNsYXNzJyBidXQgaXQgZG9lcyBub3RcbiAqIGNoYW5nZSB0aGUgY29zdCBvZiBhY2Nlc3MsIHRoZXJlZm9yZSB0aGlzIHBhdGNoaW5nIHNob3VsZCBub3QgaGF2ZSBzaWduaWZpY2FudCBpZiBhbnkgaW1wYWN0IGluXG4gKiBgbmdEZXZNb2RlYCBtb2RlLiAoc2VlOiBodHRwczovL2pzcGVyZi5jb20vYXJyYXktdnMtbW9ua2V5LXBhdGNoLWFycmF5KVxuICpcbiAqIFNvIGluc3RlYWQgb2Ygc2VlaW5nOlxuICogYGBgXG4gKiBBcnJheSgzMCkgW09iamVjdCwgNjU5LCBudWxsLCDigKZdXG4gKiBgYGBcbiAqXG4gKiBZb3UgZ2V0IHRvIHNlZTpcbiAqIGBgYFxuICogTFZpZXdEZWJ1ZyB7XG4gKiAgIHZpZXdzOiBbLi4uXSxcbiAqICAgZmxhZ3M6IHthdHRhY2hlZDogdHJ1ZSwgLi4ufVxuICogICBub2RlczogW1xuICogICAgIHtodG1sOiAnPGRpdiBpZD1cIjEyM1wiPicsIC4uLiwgbm9kZXM6IFtcbiAqICAgICAgIHtodG1sOiAnPHNwYW4+JywgLi4uLCBub2RlczogbnVsbH1cbiAqICAgICBdfVxuICogICBdXG4gKiB9XG4gKiBgYGBcbiAqL1xuXG5sZXQgTFZJRVdfQ09NUE9ORU5UX0NBQ0hFITogTWFwPHN0cmluZ3xudWxsLCBBcnJheTxhbnk+PjtcbmxldCBMVklFV19FTUJFRERFRF9DQUNIRSE6IE1hcDxzdHJpbmd8bnVsbCwgQXJyYXk8YW55Pj47XG5sZXQgTFZJRVdfUk9PVCE6IEFycmF5PGFueT47XG5cbmludGVyZmFjZSBUVmlld0RlYnVnIGV4dGVuZHMgSVRWaWV3IHtcbiAgdHlwZTogVFZpZXdUeXBlO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2xvbmVzIGEgYmx1ZXByaW50IGFuZCBjcmVhdGVzIExWaWV3LlxuICpcbiAqIFNpbXBsZSBzbGljZSB3aWxsIGtlZXAgdGhlIHNhbWUgdHlwZSwgYW5kIHdlIG5lZWQgaXQgdG8gYmUgTFZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVG9MVmlld0Zyb21UVmlld0JsdWVwcmludCh0VmlldzogVFZpZXcpOiBMVmlldyB7XG4gIGNvbnN0IGRlYnVnVFZpZXcgPSB0VmlldyBhcyBUVmlld0RlYnVnO1xuICBjb25zdCBsVmlldyA9IGdldExWaWV3VG9DbG9uZShkZWJ1Z1RWaWV3LnR5cGUsIHRWaWV3LnRlbXBsYXRlICYmIHRWaWV3LnRlbXBsYXRlLm5hbWUpO1xuICByZXR1cm4gbFZpZXcuY29uY2F0KHRWaWV3LmJsdWVwcmludCkgYXMgYW55O1xufVxuXG5mdW5jdGlvbiBnZXRMVmlld1RvQ2xvbmUodHlwZTogVFZpZXdUeXBlLCBuYW1lOiBzdHJpbmd8bnVsbCk6IEFycmF5PGFueT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFRWaWV3VHlwZS5Sb290OlxuICAgICAgaWYgKExWSUVXX1JPT1QgPT09IHVuZGVmaW5lZCkgTFZJRVdfUk9PVCA9IG5ldyAoY3JlYXRlTmFtZWRBcnJheVR5cGUoJ0xSb290VmlldycpKSgpO1xuICAgICAgcmV0dXJuIExWSUVXX1JPT1Q7XG4gICAgY2FzZSBUVmlld1R5cGUuQ29tcG9uZW50OlxuICAgICAgaWYgKExWSUVXX0NPTVBPTkVOVF9DQUNIRSA9PT0gdW5kZWZpbmVkKSBMVklFV19DT01QT05FTlRfQ0FDSEUgPSBuZXcgTWFwKCk7XG4gICAgICBsZXQgY29tcG9uZW50QXJyYXkgPSBMVklFV19DT01QT05FTlRfQ0FDSEUuZ2V0KG5hbWUpO1xuICAgICAgaWYgKGNvbXBvbmVudEFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50QXJyYXkgPSBuZXcgKGNyZWF0ZU5hbWVkQXJyYXlUeXBlKCdMQ29tcG9uZW50VmlldycgKyBuYW1lU3VmZml4KG5hbWUpKSkoKTtcbiAgICAgICAgTFZJRVdfQ09NUE9ORU5UX0NBQ0hFLnNldChuYW1lLCBjb21wb25lbnRBcnJheSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29tcG9uZW50QXJyYXk7XG4gICAgY2FzZSBUVmlld1R5cGUuRW1iZWRkZWQ6XG4gICAgICBpZiAoTFZJRVdfRU1CRURERURfQ0FDSEUgPT09IHVuZGVmaW5lZCkgTFZJRVdfRU1CRURERURfQ0FDSEUgPSBuZXcgTWFwKCk7XG4gICAgICBsZXQgZW1iZWRkZWRBcnJheSA9IExWSUVXX0VNQkVEREVEX0NBQ0hFLmdldChuYW1lKTtcbiAgICAgIGlmIChlbWJlZGRlZEFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW1iZWRkZWRBcnJheSA9IG5ldyAoY3JlYXRlTmFtZWRBcnJheVR5cGUoJ0xFbWJlZGRlZFZpZXcnICsgbmFtZVN1ZmZpeChuYW1lKSkpKCk7XG4gICAgICAgIExWSUVXX0VNQkVEREVEX0NBQ0hFLnNldChuYW1lLCBlbWJlZGRlZEFycmF5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbWJlZGRlZEFycmF5O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcigndW5yZWFjaGFibGUgY29kZScpO1xufVxuXG5mdW5jdGlvbiBuYW1lU3VmZml4KHRleHQ6IHN0cmluZ3xudWxsfHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGlmICh0ZXh0ID09IG51bGwpIHJldHVybiAnJztcbiAgY29uc3QgaW5kZXggPSB0ZXh0Lmxhc3RJbmRleE9mKCdfVGVtcGxhdGUnKTtcbiAgcmV0dXJuICdfJyArIChpbmRleCA9PT0gLTEgPyB0ZXh0IDogdGV4dC5zdWJzdHIoMCwgaW5kZXgpKTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgZGVidWcgdmVyc2lvbiBvZiBPYmplY3QgbGl0ZXJhbCBzbyB0aGF0IHdlIGNhbiBoYXZlIGNvbnN0cnVjdG9yIG5hbWUgc2hvdyB1cFxuICogaW5cbiAqIGRlYnVnIHRvb2xzIGluIG5nRGV2TW9kZS5cbiAqL1xuZXhwb3J0IGNvbnN0IFRWaWV3Q29uc3RydWN0b3IgPSBjbGFzcyBUVmlldyBpbXBsZW1lbnRzIElUVmlldyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHR5cGU6IFRWaWV3VHlwZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgaWQ6IG51bWJlciwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBibHVlcHJpbnQ6IExWaWV3LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHRlbXBsYXRlOiBDb21wb25lbnRUZW1wbGF0ZTx7fT58bnVsbCwgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgcXVlcmllczogVFF1ZXJpZXN8bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyB2aWV3UXVlcnk6IFZpZXdRdWVyaWVzRnVuY3Rpb248e30+fG51bGwsICAgICAgICAvL1xuICAgICAgcHVibGljIG5vZGU6IFRWaWV3Tm9kZXxURWxlbWVudE5vZGV8bnVsbCwgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgZGF0YTogVERhdGEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBiaW5kaW5nU3RhcnRJbmRleDogbnVtYmVyLCAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGV4cGFuZG9TdGFydEluZGV4OiBudW1iZXIsICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgZXhwYW5kb0luc3RydWN0aW9uczogRXhwYW5kb0luc3RydWN0aW9uc3xudWxsLCAgLy9cbiAgICAgIHB1YmxpYyBmaXJzdENyZWF0ZVBhc3M6IGJvb2xlYW4sICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGZpcnN0VXBkYXRlUGFzczogYm9vbGVhbiwgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgc3RhdGljVmlld1F1ZXJpZXM6IGJvb2xlYW4sICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBzdGF0aWNDb250ZW50UXVlcmllczogYm9vbGVhbiwgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHByZU9yZGVySG9va3M6IEhvb2tEYXRhfG51bGwsICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgcHJlT3JkZXJDaGVja0hvb2tzOiBIb29rRGF0YXxudWxsLCAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBjb250ZW50SG9va3M6IEhvb2tEYXRhfG51bGwsICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGNvbnRlbnRDaGVja0hvb2tzOiBIb29rRGF0YXxudWxsLCAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgdmlld0hvb2tzOiBIb29rRGF0YXxudWxsLCAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyB2aWV3Q2hlY2tIb29rczogSG9va0RhdGF8bnVsbCwgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGRlc3Ryb3lIb29rczogRGVzdHJveUhvb2tEYXRhfG51bGwsICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgY2xlYW51cDogYW55W118bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBjb250ZW50UXVlcmllczogbnVtYmVyW118bnVsbCwgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGNvbXBvbmVudHM6IG51bWJlcltdfG51bGwsICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgZGlyZWN0aXZlUmVnaXN0cnk6IERpcmVjdGl2ZURlZkxpc3R8bnVsbCwgICAgICAgLy9cbiAgICAgIHB1YmxpYyBwaXBlUmVnaXN0cnk6IFBpcGVEZWZMaXN0fG51bGwsICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGZpcnN0Q2hpbGQ6IElUTm9kZXxudWxsLCAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgc2NoZW1hczogU2NoZW1hTWV0YWRhdGFbXXxudWxsLCAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBjb25zdHM6IFRDb25zdGFudHN8bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGluY29tcGxldGVGaXJzdFBhc3M6IGJvb2xlYW4gICAgICAgICAgICAgICAgICAgIC8vXG4gICkge31cblxuICBnZXQgdGVtcGxhdGVfKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYnVmOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByb2Nlc3NUTm9kZUNoaWxkcmVuKHRoaXMuZmlyc3RDaGlsZCwgYnVmKTtcbiAgICByZXR1cm4gYnVmLmpvaW4oJycpO1xuICB9XG59O1xuXG5jbGFzcyBUTm9kZSBpbXBsZW1lbnRzIElUTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHRWaWV3XzogVFZpZXcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgdHlwZTogVE5vZGVUeXBlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBpbmRleDogbnVtYmVyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGluamVjdG9ySW5kZXg6IG51bWJlciwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgZGlyZWN0aXZlU3RhcnQ6IG51bWJlciwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBkaXJlY3RpdmVFbmQ6IG51bWJlciwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGRpcmVjdGl2ZVN0eWxpbmdMYXN0OiBudW1iZXIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgcHJvcGVydHlCaW5kaW5nczogbnVtYmVyW118bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBmbGFnczogVE5vZGVGbGFncywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHByb3ZpZGVySW5kZXhlczogVE5vZGVQcm92aWRlckluZGV4ZXMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgdGFnTmFtZTogc3RyaW5nfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBhdHRyczogKHN0cmluZ3xBdHRyaWJ1dGVNYXJrZXJ8KHN0cmluZ3xTZWxlY3RvckZsYWdzKVtdKVtdfG51bGwsICAgICAgICAvL1xuICAgICAgcHVibGljIG1lcmdlZEF0dHJzOiAoc3RyaW5nfEF0dHJpYnV0ZU1hcmtlcnwoc3RyaW5nfFNlbGVjdG9yRmxhZ3MpW10pW118bnVsbCwgIC8vXG4gICAgICBwdWJsaWMgbG9jYWxOYW1lczogKHN0cmluZ3xudW1iZXIpW118bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBpbml0aWFsSW5wdXRzOiAoc3RyaW5nW118bnVsbClbXXxudWxsfHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGlucHV0czogUHJvcGVydHlBbGlhc2VzfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgb3V0cHV0czogUHJvcGVydHlBbGlhc2VzfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyB0Vmlld3M6IElUVmlld3xJVFZpZXdbXXxudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIG5leHQ6IElUTm9kZXxudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgcHJvamVjdGlvbk5leHQ6IElUTm9kZXxudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBjaGlsZDogSVROb2RlfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHBhcmVudDogVEVsZW1lbnROb2RlfFRDb250YWluZXJOb2RlfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgcHJvamVjdGlvbjogbnVtYmVyfChJVE5vZGV8Uk5vZGVbXSlbXXxudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBzdHlsZXM6IHN0cmluZ3xudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHN0eWxlc1dpdGhvdXRIb3N0OiBzdHJpbmd8bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgcmVzaWR1YWxTdHlsZXM6IEtleVZhbHVlQXJyYXk8YW55Pnx1bmRlZmluZWR8bnVsbCwgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBjbGFzc2VzOiBzdHJpbmd8bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGNsYXNzZXNXaXRob3V0SG9zdDogc3RyaW5nfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgcmVzaWR1YWxDbGFzc2VzOiBLZXlWYWx1ZUFycmF5PGFueT58dW5kZWZpbmVkfG51bGwsICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBjbGFzc0JpbmRpbmdzOiBUU3R5bGluZ1JhbmdlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHN0eWxlQmluZGluZ3M6IFRTdHlsaW5nUmFuZ2UsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICkge31cblxuICBnZXQgdHlwZV8oKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSBUTm9kZVR5cGUuQ29udGFpbmVyOlxuICAgICAgICByZXR1cm4gJ1ROb2RlVHlwZS5Db250YWluZXInO1xuICAgICAgY2FzZSBUTm9kZVR5cGUuRWxlbWVudDpcbiAgICAgICAgcmV0dXJuICdUTm9kZVR5cGUuRWxlbWVudCc7XG4gICAgICBjYXNlIFROb2RlVHlwZS5FbGVtZW50Q29udGFpbmVyOlxuICAgICAgICByZXR1cm4gJ1ROb2RlVHlwZS5FbGVtZW50Q29udGFpbmVyJztcbiAgICAgIGNhc2UgVE5vZGVUeXBlLkljdUNvbnRhaW5lcjpcbiAgICAgICAgcmV0dXJuICdUTm9kZVR5cGUuSWN1Q29udGFpbmVyJztcbiAgICAgIGNhc2UgVE5vZGVUeXBlLlByb2plY3Rpb246XG4gICAgICAgIHJldHVybiAnVE5vZGVUeXBlLlByb2plY3Rpb24nO1xuICAgICAgY2FzZSBUTm9kZVR5cGUuVmlldzpcbiAgICAgICAgcmV0dXJuICdUTm9kZVR5cGUuVmlldyc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ1ROb2RlVHlwZS4/Pz8nO1xuICAgIH1cbiAgfVxuXG4gIGdldCBmbGFnc18oKTogc3RyaW5nIHtcbiAgICBjb25zdCBmbGFnczogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAodGhpcy5mbGFncyAmIFROb2RlRmxhZ3MuaGFzQ2xhc3NJbnB1dCkgZmxhZ3MucHVzaCgnVE5vZGVGbGFncy5oYXNDbGFzc0lucHV0Jyk7XG4gICAgaWYgKHRoaXMuZmxhZ3MgJiBUTm9kZUZsYWdzLmhhc0NvbnRlbnRRdWVyeSkgZmxhZ3MucHVzaCgnVE5vZGVGbGFncy5oYXNDb250ZW50UXVlcnknKTtcbiAgICBpZiAodGhpcy5mbGFncyAmIFROb2RlRmxhZ3MuaGFzU3R5bGVJbnB1dCkgZmxhZ3MucHVzaCgnVE5vZGVGbGFncy5oYXNTdHlsZUlucHV0Jyk7XG4gICAgaWYgKHRoaXMuZmxhZ3MgJiBUTm9kZUZsYWdzLmhhc0hvc3RCaW5kaW5ncykgZmxhZ3MucHVzaCgnVE5vZGVGbGFncy5oYXNIb3N0QmluZGluZ3MnKTtcbiAgICBpZiAodGhpcy5mbGFncyAmIFROb2RlRmxhZ3MuaXNDb21wb25lbnRIb3N0KSBmbGFncy5wdXNoKCdUTm9kZUZsYWdzLmlzQ29tcG9uZW50SG9zdCcpO1xuICAgIGlmICh0aGlzLmZsYWdzICYgVE5vZGVGbGFncy5pc0RpcmVjdGl2ZUhvc3QpIGZsYWdzLnB1c2goJ1ROb2RlRmxhZ3MuaXNEaXJlY3RpdmVIb3N0Jyk7XG4gICAgaWYgKHRoaXMuZmxhZ3MgJiBUTm9kZUZsYWdzLmlzRGV0YWNoZWQpIGZsYWdzLnB1c2goJ1ROb2RlRmxhZ3MuaXNEZXRhY2hlZCcpO1xuICAgIGlmICh0aGlzLmZsYWdzICYgVE5vZGVGbGFncy5pc1Byb2plY3RlZCkgZmxhZ3MucHVzaCgnVE5vZGVGbGFncy5pc1Byb2plY3RlZCcpO1xuICAgIHJldHVybiBmbGFncy5qb2luKCd8Jyk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGVfKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYnVmOiBzdHJpbmdbXSA9IFtdO1xuICAgIGJ1Zi5wdXNoKCc8JywgdGhpcy50YWdOYW1lIHx8IHRoaXMudHlwZV8pO1xuICAgIGlmICh0aGlzLmF0dHJzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXR0cnMubGVuZ3RoOykge1xuICAgICAgICBjb25zdCBhdHRyTmFtZSA9IHRoaXMuYXR0cnNbaSsrXTtcbiAgICAgICAgaWYgKHR5cGVvZiBhdHRyTmFtZSA9PSAnbnVtYmVyJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMuYXR0cnNbaSsrXTtcbiAgICAgICAgYnVmLnB1c2goJyAnLCBhdHRyTmFtZSBhcyBzdHJpbmcsICc9XCInLCBhdHRyVmFsdWUgYXMgc3RyaW5nLCAnXCInKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYnVmLnB1c2goJz4nKTtcbiAgICBwcm9jZXNzVE5vZGVDaGlsZHJlbih0aGlzLmNoaWxkLCBidWYpO1xuICAgIGJ1Zi5wdXNoKCc8LycsIHRoaXMudGFnTmFtZSB8fCB0aGlzLnR5cGVfLCAnPicpO1xuICAgIHJldHVybiBidWYuam9pbignJyk7XG4gIH1cblxuICBnZXQgc3R5bGVCaW5kaW5nc18oKTogRGVidWdTdHlsZUJpbmRpbmdzIHtcbiAgICByZXR1cm4gdG9EZWJ1Z1N0eWxlQmluZGluZyh0aGlzLCBmYWxzZSk7XG4gIH1cbiAgZ2V0IGNsYXNzQmluZGluZ3NfKCk6IERlYnVnU3R5bGVCaW5kaW5ncyB7XG4gICAgcmV0dXJuIHRvRGVidWdTdHlsZUJpbmRpbmcodGhpcywgdHJ1ZSk7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBUTm9kZURlYnVnID0gVE5vZGU7XG5leHBvcnQgdHlwZSBUTm9kZURlYnVnID0gVE5vZGU7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVidWdTdHlsZUJpbmRpbmdzIGV4dGVuZHNcbiAgICBBcnJheTxLZXlWYWx1ZUFycmF5PGFueT58RGVidWdTdHlsZUJpbmRpbmd8c3RyaW5nfG51bGw+IHt9XG5leHBvcnQgaW50ZXJmYWNlIERlYnVnU3R5bGVCaW5kaW5nIHtcbiAga2V5OiBUU3R5bGluZ0tleTtcbiAgaW5kZXg6IG51bWJlcjtcbiAgaXNUZW1wbGF0ZTogYm9vbGVhbjtcbiAgcHJldkR1cGxpY2F0ZTogYm9vbGVhbjtcbiAgbmV4dER1cGxpY2F0ZTogYm9vbGVhbjtcbiAgcHJldkluZGV4OiBudW1iZXI7XG4gIG5leHRJbmRleDogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiB0b0RlYnVnU3R5bGVCaW5kaW5nKHROb2RlOiBUTm9kZSwgaXNDbGFzc0Jhc2VkOiBib29sZWFuKTogRGVidWdTdHlsZUJpbmRpbmdzIHtcbiAgY29uc3QgdERhdGEgPSB0Tm9kZS50Vmlld18uZGF0YTtcbiAgY29uc3QgYmluZGluZ3M6IERlYnVnU3R5bGVCaW5kaW5ncyA9IFtdIGFzIGFueTtcbiAgY29uc3QgcmFuZ2UgPSBpc0NsYXNzQmFzZWQgPyB0Tm9kZS5jbGFzc0JpbmRpbmdzIDogdE5vZGUuc3R5bGVCaW5kaW5ncztcbiAgY29uc3QgcHJldiA9IGdldFRTdHlsaW5nUmFuZ2VQcmV2KHJhbmdlKTtcbiAgY29uc3QgbmV4dCA9IGdldFRTdHlsaW5nUmFuZ2VOZXh0KHJhbmdlKTtcbiAgbGV0IGlzVGVtcGxhdGUgPSBuZXh0ICE9PSAwO1xuICBsZXQgY3Vyc29yID0gaXNUZW1wbGF0ZSA/IG5leHQgOiBwcmV2O1xuICB3aGlsZSAoY3Vyc29yICE9PSAwKSB7XG4gICAgY29uc3QgaXRlbUtleSA9IHREYXRhW2N1cnNvcl0gYXMgVFN0eWxpbmdLZXk7XG4gICAgY29uc3QgaXRlbVJhbmdlID0gdERhdGFbY3Vyc29yICsgMV0gYXMgVFN0eWxpbmdSYW5nZTtcbiAgICBiaW5kaW5ncy51bnNoaWZ0KHtcbiAgICAgIGtleTogaXRlbUtleSxcbiAgICAgIGluZGV4OiBjdXJzb3IsXG4gICAgICBpc1RlbXBsYXRlOiBpc1RlbXBsYXRlLFxuICAgICAgcHJldkR1cGxpY2F0ZTogZ2V0VFN0eWxpbmdSYW5nZVByZXZEdXBsaWNhdGUoaXRlbVJhbmdlKSxcbiAgICAgIG5leHREdXBsaWNhdGU6IGdldFRTdHlsaW5nUmFuZ2VOZXh0RHVwbGljYXRlKGl0ZW1SYW5nZSksXG4gICAgICBuZXh0SW5kZXg6IGdldFRTdHlsaW5nUmFuZ2VOZXh0KGl0ZW1SYW5nZSksXG4gICAgICBwcmV2SW5kZXg6IGdldFRTdHlsaW5nUmFuZ2VQcmV2KGl0ZW1SYW5nZSksXG4gICAgfSk7XG4gICAgaWYgKGN1cnNvciA9PT0gcHJldikgaXNUZW1wbGF0ZSA9IGZhbHNlO1xuICAgIGN1cnNvciA9IGdldFRTdHlsaW5nUmFuZ2VQcmV2KGl0ZW1SYW5nZSk7XG4gIH1cbiAgYmluZGluZ3MucHVzaCgoaXNDbGFzc0Jhc2VkID8gdE5vZGUucmVzaWR1YWxDbGFzc2VzIDogdE5vZGUucmVzaWR1YWxTdHlsZXMpIHx8IG51bGwpO1xuICByZXR1cm4gYmluZGluZ3M7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NUTm9kZUNoaWxkcmVuKHROb2RlOiBJVE5vZGV8bnVsbCwgYnVmOiBzdHJpbmdbXSkge1xuICB3aGlsZSAodE5vZGUpIHtcbiAgICBidWYucHVzaCgodE5vZGUgYXMgYW55IGFzIHt0ZW1wbGF0ZV86IHN0cmluZ30pLnRlbXBsYXRlXyk7XG4gICAgdE5vZGUgPSB0Tm9kZS5uZXh0O1xuICB9XG59XG5cbmNvbnN0IFRWaWV3RGF0YSA9IE5HX0RFVl9NT0RFICYmIGNyZWF0ZU5hbWVkQXJyYXlUeXBlKCdUVmlld0RhdGEnKSB8fCBudWxsISBhcyBBcnJheUNvbnN0cnVjdG9yO1xubGV0IFRWSUVXREFUQV9FTVBUWTogdW5rbm93bltdOyAgLy8gY2FuJ3QgaW5pdGlhbGl6ZSBoZXJlIG9yIGl0IHdpbGwgbm90IGJlIHRyZWUgc2hha2VuLCBiZWNhdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBgTFZpZXdgIGNvbnN0cnVjdG9yIGNvdWxkIGhhdmUgc2lkZS1lZmZlY3RzLlxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNsb25lcyBhIGJsdWVwcmludCBhbmQgY3JlYXRlcyBURGF0YS5cbiAqXG4gKiBTaW1wbGUgc2xpY2Ugd2lsbCBrZWVwIHRoZSBzYW1lIHR5cGUsIGFuZCB3ZSBuZWVkIGl0IHRvIGJlIFREYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVRvVFZpZXdEYXRhKGxpc3Q6IGFueVtdKTogVERhdGEge1xuICBpZiAoVFZJRVdEQVRBX0VNUFRZID09PSB1bmRlZmluZWQpIFRWSUVXREFUQV9FTVBUWSA9IG5ldyBUVmlld0RhdGEoKTtcbiAgcmV0dXJuIFRWSUVXREFUQV9FTVBUWS5jb25jYXQobGlzdCkgYXMgYW55O1xufVxuXG5leHBvcnQgY29uc3QgTFZpZXdCbHVlcHJpbnQgPVxuICAgIE5HX0RFVl9NT0RFICYmIGNyZWF0ZU5hbWVkQXJyYXlUeXBlKCdMVmlld0JsdWVwcmludCcpIHx8IG51bGwhIGFzIEFycmF5Q29uc3RydWN0b3I7XG5leHBvcnQgY29uc3QgTWF0Y2hlc0FycmF5ID1cbiAgICBOR19ERVZfTU9ERSAmJiBjcmVhdGVOYW1lZEFycmF5VHlwZSgnTWF0Y2hlc0FycmF5JykgfHwgbnVsbCEgYXMgQXJyYXlDb25zdHJ1Y3RvcjtcbmV4cG9ydCBjb25zdCBUVmlld0NvbXBvbmVudHMgPVxuICAgIE5HX0RFVl9NT0RFICYmIGNyZWF0ZU5hbWVkQXJyYXlUeXBlKCdUVmlld0NvbXBvbmVudHMnKSB8fCBudWxsISBhcyBBcnJheUNvbnN0cnVjdG9yO1xuZXhwb3J0IGNvbnN0IFROb2RlTG9jYWxOYW1lcyA9XG4gICAgTkdfREVWX01PREUgJiYgY3JlYXRlTmFtZWRBcnJheVR5cGUoJ1ROb2RlTG9jYWxOYW1lcycpIHx8IG51bGwhIGFzIEFycmF5Q29uc3RydWN0b3I7XG5leHBvcnQgY29uc3QgVE5vZGVJbml0aWFsSW5wdXRzID1cbiAgICBOR19ERVZfTU9ERSAmJiBjcmVhdGVOYW1lZEFycmF5VHlwZSgnVE5vZGVJbml0aWFsSW5wdXRzJykgfHwgbnVsbCEgYXMgQXJyYXlDb25zdHJ1Y3RvcjtcbmV4cG9ydCBjb25zdCBUTm9kZUluaXRpYWxEYXRhID1cbiAgICBOR19ERVZfTU9ERSAmJiBjcmVhdGVOYW1lZEFycmF5VHlwZSgnVE5vZGVJbml0aWFsRGF0YScpIHx8IG51bGwhIGFzIEFycmF5Q29uc3RydWN0b3I7XG5leHBvcnQgY29uc3QgTENsZWFudXAgPVxuICAgIE5HX0RFVl9NT0RFICYmIGNyZWF0ZU5hbWVkQXJyYXlUeXBlKCdMQ2xlYW51cCcpIHx8IG51bGwhIGFzIEFycmF5Q29uc3RydWN0b3I7XG5leHBvcnQgY29uc3QgVENsZWFudXAgPVxuICAgIE5HX0RFVl9NT0RFICYmIGNyZWF0ZU5hbWVkQXJyYXlUeXBlKCdUQ2xlYW51cCcpIHx8IG51bGwhIGFzIEFycmF5Q29uc3RydWN0b3I7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoTFZpZXdEZWJ1ZyhsVmlldzogTFZpZXcpIHtcbiAgYXR0YWNoRGVidWdPYmplY3QobFZpZXcsIG5ldyBMVmlld0RlYnVnKGxWaWV3KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hMQ29udGFpbmVyRGVidWcobENvbnRhaW5lcjogTENvbnRhaW5lcikge1xuICBhdHRhY2hEZWJ1Z09iamVjdChsQ29udGFpbmVyLCBuZXcgTENvbnRhaW5lckRlYnVnKGxDb250YWluZXIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVidWcob2JqOiBMVmlldyk6IExWaWV3RGVidWc7XG5leHBvcnQgZnVuY3Rpb24gdG9EZWJ1ZyhvYmo6IExWaWV3fG51bGwpOiBMVmlld0RlYnVnfG51bGw7XG5leHBvcnQgZnVuY3Rpb24gdG9EZWJ1ZyhvYmo6IExWaWV3fExDb250YWluZXJ8bnVsbCk6IExWaWV3RGVidWd8TENvbnRhaW5lckRlYnVnfG51bGw7XG5leHBvcnQgZnVuY3Rpb24gdG9EZWJ1ZyhvYmo6IGFueSk6IGFueSB7XG4gIGlmIChvYmopIHtcbiAgICBjb25zdCBkZWJ1ZyA9IChvYmogYXMgYW55KS5kZWJ1ZztcbiAgICBhc3NlcnREZWZpbmVkKGRlYnVnLCAnT2JqZWN0IGRvZXMgbm90IGhhdmUgYSBkZWJ1ZyByZXByZXNlbnRhdGlvbi4nKTtcbiAgICByZXR1cm4gZGVidWc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxufVxuXG4vKipcbiAqIFVzZSB0aGlzIG1ldGhvZCB0byB1bndyYXAgYSBuYXRpdmUgZWxlbWVudCBpbiBgTFZpZXdgIGFuZCBjb252ZXJ0IGl0IGludG8gSFRNTCBmb3IgZWFzaWVyXG4gKiByZWFkaW5nLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBwb3NzaWJseSB3cmFwcGVkIG5hdGl2ZSBET00gbm9kZS5cbiAqIEBwYXJhbSBpbmNsdWRlQ2hpbGRyZW4gSWYgYHRydWVgIHRoZW4gdGhlIHNlcmlhbGl6ZWQgSFRNTCBmb3JtIHdpbGwgaW5jbHVkZSBjaGlsZCBlbGVtZW50c1xuICogKHNhbWVcbiAqIGFzIGBvdXRlckhUTUxgKS4gSWYgYGZhbHNlYCB0aGVuIHRoZSBzZXJpYWxpemVkIEhUTUwgZm9ybSB3aWxsIG9ubHkgY29udGFpbiB0aGUgZWxlbWVudFxuICogaXRzZWxmXG4gKiAod2lsbCBub3Qgc2VyaWFsaXplIGNoaWxkIGVsZW1lbnRzKS5cbiAqL1xuZnVuY3Rpb24gdG9IdG1sKHZhbHVlOiBhbnksIGluY2x1ZGVDaGlsZHJlbjogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nfG51bGwge1xuICBjb25zdCBub2RlOiBIVE1MRWxlbWVudHxudWxsID0gdW53cmFwUk5vZGUodmFsdWUpIGFzIGFueTtcbiAgaWYgKG5vZGUpIHtcbiAgICBjb25zdCBpc1RleHROb2RlID0gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG4gICAgY29uc3Qgb3V0ZXJIVE1MID0gKGlzVGV4dE5vZGUgPyBub2RlLnRleHRDb250ZW50IDogbm9kZS5vdXRlckhUTUwpIHx8ICcnO1xuICAgIGlmIChpbmNsdWRlQ2hpbGRyZW4gfHwgaXNUZXh0Tm9kZSkge1xuICAgICAgcmV0dXJuIG91dGVySFRNTDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gJz4nICsgbm9kZS5pbm5lckhUTUwgKyAnPCc7XG4gICAgICByZXR1cm4gKG91dGVySFRNTC5zcGxpdChpbm5lckhUTUwpWzBdKSArICc+JztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExWaWV3RGVidWcge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9yYXdfbFZpZXc6IExWaWV3KSB7fVxuXG4gIC8qKlxuICAgKiBGbGFncyBhc3NvY2lhdGVkIHdpdGggdGhlIGBMVmlld2AgdW5wYWNrZWQgaW50byBhIG1vcmUgcmVhZGFibGUgc3RhdGUuXG4gICAqL1xuICBnZXQgZmxhZ3MoKSB7XG4gICAgY29uc3QgZmxhZ3MgPSB0aGlzLl9yYXdfbFZpZXdbRkxBR1NdO1xuICAgIHJldHVybiB7XG4gICAgICBfX3Jhd19fZmxhZ3NfXzogZmxhZ3MsXG4gICAgICBpbml0UGhhc2VTdGF0ZTogZmxhZ3MgJiBMVmlld0ZsYWdzLkluaXRQaGFzZVN0YXRlTWFzayxcbiAgICAgIGNyZWF0aW9uTW9kZTogISEoZmxhZ3MgJiBMVmlld0ZsYWdzLkNyZWF0aW9uTW9kZSksXG4gICAgICBmaXJzdFZpZXdQYXNzOiAhIShmbGFncyAmIExWaWV3RmxhZ3MuRmlyc3RMVmlld1Bhc3MpLFxuICAgICAgY2hlY2tBbHdheXM6ICEhKGZsYWdzICYgTFZpZXdGbGFncy5DaGVja0Fsd2F5cyksXG4gICAgICBkaXJ0eTogISEoZmxhZ3MgJiBMVmlld0ZsYWdzLkRpcnR5KSxcbiAgICAgIGF0dGFjaGVkOiAhIShmbGFncyAmIExWaWV3RmxhZ3MuQXR0YWNoZWQpLFxuICAgICAgZGVzdHJveWVkOiAhIShmbGFncyAmIExWaWV3RmxhZ3MuRGVzdHJveWVkKSxcbiAgICAgIGlzUm9vdDogISEoZmxhZ3MgJiBMVmlld0ZsYWdzLklzUm9vdCksXG4gICAgICBpbmRleFdpdGhpbkluaXRQaGFzZTogZmxhZ3MgPj4gTFZpZXdGbGFncy5JbmRleFdpdGhpbkluaXRQaGFzZVNoaWZ0LFxuICAgIH07XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBMVmlld0RlYnVnfExDb250YWluZXJEZWJ1Z3xudWxsIHtcbiAgICByZXR1cm4gdG9EZWJ1Zyh0aGlzLl9yYXdfbFZpZXdbUEFSRU5UXSk7XG4gIH1cbiAgZ2V0IGhvc3QoKTogc3RyaW5nfG51bGwge1xuICAgIHJldHVybiB0b0h0bWwodGhpcy5fcmF3X2xWaWV3W0hPU1RdLCB0cnVlKTtcbiAgfVxuICBnZXQgaHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5ub2RlcyB8fCBbXSkubWFwKG5vZGUgPT4gdG9IdG1sKG5vZGUubmF0aXZlLCB0cnVlKSkuam9pbignJyk7XG4gIH1cbiAgZ2V0IGNvbnRleHQoKToge318bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sVmlld1tDT05URVhUXTtcbiAgfVxuICAvKipcbiAgICogVGhlIHRyZWUgb2Ygbm9kZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IGBMVmlld2AuIFRoZSBub2RlcyBoYXZlIGJlZW4gbm9ybWFsaXplZCBpbnRvXG4gICAqIGFcbiAgICogdHJlZSBzdHJ1Y3R1cmUgd2l0aCByZWxldmFudCBkZXRhaWxzIHB1bGxlZCBvdXQgZm9yIHJlYWRhYmlsaXR5LlxuICAgKi9cbiAgZ2V0IG5vZGVzKCk6IERlYnVnTm9kZVtdfG51bGwge1xuICAgIGNvbnN0IGxWaWV3ID0gdGhpcy5fcmF3X2xWaWV3O1xuICAgIGNvbnN0IHROb2RlID0gbFZpZXdbVFZJRVddLmZpcnN0Q2hpbGQ7XG4gICAgcmV0dXJuIHRvRGVidWdOb2Rlcyh0Tm9kZSwgbFZpZXcpO1xuICB9XG5cbiAgZ2V0IHRWaWV3KCk6IElUVmlldyB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sVmlld1tUVklFV107XG4gIH1cbiAgZ2V0IGNsZWFudXAoKTogYW55W118bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sVmlld1tDTEVBTlVQXTtcbiAgfVxuICBnZXQgaW5qZWN0b3IoKTogSW5qZWN0b3J8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sVmlld1tJTkpFQ1RPUl07XG4gIH1cbiAgZ2V0IHJlbmRlcmVyRmFjdG9yeSgpOiBSZW5kZXJlckZhY3RvcnkzIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3X2xWaWV3W1JFTkRFUkVSX0ZBQ1RPUlldO1xuICB9XG4gIGdldCByZW5kZXJlcigpOiBSZW5kZXJlcjMge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbFZpZXdbUkVOREVSRVJdO1xuICB9XG4gIGdldCBzYW5pdGl6ZXIoKTogU2FuaXRpemVyfG51bGwge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbFZpZXdbU0FOSVRJWkVSXTtcbiAgfVxuICBnZXQgY2hpbGRIZWFkKCk6IExWaWV3RGVidWd8TENvbnRhaW5lckRlYnVnfG51bGwge1xuICAgIHJldHVybiB0b0RlYnVnKHRoaXMuX3Jhd19sVmlld1tDSElMRF9IRUFEXSk7XG4gIH1cbiAgZ2V0IG5leHQoKTogTFZpZXdEZWJ1Z3xMQ29udGFpbmVyRGVidWd8bnVsbCB7XG4gICAgcmV0dXJuIHRvRGVidWcodGhpcy5fcmF3X2xWaWV3W05FWFRdKTtcbiAgfVxuICBnZXQgY2hpbGRUYWlsKCk6IExWaWV3RGVidWd8TENvbnRhaW5lckRlYnVnfG51bGwge1xuICAgIHJldHVybiB0b0RlYnVnKHRoaXMuX3Jhd19sVmlld1tDSElMRF9UQUlMXSk7XG4gIH1cbiAgZ2V0IGRlY2xhcmF0aW9uVmlldygpOiBMVmlld0RlYnVnfG51bGwge1xuICAgIHJldHVybiB0b0RlYnVnKHRoaXMuX3Jhd19sVmlld1tERUNMQVJBVElPTl9WSUVXXSk7XG4gIH1cbiAgZ2V0IHF1ZXJpZXMoKTogTFF1ZXJpZXN8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sVmlld1tRVUVSSUVTXTtcbiAgfVxuICBnZXQgdEhvc3QoKTogVFZpZXdOb2RlfFRFbGVtZW50Tm9kZXxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3X2xWaWV3W1RfSE9TVF07XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplZCB2aWV3IG9mIGNoaWxkIHZpZXdzIChhbmQgY29udGFpbmVycykgYXR0YWNoZWQgYXQgdGhpcyBsb2NhdGlvbi5cbiAgICovXG4gIGdldCBjaGlsZFZpZXdzKCk6IEFycmF5PExWaWV3RGVidWd8TENvbnRhaW5lckRlYnVnPiB7XG4gICAgY29uc3QgY2hpbGRWaWV3czogQXJyYXk8TFZpZXdEZWJ1Z3xMQ29udGFpbmVyRGVidWc+ID0gW107XG4gICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZEhlYWQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBjaGlsZFZpZXdzLnB1c2goY2hpbGQpO1xuICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRWaWV3cztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlYnVnTm9kZSB7XG4gIGh0bWw6IHN0cmluZ3xudWxsO1xuICBuYXRpdmU6IE5vZGU7XG4gIG5vZGVzOiBEZWJ1Z05vZGVbXXxudWxsO1xuICBjb21wb25lbnQ6IExWaWV3RGVidWd8bnVsbDtcbn1cblxuLyoqXG4gKiBUdXJucyBhIGZsYXQgbGlzdCBvZiBub2RlcyBpbnRvIGEgdHJlZSBieSB3YWxraW5nIHRoZSBhc3NvY2lhdGVkIGBUTm9kZWAgdHJlZS5cbiAqXG4gKiBAcGFyYW0gdE5vZGVcbiAqIEBwYXJhbSBsVmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EZWJ1Z05vZGVzKHROb2RlOiBJVE5vZGV8bnVsbCwgbFZpZXc6IExWaWV3KTogRGVidWdOb2RlW118bnVsbCB7XG4gIGlmICh0Tm9kZSkge1xuICAgIGNvbnN0IGRlYnVnTm9kZXM6IERlYnVnTm9kZVtdID0gW107XG4gICAgbGV0IHROb2RlQ3Vyc29yOiBJVE5vZGV8bnVsbCA9IHROb2RlO1xuICAgIHdoaWxlICh0Tm9kZUN1cnNvcikge1xuICAgICAgZGVidWdOb2Rlcy5wdXNoKGJ1aWxkRGVidWdOb2RlKHROb2RlQ3Vyc29yLCBsVmlldywgdE5vZGVDdXJzb3IuaW5kZXgpKTtcbiAgICAgIHROb2RlQ3Vyc29yID0gdE5vZGVDdXJzb3IubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGRlYnVnTm9kZXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRGVidWdOb2RlKHROb2RlOiBJVE5vZGUsIGxWaWV3OiBMVmlldywgbm9kZUluZGV4OiBudW1iZXIpOiBEZWJ1Z05vZGUge1xuICBjb25zdCByYXdWYWx1ZSA9IGxWaWV3W25vZGVJbmRleF07XG4gIGNvbnN0IG5hdGl2ZSA9IHVud3JhcFJOb2RlKHJhd1ZhbHVlKTtcbiAgY29uc3QgY29tcG9uZW50TFZpZXdEZWJ1ZyA9IHRvRGVidWcocmVhZExWaWV3VmFsdWUocmF3VmFsdWUpKTtcbiAgcmV0dXJuIHtcbiAgICBodG1sOiB0b0h0bWwobmF0aXZlKSxcbiAgICBuYXRpdmU6IG5hdGl2ZSBhcyBhbnksXG4gICAgbm9kZXM6IHRvRGVidWdOb2Rlcyh0Tm9kZS5jaGlsZCwgbFZpZXcpLFxuICAgIGNvbXBvbmVudDogY29tcG9uZW50TFZpZXdEZWJ1ZyxcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIExDb250YWluZXJEZWJ1ZyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3Jhd19sQ29udGFpbmVyOiBMQ29udGFpbmVyKSB7fVxuXG4gIGdldCBoYXNUcmFuc3BsYW50ZWRWaWV3cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3X2xDb250YWluZXJbSEFTX1RSQU5TUExBTlRFRF9WSUVXU107XG4gIH1cbiAgZ2V0IHZpZXdzKCk6IExWaWV3RGVidWdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sQ29udGFpbmVyLnNsaWNlKENPTlRBSU5FUl9IRUFERVJfT0ZGU0VUKVxuICAgICAgICAubWFwKHRvRGVidWcgYXMgKGw6IExWaWV3KSA9PiBMVmlld0RlYnVnKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IExWaWV3RGVidWd8TENvbnRhaW5lckRlYnVnfG51bGwge1xuICAgIHJldHVybiB0b0RlYnVnKHRoaXMuX3Jhd19sQ29udGFpbmVyW1BBUkVOVF0pO1xuICB9XG4gIGdldCBtb3ZlZFZpZXdzKCk6IExWaWV3W118bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sQ29udGFpbmVyW01PVkVEX1ZJRVdTXTtcbiAgfVxuICBnZXQgaG9zdCgpOiBSRWxlbWVudHxSQ29tbWVudHxMVmlldyB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sQ29udGFpbmVyW0hPU1RdO1xuICB9XG4gIGdldCBuYXRpdmUoKTogUkNvbW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbENvbnRhaW5lcltOQVRJVkVdO1xuICB9XG4gIGdldCBuZXh0KCkge1xuICAgIHJldHVybiB0b0RlYnVnKHRoaXMuX3Jhd19sQ29udGFpbmVyW05FWFRdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybiBhbiBgTFZpZXdgIHZhbHVlIGlmIGZvdW5kLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBgTFZpZXdgIGlmIGFueVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZExWaWV3VmFsdWUodmFsdWU6IGFueSk6IExWaWV3fG51bGwge1xuICB3aGlsZSAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5vdCBxdWl0ZSByaWdodCwgYXMgaXQgZG9lcyBub3QgdGFrZSBpbnRvIGFjY291bnQgYFN0eWxpbmdDb250ZXh0YFxuICAgIC8vIFRoaXMgaXMgd2h5IGl0IGlzIGluIGRlYnVnLCBub3QgaW4gdXRpbC50c1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gSEVBREVSX09GRlNFVCAtIDEpIHJldHVybiB2YWx1ZSBhcyBMVmlldztcbiAgICB2YWx1ZSA9IHZhbHVlW0hPU1RdO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgSTE4TkRlYnVnSXRlbSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBnZXQgdE5vZGUoKSB7XG4gICAgcmV0dXJuIGdldFROb2RlKHRoaXMuX2xWaWV3W1RWSUVXXSwgdGhpcy5ub2RlSW5kZXgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgX19yYXdfb3BDb2RlOiBhbnksIHByaXZhdGUgX2xWaWV3OiBMVmlldywgcHVibGljIG5vZGVJbmRleDogbnVtYmVyLFxuICAgICAgcHVibGljIHR5cGU6IHN0cmluZykge31cbn1cblxuLyoqXG4gKiBUdXJucyBhIGxpc3Qgb2YgXCJDcmVhdGVcIiAmIFwiVXBkYXRlXCIgT3BDb2RlcyBpbnRvIGEgaHVtYW4tcmVhZGFibGUgbGlzdCBvZiBvcGVyYXRpb25zIGZvclxuICogZGVidWdnaW5nIHB1cnBvc2VzLlxuICogQHBhcmFtIG11dGF0ZU9wQ29kZXMgbXV0YXRpb24gb3BDb2RlcyB0byByZWFkXG4gKiBAcGFyYW0gdXBkYXRlT3BDb2RlcyB1cGRhdGUgb3BDb2RlcyB0byByZWFkXG4gKiBAcGFyYW0gaWN1cyBsaXN0IG9mIElDVSBleHByZXNzaW9uc1xuICogQHBhcmFtIGxWaWV3IFRoZSB2aWV3IHRoZSBvcENvZGVzIGFyZSBhY3Rpbmcgb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaEkxOG5PcENvZGVzRGVidWcoXG4gICAgbXV0YXRlT3BDb2RlczogSTE4bk11dGF0ZU9wQ29kZXMsIHVwZGF0ZU9wQ29kZXM6IEkxOG5VcGRhdGVPcENvZGVzLCBpY3VzOiBUSWN1W118bnVsbCxcbiAgICBsVmlldzogTFZpZXcpIHtcbiAgYXR0YWNoRGVidWdPYmplY3QobXV0YXRlT3BDb2RlcywgbmV3IEkxOG5NdXRhdGVPcENvZGVzRGVidWcobXV0YXRlT3BDb2RlcywgbFZpZXcpKTtcbiAgYXR0YWNoRGVidWdPYmplY3QodXBkYXRlT3BDb2RlcywgbmV3IEkxOG5VcGRhdGVPcENvZGVzRGVidWcodXBkYXRlT3BDb2RlcywgaWN1cywgbFZpZXcpKTtcblxuICBpZiAoaWN1cykge1xuICAgIGljdXMuZm9yRWFjaChpY3UgPT4ge1xuICAgICAgaWN1LmNyZWF0ZS5mb3JFYWNoKGljdUNhc2UgPT4ge1xuICAgICAgICBhdHRhY2hEZWJ1Z09iamVjdChpY3VDYXNlLCBuZXcgSTE4bk11dGF0ZU9wQ29kZXNEZWJ1ZyhpY3VDYXNlLCBsVmlldykpO1xuICAgICAgfSk7XG4gICAgICBpY3UudXBkYXRlLmZvckVhY2goaWN1Q2FzZSA9PiB7XG4gICAgICAgIGF0dGFjaERlYnVnT2JqZWN0KGljdUNhc2UsIG5ldyBJMThuVXBkYXRlT3BDb2Rlc0RlYnVnKGljdUNhc2UsIGljdXMsIGxWaWV3KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSTE4bk11dGF0ZU9wQ29kZXNEZWJ1ZyBpbXBsZW1lbnRzIEkxOG5PcENvZGVzRGVidWcge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9fcmF3X29wQ29kZXM6IEkxOG5NdXRhdGVPcENvZGVzLCBwcml2YXRlIHJlYWRvbmx5IF9fbFZpZXc6IExWaWV3KSB7fVxuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2Ygb3BlcmF0aW9uIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0aGUgT3BDb2RlcyB3aWxsIGFjdCBvbiB0aGUgdmlldy5cbiAgICovXG4gIGdldCBvcGVyYXRpb25zKCkge1xuICAgIGNvbnN0IHtfX2xWaWV3LCBfX3Jhd19vcENvZGVzfSA9IHRoaXM7XG4gICAgY29uc3QgcmVzdWx0czogYW55W10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX19yYXdfb3BDb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb3BDb2RlID0gX19yYXdfb3BDb2Rlc1tpXTtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIGlmICh0eXBlb2Ygb3BDb2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgX19yYXdfb3BDb2RlOiBvcENvZGUsXG4gICAgICAgICAgdHlwZTogJ0NyZWF0ZSBUZXh0IE5vZGUnLFxuICAgICAgICAgIG5vZGVJbmRleDogX19yYXdfb3BDb2Rlc1srK2ldLFxuICAgICAgICAgIHRleHQ6IG9wQ29kZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcENvZGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHN3aXRjaCAob3BDb2RlICYgSTE4bk11dGF0ZU9wQ29kZS5NQVNLX09QQ09ERSkge1xuICAgICAgICAgIGNhc2UgSTE4bk11dGF0ZU9wQ29kZS5BcHBlbmRDaGlsZDpcbiAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uTm9kZUluZGV4ID0gb3BDb2RlID4+PiBJMThuTXV0YXRlT3BDb2RlLlNISUZUX1BBUkVOVDtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBJMThORGVidWdJdGVtKG9wQ29kZSwgX19sVmlldywgZGVzdGluYXRpb25Ob2RlSW5kZXgsICdBcHBlbmRDaGlsZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBJMThuTXV0YXRlT3BDb2RlLlNlbGVjdDpcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJbmRleCA9IG9wQ29kZSA+Pj4gSTE4bk11dGF0ZU9wQ29kZS5TSElGVF9SRUY7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgSTE4TkRlYnVnSXRlbShvcENvZGUsIF9fbFZpZXcsIG5vZGVJbmRleCwgJ1NlbGVjdCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBJMThuTXV0YXRlT3BDb2RlLkVsZW1lbnRFbmQ6XG4gICAgICAgICAgICBsZXQgZWxlbWVudEluZGV4ID0gb3BDb2RlID4+PiBJMThuTXV0YXRlT3BDb2RlLlNISUZUX1JFRjtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBJMThORGVidWdJdGVtKG9wQ29kZSwgX19sVmlldywgZWxlbWVudEluZGV4LCAnRWxlbWVudEVuZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBJMThuTXV0YXRlT3BDb2RlLkF0dHI6XG4gICAgICAgICAgICBlbGVtZW50SW5kZXggPSBvcENvZGUgPj4+IEkxOG5NdXRhdGVPcENvZGUuU0hJRlRfUkVGO1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEkxOE5EZWJ1Z0l0ZW0ob3BDb2RlLCBfX2xWaWV3LCBlbGVtZW50SW5kZXgsICdBdHRyJyk7XG4gICAgICAgICAgICByZXN1bHRbJ2F0dHJOYW1lJ10gPSBfX3Jhd19vcENvZGVzWysraV07XG4gICAgICAgICAgICByZXN1bHRbJ2F0dHJWYWx1ZSddID0gX19yYXdfb3BDb2Rlc1srK2ldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgc3dpdGNoIChvcENvZGUpIHtcbiAgICAgICAgICBjYXNlIENPTU1FTlRfTUFSS0VSOlxuICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBfX3Jhd19vcENvZGU6IG9wQ29kZSxcbiAgICAgICAgICAgICAgdHlwZTogJ0NPTU1FTlRfTUFSS0VSJyxcbiAgICAgICAgICAgICAgY29tbWVudFZhbHVlOiBfX3Jhd19vcENvZGVzWysraV0sXG4gICAgICAgICAgICAgIG5vZGVJbmRleDogX19yYXdfb3BDb2Rlc1srK2ldLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRUxFTUVOVF9NQVJLRVI6XG4gICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgIF9fcmF3X29wQ29kZTogb3BDb2RlLFxuICAgICAgICAgICAgICB0eXBlOiAnRUxFTUVOVF9NQVJLRVInLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBfX3Jhd19vcENvZGU6IG9wQ29kZSxcbiAgICAgICAgICB0eXBlOiAnVW5rbm93biBPcCBDb2RlJyxcbiAgICAgICAgICBjb2RlOiBvcENvZGUsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJMThuVXBkYXRlT3BDb2Rlc0RlYnVnIGltcGxlbWVudHMgSTE4bk9wQ29kZXNEZWJ1ZyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBfX3Jhd19vcENvZGVzOiBJMThuVXBkYXRlT3BDb2RlcywgcHJpdmF0ZSByZWFkb25seSBpY3VzOiBUSWN1W118bnVsbCxcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgX19sVmlldzogTFZpZXcpIHt9XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBvcGVyYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgaG93IHRoZSBPcENvZGVzIHdpbGwgYWN0IG9uIHRoZSB2aWV3LlxuICAgKi9cbiAgZ2V0IG9wZXJhdGlvbnMoKSB7XG4gICAgY29uc3Qge19fbFZpZXcsIF9fcmF3X29wQ29kZXMsIGljdXN9ID0gdGhpcztcbiAgICBjb25zdCByZXN1bHRzOiBhbnlbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfX3Jhd19vcENvZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBiaXQgY29kZSB0byBjaGVjayBpZiB3ZSBzaG91bGQgYXBwbHkgdGhlIG5leHQgdXBkYXRlXG4gICAgICBjb25zdCBjaGVja0JpdCA9IF9fcmF3X29wQ29kZXNbaV0gYXMgbnVtYmVyO1xuICAgICAgLy8gTnVtYmVyIG9mIG9wQ29kZXMgdG8gc2tpcCB1bnRpbCBuZXh0IHNldCBvZiB1cGRhdGUgY29kZXNcbiAgICAgIGNvbnN0IHNraXBDb2RlcyA9IF9fcmF3X29wQ29kZXNbKytpXSBhcyBudW1iZXI7XG4gICAgICBsZXQgdmFsdWUgPSAnJztcbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8PSAoaSArIHNraXBDb2Rlcyk7IGorKykge1xuICAgICAgICBjb25zdCBvcENvZGUgPSBfX3Jhd19vcENvZGVzW2pdO1xuICAgICAgICBpZiAodHlwZW9mIG9wQ29kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YWx1ZSArPSBvcENvZGU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wQ29kZSA9PSAnbnVtYmVyJykge1xuICAgICAgICAgIGlmIChvcENvZGUgPCAwKSB7XG4gICAgICAgICAgICAvLyBJdCdzIGEgYmluZGluZyBpbmRleCB3aG9zZSB2YWx1ZSBpcyBuZWdhdGl2ZVxuICAgICAgICAgICAgLy8gV2UgY2Fubm90IGtub3cgdGhlIHZhbHVlIG9mIHRoZSBiaW5kaW5nIHNvIHdlIG9ubHkgc2hvdyB0aGUgaW5kZXhcbiAgICAgICAgICAgIHZhbHVlICs9IGDvv70key0gb3BDb2RlIC0gMX3vv71gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBub2RlSW5kZXggPSBvcENvZGUgPj4+IEkxOG5VcGRhdGVPcENvZGUuU0hJRlRfUkVGO1xuICAgICAgICAgICAgbGV0IHRJY3VJbmRleDogbnVtYmVyO1xuICAgICAgICAgICAgbGV0IHRJY3U6IFRJY3U7XG4gICAgICAgICAgICBzd2l0Y2ggKG9wQ29kZSAmIEkxOG5VcGRhdGVPcENvZGUuTUFTS19PUENPREUpIHtcbiAgICAgICAgICAgICAgY2FzZSBJMThuVXBkYXRlT3BDb2RlLkF0dHI6XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ck5hbWUgPSBfX3Jhd19vcENvZGVzWysral0gYXMgc3RyaW5nO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhbml0aXplRm4gPSBfX3Jhd19vcENvZGVzWysral07XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIF9fcmF3X29wQ29kZTogb3BDb2RlLFxuICAgICAgICAgICAgICAgICAgY2hlY2tCaXQsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnQXR0cicsXG4gICAgICAgICAgICAgICAgICBhdHRyVmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgYXR0ck5hbWUsXG4gICAgICAgICAgICAgICAgICBzYW5pdGl6ZUZuLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEkxOG5VcGRhdGVPcENvZGUuVGV4dDpcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgX19yYXdfb3BDb2RlOiBvcENvZGUsXG4gICAgICAgICAgICAgICAgICBjaGVja0JpdCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdUZXh0JyxcbiAgICAgICAgICAgICAgICAgIG5vZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEkxOG5VcGRhdGVPcENvZGUuSWN1U3dpdGNoOlxuICAgICAgICAgICAgICAgIHRJY3VJbmRleCA9IF9fcmF3X29wQ29kZXNbKytqXSBhcyBudW1iZXI7XG4gICAgICAgICAgICAgICAgdEljdSA9IGljdXMhW3RJY3VJbmRleF07XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBJMThORGVidWdJdGVtKG9wQ29kZSwgX19sVmlldywgbm9kZUluZGV4LCAnSWN1U3dpdGNoJyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0Wyd0SWN1SW5kZXgnXSA9IHRJY3VJbmRleDtcbiAgICAgICAgICAgICAgICByZXN1bHRbJ2NoZWNrQml0J10gPSBjaGVja0JpdDtcbiAgICAgICAgICAgICAgICByZXN1bHRbJ21haW5CaW5kaW5nJ10gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXN1bHRbJ3RJY3UnXSA9IHRJY3U7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgSTE4blVwZGF0ZU9wQ29kZS5JY3VVcGRhdGU6XG4gICAgICAgICAgICAgICAgdEljdUluZGV4ID0gX19yYXdfb3BDb2Rlc1srK2pdIGFzIG51bWJlcjtcbiAgICAgICAgICAgICAgICB0SWN1ID0gaWN1cyFbdEljdUluZGV4XTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgSTE4TkRlYnVnSXRlbShvcENvZGUsIF9fbFZpZXcsIG5vZGVJbmRleCwgJ0ljdVVwZGF0ZScpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFsndEljdUluZGV4J10gPSB0SWN1SW5kZXg7XG4gICAgICAgICAgICAgICAgcmVzdWx0WydjaGVja0JpdCddID0gY2hlY2tCaXQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0Wyd0SWN1J10gPSB0SWN1O1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaSArPSBza2lwQ29kZXM7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSTE4bk9wQ29kZXNEZWJ1ZyB7XG4gIG9wZXJhdGlvbnM6IGFueVtdO1xufVxuIl19