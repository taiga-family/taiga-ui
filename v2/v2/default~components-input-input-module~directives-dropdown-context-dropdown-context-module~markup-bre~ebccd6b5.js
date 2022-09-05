(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-input-input-module~directives-dropdown-context-dropdown-context-module~markup-bre~ebccd6b5"],{

/***/ "../../node_modules/@angular/cdk/fesm2015/drag-drop.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/@angular/cdk/fesm2015/drag-drop.js ***!
  \*******************************************************************************************/
/*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_CONFIG_FACTORY, CDK_DROP_LIST, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem, ɵangular_material_src_cdk_drag_drop_drag_drop_b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_drag_drop_drag_drop_b", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");









/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-styling.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Extended CSSStyleDeclaration that includes a couple of drag-related
 * properties that aren't in the built-in TS typings.
 * @record
 */



function DragCSSStyleDeclaration() { }
if (false) {}
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = (/** @type {?} */ (source[key]));
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    const userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/transition-duration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    const computedStyle = getComputedStyle(element);
    /** @type {?} */
    const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    const property = transitionedProperties.find((/**
     * @param {?} prop
     * @return {?}
     */
    prop => prop === 'transform' || prop === 'all'));
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    const propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    const value = computedStyle.getPropertyValue(name);
    return value.split(',').map((/**
     * @param {?} part
     * @return {?}
     */
    part => part.trim()));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/client-rect.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Gets a mutable version of an element's bounding `ClientRect`.
 * @param {?} element
 * @return {?}
 */
function getMutableClientRect(element) {
    /** @type {?} */
    const clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    const { top, bottom, left, right } = clientRect;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param {?} rect ClientRect to check against.
 * @param {?} threshold Threshold around the ClientRect.
 * @param {?} pointerX Coordinates along the X axis.
 * @param {?} pointerY Coordinates along the Y axis.
 * @return {?}
 */
function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
    const { top, right, bottom, left, width, height } = rect;
    /** @type {?} */
    const xThreshold = width * threshold;
    /** @type {?} */
    const yThreshold = height * threshold;
    return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
        pointerX > left - xThreshold && pointerX < right + xThreshold;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/parent-position-tracker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Object holding the scroll position of something.
 * @record
 */
function ScrollPosition() { }
if (false) {}
/**
 * Keeps track of the scroll position and dimensions of the parents of an element.
 */
class ParentPositionTracker {
    /**
     * @param {?} _document
     * @param {?} _viewportRuler
     */
    constructor(_document, _viewportRuler) {
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        /**
         * Cached positions of the scrollable parent elements.
         */
        this.positions = new Map();
    }
    /**
     * Clears the cached positions.
     * @return {?}
     */
    clear() {
        this.positions.clear();
    }
    /**
     * Caches the positions. Should be called at the beginning of a drag sequence.
     * @param {?} elements
     * @return {?}
     */
    cache(elements) {
        this.clear();
        this.positions.set(this._document, {
            scrollPosition: this._viewportRuler.getViewportScrollPosition(),
        });
        elements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.positions.set(element, {
                scrollPosition: { top: element.scrollTop, left: element.scrollLeft },
                clientRect: getMutableClientRect(element)
            });
        }));
    }
    /**
     * Handles scrolling while a drag is taking place.
     * @param {?} event
     * @return {?}
     */
    handleScroll(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        /** @type {?} */
        const cachedPosition = this.positions.get(target);
        if (!cachedPosition) {
            return null;
        }
        // Used when figuring out whether an element is inside the scroll parent. If the scrolled
        // parent is the `document`, we use the `documentElement`, because IE doesn't support
        // `contains` on the `document`.
        /** @type {?} */
        const scrolledParentNode = target === this._document ? target.documentElement : target;
        /** @type {?} */
        const scrollPosition = cachedPosition.scrollPosition;
        /** @type {?} */
        let newTop;
        /** @type {?} */
        let newLeft;
        if (target === this._document) {
            /** @type {?} */
            const viewportScrollPosition = (/** @type {?} */ (this._viewportRuler)).getViewportScrollPosition();
            newTop = viewportScrollPosition.top;
            newLeft = viewportScrollPosition.left;
        }
        else {
            newTop = ((/** @type {?} */ (target))).scrollTop;
            newLeft = ((/** @type {?} */ (target))).scrollLeft;
        }
        /** @type {?} */
        const topDifference = scrollPosition.top - newTop;
        /** @type {?} */
        const leftDifference = scrollPosition.left - newLeft;
        // Go through and update the cached positions of the scroll
        // parents that are inside the element that was scrolled.
        this.positions.forEach((/**
         * @param {?} position
         * @param {?} node
         * @return {?}
         */
        (position, node) => {
            if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
            }
        }));
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
        return { top: topDifference, left: leftDifference };
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Object that can be used to configure the behavior of DragRef.
 * @record
 */
function DragRefConfig() { }
if (false) {}
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
const activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
const MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Internal compile-time-only representation of a `DragRef`.
 * Used to avoid circular import issues between the `DragRef` and the `DropListRef`.
 * \@docs-private
 * @record
 */
function DragRefInternal() { }
/**
 * Template that can be used to create a drag helper element (e.g. a preview or a placeholder).
 * @record
 * @template T
 */
function DragHelperTemplate() { }
if (false) {}
/**
 * Template that can be used to create a drag preview element.
 * @record
 * @template T
 */
function DragPreviewTemplate() { }
if (false) {}
/**
 * Point on the page or within an element.
 * @record
 */
function Point() { }
if (false) {}
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * @template T
 */
