import { Injectable, NgZone, Inject, ɵɵdefineInjectable, ɵɵinject, InjectionToken, Directive, ElementRef, Optional, Input, TemplateRef, EventEmitter, isDevMode, SkipSelf, ViewContainerRef, ChangeDetectorRef, ContentChildren, ContentChild, Output, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ViewportRuler, ScrollDispatcher, CdkScrollableModule } from '@angular/cdk/scrolling';
import { normalizePassiveListenerOptions, _getShadowRoot } from '@angular/cdk/platform';
import { coerceBooleanProperty, coerceElement, coerceNumberProperty, coerceArray } from '@angular/cdk/coercion';
import { Subject, Subscription, interval, animationFrameScheduler, Observable, merge } from 'rxjs';
import { __spread, __read } from 'tslib';
import { takeUntil, map, take, startWith, tap, switchMap } from 'rxjs/operators';
import { Directionality } from '@angular/cdk/bidi';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @docs-private
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */
function toggleNativeDragInteractions(element, enable) {
    var userSelect = enable ? '' : 'none';
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
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Parses a CSS time value to milliseconds. */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */
function getTransformTransitionDurationInMs(element) {
    var computedStyle = getComputedStyle(element);
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    var property = transitionedProperties.find(function (prop) { return prop === 'transform' || prop === 'all'; });
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    var propertyIndex = transitionedProperties.indexOf(property);
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */
function parseCssPropertyValue(computedStyle, name) {
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map(function (part) { return part.trim(); });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Gets a mutable version of an element's bounding `ClientRect`. */
function getMutableClientRect(element) {
    var clientRect = element.getBoundingClientRect();
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
 * @param clientRect ClientRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param clientRect `ClientRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param rect ClientRect to check against.
 * @param threshold Threshold around the ClientRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */
function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
    var top = rect.top, right = rect.right, bottom = rect.bottom, left = rect.left, width = rect.width, height = rect.height;
    var xThreshold = width * threshold;
    var yThreshold = height * threshold;
    return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
        pointerX > left - xThreshold && pointerX < right + xThreshold;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Keeps track of the scroll position and dimensions of the parents of an element. */
var ParentPositionTracker = /** @class */ (function () {
    function ParentPositionTracker(_document, _viewportRuler) {
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        /** Cached positions of the scrollable parent elements. */
        this.positions = new Map();
    }
    /** Clears the cached positions. */
    ParentPositionTracker.prototype.clear = function () {
        this.positions.clear();
    };
    /** Caches the positions. Should be called at the beginning of a drag sequence. */
    ParentPositionTracker.prototype.cache = function (elements) {
        var _this = this;
        this.clear();
        this.positions.set(this._document, {
            scrollPosition: this._viewportRuler.getViewportScrollPosition(),
        });
        elements.forEach(function (element) {
            _this.positions.set(element, {
                scrollPosition: { top: element.scrollTop, left: element.scrollLeft },
                clientRect: getMutableClientRect(element)
            });
        });
    };
    /** Handles scrolling while a drag is taking place. */
    ParentPositionTracker.prototype.handleScroll = function (event) {
        var target = event.target;
        var cachedPosition = this.positions.get(target);
        if (!cachedPosition) {
            return null;
        }
        // Used when figuring out whether an element is inside the scroll parent. If the scrolled
        // parent is the `document`, we use the `documentElement`, because IE doesn't support
        // `contains` on the `document`.
        var scrolledParentNode = target === this._document ? target.documentElement : target;
        var scrollPosition = cachedPosition.scrollPosition;
        var newTop;
        var newLeft;
        if (target === this._document) {
            var viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();
            newTop = viewportScrollPosition.top;
            newLeft = viewportScrollPosition.left;
        }
        else {
            newTop = target.scrollTop;
            newLeft = target.scrollLeft;
        }
        var topDifference = scrollPosition.top - newTop;
        var leftDifference = scrollPosition.left - newLeft;
        // Go through and update the cached positions of the scroll
        // parents that are inside the element that was scrolled.
        this.positions.forEach(function (position, node) {
            if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
            }
        });
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
        return { top: topDifference, left: leftDifference };
    };
    return ParentPositionTracker;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Options that can be used to bind a passive event listener. */
var passiveEventListenerOptions = normalizePassiveListenerOptions({ passive: true });
/** Options that can be used to bind an active event listener. */
var activeEventListenerOptions = normalizePassiveListenerOptions({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */
var DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
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
        /** CSS `transform` that is applied to the element while it's being dragged. */
        this._activeTransform = { x: 0, y: 0 };
        /** Emits when the item is being moved. */
        this._moveEvents = new Subject();
        /** Subscription to pointer movement events. */
        this._pointerMoveSubscription = Subscription.EMPTY;
        /** Subscription to the event that is dispatched when the user lifts their pointer. */
        this._pointerUpSubscription = Subscription.EMPTY;
        /** Subscription to the viewport being scrolled. */
        this._scrollSubscription = Subscription.EMPTY;
        /** Subscription to the viewport being resized. */
        this._resizeSubscription = Subscription.EMPTY;
        /** Cached reference to the boundary element. */
        this._boundaryElement = null;
        /** Whether the native dragging interactions have been enabled on the root element. */
        this._nativeInteractionsEnabled = true;
        /** Elements that can be used to drag the draggable item. */
        this._handles = [];
        /** Registered handles that are currently disabled. */
        this._disabledHandles = new Set();
        /** Layout direction of the item. */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /** Emits as the drag sequence is being prepared. */
        this.beforeStarted = new Subject();
        /** Emits when the user starts dragging the item. */
        this.started = new Subject();
        /** Emits when the user has released a drag item, before any animations have started. */
        this.released = new Subject();
        /** Emits when the user stops dragging an item in the container. */
        this.ended = new Subject();
        /** Emits when the user has moved the item into a new container. */
        this.entered = new Subject();
        /** Emits when the user removes the item its container by dragging it into another container. */
        this.exited = new Subject();
        /** Emits when the user drops the item inside a container. */
        this.dropped = new Subject();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /** Handler for the `mousedown`/`touchstart` events. */
        this._pointerDown = function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                var targetHandle = _this._handles.find(function (handle) {
                    var target = event.target;
                    return !!target && (target === handle || handle.contains(target));
                });
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        };
        /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
        this._pointerMove = function (event) {
            // Prevent the default action as early as possible in order to block
            // native actions like dragging the selected text or images with the mouse.
            event.preventDefault();
            var pointerPosition = _this._getPointerPositionOnPage(event);
            if (!_this._hasStartedDragging) {
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    var isDelayElapsed = Date.now() >= _this._dragStartTime + _this._getDragStartDelay(event);
                    if (!isDelayElapsed) {
                        _this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!_this._dropContainer || !_this._dropContainer.isDragging()) {
                        _this._hasStartedDragging = true;
                        _this._ngZone.run(function () { return _this._startDragSequence(event); });
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(pointerPosition);
            _this._hasMoved = true;
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                _this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEvents.observers.length) {
                _this._ngZone.run(function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        distance: _this._getDragDistance(constrainedPointerPosition),
                        delta: _this._pointerDirectionDelta
                    });
                });
            }
        };
        /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
        this._pointerUp = function (event) {
            _this._endDragSequence(event);
        };
        this.withRootElement(element);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: function (value) {
            var newValue = coerceBooleanProperty(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    DragRef.prototype.getPlaceholderElement = function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    DragRef.prototype.getRootElement = function () {
        return this._rootElement;
    };
    /**
     * Gets the currently-visible element that represents the drag item.
     * While dragging this is the placeholder, otherwise it's the root element.
     */
    DragRef.prototype.getVisibleElement = function () {
        return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
    };
    /** Registers the handles that can be used to drag the element. */
    DragRef.prototype.withHandles = function (handles) {
        this._handles = handles.map(function (handle) { return coerceElement(handle); });
        this._handles.forEach(function (handle) { return toggleNativeDragInteractions(handle, false); });
        this._toggleNativeDragInteractions();
        return this;
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    DragRef.prototype.withPreviewTemplate = function (template) {
        this._previewTemplate = template;
        return this;
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    DragRef.prototype.withPlaceholderTemplate = function (template) {
        this._placeholderTemplate = template;
        return this;
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    DragRef.prototype.withRootElement = function (rootElement) {
        var _this = this;
        var element = coerceElement(rootElement);
        if (element !== this._rootElement) {
            if (this._rootElement) {
                this._removeRootElementListeners(this._rootElement);
            }
            this._ngZone.runOutsideAngular(function () {
                element.addEventListener('mousedown', _this._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', _this._pointerDown, passiveEventListenerOptions);
            });
            this._initialTransform = undefined;
            this._rootElement = element;
        }
        return this;
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    DragRef.prototype.withBoundaryElement = function (boundaryElement) {
        var _this = this;
        this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
        this._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            this._resizeSubscription = this._viewportRuler
                .change(10)
                .subscribe(function () { return _this._containInsideBoundaryOnResize(); });
        }
        return this;
    };
    /** Removes the dragging functionality from the DOM element. */
    DragRef.prototype.dispose = function () {
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
            this._previewTemplate = this._anchor = null;
    };
    /** Checks whether the element is currently being dragged. */
    DragRef.prototype.isDragging = function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    DragRef.prototype.reset = function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    DragRef.prototype.disableHandle = function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    DragRef.prototype.enableHandle = function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    DragRef.prototype.withDirection = function (direction) {
        this._direction = direction;
        return this;
    };
    /** Sets the container that the item is part of. */
    DragRef.prototype._withDropContainer = function (container) {
        this._dropContainer = container;
    };
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */
    DragRef.prototype.getFreeDragPosition = function () {
        var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    };
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    DragRef.prototype.setFreeDragPosition = function (value) {
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform.x = value.x;
        this._passiveTransform.y = value.y;
        if (!this._dropContainer) {
            this._applyRootElementTransform(value.x, value.y);
        }
        return this;
    };
    /** Updates the item's sort order based on the last-known pointer position. */
    DragRef.prototype._sortFromLastPointerPosition = function () {
        var position = this._pointerPositionAtLastDirectionChange;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(this._getConstrainedPointerPosition(position));
        }
    };
    /** Unsubscribes from the global subscriptions. */
    DragRef.prototype._removeSubscriptions = function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    DragRef.prototype._destroyPreview = function () {
        if (this._preview) {
            removeNode(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = null;
    };
    /** Destroys the placeholder element and its ViewRef. */
    DragRef.prototype._destroyPlaceholder = function () {
        if (this._placeholder) {
            removeNode(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = null;
    };
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @param event Browser event object that ended the sequence.
     */
    DragRef.prototype._endDragSequence = function (event) {
        var _this = this;
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
            this._animatePreviewToPlaceholder().then(function () {
                _this._cleanupDragArtifacts(event);
                _this._cleanupCachedDimensions();
                _this._dragDropRegistry.stopDragging(_this);
            });
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run(function () {
                _this.ended.next({
                    source: _this,
                    distance: _this._getDragDistance(_this._getPointerPositionOnPage(event))
                });
            });
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    };
    /** Starts the dragging sequence. */
    DragRef.prototype._startDragSequence = function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        var dropContainer = this._dropContainer;
        if (dropContainer) {
            var element = this._rootElement;
            var parent_1 = element.parentNode;
            var preview = this._preview = this._createPreviewElement();
            var placeholder = this._placeholder = this._createPlaceholderElement();
            var anchor = this._anchor = this._anchor || this._document.createComment('');
            // Insert an anchor node so that we can restore the element's position in the DOM.
            parent_1.insertBefore(anchor, element);
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild(parent_1.replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            dropContainer.start();
            this._initialContainer = dropContainer;
            this._initialIndex = dropContainer.getItemIndex(this);
        }
        else {
            this._initialContainer = this._initialIndex = undefined;
        }
        // Important to run after we've called `start` on the parent container
        // so that it has had time to resolve its scrollable parents.
        this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    DragRef.prototype._initializeDragSequence = function (referenceElement, event) {
        var _this = this;
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        var isDragging = this.isDragging();
        var isTouchSequence = isTouchEvent(event);
        var isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
        var rootElement = this._rootElement;
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && event.target.draggable && event.type === 'mousedown') {
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
        this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(function (scrollEvent) {
            _this._updateOnScroll(scrollEvent);
        });
        if (this._boundaryElement) {
            this._boundaryRect = getMutableClientRect(this._boundaryElement);
        }
        // If we have a custom preview we can't know ahead of time how large it'll be so we position
        // it next to the cursor. The exception is when the consumer has opted into making the preview
        // the same size as the root element, in which case we do know the size.
        var previewTemplate = this._previewTemplate;
        this._pickupPositionInElement = previewTemplate && previewTemplate.template &&
            !previewTemplate.matchSize ? { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    DragRef.prototype._cleanupDragArtifacts = function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run(function () {
            var container = _this._dropContainer;
            var currentIndex = container.getItemIndex(_this);
            var pointerPosition = _this._getPointerPositionOnPage(event);
            var distance = _this._getDragDistance(_this._getPointerPositionOnPage(event));
            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            _this.ended.next({ source: _this, distance: distance });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialIndex,
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer, distance, _this._initialIndex);
            _this._dropContainer = _this._initialContainer;
        });
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    DragRef.prototype._updateActiveDropContainer = function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: _this._dropContainer });
                _this._dropContainer.exit(_this);
                // Notify the new container that the item has entered.
                _this._dropContainer = newContainer;
                _this._dropContainer.enter(_this, x, y, newContainer === _this._initialContainer &&
                    // If we're re-entering the initial container and sorting is disabled,
                    // put item the into its starting index to begin with.
                    newContainer.sortingDisabled ? _this._initialIndex : undefined);
                _this.entered.next({
                    item: _this,
                    container: newContainer,
                    currentIndex: newContainer.getItemIndex(_this)
                });
            });
        }
        this._dropContainer._startScrollingIfNecessary(x, y);
        this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    DragRef.prototype._createPreviewElement = function () {
        var previewConfig = this._previewTemplate;
        var previewClass = this.previewClass;
        var previewTemplate = previewConfig ? previewConfig.template : null;
        var preview;
        if (previewTemplate && previewConfig) {
            // Measure the element before we've inserted the preview
            // since the insertion could throw off the measurement.
            var rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
            var viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
            viewRef.detectChanges();
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            if (previewConfig.matchSize) {
                matchElementSize(preview, rootRect);
            }
            else {
                preview.style.transform =
                    getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
            }
        }
        else {
            var element = this._rootElement;
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
            zIndex: "" + (this._config.zIndex || 1000)
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        if (previewClass) {
            if (Array.isArray(previewClass)) {
                previewClass.forEach(function (className) { return preview.classList.add(className); });
            }
            else {
                preview.classList.add(previewClass);
            }
        }
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular(function () {
            return new Promise(function (resolve) {
                var handler = (function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                });
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                var timeout = setTimeout(handler, duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            });
        });
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    DragRef.prototype._createPlaceholderElement = function () {
        var placeholderConfig = this._placeholderTemplate;
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
            this._placeholderRef.detectChanges();
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    DragRef.prototype._getPointerPositionInElement = function (referenceElement, event) {
        var elementRect = this._rootElement.getBoundingClientRect();
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        var scrollPosition = this._getViewportScrollPosition();
        var x = point.pageX - referenceRect.left - scrollPosition.left;
        var y = point.pageY - referenceRect.top - scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    DragRef.prototype._getPointerPositionOnPage = function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        var scrollPosition = this._getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    DragRef.prototype._getConstrainedPointerPosition = function (point) {
        var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            var boundaryRect = this._boundaryRect;
            var previewRect = this._previewRect;
            var minY = boundaryRect.top + pickupY;
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            var minX = boundaryRect.left + pickupX;
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    DragRef.prototype._updatePointerDirectionDelta = function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        var delta = this._pointerDirectionDelta;
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        var changeX = Math.abs(x - positionSinceLastChange.x);
        var changeY = Math.abs(y - positionSinceLastChange.y);
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
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    DragRef.prototype._toggleNativeDragInteractions = function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        var shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    DragRef.prototype._removeRootElementListeners = function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */
    DragRef.prototype._applyRootElementTransform = function (x, y) {
        var transform = getTransform(x, y);
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
    };
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */
    DragRef.prototype._getDragDistance = function (currentPosition) {
        var pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    };
    /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
    DragRef.prototype._cleanupCachedDimensions = function () {
        this._boundaryRect = this._previewRect = undefined;
        this._parentPositions.clear();
    };
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     */
    DragRef.prototype._containInsideBoundaryOnResize = function () {
        var _a = this._passiveTransform, x = _a.x, y = _a.y;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        var boundaryRect = this._boundaryElement.getBoundingClientRect();
        var elementRect = this._rootElement.getBoundingClientRect();
        // It's possible that the element got hidden away after dragging (e.g. by switching to a
        // different tab). Don't do anything in this case so we don't clear the user's position.
        if ((boundaryRect.width === 0 && boundaryRect.height === 0) ||
            (elementRect.width === 0 && elementRect.height === 0)) {
            return;
        }
        var leftOverflow = boundaryRect.left - elementRect.left;
        var rightOverflow = elementRect.right - boundaryRect.right;
        var topOverflow = boundaryRect.top - elementRect.top;
        var bottomOverflow = elementRect.bottom - boundaryRect.bottom;
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
            this.setFreeDragPosition({ y: y, x: x });
        }
    };
    /** Gets the drag start delay, based on the event type. */
    DragRef.prototype._getDragStartDelay = function (event) {
        var value = this.dragStartDelay;
        if (typeof value === 'number') {
            return value;
        }
        else if (isTouchEvent(event)) {
            return value.touch;
        }
        return value ? value.mouse : 0;
    };
    /** Updates the internal state of the draggable element when scrolling has occurred. */
    DragRef.prototype._updateOnScroll = function (event) {
        var scrollDifference = this._parentPositions.handleScroll(event);
        // ClientRect dimensions are based on the page's scroll position so
        // we have to update the cached boundary ClientRect if the user has scrolled.
        if (this._boundaryRect && scrollDifference) {
            adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
        }
    };
    /** Gets the scroll position of the viewport. */
    DragRef.prototype._getViewportScrollPosition = function () {
        var cachedPosition = this._parentPositions.positions.get(this._document);
        return cachedPosition ? cachedPosition.scrollPosition :
            this._viewportRuler.getViewportScrollPosition();
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/** Creates a deep clone of an element. */
function deepCloneNode(node) {
    var clone = node.cloneNode(true);
    var descendantsWithId = clone.querySelectorAll('[id]');
    var descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        var cloneCanvases = clone.querySelectorAll('canvas');
        for (var i = 0; i < descendantCanvases.length; i++) {
            var correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/** Clamps a value between a minimum and a maximum. */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove a node from the DOM and to do all the necessary null checks.
 * @param node Node to be removed.
 */
function removeNode(node) {
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
/** Determines whether an event is a touch event. */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/** Gets the element into which the drag preview should be inserted. */
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
 */
function getRootNode(viewRef, _document) {
    var rootNodes = viewRef.rootNodes;
    if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
        return rootNodes[0];
    }
    var wrapper = _document.createElement('div');
    rootNodes.forEach(function (node) { return wrapper.appendChild(node); });
    return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */
function matchElementSize(target, sourceRect) {
    target.style.width = sourceRect.width + "px";
    target.style.height = sourceRect.height + "px";
    target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */
function moveItemInArray(array, fromIndex, toIndex) {
    var from = clamp$1(fromIndex, array.length - 1);
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    var target = array[from];
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to put the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    var from = clamp$1(currentIndex, currentArray.length - 1);
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @param currentArray Array from which to copy the item.
 * @param targetArray Array into which is copy the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 *
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/** Clamps a number between zero and a maximum. */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 */
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 */
var AUTO_SCROLL_STEP = 2;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */
var DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this = this;
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /** Whether starting a dragging sequence from this container is disabled. */
        this.disabled = false;
        /** Whether sorting items within the list is disabled. */
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
        this.enterPredicate = function () { return true; };
        /** Emits right before dragging has started. */
        this.beforeStarted = new Subject();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new Subject();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new Subject();
        /** Emits when the user drops an item inside the container. */
        this.dropped = new Subject();
        /** Emits as the user is swapping items while actively dragging. */
        this.sorted = new Subject();
        /** Whether an item in the list is being dragged. */
        this._isDragging = false;
        /** Cache of the dimensions of all the items inside the container. */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: null, delta: 0 };
        /** Drop lists that are connected to the current one. */
        this._siblings = [];
        /** Direction in which the list is oriented. */
        this._orientation = 'vertical';
        /** Connected siblings that currently have a dragged item. */
        this._activeSiblings = new Set();
        /** Layout direction of the drop list. */
        this._direction = 'ltr';
        /** Subscription to the window being scrolled. */
        this._viewportScrollSubscription = Subscription.EMPTY;
        /** Vertical direction in which the list is currently scrolling. */
        this._verticalScrollDirection = 0 /* NONE */;
        /** Horizontal direction in which the list is currently scrolling. */
        this._horizontalScrollDirection = 0 /* NONE */;
        /** Used to signal to the current auto-scroll sequence when to stop. */
        this._stopScrollTimers = new Subject();
        /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
        this._cachedShadowRoot = null;
        /** Starts the interval that'll auto-scroll the element. */
        this._startScrollInterval = function () {
            _this._stopScrolling();
            interval(0, animationFrameScheduler)
                .pipe(takeUntil(_this._stopScrollTimers))
                .subscribe(function () {
                var node = _this._scrollNode;
                if (_this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (_this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            });
        };
        this.element = coerceElement(element);
        this._document = _document;
        this.withScrollableParents([this.element]);
        _dragDropRegistry.registerDropContainer(this);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
    }
    /** Removes the drop list functionality from the DOM element. */
    DropListRef.prototype.dispose = function () {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._viewportScrollSubscription.unsubscribe();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = null;
        this._parentPositions.clear();
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    DropListRef.prototype.isDragging = function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    DropListRef.prototype.start = function () {
        var _this = this;
        var styles = coerceElement(this.element).style;
        this.beforeStarted.next();
        this._isDragging = true;
        // We need to disable scroll snapping while the user is dragging, because it breaks automatic
        // scrolling. The browser seems to round the value based on the snapping points which means
        // that we can't increment/decrement the scroll position.
        this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
        styles.scrollSnapType = styles.msScrollSnapType = 'none';
        this._cacheItems();
        this._siblings.forEach(function (sibling) { return sibling._startReceiving(_this); });
        this._viewportScrollSubscription.unsubscribe();
        this._listenToScrollEvents();
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param index Index at which the item entered. If omitted, the container will try to figure it
     *   out automatically.
     */
    DropListRef.prototype.enter = function (item, pointerX, pointerY, index) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        var newIndex;
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
        var activeDraggables = this._activeDraggables;
        var currentIndex = activeDraggables.indexOf(item);
        var placeholder = item.getPlaceholderElement();
        var newPositionReference = activeDraggables[newIndex];
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
            var element = newPositionReference.getRootElement();
            element.parentElement.insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            var element = coerceElement(this.element);
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
        this.entered.next({ item: item, container: this, currentIndex: this.getItemIndex(item) });
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    DropListRef.prototype.exit = function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param distance Distance the user has dragged since the start of the dragging sequence.
     * @param previousIndex Index of the item when dragging started.
     *
     * @breaking-change 11.0.0 `previousIndex` parameter to become required.
     */
    DropListRef.prototype.drop = function (item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
        this._reset();
        // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.
        if (previousIndex == null) {
            previousIndex = previousContainer.getItemIndex(item);
        }
        this.dropped.next({ item: item,
            currentIndex: currentIndex,
            previousIndex: previousIndex,
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    DropListRef.prototype.withItems = function (items) {
        var _this = this;
        var previousItems = this._draggables;
        this._draggables = items;
        items.forEach(function (item) { return item._withDropContainer(_this); });
        if (this.isDragging()) {
            var draggedItems = previousItems.filter(function (item) { return item.isDragging(); });
            // If all of the items being dragged were removed
            // from the list, abort the current drag sequence.
            if (draggedItems.every(function (item) { return items.indexOf(item) === -1; })) {
                this._reset();
            }
            else {
                this._cacheItems();
            }
        }
        return this;
    };
    /** Sets the layout direction of the drop list. */
    DropListRef.prototype.withDirection = function (direction) {
        this._direction = direction;
        return this;
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    DropListRef.prototype.connectedTo = function (connectedTo) {
        this._siblings = connectedTo.slice();
        return this;
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    DropListRef.prototype.withOrientation = function (orientation) {
        this._orientation = orientation;
        return this;
    };
    /**
     * Sets which parent elements are can be scrolled while the user is dragging.
     * @param elements Elements that can be scrolled.
     */
    DropListRef.prototype.withScrollableParents = function (elements) {
        var element = coerceElement(this.element);
        // We always allow the current element to be scrollable
        // so we need to ensure that it's in the array.
        this._scrollableElements =
            elements.indexOf(element) === -1 ? __spread([element], elements) : elements.slice();
        return this;
    };
    /** Gets the scrollable parents that are registered with this drop container. */
    DropListRef.prototype.getScrollableParents = function () {
        return this._scrollableElements;
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    DropListRef.prototype.getItemIndex = function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, function (currentItem) { return currentItem.drag === item; });
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    DropListRef.prototype.isReceiving = function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    DropListRef.prototype._sortItem = function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled ||
            !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
            return;
        }
        var siblings = this._itemPositions;
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        var isHorizontal = this._orientation === 'horizontal';
        var currentIndex = findIndex(siblings, function (currentItem) { return currentItem.drag === item; });
        var siblingAtNewPosition = siblings[newIndex];
        var currentPosition = siblings[currentIndex].clientRect;
        var newPosition = siblingAtNewPosition.clientRect;
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach(function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            var isDraggedItem = sibling.drag === item;
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
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
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        });
    };
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param pointerX User's pointer position along the x axis.
     * @param pointerY User's pointer position along the y axis.
     */
    DropListRef.prototype._startScrollingIfNecessary = function (pointerX, pointerY) {
        var _this = this;
        if (this.autoScrollDisabled) {
            return;
        }
        var scrollNode;
        var verticalScrollDirection = 0 /* NONE */;
        var horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling any of the parent containers.
        this._parentPositions.positions.forEach(function (position, element) {
            var _a;
            // We have special handling for the `document` below. Also this would be
            // nicer with a  for...of loop, but it requires changing a compiler flag.
            if (element === _this._document || !position.clientRect || scrollNode) {
                return;
            }
            if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                _a = __read(getElementScrollDirections(element, position.clientRect, pointerX, pointerY), 2), verticalScrollDirection = _a[0], horizontalScrollDirection = _a[1];
                if (verticalScrollDirection || horizontalScrollDirection) {
                    scrollNode = element;
                }
            }
        });
        // Otherwise check if we can start scrolling the viewport.
        if (!verticalScrollDirection && !horizontalScrollDirection) {
            var _a = this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
            var clientRect = { width: width, height: height, top: 0, right: width, bottom: height, left: 0 };
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
    };
    /** Stops any currently-running auto-scroll sequences. */
    DropListRef.prototype._stopScrolling = function () {
        this._stopScrollTimers.next();
    };
    /** Caches the positions of the configured scrollable parents. */
    DropListRef.prototype._cacheParentPositions = function () {
        var element = coerceElement(this.element);
        this._parentPositions.cache(this._scrollableElements);
        // The list element is always in the `scrollableElements`
        // so we can take advantage of the cached `ClientRect`.
        this._clientRect = this._parentPositions.positions.get(element).clientRect;
    };
    /** Refreshes the position cache of the items and sibling containers. */
    DropListRef.prototype._cacheItemPositions = function () {
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map(function (drag) {
            var elementToMeasure = drag.getVisibleElement();
            return { drag: drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        }).sort(function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        });
    };
    /** Resets the container to its initial state. */
    DropListRef.prototype._reset = function () {
        var _this = this;
        this._isDragging = false;
        var styles = coerceElement(this.element).style;
        styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach(function (item) {
            var rootElement = item.getRootElement();
            if (rootElement) {
                rootElement.style.transform = '';
            }
        });
        this._siblings.forEach(function (sibling) { return sibling._stopReceiving(_this); });
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._stopScrolling();
        this._viewportScrollSubscription.unsubscribe();
        this._parentPositions.clear();
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    DropListRef.prototype._getSiblingOffsetPx = function (currentIndex, siblings, delta) {
        var isHorizontal = this._orientation === 'horizontal';
        var currentPosition = siblings[currentIndex].clientRect;
        var immediateSibling = siblings[currentIndex + delta * -1];
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            var start = isHorizontal ? 'left' : 'top';
            var end = isHorizontal ? 'right' : 'bottom';
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
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    DropListRef.prototype._getItemOffsetPx = function (currentPosition, newPosition, delta) {
        var isHorizontal = this._orientation === 'horizontal';
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Checks if pointer is entering in the first position
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     */
    DropListRef.prototype._shouldEnterAsFirstChild = function (pointerX, pointerY) {
        if (!this._activeDraggables.length) {
            return false;
        }
        var itemPositions = this._itemPositions;
        var isHorizontal = this._orientation === 'horizontal';
        // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
        // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)
        var reversed = itemPositions[0].drag !== this._activeDraggables[0];
        if (reversed) {
            var lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
            return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
        }
        else {
            var firstItemRect = itemPositions[0].clientRect;
            return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
        }
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = function (item, pointerX, pointerY, delta) {
        var _this = this;
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
        });
    };
    /** Caches the current items in the list and their positions. */
    DropListRef.prototype._cacheItems = function () {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheParentPositions();
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    DropListRef.prototype._isOverContainer = function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    DropListRef.prototype._getSiblingContainerFromPosition = function (item, x, y) {
        return this._siblings.find(function (sibling) { return sibling._canReceive(item, x, y); });
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    DropListRef.prototype._canReceive = function (item, x, y) {
        if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
            return false;
        }
        var elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        var nativeElement = coerceElement(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    DropListRef.prototype._startReceiving = function (sibling) {
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheParentPositions();
            this._listenToScrollEvents();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    DropListRef.prototype._stopReceiving = function (sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    };
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     */
    DropListRef.prototype._listenToScrollEvents = function () {
        var _this = this;
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(function (event) {
            if (_this.isDragging()) {
                var scrollDifference_1 = _this._parentPositions.handleScroll(event);
                if (scrollDifference_1) {
                    // Since we know the amount that the user has scrolled we can shift all of the
                    // client rectangles ourselves. This is cheaper than re-measuring everything and
                    // we can avoid inconsistent behavior where we might be measuring the element before
                    // its position has changed.
                    _this._itemPositions.forEach(function (_a) {
                        var clientRect = _a.clientRect;
                        adjustClientRect(clientRect, scrollDifference_1.top, scrollDifference_1.left);
                    });
                    // We need two loops for this, because we want all of the cached
                    // positions to be up-to-date before we re-sort the item.
                    _this._itemPositions.forEach(function (_a) {
                        var drag = _a.drag;
                        if (_this._dragDropRegistry.isDragging(drag)) {
                            // We need to re-sort the item manually, because the pointer move
                            // events won't be dispatched while the user is scrolling.
                            drag._sortFromLastPointerPosition();
                        }
                    });
                }
            }
            else if (_this.isReceiving()) {
                _this._cacheParentPositions();
            }
        });
    };
    /**
     * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
     * than saving it in property directly on init, because we want to resolve it as late as possible
     * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
     * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
     */
    DropListRef.prototype._getShadowRoot = function () {
        if (!this._cachedShadowRoot) {
            var shadowRoot = _getShadowRoot(coerceElement(this.element));
            this._cachedShadowRoot = shadowRoot || this._document;
        }
        return this._cachedShadowRoot;
    };
    return DropListRef;
}());
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @param array Array in which to look for matches.
 * @param predicate Function used to determine whether an item is a match.
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Increments the vertical scroll position of a node.
 * @param node Node whose scroll position should change.
 * @param amount Amount of pixels that the `node` should be scrolled.
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        node.scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        node.scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param node Node whose scroll position should change.
 * @param amount Amount of pixels that the `node` should be scrolled.
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        node.scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        node.scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    var top = clientRect.top, bottom = clientRect.bottom, height = clientRect.height;
    var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
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
 * @param clientRect Dimensions of the node.
 * @param pointerX Position of the user's pointer along the x axis.
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    var left = clientRect.left, right = clientRect.right, width = clientRect.width;
    var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
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
 * @param element Element for which we should calculate the scroll direction.
 * @param clientRect Bounding client rectangle of the element.
 * @param pointerX Position of the user's pointer along the x axis.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    var verticalScrollDirection = 0 /* NONE */;
    var horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        var scrollTop = element.scrollTop;
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
        var scrollLeft = element.scrollLeft;
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
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Event options that can be used to bind an active, capturing event. */
var activeCapturingEventOptions = normalizePassiveListenerOptions({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /** Registered drop container instances. */
        this._dropInstances = new Set();
        /** Registered drag item instances. */
        this._dragInstances = new Set();
        /** Drag item instances that are currently being dragged. */
        this._activeDragInstances = new Set();
        /** Keeps track of the event listeners that we've bound to the `document`. */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new Subject();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new Subject();
        /** Emits when the viewport has been scrolled while the user is dragging an item. */
        this.scroll = new Subject();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        };
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    DragDropRegistry.prototype.registerDropContainer = function (drop) {
        if (!this._dropInstances.has(drop)) {
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    DragDropRegistry.prototype.registerDragItem = function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
        }
    };
    /** Removes a drop container from the registry. */
    DragDropRegistry.prototype.removeDropContainer = function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    DragDropRegistry.prototype.removeDragItem = function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    DragDropRegistry.prototype.startDragging = function (drag, event) {
        var _this = this;
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            var isTouchEvent = event.type.startsWith('touch');
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: function (e) { return _this.pointerMove.next(e); },
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: function (e) { return _this.pointerUp.next(e); },
                options: true
            })
                .set('scroll', {
                handler: function (e) { return _this.scroll.next(e); },
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
            this._ngZone.runOutsideAngular(function () {
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                });
            });
        }
    };
    /** Stops dragging a drag item instance. */
    DragDropRegistry.prototype.stopDragging = function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    DragDropRegistry.prototype.isDragging = function (drag) {
        return this._activeDragInstances.has(drag);
    };
    DragDropRegistry.prototype.ngOnDestroy = function () {
        var _this = this;
        this._dragInstances.forEach(function (instance) { return _this.removeDragItem(instance); });
        this._dropInstances.forEach(function (instance) { return _this.removeDropContainer(instance); });
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    DragDropRegistry.prototype._clearGlobalListeners = function () {
        var _this = this;
        this._globalListeners.forEach(function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        });
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    DragDropRegistry.ɵprov = ɵɵdefineInjectable({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(ɵɵinject(NgZone), ɵɵinject(DOCUMENT)); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Default configuration to be used when creating a `DragRef`. */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    DragDrop.prototype.createDrag = function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    DragDrop.prototype.createDropList = function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    };
    DragDrop.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone },
        { type: ViewportRuler },
        { type: DragDropRegistry }
    ]; };
    DragDrop.ɵprov = ɵɵdefineInjectable({ factory: function DragDrop_Factory() { return new DragDrop(ɵɵinject(DOCUMENT), ɵɵinject(NgZone), ɵɵinject(ViewportRuler), ɵɵinject(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
    return DragDrop;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * @docs-private
 */
var CDK_DRAG_PARENT = new InjectionToken('CDK_DRAG_PARENT');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Handle that can be used to drag and CdkDrag instance. */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /** Emits when the state of the handle has changed. */
        this._stateChanges = new Subject();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    CdkDragHandle.prototype.ngOnDestroy = function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] }
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_DRAG_PARENT,] }, { type: Optional }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: Input, args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] }
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: Input }]
    };
    return CdkDragPlaceholder;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
        this._matchSize = false;
    }
    Object.defineProperty(CdkDragPreview.prototype, "matchSize", {
        /** Whether the preview should preserve the same size as the item that is being dragged. */
        get: function () { return this._matchSize; },
        set: function (value) { this._matchSize = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    CdkDragPreview.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[cdkDragPreview]'
                },] }
    ];
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: Input }],
        matchSize: [{ type: Input }]
    };
    return CdkDragPreview;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 */
var CDK_DRAG_CONFIG = new InjectionToken('CDK_DRAG_CONFIG');
/**
 * @deprecated No longer being used. To be removed.
 * @breaking-change 10.0.0
 * @docs-private
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 */
var CDK_DROP_LIST = new InjectionToken('CDK_DROP_LIST');
/** Element that can be moved inside a CdkDropList container. */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(
    /** Element that the draggable is attached to. */
    element, 
    /** Droppable container that the draggable is a part of. */
    dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new Subject();
        /** Emits when the user starts dragging the item. */
        this.started = new EventEmitter();
        /** Emits when the user has released a drag item, before any animations have started. */
        this.released = new EventEmitter();
        /** Emits when the user stops dragging an item in the container. */
        this.ended = new EventEmitter();
        /** Emits when the user has moved the item into a new container. */
        this.entered = new EventEmitter();
        /** Emits when the user removes the item its container by dragging it into another container. */
        this.exited = new EventEmitter();
        /** Emits when the user drops the item inside a container. */
        this.dropped = new EventEmitter();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new Observable(function (observer) {
            var subscription = _this._dragRef.moved.pipe(map(function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            }); })).subscribe(observer);
            return function () {
                subscription.unsubscribe();
            };
        });
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
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    CdkDrag.prototype.getPlaceholderElement = function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    CdkDrag.prototype.getRootElement = function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    CdkDrag.prototype.reset = function () {
        this._dragRef.reset();
    };
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    CdkDrag.prototype.getFreeDragPosition = function () {
        return this._dragRef.getFreeDragPosition();
    };
    CdkDrag.prototype.ngAfterViewInit = function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(take(1), takeUntil(this._destroyed))
            .subscribe(function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(startWith(_this._handles), 
            // Sync the new handles with the DragRef.
            tap(function (handles) {
                var childHandleElements = handles
                    .filter(function (handle) { return handle._parentDrag === _this; })
                    .map(function (handle) { return handle.element; });
                _this._dragRef.withHandles(childHandleElements);
            }), 
            // Listen if the state of any of the handles changes.
            switchMap(function (handles) {
                return merge.apply(void 0, __spread(handles.map(function (item) {
                    return item._stateChanges.pipe(startWith(item));
                })));
            }), takeUntil(_this._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                var dragRef = _this._dragRef;
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });
            if (_this.freeDragPosition) {
                _this._dragRef.setFreeDragPosition(_this.freeDragPosition);
            }
        });
    };
    CdkDrag.prototype.ngOnChanges = function (changes) {
        var rootSelectorChange = changes['rootElementSelector'];
        var positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    };
    CdkDrag.prototype.ngOnDestroy = function () {
        if (this.dropContainer) {
            this.dropContainer.removeItem(this);
        }
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    CdkDrag.prototype._updateRootElement = function () {
        var element = this.element.nativeElement;
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElement` value. */
    CdkDrag.prototype._getBoundaryElement = function () {
        var boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        var element = coerceElement(boundary);
        if (isDevMode() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    CdkDrag.prototype._syncInputs = function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            if (!ref.isDragging()) {
                var dir = _this._dir;
                var dragStartDelay = _this.dragStartDelay;
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    matchSize: _this._previewTemplate.matchSize,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref.dragStartDelay = (typeof dragStartDelay === 'object' && dragStartDelay) ?
                    dragStartDelay : coerceNumberProperty(dragStartDelay);
                ref.constrainPosition = _this.constrainPosition;
                ref.previewClass = _this.previewClass;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        });
    };
    /** Handles the events from the underlying `DragRef`. */
    CdkDrag.prototype._handleEvents = function (ref) {
        var _this = this;
        ref.started.subscribe(function () {
            _this.started.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        });
        ref.released.subscribe(function () {
            _this.released.emit({ source: _this });
        });
        ref.ended.subscribe(function (event) {
            _this.ended.emit({ source: _this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this,
                currentIndex: event.currentIndex
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this,
                distance: event.distance
            });
        });
    };
    /** Assigns the default input values based on a provided config object. */
    CdkDrag.prototype._assignDefaults = function (config) {
        var lockAxis = config.lockAxis, dragStartDelay = config.dragStartDelay, constrainPosition = config.constrainPosition, previewClass = config.previewClass, boundaryElement = config.boundaryElement, draggingDisabled = config.draggingDisabled, rootElementSelector = config.rootElementSelector;
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
    };
    CdkDrag.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkDrag]',
                    exportAs: 'cdkDrag',
                    host: {
                        'class': 'cdk-drag',
                        '[class.cdk-drag-disabled]': 'disabled',
                        '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                    },
                    providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                },] }
    ];
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_DROP_LIST,] }, { type: Optional }, { type: SkipSelf }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CDK_DRAG_CONFIG,] }] },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: DragDrop },
        { type: ChangeDetectorRef }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: ContentChildren, args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: ContentChild, args: [CdkDragPreview,] }],
        _placeholderTemplate: [{ type: ContentChild, args: [CdkDragPlaceholder,] }],
        data: [{ type: Input, args: ['cdkDragData',] }],
        lockAxis: [{ type: Input, args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: Input, args: ['cdkDragRootElement',] }],
        boundaryElement: [{ type: Input, args: ['cdkDragBoundary',] }],
        dragStartDelay: [{ type: Input, args: ['cdkDragStartDelay',] }],
        freeDragPosition: [{ type: Input, args: ['cdkDragFreeDragPosition',] }],
        disabled: [{ type: Input, args: ['cdkDragDisabled',] }],
        constrainPosition: [{ type: Input, args: ['cdkDragConstrainPosition',] }],
        previewClass: [{ type: Input, args: ['cdkDragPreviewClass',] }],
        started: [{ type: Output, args: ['cdkDragStarted',] }],
        released: [{ type: Output, args: ['cdkDragReleased',] }],
        ended: [{ type: Output, args: ['cdkDragEnded',] }],
        entered: [{ type: Output, args: ['cdkDragEntered',] }],
        exited: [{ type: Output, args: ['cdkDragExited',] }],
        dropped: [{ type: Output, args: ['cdkDragDropped',] }],
        moved: [{ type: Output, args: ['cdkDragMoved',] }]
    };
    return CdkDrag;
}());
/** Gets the closest ancestor of an element that matches a selector. */
function getClosestMatchingAncestor(element, selector) {
    var currentElement = element.parentElement;
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            currentElement.msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /** Drop lists registered inside the group. */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    CdkDropListGroup.prototype.ngOnDestroy = function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] }
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: Input, args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter used to generate unique ids for drop zones. */
var _uniqueIdCounter = 0;
var ɵ0 = undefined;
/** Container that wraps a set of draggable items. */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(
    /** Element that the drop list is attached to. */
    element, dragDrop, _changeDetectorRef, _dir, _group, 
    /**
     * @deprecated _scrollDispatcher parameter to become required.
     * @breaking-change 11.0.0
     */
    _scrollDispatcher, config) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        this._scrollDispatcher = _scrollDispatcher;
        /** Emits when the list has been destroyed. */
        this._destroyed = new Subject();
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
        this.id = "cdk-drop-list-" + _uniqueIdCounter++;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /** Emits when the user drops an item inside the container. */
        this.dropped = new EventEmitter();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new EventEmitter();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new EventEmitter();
        /** Emits as the user is swapping items while actively dragging. */
        this.sorted = new EventEmitter();
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
        this._dropListRef.enterPredicate = function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        };
        this._setupInputSyncSubscription(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: function (value) {
            // Usually we sync the directive and ref state right before dragging starts, in order to have
            // a single point of failure and to avoid having to use setters for everything. `disabled` is
            // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
            // the user in a disabled state, so we also need to sync it as it's being set.
            this._dropListRef.disabled = this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /** Registers an items with the drop list. */
    CdkDropList.prototype.addItem = function (item) {
        this._unsortedItems.add(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    };
    /** Removes an item from the drop list. */
    CdkDropList.prototype.removeItem = function (item) {
        this._unsortedItems.delete(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    };
    /** Gets the registered items in the list, sorted by their position in the DOM. */
    CdkDropList.prototype.getSortedItems = function () {
        return Array.from(this._unsortedItems).sort(function (a, b) {
            var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
            // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise
            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });
    };
    CdkDropList.prototype.ngOnDestroy = function () {
        var index = CdkDropList._dropLists.indexOf(this);
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
    };
    /**
     * Starts dragging an item.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.start = function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     *
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.drop = function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, previousContainer._dropListRef, isPointerOverContainer, { x: 0, y: 0 });
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.enter = function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.exit = function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.getItemIndex = function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    CdkDropList.prototype._setupInputSyncSubscription = function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(startWith(this._dir.value), takeUntil(this._destroyed))
                .subscribe(function (value) { return ref.withDirection(value); });
        }
        ref.beforeStarted.subscribe(function () {
            var siblings = coerceArray(_this.connectedTo).map(function (drop) {
                return typeof drop === 'string' ?
                    CdkDropList._dropLists.find(function (list) { return list.id === drop; }) : drop;
            });
            if (_this._group) {
                _this._group._items.forEach(function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                });
            }
            // Note that we resolve the scrollable parents here so that we delay the resolution
            // as long as possible, ensuring that the element is in its final place in the DOM.
            // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.
            if (!_this._scrollableParentsResolved && _this._scrollDispatcher) {
                var scrollableParents = _this._scrollDispatcher
                    .getAncestorScrollContainers(_this.element)
                    .map(function (scrollable) { return scrollable.getElementRef().nativeElement; });
                _this._dropListRef.withScrollableParents(scrollableParents);
                // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.
                _this._scrollableParentsResolved = true;
            }
            ref.disabled = _this.disabled;
            ref.lockAxis = _this.lockAxis;
            ref.sortingDisabled = coerceBooleanProperty(_this.sortingDisabled);
            ref.autoScrollDisabled = coerceBooleanProperty(_this.autoScrollDisabled);
            ref
                .connectedTo(siblings.filter(function (drop) { return drop && drop !== _this; }).map(function (list) { return list._dropListRef; }))
                .withOrientation(_this.orientation);
        });
    };
    /** Handles events from the underlying DropListRef. */
    CdkDropList.prototype._handleEvents = function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            _this._syncItemsWithRef();
            _this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
            _this._changeDetectorRef.markForCheck();
        });
        ref.sorted.subscribe(function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
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
            _this._changeDetectorRef.markForCheck();
        });
    };
    /** Assigns the default input values based on a provided config object. */
    CdkDropList.prototype._assignDefaults = function (config) {
        var lockAxis = config.lockAxis, draggingDisabled = config.draggingDisabled, sortingDisabled = config.sortingDisabled, listAutoScrollDisabled = config.listAutoScrollDisabled, listOrientation = config.listOrientation;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
        this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
        this.orientation = listOrientation || 'vertical';
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
    };
    /** Syncs up the registered drag items with underlying drop list ref. */
    CdkDropList.prototype._syncItemsWithRef = function () {
        this._dropListRef.withItems(this.getSortedItems().map(function (item) { return item._dragRef; }));
    };
    /** Keeps track of the drop lists that are currently on the page. */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: Directive, args: [{
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
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] }
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDrop },
        { type: ChangeDetectorRef },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: CdkDropListGroup, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: ScrollDispatcher },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CDK_DRAG_CONFIG,] }] }
    ]; };
    CdkDropList.propDecorators = {
        connectedTo: [{ type: Input, args: ['cdkDropListConnectedTo',] }],
        data: [{ type: Input, args: ['cdkDropListData',] }],
        orientation: [{ type: Input, args: ['cdkDropListOrientation',] }],
        id: [{ type: Input }],
        lockAxis: [{ type: Input, args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: Input, args: ['cdkDropListDisabled',] }],
        sortingDisabled: [{ type: Input, args: ['cdkDropListSortingDisabled',] }],
        enterPredicate: [{ type: Input, args: ['cdkDropListEnterPredicate',] }],
        autoScrollDisabled: [{ type: Input, args: ['cdkDropListAutoScrollDisabled',] }],
        dropped: [{ type: Output, args: ['cdkDropListDropped',] }],
        entered: [{ type: Output, args: ['cdkDropListEntered',] }],
        exited: [{ type: Output, args: ['cdkDropListExited',] }],
        sorted: [{ type: Output, args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    exports: [
                        CdkScrollableModule,
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
                },] }
    ];
    return DragDropModule;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CDK_DRAG_CONFIG, CDK_DRAG_CONFIG_FACTORY, CDK_DROP_LIST, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem, CDK_DRAG_PARENT as ɵangular_material_src_cdk_drag_drop_drag_drop_b };
//# sourceMappingURL=drag-drop.js.map
