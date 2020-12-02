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
var NG_DEV_MODE = ((typeof ngDevMode === 'undefined' || !!ngDevMode) && initNgDevMode());
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
var LVIEW_COMPONENT_CACHE;
var LVIEW_EMBEDDED_CACHE;
var LVIEW_ROOT;
/**
 * This function clones a blueprint and creates LView.
 *
 * Simple slice will keep the same type, and we need it to be LView
 */
export function cloneToLViewFromTViewBlueprint(tView) {
    var debugTView = tView;
    var lView = getLViewToClone(debugTView.type, tView.template && tView.template.name);
    return lView.concat(tView.blueprint);
}
function getLViewToClone(type, name) {
    switch (type) {
        case 0 /* Root */:
            if (LVIEW_ROOT === undefined)
                LVIEW_ROOT = new (createNamedArrayType('LRootView'))();
            return LVIEW_ROOT;
        case 1 /* Component */:
            if (LVIEW_COMPONENT_CACHE === undefined)
                LVIEW_COMPONENT_CACHE = new Map();
            var componentArray = LVIEW_COMPONENT_CACHE.get(name);
            if (componentArray === undefined) {
                componentArray = new (createNamedArrayType('LComponentView' + nameSuffix(name)))();
                LVIEW_COMPONENT_CACHE.set(name, componentArray);
            }
            return componentArray;
        case 2 /* Embedded */:
            if (LVIEW_EMBEDDED_CACHE === undefined)
                LVIEW_EMBEDDED_CACHE = new Map();
            var embeddedArray = LVIEW_EMBEDDED_CACHE.get(name);
            if (embeddedArray === undefined) {
                embeddedArray = new (createNamedArrayType('LEmbeddedView' + nameSuffix(name)))();
                LVIEW_EMBEDDED_CACHE.set(name, embeddedArray);
            }
            return embeddedArray;
    }
    throw new Error('unreachable code');
}
function nameSuffix(text) {
    if (text == null)
        return '';
    var index = text.lastIndexOf('_Template');
    return '_' + (index === -1 ? text : text.substr(0, index));
}
/**
 * This class is a debug version of Object literal so that we can have constructor name show up
 * in
 * debug tools in ngDevMode.
 */