class DragRef {
    /**
     * @param {?} element
     * @param {?} _config
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?} _dragDropRegistry
     */
    constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */
        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (this._handles.length) {
                /** @type {?} */
                const targetHandle = this._handles.find((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => {
                    /** @type {?} */
                    const target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                }));
                if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
                    this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!this.disabled) {
                this._initializeDragSequence(this._rootElement, event);
            }
        });
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // Prevent the default action as early as possible in order to block
            // native actions like dragging the selected text or images with the mouse.
            event.preventDefault();
            /** @type {?} */
            const pointerPosition = this._getPointerPositionOnPage(event);
            if (!this._hasStartedDragging) {
                /** @type {?} */
                const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
                /** @type {?} */
                const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
                /** @type {?} */
                const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    /** @type {?} */
                    const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
                    if (!isDelayElapsed) {
                        this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!this._dropContainer || !this._dropContainer.isDragging()) {
                        this._hasStartedDragging = true;
                        this._ngZone.run((/**
                         * @return {?}
                         */
                        () => this._startDragSequence(event)));
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!this._previewRect || (!this._previewRect.width && !this._previewRect.height)) {
                    this._previewRect = (this._preview || this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
            this._hasMoved = true;
            this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (this._dropContainer) {
                this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                const activeTransform = this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - this._pickupPositionOnPage.x + this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - this._pickupPositionOnPage.y + this._passiveTransform.y;
                this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    const appliedTransform = `translate(${activeTransform.x} ${activeTransform.y})`;
                    this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (this._moveEvents.observers.length) {
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    this._moveEvents.next({
                        source: this,
                        pointerPosition: constrainedPointerPosition,
                        event,
                        distance: this._getDragDistance(constrainedPointerPosition),
                        delta: this._pointerDirectionDelta
                    });
                }));
            }
        });
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._endDragSequence(event);
        });
        this.withRootElement(element);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        _dragDropRegistry.registerDragItem(this);
    }
    /**
     * Whether starting to drag this element is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._toggleNativeDragInteractions();
        }
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    getPlaceholderElement() {
        return this._placeholder;
    }
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    getRootElement() {
        return this._rootElement;
    }
    /**
     * Gets the currently-visible element that represents the drag item.
     * While dragging this is the placeholder, otherwise it's the root element.
     * @return {?}
     */
    getVisibleElement() {
        return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
    }
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    withHandles(handles) {
        (/** @type {?} */ (this))._handles = handles.map((/**
         * @param {?} handle
         * @return {?}
         */
        handle => Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle)));
        (/** @type {?} */ (this))._handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        handle => toggleNativeDragInteractions(handle, false)));
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    }
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    withPreviewTemplate(template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    }
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    withPlaceholderTemplate(template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    withRootElement(rootElement) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            (/** @type {?} */ (this))._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            }));
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    withBoundaryElement(boundaryElement) {
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;
        (/** @type {?} */ (this))._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            (/** @type {?} */ (this))._resizeSubscription = (/** @type {?} */ (this))._viewportRuler
                .change(10)
                .subscribe((/**
             * @return {?}
             */
            () => (/** @type {?} */ (this))._containInsideBoundaryOnResize()));
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    dispose() {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeNode(this._rootElement);
        }
        removeNode(this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._resizeSubscription.unsubscribe();
        this._parentPositions.clear();
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._anchor = (/** @type {?} */ (null));
    }
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    isDragging() {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    }
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    reset() {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    }
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    disableHandle(handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    }
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    enableHandle(handle) {
        this._disabledHandles.delete(handle);
    }
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    withDirection(direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    _withDropContainer(container) {
        this._dropContainer = container;
    }
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    getFreeDragPosition() {
        /** @type {?} */
        const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    }
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    setFreeDragPosition(value) {
        (/** @type {?} */ (this))._activeTransform = { x: 0, y: 0 };
        (/** @type {?} */ (this))._passiveTransform.x = value.x;
        (/** @type {?} */ (this))._passiveTransform.y = value.y;
        if (!(/** @type {?} */ (this))._dropContainer) {
            (/** @type {?} */ (this))._applyRootElementTransform(value.x, value.y);
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    _sortFromLastPointerPosition() {
        /** @type {?} */
        const position = this._pointerPositionAtLastDirectionChange;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(this._getConstrainedPointerPosition(position));
        }
    }
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    _removeSubscriptions() {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    }
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    _destroyPreview() {
        if (this._preview) {
            removeNode(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    }
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    _destroyPlaceholder() {
        if (this._placeholder) {
            removeNode(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    }
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    _endDragSequence(event) {
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then((/**
             * @return {?}
             */
            () => {
                this._cleanupDragArtifacts(event);
                this._cleanupCachedDimensions();
                this._dragDropRegistry.stopDragging(this);
            }));
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this.ended.next({
                    source: this,
                    distance: this._getDragDistance(this._getPointerPositionOnPage(event))
                });
            }));
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    }
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    _startDragSequence(event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        /** @type {?} */
        const dropContainer = this._dropContainer;
        if (dropContainer) {
            /** @type {?} */
            const element = this._rootElement;
            /** @type {?} */
            const parent = (/** @type {?} */ (element.parentNode));
            /** @type {?} */
            const preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            const placeholder = this._placeholder = this._createPlaceholderElement();
            /** @type {?} */
            const anchor = this._anchor = this._anchor || this._document.createComment('');
            // Insert an anchor node so that we can restore the element's position in the DOM.
            parent.insertBefore(anchor, element);
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild(parent.replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            dropContainer.start();
            this._initialContainer = dropContainer;
            this._initialIndex = dropContainer.getItemIndex(this);
        }
        else {
            this._initialContainer = this._initialIndex = (/** @type {?} */ (undefined));
        }
        // Important to run after we've called `start` on the parent container
        // so that it has had time to resolve its scrollable parents.
        this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
    }
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    _initializeDragSequence(referenceElement, event) {
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        const isDragging = this.isDragging();
        /** @type {?} */
        const isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        const isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        const rootElement = this._rootElement;
        /** @type {?} */
        const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @param {?} scrollEvent
         * @return {?}
         */
        scrollEvent => {
            this._updateOnScroll(scrollEvent);
        }));
        if (this._boundaryElement) {
            this._boundaryRect = getMutableClientRect(this._boundaryElement);
        }
        // If we have a custom preview we can't know ahead of time how large it'll be so we position
        // it next to the cursor. The exception is when the consumer has opted into making the preview
        // the same size as the root element, in which case we do know the size.
        /** @type {?} */
        const previewTemplate = this._previewTemplate;
        this._pickupPositionInElement = previewTemplate && previewTemplate.template &&
            !previewTemplate.matchSize ? { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        const pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    }
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    _cleanupDragArtifacts(event) {
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        (/** @type {?} */ (this._anchor.parentNode)).replaceChild(this._rootElement, this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = (/** @type {?} */ (this._dropContainer));
            /** @type {?} */
            const currentIndex = container.getItemIndex(this);
            /** @type {?} */
            const pointerPosition = this._getPointerPositionOnPage(event);
            /** @type {?} */
            const distance = this._getDragDistance(this._getPointerPositionOnPage(event));
            /** @type {?} */
            const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            this.ended.next({ source: this, distance });
            this.dropped.next({
                item: this,
                currentIndex,
                previousIndex: this._initialIndex,
                container: container,
                previousContainer: this._initialContainer,
                isPointerOverContainer,
                distance
            });
            container.drop(this, currentIndex, this._initialContainer, isPointerOverContainer, distance, this._initialIndex);
            this._dropContainer = this._initialContainer;
        }));
    }
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    _updateActiveDropContainer({ x, y }) {
        // Drop container that draggable has been moved into.
        /** @type {?} */
        let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                // Notify the old container that the item has left.
                this.exited.next({ item: this, container: (/** @type {?} */ (this._dropContainer)) });
                (/** @type {?} */ (this._dropContainer)).exit(this);
                // Notify the new container that the item has entered.
                this._dropContainer = (/** @type {?} */ (newContainer));
                this._dropContainer.enter(this, x, y, newContainer === this._initialContainer &&
                    // If we're re-entering the initial container and sorting is disabled,
                    // put item the into its starting index to begin with.
                    newContainer.sortingDisabled ? this._initialIndex : undefined);
                this.entered.next({
                    item: this,
                    container: (/** @type {?} */ (newContainer)),
                    currentIndex: (/** @type {?} */ (newContainer)).getItemIndex(this)
                });
            }));
        }
        (/** @type {?} */ (this._dropContainer))._startScrollingIfNecessary(x, y);
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    }
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    _createPreviewElement() {
        /** @type {?} */
        const previewConfig = this._previewTemplate;
        /** @type {?} */
        const previewClass = this.previewClass;
        /** @type {?} */
        const previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        let preview;
        if (previewTemplate && previewConfig) {
            // Measure the element before we've inserted the preview
            // since the insertion could throw off the measurement.
            /** @type {?} */
            const rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
            /** @type {?} */
            const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
            viewRef.detectChanges();
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            if (previewConfig.matchSize) {
                matchElementSize(preview, (/** @type {?} */ (rootRect)));
            }
            else {
                preview.style.transform =
                    getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
            }
        }
        else {
            /** @type {?} */
            const element = this._rootElement;
            preview = deepCloneNode(element);
            matchElementSize(preview, element.getBoundingClientRect());
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because it can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: `${this._config.zIndex || 1000}`
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        if (previewClass) {
            if (Array.isArray(previewClass)) {
                previewClass.forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                className => preview.classList.add(className)));
            }
            else {
                preview.classList.add(previewClass);
            }
        }
        return preview;
    }
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    _animatePreviewToPlaceholder() {
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        const placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        const duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            resolve => {
                /** @type {?} */
                const handler = (/** @type {?} */ (((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    if (!event || (event.target === this._preview && event.propertyName === 'transform')) {
                        this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                }))));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                const timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                this._preview.addEventListener('transitionend', handler);
            }));
        }));
    }
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    _createPlaceholderElement() {
        /** @type {?} */
        const placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        let placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            this._placeholderRef.detectChanges();
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    }
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    _getPointerPositionInElement(referenceElement, event) {
        /** @type {?} */
        const elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        const handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        const point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        const scrollPosition = this._getViewportScrollPosition();
        /** @type {?} */
        const x = point.pageX - referenceRect.left - scrollPosition.left;
        /** @type {?} */
        const y = point.pageY - referenceRect.top - scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    }
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    _getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        const point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        /** @type {?} */
        const scrollPosition = this._getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    }
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} point
     * @return {?}
     */
    _getConstrainedPointerPosition(point) {
        /** @type {?} */
        const constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
        /** @type {?} */
        const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            const { x: pickupX, y: pickupY } = this._pickupPositionInElement;
            /** @type {?} */
            const boundaryRect = this._boundaryRect;
            /** @type {?} */
            const previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            const minY = boundaryRect.top + pickupY;
            /** @type {?} */
            const maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            const minX = boundaryRect.left + pickupX;
            /** @type {?} */
            const maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    }
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    _updatePointerDirectionDelta(pointerPositionOnPage) {
        const { x, y } = pointerPositionOnPage;
        /** @type {?} */
        const delta = this._pointerDirectionDelta;
        /** @type {?} */
        const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        const changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        const changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    }
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    _toggleNativeDragInteractions() {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        const shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    }
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _removeRootElementListeners(element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    }
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    _applyRootElementTransform(x, y) {
        /** @type {?} */
        const transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    }
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    _getDragDistance(currentPosition) {
        /** @type {?} */
        const pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    }
    /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    _cleanupCachedDimensions() {
        this._boundaryRect = this._previewRect = undefined;
        this._parentPositions.clear();
    }
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    _containInsideBoundaryOnResize() {
        let { x, y } = this._passiveTransform;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        /** @type {?} */
        const boundaryRect = this._boundaryElement.getBoundingClientRect();
        /** @type {?} */
        const elementRect = this._rootElement.getBoundingClientRect();
        // It's possible that the element got hidden away after dragging (e.g. by switching to a
        // different tab). Don't do anything in this case so we don't clear the user's position.
        if ((boundaryRect.width === 0 && boundaryRect.height === 0) ||
            (elementRect.width === 0 && elementRect.height === 0)) {
            return;
        }
        /** @type {?} */
        const leftOverflow = boundaryRect.left - elementRect.left;
        /** @type {?} */
        const rightOverflow = elementRect.right - boundaryRect.right;
        /** @type {?} */
        const topOverflow = boundaryRect.top - elementRect.top;
        /** @type {?} */
        const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y, x });
        }
    }
    /**
     * Gets the drag start delay, based on the event type.
     * @private
     * @param {?} event
     * @return {?}
     */
    _getDragStartDelay(event) {
        /** @type {?} */
        const value = this.dragStartDelay;
        if (typeof value === 'number') {
            return value;
        }
        else if (isTouchEvent(event)) {
            return value.touch;
        }
        return value ? value.mouse : 0;
    }
    /**
     * Updates the internal state of the draggable element when scrolling has occurred.
     * @private
     * @param {?} event
     * @return {?}
     */
    _updateOnScroll(event) {
        /** @type {?} */
        const scrollDifference = this._parentPositions.handleScroll(event);
        // ClientRect dimensions are based on the page's scroll position so
        // we have to update the cached boundary ClientRect if the user has scrolled.
        if (this._boundaryRect && scrollDifference) {
            adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
        }
    }
    /**
     * Gets the scroll position of the viewport.
     * @private
     * @return {?}
     */
    _getViewportScrollPosition() {
        /** @type {?} */
        const cachedPosition = this._parentPositions.positions.get(this._document);
        return cachedPosition ? cachedPosition.scrollPosition :
            this._viewportRuler.getViewportScrollPosition();
    }
}
if (false) {}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    const clone = (/** @type {?} */ (node.cloneNode(true)));
    /** @type {?} */
    const descendantsWithId = clone.querySelectorAll('[id]');
    /** @type {?} */
    const descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (let i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        /** @type {?} */
        const cloneCanvases = clone.querySelectorAll('canvas');
        for (let i = 0; i < descendantCanvases.length; i++) {
            /** @type {?} */
            const correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove a node from the DOM and to do all the necessary null checks.
 * @param {?} node Node to be removed.
 * @return {?}
 */
function removeNode(node) {
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/**
 * Gets the element into which the drag preview should be inserted.
 * @param {?} documentRef
 * @return {?}
 */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 * @param {?} viewRef
 * @param {?} _document
 * @return {?}
 */
function getRootNode(viewRef, _document) {
    /** @type {?} */
    const rootNodes = viewRef.rootNodes;
    if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
        return (/** @type {?} */ (rootNodes[0]));
    }
    /** @type {?} */
    const wrapper = _document.createElement('div');
    rootNodes.forEach((/**
     * @param {?} node
     * @return {?}
     */
    node => wrapper.appendChild(node)));
    return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param {?} target Element that needs to be resized.
 * @param {?} sourceRect Dimensions of the source element.
 * @return {?}
 */
function matchElementSize(target, sourceRect) {
    target.style.width = `${sourceRect.width}px`;
    target.style.height = `${sourceRect.height}px`;
    target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    const from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    const to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    const target = array[from];
    /** @type {?} */
    const delta = to < from ? -1 : 1;
    for (let i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    const from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    const to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    const to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drop-list-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 * @type {?}
 */
const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 * @type {?}
 */
const AUTO_SCROLL_STEP = 2;
/**
 * Entry in the position cache for draggable items.
 * \@docs-private
 * @record
 */
function CachedItemPosition() { }
if (false) {}
/** @enum {number} */
const AutoScrollVerticalDirection = {
    NONE: 0, UP: 1, DOWN: 2,
};
/** @enum {number} */
const AutoScrollHorizontalDirection = {
    NONE: 0, LEFT: 1, RIGHT: 2,
};
/**
 * Internal compile-time-only representation of a `DropListRef`.
 * Used to avoid circular import issues between the `DropListRef` and the `DragRef`.
 * \@docs-private
 * @record
 */
function DropListRefInternal() { }
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * @template T
 */
class DropListRef {
    /**
     * @param {?} element
     * @param {?} _dragDropRegistry
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     */
    constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */
        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */
        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        () => true);
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */
        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */
        this._verticalScrollDirection = 0 /* NONE */;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */
        this._horizontalScrollDirection = 0 /* NONE */;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */
        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly.
         */
        this._cachedShadowRoot = null;
        /**
         * Starts the interval that'll auto-scroll the element.
         */
        this._startScrollInterval = (/**
         * @return {?}
         */
        () => {
            this._stopScrolling();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._stopScrollTimers))
                .subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const node = this._scrollNode;
                if (this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            }));
        });
        this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
        this._document = _document;
        this.withScrollableParents([this.element]);
        _dragDropRegistry.registerDropContainer(this);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
    }
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    dispose() {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._viewportScrollSubscription.unsubscribe();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = (/** @type {?} */ (null));
        this._parentPositions.clear();
        this._dragDropRegistry.removeDropContainer(this);
    }
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    isDragging() {
        return this._isDragging;
    }
    /**
     * Starts dragging an item.
     * @return {?}
     */
    start() {
        /** @type {?} */
        const styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
        this.beforeStarted.next();
        this._isDragging = true;
        // We need to disable scroll snapping while the user is dragging, because it breaks automatic
        // scrolling. The browser seems to round the value based on the snapping points which means
        // that we can't increment/decrement the scroll position.
        this._initialScrollSnap = styles.msScrollSnapType || ((/** @type {?} */ (styles))).scrollSnapType || '';
        ((/** @type {?} */ (styles))).scrollSnapType = styles.msScrollSnapType = 'none';
        this._cacheItems();
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._startReceiving(this)));
        this._viewportScrollSubscription.unsubscribe();
        this._listenToScrollEvents();
    }
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?=} index Index at which the item entered. If omitted, the container will try to figure it
     *   out automatically.
     * @return {?}
     */
    enter(item, pointerX, pointerY, index) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        /** @type {?} */
        let newIndex;
        if (index == null) {
            newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
            if (newIndex === -1) {
                // We use the coordinates of where the item entered the drop
                // zone to figure out at which index it should be inserted.
                newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
            }
        }
        else {
            newIndex = index;
        }
        /** @type {?} */
        const activeDraggables = this._activeDraggables;
        /** @type {?} */
        const currentIndex = activeDraggables.indexOf(item);
        /** @type {?} */
        const placeholder = item.getPlaceholderElement();
        /** @type {?} */
        let newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            const element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            /** @type {?} */
            const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
            if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
                element.insertBefore(placeholder, activeDraggables[0].getRootElement());
                activeDraggables.unshift(item);
            }
            else {
                element.appendChild(placeholder);
                activeDraggables.push(item);
            }
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed and also parent rects.
        this._cacheItemPositions();
        this._cacheParentPositions();
        this.entered.next({ item, container: this, currentIndex: this.getItemIndex(item) });
    }
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    exit(item) {
        this._reset();
        this.exited.next({ item, container: this });
    }
    /**
     * Drops an item into this container.
     * \@breaking-change 11.0.0 `previousIndex` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?} distance Distance the user has dragged since the start of the dragging sequence.
     * @param {?=} previousIndex Index of the item when dragging started.
     *
     * @return {?}
     */
    drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
        this._reset();
        // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.
        if (previousIndex == null) {
            previousIndex = previousContainer.getItemIndex(item);
        }
        this.dropped.next({ item,
            currentIndex,
            previousIndex,
            container: this,
            previousContainer,
            isPointerOverContainer,
            distance
        });
    }
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    withItems(items) {
        /** @type {?} */
        const previousItems = (/** @type {?} */ (this))._draggables;
        (/** @type {?} */ (this))._draggables = items;
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item._withDropContainer((/** @type {?} */ (this)))));
        if ((/** @type {?} */ (this)).isDragging()) {
            /** @type {?} */
            const draggedItems = previousItems.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.isDragging()));
            // If all of the items being dragged were removed
            // from the list, abort the current drag sequence.
            if (draggedItems.every((/**
             * @param {?} item
             * @return {?}
             */
            item => items.indexOf(item) === -1))) {
                (/** @type {?} */ (this))._reset();
            }
            else {
                (/** @type {?} */ (this))._cacheItems();
            }
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    withDirection(direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    connectedTo(connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    withOrientation(orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets which parent elements are can be scrolled while the user is dragging.
     * @template THIS
     * @this {THIS}
     * @param {?} elements Elements that can be scrolled.
     * @return {THIS}
     */
    withScrollableParents(elements) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])((/** @type {?} */ (this)).element);
        // We always allow the current element to be scrollable
        // so we need to ensure that it's in the array.
        (/** @type {?} */ (this))._scrollableElements =
            elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
        return (/** @type {?} */ (this));
    }
    /**
     * Gets the scrollable parents that are registered with this drop container.
     * @return {?}
     */
    getScrollableParents() {
        return this._scrollableElements;
    }
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    getItemIndex(item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        const items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, (/**
         * @param {?} currentItem
         * @return {?}
         */
        currentItem => currentItem.drag === item));
    }
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    isReceiving() {
        return this._activeSiblings.size > 0;
    }
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    _sortItem(item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled ||
            !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        const siblings = this._itemPositions;
        /** @type {?} */
        const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        const currentIndex = findIndex(siblings, (/**
         * @param {?} currentItem
         * @return {?}
         */
        currentItem => currentItem.drag === item));
        /** @type {?} */
        const siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        const currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        const newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        const delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        const oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item
        });
        siblings.forEach((/**
         * @param {?} sibling
         * @param {?} index
         * @return {?}
         */
        (sibling, index) => {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            const isDraggedItem = sibling.drag === item;
            /** @type {?} */
            const offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            const elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = `translate3d(${Math.round(sibling.offset)}px, 0, 0)`;
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = `translate3d(0, ${Math.round(sibling.offset)}px, 0)`;
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        }));
    }
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    _startScrollingIfNecessary(pointerX, pointerY) {
        if (this.autoScrollDisabled) {
            return;
        }
        /** @type {?} */
        let scrollNode;
        /** @type {?} */
        let verticalScrollDirection = 0 /* NONE */;
        /** @type {?} */
        let horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling any of the parent containers.
        this._parentPositions.positions.forEach((/**
         * @param {?} position
         * @param {?} element
         * @return {?}
         */
        (position, element) => {
            // We have special handling for the `document` below. Also this would be
            // nicer with a  for...of loop, but it requires changing a compiler flag.
            if (element === this._document || !position.clientRect || scrollNode) {
                return;
            }
            if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections((/** @type {?} */ (element)), position.clientRect, pointerX, pointerY);
                if (verticalScrollDirection || horizontalScrollDirection) {
                    scrollNode = (/** @type {?} */ (element));
                }
            }
        }));
        // Otherwise check if we can start scrolling the viewport.
        if (!verticalScrollDirection && !horizontalScrollDirection) {
            const { width, height } = this._viewportRuler.getViewportSize();
            /** @type {?} */
            const clientRect = { width, height, top: 0, right: width, bottom: height, left: 0 };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
            horizontalScrollDirection !== this._horizontalScrollDirection ||
            scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;
            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
            }
            else {
                this._stopScrolling();
            }
        }
    }
    /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    _stopScrolling() {
        this._stopScrollTimers.next();
    }
    /**
     * Caches the positions of the configured scrollable parents.
     * @private
     * @return {?}
     */
    _cacheParentPositions() {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        this._parentPositions.cache(this._scrollableElements);
        // The list element is always in the `scrollableElements`
        // so we can take advantage of the cached `ClientRect`.
        this._clientRect = (/** @type {?} */ ((/** @type {?} */ (this._parentPositions.positions.get(element))).clientRect));
    }
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    _cacheItemPositions() {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map((/**
         * @param {?} drag
         * @return {?}
         */
        drag => {
            /** @type {?} */
            const elementToMeasure = drag.getVisibleElement();
            return { drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        }));
    }
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    _reset() {
        this._isDragging = false;
        /** @type {?} */
        const styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
        ((/** @type {?} */ (styles))).scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const rootElement = item.getRootElement();
            if (rootElement) {
                rootElement.style.transform = '';
            }
        }));
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._stopReceiving(this)));
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._stopScrolling();
        this._viewportScrollSubscription.unsubscribe();
        this._parentPositions.clear();
    }
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    _getSiblingOffsetPx(currentIndex, siblings, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        const currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        const immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            const start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            const end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    }
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    _getItemOffsetPx(currentPosition, newPosition, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        let itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    }
    /**
     * Checks if pointer is entering in the first position
     * @private
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @return {?}
     */
    _shouldEnterAsFirstChild(pointerX, pointerY) {
        if (!this._activeDraggables.length) {
            return false;
        }
        /** @type {?} */
        const itemPositions = this._itemPositions;
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
        // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)
        /** @type {?} */
        const reversed = itemPositions[0].drag !== this._activeDraggables[0];
        if (reversed) {
            /** @type {?} */
            const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
            return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
        }
        else {
            /** @type {?} */
            const firstItemRect = itemPositions[0].clientRect;
            return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
        }
    }
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, (/**
         * @param {?} __0
         * @param {?} _
         * @param {?} array
         * @return {?}
         */
        ({ drag, clientRect }, _, array) => {
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                const direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === this._previousSwap.drag && direction === this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
        }));
    }
    /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    _cacheItems() {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheParentPositions();
    }
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    _isOverContainer(x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    }
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    _getSiblingContainerFromPosition(item, x, y) {
        return this._siblings.find((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._canReceive(item, x, y)));
    }
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    _canReceive(item, x, y) {
        if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
            return false;
        }
        /** @type {?} */
        const elementFromPoint = (/** @type {?} */ (this._getShadowRoot().elementFromPoint(x, y)));
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    }
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    _startReceiving(sibling) {
        /** @type {?} */
        const activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheParentPositions();
            this._listenToScrollEvents();
        }
    }
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    _stopReceiving(sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    }
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    _listenToScrollEvents() {
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.isDragging()) {
                /** @type {?} */
                const scrollDifference = this._parentPositions.handleScroll(event);
                if (scrollDifference) {
                    // Since we know the amount that the user has scrolled we can shift all of the
                    // client rectangles ourselves. This is cheaper than re-measuring everything and
                    // we can avoid inconsistent behavior where we might be measuring the element before
                    // its position has changed.
                    this._itemPositions.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ clientRect }) => {
                        adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                    }));
                    // We need two loops for this, because we want all of the cached
                    // positions to be up-to-date before we re-sort the item.
                    this._itemPositions.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ drag }) => {
                        if (this._dragDropRegistry.isDragging(drag)) {
                            // We need to re-sort the item manually, because the pointer move
                            // events won't be dispatched while the user is scrolling.
                            drag._sortFromLastPointerPosition();
                        }
                    }));
                }
            }
            else if (this.isReceiving()) {
                this._cacheParentPositions();
            }
        }));
    }
    /**
     * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
     * than saving it in property directly on init, because we want to resolve it as late as possible
     * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
     * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
     * @private
     * @return {?}
     */
    _getShadowRoot() {
        if (!this._cachedShadowRoot) {
            /** @type {?} */
            const shadowRoot = (/** @type {?} */ (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element))));
            this._cachedShadowRoot = shadowRoot || this._document;
        }
        return this._cachedShadowRoot;
    }
}
if (false) {}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Increments the vertical scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    const { top, bottom, height } = clientRect;
    /** @type {?} */
    const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1 /* UP */;
    }
    else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2 /* DOWN */;
    }
    return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @return {?}
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    const { left, right, width } = clientRect;
    /** @type {?} */
    const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1 /* LEFT */;
    }
    else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2 /* RIGHT */;
    }
    return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param {?} element Element for which we should calculate the scroll direction.
 * @param {?} clientRect Bounding client rectangle of the element.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    /** @type {?} */
    const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    /** @type {?} */
    const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    /** @type {?} */
    let verticalScrollDirection = 0 /* NONE */;
    /** @type {?} */
    let horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        /** @type {?} */
        const scrollTop = element.scrollTop;
        if (computedVertical === 1 /* UP */) {
            if (scrollTop > 0) {
                verticalScrollDirection = 1 /* UP */;
            }
        }
        else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2 /* DOWN */;
        }
    }
    if (computedHorizontal) {
        /** @type {?} */
        const scrollLeft = element.scrollLeft;
        if (computedHorizontal === 1 /* LEFT */) {
            if (scrollLeft > 0) {
                horizontalScrollDirection = 1 /* LEFT */;
            }
        }
        else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2 /* RIGHT */;
        }
    }
    return [verticalScrollDirection, horizontalScrollDirection];
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop-registry.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
const activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
class DragDropRegistry {
    /**
     * @param {?} _ngZone
     * @param {?} _document
     */
    constructor(_ngZone, _document) {
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this._activeDragInstances.size) {
                event.preventDefault();
            }
        });
        this._document = _document;
    }
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    registerDropContainer(drop) {
        if (!this._dropInstances.has(drop)) {
            this._dropInstances.add(drop);
        }
    }
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    registerDragItem(drag) {
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                this._document.addEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
            }));
        }
    }
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    removeDropContainer(drop) {
        this._dropInstances.delete(drop);
    }
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    removeDragItem(drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    }
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    startDragging(drag, event) {
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            const isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            const upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.pointerMove.next((/** @type {?} */ (e)))),
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.pointerUp.next((/** @type {?} */ (e)))),
                options: true
            })
                .set('scroll', {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.scroll.next(e)),
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this._globalListeners.forEach((/**
                 * @param {?} config
                 * @param {?} name
                 * @return {?}
                 */
                (config, name) => {
                    this._document.addEventListener(name, config.handler, config.options);
                }));
            }));
        }
    }
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    stopDragging(drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    }
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    isDragging(drag) {
        return this._activeDragInstances.has(drag);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._dragInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.removeDragItem(instance)));
        this._dropInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.removeDropContainer(instance)));
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    }
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    _clearGlobalListeners() {
        this._globalListeners.forEach((/**
         * @param {?} config
         * @param {?} name
         * @return {?}
         */
        (config, name) => {
            this._document.removeEventListener(name, config.handler, config.options);
        }));
        this._globalListeners.clear();
    }
}
DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) { return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
/** @nocollapse */
DragDropRegistry.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
/** @nocollapse */ DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
const DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
class DragDrop {
    /**
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?} _dragDropRegistry
     */
    constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    createDrag(element, config = DEFAULT_CONFIG) {
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    }
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    createDropList(element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    }
}
DragDrop.ɵfac = function DragDrop_Factory(t) { return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DragDropRegistry)); };
/** @nocollapse */
DragDrop.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"] },
    { type: DragDropRegistry }
];
/** @nocollapse */ DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDrop, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"] }, { type: DragDropRegistry }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Event emitted when the user starts dragging a draggable.
 * @record
 * @template T
 */
