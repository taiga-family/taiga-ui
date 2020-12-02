/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread } from "tslib";
import { coerceElement } from '@angular/cdk/coercion';
import { _getShadowRoot } from '@angular/cdk/platform';
import { Subject, Subscription, interval, animationFrameScheduler } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { moveItemInArray } from './drag-utils';
import { isPointerNearClientRect, adjustClientRect, getMutableClientRect, isInsideClientRect, } from './client-rect';
import { ParentPositionTracker } from './parent-position-tracker';
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
export { DropListRef };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1saXN0LXJlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvZHJhZy1kcm9wL2Ryb3AtbGlzdC1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUlILE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzlFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRzdDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixrQkFBa0IsR0FDbkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFaEU7OztHQUdHO0FBQ0gsSUFBTSx3QkFBd0IsR0FBRyxJQUFJLENBQUM7QUFFdEM7OztHQUdHO0FBQ0gsSUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUM7QUFFeEM7OztHQUdHO0FBQ0gsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUE0QjNCOztHQUVHO0FBQ0g7SUFnSUUscUJBQ0UsT0FBOEMsRUFDdEMsaUJBQXlELEVBQ2pFLFNBQWMsRUFDTixPQUFlLEVBQ2YsY0FBNkI7UUFMdkMsaUJBV0M7UUFUUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdDO1FBRXpELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWpJdkMsNEVBQTRFO1FBQzVFLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIs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LENBQUM7SUFDMUUsSUFBTSxrQkFBa0IsR0FBRyw0QkFBNEIsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUUsSUFBSSx1QkFBdUIsZUFBbUMsQ0FBQztJQUMvRCxJQUFJLHlCQUF5QixlQUFxQyxDQUFDO0lBRW5FLDhGQUE4RjtJQUM5Riw4RkFBOEY7SUFDOUYsNkZBQTZGO0lBQzdGLDhGQUE4RjtJQUM5RixJQUFJLGdCQUFnQixFQUFFO1FBQ3BCLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFcEMsSUFBSSxnQkFBZ0IsZUFBbUMsRUFBRTtZQUN2RCxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLHVCQUF1QixhQUFpQyxDQUFDO2FBQzFEO1NBQ0Y7YUFBTSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEdBQUcsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDbEUsdUJBQXVCLGVBQW1DLENBQUM7U0FDNUQ7S0FDRjtJQUVELElBQUksa0JBQWtCLEVBQUU7UUFDdEIsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUV0QyxJQUFJLGtCQUFrQixpQkFBdUMsRUFBRTtZQUM3RCxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLHlCQUF5QixlQUFxQyxDQUFDO2FBQ2hFO1NBQ0Y7YUFBTSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDakUseUJBQXlCLGdCQUFzQyxDQUFDO1NBQ2pFO0tBQ0Y7SUFFRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztBQUM5RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RWxlbWVudFJlZiwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge2NvZXJjZUVsZW1lbnR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1ZpZXdwb3J0UnVsZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtfZ2V0U2hhZG93Um9vdH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7U3ViamVjdCwgU3Vic2NyaXB0aW9uLCBpbnRlcnZhbCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7bW92ZUl0ZW1JbkFycmF5fSBmcm9tICcuL2RyYWctdXRpbHMnO1xuaW1wb3J0IHtEcmFnRHJvcFJlZ2lzdHJ5fSBmcm9tICcuL2RyYWctZHJvcC1yZWdpc3RyeSc7XG5pbXBvcnQge0RyYWdSZWZJbnRlcm5hbCBhcyBEcmFnUmVmLCBQb2ludH0gZnJvbSAnLi9kcmFnLXJlZic7XG5pbXBvcnQge1xuICBpc1BvaW50ZXJOZWFyQ2xpZW50UmVjdCxcbiAgYWRqdXN0Q2xpZW50UmVjdCxcbiAgZ2V0TXV0YWJsZUNsaWVudFJlY3QsXG4gIGlzSW5zaWRlQ2xpZW50UmVjdCxcbn0gZnJvbSAnLi9jbGllbnQtcmVjdCc7XG5pbXBvcnQge1BhcmVudFBvc2l0aW9uVHJhY2tlcn0gZnJvbSAnLi9wYXJlbnQtcG9zaXRpb24tdHJhY2tlcic7XG5cbi8qKlxuICogUHJveGltaXR5LCBhcyBhIHJhdGlvIHRvIHdpZHRoL2hlaWdodCwgYXQgd2hpY2ggYVxuICogZHJhZ2dlZCBpdGVtIHdpbGwgYWZmZWN0IHRoZSBkcm9wIGNvbnRhaW5lci5cbiAqL1xuY29uc3QgRFJPUF9QUk9YSU1JVFlfVEhSRVNIT0xEID0gMC4wNTtcblxuLyoqXG4gKiBQcm94aW1pdHksIGFzIGEgcmF0aW8gdG8gd2lkdGgvaGVpZ2h0IGF0IHdoaWNoIHRvIHN0YXJ0IGF1dG8tc2Nyb2xsaW5nIHRoZSBkcm9wIGxpc3Qgb3IgdGhlXG4gKiB2aWV3cG9ydC4gVGhlIHZhbHVlIGNvbWVzIGZyb20gdHJ5aW5nIGl0IG91dCBtYW51YWxseSB1bnRpbCBpdCBmZWVscyByaWdodC5cbiAqL1xuY29uc3QgU0NST0xMX1BST1hJTUlUWV9USFJFU0hPTEQgPSAwLjA1O1xuXG4vKipcbiAqIE51bWJlciBvZiBwaXhlbHMgdG8gc2Nyb2xsIGZvciBlYWNoIGZyYW1lIHdoZW4gYXV0by1zY3JvbGxpbmcgYW4gZWxlbWVudC5cbiAqIFRoZSB2YWx1ZSBjb21lcyBmcm9tIHRyeWluZyBpdCBvdXQgbWFudWFsbHkgdW50aWwgaXQgZmVlbHMgcmlnaHQuXG4gKi9cbmNvbnN0IEFVVE9fU0NST0xMX1NURVAgPSAyO1xuXG4vKipcbiAqIEVudHJ5IGluIHRoZSBwb3NpdGlvbiBjYWNoZSBmb3IgZHJhZ2dhYmxlIGl0ZW1zLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5pbnRlcmZhY2UgQ2FjaGVkSXRlbVBvc2l0aW9uIHtcbiAgLyoqIEluc3RhbmNlIG9mIHRoZSBkcmFnIGl0ZW0uICovXG4gIGRyYWc6IERyYWdSZWY7XG4gIC8qKiBEaW1lbnNpb25zIG9mIHRoZSBpdGVtLiAqL1xuICBjbGllbnRSZWN0OiBDbGllbnRSZWN0O1xuICAvKiogQW1vdW50IGJ5IHdoaWNoIHRoZSBpdGVtIGhhcyBiZWVuIG1vdmVkIHNpbmNlIGRyYWdnaW5nIHN0YXJ0ZWQuICovXG4gIG9mZnNldDogbnVtYmVyO1xufVxuXG4vKiogVmVydGljYWwgZGlyZWN0aW9uIGluIHdoaWNoIHdlIGNhbiBhdXRvLXNjcm9sbC4gKi9cbmNvbnN0IGVudW0gQXV0b1Njcm9sbFZlcnRpY2FsRGlyZWN0aW9uIHtOT05FLCBVUCwgRE9XTn1cblxuLyoqIEhvcml6b250YWwgZGlyZWN0aW9uIGluIHdoaWNoIHdlIGNhbiBhdXRvLXNjcm9sbC4gKi9cbmNvbnN0IGVudW0gQXV0b1Njcm9sbEhvcml6b250YWxEaXJlY3Rpb24ge05PTkUsIExFRlQsIFJJR0hUfVxuXG4vKipcbiAqIEludGVybmFsIGNvbXBpbGUtdGltZS1vbmx5IHJlcHJlc2VudGF0aW9uIG9mIGEgYERyb3BMaXN0UmVmYC5cbiAqIFVzZWQgdG8gYXZvaWQgY2lyY3VsYXIgaW1wb3J0IGlzc3VlcyBiZXR3ZWVuIHRoZSBgRHJvcExpc3RSZWZgIGFuZCB0aGUgYERyYWdSZWZgLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERyb3BMaXN0UmVmSW50ZXJuYWwgZXh0ZW5kcyBEcm9wTGlzdFJlZiB7fVxuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhIGRyb3AgbGlzdC4gVXNlZCB0byBtYW5pcHVsYXRlIG9yIGRpc3Bvc2Ugb2YgdGhlIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNsYXNzIERyb3BMaXN0UmVmPFQgPSBhbnk+IHtcbiAgLyoqIEVsZW1lbnQgdGhhdCB0aGUgZHJvcCBsaXN0IGlzIGF0dGFjaGVkIHRvLiAqL1xuICBlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIC8qKiBXaGV0aGVyIHN0YXJ0aW5nIGEgZHJhZ2dpbmcgc2VxdWVuY2UgZnJvbSB0aGlzIGNvbnRhaW5lciBpcyBkaXNhYmxlZC4gKi9cbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciBzb3J0aW5nIGl0ZW1zIHdpdGhpbiB0aGUgbGlzdCBpcyBkaXNhYmxlZC4gKi9cbiAgc29ydGluZ0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIExvY2tzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGluc2lkZSB0aGUgY29udGFpbmVyIGFsb25nIHRoZSBzcGVjaWZpZWQgYXhpcy4gKi9cbiAgbG9ja0F4aXM6ICd4JyB8ICd5JztcblxuICAvKipcbiAgICogV2hldGhlciBhdXRvLXNjcm9sbGluZyB0aGUgdmlldyB3aGVuIHRoZSB1c2VyXG4gICAqIG1vdmVzIHRoZWlyIHBvaW50ZXIgY2xvc2UgdG8gdGhlIGVkZ2VzIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgYXV0b1Njcm9sbERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciBhbiBpdGVtXG4gICAqIGlzIGFsbG93ZWQgdG8gYmUgbW92ZWQgaW50byBhIGRyb3AgY29udGFpbmVyLlxuICAgKi9cbiAgZW50ZXJQcmVkaWNhdGU6IChkcmFnOiBEcmFnUmVmLCBkcm9wOiBEcm9wTGlzdFJlZikgPT4gYm9vbGVhbiA9ICgpID0+IHRydWU7XG5cbiAgLyoqIEVtaXRzIHJpZ2h0IGJlZm9yZSBkcmFnZ2luZyBoYXMgc3RhcnRlZC4gKi9cbiAgYmVmb3JlU3RhcnRlZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gdGhlIHVzZXIgaGFzIG1vdmVkIGEgbmV3IGRyYWcgaXRlbSBpbnRvIHRoaXMgY29udGFpbmVyLlxuICAgKi9cbiAgZW50ZXJlZCA9IG5ldyBTdWJqZWN0PHtpdGVtOiBEcmFnUmVmLCBjb250YWluZXI6IERyb3BMaXN0UmVmLCBjdXJyZW50SW5kZXg6IG51bWJlcn0+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gdGhlIHVzZXIgcmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGNvbnRhaW5lclxuICAgKiBieSBkcmFnZ2luZyBpdCBpbnRvIGFub3RoZXIgY29udGFpbmVyLlxuICAgKi9cbiAgZXhpdGVkID0gbmV3IFN1YmplY3Q8e2l0ZW06IERyYWdSZWYsIGNvbnRhaW5lcjogRHJvcExpc3RSZWZ9PigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIGRyb3BzIGFuIGl0ZW0gaW5zaWRlIHRoZSBjb250YWluZXIuICovXG4gIGRyb3BwZWQgPSBuZXcgU3ViamVjdDx7XG4gICAgaXRlbTogRHJhZ1JlZixcbiAgICBjdXJyZW50SW5kZXg6IG51bWJlcixcbiAgICBwcmV2aW91c0luZGV4OiBudW1iZXIsXG4gICAgY29udGFpbmVyOiBEcm9wTGlzdFJlZixcbiAgICBwcmV2aW91c0NvbnRhaW5lcjogRHJvcExpc3RSZWYsXG4gICAgaXNQb2ludGVyT3ZlckNvbnRhaW5lcjogYm9vbGVhbixcbiAgICBkaXN0YW5jZTogUG9pbnQ7XG4gIH0+KCk7XG5cbiAgLyoqIEVtaXRzIGFzIHRoZSB1c2VyIGlzIHN3YXBwaW5nIGl0ZW1zIHdoaWxlIGFjdGl2ZWx5IGRyYWdnaW5nLiAqL1xuICBzb3J0ZWQgPSBuZXcgU3ViamVjdDx7XG4gICAgcHJldmlvdXNJbmRleDogbnVtYmVyLFxuICAgIGN1cnJlbnRJbmRleDogbnVtYmVyLFxuICAgIGNvbnRhaW5lcjogRHJvcExpc3RSZWYsXG4gICAgaXRlbTogRHJhZ1JlZlxuICB9PigpO1xuXG4gIC8qKiBBcmJpdHJhcnkgZGF0YSB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgZHJvcCBsaXN0LiAqL1xuICBkYXRhOiBUO1xuXG4gIC8qKiBXaGV0aGVyIGFuIGl0ZW0gaW4gdGhlIGxpc3QgaXMgYmVpbmcgZHJhZ2dlZC4gKi9cbiAgcHJpdmF0ZSBfaXNEcmFnZ2luZyA9IGZhbHNlO1xuXG4gIC8qKiBDYWNoZSBvZiB0aGUgZGltZW5zaW9ucyBvZiBhbGwgdGhlIGl0ZW1zIGluc2lkZSB0aGUgY29udGFpbmVyLiAqL1xuICBwcml2YXRlIF9pdGVtUG9zaXRpb25zOiBDYWNoZWRJdGVtUG9zaXRpb25bXSA9IFtdO1xuXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgcG9zaXRpb25zIG9mIGFueSBwYXJlbnQgc2Nyb2xsYWJsZSBlbGVtZW50cy4gKi9cbiAgcHJpdmF0ZSBfcGFyZW50UG9zaXRpb25zOiBQYXJlbnRQb3NpdGlvblRyYWNrZXI7XG5cbiAgLyoqIENhY2hlZCBgQ2xpZW50UmVjdGAgb2YgdGhlIGRyb3AgbGlzdC4gKi9cbiAgcHJpdmF0ZSBfY2xpZW50UmVjdDogQ2xpZW50UmVjdDtcblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGl0ZW1zIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUgaW5zaWRlIHRoZSBjb250YWluZXIuIEluY2x1ZGVzIHRoZSBpdGVtc1xuICAgKiBmcm9tIGBfZHJhZ2dhYmxlc2AsIGFzIHdlbGwgYXMgYW55IGl0ZW1zIHRoYXQgaGF2ZSBiZWVuIGRyYWdnZWQgaW4sIGJ1dCBoYXZlbid0XG4gICAqIGJlZW4gZHJvcHBlZCB5ZXQuXG4gICAqL1xuICBwcml2YXRlIF9hY3RpdmVEcmFnZ2FibGVzOiBEcmFnUmVmW107XG5cbiAgLyoqXG4gICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBpdGVtIHRoYXQgd2FzIGxhc3Qgc3dhcHBlZCB3aXRoIHRoZSBkcmFnZ2VkIGl0ZW0sIGFzXG4gICAqIHdlbGwgYXMgd2hhdCBkaXJlY3Rpb24gdGhlIHBvaW50ZXIgd2FzIG1vdmluZyBpbiB3aGVuIHRoZSBzd2FwIG9jY3VyZWQuXG4gICAqL1xuICBwcml2YXRlIF9wcmV2aW91c1N3YXAgPSB7ZHJhZzogbnVsbCBhcyBEcmFnUmVmIHwgbnVsbCwgZGVsdGE6IDB9O1xuXG4gIC8qKiBEcmFnZ2FibGUgaXRlbXMgaW4gdGhlIGNvbnRhaW5lci4gKi9cbiAgcHJpdmF0ZSBfZHJhZ2dhYmxlczogUmVhZG9ubHlBcnJheTxEcmFnUmVmPjtcblxuICAvKiogRHJvcCBsaXN0cyB0aGF0IGFyZSBjb25uZWN0ZWQgdG8gdGhlIGN1cnJlbnQgb25lLiAqL1xuICBwcml2YXRlIF9zaWJsaW5nczogUmVhZG9ubHlBcnJheTxEcm9wTGlzdFJlZj4gPSBbXTtcblxuICAvKiogRGlyZWN0aW9uIGluIHdoaWNoIHRoZSBsaXN0IGlzIG9yaWVudGVkLiAqL1xuICBwcml2YXRlIF9vcmllbnRhdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XG5cbiAgLyoqIENvbm5lY3RlZCBzaWJsaW5ncyB0aGF0IGN1cnJlbnRseSBoYXZlIGEgZHJhZ2dlZCBpdGVtLiAqL1xuICBwcml2YXRlIF9hY3RpdmVTaWJsaW5ncyA9IG5ldyBTZXQ8RHJvcExpc3RSZWY+KCk7XG5cbiAgLyoqIExheW91dCBkaXJlY3Rpb24gb2YgdGhlIGRyb3AgbGlzdC4gKi9cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRoZSB3aW5kb3cgYmVpbmcgc2Nyb2xsZWQuICovXG4gIHByaXZhdGUgX3ZpZXdwb3J0U2Nyb2xsU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBWZXJ0aWNhbCBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIGxpc3QgaXMgY3VycmVudGx5IHNjcm9sbGluZy4gKi9cbiAgcHJpdmF0ZSBfdmVydGljYWxTY3JvbGxEaXJlY3Rpb24gPSBBdXRvU2Nyb2xsVmVydGljYWxEaXJlY3Rpb24uTk9ORTtcblxuICAvKiogSG9yaXpvbnRhbCBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIGxpc3QgaXMgY3VycmVudGx5IHNjcm9sbGluZy4gKi9cbiAgcHJpdmF0ZSBfaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiA9IEF1dG9TY3JvbGxIb3Jpem9udGFsRGlyZWN0aW9uLk5PTkU7XG5cbiAgLyoqIE5vZGUgdGhhdCBpcyBiZWluZyBhdXRvLXNjcm9sbGVkLiAqL1xuICBwcml2YXRlIF9zY3JvbGxOb2RlOiBIVE1MRWxlbWVudCB8IFdpbmRvdztcblxuICAvKiogVXNlZCB0byBzaWduYWwgdG8gdGhlIGN1cnJlbnQgYXV0by1zY3JvbGwgc2VxdWVuY2Ugd2hlbiB0byBzdG9wLiAqL1xuICBwcml2YXRlIF9zdG9wU2Nyb2xsVGltZXJzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogU2hhZG93IHJvb3Qgb2YgdGhlIGN1cnJlbnQgZWxlbWVudC4gTmVjZXNzYXJ5IGZvciBgZWxlbWVudEZyb21Qb2ludGAgdG8gcmVzb2x2ZSBjb3JyZWN0bHkuICovXG4gIHByaXZhdGUgX2NhY2hlZFNoYWRvd1Jvb3Q6IERvY3VtZW50T3JTaGFkb3dSb290IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQuICovXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKiogRWxlbWVudHMgdGhhdCBjYW4gYmUgc2Nyb2xsZWQgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcuICovXG4gIHByaXZhdGUgX3Njcm9sbGFibGVFbGVtZW50czogSFRNTEVsZW1lbnRbXTtcblxuICAvKiogSW5pdGlhbCB2YWx1ZSBmb3IgdGhlIGVsZW1lbnQncyBgc2Nyb2xsLXNuYXAtdHlwZWAgc3R5bGUuICovXG4gIHByaXZhdGUgX2luaXRpYWxTY3JvbGxTbmFwOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gfCBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF9kcmFnRHJvcFJlZ2lzdHJ5OiBEcmFnRHJvcFJlZ2lzdHJ5PERyYWdSZWYsIERyb3BMaXN0UmVmPixcbiAgICBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gY29lcmNlRWxlbWVudChlbGVtZW50KTtcbiAgICB0aGlzLl9kb2N1bWVudCA9IF9kb2N1bWVudDtcbiAgICB0aGlzLndpdGhTY3JvbGxhYmxlUGFyZW50cyhbdGhpcy5lbGVtZW50XSk7XG4gICAgX2RyYWdEcm9wUmVnaXN0cnkucmVnaXN0ZXJEcm9wQ29udGFpbmVyKHRoaXMpO1xuICAgIHRoaXMuX3BhcmVudFBvc2l0aW9ucyA9IG5ldyBQYXJlbnRQb3NpdGlvblRyYWNrZXIoX2RvY3VtZW50LCBfdmlld3BvcnRSdWxlcik7XG4gIH1cblxuICAvKiogUmVtb3ZlcyB0aGUgZHJvcCBsaXN0IGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgRE9NIGVsZW1lbnQuICovXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fc3RvcFNjcm9sbGluZygpO1xuICAgIHRoaXMuX3N0b3BTY3JvbGxUaW1lcnMuY29tcGxldGUoKTtcbiAgICB0aGlzLl92aWV3cG9ydFNjcm9sbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuYmVmb3JlU3RhcnRlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZW50ZXJlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZXhpdGVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kcm9wcGVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5zb3J0ZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9hY3RpdmVTaWJsaW5ncy5jbGVhcigpO1xuICAgIHRoaXMuX3Njcm9sbE5vZGUgPSBudWxsITtcbiAgICB0aGlzLl9wYXJlbnRQb3NpdGlvbnMuY2xlYXIoKTtcbiAgICB0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LnJlbW92ZURyb3BDb250YWluZXIodGhpcyk7XG4gIH1cblxuICAvKiogV2hldGhlciBhbiBpdGVtIGZyb20gdGhpcyBsaXN0IGlzIGN1cnJlbnRseSBiZWluZyBkcmFnZ2VkLiAqL1xuICBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0RyYWdnaW5nO1xuICB9XG5cbiAgLyoqIFN0YXJ0cyBkcmFnZ2luZyBhbiBpdGVtLiAqL1xuICBzdGFydCgpOiB2b2lkIHtcbiAgICBjb25zdCBzdHlsZXMgPSBjb2VyY2VFbGVtZW50KHRoaXMuZWxlbWVudCkuc3R5bGU7XG4gICAgdGhpcy5iZWZvcmVTdGFydGVkLm5leHQoKTtcbiAgICB0aGlzLl9pc0RyYWdnaW5nID0gdHJ1ZTtcblxuICAgIC8vIFdlIG5lZWQgdG8gZGlzYWJsZSBzY3JvbGwgc25hcHBpbmcgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcsIGJlY2F1c2UgaXQgYnJlYWtzIGF1dG9tYXRpY1xuICAgIC8vIHNjcm9sbGluZy4gVGhlIGJyb3dzZXIgc2VlbXMgdG8gcm91bmQgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBzbmFwcGluZyBwb2ludHMgd2hpY2ggbWVhbnNcbiAgICAvLyB0aGF0IHdlIGNhbid0IGluY3JlbWVudC9kZWNyZW1lbnQgdGhlIHNjcm9sbCBwb3NpdGlvbi5cbiAgICB0aGlzLl9pbml0aWFsU2Nyb2xsU25hcCA9IHN0eWxlcy5tc1Njcm9sbFNuYXBUeXBlIHx8IChzdHlsZXMgYXMgYW55KS5zY3JvbGxTbmFwVHlwZSB8fCAnJztcbiAgICAoc3R5bGVzIGFzIGFueSkuc2Nyb2xsU25hcFR5cGUgPSBzdHlsZXMubXNTY3JvbGxTbmFwVHlwZSA9ICdub25lJztcbiAgICB0aGlzLl9jYWNoZUl0ZW1zKCk7XG4gICAgdGhpcy5fc2libGluZ3MuZm9yRWFjaChzaWJsaW5nID0+IHNpYmxpbmcuX3N0YXJ0UmVjZWl2aW5nKHRoaXMpKTtcbiAgICB0aGlzLl92aWV3cG9ydFNjcm9sbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2xpc3RlblRvU2Nyb2xsRXZlbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlciBtb3ZlZCBhbiBpdGVtIGludG8gdGhlIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIGl0ZW0gSXRlbSB0aGF0IHdhcyBtb3ZlZCBpbnRvIHRoZSBjb250YWluZXIuXG4gICAqIEBwYXJhbSBwb2ludGVyWCBQb3NpdGlvbiBvZiB0aGUgaXRlbSBhbG9uZyB0aGUgWCBheGlzLlxuICAgKiBAcGFyYW0gcG9pbnRlclkgUG9zaXRpb24gb2YgdGhlIGl0ZW0gYWxvbmcgdGhlIFkgYXhpcy5cbiAgICogQHBhcmFtIGluZGV4IEluZGV4IGF0IHdoaWNoIHRoZSBpdGVtIGVudGVyZWQuIElmIG9taXR0ZWQsIHRoZSBjb250YWluZXIgd2lsbCB0cnkgdG8gZmlndXJlIGl0XG4gICAqICAgb3V0IGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBlbnRlcihpdGVtOiBEcmFnUmVmLCBwb2ludGVyWDogbnVtYmVyLCBwb2ludGVyWTogbnVtYmVyLCBpbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RhcnQoKTtcblxuICAgIC8vIElmIHNvcnRpbmcgaXMgZGlzYWJsZWQsIHdlIHdhbnQgdGhlIGl0ZW0gdG8gcmV0dXJuIHRvIGl0cyBzdGFydGluZ1xuICAgIC8vIHBvc2l0aW9uIGlmIHRoZSB1c2VyIGlzIHJldHVybmluZyBpdCB0byBpdHMgaW5pdGlhbCBjb250YWluZXIuXG4gICAgbGV0IG5ld0luZGV4OiBudW1iZXI7XG5cbiAgICBpZiAoaW5kZXggPT0gbnVsbCkge1xuICAgICAgbmV3SW5kZXggPSB0aGlzLnNvcnRpbmdEaXNhYmxlZCA/IHRoaXMuX2RyYWdnYWJsZXMuaW5kZXhPZihpdGVtKSA6IC0xO1xuXG4gICAgICBpZiAobmV3SW5kZXggPT09IC0xKSB7XG4gICAgICAgIC8vIFdlIHVzZSB0aGUgY29vcmRpbmF0ZXMgb2Ygd2hlcmUgdGhlIGl0ZW0gZW50ZXJlZCB0aGUgZHJvcFxuICAgICAgICAvLyB6b25lIHRvIGZpZ3VyZSBvdXQgYXQgd2hpY2ggaW5kZXggaXQgc2hvdWxkIGJlIGluc2VydGVkLlxuICAgICAgICBuZXdJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleEZyb21Qb2ludGVyUG9zaXRpb24oaXRlbSwgcG9pbnRlclgsIHBvaW50ZXJZKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbmV3SW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVEcmFnZ2FibGVzID0gdGhpcy5fYWN0aXZlRHJhZ2dhYmxlcztcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBhY3RpdmVEcmFnZ2FibGVzLmluZGV4T2YoaXRlbSk7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBpdGVtLmdldFBsYWNlaG9sZGVyRWxlbWVudCgpO1xuICAgIGxldCBuZXdQb3NpdGlvblJlZmVyZW5jZTogRHJhZ1JlZiB8IHVuZGVmaW5lZCA9IGFjdGl2ZURyYWdnYWJsZXNbbmV3SW5kZXhdO1xuXG4gICAgLy8gSWYgdGhlIGl0ZW0gYXQgdGhlIG5ldyBwb3NpdGlvbiBpcyB0aGUgc2FtZSBhcyB0aGUgaXRlbSB0aGF0IGlzIGJlaW5nIGRyYWdnZWQsXG4gICAgLy8gaXQgbWVhbnMgdGhhdCB3ZSdyZSB0cnlpbmcgdG8gcmVzdG9yZSB0aGUgaXRlbSB0byBpdHMgaW5pdGlhbCBwb3NpdGlvbi4gSW4gdGhpc1xuICAgIC8vIGNhc2Ugd2Ugc2hvdWxkIHVzZSB0aGUgbmV4dCBpdGVtIGZyb20gdGhlIGxpc3QgYXMgdGhlIHJlZmVyZW5jZS5cbiAgICBpZiAobmV3UG9zaXRpb25SZWZlcmVuY2UgPT09IGl0ZW0pIHtcbiAgICAgIG5ld1Bvc2l0aW9uUmVmZXJlbmNlID0gYWN0aXZlRHJhZ2dhYmxlc1tuZXdJbmRleCArIDFdO1xuICAgIH1cblxuICAgIC8vIFNpbmNlIHRoZSBpdGVtIG1heSBiZSBpbiB0aGUgYGFjdGl2ZURyYWdnYWJsZXNgIGFscmVhZHkgKGUuZy4gaWYgdGhlIHVzZXIgZHJhZ2dlZCBpdFxuICAgIC8vIGludG8gYW5vdGhlciBjb250YWluZXIgYW5kIGJhY2sgYWdhaW4pLCB3ZSBoYXZlIHRvIGVuc3VyZSB0aGF0IGl0IGlzbid0IGR1cGxpY2F0ZWQuXG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IC0xKSB7XG4gICAgICBhY3RpdmVEcmFnZ2FibGVzLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIERvbid0IHVzZSBpdGVtcyB0aGF0IGFyZSBiZWluZyBkcmFnZ2VkIGFzIGEgcmVmZXJlbmNlLCBiZWNhdXNlXG4gICAgLy8gdGhlaXIgZWxlbWVudCBoYXMgYmVlbiBtb3ZlZCBkb3duIHRvIHRoZSBib3R0b20gb2YgdGhlIGJvZHkuXG4gICAgaWYgKG5ld1Bvc2l0aW9uUmVmZXJlbmNlICYmICF0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LmlzRHJhZ2dpbmcobmV3UG9zaXRpb25SZWZlcmVuY2UpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gbmV3UG9zaXRpb25SZWZlcmVuY2UuZ2V0Um9vdEVsZW1lbnQoKTtcbiAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudCEuaW5zZXJ0QmVmb3JlKHBsYWNlaG9sZGVyLCBlbGVtZW50KTtcbiAgICAgIGFjdGl2ZURyYWdnYWJsZXMuc3BsaWNlKG5ld0luZGV4LCAwLCBpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNvZXJjZUVsZW1lbnQodGhpcy5lbGVtZW50KTtcbiAgICAgIGlmICh0aGlzLl9zaG91bGRFbnRlckFzRmlyc3RDaGlsZChwb2ludGVyWCwgcG9pbnRlclkpKSB7XG4gICAgICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKHBsYWNlaG9sZGVyLCBhY3RpdmVEcmFnZ2FibGVzWzBdLmdldFJvb3RFbGVtZW50KCkpO1xuICAgICAgICBhY3RpdmVEcmFnZ2FibGVzLnVuc2hpZnQoaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgYWN0aXZlRHJhZ2dhYmxlcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSB0cmFuc2Zvcm0gbmVlZHMgdG8gYmUgY2xlYXJlZCBzbyBpdCBkb2Vzbid0IHRocm93IG9mZiB0aGUgbWVhc3VyZW1lbnRzLlxuICAgIHBsYWNlaG9sZGVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgLy8gTm90ZSB0aGF0IHRoZSBwb3NpdGlvbnMgd2VyZSBhbHJlYWR5IGNhY2hlZCB3aGVuIHdlIGNhbGxlZCBgc3RhcnRgIGFib3ZlLFxuICAgIC8vIGJ1dCB3ZSBuZWVkIHRvIHJlZnJlc2ggdGhlbSBzaW5jZSB0aGUgYW1vdW50IG9mIGl0ZW1zIGhhcyBjaGFuZ2VkIGFuZCBhbHNvIHBhcmVudCByZWN0cy5cbiAgICB0aGlzLl9jYWNoZUl0ZW1Qb3NpdGlvbnMoKTtcbiAgICB0aGlzLl9jYWNoZVBhcmVudFBvc2l0aW9ucygpO1xuXG4gICAgdGhpcy5lbnRlcmVkLm5leHQoe2l0ZW0sIGNvbnRhaW5lcjogdGhpcywgY3VycmVudEluZGV4OiB0aGlzLmdldEl0ZW1JbmRleChpdGVtKX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBjb250YWluZXIgYWZ0ZXIgaXQgd2FzIGRyYWdnZWQgaW50byBhbm90aGVyIGNvbnRhaW5lciBieSB0aGUgdXNlci5cbiAgICogQHBhcmFtIGl0ZW0gSXRlbSB0aGF0IHdhcyBkcmFnZ2VkIG91dC5cbiAgICovXG4gIGV4aXQoaXRlbTogRHJhZ1JlZik6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgdGhpcy5leGl0ZWQubmV4dCh7aXRlbSwgY29udGFpbmVyOiB0aGlzfSk7XG4gIH1cblxuICAvKipcbiAgICogRHJvcHMgYW4gaXRlbSBpbnRvIHRoaXMgY29udGFpbmVyLlxuICAgKiBAcGFyYW0gaXRlbSBJdGVtIGJlaW5nIGRyb3BwZWQgaW50byB0aGUgY29udGFpbmVyLlxuICAgKiBAcGFyYW0gY3VycmVudEluZGV4IEluZGV4IGF0IHdoaWNoIHRoZSBpdGVtIHNob3VsZCBiZSBpbnNlcnRlZC5cbiAgICogQHBhcmFtIHByZXZpb3VzQ29udGFpbmVyIENvbnRhaW5lciBmcm9tIHdoaWNoIHRoZSBpdGVtIGdvdCBkcmFnZ2VkIGluLlxuICAgKiBAcGFyYW0gaXNQb2ludGVyT3ZlckNvbnRhaW5lciBXaGV0aGVyIHRoZSB1c2VyJ3MgcG9pbnRlciB3YXMgb3ZlciB0aGVcbiAgICogICAgY29udGFpbmVyIHdoZW4gdGhlIGl0ZW0gd2FzIGRyb3BwZWQuXG4gICAqIEBwYXJhbSBkaXN0YW5jZSBEaXN0YW5jZSB0aGUgdXNlciBoYXMgZHJhZ2dlZCBzaW5jZSB0aGUgc3RhcnQgb2YgdGhlIGRyYWdnaW5nIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0gcHJldmlvdXNJbmRleCBJbmRleCBvZiB0aGUgaXRlbSB3aGVuIGRyYWdnaW5nIHN0YXJ0ZWQuXG4gICAqXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTEuMC4wIGBwcmV2aW91c0luZGV4YCBwYXJhbWV0ZXIgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgKi9cbiAgZHJvcChpdGVtOiBEcmFnUmVmLCBjdXJyZW50SW5kZXg6IG51bWJlciwgcHJldmlvdXNDb250YWluZXI6IERyb3BMaXN0UmVmLFxuICAgIGlzUG9pbnRlck92ZXJDb250YWluZXI6IGJvb2xlYW4sIGRpc3RhbmNlOiBQb2ludCwgcHJldmlvdXNJbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDExLjAuMCBSZW1vdmUgdGhpcyBmYWxsYmFjayBsb2dpYyBvbmNlIGBwcmV2aW91c0luZGV4YCBpcyBhIHJlcXVpcmVkIHBhcmFtLlxuICAgIGlmIChwcmV2aW91c0luZGV4ID09IG51bGwpIHtcbiAgICAgIHByZXZpb3VzSW5kZXggPSBwcmV2aW91c0NvbnRhaW5lci5nZXRJdGVtSW5kZXgoaXRlbSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcm9wcGVkLm5leHQoe2l0ZW0sXG4gICAgICBjdXJyZW50SW5kZXgsXG4gICAgICBwcmV2aW91c0luZGV4LFxuICAgICAgY29udGFpbmVyOiB0aGlzLFxuICAgICAgcHJldmlvdXNDb250YWluZXIsXG4gICAgICBpc1BvaW50ZXJPdmVyQ29udGFpbmVyLFxuICAgICAgZGlzdGFuY2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkcmFnZ2FibGUgaXRlbXMgdGhhdCBhcmUgYSBwYXJ0IG9mIHRoaXMgbGlzdC5cbiAgICogQHBhcmFtIGl0ZW1zIEl0ZW1zIHRoYXQgYXJlIGEgcGFydCBvZiB0aGlzIGxpc3QuXG4gICAqL1xuICB3aXRoSXRlbXMoaXRlbXM6IERyYWdSZWZbXSk6IHRoaXMge1xuICAgIGNvbnN0IHByZXZpb3VzSXRlbXMgPSB0aGlzLl9kcmFnZ2FibGVzO1xuICAgIHRoaXMuX2RyYWdnYWJsZXMgPSBpdGVtcztcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5fd2l0aERyb3BDb250YWluZXIodGhpcykpO1xuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZygpKSB7XG4gICAgICBjb25zdCBkcmFnZ2VkSXRlbXMgPSBwcmV2aW91c0l0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaXNEcmFnZ2luZygpKTtcblxuICAgICAgLy8gSWYgYWxsIG9mIHRoZSBpdGVtcyBiZWluZyBkcmFnZ2VkIHdlcmUgcmVtb3ZlZFxuICAgICAgLy8gZnJvbSB0aGUgbGlzdCwgYWJvcnQgdGhlIGN1cnJlbnQgZHJhZyBzZXF1ZW5jZS5cbiAgICAgIGlmIChkcmFnZ2VkSXRlbXMuZXZlcnkoaXRlbSA9PiBpdGVtcy5pbmRleE9mKGl0ZW0pID09PSAtMSkpIHtcbiAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NhY2hlSXRlbXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBsYXlvdXQgZGlyZWN0aW9uIG9mIHRoZSBkcm9wIGxpc3QuICovXG4gIHdpdGhEaXJlY3Rpb24oZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiB0aGlzIHtcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY29udGFpbmVycyB0aGF0IGFyZSBjb25uZWN0ZWQgdG8gdGhpcyBvbmUuIFdoZW4gdHdvIG9yIG1vcmUgY29udGFpbmVycyBhcmVcbiAgICogY29ubmVjdGVkLCB0aGUgdXNlciB3aWxsIGJlIGFsbG93ZWQgdG8gdHJhbnNmZXIgaXRlbXMgYmV0d2VlbiB0aGVtLlxuICAgKiBAcGFyYW0gY29ubmVjdGVkVG8gT3RoZXIgY29udGFpbmVycyB0aGF0IHRoZSBjdXJyZW50IGNvbnRhaW5lcnMgc2hvdWxkIGJlIGNvbm5lY3RlZCB0by5cbiAgICovXG4gIGNvbm5lY3RlZFRvKGNvbm5lY3RlZFRvOiBEcm9wTGlzdFJlZltdKTogdGhpcyB7XG4gICAgdGhpcy5fc2libGluZ3MgPSBjb25uZWN0ZWRUby5zbGljZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBjb250YWluZXIuXG4gICAqIEBwYXJhbSBvcmllbnRhdGlvbiBOZXcgb3JpZW50YXRpb24gZm9yIHRoZSBjb250YWluZXIuXG4gICAqL1xuICB3aXRoT3JpZW50YXRpb24ob3JpZW50YXRpb246ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcpOiB0aGlzIHtcbiAgICB0aGlzLl9vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgd2hpY2ggcGFyZW50IGVsZW1lbnRzIGFyZSBjYW4gYmUgc2Nyb2xsZWQgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcuXG4gICAqIEBwYXJhbSBlbGVtZW50cyBFbGVtZW50cyB0aGF0IGNhbiBiZSBzY3JvbGxlZC5cbiAgICovXG4gIHdpdGhTY3JvbGxhYmxlUGFyZW50cyhlbGVtZW50czogSFRNTEVsZW1lbnRbXSk6IHRoaXMge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjb2VyY2VFbGVtZW50KHRoaXMuZWxlbWVudCk7XG5cbiAgICAvLyBXZSBhbHdheXMgYWxsb3cgdGhlIGN1cnJlbnQgZWxlbWVudCB0byBiZSBzY3JvbGxhYmxlXG4gICAgLy8gc28gd2UgbmVlZCB0byBlbnN1cmUgdGhhdCBpdCdzIGluIHRoZSBhcnJheS5cbiAgICB0aGlzLl9zY3JvbGxhYmxlRWxlbWVudHMgPVxuICAgICAgICBlbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpID09PSAtMSA/IFtlbGVtZW50LCAuLi5lbGVtZW50c10gOiBlbGVtZW50cy5zbGljZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIHNjcm9sbGFibGUgcGFyZW50cyB0aGF0IGFyZSByZWdpc3RlcmVkIHdpdGggdGhpcyBkcm9wIGNvbnRhaW5lci4gKi9cbiAgZ2V0U2Nyb2xsYWJsZVBhcmVudHMoKTogUmVhZG9ubHlBcnJheTxIVE1MRWxlbWVudD4ge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxhYmxlRWxlbWVudHM7XG4gIH1cblxuICAvKipcbiAgICogRmlndXJlcyBvdXQgdGhlIGluZGV4IG9mIGFuIGl0ZW0gaW4gdGhlIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIGl0ZW0gSXRlbSB3aG9zZSBpbmRleCBzaG91bGQgYmUgZGV0ZXJtaW5lZC5cbiAgICovXG4gIGdldEl0ZW1JbmRleChpdGVtOiBEcmFnUmVmKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuX2lzRHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kcmFnZ2FibGVzLmluZGV4T2YoaXRlbSk7XG4gICAgfVxuXG4gICAgLy8gSXRlbXMgYXJlIHNvcnRlZCBhbHdheXMgYnkgdG9wL2xlZnQgaW4gdGhlIGNhY2hlLCBob3dldmVyIHRoZXkgZmxvdyBkaWZmZXJlbnRseSBpbiBSVEwuXG4gICAgLy8gVGhlIHJlc3Qgb2YgdGhlIGxvZ2ljIHN0aWxsIHN0YW5kcyBubyBtYXR0ZXIgd2hhdCBvcmllbnRhdGlvbiB3ZSdyZSBpbiwgaG93ZXZlclxuICAgIC8vIHdlIG5lZWQgdG8gaW52ZXJ0IHRoZSBhcnJheSB3aGVuIGRldGVybWluaW5nIHRoZSBpbmRleC5cbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuX29yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgdGhpcy5fZGlyZWN0aW9uID09PSAncnRsJyA/XG4gICAgICAgIHRoaXMuX2l0ZW1Qb3NpdGlvbnMuc2xpY2UoKS5yZXZlcnNlKCkgOiB0aGlzLl9pdGVtUG9zaXRpb25zO1xuXG4gICAgcmV0dXJuIGZpbmRJbmRleChpdGVtcywgY3VycmVudEl0ZW0gPT4gY3VycmVudEl0ZW0uZHJhZyA9PT0gaXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgbGlzdCBpcyBhYmxlIHRvIHJlY2VpdmUgdGhlIGl0ZW0gdGhhdFxuICAgKiBpcyBjdXJyZW50bHkgYmVpbmcgZHJhZ2dlZCBpbnNpZGUgYSBjb25uZWN0ZWQgZHJvcCBsaXN0LlxuICAgKi9cbiAgaXNSZWNlaXZpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVNpYmxpbmdzLnNpemUgPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnRzIGFuIGl0ZW0gaW5zaWRlIHRoZSBjb250YWluZXIgYmFzZWQgb24gaXRzIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gaXRlbSBJdGVtIHRvIGJlIHNvcnRlZC5cbiAgICogQHBhcmFtIHBvaW50ZXJYIFBvc2l0aW9uIG9mIHRoZSBpdGVtIGFsb25nIHRoZSBYIGF4aXMuXG4gICAqIEBwYXJhbSBwb2ludGVyWSBQb3NpdGlvbiBvZiB0aGUgaXRlbSBhbG9uZyB0aGUgWSBheGlzLlxuICAgKiBAcGFyYW0gcG9pbnRlckRlbHRhIERpcmVjdGlvbiBpbiB3aGljaCB0aGUgcG9pbnRlciBpcyBtb3ZpbmcgYWxvbmcgZWFjaCBheGlzLlxuICAgKi9cbiAgX3NvcnRJdGVtKGl0ZW06IERyYWdSZWYsIHBvaW50ZXJYOiBudW1iZXIsIHBvaW50ZXJZOiBudW1iZXIsXG4gICAgICAgICAgICBwb2ludGVyRGVsdGE6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pOiB2b2lkIHtcbiAgICAvLyBEb24ndCBzb3J0IHRoZSBpdGVtIGlmIHNvcnRpbmcgaXMgZGlzYWJsZWQgb3IgaXQncyBvdXQgb2YgcmFuZ2UuXG4gICAgaWYgKHRoaXMuc29ydGluZ0Rpc2FibGVkIHx8XG4gICAgICAgICFpc1BvaW50ZXJOZWFyQ2xpZW50UmVjdCh0aGlzLl9jbGllbnRSZWN0LCBEUk9QX1BST1hJTUlUWV9USFJFU0hPTEQsIHBvaW50ZXJYLCBwb2ludGVyWSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWJsaW5ncyA9IHRoaXMuX2l0ZW1Qb3NpdGlvbnM7XG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXhGcm9tUG9pbnRlclBvc2l0aW9uKGl0ZW0sIHBvaW50ZXJYLCBwb2ludGVyWSwgcG9pbnRlckRlbHRhKTtcblxuICAgIGlmIChuZXdJbmRleCA9PT0gLTEgJiYgc2libGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuX29yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gZmluZEluZGV4KHNpYmxpbmdzLCBjdXJyZW50SXRlbSA9PiBjdXJyZW50SXRlbS5kcmFnID09PSBpdGVtKTtcbiAgICBjb25zdCBzaWJsaW5nQXROZXdQb3NpdGlvbiA9IHNpYmxpbmdzW25ld0luZGV4XTtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBzaWJsaW5nc1tjdXJyZW50SW5kZXhdLmNsaWVudFJlY3Q7XG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBzaWJsaW5nQXROZXdQb3NpdGlvbi5jbGllbnRSZWN0O1xuICAgIGNvbnN0IGRlbHRhID0gY3VycmVudEluZGV4ID4gbmV3SW5kZXggPyAxIDogLTE7XG5cbiAgICB0aGlzLl9wcmV2aW91c1N3YXAuZHJhZyA9IHNpYmxpbmdBdE5ld1Bvc2l0aW9uLmRyYWc7XG4gICAgdGhpcy5fcHJldmlvdXNTd2FwLmRlbHRhID0gaXNIb3Jpem9udGFsID8gcG9pbnRlckRlbHRhLnggOiBwb2ludGVyRGVsdGEueTtcblxuICAgIC8vIEhvdyBtYW55IHBpeGVscyB0aGUgaXRlbSdzIHBsYWNlaG9sZGVyIHNob3VsZCBiZSBvZmZzZXQuXG4gICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuX2dldEl0ZW1PZmZzZXRQeChjdXJyZW50UG9zaXRpb24sIG5ld1Bvc2l0aW9uLCBkZWx0YSk7XG5cbiAgICAvLyBIb3cgbWFueSBwaXhlbHMgYWxsIHRoZSBvdGhlciBpdGVtcyBzaG91bGQgYmUgb2Zmc2V0LlxuICAgIGNvbnN0IHNpYmxpbmdPZmZzZXQgPSB0aGlzLl9nZXRTaWJsaW5nT2Zmc2V0UHgoY3VycmVudEluZGV4LCBzaWJsaW5ncywgZGVsdGEpO1xuXG4gICAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgb3JkZXIgb2YgdGhlIGl0ZW1zIGJlZm9yZSBtb3ZpbmcgdGhlIGl0ZW0gdG8gaXRzIG5ldyBpbmRleC5cbiAgICAvLyBXZSB1c2UgdGhpcyB0byBjaGVjayB3aGV0aGVyIGFuIGl0ZW0gaGFzIGJlZW4gbW92ZWQgYXMgYSByZXN1bHQgb2YgdGhlIHNvcnRpbmcuXG4gICAgY29uc3Qgb2xkT3JkZXIgPSBzaWJsaW5ncy5zbGljZSgpO1xuXG4gICAgLy8gU2h1ZmZsZSB0aGUgYXJyYXkgaW4gcGxhY2UuXG4gICAgbW92ZUl0ZW1JbkFycmF5KHNpYmxpbmdzLCBjdXJyZW50SW5kZXgsIG5ld0luZGV4KTtcblxuICAgIHRoaXMuc29ydGVkLm5leHQoe1xuICAgICAgcHJldmlvdXNJbmRleDogY3VycmVudEluZGV4LFxuICAgICAgY3VycmVudEluZGV4OiBuZXdJbmRleCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcyxcbiAgICAgIGl0ZW1cbiAgICB9KTtcblxuICAgIHNpYmxpbmdzLmZvckVhY2goKHNpYmxpbmcsIGluZGV4KSA9PiB7XG4gICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiB0aGUgcG9zaXRpb24gaGFzbid0IGNoYW5nZWQuXG4gICAgICBpZiAob2xkT3JkZXJbaW5kZXhdID09PSBzaWJsaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNEcmFnZ2VkSXRlbSA9IHNpYmxpbmcuZHJhZyA9PT0gaXRlbTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGlzRHJhZ2dlZEl0ZW0gPyBpdGVtT2Zmc2V0IDogc2libGluZ09mZnNldDtcbiAgICAgIGNvbnN0IGVsZW1lbnRUb09mZnNldCA9IGlzRHJhZ2dlZEl0ZW0gPyBpdGVtLmdldFBsYWNlaG9sZGVyRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmRyYWcuZ2V0Um9vdEVsZW1lbnQoKTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBvZmZzZXQgdG8gcmVmbGVjdCB0aGUgbmV3IHBvc2l0aW9uLlxuICAgICAgc2libGluZy5vZmZzZXQgKz0gb2Zmc2V0O1xuXG4gICAgICAvLyBTaW5jZSB3ZSdyZSBtb3ZpbmcgdGhlIGl0ZW1zIHdpdGggYSBgdHJhbnNmb3JtYCwgd2UgbmVlZCB0byBhZGp1c3QgdGhlaXIgY2FjaGVkXG4gICAgICAvLyBjbGllbnQgcmVjdHMgdG8gcmVmbGVjdCB0aGVpciBuZXcgcG9zaXRpb24sIGFzIHdlbGwgYXMgc3dhcCB0aGVpciBwb3NpdGlvbnMgaW4gdGhlIGNhY2hlLlxuICAgICAgLy8gTm90ZSB0aGF0IHdlIHNob3VsZG4ndCB1c2UgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAgaGVyZSB0byB1cGRhdGUgdGhlIGNhY2hlLCBiZWNhdXNlIHRoZVxuICAgICAgLy8gZWxlbWVudHMgbWF5IGJlIG1pZC1hbmltYXRpb24gd2hpY2ggd2lsbCBnaXZlIHVzIGEgd3JvbmcgcmVzdWx0LlxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAvLyBSb3VuZCB0aGUgdHJhbnNmb3JtcyBzaW5jZSBzb21lIGJyb3dzZXJzIHdpbGxcbiAgICAgICAgLy8gYmx1ciB0aGUgZWxlbWVudHMsIGZvciBzdWItcGl4ZWwgdHJhbnNmb3Jtcy5cbiAgICAgICAgZWxlbWVudFRvT2Zmc2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke01hdGgucm91bmQoc2libGluZy5vZmZzZXQpfXB4LCAwLCAwKWA7XG4gICAgICAgIGFkanVzdENsaWVudFJlY3Qoc2libGluZy5jbGllbnRSZWN0LCAwLCBvZmZzZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudFRvT2Zmc2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke01hdGgucm91bmQoc2libGluZy5vZmZzZXQpfXB4LCAwKWA7XG4gICAgICAgIGFkanVzdENsaWVudFJlY3Qoc2libGluZy5jbGllbnRSZWN0LCBvZmZzZXQsIDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB1c2VyJ3MgcG9pbnRlciBpcyBjbG9zZSB0byB0aGUgZWRnZXMgb2YgZWl0aGVyIHRoZVxuICAgKiB2aWV3cG9ydCBvciB0aGUgZHJvcCBsaXN0IGFuZCBzdGFydHMgdGhlIGF1dG8tc2Nyb2xsIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0gcG9pbnRlclggVXNlcidzIHBvaW50ZXIgcG9zaXRpb24gYWxvbmcgdGhlIHggYXhpcy5cbiAgICogQHBhcmFtIHBvaW50ZXJZIFVzZXIncyBwb2ludGVyIHBvc2l0aW9uIGFsb25nIHRoZSB5IGF4aXMuXG4gICAqL1xuICBfc3RhcnRTY3JvbGxpbmdJZk5lY2Vzc2FyeShwb2ludGVyWDogbnVtYmVyLCBwb2ludGVyWTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuYXV0b1Njcm9sbERpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNjcm9sbE5vZGU6IEhUTUxFbGVtZW50IHwgV2luZG93IHwgdW5kZWZpbmVkO1xuICAgIGxldCB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiA9IEF1dG9TY3JvbGxWZXJ0aWNhbERpcmVjdGlvbi5OT05FO1xuICAgIGxldCBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID0gQXV0b1Njcm9sbEhvcml6b250YWxEaXJlY3Rpb24uTk9ORTtcblxuICAgIC8vIENoZWNrIHdoZXRoZXIgd2Ugc2hvdWxkIHN0YXJ0IHNjcm9sbGluZyBhbnkgb2YgdGhlIHBhcmVudCBjb250YWluZXJzLlxuICAgIHRoaXMuX3BhcmVudFBvc2l0aW9ucy5wb3NpdGlvbnMuZm9yRWFjaCgocG9zaXRpb24sIGVsZW1lbnQpID0+IHtcbiAgICAgIC8vIFdlIGhhdmUgc3BlY2lhbCBoYW5kbGluZyBmb3IgdGhlIGBkb2N1bWVudGAgYmVsb3cuIEFsc28gdGhpcyB3b3VsZCBiZVxuICAgICAgLy8gbmljZXIgd2l0aCBhICBmb3IuLi5vZiBsb29wLCBidXQgaXQgcmVxdWlyZXMgY2hhbmdpbmcgYSBjb21waWxlciBmbGFnLlxuICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuX2RvY3VtZW50IHx8ICFwb3NpdGlvbi5jbGllbnRSZWN0IHx8IHNjcm9sbE5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNQb2ludGVyTmVhckNsaWVudFJlY3QocG9zaXRpb24uY2xpZW50UmVjdCwgRFJPUF9QUk9YSU1JVFlfVEhSRVNIT0xELFxuICAgICAgICAgIHBvaW50ZXJYLCBwb2ludGVyWSkpIHtcbiAgICAgICAgW3ZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uLCBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uXSA9IGdldEVsZW1lbnRTY3JvbGxEaXJlY3Rpb25zKFxuICAgICAgICAgICAgZWxlbWVudCBhcyBIVE1MRWxlbWVudCwgcG9zaXRpb24uY2xpZW50UmVjdCwgcG9pbnRlclgsIHBvaW50ZXJZKTtcblxuICAgICAgICBpZiAodmVydGljYWxTY3JvbGxEaXJlY3Rpb24gfHwgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbikge1xuICAgICAgICAgIHNjcm9sbE5vZGUgPSBlbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBPdGhlcndpc2UgY2hlY2sgaWYgd2UgY2FuIHN0YXJ0IHNjcm9sbGluZyB0aGUgdmlld3BvcnQuXG4gICAgaWYgKCF2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiAmJiAhaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbikge1xuICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5fdmlld3BvcnRSdWxlci5nZXRWaWV3cG9ydFNpemUoKTtcbiAgICAgIGNvbnN0IGNsaWVudFJlY3QgPSB7d2lkdGgsIGhlaWdodCwgdG9wOiAwLCByaWdodDogd2lkdGgsIGJvdHRvbTogaGVpZ2h0LCBsZWZ0OiAwfTtcbiAgICAgIHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uID0gZ2V0VmVydGljYWxTY3JvbGxEaXJlY3Rpb24oY2xpZW50UmVjdCwgcG9pbnRlclkpO1xuICAgICAgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiA9IGdldEhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24oY2xpZW50UmVjdCwgcG9pbnRlclgpO1xuICAgICAgc2Nyb2xsTm9kZSA9IHdpbmRvdztcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsTm9kZSAmJiAodmVydGljYWxTY3JvbGxEaXJlY3Rpb24gIT09IHRoaXMuX3ZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uIHx8XG4gICAgICAgIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gIT09IHRoaXMuX2hvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gfHxcbiAgICAgICAgc2Nyb2xsTm9kZSAhPT0gdGhpcy5fc2Nyb2xsTm9kZSkpIHtcbiAgICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uID0gdmVydGljYWxTY3JvbGxEaXJlY3Rpb247XG4gICAgICB0aGlzLl9ob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID0gaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbjtcbiAgICAgIHRoaXMuX3Njcm9sbE5vZGUgPSBzY3JvbGxOb2RlO1xuXG4gICAgICBpZiAoKHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uIHx8IGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24pICYmIHNjcm9sbE5vZGUpIHtcbiAgICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKHRoaXMuX3N0YXJ0U2Nyb2xsSW50ZXJ2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RvcFNjcm9sbGluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBTdG9wcyBhbnkgY3VycmVudGx5LXJ1bm5pbmcgYXV0by1zY3JvbGwgc2VxdWVuY2VzLiAqL1xuICBfc3RvcFNjcm9sbGluZygpIHtcbiAgICB0aGlzLl9zdG9wU2Nyb2xsVGltZXJzLm5leHQoKTtcbiAgfVxuXG4gIC8qKiBDYWNoZXMgdGhlIHBvc2l0aW9ucyBvZiB0aGUgY29uZmlndXJlZCBzY3JvbGxhYmxlIHBhcmVudHMuICovXG4gIHByaXZhdGUgX2NhY2hlUGFyZW50UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjb2VyY2VFbGVtZW50KHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5fcGFyZW50UG9zaXRpb25zLmNhY2hlKHRoaXMuX3Njcm9sbGFibGVFbGVtZW50cyk7XG5cbiAgICAvLyBUaGUgbGlzdCBlbGVtZW50IGlzIGFsd2F5cyBpbiB0aGUgYHNjcm9sbGFibGVFbGVtZW50c2BcbiAgICAvLyBzbyB3ZSBjYW4gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIGNhY2hlZCBgQ2xpZW50UmVjdGAuXG4gICAgdGhpcy5fY2xpZW50UmVjdCA9IHRoaXMuX3BhcmVudFBvc2l0aW9ucy5wb3NpdGlvbnMuZ2V0KGVsZW1lbnQpIS5jbGllbnRSZWN0ITtcbiAgfVxuXG4gIC8qKiBSZWZyZXNoZXMgdGhlIHBvc2l0aW9uIGNhY2hlIG9mIHRoZSBpdGVtcyBhbmQgc2libGluZyBjb250YWluZXJzLiAqL1xuICBwcml2YXRlIF9jYWNoZUl0ZW1Qb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5fb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJztcblxuICAgIHRoaXMuX2l0ZW1Qb3NpdGlvbnMgPSB0aGlzLl9hY3RpdmVEcmFnZ2FibGVzLm1hcChkcmFnID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRUb01lYXN1cmUgPSBkcmFnLmdldFZpc2libGVFbGVtZW50KCk7XG4gICAgICByZXR1cm4ge2RyYWcsIG9mZnNldDogMCwgY2xpZW50UmVjdDogZ2V0TXV0YWJsZUNsaWVudFJlY3QoZWxlbWVudFRvTWVhc3VyZSl9O1xuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBpc0hvcml6b250YWwgPyBhLmNsaWVudFJlY3QubGVmdCAtIGIuY2xpZW50UmVjdC5sZWZ0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmNsaWVudFJlY3QudG9wIC0gYi5jbGllbnRSZWN0LnRvcDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZXNldHMgdGhlIGNvbnRhaW5lciB0byBpdHMgaW5pdGlhbCBzdGF0ZS4gKi9cbiAgcHJpdmF0ZSBfcmVzZXQoKSB7XG4gICAgdGhpcy5faXNEcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3R5bGVzID0gY29lcmNlRWxlbWVudCh0aGlzLmVsZW1lbnQpLnN0eWxlO1xuICAgIChzdHlsZXMgYXMgYW55KS5zY3JvbGxTbmFwVHlwZSA9IHN0eWxlcy5tc1Njcm9sbFNuYXBUeXBlID0gdGhpcy5faW5pdGlhbFNjcm9sbFNuYXA7XG5cbiAgICAvLyBUT0RPKGNyaXNiZXRvKTogbWF5IGhhdmUgdG8gd2FpdCBmb3IgdGhlIGFuaW1hdGlvbnMgdG8gZmluaXNoLlxuICAgIHRoaXMuX2FjdGl2ZURyYWdnYWJsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gaXRlbS5nZXRSb290RWxlbWVudCgpO1xuXG4gICAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgcm9vdEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fc2libGluZ3MuZm9yRWFjaChzaWJsaW5nID0+IHNpYmxpbmcuX3N0b3BSZWNlaXZpbmcodGhpcykpO1xuICAgIHRoaXMuX2FjdGl2ZURyYWdnYWJsZXMgPSBbXTtcbiAgICB0aGlzLl9pdGVtUG9zaXRpb25zID0gW107XG4gICAgdGhpcy5fcHJldmlvdXNTd2FwLmRyYWcgPSBudWxsO1xuICAgIHRoaXMuX3ByZXZpb3VzU3dhcC5kZWx0YSA9IDA7XG4gICAgdGhpcy5fc3RvcFNjcm9sbGluZygpO1xuICAgIHRoaXMuX3ZpZXdwb3J0U2Nyb2xsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fcGFyZW50UG9zaXRpb25zLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgb2Zmc2V0IGluIHBpeGVscyBieSB3aGljaCB0aGUgaXRlbXMgdGhhdCBhcmVuJ3QgYmVpbmcgZHJhZ2dlZCBzaG91bGQgYmUgbW92ZWQuXG4gICAqIEBwYXJhbSBjdXJyZW50SW5kZXggSW5kZXggb2YgdGhlIGl0ZW0gY3VycmVudGx5IGJlaW5nIGRyYWdnZWQuXG4gICAqIEBwYXJhbSBzaWJsaW5ncyBBbGwgb2YgdGhlIGl0ZW1zIGluIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0gZGVsdGEgRGlyZWN0aW9uIGluIHdoaWNoIHRoZSB1c2VyIGlzIG1vdmluZy5cbiAgICovXG4gIHByaXZhdGUgX2dldFNpYmxpbmdPZmZzZXRQeChjdXJyZW50SW5kZXg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmdzOiBDYWNoZWRJdGVtUG9zaXRpb25bXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIHwgLTEpIHtcblxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuX29yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gc2libGluZ3NbY3VycmVudEluZGV4XS5jbGllbnRSZWN0O1xuICAgIGNvbnN0IGltbWVkaWF0ZVNpYmxpbmcgPSBzaWJsaW5nc1tjdXJyZW50SW5kZXggKyBkZWx0YSAqIC0xXTtcbiAgICBsZXQgc2libGluZ09mZnNldCA9IGN1cnJlbnRQb3NpdGlvbltpc0hvcml6b250YWwgPyAnd2lkdGgnIDogJ2hlaWdodCddICogZGVsdGE7XG5cbiAgICBpZiAoaW1tZWRpYXRlU2libGluZykge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpc0hvcml6b250YWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgIGNvbnN0IGVuZCA9IGlzSG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcblxuICAgICAgLy8gR2V0IHRoZSBzcGFjaW5nIGJldHdlZW4gdGhlIHN0YXJ0IG9mIHRoZSBjdXJyZW50IGl0ZW0gYW5kIHRoZSBlbmQgb2YgdGhlIG9uZSBpbW1lZGlhdGVseVxuICAgICAgLy8gYWZ0ZXIgaXQgaW4gdGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgdXNlciBpcyBkcmFnZ2luZywgb3IgdmljZSB2ZXJzYS4gV2UgYWRkIGl0IHRvIHRoZVxuICAgICAgLy8gb2Zmc2V0IGluIG9yZGVyIHRvIHB1c2ggdGhlIGVsZW1lbnQgdG8gd2hlcmUgaXQgd2lsbCBiZSB3aGVuIGl0J3MgaW5saW5lIGFuZCBpcyBpbmZsdWVuY2VkXG4gICAgICAvLyBieSB0aGUgYG1hcmdpbmAgb2YgaXRzIHNpYmxpbmdzLlxuICAgICAgaWYgKGRlbHRhID09PSAtMSkge1xuICAgICAgICBzaWJsaW5nT2Zmc2V0IC09IGltbWVkaWF0ZVNpYmxpbmcuY2xpZW50UmVjdFtzdGFydF0gLSBjdXJyZW50UG9zaXRpb25bZW5kXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpYmxpbmdPZmZzZXQgKz0gY3VycmVudFBvc2l0aW9uW3N0YXJ0XSAtIGltbWVkaWF0ZVNpYmxpbmcuY2xpZW50UmVjdFtlbmRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWJsaW5nT2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG9mZnNldCBpbiBwaXhlbHMgYnkgd2hpY2ggdGhlIGl0ZW0gdGhhdCBpcyBiZWluZyBkcmFnZ2VkIHNob3VsZCBiZSBtb3ZlZC5cbiAgICogQHBhcmFtIGN1cnJlbnRQb3NpdGlvbiBDdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuICAgKiBAcGFyYW0gbmV3UG9zaXRpb24gUG9zaXRpb24gb2YgdGhlIGl0ZW0gd2hlcmUgdGhlIGN1cnJlbnQgaXRlbSBzaG91bGQgYmUgbW92ZWQuXG4gICAqIEBwYXJhbSBkZWx0YSBEaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHVzZXIgaXMgbW92aW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0SXRlbU9mZnNldFB4KGN1cnJlbnRQb3NpdGlvbjogQ2xpZW50UmVjdCwgbmV3UG9zaXRpb246IENsaWVudFJlY3QsIGRlbHRhOiAxIHwgLTEpIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLl9vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgIGxldCBpdGVtT2Zmc2V0ID0gaXNIb3Jpem9udGFsID8gbmV3UG9zaXRpb24ubGVmdCAtIGN1cnJlbnRQb3NpdGlvbi5sZWZ0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnRvcCAtIGN1cnJlbnRQb3NpdGlvbi50b3A7XG5cbiAgICAvLyBBY2NvdW50IGZvciBkaWZmZXJlbmNlcyBpbiB0aGUgaXRlbSB3aWR0aC9oZWlnaHQuXG4gICAgaWYgKGRlbHRhID09PSAtMSkge1xuICAgICAgaXRlbU9mZnNldCArPSBpc0hvcml6b250YWwgPyBuZXdQb3NpdGlvbi53aWR0aCAtIGN1cnJlbnRQb3NpdGlvbi53aWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLmhlaWdodCAtIGN1cnJlbnRQb3NpdGlvbi5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1PZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHBvaW50ZXIgaXMgZW50ZXJpbmcgaW4gdGhlIGZpcnN0IHBvc2l0aW9uXG4gICAqIEBwYXJhbSBwb2ludGVyWCBQb3NpdGlvbiBvZiB0aGUgdXNlcidzIHBvaW50ZXIgYWxvbmcgdGhlIFggYXhpcy5cbiAgICogQHBhcmFtIHBvaW50ZXJZIFBvc2l0aW9uIG9mIHRoZSB1c2VyJ3MgcG9pbnRlciBhbG9uZyB0aGUgWSBheGlzLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2hvdWxkRW50ZXJBc0ZpcnN0Q2hpbGQocG9pbnRlclg6IG51bWJlciwgcG9pbnRlclk6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5fYWN0aXZlRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtUG9zaXRpb25zID0gdGhpcy5faXRlbVBvc2l0aW9ucztcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLl9vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuXG4gICAgLy8gYGl0ZW1Qb3NpdGlvbnNgIGFyZSBzb3J0ZWQgYnkgcG9zaXRpb24gd2hpbGUgYGFjdGl2ZURyYWdnYWJsZXNgIGFyZSBzb3J0ZWQgYnkgY2hpbGQgaW5kZXhcbiAgICAvLyBjaGVjayBpZiBjb250YWluZXIgaXMgdXNpbmcgc29tZSBzb3J0IG9mIFwicmV2ZXJzZVwiIG9yZGVyaW5nIChlZzogZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlKVxuICAgIGNvbnN0IHJldmVyc2VkID0gaXRlbVBvc2l0aW9uc1swXS5kcmFnICE9PSB0aGlzLl9hY3RpdmVEcmFnZ2FibGVzWzBdO1xuICAgIGlmIChyZXZlcnNlZCkge1xuICAgICAgY29uc3QgbGFzdEl0ZW1SZWN0ID0gaXRlbVBvc2l0aW9uc1tpdGVtUG9zaXRpb25zLmxlbmd0aCAtIDFdLmNsaWVudFJlY3Q7XG4gICAgICByZXR1cm4gaXNIb3Jpem9udGFsID8gcG9pbnRlclggPj0gbGFzdEl0ZW1SZWN0LnJpZ2h0IDogcG9pbnRlclkgPj0gbGFzdEl0ZW1SZWN0LmJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3RJdGVtUmVjdCA9IGl0ZW1Qb3NpdGlvbnNbMF0uY2xpZW50UmVjdDtcbiAgICAgIHJldHVybiBpc0hvcml6b250YWwgPyBwb2ludGVyWCA8PSBmaXJzdEl0ZW1SZWN0LmxlZnQgOiBwb2ludGVyWSA8PSBmaXJzdEl0ZW1SZWN0LnRvcDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgaW5kZXggb2YgYW4gaXRlbSBpbiB0aGUgZHJvcCBjb250YWluZXIsIGJhc2VkIG9uIHRoZSBwb3NpdGlvbiBvZiB0aGUgdXNlcidzIHBvaW50ZXIuXG4gICAqIEBwYXJhbSBpdGVtIEl0ZW0gdGhhdCBpcyBiZWluZyBzb3J0ZWQuXG4gICAqIEBwYXJhbSBwb2ludGVyWCBQb3NpdGlvbiBvZiB0aGUgdXNlcidzIHBvaW50ZXIgYWxvbmcgdGhlIFggYXhpcy5cbiAgICogQHBhcmFtIHBvaW50ZXJZIFBvc2l0aW9uIG9mIHRoZSB1c2VyJ3MgcG9pbnRlciBhbG9uZyB0aGUgWSBheGlzLlxuICAgKiBAcGFyYW0gZGVsdGEgRGlyZWN0aW9uIGluIHdoaWNoIHRoZSB1c2VyIGlzIG1vdmluZyB0aGVpciBwb2ludGVyLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0SXRlbUluZGV4RnJvbVBvaW50ZXJQb3NpdGlvbihpdGVtOiBEcmFnUmVmLCBwb2ludGVyWDogbnVtYmVyLCBwb2ludGVyWTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhPzoge3g6IG51bWJlciwgeTogbnVtYmVyfSkge1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuX29yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCc7XG5cbiAgICByZXR1cm4gZmluZEluZGV4KHRoaXMuX2l0ZW1Qb3NpdGlvbnMsICh7ZHJhZywgY2xpZW50UmVjdH0sIF8sIGFycmF5KSA9PiB7XG4gICAgICBpZiAoZHJhZyA9PT0gaXRlbSkge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIG9ubHkgb25lIGl0ZW0gbGVmdCBpbiB0aGUgY29udGFpbmVyLCBpdCBtdXN0IGJlXG4gICAgICAgIC8vIHRoZSBkcmFnZ2VkIGl0ZW0gaXRzZWxmIHNvIHdlIHVzZSBpdCBhcyBhIHJlZmVyZW5jZS5cbiAgICAgICAgcmV0dXJuIGFycmF5Lmxlbmd0aCA8IDI7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBpc0hvcml6b250YWwgPyBkZWx0YS54IDogZGVsdGEueTtcblxuICAgICAgICAvLyBJZiB0aGUgdXNlciBpcyBzdGlsbCBob3ZlcmluZyBvdmVyIHRoZSBzYW1lIGl0ZW0gYXMgbGFzdCB0aW1lLCBhbmQgdGhleSBkaWRuJ3QgY2hhbmdlXG4gICAgICAgIC8vIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhleSdyZSBkcmFnZ2luZywgd2UgZG9uJ3QgY29uc2lkZXIgaXQgYSBkaXJlY3Rpb24gc3dhcC5cbiAgICAgICAgaWYgKGRyYWcgPT09IHRoaXMuX3ByZXZpb3VzU3dhcC5kcmFnICYmIGRpcmVjdGlvbiA9PT0gdGhpcy5fcHJldmlvdXNTd2FwLmRlbHRhKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpc0hvcml6b250YWwgP1xuICAgICAgICAgIC8vIFJvdW5kIHRoZXNlIGRvd24gc2luY2UgbW9zdCBicm93c2VycyByZXBvcnQgY2xpZW50IHJlY3RzIHdpdGhcbiAgICAgICAgICAvLyBzdWItcGl4ZWwgcHJlY2lzaW9uLCB3aGVyZWFzIHRoZSBwb2ludGVyIGNvb3JkaW5hdGVzIGFyZSByb3VuZGVkIHRvIHBpeGVscy5cbiAgICAgICAgICBwb2ludGVyWCA+PSBNYXRoLmZsb29yKGNsaWVudFJlY3QubGVmdCkgJiYgcG9pbnRlclggPCBNYXRoLmZsb29yKGNsaWVudFJlY3QucmlnaHQpIDpcbiAgICAgICAgICBwb2ludGVyWSA+PSBNYXRoLmZsb29yKGNsaWVudFJlY3QudG9wKSAmJiBwb2ludGVyWSA8IE1hdGguZmxvb3IoY2xpZW50UmVjdC5ib3R0b20pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIENhY2hlcyB0aGUgY3VycmVudCBpdGVtcyBpbiB0aGUgbGlzdCBhbmQgdGhlaXIgcG9zaXRpb25zLiAqL1xuICBwcml2YXRlIF9jYWNoZUl0ZW1zKCk6IHZvaWQge1xuICAgIHRoaXMuX2FjdGl2ZURyYWdnYWJsZXMgPSB0aGlzLl9kcmFnZ2FibGVzLnNsaWNlKCk7XG4gICAgdGhpcy5fY2FjaGVJdGVtUG9zaXRpb25zKCk7XG4gICAgdGhpcy5fY2FjaGVQYXJlbnRQb3NpdGlvbnMoKTtcbiAgfVxuXG4gIC8qKiBTdGFydHMgdGhlIGludGVydmFsIHRoYXQnbGwgYXV0by1zY3JvbGwgdGhlIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX3N0YXJ0U2Nyb2xsSW50ZXJ2YWwgPSAoKSA9PiB7XG4gICAgdGhpcy5fc3RvcFNjcm9sbGluZygpO1xuXG4gICAgaW50ZXJ2YWwoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fc3RvcFNjcm9sbFRpbWVycykpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX3Njcm9sbE5vZGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3ZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uID09PSBBdXRvU2Nyb2xsVmVydGljYWxEaXJlY3Rpb24uVVApIHtcbiAgICAgICAgICBpbmNyZW1lbnRWZXJ0aWNhbFNjcm9sbChub2RlLCAtQVVUT19TQ1JPTExfU1RFUCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdmVydGljYWxTY3JvbGxEaXJlY3Rpb24gPT09IEF1dG9TY3JvbGxWZXJ0aWNhbERpcmVjdGlvbi5ET1dOKSB7XG4gICAgICAgICAgaW5jcmVtZW50VmVydGljYWxTY3JvbGwobm9kZSwgQVVUT19TQ1JPTExfU1RFUCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiA9PT0gQXV0b1Njcm9sbEhvcml6b250YWxEaXJlY3Rpb24uTEVGVCkge1xuICAgICAgICAgIGluY3JlbWVudEhvcml6b250YWxTY3JvbGwobm9kZSwgLUFVVE9fU0NST0xMX1NURVApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2hvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gPT09IEF1dG9TY3JvbGxIb3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUKSB7XG4gICAgICAgICAgaW5jcmVtZW50SG9yaXpvbnRhbFNjcm9sbChub2RlLCBBVVRPX1NDUk9MTF9TVEVQKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHVzZXIncyBwb2ludGVyIGlzIHBvc2l0aW9uZWQgb3ZlciB0aGUgY29udGFpbmVyLlxuICAgKiBAcGFyYW0geCBQb2ludGVyIHBvc2l0aW9uIGFsb25nIHRoZSBYIGF4aXMuXG4gICAqIEBwYXJhbSB5IFBvaW50ZXIgcG9zaXRpb24gYWxvbmcgdGhlIFkgYXhpcy5cbiAgICovXG4gIF9pc092ZXJDb250YWluZXIoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNJbnNpZGVDbGllbnRSZWN0KHRoaXMuX2NsaWVudFJlY3QsIHgsIHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpZ3VyZXMgb3V0IHdoZXRoZXIgYW4gaXRlbSBzaG91bGQgYmUgbW92ZWQgaW50byBhIHNpYmxpbmdcbiAgICogZHJvcCBjb250YWluZXIsIGJhc2VkIG9uIGl0cyBjdXJyZW50IHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gaXRlbSBEcmFnIGl0ZW0gdGhhdCBpcyBiZWluZyBtb3ZlZC5cbiAgICogQHBhcmFtIHggUG9zaXRpb24gb2YgdGhlIGl0ZW0gYWxvbmcgdGhlIFggYXhpcy5cbiAgICogQHBhcmFtIHkgUG9zaXRpb24gb2YgdGhlIGl0ZW0gYWxvbmcgdGhlIFkgYXhpcy5cbiAgICovXG4gIF9nZXRTaWJsaW5nQ29udGFpbmVyRnJvbVBvc2l0aW9uKGl0ZW06IERyYWdSZWYsIHg6IG51bWJlciwgeTogbnVtYmVyKTogRHJvcExpc3RSZWYgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaWJsaW5ncy5maW5kKHNpYmxpbmcgPT4gc2libGluZy5fY2FuUmVjZWl2ZShpdGVtLCB4LCB5KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGRyb3AgbGlzdCBjYW4gcmVjZWl2ZSB0aGUgcGFzc2VkLWluIGl0ZW0uXG4gICAqIEBwYXJhbSBpdGVtIEl0ZW0gdGhhdCBpcyBiZWluZyBkcmFnZ2VkIGludG8gdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB4IFBvc2l0aW9uIG9mIHRoZSBpdGVtIGFsb25nIHRoZSBYIGF4aXMuXG4gICAqIEBwYXJhbSB5IFBvc2l0aW9uIG9mIHRoZSBpdGVtIGFsb25nIHRoZSBZIGF4aXMuXG4gICAqL1xuICBfY2FuUmVjZWl2ZShpdGVtOiBEcmFnUmVmLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICghaXNJbnNpZGVDbGllbnRSZWN0KHRoaXMuX2NsaWVudFJlY3QsIHgsIHkpIHx8ICF0aGlzLmVudGVyUHJlZGljYXRlKGl0ZW0sIHRoaXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEZyb21Qb2ludCA9IHRoaXMuX2dldFNoYWRvd1Jvb3QoKS5lbGVtZW50RnJvbVBvaW50KHgsIHkpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCBhdCB0aGUgcG9pbnRlciBwb3NpdGlvbiwgdGhlblxuICAgIC8vIHRoZSBjbGllbnQgcmVjdCBpcyBwcm9iYWJseSBzY3JvbGxlZCBvdXQgb2YgdGhlIHZpZXcuXG4gICAgaWYgKCFlbGVtZW50RnJvbVBvaW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IGNvZXJjZUVsZW1lbnQodGhpcy5lbGVtZW50KTtcblxuICAgIC8vIFRoZSBgQ2xpZW50UmVjdGAsIHRoYXQgd2UncmUgdXNpbmcgdG8gZmluZCB0aGUgY29udGFpbmVyIG92ZXIgd2hpY2ggdGhlIHVzZXIgaXNcbiAgICAvLyBob3ZlcmluZywgZG9lc24ndCBnaXZlIHVzIGFueSBpbmZvcm1hdGlvbiBvbiB3aGV0aGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHNjcm9sbGVkXG4gICAgLy8gb3V0IG9mIHRoZSB2aWV3IG9yIHdoZXRoZXIgaXQncyBvdmVybGFwcGluZyB3aXRoIG90aGVyIGNvbnRhaW5lcnMuIFRoaXMgbWVhbnMgdGhhdFxuICAgIC8vIHdlIGNvdWxkIGVuZCB1cCB0cmFuc2ZlcnJpbmcgdGhlIGl0ZW0gaW50byBhIGNvbnRhaW5lciB0aGF0J3MgaW52aXNpYmxlIG9yIGlzIHBvc2l0aW9uZWRcbiAgICAvLyBiZWxvdyBhbm90aGVyIG9uZS4gV2UgdXNlIHRoZSByZXN1bHQgZnJvbSBgZWxlbWVudEZyb21Qb2ludGAgdG8gZ2V0IHRoZSB0b3AtbW9zdCBlbGVtZW50XG4gICAgLy8gYXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gYW5kIHRvIGZpbmQgd2hldGhlciBpdCdzIG9uZSBvZiB0aGUgaW50ZXJzZWN0aW5nIGRyb3AgY29udGFpbmVycy5cbiAgICByZXR1cm4gZWxlbWVudEZyb21Qb2ludCA9PT0gbmF0aXZlRWxlbWVudCB8fCBuYXRpdmVFbGVtZW50LmNvbnRhaW5zKGVsZW1lbnRGcm9tUG9pbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBieSBvbmUgb2YgdGhlIGNvbm5lY3RlZCBkcm9wIGxpc3RzIHdoZW4gYSBkcmFnZ2luZyBzZXF1ZW5jZSBoYXMgc3RhcnRlZC5cbiAgICogQHBhcmFtIHNpYmxpbmcgU2libGluZyBpbiB3aGljaCBkcmFnZ2luZyBoYXMgc3RhcnRlZC5cbiAgICovXG4gIF9zdGFydFJlY2VpdmluZyhzaWJsaW5nOiBEcm9wTGlzdFJlZikge1xuICAgIGNvbnN0IGFjdGl2ZVNpYmxpbmdzID0gdGhpcy5fYWN0aXZlU2libGluZ3M7XG5cbiAgICBpZiAoIWFjdGl2ZVNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgYWN0aXZlU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgdGhpcy5fY2FjaGVQYXJlbnRQb3NpdGlvbnMoKTtcbiAgICAgIHRoaXMuX2xpc3RlblRvU2Nyb2xsRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBieSBhIGNvbm5lY3RlZCBkcm9wIGxpc3Qgd2hlbiBkcmFnZ2luZyBoYXMgc3RvcHBlZC5cbiAgICogQHBhcmFtIHNpYmxpbmcgU2libGluZyB3aG9zZSBkcmFnZ2luZyBoYXMgc3RvcHBlZC5cbiAgICovXG4gIF9zdG9wUmVjZWl2aW5nKHNpYmxpbmc6IERyb3BMaXN0UmVmKSB7XG4gICAgdGhpcy5fYWN0aXZlU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgIHRoaXMuX3ZpZXdwb3J0U2Nyb2xsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGxpc3RlbmluZyB0byBzY3JvbGwgZXZlbnRzIG9uIHRoZSB2aWV3cG9ydC5cbiAgICogVXNlZCBmb3IgdXBkYXRpbmcgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9TY3JvbGxFdmVudHMoKSB7XG4gICAgdGhpcy5fdmlld3BvcnRTY3JvbGxTdWJzY3JpcHRpb24gPSB0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LnNjcm9sbC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZygpKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbERpZmZlcmVuY2UgPSB0aGlzLl9wYXJlbnRQb3NpdGlvbnMuaGFuZGxlU2Nyb2xsKGV2ZW50KTtcblxuICAgICAgICBpZiAoc2Nyb2xsRGlmZmVyZW5jZSkge1xuICAgICAgICAgIC8vIFNpbmNlIHdlIGtub3cgdGhlIGFtb3VudCB0aGF0IHRoZSB1c2VyIGhhcyBzY3JvbGxlZCB3ZSBjYW4gc2hpZnQgYWxsIG9mIHRoZVxuICAgICAgICAgIC8vIGNsaWVudCByZWN0YW5nbGVzIG91cnNlbHZlcy4gVGhpcyBpcyBjaGVhcGVyIHRoYW4gcmUtbWVhc3VyaW5nIGV2ZXJ5dGhpbmcgYW5kXG4gICAgICAgICAgLy8gd2UgY2FuIGF2b2lkIGluY29uc2lzdGVudCBiZWhhdmlvciB3aGVyZSB3ZSBtaWdodCBiZSBtZWFzdXJpbmcgdGhlIGVsZW1lbnQgYmVmb3JlXG4gICAgICAgICAgLy8gaXRzIHBvc2l0aW9uIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgIHRoaXMuX2l0ZW1Qb3NpdGlvbnMuZm9yRWFjaCgoe2NsaWVudFJlY3R9KSA9PiB7XG4gICAgICAgICAgICBhZGp1c3RDbGllbnRSZWN0KGNsaWVudFJlY3QsIHNjcm9sbERpZmZlcmVuY2UudG9wLCBzY3JvbGxEaWZmZXJlbmNlLmxlZnQpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gV2UgbmVlZCB0d28gbG9vcHMgZm9yIHRoaXMsIGJlY2F1c2Ugd2Ugd2FudCBhbGwgb2YgdGhlIGNhY2hlZFxuICAgICAgICAgIC8vIHBvc2l0aW9ucyB0byBiZSB1cC10by1kYXRlIGJlZm9yZSB3ZSByZS1zb3J0IHRoZSBpdGVtLlxuICAgICAgICAgIHRoaXMuX2l0ZW1Qb3NpdGlvbnMuZm9yRWFjaCgoe2RyYWd9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BSZWdpc3RyeS5pc0RyYWdnaW5nKGRyYWcpKSB7XG4gICAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gcmUtc29ydCB0aGUgaXRlbSBtYW51YWxseSwgYmVjYXVzZSB0aGUgcG9pbnRlciBtb3ZlXG4gICAgICAgICAgICAgIC8vIGV2ZW50cyB3b24ndCBiZSBkaXNwYXRjaGVkIHdoaWxlIHRoZSB1c2VyIGlzIHNjcm9sbGluZy5cbiAgICAgICAgICAgICAgZHJhZy5fc29ydEZyb21MYXN0UG9pbnRlclBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1JlY2VpdmluZygpKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlUGFyZW50UG9zaXRpb25zKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGF6aWx5IHJlc29sdmVzIGFuZCByZXR1cm5zIHRoZSBzaGFkb3cgcm9vdCBvZiB0aGUgZWxlbWVudC4gV2UgZG8gdGhpcyBpbiBhIGZ1bmN0aW9uLCByYXRoZXJcbiAgICogdGhhbiBzYXZpbmcgaXQgaW4gcHJvcGVydHkgZGlyZWN0bHkgb24gaW5pdCwgYmVjYXVzZSB3ZSB3YW50IHRvIHJlc29sdmUgaXQgYXMgbGF0ZSBhcyBwb3NzaWJsZVxuICAgKiBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgZWxlbWVudCBoYXMgYmVlbiBtb3ZlZCBpbnRvIHRoZSBzaGFkb3cgRE9NLiBEb2luZyBpdCBpbnNpZGUgdGhlXG4gICAqIGNvbnN0cnVjdG9yIG1pZ2h0IGJlIHRvbyBlYXJseSBpZiB0aGUgZWxlbWVudCBpcyBpbnNpZGUgb2Ygc29tZXRoaW5nIGxpa2UgYG5nRm9yYCBvciBgbmdJZmAuXG4gICAqL1xuICBwcml2YXRlIF9nZXRTaGFkb3dSb290KCk6IERvY3VtZW50T3JTaGFkb3dSb290IHtcbiAgICBpZiAoIXRoaXMuX2NhY2hlZFNoYWRvd1Jvb3QpIHtcbiAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBfZ2V0U2hhZG93Um9vdChjb2VyY2VFbGVtZW50KHRoaXMuZWxlbWVudCkpIGFzIFNoYWRvd1Jvb3QgfCBudWxsO1xuICAgICAgdGhpcy5fY2FjaGVkU2hhZG93Um9vdCA9IHNoYWRvd1Jvb3QgfHwgdGhpcy5fZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFNoYWRvd1Jvb3Q7XG4gIH1cbn1cblxuXG4vKipcbiAqIEZpbmRzIHRoZSBpbmRleCBvZiBhbiBpdGVtIHRoYXQgbWF0Y2hlcyBhIHByZWRpY2F0ZSBmdW5jdGlvbi4gVXNlZCBhcyBhbiBlcXVpdmFsZW50XG4gKiBvZiBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgd2hpY2ggaXNuJ3QgcGFydCBvZiB0aGUgc3RhbmRhcmQgR29vZ2xlIHR5cGluZ3MuXG4gKiBAcGFyYW0gYXJyYXkgQXJyYXkgaW4gd2hpY2ggdG8gbG9vayBmb3IgbWF0Y2hlcy5cbiAqIEBwYXJhbSBwcmVkaWNhdGUgRnVuY3Rpb24gdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciBhbiBpdGVtIGlzIGEgbWF0Y2guXG4gKi9cbmZ1bmN0aW9uIGZpbmRJbmRleDxUPihhcnJheTogVFtdLFxuICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBvYmo6IFRbXSkgPT4gYm9vbGVhbik6IG51bWJlciB7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaV0sIGksIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIEluY3JlbWVudHMgdGhlIHZlcnRpY2FsIHNjcm9sbCBwb3NpdGlvbiBvZiBhIG5vZGUuXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHdob3NlIHNjcm9sbCBwb3NpdGlvbiBzaG91bGQgY2hhbmdlLlxuICogQHBhcmFtIGFtb3VudCBBbW91bnQgb2YgcGl4ZWxzIHRoYXQgdGhlIGBub2RlYCBzaG91bGQgYmUgc2Nyb2xsZWQuXG4gKi9cbmZ1bmN0aW9uIGluY3JlbWVudFZlcnRpY2FsU2Nyb2xsKG5vZGU6IEhUTUxFbGVtZW50IHwgV2luZG93LCBhbW91bnQ6IG51bWJlcikge1xuICBpZiAobm9kZSA9PT0gd2luZG93KSB7XG4gICAgKG5vZGUgYXMgV2luZG93KS5zY3JvbGxCeSgwLCBhbW91bnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIElkZWFsbHkgd2UgY291bGQgdXNlIGBFbGVtZW50LnNjcm9sbEJ5YCBoZXJlIGFzIHdlbGwsIGJ1dCBJRSBhbmQgRWRnZSBkb24ndCBzdXBwb3J0IGl0LlxuICAgIChub2RlIGFzIEhUTUxFbGVtZW50KS5zY3JvbGxUb3AgKz0gYW1vdW50O1xuICB9XG59XG5cbi8qKlxuICogSW5jcmVtZW50cyB0aGUgaG9yaXpvbnRhbCBzY3JvbGwgcG9zaXRpb24gb2YgYSBub2RlLlxuICogQHBhcmFtIG5vZGUgTm9kZSB3aG9zZSBzY3JvbGwgcG9zaXRpb24gc2hvdWxkIGNoYW5nZS5cbiAqIEBwYXJhbSBhbW91bnQgQW1vdW50IG9mIHBpeGVscyB0aGF0IHRoZSBgbm9kZWAgc2hvdWxkIGJlIHNjcm9sbGVkLlxuICovXG5mdW5jdGlvbiBpbmNyZW1lbnRIb3Jpem9udGFsU2Nyb2xsKG5vZGU6IEhUTUxFbGVtZW50IHwgV2luZG93LCBhbW91bnQ6IG51bWJlcikge1xuICBpZiAobm9kZSA9PT0gd2luZG93KSB7XG4gICAgKG5vZGUgYXMgV2luZG93KS5zY3JvbGxCeShhbW91bnQsIDApO1xuICB9IGVsc2Uge1xuICAgIC8vIElkZWFsbHkgd2UgY291bGQgdXNlIGBFbGVtZW50LnNjcm9sbEJ5YCBoZXJlIGFzIHdlbGwsIGJ1dCBJRSBhbmQgRWRnZSBkb24ndCBzdXBwb3J0IGl0LlxuICAgIChub2RlIGFzIEhUTUxFbGVtZW50KS5zY3JvbGxMZWZ0ICs9IGFtb3VudDtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgd2hldGhlciB0aGUgdmVydGljYWwgYXV0by1zY3JvbGwgZGlyZWN0aW9uIG9mIGEgbm9kZS5cbiAqIEBwYXJhbSBjbGllbnRSZWN0IERpbWVuc2lvbnMgb2YgdGhlIG5vZGUuXG4gKiBAcGFyYW0gcG9pbnRlclkgUG9zaXRpb24gb2YgdGhlIHVzZXIncyBwb2ludGVyIGFsb25nIHRoZSB5IGF4aXMuXG4gKi9cbmZ1bmN0aW9uIGdldFZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uKGNsaWVudFJlY3Q6IENsaWVudFJlY3QsIHBvaW50ZXJZOiBudW1iZXIpIHtcbiAgY29uc3Qge3RvcCwgYm90dG9tLCBoZWlnaHR9ID0gY2xpZW50UmVjdDtcbiAgY29uc3QgeVRocmVzaG9sZCA9IGhlaWdodCAqIFNDUk9MTF9QUk9YSU1JVFlfVEhSRVNIT0xEO1xuXG4gIGlmIChwb2ludGVyWSA+PSB0b3AgLSB5VGhyZXNob2xkICYmIHBvaW50ZXJZIDw9IHRvcCArIHlUaHJlc2hvbGQpIHtcbiAgICByZXR1cm4gQXV0b1Njcm9sbFZlcnRpY2FsRGlyZWN0aW9uLlVQO1xuICB9IGVsc2UgaWYgKHBvaW50ZXJZID49IGJvdHRvbSAtIHlUaHJlc2hvbGQgJiYgcG9pbnRlclkgPD0gYm90dG9tICsgeVRocmVzaG9sZCkge1xuICAgIHJldHVybiBBdXRvU2Nyb2xsVmVydGljYWxEaXJlY3Rpb24uRE9XTjtcbiAgfVxuXG4gIHJldHVybiBBdXRvU2Nyb2xsVmVydGljYWxEaXJlY3Rpb24uTk9ORTtcbn1cblxuLyoqXG4gKiBHZXRzIHdoZXRoZXIgdGhlIGhvcml6b250YWwgYXV0by1zY3JvbGwgZGlyZWN0aW9uIG9mIGEgbm9kZS5cbiAqIEBwYXJhbSBjbGllbnRSZWN0IERpbWVuc2lvbnMgb2YgdGhlIG5vZGUuXG4gKiBAcGFyYW0gcG9pbnRlclggUG9zaXRpb24gb2YgdGhlIHVzZXIncyBwb2ludGVyIGFsb25nIHRoZSB4IGF4aXMuXG4gKi9cbmZ1bmN0aW9uIGdldEhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24oY2xpZW50UmVjdDogQ2xpZW50UmVjdCwgcG9pbnRlclg6IG51bWJlcikge1xuICBjb25zdCB7bGVmdCwgcmlnaHQsIHdpZHRofSA9IGNsaWVudFJlY3Q7XG4gIGNvbnN0IHhUaHJlc2hvbGQgPSB3aWR0aCAqIFNDUk9MTF9QUk9YSU1JVFlfVEhSRVNIT0xEO1xuXG4gIGlmIChwb2ludGVyWCA+PSBsZWZ0IC0geFRocmVzaG9sZCAmJiBwb2ludGVyWCA8PSBsZWZ0ICsgeFRocmVzaG9sZCkge1xuICAgIHJldHVybiBBdXRvU2Nyb2xsSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUO1xuICB9IGVsc2UgaWYgKHBvaW50ZXJYID49IHJpZ2h0IC0geFRocmVzaG9sZCAmJiBwb2ludGVyWCA8PSByaWdodCArIHhUaHJlc2hvbGQpIHtcbiAgICByZXR1cm4gQXV0b1Njcm9sbEhvcml6b250YWxEaXJlY3Rpb24uUklHSFQ7XG4gIH1cblxuICByZXR1cm4gQXV0b1Njcm9sbEhvcml6b250YWxEaXJlY3Rpb24uTk9ORTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkaXJlY3Rpb25zIGluIHdoaWNoIGFuIGVsZW1lbnQgbm9kZSBzaG91bGQgYmUgc2Nyb2xsZWQsXG4gKiBhc3N1bWluZyB0aGF0IHRoZSB1c2VyJ3MgcG9pbnRlciBpcyBhbHJlYWR5IHdpdGhpbiBpdCBzY3JvbGxhYmxlIHJlZ2lvbi5cbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgZm9yIHdoaWNoIHdlIHNob3VsZCBjYWxjdWxhdGUgdGhlIHNjcm9sbCBkaXJlY3Rpb24uXG4gKiBAcGFyYW0gY2xpZW50UmVjdCBCb3VuZGluZyBjbGllbnQgcmVjdGFuZ2xlIG9mIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHBvaW50ZXJYIFBvc2l0aW9uIG9mIHRoZSB1c2VyJ3MgcG9pbnRlciBhbG9uZyB0aGUgeCBheGlzLlxuICogQHBhcmFtIHBvaW50ZXJZIFBvc2l0aW9uIG9mIHRoZSB1c2VyJ3MgcG9pbnRlciBhbG9uZyB0aGUgeSBheGlzLlxuICovXG5mdW5jdGlvbiBnZXRFbGVtZW50U2Nyb2xsRGlyZWN0aW9ucyhlbGVtZW50OiBIVE1MRWxlbWVudCwgY2xpZW50UmVjdDogQ2xpZW50UmVjdCwgcG9pbnRlclg6IG51bWJlcixcbiAgcG9pbnRlclk6IG51bWJlcik6IFtBdXRvU2Nyb2xsVmVydGljYWxEaXJlY3Rpb24sIEF1dG9TY3JvbGxIb3Jpem9udGFsRGlyZWN0aW9uXSB7XG4gIGNvbnN0IGNvbXB1dGVkVmVydGljYWwgPSBnZXRWZXJ0aWNhbFNjcm9sbERpcmVjdGlvbihjbGllbnRSZWN0LCBwb2ludGVyWSk7XG4gIGNvbnN0IGNvbXB1dGVkSG9yaXpvbnRhbCA9IGdldEhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24oY2xpZW50UmVjdCwgcG9pbnRlclgpO1xuICBsZXQgdmVydGljYWxTY3JvbGxEaXJlY3Rpb24gPSBBdXRvU2Nyb2xsVmVydGljYWxEaXJlY3Rpb24uTk9ORTtcbiAgbGV0IGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gPSBBdXRvU2Nyb2xsSG9yaXpvbnRhbERpcmVjdGlvbi5OT05FO1xuXG4gIC8vIE5vdGUgdGhhdCB3ZSBoZXJlIHdlIGRvIHNvbWUgZXh0cmEgY2hlY2tzIGZvciB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGFjdHVhbGx5IHNjcm9sbGFibGUgaW5cbiAgLy8gYSBjZXJ0YWluIGRpcmVjdGlvbiBhbmQgd2Ugb25seSBhc3NpZ24gdGhlIHNjcm9sbCBkaXJlY3Rpb24gaWYgaXQgaXMuIFdlIGRvIHRoaXMgc28gdGhhdCB3ZVxuICAvLyBjYW4gYWxsb3cgb3RoZXIgZWxlbWVudHMgdG8gYmUgc2Nyb2xsZWQsIGlmIHRoZSBjdXJyZW50IGVsZW1lbnQgY2FuJ3QgYmUgc2Nyb2xsZWQgYW55bW9yZS5cbiAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBzY3JvbGwgcmVnaW9ucyBvZiB0d28gc2Nyb2xsYWJsZSBlbGVtZW50cyBvdmVybGFwLlxuICBpZiAoY29tcHV0ZWRWZXJ0aWNhbCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgaWYgKGNvbXB1dGVkVmVydGljYWwgPT09IEF1dG9TY3JvbGxWZXJ0aWNhbERpcmVjdGlvbi5VUCkge1xuICAgICAgaWYgKHNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb24gPSBBdXRvU2Nyb2xsVmVydGljYWxEaXJlY3Rpb24uVVA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcCA+IGVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiA9IEF1dG9TY3JvbGxWZXJ0aWNhbERpcmVjdGlvbi5ET1dOO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb21wdXRlZEhvcml6b250YWwpIHtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuXG4gICAgaWYgKGNvbXB1dGVkSG9yaXpvbnRhbCA9PT0gQXV0b1Njcm9sbEhvcml6b250YWxEaXJlY3Rpb24uTEVGVCkge1xuICAgICAgaWYgKHNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gPSBBdXRvU2Nyb2xsSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5zY3JvbGxXaWR0aCAtIHNjcm9sbExlZnQgPiBlbGVtZW50LmNsaWVudFdpZHRoKSB7XG4gICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID0gQXV0b1Njcm9sbEhvcml6b250YWxEaXJlY3Rpb24uUklHSFQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFt2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiwgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbl07XG59XG4iXX0=