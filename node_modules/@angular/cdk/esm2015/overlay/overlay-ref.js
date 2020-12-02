/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/overlay-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Subject, merge, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { coerceCssPixelValue, coerceArray } from '@angular/cdk/coercion';
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
export class OverlayRef {
    /**
     * @param {?} _portalOutlet
     * @param {?} _host
     * @param {?} _pane
     * @param {?} _config
     * @param {?} _ngZone
     * @param {?} _keyboardDispatcher
     * @param {?} _document
     * @param {?=} _location
     */
    constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new Subject();
        this._attachments = new Subject();
        this._detachments = new Subject();
        this._locationChanges = Subscription.EMPTY;
        this._backdropClickHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this._backdropClick.next(event));
        /**
         * Stream of keydown events dispatched to this overlay.
         */
        this._keydownEvents = new Subject();
        if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;
            this._scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
    }
    /**
     * The overlay's HTML element
     * @return {?}
     */
    get overlayElement() {
        return this._pane;
    }
    /**
     * The overlay's backdrop HTML element.
     * @return {?}
     */
    get backdropElement() {
        return this._backdropElement;
    }
    /**
     * Wrapper around the panel element. Can be used for advanced
     * positioning where a wrapper with specific styling is
     * required around the overlay pane.
     * @return {?}
     */
    get hostElement() {
        return this._host;
    }
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    attach(portal) {
        /** @type {?} */
        let attachResult = this._portalOutlet.attach(portal);
        // Update the pane element with the given configuration.
        if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
        }
        if (this._positionStrategy) {
            this._positionStrategy.attach(this);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._scrollStrategy) {
            this._scrollStrategy.enable();
        }
        // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.
        this._ngZone.onStable
            .asObservable()
            .pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // The overlay could've been detached before the zone has stabilized.
            if (this.hasAttached()) {
                this.updatePosition();
            }
        }));
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        // Track this overlay by the keyboard dispatcher
        this._keyboardDispatcher.add(this);
        // @breaking-change 8.0.0 remove the null check for `_location`
        // once the constructor parameter is made required.
        if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe((/**
             * @return {?}
             */
            () => this.dispose()));
        }
        return attachResult;
    }
    /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    detach() {
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
        }
        if (this._scrollStrategy) {
            this._scrollStrategy.disable();
        }
        /** @type {?} */
        const detachmentResult = this._portalOutlet.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        // Remove this overlay from keyboard dispatcher tracking.
        this._keyboardDispatcher.remove(this);
        // Keeping the host element in the DOM can cause scroll jank, because it still gets
        // rendered, even though it's transparent and unclickable which is why we remove it.
        this._detachContentWhenStable();
        // Stop listening for location changes.
        this._locationChanges.unsubscribe();
        return detachmentResult;
    }
    /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    dispose() {
        /** @type {?} */
        const isAttached = this.hasAttached();
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._disposeScrollStrategy();
        this.detachBackdrop();
        this._locationChanges.unsubscribe();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);
            this._host = (/** @type {?} */ (null));
        }
        this._previousHostParent = this._pane = (/** @type {?} */ (null));
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    }
    /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    hasAttached() {
        return this._portalOutlet.hasAttached();
    }
    /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    backdropClick() {
        return this._backdropClick.asObservable();
    }
    /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    attachments() {
        return this._attachments.asObservable();
    }
    /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    detachments() {
        return this._detachments.asObservable();
    }
    /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    keydownEvents() {
        return this._keydownEvents.asObservable();
    }
    /**
     * Gets the current overlay configuration, which is immutable.
     * @return {?}
     */
    getConfig() {
        return this._config;
    }
    /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    updatePosition() {
        if (this._positionStrategy) {
            this._positionStrategy.apply();
        }
    }
    /**
     * Switches to a new position strategy and updates the overlay position.
     * @param {?} strategy
     * @return {?}
     */
    updatePositionStrategy(strategy) {
        if (strategy === this._positionStrategy) {
            return;
        }
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._positionStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
        }
    }
    /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    updateSize(sizeConfig) {
        this._config = Object.assign(Object.assign({}, this._config), sizeConfig);
        this._updateElementSize();
    }
    /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    setDirection(dir) {
        this._config = Object.assign(Object.assign({}, this._config), { direction: dir });
        this._updateElementDirection();
    }
    /**
     * Add a CSS class or an array of classes to the overlay pane.
     * @param {?} classes
     * @return {?}
     */
    addPanelClass(classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
        }
    }
    /**
     * Remove a CSS class or an array of classes from the overlay pane.
     * @param {?} classes
     * @return {?}
     */
    removePanelClass(classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
        }
    }
    /**
     * Returns the layout direction of the overlay panel.
     * @return {?}
     */
    getDirection() {
        /** @type {?} */
        const direction = this._config.direction;
        if (!direction) {
            return 'ltr';
        }
        return typeof direction === 'string' ? direction : direction.value;
    }
    /**
     * Switches to a new scroll strategy.
     * @param {?} strategy
     * @return {?}
     */
    updateScrollStrategy(strategy) {
        if (strategy === this._scrollStrategy) {
            return;
        }
        this._disposeScrollStrategy();
        this._scrollStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
        }
    }
    /**
     * Updates the text direction of the overlay panel.
     * @private
     * @return {?}
     */
    _updateElementDirection() {
        this._host.setAttribute('dir', this.getDirection());
    }
    /**
     * Updates the size of the overlay element based on the overlay config.
     * @private
     * @return {?}
     */
    _updateElementSize() {
        if (!this._pane) {
            return;
        }
        /** @type {?} */
        const style = this._pane.style;
        style.width = coerceCssPixelValue(this._config.width);
        style.height = coerceCssPixelValue(this._config.height);
        style.minWidth = coerceCssPixelValue(this._config.minWidth);
        style.minHeight = coerceCssPixelValue(this._config.minHeight);
        style.maxWidth = coerceCssPixelValue(this._config.maxWidth);
        style.maxHeight = coerceCssPixelValue(this._config.maxHeight);
    }
    /**
     * Toggles the pointer events for the overlay pane element.
     * @private
     * @param {?} enablePointer
     * @return {?}
     */
    _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    }
    /**
     * Attaches a backdrop for this overlay.
     * @private
     * @return {?}
     */
    _attachBackdrop() {
        /** @type {?} */
        const showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
        }
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        (/** @type {?} */ (this._host.parentElement)).insertBefore(this._backdropElement, this._host);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', this._backdropClickHandler);
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => {
                    if (this._backdropElement) {
                        this._backdropElement.classList.add(showingClass);
                    }
                }));
            }));
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    }
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @private
     * @return {?}
     */
    _updateStackingOrder() {
        if (this._host.nextSibling) {
            (/** @type {?} */ (this._host.parentNode)).appendChild(this._host);
        }
    }
    /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    detachBackdrop() {
        /** @type {?} */
        let backdropToDetach = this._backdropElement;
        if (!backdropToDetach) {
            return;
        }
        /** @type {?} */
        let timeoutId;
        /** @type {?} */
        let finishDetach = (/**
         * @return {?}
         */
        () => {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
                backdropToDetach.removeEventListener('click', this._backdropClickHandler);
                backdropToDetach.removeEventListener('transitionend', finishDetach);
                if (backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
            }
            // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.
            if (this._backdropElement == backdropToDetach) {
                this._backdropElement = null;
            }
            if (this._config.backdropClass) {
                this._toggleClasses((/** @type {?} */ (backdropToDetach)), this._config.backdropClass, false);
            }
            clearTimeout(timeoutId);
        });
        backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (backdropToDetach)).addEventListener('transitionend', finishDetach);
        }));
        // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
        // In this case we make it unclickable and we try to remove it after a delay.
        backdropToDetach.style.pointerEvents = 'none';
        // Run this outside the Angular zone because there's nothing that Angular cares about.
        // If it were to run inside the Angular zone, every test that used Overlay would have to be
        // either async or fakeAsync.
        timeoutId = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout(finishDetach, 500)));
    }
    /**
     * Toggles a single CSS class or an array of classes on an element.
     * @private
     * @param {?} element
     * @param {?} cssClasses
     * @param {?} isAdd
     * @return {?}
     */
    _toggleClasses(element, cssClasses, isAdd) {
        /** @type {?} */
        const classList = element.classList;
        coerceArray(cssClasses).forEach((/**
         * @param {?} cssClass
         * @return {?}
         */
        cssClass => {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
                isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
        }));
    }
    /**
     * Detaches the overlay content next time the zone stabilizes.
     * @private
     * @return {?}
     */
    _detachContentWhenStable() {
        // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
        // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
        // be patched to run inside the zone, which will throw us into an infinite loop.
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.
            /** @type {?} */
            const subscription = this._ngZone.onStable
                .asObservable()
                .pipe(takeUntil(merge(this._attachments, this._detachments)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!this._pane || !this._host || this._pane.children.length === 0) {
                    if (this._pane && this._config.panelClass) {
                        this._toggleClasses(this._pane, this._config.panelClass, false);
                    }
                    if (this._host && this._host.parentElement) {
                        this._previousHostParent = this._host.parentElement;
                        this._previousHostParent.removeChild(this._host);
                    }
                    subscription.unsubscribe();
                }
            }));
        }));
    }
    /**
     * Disposes of a scroll strategy.
     * @private
     * @return {?}
     */
    _disposeScrollStrategy() {
        /** @type {?} */
        const scrollStrategy = this._scrollStrategy;
        if (scrollStrategy) {
            scrollStrategy.disable();
            if (scrollStrategy.detach) {
                scrollStrategy.detach();
            }
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._backdropElement;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._backdropClick;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._attachments;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._detachments;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._positionStrategy;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._scrollStrategy;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._locationChanges;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._backdropClickHandler;
    /**
     * Reference to the parent of the `_host` at the time it was detached. Used to restore
     * the `_host` to its original position in the DOM when it gets re-attached.
     * @type {?}
     * @private
     */
    OverlayRef.prototype._previousHostParent;
    /**
     * Stream of keydown events dispatched to this overlay.
     * @type {?}
     */
    OverlayRef.prototype._keydownEvents;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._portalOutlet;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._host;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._pane;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._config;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._keyboardDispatcher;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._document;
    /**
     * @type {?}
     * @private
     */
    OverlayRef.prototype._location;
}
/**
 * Size properties for an overlay.
 * @record
 */
export function OverlaySizeConfig() { }
if (false) {
    /** @type {?|undefined} */
    OverlaySizeConfig.prototype.width;
    /** @type {?|undefined} */
    OverlaySizeConfig.prototype.height;
    /** @type {?|undefined} */
    OverlaySizeConfig.prototype.minWidth;
    /** @type {?|undefined} */
    OverlaySizeConfig.prototype.minHeight;
    /** @type {?|undefined} */
    OverlaySizeConfig.prototype.maxWidth;
    /** @type {?|undefined} */
    OverlaySizeConfig.prototype.maxHeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvb3ZlcmxheS1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyxFQUFhLE9BQU8sRUFBRSxLQUFLLEVBQW9CLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRy9DLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFldkUsTUFBTSxPQUFPLFVBQVU7Ozs7Ozs7Ozs7O0lBbUJyQixZQUNZLGFBQTJCLEVBQzNCLEtBQWtCLEVBQ2xCLEtBQWtCLEVBQ2xCLE9BQXVDLEVBQ3ZDLE9BQWUsRUFDZixtQkFBOEMsRUFDOUMsU0FBbUIsRUFFbkIsU0FBb0I7UUFScEIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQWdDO1FBQ3ZDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTJCO1FBQzlDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFFbkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQTNCeEIscUJBQWdCLEdBQXVCLElBQUksQ0FBQztRQUM1QyxtQkFBYyxHQUF3QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3BELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFHbkMscUJBQWdCLEdBQXFCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDeEQsMEJBQXFCOzs7O1FBQUcsQ0FBQyxLQUFpQixFQUFFLEVBQUUsQ0FBQyxJ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Q3RELCtCQUEyQjs7Ozs7SUFFM0IsK0JBQTRCOzs7Ozs7QUErY2xDLHVDQU9DOzs7SUFOQyxrQ0FBd0I7O0lBQ3hCLG1DQUF5Qjs7SUFDekIscUNBQTJCOztJQUMzQixzQ0FBNEI7O0lBQzVCLHFDQUEyQjs7SUFDM0Isc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtDb21wb25lbnRQb3J0YWwsIFBvcnRhbCwgUG9ydGFsT3V0bGV0LCBUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge0NvbXBvbmVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgbWVyZ2UsIFN1YnNjcmlwdGlvbkxpa2UsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2UsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyfSBmcm9tICcuL2tleWJvYXJkL292ZXJsYXkta2V5Ym9hcmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQge092ZXJsYXlDb25maWd9IGZyb20gJy4vb3ZlcmxheS1jb25maWcnO1xuaW1wb3J0IHtjb2VyY2VDc3NQaXhlbFZhbHVlLCBjb2VyY2VBcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7T3ZlcmxheVJlZmVyZW5jZX0gZnJvbSAnLi9vdmVybGF5LXJlZmVyZW5jZSc7XG5pbXBvcnQge1Bvc2l0aW9uU3RyYXRlZ3l9IGZyb20gJy4vcG9zaXRpb24vcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHtTY3JvbGxTdHJhdGVneX0gZnJvbSAnLi9zY3JvbGwnO1xuXG5cbi8qKiBBbiBvYmplY3Qgd2hlcmUgYWxsIG9mIGl0cyBwcm9wZXJ0aWVzIGNhbm5vdCBiZSB3cml0dGVuLiAqL1xuZXhwb3J0IHR5cGUgSW1tdXRhYmxlT2JqZWN0PFQ+ID0ge1xuICByZWFkb25seSBbUCBpbiBrZXlvZiBUXTogVFtQXTtcbn07XG5cbi8qKlxuICogUmVmZXJlbmNlIHRvIGFuIG92ZXJsYXkgdGhhdCBoYXMgYmVlbiBjcmVhdGVkIHdpdGggdGhlIE92ZXJsYXkgc2VydmljZS5cbiAqIFVzZWQgdG8gbWFuaXB1bGF0ZSBvciBkaXNwb3NlIG9mIHNhaWQgb3ZlcmxheS5cbiAqL1xuZXhwb3J0IGNsYXNzIE92ZXJsYXlSZWYgaW1wbGVtZW50cyBQb3J0YWxPdXRsZXQsIE92ZXJsYXlSZWZlcmVuY2Uge1xuICBwcml2YXRlIF9iYWNrZHJvcEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2JhY2tkcm9wQ2xpY2s6IFN1YmplY3Q8TW91c2VFdmVudD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9hdHRhY2htZW50cyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2RldGFjaG1lbnRzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfcG9zaXRpb25TdHJhdGVneTogUG9zaXRpb25TdHJhdGVneSB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3k6IFNjcm9sbFN0cmF0ZWd5IHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9sb2NhdGlvbkNoYW5nZXM6IFN1YnNjcmlwdGlvbkxpa2UgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2JhY2tkcm9wQ2xpY2tIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB0aGlzLl9iYWNrZHJvcENsaWNrLm5leHQoZXZlbnQpO1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBvZiB0aGUgYF9ob3N0YCBhdCB0aGUgdGltZSBpdCB3YXMgZGV0YWNoZWQuIFVzZWQgdG8gcmVzdG9yZVxuICAgKiB0aGUgYF9ob3N0YCB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb24gaW4gdGhlIERPTSB3aGVuIGl0IGdldHMgcmUtYXR0YWNoZWQuXG4gICAqL1xuICBwcml2YXRlIF9wcmV2aW91c0hvc3RQYXJlbnQ6IEhUTUxFbGVtZW50O1xuXG4gIC8qKiBTdHJlYW0gb2Yga2V5ZG93biBldmVudHMgZGlzcGF0Y2hlZCB0byB0aGlzIG92ZXJsYXkuICovXG4gIF9rZXlkb3duRXZlbnRzID0gbmV3IFN1YmplY3Q8S2V5Ym9hcmRFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX3BvcnRhbE91dGxldDogUG9ydGFsT3V0bGV0LFxuICAgICAgcHJpdmF0ZSBfaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgICBwcml2YXRlIF9wYW5lOiBIVE1MRWxlbWVudCxcbiAgICAgIHByaXZhdGUgX2NvbmZpZzogSW1tdXRhYmxlT2JqZWN0PE92ZXJsYXlDb25maWc+LFxuICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICBwcml2YXRlIF9rZXlib2FyZERpc3BhdGNoZXI6IE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsXG4gICAgICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIGBfbG9jYXRpb25gIHBhcmFtZXRlciB0byBiZSBtYWRlIHJlcXVpcmVkLlxuICAgICAgcHJpdmF0ZSBfbG9jYXRpb24/OiBMb2NhdGlvbikge1xuXG4gICAgaWYgKF9jb25maWcuc2Nyb2xsU3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFN0cmF0ZWd5ID0gX2NvbmZpZy5zY3JvbGxTdHJhdGVneTtcbiAgICAgIHRoaXMuX3Njcm9sbFN0cmF0ZWd5LmF0dGFjaCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5ID0gX2NvbmZpZy5wb3NpdGlvblN0cmF0ZWd5O1xuICB9XG5cbiAgLyoqIFRoZSBvdmVybGF5J3MgSFRNTCBlbGVtZW50ICovXG4gIGdldCBvdmVybGF5RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhbmU7XG4gIH1cblxuICAvKiogVGhlIG92ZXJsYXkncyBiYWNrZHJvcCBIVE1MIGVsZW1lbnQuICovXG4gIGdldCBiYWNrZHJvcEVsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja2Ryb3BFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIHRoZSBwYW5lbCBlbGVtZW50LiBDYW4gYmUgdXNlZCBmb3IgYWR2YW5jZWRcbiAgICogcG9zaXRpb25pbmcgd2hlcmUgYSB3cmFwcGVyIHdpdGggc3BlY2lmaWMgc3R5bGluZyBpc1xuICAgKiByZXF1aXJlZCBhcm91bmQgdGhlIG92ZXJsYXkgcGFuZS5cbiAgICovXG4gIGdldCBob3N0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gIH1cblxuICBhdHRhY2g8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4pOiBDb21wb25lbnRSZWY8VD47XG4gIGF0dGFjaDxUPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPFQ+KTogRW1iZWRkZWRWaWV3UmVmPFQ+O1xuICBhdHRhY2gocG9ydGFsOiBhbnkpOiBhbnk7XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGNvbnRlbnQsIGdpdmVuIHZpYSBhIFBvcnRhbCwgdG8gdGhlIG92ZXJsYXkuXG4gICAqIElmIHRoZSBvdmVybGF5IGlzIGNvbmZpZ3VyZWQgdG8gaGF2ZSBhIGJhY2tkcm9wLCBpdCB3aWxsIGJlIGNyZWF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBwb3J0YWwgUG9ydGFsIGluc3RhbmNlIHRvIHdoaWNoIHRvIGF0dGFjaCB0aGUgb3ZlcmxheS5cbiAgICogQHJldHVybnMgVGhlIHBvcnRhbCBhdHRhY2htZW50IHJlc3VsdC5cbiAgICovXG4gIGF0dGFjaChwb3J0YWw6IFBvcnRhbDxhbnk+KTogYW55IHtcbiAgICBsZXQgYXR0YWNoUmVzdWx0ID0gdGhpcy5fcG9ydGFsT3V0bGV0LmF0dGFjaChwb3J0YWwpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBwYW5lIGVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gY29uZmlndXJhdGlvbi5cbiAgICBpZiAoIXRoaXMuX2hvc3QucGFyZW50RWxlbWVudCAmJiB0aGlzLl9wcmV2aW91c0hvc3RQYXJlbnQpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzSG9zdFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLl9ob3N0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9zaXRpb25TdHJhdGVneSkge1xuICAgICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS5hdHRhY2godGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlU3RhY2tpbmdPcmRlcigpO1xuICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnRTaXplKCk7XG4gICAgdGhpcy5fdXBkYXRlRWxlbWVudERpcmVjdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuX3Njcm9sbFN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5lbmFibGUoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9uY2UgdGhlIHpvbmUgaXMgc3RhYmxlIHNvIHRoYXQgdGhlIG92ZXJsYXkgd2lsbCBiZSBmdWxseSByZW5kZXJlZFxuICAgIC8vIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHBvc2l0aW9uIGl0LCBhcyB0aGUgcG9zaXRpb24gbWF5IGRlcGVuZCBvbiB0aGUgc2l6ZSBvZiB0aGUgcmVuZGVyZWRcbiAgICAvLyBjb250ZW50LlxuICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZVxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vIFRoZSBvdmVybGF5IGNvdWxkJ3ZlIGJlZW4gZGV0YWNoZWQgYmVmb3JlIHRoZSB6b25lIGhhcyBzdGFiaWxpemVkLlxuICAgICAgICBpZiAodGhpcy5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIC8vIEVuYWJsZSBwb2ludGVyIGV2ZW50cyBmb3IgdGhlIG92ZXJsYXkgcGFuZSBlbGVtZW50LlxuICAgIHRoaXMuX3RvZ2dsZVBvaW50ZXJFdmVudHModHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmhhc0JhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9hdHRhY2hCYWNrZHJvcCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGFuZWxDbGFzcykge1xuICAgICAgdGhpcy5fdG9nZ2xlQ2xhc3Nlcyh0aGlzLl9wYW5lLCB0aGlzLl9jb25maWcucGFuZWxDbGFzcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gT25seSBlbWl0IHRoZSBgYXR0YWNobWVudHNgIGV2ZW50IG9uY2UgYWxsIG90aGVyIHNldHVwIGlzIGRvbmUuXG4gICAgdGhpcy5fYXR0YWNobWVudHMubmV4dCgpO1xuXG4gICAgLy8gVHJhY2sgdGhpcyBvdmVybGF5IGJ5IHRoZSBrZXlib2FyZCBkaXNwYXRjaGVyXG4gICAgdGhpcy5fa2V5Ym9hcmREaXNwYXRjaGVyLmFkZCh0aGlzKTtcblxuICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgcmVtb3ZlIHRoZSBudWxsIGNoZWNrIGZvciBgX2xvY2F0aW9uYFxuICAgIC8vIG9uY2UgdGhlIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBpcyBtYWRlIHJlcXVpcmVkLlxuICAgIGlmICh0aGlzLl9jb25maWcuZGlzcG9zZU9uTmF2aWdhdGlvbiAmJiB0aGlzLl9sb2NhdGlvbikge1xuICAgICAgdGhpcy5fbG9jYXRpb25DaGFuZ2VzID0gdGhpcy5fbG9jYXRpb24uc3Vic2NyaWJlKCgpID0+IHRoaXMuZGlzcG9zZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNoUmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIGFuIG92ZXJsYXkgZnJvbSBhIHBvcnRhbC5cbiAgICogQHJldHVybnMgVGhlIHBvcnRhbCBkZXRhY2htZW50IHJlc3VsdC5cbiAgICovXG4gIGRldGFjaCgpOiBhbnkge1xuICAgIGlmICghdGhpcy5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kZXRhY2hCYWNrZHJvcCgpO1xuXG4gICAgLy8gV2hlbiB0aGUgb3ZlcmxheSBpcyBkZXRhY2hlZCwgdGhlIHBhbmUgZWxlbWVudCBzaG91bGQgZGlzYWJsZSBwb2ludGVyIGV2ZW50cy5cbiAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIG90aGVyd2lzZSB0aGUgcGFuZSBlbGVtZW50IHdpbGwgY292ZXIgdGhlIHBhZ2UgYW5kIGRpc2FibGVcbiAgICAvLyBwb2ludGVyIGV2ZW50cyB0aGVyZWZvcmUuIERlcGVuZHMgb24gdGhlIHBvc2l0aW9uIHN0cmF0ZWd5IGFuZCB0aGUgYXBwbGllZCBwYW5lIGJvdW5kYXJpZXMuXG4gICAgdGhpcy5fdG9nZ2xlUG9pbnRlckV2ZW50cyhmYWxzZSk7XG5cbiAgICBpZiAodGhpcy5fcG9zaXRpb25TdHJhdGVneSAmJiB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LmRldGFjaCkge1xuICAgICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS5kZXRhY2goKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsU3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFN0cmF0ZWd5LmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZXRhY2htZW50UmVzdWx0ID0gdGhpcy5fcG9ydGFsT3V0bGV0LmRldGFjaCgpO1xuXG4gICAgLy8gT25seSBlbWl0IGFmdGVyIGV2ZXJ5dGhpbmcgaXMgZGV0YWNoZWQuXG4gICAgdGhpcy5fZGV0YWNobWVudHMubmV4dCgpO1xuXG4gICAgLy8gUmVtb3ZlIHRoaXMgb3ZlcmxheSBmcm9tIGtleWJvYXJkIGRpc3BhdGNoZXIgdHJhY2tpbmcuXG4gICAgdGhpcy5fa2V5Ym9hcmREaXNwYXRjaGVyLnJlbW92ZSh0aGlzKTtcblxuICAgIC8vIEtlZXBpbmcgdGhlIGhvc3QgZWxlbWVudCBpbiB0aGUgRE9NIGNhbiBjYXVzZSBzY3JvbGwgamFuaywgYmVjYXVzZSBpdCBzdGlsbCBnZXRzXG4gICAgLy8gcmVuZGVyZWQsIGV2ZW4gdGhvdWdoIGl0J3MgdHJhbnNwYXJlbnQgYW5kIHVuY2xpY2thYmxlIHdoaWNoIGlzIHdoeSB3ZSByZW1vdmUgaXQuXG4gICAgdGhpcy5fZGV0YWNoQ29udGVudFdoZW5TdGFibGUoKTtcblxuICAgIC8vIFN0b3AgbGlzdGVuaW5nIGZvciBsb2NhdGlvbiBjaGFuZ2VzLlxuICAgIHRoaXMuX2xvY2F0aW9uQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuXG4gICAgcmV0dXJuIGRldGFjaG1lbnRSZXN1bHQ7XG4gIH1cblxuICAvKiogQ2xlYW5zIHVwIHRoZSBvdmVybGF5IGZyb20gdGhlIERPTS4gKi9cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0F0dGFjaGVkID0gdGhpcy5oYXNBdHRhY2hlZCgpO1xuXG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2Rpc3Bvc2VTY3JvbGxTdHJhdGVneSgpO1xuICAgIHRoaXMuZGV0YWNoQmFja2Ryb3AoKTtcbiAgICB0aGlzLl9sb2NhdGlvbkNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9rZXlib2FyZERpc3BhdGNoZXIucmVtb3ZlKHRoaXMpO1xuICAgIHRoaXMuX3BvcnRhbE91dGxldC5kaXNwb3NlKCk7XG4gICAgdGhpcy5fYXR0YWNobWVudHMuY29tcGxldGUoKTtcbiAgICB0aGlzLl9iYWNrZHJvcENsaWNrLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fa2V5ZG93bkV2ZW50cy5jb21wbGV0ZSgpO1xuXG4gICAgaWYgKHRoaXMuX2hvc3QgJiYgdGhpcy5faG9zdC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLl9ob3N0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5faG9zdCk7XG4gICAgICB0aGlzLl9ob3N0ID0gbnVsbCE7XG4gICAgfVxuXG4gICAgdGhpcy5fcHJldmlvdXNIb3N0UGFyZW50ID0gdGhpcy5fcGFuZSA9IG51bGwhO1xuXG4gICAgaWYgKGlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX2RldGFjaG1lbnRzLm5leHQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kZXRhY2htZW50cy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgaGFzIGF0dGFjaGVkIGNvbnRlbnQuICovXG4gIGhhc0F0dGFjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIHRoZSBiYWNrZHJvcCBoYXMgYmVlbiBjbGlja2VkLiAqL1xuICBiYWNrZHJvcENsaWNrKCk6IE9ic2VydmFibGU8TW91c2VFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLl9iYWNrZHJvcENsaWNrLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW4gdGhlIG92ZXJsYXkgaGFzIGJlZW4gYXR0YWNoZWQuICovXG4gIGF0dGFjaG1lbnRzKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hdHRhY2htZW50cy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIHRoZSBvdmVybGF5IGhhcyBiZWVuIGRldGFjaGVkLiAqL1xuICBkZXRhY2htZW50cygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGV0YWNobWVudHMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIG9mIGtleWRvd24gZXZlbnRzIHRhcmdldGVkIHRvIHRoaXMgb3ZlcmxheS4gKi9cbiAga2V5ZG93bkV2ZW50cygpOiBPYnNlcnZhYmxlPEtleWJvYXJkRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fa2V5ZG93bkV2ZW50cy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBjdXJyZW50IG92ZXJsYXkgY29uZmlndXJhdGlvbiwgd2hpY2ggaXMgaW1tdXRhYmxlLiAqL1xuICBnZXRDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgb3ZlcmxheSBiYXNlZCBvbiB0aGUgcG9zaXRpb24gc3RyYXRlZ3kuICovXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wb3NpdGlvblN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LmFwcGx5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFN3aXRjaGVzIHRvIGEgbmV3IHBvc2l0aW9uIHN0cmF0ZWd5IGFuZCB1cGRhdGVzIHRoZSBvdmVybGF5IHBvc2l0aW9uLiAqL1xuICB1cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHN0cmF0ZWd5OiBQb3NpdGlvblN0cmF0ZWd5KTogdm9pZCB7XG4gICAgaWYgKHN0cmF0ZWd5ID09PSB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kgPSBzdHJhdGVneTtcblxuICAgIGlmICh0aGlzLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHN0cmF0ZWd5LmF0dGFjaCh0aGlzKTtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKiogVXBkYXRlIHRoZSBzaXplIHByb3BlcnRpZXMgb2YgdGhlIG92ZXJsYXkuICovXG4gIHVwZGF0ZVNpemUoc2l6ZUNvbmZpZzogT3ZlcmxheVNpemVDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSB7Li4udGhpcy5fY29uZmlnLCAuLi5zaXplQ29uZmlnfTtcbiAgICB0aGlzLl91cGRhdGVFbGVtZW50U2l6ZSgpO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIExUUi9SVEwgZGlyZWN0aW9uIGZvciB0aGUgb3ZlcmxheS4gKi9cbiAgc2V0RGlyZWN0aW9uKGRpcjogRGlyZWN0aW9uIHwgRGlyZWN0aW9uYWxpdHkpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSB7Li4udGhpcy5fY29uZmlnLCBkaXJlY3Rpb246IGRpcn07XG4gICAgdGhpcy5fdXBkYXRlRWxlbWVudERpcmVjdGlvbigpO1xuICB9XG5cbiAgLyoqIEFkZCBhIENTUyBjbGFzcyBvciBhbiBhcnJheSBvZiBjbGFzc2VzIHRvIHRoZSBvdmVybGF5IHBhbmUuICovXG4gIGFkZFBhbmVsQ2xhc3MoY2xhc3Nlczogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcGFuZSkge1xuICAgICAgdGhpcy5fdG9nZ2xlQ2xhc3Nlcyh0aGlzLl9wYW5lLCBjbGFzc2VzLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlIGEgQ1NTIGNsYXNzIG9yIGFuIGFycmF5IG9mIGNsYXNzZXMgZnJvbSB0aGUgb3ZlcmxheSBwYW5lLiAqL1xuICByZW1vdmVQYW5lbENsYXNzKGNsYXNzZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3BhbmUpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUNsYXNzZXModGhpcy5fcGFuZSwgY2xhc3NlcywgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXlvdXQgZGlyZWN0aW9uIG9mIHRoZSBvdmVybGF5IHBhbmVsLlxuICAgKi9cbiAgZ2V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5fY29uZmlnLmRpcmVjdGlvbjtcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gJ2x0cic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBkaXJlY3Rpb24gPT09ICdzdHJpbmcnID8gZGlyZWN0aW9uIDogZGlyZWN0aW9uLnZhbHVlO1xuICB9XG5cbiAgLyoqIFN3aXRjaGVzIHRvIGEgbmV3IHNjcm9sbCBzdHJhdGVneS4gKi9cbiAgdXBkYXRlU2Nyb2xsU3RyYXRlZ3koc3RyYXRlZ3k6IFNjcm9sbFN0cmF0ZWd5KTogdm9pZCB7XG4gICAgaWYgKHN0cmF0ZWd5ID09PSB0aGlzLl9zY3JvbGxTdHJhdGVneSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2Rpc3Bvc2VTY3JvbGxTdHJhdGVneSgpO1xuICAgIHRoaXMuX3Njcm9sbFN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG5cbiAgICBpZiAodGhpcy5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICBzdHJhdGVneS5hdHRhY2godGhpcyk7XG4gICAgICBzdHJhdGVneS5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgdGV4dCBkaXJlY3Rpb24gb2YgdGhlIG92ZXJsYXkgcGFuZWwuICovXG4gIHByaXZhdGUgX3VwZGF0ZUVsZW1lbnREaXJlY3Rpb24oKSB7XG4gICAgdGhpcy5faG9zdC5zZXRBdHRyaWJ1dGUoJ2RpcicsIHRoaXMuZ2V0RGlyZWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIHNpemUgb2YgdGhlIG92ZXJsYXkgZWxlbWVudCBiYXNlZCBvbiB0aGUgb3ZlcmxheSBjb25maWcuICovXG4gIHByaXZhdGUgX3VwZGF0ZUVsZW1lbnRTaXplKCkge1xuICAgIGlmICghdGhpcy5fcGFuZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5fcGFuZS5zdHlsZTtcblxuICAgIHN0eWxlLndpZHRoID0gY29lcmNlQ3NzUGl4ZWxWYWx1ZSh0aGlzLl9jb25maWcud2lkdGgpO1xuICAgIHN0eWxlLmhlaWdodCA9IGNvZXJjZUNzc1BpeGVsVmFsdWUodGhpcy5fY29uZmlnLmhlaWdodCk7XG4gICAgc3R5bGUubWluV2lkdGggPSBjb2VyY2VDc3NQaXhlbFZhbHVlKHRoaXMuX2NvbmZpZy5taW5XaWR0aCk7XG4gICAgc3R5bGUubWluSGVpZ2h0ID0gY29lcmNlQ3NzUGl4ZWxWYWx1ZSh0aGlzLl9jb25maWcubWluSGVpZ2h0KTtcbiAgICBzdHlsZS5tYXhXaWR0aCA9IGNvZXJjZUNzc1BpeGVsVmFsdWUodGhpcy5fY29uZmlnLm1heFdpZHRoKTtcbiAgICBzdHlsZS5tYXhIZWlnaHQgPSBjb2VyY2VDc3NQaXhlbFZhbHVlKHRoaXMuX2NvbmZpZy5tYXhIZWlnaHQpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIHBvaW50ZXIgZXZlbnRzIGZvciB0aGUgb3ZlcmxheSBwYW5lIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX3RvZ2dsZVBvaW50ZXJFdmVudHMoZW5hYmxlUG9pbnRlcjogYm9vbGVhbikge1xuICAgIHRoaXMuX3BhbmUuc3R5bGUucG9pbnRlckV2ZW50cyA9IGVuYWJsZVBvaW50ZXIgPyAnYXV0bycgOiAnbm9uZSc7XG4gIH1cblxuICAvKiogQXR0YWNoZXMgYSBiYWNrZHJvcCBmb3IgdGhpcyBvdmVybGF5LiAqL1xuICBwcml2YXRlIF9hdHRhY2hCYWNrZHJvcCgpIHtcbiAgICBjb25zdCBzaG93aW5nQ2xhc3MgPSAnY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyc7XG5cbiAgICB0aGlzLl9iYWNrZHJvcEVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl9iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2RrLW92ZXJsYXktYmFja2Ryb3AnKTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3BDbGFzcykge1xuICAgICAgdGhpcy5fdG9nZ2xlQ2xhc3Nlcyh0aGlzLl9iYWNrZHJvcEVsZW1lbnQsIHRoaXMuX2NvbmZpZy5iYWNrZHJvcENsYXNzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnQgdGhlIGJhY2tkcm9wIGJlZm9yZSB0aGUgcGFuZSBpbiB0aGUgRE9NIG9yZGVyLFxuICAgIC8vIGluIG9yZGVyIHRvIGhhbmRsZSBzdGFja2VkIG92ZXJsYXlzIHByb3Blcmx5LlxuICAgIHRoaXMuX2hvc3QucGFyZW50RWxlbWVudCEuaW5zZXJ0QmVmb3JlKHRoaXMuX2JhY2tkcm9wRWxlbWVudCwgdGhpcy5faG9zdCk7XG5cbiAgICAvLyBGb3J3YXJkIGJhY2tkcm9wIGNsaWNrcyBzdWNoIHRoYXQgdGhlIGNvbnN1bWVyIG9mIHRoZSBvdmVybGF5IGNhbiBwZXJmb3JtIHdoYXRldmVyXG4gICAgLy8gYWN0aW9uIGRlc2lyZWQgd2hlbiBzdWNoIGEgY2xpY2sgb2NjdXJzICh1c3VhbGx5IGNsb3NpbmcgdGhlIG92ZXJsYXkpLlxuICAgIHRoaXMuX2JhY2tkcm9wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2JhY2tkcm9wQ2xpY2tIYW5kbGVyKTtcblxuICAgIC8vIEFkZCBjbGFzcyB0byBmYWRlLWluIHRoZSBiYWNrZHJvcCBhZnRlciBvbmUgZnJhbWUuXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9iYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2JhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKHNob3dpbmdDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzaG93aW5nQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzdGFja2luZyBvcmRlciBvZiB0aGUgZWxlbWVudCwgbW92aW5nIGl0IHRvIHRoZSB0b3AgaWYgbmVjZXNzYXJ5LlxuICAgKiBUaGlzIGlzIHJlcXVpcmVkIGluIGNhc2VzIHdoZXJlIG9uZSBvdmVybGF5IHdhcyBkZXRhY2hlZCwgd2hpbGUgYW5vdGhlciBvbmUsXG4gICAqIHRoYXQgc2hvdWxkIGJlIGJlaGluZCBpdCwgd2FzIGRlc3Ryb3llZC4gVGhlIG5leHQgdGltZSBib3RoIG9mIHRoZW0gYXJlIG9wZW5lZCxcbiAgICogdGhlIHN0YWNraW5nIHdpbGwgYmUgd3JvbmcsIGJlY2F1c2UgdGhlIGRldGFjaGVkIGVsZW1lbnQncyBwYW5lIHdpbGwgc3RpbGwgYmVcbiAgICogaW4gaXRzIG9yaWdpbmFsIERPTSBwb3NpdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZVN0YWNraW5nT3JkZXIoKSB7XG4gICAgaWYgKHRoaXMuX2hvc3QubmV4dFNpYmxpbmcpIHtcbiAgICAgIHRoaXMuX2hvc3QucGFyZW50Tm9kZSEuYXBwZW5kQ2hpbGQodGhpcy5faG9zdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERldGFjaGVzIHRoZSBiYWNrZHJvcCAoaWYgYW55KSBhc3NvY2lhdGVkIHdpdGggdGhlIG92ZXJsYXkuICovXG4gIGRldGFjaEJhY2tkcm9wKCk6IHZvaWQge1xuICAgIGxldCBiYWNrZHJvcFRvRGV0YWNoID0gdGhpcy5fYmFja2Ryb3BFbGVtZW50O1xuXG4gICAgaWYgKCFiYWNrZHJvcFRvRGV0YWNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHRpbWVvdXRJZDogbnVtYmVyO1xuICAgIGxldCBmaW5pc2hEZXRhY2ggPSAoKSA9PiB7XG4gICAgICAvLyBJdCBtYXkgbm90IGJlIGF0dGFjaGVkIHRvIGFueXRoaW5nIGluIGNlcnRhaW4gY2FzZXMgKGUuZy4gdW5pdCB0ZXN0cykuXG4gICAgICBpZiAoYmFja2Ryb3BUb0RldGFjaCkge1xuICAgICAgICBiYWNrZHJvcFRvRGV0YWNoLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fYmFja2Ryb3BDbGlja0hhbmRsZXIpO1xuICAgICAgICBiYWNrZHJvcFRvRGV0YWNoLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmaW5pc2hEZXRhY2gpO1xuXG4gICAgICAgIGlmIChiYWNrZHJvcFRvRGV0YWNoLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBiYWNrZHJvcFRvRGV0YWNoLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmFja2Ryb3BUb0RldGFjaCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSXQgaXMgcG9zc2libGUgdGhhdCBhIG5ldyBwb3J0YWwgaGFzIGJlZW4gYXR0YWNoZWQgdG8gdGhpcyBvdmVybGF5IHNpbmNlIHdlIHN0YXJ0ZWRcbiAgICAgIC8vIHJlbW92aW5nIHRoZSBiYWNrZHJvcC4gSWYgdGhhdCBpcyB0aGUgY2FzZSwgb25seSBjbGVhciB0aGUgYmFja2Ryb3AgcmVmZXJlbmNlIGlmIGl0XG4gICAgICAvLyBpcyBzdGlsbCB0aGUgc2FtZSBpbnN0YW5jZSB0aGF0IHdlIHN0YXJ0ZWQgdG8gcmVtb3ZlLlxuICAgICAgaWYgKHRoaXMuX2JhY2tkcm9wRWxlbWVudCA9PSBiYWNrZHJvcFRvRGV0YWNoKSB7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wRWxlbWVudCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3BDbGFzcykge1xuICAgICAgICB0aGlzLl90b2dnbGVDbGFzc2VzKGJhY2tkcm9wVG9EZXRhY2ghLCB0aGlzLl9jb25maWcuYmFja2Ryb3BDbGFzcywgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9O1xuXG4gICAgYmFja2Ryb3BUb0RldGFjaC5jbGFzc0xpc3QucmVtb3ZlKCdjZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nJyk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgYmFja2Ryb3BUb0RldGFjaCEuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZpbmlzaERldGFjaCk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgYmFja2Ryb3AgZG9lc24ndCBoYXZlIGEgdHJhbnNpdGlvbiwgdGhlIGB0cmFuc2l0aW9uZW5kYCBldmVudCB3b24ndCBmaXJlLlxuICAgIC8vIEluIHRoaXMgY2FzZSB3ZSBtYWtlIGl0IHVuY2xpY2thYmxlIGFuZCB3ZSB0cnkgdG8gcmVtb3ZlIGl0IGFmdGVyIGEgZGVsYXkuXG4gICAgYmFja2Ryb3BUb0RldGFjaC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgLy8gUnVuIHRoaXMgb3V0c2lkZSB0aGUgQW5ndWxhciB6b25lIGJlY2F1c2UgdGhlcmUncyBub3RoaW5nIHRoYXQgQW5ndWxhciBjYXJlcyBhYm91dC5cbiAgICAvLyBJZiBpdCB3ZXJlIHRvIHJ1biBpbnNpZGUgdGhlIEFuZ3VsYXIgem9uZSwgZXZlcnkgdGVzdCB0aGF0IHVzZWQgT3ZlcmxheSB3b3VsZCBoYXZlIHRvIGJlXG4gICAgLy8gZWl0aGVyIGFzeW5jIG9yIGZha2VBc3luYy5cbiAgICB0aW1lb3V0SWQgPSB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dChmaW5pc2hEZXRhY2gsIDUwMCkpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgYSBzaW5nbGUgQ1NTIGNsYXNzIG9yIGFuIGFycmF5IG9mIGNsYXNzZXMgb24gYW4gZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfdG9nZ2xlQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgY3NzQ2xhc3Nlczogc3RyaW5nIHwgc3RyaW5nW10sIGlzQWRkOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG5cbiAgICBjb2VyY2VBcnJheShjc3NDbGFzc2VzKS5mb3JFYWNoKGNzc0NsYXNzID0+IHtcbiAgICAgIC8vIFdlIGNhbid0IGRvIGEgc3ByZWFkIGhlcmUsIGJlY2F1c2UgSUUgZG9lc24ndCBzdXBwb3J0IHNldHRpbmcgbXVsdGlwbGUgY2xhc3Nlcy5cbiAgICAgIC8vIEFsc28gdHJ5aW5nIHRvIGFkZCBhbiBlbXB0eSBzdHJpbmcgdG8gYSBET01Ub2tlbkxpc3Qgd2lsbCB0aHJvdy5cbiAgICAgIGlmIChjc3NDbGFzcykge1xuICAgICAgICBpc0FkZCA/IGNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpIDogY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogRGV0YWNoZXMgdGhlIG92ZXJsYXkgY29udGVudCBuZXh0IHRpbWUgdGhlIHpvbmUgc3RhYmlsaXplcy4gKi9cbiAgcHJpdmF0ZSBfZGV0YWNoQ29udGVudFdoZW5TdGFibGUoKSB7XG4gICAgLy8gTm9ybWFsbHkgd2Ugd291bGRuJ3QgaGF2ZSB0byBleHBsaWNpdGx5IHJ1biB0aGlzIG91dHNpZGUgdGhlIGBOZ1pvbmVgLCBob3dldmVyXG4gICAgLy8gaWYgdGhlIGNvbnN1bWVyIGlzIHVzaW5nIGB6b25lLXBhdGNoLXJ4anNgLCB0aGUgYFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZWAgY2FsbCB3aWxsXG4gICAgLy8gYmUgcGF0Y2hlZCB0byBydW4gaW5zaWRlIHRoZSB6b25lLCB3aGljaCB3aWxsIHRocm93IHVzIGludG8gYW4gaW5maW5pdGUgbG9vcC5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgLy8gV2UgY2FuJ3QgcmVtb3ZlIHRoZSBob3N0IGhlcmUgaW1tZWRpYXRlbHksIGJlY2F1c2UgdGhlIG92ZXJsYXkgcGFuZSdzIGNvbnRlbnRcbiAgICAgIC8vIG1pZ2h0IHN0aWxsIGJlIGFuaW1hdGluZy4gVGhpcyBzdHJlYW0gaGVscHMgdXMgYXZvaWQgaW50ZXJydXB0aW5nIHRoZSBhbmltYXRpb25cbiAgICAgIC8vIGJ5IHdhaXRpbmcgZm9yIHRoZSBwYW5lIHRvIGJlY29tZSBlbXB0eS5cbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuX25nWm9uZS5vblN0YWJsZVxuICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKG1lcmdlKHRoaXMuX2F0dGFjaG1lbnRzLCB0aGlzLl9kZXRhY2htZW50cykpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAvLyBOZWVkcyBhIGNvdXBsZSBvZiBjaGVja3MgZm9yIHRoZSBwYW5lIGFuZCBob3N0LCBiZWNhdXNlXG4gICAgICAgICAgLy8gdGhleSBtYXkgaGF2ZSBiZWVuIHJlbW92ZWQgYnkgdGhlIHRpbWUgdGhlIHpvbmUgc3RhYmlsaXplcy5cbiAgICAgICAgICBpZiAoIXRoaXMuX3BhbmUgfHwgIXRoaXMuX2hvc3QgfHwgdGhpcy5fcGFuZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYW5lICYmIHRoaXMuX2NvbmZpZy5wYW5lbENsYXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUNsYXNzZXModGhpcy5fcGFuZSwgdGhpcy5fY29uZmlnLnBhbmVsQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX2hvc3QgJiYgdGhpcy5faG9zdC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzSG9zdFBhcmVudCA9IHRoaXMuX2hvc3QucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNIb3N0UGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX2hvc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIERpc3Bvc2VzIG9mIGEgc2Nyb2xsIHN0cmF0ZWd5LiAqL1xuICBwcml2YXRlIF9kaXNwb3NlU2Nyb2xsU3RyYXRlZ3koKSB7XG4gICAgY29uc3Qgc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLl9zY3JvbGxTdHJhdGVneTtcblxuICAgIGlmIChzY3JvbGxTdHJhdGVneSkge1xuICAgICAgc2Nyb2xsU3RyYXRlZ3kuZGlzYWJsZSgpO1xuXG4gICAgICBpZiAoc2Nyb2xsU3RyYXRlZ3kuZGV0YWNoKSB7XG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5LmRldGFjaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8qKiBTaXplIHByb3BlcnRpZXMgZm9yIGFuIG92ZXJsYXkuICovXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlTaXplQ29uZmlnIHtcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGhlaWdodD86IG51bWJlciB8IHN0cmluZztcbiAgbWluV2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIG1pbkhlaWdodD86IG51bWJlciB8IHN0cmluZztcbiAgbWF4V2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIG1heEhlaWdodD86IG51bWJlciB8IHN0cmluZztcbn1cbiJdfQ==