function CdkDragStart() { }
if (false) {}
/**
 * Event emitted when the user releases an item, before any animations have started.
 * @record
 * @template T
 */
function CdkDragRelease() { }
if (false) {}
/**
 * Event emitted when the user stops dragging a draggable.
 * @record
 * @template T
 */
function CdkDragEnd() { }
if (false) {}
/**
 * Event emitted when the user moves an item into a new drop container.
 * @record
 * @template T, I
 */
function CdkDragEnter() { }
if (false) {}
/**
 * Event emitted when the user removes an item from a
 * drop container by moving it into another one.
 * @record
 * @template T, I
 */
function CdkDragExit() { }
if (false) {}
/**
 * Event emitted when the user drops a draggable item inside a drop container.
 * @record
 * @template T, O
 */
function CdkDragDrop() { }
if (false) {}
/**
 * Event emitted as the user is dragging a draggable item.
 * @record
 * @template T
 */
function CdkDragMove() { }
if (false) {}
/**
 * Event emitted when the user swaps the position of two drag items.
 * @record
 * @template T, I
 */
function CdkDragSortEvent() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-parent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
const CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-handle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
class CdkDragHandle {
    /**
     * @param {?} element
     * @param {?=} parentDrag
     */
    constructor(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    /**
     * Whether starting to drag through this handle is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._stateChanges.next(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) { return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 8)); };
CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragHandle, selectors: [["", "cdkDragHandle", ""]], hostAttrs: [1, "cdk-drag-handle"], inputs: { disabled: ["cdkDragHandleDisabled", "disabled"] } });
/** @nocollapse */
CdkDragHandle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
CdkDragHandle.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragHandleDisabled',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragHandle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDragHandle]',
                host: {
                    'class': 'cdk-drag-handle'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_PARENT]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragHandleDisabled']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-placeholder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
class CdkDragPlaceholder {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) { return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragPlaceholder, selectors: [["ng-template", "cdkDragPlaceholder", ""]], inputs: { data: "data" } });
/** @nocollapse */
CdkDragPlaceholder.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
CdkDragPlaceholder.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[cdkDragPlaceholder]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-preview.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
class CdkDragPreview {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
        this._matchSize = false;
    }
    /**
     * Whether the preview should preserve the same size as the item that is being dragged.
     * @return {?}
     */
    get matchSize() { return this._matchSize; }
    /**
     * @param {?} value
     * @return {?}
     */
    set matchSize(value) { this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
}
CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) { return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragPreview, selectors: [["ng-template", "cdkDragPreview", ""]], inputs: { matchSize: "matchSize", data: "data" } });
/** @nocollapse */
CdkDragPreview.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
CdkDragPreview.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    matchSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPreview, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[cdkDragPreview]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 * @type {?}
 */
const CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
/**
 * Object that can be used to configure the drag
 * items and drop lists within a module or a component.
 * @record
 */
function DragDropConfig() { }
if (false) {}
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
const CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
class CdkDrag {
    /**
     * @param {?} element
     * @param {?} dropContainer
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewContainerRef
     * @param {?} config
     * @param {?} _dir
     * @param {?} dragDrop
     * @param {?} _changeDetectorRef
     */
    constructor(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const subscription = this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((/**
             * @param {?} movedEvent
             * @return {?}
             */
            movedEvent => ({
                source: this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            })))).subscribe(observer);
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
            });
        }));
        this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ?
                config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ?
                config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex
        });
        this._dragRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        // Note that usually the container is assigned when the drop list is picks up the item, but in
        // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
        // where there are no items on the first change detection pass, but the items get picked up as
        // soon as the user triggers another pass by dragging. This is a problem, because the item would
        // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
        // is too late since the two modes save different kinds of information. We work around it by
        // assigning the drop container both from here and the list.
        if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);
            dropContainer.addItem(this);
        }
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    /**
     * Whether starting to drag this element is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || (this.dropContainer && this.dropContainer.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._dragRef.disabled = this._disabled;
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    getPlaceholderElement() {
        return this._dragRef.getPlaceholderElement();
    }
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    getRootElement() {
        return this._dragRef.getRootElement();
    }
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    reset() {
        this._dragRef.reset();
    }
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    getFreeDragPosition() {
        return this._dragRef.getFreeDragPosition();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._updateRootElement();
            // Listen for any newly-added handles.
            this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
             * @param {?} handles
             * @return {?}
             */
            (handles) => {
                /** @type {?} */
                const childHandleElements = handles
                    .filter((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => handle._parentDrag === this))
                    .map((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => handle.element));
                this._dragRef.withHandles(childHandleElements);
            })), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((/**
             * @param {?} handles
             * @return {?}
             */
            (handles) => {
                return (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...handles.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                })))));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe((/**
             * @param {?} handleInstance
             * @return {?}
             */
            handleInstance => {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                const dragRef = this._dragRef;
                /** @type {?} */
                const handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            }));
            if (this.freeDragPosition) {
                this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const rootSelectorChange = changes['rootElementSelector'];
        /** @type {?} */
        const positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dropContainer) {
            this.dropContainer.removeItem(this);
        }
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    }
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    _updateRootElement() {
        /** @type {?} */
        const element = this.element.nativeElement;
        /** @type {?} */
        const rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error(`cdkDrag must be attached to an element node. ` +
                `Currently attached to "${rootElement.nodeName}".`);
        }
        this._dragRef.withRootElement(rootElement || element);
    }
    /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    _getBoundaryElement() {
        /** @type {?} */
        const boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    }
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _syncInputs(ref) {
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            if (!ref.isDragging()) {
                /** @type {?} */
                const dir = this._dir;
                /** @type {?} */
                const dragStartDelay = this.dragStartDelay;
                /** @type {?} */
                const placeholder = this._placeholderTemplate ? {
                    template: this._placeholderTemplate.templateRef,
                    context: this._placeholderTemplate.data,
                    viewContainer: this._viewContainerRef
                } : null;
                /** @type {?} */
                const preview = this._previewTemplate ? {
                    template: this._previewTemplate.templateRef,
                    context: this._previewTemplate.data,
                    matchSize: this._previewTemplate.matchSize,
                    viewContainer: this._viewContainerRef
                } : null;
                ref.disabled = this.disabled;
                ref.lockAxis = this.lockAxis;
                ref.dragStartDelay = (typeof dragStartDelay === 'object' && dragStartDelay) ?
                    dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
                ref.constrainPosition = this.constrainPosition;
                ref.previewClass = this.previewClass;
                ref
                    .withBoundaryElement(this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        }));
    }
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _handleEvents(ref) {
        ref.started.subscribe((/**
         * @return {?}
         */
        () => {
            this.started.emit({ source: this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        }));
        ref.released.subscribe((/**
         * @return {?}
         */
        () => {
            this.released.emit({ source: this });
        }));
        ref.ended.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.ended.emit({ source: this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.entered.emit({
                container: event.container.data,
                item: this,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.exited.emit({
                container: event.container.data,
                item: this
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: this,
                distance: event.distance
            });
        }));
    }
    /**
     * Assigns the default input values based on a provided config object.
     * @private
     * @param {?} config
     * @return {?}
     */
    _assignDefaults(config) {
        const { lockAxis, dragStartDelay, constrainPosition, previewClass, boundaryElement, draggingDisabled, rootElementSelector } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.dragStartDelay = dragStartDelay || 0;
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
        if (constrainPosition) {
            this.constrainPosition = constrainPosition;
        }
        if (previewClass) {
            this.previewClass = previewClass;
        }
        if (boundaryElement) {
            this.boundaryElement = boundaryElement;
        }
        if (rootElementSelector) {
            this.rootElementSelector = rootElementSelector;
        }
    }
}
CdkDrag.ɵfac = function CdkDrag_Factory(t) { return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDrag, selectors: [["", "cdkDrag", ""]], contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPreview, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPlaceholder, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragHandle, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._handles = _t);
    } }, hostAttrs: [1, "cdk-drag"], hostVars: 4, hostBindings: function CdkDrag_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    } }, inputs: { disabled: ["cdkDragDisabled", "disabled"], dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"], lockAxis: ["cdkDragLockAxis", "lockAxis"], constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"], previewClass: ["cdkDragPreviewClass", "previewClass"], boundaryElement: ["cdkDragBoundary", "boundaryElement"], rootElementSelector: ["cdkDragRootElement", "rootElementSelector"], data: ["cdkDragData", "data"], freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"] }, outputs: { started: "cdkDragStarted", released: "cdkDragReleased", ended: "cdkDragEnded", entered: "cdkDragEntered", exited: "cdkDragExited", dropped: "cdkDragDropped", moved: "cdkDragMoved" }, exportAs: ["cdkDrag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
