/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __values } from "tslib";
import { ElementRef } from '@angular/core';
import { ConnectedOverlayPositionChange, validateHorizontalPosition, validateVerticalPosition, } from './connected-position';
import { Subscription, Subject } from 'rxjs';
import { isElementScrolledOutsideView, isElementClippedByScrolling } from './scroll-clip';
import { coerceCssPixelValue, coerceArray } from '@angular/cdk/coercion';
// TODO: refactor clipping detection into a separate thing (part of scrolling module)
// TODO: doesn't handle both flexible width and height when it has to scroll along both axis.
/** Class to be added to the overlay bounding box. */
var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
/** Regex used to split a string on its CSS units. */
var cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var FlexibleConnectedPositionStrategy = /** @class */ (function () {
    function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */
        this._lastBoundingBoxSize = { width: 0, height: 0 };
        /** Whether the overlay was pushed in a previous positioning. */
        this._isPushed = false;
        /** Whether the overlay can be pushed on-screen on the initial open. */
        this._canPush = true;
        /** Whether the overlay can grow via flexible width/height after the initial open. */
        this._growAfterOpen = false;
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */
        this._hasFlexibleDimensions = true;
        /** Whether the overlay position is locked. */
        this._positionLocked = false;
        /** Amount of space that must be maintained between the overlay and the edge of the viewport. */
        this._viewportMargin = 0;
        /** The Scrollable containers used to check scrollable view properties on position change. */
        this._scrollables = [];
        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = [];
        /** Subject that emits whenever the position changes. */
        this._positionChanges = new Subject();
        /** Subscription to viewport size changes. */
        this._resizeSubscription = Subscription.EMPTY;
        /** Default offset for the overlay along the x axis. */
        this._offsetX = 0;
        /** Default offset for the overlay along the y axis. */
        this._offsetY = 0;
        /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */
        this._appliedPanelClasses = [];
        /** Observable sequence of position changes. */
        this.positionChanges = this._positionChanges.asObservable();
        this.setOrigin(connectedTo);
    }
    Object.defineProperty(FlexibleConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attaches this position strategy to an overlay. */
    FlexibleConnectedPositionStrategy.prototype.attach = function (overlayRef) {
        var _this = this;
        if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            _this._isInitialRender = true;
            _this.apply();
        });
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * @docs-private
     */
    FlexibleConnectedPositionStrategy.prototype.apply = function () {
        var e_1, _a, e_2, _b;
        // We shouldn't do anything if the strategy was disposed or we're on the server.
        if (this._isDisposed || !this._platform.isBrowser) {
            return;
        }
        // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the old position, in order to
        // prevent the overlay from jumping around.
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
        }
        this._clearPanelClasses();
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        // We use the viewport rect to determine whether a position would go off-screen.
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._getOriginRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        var originRect = this._originRect;
        var overlayRect = this._overlayRect;
        var viewportRect = this._viewportRect;
        // Positions where the overlay will fit with flexible dimensions.
        var flexibleFits = [];
        // Fallback if none of the preferred positions fit within the viewport.
        var fallback;
        try {
            // Go through each of the preferred positions looking for a good fit.
            // If a good fit is found, it will be applied immediately.
            for (var _c = __values(this._preferredPositions), _d = _c.next(); !_d.done; _d = _c.next()) {
                var pos = _d.value;
                // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
                var originPoint = this._getOriginPoint(originRect, pos);
                // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
                // overlay in this position. We use the top-left corner for calculations and later translate
                // this into an appropriate (top, left, bottom, right) style.
                var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
                // Calculate how well the overlay would fit into the viewport with this point.
                var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
                // If the overlay, without any further work, fits into the viewport, use this position.
                if (overlayFit.isCompletelyWithinViewport) {
                    this._isPushed = false;
                    this._applyPosition(pos, originPoint);
                    return;
                }
                // If the overlay has flexible dimensions, we can use this position
                // so long as there's enough space for the minimum dimensions.
                if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                    // Save positions where the overlay will fit with flexible dimensions. We will use these
                    // if none of the positions fit *without* flexible dimensions.
                    flexibleFits.push({
                        position: pos,
                        origin: originPoint,
                        overlayRect: overlayRect,
                        boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                    });
                    continue;
                }
                // If the current preferred position does not fit on the screen, remember the position
                // if it has more visible area on-screen than we've seen and move onto the next preferred
                // position.
                if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                    fallback = { overlayFit: overlayFit, overlayPoint: overlayPoint, originPoint: originPoint, position: pos, overlayRect: overlayRect };
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // If there are any positions where the overlay would fit with flexible dimensions, choose the
        // one that has the greatest area available modified by the position's weight
        if (flexibleFits.length) {
            var bestFit = null;
            var bestScore = -1;
            try {
                for (var flexibleFits_1 = __values(flexibleFits), flexibleFits_1_1 = flexibleFits_1.next(); !flexibleFits_1_1.done; flexibleFits_1_1 = flexibleFits_1.next()) {
                    var fit = flexibleFits_1_1.value;
                    var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
                    if (score > bestScore) {
                        bestScore = score;
                        bestFit = fit;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (flexibleFits_1_1 && !flexibleFits_1_1.done && (_b = flexibleFits_1.return)) _b.call(flexibleFits_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this._isPushed = false;
            this._applyPosition(bestFit.position, bestFit.origin);
            return;
        }
        // When none of the preferred positions fit within the viewport, take the position
        // that went off-screen the least and attempt to push it on-screen.
        if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;
            this._applyPosition(fallback.position, fallback.originPoint);
            return;
        }
        // All options for getting the overlay within the viewport have been exhausted, so go with the
        // position that went off-screen the least.
        this._applyPosition(fallback.position, fallback.originPoint);
    };
    FlexibleConnectedPositionStrategy.prototype.detach = function () {
        this._clearPanelClasses();
        this._lastPosition = null;
        this._previousPushAmount = null;
        this._resizeSubscription.unsubscribe();
    };
    /** Cleanup after the element gets destroyed. */
    FlexibleConnectedPositionStrategy.prototype.dispose = function () {
        if (this._isDisposed) {
            return;
        }
        // We can't use `_resetBoundingBoxStyles` here, because it resets
        // some properties to zero, rather than removing them.
        if (this._boundingBox) {
            extendStyles(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: '',
            });
        }
        if (this._pane) {
            this._resetOverlayElementStyles();
        }
        if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }
        this.detach();
        this._positionChanges.complete();
        this._overlayRef = this._boundingBox = null;
        this._isDisposed = true;
    };
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    FlexibleConnectedPositionStrategy.prototype.reapplyLastPosition = function () {
        if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            var lastPosition = this._lastPosition || this._preferredPositions[0];
            var originPoint = this._getOriginPoint(this._originRect, lastPosition);
            this._applyPosition(lastPosition, originPoint);
        }
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    FlexibleConnectedPositionStrategy.prototype.withScrollableContainers = function (scrollables) {
        this._scrollables = scrollables;
        return this;
    };
    /**
     * Adds new preferred positions.
     * @param positions List of positions options for this overlay.
     */
    FlexibleConnectedPositionStrategy.prototype.withPositions = function (positions) {
        this._preferredPositions = positions;
        // If the last calculated position object isn't part of the positions anymore, clear
        // it in order to avoid it being picked up if the consumer tries to re-apply.
        if (positions.indexOf(this._lastPosition) === -1) {
            this._lastPosition = null;
        }
        this._validatePositions();
        return this;
    };
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param margin Required margin between the overlay and the viewport edge in pixels.
     */
    FlexibleConnectedPositionStrategy.prototype.withViewportMargin = function (margin) {
        this._viewportMargin = margin;
        return this;
    };
    /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
    FlexibleConnectedPositionStrategy.prototype.withFlexibleDimensions = function (flexibleDimensions) {
        if (flexibleDimensions === void 0) { flexibleDimensions = true; }
        this._hasFlexibleDimensions = flexibleDimensions;
        return this;
    };
    /** Sets whether the overlay can grow after the initial open via flexible width/height. */
    FlexibleConnectedPositionStrategy.prototype.withGrowAfterOpen = function (growAfterOpen) {
        if (growAfterOpen === void 0) { growAfterOpen = true; }
        this._growAfterOpen = growAfterOpen;
        return this;
    };
    /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
    FlexibleConnectedPositionStrategy.prototype.withPush = function (canPush) {
        if (canPush === void 0) { canPush = true; }
        this._canPush = canPush;
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    FlexibleConnectedPositionStrategy.prototype.withLockedPosition = function (isLocked) {
        if (isLocked === void 0) { isLocked = true; }
        this._positionLocked = isLocked;
        return this;
    };
    /**
     * Sets the origin, relative to which to position the overlay.
     * Using an element origin is useful for building components that need to be positioned
     * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
     * used for cases like contextual menus which open relative to the user's pointer.
     * @param origin Reference to the new origin.
     */
    FlexibleConnectedPositionStrategy.prototype.setOrigin = function (origin) {
        this._origin = origin;
        return this;
    };
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param offset New offset in the X axis.
     */
    FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetX = function (offset) {
        this._offsetX = offset;
        return this;
    };
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param offset New offset in the Y axis.
     */
    FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetY = function (offset) {
        this._offsetY = offset;
        return this;
    };
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     */
    FlexibleConnectedPositionStrategy.prototype.withTransformOriginOn = function (selector) {
        this._transformOriginSelector = selector;
        return this;
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     */
    FlexibleConnectedPositionStrategy.prototype._getOriginPoint = function (originRect, pos) {
        var x;
        if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + (originRect.width / 2);
        }
        else {
            var startX = this._isRtl() ? originRect.right : originRect.left;
            var endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
        }
        var y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     */
    FlexibleConnectedPositionStrategy.prototype._getOverlayPoint = function (originPoint, overlayRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the
        // potential overlay position relative to the origin point.
        var overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        var overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY,
        };
    };
    /** Gets how well an overlay at the given point will fit within the viewport. */
    FlexibleConnectedPositionStrategy.prototype._getOverlayFit = function (point, overlay, viewport, position) {
        var x = point.x, y = point.y;
        var offsetX = this._getOffset(position, 'x');
        var offsetY = this._getOffset(position, 'y');
        // Account for the offsets since they could push the overlay out of the viewport.
        if (offsetX) {
            x += offsetX;
        }
        if (offsetY) {
            y += offsetY;
        }
        // How much the overlay would overflow at this position, on each side.
        var leftOverflow = 0 - x;
        var rightOverflow = (x + overlay.width) - viewport.width;
        var topOverflow = 0 - y;
        var bottomOverflow = (y + overlay.height) - viewport.height;
        // Visible parts of the element on each axis.
        var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        var visibleArea = visibleWidth * visibleHeight;
        return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: (overlay.width * overlay.height) === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width,
        };
    };
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param fit How well the overlay fits in the viewport at some position.
     * @param point The (x, y) coordinates of the overlat at some position.
     * @param viewport The geometry of the viewport.
     */
    FlexibleConnectedPositionStrategy.prototype._canFitWithFlexibleDimensions = function (fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
            var availableHeight = viewport.bottom - point.y;
            var availableWidth = viewport.right - point.x;
            var minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
            var minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
            var verticalFit = fit.fitsInViewportVertically ||
                (minHeight != null && minHeight <= availableHeight);
            var horizontalFit = fit.fitsInViewportHorizontally ||
                (minWidth != null && minWidth <= availableWidth);
            return verticalFit && horizontalFit;
        }
        return false;
    };
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param start Starting point from which the overlay is pushed.
     * @param overlay Dimensions of the overlay.
     * @param scrollPosition Current viewport scroll position.
     * @returns The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    FlexibleConnectedPositionStrategy.prototype._pushOverlayOnScreen = function (start, overlay, scrollPosition) {
        // If the position is locked and we've pushed the overlay already, reuse the previous push
        // amount, rather than pushing it again. If we were to continue pushing, the element would
        // remain in the viewport, which goes against the expectations when position locking is enabled.
        if (this._previousPushAmount && this._positionLocked) {
            return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
            };
        }
        var viewport = this._viewportRect;
        // Determine how much the overlay goes outside the viewport on each
        // side, which we'll use to decide which direction to push it.
        var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
        var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
        var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
        // Amount by which to push the overlay in each axis such that it remains on-screen.
        var pushX = 0;
        var pushY = 0;
        // If the overlay fits completely within the bounds of the viewport, push it from whichever
        // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
        // viewport and allow for the trailing end of the overlay to go out of bounds.
        if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
        }
        else {
            pushX = start.x < this._viewportMargin ? (viewport.left - scrollPosition.left) - start.x : 0;
        }
        if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
        }
        else {
            pushY = start.y < this._viewportMargin ? (viewport.top - scrollPosition.top) - start.y : 0;
        }
        this._previousPushAmount = { x: pushX, y: pushY };
        return {
            x: start.x + pushX,
            y: start.y + pushY,
        };
    };
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @param position The position preference
     * @param originPoint The point on the origin element where the overlay is connected.
     */
    FlexibleConnectedPositionStrategy.prototype._applyPosition = function (position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
        }
        // Save the last connected position in case the position needs to be re-calculated.
        this._lastPosition = position;
        // Notify that the position has been changed along with its change properties.
        // We only emit if we've got any subscriptions, because the scroll visibility
        // calculcations can be somewhat expensive.
        if (this._positionChanges.observers.length) {
            var scrollableViewProperties = this._getScrollVisibility();
            var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);
            this._positionChanges.next(changeEvent);
        }
        this._isInitialRender = false;
    };
    /** Sets the transform origin based on the configured selector and the passed-in position.  */
    FlexibleConnectedPositionStrategy.prototype._setTransformOrigin = function (position) {
        if (!this._transformOriginSelector) {
            return;
        }
        var elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
        var xOrigin;
        var yOrigin = position.overlayY;
        if (position.overlayX === 'center') {
            xOrigin = 'center';
        }
        else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
        }
        else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
        }
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = xOrigin + " " + yOrigin;
        }
    };
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     */
    FlexibleConnectedPositionStrategy.prototype._calculateBoundingBoxRect = function (origin, position) {
        var viewport = this._viewportRect;
        var isRtl = this._isRtl();
        var height, top, bottom;
        if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
        }
        else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
        }
        else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.
            var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            var previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;
            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - (previousHeight / 2);
            }
        }
        // The overlay is opening 'right-ward' (the content flows to the right).
        var isBoundedByRightViewportEdge = (position.overlayX === 'start' && !isRtl) ||
            (position.overlayX === 'end' && isRtl);
        // The overlay is opening 'left-ward' (the content flows to the left).
        var isBoundedByLeftViewportEdge = (position.overlayX === 'end' && !isRtl) ||
            (position.overlayX === 'start' && isRtl);
        var width, left, right;
        if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin;
            width = origin.x - this._viewportMargin;
        }
        else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
        }
        else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.
            var smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            var previousWidth = this._lastBoundingBoxSize.width;
            width = smallestDistanceToViewportEdge * 2;
            left = origin.x - smallestDistanceToViewportEdge;
            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - (previousWidth / 2);
            }
        }
        return { top: top, left: left, bottom: bottom, right: right, width: width, height: height };
    };
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param origin The point on the origin element where the overlay is connected.
     * @param position The position preference
     */
    FlexibleConnectedPositionStrategy.prototype._setBoundingBoxStyles = function (origin, position) {
        var boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        // It's weird if the overlay *grows* while scrolling, so we take the last size into account
        // when applying a new size.
        if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        var styles = {};
        if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
            styles.width = styles.height = '100%';
        }
        else {
            var maxHeight = this._overlayRef.getConfig().maxHeight;
            var maxWidth = this._overlayRef.getConfig().maxWidth;
            styles.height = coerceCssPixelValue(boundingBoxRect.height);
            styles.top = coerceCssPixelValue(boundingBoxRect.top);
            styles.bottom = coerceCssPixelValue(boundingBoxRect.bottom);
            styles.width = coerceCssPixelValue(boundingBoxRect.width);
            styles.left = coerceCssPixelValue(boundingBoxRect.left);
            styles.right = coerceCssPixelValue(boundingBoxRect.right);
            // Push the pane content towards the proper direction.
            if (position.overlayX === 'center') {
                styles.alignItems = 'center';
            }
            else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }
            if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
            }
            else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }
            if (maxHeight) {
                styles.maxHeight = coerceCssPixelValue(maxHeight);
            }
            if (maxWidth) {
                styles.maxWidth = coerceCssPixelValue(maxWidth);
            }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(this._boundingBox.style, styles);
    };
    /** Resets the styles for the bounding box so that a new positioning can be computed. */
    FlexibleConnectedPositionStrategy.prototype._resetBoundingBoxStyles = function () {
        extendStyles(this._boundingBox.style, {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
        });
    };
    /** Resets the styles for the overlay pane so that a new positioning can be computed. */
    FlexibleConnectedPositionStrategy.prototype._resetOverlayElementStyles = function () {
        extendStyles(this._pane.style, {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: '',
        });
    };
    /** Sets positioning styles to the overlay element. */
    FlexibleConnectedPositionStrategy.prototype._setOverlayElementStyles = function (originPoint, position) {
        var styles = {};
        var hasExactPosition = this._hasExactPosition();
        var hasFlexibleDimensions = this._hasFlexibleDimensions;
        var config = this._overlayRef.getConfig();
        if (hasExactPosition) {
            var scrollPosition = this._viewportRuler.getViewportScrollPosition();
            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        }
        else {
            styles.position = 'static';
        }
        // Use a transform to apply the offsets. We do this because the `center` positions rely on
        // being in the normal flex flow and setting a `top` / `left` at all will completely throw
        // off the position. We also can't use margins, because they won't have an effect in some
        // cases where the element doesn't have anything to "push off of". Finally, this works
        // better both with flexible and non-flexible positioning.
        var transformString = '';
        var offsetX = this._getOffset(position, 'x');
        var offsetY = this._getOffset(position, 'y');
        if (offsetX) {
            transformString += "translateX(" + offsetX + "px) ";
        }
        if (offsetY) {
            transformString += "translateY(" + offsetY + "px)";
        }
        styles.transform = transformString.trim();
        // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
        // we need these values to both be set to "100%" for the automatic flexible sizing to work.
        // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
        // Note that this doesn't apply when we have an exact position, in which case we do want to
        // apply them because they'll be cleared from the bounding box.
        if (config.maxHeight) {
            if (hasExactPosition) {
                styles.maxHeight = coerceCssPixelValue(config.maxHeight);
            }
            else if (hasFlexibleDimensions) {
                styles.maxHeight = '';
            }
        }
        if (config.maxWidth) {
            if (hasExactPosition) {
                styles.maxWidth = coerceCssPixelValue(config.maxWidth);
            }
            else if (hasFlexibleDimensions) {
                styles.maxWidth = '';
            }
        }
        extendStyles(this._pane.style, styles);
    };
    /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
    FlexibleConnectedPositionStrategy.prototype._getExactOverlayY = function (position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the
        // preferred position has changed since the last `apply`.
        var styles = { top: '', bottom: '' };
        var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top;
        // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
        // autocomplete), mobile browsers will shift everything in order to put the input in the middle
        // of the screen and to make space for the virtual keyboard. We need to account for this offset,
        // otherwise our positioning will be thrown off.
        overlayPoint.y -= virtualKeyboardOffset;
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear
        // above or below the origin and the direction in which the element will expand.
        if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.
            var documentHeight = this._document.documentElement.clientHeight;
            styles.bottom = documentHeight - (overlayPoint.y + this._overlayRect.height) + "px";
        }
        else {
            styles.top = coerceCssPixelValue(overlayPoint.y);
        }
        return styles;
    };
    /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
    FlexibleConnectedPositionStrategy.prototype._getExactOverlayX = function (position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        var styles = { left: '', right: '' };
        var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        var horizontalStyleProperty;
        if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        if (horizontalStyleProperty === 'right') {
            var documentWidth = this._document.documentElement.clientWidth;
            styles.right = documentWidth - (overlayPoint.x + this._overlayRect.width) + "px";
        }
        else {
            styles.left = coerceCssPixelValue(overlayPoint.x);
        }
        return styles;
    };
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     */
    FlexibleConnectedPositionStrategy.prototype._getScrollVisibility = function () {
        // Note: needs fresh rects since the position could've changed.
        var originBounds = this._getOriginRect();
        var overlayBounds = this._pane.getBoundingClientRect();
        // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
        // every time, we should be able to use the scrollTop of the containers if the size of those
        // containers hasn't changed.
        var scrollContainerBounds = this._scrollables.map(function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
        };
    };
    /** Subtracts the amount that an element is overflowing on an axis from its length. */
    FlexibleConnectedPositionStrategy.prototype._subtractOverflows = function (length) {
        var overflows = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            overflows[_i - 1] = arguments[_i];
        }
        return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    };
    /** Narrows the given viewport rect by the current _viewportMargin. */
    FlexibleConnectedPositionStrategy.prototype._getNarrowedViewportRect = function () {
        // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
        // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
        // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
        // and `innerHeight` that do. This is necessary, because the overlay container uses
        // 100% `width` and `height` which don't include the scrollbar either.
        var width = this._document.documentElement.clientWidth;
        var height = this._document.documentElement.clientHeight;
        var scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - (2 * this._viewportMargin),
            height: height - (2 * this._viewportMargin),
        };
    };
    /** Whether the we're dealing with an RTL context */
    FlexibleConnectedPositionStrategy.prototype._isRtl = function () {
        return this._overlayRef.getDirection() === 'rtl';
    };
    /** Determines whether the overlay uses exact or flexible positioning. */
    FlexibleConnectedPositionStrategy.prototype._hasExactPosition = function () {
        return !this._hasFlexibleDimensions || this._isPushed;
    };
    /** Retrieves the offset of a position along the x or y axis. */
    FlexibleConnectedPositionStrategy.prototype._getOffset = function (position, axis) {
        if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
    };
    /** Validates that the current position match the expected values. */
    FlexibleConnectedPositionStrategy.prototype._validatePositions = function () {
        if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
        }
        // TODO(crisbeto): remove these once Angular's template type
        // checking is advanced enough to catch these cases.
        this._preferredPositions.forEach(function (pair) {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
        });
    };
    /** Adds a single CSS class or an array of classes on the overlay panel. */
    FlexibleConnectedPositionStrategy.prototype._addPanelClasses = function (cssClasses) {
        var _this = this;
        if (this._pane) {
            coerceArray(cssClasses).forEach(function (cssClass) {
                if (cssClass !== '' && _this._appliedPanelClasses.indexOf(cssClass) === -1) {
                    _this._appliedPanelClasses.push(cssClass);
                    _this._pane.classList.add(cssClass);
                }
            });
        }
    };
    /** Clears the classes that the position strategy has applied from the overlay panel. */
    FlexibleConnectedPositionStrategy.prototype._clearPanelClasses = function () {
        var _this = this;
        if (this._pane) {
            this._appliedPanelClasses.forEach(function (cssClass) {
                _this._pane.classList.remove(cssClass);
            });
            this._appliedPanelClasses = [];
        }
    };
    /** Returns the ClientRect of the current origin. */
    FlexibleConnectedPositionStrategy.prototype._getOriginRect = function () {
        var origin = this._origin;
        if (origin instanceof ElementRef) {
            return origin.nativeElement.getBoundingClientRect();
        }
        // Check for Element so SVG elements are also supported.
        if (origin instanceof Element) {
            return origin.getBoundingClientRect();
        }
        var width = origin.width || 0;
        var height = origin.height || 0;
        // If the origin is a point, return a client rect as if it was a 0x0 element at the point.
        return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height: height,
            width: width
        };
    };
    return FlexibleConnectedPositionStrategy;
}());
export { FlexibleConnectedPositionStrategy };
/** Shallow-extends a stylesheet object with another stylesheet object. */
function extendStyles(destination, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            destination[key] = source[key];
        }
    }
    return destination;
}
/**
 * Extracts the pixel value as a number from a value, if it's a number
 * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
 */