export var TViewConstructor = /** @class */ (function () {
    function TView(type, //
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
    Object.defineProperty(TView.prototype, "template_", {
        get: function () {
            var buf = [];
            processTNodeChildren(this.firstChild, buf);
            return buf.join('');
        },
        enumerable: true,
        configurable: true
    });
    return TView;
}());
var TNode = /** @class */ (function () {
    function TNode(tView_, //
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
    Object.defineProperty(TNode.prototype, "type_", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNode.prototype, "flags_", {
        get: function () {
            var flags = [];
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNode.prototype, "template_", {
        get: function () {
            var buf = [];
            buf.push('<', this.tagName || this.type_);
            if (this.attrs) {
                for (var i = 0; i < this.attrs.length;) {
                    var attrName = this.attrs[i++];
                    if (typeof attrName == 'number') {
                        break;
                    }
                    var attrValue = this.attrs[i++];
                    buf.push(' ', attrName, '="', attrValue, '"');
                }
            }
            buf.push('>');
            processTNodeChildren(this.child, buf);
            buf.push('</', this.tagName || this.type_, '>');
            return buf.join('');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNode.prototype, "styleBindings_", {
        get: function () {
            return toDebugStyleBinding(this, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNode.prototype, "classBindings_", {
        get: function () {
            return toDebugStyleBinding(this, true);
        },
        enumerable: true,
        configurable: true
    });
    return TNode;
}());
export var TNodeDebug = TNode;
function toDebugStyleBinding(tNode, isClassBased) {
    var tData = tNode.tView_.data;
    var bindings = [];
    var range = isClassBased ? tNode.classBindings : tNode.styleBindings;
    var prev = getTStylingRangePrev(range);
    var next = getTStylingRangeNext(range);
    var isTemplate = next !== 0;
    var cursor = isTemplate ? next : prev;
    while (cursor !== 0) {
        var itemKey = tData[cursor];
        var itemRange = tData[cursor + 1];
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
function processTNodeChildren(tNode, buf) {
    while (tNode) {
        buf.push(tNode.template_);
        tNode = tNode.next;
    }
}
var TViewData = NG_DEV_MODE && createNamedArrayType('TViewData') || null;
var TVIEWDATA_EMPTY; // can't initialize here or it will not be tree shaken, because
// `LView` constructor could have side-effects.
/**
 * This function clones a blueprint and creates TData.
 *
 * Simple slice will keep the same type, and we need it to be TData
 */
export function cloneToTViewData(list) {
    if (TVIEWDATA_EMPTY === undefined)
        TVIEWDATA_EMPTY = new TViewData();
    return TVIEWDATA_EMPTY.concat(list);
}
export var LViewBlueprint = NG_DEV_MODE && createNamedArrayType('LViewBlueprint') || null;
export var MatchesArray = NG_DEV_MODE && createNamedArrayType('MatchesArray') || null;
export var TViewComponents = NG_DEV_MODE && createNamedArrayType('TViewComponents') || null;
export var TNodeLocalNames = NG_DEV_MODE && createNamedArrayType('TNodeLocalNames') || null;
export var TNodeInitialInputs = NG_DEV_MODE && createNamedArrayType('TNodeInitialInputs') || null;
export var TNodeInitialData = NG_DEV_MODE && createNamedArrayType('TNodeInitialData') || null;
export var LCleanup = NG_DEV_MODE && createNamedArrayType('LCleanup') || null;
export var TCleanup = NG_DEV_MODE && createNamedArrayType('TCleanup') || null;
export function attachLViewDebug(lView) {
    attachDebugObject(lView, new LViewDebug(lView));
}
export function attachLContainerDebug(lContainer) {
    attachDebugObject(lContainer, new LContainerDebug(lContainer));
}
export function toDebug(obj) {
    if (obj) {
        var debug = obj.debug;
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
 * @param value possibly wrapped native DOM node.
 * @param includeChildren If `true` then the serialized HTML form will include child elements
 * (same
 * as `outerHTML`). If `false` then the serialized HTML form will only contain the element
 * itself
 * (will not serialize child elements).
 */
function toHtml(value, includeChildren) {
    if (includeChildren === void 0) { includeChildren = false; }
    var node = unwrapRNode(value);
    if (node) {
        var isTextNode = node.nodeType === Node.TEXT_NODE;
        var outerHTML = (isTextNode ? node.textContent : node.outerHTML) || '';
        if (includeChildren || isTextNode) {
            return outerHTML;
        }
        else {
            var innerHTML = '>' + node.innerHTML + '<';
            return (outerHTML.split(innerHTML)[0]) + '>';
        }
    }
    else {
        return null;
    }
}
var LViewDebug = /** @class */ (function () {
    function LViewDebug(_raw_lView) {
        this._raw_lView = _raw_lView;
    }
    Object.defineProperty(LViewDebug.prototype, "flags", {
        /**
         * Flags associated with the `LView` unpacked into a more readable state.
         */
        get: function () {
            var flags = this._raw_lView[FLAGS];
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "parent", {
        get: function () {
            return toDebug(this._raw_lView[PARENT]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "host", {
        get: function () {
            return toHtml(this._raw_lView[HOST], true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "html", {
        get: function () {
            return (this.nodes || []).map(function (node) { return toHtml(node.native, true); }).join('');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "context", {
        get: function () {
            return this._raw_lView[CONTEXT];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "nodes", {
        /**
         * The tree of nodes associated with the current `LView`. The nodes have been normalized into
         * a
         * tree structure with relevant details pulled out for readability.
         */
        get: function () {
            var lView = this._raw_lView;
            var tNode = lView[TVIEW].firstChild;
            return toDebugNodes(tNode, lView);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "tView", {
        get: function () {
            return this._raw_lView[TVIEW];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "cleanup", {
        get: function () {
            return this._raw_lView[CLEANUP];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "injector", {
        get: function () {
            return this._raw_lView[INJECTOR];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "rendererFactory", {
        get: function () {
            return this._raw_lView[RENDERER_FACTORY];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "renderer", {
        get: function () {
            return this._raw_lView[RENDERER];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "sanitizer", {
        get: function () {
            return this._raw_lView[SANITIZER];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "childHead", {
        get: function () {
            return toDebug(this._raw_lView[CHILD_HEAD]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "next", {
        get: function () {
            return toDebug(this._raw_lView[NEXT]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "childTail", {
        get: function () {
            return toDebug(this._raw_lView[CHILD_TAIL]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "declarationView", {
        get: function () {
            return toDebug(this._raw_lView[DECLARATION_VIEW]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "queries", {
        get: function () {
            return this._raw_lView[QUERIES];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "tHost", {
        get: function () {
            return this._raw_lView[T_HOST];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LViewDebug.prototype, "childViews", {
        /**
         * Normalized view of child views (and containers) attached at this location.
         */
        get: function () {
            var childViews = [];
            var child = this.childHead;
            while (child) {
                childViews.push(child);
                child = child.next;
            }
            return childViews;
        },
        enumerable: true,
        configurable: true
    });
    return LViewDebug;
}());
export { LViewDebug };
/**
 * Turns a flat list of nodes into a tree by walking the associated `TNode` tree.
 *
 * @param tNode
 * @param lView
 */
export function toDebugNodes(tNode, lView) {
    if (tNode) {
        var debugNodes = [];
        var tNodeCursor = tNode;
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
export function buildDebugNode(tNode, lView, nodeIndex) {
    var rawValue = lView[nodeIndex];
    var native = unwrapRNode(rawValue);
    var componentLViewDebug = toDebug(readLViewValue(rawValue));
    return {
        html: toHtml(native),
        native: native,
        nodes: toDebugNodes(tNode.child, lView),
        component: componentLViewDebug,
    };
}
var LContainerDebug = /** @class */ (function () {
    function LContainerDebug(_raw_lContainer) {
        this._raw_lContainer = _raw_lContainer;
    }
    Object.defineProperty(LContainerDebug.prototype, "hasTransplantedViews", {
        get: function () {
            return this._raw_lContainer[HAS_TRANSPLANTED_VIEWS];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LContainerDebug.prototype, "views", {
        get: function () {
            return this._raw_lContainer.slice(CONTAINER_HEADER_OFFSET)
                .map(toDebug);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LContainerDebug.prototype, "parent", {
        get: function () {
            return toDebug(this._raw_lContainer[PARENT]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LContainerDebug.prototype, "movedViews", {
        get: function () {
            return this._raw_lContainer[MOVED_VIEWS];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LContainerDebug.prototype, "host", {
        get: function () {
            return this._raw_lContainer[HOST];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LContainerDebug.prototype, "native", {
        get: function () {
            return this._raw_lContainer[NATIVE];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LContainerDebug.prototype, "next", {
        get: function () {
            return toDebug(this._raw_lContainer[NEXT]);
        },
        enumerable: true,
        configurable: true
    });
    return LContainerDebug;
}());
export { LContainerDebug };
/**
 * Return an `LView` value if found.
 *
 * @param value `LView` if any
 */
export function readLViewValue(value) {
    while (Array.isArray(value)) {
        // This check is not quite right, as it does not take into account `StylingContext`
        // This is why it is in debug, not in util.ts
        if (value.length >= HEADER_OFFSET - 1)
            return value;
        value = value[HOST];
    }
    return null;
}
var I18NDebugItem = /** @class */ (function () {
    function I18NDebugItem(__raw_opCode, _lView, nodeIndex, type) {
        this.__raw_opCode = __raw_opCode;
        this._lView = _lView;
        this.nodeIndex = nodeIndex;
        this.type = type;
    }
    Object.defineProperty(I18NDebugItem.prototype, "tNode", {
        get: function () {
            return getTNode(this._lView[TVIEW], this.nodeIndex);
        },
        enumerable: true,
        configurable: true
    });
    return I18NDebugItem;
}());
export { I18NDebugItem };
/**
 * Turns a list of "Create" & "Update" OpCodes into a human-readable list of operations for
 * debugging purposes.
 * @param mutateOpCodes mutation opCodes to read
 * @param updateOpCodes update opCodes to read
 * @param icus list of ICU expressions
 * @param lView The view the opCodes are acting on
 */
export function attachI18nOpCodesDebug(mutateOpCodes, updateOpCodes, icus, lView) {
    attachDebugObject(mutateOpCodes, new I18nMutateOpCodesDebug(mutateOpCodes, lView));
    attachDebugObject(updateOpCodes, new I18nUpdateOpCodesDebug(updateOpCodes, icus, lView));
    if (icus) {
        icus.forEach(function (icu) {
            icu.create.forEach(function (icuCase) {
                attachDebugObject(icuCase, new I18nMutateOpCodesDebug(icuCase, lView));
            });
            icu.update.forEach(function (icuCase) {
                attachDebugObject(icuCase, new I18nUpdateOpCodesDebug(icuCase, icus, lView));
            });
        });
    }
}
var I18nMutateOpCodesDebug = /** @class */ (function () {
    function I18nMutateOpCodesDebug(__raw_opCodes, __lView) {
        this.__raw_opCodes = __raw_opCodes;
        this.__lView = __lView;
    }
    Object.defineProperty(I18nMutateOpCodesDebug.prototype, "operations", {
        /**
         * A list of operation information about how the OpCodes will act on the view.
         */
        get: function () {
            var _a = this, __lView = _a.__lView, __raw_opCodes = _a.__raw_opCodes;
            var results = [];
            for (var i = 0; i < __raw_opCodes.length; i++) {
                var opCode = __raw_opCodes[i];
                var result = void 0;
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
                            var destinationNodeIndex = opCode >>> 17 /* SHIFT_PARENT */;
                            result = new I18NDebugItem(opCode, __lView, destinationNodeIndex, 'AppendChild');
                            break;
                        case 0 /* Select */:
                            var nodeIndex = opCode >>> 3 /* SHIFT_REF */;
                            result = new I18NDebugItem(opCode, __lView, nodeIndex, 'Select');
                            break;
                        case 5 /* ElementEnd */:
                            var elementIndex = opCode >>> 3 /* SHIFT_REF */;
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
        },
        enumerable: true,
        configurable: true
    });
    return I18nMutateOpCodesDebug;
}());
export { I18nMutateOpCodesDebug };
var I18nUpdateOpCodesDebug = /** @class */ (function () {
    function I18nUpdateOpCodesDebug(__raw_opCodes, icus, __lView) {
        this.__raw_opCodes = __raw_opCodes;
        this.icus = icus;
        this.__lView = __lView;
    }
    Object.defineProperty(I18nUpdateOpCodesDebug.prototype, "operations", {
        /**
         * A list of operation information about how the OpCodes will act on the view.
         */
        get: function () {
            var _a = this, __lView = _a.__lView, __raw_opCodes = _a.__raw_opCodes, icus = _a.icus;
            var results = [];
            for (var i = 0; i < __raw_opCodes.length; i++) {
                // bit code to check if we should apply the next update
                var checkBit = __raw_opCodes[i];
                // Number of opCodes to skip until next set of update codes
                var skipCodes = __raw_opCodes[++i];
                var value = '';
                for (var j = i + 1; j <= (i + skipCodes); j++) {
                    var opCode = __raw_opCodes[j];
                    if (typeof opCode === 'string') {
                        value += opCode;
                    }
                    else if (typeof opCode == 'number') {
                        if (opCode < 0) {
                            // It's a binding index whose value is negative
                            // We cannot know the value of the binding so we only show the index
                            value += "\uFFFD" + (-opCode - 1) + "\uFFFD";
                        }
                        else {
                            var nodeIndex = opCode >>> 2 /* SHIFT_REF */;
                            var tIcuIndex = void 0;
                            var tIcu = void 0;
                            switch (opCode & 3 /* MASK_OPCODE */) {
                                case 1 /* Attr */:
                                    var attrName = __raw_opCodes[++j];
                                    var sanitizeFn = __raw_opCodes[++j];
                                    results.push({
                                        __raw_opCode: opCode,
                                        checkBit: checkBit,
                                        type: 'Attr',
                                        attrValue: value,
                                        attrName: attrName,
                                        sanitizeFn: sanitizeFn,
                                    });
                                    break;
                                case 0 /* Text */:
                                    results.push({
                                        __raw_opCode: opCode,
                                        checkBit: checkBit,
                                        type: 'Text',
                                        nodeIndex: nodeIndex,
                                        text: value,
                                    });
                                    break;
                                case 2 /* IcuSwitch */:
                                    tIcuIndex = __raw_opCodes[++j];
                                    tIcu = icus[tIcuIndex];
                                    var result = new I18NDebugItem(opCode, __lView, nodeIndex, 'IcuSwitch');
                                    result['tIcuIndex'] = tIcuIndex;
                                    result['checkBit'] = checkBit;
                                    result['mainBinding'] = value;
                                    result['tIcu'] = tIcu;
                                    results.push(result);
                                    break;
                                case 3 /* IcuUpdate */:
                                    tIcuIndex = __raw_opCodes[++j];
                                    tIcu = icus[tIcuIndex];
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
        },
        enumerable: true,
        configurable: true
    });
    return I18nUpdateOpCodesDebug;
}());
export { I18nUpdateOpCodesDebug };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHZpZXdfZGVidWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2luc3RydWN0aW9ucy9sdmlld19kZWJ1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFNSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBYyxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFekgsT0FBTyxFQUFDLGNBQWMsRUFBRSxjQUFjLEVBQWlGLE1BQU0sb0JBQW9CLENBQUM7QUFLbEosT0FBTyxFQUFDLG9CQUFvQixFQUFFLDZCQUE2QixFQUFFLG9CQUFvQixFQUFFLDZCQUE2QixFQUE2QixNQUFNLHVCQUF1QixDQUFDO0FBQzNLLE9BQU8sRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQXdDLEtBQUssRUFBRSxhQUFhLEVBQVksSUFBSSxFQUFFLFFBQVEsRUFBcUIsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVMsS0FBSyxFQUFvQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlULE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFekQsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxD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TSxHQUFHLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO29DQUN4RSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsU0FBUyxDQUFDO29DQUNoQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO29DQUM5QixNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO29DQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO29DQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29DQUNyQixNQUFNO2dDQUNSO29DQUNFLFNBQVMsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQVcsQ0FBQztvQ0FDekMsSUFBSSxHQUFHLElBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztvQ0FDeEIsTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO29DQUNwRSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsU0FBUyxDQUFDO29DQUNoQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO29DQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO29DQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29DQUNyQixNQUFNOzZCQUNUO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNELENBQUMsSUFBSSxTQUFTLENBQUM7YUFDaEI7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWhGRCxJQWdGQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGVNYXJrZXIsIENvbXBvbmVudFRlbXBsYXRlfSBmcm9tICcuLic7XG5pbXBvcnQge0luamVjdG9yLCBTY2hlbWFNZXRhZGF0YX0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQge1Nhbml0aXplcn0gZnJvbSAnLi4vLi4vc2FuaXRpemF0aW9uL3Nhbml0aXplcic7XG5pbXBvcnQge0tleVZhbHVlQXJyYXl9IGZyb20gJy4uLy4uL3V0aWwvYXJyYXlfdXRpbHMnO1xuaW1wb3J0IHthc3NlcnREZWZpbmVkfSBmcm9tICcuLi8uLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge2NyZWF0ZU5hbWVkQXJyYXlUeXBlfSBmcm9tICcuLi8uLi91dGlsL25hbWVkX2FycmF5X3R5cGUnO1xuaW1wb3J0IHtpbml0TmdEZXZNb2RlfSBmcm9tICcuLi8uLi91dGlsL25nX2Rldl9tb2RlJztcbmltcG9ydCB7Q09OVEFJTkVSX0hFQURFUl9PRkZTRVQsIEhBU19UUkFOU1BMQU5URURfVklFV1MsIExDb250YWluZXIsIE1PVkVEX1ZJRVdTLCBOQVRJVkV9IGZyb20gJy4uL2ludGVyZmFjZXMvY29udGFpbmVyJztcbmltcG9ydCB7RGlyZWN0aXZlRGVmTGlzdCwgUGlwZURlZkxpc3QsIFZpZXdRdWVyaWVzRnVuY3Rpb259IGZyb20gJy4uL2ludGVyZmFjZXMvZGVmaW5pdGlvbic7XG5pbXBvcnQge0NPTU1FTlRfTUFSS0VSLCBFTEVNRU5UX01BUktFUiwgSTE4bk11dGF0ZU9wQ29kZSwgSTE4bk11dGF0ZU9wQ29kZXMsIEkxOG5VcGRhdGVPcENvZGUsIEkxOG5VcGRhdGVPcENvZGVzLCBUSWN1fSBmcm9tICcuLi9pbnRlcmZhY2VzL2kxOG4nO1xuaW1wb3J0IHtQcm9wZXJ0eUFsaWFzZXMsIFRDb25zdGFudHMsIFRDb250YWluZXJOb2RlLCBURWxlbWVudE5vZGUsIFROb2RlIGFzIElUTm9kZSwgVE5vZGVGbGFncywgVE5vZGVQcm92aWRlckluZGV4ZXMsIFROb2RlVHlwZSwgVFZpZXdOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtTZWxlY3RvckZsYWdzfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Byb2plY3Rpb24nO1xuaW1wb3J0IHtMUXVlcmllcywgVFF1ZXJpZXN9IGZyb20gJy4uL2ludGVyZmFjZXMvcXVlcnknO1xuaW1wb3J0IHtSQ29tbWVudCwgUkVsZW1lbnQsIFJlbmRlcmVyMywgUmVuZGVyZXJGYWN0b3J5MywgUk5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvcmVuZGVyZXInO1xuaW1wb3J0IHtnZXRUU3R5bGluZ1JhbmdlTmV4dCwgZ2V0VFN0eWxpbmdSYW5nZU5leHREdXBsaWNhdGUsIGdldFRTdHlsaW5nUmFuZ2VQcmV2LCBnZXRUU3R5bGluZ1JhbmdlUHJldkR1cGxpY2F0ZSwgVFN0eWxpbmdLZXksIFRTdHlsaW5nUmFuZ2V9IGZyb20gJy4uL2ludGVyZmFjZXMvc3R5bGluZyc7XG5pbXBvcnQge0NISUxEX0hFQUQsIENISUxEX1RBSUwsIENMRUFOVVAsIENPTlRFWFQsIERFQ0xBUkFUSU9OX1ZJRVcsIERlc3Ryb3lIb29rRGF0YSwgRXhwYW5kb0luc3RydWN0aW9ucywgRkxBR1MsIEhFQURFUl9PRkZTRVQsIEhvb2tEYXRhLCBIT1NULCBJTkpFQ1RPUiwgTFZpZXcsIExWaWV3RmxhZ3MsIE5FWFQsIFBBUkVOVCwgUVVFUklFUywgUkVOREVSRVIsIFJFTkRFUkVSX0ZBQ1RPUlksIFNBTklUSVpFUiwgVF9IT1NULCBURGF0YSwgVFZJRVcsIFRWaWV3IGFzIElUVmlldywgVFZpZXcsIFRWaWV3VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7YXR0YWNoRGVidWdPYmplY3R9IGZyb20gJy4uL3V0aWwvZGVidWdfdXRpbHMnO1xuaW1wb3J0IHtnZXRUTm9kZSwgdW53cmFwUk5vZGV9IGZyb20gJy4uL3V0aWwvdmlld191dGlscyc7XG5cbmNvbnN0IE5HX0RFVl9NT0RFID0gKCh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCAhIW5nRGV2TW9kZSkgJiYgaW5pdE5nRGV2TW9kZSgpKTtcblxuLypcbiAqIFRoaXMgZmlsZSBjb250YWlucyBjb25kaXRpb25hbGx5IGF0dGFjaGVkIGNsYXNzZXMgd2hpY2ggcHJvdmlkZSBodW1hbiByZWFkYWJsZSAoZGVidWcpIGxldmVsXG4gKiBpbmZvcm1hdGlvbiBmb3IgYExWaWV3YCwgYExDb250YWluZXJgIGFuZCBvdGhlciBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZXMuIFRoZXNlIGRhdGEgc3RydWN0dXJlc1xuICogYXJlIHN0b3JlZCBpbnRlcm5hbGx5IGFzIGFycmF5IHdoaWNoIG1ha2VzIGl0IHZlcnkgZGlmZmljdWx0IGR1cmluZyBkZWJ1Z2dpbmcgdG8gcmVhc29uIGFib3V0IHRoZVxuICogY3VycmVudCBzdGF0ZSBvZiB0aGUgc3lzdGVtLlxuICpcbiAqIFBhdGNoaW5nIHRoZSBhcnJheSB3aXRoIGV4dHJhIHByb3BlcnR5IGRvZXMgY2hhbmdlIHRoZSBhcnJheSdzIGhpZGRlbiBjbGFzcycgYnV0IGl0IGRvZXMgbm90XG4gKiBjaGFuZ2UgdGhlIGNvc3Qgb2YgYWNjZXNzLCB0aGVyZWZvcmUgdGhpcyBwYXRjaGluZyBzaG91bGQgbm90IGhhdmUgc2lnbmlmaWNhbnQgaWYgYW55IGltcGFjdCBpblxuICogYG5nRGV2TW9kZWAgbW9kZS4gKHNlZTogaHR0cHM6Ly9qc3BlcmYuY29tL2FycmF5LXZzLW1vbmtleS1wYXRjaC1hcnJheSlcbiAqXG4gKiBTbyBpbnN0ZWFkIG9mIHNlZWluZzpcbiAqIGBgYFxuICogQXJyYXkoMzApIFtPYmplY3QsIDY1OSwgbnVsbCwg4oCmXVxuICogYGBgXG4gKlxuICogWW91IGdldCB0byBzZWU6XG4gKiBgYGBcbiAqIExWaWV3RGVidWcge1xuICogICB2aWV3czogWy4uLl0sXG4gKiAgIGZsYWdzOiB7YXR0YWNoZWQ6IHRydWUsIC4uLn1cbiAqICAgbm9kZXM6IFtcbiAqICAgICB7aHRtbDogJzxkaXYgaWQ9XCIxMjNcIj4nLCAuLi4sIG5vZGVzOiBbXG4gKiAgICAgICB7aHRtbDogJzxzcGFuPicsIC4uLiwgbm9kZXM6IG51bGx9XG4gKiAgICAgXX1cbiAqICAgXVxuICogfVxuICogYGBgXG4gKi9cblxubGV0IExWSUVXX0NPTVBPTkVOVF9DQUNIRSE6IE1hcDxzdHJpbmd8bnVsbCwgQXJyYXk8YW55Pj47XG5sZXQgTFZJRVdfRU1CRURERURfQ0FDSEUhOiBNYXA8c3RyaW5nfG51bGwsIEFycmF5PGFueT4+O1xubGV0IExWSUVXX1JPT1QhOiBBcnJheTxhbnk+O1xuXG5pbnRlcmZhY2UgVFZpZXdEZWJ1ZyBleHRlbmRzIElUVmlldyB7XG4gIHR5cGU6IFRWaWV3VHlwZTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNsb25lcyBhIGJsdWVwcmludCBhbmQgY3JlYXRlcyBMVmlldy5cbiAqXG4gKiBTaW1wbGUgc2xpY2Ugd2lsbCBrZWVwIHRoZSBzYW1lIHR5cGUsIGFuZCB3ZSBuZWVkIGl0IHRvIGJlIExWaWV3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVRvTFZpZXdGcm9tVFZpZXdCbHVlcHJpbnQodFZpZXc6IFRWaWV3KTogTFZpZXcge1xuICBjb25zdCBkZWJ1Z1RWaWV3ID0gdFZpZXcgYXMgVFZpZXdEZWJ1ZztcbiAgY29uc3QgbFZpZXcgPSBnZXRMVmlld1RvQ2xvbmUoZGVidWdUVmlldy50eXBlLCB0Vmlldy50ZW1wbGF0ZSAmJiB0Vmlldy50ZW1wbGF0ZS5uYW1lKTtcbiAgcmV0dXJuIGxWaWV3LmNvbmNhdCh0Vmlldy5ibHVlcHJpbnQpIGFzIGFueTtcbn1cblxuZnVuY3Rpb24gZ2V0TFZpZXdUb0Nsb25lKHR5cGU6IFRWaWV3VHlwZSwgbmFtZTogc3RyaW5nfG51bGwpOiBBcnJheTxhbnk+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBUVmlld1R5cGUuUm9vdDpcbiAgICAgIGlmIChMVklFV19ST09UID09PSB1bmRlZmluZWQpIExWSUVXX1JPT1QgPSBuZXcgKGNyZWF0ZU5hbWVkQXJyYXlUeXBlKCdMUm9vdFZpZXcnKSkoKTtcbiAgICAgIHJldHVybiBMVklFV19ST09UO1xuICAgIGNhc2UgVFZpZXdUeXBlLkNvbXBvbmVudDpcbiAgICAgIGlmIChMVklFV19DT01QT05FTlRfQ0FDSEUgPT09IHVuZGVmaW5lZCkgTFZJRVdfQ09NUE9ORU5UX0NBQ0hFID0gbmV3IE1hcCgpO1xuICAgICAgbGV0IGNvbXBvbmVudEFycmF5ID0gTFZJRVdfQ09NUE9ORU5UX0NBQ0hFLmdldChuYW1lKTtcbiAgICAgIGlmIChjb21wb25lbnRBcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBvbmVudEFycmF5ID0gbmV3IChjcmVhdGVOYW1lZEFycmF5VHlwZSgnTENvbXBvbmVudFZpZXcnICsgbmFtZVN1ZmZpeChuYW1lKSkpKCk7XG4gICAgICAgIExWSUVXX0NPTVBPTkVOVF9DQUNIRS5zZXQobmFtZSwgY29tcG9uZW50QXJyYXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbXBvbmVudEFycmF5O1xuICAgIGNhc2UgVFZpZXdUeXBlLkVtYmVkZGVkOlxuICAgICAgaWYgKExWSUVXX0VNQkVEREVEX0NBQ0hFID09PSB1bmRlZmluZWQpIExWSUVXX0VNQkVEREVEX0NBQ0hFID0gbmV3IE1hcCgpO1xuICAgICAgbGV0IGVtYmVkZGVkQXJyYXkgPSBMVklFV19FTUJFRERFRF9DQUNIRS5nZXQobmFtZSk7XG4gICAgICBpZiAoZW1iZWRkZWRBcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVtYmVkZGVkQXJyYXkgPSBuZXcgKGNyZWF0ZU5hbWVkQXJyYXlUeXBlKCdMRW1iZWRkZWRWaWV3JyArIG5hbWVTdWZmaXgobmFtZSkpKSgpO1xuICAgICAgICBMVklFV19FTUJFRERFRF9DQUNIRS5zZXQobmFtZSwgZW1iZWRkZWRBcnJheSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1iZWRkZWRBcnJheTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVhY2hhYmxlIGNvZGUnKTtcbn1cblxuZnVuY3Rpb24gbmFtZVN1ZmZpeCh0ZXh0OiBzdHJpbmd8bnVsbHx1bmRlZmluZWQpOiBzdHJpbmcge1xuICBpZiAodGV4dCA9PSBudWxsKSByZXR1cm4gJyc7XG4gIGNvbnN0IGluZGV4ID0gdGV4dC5sYXN0SW5kZXhPZignX1RlbXBsYXRlJyk7XG4gIHJldHVybiAnXycgKyAoaW5kZXggPT09IC0xID8gdGV4dCA6IHRleHQuc3Vic3RyKDAsIGluZGV4KSk7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGRlYnVnIHZlcnNpb24gb2YgT2JqZWN0IGxpdGVyYWwgc28gdGhhdCB3ZSBjYW4gaGF2ZSBjb25zdHJ1Y3RvciBuYW1lIHNob3cgdXBcbiAqIGluXG4gKiBkZWJ1ZyB0b29scyBpbiBuZ0Rldk1vZGUuXG4gKi9cbmV4cG9ydCBjb25zdCBUVmlld0NvbnN0cnVjdG9yID0gY2xhc3MgVFZpZXcgaW1wbGVtZW50cyBJVFZpZXcge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyB0eXBlOiBUVmlld1R5cGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGlkOiBudW1iZXIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgYmx1ZXByaW50OiBMVmlldywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyB0ZW1wbGF0ZTogQ29tcG9uZW50VGVtcGxhdGU8e30+fG51bGwsICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHF1ZXJpZXM6IFRRdWVyaWVzfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgdmlld1F1ZXJ5OiBWaWV3UXVlcmllc0Z1bmN0aW9uPHt9PnxudWxsLCAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBub2RlOiBUVmlld05vZGV8VEVsZW1lbnROb2RlfG51bGwsICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGRhdGE6IFREYXRhLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgYmluZGluZ1N0YXJ0SW5kZXg6IG51bWJlciwgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBleHBhbmRvU3RhcnRJbmRleDogbnVtYmVyLCAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGV4cGFuZG9JbnN0cnVjdGlvbnM6IEV4cGFuZG9JbnN0cnVjdGlvbnN8bnVsbCwgIC8vXG4gICAgICBwdWJsaWMgZmlyc3RDcmVhdGVQYXNzOiBib29sZWFuLCAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBmaXJzdFVwZGF0ZVBhc3M6IGJvb2xlYW4sICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHN0YXRpY1ZpZXdRdWVyaWVzOiBib29sZWFuLCAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgc3RhdGljQ29udGVudFF1ZXJpZXM6IGJvb2xlYW4sICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBwcmVPcmRlckhvb2tzOiBIb29rRGF0YXxudWxsLCAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHByZU9yZGVyQ2hlY2tIb29rczogSG9va0RhdGF8bnVsbCwgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgY29udGVudEhvb2tzOiBIb29rRGF0YXxudWxsLCAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBjb250ZW50Q2hlY2tIb29rczogSG9va0RhdGF8bnVsbCwgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHZpZXdIb29rczogSG9va0RhdGF8bnVsbCwgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgdmlld0NoZWNrSG9va3M6IEhvb2tEYXRhfG51bGwsICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBkZXN0cm95SG9va3M6IERlc3Ryb3lIb29rRGF0YXxudWxsLCAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGNsZWFudXA6IGFueVtdfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgY29udGVudFF1ZXJpZXM6IG51bWJlcltdfG51bGwsICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBjb21wb25lbnRzOiBudW1iZXJbXXxudWxsLCAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGRpcmVjdGl2ZVJlZ2lzdHJ5OiBEaXJlY3RpdmVEZWZMaXN0fG51bGwsICAgICAgIC8vXG4gICAgICBwdWJsaWMgcGlwZVJlZ2lzdHJ5OiBQaXBlRGVmTGlzdHxudWxsLCAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBmaXJzdENoaWxkOiBJVE5vZGV8bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW118bnVsbCwgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgY29uc3RzOiBUQ29uc3RhbnRzfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBpbmNvbXBsZXRlRmlyc3RQYXNzOiBib29sZWFuICAgICAgICAgICAgICAgICAgICAvL1xuICApIHt9XG5cbiAgZ2V0IHRlbXBsYXRlXygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJ1Zjogc3RyaW5nW10gPSBbXTtcbiAgICBwcm9jZXNzVE5vZGVDaGlsZHJlbih0aGlzLmZpcnN0Q2hpbGQsIGJ1Zik7XG4gICAgcmV0dXJuIGJ1Zi5qb2luKCcnKTtcbiAgfVxufTtcblxuY2xhc3MgVE5vZGUgaW1wbGVtZW50cyBJVE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyB0Vmlld186IFRWaWV3LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHR5cGU6IFROb2RlVHlwZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgaW5kZXg6IG51bWJlciwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBpbmplY3RvckluZGV4OiBudW1iZXIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIGRpcmVjdGl2ZVN0YXJ0OiBudW1iZXIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgZGlyZWN0aXZlRW5kOiBudW1iZXIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBkaXJlY3RpdmVTdHlsaW5nTGFzdDogbnVtYmVyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHByb3BlcnR5QmluZGluZ3M6IG51bWJlcltdfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgZmxhZ3M6IFROb2RlRmxhZ3MsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBwcm92aWRlckluZGV4ZXM6IFROb2RlUHJvdmlkZXJJbmRleGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHRhZ05hbWU6IHN0cmluZ3xudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgYXR0cnM6IChzdHJpbmd8QXR0cmlidXRlTWFya2VyfChzdHJpbmd8U2VsZWN0b3JGbGFncylbXSlbXXxudWxsLCAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBtZXJnZWRBdHRyczogKHN0cmluZ3xBdHRyaWJ1dGVNYXJrZXJ8KHN0cmluZ3xTZWxlY3RvckZsYWdzKVtdKVtdfG51bGwsICAvL1xuICAgICAgcHVibGljIGxvY2FsTmFtZXM6IChzdHJpbmd8bnVtYmVyKVtdfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgaW5pdGlhbElucHV0czogKHN0cmluZ1tdfG51bGwpW118bnVsbHx1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBpbnB1dHM6IFByb3BlcnR5QWxpYXNlc3xudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIG91dHB1dHM6IFByb3BlcnR5QWxpYXNlc3xudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgdFZpZXdzOiBJVFZpZXd8SVRWaWV3W118bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBuZXh0OiBJVE5vZGV8bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHByb2plY3Rpb25OZXh0OiBJVE5vZGV8bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgY2hpbGQ6IElUTm9kZXxudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBwYXJlbnQ6IFRFbGVtZW50Tm9kZXxUQ29udGFpbmVyTm9kZXxudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHByb2plY3Rpb246IG51bWJlcnwoSVROb2RlfFJOb2RlW10pW118bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgc3R5bGVzOiBzdHJpbmd8bnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBzdHlsZXNXaXRob3V0SG9zdDogc3RyaW5nfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHJlc2lkdWFsU3R5bGVzOiBLZXlWYWx1ZUFycmF5PGFueT58dW5kZWZpbmVkfG51bGwsICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgY2xhc3Nlczogc3RyaW5nfG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBjbGFzc2VzV2l0aG91dEhvc3Q6IHN0cmluZ3xudWxsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgcHVibGljIHJlc2lkdWFsQ2xhc3NlczogS2V5VmFsdWVBcnJheTxhbnk+fHVuZGVmaW5lZHxudWxsLCAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICBwdWJsaWMgY2xhc3NCaW5kaW5nczogVFN0eWxpbmdSYW5nZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgIHB1YmxpYyBzdHlsZUJpbmRpbmdzOiBUU3R5bGluZ1JhbmdlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICApIHt9XG5cbiAgZ2V0IHR5cGVfKCk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgVE5vZGVUeXBlLkNvbnRhaW5lcjpcbiAgICAgICAgcmV0dXJuICdUTm9kZVR5cGUuQ29udGFpbmVyJztcbiAgICAgIGNhc2UgVE5vZGVUeXBlLkVsZW1lbnQ6XG4gICAgICAgIHJldHVybiAnVE5vZGVUeXBlLkVsZW1lbnQnO1xuICAgICAgY2FzZSBUTm9kZVR5cGUuRWxlbWVudENvbnRhaW5lcjpcbiAgICAgICAgcmV0dXJuICdUTm9kZVR5cGUuRWxlbWVudENvbnRhaW5lcic7XG4gICAgICBjYXNlIFROb2RlVHlwZS5JY3VDb250YWluZXI6XG4gICAgICAgIHJldHVybiAnVE5vZGVUeXBlLkljdUNvbnRhaW5lcic7XG4gICAgICBjYXNlIFROb2RlVHlwZS5Qcm9qZWN0aW9uOlxuICAgICAgICByZXR1cm4gJ1ROb2RlVHlwZS5Qcm9qZWN0aW9uJztcbiAgICAgIGNhc2UgVE5vZGVUeXBlLlZpZXc6XG4gICAgICAgIHJldHVybiAnVE5vZGVUeXBlLlZpZXcnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdUTm9kZVR5cGUuPz8/JztcbiAgICB9XG4gIH1cblxuICBnZXQgZmxhZ3NfKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZmxhZ3M6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKHRoaXMuZmxhZ3MgJiBUTm9kZUZsYWdzLmhhc0NsYXNzSW5wdXQpIGZsYWdzLnB1c2goJ1ROb2RlRmxhZ3MuaGFzQ2xhc3NJbnB1dCcpO1xuICAgIGlmICh0aGlzLmZsYWdzICYgVE5vZGVGbGFncy5oYXNDb250ZW50UXVlcnkpIGZsYWdzLnB1c2goJ1ROb2RlRmxhZ3MuaGFzQ29udGVudFF1ZXJ5Jyk7XG4gICAgaWYgKHRoaXMuZmxhZ3MgJiBUTm9kZUZsYWdzLmhhc1N0eWxlSW5wdXQpIGZsYWdzLnB1c2goJ1ROb2RlRmxhZ3MuaGFzU3R5bGVJbnB1dCcpO1xuICAgIGlmICh0aGlzLmZsYWdzICYgVE5vZGVGbGFncy5oYXNIb3N0QmluZGluZ3MpIGZsYWdzLnB1c2goJ1ROb2RlRmxhZ3MuaGFzSG9zdEJpbmRpbmdzJyk7XG4gICAgaWYgKHRoaXMuZmxhZ3MgJiBUTm9kZUZsYWdzLmlzQ29tcG9uZW50SG9zdCkgZmxhZ3MucHVzaCgnVE5vZGVGbGFncy5pc0NvbXBvbmVudEhvc3QnKTtcbiAgICBpZiAodGhpcy5mbGFncyAmIFROb2RlRmxhZ3MuaXNEaXJlY3RpdmVIb3N0KSBmbGFncy5wdXNoKCdUTm9kZUZsYWdzLmlzRGlyZWN0aXZlSG9zdCcpO1xuICAgIGlmICh0aGlzLmZsYWdzICYgVE5vZGVGbGFncy5pc0RldGFjaGVkKSBmbGFncy5wdXNoKCdUTm9kZUZsYWdzLmlzRGV0YWNoZWQnKTtcbiAgICBpZiAodGhpcy5mbGFncyAmIFROb2RlRmxhZ3MuaXNQcm9qZWN0ZWQpIGZsYWdzLnB1c2goJ1ROb2RlRmxhZ3MuaXNQcm9qZWN0ZWQnKTtcbiAgICByZXR1cm4gZmxhZ3Muam9pbignfCcpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlXygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJ1Zjogc3RyaW5nW10gPSBbXTtcbiAgICBidWYucHVzaCgnPCcsIHRoaXMudGFnTmFtZSB8fCB0aGlzLnR5cGVfKTtcbiAgICBpZiAodGhpcy5hdHRycykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF0dHJzLmxlbmd0aDspIHtcbiAgICAgICAgY29uc3QgYXR0ck5hbWUgPSB0aGlzLmF0dHJzW2krK107XG4gICAgICAgIGlmICh0eXBlb2YgYXR0ck5hbWUgPT0gJ251bWJlcicpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0aGlzLmF0dHJzW2krK107XG4gICAgICAgIGJ1Zi5wdXNoKCcgJywgYXR0ck5hbWUgYXMgc3RyaW5nLCAnPVwiJywgYXR0clZhbHVlIGFzIHN0cmluZywgJ1wiJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGJ1Zi5wdXNoKCc+Jyk7XG4gICAgcHJvY2Vzc1ROb2RlQ2hpbGRyZW4odGhpcy5jaGlsZCwgYnVmKTtcbiAgICBidWYucHVzaCgnPC8nLCB0aGlzLnRhZ05hbWUgfHwgdGhpcy50eXBlXywgJz4nKTtcbiAgICByZXR1cm4gYnVmLmpvaW4oJycpO1xuICB9XG5cbiAgZ2V0IHN0eWxlQmluZGluZ3NfKCk6IERlYnVnU3R5bGVCaW5kaW5ncyB7XG4gICAgcmV0dXJuIHRvRGVidWdTdHlsZUJpbmRpbmcodGhpcywgZmFsc2UpO1xuICB9XG4gIGdldCBjbGFzc0JpbmRpbmdzXygpOiBEZWJ1Z1N0eWxlQmluZGluZ3Mge1xuICAgIHJldHVybiB0b0RlYnVnU3R5bGVCaW5kaW5nKHRoaXMsIHRydWUpO1xuICB9XG59XG5leHBvcnQgY29uc3QgVE5vZGVEZWJ1ZyA9IFROb2RlO1xuZXhwb3J0IHR5cGUgVE5vZGVEZWJ1ZyA9IFROb2RlO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlYnVnU3R5bGVCaW5kaW5ncyBleHRlbmRzXG4gICAgQXJyYXk8S2V5VmFsdWVBcnJheTxhbnk+fERlYnVnU3R5bGVCaW5kaW5nfHN0cmluZ3xudWxsPiB7fVxuZXhwb3J0IGludGVyZmFjZSBEZWJ1Z1N0eWxlQmluZGluZyB7XG4gIGtleTogVFN0eWxpbmdLZXk7XG4gIGluZGV4OiBudW1iZXI7XG4gIGlzVGVtcGxhdGU6IGJvb2xlYW47XG4gIHByZXZEdXBsaWNhdGU6IGJvb2xlYW47XG4gIG5leHREdXBsaWNhdGU6IGJvb2xlYW47XG4gIHByZXZJbmRleDogbnVtYmVyO1xuICBuZXh0SW5kZXg6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gdG9EZWJ1Z1N0eWxlQmluZGluZyh0Tm9kZTogVE5vZGUsIGlzQ2xhc3NCYXNlZDogYm9vbGVhbik6IERlYnVnU3R5bGVCaW5kaW5ncyB7XG4gIGNvbnN0IHREYXRhID0gdE5vZGUudFZpZXdfLmRhdGE7XG4gIGNvbnN0IGJpbmRpbmdzOiBEZWJ1Z1N0eWxlQmluZGluZ3MgPSBbXSBhcyBhbnk7XG4gIGNvbnN0IHJhbmdlID0gaXNDbGFzc0Jhc2VkID8gdE5vZGUuY2xhc3NCaW5kaW5ncyA6IHROb2RlLnN0eWxlQmluZGluZ3M7XG4gIGNvbnN0IHByZXYgPSBnZXRUU3R5bGluZ1JhbmdlUHJldihyYW5nZSk7XG4gIGNvbnN0IG5leHQgPSBnZXRUU3R5bGluZ1JhbmdlTmV4dChyYW5nZSk7XG4gIGxldCBpc1RlbXBsYXRlID0gbmV4dCAhPT0gMDtcbiAgbGV0IGN1cnNvciA9IGlzVGVtcGxhdGUgPyBuZXh0IDogcHJldjtcbiAgd2hpbGUgKGN1cnNvciAhPT0gMCkge1xuICAgIGNvbnN0IGl0ZW1LZXkgPSB0RGF0YVtjdXJzb3JdIGFzIFRTdHlsaW5nS2V5O1xuICAgIGNvbnN0IGl0ZW1SYW5nZSA9IHREYXRhW2N1cnNvciArIDFdIGFzIFRTdHlsaW5nUmFuZ2U7XG4gICAgYmluZGluZ3MudW5zaGlmdCh7XG4gICAgICBrZXk6IGl0ZW1LZXksXG4gICAgICBpbmRleDogY3Vyc29yLFxuICAgICAgaXNUZW1wbGF0ZTogaXNUZW1wbGF0ZSxcbiAgICAgIHByZXZEdXBsaWNhdGU6IGdldFRTdHlsaW5nUmFuZ2VQcmV2RHVwbGljYXRlKGl0ZW1SYW5nZSksXG4gICAgICBuZXh0RHVwbGljYXRlOiBnZXRUU3R5bGluZ1JhbmdlTmV4dER1cGxpY2F0ZShpdGVtUmFuZ2UpLFxuICAgICAgbmV4dEluZGV4OiBnZXRUU3R5bGluZ1JhbmdlTmV4dChpdGVtUmFuZ2UpLFxuICAgICAgcHJldkluZGV4OiBnZXRUU3R5bGluZ1JhbmdlUHJldihpdGVtUmFuZ2UpLFxuICAgIH0pO1xuICAgIGlmIChjdXJzb3IgPT09IHByZXYpIGlzVGVtcGxhdGUgPSBmYWxzZTtcbiAgICBjdXJzb3IgPSBnZXRUU3R5bGluZ1JhbmdlUHJldihpdGVtUmFuZ2UpO1xuICB9XG4gIGJpbmRpbmdzLnB1c2goKGlzQ2xhc3NCYXNlZCA/IHROb2RlLnJlc2lkdWFsQ2xhc3NlcyA6IHROb2RlLnJlc2lkdWFsU3R5bGVzKSB8fCBudWxsKTtcbiAgcmV0dXJuIGJpbmRpbmdzO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzVE5vZGVDaGlsZHJlbih0Tm9kZTogSVROb2RlfG51bGwsIGJ1Zjogc3RyaW5nW10pIHtcbiAgd2hpbGUgKHROb2RlKSB7XG4gICAgYnVmLnB1c2goKHROb2RlIGFzIGFueSBhcyB7dGVtcGxhdGVfOiBzdHJpbmd9KS50ZW1wbGF0ZV8pO1xuICAgIHROb2RlID0gdE5vZGUubmV4dDtcbiAgfVxufVxuXG5jb25zdCBUVmlld0RhdGEgPSBOR19ERVZfTU9ERSAmJiBjcmVhdGVOYW1lZEFycmF5VHlwZSgnVFZpZXdEYXRhJykgfHwgbnVsbCEgYXMgQXJyYXlDb25zdHJ1Y3RvcjtcbmxldCBUVklFV0RBVEFfRU1QVFk6IHVua25vd25bXTsgIC8vIGNhbid0IGluaXRpYWxpemUgaGVyZSBvciBpdCB3aWxsIG5vdCBiZSB0cmVlIHNoYWtlbiwgYmVjYXVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYExWaWV3YCBjb25zdHJ1Y3RvciBjb3VsZCBoYXZlIHNpZGUtZWZmZWN0cy5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjbG9uZXMgYSBibHVlcHJpbnQgYW5kIGNyZWF0ZXMgVERhdGEuXG4gKlxuICogU2ltcGxlIHNsaWNlIHdpbGwga2VlcCB0aGUgc2FtZSB0eXBlLCBhbmQgd2UgbmVlZCBpdCB0byBiZSBURGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVUb1RWaWV3RGF0YShsaXN0OiBhbnlbXSk6IFREYXRhIHtcbiAgaWYgKFRWSUVXREFUQV9FTVBUWSA9PT0gdW5kZWZpbmVkKSBUVklFV0RBVEFfRU1QVFkgPSBuZXcgVFZpZXdEYXRhKCk7XG4gIHJldHVybiBUVklFV0RBVEFfRU1QVFkuY29uY2F0KGxpc3QpIGFzIGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IExWaWV3Qmx1ZXByaW50ID1cbiAgICBOR19ERVZfTU9ERSAmJiBjcmVhdGVOYW1lZEFycmF5VHlwZSgnTFZpZXdCbHVlcHJpbnQnKSB8fCBudWxsISBhcyBBcnJheUNvbnN0cnVjdG9yO1xuZXhwb3J0IGNvbnN0IE1hdGNoZXNBcnJheSA9XG4gICAgTkdfREVWX01PREUgJiYgY3JlYXRlTmFtZWRBcnJheVR5cGUoJ01hdGNoZXNBcnJheScpIHx8IG51bGwhIGFzIEFycmF5Q29uc3RydWN0b3I7XG5leHBvcnQgY29uc3QgVFZpZXdDb21wb25lbnRzID1cbiAgICBOR19ERVZfTU9ERSAmJiBjcmVhdGVOYW1lZEFycmF5VHlwZSgnVFZpZXdDb21wb25lbnRzJykgfHwgbnVsbCEgYXMgQXJyYXlDb25zdHJ1Y3RvcjtcbmV4cG9ydCBjb25zdCBUTm9kZUxvY2FsTmFtZXMgPVxuICAgIE5HX0RFVl9NT0RFICYmIGNyZWF0ZU5hbWVkQXJyYXlUeXBlKCdUTm9kZUxvY2FsTmFtZXMnKSB8fCBudWxsISBhcyBBcnJheUNvbnN0cnVjdG9yO1xuZXhwb3J0IGNvbnN0IFROb2RlSW5pdGlhbElucHV0cyA9XG4gICAgTkdfREVWX01PREUgJiYgY3JlYXRlTmFtZWRBcnJheVR5cGUoJ1ROb2RlSW5pdGlhbElucHV0cycpIHx8IG51bGwhIGFzIEFycmF5Q29uc3RydWN0b3I7XG5leHBvcnQgY29uc3QgVE5vZGVJbml0aWFsRGF0YSA9XG4gICAgTkdfREVWX01PREUgJiYgY3JlYXRlTmFtZWRBcnJheVR5cGUoJ1ROb2RlSW5pdGlhbERhdGEnKSB8fCBudWxsISBhcyBBcnJheUNvbnN0cnVjdG9yO1xuZXhwb3J0IGNvbnN0IExDbGVhbnVwID1cbiAgICBOR19ERVZfTU9ERSAmJiBjcmVhdGVOYW1lZEFycmF5VHlwZSgnTENsZWFudXAnKSB8fCBudWxsISBhcyBBcnJheUNvbnN0cnVjdG9yO1xuZXhwb3J0IGNvbnN0IFRDbGVhbnVwID1cbiAgICBOR19ERVZfTU9ERSAmJiBjcmVhdGVOYW1lZEFycmF5VHlwZSgnVENsZWFudXAnKSB8fCBudWxsISBhcyBBcnJheUNvbnN0cnVjdG9yO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaExWaWV3RGVidWcobFZpZXc6IExWaWV3KSB7XG4gIGF0dGFjaERlYnVnT2JqZWN0KGxWaWV3LCBuZXcgTFZpZXdEZWJ1ZyhsVmlldykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoTENvbnRhaW5lckRlYnVnKGxDb250YWluZXI6IExDb250YWluZXIpIHtcbiAgYXR0YWNoRGVidWdPYmplY3QobENvbnRhaW5lciwgbmV3IExDb250YWluZXJEZWJ1ZyhsQ29udGFpbmVyKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RlYnVnKG9iajogTFZpZXcpOiBMVmlld0RlYnVnO1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGVidWcob2JqOiBMVmlld3xudWxsKTogTFZpZXdEZWJ1Z3xudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGVidWcob2JqOiBMVmlld3xMQ29udGFpbmVyfG51bGwpOiBMVmlld0RlYnVnfExDb250YWluZXJEZWJ1Z3xudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGVidWcob2JqOiBhbnkpOiBhbnkge1xuICBpZiAob2JqKSB7XG4gICAgY29uc3QgZGVidWcgPSAob2JqIGFzIGFueSkuZGVidWc7XG4gICAgYXNzZXJ0RGVmaW5lZChkZWJ1ZywgJ09iamVjdCBkb2VzIG5vdCBoYXZlIGEgZGVidWcgcmVwcmVzZW50YXRpb24uJyk7XG4gICAgcmV0dXJuIGRlYnVnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbn1cblxuLyoqXG4gKiBVc2UgdGhpcyBtZXRob2QgdG8gdW53cmFwIGEgbmF0aXZlIGVsZW1lbnQgaW4gYExWaWV3YCBhbmQgY29udmVydCBpdCBpbnRvIEhUTUwgZm9yIGVhc2llclxuICogcmVhZGluZy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgcG9zc2libHkgd3JhcHBlZCBuYXRpdmUgRE9NIG5vZGUuXG4gKiBAcGFyYW0gaW5jbHVkZUNoaWxkcmVuIElmIGB0cnVlYCB0aGVuIHRoZSBzZXJpYWxpemVkIEhUTUwgZm9ybSB3aWxsIGluY2x1ZGUgY2hpbGQgZWxlbWVudHNcbiAqIChzYW1lXG4gKiBhcyBgb3V0ZXJIVE1MYCkuIElmIGBmYWxzZWAgdGhlbiB0aGUgc2VyaWFsaXplZCBIVE1MIGZvcm0gd2lsbCBvbmx5IGNvbnRhaW4gdGhlIGVsZW1lbnRcbiAqIGl0c2VsZlxuICogKHdpbGwgbm90IHNlcmlhbGl6ZSBjaGlsZCBlbGVtZW50cykuXG4gKi9cbmZ1bmN0aW9uIHRvSHRtbCh2YWx1ZTogYW55LCBpbmNsdWRlQ2hpbGRyZW46IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZ3xudWxsIHtcbiAgY29uc3Qgbm9kZTogSFRNTEVsZW1lbnR8bnVsbCA9IHVud3JhcFJOb2RlKHZhbHVlKSBhcyBhbnk7XG4gIGlmIChub2RlKSB7XG4gICAgY29uc3QgaXNUZXh0Tm9kZSA9IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFO1xuICAgIGNvbnN0IG91dGVySFRNTCA9IChpc1RleHROb2RlID8gbm9kZS50ZXh0Q29udGVudCA6IG5vZGUub3V0ZXJIVE1MKSB8fCAnJztcbiAgICBpZiAoaW5jbHVkZUNoaWxkcmVuIHx8IGlzVGV4dE5vZGUpIHtcbiAgICAgIHJldHVybiBvdXRlckhUTUw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9ICc+JyArIG5vZGUuaW5uZXJIVE1MICsgJzwnO1xuICAgICAgcmV0dXJuIChvdXRlckhUTUwuc3BsaXQoaW5uZXJIVE1MKVswXSkgKyAnPic7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMVmlld0RlYnVnIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfcmF3X2xWaWV3OiBMVmlldykge31cblxuICAvKipcbiAgICogRmxhZ3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBgTFZpZXdgIHVucGFja2VkIGludG8gYSBtb3JlIHJlYWRhYmxlIHN0YXRlLlxuICAgKi9cbiAgZ2V0IGZsYWdzKCkge1xuICAgIGNvbnN0IGZsYWdzID0gdGhpcy5fcmF3X2xWaWV3W0ZMQUdTXTtcbiAgICByZXR1cm4ge1xuICAgICAgX19yYXdfX2ZsYWdzX186IGZsYWdzLFxuICAgICAgaW5pdFBoYXNlU3RhdGU6IGZsYWdzICYgTFZpZXdGbGFncy5Jbml0UGhhc2VTdGF0ZU1hc2ssXG4gICAgICBjcmVhdGlvbk1vZGU6ICEhKGZsYWdzICYgTFZpZXdGbGFncy5DcmVhdGlvbk1vZGUpLFxuICAgICAgZmlyc3RWaWV3UGFzczogISEoZmxhZ3MgJiBMVmlld0ZsYWdzLkZpcnN0TFZpZXdQYXNzKSxcbiAgICAgIGNoZWNrQWx3YXlzOiAhIShmbGFncyAmIExWaWV3RmxhZ3MuQ2hlY2tBbHdheXMpLFxuICAgICAgZGlydHk6ICEhKGZsYWdzICYgTFZpZXdGbGFncy5EaXJ0eSksXG4gICAgICBhdHRhY2hlZDogISEoZmxhZ3MgJiBMVmlld0ZsYWdzLkF0dGFjaGVkKSxcbiAgICAgIGRlc3Ryb3llZDogISEoZmxhZ3MgJiBMVmlld0ZsYWdzLkRlc3Ryb3llZCksXG4gICAgICBpc1Jvb3Q6ICEhKGZsYWdzICYgTFZpZXdGbGFncy5Jc1Jvb3QpLFxuICAgICAgaW5kZXhXaXRoaW5Jbml0UGhhc2U6IGZsYWdzID4+IExWaWV3RmxhZ3MuSW5kZXhXaXRoaW5Jbml0UGhhc2VTaGlmdCxcbiAgICB9O1xuICB9XG4gIGdldCBwYXJlbnQoKTogTFZpZXdEZWJ1Z3xMQ29udGFpbmVyRGVidWd8bnVsbCB7XG4gICAgcmV0dXJuIHRvRGVidWcodGhpcy5fcmF3X2xWaWV3W1BBUkVOVF0pO1xuICB9XG4gIGdldCBob3N0KCk6IHN0cmluZ3xudWxsIHtcbiAgICByZXR1cm4gdG9IdG1sKHRoaXMuX3Jhd19sVmlld1tIT1NUXSwgdHJ1ZSk7XG4gIH1cbiAgZ2V0IGh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMubm9kZXMgfHwgW10pLm1hcChub2RlID0+IHRvSHRtbChub2RlLm5hdGl2ZSwgdHJ1ZSkpLmpvaW4oJycpO1xuICB9XG4gIGdldCBjb250ZXh0KCk6IHt9fG51bGwge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbFZpZXdbQ09OVEVYVF07XG4gIH1cbiAgLyoqXG4gICAqIFRoZSB0cmVlIG9mIG5vZGVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudCBgTFZpZXdgLiBUaGUgbm9kZXMgaGF2ZSBiZWVuIG5vcm1hbGl6ZWQgaW50b1xuICAgKiBhXG4gICAqIHRyZWUgc3RydWN0dXJlIHdpdGggcmVsZXZhbnQgZGV0YWlscyBwdWxsZWQgb3V0IGZvciByZWFkYWJpbGl0eS5cbiAgICovXG4gIGdldCBub2RlcygpOiBEZWJ1Z05vZGVbXXxudWxsIHtcbiAgICBjb25zdCBsVmlldyA9IHRoaXMuX3Jhd19sVmlldztcbiAgICBjb25zdCB0Tm9kZSA9IGxWaWV3W1RWSUVXXS5maXJzdENoaWxkO1xuICAgIHJldHVybiB0b0RlYnVnTm9kZXModE5vZGUsIGxWaWV3KTtcbiAgfVxuXG4gIGdldCB0VmlldygpOiBJVFZpZXcge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbFZpZXdbVFZJRVddO1xuICB9XG4gIGdldCBjbGVhbnVwKCk6IGFueVtdfG51bGwge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbFZpZXdbQ0xFQU5VUF07XG4gIH1cbiAgZ2V0IGluamVjdG9yKCk6IEluamVjdG9yfG51bGwge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbFZpZXdbSU5KRUNUT1JdO1xuICB9XG4gIGdldCByZW5kZXJlckZhY3RvcnkoKTogUmVuZGVyZXJGYWN0b3J5MyB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sVmlld1tSRU5ERVJFUl9GQUNUT1JZXTtcbiAgfVxuICBnZXQgcmVuZGVyZXIoKTogUmVuZGVyZXIzIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3X2xWaWV3W1JFTkRFUkVSXTtcbiAgfVxuICBnZXQgc2FuaXRpemVyKCk6IFNhbml0aXplcnxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3X2xWaWV3W1NBTklUSVpFUl07XG4gIH1cbiAgZ2V0IGNoaWxkSGVhZCgpOiBMVmlld0RlYnVnfExDb250YWluZXJEZWJ1Z3xudWxsIHtcbiAgICByZXR1cm4gdG9EZWJ1Zyh0aGlzLl9yYXdfbFZpZXdbQ0hJTERfSEVBRF0pO1xuICB9XG4gIGdldCBuZXh0KCk6IExWaWV3RGVidWd8TENvbnRhaW5lckRlYnVnfG51bGwge1xuICAgIHJldHVybiB0b0RlYnVnKHRoaXMuX3Jhd19sVmlld1tORVhUXSk7XG4gIH1cbiAgZ2V0IGNoaWxkVGFpbCgpOiBMVmlld0RlYnVnfExDb250YWluZXJEZWJ1Z3xudWxsIHtcbiAgICByZXR1cm4gdG9EZWJ1Zyh0aGlzLl9yYXdfbFZpZXdbQ0hJTERfVEFJTF0pO1xuICB9XG4gIGdldCBkZWNsYXJhdGlvblZpZXcoKTogTFZpZXdEZWJ1Z3xudWxsIHtcbiAgICByZXR1cm4gdG9EZWJ1Zyh0aGlzLl9yYXdfbFZpZXdbREVDTEFSQVRJT05fVklFV10pO1xuICB9XG4gIGdldCBxdWVyaWVzKCk6IExRdWVyaWVzfG51bGwge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbFZpZXdbUVVFUklFU107XG4gIH1cbiAgZ2V0IHRIb3N0KCk6IFRWaWV3Tm9kZXxURWxlbWVudE5vZGV8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sVmlld1tUX0hPU1RdO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZWQgdmlldyBvZiBjaGlsZCB2aWV3cyAoYW5kIGNvbnRhaW5lcnMpIGF0dGFjaGVkIGF0IHRoaXMgbG9jYXRpb24uXG4gICAqL1xuICBnZXQgY2hpbGRWaWV3cygpOiBBcnJheTxMVmlld0RlYnVnfExDb250YWluZXJEZWJ1Zz4ge1xuICAgIGNvbnN0IGNoaWxkVmlld3M6IEFycmF5PExWaWV3RGVidWd8TENvbnRhaW5lckRlYnVnPiA9IFtdO1xuICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRIZWFkO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgY2hpbGRWaWV3cy5wdXNoKGNoaWxkKTtcbiAgICAgIGNoaWxkID0gY2hpbGQubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkVmlld3M7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWJ1Z05vZGUge1xuICBodG1sOiBzdHJpbmd8bnVsbDtcbiAgbmF0aXZlOiBOb2RlO1xuICBub2RlczogRGVidWdOb2RlW118bnVsbDtcbiAgY29tcG9uZW50OiBMVmlld0RlYnVnfG51bGw7XG59XG5cbi8qKlxuICogVHVybnMgYSBmbGF0IGxpc3Qgb2Ygbm9kZXMgaW50byBhIHRyZWUgYnkgd2Fsa2luZyB0aGUgYXNzb2NpYXRlZCBgVE5vZGVgIHRyZWUuXG4gKlxuICogQHBhcmFtIHROb2RlXG4gKiBAcGFyYW0gbFZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGVidWdOb2Rlcyh0Tm9kZTogSVROb2RlfG51bGwsIGxWaWV3OiBMVmlldyk6IERlYnVnTm9kZVtdfG51bGwge1xuICBpZiAodE5vZGUpIHtcbiAgICBjb25zdCBkZWJ1Z05vZGVzOiBEZWJ1Z05vZGVbXSA9IFtdO1xuICAgIGxldCB0Tm9kZUN1cnNvcjogSVROb2RlfG51bGwgPSB0Tm9kZTtcbiAgICB3aGlsZSAodE5vZGVDdXJzb3IpIHtcbiAgICAgIGRlYnVnTm9kZXMucHVzaChidWlsZERlYnVnTm9kZSh0Tm9kZUN1cnNvciwgbFZpZXcsIHROb2RlQ3Vyc29yLmluZGV4KSk7XG4gICAgICB0Tm9kZUN1cnNvciA9IHROb2RlQ3Vyc29yLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBkZWJ1Z05vZGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZERlYnVnTm9kZSh0Tm9kZTogSVROb2RlLCBsVmlldzogTFZpZXcsIG5vZGVJbmRleDogbnVtYmVyKTogRGVidWdOb2RlIHtcbiAgY29uc3QgcmF3VmFsdWUgPSBsVmlld1tub2RlSW5kZXhdO1xuICBjb25zdCBuYXRpdmUgPSB1bndyYXBSTm9kZShyYXdWYWx1ZSk7XG4gIGNvbnN0IGNvbXBvbmVudExWaWV3RGVidWcgPSB0b0RlYnVnKHJlYWRMVmlld1ZhbHVlKHJhd1ZhbHVlKSk7XG4gIHJldHVybiB7XG4gICAgaHRtbDogdG9IdG1sKG5hdGl2ZSksXG4gICAgbmF0aXZlOiBuYXRpdmUgYXMgYW55LFxuICAgIG5vZGVzOiB0b0RlYnVnTm9kZXModE5vZGUuY2hpbGQsIGxWaWV3KSxcbiAgICBjb21wb25lbnQ6IGNvbXBvbmVudExWaWV3RGVidWcsXG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBMQ29udGFpbmVyRGVidWcge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9yYXdfbENvbnRhaW5lcjogTENvbnRhaW5lcikge31cblxuICBnZXQgaGFzVHJhbnNwbGFudGVkVmlld3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd19sQ29udGFpbmVyW0hBU19UUkFOU1BMQU5URURfVklFV1NdO1xuICB9XG4gIGdldCB2aWV3cygpOiBMVmlld0RlYnVnW10ge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbENvbnRhaW5lci5zbGljZShDT05UQUlORVJfSEVBREVSX09GRlNFVClcbiAgICAgICAgLm1hcCh0b0RlYnVnIGFzIChsOiBMVmlldykgPT4gTFZpZXdEZWJ1Zyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBMVmlld0RlYnVnfExDb250YWluZXJEZWJ1Z3xudWxsIHtcbiAgICByZXR1cm4gdG9EZWJ1Zyh0aGlzLl9yYXdfbENvbnRhaW5lcltQQVJFTlRdKTtcbiAgfVxuICBnZXQgbW92ZWRWaWV3cygpOiBMVmlld1tdfG51bGwge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbENvbnRhaW5lcltNT1ZFRF9WSUVXU107XG4gIH1cbiAgZ2V0IGhvc3QoKTogUkVsZW1lbnR8UkNvbW1lbnR8TFZpZXcge1xuICAgIHJldHVybiB0aGlzLl9yYXdfbENvbnRhaW5lcltIT1NUXTtcbiAgfVxuICBnZXQgbmF0aXZlKCk6IFJDb21tZW50IHtcbiAgICByZXR1cm4gdGhpcy5fcmF3X2xDb250YWluZXJbTkFUSVZFXTtcbiAgfVxuICBnZXQgbmV4dCgpIHtcbiAgICByZXR1cm4gdG9EZWJ1Zyh0aGlzLl9yYXdfbENvbnRhaW5lcltORVhUXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYExWaWV3YCB2YWx1ZSBpZiBmb3VuZC5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgYExWaWV3YCBpZiBhbnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRMVmlld1ZhbHVlKHZhbHVlOiBhbnkpOiBMVmlld3xudWxsIHtcbiAgd2hpbGUgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBub3QgcXVpdGUgcmlnaHQsIGFzIGl0IGRvZXMgbm90IHRha2UgaW50byBhY2NvdW50IGBTdHlsaW5nQ29udGV4dGBcbiAgICAvLyBUaGlzIGlzIHdoeSBpdCBpcyBpbiBkZWJ1Zywgbm90IGluIHV0aWwudHNcbiAgICBpZiAodmFsdWUubGVuZ3RoID49IEhFQURFUl9PRkZTRVQgLSAxKSByZXR1cm4gdmFsdWUgYXMgTFZpZXc7XG4gICAgdmFsdWUgPSB2YWx1ZVtIT1NUXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIEkxOE5EZWJ1Z0l0ZW0ge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgZ2V0IHROb2RlKCkge1xuICAgIHJldHVybiBnZXRUTm9kZSh0aGlzLl9sVmlld1tUVklFV10sIHRoaXMubm9kZUluZGV4KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIF9fcmF3X29wQ29kZTogYW55LCBwcml2YXRlIF9sVmlldzogTFZpZXcsIHB1YmxpYyBub2RlSW5kZXg6IG51bWJlcixcbiAgICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcpIHt9XG59XG5cbi8qKlxuICogVHVybnMgYSBsaXN0IG9mIFwiQ3JlYXRlXCIgJiBcIlVwZGF0ZVwiIE9wQ29kZXMgaW50byBhIGh1bWFuLXJlYWRhYmxlIGxpc3Qgb2Ygb3BlcmF0aW9ucyBmb3JcbiAqIGRlYnVnZ2luZyBwdXJwb3Nlcy5cbiAqIEBwYXJhbSBtdXRhdGVPcENvZGVzIG11dGF0aW9uIG9wQ29kZXMgdG8gcmVhZFxuICogQHBhcmFtIHVwZGF0ZU9wQ29kZXMgdXBkYXRlIG9wQ29kZXMgdG8gcmVhZFxuICogQHBhcmFtIGljdXMgbGlzdCBvZiBJQ1UgZXhwcmVzc2lvbnNcbiAqIEBwYXJhbSBsVmlldyBUaGUgdmlldyB0aGUgb3BDb2RlcyBhcmUgYWN0aW5nIG9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hJMThuT3BDb2Rlc0RlYnVnKFxuICAgIG11dGF0ZU9wQ29kZXM6IEkxOG5NdXRhdGVPcENvZGVzLCB1cGRhdGVPcENvZGVzOiBJMThuVXBkYXRlT3BDb2RlcywgaWN1czogVEljdVtdfG51bGwsXG4gICAgbFZpZXc6IExWaWV3KSB7XG4gIGF0dGFjaERlYnVnT2JqZWN0KG11dGF0ZU9wQ29kZXMsIG5ldyBJMThuTXV0YXRlT3BDb2Rlc0RlYnVnKG11dGF0ZU9wQ29kZXMsIGxWaWV3KSk7XG4gIGF0dGFjaERlYnVnT2JqZWN0KHVwZGF0ZU9wQ29kZXMsIG5ldyBJMThuVXBkYXRlT3BDb2Rlc0RlYnVnKHVwZGF0ZU9wQ29kZXMsIGljdXMsIGxWaWV3KSk7XG5cbiAgaWYgKGljdXMpIHtcbiAgICBpY3VzLmZvckVhY2goaWN1ID0+IHtcbiAgICAgIGljdS5jcmVhdGUuZm9yRWFjaChpY3VDYXNlID0+IHtcbiAgICAgICAgYXR0YWNoRGVidWdPYmplY3QoaWN1Q2FzZSwgbmV3IEkxOG5NdXRhdGVPcENvZGVzRGVidWcoaWN1Q2FzZSwgbFZpZXcpKTtcbiAgICAgIH0pO1xuICAgICAgaWN1LnVwZGF0ZS5mb3JFYWNoKGljdUNhc2UgPT4ge1xuICAgICAgICBhdHRhY2hEZWJ1Z09iamVjdChpY3VDYXNlLCBuZXcgSTE4blVwZGF0ZU9wQ29kZXNEZWJ1ZyhpY3VDYXNlLCBpY3VzLCBsVmlldykpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEkxOG5NdXRhdGVPcENvZGVzRGVidWcgaW1wbGVtZW50cyBJMThuT3BDb2Rlc0RlYnVnIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfX3Jhd19vcENvZGVzOiBJMThuTXV0YXRlT3BDb2RlcywgcHJpdmF0ZSByZWFkb25seSBfX2xWaWV3OiBMVmlldykge31cblxuICAvKipcbiAgICogQSBsaXN0IG9mIG9wZXJhdGlvbiBpbmZvcm1hdGlvbiBhYm91dCBob3cgdGhlIE9wQ29kZXMgd2lsbCBhY3Qgb24gdGhlIHZpZXcuXG4gICAqL1xuICBnZXQgb3BlcmF0aW9ucygpIHtcbiAgICBjb25zdCB7X19sVmlldywgX19yYXdfb3BDb2Rlc30gPSB0aGlzO1xuICAgIGNvbnN0IHJlc3VsdHM6IGFueVtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9fcmF3X29wQ29kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9wQ29kZSA9IF9fcmF3X29wQ29kZXNbaV07XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICBpZiAodHlwZW9mIG9wQ29kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIF9fcmF3X29wQ29kZTogb3BDb2RlLFxuICAgICAgICAgIHR5cGU6ICdDcmVhdGUgVGV4dCBOb2RlJyxcbiAgICAgICAgICBub2RlSW5kZXg6IF9fcmF3X29wQ29kZXNbKytpXSxcbiAgICAgICAgICB0ZXh0OiBvcENvZGUsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3BDb2RlID09PSAnbnVtYmVyJykge1xuICAgICAgICBzd2l0Y2ggKG9wQ29kZSAmIEkxOG5NdXRhdGVPcENvZGUuTUFTS19PUENPREUpIHtcbiAgICAgICAgICBjYXNlIEkxOG5NdXRhdGVPcENvZGUuQXBwZW5kQ2hpbGQ6XG4gICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbk5vZGVJbmRleCA9IG9wQ29kZSA+Pj4gSTE4bk11dGF0ZU9wQ29kZS5TSElGVF9QQVJFTlQ7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgSTE4TkRlYnVnSXRlbShvcENvZGUsIF9fbFZpZXcsIGRlc3RpbmF0aW9uTm9kZUluZGV4LCAnQXBwZW5kQ2hpbGQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgSTE4bk11dGF0ZU9wQ29kZS5TZWxlY3Q6XG4gICAgICAgICAgICBjb25zdCBub2RlSW5kZXggPSBvcENvZGUgPj4+IEkxOG5NdXRhdGVPcENvZGUuU0hJRlRfUkVGO1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEkxOE5EZWJ1Z0l0ZW0ob3BDb2RlLCBfX2xWaWV3LCBub2RlSW5kZXgsICdTZWxlY3QnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgSTE4bk11dGF0ZU9wQ29kZS5FbGVtZW50RW5kOlxuICAgICAgICAgICAgbGV0IGVsZW1lbnRJbmRleCA9IG9wQ29kZSA+Pj4gSTE4bk11dGF0ZU9wQ29kZS5TSElGVF9SRUY7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgSTE4TkRlYnVnSXRlbShvcENvZGUsIF9fbFZpZXcsIGVsZW1lbnRJbmRleCwgJ0VsZW1lbnRFbmQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgSTE4bk11dGF0ZU9wQ29kZS5BdHRyOlxuICAgICAgICAgICAgZWxlbWVudEluZGV4ID0gb3BDb2RlID4+PiBJMThuTXV0YXRlT3BDb2RlLlNISUZUX1JFRjtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBJMThORGVidWdJdGVtKG9wQ29kZSwgX19sVmlldywgZWxlbWVudEluZGV4LCAnQXR0cicpO1xuICAgICAgICAgICAgcmVzdWx0WydhdHRyTmFtZSddID0gX19yYXdfb3BDb2Rlc1srK2ldO1xuICAgICAgICAgICAgcmVzdWx0WydhdHRyVmFsdWUnXSA9IF9fcmF3X29wQ29kZXNbKytpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHN3aXRjaCAob3BDb2RlKSB7XG4gICAgICAgICAgY2FzZSBDT01NRU5UX01BUktFUjpcbiAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgX19yYXdfb3BDb2RlOiBvcENvZGUsXG4gICAgICAgICAgICAgIHR5cGU6ICdDT01NRU5UX01BUktFUicsXG4gICAgICAgICAgICAgIGNvbW1lbnRWYWx1ZTogX19yYXdfb3BDb2Rlc1srK2ldLFxuICAgICAgICAgICAgICBub2RlSW5kZXg6IF9fcmF3X29wQ29kZXNbKytpXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEVMRU1FTlRfTUFSS0VSOlxuICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBfX3Jhd19vcENvZGU6IG9wQ29kZSxcbiAgICAgICAgICAgICAgdHlwZTogJ0VMRU1FTlRfTUFSS0VSJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgX19yYXdfb3BDb2RlOiBvcENvZGUsXG4gICAgICAgICAgdHlwZTogJ1Vua25vd24gT3AgQ29kZScsXG4gICAgICAgICAgY29kZTogb3BDb2RlLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSTE4blVwZGF0ZU9wQ29kZXNEZWJ1ZyBpbXBsZW1lbnRzIEkxOG5PcENvZGVzRGVidWcge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgX19yYXdfb3BDb2RlczogSTE4blVwZGF0ZU9wQ29kZXMsIHByaXZhdGUgcmVhZG9ubHkgaWN1czogVEljdVtdfG51bGwsXG4gICAgICBwcml2YXRlIHJlYWRvbmx5IF9fbFZpZXc6IExWaWV3KSB7fVxuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2Ygb3BlcmF0aW9uIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0aGUgT3BDb2RlcyB3aWxsIGFjdCBvbiB0aGUgdmlldy5cbiAgICovXG4gIGdldCBvcGVyYXRpb25zKCkge1xuICAgIGNvbnN0IHtfX2xWaWV3LCBfX3Jhd19vcENvZGVzLCBpY3VzfSA9IHRoaXM7XG4gICAgY29uc3QgcmVzdWx0czogYW55W10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX19yYXdfb3BDb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gYml0IGNvZGUgdG8gY2hlY2sgaWYgd2Ugc2hvdWxkIGFwcGx5IHRoZSBuZXh0IHVwZGF0ZVxuICAgICAgY29uc3QgY2hlY2tCaXQgPSBfX3Jhd19vcENvZGVzW2ldIGFzIG51bWJlcjtcbiAgICAgIC8vIE51bWJlciBvZiBvcENvZGVzIHRvIHNraXAgdW50aWwgbmV4dCBzZXQgb2YgdXBkYXRlIGNvZGVzXG4gICAgICBjb25zdCBza2lwQ29kZXMgPSBfX3Jhd19vcENvZGVzWysraV0gYXMgbnVtYmVyO1xuICAgICAgbGV0IHZhbHVlID0gJyc7XG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPD0gKGkgKyBza2lwQ29kZXMpOyBqKyspIHtcbiAgICAgICAgY29uc3Qgb3BDb2RlID0gX19yYXdfb3BDb2Rlc1tqXTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcENvZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdmFsdWUgKz0gb3BDb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcENvZGUgPT0gJ251bWJlcicpIHtcbiAgICAgICAgICBpZiAob3BDb2RlIDwgMCkge1xuICAgICAgICAgICAgLy8gSXQncyBhIGJpbmRpbmcgaW5kZXggd2hvc2UgdmFsdWUgaXMgbmVnYXRpdmVcbiAgICAgICAgICAgIC8vIFdlIGNhbm5vdCBrbm93IHRoZSB2YWx1ZSBvZiB0aGUgYmluZGluZyBzbyB3ZSBvbmx5IHNob3cgdGhlIGluZGV4XG4gICAgICAgICAgICB2YWx1ZSArPSBg77+9JHstIG9wQ29kZSAtIDF977+9YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gb3BDb2RlID4+PiBJMThuVXBkYXRlT3BDb2RlLlNISUZUX1JFRjtcbiAgICAgICAgICAgIGxldCB0SWN1SW5kZXg6IG51bWJlcjtcbiAgICAgICAgICAgIGxldCB0SWN1OiBUSWN1O1xuICAgICAgICAgICAgc3dpdGNoIChvcENvZGUgJiBJMThuVXBkYXRlT3BDb2RlLk1BU0tfT1BDT0RFKSB7XG4gICAgICAgICAgICAgIGNhc2UgSTE4blVwZGF0ZU9wQ29kZS5BdHRyOlxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gX19yYXdfb3BDb2Rlc1srK2pdIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICBjb25zdCBzYW5pdGl6ZUZuID0gX19yYXdfb3BDb2Rlc1srK2pdO1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICBfX3Jhd19vcENvZGU6IG9wQ29kZSxcbiAgICAgICAgICAgICAgICAgIGNoZWNrQml0LFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ0F0dHInLFxuICAgICAgICAgICAgICAgICAgYXR0clZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJOYW1lLFxuICAgICAgICAgICAgICAgICAgc2FuaXRpemVGbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBJMThuVXBkYXRlT3BDb2RlLlRleHQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIF9fcmF3X29wQ29kZTogb3BDb2RlLFxuICAgICAgICAgICAgICAgICAgY2hlY2tCaXQsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnVGV4dCcsXG4gICAgICAgICAgICAgICAgICBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBJMThuVXBkYXRlT3BDb2RlLkljdVN3aXRjaDpcbiAgICAgICAgICAgICAgICB0SWN1SW5kZXggPSBfX3Jhd19vcENvZGVzWysral0gYXMgbnVtYmVyO1xuICAgICAgICAgICAgICAgIHRJY3UgPSBpY3VzIVt0SWN1SW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBuZXcgSTE4TkRlYnVnSXRlbShvcENvZGUsIF9fbFZpZXcsIG5vZGVJbmRleCwgJ0ljdVN3aXRjaCcpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFsndEljdUluZGV4J10gPSB0SWN1SW5kZXg7XG4gICAgICAgICAgICAgICAgcmVzdWx0WydjaGVja0JpdCddID0gY2hlY2tCaXQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0WydtYWluQmluZGluZyddID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmVzdWx0Wyd0SWN1J10gPSB0SWN1O1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEkxOG5VcGRhdGVPcENvZGUuSWN1VXBkYXRlOlxuICAgICAgICAgICAgICAgIHRJY3VJbmRleCA9IF9fcmF3X29wQ29kZXNbKytqXSBhcyBudW1iZXI7XG4gICAgICAgICAgICAgICAgdEljdSA9IGljdXMhW3RJY3VJbmRleF07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEkxOE5EZWJ1Z0l0ZW0ob3BDb2RlLCBfX2xWaWV3LCBub2RlSW5kZXgsICdJY3VVcGRhdGUnKTtcbiAgICAgICAgICAgICAgICByZXN1bHRbJ3RJY3VJbmRleCddID0gdEljdUluZGV4O1xuICAgICAgICAgICAgICAgIHJlc3VsdFsnY2hlY2tCaXQnXSA9IGNoZWNrQml0O1xuICAgICAgICAgICAgICAgIHJlc3VsdFsndEljdSddID0gdEljdTtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkgKz0gc2tpcENvZGVzO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEkxOG5PcENvZGVzRGVidWcge1xuICBvcGVyYXRpb25zOiBhbnlbXTtcbn1cbiJdfQ==