CdkDrag.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: DragDrop },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
CdkDrag.propDecorators = {
    _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
    _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkDragPreview,] }],
    _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkDragPlaceholder,] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragData',] }],
    lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragLockAxis',] }],
    rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragRootElement',] }],
    boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragBoundary',] }],
    dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragStartDelay',] }],
    freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragFreeDragPosition',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragDisabled',] }],
    constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragConstrainPosition',] }],
    previewClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragPreviewClass',] }],
    started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragStarted',] }],
    released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragReleased',] }],
    ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragEnded',] }],
    entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragEntered',] }],
    exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragExited',] }],
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragDropped',] }],
    moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragMoved',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDrag, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDrag]',
                exportAs: 'cdkDrag',
                host: {
                    'class': 'cdk-drag',
                    '[class.cdk-drag-disabled]': 'disabled',
                    '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
                },
                providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DROP_LIST]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_CONFIG]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: DragDrop }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragStarted']
        }], released: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragReleased']
        }], ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEnded']
        }], entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEntered']
        }], exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragExited']
        }], dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragDropped']
        }], moved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragMoved']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragDisabled']
        }], dragStartDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragStartDelay']
        }], lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragLockAxis']
        }], constrainPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragConstrainPosition']
        }], previewClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragPreviewClass']
        }], boundaryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragBoundary']
        }], rootElementSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragRootElement']
        }], _handles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CdkDragHandle, { descendants: true }]
        }], _previewTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CdkDragPreview]
        }], _placeholderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CdkDragPlaceholder]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragData']
        }], freeDragPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragFreeDragPosition']
        }] }); })();