function getPixelValue(input) {
    if (typeof input !== 'number' && input != null) {
        var _a = __read(input.split(cssUnitPattern), 2), value = _a[0], units = _a[1];
        return (!units || units === 'px') ? parseFloat(value) : null;
    }
    return input || null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleGlibGUtY29ubmVjdGVkLXBvc2l0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Bvc2l0aW9uL2ZsZXhpYmxlLWNvbm5lY3RlZC1wb3NpdGlvbi1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBR0gsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQ0wsOEJBQThCLEVBRzlCLDBCQUEwQixFQUMxQix3QkFBd0IsR0FDekIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQWEsWUFBWSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV2RCxPQUFPLEVBQUMsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBSXZFLHFGQUFxRjtBQUNyRiw2RkFBNkY7QUFFN0YscURBQXFEO0FBQ3JELElBQU0sZ0JBQWdCLEdBQUcsNkNBQTZDLENBQUM7QUFFdkUscURBQXFEO0FBQ3JELElBQU0sY0FBYyxHQUFHLGVBQWUsQ0FBQztBQVF2Qzs7Ozs7O0dBTUc7QUFDSDtJQTJGRSwyQ0FDSSxXQUFvRCxFQUFVLGNBQTZCLEVBQ25GLFNBQW1CLEVBQVUsU0FBbUIsRUFDaEQsaUJBQW1DO1FBRm1CLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQ25GLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ2hELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUF2Ri9DLDBGQUEwRjtRQUNsRix5QkFBb0IsR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO1FBRXJELGdFQUFnRTtRQUN4RCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTFCLHVFQUF1RTtRQUMvRCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXhCLHFGQUFxRjtRQUM3RSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUUvQiw0RkFBNEY7UUFDcEYsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBRXRDLDhDQUE4QztRQUN0QyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQVdoQyxnR0FBZ0c7UUFDeEYsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFFNUIsNkZBQTZGO1FBQ3JGLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUUzQyx5RUFBeUU7UUFDekUsd0JBQW1CLEdBQTZCLEVBQUUsQ0FBQztRQW9CbkQsd0RBQXdEO1FBQ2hELHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFrQyxDQUFDO1FBRXpFLDZDQUE2QztRQUNyQyx3QkFBbUIsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBRWpELHVEQUF1RDtRQUMvQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLHVEQUF1RDtRQUMvQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBS3JCLGtHQUFrRztRQUMxRix5QkFBb0IsR0FBYSxFQUFFLENBQUM7UUFLNUMsK0NBQStDO1FBQy9DLG9CQUFlLEdBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBV3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVRELHNCQUFJLHdEQUFTO1FBRGIseUVBQXlFO2FBQ3pFO1lBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFTRCxxREFBcUQ7SUFDckQsa0RBQU0sR0FBTixVQUFPLFVBQTRCO1FBQW5DLGlCQXVCQztRQXRCQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdkQsTUFBTSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztTQUN6RTtRQUVELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ2hFLDhFQUE4RTtZQUM5RSxtRkFBbUY7WUFDbkYsbUVBQW1FO1lBQ25FLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILGlEQUFLLEdBQUw7O1FBQ0UsZ0ZBQWdGO1FBQ2hGLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ2pELE9BQU87U0FDUjtRQUVELHNGQUFzRjtRQUN0RixvRkFBb0Y7UUFDcEYsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRS9CLHlGQUF5RjtRQUN6RixzQ0FBc0M7UUFDdEMsZ0ZBQWdGO1FBQ2hGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFdkQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFeEMsaUVBQWlFO1FBQ2pFLElBQU0sWUFBWSxHQUFrQixFQUFFLENBQUM7UUFFdkMsdUVBQXVFO1FBQ3ZFLElBQUksUUFBc0MsQ0FBQzs7WUFFM0MscUVBQXFFO1lBQ3JFLDBEQUEwRDtZQUMxRCxLQUFnQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsbUJBQW1CLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXJDLElBQUksR0FBRyxXQUFBO2dCQUNWLGlGQUFpRjtnQkFDakYsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRXhELDRGQUE0RjtnQkFDNUYsNEZBQTRGO2dCQUM1Riw2REFBNkQ7Z0JBQzdELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUV4RSw4RUFBOEU7Z0JBQzlFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRW5GLHVGQUF1RjtnQkFDdkYsSUFBSSxVQUFVLENBQUMsMEJBQTBCLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDdEMsT0FBTztpQkFDUjtnQkFFRCxtRUFBbUU7Z0JBQ25FLDhEQUE4RDtnQkFDOUQsSUFBSSxJQUFJLENBQUMsNkJBQTZCLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsRUFBRTtvQkFDOUUsd0ZBQXdGO29CQUN4Riw4REFBOEQ7b0JBQzlELFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLFFBQVEsRUFBRSxHQUFHO3dCQUNiLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLGFBQUE7d0JBQ1gsZUFBZSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDO3FCQUNsRSxDQUFDLENBQUM7b0JBRUgsU0FBUztpQkFDVjtnQkFFRCxzRkFBc0Y7Z0JBQ3RGLHlGQUF5RjtnQkFDekYsWUFBWTtnQkFDWixJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUU7b0JBQ3pFLFFBQVEsR0FBRyxFQUFDLFVBQVUsWUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsV0FBVyxhQUFBLEVBQUMsQ0FBQztpQkFDaEY7YUFDRjs7Ozs7Ozs7O1FBRUQsOEZBQThGO1FBQzlGLDZFQUE2RTtRQUM3RSxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDdkIsSUFBSSxPQUFPLEdBQXVCLElBQUksQ0FBQztZQUN2QyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ25CLEtBQWtCLElBQUEsaUJBQUEsU0FBQSxZQUFZLENBQUEsMENBQUEsb0VBQUU7b0JBQTNCLElBQU0sR0FBRyx5QkFBQTtvQkFDWixJQUFNLEtBQUssR0FDUCxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN4RixJQUFJLEtBQUssR0FBRyxTQUFTLEVBQUU7d0JBQ3JCLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ2xCLE9BQU8sR0FBRyxHQUFHLENBQUM7cUJBQ2Y7aUJBQ0Y7Ozs7Ozs7OztZQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBUSxDQUFDLFFBQVEsRUFBRSxPQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsT0FBTztTQUNSO1FBRUQsa0ZBQWtGO1FBQ2xGLG1FQUFtRTtRQUNuRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsOEZBQThGO1lBQzlGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUyxDQUFDLFFBQVEsRUFBRSxRQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0QsT0FBTztTQUNSO1FBRUQsOEZBQThGO1FBQzlGLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxrREFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELGdEQUFnRDtJQUNoRCxtREFBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUVELGlFQUFpRTtRQUNqRSxzREFBc0Q7UUFDdEQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRTtnQkFDcEMsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsY0FBYyxFQUFFLEVBQUU7YUFDSSxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztTQUNuQztRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILCtEQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUVyRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFekUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9FQUF3QixHQUF4QixVQUF5QixXQUE0QjtRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSCx5REFBYSxHQUFiLFVBQWMsU0FBOEI7UUFDMUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztRQUVyQyxvRkFBb0Y7UUFDcEYsNkVBQTZFO1FBQzdFLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSCw4REFBa0IsR0FBbEIsVUFBbUIsTUFBYztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxpR0FBaUc7SUFDakcsa0VBQXNCLEdBQXRCLFVBQXVCLGtCQUF5QjtRQUF6QixtQ0FBQSxFQUFBLHlCQUF5QjtRQUM5QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsa0JBQWtCLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMEZBQTBGO0lBQzFGLDZEQUFpQixHQUFqQixVQUFrQixhQUFvQjtRQUFwQiw4QkFBQSxFQUFBLG9CQUFvQjtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw4RkFBOEY7SUFDOUYsb0RBQVEsR0FBUixVQUFTLE9BQWM7UUFBZCx3QkFBQSxFQUFBLGNBQWM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw4REFBa0IsR0FBbEIsVUFBbUIsUUFBZTtRQUFmLHlCQUFBLEVBQUEsZUFBZTtRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxxREFBUyxHQUFULFVBQVUsTUFBK0M7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsOERBQWtCLEdBQWxCLFVBQW1CLE1BQWM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsOERBQWtCLEdBQWxCLFVBQW1CLE1BQWM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILGlFQUFxQixHQUFyQixVQUFzQixRQUFnQjtRQUNwQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0ssMkRBQWUsR0FBdkIsVUFBd0IsVUFBc0IsRUFBRSxHQUFzQjtRQUNwRSxJQUFJLENBQVMsQ0FBQztRQUNkLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDM0IsdURBQXVEO1lBQ3ZELHVEQUF1RDtZQUN2RCxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNsRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDaEUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUM1QztRQUVELElBQUksQ0FBUyxDQUFDO1FBQ2QsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLFFBQVEsRUFBRTtZQUMzQixDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNMLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUMvRDtRQUVELE9BQU8sRUFBQyxDQUFDLEdBQUEsRUFBRSxDQUFDLEdBQUEsRUFBQyxDQUFDO0lBQ2hCLENBQUM7SUFHRDs7O09BR0c7SUFDSyw0REFBZ0IsR0FBeEIsVUFDSSxXQUFrQixFQUNsQixXQUF1QixFQUN2QixHQUFzQjtRQUV4QixpRUFBaUU7UUFDakUsMkRBQTJEO1FBQzNELElBQUksYUFBcUIsQ0FBQztRQUMxQixJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksUUFBUSxFQUFFO1lBQzVCLGFBQWEsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO2FBQU0sSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUNuQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0wsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDeEQ7UUFFRCxJQUFJLGFBQXFCLENBQUM7UUFDMUIsSUFBSSxHQUFHLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBRTtZQUM1QixhQUFhLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0wsYUFBYSxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNqRTtRQUVELHlDQUF5QztRQUN6QyxPQUFPO1lBQ0wsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsYUFBYTtZQUNoQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxhQUFhO1NBQ2pDLENBQUM7SUFDSixDQUFDO0lBRUQsZ0ZBQWdGO0lBQ3hFLDBEQUFjLEdBQXRCLFVBQXVCLEtBQVksRUFBRSxPQUFtQixFQUFFLFFBQW9CLEVBQzVFLFFBQTJCO1FBRXRCLElBQUEsV0FBQyxFQUFFLFdBQUMsQ0FBVTtRQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU3QyxpRkFBaUY7UUFDakYsSUFBSSxPQUFPLEVBQUU7WUFDWCxDQUFDLElBQUksT0FBTyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLENBQUMsSUFBSSxPQUFPLENBQUM7U0FDZDtRQUVELHNFQUFzRTtRQUN0RSxJQUFJLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3pELElBQUksV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFNUQsNkNBQTZDO1FBQzdDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDekYsSUFBSSxXQUFXLEdBQUcsWUFBWSxHQUFHLGFBQWEsQ0FBQztRQUUvQyxPQUFPO1lBQ0wsV0FBVyxhQUFBO1lBQ1gsMEJBQTBCLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXO1lBQzVFLHdCQUF3QixFQUFFLGFBQWEsS0FBSyxPQUFPLENBQUMsTUFBTTtZQUMxRCwwQkFBMEIsRUFBRSxZQUFZLElBQUksT0FBTyxDQUFDLEtBQUs7U0FDMUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHlFQUE2QixHQUFyQyxVQUFzQyxHQUFlLEVBQUUsS0FBWSxFQUFFLFFBQW9CO1FBQ3ZGLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEUsSUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdEUsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLHdCQUF3QjtnQkFDNUMsQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxlQUFlLENBQUMsQ0FBQztZQUN4RCxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsMEJBQTBCO2dCQUNoRCxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLGNBQWMsQ0FBQyxDQUFDO1lBRXJELE9BQU8sV0FBVyxJQUFJLGFBQWEsQ0FBQztTQUNyQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSyxnRUFBb0IsR0FBNUIsVUFBNkIsS0FBWSxFQUNaLE9BQW1CLEVBQ25CLGNBQXNDO1FBQ2pFLDBGQUEwRjtRQUMxRiwwRkFBMEY7UUFDMUYsZ0dBQWdHO1FBQ2hHLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEQsT0FBTztnQkFDTCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDeEMsQ0FBQztTQUNIO1FBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUVwQyxtRUFBbUU7UUFDbkUsOERBQThEO1FBQzlELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFaEYsbUZBQW1GO1FBQ25GLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLDJGQUEyRjtRQUMzRix5RkFBeUY7UUFDekYsOEVBQThFO1FBQzlFLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ25DLEtBQUssR0FBRyxZQUFZLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDeEM7YUFBTTtZQUNMLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDckMsS0FBSyxHQUFHLFdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUY7UUFFRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUVoRCxPQUFPO1lBQ0wsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSztZQUNsQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLDBEQUFjLEdBQXRCLFVBQXVCLFFBQTJCLEVBQUUsV0FBa0I7UUFDcEUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QztRQUVELG1GQUFtRjtRQUNuRixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUU5Qiw4RUFBOEU7UUFDOUUsNkVBQTZFO1FBQzdFLDJDQUEyQztRQUMzQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzFDLElBQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDN0QsSUFBTSxXQUFXLEdBQUcsSUFBSSw4QkFBOEIsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztZQUMzRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsOEZBQThGO0lBQ3RGLCtEQUFtQixHQUEzQixVQUE0QixRQUEyQjtRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUVELElBQU0sUUFBUSxHQUNWLElBQUksQ0FBQyxZQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdkUsSUFBSSxPQUFvQyxDQUFDO1FBQ3pDLElBQUksT0FBTyxHQUFnQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRTdELElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDbEMsT0FBTyxHQUFHLFFBQVEsQ0FBQztTQUNwQjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3hCLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDNUQ7YUFBTTtZQUNMLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDNUQ7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBTSxPQUFPLFNBQUksT0FBUyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0sscUVBQXlCLEdBQWpDLFVBQWtDLE1BQWEsRUFBRSxRQUEyQjtRQUMxRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3BDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QixJQUFJLE1BQWMsRUFBRSxHQUFXLEVBQUUsTUFBYyxDQUFDO1FBRWhELElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDL0IsK0VBQStFO1lBQy9FLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDdkQ7YUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3pDLHlGQUF5RjtZQUN6Rix3RkFBd0Y7WUFDeEYsaUZBQWlGO1lBQ2pGLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDL0QsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDMUQ7YUFBTTtZQUNMLHFGQUFxRjtZQUNyRixxRkFBcUY7WUFDckYsc0ZBQXNGO1lBQ3RGLDZCQUE2QjtZQUM3QixJQUFNLDhCQUE4QixHQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsRSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1lBRXhELE1BQU0sR0FBRyw4QkFBOEIsR0FBRyxDQUFDLENBQUM7WUFDNUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsOEJBQThCLENBQUM7WUFFaEQsSUFBSSxNQUFNLEdBQUcsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDN0UsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDRjtRQUVELHdFQUF3RTtRQUN4RSxJQUFNLDRCQUE0QixHQUM5QixDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUM7UUFFM0Msc0VBQXNFO1FBQ3RFLElBQU0sMkJBQTJCLEdBQzdCLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdkMsQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztRQUU3QyxJQUFJLEtBQWEsRUFBRSxJQUFZLEVBQUUsS0FBYSxDQUFDO1FBRS9DLElBQUksMkJBQTJCLEVBQUU7WUFDL0IsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3pELEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDekM7YUFBTSxJQUFJLDRCQUE0QixFQUFFO1lBQ3ZDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLHNGQUFzRjtZQUN0RixxRkFBcUY7WUFDckYscUZBQXFGO1lBQ3JGLDhCQUE4QjtZQUM5QixJQUFNLDhCQUE4QixHQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO1lBRXRELEtBQUssR0FBRyw4QkFBOEIsR0FBRyxDQUFDLENBQUM7WUFDM0MsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsOEJBQThCLENBQUM7WUFFakQsSUFBSSxLQUFLLEdBQUcsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDM0UsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDRjtRQUVELE9BQU8sRUFBQyxHQUFHLEVBQUUsR0FBSSxFQUFFLElBQUksRUFBRSxJQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU8sRUFBRSxLQUFLLEVBQUUsS0FBTSxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFDLENBQUM7SUFDakYsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLGlFQUFxQixHQUE3QixVQUE4QixNQUFhLEVBQUUsUUFBMkI7UUFDdEUsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUV6RSwyRkFBMkY7UUFDM0YsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2xELGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RixlQUFlLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUY7UUFFRCxJQUFNLE1BQU0sR0FBRyxFQUF5QixDQUFDO1FBRXpDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDNUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUMvQixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUN2RSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUN6RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUV2RCxNQUFNLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUMsR0FBRyxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUxRCxzREFBc0Q7WUFDdEQsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDbEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDN0U7WUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUNsQyxNQUFNLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxNQUFNLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQzthQUNwRjtZQUVELElBQUksU0FBUyxFQUFFO2dCQUNiLE1BQU0sQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbkQ7WUFFRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixNQUFNLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7UUFFRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZUFBZSxDQUFDO1FBRTVDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsd0ZBQXdGO0lBQ2hGLG1FQUF1QixHQUEvQjtRQUNFLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBYSxDQUFDLEtBQUssRUFBRTtZQUNyQyxHQUFHLEVBQUUsR0FBRztZQUNSLElBQUksRUFBRSxHQUFHO1lBQ1QsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsR0FBRztZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEVBQUU7WUFDVCxVQUFVLEVBQUUsRUFBRTtZQUNkLGNBQWMsRUFBRSxFQUFFO1NBQ0ksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx3RkFBd0Y7SUFDaEYsc0VBQTBCLEdBQWxDO1FBQ0UsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQzdCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsRUFBRTtTQUNTLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0RBQXNEO0lBQzlDLG9FQUF3QixHQUFoQyxVQUFpQyxXQUFrQixFQUFFLFFBQTJCO1FBQzlFLElBQU0sTUFBTSxHQUFHLEVBQXlCLENBQUM7UUFDekMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNsRCxJQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztRQUMxRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRTVDLElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBQ3ZFLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNwRixZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDckY7YUFBTTtZQUNMLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzVCO1FBRUQsMEZBQTBGO1FBQzFGLDBGQUEwRjtRQUMxRix5RkFBeUY7UUFDekYsc0ZBQXNGO1FBQ3RGLDBEQUEwRDtRQUMxRCxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFN0MsSUFBSSxPQUFPLEVBQUU7WUFDWCxlQUFlLElBQUksZ0JBQWMsT0FBTyxTQUFNLENBQUM7U0FDaEQ7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLGVBQWUsSUFBSSxnQkFBYyxPQUFPLFFBQUssQ0FBQztTQUMvQztRQUVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTFDLDZGQUE2RjtRQUM3RiwyRkFBMkY7UUFDM0YsNEZBQTRGO1FBQzVGLDJGQUEyRjtRQUMzRiwrREFBK0Q7UUFDL0QsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3BCLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3BCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEO2lCQUFNLElBQUkscUJBQXFCLEVBQUU7Z0JBQ2hDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEQ7aUJBQU0sSUFBSSxxQkFBcUIsRUFBRTtnQkFDaEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZ0dBQWdHO0lBQ3hGLDZEQUFpQixHQUF6QixVQUEwQixRQUEyQixFQUMzQixXQUFrQixFQUNsQixjQUFzQztRQUM5RCwyREFBMkQ7UUFDM0QseURBQXlEO1FBQ3pELElBQUksTUFBTSxHQUFHLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUF3QixDQUFDO1FBQzFELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVuRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMzRjtRQUVELElBQUkscUJBQXFCLEdBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO1FBRTdFLDRGQUE0RjtRQUM1RiwrRkFBK0Y7UUFDL0YsZ0dBQWdHO1FBQ2hHLGdEQUFnRDtRQUNoRCxZQUFZLENBQUMsQ0FBQyxJQUFJLHFCQUFxQixDQUFDO1FBRXhDLHVGQUF1RjtRQUN2RixnRkFBZ0Y7UUFDaEYsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNsQyw2RUFBNkU7WUFDN0UsdURBQXVEO1lBQ3ZELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZ0IsQ0FBQyxZQUFZLENBQUM7WUFDcEUsTUFBTSxDQUFDLE1BQU0sR0FBTSxjQUFjLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQUksQ0FBQztTQUNyRjthQUFNO1lBQ0wsTUFBTSxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0dBQWdHO0lBQ3hGLDZEQUFpQixHQUF6QixVQUEwQixRQUEyQixFQUMzQixXQUFrQixFQUNsQixjQUFzQztRQUM5RCxrRkFBa0Y7UUFDbEYsa0NBQWtDO1FBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUF3QixDQUFDO1FBQzFELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVuRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMzRjtRQUVELGdHQUFnRztRQUNoRywwRkFBMEY7UUFDMUYsMkZBQTJGO1FBQzNGLHlCQUF5QjtRQUN6QixJQUFJLHVCQUF5QyxDQUFDO1FBRTlDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pCLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUMxRTthQUFNO1lBQ0wsdUJBQXVCLEdBQUcsUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQzFFO1FBRUQsb0ZBQW9GO1FBQ3BGLGlFQUFpRTtRQUNqRSxJQUFJLHVCQUF1QixLQUFLLE9BQU8sRUFBRTtZQUN2QyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWdCLENBQUMsV0FBVyxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxLQUFLLEdBQU0sYUFBYSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFJLENBQUM7U0FDbEY7YUFBTTtZQUNMLE1BQU0sQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGdFQUFvQixHQUE1QjtRQUNFLCtEQUErRDtRQUMvRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0MsSUFBTSxhQUFhLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTFELDRGQUE0RjtRQUM1Riw0RkFBNEY7UUFDNUYsNkJBQTZCO1FBQzdCLElBQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxVQUFVO1lBQzVELE9BQU8sVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQyxZQUFZLEVBQUUscUJBQXFCLENBQUM7WUFDakYsbUJBQW1CLEVBQUUsNEJBQTRCLENBQUMsWUFBWSxFQUFFLHFCQUFxQixDQUFDO1lBQ3RGLGdCQUFnQixFQUFFLDJCQUEyQixDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQztZQUNuRixvQkFBb0IsRUFBRSw0QkFBNEIsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUM7U0FDekYsQ0FBQztJQUNKLENBQUM7SUFFRCxzRkFBc0Y7SUFDOUUsOERBQWtCLEdBQTFCLFVBQTJCLE1BQWM7UUFBRSxtQkFBc0I7YUFBdEIsVUFBc0IsRUFBdEIscUJBQXNCLEVBQXRCLElBQXNCO1lBQXRCLGtDQUFzQjs7UUFDL0QsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsWUFBb0IsRUFBRSxlQUF1QjtZQUNwRSxPQUFPLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsc0VBQXNFO0lBQzlELG9FQUF3QixHQUFoQztRQUNFLHdGQUF3RjtRQUN4RiwwRkFBMEY7UUFDMUYsMkZBQTJGO1FBQzNGLG1GQUFtRjtRQUNuRixzRUFBc0U7UUFDdEUsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFnQixDQUFDLFdBQVcsQ0FBQztRQUMxRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWdCLENBQUMsWUFBWSxDQUFDO1FBQzVELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUV2RSxPQUFPO1lBQ0wsR0FBRyxFQUFLLGNBQWMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWU7WUFDakQsSUFBSSxFQUFJLGNBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWU7WUFDbEQsS0FBSyxFQUFHLGNBQWMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlO1lBQzFELE1BQU0sRUFBRSxjQUFjLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZTtZQUMxRCxLQUFLLEVBQUcsS0FBSyxHQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDM0MsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQsb0RBQW9EO0lBQzVDLGtEQUFNLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEtBQUssS0FBSyxDQUFDO0lBQ25ELENBQUM7SUFFRCx5RUFBeUU7SUFDakUsNkRBQWlCLEdBQXpCO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxnRUFBZ0U7SUFDeEQsc0RBQVUsR0FBbEIsVUFBbUIsUUFBMkIsRUFBRSxJQUFlO1FBQzdELElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtZQUNoQiw0REFBNEQ7WUFDNUQsMkRBQTJEO1lBQzNELE9BQU8sUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FDcEU7UUFFRCxPQUFPLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxxRUFBcUU7SUFDN0QsOERBQWtCLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsTUFBTSxLQUFLLENBQUMsdUVBQXVFLENBQUMsQ0FBQztTQUN0RjtRQUVELDREQUE0RDtRQUM1RCxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDbkMsMEJBQTBCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCx3QkFBd0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELDBCQUEwQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEQsd0JBQXdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyRUFBMkU7SUFDbkUsNERBQWdCLEdBQXhCLFVBQXlCLFVBQTZCO1FBQXRELGlCQVNDO1FBUkMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7Z0JBQ3RDLElBQUksUUFBUSxLQUFLLEVBQUUsSUFBSSxLQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUN6RSxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6QyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3BDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCx3RkFBd0Y7SUFDaEYsOERBQWtCLEdBQTFCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDeEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxvREFBb0Q7SUFDNUMsMERBQWMsR0FBdEI7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTVCLElBQUksTUFBTSxZQUFZLFVBQVUsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNyRDtRQUVELHdEQUF3RDtRQUN4RCxJQUFJLE1BQU0sWUFBWSxPQUFPLEVBQUU7WUFDN0IsT0FBTyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN2QztRQUVELElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBRWxDLDBGQUEwRjtRQUMxRixPQUFPO1lBQ0wsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTTtZQUN6QixJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDZCxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLO1lBQ3ZCLE1BQU0sUUFBQTtZQUNOLEtBQUssT0FBQTtTQUNOLENBQUM7SUFDSixDQUFDO0lBQ0gsd0NBQUM7QUFBRCxDQUFDLEFBM2pDRCxJQTJqQ0M7O0FBZ0VELDBFQUEwRTtBQUMxRSxTQUFTLFlBQVksQ0FBQyxXQUFnQyxFQUNoQyxNQUEyQjtJQUMvQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtRQUN0QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQztLQUNGO0lBRUQsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQUdEOzs7R0FHRztBQUNILFNBQVMsYUFBYSxDQUFDLEtBQW1DO0lBQ3hELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDeEMsSUFBQSwyQ0FBNEMsRUFBM0MsYUFBSyxFQUFFLGFBQW9DLENBQUM7UUFDbkQsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDOUQ7SUFFRCxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1Bvc2l0aW9uU3RyYXRlZ3l9IGZyb20gJy4vcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld3BvcnRSdWxlciwgQ2RrU2Nyb2xsYWJsZSwgVmlld3BvcnRTY3JvbGxQb3NpdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge1xuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIFNjcm9sbGluZ1Zpc2liaWxpdHksXG4gIHZhbGlkYXRlSG9yaXpvbnRhbFBvc2l0aW9uLFxuICB2YWxpZGF0ZVZlcnRpY2FsUG9zaXRpb24sXG59IGZyb20gJy4vY29ubmVjdGVkLXBvc2l0aW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7T3ZlcmxheVJlZmVyZW5jZX0gZnJvbSAnLi4vb3ZlcmxheS1yZWZlcmVuY2UnO1xuaW1wb3J0IHtpc0VsZW1lbnRTY3JvbGxlZE91dHNpZGVWaWV3LCBpc0VsZW1lbnRDbGlwcGVkQnlTY3JvbGxpbmd9IGZyb20gJy4vc2Nyb2xsLWNsaXAnO1xuaW1wb3J0IHtjb2VyY2VDc3NQaXhlbFZhbHVlLCBjb2VyY2VBcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge092ZXJsYXlDb250YWluZXJ9IGZyb20gJy4uL292ZXJsYXktY29udGFpbmVyJztcblxuLy8gVE9ETzogcmVmYWN0b3IgY2xpcHBpbmcgZGV0ZWN0aW9uIGludG8gYSBzZXBhcmF0ZSB0aGluZyAocGFydCBvZiBzY3JvbGxpbmcgbW9kdWxlKVxuLy8gVE9ETzogZG9lc24ndCBoYW5kbGUgYm90aCBmbGV4aWJsZSB3aWR0aCBhbmQgaGVpZ2h0IHdoZW4gaXQgaGFzIHRvIHNjcm9sbCBhbG9uZyBib3RoIGF4aXMuXG5cbi8qKiBDbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgb3ZlcmxheSBib3VuZGluZyBib3guICovXG5jb25zdCBib3VuZGluZ0JveENsYXNzID0gJ2Nkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gnO1xuXG4vKiogUmVnZXggdXNlZCB0byBzcGxpdCBhIHN0cmluZyBvbiBpdHMgQ1NTIHVuaXRzLiAqL1xuY29uc3QgY3NzVW5pdFBhdHRlcm4gPSAvKFtBLVphLXolXSspJC87XG5cbi8qKiBQb3NzaWJsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgc2V0IGFzIHRoZSBvcmlnaW4gb2YgYSBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kuICovXG5leHBvcnQgdHlwZSBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3lPcmlnaW4gPSBFbGVtZW50UmVmIHwgRWxlbWVudCB8IFBvaW50ICYge1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBIHN0cmF0ZWd5IGZvciBwb3NpdGlvbmluZyBvdmVybGF5cy4gVXNpbmcgdGhpcyBzdHJhdGVneSwgYW4gb3ZlcmxheSBpcyBnaXZlbiBhblxuICogaW1wbGljaXQgcG9zaXRpb24gcmVsYXRpdmUgc29tZSBvcmlnaW4gZWxlbWVudC4gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIGlzIGRlZmluZWQgaW4gdGVybXMgb2ZcbiAqIGEgcG9pbnQgb24gdGhlIG9yaWdpbiBlbGVtZW50IHRoYXQgaXMgY29ubmVjdGVkIHRvIGEgcG9pbnQgb24gdGhlIG92ZXJsYXkgZWxlbWVudC4gRm9yIGV4YW1wbGUsXG4gKiBhIGJhc2ljIGRyb3Bkb3duIGlzIGNvbm5lY3RpbmcgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBvZiB0aGUgb3JpZ2luIHRvIHRoZSB0b3AtbGVmdCBjb3JuZXJcbiAqIG9mIHRoZSBvdmVybGF5LlxuICovXG5leHBvcnQgY2xhc3MgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IGltcGxlbWVudHMgUG9zaXRpb25TdHJhdGVneSB7XG4gIC8qKiBUaGUgb3ZlcmxheSB0byB3aGljaCB0aGlzIHN0cmF0ZWd5IGlzIGF0dGFjaGVkLiAqL1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmZXJlbmNlO1xuXG4gIC8qKiBXaGV0aGVyIHdlJ3JlIHBlcmZvcm1pbmcgdGhlIHZlcnkgZmlyc3QgcG9zaXRpb25pbmcgb2YgdGhlIG92ZXJsYXkuICovXG4gIHByaXZhdGUgX2lzSW5pdGlhbFJlbmRlcjogYm9vbGVhbjtcblxuICAvKiogTGFzdCBzaXplIHVzZWQgZm9yIHRoZSBib3VuZGluZyBib3guIFVzZWQgdG8gYXZvaWQgcmVzaXppbmcgdGhlIG92ZXJsYXkgYWZ0ZXIgb3Blbi4gKi9cbiAgcHJpdmF0ZSBfbGFzdEJvdW5kaW5nQm94U2l6ZSA9IHt3aWR0aDogMCwgaGVpZ2h0OiAwfTtcblxuICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSB3YXMgcHVzaGVkIGluIGEgcHJldmlvdXMgcG9zaXRpb25pbmcuICovXG4gIHByaXZhdGUgX2lzUHVzaGVkID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgY2FuIGJlIHB1c2hlZCBvbi1zY3JlZW4gb24gdGhlIGluaXRpYWwgb3Blbi4gKi9cbiAgcHJpdmF0ZSBfY2FuUHVzaCA9IHRydWU7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgY2FuIGdyb3cgdmlhIGZsZXhpYmxlIHdpZHRoL2hlaWdodCBhZnRlciB0aGUgaW5pdGlhbCBvcGVuLiAqL1xuICBwcml2YXRlIF9ncm93QWZ0ZXJPcGVuID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkncyB3aWR0aCBhbmQgaGVpZ2h0IGNhbiBiZSBjb25zdHJhaW5lZCB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC4gKi9cbiAgcHJpdmF0ZSBfaGFzRmxleGlibGVEaW1lbnNpb25zID0gdHJ1ZTtcblxuICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBwb3NpdGlvbiBpcyBsb2NrZWQuICovXG4gIHByaXZhdGUgX3Bvc2l0aW9uTG9ja2VkID0gZmFsc2U7XG5cbiAgLyoqIENhY2hlZCBvcmlnaW4gZGltZW5zaW9ucyAqL1xuICBwcml2YXRlIF9vcmlnaW5SZWN0OiBDbGllbnRSZWN0O1xuXG4gIC8qKiBDYWNoZWQgb3ZlcmxheSBkaW1lbnNpb25zICovXG4gIHByaXZhdGUgX292ZXJsYXlSZWN0OiBDbGllbnRSZWN0O1xuXG4gIC8qKiBDYWNoZWQgdmlld3BvcnQgZGltZW5zaW9ucyAqL1xuICBwcml2YXRlIF92aWV3cG9ydFJlY3Q6IENsaWVudFJlY3Q7XG5cbiAgLyoqIEFtb3VudCBvZiBzcGFjZSB0aGF0IG11c3QgYmUgbWFpbnRhaW5lZCBiZXR3ZWVuIHRoZSBvdmVybGF5IGFuZCB0aGUgZWRnZSBvZiB0aGUgdmlld3BvcnQuICovXG4gIHByaXZhdGUgX3ZpZXdwb3J0TWFyZ2luID0gMDtcblxuICAvKiogVGhlIFNjcm9sbGFibGUgY29udGFpbmVycyB1c2VkIHRvIGNoZWNrIHNjcm9sbGFibGUgdmlldyBwcm9wZXJ0aWVzIG9uIHBvc2l0aW9uIGNoYW5nZS4gKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsYWJsZXM6IENka1Njcm9sbGFibGVbXSA9IFtdO1xuXG4gIC8qKiBPcmRlcmVkIGxpc3Qgb2YgcHJlZmVycmVkIHBvc2l0aW9ucywgZnJvbSBtb3N0IHRvIGxlYXN0IGRlc2lyYWJsZS4gKi9cbiAgX3ByZWZlcnJlZFBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW107XG5cbiAgLyoqIFRoZSBvcmlnaW4gZWxlbWVudCBhZ2FpbnN0IHdoaWNoIHRoZSBvdmVybGF5IHdpbGwgYmUgcG9zaXRpb25lZC4gKi9cbiAgcHJpdmF0ZSBfb3JpZ2luOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3lPcmlnaW47XG5cbiAgLyoqIFRoZSBvdmVybGF5IHBhbmUgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfcGFuZTogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHN0cmF0ZWd5IGhhcyBiZWVuIGRpc3Bvc2VkIG9mIGFscmVhZHkuICovXG4gIHByaXZhdGUgX2lzRGlzcG9zZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFBhcmVudCBlbGVtZW50IGZvciB0aGUgb3ZlcmxheSBwYW5lbCB1c2VkIHRvIGNvbnN0cmFpbiB0aGUgb3ZlcmxheSBwYW5lbCdzIHNpemUgdG8gZml0XG4gICAqIHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gICAqL1xuICBwcml2YXRlIF9ib3VuZGluZ0JveDogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gIC8qKiBUaGUgbGFzdCBwb3NpdGlvbiB0byBoYXZlIGJlZW4gY2FsY3VsYXRlZCBhcyB0aGUgYmVzdCBmaXQgcG9zaXRpb24uICovXG4gIHByaXZhdGUgX2xhc3RQb3NpdGlvbjogQ29ubmVjdGVkUG9zaXRpb24gfCBudWxsO1xuXG4gIC8qKiBTdWJqZWN0IHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIHBvc2l0aW9uIGNoYW5nZXMuICovXG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZT4oKTtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHZpZXdwb3J0IHNpemUgY2hhbmdlcy4gKi9cbiAgcHJpdmF0ZSBfcmVzaXplU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBEZWZhdWx0IG9mZnNldCBmb3IgdGhlIG92ZXJsYXkgYWxvbmcgdGhlIHggYXhpcy4gKi9cbiAgcHJpdmF0ZSBfb2Zmc2V0WCA9IDA7XG5cbiAgLyoqIERlZmF1bHQgb2Zmc2V0IGZvciB0aGUgb3ZlcmxheSBhbG9uZyB0aGUgeSBheGlzLiAqL1xuICBwcml2YXRlIF9vZmZzZXRZID0gMDtcblxuICAvKiogU2VsZWN0b3IgdG8gYmUgdXNlZCB3aGVuIGZpbmRpbmcgdGhlIGVsZW1lbnRzIG9uIHdoaWNoIHRvIHNldCB0aGUgdHJhbnNmb3JtIG9yaWdpbi4gKi9cbiAgcHJpdmF0ZSBfdHJhbnNmb3JtT3JpZ2luU2VsZWN0b3I6IHN0cmluZztcblxuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIENTUyBjbGFzc2VzIHRoYXQgdGhlIHBvc2l0aW9uIHN0cmF0ZWd5IGhhcyBhcHBsaWVkIG9uIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICBwcml2YXRlIF9hcHBsaWVkUGFuZWxDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKiBBbW91bnQgYnkgd2hpY2ggdGhlIG92ZXJsYXkgd2FzIHB1c2hlZCBpbiBlYWNoIGF4aXMgZHVyaW5nIHRoZSBsYXN0IHRpbWUgaXQgd2FzIHBvc2l0aW9uZWQuICovXG4gIHByaXZhdGUgX3ByZXZpb3VzUHVzaEFtb3VudDoge3g6IG51bWJlciwgeTogbnVtYmVyfSB8IG51bGw7XG5cbiAgLyoqIE9ic2VydmFibGUgc2VxdWVuY2Ugb2YgcG9zaXRpb24gY2hhbmdlcy4gKi9cbiAgcG9zaXRpb25DaGFuZ2VzOiBPYnNlcnZhYmxlPENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZT4gPVxuICAgICAgdGhpcy5fcG9zaXRpb25DaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIC8qKiBPcmRlcmVkIGxpc3Qgb2YgcHJlZmVycmVkIHBvc2l0aW9ucywgZnJvbSBtb3N0IHRvIGxlYXN0IGRlc2lyYWJsZS4gKi9cbiAgZ2V0IHBvc2l0aW9ucygpOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10ge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJyZWRQb3NpdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGNvbm5lY3RlZFRvOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3lPcmlnaW4sIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQsIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIpIHtcbiAgICB0aGlzLnNldE9yaWdpbihjb25uZWN0ZWRUbyk7XG4gIH1cblxuICAvKiogQXR0YWNoZXMgdGhpcyBwb3NpdGlvbiBzdHJhdGVneSB0byBhbiBvdmVybGF5LiAqL1xuICBhdHRhY2gob3ZlcmxheVJlZjogT3ZlcmxheVJlZmVyZW5jZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmICYmIG92ZXJsYXlSZWYgIT09IHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRocm93IEVycm9yKCdUaGlzIHBvc2l0aW9uIHN0cmF0ZWd5IGlzIGFscmVhZHkgYXR0YWNoZWQgdG8gYW4gb3ZlcmxheScpO1xuICAgIH1cblxuICAgIHRoaXMuX3ZhbGlkYXRlUG9zaXRpb25zKCk7XG5cbiAgICBvdmVybGF5UmVmLmhvc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYm91bmRpbmdCb3hDbGFzcyk7XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmID0gb3ZlcmxheVJlZjtcbiAgICB0aGlzLl9ib3VuZGluZ0JveCA9IG92ZXJsYXlSZWYuaG9zdEVsZW1lbnQ7XG4gICAgdGhpcy5fcGFuZSA9IG92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XG4gICAgdGhpcy5faXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzSW5pdGlhbFJlbmRlciA9IHRydWU7XG4gICAgdGhpcy5fbGFzdFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24gPSB0aGlzLl92aWV3cG9ydFJ1bGVyLmNoYW5nZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAvLyBXaGVuIHRoZSB3aW5kb3cgaXMgcmVzaXplZCwgd2Ugd2FudCB0byB0cmlnZ2VyIHRoZSBuZXh0IHJlcG9zaXRpb24gYXMgaWYgaXRcbiAgICAgIC8vIHdhcyBhbiBpbml0aWFsIHJlbmRlciwgaW4gb3JkZXIgZm9yIHRoZSBzdHJhdGVneSB0byBwaWNrIGEgbmV3IG9wdGltYWwgcG9zaXRpb24sXG4gICAgICAvLyBvdGhlcndpc2UgcG9zaXRpb24gbG9ja2luZyB3aWxsIGNhdXNlIGl0IHRvIHN0YXkgYXQgdGhlIG9sZCBvbmUuXG4gICAgICB0aGlzLl9pc0luaXRpYWxSZW5kZXIgPSB0cnVlO1xuICAgICAgdGhpcy5hcHBseSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBvdmVybGF5IGVsZW1lbnQsIHVzaW5nIHdoaWNoZXZlciBwcmVmZXJyZWQgcG9zaXRpb24gcmVsYXRpdmVcbiAgICogdG8gdGhlIG9yaWdpbiBiZXN0IGZpdHMgb24tc2NyZWVuLlxuICAgKlxuICAgKiBUaGUgc2VsZWN0aW9uIG9mIGEgcG9zaXRpb24gZ29lcyBhcyBmb2xsb3dzOlxuICAgKiAgLSBJZiBhbnkgcG9zaXRpb25zIGZpdCBjb21wbGV0ZWx5IHdpdGhpbiB0aGUgdmlld3BvcnQgYXMtaXMsXG4gICAqICAgICAgY2hvb3NlIHRoZSBmaXJzdCBwb3NpdGlvbiB0aGF0IGRvZXMgc28uXG4gICAqICAtIElmIGZsZXhpYmxlIGRpbWVuc2lvbnMgYXJlIGVuYWJsZWQgYW5kIGF0IGxlYXN0IG9uZSBzYXRpZmllcyB0aGUgZ2l2ZW4gbWluaW11bSB3aWR0aC9oZWlnaHQsXG4gICAqICAgICAgY2hvb3NlIHRoZSBwb3NpdGlvbiB3aXRoIHRoZSBncmVhdGVzdCBhdmFpbGFibGUgc2l6ZSBtb2RpZmllZCBieSB0aGUgcG9zaXRpb25zJyB3ZWlnaHQuXG4gICAqICAtIElmIHB1c2hpbmcgaXMgZW5hYmxlZCwgdGFrZSB0aGUgcG9zaXRpb24gdGhhdCB3ZW50IG9mZi1zY3JlZW4gdGhlIGxlYXN0IGFuZCBwdXNoIGl0XG4gICAqICAgICAgb24tc2NyZWVuLlxuICAgKiAgLSBJZiBub25lIG9mIHRoZSBwcmV2aW91cyBjcml0ZXJpYSB3ZXJlIG1ldCwgdXNlIHRoZSBwb3NpdGlvbiB0aGF0IGdvZXMgb2ZmLXNjcmVlbiB0aGUgbGVhc3QuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGFwcGx5KCk6IHZvaWQge1xuICAgIC8vIFdlIHNob3VsZG4ndCBkbyBhbnl0aGluZyBpZiB0aGUgc3RyYXRlZ3kgd2FzIGRpc3Bvc2VkIG9yIHdlJ3JlIG9uIHRoZSBzZXJ2ZXIuXG4gICAgaWYgKHRoaXMuX2lzRGlzcG9zZWQgfHwgIXRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBwb3NpdGlvbiBoYXMgYmVlbiBhcHBsaWVkIGFscmVhZHkgKGUuZy4gd2hlbiB0aGUgb3ZlcmxheSB3YXMgb3BlbmVkKSBhbmQgdGhlXG4gICAgLy8gY29uc3VtZXIgb3B0ZWQgaW50byBsb2NraW5nIGluIHRoZSBwb3NpdGlvbiwgcmUtdXNlIHRoZSBvbGQgcG9zaXRpb24sIGluIG9yZGVyIHRvXG4gICAgLy8gcHJldmVudCB0aGUgb3ZlcmxheSBmcm9tIGp1bXBpbmcgYXJvdW5kLlxuICAgIGlmICghdGhpcy5faXNJbml0aWFsUmVuZGVyICYmIHRoaXMuX3Bvc2l0aW9uTG9ja2VkICYmIHRoaXMuX2xhc3RQb3NpdGlvbikge1xuICAgICAgdGhpcy5yZWFwcGx5TGFzdFBvc2l0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJQYW5lbENsYXNzZXMoKTtcbiAgICB0aGlzLl9yZXNldE92ZXJsYXlFbGVtZW50U3R5bGVzKCk7XG4gICAgdGhpcy5fcmVzZXRCb3VuZGluZ0JveFN0eWxlcygpO1xuXG4gICAgLy8gV2UgbmVlZCB0aGUgYm91bmRpbmcgcmVjdHMgZm9yIHRoZSBvcmlnaW4gYW5kIHRoZSBvdmVybGF5IHRvIGRldGVybWluZSBob3cgdG8gcG9zaXRpb25cbiAgICAvLyB0aGUgb3ZlcmxheSByZWxhdGl2ZSB0byB0aGUgb3JpZ2luLlxuICAgIC8vIFdlIHVzZSB0aGUgdmlld3BvcnQgcmVjdCB0byBkZXRlcm1pbmUgd2hldGhlciBhIHBvc2l0aW9uIHdvdWxkIGdvIG9mZi1zY3JlZW4uXG4gICAgdGhpcy5fdmlld3BvcnRSZWN0ID0gdGhpcy5fZ2V0TmFycm93ZWRWaWV3cG9ydFJlY3QoKTtcbiAgICB0aGlzLl9vcmlnaW5SZWN0ID0gdGhpcy5fZ2V0T3JpZ2luUmVjdCgpO1xuICAgIHRoaXMuX292ZXJsYXlSZWN0ID0gdGhpcy5fcGFuZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IG9yaWdpblJlY3QgPSB0aGlzLl9vcmlnaW5SZWN0O1xuICAgIGNvbnN0IG92ZXJsYXlSZWN0ID0gdGhpcy5fb3ZlcmxheVJlY3Q7XG4gICAgY29uc3Qgdmlld3BvcnRSZWN0ID0gdGhpcy5fdmlld3BvcnRSZWN0O1xuXG4gICAgLy8gUG9zaXRpb25zIHdoZXJlIHRoZSBvdmVybGF5IHdpbGwgZml0IHdpdGggZmxleGlibGUgZGltZW5zaW9ucy5cbiAgICBjb25zdCBmbGV4aWJsZUZpdHM6IEZsZXhpYmxlRml0W10gPSBbXTtcblxuICAgIC8vIEZhbGxiYWNrIGlmIG5vbmUgb2YgdGhlIHByZWZlcnJlZCBwb3NpdGlvbnMgZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gICAgbGV0IGZhbGxiYWNrOiBGYWxsYmFja1Bvc2l0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIG9mIHRoZSBwcmVmZXJyZWQgcG9zaXRpb25zIGxvb2tpbmcgZm9yIGEgZ29vZCBmaXQuXG4gICAgLy8gSWYgYSBnb29kIGZpdCBpcyBmb3VuZCwgaXQgd2lsbCBiZSBhcHBsaWVkIGltbWVkaWF0ZWx5LlxuICAgIGZvciAobGV0IHBvcyBvZiB0aGlzLl9wcmVmZXJyZWRQb3NpdGlvbnMpIHtcbiAgICAgIC8vIEdldCB0aGUgZXhhY3QgKHgsIHkpIGNvb3JkaW5hdGUgZm9yIHRoZSBwb2ludC1vZi1vcmlnaW4gb24gdGhlIG9yaWdpbiBlbGVtZW50LlxuICAgICAgbGV0IG9yaWdpblBvaW50ID0gdGhpcy5fZ2V0T3JpZ2luUG9pbnQob3JpZ2luUmVjdCwgcG9zKTtcblxuICAgICAgLy8gRnJvbSB0aGF0IHBvaW50LW9mLW9yaWdpbiwgZ2V0IHRoZSBleGFjdCAoeCwgeSkgY29vcmRpbmF0ZSBmb3IgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGVcbiAgICAgIC8vIG92ZXJsYXkgaW4gdGhpcyBwb3NpdGlvbi4gV2UgdXNlIHRoZSB0b3AtbGVmdCBjb3JuZXIgZm9yIGNhbGN1bGF0aW9ucyBhbmQgbGF0ZXIgdHJhbnNsYXRlXG4gICAgICAvLyB0aGlzIGludG8gYW4gYXBwcm9wcmlhdGUgKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkgc3R5bGUuXG4gICAgICBsZXQgb3ZlcmxheVBvaW50ID0gdGhpcy5fZ2V0T3ZlcmxheVBvaW50KG9yaWdpblBvaW50LCBvdmVybGF5UmVjdCwgcG9zKTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIGhvdyB3ZWxsIHRoZSBvdmVybGF5IHdvdWxkIGZpdCBpbnRvIHRoZSB2aWV3cG9ydCB3aXRoIHRoaXMgcG9pbnQuXG4gICAgICBsZXQgb3ZlcmxheUZpdCA9IHRoaXMuX2dldE92ZXJsYXlGaXQob3ZlcmxheVBvaW50LCBvdmVybGF5UmVjdCwgdmlld3BvcnRSZWN0LCBwb3MpO1xuXG4gICAgICAvLyBJZiB0aGUgb3ZlcmxheSwgd2l0aG91dCBhbnkgZnVydGhlciB3b3JrLCBmaXRzIGludG8gdGhlIHZpZXdwb3J0LCB1c2UgdGhpcyBwb3NpdGlvbi5cbiAgICAgIGlmIChvdmVybGF5Rml0LmlzQ29tcGxldGVseVdpdGhpblZpZXdwb3J0KSB7XG4gICAgICAgIHRoaXMuX2lzUHVzaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2FwcGx5UG9zaXRpb24ocG9zLCBvcmlnaW5Qb2ludCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIG92ZXJsYXkgaGFzIGZsZXhpYmxlIGRpbWVuc2lvbnMsIHdlIGNhbiB1c2UgdGhpcyBwb3NpdGlvblxuICAgICAgLy8gc28gbG9uZyBhcyB0aGVyZSdzIGVub3VnaCBzcGFjZSBmb3IgdGhlIG1pbmltdW0gZGltZW5zaW9ucy5cbiAgICAgIGlmICh0aGlzLl9jYW5GaXRXaXRoRmxleGlibGVEaW1lbnNpb25zKG92ZXJsYXlGaXQsIG92ZXJsYXlQb2ludCwgdmlld3BvcnRSZWN0KSkge1xuICAgICAgICAvLyBTYXZlIHBvc2l0aW9ucyB3aGVyZSB0aGUgb3ZlcmxheSB3aWxsIGZpdCB3aXRoIGZsZXhpYmxlIGRpbWVuc2lvbnMuIFdlIHdpbGwgdXNlIHRoZXNlXG4gICAgICAgIC8vIGlmIG5vbmUgb2YgdGhlIHBvc2l0aW9ucyBmaXQgKndpdGhvdXQqIGZsZXhpYmxlIGRpbWVuc2lvbnMuXG4gICAgICAgIGZsZXhpYmxlRml0cy5wdXNoKHtcbiAgICAgICAgICBwb3NpdGlvbjogcG9zLFxuICAgICAgICAgIG9yaWdpbjogb3JpZ2luUG9pbnQsXG4gICAgICAgICAgb3ZlcmxheVJlY3QsXG4gICAgICAgICAgYm91bmRpbmdCb3hSZWN0OiB0aGlzLl9jYWxjdWxhdGVCb3VuZGluZ0JveFJlY3Qob3JpZ2luUG9pbnQsIHBvcylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBjdXJyZW50IHByZWZlcnJlZCBwb3NpdGlvbiBkb2VzIG5vdCBmaXQgb24gdGhlIHNjcmVlbiwgcmVtZW1iZXIgdGhlIHBvc2l0aW9uXG4gICAgICAvLyBpZiBpdCBoYXMgbW9yZSB2aXNpYmxlIGFyZWEgb24tc2NyZWVuIHRoYW4gd2UndmUgc2VlbiBhbmQgbW92ZSBvbnRvIHRoZSBuZXh0IHByZWZlcnJlZFxuICAgICAgLy8gcG9zaXRpb24uXG4gICAgICBpZiAoIWZhbGxiYWNrIHx8IGZhbGxiYWNrLm92ZXJsYXlGaXQudmlzaWJsZUFyZWEgPCBvdmVybGF5Rml0LnZpc2libGVBcmVhKSB7XG4gICAgICAgIGZhbGxiYWNrID0ge292ZXJsYXlGaXQsIG92ZXJsYXlQb2ludCwgb3JpZ2luUG9pbnQsIHBvc2l0aW9uOiBwb3MsIG92ZXJsYXlSZWN0fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgYW55IHBvc2l0aW9ucyB3aGVyZSB0aGUgb3ZlcmxheSB3b3VsZCBmaXQgd2l0aCBmbGV4aWJsZSBkaW1lbnNpb25zLCBjaG9vc2UgdGhlXG4gICAgLy8gb25lIHRoYXQgaGFzIHRoZSBncmVhdGVzdCBhcmVhIGF2YWlsYWJsZSBtb2RpZmllZCBieSB0aGUgcG9zaXRpb24ncyB3ZWlnaHRcbiAgICBpZiAoZmxleGlibGVGaXRzLmxlbmd0aCkge1xuICAgICAgbGV0IGJlc3RGaXQ6IEZsZXhpYmxlRml0IHwgbnVsbCA9IG51bGw7XG4gICAgICBsZXQgYmVzdFNjb3JlID0gLTE7XG4gICAgICBmb3IgKGNvbnN0IGZpdCBvZiBmbGV4aWJsZUZpdHMpIHtcbiAgICAgICAgY29uc3Qgc2NvcmUgPVxuICAgICAgICAgICAgZml0LmJvdW5kaW5nQm94UmVjdC53aWR0aCAqIGZpdC5ib3VuZGluZ0JveFJlY3QuaGVpZ2h0ICogKGZpdC5wb3NpdGlvbi53ZWlnaHQgfHwgMSk7XG4gICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICAgIGJlc3RGaXQgPSBmaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNQdXNoZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FwcGx5UG9zaXRpb24oYmVzdEZpdCEucG9zaXRpb24sIGJlc3RGaXQhLm9yaWdpbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2hlbiBub25lIG9mIHRoZSBwcmVmZXJyZWQgcG9zaXRpb25zIGZpdCB3aXRoaW4gdGhlIHZpZXdwb3J0LCB0YWtlIHRoZSBwb3NpdGlvblxuICAgIC8vIHRoYXQgd2VudCBvZmYtc2NyZWVuIHRoZSBsZWFzdCBhbmQgYXR0ZW1wdCB0byBwdXNoIGl0IG9uLXNjcmVlbi5cbiAgICBpZiAodGhpcy5fY2FuUHVzaCkge1xuICAgICAgLy8gVE9ETyhqZWxib3Vybik6IGFmdGVyIHB1c2hpbmcsIHRoZSBvcGVuaW5nIFwiZGlyZWN0aW9uXCIgb2YgdGhlIG92ZXJsYXkgbWlnaHQgbm90IG1ha2Ugc2Vuc2UuXG4gICAgICB0aGlzLl9pc1B1c2hlZCA9IHRydWU7XG4gICAgICB0aGlzLl9hcHBseVBvc2l0aW9uKGZhbGxiYWNrIS5wb3NpdGlvbiwgZmFsbGJhY2shLm9yaWdpblBvaW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBbGwgb3B0aW9ucyBmb3IgZ2V0dGluZyB0aGUgb3ZlcmxheSB3aXRoaW4gdGhlIHZpZXdwb3J0IGhhdmUgYmVlbiBleGhhdXN0ZWQsIHNvIGdvIHdpdGggdGhlXG4gICAgLy8gcG9zaXRpb24gdGhhdCB3ZW50IG9mZi1zY3JlZW4gdGhlIGxlYXN0LlxuICAgIHRoaXMuX2FwcGx5UG9zaXRpb24oZmFsbGJhY2shLnBvc2l0aW9uLCBmYWxsYmFjayEub3JpZ2luUG9pbnQpO1xuICB9XG5cbiAgZGV0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NsZWFyUGFuZWxDbGFzc2VzKCk7XG4gICAgdGhpcy5fbGFzdFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLl9wcmV2aW91c1B1c2hBbW91bnQgPSBudWxsO1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqIENsZWFudXAgYWZ0ZXIgdGhlIGVsZW1lbnQgZ2V0cyBkZXN0cm95ZWQuICovXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lzRGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBXZSBjYW4ndCB1c2UgYF9yZXNldEJvdW5kaW5nQm94U3R5bGVzYCBoZXJlLCBiZWNhdXNlIGl0IHJlc2V0c1xuICAgIC8vIHNvbWUgcHJvcGVydGllcyB0byB6ZXJvLCByYXRoZXIgdGhhbiByZW1vdmluZyB0aGVtLlxuICAgIGlmICh0aGlzLl9ib3VuZGluZ0JveCkge1xuICAgICAgZXh0ZW5kU3R5bGVzKHRoaXMuX2JvdW5kaW5nQm94LnN0eWxlLCB7XG4gICAgICAgIHRvcDogJycsXG4gICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICByaWdodDogJycsXG4gICAgICAgIGJvdHRvbTogJycsXG4gICAgICAgIGhlaWdodDogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgYWxpZ25JdGVtczogJycsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnJyxcbiAgICAgIH0gYXMgQ1NTU3R5bGVEZWNsYXJhdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BhbmUpIHtcbiAgICAgIHRoaXMuX3Jlc2V0T3ZlcmxheUVsZW1lbnRTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5ob3N0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJvdW5kaW5nQm94Q2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5fcG9zaXRpb25DaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX2JvdW5kaW5nQm94ID0gbnVsbCE7XG4gICAgdGhpcy5faXNEaXNwb3NlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyByZS1hbGlnbnMgdGhlIG92ZXJsYXkgZWxlbWVudCB3aXRoIHRoZSB0cmlnZ2VyIGluIGl0cyBsYXN0IGNhbGN1bGF0ZWQgcG9zaXRpb24sXG4gICAqIGV2ZW4gaWYgYSBwb3NpdGlvbiBoaWdoZXIgaW4gdGhlIFwicHJlZmVycmVkIHBvc2l0aW9uc1wiIGxpc3Qgd291bGQgbm93IGZpdC4gVGhpc1xuICAgKiBhbGxvd3Mgb25lIHRvIHJlLWFsaWduIHRoZSBwYW5lbCB3aXRob3V0IGNoYW5naW5nIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcGFuZWwuXG4gICAqL1xuICByZWFwcGx5TGFzdFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faXNEaXNwb3NlZCAmJiAoIXRoaXMuX3BsYXRmb3JtIHx8IHRoaXMuX3BsYXRmb3JtLmlzQnJvd3NlcikpIHtcbiAgICAgIHRoaXMuX29yaWdpblJlY3QgPSB0aGlzLl9nZXRPcmlnaW5SZWN0KCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVjdCA9IHRoaXMuX3BhbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLl92aWV3cG9ydFJlY3QgPSB0aGlzLl9nZXROYXJyb3dlZFZpZXdwb3J0UmVjdCgpO1xuXG4gICAgICBjb25zdCBsYXN0UG9zaXRpb24gPSB0aGlzLl9sYXN0UG9zaXRpb24gfHwgdGhpcy5fcHJlZmVycmVkUG9zaXRpb25zWzBdO1xuICAgICAgY29uc3Qgb3JpZ2luUG9pbnQgPSB0aGlzLl9nZXRPcmlnaW5Qb2ludCh0aGlzLl9vcmlnaW5SZWN0LCBsYXN0UG9zaXRpb24pO1xuXG4gICAgICB0aGlzLl9hcHBseVBvc2l0aW9uKGxhc3RQb3NpdGlvbiwgb3JpZ2luUG9pbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBsaXN0IG9mIFNjcm9sbGFibGUgY29udGFpbmVycyB0aGF0IGhvc3QgdGhlIG9yaWdpbiBlbGVtZW50IHNvIHRoYXRcbiAgICogb24gcmVwb3NpdGlvbiB3ZSBjYW4gZXZhbHVhdGUgaWYgaXQgb3IgdGhlIG92ZXJsYXkgaGFzIGJlZW4gY2xpcHBlZCBvciBvdXRzaWRlIHZpZXcuIEV2ZXJ5XG4gICAqIFNjcm9sbGFibGUgbXVzdCBiZSBhbiBhbmNlc3RvciBlbGVtZW50IG9mIHRoZSBzdHJhdGVneSdzIG9yaWdpbiBlbGVtZW50LlxuICAgKi9cbiAgd2l0aFNjcm9sbGFibGVDb250YWluZXJzKHNjcm9sbGFibGVzOiBDZGtTY3JvbGxhYmxlW10pOiB0aGlzIHtcbiAgICB0aGlzLl9zY3JvbGxhYmxlcyA9IHNjcm9sbGFibGVzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbmV3IHByZWZlcnJlZCBwb3NpdGlvbnMuXG4gICAqIEBwYXJhbSBwb3NpdGlvbnMgTGlzdCBvZiBwb3NpdGlvbnMgb3B0aW9ucyBmb3IgdGhpcyBvdmVybGF5LlxuICAgKi9cbiAgd2l0aFBvc2l0aW9ucyhwb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW10pOiB0aGlzIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRQb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG5cbiAgICAvLyBJZiB0aGUgbGFzdCBjYWxjdWxhdGVkIHBvc2l0aW9uIG9iamVjdCBpc24ndCBwYXJ0IG9mIHRoZSBwb3NpdGlvbnMgYW55bW9yZSwgY2xlYXJcbiAgICAvLyBpdCBpbiBvcmRlciB0byBhdm9pZCBpdCBiZWluZyBwaWNrZWQgdXAgaWYgdGhlIGNvbnN1bWVyIHRyaWVzIHRvIHJlLWFwcGx5LlxuICAgIGlmIChwb3NpdGlvbnMuaW5kZXhPZih0aGlzLl9sYXN0UG9zaXRpb24hKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuX2xhc3RQb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsaWRhdGVQb3NpdGlvbnMoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBtaW5pbXVtIGRpc3RhbmNlIHRoZSBvdmVybGF5IG1heSBiZSBwb3NpdGlvbmVkIHRvIHRoZSBlZGdlIG9mIHRoZSB2aWV3cG9ydC5cbiAgICogQHBhcmFtIG1hcmdpbiBSZXF1aXJlZCBtYXJnaW4gYmV0d2VlbiB0aGUgb3ZlcmxheSBhbmQgdGhlIHZpZXdwb3J0IGVkZ2UgaW4gcGl4ZWxzLlxuICAgKi9cbiAgd2l0aFZpZXdwb3J0TWFyZ2luKG1hcmdpbjogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy5fdmlld3BvcnRNYXJnaW4gPSBtYXJnaW47XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogU2V0cyB3aGV0aGVyIHRoZSBvdmVybGF5J3Mgd2lkdGggYW5kIGhlaWdodCBjYW4gYmUgY29uc3RyYWluZWQgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuICovXG4gIHdpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmxleGlibGVEaW1lbnNpb25zID0gdHJ1ZSk6IHRoaXMge1xuICAgIHRoaXMuX2hhc0ZsZXhpYmxlRGltZW5zaW9ucyA9IGZsZXhpYmxlRGltZW5zaW9ucztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBTZXRzIHdoZXRoZXIgdGhlIG92ZXJsYXkgY2FuIGdyb3cgYWZ0ZXIgdGhlIGluaXRpYWwgb3BlbiB2aWEgZmxleGlibGUgd2lkdGgvaGVpZ2h0LiAqL1xuICB3aXRoR3Jvd0FmdGVyT3Blbihncm93QWZ0ZXJPcGVuID0gdHJ1ZSk6IHRoaXMge1xuICAgIHRoaXMuX2dyb3dBZnRlck9wZW4gPSBncm93QWZ0ZXJPcGVuO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFNldHMgd2hldGhlciB0aGUgb3ZlcmxheSBjYW4gYmUgcHVzaGVkIG9uLXNjcmVlbiBpZiBub25lIG9mIHRoZSBwcm92aWRlZCBwb3NpdGlvbnMgZml0LiAqL1xuICB3aXRoUHVzaChjYW5QdXNoID0gdHJ1ZSk6IHRoaXMge1xuICAgIHRoaXMuX2NhblB1c2ggPSBjYW5QdXNoO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgd2hldGhlciB0aGUgb3ZlcmxheSdzIHBvc2l0aW9uIHNob3VsZCBiZSBsb2NrZWQgaW4gYWZ0ZXIgaXQgaXMgcG9zaXRpb25lZFxuICAgKiBpbml0aWFsbHkuIFdoZW4gYW4gb3ZlcmxheSBpcyBsb2NrZWQgaW4sIGl0IHdvbid0IGF0dGVtcHQgdG8gcmVwb3NpdGlvbiBpdHNlbGZcbiAgICogd2hlbiB0aGUgcG9zaXRpb24gaXMgcmUtYXBwbGllZCAoZS5nLiB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgYXdheSkuXG4gICAqIEBwYXJhbSBpc0xvY2tlZCBXaGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCBsb2NrZWQgaW4uXG4gICAqL1xuICB3aXRoTG9ja2VkUG9zaXRpb24oaXNMb2NrZWQgPSB0cnVlKTogdGhpcyB7XG4gICAgdGhpcy5fcG9zaXRpb25Mb2NrZWQgPSBpc0xvY2tlZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBvcmlnaW4sIHJlbGF0aXZlIHRvIHdoaWNoIHRvIHBvc2l0aW9uIHRoZSBvdmVybGF5LlxuICAgKiBVc2luZyBhbiBlbGVtZW50IG9yaWdpbiBpcyB1c2VmdWwgZm9yIGJ1aWxkaW5nIGNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGJlIHBvc2l0aW9uZWRcbiAgICogcmVsYXRpdmVseSB0byBhIHRyaWdnZXIgKGUuZy4gZHJvcGRvd24gbWVudXMgb3IgdG9vbHRpcHMpLCB3aGVyZWFzIHVzaW5nIGEgcG9pbnQgY2FuIGJlXG4gICAqIHVzZWQgZm9yIGNhc2VzIGxpa2UgY29udGV4dHVhbCBtZW51cyB3aGljaCBvcGVuIHJlbGF0aXZlIHRvIHRoZSB1c2VyJ3MgcG9pbnRlci5cbiAgICogQHBhcmFtIG9yaWdpbiBSZWZlcmVuY2UgdG8gdGhlIG5ldyBvcmlnaW4uXG4gICAqL1xuICBzZXRPcmlnaW4ob3JpZ2luOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3lPcmlnaW4pOiB0aGlzIHtcbiAgICB0aGlzLl9vcmlnaW4gPSBvcmlnaW47XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCBvZmZzZXQgZm9yIHRoZSBvdmVybGF5J3MgY29ubmVjdGlvbiBwb2ludCBvbiB0aGUgeC1heGlzLlxuICAgKiBAcGFyYW0gb2Zmc2V0IE5ldyBvZmZzZXQgaW4gdGhlIFggYXhpcy5cbiAgICovXG4gIHdpdGhEZWZhdWx0T2Zmc2V0WChvZmZzZXQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuX29mZnNldFggPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCBvZmZzZXQgZm9yIHRoZSBvdmVybGF5J3MgY29ubmVjdGlvbiBwb2ludCBvbiB0aGUgeS1heGlzLlxuICAgKiBAcGFyYW0gb2Zmc2V0IE5ldyBvZmZzZXQgaW4gdGhlIFkgYXhpcy5cbiAgICovXG4gIHdpdGhEZWZhdWx0T2Zmc2V0WShvZmZzZXQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuX29mZnNldFkgPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGF0IHRoZSBwb3NpdGlvbiBzdHJhdGVneSBzaG91bGQgc2V0IGEgYHRyYW5zZm9ybS1vcmlnaW5gIG9uIHNvbWUgZWxlbWVudHNcbiAgICogaW5zaWRlIHRoZSBvdmVybGF5LCBkZXBlbmRpbmcgb24gdGhlIGN1cnJlbnQgcG9zaXRpb24gdGhhdCBpcyBiZWluZyBhcHBsaWVkLiBUaGlzIGlzXG4gICAqIHVzZWZ1bCBmb3IgdGhlIGNhc2VzIHdoZXJlIHRoZSBvcmlnaW4gb2YgYW4gYW5pbWF0aW9uIGNhbiBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZVxuICAgKiBhbGlnbm1lbnQgb2YgdGhlIG92ZXJsYXkuXG4gICAqIEBwYXJhbSBzZWxlY3RvciBDU1Mgc2VsZWN0b3IgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZmluZCB0aGUgdGFyZ2V0XG4gICAqICAgIGVsZW1lbnRzIG9udG8gd2hpY2ggdG8gc2V0IHRoZSB0cmFuc2Zvcm0gb3JpZ2luLlxuICAgKi9cbiAgd2l0aFRyYW5zZm9ybU9yaWdpbk9uKHNlbGVjdG9yOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1PcmlnaW5TZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlICh4LCB5KSBjb29yZGluYXRlIG9mIGEgY29ubmVjdGlvbiBwb2ludCBvbiB0aGUgb3JpZ2luIGJhc2VkIG9uIGEgcmVsYXRpdmUgcG9zaXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9nZXRPcmlnaW5Qb2ludChvcmlnaW5SZWN0OiBDbGllbnRSZWN0LCBwb3M6IENvbm5lY3RlZFBvc2l0aW9uKTogUG9pbnQge1xuICAgIGxldCB4OiBudW1iZXI7XG4gICAgaWYgKHBvcy5vcmlnaW5YID09ICdjZW50ZXInKSB7XG4gICAgICAvLyBOb3RlOiB3aGVuIGNlbnRlcmluZyB3ZSBzaG91bGQgYWx3YXlzIHVzZSB0aGUgYGxlZnRgXG4gICAgICAvLyBvZmZzZXQsIG90aGVyd2lzZSB0aGUgcG9zaXRpb24gd2lsbCBiZSB3cm9uZyBpbiBSVEwuXG4gICAgICB4ID0gb3JpZ2luUmVjdC5sZWZ0ICsgKG9yaWdpblJlY3Qud2lkdGggLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhcnRYID0gdGhpcy5faXNSdGwoKSA/IG9yaWdpblJlY3QucmlnaHQgOiBvcmlnaW5SZWN0LmxlZnQ7XG4gICAgICBjb25zdCBlbmRYID0gdGhpcy5faXNSdGwoKSA/IG9yaWdpblJlY3QubGVmdCA6IG9yaWdpblJlY3QucmlnaHQ7XG4gICAgICB4ID0gcG9zLm9yaWdpblggPT0gJ3N0YXJ0JyA/IHN0YXJ0WCA6IGVuZFg7XG4gICAgfVxuXG4gICAgbGV0IHk6IG51bWJlcjtcbiAgICBpZiAocG9zLm9yaWdpblkgPT0gJ2NlbnRlcicpIHtcbiAgICAgIHkgPSBvcmlnaW5SZWN0LnRvcCArIChvcmlnaW5SZWN0LmhlaWdodCAvIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gcG9zLm9yaWdpblkgPT0gJ3RvcCcgPyBvcmlnaW5SZWN0LnRvcCA6IG9yaWdpblJlY3QuYm90dG9tO1xuICAgIH1cblxuICAgIHJldHVybiB7eCwgeX07XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSAoeCwgeSkgY29vcmRpbmF0ZSBvZiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBvdmVybGF5IGdpdmVuIGEgZ2l2ZW4gcG9zaXRpb24gYW5kXG4gICAqIG9yaWdpbiBwb2ludCB0byB3aGljaCB0aGUgb3ZlcmxheSBzaG91bGQgYmUgY29ubmVjdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0T3ZlcmxheVBvaW50KFxuICAgICAgb3JpZ2luUG9pbnQ6IFBvaW50LFxuICAgICAgb3ZlcmxheVJlY3Q6IENsaWVudFJlY3QsXG4gICAgICBwb3M6IENvbm5lY3RlZFBvc2l0aW9uKTogUG9pbnQge1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSAob3ZlcmxheVN0YXJ0WCwgb3ZlcmxheVN0YXJ0WSksIHRoZSBzdGFydCBvZiB0aGVcbiAgICAvLyBwb3RlbnRpYWwgb3ZlcmxheSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgb3JpZ2luIHBvaW50LlxuICAgIGxldCBvdmVybGF5U3RhcnRYOiBudW1iZXI7XG4gICAgaWYgKHBvcy5vdmVybGF5WCA9PSAnY2VudGVyJykge1xuICAgICAgb3ZlcmxheVN0YXJ0WCA9IC1vdmVybGF5UmVjdC53aWR0aCAvIDI7XG4gICAgfSBlbHNlIGlmIChwb3Mub3ZlcmxheVggPT09ICdzdGFydCcpIHtcbiAgICAgIG92ZXJsYXlTdGFydFggPSB0aGlzLl9pc1J0bCgpID8gLW92ZXJsYXlSZWN0LndpZHRoIDogMDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3ZlcmxheVN0YXJ0WCA9IHRoaXMuX2lzUnRsKCkgPyAwIDogLW92ZXJsYXlSZWN0LndpZHRoO1xuICAgIH1cblxuICAgIGxldCBvdmVybGF5U3RhcnRZOiBudW1iZXI7XG4gICAgaWYgKHBvcy5vdmVybGF5WSA9PSAnY2VudGVyJykge1xuICAgICAgb3ZlcmxheVN0YXJ0WSA9IC1vdmVybGF5UmVjdC5oZWlnaHQgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdmVybGF5U3RhcnRZID0gcG9zLm92ZXJsYXlZID09ICd0b3AnID8gMCA6IC1vdmVybGF5UmVjdC5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gVGhlICh4LCB5KSBjb29yZGluYXRlcyBvZiB0aGUgb3ZlcmxheS5cbiAgICByZXR1cm4ge1xuICAgICAgeDogb3JpZ2luUG9pbnQueCArIG92ZXJsYXlTdGFydFgsXG4gICAgICB5OiBvcmlnaW5Qb2ludC55ICsgb3ZlcmxheVN0YXJ0WSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEdldHMgaG93IHdlbGwgYW4gb3ZlcmxheSBhdCB0aGUgZ2l2ZW4gcG9pbnQgd2lsbCBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC4gKi9cbiAgcHJpdmF0ZSBfZ2V0T3ZlcmxheUZpdChwb2ludDogUG9pbnQsIG92ZXJsYXk6IENsaWVudFJlY3QsIHZpZXdwb3J0OiBDbGllbnRSZWN0LFxuICAgIHBvc2l0aW9uOiBDb25uZWN0ZWRQb3NpdGlvbik6IE92ZXJsYXlGaXQge1xuXG4gICAgbGV0IHt4LCB5fSA9IHBvaW50O1xuICAgIGxldCBvZmZzZXRYID0gdGhpcy5fZ2V0T2Zmc2V0KHBvc2l0aW9uLCAneCcpO1xuICAgIGxldCBvZmZzZXRZID0gdGhpcy5fZ2V0T2Zmc2V0KHBvc2l0aW9uLCAneScpO1xuXG4gICAgLy8gQWNjb3VudCBmb3IgdGhlIG9mZnNldHMgc2luY2UgdGhleSBjb3VsZCBwdXNoIHRoZSBvdmVybGF5IG91dCBvZiB0aGUgdmlld3BvcnQuXG4gICAgaWYgKG9mZnNldFgpIHtcbiAgICAgIHggKz0gb2Zmc2V0WDtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0WSkge1xuICAgICAgeSArPSBvZmZzZXRZO1xuICAgIH1cblxuICAgIC8vIEhvdyBtdWNoIHRoZSBvdmVybGF5IHdvdWxkIG92ZXJmbG93IGF0IHRoaXMgcG9zaXRpb24sIG9uIGVhY2ggc2lkZS5cbiAgICBsZXQgbGVmdE92ZXJmbG93ID0gMCAtIHg7XG4gICAgbGV0IHJpZ2h0T3ZlcmZsb3cgPSAoeCArIG92ZXJsYXkud2lkdGgpIC0gdmlld3BvcnQud2lkdGg7XG4gICAgbGV0IHRvcE92ZXJmbG93ID0gMCAtIHk7XG4gICAgbGV0IGJvdHRvbU92ZXJmbG93ID0gKHkgKyBvdmVybGF5LmhlaWdodCkgLSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAvLyBWaXNpYmxlIHBhcnRzIG9mIHRoZSBlbGVtZW50IG9uIGVhY2ggYXhpcy5cbiAgICBsZXQgdmlzaWJsZVdpZHRoID0gdGhpcy5fc3VidHJhY3RPdmVyZmxvd3Mob3ZlcmxheS53aWR0aCwgbGVmdE92ZXJmbG93LCByaWdodE92ZXJmbG93KTtcbiAgICBsZXQgdmlzaWJsZUhlaWdodCA9IHRoaXMuX3N1YnRyYWN0T3ZlcmZsb3dzKG92ZXJsYXkuaGVpZ2h0LCB0b3BPdmVyZmxvdywgYm90dG9tT3ZlcmZsb3cpO1xuICAgIGxldCB2aXNpYmxlQXJlYSA9IHZpc2libGVXaWR0aCAqIHZpc2libGVIZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlzaWJsZUFyZWEsXG4gICAgICBpc0NvbXBsZXRlbHlXaXRoaW5WaWV3cG9ydDogKG92ZXJsYXkud2lkdGggKiBvdmVybGF5LmhlaWdodCkgPT09IHZpc2libGVBcmVhLFxuICAgICAgZml0c0luVmlld3BvcnRWZXJ0aWNhbGx5OiB2aXNpYmxlSGVpZ2h0ID09PSBvdmVybGF5LmhlaWdodCxcbiAgICAgIGZpdHNJblZpZXdwb3J0SG9yaXpvbnRhbGx5OiB2aXNpYmxlV2lkdGggPT0gb3ZlcmxheS53aWR0aCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIG92ZXJsYXkgY2FuIGZpdCB3aXRoaW4gdGhlIHZpZXdwb3J0IHdoZW4gaXQgbWF5IHJlc2l6ZSBlaXRoZXIgaXRzIHdpZHRoIG9yIGhlaWdodC5cbiAgICogQHBhcmFtIGZpdCBIb3cgd2VsbCB0aGUgb3ZlcmxheSBmaXRzIGluIHRoZSB2aWV3cG9ydCBhdCBzb21lIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gcG9pbnQgVGhlICh4LCB5KSBjb29yZGluYXRlcyBvZiB0aGUgb3ZlcmxhdCBhdCBzb21lIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gdmlld3BvcnQgVGhlIGdlb21ldHJ5IG9mIHRoZSB2aWV3cG9ydC5cbiAgICovXG4gIHByaXZhdGUgX2NhbkZpdFdpdGhGbGV4aWJsZURpbWVuc2lvbnMoZml0OiBPdmVybGF5Rml0LCBwb2ludDogUG9pbnQsIHZpZXdwb3J0OiBDbGllbnRSZWN0KSB7XG4gICAgaWYgKHRoaXMuX2hhc0ZsZXhpYmxlRGltZW5zaW9ucykge1xuICAgICAgY29uc3QgYXZhaWxhYmxlSGVpZ2h0ID0gdmlld3BvcnQuYm90dG9tIC0gcG9pbnQueTtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gdmlld3BvcnQucmlnaHQgLSBwb2ludC54O1xuICAgICAgY29uc3QgbWluSGVpZ2h0ID0gZ2V0UGl4ZWxWYWx1ZSh0aGlzLl9vdmVybGF5UmVmLmdldENvbmZpZygpLm1pbkhlaWdodCk7XG4gICAgICBjb25zdCBtaW5XaWR0aCA9IGdldFBpeGVsVmFsdWUodGhpcy5fb3ZlcmxheVJlZi5nZXRDb25maWcoKS5taW5XaWR0aCk7XG5cbiAgICAgIGNvbnN0IHZlcnRpY2FsRml0ID0gZml0LmZpdHNJblZpZXdwb3J0VmVydGljYWxseSB8fFxuICAgICAgICAgIChtaW5IZWlnaHQgIT0gbnVsbCAmJiBtaW5IZWlnaHQgPD0gYXZhaWxhYmxlSGVpZ2h0KTtcbiAgICAgIGNvbnN0IGhvcml6b250YWxGaXQgPSBmaXQuZml0c0luVmlld3BvcnRIb3Jpem9udGFsbHkgfHxcbiAgICAgICAgICAobWluV2lkdGggIT0gbnVsbCAmJiBtaW5XaWR0aCA8PSBhdmFpbGFibGVXaWR0aCk7XG5cbiAgICAgIHJldHVybiB2ZXJ0aWNhbEZpdCAmJiBob3Jpem9udGFsRml0O1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcG9pbnQgYXQgd2hpY2ggdGhlIG92ZXJsYXkgY2FuIGJlIFwicHVzaGVkXCIgb24tc2NyZWVuLiBJZiB0aGUgb3ZlcmxheSBpcyBsYXJnZXIgdGhhblxuICAgKiB0aGUgdmlld3BvcnQsIHRoZSB0b3AtbGVmdCBjb3JuZXIgd2lsbCBiZSBwdXNoZWQgb24tc2NyZWVuICh3aXRoIG92ZXJmbG93IG9jY3VyaW5nIG9uIHRoZVxuICAgKiByaWdodCBhbmQgYm90dG9tKS5cbiAgICpcbiAgICogQHBhcmFtIHN0YXJ0IFN0YXJ0aW5nIHBvaW50IGZyb20gd2hpY2ggdGhlIG92ZXJsYXkgaXMgcHVzaGVkLlxuICAgKiBAcGFyYW0gb3ZlcmxheSBEaW1lbnNpb25zIG9mIHRoZSBvdmVybGF5LlxuICAgKiBAcGFyYW0gc2Nyb2xsUG9zaXRpb24gQ3VycmVudCB2aWV3cG9ydCBzY3JvbGwgcG9zaXRpb24uXG4gICAqIEByZXR1cm5zIFRoZSBwb2ludCBhdCB3aGljaCB0byBwb3NpdGlvbiB0aGUgb3ZlcmxheSBhZnRlciBwdXNoaW5nLiBUaGlzIGlzIGVmZmVjdGl2ZWx5IGEgbmV3XG4gICAqICAgICBvcmlnaW5Qb2ludC5cbiAgICovXG4gIHByaXZhdGUgX3B1c2hPdmVybGF5T25TY3JlZW4oc3RhcnQ6IFBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk6IENsaWVudFJlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb246IFZpZXdwb3J0U2Nyb2xsUG9zaXRpb24pOiBQb2ludCB7XG4gICAgLy8gSWYgdGhlIHBvc2l0aW9uIGlzIGxvY2tlZCBhbmQgd2UndmUgcHVzaGVkIHRoZSBvdmVybGF5IGFscmVhZHksIHJldXNlIHRoZSBwcmV2aW91cyBwdXNoXG4gICAgLy8gYW1vdW50LCByYXRoZXIgdGhhbiBwdXNoaW5nIGl0IGFnYWluLiBJZiB3ZSB3ZXJlIHRvIGNvbnRpbnVlIHB1c2hpbmcsIHRoZSBlbGVtZW50IHdvdWxkXG4gICAgLy8gcmVtYWluIGluIHRoZSB2aWV3cG9ydCwgd2hpY2ggZ29lcyBhZ2FpbnN0IHRoZSBleHBlY3RhdGlvbnMgd2hlbiBwb3NpdGlvbiBsb2NraW5nIGlzIGVuYWJsZWQuXG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzUHVzaEFtb3VudCAmJiB0aGlzLl9wb3NpdGlvbkxvY2tlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogc3RhcnQueCArIHRoaXMuX3ByZXZpb3VzUHVzaEFtb3VudC54LFxuICAgICAgICB5OiBzdGFydC55ICsgdGhpcy5fcHJldmlvdXNQdXNoQW1vdW50LnlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl92aWV3cG9ydFJlY3Q7XG5cbiAgICAvLyBEZXRlcm1pbmUgaG93IG11Y2ggdGhlIG92ZXJsYXkgZ29lcyBvdXRzaWRlIHRoZSB2aWV3cG9ydCBvbiBlYWNoXG4gICAgLy8gc2lkZSwgd2hpY2ggd2UnbGwgdXNlIHRvIGRlY2lkZSB3aGljaCBkaXJlY3Rpb24gdG8gcHVzaCBpdC5cbiAgICBjb25zdCBvdmVyZmxvd1JpZ2h0ID0gTWF0aC5tYXgoc3RhcnQueCArIG92ZXJsYXkud2lkdGggLSB2aWV3cG9ydC5yaWdodCwgMCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dCb3R0b20gPSBNYXRoLm1heChzdGFydC55ICsgb3ZlcmxheS5oZWlnaHQgLSB2aWV3cG9ydC5ib3R0b20sIDApO1xuICAgIGNvbnN0IG92ZXJmbG93VG9wID0gTWF0aC5tYXgodmlld3BvcnQudG9wIC0gc2Nyb2xsUG9zaXRpb24udG9wIC0gc3RhcnQueSwgMCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dMZWZ0ID0gTWF0aC5tYXgodmlld3BvcnQubGVmdCAtIHNjcm9sbFBvc2l0aW9uLmxlZnQgLSBzdGFydC54LCAwKTtcblxuICAgIC8vIEFtb3VudCBieSB3aGljaCB0byBwdXNoIHRoZSBvdmVybGF5IGluIGVhY2ggYXhpcyBzdWNoIHRoYXQgaXQgcmVtYWlucyBvbi1zY3JlZW4uXG4gICAgbGV0IHB1c2hYID0gMDtcbiAgICBsZXQgcHVzaFkgPSAwO1xuXG4gICAgLy8gSWYgdGhlIG92ZXJsYXkgZml0cyBjb21wbGV0ZWx5IHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSB2aWV3cG9ydCwgcHVzaCBpdCBmcm9tIHdoaWNoZXZlclxuICAgIC8vIGRpcmVjdGlvbiBpcyBnb2VzIG9mZi1zY3JlZW4uIE90aGVyd2lzZSwgcHVzaCB0aGUgdG9wLWxlZnQgY29ybmVyIHN1Y2ggdGhhdCBpdHMgaW4gdGhlXG4gICAgLy8gdmlld3BvcnQgYW5kIGFsbG93IGZvciB0aGUgdHJhaWxpbmcgZW5kIG9mIHRoZSBvdmVybGF5IHRvIGdvIG91dCBvZiBib3VuZHMuXG4gICAgaWYgKG92ZXJsYXkud2lkdGggPD0gdmlld3BvcnQud2lkdGgpIHtcbiAgICAgIHB1c2hYID0gb3ZlcmZsb3dMZWZ0IHx8IC1vdmVyZmxvd1JpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBwdXNoWCA9IHN0YXJ0LnggPCB0aGlzLl92aWV3cG9ydE1hcmdpbiA/ICh2aWV3cG9ydC5sZWZ0IC0gc2Nyb2xsUG9zaXRpb24ubGVmdCkgLSBzdGFydC54IDogMDtcbiAgICB9XG5cbiAgICBpZiAob3ZlcmxheS5oZWlnaHQgPD0gdmlld3BvcnQuaGVpZ2h0KSB7XG4gICAgICBwdXNoWSA9IG92ZXJmbG93VG9wIHx8IC1vdmVyZmxvd0JvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHVzaFkgPSBzdGFydC55IDwgdGhpcy5fdmlld3BvcnRNYXJnaW4gPyAodmlld3BvcnQudG9wIC0gc2Nyb2xsUG9zaXRpb24udG9wKSAtIHN0YXJ0LnkgOiAwO1xuICAgIH1cblxuICAgIHRoaXMuX3ByZXZpb3VzUHVzaEFtb3VudCA9IHt4OiBwdXNoWCwgeTogcHVzaFl9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHN0YXJ0LnggKyBwdXNoWCxcbiAgICAgIHk6IHN0YXJ0LnkgKyBwdXNoWSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgYSBjb21wdXRlZCBwb3NpdGlvbiB0byB0aGUgb3ZlcmxheSBhbmQgZW1pdHMgYSBwb3NpdGlvbiBjaGFuZ2UuXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgcG9zaXRpb24gcHJlZmVyZW5jZVxuICAgKiBAcGFyYW0gb3JpZ2luUG9pbnQgVGhlIHBvaW50IG9uIHRoZSBvcmlnaW4gZWxlbWVudCB3aGVyZSB0aGUgb3ZlcmxheSBpcyBjb25uZWN0ZWQuXG4gICAqL1xuICBwcml2YXRlIF9hcHBseVBvc2l0aW9uKHBvc2l0aW9uOiBDb25uZWN0ZWRQb3NpdGlvbiwgb3JpZ2luUG9pbnQ6IFBvaW50KSB7XG4gICAgdGhpcy5fc2V0VHJhbnNmb3JtT3JpZ2luKHBvc2l0aW9uKTtcbiAgICB0aGlzLl9zZXRPdmVybGF5RWxlbWVudFN0eWxlcyhvcmlnaW5Qb2ludCwgcG9zaXRpb24pO1xuICAgIHRoaXMuX3NldEJvdW5kaW5nQm94U3R5bGVzKG9yaWdpblBvaW50LCBwb3NpdGlvbik7XG5cbiAgICBpZiAocG9zaXRpb24ucGFuZWxDbGFzcykge1xuICAgICAgdGhpcy5fYWRkUGFuZWxDbGFzc2VzKHBvc2l0aW9uLnBhbmVsQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIFNhdmUgdGhlIGxhc3QgY29ubmVjdGVkIHBvc2l0aW9uIGluIGNhc2UgdGhlIHBvc2l0aW9uIG5lZWRzIHRvIGJlIHJlLWNhbGN1bGF0ZWQuXG4gICAgdGhpcy5fbGFzdFBvc2l0aW9uID0gcG9zaXRpb247XG5cbiAgICAvLyBOb3RpZnkgdGhhdCB0aGUgcG9zaXRpb24gaGFzIGJlZW4gY2hhbmdlZCBhbG9uZyB3aXRoIGl0cyBjaGFuZ2UgcHJvcGVydGllcy5cbiAgICAvLyBXZSBvbmx5IGVtaXQgaWYgd2UndmUgZ290IGFueSBzdWJzY3JpcHRpb25zLCBiZWNhdXNlIHRoZSBzY3JvbGwgdmlzaWJpbGl0eVxuICAgIC8vIGNhbGN1bGNhdGlvbnMgY2FuIGJlIHNvbWV3aGF0IGV4cGVuc2l2ZS5cbiAgICBpZiAodGhpcy5fcG9zaXRpb25DaGFuZ2VzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNjcm9sbGFibGVWaWV3UHJvcGVydGllcyA9IHRoaXMuX2dldFNjcm9sbFZpc2liaWxpdHkoKTtcbiAgICAgIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZShwb3NpdGlvbiwgc2Nyb2xsYWJsZVZpZXdQcm9wZXJ0aWVzKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQ2hhbmdlcy5uZXh0KGNoYW5nZUV2ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0luaXRpYWxSZW5kZXIgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSB0cmFuc2Zvcm0gb3JpZ2luIGJhc2VkIG9uIHRoZSBjb25maWd1cmVkIHNlbGVjdG9yIGFuZCB0aGUgcGFzc2VkLWluIHBvc2l0aW9uLiAgKi9cbiAgcHJpdmF0ZSBfc2V0VHJhbnNmb3JtT3JpZ2luKHBvc2l0aW9uOiBDb25uZWN0ZWRQb3NpdGlvbikge1xuICAgIGlmICghdGhpcy5fdHJhbnNmb3JtT3JpZ2luU2VsZWN0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPVxuICAgICAgICB0aGlzLl9ib3VuZGluZ0JveCEucXVlcnlTZWxlY3RvckFsbCh0aGlzLl90cmFuc2Zvcm1PcmlnaW5TZWxlY3Rvcik7XG4gICAgbGV0IHhPcmlnaW46ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJztcbiAgICBsZXQgeU9yaWdpbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdjZW50ZXInID0gcG9zaXRpb24ub3ZlcmxheVk7XG5cbiAgICBpZiAocG9zaXRpb24ub3ZlcmxheVggPT09ICdjZW50ZXInKSB7XG4gICAgICB4T3JpZ2luID0gJ2NlbnRlcic7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1J0bCgpKSB7XG4gICAgICB4T3JpZ2luID0gcG9zaXRpb24ub3ZlcmxheVggPT09ICdzdGFydCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB4T3JpZ2luID0gcG9zaXRpb24ub3ZlcmxheVggPT09ICdzdGFydCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVsZW1lbnRzW2ldLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGAke3hPcmlnaW59ICR7eU9yaWdpbn1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBwb3NpdGlvbiBhbmQgc2l6ZSBvZiB0aGUgb3ZlcmxheSdzIHNpemluZyBjb250YWluZXIuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGRvZXMgbm8gbWVhc3VyaW5nIGFuZCBhcHBsaWVzIG5vIHN0eWxlcyBzbyB0aGF0IHdlIGNhbiBjaGVhcGx5IGNvbXB1dGUgdGhlXG4gICAqIGJvdW5kcyBmb3IgYWxsIHBvc2l0aW9ucyBhbmQgY2hvb3NlIHRoZSBiZXN0IGZpdCBiYXNlZCBvbiB0aGVzZSByZXN1bHRzLlxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlQm91bmRpbmdCb3hSZWN0KG9yaWdpbjogUG9pbnQsIHBvc2l0aW9uOiBDb25uZWN0ZWRQb3NpdGlvbik6IEJvdW5kaW5nQm94UmVjdCB7XG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl92aWV3cG9ydFJlY3Q7XG4gICAgY29uc3QgaXNSdGwgPSB0aGlzLl9pc1J0bCgpO1xuICAgIGxldCBoZWlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIGJvdHRvbTogbnVtYmVyO1xuXG4gICAgaWYgKHBvc2l0aW9uLm92ZXJsYXlZID09PSAndG9wJykge1xuICAgICAgLy8gT3ZlcmxheSBpcyBvcGVuaW5nIFwiZG93bndhcmRcIiBhbmQgdGh1cyBpcyBib3VuZCBieSB0aGUgYm90dG9tIHZpZXdwb3J0IGVkZ2UuXG4gICAgICB0b3AgPSBvcmlnaW4ueTtcbiAgICAgIGhlaWdodCA9IHZpZXdwb3J0LmhlaWdodCAtIHRvcCArIHRoaXMuX3ZpZXdwb3J0TWFyZ2luO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24ub3ZlcmxheVkgPT09ICdib3R0b20nKSB7XG4gICAgICAvLyBPdmVybGF5IGlzIG9wZW5pbmcgXCJ1cHdhcmRcIiBhbmQgdGh1cyBpcyBib3VuZCBieSB0aGUgdG9wIHZpZXdwb3J0IGVkZ2UuIFdlIG5lZWQgdG8gYWRkXG4gICAgICAvLyB0aGUgdmlld3BvcnQgbWFyZ2luIGJhY2sgaW4sIGJlY2F1c2UgdGhlIHZpZXdwb3J0IHJlY3QgaXMgbmFycm93ZWQgZG93biB0byByZW1vdmUgdGhlXG4gICAgICAvLyBtYXJnaW4sIHdoZXJlYXMgdGhlIGBvcmlnaW5gIHBvc2l0aW9uIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gaXRzIGBDbGllbnRSZWN0YC5cbiAgICAgIGJvdHRvbSA9IHZpZXdwb3J0LmhlaWdodCAtIG9yaWdpbi55ICsgdGhpcy5fdmlld3BvcnRNYXJnaW4gKiAyO1xuICAgICAgaGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0IC0gYm90dG9tICsgdGhpcy5fdmlld3BvcnRNYXJnaW47XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIG5laXRoZXIgdG9wIG5vciBib3R0b20sIGl0IG1lYW5zIHRoYXQgdGhlIG92ZXJsYXkgaXMgdmVydGljYWxseSBjZW50ZXJlZCBvbiB0aGVcbiAgICAgIC8vIG9yaWdpbiBwb2ludC4gTm90ZSB0aGF0IHdlIHdhbnQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydCwgcmF0aGVyIHRoYW5cbiAgICAgIC8vIHRoZSBwYWdlLCB3aGljaCBpcyB3aHkgd2UgZG9uJ3QgdXNlIHNvbWV0aGluZyBsaWtlIGB2aWV3cG9ydC5ib3R0b20gLSBvcmlnaW4ueWAgYW5kXG4gICAgICAvLyBgb3JpZ2luLnkgLSB2aWV3cG9ydC50b3BgLlxuICAgICAgY29uc3Qgc21hbGxlc3REaXN0YW5jZVRvVmlld3BvcnRFZGdlID1cbiAgICAgICAgICBNYXRoLm1pbih2aWV3cG9ydC5ib3R0b20gLSBvcmlnaW4ueSArIHZpZXdwb3J0LnRvcCwgb3JpZ2luLnkpO1xuXG4gICAgICBjb25zdCBwcmV2aW91c0hlaWdodCA9IHRoaXMuX2xhc3RCb3VuZGluZ0JveFNpemUuaGVpZ2h0O1xuXG4gICAgICBoZWlnaHQgPSBzbWFsbGVzdERpc3RhbmNlVG9WaWV3cG9ydEVkZ2UgKiAyO1xuICAgICAgdG9wID0gb3JpZ2luLnkgLSBzbWFsbGVzdERpc3RhbmNlVG9WaWV3cG9ydEVkZ2U7XG5cbiAgICAgIGlmIChoZWlnaHQgPiBwcmV2aW91c0hlaWdodCAmJiAhdGhpcy5faXNJbml0aWFsUmVuZGVyICYmICF0aGlzLl9ncm93QWZ0ZXJPcGVuKSB7XG4gICAgICAgIHRvcCA9IG9yaWdpbi55IC0gKHByZXZpb3VzSGVpZ2h0IC8gMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIG92ZXJsYXkgaXMgb3BlbmluZyAncmlnaHQtd2FyZCcgKHRoZSBjb250ZW50IGZsb3dzIHRvIHRoZSByaWdodCkuXG4gICAgY29uc3QgaXNCb3VuZGVkQnlSaWdodFZpZXdwb3J0RWRnZSA9XG4gICAgICAgIChwb3NpdGlvbi5vdmVybGF5WCA9PT0gJ3N0YXJ0JyAmJiAhaXNSdGwpIHx8XG4gICAgICAgIChwb3NpdGlvbi5vdmVybGF5WCA9PT0gJ2VuZCcgJiYgaXNSdGwpO1xuXG4gICAgLy8gVGhlIG92ZXJsYXkgaXMgb3BlbmluZyAnbGVmdC13YXJkJyAodGhlIGNvbnRlbnQgZmxvd3MgdG8gdGhlIGxlZnQpLlxuICAgIGNvbnN0IGlzQm91bmRlZEJ5TGVmdFZpZXdwb3J0RWRnZSA9XG4gICAgICAgIChwb3NpdGlvbi5vdmVybGF5WCA9PT0gJ2VuZCcgJiYgIWlzUnRsKSB8fFxuICAgICAgICAocG9zaXRpb24ub3ZlcmxheVggPT09ICdzdGFydCcgJiYgaXNSdGwpO1xuXG4gICAgbGV0IHdpZHRoOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcjtcblxuICAgIGlmIChpc0JvdW5kZWRCeUxlZnRWaWV3cG9ydEVkZ2UpIHtcbiAgICAgIHJpZ2h0ID0gdmlld3BvcnQud2lkdGggLSBvcmlnaW4ueCArIHRoaXMuX3ZpZXdwb3J0TWFyZ2luO1xuICAgICAgd2lkdGggPSBvcmlnaW4ueCAtIHRoaXMuX3ZpZXdwb3J0TWFyZ2luO1xuICAgIH0gZWxzZSBpZiAoaXNCb3VuZGVkQnlSaWdodFZpZXdwb3J0RWRnZSkge1xuICAgICAgbGVmdCA9IG9yaWdpbi54O1xuICAgICAgd2lkdGggPSB2aWV3cG9ydC5yaWdodCAtIG9yaWdpbi54O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBuZWl0aGVyIHN0YXJ0IG5vciBlbmQsIGl0IG1lYW5zIHRoYXQgdGhlIG92ZXJsYXkgaXMgaG9yaXpvbnRhbGx5IGNlbnRlcmVkIG9uIHRoZVxuICAgICAgLy8gb3JpZ2luIHBvaW50LiBOb3RlIHRoYXQgd2Ugd2FudCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0LCByYXRoZXIgdGhhblxuICAgICAgLy8gdGhlIHBhZ2UsIHdoaWNoIGlzIHdoeSB3ZSBkb24ndCB1c2Ugc29tZXRoaW5nIGxpa2UgYHZpZXdwb3J0LnJpZ2h0IC0gb3JpZ2luLnhgIGFuZFxuICAgICAgLy8gYG9yaWdpbi54IC0gdmlld3BvcnQubGVmdGAuXG4gICAgICBjb25zdCBzbWFsbGVzdERpc3RhbmNlVG9WaWV3cG9ydEVkZ2UgPVxuICAgICAgICAgIE1hdGgubWluKHZpZXdwb3J0LnJpZ2h0IC0gb3JpZ2luLnggKyB2aWV3cG9ydC5sZWZ0LCBvcmlnaW4ueCk7XG4gICAgICBjb25zdCBwcmV2aW91c1dpZHRoID0gdGhpcy5fbGFzdEJvdW5kaW5nQm94U2l6ZS53aWR0aDtcblxuICAgICAgd2lkdGggPSBzbWFsbGVzdERpc3RhbmNlVG9WaWV3cG9ydEVkZ2UgKiAyO1xuICAgICAgbGVmdCA9IG9yaWdpbi54IC0gc21hbGxlc3REaXN0YW5jZVRvVmlld3BvcnRFZGdlO1xuXG4gICAgICBpZiAod2lkdGggPiBwcmV2aW91c1dpZHRoICYmICF0aGlzLl9pc0luaXRpYWxSZW5kZXIgJiYgIXRoaXMuX2dyb3dBZnRlck9wZW4pIHtcbiAgICAgICAgbGVmdCA9IG9yaWdpbi54IC0gKHByZXZpb3VzV2lkdGggLyAyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge3RvcDogdG9wISwgbGVmdDogbGVmdCEsIGJvdHRvbTogYm90dG9tISwgcmlnaHQ6IHJpZ2h0ISwgd2lkdGgsIGhlaWdodH07XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcG9zaXRpb24gYW5kIHNpemUgb2YgdGhlIG92ZXJsYXkncyBzaXppbmcgd3JhcHBlci4gVGhlIHdyYXBwZXIgaXMgcG9zaXRpb25lZCBvbiB0aGVcbiAgICogb3JpZ2luJ3MgY29ubmVjdGlvbiBwb2ludCBhbmQgc3RldGNoZXMgdG8gdGhlIGJvdW5kcyBvZiB0aGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEBwYXJhbSBvcmlnaW4gVGhlIHBvaW50IG9uIHRoZSBvcmlnaW4gZWxlbWVudCB3aGVyZSB0aGUgb3ZlcmxheSBpcyBjb25uZWN0ZWQuXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgcG9zaXRpb24gcHJlZmVyZW5jZVxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Qm91bmRpbmdCb3hTdHlsZXMob3JpZ2luOiBQb2ludCwgcG9zaXRpb246IENvbm5lY3RlZFBvc2l0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgYm91bmRpbmdCb3hSZWN0ID0gdGhpcy5fY2FsY3VsYXRlQm91bmRpbmdCb3hSZWN0KG9yaWdpbiwgcG9zaXRpb24pO1xuXG4gICAgLy8gSXQncyB3ZWlyZCBpZiB0aGUgb3ZlcmxheSAqZ3Jvd3MqIHdoaWxlIHNjcm9sbGluZywgc28gd2UgdGFrZSB0aGUgbGFzdCBzaXplIGludG8gYWNjb3VudFxuICAgIC8vIHdoZW4gYXBwbHlpbmcgYSBuZXcgc2l6ZS5cbiAgICBpZiAoIXRoaXMuX2lzSW5pdGlhbFJlbmRlciAmJiAhdGhpcy5fZ3Jvd0FmdGVyT3Blbikge1xuICAgICAgYm91bmRpbmdCb3hSZWN0LmhlaWdodCA9IE1hdGgubWluKGJvdW5kaW5nQm94UmVjdC5oZWlnaHQsIHRoaXMuX2xhc3RCb3VuZGluZ0JveFNpemUuaGVpZ2h0KTtcbiAgICAgIGJvdW5kaW5nQm94UmVjdC53aWR0aCA9IE1hdGgubWluKGJvdW5kaW5nQm94UmVjdC53aWR0aCwgdGhpcy5fbGFzdEJvdW5kaW5nQm94U2l6ZS53aWR0aCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGVzID0ge30gYXMgQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIGlmICh0aGlzLl9oYXNFeGFjdFBvc2l0aW9uKCkpIHtcbiAgICAgIHN0eWxlcy50b3AgPSBzdHlsZXMubGVmdCA9ICcwJztcbiAgICAgIHN0eWxlcy5ib3R0b20gPSBzdHlsZXMucmlnaHQgPSBzdHlsZXMubWF4SGVpZ2h0ID0gc3R5bGVzLm1heFdpZHRoID0gJyc7XG4gICAgICBzdHlsZXMud2lkdGggPSBzdHlsZXMuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXhIZWlnaHQgPSB0aGlzLl9vdmVybGF5UmVmLmdldENvbmZpZygpLm1heEhlaWdodDtcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5fb3ZlcmxheVJlZi5nZXRDb25maWcoKS5tYXhXaWR0aDtcblxuICAgICAgc3R5bGVzLmhlaWdodCA9IGNvZXJjZUNzc1BpeGVsVmFsdWUoYm91bmRpbmdCb3hSZWN0LmhlaWdodCk7XG4gICAgICBzdHlsZXMudG9wID0gY29lcmNlQ3NzUGl4ZWxWYWx1ZShib3VuZGluZ0JveFJlY3QudG9wKTtcbiAgICAgIHN0eWxlcy5ib3R0b20gPSBjb2VyY2VDc3NQaXhlbFZhbHVlKGJvdW5kaW5nQm94UmVjdC5ib3R0b20pO1xuICAgICAgc3R5bGVzLndpZHRoID0gY29lcmNlQ3NzUGl4ZWxWYWx1ZShib3VuZGluZ0JveFJlY3Qud2lkdGgpO1xuICAgICAgc3R5bGVzLmxlZnQgPSBjb2VyY2VDc3NQaXhlbFZhbHVlKGJvdW5kaW5nQm94UmVjdC5sZWZ0KTtcbiAgICAgIHN0eWxlcy5yaWdodCA9IGNvZXJjZUNzc1BpeGVsVmFsdWUoYm91bmRpbmdCb3hSZWN0LnJpZ2h0KTtcblxuICAgICAgLy8gUHVzaCB0aGUgcGFuZSBjb250ZW50IHRvd2FyZHMgdGhlIHByb3BlciBkaXJlY3Rpb24uXG4gICAgICBpZiAocG9zaXRpb24ub3ZlcmxheVggPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHN0eWxlcy5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZXMuYWxpZ25JdGVtcyA9IHBvc2l0aW9uLm92ZXJsYXlYID09PSAnZW5kJyA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbi5vdmVybGF5WSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgc3R5bGVzLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZXMuanVzdGlmeUNvbnRlbnQgPSBwb3NpdGlvbi5vdmVybGF5WSA9PT0gJ2JvdHRvbScgPyAnZmxleC1lbmQnIDogJ2ZsZXgtc3RhcnQnO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF4SGVpZ2h0KSB7XG4gICAgICAgIHN0eWxlcy5tYXhIZWlnaHQgPSBjb2VyY2VDc3NQaXhlbFZhbHVlKG1heEhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhXaWR0aCkge1xuICAgICAgICBzdHlsZXMubWF4V2lkdGggPSBjb2VyY2VDc3NQaXhlbFZhbHVlKG1heFdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9sYXN0Qm91bmRpbmdCb3hTaXplID0gYm91bmRpbmdCb3hSZWN0O1xuXG4gICAgZXh0ZW5kU3R5bGVzKHRoaXMuX2JvdW5kaW5nQm94IS5zdHlsZSwgc3R5bGVzKTtcbiAgfVxuXG4gIC8qKiBSZXNldHMgdGhlIHN0eWxlcyBmb3IgdGhlIGJvdW5kaW5nIGJveCBzbyB0aGF0IGEgbmV3IHBvc2l0aW9uaW5nIGNhbiBiZSBjb21wdXRlZC4gKi9cbiAgcHJpdmF0ZSBfcmVzZXRCb3VuZGluZ0JveFN0eWxlcygpIHtcbiAgICBleHRlbmRTdHlsZXModGhpcy5fYm91bmRpbmdCb3ghLnN0eWxlLCB7XG4gICAgICB0b3A6ICcwJyxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICBib3R0b206ICcwJyxcbiAgICAgIGhlaWdodDogJycsXG4gICAgICB3aWR0aDogJycsXG4gICAgICBhbGlnbkl0ZW1zOiAnJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnJyxcbiAgICB9IGFzIENTU1N0eWxlRGVjbGFyYXRpb24pO1xuICB9XG5cbiAgLyoqIFJlc2V0cyB0aGUgc3R5bGVzIGZvciB0aGUgb3ZlcmxheSBwYW5lIHNvIHRoYXQgYSBuZXcgcG9zaXRpb25pbmcgY2FuIGJlIGNvbXB1dGVkLiAqL1xuICBwcml2YXRlIF9yZXNldE92ZXJsYXlFbGVtZW50U3R5bGVzKCkge1xuICAgIGV4dGVuZFN0eWxlcyh0aGlzLl9wYW5lLnN0eWxlLCB7XG4gICAgICB0b3A6ICcnLFxuICAgICAgbGVmdDogJycsXG4gICAgICBib3R0b206ICcnLFxuICAgICAgcmlnaHQ6ICcnLFxuICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgdHJhbnNmb3JtOiAnJyxcbiAgICB9IGFzIENTU1N0eWxlRGVjbGFyYXRpb24pO1xuICB9XG5cbiAgLyoqIFNldHMgcG9zaXRpb25pbmcgc3R5bGVzIHRvIHRoZSBvdmVybGF5IGVsZW1lbnQuICovXG4gIHByaXZhdGUgX3NldE92ZXJsYXlFbGVtZW50U3R5bGVzKG9yaWdpblBvaW50OiBQb2ludCwgcG9zaXRpb246IENvbm5lY3RlZFBvc2l0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgc3R5bGVzID0ge30gYXMgQ1NTU3R5bGVEZWNsYXJhdGlvbjtcbiAgICBjb25zdCBoYXNFeGFjdFBvc2l0aW9uID0gdGhpcy5faGFzRXhhY3RQb3NpdGlvbigpO1xuICAgIGNvbnN0IGhhc0ZsZXhpYmxlRGltZW5zaW9ucyA9IHRoaXMuX2hhc0ZsZXhpYmxlRGltZW5zaW9ucztcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLl9vdmVybGF5UmVmLmdldENvbmZpZygpO1xuXG4gICAgaWYgKGhhc0V4YWN0UG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gdGhpcy5fdmlld3BvcnRSdWxlci5nZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICBleHRlbmRTdHlsZXMoc3R5bGVzLCB0aGlzLl9nZXRFeGFjdE92ZXJsYXlZKHBvc2l0aW9uLCBvcmlnaW5Qb2ludCwgc2Nyb2xsUG9zaXRpb24pKTtcbiAgICAgIGV4dGVuZFN0eWxlcyhzdHlsZXMsIHRoaXMuX2dldEV4YWN0T3ZlcmxheVgocG9zaXRpb24sIG9yaWdpblBvaW50LCBzY3JvbGxQb3NpdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICB9XG5cbiAgICAvLyBVc2UgYSB0cmFuc2Zvcm0gdG8gYXBwbHkgdGhlIG9mZnNldHMuIFdlIGRvIHRoaXMgYmVjYXVzZSB0aGUgYGNlbnRlcmAgcG9zaXRpb25zIHJlbHkgb25cbiAgICAvLyBiZWluZyBpbiB0aGUgbm9ybWFsIGZsZXggZmxvdyBhbmQgc2V0dGluZyBhIGB0b3BgIC8gYGxlZnRgIGF0IGFsbCB3aWxsIGNvbXBsZXRlbHkgdGhyb3dcbiAgICAvLyBvZmYgdGhlIHBvc2l0aW9uLiBXZSBhbHNvIGNhbid0IHVzZSBtYXJnaW5zLCBiZWNhdXNlIHRoZXkgd29uJ3QgaGF2ZSBhbiBlZmZlY3QgaW4gc29tZVxuICAgIC8vIGNhc2VzIHdoZXJlIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0byBcInB1c2ggb2ZmIG9mXCIuIEZpbmFsbHksIHRoaXMgd29ya3NcbiAgICAvLyBiZXR0ZXIgYm90aCB3aXRoIGZsZXhpYmxlIGFuZCBub24tZmxleGlibGUgcG9zaXRpb25pbmcuXG4gICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIGxldCBvZmZzZXRYID0gdGhpcy5fZ2V0T2Zmc2V0KHBvc2l0aW9uLCAneCcpO1xuICAgIGxldCBvZmZzZXRZID0gdGhpcy5fZ2V0T2Zmc2V0KHBvc2l0aW9uLCAneScpO1xuXG4gICAgaWYgKG9mZnNldFgpIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBgdHJhbnNsYXRlWCgke29mZnNldFh9cHgpIGA7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldFkpIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBgdHJhbnNsYXRlWSgke29mZnNldFl9cHgpYDtcbiAgICB9XG5cbiAgICBzdHlsZXMudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nLnRyaW0oKTtcblxuICAgIC8vIElmIGEgbWF4V2lkdGggb3IgbWF4SGVpZ2h0IGlzIHNwZWNpZmllZCBvbiB0aGUgb3ZlcmxheSwgd2UgcmVtb3ZlIHRoZW0uIFdlIGRvIHRoaXMgYmVjYXVzZVxuICAgIC8vIHdlIG5lZWQgdGhlc2UgdmFsdWVzIHRvIGJvdGggYmUgc2V0IHRvIFwiMTAwJVwiIGZvciB0aGUgYXV0b21hdGljIGZsZXhpYmxlIHNpemluZyB0byB3b3JrLlxuICAgIC8vIFRoZSBtYXhIZWlnaHQgYW5kIG1heFdpZHRoIGFyZSBzZXQgb24gdGhlIGJvdW5kaW5nQm94IGluIG9yZGVyIHRvIGVuZm9yY2UgdGhlIGNvbnN0cmFpbnQuXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgZG9lc24ndCBhcHBseSB3aGVuIHdlIGhhdmUgYW4gZXhhY3QgcG9zaXRpb24sIGluIHdoaWNoIGNhc2Ugd2UgZG8gd2FudCB0b1xuICAgIC8vIGFwcGx5IHRoZW0gYmVjYXVzZSB0aGV5J2xsIGJlIGNsZWFyZWQgZnJvbSB0aGUgYm91bmRpbmcgYm94LlxuICAgIGlmIChjb25maWcubWF4SGVpZ2h0KSB7XG4gICAgICBpZiAoaGFzRXhhY3RQb3NpdGlvbikge1xuICAgICAgICBzdHlsZXMubWF4SGVpZ2h0ID0gY29lcmNlQ3NzUGl4ZWxWYWx1ZShjb25maWcubWF4SGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzRmxleGlibGVEaW1lbnNpb25zKSB7XG4gICAgICAgIHN0eWxlcy5tYXhIZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm1heFdpZHRoKSB7XG4gICAgICBpZiAoaGFzRXhhY3RQb3NpdGlvbikge1xuICAgICAgICBzdHlsZXMubWF4V2lkdGggPSBjb2VyY2VDc3NQaXhlbFZhbHVlKGNvbmZpZy5tYXhXaWR0aCk7XG4gICAgICB9IGVsc2UgaWYgKGhhc0ZsZXhpYmxlRGltZW5zaW9ucykge1xuICAgICAgICBzdHlsZXMubWF4V2lkdGggPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBleHRlbmRTdHlsZXModGhpcy5fcGFuZS5zdHlsZSwgc3R5bGVzKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBleGFjdCB0b3AvYm90dG9tIGZvciB0aGUgb3ZlcmxheSB3aGVuIG5vdCB1c2luZyBmbGV4aWJsZSBzaXppbmcgb3Igd2hlbiBwdXNoaW5nLiAqL1xuICBwcml2YXRlIF9nZXRFeGFjdE92ZXJsYXlZKHBvc2l0aW9uOiBDb25uZWN0ZWRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5Qb2ludDogUG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb246IFZpZXdwb3J0U2Nyb2xsUG9zaXRpb24pIHtcbiAgICAvLyBSZXNldCBhbnkgZXhpc3Rpbmcgc3R5bGVzLiBUaGlzIGlzIG5lY2Vzc2FyeSBpbiBjYXNlIHRoZVxuICAgIC8vIHByZWZlcnJlZCBwb3NpdGlvbiBoYXMgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBgYXBwbHlgLlxuICAgIGxldCBzdHlsZXMgPSB7dG9wOiAnJywgYm90dG9tOiAnJ30gYXMgQ1NTU3R5bGVEZWNsYXJhdGlvbjtcbiAgICBsZXQgb3ZlcmxheVBvaW50ID0gdGhpcy5fZ2V0T3ZlcmxheVBvaW50KG9yaWdpblBvaW50LCB0aGlzLl9vdmVybGF5UmVjdCwgcG9zaXRpb24pO1xuXG4gICAgaWYgKHRoaXMuX2lzUHVzaGVkKSB7XG4gICAgICBvdmVybGF5UG9pbnQgPSB0aGlzLl9wdXNoT3ZlcmxheU9uU2NyZWVuKG92ZXJsYXlQb2ludCwgdGhpcy5fb3ZlcmxheVJlY3QsIHNjcm9sbFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBsZXQgdmlydHVhbEtleWJvYXJkT2Zmc2V0ID1cbiAgICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gICAgLy8gTm9ybWFsbHkgdGhpcyB3b3VsZCBiZSB6ZXJvLCBob3dldmVyIHdoZW4gdGhlIG92ZXJsYXkgaXMgYXR0YWNoZWQgdG8gYW4gaW5wdXQgKGUuZy4gaW4gYW5cbiAgICAvLyBhdXRvY29tcGxldGUpLCBtb2JpbGUgYnJvd3NlcnMgd2lsbCBzaGlmdCBldmVyeXRoaW5nIGluIG9yZGVyIHRvIHB1dCB0aGUgaW5wdXQgaW4gdGhlIG1pZGRsZVxuICAgIC8vIG9mIHRoZSBzY3JlZW4gYW5kIHRvIG1ha2Ugc3BhY2UgZm9yIHRoZSB2aXJ0dWFsIGtleWJvYXJkLiBXZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoaXMgb2Zmc2V0LFxuICAgIC8vIG90aGVyd2lzZSBvdXIgcG9zaXRpb25pbmcgd2lsbCBiZSB0aHJvd24gb2ZmLlxuICAgIG92ZXJsYXlQb2ludC55IC09IHZpcnR1YWxLZXlib2FyZE9mZnNldDtcblxuICAgIC8vIFdlIHdhbnQgdG8gc2V0IGVpdGhlciBgdG9wYCBvciBgYm90dG9tYCBiYXNlZCBvbiB3aGV0aGVyIHRoZSBvdmVybGF5IHdhbnRzIHRvIGFwcGVhclxuICAgIC8vIGFib3ZlIG9yIGJlbG93IHRoZSBvcmlnaW4gYW5kIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIGVsZW1lbnQgd2lsbCBleHBhbmQuXG4gICAgaWYgKHBvc2l0aW9uLm92ZXJsYXlZID09PSAnYm90dG9tJykge1xuICAgICAgLy8gV2hlbiB1c2luZyBgYm90dG9tYCwgd2UgYWRqdXN0IHRoZSB5IHBvc2l0aW9uIHN1Y2ggdGhhdCBpdCBpcyB0aGUgZGlzdGFuY2VcbiAgICAgIC8vIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQgcmF0aGVyIHRoYW4gdGhlIHRvcC5cbiAgICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IS5jbGllbnRIZWlnaHQ7XG4gICAgICBzdHlsZXMuYm90dG9tID0gYCR7ZG9jdW1lbnRIZWlnaHQgLSAob3ZlcmxheVBvaW50LnkgKyB0aGlzLl9vdmVybGF5UmVjdC5oZWlnaHQpfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzLnRvcCA9IGNvZXJjZUNzc1BpeGVsVmFsdWUob3ZlcmxheVBvaW50LnkpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgZXhhY3QgbGVmdC9yaWdodCBmb3IgdGhlIG92ZXJsYXkgd2hlbiBub3QgdXNpbmcgZmxleGlibGUgc2l6aW5nIG9yIHdoZW4gcHVzaGluZy4gKi9cbiAgcHJpdmF0ZSBfZ2V0RXhhY3RPdmVybGF5WChwb3NpdGlvbjogQ29ubmVjdGVkUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luUG9pbnQ6IFBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uOiBWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgLy8gUmVzZXQgYW55IGV4aXN0aW5nIHN0eWxlcy4gVGhpcyBpcyBuZWNlc3NhcnkgaW4gY2FzZSB0aGUgcHJlZmVycmVkIHBvc2l0aW9uIGhhc1xuICAgIC8vIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgYGFwcGx5YC5cbiAgICBsZXQgc3R5bGVzID0ge2xlZnQ6ICcnLCByaWdodDogJyd9IGFzIENTU1N0eWxlRGVjbGFyYXRpb247XG4gICAgbGV0IG92ZXJsYXlQb2ludCA9IHRoaXMuX2dldE92ZXJsYXlQb2ludChvcmlnaW5Qb2ludCwgdGhpcy5fb3ZlcmxheVJlY3QsIHBvc2l0aW9uKTtcblxuICAgIGlmICh0aGlzLl9pc1B1c2hlZCkge1xuICAgICAgb3ZlcmxheVBvaW50ID0gdGhpcy5fcHVzaE92ZXJsYXlPblNjcmVlbihvdmVybGF5UG9pbnQsIHRoaXMuX292ZXJsYXlSZWN0LCBzY3JvbGxQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLy8gV2Ugd2FudCB0byBzZXQgZWl0aGVyIGBsZWZ0YCBvciBgcmlnaHRgIGJhc2VkIG9uIHdoZXRoZXIgdGhlIG92ZXJsYXkgd2FudHMgdG8gYXBwZWFyIFwiYmVmb3JlXCJcbiAgICAvLyBvciBcImFmdGVyXCIgdGhlIG9yaWdpbiwgd2hpY2ggZGV0ZXJtaW5lcyB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBlbGVtZW50IHdpbGwgZXhwYW5kLlxuICAgIC8vIEZvciB0aGUgaG9yaXpvbnRhbCBheGlzLCB0aGUgbWVhbmluZyBvZiBcImJlZm9yZVwiIGFuZCBcImFmdGVyXCIgY2hhbmdlIGJhc2VkIG9uIHdoZXRoZXIgdGhlXG4gICAgLy8gcGFnZSBpcyBpbiBSVEwgb3IgTFRSLlxuICAgIGxldCBob3Jpem9udGFsU3R5bGVQcm9wZXJ0eTogJ2xlZnQnIHwgJ3JpZ2h0JztcblxuICAgIGlmICh0aGlzLl9pc1J0bCgpKSB7XG4gICAgICBob3Jpem9udGFsU3R5bGVQcm9wZXJ0eSA9IHBvc2l0aW9uLm92ZXJsYXlYID09PSAnZW5kJyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhvcml6b250YWxTdHlsZVByb3BlcnR5ID0gcG9zaXRpb24ub3ZlcmxheVggPT09ICdlbmQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB9XG5cbiAgICAvLyBXaGVuIHdlJ3JlIHNldHRpbmcgYHJpZ2h0YCwgd2UgYWRqdXN0IHRoZSB4IHBvc2l0aW9uIHN1Y2ggdGhhdCBpdCBpcyB0aGUgZGlzdGFuY2VcbiAgICAvLyBmcm9tIHRoZSByaWdodCBlZGdlIG9mIHRoZSB2aWV3cG9ydCByYXRoZXIgdGhhbiB0aGUgbGVmdCBlZGdlLlxuICAgIGlmIChob3Jpem9udGFsU3R5bGVQcm9wZXJ0eSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCEuY2xpZW50V2lkdGg7XG4gICAgICBzdHlsZXMucmlnaHQgPSBgJHtkb2N1bWVudFdpZHRoIC0gKG92ZXJsYXlQb2ludC54ICsgdGhpcy5fb3ZlcmxheVJlY3Qud2lkdGgpfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzLmxlZnQgPSBjb2VyY2VDc3NQaXhlbFZhbHVlKG92ZXJsYXlQb2ludC54KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHZpZXcgcHJvcGVydGllcyBvZiB0aGUgdHJpZ2dlciBhbmQgb3ZlcmxheSwgaW5jbHVkaW5nIHdoZXRoZXIgdGhleSBhcmUgY2xpcHBlZFxuICAgKiBvciBjb21wbGV0ZWx5IG91dHNpZGUgdGhlIHZpZXcgb2YgYW55IG9mIHRoZSBzdHJhdGVneSdzIHNjcm9sbGFibGVzLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0U2Nyb2xsVmlzaWJpbGl0eSgpOiBTY3JvbGxpbmdWaXNpYmlsaXR5IHtcbiAgICAvLyBOb3RlOiBuZWVkcyBmcmVzaCByZWN0cyBzaW5jZSB0aGUgcG9zaXRpb24gY291bGQndmUgY2hhbmdlZC5cbiAgICBjb25zdCBvcmlnaW5Cb3VuZHMgPSB0aGlzLl9nZXRPcmlnaW5SZWN0KCk7XG4gICAgY29uc3Qgb3ZlcmxheUJvdW5kcyA9ICB0aGlzLl9wYW5lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gVE9ETyhqZWxib3Vybik6IGluc3RlYWQgb2YgbmVlZGluZyBhbGwgb2YgdGhlIGNsaWVudCByZWN0cyBmb3IgdGhlc2Ugc2Nyb2xsaW5nIGNvbnRhaW5lcnNcbiAgICAvLyBldmVyeSB0aW1lLCB3ZSBzaG91bGQgYmUgYWJsZSB0byB1c2UgdGhlIHNjcm9sbFRvcCBvZiB0aGUgY29udGFpbmVycyBpZiB0aGUgc2l6ZSBvZiB0aG9zZVxuICAgIC8vIGNvbnRhaW5lcnMgaGFzbid0IGNoYW5nZWQuXG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyQm91bmRzID0gdGhpcy5fc2Nyb2xsYWJsZXMubWFwKHNjcm9sbGFibGUgPT4ge1xuICAgICAgcmV0dXJuIHNjcm9sbGFibGUuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNPcmlnaW5DbGlwcGVkOiBpc0VsZW1lbnRDbGlwcGVkQnlTY3JvbGxpbmcob3JpZ2luQm91bmRzLCBzY3JvbGxDb250YWluZXJCb3VuZHMpLFxuICAgICAgaXNPcmlnaW5PdXRzaWRlVmlldzogaXNFbGVtZW50U2Nyb2xsZWRPdXRzaWRlVmlldyhvcmlnaW5Cb3VuZHMsIHNjcm9sbENvbnRhaW5lckJvdW5kcyksXG4gICAgICBpc092ZXJsYXlDbGlwcGVkOiBpc0VsZW1lbnRDbGlwcGVkQnlTY3JvbGxpbmcob3ZlcmxheUJvdW5kcywgc2Nyb2xsQ29udGFpbmVyQm91bmRzKSxcbiAgICAgIGlzT3ZlcmxheU91dHNpZGVWaWV3OiBpc0VsZW1lbnRTY3JvbGxlZE91dHNpZGVWaWV3KG92ZXJsYXlCb3VuZHMsIHNjcm9sbENvbnRhaW5lckJvdW5kcyksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBTdWJ0cmFjdHMgdGhlIGFtb3VudCB0aGF0IGFuIGVsZW1lbnQgaXMgb3ZlcmZsb3dpbmcgb24gYW4gYXhpcyBmcm9tIGl0cyBsZW5ndGguICovXG4gIHByaXZhdGUgX3N1YnRyYWN0T3ZlcmZsb3dzKGxlbmd0aDogbnVtYmVyLCAuLi5vdmVyZmxvd3M6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzLnJlZHVjZSgoY3VycmVudFZhbHVlOiBudW1iZXIsIGN1cnJlbnRPdmVyZmxvdzogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gY3VycmVudFZhbHVlIC0gTWF0aC5tYXgoY3VycmVudE92ZXJmbG93LCAwKTtcbiAgICB9LCBsZW5ndGgpO1xuICB9XG5cbiAgLyoqIE5hcnJvd3MgdGhlIGdpdmVuIHZpZXdwb3J0IHJlY3QgYnkgdGhlIGN1cnJlbnQgX3ZpZXdwb3J0TWFyZ2luLiAqL1xuICBwcml2YXRlIF9nZXROYXJyb3dlZFZpZXdwb3J0UmVjdCgpOiBDbGllbnRSZWN0IHtcbiAgICAvLyBXZSByZWNhbGN1bGF0ZSB0aGUgdmlld3BvcnQgcmVjdCBoZXJlIG91cnNlbHZlcywgcmF0aGVyIHRoYW4gdXNpbmcgdGhlIFZpZXdwb3J0UnVsZXIsXG4gICAgLy8gYmVjYXVzZSB3ZSB3YW50IHRvIHVzZSB0aGUgYGNsaWVudFdpZHRoYCBhbmQgYGNsaWVudEhlaWdodGAgYXMgdGhlIGJhc2UuIFRoZSBkaWZmZXJlbmNlXG4gICAgLy8gYmVpbmcgdGhhdCB0aGUgY2xpZW50IHByb3BlcnRpZXMgZG9uJ3QgaW5jbHVkZSB0aGUgc2Nyb2xsYmFyLCBhcyBvcHBvc2VkIHRvIGBpbm5lcldpZHRoYFxuICAgIC8vIGFuZCBgaW5uZXJIZWlnaHRgIHRoYXQgZG8uIFRoaXMgaXMgbmVjZXNzYXJ5LCBiZWNhdXNlIHRoZSBvdmVybGF5IGNvbnRhaW5lciB1c2VzXG4gICAgLy8gMTAwJSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCB3aGljaCBkb24ndCBpbmNsdWRlIHRoZSBzY3JvbGxiYXIgZWl0aGVyLlxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IS5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQhLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHRoaXMuX3ZpZXdwb3J0UnVsZXIuZ2V0Vmlld3BvcnRTY3JvbGxQb3NpdGlvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogICAgc2Nyb2xsUG9zaXRpb24udG9wICsgdGhpcy5fdmlld3BvcnRNYXJnaW4sXG4gICAgICBsZWZ0OiAgIHNjcm9sbFBvc2l0aW9uLmxlZnQgKyB0aGlzLl92aWV3cG9ydE1hcmdpbixcbiAgICAgIHJpZ2h0OiAgc2Nyb2xsUG9zaXRpb24ubGVmdCArIHdpZHRoIC0gdGhpcy5fdmlld3BvcnRNYXJnaW4sXG4gICAgICBib3R0b206IHNjcm9sbFBvc2l0aW9uLnRvcCArIGhlaWdodCAtIHRoaXMuX3ZpZXdwb3J0TWFyZ2luLFxuICAgICAgd2lkdGg6ICB3aWR0aCAgLSAoMiAqIHRoaXMuX3ZpZXdwb3J0TWFyZ2luKSxcbiAgICAgIGhlaWdodDogaGVpZ2h0IC0gKDIgKiB0aGlzLl92aWV3cG9ydE1hcmdpbiksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSB3ZSdyZSBkZWFsaW5nIHdpdGggYW4gUlRMIGNvbnRleHQgKi9cbiAgcHJpdmF0ZSBfaXNSdGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlSZWYuZ2V0RGlyZWN0aW9uKCkgPT09ICdydGwnO1xuICB9XG5cbiAgLyoqIERldGVybWluZXMgd2hldGhlciB0aGUgb3ZlcmxheSB1c2VzIGV4YWN0IG9yIGZsZXhpYmxlIHBvc2l0aW9uaW5nLiAqL1xuICBwcml2YXRlIF9oYXNFeGFjdFBvc2l0aW9uKCkge1xuICAgIHJldHVybiAhdGhpcy5faGFzRmxleGlibGVEaW1lbnNpb25zIHx8IHRoaXMuX2lzUHVzaGVkO1xuICB9XG5cbiAgLyoqIFJldHJpZXZlcyB0aGUgb2Zmc2V0IG9mIGEgcG9zaXRpb24gYWxvbmcgdGhlIHggb3IgeSBheGlzLiAqL1xuICBwcml2YXRlIF9nZXRPZmZzZXQocG9zaXRpb246IENvbm5lY3RlZFBvc2l0aW9uLCBheGlzOiAneCcgfCAneScpIHtcbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAvLyBXZSBkb24ndCBkbyBzb21ldGhpbmcgbGlrZSBgcG9zaXRpb25bJ29mZnNldCcgKyBheGlzXWAgaW5cbiAgICAgIC8vIG9yZGVyIHRvIGF2b2lkIGJyZWtpbmcgbWluaWZpZXJzIHRoYXQgcmVuYW1lIHByb3BlcnRpZXMuXG4gICAgICByZXR1cm4gcG9zaXRpb24ub2Zmc2V0WCA9PSBudWxsID8gdGhpcy5fb2Zmc2V0WCA6IHBvc2l0aW9uLm9mZnNldFg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uLm9mZnNldFkgPT0gbnVsbCA/IHRoaXMuX29mZnNldFkgOiBwb3NpdGlvbi5vZmZzZXRZO1xuICB9XG5cbiAgLyoqIFZhbGlkYXRlcyB0aGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIG1hdGNoIHRoZSBleHBlY3RlZCB2YWx1ZXMuICovXG4gIHByaXZhdGUgX3ZhbGlkYXRlUG9zaXRpb25zKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fcHJlZmVycmVkUG9zaXRpb25zLmxlbmd0aCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0ZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTogQXQgbGVhc3Qgb25lIHBvc2l0aW9uIGlzIHJlcXVpcmVkLicpO1xuICAgIH1cblxuICAgIC8vIFRPRE8oY3Jpc2JldG8pOiByZW1vdmUgdGhlc2Ugb25jZSBBbmd1bGFyJ3MgdGVtcGxhdGUgdHlwZVxuICAgIC8vIGNoZWNraW5nIGlzIGFkdmFuY2VkIGVub3VnaCB0byBjYXRjaCB0aGVzZSBjYXNlcy5cbiAgICB0aGlzLl9wcmVmZXJyZWRQb3NpdGlvbnMuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgIHZhbGlkYXRlSG9yaXpvbnRhbFBvc2l0aW9uKCdvcmlnaW5YJywgcGFpci5vcmlnaW5YKTtcbiAgICAgIHZhbGlkYXRlVmVydGljYWxQb3NpdGlvbignb3JpZ2luWScsIHBhaXIub3JpZ2luWSk7XG4gICAgICB2YWxpZGF0ZUhvcml6b250YWxQb3NpdGlvbignb3ZlcmxheVgnLCBwYWlyLm92ZXJsYXlYKTtcbiAgICAgIHZhbGlkYXRlVmVydGljYWxQb3NpdGlvbignb3ZlcmxheVknLCBwYWlyLm92ZXJsYXlZKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBBZGRzIGEgc2luZ2xlIENTUyBjbGFzcyBvciBhbiBhcnJheSBvZiBjbGFzc2VzIG9uIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICBwcml2YXRlIF9hZGRQYW5lbENsYXNzZXMoY3NzQ2xhc3Nlczogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5fcGFuZSkge1xuICAgICAgY29lcmNlQXJyYXkoY3NzQ2xhc3NlcykuZm9yRWFjaChjc3NDbGFzcyA9PiB7XG4gICAgICAgIGlmIChjc3NDbGFzcyAhPT0gJycgJiYgdGhpcy5fYXBwbGllZFBhbmVsQ2xhc3Nlcy5pbmRleE9mKGNzc0NsYXNzKSA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLl9hcHBsaWVkUGFuZWxDbGFzc2VzLnB1c2goY3NzQ2xhc3MpO1xuICAgICAgICAgIHRoaXMuX3BhbmUuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhcnMgdGhlIGNsYXNzZXMgdGhhdCB0aGUgcG9zaXRpb24gc3RyYXRlZ3kgaGFzIGFwcGxpZWQgZnJvbSB0aGUgb3ZlcmxheSBwYW5lbC4gKi9cbiAgcHJpdmF0ZSBfY2xlYXJQYW5lbENsYXNzZXMoKSB7XG4gICAgaWYgKHRoaXMuX3BhbmUpIHtcbiAgICAgIHRoaXMuX2FwcGxpZWRQYW5lbENsYXNzZXMuZm9yRWFjaChjc3NDbGFzcyA9PiB7XG4gICAgICAgIHRoaXMuX3BhbmUuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FwcGxpZWRQYW5lbENsYXNzZXMgPSBbXTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgQ2xpZW50UmVjdCBvZiB0aGUgY3VycmVudCBvcmlnaW4uICovXG4gIHByaXZhdGUgX2dldE9yaWdpblJlY3QoKTogQ2xpZW50UmVjdCB7XG4gICAgY29uc3Qgb3JpZ2luID0gdGhpcy5fb3JpZ2luO1xuXG4gICAgaWYgKG9yaWdpbiBpbnN0YW5jZW9mIEVsZW1lbnRSZWYpIHtcbiAgICAgIHJldHVybiBvcmlnaW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgRWxlbWVudCBzbyBTVkcgZWxlbWVudHMgYXJlIGFsc28gc3VwcG9ydGVkLlxuICAgIGlmIChvcmlnaW4gaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICByZXR1cm4gb3JpZ2luLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHdpZHRoID0gb3JpZ2luLndpZHRoIHx8IDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gb3JpZ2luLmhlaWdodCB8fCAwO1xuXG4gICAgLy8gSWYgdGhlIG9yaWdpbiBpcyBhIHBvaW50LCByZXR1cm4gYSBjbGllbnQgcmVjdCBhcyBpZiBpdCB3YXMgYSAweDAgZWxlbWVudCBhdCB0aGUgcG9pbnQuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogb3JpZ2luLnksXG4gICAgICBib3R0b206IG9yaWdpbi55ICsgaGVpZ2h0LFxuICAgICAgbGVmdDogb3JpZ2luLngsXG4gICAgICByaWdodDogb3JpZ2luLnggKyB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoXG4gICAgfTtcbiAgfVxufVxuXG4vKiogQSBzaW1wbGUgKHgsIHkpIGNvb3JkaW5hdGUuICovXG5pbnRlcmZhY2UgUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuLyoqIFJlY29yZCBvZiBtZWFzdXJlbWVudHMgZm9yIGhvdyBhbiBvdmVybGF5IChhdCBhIGdpdmVuIHBvc2l0aW9uKSBmaXRzIGludG8gdGhlIHZpZXdwb3J0LiAqL1xuaW50ZXJmYWNlIE92ZXJsYXlGaXQge1xuICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBmaXRzIGNvbXBsZXRlbHkgaW4gdGhlIHZpZXdwb3J0LiAqL1xuICBpc0NvbXBsZXRlbHlXaXRoaW5WaWV3cG9ydDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBmaXRzIGluIHRoZSB2aWV3cG9ydCBvbiB0aGUgeS1heGlzLiAqL1xuICBmaXRzSW5WaWV3cG9ydFZlcnRpY2FsbHk6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZml0cyBpbiB0aGUgdmlld3BvcnQgb24gdGhlIHgtYXhpcy4gKi9cbiAgZml0c0luVmlld3BvcnRIb3Jpem9udGFsbHk6IGJvb2xlYW47XG5cbiAgLyoqIFRoZSB0b3RhbCB2aXNpYmxlIGFyZWEgKGluIHB4XjIpIG9mIHRoZSBvdmVybGF5IGluc2lkZSB0aGUgdmlld3BvcnQuICovXG4gIHZpc2libGVBcmVhOiBudW1iZXI7XG59XG5cbi8qKiBSZWNvcmQgb2YgdGhlIG1lYXN1cm1lbnRzIGRldGVybWluaW5nIHdoZXRoZXIgYW4gb3ZlcmxheSB3aWxsIGZpdCBpbiBhIHNwZWNpZmljIHBvc2l0aW9uLiAqL1xuaW50ZXJmYWNlIEZhbGxiYWNrUG9zaXRpb24ge1xuICBwb3NpdGlvbjogQ29ubmVjdGVkUG9zaXRpb247XG4gIG9yaWdpblBvaW50OiBQb2ludDtcbiAgb3ZlcmxheVBvaW50OiBQb2ludDtcbiAgb3ZlcmxheUZpdDogT3ZlcmxheUZpdDtcbiAgb3ZlcmxheVJlY3Q6IENsaWVudFJlY3Q7XG59XG5cbi8qKiBQb3NpdGlvbiBhbmQgc2l6ZSBvZiB0aGUgb3ZlcmxheSBzaXppbmcgd3JhcHBlciBmb3IgYSBzcGVjaWZpYyBwb3NpdGlvbi4gKi9cbmludGVyZmFjZSBCb3VuZGluZ0JveFJlY3Qge1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG59XG5cbi8qKiBSZWNvcmQgb2YgbWVhc3VyZXMgZGV0ZXJtaW5pbmcgaG93IHdlbGwgYSBnaXZlbiBwb3NpdGlvbiB3aWxsIGZpdCB3aXRoIGZsZXhpYmxlIGRpbWVuc2lvbnMuICovXG5pbnRlcmZhY2UgRmxleGlibGVGaXQge1xuICBwb3NpdGlvbjogQ29ubmVjdGVkUG9zaXRpb247XG4gIG9yaWdpbjogUG9pbnQ7XG4gIG92ZXJsYXlSZWN0OiBDbGllbnRSZWN0O1xuICBib3VuZGluZ0JveFJlY3Q6IEJvdW5kaW5nQm94UmVjdDtcbn1cblxuLyoqIEEgY29ubmVjdGVkIHBvc2l0aW9uIGFzIHNwZWNpZmllZCBieSB0aGUgdXNlci4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29ubmVjdGVkUG9zaXRpb24ge1xuICBvcmlnaW5YOiAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJztcbiAgb3JpZ2luWTogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nO1xuXG4gIG92ZXJsYXlYOiAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJztcbiAgb3ZlcmxheVk6ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJztcblxuICB3ZWlnaHQ/OiBudW1iZXI7XG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIHBhbmVsQ2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbn1cblxuLyoqIFNoYWxsb3ctZXh0ZW5kcyBhIHN0eWxlc2hlZXQgb2JqZWN0IHdpdGggYW5vdGhlciBzdHlsZXNoZWV0IG9iamVjdC4gKi9cbmZ1bmN0aW9uIGV4dGVuZFN0eWxlcyhkZXN0aW5hdGlvbjogQ1NTU3R5bGVEZWNsYXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IENTU1N0eWxlRGVjbGFyYXRpb24pOiBDU1NTdHlsZURlY2xhcmF0aW9uIHtcbiAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cblxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSBwaXhlbCB2YWx1ZSBhcyBhIG51bWJlciBmcm9tIGEgdmFsdWUsIGlmIGl0J3MgYSBudW1iZXJcbiAqIG9yIGEgQ1NTIHBpeGVsIHN0cmluZyAoZS5nLiBgMTMzN3B4YCkuIE90aGVyd2lzZSByZXR1cm5zIG51bGwuXG4gKi9cbmZ1bmN0aW9uIGdldFBpeGVsVmFsdWUoaW5wdXQ6IG51bWJlcnxzdHJpbmd8bnVsbHx1bmRlZmluZWQpOiBudW1iZXJ8bnVsbCB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdudW1iZXInICYmIGlucHV0ICE9IG51bGwpIHtcbiAgICBjb25zdCBbdmFsdWUsIHVuaXRzXSA9IGlucHV0LnNwbGl0KGNzc1VuaXRQYXR0ZXJuKTtcbiAgICByZXR1cm4gKCF1bml0cyB8fCB1bml0cyA9PT0gJ3B4JykgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IG51bGw7XG4gIH1cblxuICByZXR1cm4gaW5wdXQgfHwgbnVsbDtcbn1cbiJdfQ==