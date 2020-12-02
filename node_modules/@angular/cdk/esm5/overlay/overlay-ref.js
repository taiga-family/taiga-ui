/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign } from "tslib";
import { Subject, merge, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { coerceCssPixelValue, coerceArray } from '@angular/cdk/coercion';
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, 
    // @breaking-change 8.0.0 `_location` parameter to be made required.
    _location) {
        var _this = this;
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
        this._backdropClickHandler = function (event) { return _this._backdropClick.next(event); };
        /** Stream of keydown events dispatched to this overlay. */
        this._keydownEvents = new Subject();
        if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;
            this._scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
    }
    Object.defineProperty(OverlayRef.prototype, "overlayElement", {
        /** The overlay's HTML element */
        get: function () {
            return this._pane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "backdropElement", {
        /** The overlay's backdrop HTML element. */
        get: function () {
            return this._backdropElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "hostElement", {
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         */
        get: function () {
            return this._host;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    OverlayRef.prototype.attach = function (portal) {
        var _this = this;
        var attachResult = this._portalOutlet.attach(portal);
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
            .subscribe(function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this.hasAttached()) {
                _this.updatePosition();
            }
        });
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
            this._locationChanges = this._location.subscribe(function () { return _this.dispose(); });
        }
        return attachResult;
    };
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    OverlayRef.prototype.detach = function () {
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
        var detachmentResult = this._portalOutlet.detach();
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
    };
    /** Cleans up the overlay from the DOM. */
    OverlayRef.prototype.dispose = function () {
        var isAttached = this.hasAttached();
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
            this._host = null;
        }
        this._previousHostParent = this._pane = null;
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    };
    /** Whether the overlay has attached content. */
    OverlayRef.prototype.hasAttached = function () {
        return this._portalOutlet.hasAttached();
    };
    /** Gets an observable that emits when the backdrop has been clicked. */
    OverlayRef.prototype.backdropClick = function () {
        return this._backdropClick.asObservable();
    };
    /** Gets an observable that emits when the overlay has been attached. */
    OverlayRef.prototype.attachments = function () {
        return this._attachments.asObservable();
    };
    /** Gets an observable that emits when the overlay has been detached. */
    OverlayRef.prototype.detachments = function () {
        return this._detachments.asObservable();
    };
    /** Gets an observable of keydown events targeted to this overlay. */
    OverlayRef.prototype.keydownEvents = function () {
        return this._keydownEvents.asObservable();
    };
    /** Gets the current overlay configuration, which is immutable. */
    OverlayRef.prototype.getConfig = function () {
        return this._config;
    };
    /** Updates the position of the overlay based on the position strategy. */
    OverlayRef.prototype.updatePosition = function () {
        if (this._positionStrategy) {
            this._positionStrategy.apply();
        }
    };
    /** Switches to a new position strategy and updates the overlay position. */
    OverlayRef.prototype.updatePositionStrategy = function (strategy) {
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
    };
    /** Update the size properties of the overlay. */
    OverlayRef.prototype.updateSize = function (sizeConfig) {
        this._config = __assign(__assign({}, this._config), sizeConfig);
        this._updateElementSize();
    };
    /** Sets the LTR/RTL direction for the overlay. */
    OverlayRef.prototype.setDirection = function (dir) {
        this._config = __assign(__assign({}, this._config), { direction: dir });
        this._updateElementDirection();
    };
    /** Add a CSS class or an array of classes to the overlay pane. */
    OverlayRef.prototype.addPanelClass = function (classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
        }
    };
    /** Remove a CSS class or an array of classes from the overlay pane. */
    OverlayRef.prototype.removePanelClass = function (classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
        }
    };
    /**
     * Returns the layout direction of the overlay panel.
     */
    OverlayRef.prototype.getDirection = function () {
        var direction = this._config.direction;
        if (!direction) {
            return 'ltr';
        }
        return typeof direction === 'string' ? direction : direction.value;
    };
    /** Switches to a new scroll strategy. */
    OverlayRef.prototype.updateScrollStrategy = function (strategy) {
        if (strategy === this._scrollStrategy) {
            return;
        }
        this._disposeScrollStrategy();
        this._scrollStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
        }
    };
    /** Updates the text direction of the overlay panel. */
    OverlayRef.prototype._updateElementDirection = function () {
        this._host.setAttribute('dir', this.getDirection());
    };
    /** Updates the size of the overlay element based on the overlay config. */
    OverlayRef.prototype._updateElementSize = function () {
        if (!this._pane) {
            return;
        }
        var style = this._pane.style;
        style.width = coerceCssPixelValue(this._config.width);
        style.height = coerceCssPixelValue(this._config.height);
        style.minWidth = coerceCssPixelValue(this._config.minWidth);
        style.minHeight = coerceCssPixelValue(this._config.minHeight);
        style.maxWidth = coerceCssPixelValue(this._config.maxWidth);
        style.maxHeight = coerceCssPixelValue(this._config.maxHeight);
    };
    /** Toggles the pointer events for the overlay pane element. */
    OverlayRef.prototype._togglePointerEvents = function (enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    };
    /** Attaches a backdrop for this overlay. */
    OverlayRef.prototype._attachBackdrop = function () {
        var _this = this;
        var showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
        }
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._host.parentElement.insertBefore(this._backdropElement, this._host);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', this._backdropClickHandler);
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    if (_this._backdropElement) {
                        _this._backdropElement.classList.add(showingClass);
                    }
                });
            });
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    };
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     */
    OverlayRef.prototype._updateStackingOrder = function () {
        if (this._host.nextSibling) {
            this._host.parentNode.appendChild(this._host);
        }
    };
    /** Detaches the backdrop (if any) associated with the overlay. */
    OverlayRef.prototype.detachBackdrop = function () {
        var _this = this;
        var backdropToDetach = this._backdropElement;
        if (!backdropToDetach) {
            return;
        }
        var timeoutId;
        var finishDetach = function () {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
                backdropToDetach.removeEventListener('click', _this._backdropClickHandler);
                backdropToDetach.removeEventListener('transitionend', finishDetach);
                if (backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
            }
            // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.
            if (_this._backdropElement == backdropToDetach) {
                _this._backdropElement = null;
            }
            if (_this._config.backdropClass) {
                _this._toggleClasses(backdropToDetach, _this._config.backdropClass, false);
            }
            clearTimeout(timeoutId);
        };
        backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
        this._ngZone.runOutsideAngular(function () {
            backdropToDetach.addEventListener('transitionend', finishDetach);
        });
        // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
        // In this case we make it unclickable and we try to remove it after a delay.
        backdropToDetach.style.pointerEvents = 'none';
        // Run this outside the Angular zone because there's nothing that Angular cares about.
        // If it were to run inside the Angular zone, every test that used Overlay would have to be
        // either async or fakeAsync.
        timeoutId = this._ngZone.runOutsideAngular(function () { return setTimeout(finishDetach, 500); });
    };
    /** Toggles a single CSS class or an array of classes on an element. */
    OverlayRef.prototype._toggleClasses = function (element, cssClasses, isAdd) {
        var classList = element.classList;
        coerceArray(cssClasses).forEach(function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
                isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
        });
    };
    /** Detaches the overlay content next time the zone stabilizes. */
    OverlayRef.prototype._detachContentWhenStable = function () {
        var _this = this;
        // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
        // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
        // be patched to run inside the zone, which will throw us into an infinite loop.
        this._ngZone.runOutsideAngular(function () {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.
            var subscription = _this._ngZone.onStable
                .asObservable()
                .pipe(takeUntil(merge(_this._attachments, _this._detachments)))
                .subscribe(function () {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!_this._pane || !_this._host || _this._pane.children.length === 0) {
                    if (_this._pane && _this._config.panelClass) {
                        _this._toggleClasses(_this._pane, _this._config.panelClass, false);
                    }
                    if (_this._host && _this._host.parentElement) {
                        _this._previousHostParent = _this._host.parentElement;
                        _this._previousHostParent.removeChild(_this._host);
                    }
                    subscription.unsubscribe();
                }
            });
        });
    };
    /** Disposes of a scroll strategy. */
    OverlayRef.prototype._disposeScrollStrategy = function () {
        var scrollStrategy = this._scrollStrategy;
        if (scrollStrategy) {
            scrollStrategy.disable();
            if (scrollStrategy.detach) {
                scrollStrategy.detach();
            }
        }
    };
    return OverlayRef;
}());
export { OverlayRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvb3ZlcmxheS1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQU1ILE9BQU8sRUFBYSxPQUFPLEVBQUUsS0FBSyxFQUFvQixZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUcvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFXdkU7OztHQUdHO0FBQ0g7SUFtQkUsb0JBQ1ksYUFBMkIsRUFDM0IsS0FBa0IsRUFDbEIsS0FBa0IsRUFDbEIsT0FBdUMsRUFDdkMsT0FBZSxFQUNmLG1CQUE4QyxFQUM5QyxTQUFtQjtJQUMzQixvRUFBb0U7SUFDNUQsU0FBb0I7UUFUaEMsaUJBaUJDO1FBaEJXLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFnQztRQUN2QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjtRQUM5QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBRW5CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUEzQnhCLHFCQUFnQixHQUF1QixJQUFJLENBQUM7UUFDNUMsbUJBQWMsR0FBd0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNwRCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR25DLHFCQUFnQixHQUFxQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3hELDBCQUFxQixHQUFHLFVBQUMs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Q0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFxQztJQUM3QiwyQ0FBc0IsR0FBOUI7UUFDRSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBRTVDLElBQUksY0FBYyxFQUFFO1lBQ2xCLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV6QixJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN6QjtTQUNGO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQXZlRCxJQXVlQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7Q29tcG9uZW50UG9ydGFsLCBQb3J0YWwsIFBvcnRhbE91dGxldCwgVGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3QsIG1lcmdlLCBTdWJzY3JpcHRpb25MaWtlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7T3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcn0gZnJvbSAnLi9rZXlib2FyZC9vdmVybGF5LWtleWJvYXJkLWRpc3BhdGNoZXInO1xuaW1wb3J0IHtPdmVybGF5Q29uZmlnfSBmcm9tICcuL292ZXJsYXktY29uZmlnJztcbmltcG9ydCB7Y29lcmNlQ3NzUGl4ZWxWYWx1ZSwgY29lcmNlQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge092ZXJsYXlSZWZlcmVuY2V9IGZyb20gJy4vb3ZlcmxheS1yZWZlcmVuY2UnO1xuaW1wb3J0IHtQb3NpdGlvblN0cmF0ZWd5fSBmcm9tICcuL3Bvc2l0aW9uL3Bvc2l0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7U2Nyb2xsU3RyYXRlZ3l9IGZyb20gJy4vc2Nyb2xsJztcblxuXG4vKiogQW4gb2JqZWN0IHdoZXJlIGFsbCBvZiBpdHMgcHJvcGVydGllcyBjYW5ub3QgYmUgd3JpdHRlbi4gKi9cbmV4cG9ydCB0eXBlIEltbXV0YWJsZU9iamVjdDxUPiA9IHtcbiAgcmVhZG9ubHkgW1AgaW4ga2V5b2YgVF06IFRbUF07XG59O1xuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhbiBvdmVybGF5IHRoYXQgaGFzIGJlZW4gY3JlYXRlZCB3aXRoIHRoZSBPdmVybGF5IHNlcnZpY2UuXG4gKiBVc2VkIHRvIG1hbmlwdWxhdGUgb3IgZGlzcG9zZSBvZiBzYWlkIG92ZXJsYXkuXG4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5UmVmIGltcGxlbWVudHMgUG9ydGFsT3V0bGV0LCBPdmVybGF5UmVmZXJlbmNlIHtcbiAgcHJpdmF0ZSBfYmFja2Ryb3BFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9iYWNrZHJvcENsaWNrOiBTdWJqZWN0PE1vdXNlRXZlbnQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfYXR0YWNobWVudHMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9kZXRhY2htZW50cyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX3Bvc2l0aW9uU3RyYXRlZ3k6IFBvc2l0aW9uU3RyYXRlZ3kgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3Njcm9sbFN0cmF0ZWd5OiBTY3JvbGxTdHJhdGVneSB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfbG9jYXRpb25DaGFuZ2VzOiBTdWJzY3JpcHRpb25MaWtlID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9iYWNrZHJvcENsaWNrSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCkgPT4gdGhpcy5fYmFja2Ryb3BDbGljay5uZXh0KGV2ZW50KTtcblxuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgb2YgdGhlIGBfaG9zdGAgYXQgdGhlIHRpbWUgaXQgd2FzIGRldGFjaGVkLiBVc2VkIHRvIHJlc3RvcmVcbiAgICogdGhlIGBfaG9zdGAgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uIGluIHRoZSBET00gd2hlbiBpdCBnZXRzIHJlLWF0dGFjaGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfcHJldmlvdXNIb3N0UGFyZW50OiBIVE1MRWxlbWVudDtcblxuICAvKiogU3RyZWFtIG9mIGtleWRvd24gZXZlbnRzIGRpc3BhdGNoZWQgdG8gdGhpcyBvdmVybGF5LiAqL1xuICBfa2V5ZG93bkV2ZW50cyA9IG5ldyBTdWJqZWN0PEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9wb3J0YWxPdXRsZXQ6IFBvcnRhbE91dGxldCxcbiAgICAgIHByaXZhdGUgX2hvc3Q6IEhUTUxFbGVtZW50LFxuICAgICAgcHJpdmF0ZSBfcGFuZTogSFRNTEVsZW1lbnQsXG4gICAgICBwcml2YXRlIF9jb25maWc6IEltbXV0YWJsZU9iamVjdDxPdmVybGF5Q29uZmlnPixcbiAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgcHJpdmF0ZSBfa2V5Ym9hcmREaXNwYXRjaGVyOiBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLFxuICAgICAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCBgX2xvY2F0aW9uYCBwYXJhbWV0ZXIgdG8gYmUgbWFkZSByZXF1aXJlZC5cbiAgICAgIHByaXZhdGUgX2xvY2F0aW9uPzogTG9jYXRpb24pIHtcblxuICAgIGlmIChfY29uZmlnLnNjcm9sbFN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneSA9IF9jb25maWcuc2Nyb2xsU3RyYXRlZ3k7XG4gICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5hdHRhY2godGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneSA9IF9jb25maWcucG9zaXRpb25TdHJhdGVneTtcbiAgfVxuXG4gIC8qKiBUaGUgb3ZlcmxheSdzIEhUTUwgZWxlbWVudCAqL1xuICBnZXQgb3ZlcmxheUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9wYW5lO1xuICB9XG5cbiAgLyoqIFRoZSBvdmVybGF5J3MgYmFja2Ryb3AgSFRNTCBlbGVtZW50LiAqL1xuICBnZXQgYmFja2Ryb3BFbGVtZW50KCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tkcm9wRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCB0aGUgcGFuZWwgZWxlbWVudC4gQ2FuIGJlIHVzZWQgZm9yIGFkdmFuY2VkXG4gICAqIHBvc2l0aW9uaW5nIHdoZXJlIGEgd3JhcHBlciB3aXRoIHNwZWNpZmljIHN0eWxpbmcgaXNcbiAgICogcmVxdWlyZWQgYXJvdW5kIHRoZSBvdmVybGF5IHBhbmUuXG4gICAqL1xuICBnZXQgaG9zdEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG5cbiAgYXR0YWNoPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+KTogQ29tcG9uZW50UmVmPFQ+O1xuICBhdHRhY2g8VD4ocG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxUPik6IEVtYmVkZGVkVmlld1JlZjxUPjtcbiAgYXR0YWNoKHBvcnRhbDogYW55KTogYW55O1xuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBjb250ZW50LCBnaXZlbiB2aWEgYSBQb3J0YWwsIHRvIHRoZSBvdmVybGF5LlxuICAgKiBJZiB0aGUgb3ZlcmxheSBpcyBjb25maWd1cmVkIHRvIGhhdmUgYSBiYWNrZHJvcCwgaXQgd2lsbCBiZSBjcmVhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcG9ydGFsIFBvcnRhbCBpbnN0YW5jZSB0byB3aGljaCB0byBhdHRhY2ggdGhlIG92ZXJsYXkuXG4gICAqIEByZXR1cm5zIFRoZSBwb3J0YWwgYXR0YWNobWVudCByZXN1bHQuXG4gICAqL1xuICBhdHRhY2gocG9ydGFsOiBQb3J0YWw8YW55Pik6IGFueSB7XG4gICAgbGV0IGF0dGFjaFJlc3VsdCA9IHRoaXMuX3BvcnRhbE91dGxldC5hdHRhY2gocG9ydGFsKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgcGFuZSBlbGVtZW50IHdpdGggdGhlIGdpdmVuIGNvbmZpZ3VyYXRpb24uXG4gICAgaWYgKCF0aGlzLl9ob3N0LnBhcmVudEVsZW1lbnQgJiYgdGhpcy5fcHJldmlvdXNIb3N0UGFyZW50KSB7XG4gICAgICB0aGlzLl9wcmV2aW91c0hvc3RQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5faG9zdCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kuYXR0YWNoKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZVN0YWNraW5nT3JkZXIoKTtcbiAgICB0aGlzLl91cGRhdGVFbGVtZW50U2l6ZSgpO1xuICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnREaXJlY3Rpb24oKTtcblxuICAgIGlmICh0aGlzLl9zY3JvbGxTdHJhdGVneSkge1xuICAgICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3kuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbiBvbmNlIHRoZSB6b25lIGlzIHN0YWJsZSBzbyB0aGF0IHRoZSBvdmVybGF5IHdpbGwgYmUgZnVsbHkgcmVuZGVyZWRcbiAgICAvLyBiZWZvcmUgYXR0ZW1wdGluZyB0byBwb3NpdGlvbiBpdCwgYXMgdGhlIHBvc2l0aW9uIG1heSBkZXBlbmQgb24gdGhlIHNpemUgb2YgdGhlIHJlbmRlcmVkXG4gICAgLy8gY29udGVudC5cbiAgICB0aGlzLl9uZ1pvbmUub25TdGFibGVcbiAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyBUaGUgb3ZlcmxheSBjb3VsZCd2ZSBiZWVuIGRldGFjaGVkIGJlZm9yZSB0aGUgem9uZSBoYXMgc3RhYmlsaXplZC5cbiAgICAgICAgaWYgKHRoaXMuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBFbmFibGUgcG9pbnRlciBldmVudHMgZm9yIHRoZSBvdmVybGF5IHBhbmUgZWxlbWVudC5cbiAgICB0aGlzLl90b2dnbGVQb2ludGVyRXZlbnRzKHRydWUpO1xuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5oYXNCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYXR0YWNoQmFja2Ryb3AoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhbmVsQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUNsYXNzZXModGhpcy5fcGFuZSwgdGhpcy5fY29uZmlnLnBhbmVsQ2xhc3MsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIE9ubHkgZW1pdCB0aGUgYGF0dGFjaG1lbnRzYCBldmVudCBvbmNlIGFsbCBvdGhlciBzZXR1cCBpcyBkb25lLlxuICAgIHRoaXMuX2F0dGFjaG1lbnRzLm5leHQoKTtcblxuICAgIC8vIFRyYWNrIHRoaXMgb3ZlcmxheSBieSB0aGUga2V5Ym9hcmQgZGlzcGF0Y2hlclxuICAgIHRoaXMuX2tleWJvYXJkRGlzcGF0Y2hlci5hZGQodGhpcyk7XG5cbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHJlbW92ZSB0aGUgbnVsbCBjaGVjayBmb3IgYF9sb2NhdGlvbmBcbiAgICAvLyBvbmNlIHRoZSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgaXMgbWFkZSByZXF1aXJlZC5cbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3Bvc2VPbk5hdmlnYXRpb24gJiYgdGhpcy5fbG9jYXRpb24pIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uQ2hhbmdlcyA9IHRoaXMuX2xvY2F0aW9uLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRpc3Bvc2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaFJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBhbiBvdmVybGF5IGZyb20gYSBwb3J0YWwuXG4gICAqIEByZXR1cm5zIFRoZSBwb3J0YWwgZGV0YWNobWVudCByZXN1bHQuXG4gICAqL1xuICBkZXRhY2goKTogYW55IHtcbiAgICBpZiAoIXRoaXMuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGV0YWNoQmFja2Ryb3AoKTtcblxuICAgIC8vIFdoZW4gdGhlIG92ZXJsYXkgaXMgZGV0YWNoZWQsIHRoZSBwYW5lIGVsZW1lbnQgc2hvdWxkIGRpc2FibGUgcG9pbnRlciBldmVudHMuXG4gICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBvdGhlcndpc2UgdGhlIHBhbmUgZWxlbWVudCB3aWxsIGNvdmVyIHRoZSBwYWdlIGFuZCBkaXNhYmxlXG4gICAgLy8gcG9pbnRlciBldmVudHMgdGhlcmVmb3JlLiBEZXBlbmRzIG9uIHRoZSBwb3NpdGlvbiBzdHJhdGVneSBhbmQgdGhlIGFwcGxpZWQgcGFuZSBib3VuZGFyaWVzLlxuICAgIHRoaXMuX3RvZ2dsZVBvaW50ZXJFdmVudHMoZmFsc2UpO1xuXG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kgJiYgdGhpcy5fcG9zaXRpb25TdHJhdGVneS5kZXRhY2gpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kuZGV0YWNoKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Njcm9sbFN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGV0YWNobWVudFJlc3VsdCA9IHRoaXMuX3BvcnRhbE91dGxldC5kZXRhY2goKTtcblxuICAgIC8vIE9ubHkgZW1pdCBhZnRlciBldmVyeXRoaW5nIGlzIGRldGFjaGVkLlxuICAgIHRoaXMuX2RldGFjaG1lbnRzLm5leHQoKTtcblxuICAgIC8vIFJlbW92ZSB0aGlzIG92ZXJsYXkgZnJvbSBrZXlib2FyZCBkaXNwYXRjaGVyIHRyYWNraW5nLlxuICAgIHRoaXMuX2tleWJvYXJkRGlzcGF0Y2hlci5yZW1vdmUodGhpcyk7XG5cbiAgICAvLyBLZWVwaW5nIHRoZSBob3N0IGVsZW1lbnQgaW4gdGhlIERPTSBjYW4gY2F1c2Ugc2Nyb2xsIGphbmssIGJlY2F1c2UgaXQgc3RpbGwgZ2V0c1xuICAgIC8vIHJlbmRlcmVkLCBldmVuIHRob3VnaCBpdCdzIHRyYW5zcGFyZW50IGFuZCB1bmNsaWNrYWJsZSB3aGljaCBpcyB3aHkgd2UgcmVtb3ZlIGl0LlxuICAgIHRoaXMuX2RldGFjaENvbnRlbnRXaGVuU3RhYmxlKCk7XG5cbiAgICAvLyBTdG9wIGxpc3RlbmluZyBmb3IgbG9jYXRpb24gY2hhbmdlcy5cbiAgICB0aGlzLl9sb2NhdGlvbkNoYW5nZXMudW5zdWJzY3JpYmUoKTtcblxuICAgIHJldHVybiBkZXRhY2htZW50UmVzdWx0O1xuICB9XG5cbiAgLyoqIENsZWFucyB1cCB0aGUgb3ZlcmxheSBmcm9tIHRoZSBET00uICovXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgY29uc3QgaXNBdHRhY2hlZCA9IHRoaXMuaGFzQXR0YWNoZWQoKTtcblxuICAgIGlmICh0aGlzLl9wb3NpdGlvblN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNwb3NlU2Nyb2xsU3RyYXRlZ3koKTtcbiAgICB0aGlzLmRldGFjaEJhY2tkcm9wKCk7XG4gICAgdGhpcy5fbG9jYXRpb25DaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fa2V5Ym9hcmREaXNwYXRjaGVyLnJlbW92ZSh0aGlzKTtcbiAgICB0aGlzLl9wb3J0YWxPdXRsZXQuZGlzcG9zZSgpO1xuICAgIHRoaXMuX2F0dGFjaG1lbnRzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fYmFja2Ryb3BDbGljay5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2tleWRvd25FdmVudHMuY29tcGxldGUoKTtcblxuICAgIGlmICh0aGlzLl9ob3N0ICYmIHRoaXMuX2hvc3QucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5faG9zdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2hvc3QpO1xuICAgICAgdGhpcy5faG9zdCA9IG51bGwhO1xuICAgIH1cblxuICAgIHRoaXMuX3ByZXZpb3VzSG9zdFBhcmVudCA9IHRoaXMuX3BhbmUgPSBudWxsITtcblxuICAgIGlmIChpc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9kZXRhY2htZW50cy5uZXh0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGV0YWNobWVudHMuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IGhhcyBhdHRhY2hlZCBjb250ZW50LiAqL1xuICBoYXNBdHRhY2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCk7XG4gIH1cblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiB0aGUgYmFja2Ryb3AgaGFzIGJlZW4gY2xpY2tlZC4gKi9cbiAgYmFja2Ryb3BDbGljaygpOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYmFja2Ryb3BDbGljay5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIHRoZSBvdmVybGF5IGhhcyBiZWVuIGF0dGFjaGVkLiAqL1xuICBhdHRhY2htZW50cygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYXR0YWNobWVudHMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiB0aGUgb3ZlcmxheSBoYXMgYmVlbiBkZXRhY2hlZC4gKi9cbiAgZGV0YWNobWVudHMoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RldGFjaG1lbnRzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSBvZiBrZXlkb3duIGV2ZW50cyB0YXJnZXRlZCB0byB0aGlzIG92ZXJsYXkuICovXG4gIGtleWRvd25FdmVudHMoKTogT2JzZXJ2YWJsZTxLZXlib2FyZEV2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2tleWRvd25FdmVudHMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgY3VycmVudCBvdmVybGF5IGNvbmZpZ3VyYXRpb24sIHdoaWNoIGlzIGltbXV0YWJsZS4gKi9cbiAgZ2V0Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIG92ZXJsYXkgYmFzZWQgb24gdGhlIHBvc2l0aW9uIHN0cmF0ZWd5LiAqL1xuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcG9zaXRpb25TdHJhdGVneSkge1xuICAgICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS5hcHBseSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTd2l0Y2hlcyB0byBhIG5ldyBwb3NpdGlvbiBzdHJhdGVneSBhbmQgdXBkYXRlcyB0aGUgb3ZlcmxheSBwb3NpdGlvbi4gKi9cbiAgdXBkYXRlUG9zaXRpb25TdHJhdGVneShzdHJhdGVneTogUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xuICAgIGlmIChzdHJhdGVneSA9PT0gdGhpcy5fcG9zaXRpb25TdHJhdGVneSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3NpdGlvblN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG5cbiAgICBpZiAodGhpcy5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICBzdHJhdGVneS5hdHRhY2godGhpcyk7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFVwZGF0ZSB0aGUgc2l6ZSBwcm9wZXJ0aWVzIG9mIHRoZSBvdmVybGF5LiAqL1xuICB1cGRhdGVTaXplKHNpemVDb25maWc6IE92ZXJsYXlTaXplQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnID0gey4uLnRoaXMuX2NvbmZpZywgLi4uc2l6ZUNvbmZpZ307XG4gICAgdGhpcy5fdXBkYXRlRWxlbWVudFNpemUoKTtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBMVFIvUlRMIGRpcmVjdGlvbiBmb3IgdGhlIG92ZXJsYXkuICovXG4gIHNldERpcmVjdGlvbihkaXI6IERpcmVjdGlvbiB8IERpcmVjdGlvbmFsaXR5KTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnID0gey4uLnRoaXMuX2NvbmZpZywgZGlyZWN0aW9uOiBkaXJ9O1xuICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnREaXJlY3Rpb24oKTtcbiAgfVxuXG4gIC8qKiBBZGQgYSBDU1MgY2xhc3Mgb3IgYW4gYXJyYXkgb2YgY2xhc3NlcyB0byB0aGUgb3ZlcmxheSBwYW5lLiAqL1xuICBhZGRQYW5lbENsYXNzKGNsYXNzZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3BhbmUpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUNsYXNzZXModGhpcy5fcGFuZSwgY2xhc3NlcywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZSBhIENTUyBjbGFzcyBvciBhbiBhcnJheSBvZiBjbGFzc2VzIGZyb20gdGhlIG92ZXJsYXkgcGFuZS4gKi9cbiAgcmVtb3ZlUGFuZWxDbGFzcyhjbGFzc2VzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wYW5lKSB7XG4gICAgICB0aGlzLl90b2dnbGVDbGFzc2VzKHRoaXMuX3BhbmUsIGNsYXNzZXMsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF5b3V0IGRpcmVjdGlvbiBvZiB0aGUgb3ZlcmxheSBwYW5lbC5cbiAgICovXG4gIGdldERpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuX2NvbmZpZy5kaXJlY3Rpb247XG5cbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuICdsdHInO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgZGlyZWN0aW9uID09PSAnc3RyaW5nJyA/IGRpcmVjdGlvbiA6IGRpcmVjdGlvbi52YWx1ZTtcbiAgfVxuXG4gIC8qKiBTd2l0Y2hlcyB0byBhIG5ldyBzY3JvbGwgc3RyYXRlZ3kuICovXG4gIHVwZGF0ZVNjcm9sbFN0cmF0ZWd5KHN0cmF0ZWd5OiBTY3JvbGxTdHJhdGVneSk6IHZvaWQge1xuICAgIGlmIChzdHJhdGVneSA9PT0gdGhpcy5fc2Nyb2xsU3RyYXRlZ3kpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNwb3NlU2Nyb2xsU3RyYXRlZ3koKTtcbiAgICB0aGlzLl9zY3JvbGxTdHJhdGVneSA9IHN0cmF0ZWd5O1xuXG4gICAgaWYgKHRoaXMuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgc3RyYXRlZ3kuYXR0YWNoKHRoaXMpO1xuICAgICAgc3RyYXRlZ3kuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIHRleHQgZGlyZWN0aW9uIG9mIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICBwcml2YXRlIF91cGRhdGVFbGVtZW50RGlyZWN0aW9uKCkge1xuICAgIHRoaXMuX2hvc3Quc2V0QXR0cmlidXRlKCdkaXInLCB0aGlzLmdldERpcmVjdGlvbigpKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBzaXplIG9mIHRoZSBvdmVybGF5IGVsZW1lbnQgYmFzZWQgb24gdGhlIG92ZXJsYXkgY29uZmlnLiAqL1xuICBwcml2YXRlIF91cGRhdGVFbGVtZW50U2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuX3BhbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuX3BhbmUuc3R5bGU7XG5cbiAgICBzdHlsZS53aWR0aCA9IGNvZXJjZUNzc1BpeGVsVmFsdWUodGhpcy5fY29uZmlnLndpZHRoKTtcbiAgICBzdHlsZS5oZWlnaHQgPSBjb2VyY2VDc3NQaXhlbFZhbHVlKHRoaXMuX2NvbmZpZy5oZWlnaHQpO1xuICAgIHN0eWxlLm1pbldpZHRoID0gY29lcmNlQ3NzUGl4ZWxWYWx1ZSh0aGlzLl9jb25maWcubWluV2lkdGgpO1xuICAgIHN0eWxlLm1pbkhlaWdodCA9IGNvZXJjZUNzc1BpeGVsVmFsdWUodGhpcy5fY29uZmlnLm1pbkhlaWdodCk7XG4gICAgc3R5bGUubWF4V2lkdGggPSBjb2VyY2VDc3NQaXhlbFZhbHVlKHRoaXMuX2NvbmZpZy5tYXhXaWR0aCk7XG4gICAgc3R5bGUubWF4SGVpZ2h0ID0gY29lcmNlQ3NzUGl4ZWxWYWx1ZSh0aGlzLl9jb25maWcubWF4SGVpZ2h0KTtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBwb2ludGVyIGV2ZW50cyBmb3IgdGhlIG92ZXJsYXkgcGFuZSBlbGVtZW50LiAqL1xuICBwcml2YXRlIF90b2dnbGVQb2ludGVyRXZlbnRzKGVuYWJsZVBvaW50ZXI6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9wYW5lLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBlbmFibGVQb2ludGVyID8gJ2F1dG8nIDogJ25vbmUnO1xuICB9XG5cbiAgLyoqIEF0dGFjaGVzIGEgYmFja2Ryb3AgZm9yIHRoaXMgb3ZlcmxheS4gKi9cbiAgcHJpdmF0ZSBfYXR0YWNoQmFja2Ryb3AoKSB7XG4gICAgY29uc3Qgc2hvd2luZ0NsYXNzID0gJ2Nkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcnO1xuXG4gICAgdGhpcy5fYmFja2Ryb3BFbGVtZW50ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5fYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nkay1vdmVybGF5LWJhY2tkcm9wJyk7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUNsYXNzZXModGhpcy5fYmFja2Ryb3BFbGVtZW50LCB0aGlzLl9jb25maWcuYmFja2Ryb3BDbGFzcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0IHRoZSBiYWNrZHJvcCBiZWZvcmUgdGhlIHBhbmUgaW4gdGhlIERPTSBvcmRlcixcbiAgICAvLyBpbiBvcmRlciB0byBoYW5kbGUgc3RhY2tlZCBvdmVybGF5cyBwcm9wZXJseS5cbiAgICB0aGlzLl9ob3N0LnBhcmVudEVsZW1lbnQhLmluc2VydEJlZm9yZSh0aGlzLl9iYWNrZHJvcEVsZW1lbnQsIHRoaXMuX2hvc3QpO1xuXG4gICAgLy8gRm9yd2FyZCBiYWNrZHJvcCBjbGlja3Mgc3VjaCB0aGF0IHRoZSBjb25zdW1lciBvZiB0aGUgb3ZlcmxheSBjYW4gcGVyZm9ybSB3aGF0ZXZlclxuICAgIC8vIGFjdGlvbiBkZXNpcmVkIHdoZW4gc3VjaCBhIGNsaWNrIG9jY3VycyAodXN1YWxseSBjbG9zaW5nIHRoZSBvdmVybGF5KS5cbiAgICB0aGlzLl9iYWNrZHJvcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9iYWNrZHJvcENsaWNrSGFuZGxlcik7XG5cbiAgICAvLyBBZGQgY2xhc3MgdG8gZmFkZS1pbiB0aGUgYmFja2Ryb3AgYWZ0ZXIgb25lIGZyYW1lLlxuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzaG93aW5nQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2hvd2luZ0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc3RhY2tpbmcgb3JkZXIgb2YgdGhlIGVsZW1lbnQsIG1vdmluZyBpdCB0byB0aGUgdG9wIGlmIG5lY2Vzc2FyeS5cbiAgICogVGhpcyBpcyByZXF1aXJlZCBpbiBjYXNlcyB3aGVyZSBvbmUgb3ZlcmxheSB3YXMgZGV0YWNoZWQsIHdoaWxlIGFub3RoZXIgb25lLFxuICAgKiB0aGF0IHNob3VsZCBiZSBiZWhpbmQgaXQsIHdhcyBkZXN0cm95ZWQuIFRoZSBuZXh0IHRpbWUgYm90aCBvZiB0aGVtIGFyZSBvcGVuZWQsXG4gICAqIHRoZSBzdGFja2luZyB3aWxsIGJlIHdyb25nLCBiZWNhdXNlIHRoZSBkZXRhY2hlZCBlbGVtZW50J3MgcGFuZSB3aWxsIHN0aWxsIGJlXG4gICAqIGluIGl0cyBvcmlnaW5hbCBET00gcG9zaXRpb24uXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGVTdGFja2luZ09yZGVyKCkge1xuICAgIGlmICh0aGlzLl9ob3N0Lm5leHRTaWJsaW5nKSB7XG4gICAgICB0aGlzLl9ob3N0LnBhcmVudE5vZGUhLmFwcGVuZENoaWxkKHRoaXMuX2hvc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEZXRhY2hlcyB0aGUgYmFja2Ryb3AgKGlmIGFueSkgYXNzb2NpYXRlZCB3aXRoIHRoZSBvdmVybGF5LiAqL1xuICBkZXRhY2hCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICBsZXQgYmFja2Ryb3BUb0RldGFjaCA9IHRoaXMuX2JhY2tkcm9wRWxlbWVudDtcblxuICAgIGlmICghYmFja2Ryb3BUb0RldGFjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0aW1lb3V0SWQ6IG51bWJlcjtcbiAgICBsZXQgZmluaXNoRGV0YWNoID0gKCkgPT4ge1xuICAgICAgLy8gSXQgbWF5IG5vdCBiZSBhdHRhY2hlZCB0byBhbnl0aGluZyBpbiBjZXJ0YWluIGNhc2VzIChlLmcuIHVuaXQgdGVzdHMpLlxuICAgICAgaWYgKGJhY2tkcm9wVG9EZXRhY2gpIHtcbiAgICAgICAgYmFja2Ryb3BUb0RldGFjaC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2JhY2tkcm9wQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgYmFja2Ryb3BUb0RldGFjaC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZmluaXNoRGV0YWNoKTtcblxuICAgICAgICBpZiAoYmFja2Ryb3BUb0RldGFjaC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgYmFja2Ryb3BUb0RldGFjaC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJhY2tkcm9wVG9EZXRhY2gpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEl0IGlzIHBvc3NpYmxlIHRoYXQgYSBuZXcgcG9ydGFsIGhhcyBiZWVuIGF0dGFjaGVkIHRvIHRoaXMgb3ZlcmxheSBzaW5jZSB3ZSBzdGFydGVkXG4gICAgICAvLyByZW1vdmluZyB0aGUgYmFja2Ryb3AuIElmIHRoYXQgaXMgdGhlIGNhc2UsIG9ubHkgY2xlYXIgdGhlIGJhY2tkcm9wIHJlZmVyZW5jZSBpZiBpdFxuICAgICAgLy8gaXMgc3RpbGwgdGhlIHNhbWUgaW5zdGFuY2UgdGhhdCB3ZSBzdGFydGVkIHRvIHJlbW92ZS5cbiAgICAgIGlmICh0aGlzLl9iYWNrZHJvcEVsZW1lbnQgPT0gYmFja2Ryb3BUb0RldGFjaCkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQ2xhc3NlcyhiYWNrZHJvcFRvRGV0YWNoISwgdGhpcy5fY29uZmlnLmJhY2tkcm9wQ2xhc3MsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfTtcblxuICAgIGJhY2tkcm9wVG9EZXRhY2guY2xhc3NMaXN0LnJlbW92ZSgnY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZycpO1xuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGJhY2tkcm9wVG9EZXRhY2ghLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmaW5pc2hEZXRhY2gpO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGJhY2tkcm9wIGRvZXNuJ3QgaGF2ZSBhIHRyYW5zaXRpb24sIHRoZSBgdHJhbnNpdGlvbmVuZGAgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICAvLyBJbiB0aGlzIGNhc2Ugd2UgbWFrZSBpdCB1bmNsaWNrYWJsZSBhbmQgd2UgdHJ5IHRvIHJlbW92ZSBpdCBhZnRlciBhIGRlbGF5LlxuICAgIGJhY2tkcm9wVG9EZXRhY2guc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIC8vIFJ1biB0aGlzIG91dHNpZGUgdGhlIEFuZ3VsYXIgem9uZSBiZWNhdXNlIHRoZXJlJ3Mgbm90aGluZyB0aGF0IEFuZ3VsYXIgY2FyZXMgYWJvdXQuXG4gICAgLy8gSWYgaXQgd2VyZSB0byBydW4gaW5zaWRlIHRoZSBBbmd1bGFyIHpvbmUsIGV2ZXJ5IHRlc3QgdGhhdCB1c2VkIE92ZXJsYXkgd291bGQgaGF2ZSB0byBiZVxuICAgIC8vIGVpdGhlciBhc3luYyBvciBmYWtlQXN5bmMuXG4gICAgdGltZW91dElkID0gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoZmluaXNoRGV0YWNoLCA1MDApKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIGEgc2luZ2xlIENTUyBjbGFzcyBvciBhbiBhcnJheSBvZiBjbGFzc2VzIG9uIGFuIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX3RvZ2dsZUNsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNzc0NsYXNzZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0FkZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuXG4gICAgY29lcmNlQXJyYXkoY3NzQ2xhc3NlcykuZm9yRWFjaChjc3NDbGFzcyA9PiB7XG4gICAgICAvLyBXZSBjYW4ndCBkbyBhIHNwcmVhZCBoZXJlLCBiZWNhdXNlIElFIGRvZXNuJ3Qgc3VwcG9ydCBzZXR0aW5nIG11bHRpcGxlIGNsYXNzZXMuXG4gICAgICAvLyBBbHNvIHRyeWluZyB0byBhZGQgYW4gZW1wdHkgc3RyaW5nIHRvIGEgRE9NVG9rZW5MaXN0IHdpbGwgdGhyb3cuXG4gICAgICBpZiAoY3NzQ2xhc3MpIHtcbiAgICAgICAgaXNBZGQgPyBjbGFzc0xpc3QuYWRkKGNzc0NsYXNzKSA6IGNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIERldGFjaGVzIHRoZSBvdmVybGF5IGNvbnRlbnQgbmV4dCB0aW1lIHRoZSB6b25lIHN0YWJpbGl6ZXMuICovXG4gIHByaXZhdGUgX2RldGFjaENvbnRlbnRXaGVuU3RhYmxlKCkge1xuICAgIC8vIE5vcm1hbGx5IHdlIHdvdWxkbid0IGhhdmUgdG8gZXhwbGljaXRseSBydW4gdGhpcyBvdXRzaWRlIHRoZSBgTmdab25lYCwgaG93ZXZlclxuICAgIC8vIGlmIHRoZSBjb25zdW1lciBpcyB1c2luZyBgem9uZS1wYXRjaC1yeGpzYCwgdGhlIGBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmVgIGNhbGwgd2lsbFxuICAgIC8vIGJlIHBhdGNoZWQgdG8gcnVuIGluc2lkZSB0aGUgem9uZSwgd2hpY2ggd2lsbCB0aHJvdyB1cyBpbnRvIGFuIGluZmluaXRlIGxvb3AuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIC8vIFdlIGNhbid0IHJlbW92ZSB0aGUgaG9zdCBoZXJlIGltbWVkaWF0ZWx5LCBiZWNhdXNlIHRoZSBvdmVybGF5IHBhbmUncyBjb250ZW50XG4gICAgICAvLyBtaWdodCBzdGlsbCBiZSBhbmltYXRpbmcuIFRoaXMgc3RyZWFtIGhlbHBzIHVzIGF2b2lkIGludGVycnVwdGluZyB0aGUgYW5pbWF0aW9uXG4gICAgICAvLyBieSB3YWl0aW5nIGZvciB0aGUgcGFuZSB0byBiZWNvbWUgZW1wdHkuXG4gICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUub25TdGFibGVcbiAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbChtZXJnZSh0aGlzLl9hdHRhY2htZW50cywgdGhpcy5fZGV0YWNobWVudHMpKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgLy8gTmVlZHMgYSBjb3VwbGUgb2YgY2hlY2tzIGZvciB0aGUgcGFuZSBhbmQgaG9zdCwgYmVjYXVzZVxuICAgICAgICAgIC8vIHRoZXkgbWF5IGhhdmUgYmVlbiByZW1vdmVkIGJ5IHRoZSB0aW1lIHRoZSB6b25lIHN0YWJpbGl6ZXMuXG4gICAgICAgICAgaWYgKCF0aGlzLl9wYW5lIHx8ICF0aGlzLl9ob3N0IHx8IHRoaXMuX3BhbmUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFuZSAmJiB0aGlzLl9jb25maWcucGFuZWxDbGFzcykge1xuICAgICAgICAgICAgICB0aGlzLl90b2dnbGVDbGFzc2VzKHRoaXMuX3BhbmUsIHRoaXMuX2NvbmZpZy5wYW5lbENsYXNzLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9ob3N0ICYmIHRoaXMuX2hvc3QucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c0hvc3RQYXJlbnQgPSB0aGlzLl9ob3N0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzSG9zdFBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9ob3N0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBEaXNwb3NlcyBvZiBhIHNjcm9sbCBzdHJhdGVneS4gKi9cbiAgcHJpdmF0ZSBfZGlzcG9zZVNjcm9sbFN0cmF0ZWd5KCkge1xuICAgIGNvbnN0IHNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5fc2Nyb2xsU3RyYXRlZ3k7XG5cbiAgICBpZiAoc2Nyb2xsU3RyYXRlZ3kpIHtcbiAgICAgIHNjcm9sbFN0cmF0ZWd5LmRpc2FibGUoKTtcblxuICAgICAgaWYgKHNjcm9sbFN0cmF0ZWd5LmRldGFjaCkge1xuICAgICAgICBzY3JvbGxTdHJhdGVneS5kZXRhY2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vKiogU2l6ZSBwcm9wZXJ0aWVzIGZvciBhbiBvdmVybGF5LiAqL1xuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5U2l6ZUNvbmZpZyB7XG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG4gIG1pbldpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBtaW5IZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG4gIG1heFdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBtYXhIZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG59XG4iXX0=