if (false) {}
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    let currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drop-list-group.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
class CdkDropListGroup {
    constructor() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    /**
     * Whether starting a dragging sequence from inside this group is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._items.clear();
    }
}
CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) { return new (t || CdkDropListGroup)(); };
CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDropListGroup, selectors: [["", "cdkDropListGroup", ""]], inputs: { disabled: ["cdkDropListGroupDisabled", "disabled"] }, exportAs: ["cdkDropListGroup"] });
CdkDropListGroup.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListGroupDisabled',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropListGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDropListGroup]',
                exportAs: 'cdkDropListGroup'
            }]
    }], function () { return []; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListGroupDisabled']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drop-list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
let _uniqueIdCounter = 0;
/**
 * Internal compile-time-only representation of a `CdkDropList`.
 * Used to avoid circular import issues between the `CdkDropList` and the `CdkDrag`.
 * \@docs-private
 * @record
 */
function CdkDropListInternal() { }
const ɵ0 = undefined;
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
class CdkDropList {
    /**
     * @param {?} element
     * @param {?} dragDrop
     * @param {?} _changeDetectorRef
     * @param {?=} _dir
     * @param {?=} _group
     * @param {?=} _scrollDispatcher
     * @param {?=} config
     */
    constructor(element, dragDrop, _changeDetectorRef, _dir, _group, _scrollDispatcher, config) {
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        this._scrollDispatcher = _scrollDispatcher;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        () => true);
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Keeps track of the items that are registered with this container. Historically we used to
         * do this with a `ContentChildren` query, however queries don't handle transplanted views very
         * well which means that we can't handle cases like dragging the headers of a `mat-table`
         * correctly. What we do instead is to have the items register themselves with the container
         * and then we sort them based on their position in the DOM.
         */
        this._unsortedItems = new Set();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        this._dropListRef.enterPredicate = (/**
         * @param {?} drag
         * @param {?} drop
         * @return {?}
         */
        (drag, drop) => {
            return this.enterPredicate(drag.data, drop.data);
        });
        this._setupInputSyncSubscription(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    /**
     * Whether starting a dragging sequence from this container is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || (!!this._group && this._group.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        // Usually we sync the directive and ref state right before dragging starts, in order to have
        // a single point of failure and to avoid having to use setters for everything. `disabled` is
        // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
        // the user in a disabled state, so we also need to sync it as it's being set.
        this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /**
     * Registers an items with the drop list.
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        this._unsortedItems.add(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    }
    /**
     * Removes an item from the drop list.
     * @param {?} item
     * @return {?}
     */
    removeItem(item) {
        this._unsortedItems.delete(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    }
    /**
     * Gets the registered items in the list, sorted by their position in the DOM.
     * @return {?}
     */
    getSortedItems() {
        return Array.from(this._unsortedItems).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
            // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise
            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._unsortedItems.clear();
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Starts dragging an item.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @return {?}
     */
    start() {
        this._dropListRef.start();
    }
    /**
     * Drops an item into this container.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     *
     * @return {?}
     */
    drop(item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, previousContainer._dropListRef, isPointerOverContainer, { x: 0, y: 0 });
    }
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    enter(item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    }
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    exit(item) {
        this._dropListRef.exit(item._dragRef);
    }
    /**
     * Figures out the index of an item in the container.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    getItemIndex(item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    }
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _setupInputSyncSubscription(ref) {
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            value => ref.withDirection(value)));
        }
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(this.connectedTo).map((/**
             * @param {?} drop
             * @return {?}
             */
            drop => {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find((/**
                     * @param {?} list
                     * @return {?}
                     */
                    list => list.id === drop)))) : drop;
            }));
            if (this._group) {
                this._group._items.forEach((/**
                 * @param {?} drop
                 * @return {?}
                 */
                drop => {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                }));
            }
            // Note that we resolve the scrollable parents here so that we delay the resolution
            // as long as possible, ensuring that the element is in its final place in the DOM.
            // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.
            if (!this._scrollableParentsResolved && this._scrollDispatcher) {
                /** @type {?} */
                const scrollableParents = this._scrollDispatcher
                    .getAncestorScrollContainers(this.element)
                    .map((/**
                 * @param {?} scrollable
                 * @return {?}
                 */
                scrollable => scrollable.getElementRef().nativeElement));
                this._dropListRef.withScrollableParents(scrollableParents);
                // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.
                this._scrollableParentsResolved = true;
            }
            ref.disabled = this.disabled;
            ref.lockAxis = this.lockAxis;
            ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(this.sortingDisabled);
            ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(this.autoScrollDisabled);
            ref
                .connectedTo(siblings.filter((/**
             * @param {?} drop
             * @return {?}
             */
            drop => drop && drop !== this)).map((/**
             * @param {?} list
             * @return {?}
             */
            list => list._dropListRef)))
                .withOrientation(this.orientation);
        }));
    }
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _handleEvents(ref) {
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            this._syncItemsWithRef();
            this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.entered.emit({
                container: this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.exited.emit({
                container: this,
                item: event.item.data
            });
            this._changeDetectorRef.markForCheck();
        }));
        ref.sorted.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: this,
                item: event.item.data
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            this._changeDetectorRef.markForCheck();
        }));
    }
    /**
     * Assigns the default input values based on a provided config object.
     * @private
     * @param {?} config
     * @return {?}
     */
    _assignDefaults(config) {
        const { lockAxis, draggingDisabled, sortingDisabled, listAutoScrollDisabled, listOrientation } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
        this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
        this.orientation = listOrientation || 'vertical';
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
    }
    /**
     * Syncs up the registered drag items with underlying drop list ref.
     * @private
     * @return {?}
     */
    _syncItemsWithRef() {
        this._dropListRef.withItems(this.getSortedItems().map((/**
         * @param {?} item
         * @return {?}
         */
        item => item._dragRef)));
    }
}
CdkDropList.ɵfac = function CdkDropList_Factory(t) { return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkDropListGroup, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8)); };
CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDropList, selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]], hostAttrs: [1, "cdk-drop-list"], hostVars: 7, hostBindings: function CdkDropList_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    } }, inputs: { connectedTo: ["cdkDropListConnectedTo", "connectedTo"], id: "id", enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"], disabled: ["cdkDropListDisabled", "disabled"], sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"], autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"], orientation: ["cdkDropListOrientation", "orientation"], lockAxis: ["cdkDropListLockAxis", "lockAxis"], data: ["cdkDropListData", "data"] }, outputs: { dropped: "cdkDropListDropped", entered: "cdkDropListEntered", exited: "cdkDropListExited", sorted: "cdkDropListSorted" }, exportAs: ["cdkDropList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // Prevent child drop lists from picking up the same group as their parent.
            { provide: CdkDropListGroup, useValue: ɵ0 },
            { provide: CDK_DROP_LIST, useExisting: CdkDropList },
        ])] });
