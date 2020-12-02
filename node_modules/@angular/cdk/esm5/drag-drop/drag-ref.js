/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { coerceBooleanProperty, coerceElement } from '@angular/cdk/coercion';
import { Subscription, Subject } from 'rxjs';
import { extendStyles, toggleNativeDragInteractions } from './drag-styling';
import { getTransformTransitionDurationInMs } from './transition-duration';
import { getMutableClientRect, adjustClientRect } from './client-rect';
import { ParentPositionTracker } from './parent-position-tracker';
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
export { DragRef };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2RyYWctZHJvcC9kcmFnLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFLSCxPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RSxPQUFPLEVBQUMscUJBQXFCLEVBQUUsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDM0UsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFHdkQsT0FBTyxFQUFDLFlBQVksRUFBRSw0QkFBNEIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBQyxrQ0FBa0MsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQW9CaEUsaUVBQWlFO0FBQ2pFLElBQU0sMkJBQTJCLEdBQUcsK0JBQStCLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUVyRixpRUFBaUU7QUFDakUsSUFBTSwwQkFBMEIsR0FBRywrQkFBK0IsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBRXJGOzs7OztHQUtHO0FBQ0gsSUFBTSx1QkFBdUIsR0FBRyxHQUFHLENBQUM7QUE4QnBDOztHQUVHO0FBQ0g7SUFzTkUsaUJBQ0UsT0FBOEMsRUFDdEMsT0FBc0IsRUFDdEIsU0FBbUIsRUFDbkIsT0FBZSxFQUNmLGNBQTZCLEVBQzdCLGlCQUF5RDtRQU5uRSxpQkFXQztRQVRTLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixZQUFPLEdBQVAs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LENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNyRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsTUFBbUIsRUFBRSxVQUFzQjtJQUNuRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBTSxVQUFVLENBQUMsS0FBSyxPQUFJLENBQUM7SUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sVUFBVSxDQUFDLE1BQU0sT0FBSSxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RW1iZWRkZWRWaWV3UmVmLCBFbGVtZW50UmVmLCBOZ1pvbmUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0RpcmVjdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtub3JtYWxpemVQYXNzaXZlTGlzdGVuZXJPcHRpb25zfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZUVsZW1lbnR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Ryb3BMaXN0UmVmSW50ZXJuYWwgYXMgRHJvcExpc3RSZWZ9IGZyb20gJy4vZHJvcC1saXN0LXJlZic7XG5pbXBvcnQge0RyYWdEcm9wUmVnaXN0cnl9IGZyb20gJy4vZHJhZy1kcm9wLXJlZ2lzdHJ5JztcbmltcG9ydCB7ZXh0ZW5kU3R5bGVzLCB0b2dnbGVOYXRpdmVEcmFnSW50ZXJhY3Rpb25zfSBmcm9tICcuL2RyYWctc3R5bGluZyc7XG5pbXBvcnQge2dldFRyYW5zZm9ybVRyYW5zaXRpb25EdXJhdGlvbkluTXN9IGZyb20gJy4vdHJhbnNpdGlvbi1kdXJhdGlvbic7XG5pbXBvcnQge2dldE11dGFibGVDbGllbnRSZWN0LCBhZGp1c3RDbGllbnRSZWN0fSBmcm9tICcuL2NsaWVudC1yZWN0JztcbmltcG9ydCB7UGFyZW50UG9zaXRpb25UcmFja2VyfSBmcm9tICcuL3BhcmVudC1wb3NpdGlvbi10cmFja2VyJztcblxuLyoqIE9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgYmVoYXZpb3Igb2YgRHJhZ1JlZi4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1JlZkNvbmZpZyB7XG4gIC8qKlxuICAgKiBNaW5pbXVtIGFtb3VudCBvZiBwaXhlbHMgdGhhdCB0aGUgdXNlciBzaG91bGRcbiAgICogZHJhZywgYmVmb3JlIHRoZSBDREsgaW5pdGlhdGVzIGEgZHJhZyBzZXF1ZW5jZS5cbiAgICovXG4gIGRyYWdTdGFydFRocmVzaG9sZDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBbW91bnQgdGhlIHBpeGVscyB0aGUgdXNlciBzaG91bGQgZHJhZyBiZWZvcmUgdGhlIENES1xuICAgKiBjb25zaWRlcnMgdGhlbSB0byBoYXZlIGNoYW5nZWQgdGhlIGRyYWcgZGlyZWN0aW9uLlxuICAgKi9cbiAgcG9pbnRlckRpcmVjdGlvbkNoYW5nZVRocmVzaG9sZDogbnVtYmVyO1xuXG4gIC8qKiBgei1pbmRleGAgZm9yIHRoZSBhYnNvbHV0ZWx5LXBvc2l0aW9uZWQgZWxlbWVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSB0aGUgZHJhZyBpdGVtLiAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbi8qKiBPcHRpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gYmluZCBhIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIuICovXG5jb25zdCBwYXNzaXZlRXZlbnRMaXN0ZW5lck9wdGlvbnMgPSBub3JtYWxpemVQYXNzaXZlTGlzdGVuZXJPcHRpb25zKHtwYXNzaXZlOiB0cnVlfSk7XG5cbi8qKiBPcHRpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gYmluZCBhbiBhY3RpdmUgZXZlbnQgbGlzdGVuZXIuICovXG5jb25zdCBhY3RpdmVFdmVudExpc3RlbmVyT3B0aW9ucyA9IG5vcm1hbGl6ZVBhc3NpdmVMaXN0ZW5lck9wdGlvbnMoe3Bhc3NpdmU6IGZhbHNlfSk7XG5cbi8qKlxuICogVGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGlnbm9yZSBtb3VzZSBldmVudHMsIGFmdGVyXG4gKiByZWNlaXZpbmcgYSB0b3VjaCBldmVudC4gVXNlZCB0byBhdm9pZCBkb2luZyBkb3VibGUgd29yayBmb3JcbiAqIHRvdWNoIGRldmljZXMgd2hlcmUgdGhlIGJyb3dzZXIgZmlyZXMgZmFrZSBtb3VzZSBldmVudHMsIGluXG4gKiBhZGRpdGlvbiB0byB0b3VjaCBldmVudHMuXG4gKi9cbmNvbnN0IE1PVVNFX0VWRU5UX0lHTk9SRV9USU1FID0gODAwO1xuXG4vLyBUT0RPKGNyaXNiZXRvKTogYWRkIGFuIEFQSSBmb3IgbW92aW5nIGEgZHJhZ2dhYmxlIHVwL2Rvd24gdGhlXG4vLyBsaXN0IHByb2dyYW1tYXRpY2FsbHkuIFVzZWZ1bCBmb3Iga2V5Ym9hcmQgY29udHJvbHMuXG5cbi8qKlxuICogSW50ZXJuYWwgY29tcGlsZS10aW1lLW9ubHkgcmVwcmVzZW50YXRpb24gb2YgYSBgRHJhZ1JlZmAuXG4gKiBVc2VkIHRvIGF2b2lkIGNpcmN1bGFyIGltcG9ydCBpc3N1ZXMgYmV0d2VlbiB0aGUgYERyYWdSZWZgIGFuZCB0aGUgYERyb3BMaXN0UmVmYC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEcmFnUmVmSW50ZXJuYWwgZXh0ZW5kcyBEcmFnUmVmIHt9XG5cbi8qKiBUZW1wbGF0ZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIGRyYWcgaGVscGVyIGVsZW1lbnQgKGUuZy4gYSBwcmV2aWV3IG9yIGEgcGxhY2Vob2xkZXIpLiAqL1xuaW50ZXJmYWNlIERyYWdIZWxwZXJUZW1wbGF0ZTxUID0gYW55PiB7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUPiB8IG51bGw7XG4gIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIGNvbnRleHQ6IFQ7XG59XG5cbi8qKiBUZW1wbGF0ZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIGRyYWcgcHJldmlldyBlbGVtZW50LiAqL1xuaW50ZXJmYWNlIERyYWdQcmV2aWV3VGVtcGxhdGU8VCA9IGFueT4gZXh0ZW5kcyBEcmFnSGVscGVyVGVtcGxhdGU8VD4ge1xuICBtYXRjaFNpemU/OiBib29sZWFuO1xufVxuXG4vKiogUG9pbnQgb24gdGhlIHBhZ2Ugb3Igd2l0aGluIGFuIGVsZW1lbnQuICovXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbi8qKlxuICogUmVmZXJlbmNlIHRvIGEgZHJhZ2dhYmxlIGl0ZW0uIFVzZWQgdG8gbWFuaXB1bGF0ZSBvciBkaXNwb3NlIG9mIHRoZSBpdGVtLlxuICovXG5leHBvcnQgY2xhc3MgRHJhZ1JlZjxUID0gYW55PiB7XG4gIC8qKiBFbGVtZW50IGRpc3BsYXllZCBuZXh0IHRvIHRoZSB1c2VyJ3MgcG9pbnRlciB3aGlsZSB0aGUgZWxlbWVudCBpcyBkcmFnZ2VkLiAqL1xuICBwcml2YXRlIF9wcmV2aWV3OiBIVE1MRWxlbWVudDtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSB2aWV3IG9mIHRoZSBwcmV2aWV3IGVsZW1lbnQuICovXG4gIHByaXZhdGUgX3ByZXZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+IHwgbnVsbDtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSB2aWV3IG9mIHRoZSBwbGFjZWhvbGRlciBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9wbGFjZWhvbGRlclJlZjogRW1iZWRkZWRWaWV3UmVmPGFueT4gfCBudWxsO1xuXG4gIC8qKiBFbGVtZW50IHRoYXQgaXMgcmVuZGVyZWQgaW5zdGVhZCBvZiB0aGUgZHJhZ2dhYmxlIGl0ZW0gd2hpbGUgaXQgaXMgYmVpbmcgc29ydGVkLiAqL1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqIENvb3JkaW5hdGVzIHdpdGhpbiB0aGUgZWxlbWVudCBhdCB3aGljaCB0aGUgdXNlciBwaWNrZWQgdXAgdGhlIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX3BpY2t1cFBvc2l0aW9uSW5FbGVtZW50OiBQb2ludDtcblxuICAvKiogQ29vcmRpbmF0ZXMgb24gdGhlIHBhZ2UgYXQgd2hpY2ggdGhlIHVzZXIgcGlja2VkIHVwIHRoZSBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9waWNrdXBQb3NpdGlvbk9uUGFnZTogUG9pbnQ7XG5cbiAgLyoqXG4gICAqIEFuY2hvciBub2RlIHVzZWQgdG8gc2F2ZSB0aGUgcGxhY2UgaW4gdGhlIERPTSB3aGVyZSB0aGUgZWxlbWVudCB3YXNcbiAgICogcGlja2VkIHVwIHNvIHRoYXQgaXQgY2FuIGJlIHJlc3RvcmVkIGF0IHRoZSBlbmQgb2YgdGhlIGRyYWcgc2VxdWVuY2UuXG4gICAqL1xuICBwcml2YXRlIF9hbmNob3I6IENvbW1lbnQ7XG5cbiAgLyoqXG4gICAqIENTUyBgdHJhbnNmb3JtYCBhcHBsaWVkIHRvIHRoZSBlbGVtZW50IHdoZW4gaXQgaXNuJ3QgYmVpbmcgZHJhZ2dlZC4gV2UgbmVlZCBhXG4gICAqIHBhc3NpdmUgdHJhbnNmb3JtIGluIG9yZGVyIGZvciB0aGUgZHJhZ2dlZCBlbGVtZW50IHRvIHJldGFpbiBpdHMgbmV3IHBvc2l0aW9uXG4gICAqIGFmdGVyIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGRyYWdnaW5nIGFuZCBiZWNhdXNlIHdlIG5lZWQgdG8ga25vdyB0aGUgcmVsYXRpdmVcbiAgICogcG9zaXRpb24gaW4gY2FzZSB0aGV5IHN0YXJ0IGRyYWdnaW5nIGFnYWluLiBUaGlzIGNvcnJlc3BvbmRzIHRvIGBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybWAuXG4gICAqL1xuICBwcml2YXRlIF9wYXNzaXZlVHJhbnNmb3JtOiBQb2ludCA9IHt4OiAwLCB5OiAwfTtcblxuICAvKiogQ1NTIGB0cmFuc2Zvcm1gIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgZWxlbWVudCB3aGlsZSBpdCdzIGJlaW5nIGRyYWdnZWQuICovXG4gIHByaXZhdGUgX2FjdGl2ZVRyYW5zZm9ybTogUG9pbnQgPSB7eDogMCwgeTogMH07XG5cbiAgLyoqIElubGluZSBgdHJhbnNmb3JtYCB2YWx1ZSB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgdGhlIGZpcnN0IGRyYWdnaW5nIHNlcXVlbmNlLiAqL1xuICBwcml2YXRlIF9pbml0aWFsVHJhbnNmb3JtPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkcmFnZ2luZyBzZXF1ZW5jZSBoYXMgYmVlbiBzdGFydGVkLiBEb2Vzbid0XG4gICAqIG5lY2Vzc2FyaWx5IG1lYW4gdGhhdCB0aGUgZWxlbWVudCBoYXMgYmVlbiBtb3ZlZC5cbiAgICovXG4gIHByaXZhdGUgX2hhc1N0YXJ0ZWREcmFnZ2luZzogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBoYXMgbW92ZWQgc2luY2UgdGhlIHVzZXIgc3RhcnRlZCBkcmFnZ2luZyBpdC4gKi9cbiAgcHJpdmF0ZSBfaGFzTW92ZWQ6IGJvb2xlYW47XG5cbiAgLyoqIERyb3AgY29udGFpbmVyIGluIHdoaWNoIHRoZSBEcmFnUmVmIHJlc2lkZWQgd2hlbiBkcmFnZ2luZyBiZWdhbi4gKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbENvbnRhaW5lcjogRHJvcExpc3RSZWY7XG5cbiAgLyoqIEluZGV4IGF0IHdoaWNoIHRoZSBpdGVtIHN0YXJ0ZWQgaW4gaXRzIGluaXRpYWwgY29udGFpbmVyLiAqL1xuICBwcml2YXRlIF9pbml0aWFsSW5kZXg6IG51bWJlcjtcblxuICAvKiogQ2FjaGVkIHBvc2l0aW9ucyBvZiBzY3JvbGxhYmxlIHBhcmVudCBlbGVtZW50cy4gKi9cbiAgcHJpdmF0ZSBfcGFyZW50UG9zaXRpb25zOiBQYXJlbnRQb3NpdGlvblRyYWNrZXI7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGl0ZW0gaXMgYmVpbmcgbW92ZWQuICovXG4gIHByaXZhdGUgX21vdmVFdmVudHMgPSBuZXcgU3ViamVjdDx7XG4gICAgc291cmNlOiBEcmFnUmVmO1xuICAgIHBvaW50ZXJQb3NpdGlvbjoge3g6IG51bWJlciwgeTogbnVtYmVyfTtcbiAgICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG4gICAgZGlzdGFuY2U6IFBvaW50O1xuICAgIGRlbHRhOiB7eDogLTEgfCAwIHwgMSwgeTogLTEgfCAwIHwgMX07XG4gIH0+KCk7XG5cbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHVzZXIgaXMgZHJhZ2dpbmcgYWxvbmcgZWFjaCBheGlzLiAqL1xuICBwcml2YXRlIF9wb2ludGVyRGlyZWN0aW9uRGVsdGE6IHt4OiAtMSB8IDAgfCAxLCB5OiAtMSB8IDAgfCAxfTtcblxuICAvKiogUG9pbnRlciBwb3NpdGlvbiBhdCB3aGljaCB0aGUgbGFzdCBjaGFuZ2UgaW4gdGhlIGRlbHRhIG9jY3VycmVkLiAqL1xuICBwcml2YXRlIF9wb2ludGVyUG9zaXRpb25BdExhc3REaXJlY3Rpb25DaGFuZ2U6IFBvaW50O1xuXG4gIC8qKlxuICAgKiBSb290IERPTSBub2RlIG9mIHRoZSBkcmFnIGluc3RhbmNlLiBUaGlzIGlzIHRoZSBlbGVtZW50IHRoYXQgd2lsbFxuICAgKiBiZSBtb3ZlZCBhcm91bmQgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmcuXG4gICAqL1xuICBwcml2YXRlIF9yb290RWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIElubGluZSBzdHlsZSB2YWx1ZSBvZiBgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yYCBhdCB0aGUgdGltZSB0aGVcbiAgICogZHJhZ2dpbmcgd2FzIHN0YXJ0ZWQuIFVzZWQgdG8gcmVzdG9yZSB0aGUgdmFsdWUgb25jZSB3ZSdyZSBkb25lIGRyYWdnaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBfcm9vdEVsZW1lbnRUYXBIaWdobGlnaHQ6IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBwb2ludGVyIG1vdmVtZW50IGV2ZW50cy4gKi9cbiAgcHJpdmF0ZSBfcG9pbnRlck1vdmVTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byB0aGUgZXZlbnQgdGhhdCBpcyBkaXNwYXRjaGVkIHdoZW4gdGhlIHVzZXIgbGlmdHMgdGhlaXIgcG9pbnRlci4gKi9cbiAgcHJpdmF0ZSBfcG9pbnRlclVwU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gdGhlIHZpZXdwb3J0IGJlaW5nIHNjcm9sbGVkLiAqL1xuICBwcml2YXRlIF9zY3JvbGxTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byB0aGUgdmlld3BvcnQgYmVpbmcgcmVzaXplZC4gKi9cbiAgcHJpdmF0ZSBfcmVzaXplU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKlxuICAgKiBUaW1lIGF0IHdoaWNoIHRoZSBsYXN0IHRvdWNoIGV2ZW50IG9jY3VycmVkLiBVc2VkIHRvIGF2b2lkIGZpcmluZyB0aGUgc2FtZVxuICAgKiBldmVudHMgbXVsdGlwbGUgdGltZXMgb24gdG91Y2ggZGV2aWNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIGZpcmUgYSBmYWtlXG4gICAqIG1vdXNlIGV2ZW50IGZvciBlYWNoIHRvdWNoIGV2ZW50LCBhZnRlciBhIGNlcnRhaW4gdGltZS5cbiAgICovXG4gIHByaXZhdGUgX2xhc3RUb3VjaEV2ZW50VGltZTogbnVtYmVyO1xuXG4gIC8qKiBUaW1lIGF0IHdoaWNoIHRoZSBsYXN0IGRyYWdnaW5nIHNlcXVlbmNlIHdhcyBzdGFydGVkLiAqL1xuICBwcml2YXRlIF9kcmFnU3RhcnRUaW1lOiBudW1iZXI7XG5cbiAgLyoqIENhY2hlZCByZWZlcmVuY2UgdG8gdGhlIGJvdW5kYXJ5IGVsZW1lbnQuICovXG4gIHByaXZhdGUgX2JvdW5kYXJ5RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAvKiogV2hldGhlciB0aGUgbmF0aXZlIGRyYWdnaW5nIGludGVyYWN0aW9ucyBoYXZlIGJlZW4gZW5hYmxlZCBvbiB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9uYXRpdmVJbnRlcmFjdGlvbnNFbmFibGVkID0gdHJ1ZTtcblxuICAvKiogQ2FjaGVkIGRpbWVuc2lvbnMgb2YgdGhlIHByZXZpZXcgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfcHJldmlld1JlY3Q/OiBDbGllbnRSZWN0O1xuXG4gIC8qKiBDYWNoZWQgZGltZW5zaW9ucyBvZiB0aGUgYm91bmRhcnkgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfYm91bmRhcnlSZWN0PzogQ2xpZW50UmVjdDtcblxuICAvKiogRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhIHRlbXBsYXRlIHRvIGNyZWF0ZSB0aGUgZHJhZ2dhYmxlIGl0ZW0ncyBwcmV2aWV3LiAqL1xuICBwcml2YXRlIF9wcmV2aWV3VGVtcGxhdGU/OiBEcmFnUHJldmlld1RlbXBsYXRlIHwgbnVsbDtcblxuICAvKiogVGVtcGxhdGUgZm9yIHBsYWNlaG9sZGVyIGVsZW1lbnQgcmVuZGVyZWQgdG8gc2hvdyB3aGVyZSBhIGRyYWdnYWJsZSB3b3VsZCBiZSBkcm9wcGVkLiAqL1xuICBwcml2YXRlIF9wbGFjZWhvbGRlclRlbXBsYXRlPzogRHJhZ0hlbHBlclRlbXBsYXRlIHwgbnVsbDtcblxuICAvKiogRWxlbWVudHMgdGhhdCBjYW4gYmUgdXNlZCB0byBkcmFnIHRoZSBkcmFnZ2FibGUgaXRlbS4gKi9cbiAgcHJpdmF0ZSBfaGFuZGxlczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIC8qKiBSZWdpc3RlcmVkIGhhbmRsZXMgdGhhdCBhcmUgY3VycmVudGx5IGRpc2FibGVkLiAqL1xuICBwcml2YXRlIF9kaXNhYmxlZEhhbmRsZXMgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpO1xuXG4gIC8qKiBEcm9wcGFibGUgY29udGFpbmVyIHRoYXQgdGhlIGRyYWdnYWJsZSBpcyBhIHBhcnQgb2YuICovXG4gIHByaXZhdGUgX2Ryb3BDb250YWluZXI/OiBEcm9wTGlzdFJlZjtcblxuICAvKiogTGF5b3V0IGRpcmVjdGlvbiBvZiB0aGUgaXRlbS4gKi9cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICAvKiogQXhpcyBhbG9uZyB3aGljaCBkcmFnZ2luZyBpcyBsb2NrZWQuICovXG4gIGxvY2tBeGlzOiAneCcgfCAneSc7XG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBhZnRlciB0aGUgdXNlciBoYXMgcHV0IHRoZWlyXG4gICAqIHBvaW50ZXIgZG93biBiZWZvcmUgc3RhcnRpbmcgdG8gZHJhZyB0aGUgZWxlbWVudC5cbiAgICovXG4gIGRyYWdTdGFydERlbGF5OiBudW1iZXIgfCB7dG91Y2g6IG51bWJlciwgbW91c2U6IG51bWJlcn0gPSAwO1xuXG4gIC8qKiBDbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgcHJldmlldyBlbGVtZW50LiAqL1xuICBwcmV2aWV3Q2xhc3M6IHN0cmluZ3xzdHJpbmdbXXx1bmRlZmluZWQ7XG5cbiAgLyoqIFdoZXRoZXIgc3RhcnRpbmcgdG8gZHJhZyB0aGlzIGVsZW1lbnQgaXMgZGlzYWJsZWQuICovXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgfHwgISEodGhpcy5fZHJvcENvbnRhaW5lciAmJiB0aGlzLl9kcm9wQ29udGFpbmVyLmRpc2FibGVkKTtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fdG9nZ2xlTmF0aXZlRHJhZ0ludGVyYWN0aW9ucygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKiBFbWl0cyBhcyB0aGUgZHJhZyBzZXF1ZW5jZSBpcyBiZWluZyBwcmVwYXJlZC4gKi9cbiAgYmVmb3JlU3RhcnRlZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBpdGVtLiAqL1xuICBzdGFydGVkID0gbmV3IFN1YmplY3Q8e3NvdXJjZTogRHJhZ1JlZn0+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgaGFzIHJlbGVhc2VkIGEgZHJhZyBpdGVtLCBiZWZvcmUgYW55IGFuaW1hdGlvbnMgaGF2ZSBzdGFydGVkLiAqL1xuICByZWxlYXNlZCA9IG5ldyBTdWJqZWN0PHtzb3VyY2U6IERyYWdSZWZ9PigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIGFuIGl0ZW0gaW4gdGhlIGNvbnRhaW5lci4gKi9cbiAgZW5kZWQgPSBuZXcgU3ViamVjdDx7c291cmNlOiBEcmFnUmVmLCBkaXN0YW5jZTogUG9pbnR9PigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgaXRlbSBpbnRvIGEgbmV3IGNvbnRhaW5lci4gKi9cbiAgZW50ZXJlZCA9IG5ldyBTdWJqZWN0PHtjb250YWluZXI6IERyb3BMaXN0UmVmLCBpdGVtOiBEcmFnUmVmLCBjdXJyZW50SW5kZXg6IG51bWJlcn0+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgcmVtb3ZlcyB0aGUgaXRlbSBpdHMgY29udGFpbmVyIGJ5IGRyYWdnaW5nIGl0IGludG8gYW5vdGhlciBjb250YWluZXIuICovXG4gIGV4aXRlZCA9IG5ldyBTdWJqZWN0PHtjb250YWluZXI6IERyb3BMaXN0UmVmLCBpdGVtOiBEcmFnUmVmfT4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgdXNlciBkcm9wcyB0aGUgaXRlbSBpbnNpZGUgYSBjb250YWluZXIuICovXG4gIGRyb3BwZWQgPSBuZXcgU3ViamVjdDx7XG4gICAgcHJldmlvdXNJbmRleDogbnVtYmVyO1xuICAgIGN1cnJlbnRJbmRleDogbnVtYmVyO1xuICAgIGl0ZW06IERyYWdSZWY7XG4gICAgY29udGFpbmVyOiBEcm9wTGlzdFJlZjtcbiAgICBwcmV2aW91c0NvbnRhaW5lcjogRHJvcExpc3RSZWY7XG4gICAgZGlzdGFuY2U6IFBvaW50O1xuICAgIGlzUG9pbnRlck92ZXJDb250YWluZXI6IGJvb2xlYW47XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nIHRoZSBpdGVtLiBVc2Ugd2l0aCBjYXV0aW9uLFxuICAgKiBiZWNhdXNlIHRoaXMgZXZlbnQgd2lsbCBmaXJlIGZvciBldmVyeSBwaXhlbCB0aGF0IHRoZSB1c2VyIGhhcyBkcmFnZ2VkLlxuICAgKi9cbiAgbW92ZWQ6IE9ic2VydmFibGU8e1xuICAgIHNvdXJjZTogRHJhZ1JlZjtcbiAgICBwb2ludGVyUG9zaXRpb246IHt4OiBudW1iZXIsIHk6IG51bWJlcn07XG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50O1xuICAgIGRpc3RhbmNlOiBQb2ludDtcbiAgICBkZWx0YToge3g6IC0xIHwgMCB8IDEsIHk6IC0xIHwgMCB8IDF9O1xuICB9PiA9IHRoaXMuX21vdmVFdmVudHMuYXNPYnNlcnZhYmxlKCk7XG5cbiAgLyoqIEFyYml0cmFyeSBkYXRhIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBkcmFnIGl0ZW0uICovXG4gIGRhdGE6IFQ7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBsb2dpYyBvZiBob3cgdGhlIHBvc2l0aW9uIG9mIHRoZSBkcmFnIGl0ZW1cbiAgICogaXMgbGltaXRlZCB3aGlsZSBpdCdzIGJlaW5nIGRyYWdnZWQuIEdldHMgY2FsbGVkIHdpdGggYSBwb2ludCBjb250YWluaW5nIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAqIG9mIHRoZSB1c2VyJ3MgcG9pbnRlciBvbiB0aGUgcGFnZSBhbmQgc2hvdWxkIHJldHVybiBhIHBvaW50IGRlc2NyaWJpbmcgd2hlcmUgdGhlIGl0ZW0gc2hvdWxkXG4gICAqIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgY29uc3RyYWluUG9zaXRpb24/OiAocG9pbnQ6IFBvaW50LCBkcmFnUmVmOiBEcmFnUmVmKSA9PiBQb2ludDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgX2NvbmZpZzogRHJhZ1JlZkNvbmZpZyxcbiAgICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlcixcbiAgICBwcml2YXRlIF9kcmFnRHJvcFJlZ2lzdHJ5OiBEcmFnRHJvcFJlZ2lzdHJ5PERyYWdSZWYsIERyb3BMaXN0UmVmPikge1xuXG4gICAgdGhpcy53aXRoUm9vdEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5fcGFyZW50UG9zaXRpb25zID0gbmV3IFBhcmVudFBvc2l0aW9uVHJhY2tlcihfZG9jdW1lbnQsIF92aWV3cG9ydFJ1bGVyKTtcbiAgICBfZHJhZ0Ryb3BSZWdpc3RyeS5yZWdpc3RlckRyYWdJdGVtKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhhdCBpcyBiZWluZyB1c2VkIGFzIGEgcGxhY2Vob2xkZXJcbiAgICogd2hpbGUgdGhlIGN1cnJlbnQgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkLlxuICAgKi9cbiAgZ2V0UGxhY2Vob2xkZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgcm9vdCBkcmFnZ2FibGUgZWxlbWVudC4gKi9cbiAgZ2V0Um9vdEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9yb290RWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50bHktdmlzaWJsZSBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyB0aGUgZHJhZyBpdGVtLlxuICAgKiBXaGlsZSBkcmFnZ2luZyB0aGlzIGlzIHRoZSBwbGFjZWhvbGRlciwgb3RoZXJ3aXNlIGl0J3MgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGdldFZpc2libGVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5pc0RyYWdnaW5nKCkgPyB0aGlzLmdldFBsYWNlaG9sZGVyRWxlbWVudCgpIDogdGhpcy5nZXRSb290RWxlbWVudCgpO1xuICB9XG5cbiAgLyoqIFJlZ2lzdGVycyB0aGUgaGFuZGxlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGRyYWcgdGhlIGVsZW1lbnQuICovXG4gIHdpdGhIYW5kbGVzKGhhbmRsZXM6IChIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KVtdKTogdGhpcyB7XG4gICAgdGhpcy5faGFuZGxlcyA9IGhhbmRsZXMubWFwKGhhbmRsZSA9PiBjb2VyY2VFbGVtZW50KGhhbmRsZSkpO1xuICAgIHRoaXMuX2hhbmRsZXMuZm9yRWFjaChoYW5kbGUgPT4gdG9nZ2xlTmF0aXZlRHJhZ0ludGVyYWN0aW9ucyhoYW5kbGUsIGZhbHNlKSk7XG4gICAgdGhpcy5fdG9nZ2xlTmF0aXZlRHJhZ0ludGVyYWN0aW9ucygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgdGVtcGxhdGUgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGRyYWcgcHJldmlldy5cbiAgICogQHBhcmFtIHRlbXBsYXRlIFRlbXBsYXRlIHRoYXQgZnJvbSB3aGljaCB0byBzdGFtcCBvdXQgdGhlIHByZXZpZXcuXG4gICAqL1xuICB3aXRoUHJldmlld1RlbXBsYXRlKHRlbXBsYXRlOiBEcmFnUHJldmlld1RlbXBsYXRlIHwgbnVsbCk6IHRoaXMge1xuICAgIHRoaXMuX3ByZXZpZXdUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgdGVtcGxhdGUgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGRyYWcgcGxhY2Vob2xkZXIuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZSBUZW1wbGF0ZSB0aGF0IGZyb20gd2hpY2ggdG8gc3RhbXAgb3V0IHRoZSBwbGFjZWhvbGRlci5cbiAgICovXG4gIHdpdGhQbGFjZWhvbGRlclRlbXBsYXRlKHRlbXBsYXRlOiBEcmFnSGVscGVyVGVtcGxhdGUgfCBudWxsKTogdGhpcyB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gYWx0ZXJuYXRlIGRyYWcgcm9vdCBlbGVtZW50LiBUaGUgcm9vdCBlbGVtZW50IGlzIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBtb3ZlZCBhc1xuICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZy4gUGFzc2luZyBhbiBhbHRlcm5hdGUgcm9vdCBlbGVtZW50IGlzIHVzZWZ1bCB3aGVuIHRyeWluZyB0byBlbmFibGVcbiAgICogZHJhZ2dpbmcgb24gYW4gZWxlbWVudCB0aGF0IHlvdSBtaWdodCBub3QgaGF2ZSBhY2Nlc3MgdG8uXG4gICAqL1xuICB3aXRoUm9vdEVsZW1lbnQocm9vdEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+IHwgSFRNTEVsZW1lbnQpOiB0aGlzIHtcbiAgICBjb25zdCBlbGVtZW50ID0gY29lcmNlRWxlbWVudChyb290RWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVSb290RWxlbWVudExpc3RlbmVycyh0aGlzLl9yb290RWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fcG9pbnRlckRvd24sIGFjdGl2ZUV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fcG9pbnRlckRvd24sIHBhc3NpdmVFdmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2luaXRpYWxUcmFuc2Zvcm0gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb290RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRWxlbWVudCB0byB3aGljaCB0aGUgZHJhZ2dhYmxlJ3MgcG9zaXRpb24gd2lsbCBiZSBjb25zdHJhaW5lZC5cbiAgICovXG4gIHdpdGhCb3VuZGFyeUVsZW1lbnQoYm91bmRhcnlFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50IHwgbnVsbCk6IHRoaXMge1xuICAgIHRoaXMuX2JvdW5kYXJ5RWxlbWVudCA9IGJvdW5kYXJ5RWxlbWVudCA/IGNvZXJjZUVsZW1lbnQoYm91bmRhcnlFbGVtZW50KSA6IG51bGw7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKGJvdW5kYXJ5RWxlbWVudCkge1xuICAgICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uID0gdGhpcy5fdmlld3BvcnRSdWxlclxuICAgICAgICAuY2hhbmdlKDEwKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NvbnRhaW5JbnNpZGVCb3VuZGFyeU9uUmVzaXplKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIHRoZSBkcmFnZ2luZyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIERPTSBlbGVtZW50LiAqL1xuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX3JlbW92ZVJvb3RFbGVtZW50TGlzdGVuZXJzKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgIC8vIERvIHRoaXMgY2hlY2sgYmVmb3JlIHJlbW92aW5nIGZyb20gdGhlIHJlZ2lzdHJ5IHNpbmNlIGl0J2xsXG4gICAgLy8gc3RvcCBiZWluZyBjb25zaWRlcmVkIGFzIGRyYWdnZWQgb25jZSBpdCBpcyByZW1vdmVkLlxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgLy8gU2luY2Ugd2UgbW92ZSBvdXQgdGhlIGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYm9keSB3aGlsZSBpdCdzIGJlaW5nXG4gICAgICAvLyBkcmFnZ2VkLCB3ZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IGl0J3MgcmVtb3ZlZCBpZiBpdCBnZXRzIGRlc3Ryb3llZC5cbiAgICAgIHJlbW92ZU5vZGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJlbW92ZU5vZGUodGhpcy5fYW5jaG9yKTtcbiAgICB0aGlzLl9kZXN0cm95UHJldmlldygpO1xuICAgIHRoaXMuX2Rlc3Ryb3lQbGFjZWhvbGRlcigpO1xuICAgIHRoaXMuX2RyYWdEcm9wUmVnaXN0cnkucmVtb3ZlRHJhZ0l0ZW0odGhpcyk7XG4gICAgdGhpcy5fcmVtb3ZlU3Vic2NyaXB0aW9ucygpO1xuICAgIHRoaXMuYmVmb3JlU3RhcnRlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuc3RhcnRlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMucmVsZWFzZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLmVuZGVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5lbnRlcmVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5leGl0ZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRyb3BwZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9tb3ZlRXZlbnRzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5faGFuZGxlcyA9IFtdO1xuICAgIHRoaXMuX2Rpc2FibGVkSGFuZGxlcy5jbGVhcigpO1xuICAgIHRoaXMuX2Ryb3BDb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fcGFyZW50UG9zaXRpb25zLmNsZWFyKCk7XG4gICAgdGhpcy5fYm91bmRhcnlFbGVtZW50ID0gdGhpcy5fcm9vdEVsZW1lbnQgPSB0aGlzLl9wbGFjZWhvbGRlclRlbXBsYXRlID1cbiAgICAgICAgdGhpcy5fcHJldmlld1RlbXBsYXRlID0gdGhpcy5fYW5jaG9yID0gbnVsbCE7XG4gIH1cblxuICAvKiogQ2hlY2tzIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IGJlaW5nIGRyYWdnZWQuICovXG4gIGlzRHJhZ2dpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1N0YXJ0ZWREcmFnZ2luZyAmJiB0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LmlzRHJhZ2dpbmcodGhpcyk7XG4gIH1cblxuICAvKiogUmVzZXRzIGEgc3RhbmRhbG9uZSBkcmFnIGl0ZW0gdG8gaXRzIGluaXRpYWwgcG9zaXRpb24uICovXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jvb3RFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuX2luaXRpYWxUcmFuc2Zvcm0gfHwgJyc7XG4gICAgdGhpcy5fYWN0aXZlVHJhbnNmb3JtID0ge3g6IDAsIHk6IDB9O1xuICAgIHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm0gPSB7eDogMCwgeTogMH07XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGhhbmRsZSBhcyBkaXNhYmxlZC4gV2hpbGUgYSBoYW5kbGUgaXMgZGlzYWJsZWQsIGl0J2xsIGNhcHR1cmUgYW5kIGludGVycnVwdCBkcmFnZ2luZy5cbiAgICogQHBhcmFtIGhhbmRsZSBIYW5kbGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVIYW5kbGUoaGFuZGxlOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9oYW5kbGVzLmluZGV4T2YoaGFuZGxlKSA+IC0xKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZEhhbmRsZXMuYWRkKGhhbmRsZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgYSBoYW5kbGUsIGlmIGl0IGhhcyBiZWVuIGRpc2FibGVkLlxuICAgKiBAcGFyYW0gaGFuZGxlIEhhbmRsZSBlbGVtZW50IHRvIGJlIGVuYWJsZWQuXG4gICAqL1xuICBlbmFibGVIYW5kbGUoaGFuZGxlOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX2Rpc2FibGVkSGFuZGxlcy5kZWxldGUoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBsYXlvdXQgZGlyZWN0aW9uIG9mIHRoZSBkcmFnZ2FibGUgaXRlbS4gKi9cbiAgd2l0aERpcmVjdGlvbihkaXJlY3Rpb246IERpcmVjdGlvbik6IHRoaXMge1xuICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjb250YWluZXIgdGhhdCB0aGUgaXRlbSBpcyBwYXJ0IG9mLiAqL1xuICBfd2l0aERyb3BDb250YWluZXIoY29udGFpbmVyOiBEcm9wTGlzdFJlZikge1xuICAgIHRoaXMuX2Ryb3BDb250YWluZXIgPSBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiBwaXhlbHMgdGhlIGRyYWdnYWJsZSBvdXRzaWRlIG9mIGEgZHJvcCBjb250YWluZXIuXG4gICAqL1xuICBnZXRGcmVlRHJhZ1Bvc2l0aW9uKCk6IFJlYWRvbmx5PFBvaW50PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmlzRHJhZ2dpbmcoKSA/IHRoaXMuX2FjdGl2ZVRyYW5zZm9ybSA6IHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm07XG4gICAgcmV0dXJuIHt4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHBpeGVscyB0aGUgZHJhZ2dhYmxlIG91dHNpZGUgb2YgYSBkcm9wIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIHZhbHVlIE5ldyBwb3NpdGlvbiB0byBiZSBzZXQuXG4gICAqL1xuICBzZXRGcmVlRHJhZ1Bvc2l0aW9uKHZhbHVlOiBQb2ludCk6IHRoaXMge1xuICAgIHRoaXMuX2FjdGl2ZVRyYW5zZm9ybSA9IHt4OiAwLCB5OiAwfTtcbiAgICB0aGlzLl9wYXNzaXZlVHJhbnNmb3JtLnggPSB2YWx1ZS54O1xuICAgIHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm0ueSA9IHZhbHVlLnk7XG5cbiAgICBpZiAoIXRoaXMuX2Ryb3BDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2FwcGx5Um9vdEVsZW1lbnRUcmFuc2Zvcm0odmFsdWUueCwgdmFsdWUueSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgaXRlbSdzIHNvcnQgb3JkZXIgYmFzZWQgb24gdGhlIGxhc3Qta25vd24gcG9pbnRlciBwb3NpdGlvbi4gKi9cbiAgX3NvcnRGcm9tTGFzdFBvaW50ZXJQb3NpdGlvbigpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX3BvaW50ZXJQb3NpdGlvbkF0TGFzdERpcmVjdGlvbkNoYW5nZTtcblxuICAgIGlmIChwb3NpdGlvbiAmJiB0aGlzLl9kcm9wQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLl91cGRhdGVBY3RpdmVEcm9wQ29udGFpbmVyKHRoaXMuX2dldENvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uKHBvc2l0aW9uKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFVuc3Vic2NyaWJlcyBmcm9tIHRoZSBnbG9iYWwgc3Vic2NyaXB0aW9ucy4gKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlU3Vic2NyaXB0aW9ucygpIHtcbiAgICB0aGlzLl9wb2ludGVyTW92ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3BvaW50ZXJVcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3Njcm9sbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqIERlc3Ryb3lzIHRoZSBwcmV2aWV3IGVsZW1lbnQgYW5kIGl0cyBWaWV3UmVmLiAqL1xuICBwcml2YXRlIF9kZXN0cm95UHJldmlldygpIHtcbiAgICBpZiAodGhpcy5fcHJldmlldykge1xuICAgICAgcmVtb3ZlTm9kZSh0aGlzLl9wcmV2aWV3KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcHJldmlld1JlZikge1xuICAgICAgdGhpcy5fcHJldmlld1JlZi5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcHJldmlldyA9IHRoaXMuX3ByZXZpZXdSZWYgPSBudWxsITtcbiAgfVxuXG4gIC8qKiBEZXN0cm95cyB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudCBhbmQgaXRzIFZpZXdSZWYuICovXG4gIHByaXZhdGUgX2Rlc3Ryb3lQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAodGhpcy5fcGxhY2Vob2xkZXIpIHtcbiAgICAgIHJlbW92ZU5vZGUodGhpcy5fcGxhY2Vob2xkZXIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wbGFjZWhvbGRlclJlZikge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdGhpcy5fcGxhY2Vob2xkZXJSZWYgPSBudWxsITtcbiAgfVxuXG4gIC8qKiBIYW5kbGVyIGZvciB0aGUgYG1vdXNlZG93bmAvYHRvdWNoc3RhcnRgIGV2ZW50cy4gKi9cbiAgcHJpdmF0ZSBfcG9pbnRlckRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgdGhpcy5iZWZvcmVTdGFydGVkLm5leHQoKTtcblxuICAgIC8vIERlbGVnYXRlIHRoZSBldmVudCBiYXNlZCBvbiB3aGV0aGVyIGl0IHN0YXJ0ZWQgZnJvbSBhIGhhbmRsZSBvciB0aGUgZWxlbWVudCBpdHNlbGYuXG4gICAgaWYgKHRoaXMuX2hhbmRsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB0YXJnZXRIYW5kbGUgPSB0aGlzLl9oYW5kbGVzLmZpbmQoaGFuZGxlID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICByZXR1cm4gISF0YXJnZXQgJiYgKHRhcmdldCA9PT0gaGFuZGxlIHx8IGhhbmRsZS5jb250YWlucyh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGFyZ2V0SGFuZGxlICYmICF0aGlzLl9kaXNhYmxlZEhhbmRsZXMuaGFzKHRhcmdldEhhbmRsZSkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZURyYWdTZXF1ZW5jZSh0YXJnZXRIYW5kbGUsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplRHJhZ1NlcXVlbmNlKHRoaXMuX3Jvb3RFbGVtZW50LCBldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEhhbmRsZXIgdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgbW92ZXMgdGhlaXIgcG9pbnRlciBhZnRlciB0aGV5J3ZlIGluaXRpYXRlZCBhIGRyYWcuICovXG4gIHByaXZhdGUgX3BvaW50ZXJNb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xuICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIGFzIGVhcmx5IGFzIHBvc3NpYmxlIGluIG9yZGVyIHRvIGJsb2NrXG4gICAgLy8gbmF0aXZlIGFjdGlvbnMgbGlrZSBkcmFnZ2luZyB0aGUgc2VsZWN0ZWQgdGV4dCBvciBpbWFnZXMgd2l0aCB0aGUgbW91c2UuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwb2ludGVyUG9zaXRpb24gPSB0aGlzLl9nZXRQb2ludGVyUG9zaXRpb25PblBhZ2UoZXZlbnQpO1xuXG4gICAgaWYgKCF0aGlzLl9oYXNTdGFydGVkRHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlWCA9IE1hdGguYWJzKHBvaW50ZXJQb3NpdGlvbi54IC0gdGhpcy5fcGlja3VwUG9zaXRpb25PblBhZ2UueCk7XG4gICAgICBjb25zdCBkaXN0YW5jZVkgPSBNYXRoLmFicyhwb2ludGVyUG9zaXRpb24ueSAtIHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlLnkpO1xuICAgICAgY29uc3QgaXNPdmVyVGhyZXNob2xkID0gZGlzdGFuY2VYICsgZGlzdGFuY2VZID49IHRoaXMuX2NvbmZpZy5kcmFnU3RhcnRUaHJlc2hvbGQ7XG5cbiAgICAgIC8vIE9ubHkgc3RhcnQgZHJhZ2dpbmcgYWZ0ZXIgdGhlIHVzZXIgaGFzIG1vdmVkIG1vcmUgdGhhbiB0aGUgbWluaW11bSBkaXN0YW5jZSBpbiBlaXRoZXJcbiAgICAgIC8vIGRpcmVjdGlvbi4gTm90ZSB0aGF0IHRoaXMgaXMgcHJlZmVycmFibGUgb3ZlciBkb2luZyBzb21ldGhpbmcgbGlrZSBgc2tpcChtaW5pbXVtRGlzdGFuY2UpYFxuICAgICAgLy8gaW4gdGhlIGBwb2ludGVyTW92ZWAgc3Vic2NyaXB0aW9uLCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRvIGhhdmUgb25lIG1vdmUgZXZlbnRcbiAgICAgIC8vIHBlciBwaXhlbCBvZiBtb3ZlbWVudCAoZS5nLiBpZiB0aGUgdXNlciBtb3ZlcyB0aGVpciBwb2ludGVyIHF1aWNrbHkpLlxuICAgICAgaWYgKGlzT3ZlclRocmVzaG9sZCkge1xuICAgICAgICBjb25zdCBpc0RlbGF5RWxhcHNlZCA9IERhdGUubm93KCkgPj0gdGhpcy5fZHJhZ1N0YXJ0VGltZSArIHRoaXMuX2dldERyYWdTdGFydERlbGF5KGV2ZW50KTtcbiAgICAgICAgaWYgKCFpc0RlbGF5RWxhcHNlZCkge1xuICAgICAgICAgIHRoaXMuX2VuZERyYWdTZXF1ZW5jZShldmVudCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJldmVudCBvdGhlciBkcmFnIHNlcXVlbmNlcyBmcm9tIHN0YXJ0aW5nIHdoaWxlIHNvbWV0aGluZyBpbiB0aGUgY29udGFpbmVyIGlzIHN0aWxsXG4gICAgICAgIC8vIGJlaW5nIGRyYWdnZWQuIFRoaXMgY2FuIGhhcHBlbiB3aGlsZSB3ZSdyZSB3YWl0aW5nIGZvciB0aGUgZHJvcCBhbmltYXRpb24gdG8gZmluaXNoXG4gICAgICAgIC8vIGFuZCBjYW4gY2F1c2UgZXJyb3JzLCBiZWNhdXNlIHNvbWUgZWxlbWVudHMgbWlnaHQgc3RpbGwgYmUgbW92aW5nIGFyb3VuZC5cbiAgICAgICAgaWYgKCF0aGlzLl9kcm9wQ29udGFpbmVyIHx8ICF0aGlzLl9kcm9wQ29udGFpbmVyLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgICAgIHRoaXMuX2hhc1N0YXJ0ZWREcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB0aGlzLl9zdGFydERyYWdTZXF1ZW5jZShldmVudCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBXZSBvbmx5IG5lZWQgdGhlIHByZXZpZXcgZGltZW5zaW9ucyBpZiB3ZSBoYXZlIGEgYm91bmRhcnkgZWxlbWVudC5cbiAgICBpZiAodGhpcy5fYm91bmRhcnlFbGVtZW50KSB7XG4gICAgICAvLyBDYWNoZSB0aGUgcHJldmlldyBlbGVtZW50IHJlY3QgaWYgd2UgaGF2ZW4ndCBjYWNoZWQgaXQgYWxyZWFkeSBvciBpZlxuICAgICAgLy8gd2UgY2FjaGVkIGl0IHRvbyBlYXJseSBiZWZvcmUgdGhlIGVsZW1lbnQgZGltZW5zaW9ucyB3ZXJlIGNvbXB1dGVkLlxuICAgICAgaWYgKCF0aGlzLl9wcmV2aWV3UmVjdCB8fCAoIXRoaXMuX3ByZXZpZXdSZWN0LndpZHRoICYmICF0aGlzLl9wcmV2aWV3UmVjdC5oZWlnaHQpKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpZXdSZWN0ID0gKHRoaXMuX3ByZXZpZXcgfHwgdGhpcy5fcm9vdEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uID0gdGhpcy5fZ2V0Q29uc3RyYWluZWRQb2ludGVyUG9zaXRpb24ocG9pbnRlclBvc2l0aW9uKTtcbiAgICB0aGlzLl9oYXNNb3ZlZCA9IHRydWU7XG4gICAgdGhpcy5fdXBkYXRlUG9pbnRlckRpcmVjdGlvbkRlbHRhKGNvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uKTtcblxuICAgIGlmICh0aGlzLl9kcm9wQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLl91cGRhdGVBY3RpdmVEcm9wQ29udGFpbmVyKGNvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWN0aXZlVHJhbnNmb3JtID0gdGhpcy5fYWN0aXZlVHJhbnNmb3JtO1xuICAgICAgYWN0aXZlVHJhbnNmb3JtLnggPVxuICAgICAgICAgIGNvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uLnggLSB0aGlzLl9waWNrdXBQb3NpdGlvbk9uUGFnZS54ICsgdGhpcy5fcGFzc2l2ZVRyYW5zZm9ybS54O1xuICAgICAgYWN0aXZlVHJhbnNmb3JtLnkgPVxuICAgICAgICAgIGNvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uLnkgLSB0aGlzLl9waWNrdXBQb3NpdGlvbk9uUGFnZS55ICsgdGhpcy5fcGFzc2l2ZVRyYW5zZm9ybS55O1xuXG4gICAgICB0aGlzLl9hcHBseVJvb3RFbGVtZW50VHJhbnNmb3JtKGFjdGl2ZVRyYW5zZm9ybS54LCBhY3RpdmVUcmFuc2Zvcm0ueSk7XG5cbiAgICAgIC8vIEFwcGx5IHRyYW5zZm9ybSBhcyBhdHRyaWJ1dGUgaWYgZHJhZ2dpbmcgYW5kIHN2ZyBlbGVtZW50IHRvIHdvcmsgZm9yIElFXG4gICAgICBpZiAodHlwZW9mIFNWR0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuX3Jvb3RFbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICBjb25zdCBhcHBsaWVkVHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2FjdGl2ZVRyYW5zZm9ybS54fSAke2FjdGl2ZVRyYW5zZm9ybS55fSlgO1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGFwcGxpZWRUcmFuc2Zvcm0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNpbmNlIHRoaXMgZXZlbnQgZ2V0cyBmaXJlZCBmb3IgZXZlcnkgcGl4ZWwgd2hpbGUgZHJhZ2dpbmcsIHdlIG9ubHlcbiAgICAvLyB3YW50IHRvIGZpcmUgaXQgaWYgdGhlIGNvbnN1bWVyIG9wdGVkIGludG8gaXQuIEFsc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlLWVudGVyIHRoZSB6b25lIGJlY2F1c2Ugd2UgcnVuIGFsbCBvZiB0aGUgZXZlbnRzIG9uIHRoZSBvdXRzaWRlLlxuICAgIGlmICh0aGlzLl9tb3ZlRXZlbnRzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9tb3ZlRXZlbnRzLm5leHQoe1xuICAgICAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgICAgICBwb2ludGVyUG9zaXRpb246IGNvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uLFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIGRpc3RhbmNlOiB0aGlzLl9nZXREcmFnRGlzdGFuY2UoY29uc3RyYWluZWRQb2ludGVyUG9zaXRpb24pLFxuICAgICAgICAgIGRlbHRhOiB0aGlzLl9wb2ludGVyRGlyZWN0aW9uRGVsdGFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogSGFuZGxlciB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciBsaWZ0cyB0aGVpciBwb2ludGVyIHVwLCBhZnRlciBpbml0aWF0aW5nIGEgZHJhZy4gKi9cbiAgcHJpdmF0ZSBfcG9pbnRlclVwID0gKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xuICAgIHRoaXMuX2VuZERyYWdTZXF1ZW5jZShldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHN1YnNjcmlwdGlvbnMgYW5kIHN0b3BzIHRoZSBkcmFnZ2luZyBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIGV2ZW50IEJyb3dzZXIgZXZlbnQgb2JqZWN0IHRoYXQgZW5kZWQgdGhlIHNlcXVlbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfZW5kRHJhZ1NlcXVlbmNlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xuICAgIC8vIE5vdGUgdGhhdCBoZXJlIHdlIHVzZSBgaXNEcmFnZ2luZ2AgZnJvbSB0aGUgc2VydmljZSwgcmF0aGVyIHRoYW4gZnJvbSBgdGhpc2AuXG4gICAgLy8gVGhlIGRpZmZlcmVuY2UgaXMgdGhhdCB0aGUgb25lIGZyb20gdGhlIHNlcnZpY2UgcmVmbGVjdHMgd2hldGhlciBhIGRyYWdnaW5nIHNlcXVlbmNlXG4gICAgLy8gaGFzIGJlZW4gaW5pdGlhdGVkLCB3aGVyZWFzIHRoZSBvbmUgb24gYHRoaXNgIGluY2x1ZGVzIHdoZXRoZXIgdGhlIHVzZXIgaGFzIHBhc3NlZFxuICAgIC8vIHRoZSBtaW5pbXVtIGRyYWdnaW5nIHRocmVzaG9sZC5cbiAgICBpZiAoIXRoaXMuX2RyYWdEcm9wUmVnaXN0cnkuaXNEcmFnZ2luZyh0aGlzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LnN0b3BEcmFnZ2luZyh0aGlzKTtcbiAgICB0aGlzLl90b2dnbGVOYXRpdmVEcmFnSW50ZXJhY3Rpb25zKCk7XG5cbiAgICBpZiAodGhpcy5faGFuZGxlcykge1xuICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc3R5bGUud2Via2l0VGFwSGlnaGxpZ2h0Q29sb3IgPSB0aGlzLl9yb290RWxlbWVudFRhcEhpZ2hsaWdodDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2hhc1N0YXJ0ZWREcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVsZWFzZWQubmV4dCh7c291cmNlOiB0aGlzfSk7XG5cbiAgICBpZiAodGhpcy5fZHJvcENvbnRhaW5lcikge1xuICAgICAgLy8gU3RvcCBzY3JvbGxpbmcgaW1tZWRpYXRlbHksIGluc3RlYWQgb2Ygd2FpdGluZyBmb3IgdGhlIGFuaW1hdGlvbiB0byBmaW5pc2guXG4gICAgICB0aGlzLl9kcm9wQ29udGFpbmVyLl9zdG9wU2Nyb2xsaW5nKCk7XG4gICAgICB0aGlzLl9hbmltYXRlUHJldmlld1RvUGxhY2Vob2xkZXIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fY2xlYW51cERyYWdBcnRpZmFjdHMoZXZlbnQpO1xuICAgICAgICB0aGlzLl9jbGVhbnVwQ2FjaGVkRGltZW5zaW9ucygpO1xuICAgICAgICB0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LnN0b3BEcmFnZ2luZyh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb252ZXJ0IHRoZSBhY3RpdmUgdHJhbnNmb3JtIGludG8gYSBwYXNzaXZlIG9uZS4gVGhpcyBtZWFucyB0aGF0IG5leHQgdGltZVxuICAgICAgLy8gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBpdGVtLCBpdHMgcG9zaXRpb24gd2lsbCBiZSBjYWxjdWxhdGVkIHJlbGF0aXZlbHlcbiAgICAgIC8vIHRvIHRoZSBuZXcgcGFzc2l2ZSB0cmFuc2Zvcm0uXG4gICAgICB0aGlzLl9wYXNzaXZlVHJhbnNmb3JtLnggPSB0aGlzLl9hY3RpdmVUcmFuc2Zvcm0ueDtcbiAgICAgIHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm0ueSA9IHRoaXMuX2FjdGl2ZVRyYW5zZm9ybS55O1xuICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuZW5kZWQubmV4dCh7XG4gICAgICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgICAgIGRpc3RhbmNlOiB0aGlzLl9nZXREcmFnRGlzdGFuY2UodGhpcy5fZ2V0UG9pbnRlclBvc2l0aW9uT25QYWdlKGV2ZW50KSlcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NsZWFudXBDYWNoZWREaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LnN0b3BEcmFnZ2luZyh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKiogU3RhcnRzIHRoZSBkcmFnZ2luZyBzZXF1ZW5jZS4gKi9cbiAgcHJpdmF0ZSBfc3RhcnREcmFnU2VxdWVuY2UoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSB7XG4gICAgLy8gRW1pdCB0aGUgZXZlbnQgb24gdGhlIGl0ZW0gYmVmb3JlIHRoZSBvbmUgb24gdGhlIGNvbnRhaW5lci5cbiAgICB0aGlzLnN0YXJ0ZWQubmV4dCh7c291cmNlOiB0aGlzfSk7XG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50KGV2ZW50KSkge1xuICAgICAgdGhpcy5fbGFzdFRvdWNoRXZlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICB0aGlzLl90b2dnbGVOYXRpdmVEcmFnSW50ZXJhY3Rpb25zKCk7XG5cbiAgICBjb25zdCBkcm9wQ29udGFpbmVyID0gdGhpcy5fZHJvcENvbnRhaW5lcjtcblxuICAgIGlmIChkcm9wQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdEVsZW1lbnQ7XG4gICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGUhO1xuICAgICAgY29uc3QgcHJldmlldyA9IHRoaXMuX3ByZXZpZXcgPSB0aGlzLl9jcmVhdGVQcmV2aWV3RWxlbWVudCgpO1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB0aGlzLl9wbGFjZWhvbGRlciA9IHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyRWxlbWVudCgpO1xuICAgICAgY29uc3QgYW5jaG9yID0gdGhpcy5fYW5jaG9yID0gdGhpcy5fYW5jaG9yIHx8IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXG4gICAgICAvLyBJbnNlcnQgYW4gYW5jaG9yIG5vZGUgc28gdGhhdCB3ZSBjYW4gcmVzdG9yZSB0aGUgZWxlbWVudCdzIHBvc2l0aW9uIGluIHRoZSBET00uXG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGFuY2hvciwgZWxlbWVudCk7XG5cbiAgICAgIC8vIFdlIG1vdmUgdGhlIGVsZW1lbnQgb3V0IGF0IHRoZSBlbmQgb2YgdGhlIGJvZHkgYW5kIHdlIG1ha2UgaXQgaGlkZGVuLCBiZWNhdXNlIGtlZXBpbmcgaXQgaW5cbiAgICAgIC8vIHBsYWNlIHdpbGwgdGhyb3cgb2ZmIHRoZSBjb25zdW1lcidzIGA6bGFzdC1jaGlsZGAgc2VsZWN0b3JzLiBXZSBjYW4ndCByZW1vdmUgdGhlIGVsZW1lbnRcbiAgICAgIC8vIGZyb20gdGhlIERPTSBjb21wbGV0ZWx5LCBiZWNhdXNlIGlPUyB3aWxsIHN0b3AgZmlyaW5nIGFsbCBzdWJzZXF1ZW50IGV2ZW50cyBpbiB0aGUgY2hhaW4uXG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLl9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhcmVudC5yZXBsYWNlQ2hpbGQocGxhY2Vob2xkZXIsIGVsZW1lbnQpKTtcbiAgICAgIGdldFByZXZpZXdJbnNlcnRpb25Qb2ludCh0aGlzLl9kb2N1bWVudCkuYXBwZW5kQ2hpbGQocHJldmlldyk7XG4gICAgICBkcm9wQ29udGFpbmVyLnN0YXJ0KCk7XG4gICAgICB0aGlzLl9pbml0aWFsQ29udGFpbmVyID0gZHJvcENvbnRhaW5lcjtcbiAgICAgIHRoaXMuX2luaXRpYWxJbmRleCA9IGRyb3BDb250YWluZXIuZ2V0SXRlbUluZGV4KHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbml0aWFsQ29udGFpbmVyID0gdGhpcy5faW5pdGlhbEluZGV4ID0gdW5kZWZpbmVkITtcbiAgICB9XG5cbiAgICAvLyBJbXBvcnRhbnQgdG8gcnVuIGFmdGVyIHdlJ3ZlIGNhbGxlZCBgc3RhcnRgIG9uIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgLy8gc28gdGhhdCBpdCBoYXMgaGFkIHRpbWUgdG8gcmVzb2x2ZSBpdHMgc2Nyb2xsYWJsZSBwYXJlbnRzLlxuICAgIHRoaXMuX3BhcmVudFBvc2l0aW9ucy5jYWNoZShkcm9wQ29udGFpbmVyID8gZHJvcENvbnRhaW5lci5nZXRTY3JvbGxhYmxlUGFyZW50cygpIDogW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgdGhlIGRpZmZlcmVudCB2YXJpYWJsZXMgYW5kIHN1YnNjcmlwdGlvbnNcbiAgICogdGhhdCB3aWxsIGJlIG5lY2Vzc2FyeSBmb3IgdGhlIGRyYWdnaW5nIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0gcmVmZXJlbmNlRWxlbWVudCBFbGVtZW50IHRoYXQgc3RhcnRlZCB0aGUgZHJhZyBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIGV2ZW50IEJyb3dzZXIgZXZlbnQgb2JqZWN0IHRoYXQgc3RhcnRlZCB0aGUgc2VxdWVuY2UuXG4gICAqL1xuICBwcml2YXRlIF9pbml0aWFsaXplRHJhZ1NlcXVlbmNlKHJlZmVyZW5jZUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHtcbiAgICAvLyBBbHdheXMgc3RvcCBwcm9wYWdhdGlvbiBmb3IgdGhlIGV2ZW50IHRoYXQgaW5pdGlhbGl6ZXNcbiAgICAvLyB0aGUgZHJhZ2dpbmcgc2VxdWVuY2UsIGluIG9yZGVyIHRvIHByZXZlbnQgaXQgZnJvbSBwb3RlbnRpYWxseVxuICAgIC8vIHN0YXJ0aW5nIGFub3RoZXIgc2VxdWVuY2UgZm9yIGEgZHJhZ2dhYmxlIHBhcmVudCBzb21ld2hlcmUgdXAgdGhlIERPTSB0cmVlLlxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgaXNEcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuICAgIGNvbnN0IGlzVG91Y2hTZXF1ZW5jZSA9IGlzVG91Y2hFdmVudChldmVudCk7XG4gICAgY29uc3QgaXNBdXhpbGlhcnlNb3VzZUJ1dHRvbiA9ICFpc1RvdWNoU2VxdWVuY2UgJiYgKGV2ZW50IGFzIE1vdXNlRXZlbnQpLmJ1dHRvbiAhPT0gMDtcbiAgICBjb25zdCByb290RWxlbWVudCA9IHRoaXMuX3Jvb3RFbGVtZW50O1xuICAgIGNvbnN0IGlzU3ludGhldGljRXZlbnQgPSAhaXNUb3VjaFNlcXVlbmNlICYmIHRoaXMuX2xhc3RUb3VjaEV2ZW50VGltZSAmJlxuICAgICAgdGhpcy5fbGFzdFRvdWNoRXZlbnRUaW1lICsgTU9VU0VfRVZFTlRfSUdOT1JFX1RJTUUgPiBEYXRlLm5vdygpO1xuXG4gICAgLy8gSWYgdGhlIGV2ZW50IHN0YXJ0ZWQgZnJvbSBhbiBlbGVtZW50IHdpdGggdGhlIG5hdGl2ZSBIVE1MIGRyYWcmZHJvcCwgaXQnbGwgaW50ZXJmZXJlXG4gICAgLy8gd2l0aCBvdXIgb3duIGRyYWdnaW5nIChlLmcuIGBpbWdgIHRhZ3MgZG8gaXQgYnkgZGVmYXVsdCkuIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uXG4gICAgLy8gdG8gc3RvcCBpdCBmcm9tIGhhcHBlbmluZy4gTm90ZSB0aGF0IHByZXZlbnRpbmcgb24gYGRyYWdzdGFydGAgYWxzbyBzZWVtcyB0byB3b3JrLCBidXRcbiAgICAvLyBpdCdzIGZsYWt5IGFuZCBpdCBmYWlscyBpZiB0aGUgdXNlciBkcmFncyBpdCBhd2F5IHF1aWNrbHkuIEFsc28gbm90ZSB0aGF0IHdlIG9ubHkgd2FudFxuICAgIC8vIHRvIGRvIHRoaXMgZm9yIGBtb3VzZWRvd25gIHNpbmNlIGRvaW5nIHRoZSBzYW1lIGZvciBgdG91Y2hzdGFydGAgd2lsbCBzdG9wIGFueSBgY2xpY2tgXG4gICAgLy8gZXZlbnRzIGZyb20gZmlyaW5nIG9uIHRvdWNoIGRldmljZXMuXG4gICAgaWYgKGV2ZW50LnRhcmdldCAmJiAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5kcmFnZ2FibGUgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgLy8gQWJvcnQgaWYgdGhlIHVzZXIgaXMgYWxyZWFkeSBkcmFnZ2luZyBvciBpcyB1c2luZyBhIG1vdXNlIGJ1dHRvbiBvdGhlciB0aGFuIHRoZSBwcmltYXJ5IG9uZS5cbiAgICBpZiAoaXNEcmFnZ2luZyB8fCBpc0F1eGlsaWFyeU1vdXNlQnV0dG9uIHx8IGlzU3ludGhldGljRXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSd2ZSBnb3QgaGFuZGxlcywgd2UgbmVlZCB0byBkaXNhYmxlIHRoZSB0YXAgaGlnaGxpZ2h0IG9uIHRoZSBlbnRpcmUgcm9vdCBlbGVtZW50LFxuICAgIC8vIG90aGVyd2lzZSBpT1Mgd2lsbCBzdGlsbCBhZGQgaXQsIGV2ZW4gdGhvdWdoIGFsbCB0aGUgZHJhZyBpbnRlcmFjdGlvbnMgb24gdGhlIGhhbmRsZVxuICAgIC8vIGFyZSBkaXNhYmxlZC5cbiAgICBpZiAodGhpcy5faGFuZGxlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3Jvb3RFbGVtZW50VGFwSGlnaGxpZ2h0ID0gcm9vdEVsZW1lbnQuc3R5bGUud2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I7XG4gICAgICByb290RWxlbWVudC5zdHlsZS53ZWJraXRUYXBIaWdobGlnaHRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfVxuXG4gICAgdGhpcy5faGFzU3RhcnRlZERyYWdnaW5nID0gdGhpcy5faGFzTW92ZWQgPSBmYWxzZTtcblxuICAgIC8vIEF2b2lkIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMgYW5kIG1lbW9yeSBsZWFrcyB3aGVuIG11bHRpIHRvdWNoXG4gICAgLy8gKGlzRHJhZ2dpbmcgY2hlY2sgYWJvdmUgaXNuJ3QgZW5vdWdoIGJlY2F1c2Ugb2YgcG9zc2libGUgdGVtcG9yYWwgYW5kL29yIGRpbWVuc2lvbmFsIGRlbGF5cylcbiAgICB0aGlzLl9yZW1vdmVTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5fcG9pbnRlck1vdmVTdWJzY3JpcHRpb24gPSB0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LnBvaW50ZXJNb3ZlLnN1YnNjcmliZSh0aGlzLl9wb2ludGVyTW92ZSk7XG4gICAgdGhpcy5fcG9pbnRlclVwU3Vic2NyaXB0aW9uID0gdGhpcy5fZHJhZ0Ryb3BSZWdpc3RyeS5wb2ludGVyVXAuc3Vic2NyaWJlKHRoaXMuX3BvaW50ZXJVcCk7XG4gICAgdGhpcy5fc2Nyb2xsU3Vic2NyaXB0aW9uID0gdGhpcy5fZHJhZ0Ryb3BSZWdpc3RyeS5zY3JvbGwuc3Vic2NyaWJlKHNjcm9sbEV2ZW50ID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZU9uU2Nyb2xsKHNjcm9sbEV2ZW50KTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9ib3VuZGFyeUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2JvdW5kYXJ5UmVjdCA9IGdldE11dGFibGVDbGllbnRSZWN0KHRoaXMuX2JvdW5kYXJ5RWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIGN1c3RvbSBwcmV2aWV3IHdlIGNhbid0IGtub3cgYWhlYWQgb2YgdGltZSBob3cgbGFyZ2UgaXQnbGwgYmUgc28gd2UgcG9zaXRpb25cbiAgICAvLyBpdCBuZXh0IHRvIHRoZSBjdXJzb3IuIFRoZSBleGNlcHRpb24gaXMgd2hlbiB0aGUgY29uc3VtZXIgaGFzIG9wdGVkIGludG8gbWFraW5nIHRoZSBwcmV2aWV3XG4gICAgLy8gdGhlIHNhbWUgc2l6ZSBhcyB0aGUgcm9vdCBlbGVtZW50LCBpbiB3aGljaCBjYXNlIHdlIGRvIGtub3cgdGhlIHNpemUuXG4gICAgY29uc3QgcHJldmlld1RlbXBsYXRlID0gdGhpcy5fcHJldmlld1RlbXBsYXRlO1xuICAgIHRoaXMuX3BpY2t1cFBvc2l0aW9uSW5FbGVtZW50ID0gcHJldmlld1RlbXBsYXRlICYmIHByZXZpZXdUZW1wbGF0ZS50ZW1wbGF0ZSAmJlxuICAgICAgIXByZXZpZXdUZW1wbGF0ZS5tYXRjaFNpemUgPyB7eDogMCwgeTogMH0gOlxuICAgICAgdGhpcy5fZ2V0UG9pbnRlclBvc2l0aW9uSW5FbGVtZW50KHJlZmVyZW5jZUVsZW1lbnQsIGV2ZW50KTtcbiAgICBjb25zdCBwb2ludGVyUG9zaXRpb24gPSB0aGlzLl9waWNrdXBQb3NpdGlvbk9uUGFnZSA9IHRoaXMuX2dldFBvaW50ZXJQb3NpdGlvbk9uUGFnZShldmVudCk7XG4gICAgdGhpcy5fcG9pbnRlckRpcmVjdGlvbkRlbHRhID0ge3g6IDAsIHk6IDB9O1xuICAgIHRoaXMuX3BvaW50ZXJQb3NpdGlvbkF0TGFzdERpcmVjdGlvbkNoYW5nZSA9IHt4OiBwb2ludGVyUG9zaXRpb24ueCwgeTogcG9pbnRlclBvc2l0aW9uLnl9O1xuICAgIHRoaXMuX2RyYWdTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX2RyYWdEcm9wUmVnaXN0cnkuc3RhcnREcmFnZ2luZyh0aGlzLCBldmVudCk7XG4gIH1cblxuICAvKiogQ2xlYW5zIHVwIHRoZSBET00gYXJ0aWZhY3RzIHRoYXQgd2VyZSBhZGRlZCB0byBmYWNpbGl0YXRlIHRoZSBlbGVtZW50IGJlaW5nIGRyYWdnZWQuICovXG4gIHByaXZhdGUgX2NsZWFudXBEcmFnQXJ0aWZhY3RzKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xuICAgIC8vIFJlc3RvcmUgdGhlIGVsZW1lbnQncyB2aXNpYmlsaXR5IGFuZCBpbnNlcnQgaXQgYXQgaXRzIG9sZCBwb3NpdGlvbiBpbiB0aGUgRE9NLlxuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRoYXQgd2UgbWFpbnRhaW4gdGhlIHBvc2l0aW9uLCBiZWNhdXNlIG1vdmluZyB0aGUgZWxlbWVudCBhcm91bmQgaW4gdGhlIERPTVxuICAgIC8vIGNhbiB0aHJvdyBvZmYgYE5nRm9yYCB3aGljaCBkb2VzIHNtYXJ0IGRpZmZpbmcgYW5kIHJlLWNyZWF0ZXMgZWxlbWVudHMgb25seSB3aGVuIG5lY2Vzc2FyeSxcbiAgICAvLyB3aGlsZSBtb3ZpbmcgdGhlIGV4aXN0aW5nIGVsZW1lbnRzIGluIGFsbCBvdGhlciBjYXNlcy5cbiAgICB0aGlzLl9yb290RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgdGhpcy5fYW5jaG9yLnBhcmVudE5vZGUhLnJlcGxhY2VDaGlsZCh0aGlzLl9yb290RWxlbWVudCwgdGhpcy5fYW5jaG9yKTtcblxuICAgIHRoaXMuX2Rlc3Ryb3lQcmV2aWV3KCk7XG4gICAgdGhpcy5fZGVzdHJveVBsYWNlaG9sZGVyKCk7XG4gICAgdGhpcy5fYm91bmRhcnlSZWN0ID0gdGhpcy5fcHJldmlld1JlY3QgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBSZS1lbnRlciB0aGUgTmdab25lIHNpbmNlIHdlIGJvdW5kIGBkb2N1bWVudGAgZXZlbnRzIG9uIHRoZSBvdXRzaWRlLlxuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZHJvcENvbnRhaW5lciE7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjb250YWluZXIuZ2V0SXRlbUluZGV4KHRoaXMpO1xuICAgICAgY29uc3QgcG9pbnRlclBvc2l0aW9uID0gdGhpcy5fZ2V0UG9pbnRlclBvc2l0aW9uT25QYWdlKGV2ZW50KTtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5fZ2V0RHJhZ0Rpc3RhbmNlKHRoaXMuX2dldFBvaW50ZXJQb3NpdGlvbk9uUGFnZShldmVudCkpO1xuICAgICAgY29uc3QgaXNQb2ludGVyT3ZlckNvbnRhaW5lciA9IGNvbnRhaW5lci5faXNPdmVyQ29udGFpbmVyKFxuICAgICAgICBwb2ludGVyUG9zaXRpb24ueCwgcG9pbnRlclBvc2l0aW9uLnkpO1xuXG4gICAgICB0aGlzLmVuZGVkLm5leHQoe3NvdXJjZTogdGhpcywgZGlzdGFuY2V9KTtcbiAgICAgIHRoaXMuZHJvcHBlZC5uZXh0KHtcbiAgICAgICAgaXRlbTogdGhpcyxcbiAgICAgICAgY3VycmVudEluZGV4LFxuICAgICAgICBwcmV2aW91c0luZGV4OiB0aGlzLl9pbml0aWFsSW5kZXgsXG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICBwcmV2aW91c0NvbnRhaW5lcjogdGhpcy5faW5pdGlhbENvbnRhaW5lcixcbiAgICAgICAgaXNQb2ludGVyT3ZlckNvbnRhaW5lcixcbiAgICAgICAgZGlzdGFuY2VcbiAgICAgIH0pO1xuICAgICAgY29udGFpbmVyLmRyb3AodGhpcywgY3VycmVudEluZGV4LCB0aGlzLl9pbml0aWFsQ29udGFpbmVyLCBpc1BvaW50ZXJPdmVyQ29udGFpbmVyLCBkaXN0YW5jZSxcbiAgICAgICAgICB0aGlzLl9pbml0aWFsSW5kZXgpO1xuICAgICAgdGhpcy5fZHJvcENvbnRhaW5lciA9IHRoaXMuX2luaXRpYWxDb250YWluZXI7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaXRlbSdzIHBvc2l0aW9uIGluIGl0cyBkcm9wIGNvbnRhaW5lciwgb3IgbW92ZXMgaXRcbiAgICogaW50byBhIG5ldyBvbmUsIGRlcGVuZGluZyBvbiBpdHMgY3VycmVudCBkcmFnIHBvc2l0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlQWN0aXZlRHJvcENvbnRhaW5lcih7eCwgeX06IFBvaW50KSB7XG4gICAgLy8gRHJvcCBjb250YWluZXIgdGhhdCBkcmFnZ2FibGUgaGFzIGJlZW4gbW92ZWQgaW50by5cbiAgICBsZXQgbmV3Q29udGFpbmVyID0gdGhpcy5faW5pdGlhbENvbnRhaW5lci5fZ2V0U2libGluZ0NvbnRhaW5lckZyb21Qb3NpdGlvbih0aGlzLCB4LCB5KTtcblxuICAgIC8vIElmIHdlIGNvdWxkbid0IGZpbmQgYSBuZXcgY29udGFpbmVyIHRvIG1vdmUgdGhlIGl0ZW0gaW50bywgYW5kIHRoZSBpdGVtIGhhcyBsZWZ0IGl0c1xuICAgIC8vIGluaXRpYWwgY29udGFpbmVyLCBjaGVjayB3aGV0aGVyIHRoZSBpdCdzIG92ZXIgdGhlIGluaXRpYWwgY29udGFpbmVyLiBUaGlzIGhhbmRsZXMgdGhlXG4gICAgLy8gY2FzZSB3aGVyZSB0d28gY29udGFpbmVycyBhcmUgY29ubmVjdGVkIG9uZSB3YXkgYW5kIHRoZSB1c2VyIHRyaWVzIHRvIHVuZG8gZHJhZ2dpbmcgYW5cbiAgICAvLyBpdGVtIGludG8gYSBuZXcgY29udGFpbmVyLlxuICAgIGlmICghbmV3Q29udGFpbmVyICYmIHRoaXMuX2Ryb3BDb250YWluZXIgIT09IHRoaXMuX2luaXRpYWxDb250YWluZXIgJiZcbiAgICAgICAgdGhpcy5faW5pdGlhbENvbnRhaW5lci5faXNPdmVyQ29udGFpbmVyKHgsIHkpKSB7XG4gICAgICBuZXdDb250YWluZXIgPSB0aGlzLl9pbml0aWFsQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGlmIChuZXdDb250YWluZXIgJiYgbmV3Q29udGFpbmVyICE9PSB0aGlzLl9kcm9wQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgLy8gTm90aWZ5IHRoZSBvbGQgY29udGFpbmVyIHRoYXQgdGhlIGl0ZW0gaGFzIGxlZnQuXG4gICAgICAgIHRoaXMuZXhpdGVkLm5leHQoe2l0ZW06IHRoaXMsIGNvbnRhaW5lcjogdGhpcy5fZHJvcENvbnRhaW5lciF9KTtcbiAgICAgICAgdGhpcy5fZHJvcENvbnRhaW5lciEuZXhpdCh0aGlzKTtcbiAgICAgICAgLy8gTm90aWZ5IHRoZSBuZXcgY29udGFpbmVyIHRoYXQgdGhlIGl0ZW0gaGFzIGVudGVyZWQuXG4gICAgICAgIHRoaXMuX2Ryb3BDb250YWluZXIgPSBuZXdDb250YWluZXIhO1xuICAgICAgICB0aGlzLl9kcm9wQ29udGFpbmVyLmVudGVyKHRoaXMsIHgsIHksIG5ld0NvbnRhaW5lciA9PT0gdGhpcy5faW5pdGlhbENvbnRhaW5lciAmJlxuICAgICAgICAgICAgLy8gSWYgd2UncmUgcmUtZW50ZXJpbmcgdGhlIGluaXRpYWwgY29udGFpbmVyIGFuZCBzb3J0aW5nIGlzIGRpc2FibGVkLFxuICAgICAgICAgICAgLy8gcHV0IGl0ZW0gdGhlIGludG8gaXRzIHN0YXJ0aW5nIGluZGV4IHRvIGJlZ2luIHdpdGguXG4gICAgICAgICAgICBuZXdDb250YWluZXIuc29ydGluZ0Rpc2FibGVkID8gdGhpcy5faW5pdGlhbEluZGV4IDogdW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5lbnRlcmVkLm5leHQoe1xuICAgICAgICAgIGl0ZW06IHRoaXMsXG4gICAgICAgICAgY29udGFpbmVyOiBuZXdDb250YWluZXIhLFxuICAgICAgICAgIGN1cnJlbnRJbmRleDogbmV3Q29udGFpbmVyIS5nZXRJdGVtSW5kZXgodGhpcylcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9kcm9wQ29udGFpbmVyIS5fc3RhcnRTY3JvbGxpbmdJZk5lY2Vzc2FyeSh4LCB5KTtcbiAgICB0aGlzLl9kcm9wQ29udGFpbmVyIS5fc29ydEl0ZW0odGhpcywgeCwgeSwgdGhpcy5fcG9pbnRlckRpcmVjdGlvbkRlbHRhKTtcbiAgICB0aGlzLl9wcmV2aWV3LnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgIGdldFRyYW5zZm9ybSh4IC0gdGhpcy5fcGlja3VwUG9zaXRpb25JbkVsZW1lbnQueCwgeSAtIHRoaXMuX3BpY2t1cFBvc2l0aW9uSW5FbGVtZW50LnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIG5leHQgdG8gdGhlIHVzZXIncyBwb2ludGVyXG4gICAqIGFuZCB3aWxsIGJlIHVzZWQgYXMgYSBwcmV2aWV3IG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgYmVpbmcgZHJhZ2dlZC5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZVByZXZpZXdFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBwcmV2aWV3Q29uZmlnID0gdGhpcy5fcHJldmlld1RlbXBsYXRlO1xuICAgIGNvbnN0IHByZXZpZXdDbGFzcyA9IHRoaXMucHJldmlld0NsYXNzO1xuICAgIGNvbnN0IHByZXZpZXdUZW1wbGF0ZSA9IHByZXZpZXdDb25maWcgPyBwcmV2aWV3Q29uZmlnLnRlbXBsYXRlIDogbnVsbDtcbiAgICBsZXQgcHJldmlldzogSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAocHJldmlld1RlbXBsYXRlICYmIHByZXZpZXdDb25maWcpIHtcbiAgICAgIC8vIE1lYXN1cmUgdGhlIGVsZW1lbnQgYmVmb3JlIHdlJ3ZlIGluc2VydGVkIHRoZSBwcmV2aWV3XG4gICAgICAvLyBzaW5jZSB0aGUgaW5zZXJ0aW9uIGNvdWxkIHRocm93IG9mZiB0aGUgbWVhc3VyZW1lbnQuXG4gICAgICBjb25zdCByb290UmVjdCA9IHByZXZpZXdDb25maWcubWF0Y2hTaXplID8gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsO1xuICAgICAgY29uc3Qgdmlld1JlZiA9IHByZXZpZXdDb25maWcudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcocHJldmlld1RlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld0NvbmZpZy5jb250ZXh0KTtcbiAgICAgIHZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgcHJldmlldyA9IGdldFJvb3ROb2RlKHZpZXdSZWYsIHRoaXMuX2RvY3VtZW50KTtcbiAgICAgIHRoaXMuX3ByZXZpZXdSZWYgPSB2aWV3UmVmO1xuICAgICAgaWYgKHByZXZpZXdDb25maWcubWF0Y2hTaXplKSB7XG4gICAgICAgIG1hdGNoRWxlbWVudFNpemUocHJldmlldywgcm9vdFJlY3QhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZpZXcuc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgICAgIGdldFRyYW5zZm9ybSh0aGlzLl9waWNrdXBQb3NpdGlvbk9uUGFnZS54LCB0aGlzLl9waWNrdXBQb3NpdGlvbk9uUGFnZS55KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3RFbGVtZW50O1xuICAgICAgcHJldmlldyA9IGRlZXBDbG9uZU5vZGUoZWxlbWVudCk7XG4gICAgICBtYXRjaEVsZW1lbnRTaXplKHByZXZpZXcsIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuICAgIH1cblxuICAgIGV4dGVuZFN0eWxlcyhwcmV2aWV3LnN0eWxlLCB7XG4gICAgICAvLyBJdCdzIGltcG9ydGFudCB0aGF0IHdlIGRpc2FibGUgdGhlIHBvaW50ZXIgZXZlbnRzIG9uIHRoZSBwcmV2aWV3LCBiZWNhdXNlXG4gICAgICAvLyBpdCBjYW4gdGhyb3cgb2ZmIHRoZSBgZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludGAgY2FsbHMgaW4gdGhlIGBDZGtEcm9wTGlzdGAuXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAvLyBXZSBoYXZlIHRvIHJlc2V0IHRoZSBtYXJnaW4sIGJlY2F1c2UgaXQgY2FuIHRocm93IG9mZiBwb3NpdGlvbmluZyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQuXG4gICAgICBtYXJnaW46ICcwJyxcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB6SW5kZXg6IGAke3RoaXMuX2NvbmZpZy56SW5kZXggfHwgMTAwMH1gXG4gICAgfSk7XG5cbiAgICB0b2dnbGVOYXRpdmVEcmFnSW50ZXJhY3Rpb25zKHByZXZpZXcsIGZhbHNlKTtcbiAgICBwcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2Nkay1kcmFnLXByZXZpZXcnKTtcbiAgICBwcmV2aWV3LnNldEF0dHJpYnV0ZSgnZGlyJywgdGhpcy5fZGlyZWN0aW9uKTtcblxuICAgIGlmIChwcmV2aWV3Q2xhc3MpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHByZXZpZXdDbGFzcykpIHtcbiAgICAgICAgcHJldmlld0NsYXNzLmZvckVhY2goY2xhc3NOYW1lID0+IHByZXZpZXcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZpZXcuY2xhc3NMaXN0LmFkZChwcmV2aWV3Q2xhc3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcmV2aWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGVzIHRoZSBwcmV2aWV3IGVsZW1lbnQgZnJvbSBpdHMgY3VycmVudCBwb3NpdGlvbiB0byB0aGUgbG9jYXRpb24gb2YgdGhlIGRyb3AgcGxhY2Vob2xkZXIuXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhbmltYXRpb24gY29tcGxldGVzLlxuICAgKi9cbiAgcHJpdmF0ZSBfYW5pbWF0ZVByZXZpZXdUb1BsYWNlaG9sZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBtb3ZlZCB5ZXQsIHRoZSB0cmFuc2l0aW9uZW5kIGV2ZW50IHdvbid0IGZpcmUuXG4gICAgaWYgKCF0aGlzLl9oYXNNb3ZlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlaG9sZGVyUmVjdCA9IHRoaXMuX3BsYWNlaG9sZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gQXBwbHkgdGhlIGNsYXNzIHRoYXQgYWRkcyBhIHRyYW5zaXRpb24gdG8gdGhlIHByZXZpZXcuXG4gICAgdGhpcy5fcHJldmlldy5jbGFzc0xpc3QuYWRkKCdjZGstZHJhZy1hbmltYXRpbmcnKTtcblxuICAgIC8vIE1vdmUgdGhlIHByZXZpZXcgdG8gdGhlIHBsYWNlaG9sZGVyIHBvc2l0aW9uLlxuICAgIHRoaXMuX3ByZXZpZXcuc3R5bGUudHJhbnNmb3JtID0gZ2V0VHJhbnNmb3JtKHBsYWNlaG9sZGVyUmVjdC5sZWZ0LCBwbGFjZWhvbGRlclJlY3QudG9wKTtcblxuICAgIC8vIElmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIGB0cmFuc2l0aW9uYCwgdGhlIGB0cmFuc2l0aW9uZW5kYCBldmVudCB3b24ndCBmaXJlLiBTaW5jZVxuICAgIC8vIHdlIG5lZWQgdG8gdHJpZ2dlciBhIHN0eWxlIHJlY2FsY3VsYXRpb24gaW4gb3JkZXIgZm9yIHRoZSBgY2RrLWRyYWctYW5pbWF0aW5nYCBjbGFzcyB0b1xuICAgIC8vIGFwcGx5IGl0cyBzdHlsZSwgd2UgdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIGF2YWlsYWJsZSBpbmZvIHRvIGZpZ3VyZSBvdXQgd2hldGhlciB3ZSBuZWVkIHRvXG4gICAgLy8gYmluZCB0aGUgZXZlbnQgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIGNvbnN0IGR1cmF0aW9uID0gZ2V0VHJhbnNmb3JtVHJhbnNpdGlvbkR1cmF0aW9uSW5Ncyh0aGlzLl9wcmV2aWV3KTtcblxuICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gKChldmVudDogVHJhbnNpdGlvbkV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKCFldmVudCB8fCAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9wcmV2aWV3ICYmIGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ3RyYW5zZm9ybScpKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q7XG5cbiAgICAgICAgLy8gSWYgYSB0cmFuc2l0aW9uIGlzIHNob3J0IGVub3VnaCwgdGhlIGJyb3dzZXIgbWlnaHQgbm90IGZpcmUgdGhlIGB0cmFuc2l0aW9uZW5kYCBldmVudC5cbiAgICAgICAgLy8gU2luY2Ugd2Uga25vdyBob3cgbG9uZyBpdCdzIHN1cHBvc2VkIHRvIHRha2UsIGFkZCBhIHRpbWVvdXQgd2l0aCBhIDUwJSBidWZmZXIgdGhhdCdsbFxuICAgICAgICAvLyBmaXJlIGlmIHRoZSB0cmFuc2l0aW9uIGhhc24ndCBjb21wbGV0ZWQgd2hlbiBpdCB3YXMgc3VwcG9zZWQgdG8uXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGhhbmRsZXIgYXMgRnVuY3Rpb24sIGR1cmF0aW9uICogMS41KTtcbiAgICAgICAgdGhpcy5fcHJldmlldy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHNob3duIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudCB3aGlsZSBkcmFnZ2luZy4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUGxhY2Vob2xkZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBwbGFjZWhvbGRlckNvbmZpZyA9IHRoaXMuX3BsYWNlaG9sZGVyVGVtcGxhdGU7XG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZW1wbGF0ZSA9IHBsYWNlaG9sZGVyQ29uZmlnID8gcGxhY2Vob2xkZXJDb25maWcudGVtcGxhdGUgOiBudWxsO1xuICAgIGxldCBwbGFjZWhvbGRlcjogSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAocGxhY2Vob2xkZXJUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJSZWYgPSBwbGFjZWhvbGRlckNvbmZpZyEudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgIHBsYWNlaG9sZGVyVGVtcGxhdGUsXG4gICAgICAgIHBsYWNlaG9sZGVyQ29uZmlnIS5jb250ZXh0XG4gICAgICApO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgcGxhY2Vob2xkZXIgPSBnZXRSb290Tm9kZSh0aGlzLl9wbGFjZWhvbGRlclJlZiwgdGhpcy5fZG9jdW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGFjZWhvbGRlciA9IGRlZXBDbG9uZU5vZGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2Nkay1kcmFnLXBsYWNlaG9sZGVyJyk7XG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpZ3VyZXMgb3V0IHRoZSBjb29yZGluYXRlcyBhdCB3aGljaCBhbiBlbGVtZW50IHdhcyBwaWNrZWQgdXAuXG4gICAqIEBwYXJhbSByZWZlcmVuY2VFbGVtZW50IEVsZW1lbnQgdGhhdCBpbml0aWF0ZWQgdGhlIGRyYWdnaW5nLlxuICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgdGhhdCBpbml0aWF0ZWQgdGhlIGRyYWdnaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0UG9pbnRlclBvc2l0aW9uSW5FbGVtZW50KHJlZmVyZW5jZUVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogUG9pbnQge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgaGFuZGxlRWxlbWVudCA9IHJlZmVyZW5jZUVsZW1lbnQgPT09IHRoaXMuX3Jvb3RFbGVtZW50ID8gbnVsbCA6IHJlZmVyZW5jZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVmZXJlbmNlUmVjdCA9IGhhbmRsZUVsZW1lbnQgPyBoYW5kbGVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogZWxlbWVudFJlY3Q7XG4gICAgY29uc3QgcG9pbnQgPSBpc1RvdWNoRXZlbnQoZXZlbnQpID8gZXZlbnQudGFyZ2V0VG91Y2hlc1swXSA6IGV2ZW50O1xuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gdGhpcy5fZ2V0Vmlld3BvcnRTY3JvbGxQb3NpdGlvbigpO1xuICAgIGNvbnN0IHggPSBwb2ludC5wYWdlWCAtIHJlZmVyZW5jZVJlY3QubGVmdCAtIHNjcm9sbFBvc2l0aW9uLmxlZnQ7XG4gICAgY29uc3QgeSA9IHBvaW50LnBhZ2VZIC0gcmVmZXJlbmNlUmVjdC50b3AgLSBzY3JvbGxQb3NpdGlvbi50b3A7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogcmVmZXJlbmNlUmVjdC5sZWZ0IC0gZWxlbWVudFJlY3QubGVmdCArIHgsXG4gICAgICB5OiByZWZlcmVuY2VSZWN0LnRvcCAtIGVsZW1lbnRSZWN0LnRvcCArIHlcbiAgICB9O1xuICB9XG5cbiAgLyoqIERldGVybWluZXMgdGhlIHBvaW50IG9mIHRoZSBwYWdlIHRoYXQgd2FzIHRvdWNoZWQgYnkgdGhlIHVzZXIuICovXG4gIHByaXZhdGUgX2dldFBvaW50ZXJQb3NpdGlvbk9uUGFnZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiBQb2ludCB7XG4gICAgLy8gYHRvdWNoZXNgIHdpbGwgYmUgZW1wdHkgZm9yIHN0YXJ0L2VuZCBldmVudHMgc28gd2UgaGF2ZSB0byBmYWxsIGJhY2sgdG8gYGNoYW5nZWRUb3VjaGVzYC5cbiAgICBjb25zdCBwb2ludCA9IGlzVG91Y2hFdmVudChldmVudCkgPyAoZXZlbnQudG91Y2hlc1swXSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSkgOiBldmVudDtcbiAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHRoaXMuX2dldFZpZXdwb3J0U2Nyb2xsUG9zaXRpb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICB4OiBwb2ludC5wYWdlWCAtIHNjcm9sbFBvc2l0aW9uLmxlZnQsXG4gICAgICB5OiBwb2ludC5wYWdlWSAtIHNjcm9sbFBvc2l0aW9uLnRvcFxuICAgIH07XG4gIH1cblxuXG4gIC8qKiBHZXRzIHRoZSBwb2ludGVyIHBvc2l0aW9uIG9uIHRoZSBwYWdlLCBhY2NvdW50aW5nIGZvciBhbnkgcG9zaXRpb24gY29uc3RyYWludHMuICovXG4gIHByaXZhdGUgX2dldENvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uKHBvaW50OiBQb2ludCk6IFBvaW50IHtcbiAgICBjb25zdCBjb25zdHJhaW5lZFBvaW50ID0gdGhpcy5jb25zdHJhaW5Qb3NpdGlvbiA/IHRoaXMuY29uc3RyYWluUG9zaXRpb24ocG9pbnQsIHRoaXMpIDogcG9pbnQ7XG4gICAgY29uc3QgZHJvcENvbnRhaW5lckxvY2sgPSB0aGlzLl9kcm9wQ29udGFpbmVyID8gdGhpcy5fZHJvcENvbnRhaW5lci5sb2NrQXhpcyA6IG51bGw7XG5cbiAgICBpZiAodGhpcy5sb2NrQXhpcyA9PT0gJ3gnIHx8IGRyb3BDb250YWluZXJMb2NrID09PSAneCcpIHtcbiAgICAgIGNvbnN0cmFpbmVkUG9pbnQueSA9IHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlLnk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvY2tBeGlzID09PSAneScgfHwgZHJvcENvbnRhaW5lckxvY2sgPT09ICd5Jykge1xuICAgICAgY29uc3RyYWluZWRQb2ludC54ID0gdGhpcy5fcGlja3VwUG9zaXRpb25PblBhZ2UueDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYm91bmRhcnlSZWN0KSB7XG4gICAgICBjb25zdCB7eDogcGlja3VwWCwgeTogcGlja3VwWX0gPSB0aGlzLl9waWNrdXBQb3NpdGlvbkluRWxlbWVudDtcbiAgICAgIGNvbnN0IGJvdW5kYXJ5UmVjdCA9IHRoaXMuX2JvdW5kYXJ5UmVjdDtcbiAgICAgIGNvbnN0IHByZXZpZXdSZWN0ID0gdGhpcy5fcHJldmlld1JlY3QhO1xuICAgICAgY29uc3QgbWluWSA9IGJvdW5kYXJ5UmVjdC50b3AgKyBwaWNrdXBZO1xuICAgICAgY29uc3QgbWF4WSA9IGJvdW5kYXJ5UmVjdC5ib3R0b20gLSAocHJldmlld1JlY3QuaGVpZ2h0IC0gcGlja3VwWSk7XG4gICAgICBjb25zdCBtaW5YID0gYm91bmRhcnlSZWN0LmxlZnQgKyBwaWNrdXBYO1xuICAgICAgY29uc3QgbWF4WCA9IGJvdW5kYXJ5UmVjdC5yaWdodCAtIChwcmV2aWV3UmVjdC53aWR0aCAtIHBpY2t1cFgpO1xuXG4gICAgICBjb25zdHJhaW5lZFBvaW50LnggPSBjbGFtcChjb25zdHJhaW5lZFBvaW50LngsIG1pblgsIG1heFgpO1xuICAgICAgY29uc3RyYWluZWRQb2ludC55ID0gY2xhbXAoY29uc3RyYWluZWRQb2ludC55LCBtaW5ZLCBtYXhZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RyYWluZWRQb2ludDtcbiAgfVxuXG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgZHJhZyBkZWx0YSwgYmFzZWQgb24gdGhlIHVzZXIncyBjdXJyZW50IHBvaW50ZXIgcG9zaXRpb24gb24gdGhlIHBhZ2UuICovXG4gIHByaXZhdGUgX3VwZGF0ZVBvaW50ZXJEaXJlY3Rpb25EZWx0YShwb2ludGVyUG9zaXRpb25PblBhZ2U6IFBvaW50KSB7XG4gICAgY29uc3Qge3gsIHl9ID0gcG9pbnRlclBvc2l0aW9uT25QYWdlO1xuICAgIGNvbnN0IGRlbHRhID0gdGhpcy5fcG9pbnRlckRpcmVjdGlvbkRlbHRhO1xuICAgIGNvbnN0IHBvc2l0aW9uU2luY2VMYXN0Q2hhbmdlID0gdGhpcy5fcG9pbnRlclBvc2l0aW9uQXRMYXN0RGlyZWN0aW9uQ2hhbmdlO1xuXG4gICAgLy8gQW1vdW50IG9mIHBpeGVscyB0aGUgdXNlciBoYXMgZHJhZ2dlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkaXJlY3Rpb24gY2hhbmdlZC5cbiAgICBjb25zdCBjaGFuZ2VYID0gTWF0aC5hYnMoeCAtIHBvc2l0aW9uU2luY2VMYXN0Q2hhbmdlLngpO1xuICAgIGNvbnN0IGNoYW5nZVkgPSBNYXRoLmFicyh5IC0gcG9zaXRpb25TaW5jZUxhc3RDaGFuZ2UueSk7XG5cbiAgICAvLyBCZWNhdXNlIHdlIGhhbmRsZSBwb2ludGVyIGV2ZW50cyBvbiBhIHBlci1waXhlbCBiYXNpcywgd2UgZG9uJ3Qgd2FudCB0aGUgZGVsdGFcbiAgICAvLyB0byBjaGFuZ2UgZm9yIGV2ZXJ5IHBpeGVsLCBvdGhlcndpc2UgYW55dGhpbmcgdGhhdCBkZXBlbmRzIG9uIGl0IGNhbiBsb29rIGVycmF0aWMuXG4gICAgLy8gVG8gbWFrZSB0aGUgZGVsdGEgbW9yZSBjb25zaXN0ZW50LCB3ZSB0cmFjayBob3cgbXVjaCB0aGUgdXNlciBoYXMgbW92ZWQgc2luY2UgdGhlIGxhc3RcbiAgICAvLyBkZWx0YSBjaGFuZ2UgYW5kIHdlIG9ubHkgdXBkYXRlIGl0IGFmdGVyIGl0IGhhcyByZWFjaGVkIGEgY2VydGFpbiB0aHJlc2hvbGQuXG4gICAgaWYgKGNoYW5nZVggPiB0aGlzLl9jb25maWcucG9pbnRlckRpcmVjdGlvbkNoYW5nZVRocmVzaG9sZCkge1xuICAgICAgZGVsdGEueCA9IHggPiBwb3NpdGlvblNpbmNlTGFzdENoYW5nZS54ID8gMSA6IC0xO1xuICAgICAgcG9zaXRpb25TaW5jZUxhc3RDaGFuZ2UueCA9IHg7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZVkgPiB0aGlzLl9jb25maWcucG9pbnRlckRpcmVjdGlvbkNoYW5nZVRocmVzaG9sZCkge1xuICAgICAgZGVsdGEueSA9IHkgPiBwb3NpdGlvblNpbmNlTGFzdENoYW5nZS55ID8gMSA6IC0xO1xuICAgICAgcG9zaXRpb25TaW5jZUxhc3RDaGFuZ2UueSA9IHk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbHRhO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIG5hdGl2ZSBkcmFnIGludGVyYWN0aW9ucywgYmFzZWQgb24gaG93IG1hbnkgaGFuZGxlcyBhcmUgcmVnaXN0ZXJlZC4gKi9cbiAgcHJpdmF0ZSBfdG9nZ2xlTmF0aXZlRHJhZ0ludGVyYWN0aW9ucygpIHtcbiAgICBpZiAoIXRoaXMuX3Jvb3RFbGVtZW50IHx8ICF0aGlzLl9oYW5kbGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvdWxkRW5hYmxlID0gdGhpcy5faGFuZGxlcy5sZW5ndGggPiAwIHx8ICF0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChzaG91bGRFbmFibGUgIT09IHRoaXMuX25hdGl2ZUludGVyYWN0aW9uc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuX25hdGl2ZUludGVyYWN0aW9uc0VuYWJsZWQgPSBzaG91bGRFbmFibGU7XG4gICAgICB0b2dnbGVOYXRpdmVEcmFnSW50ZXJhY3Rpb25zKHRoaXMuX3Jvb3RFbGVtZW50LCBzaG91bGRFbmFibGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmVzIHRoZSBtYW51YWxseS1hZGRlZCBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9yZW1vdmVSb290RWxlbWVudExpc3RlbmVycyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fcG9pbnRlckRvd24sIGFjdGl2ZUV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9wb2ludGVyRG93biwgcGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGEgYHRyYW5zZm9ybWAgdG8gdGhlIHJvb3QgZWxlbWVudCwgdGFraW5nIGludG8gYWNjb3VudCBhbnkgZXhpc3RpbmcgdHJhbnNmb3JtcyBvbiBpdC5cbiAgICogQHBhcmFtIHggTmV3IHRyYW5zZm9ybSB2YWx1ZSBhbG9uZyB0aGUgWCBheGlzLlxuICAgKiBAcGFyYW0geSBOZXcgdHJhbnNmb3JtIHZhbHVlIGFsb25nIHRoZSBZIGF4aXMuXG4gICAqL1xuICBwcml2YXRlIF9hcHBseVJvb3RFbGVtZW50VHJhbnNmb3JtKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gZ2V0VHJhbnNmb3JtKHgsIHkpO1xuXG4gICAgLy8gQ2FjaGUgdGhlIHByZXZpb3VzIHRyYW5zZm9ybSBhbW91bnQgb25seSBhZnRlciB0aGUgZmlyc3QgZHJhZyBzZXF1ZW5jZSwgYmVjYXVzZVxuICAgIC8vIHdlIGRvbid0IHdhbnQgb3VyIG93biB0cmFuc2Zvcm1zIHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyLlxuICAgIGlmICh0aGlzLl9pbml0aWFsVHJhbnNmb3JtID09IG51bGwpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxUcmFuc2Zvcm0gPSB0aGlzLl9yb290RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XG4gICAgfVxuXG4gICAgLy8gUHJlc2VydmUgdGhlIHByZXZpb3VzIGB0cmFuc2Zvcm1gIHZhbHVlLCBpZiB0aGVyZSB3YXMgb25lLiBOb3RlIHRoYXQgd2UgYXBwbHkgb3VyIG93blxuICAgIC8vIHRyYW5zZm9ybSBiZWZvcmUgdGhlIHVzZXIncywgYmVjYXVzZSB0aGluZ3MgbGlrZSByb3RhdGlvbiBjYW4gYWZmZWN0IHdoaWNoIGRpcmVjdGlvblxuICAgIC8vIHRoZSBlbGVtZW50IHdpbGwgYmUgdHJhbnNsYXRlZCB0b3dhcmRzLlxuICAgIHRoaXMuX3Jvb3RFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuX2luaXRpYWxUcmFuc2Zvcm0gP1xuICAgICAgdHJhbnNmb3JtICsgJyAnICsgdGhpcy5faW5pdGlhbFRyYW5zZm9ybSAgOiB0cmFuc2Zvcm07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZGlzdGFuY2UgdGhhdCB0aGUgdXNlciBoYXMgZHJhZ2dlZCBkdXJpbmcgdGhlIGN1cnJlbnQgZHJhZyBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIGN1cnJlbnRQb3NpdGlvbiBDdXJyZW50IHBvc2l0aW9uIG9mIHRoZSB1c2VyJ3MgcG9pbnRlci5cbiAgICovXG4gIHByaXZhdGUgX2dldERyYWdEaXN0YW5jZShjdXJyZW50UG9zaXRpb246IFBvaW50KTogUG9pbnQge1xuICAgIGNvbnN0IHBpY2t1cFBvc2l0aW9uID0gdGhpcy5fcGlja3VwUG9zaXRpb25PblBhZ2U7XG5cbiAgICBpZiAocGlja3VwUG9zaXRpb24pIHtcbiAgICAgIHJldHVybiB7eDogY3VycmVudFBvc2l0aW9uLnggLSBwaWNrdXBQb3NpdGlvbi54LCB5OiBjdXJyZW50UG9zaXRpb24ueSAtIHBpY2t1cFBvc2l0aW9uLnl9O1xuICAgIH1cblxuICAgIHJldHVybiB7eDogMCwgeTogMH07XG4gIH1cblxuICAvKiogQ2xlYW5zIHVwIGFueSBjYWNoZWQgZWxlbWVudCBkaW1lbnNpb25zIHRoYXQgd2UgZG9uJ3QgbmVlZCBhZnRlciBkcmFnZ2luZyBoYXMgc3RvcHBlZC4gKi9cbiAgcHJpdmF0ZSBfY2xlYW51cENhY2hlZERpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5fYm91bmRhcnlSZWN0ID0gdGhpcy5fcHJldmlld1JlY3QgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcGFyZW50UG9zaXRpb25zLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgc3RpbGwgaW5zaWRlIGl0cyBib3VuZGFyeSBhZnRlciB0aGUgdmlld3BvcnQgaGFzIGJlZW4gcmVzaXplZC5cbiAgICogSWYgbm90LCB0aGUgcG9zaXRpb24gaXMgYWRqdXN0ZWQgc28gdGhhdCB0aGUgZWxlbWVudCBmaXRzIGFnYWluLlxuICAgKi9cbiAgcHJpdmF0ZSBfY29udGFpbkluc2lkZUJvdW5kYXJ5T25SZXNpemUoKSB7XG4gICAgbGV0IHt4LCB5fSA9IHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm07XG5cbiAgICBpZiAoKHggPT09IDAgJiYgeSA9PT0gMCkgfHwgdGhpcy5pc0RyYWdnaW5nKCkgfHwgIXRoaXMuX2JvdW5kYXJ5RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJvdW5kYXJ5UmVjdCA9IHRoaXMuX2JvdW5kYXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoZSBlbGVtZW50IGdvdCBoaWRkZW4gYXdheSBhZnRlciBkcmFnZ2luZyAoZS5nLiBieSBzd2l0Y2hpbmcgdG8gYVxuICAgIC8vIGRpZmZlcmVudCB0YWIpLiBEb24ndCBkbyBhbnl0aGluZyBpbiB0aGlzIGNhc2Ugc28gd2UgZG9uJ3QgY2xlYXIgdGhlIHVzZXIncyBwb3NpdGlvbi5cbiAgICBpZiAoKGJvdW5kYXJ5UmVjdC53aWR0aCA9PT0gMCAmJiBib3VuZGFyeVJlY3QuaGVpZ2h0ID09PSAwKSB8fFxuICAgICAgICAoZWxlbWVudFJlY3Qud2lkdGggPT09IDAgJiYgZWxlbWVudFJlY3QuaGVpZ2h0ID09PSAwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRPdmVyZmxvdyA9IGJvdW5kYXJ5UmVjdC5sZWZ0IC0gZWxlbWVudFJlY3QubGVmdDtcbiAgICBjb25zdCByaWdodE92ZXJmbG93ID0gZWxlbWVudFJlY3QucmlnaHQgLSBib3VuZGFyeVJlY3QucmlnaHQ7XG4gICAgY29uc3QgdG9wT3ZlcmZsb3cgPSBib3VuZGFyeVJlY3QudG9wIC0gZWxlbWVudFJlY3QudG9wO1xuICAgIGNvbnN0IGJvdHRvbU92ZXJmbG93ID0gZWxlbWVudFJlY3QuYm90dG9tIC0gYm91bmRhcnlSZWN0LmJvdHRvbTtcblxuICAgIC8vIElmIHRoZSBlbGVtZW50IGhhcyBiZWNvbWUgd2lkZXIgdGhhbiB0aGUgYm91bmRhcnksIHdlIGNhbid0XG4gICAgLy8gZG8gbXVjaCB0byBtYWtlIGl0IGZpdCBzbyB3ZSBqdXN0IGFuY2hvciBpdCB0byB0aGUgbGVmdC5cbiAgICBpZiAoYm91bmRhcnlSZWN0LndpZHRoID4gZWxlbWVudFJlY3Qud2lkdGgpIHtcbiAgICAgIGlmIChsZWZ0T3ZlcmZsb3cgPiAwKSB7XG4gICAgICAgIHggKz0gbGVmdE92ZXJmbG93O1xuICAgICAgfVxuXG4gICAgICBpZiAocmlnaHRPdmVyZmxvdyA+IDApIHtcbiAgICAgICAgeCAtPSByaWdodE92ZXJmbG93O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gMDtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYmVjb21lIHRhbGxlciB0aGFuIHRoZSBib3VuZGFyeSwgd2UgY2FuJ3RcbiAgICAvLyBkbyBtdWNoIHRvIG1ha2UgaXQgZml0IHNvIHdlIGp1c3QgYW5jaG9yIGl0IHRvIHRoZSB0b3AuXG4gICAgaWYgKGJvdW5kYXJ5UmVjdC5oZWlnaHQgPiBlbGVtZW50UmVjdC5oZWlnaHQpIHtcbiAgICAgIGlmICh0b3BPdmVyZmxvdyA+IDApIHtcbiAgICAgICAgeSArPSB0b3BPdmVyZmxvdztcbiAgICAgIH1cblxuICAgICAgaWYgKGJvdHRvbU92ZXJmbG93ID4gMCkge1xuICAgICAgICB5IC09IGJvdHRvbU92ZXJmbG93O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gdGhpcy5fcGFzc2l2ZVRyYW5zZm9ybS54IHx8IHkgIT09IHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm0ueSkge1xuICAgICAgdGhpcy5zZXRGcmVlRHJhZ1Bvc2l0aW9uKHt5LCB4fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEdldHMgdGhlIGRyYWcgc3RhcnQgZGVsYXksIGJhc2VkIG9uIHRoZSBldmVudCB0eXBlLiAqL1xuICBwcml2YXRlIF9nZXREcmFnU3RhcnREZWxheShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kcmFnU3RhcnREZWxheTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChpc1RvdWNoRXZlbnQoZXZlbnQpKSB7XG4gICAgICByZXR1cm4gdmFsdWUudG91Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlID8gdmFsdWUubW91c2UgOiAwO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBkcmFnZ2FibGUgZWxlbWVudCB3aGVuIHNjcm9sbGluZyBoYXMgb2NjdXJyZWQuICovXG4gIHByaXZhdGUgX3VwZGF0ZU9uU2Nyb2xsKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHNjcm9sbERpZmZlcmVuY2UgPSB0aGlzLl9wYXJlbnRQb3NpdGlvbnMuaGFuZGxlU2Nyb2xsKGV2ZW50KTtcblxuICAgIC8vIENsaWVudFJlY3QgZGltZW5zaW9ucyBhcmUgYmFzZWQgb24gdGhlIHBhZ2UncyBzY3JvbGwgcG9zaXRpb24gc29cbiAgICAvLyB3ZSBoYXZlIHRvIHVwZGF0ZSB0aGUgY2FjaGVkIGJvdW5kYXJ5IENsaWVudFJlY3QgaWYgdGhlIHVzZXIgaGFzIHNjcm9sbGVkLlxuICAgIGlmICh0aGlzLl9ib3VuZGFyeVJlY3QgJiYgc2Nyb2xsRGlmZmVyZW5jZSkge1xuICAgICAgYWRqdXN0Q2xpZW50UmVjdCh0aGlzLl9ib3VuZGFyeVJlY3QsIHNjcm9sbERpZmZlcmVuY2UudG9wLCBzY3JvbGxEaWZmZXJlbmNlLmxlZnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHZpZXdwb3J0LiAqL1xuICBwcml2YXRlIF9nZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGNhY2hlZFBvc2l0aW9uID0gdGhpcy5fcGFyZW50UG9zaXRpb25zLnBvc2l0aW9ucy5nZXQodGhpcy5fZG9jdW1lbnQpO1xuICAgIHJldHVybiBjYWNoZWRQb3NpdGlvbiA/IGNhY2hlZFBvc2l0aW9uLnNjcm9sbFBvc2l0aW9uIDpcbiAgICAgICAgdGhpcy5fdmlld3BvcnRSdWxlci5nZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIGEgM2QgYHRyYW5zZm9ybWAgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBhbiBlbGVtZW50LlxuICogQHBhcmFtIHggRGVzaXJlZCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCBhbG9uZyB0aGUgWCBheGlzLlxuICogQHBhcmFtIHkgRGVzaXJlZCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCBhbG9uZyB0aGUgWSBheGlzLlxuICovXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm0oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBzdHJpbmcge1xuICAvLyBSb3VuZCB0aGUgdHJhbnNmb3JtcyBzaW5jZSBzb21lIGJyb3dzZXJzIHdpbGxcbiAgLy8gYmx1ciB0aGUgZWxlbWVudHMgZm9yIHN1Yi1waXhlbCB0cmFuc2Zvcm1zLlxuICByZXR1cm4gYHRyYW5zbGF0ZTNkKCR7TWF0aC5yb3VuZCh4KX1weCwgJHtNYXRoLnJvdW5kKHkpfXB4LCAwKWA7XG59XG5cbi8qKiBDcmVhdGVzIGEgZGVlcCBjbG9uZSBvZiBhbiBlbGVtZW50LiAqL1xuZnVuY3Rpb24gZGVlcENsb25lTm9kZShub2RlOiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgY2xvbmUgPSBub2RlLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3QgZGVzY2VuZGFudHNXaXRoSWQgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gIGNvbnN0IGRlc2NlbmRhbnRDYW52YXNlcyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnY2FudmFzJyk7XG5cbiAgLy8gUmVtb3ZlIHRoZSBgaWRgIHRvIGF2b2lkIGhhdmluZyBtdWx0aXBsZSBlbGVtZW50cyB3aXRoIHRoZSBzYW1lIGlkIG9uIHRoZSBwYWdlLlxuICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXNjZW5kYW50c1dpdGhJZC5sZW5ndGg7IGkrKykge1xuICAgIGRlc2NlbmRhbnRzV2l0aElkW2ldLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGBjbG9uZU5vZGVgIHdvbid0IHRyYW5zZmVyIHRoZSBjb250ZW50IG9mIGBjYW52YXNgIGVsZW1lbnRzIHNvIHdlIGhhdmUgdG8gZG8gaXQgb3Vyc2VsdmVzLlxuICAvLyBXZSBtYXRjaCB1cCB0aGUgY2xvbmVkIGNhbnZhcyB0byB0aGVpciBzb3VyY2VzIHVzaW5nIHRoZWlyIGluZGV4IGluIHRoZSBET00uXG4gIGlmIChkZXNjZW5kYW50Q2FudmFzZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgY2xvbmVDYW52YXNlcyA9IGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbnZhcycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXNjZW5kYW50Q2FudmFzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdDbG9uZUNvbnRleHQgPSBjbG9uZUNhbnZhc2VzW2ldLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgIGlmIChjb3JyZXNwb25kaW5nQ2xvbmVDb250ZXh0KSB7XG4gICAgICAgIGNvcnJlc3BvbmRpbmdDbG9uZUNvbnRleHQuZHJhd0ltYWdlKGRlc2NlbmRhbnRDYW52YXNlc1tpXSwgMCwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNsb25lO1xufVxuXG4vKiogQ2xhbXBzIGEgdmFsdWUgYmV0d2VlbiBhIG1pbmltdW0gYW5kIGEgbWF4aW11bS4gKi9cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG59XG5cbi8qKlxuICogSGVscGVyIHRvIHJlbW92ZSBhIG5vZGUgZnJvbSB0aGUgRE9NIGFuZCB0byBkbyBhbGwgdGhlIG5lY2Vzc2FyeSBudWxsIGNoZWNrcy5cbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlOiBOb2RlIHwgbnVsbCkge1xuICBpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cbn1cblxuLyoqIERldGVybWluZXMgd2hldGhlciBhbiBldmVudCBpcyBhIHRvdWNoIGV2ZW50LiAqL1xuZnVuY3Rpb24gaXNUb3VjaEV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IGV2ZW50IGlzIFRvdWNoRXZlbnQge1xuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgZXZlcnkgcGl4ZWwgdGhhdCB0aGUgdXNlciBoYXMgZHJhZ2dlZCBzbyB3ZSBuZWVkIGl0IHRvIGJlXG4gIC8vIGFzIGZhc3QgYXMgcG9zc2libGUuIFNpbmNlIHdlIG9ubHkgYmluZCBtb3VzZSBldmVudHMgYW5kIHRvdWNoIGV2ZW50cywgd2UgY2FuIGFzc3VtZVxuICAvLyB0aGF0IGlmIHRoZSBldmVudCdzIG5hbWUgc3RhcnRzIHdpdGggYHRgLCBpdCdzIGEgdG91Y2ggZXZlbnQuXG4gIHJldHVybiBldmVudC50eXBlWzBdID09PSAndCc7XG59XG5cbi8qKiBHZXRzIHRoZSBlbGVtZW50IGludG8gd2hpY2ggdGhlIGRyYWcgcHJldmlldyBzaG91bGQgYmUgaW5zZXJ0ZWQuICovXG5mdW5jdGlvbiBnZXRQcmV2aWV3SW5zZXJ0aW9uUG9pbnQoZG9jdW1lbnRSZWY6IGFueSk6IEhUTUxFbGVtZW50IHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoZSBib2R5IGlmIHRoZSB1c2VyIGlzIGluIGZ1bGxzY3JlZW4gbW9kZSxcbiAgLy8gYmVjYXVzZSB0aGUgcHJldmlldyB3aWxsIHJlbmRlciB1bmRlciB0aGUgZnVsbHNjcmVlbiBlbGVtZW50LlxuICAvLyBUT0RPKGNyaXNiZXRvKTogZGVkdXBlIHRoaXMgd2l0aCB0aGUgYEZ1bGxzY3JlZW5PdmVybGF5Q29udGFpbmVyYCBldmVudHVhbGx5LlxuICByZXR1cm4gZG9jdW1lbnRSZWYuZnVsbHNjcmVlbkVsZW1lbnQgfHxcbiAgICAgICAgIGRvY3VtZW50UmVmLndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IHx8XG4gICAgICAgICBkb2N1bWVudFJlZi5tb3pGdWxsU2NyZWVuRWxlbWVudCB8fFxuICAgICAgICAgZG9jdW1lbnRSZWYubXNGdWxsc2NyZWVuRWxlbWVudCB8fFxuICAgICAgICAgZG9jdW1lbnRSZWYuYm9keTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSByb290IEhUTUwgZWxlbWVudCBvZiBhbiBlbWJlZGRlZCB2aWV3LlxuICogSWYgdGhlIHJvb3QgaXMgbm90IGFuIEhUTUwgZWxlbWVudCBpdCBnZXRzIHdyYXBwZWQgaW4gb25lLlxuICovXG5mdW5jdGlvbiBnZXRSb290Tm9kZSh2aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PiwgX2RvY3VtZW50OiBEb2N1bWVudCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3Qgcm9vdE5vZGVzOiBOb2RlW10gPSB2aWV3UmVmLnJvb3ROb2RlcztcblxuICBpZiAocm9vdE5vZGVzLmxlbmd0aCA9PT0gMSAmJiByb290Tm9kZXNbMF0ubm9kZVR5cGUgPT09IF9kb2N1bWVudC5FTEVNRU5UX05PREUpIHtcbiAgICByZXR1cm4gcm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgY29uc3Qgd3JhcHBlciA9IF9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm9vdE5vZGVzLmZvckVhY2gobm9kZSA9PiB3cmFwcGVyLmFwcGVuZENoaWxkKG5vZGUpKTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbi8qKlxuICogTWF0Y2hlcyB0aGUgdGFyZ2V0IGVsZW1lbnQncyBzaXplIHRvIHRoZSBzb3VyY2UncyBzaXplLlxuICogQHBhcmFtIHRhcmdldCBFbGVtZW50IHRoYXQgbmVlZHMgdG8gYmUgcmVzaXplZC5cbiAqIEBwYXJhbSBzb3VyY2VSZWN0IERpbWVuc2lvbnMgb2YgdGhlIHNvdXJjZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBtYXRjaEVsZW1lbnRTaXplKHRhcmdldDogSFRNTEVsZW1lbnQsIHNvdXJjZVJlY3Q6IENsaWVudFJlY3QpOiB2b2lkIHtcbiAgdGFyZ2V0LnN0eWxlLndpZHRoID0gYCR7c291cmNlUmVjdC53aWR0aH1weGA7XG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHtzb3VyY2VSZWN0LmhlaWdodH1weGA7XG4gIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBnZXRUcmFuc2Zvcm0oc291cmNlUmVjdC5sZWZ0LCBzb3VyY2VSZWN0LnRvcCk7XG59XG4iXX0=