/**
 * Keeps track of the drop lists that are currently on the page.
 */
CdkDropList._dropLists = [];
/** @nocollapse */
CdkDropList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: DragDrop },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_CONFIG,] }] }
];
CdkDropList.propDecorators = {
    connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListConnectedTo',] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListData',] }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListOrientation',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListLockAxis',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListDisabled',] }],
    sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListSortingDisabled',] }],
    enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListEnterPredicate',] }],
    autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListDropped',] }],
    entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListEntered',] }],
    exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListExited',] }],
    sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListSorted',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDropList], cdk-drop-list',
                exportAs: 'cdkDropList',
                providers: [
                    // Prevent child drop lists from picking up the same group as their parent.
                    { provide: CdkDropListGroup, useValue: ɵ0 },
                    { provide: CDK_DROP_LIST, useExisting: CdkDropList },
                ],
                host: {
                    'class': 'cdk-drop-list',
                    '[id]': 'id',
                    '[class.cdk-drop-list-disabled]': 'disabled',
                    '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                    '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: DragDrop }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: CdkDropListGroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_CONFIG]
            }] }]; }, { connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListConnectedTo']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enterPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListEnterPredicate']
        }], dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListDropped']
        }], entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListEntered']
        }], exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListExited']
        }], sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListSorted']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListDisabled']
        }], sortingDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListSortingDisabled']
        }], autoScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListAutoScrollDisabled']
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListOrientation']
        }], lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListLockAxis']
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListData']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragDropModule {
}
DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DragDropModule });
DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DragDropModule_Factory(t) { return new (t || DragDropModule)(); }, providers: [
        DragDrop,
    ], imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DragDropModule, { declarations: function () { return [CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"],
        CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"],
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                providers: [
                    DragDrop,
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=drag-drop.js.map

/***/ }),

/***/ "../addon-table/components/reorder/index.ts":
/*!**************************************************!*\
  !*** ../addon-table/components/reorder/index.ts ***!
  \**************************************************/
/*! exports provided: TuiReorderComponent, TuiReorderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reorder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reorder.component */ "../addon-table/components/reorder/reorder.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiReorderComponent", function() { return _reorder_component__WEBPACK_IMPORTED_MODULE_0__["TuiReorderComponent"]; });

/* harmony import */ var _reorder_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reorder.module */ "../addon-table/components/reorder/reorder.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiReorderModule", function() { return _reorder_module__WEBPACK_IMPORTED_MODULE_1__["TuiReorderModule"]; });





/***/ }),

/***/ "../addon-table/components/reorder/reorder.component.ts":
/*!**************************************************************!*\
  !*** ../addon-table/components/reorder/reorder.component.ts ***!
  \**************************************************************/
/*! exports provided: TuiReorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiReorderComponent", function() { return TuiReorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/fesm2015/drag-drop.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-table/tokens */ "../addon-table/tokens/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _cdk_directives_prevent_default_prevent_default_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../cdk/directives/prevent-default/prevent-default.directive */ "../cdk/directives/prevent-default/prevent-default.directive.ts");












function TuiReorderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "tui-svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TuiReorderComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.toggle(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("t-button_hidden", !ctx_r0.isEnabled(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, ctx_r0.showHideText$))("icon", ctx_r0.getIcon(item_r1));
} }
// @bad TODO: a11y
class TuiReorderComponent {
    constructor(showHideText$) {
        this.showHideText$ = showHideText$;
        this.items = [];
        this.enabled = [];
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.enabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    noop() { }
    isEnabled(item) {
        return this.enabled.includes(item);
    }
    getIcon(item) {
        return this.isEnabled(item) ? `tuiIconEyeOpen` : `tuiIconEyeClosed`;
    }
    toggle(toggled) {
        const enabled = this.isEnabled(toggled)
            ? this.enabled.filter(item => item !== toggled)
            : this.enabled.concat(toggled);
        this.updateEnabled(enabled);
    }
    drop(event) {
        const items = [...this.items];
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(items, event.previousIndex, event.currentIndex);
        this.items = items;
        this.itemsChange.emit(items);
        this.updateEnabled(items.filter(item => this.enabled.includes(item)));
    }
    updateEnabled(enabled) {
        this.enabled = enabled;
        this.enabledChange.emit(enabled);
    }
}
TuiReorderComponent.ɵfac = function TuiReorderComponent_Factory(t) { return new (t || TuiReorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_3__["TUI_TABLE_SHOW_HIDE_MESSAGE"])); };
TuiReorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TuiReorderComponent, selectors: [["tui-reorder"]], hostBindings: function TuiReorderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusout.stop", function TuiReorderComponent_focusout_stop_HostBindingHandler() { return ctx.noop(); });
    } }, inputs: { items: "items", enabled: "enabled" }, outputs: { itemsChange: "itemsChange", enabledChange: "enabledChange" }, decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "t-wrapper", 3, "cdkDropListDropped"], ["tabindex", "-1", "cdkDrag", "", "class", "t-item", 4, "ngFor", "ngForOf"], ["tabindex", "-1", "cdkDrag", "", 1, "t-item"], ["src", "tuiIconDrag", 1, "t-icon"], ["type", "button", "tuiIconButton", "", "appearance", "icon", "size", "xs", "tuiPreventDefault", "mousedown", 1, "t-button", 3, "title", "icon", "click"]], template: function TuiReorderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function TuiReorderComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TuiReorderComponent_div_1_Template, 5, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__["TuiSvgComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["TuiButtonComponent"], _cdk_directives_prevent_default_prevent_default_directive__WEBPACK_IMPORTED_MODULE_9__["TuiPreventDefaultDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  font: var(--tui-font-text-s);\n  padding: 0.5rem 0;\n}\n.t-item[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  display: flex;\n  height: 2rem;\n  align-items: center;\n  padding: 0 0.75rem;\n  cursor: ns-resize;\n  background: var(--tui-base-01);\n  outline: none;\n}\n.t-item[_ngcontent-%COMP%]:hover {\n  background: var(--tui-base-02);\n}\n.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.t-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  color: var(--tui-base-05);\n}\n.t-button[_ngcontent-%COMP%] {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  margin-left: auto;\n  opacity: 0;\n}\n.t-button_hidden[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.t-wrapper.cdk-drop-list-dragging[_ngcontent-%COMP%]   .t-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.t-wrapper.cdk-drop-list-dragging[_ngcontent-%COMP%]   .t-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder):hover {\n  background: var(--tui-base-01);\n}\n.t-wrapper.cdk-drop-list-dragging[_ngcontent-%COMP%]   .t-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder)   .t-button[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvcmVvcmRlci9yZW9yZGVyLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9hZGRvbi10YWJsZS9jb21wb25lbnRzL3Jlb3JkZXIvcmVvcmRlci5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBREtKO0FDRkE7RUM2TkksK0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEN05BLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FETUo7QUNKSTtFQUNJLDhCQUFBO0FETVI7QUNQSTtFQUlRLFVBQUE7QURNWjtBQ0RBO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtBREdKO0FDQUE7RUNxTUksNEJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEck1BLGlCQUFBO0VBQ0EsVUFBQTtBRElKO0FDRkk7RUFDSSxVQUFBO0FESVI7QUFDQSxnQ0FBZ0M7QUNBaEM7RUFDSSxVQUFBO0FERUo7QUFDQSxnQ0FBZ0M7QUNDaEM7RUFDSSxzREFBQTtBRENKO0FBQ0EsZ0NBQWdDO0FDRWhDO0VBQ0ksc0RBQUE7QURBSjtBQ0VJO0VBQ0ksOEJBQUE7QURBUjtBQ0pBO0VBUVEsYUFBQTtBRERSIiwiZmlsZSI6InByb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvcmVvcmRlci9yZW9yZGVyLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cbi50LWl0ZW0ge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcbiAgY3Vyc29yOiBucy1yZXNpemU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFzZS0wMik7XG59XG4udC1pdGVtOmhvdmVyIC50LWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG59XG4udC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGNvbG9yOiB2YXIoLS10dWktYmFzZS0wNSk7XG59XG4udC1idXR0b24ge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgb3BhY2l0eTogMDtcbn1cbi50LWJ1dHRvbl9oaWRkZW4ge1xuICBvcGFjaXR5OiAxO1xufVxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4udC13cmFwcGVyLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLnQtaXRlbTpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbi50LXdyYXBwZXIuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAudC1pdGVtOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDEpO1xufVxuLnQtd3JhcHBlci5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC50LWl0ZW06bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikgLnQtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG59XG5cbi50LWl0ZW0ge1xuICAgIC50cmFuc2l0aW9uKGJhY2tncm91bmQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAwLjc1cmVtO1xuICAgIGN1cnNvcjogbnMtcmVzaXplO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAyKTtcblxuICAgICAgICAudC1idXR0b24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTA1KTtcbn1cblxuLnQtYnV0dG9uIHtcbiAgICAudHJhbnNpdGlvbihvcGFjaXR5KTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJl9oaWRkZW4ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbi50LXdyYXBwZXIuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAudC1pdGVtOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDEpO1xuICAgIH1cblxuICAgIC50LWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiReorderComponent.prototype, "items", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiReorderComponent.prototype, "enabled", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TuiReorderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: `tui-reorder`,
                templateUrl: `./reorder.template.html`,
                styleUrls: [`./reorder.style.less`],
            }]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_3__["TUI_TABLE_SHOW_HIDE_MESSAGE"]]
            }] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], itemsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], enabledChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], noop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: [`focusout.stop`]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/reorder/reorder.module.ts":
/*!***********************************************************!*\
  !*** ../addon-table/components/reorder/reorder.module.ts ***!
  \***********************************************************/
/*! exports provided: TuiReorderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiReorderModule", function() { return TuiReorderModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/fesm2015/drag-drop.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _reorder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reorder.component */ "../addon-table/components/reorder/reorder.component.ts");







class TuiReorderModule {
}
TuiReorderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TuiReorderModule });
TuiReorderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function TuiReorderModule_Factory(t) { return new (t || TuiReorderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiPreventDefaultModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TuiReorderModule, { declarations: [_reorder_component__WEBPACK_IMPORTED_MODULE_5__["TuiReorderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiPreventDefaultModule"]], exports: [_reorder_component__WEBPACK_IMPORTED_MODULE_5__["TuiReorderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TuiReorderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiPreventDefaultModule"],
                ],
                declarations: [_reorder_component__WEBPACK_IMPORTED_MODULE_5__["TuiReorderComponent"]],
                exports: [_reorder_component__WEBPACK_IMPORTED_MODULE_5__["TuiReorderComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-table/tokens/i18n.ts":
/*!*************************************!*\
  !*** ../addon-table/tokens/i18n.ts ***!
  \*************************************/
/*! exports provided: TUI_TABLE_SHOW_HIDE_MESSAGE, TUI_TABLE_PAGINATION_TEXTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_SHOW_HIDE_MESSAGE", function() { return TUI_TABLE_SHOW_HIDE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_TEXTS", function() { return TUI_TABLE_PAGINATION_TEXTS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/i18n */ "../i18n/index.ts");


const TUI_TABLE_SHOW_HIDE_MESSAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`tui-reorder i18n button`, {
    factory: Object(_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_1__["extractI18n"])(`showHideText`),
});
const TUI_TABLE_PAGINATION_TEXTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`tui-table-pagination i18n texts`, {
    factory: Object(_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_1__["extractI18n"])(`paginationTexts`),
});


/***/ }),

/***/ "../addon-table/tokens/index.ts":
/*!**************************************!*\
  !*** ../addon-table/tokens/index.ts ***!
  \**************************************/
/*! exports provided: TUI_TABLE_SHOW_HIDE_MESSAGE, TUI_TABLE_PAGINATION_TEXTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n */ "../addon-table/tokens/i18n.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_SHOW_HIDE_MESSAGE", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["TUI_TABLE_SHOW_HIDE_MESSAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_TEXTS", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["TUI_TABLE_PAGINATION_TEXTS"]; });




/***/ })

}]);
//# sourceMappingURL=default~components-input-input-module~directives-dropdown-context-dropdown-context-module~markup-bre~ebccd6b5.js.map