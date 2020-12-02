import { __values, __assign, __read, __extends } from 'tslib';
import { ScrollDispatcher, ViewportRuler, ScrollingModule } from '@angular/cdk/scrolling';
export { CdkScrollable, ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { DOCUMENT, Location } from '@angular/common';
import { Injectable, NgZone, Inject, ɵɵdefineInjectable, ɵɵinject, Optional, SkipSelf, ElementRef, ApplicationRef, ComponentFactoryResolver, Injector, InjectionToken, Directive, EventEmitter, TemplateRef, ViewContainerRef, Input, Output, NgModule } from '@angular/core';
import { coerceCssPixelValue, coerceArray, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { DomPortalOutlet, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { Platform } from '@angular/cdk/platform';
import { Subject, Subscription, merge } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
var BlockScrollStrategy = /** @class */ (function () {
    function BlockScrollStrategy(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    BlockScrollStrategy.prototype.attach = function () { };
    /** Blocks page-level scroll while the attached overlay is open. */
    BlockScrollStrategy.prototype.enable = function () {
        if (this._canBeEnabled()) {
            var root = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
            root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    };
    /** Unblocks page-level scroll while the attached overlay is open. */
    BlockScrollStrategy.prototype.disable = function () {
        if (this._isEnabled) {
            var html = this._document.documentElement;
            var body = this._document.body;
            var htmlStyle = html.style;
            var bodyStyle = body.style;
            var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
        }
    };
    BlockScrollStrategy.prototype._canBeEnabled = function () {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        var html = this._document.documentElement;
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        var body = this._document.body;
        var viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    };
    return BlockScrollStrategy;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 */
function getMatScrollStrategyAlreadyAttachedError() {
    return Error("Scroll strategy has already been attached.");
}

/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
var CloseScrollStrategy = /** @class */ (function () {
    function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /** Detaches the overlay ref and disables the scroll strategy. */
        this._detach = function () {
            _this.disable();
            if (_this._overlayRef.hasAttached()) {
                _this._ngZone.run(function () { return _this._overlayRef.detach(); });
            }
        };
    }
    /** Attaches this scroll strategy to an overlay. */
    CloseScrollStrategy.prototype.attach = function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables the closing of the attached overlay on scroll. */
    CloseScrollStrategy.prototype.enable = function () {
        var _this = this;
        if (this._scrollSubscription) {
            return;
        }
        var stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(function () {
                var scrollPosition = _this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - _this._initialScrollPosition) > _this._config.threshold) {
                    _this._detach();
                }
                else {
                    _this._overlayRef.updatePosition();
                }
            });
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    };
    /** Disables the closing the attached overlay on scroll. */
    CloseScrollStrategy.prototype.disable = function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    CloseScrollStrategy.prototype.detach = function () {
        this.disable();
        this._overlayRef = null;
    };
    return CloseScrollStrategy;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Scroll strategy that doesn't do anything. */
var NoopScrollStrategy = /** @class */ (function () {
    function NoopScrollStrategy() {
    }
    /** Does nothing, as this scroll strategy is a no-op. */
    NoopScrollStrategy.prototype.enable = function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    NoopScrollStrategy.prototype.disable = function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    NoopScrollStrategy.prototype.attach = function () { };
    return NoopScrollStrategy;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @returns Whether the element is scrolled out of view
 * @docs-private
 */
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some(function (containerBounds) {
        var outsideAbove = element.bottom < containerBounds.top;
        var outsideBelow = element.top > containerBounds.bottom;
        var outsideLeft = element.right < containerBounds.left;
        var outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    });
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @returns Whether the element is clipped
 * @docs-private
 */
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some(function (scrollContainerRect) {
        var clippedAbove = element.top < scrollContainerRect.top;
        var clippedBelow = element.bottom > scrollContainerRect.bottom;
        var clippedLeft = element.left < scrollContainerRect.left;
        var clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Strategy that will update the element position as the user is scrolling.
 */
var RepositionScrollStrategy = /** @class */ (function () {
    function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /** Attaches this scroll strategy to an overlay. */
    RepositionScrollStrategy.prototype.attach = function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables repositioning of the attached overlay on scroll. */
    RepositionScrollStrategy.prototype.enable = function () {
        var _this = this;
        if (!this._scrollSubscription) {
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (_this._config && _this._config.autoClose) {
                    var overlayRect = _this._overlayRef.overlayElement.getBoundingClientRect();
                    var _a = _this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
                    // TODO(crisbeto): include all ancestor scroll containers here once
                    // we have a way of exposing the trigger element to the scroll strategy.
                    var parentRects = [{ width: width, height: height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        _this.disable();
                        _this._ngZone.run(function () { return _this._overlayRef.detach(); });
                    }
                }
            });
        }
    };
    /** Disables repositioning of the attached overlay on scroll. */
    RepositionScrollStrategy.prototype.disable = function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    RepositionScrollStrategy.prototype.detach = function () {
        this.disable();
        this._overlayRef = null;
    };
    return RepositionScrollStrategy;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
var ScrollStrategyOptions = /** @class */ (function () {
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /** Do nothing on scroll. */
        this.noop = function () { return new NoopScrollStrategy(); };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = function (config) { return new CloseScrollStrategy(_this._scrollDispatcher, _this._ngZone, _this._viewportRuler, config); };
        /** Block scrolling. */
        this.block = function () { return new BlockScrollStrategy(_this._viewportRuler, _this._document); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) { return new RepositionScrollStrategy(_this._scrollDispatcher, _this._viewportRuler, _this._ngZone, config); };
        this._document = document;
    }
    ScrollStrategyOptions.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ScrollStrategyOptions.ctorParameters = function () { return [
        { type: ScrollDispatcher },
        { type: ViewportRuler },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ScrollStrategyOptions.ɵprov = ɵɵdefineInjectable({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(ɵɵinject(ScrollDispatcher), ɵɵinject(ViewportRuler), ɵɵinject(NgZone), ɵɵinject(DOCUMENT)); }, token: ScrollStrategyOptions, providedIn: "root" });
    return ScrollStrategyOptions;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Initial configuration used when creating an overlay. */
var OverlayConfig = /** @class */ (function () {
    function OverlayConfig(config) {
        var e_1, _a;
        /** Strategy to be used when handling scroll events while the overlay is open. */
        this.scrollStrategy = new NoopScrollStrategy();
        /** Custom class to add to the overlay pane. */
        this.panelClass = '';
        /** Whether the overlay has a backdrop. */
        this.hasBackdrop = false;
        /** Custom class to add to the backdrop */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.disposeOnNavigation = false;
        if (config) {
            // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
            // loses the array generic type in the `for of`. But we *also* have to use `Array` because
            // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
            var configKeys = Object.keys(config);
            try {
                for (var configKeys_1 = __values(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
                    var key = configKeys_1_1.value;
                    if (config[key] !== undefined) {
                        // TypeScript, as of version 3.5, sees the left-hand-side of this expression
                        // as "I don't know *which* key this is, so the only valid value is the intersection
                        // of all the posible values." In this case, that happens to be `undefined`. TypeScript
                        // is not smart enough to see that the right-hand-side is actually an access of the same
                        // exact type with the same exact key, meaning that the value type must be identical.
                        // So we use `any` to work around this.
                        this[key] = config[key];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    return OverlayConfig;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The points of the origin element and the overlay element to connect. */
var ConnectionPositionPair = /** @class */ (function () {
    function ConnectionPositionPair(origin, overlay, 
    /** Offset along the X axis. */
    offsetX, 
    /** Offset along the Y axis. */
    offsetY, 
    /** Class(es) to be applied to the panel while this position is active. */
    panelClass) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  @docs-private
 */
var ScrollingVisibility = /** @class */ (function () {
    function ScrollingVisibility() {
    }
    return ScrollingVisibility;
}());
/** The change event emitted by the strategy when a fallback position is used. */
var ConnectedOverlayPositionChange = /** @class */ (function () {
    function ConnectedOverlayPositionChange(
    /** The position used as a result of this change. */
    connectionPair, 
    /** @docs-private */
    scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
    /** @nocollapse */
    ConnectedOverlayPositionChange.ctorParameters = function () { return [
        { type: ConnectionPositionPair },
        { type: ScrollingVisibility, decorators: [{ type: Optional }] }
    ]; };
    return ConnectedOverlayPositionChange;
}());
/**
 * Validates whether a vertical position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
function validateVerticalPosition(property, value) {
    if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"top\", \"bottom\" or \"center\".");
    }
}
/**
 * Validates whether a horizontal position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
function validateHorizontalPosition(property, value) {
    if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"start\", \"end\" or \"center\".");
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
var OverlayKeyboardDispatcher = /** @class */ (function () {
    function OverlayKeyboardDispatcher(document) {
        var _this = this;
        /** Currently attached overlays in the order they were attached. */
        this._attachedOverlays = [];
        /** Keyboard event listener that will be attached to the body. */
        this._keydownListener = function (event) {
            var overlays = _this._attachedOverlays;
            for (var i = overlays.length - 1; i > -1; i--) {
                // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
                // We want to target the most recent overlay, rather than trying to match where the event came
                // from, because some components might open an overlay, but keep focus on a trigger element
                // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
                // because we don't want overlays that don't handle keyboard events to block the ones below
                // them that do.
                if (overlays[i]._keydownEvents.observers.length > 0) {
                    overlays[i]._keydownEvents.next(event);
                    break;
                }
            }
        };
        this._document = document;
    }
    OverlayKeyboardDispatcher.prototype.ngOnDestroy = function () {
        this._detach();
    };
    /** Add a new overlay to the list of attached overlay refs. */
    OverlayKeyboardDispatcher.prototype.add = function (overlayRef) {
        // Ensure that we don't get the same overlay multiple times.
        this.remove(overlayRef);
        // Lazily start dispatcher once first overlay is added
        if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener);
            this._isAttached = true;
        }
        this._attachedOverlays.push(overlayRef);
    };
    /** Remove an overlay from the list of attached overlay refs. */
    OverlayKeyboardDispatcher.prototype.remove = function (overlayRef) {
        var index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        // Remove the global listener once there are no more overlays.
        if (this._attachedOverlays.length === 0) {
            this._detach();
        }
    };
    /** Detaches the global keyboard event listener. */
    OverlayKeyboardDispatcher.prototype._detach = function () {
        if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener);
            this._isAttached = false;
        }
    };
    OverlayKeyboardDispatcher.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OverlayKeyboardDispatcher.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    OverlayKeyboardDispatcher.ɵprov = ɵɵdefineInjectable({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(ɵɵinject(DOCUMENT)); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
    return OverlayKeyboardDispatcher;
}());
/** @docs-private @deprecated @breaking-change 8.0.0 */
function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new Optional(), new SkipSelf(), OverlayKeyboardDispatcher],
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        DOCUMENT
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Whether we're in a testing environment.
 * TODO(crisbeto): remove this once we have an overlay testing module.
 */
var isTestEnvironment = typeof window !== 'undefined' && !!window &&
    !!(window.__karma__ || window.jasmine);
/** Container inside which all overlays will render. */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer(document, 
    /**
     * @deprecated `platform` parameter to become required.
     * @breaking-change 10.0.0
     */
    _platform) {
        this._platform = _platform;
        this._document = document;
    }
    OverlayContainer.prototype.ngOnDestroy = function () {
        var container = this._containerElement;
        if (container && container.parentNode) {
            container.parentNode.removeChild(container);
        }
    };
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    OverlayContainer.prototype._createContainer = function () {
        // @breaking-change 10.0.0 Remove null check for `_platform`.
        var isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
        var containerClass = 'cdk-overlay-container';
        if (isBrowser || isTestEnvironment) {
            var oppositePlatformContainers = this._document.querySelectorAll("." + containerClass + "[platform=\"server\"], " +
                ("." + containerClass + "[platform=\"test\"]"));
            // Remove any old containers from the opposite platform.
            // This can happen when transitioning from the server to the client.
            for (var i = 0; i < oppositePlatformContainers.length; i++) {
                oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
            }
        }
        var container = this._document.createElement('div');
        container.classList.add(containerClass);
        // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
        // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
        // The new logic was a little too aggressive since it was breaking some legitimate use cases.
        // To mitigate the problem we made it so that only containers from a different platform are
        // cleared, but the side-effect was that people started depending on the overly-aggressive
        // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
        // module which does the cleanup, we try to detect that we're in a test environment and we
        // always clear the container. See #17006.
        // TODO(crisbeto): remove the test environment check once we have an overlay testing module.
        if (isTestEnvironment) {
            container.setAttribute('platform', 'test');
        }
        else if (!isBrowser) {
            container.setAttribute('platform', 'server');
        }
        this._document.body.appendChild(container);
        this._containerElement = container;
    };
    OverlayContainer.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform }
    ]; };
    OverlayContainer.ɵprov = ɵɵdefineInjectable({ factory: function OverlayContainer_Factory() { return new OverlayContainer(ɵɵinject(DOCUMENT), ɵɵinject(Platform)); }, token: OverlayContainer, providedIn: "root" });
    return OverlayContainer;
}());
/** @docs-private @deprecated @breaking-change 8.0.0 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
var OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new Optional(), new SkipSelf(), OverlayContainer],
        DOCUMENT // We need to use the InjectionToken somewhere to keep TS happy
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
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

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
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

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * @breaking-change 8.0.0
 */
var ConnectedPositionStrategy = /** @class */ (function () {
    function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = [];
        // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.
        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer)
            .withFlexibleDimensions(false)
            .withPush(false)
            .withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: function () {
            return this._overlayRef.getDirection() === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /** Emits an event when the connection point changes. */
        get: function () {
            return this._positionStrategy.positionChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attach this position strategy to an overlay. */
    ConnectedPositionStrategy.prototype.attach = function (overlayRef) {
        this._overlayRef = overlayRef;
        this._positionStrategy.attach(overlayRef);
        if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
        }
    };
    /** Disposes all resources used by the position strategy. */
    ConnectedPositionStrategy.prototype.dispose = function () {
        this._positionStrategy.dispose();
    };
    /** @docs-private */
    ConnectedPositionStrategy.prototype.detach = function () {
        this._positionStrategy.detach();
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    ConnectedPositionStrategy.prototype.apply = function () {
        this._positionStrategy.apply();
    };
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    ConnectedPositionStrategy.prototype.recalculateLastPosition = function () {
        this._positionStrategy.reapplyLastPosition();
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    ConnectedPositionStrategy.prototype.withScrollableContainers = function (scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
    };
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos, offsetX, offsetY) {
        var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        this._preferredPositions.push(position);
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    };
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    ConnectedPositionStrategy.prototype.withDirection = function (dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if (this._overlayRef) {
            this._overlayRef.setDirection(dir);
        }
        else {
            this._direction = dir;
        }
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    ConnectedPositionStrategy.prototype.withOffsetX = function (offset) {
        this._positionStrategy.withDefaultOffsetX(offset);
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    ConnectedPositionStrategy.prototype.withOffsetY = function (offset) {
        this._positionStrategy.withDefaultOffsetY(offset);
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    ConnectedPositionStrategy.prototype.withLockedPosition = function (isLocked) {
        this._positionStrategy.withLockedPosition(isLocked);
        return this;
    };
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    ConnectedPositionStrategy.prototype.withPositions = function (positions) {
        this._preferredPositions = positions.slice();
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    ConnectedPositionStrategy.prototype.setOrigin = function (origin) {
        this._positionStrategy.setOrigin(origin);
        return this;
    };
    return ConnectedPositionStrategy;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Class to be added to the overlay pane wrapper. */
var wrapperClass = 'cdk-global-overlay-wrapper';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var GlobalPositionStrategy = /** @class */ (function () {
    function GlobalPositionStrategy() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    GlobalPositionStrategy.prototype.attach = function (overlayRef) {
        var config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
    };
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    GlobalPositionStrategy.prototype.top = function (value) {
        if (value === void 0) { value = ''; }
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    };
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    GlobalPositionStrategy.prototype.left = function (value) {
        if (value === void 0) { value = ''; }
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    };
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    GlobalPositionStrategy.prototype.bottom = function (value) {
        if (value === void 0) { value = ''; }
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    };
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    GlobalPositionStrategy.prototype.right = function (value) {
        if (value === void 0) { value = ''; }
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    };
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    GlobalPositionStrategy.prototype.width = function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ width: value });
        }
        else {
            this._width = value;
        }
        return this;
    };
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    GlobalPositionStrategy.prototype.height = function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ height: value });
        }
        else {
            this._height = value;
        }
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    GlobalPositionStrategy.prototype.centerHorizontally = function (offset) {
        if (offset === void 0) { offset = ''; }
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    GlobalPositionStrategy.prototype.centerVertically = function (offset) {
        if (offset === void 0) { offset = ''; }
        this.top(offset);
        this._alignItems = 'center';
        return this;
    };
    /**
     * Apply the position to the element.
     * @docs-private
     */
    GlobalPositionStrategy.prototype.apply = function () {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
        }
        var styles = this._overlayRef.overlayElement.style;
        var parentStyles = this._overlayRef.hostElement.style;
        var config = this._overlayRef.getConfig();
        var width = config.width, height = config.height, maxWidth = config.maxWidth, maxHeight = config.maxHeight;
        var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') &&
            (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
        var shouldBeFlushVertically = (height === '100%' || height === '100vh') &&
            (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
        styles.position = this._cssPosition;
        styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
        styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        if (shouldBeFlushHorizontally) {
            parentStyles.justifyContent = 'flex-start';
        }
        else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
        }
        else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
            }
            else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
            }
        }
        else {
            parentStyles.justifyContent = this._justifyContent;
        }
        parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
    };
    /**
     * Cleans up the DOM changes from the position strategy.
     * @docs-private
     */
    GlobalPositionStrategy.prototype.dispose = function () {
        if (this._isDisposed || !this._overlayRef) {
            return;
        }
        var styles = this._overlayRef.overlayElement.style;
        var parent = this._overlayRef.hostElement;
        var parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop =
            styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
        this._overlayRef = null;
        this._isDisposed = true;
    };
    return GlobalPositionStrategy;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Builder for overlay position strategy. */
var OverlayPositionBuilder = /** @class */ (function () {
    function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
    }
    /**
     * Creates a global position strategy.
     */
    OverlayPositionBuilder.prototype.global = function () {
        return new GlobalPositionStrategy();
    };
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     * @deprecated Use `flexibleConnectedTo` instead.
     * @breaking-change 8.0.0
     */
    OverlayPositionBuilder.prototype.connectedTo = function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    };
    /**
     * Creates a flexible position strategy.
     * @param origin Origin relative to which to position the overlay.
     */
    OverlayPositionBuilder.prototype.flexibleConnectedTo = function (origin) {
        return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    };
    OverlayPositionBuilder.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OverlayPositionBuilder.ctorParameters = function () { return [
        { type: ViewportRuler },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform },
        { type: OverlayContainer }
    ]; };
    OverlayPositionBuilder.ɵprov = ɵɵdefineInjectable({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(ɵɵinject(ViewportRuler), ɵɵinject(DOCUMENT), ɵɵinject(Platform), ɵɵinject(OverlayContainer)); }, token: OverlayPositionBuilder, providedIn: "root" });
    return OverlayPositionBuilder;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Next overlay unique ID. */
var nextUniqueId = 0;
// Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
// which needs to be different depending on where OverlayModule is imported.
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(
    /** Scrolling strategies that can be used when creating an overlay. */
    scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, 
    // @breaking-change 8.0.0 `_location` parameter to be made required.
    _location) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
    }
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    Overlay.prototype.create = function (config) {
        var host = this._createHostElement();
        var pane = this._createPaneElement(host);
        var portalOutlet = this._createPortalOutlet(pane);
        var overlayConfig = new OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this._directionality.value;
        return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
    };
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    Overlay.prototype.position = function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function (host) {
        var pane = this._document.createElement('div');
        pane.id = "cdk-overlay-" + nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
    };
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @returns Newly-create host element.
     */
    Overlay.prototype._createHostElement = function () {
        var host = this._document.createElement('div');
        this._overlayContainer.getContainerElement().appendChild(host);
        return host;
    };
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal outlet.
     * @returns A portal outlet for the given DOM element.
     */
    Overlay.prototype._createPortalOutlet = function (pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this._appRef) {
            this._appRef = this._injector.get(ApplicationRef);
        }
        return new DomPortalOutlet(pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
    };
    Overlay.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: ScrollStrategyOptions },
        { type: OverlayContainer },
        { type: ComponentFactoryResolver },
        { type: OverlayPositionBuilder },
        { type: OverlayKeyboardDispatcher },
        { type: Injector },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Directionality },
        { type: Location, decorators: [{ type: Optional }] }
    ]; };
    return Overlay;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
var defaultPositionList = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    }
];
/** Injection token that determines the scroll handling while the connected overlay is open. */
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken('cdk-connected-overlay-scroll-strategy');
/** @docs-private @deprecated @breaking-change 8.0.0 */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
    return function (config) { return overlay.scrollStrategies.reposition(config); };
}
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var CdkOverlayOrigin = /** @class */ (function () {
    function CdkOverlayOrigin(
    /** Reference to the element on which the directive is applied. */
    elementRef) {
        this.elementRef = elementRef;
    }
    CdkOverlayOrigin.decorators = [
        { type: Directive, args: [{
                    selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                    exportAs: 'cdkOverlayOrigin',
                },] }
    ];
    /** @nocollapse */
    CdkOverlayOrigin.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return CdkOverlayOrigin;
}());
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
var CdkConnectedOverlay = /** @class */ (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = Subscription.EMPTY;
        /** Margin between the overlay and the viewport edges. */
        this.viewportMargin = 0;
        /** Whether the overlay is open. */
        this.open = false;
        /** Event emitted when the backdrop is clicked. */
        this.backdropClick = new EventEmitter();
        /** Event emitted when the position has changed. */
        this.positionChange = new EventEmitter();
        /** Event emitted when the overlay has been attached. */
        this.attach = new EventEmitter();
        /** Event emitted when the overlay has been detached. */
        this.detach = new EventEmitter();
        /** Emits when there are keyboard events that are targeted at the overlay. */
        this.overlayKeydown = new EventEmitter();
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
    }
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetX", {
        /** The offset in pixels for the overlay connection point on the x-axis */
        get: function () { return this._offsetX; },
        set: function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetY", {
        /** The offset in pixels for the overlay connection point on the y-axis */
        get: function () { return this._offsetY; },
        set: function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "hasBackdrop", {
        /** Whether or not the overlay should attach a backdrop. */
        get: function () { return this._hasBackdrop; },
        set: function (value) { this._hasBackdrop = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "lockPosition", {
        /** Whether or not the overlay should be locked when scrolling. */
        get: function () { return this._lockPosition; },
        set: function (value) { this._lockPosition = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "flexibleDimensions", {
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */
        get: function () { return this._flexibleDimensions; },
        set: function (value) {
            this._flexibleDimensions = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "growAfterOpen", {
        /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
        get: function () { return this._growAfterOpen; },
        set: function (value) { this._growAfterOpen = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "push", {
        /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
        get: function () { return this._push; },
        set: function (value) { this._push = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "overlayRef", {
        /** The associated overlay reference. */
        get: function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "dir", {
        /** The element's layout direction. */
        get: function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    CdkConnectedOverlay.prototype.ngOnDestroy = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this._backdropSubscription.unsubscribe();
    };
    CdkConnectedOverlay.prototype.ngOnChanges = function (changes) {
        if (this._position) {
            this._updatePositionStrategy(this._position);
            this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight,
            });
            if (changes['origin'] && this.open) {
                this._position.apply();
            }
        }
        if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    };
    /** Creates an overlay */
    CdkConnectedOverlay.prototype._createOverlay = function () {
        var _this = this;
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
        this._overlayRef.keydownEvents().subscribe(function (event) {
            _this.overlayKeydown.next(event);
            if (event.keyCode === ESCAPE && !hasModifierKey(event)) {
                event.preventDefault();
                _this._detachOverlay();
            }
        });
    };
    /** Builds the overlay config based on the directive's inputs */
    CdkConnectedOverlay.prototype._buildConfig = function () {
        var positionStrategy = this._position =
            this.positionStrategy || this._createPositionStrategy();
        var overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
        });
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
        }
        return overlayConfig;
    };
    /** Updates the state of a position strategy, based on the values of the directive inputs. */
    CdkConnectedOverlay.prototype._updatePositionStrategy = function (positionStrategy) {
        var _this = this;
        var positions = this.positions.map(function (currentPosition) { return ({
            originX: currentPosition.originX,
            originY: currentPosition.originY,
            overlayX: currentPosition.overlayX,
            overlayY: currentPosition.overlayY,
            offsetX: currentPosition.offsetX || _this.offsetX,
            offsetY: currentPosition.offsetY || _this.offsetY,
            panelClass: currentPosition.panelClass || undefined,
        }); });
        return positionStrategy
            .setOrigin(this.origin.elementRef)
            .withPositions(positions)
            .withFlexibleDimensions(this.flexibleDimensions)
            .withPush(this.push)
            .withGrowAfterOpen(this.growAfterOpen)
            .withViewportMargin(this.viewportMargin)
            .withLockedPosition(this.lockPosition)
            .withTransformOriginOn(this.transformOriginSelector);
    };
    /** Returns the position strategy of the overlay to be set on the overlay config */
    CdkConnectedOverlay.prototype._createPositionStrategy = function () {
        var _this = this;
        var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);
        this._updatePositionStrategy(strategy);
        strategy.positionChanges.subscribe(function (p) { return _this.positionChange.emit(p); });
        return strategy;
    };
    /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
    CdkConnectedOverlay.prototype._attachOverlay = function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay();
        }
        else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
        }
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this.backdropClick.emit(event);
            });
        }
        else {
            this._backdropSubscription.unsubscribe();
        }
    };
    /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
    CdkConnectedOverlay.prototype._detachOverlay = function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        this._backdropSubscription.unsubscribe();
    };
    CdkConnectedOverlay.decorators = [
        { type: Directive, args: [{
                    selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                    exportAs: 'cdkConnectedOverlay'
                },] }
    ];
    /** @nocollapse */
    CdkConnectedOverlay.ctorParameters = function () { return [
        { type: Overlay },
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] }] },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
    CdkConnectedOverlay.propDecorators = {
        origin: [{ type: Input, args: ['cdkConnectedOverlayOrigin',] }],
        positions: [{ type: Input, args: ['cdkConnectedOverlayPositions',] }],
        positionStrategy: [{ type: Input, args: ['cdkConnectedOverlayPositionStrategy',] }],
        offsetX: [{ type: Input, args: ['cdkConnectedOverlayOffsetX',] }],
        offsetY: [{ type: Input, args: ['cdkConnectedOverlayOffsetY',] }],
        width: [{ type: Input, args: ['cdkConnectedOverlayWidth',] }],
        height: [{ type: Input, args: ['cdkConnectedOverlayHeight',] }],
        minWidth: [{ type: Input, args: ['cdkConnectedOverlayMinWidth',] }],
        minHeight: [{ type: Input, args: ['cdkConnectedOverlayMinHeight',] }],
        backdropClass: [{ type: Input, args: ['cdkConnectedOverlayBackdropClass',] }],
        panelClass: [{ type: Input, args: ['cdkConnectedOverlayPanelClass',] }],
        viewportMargin: [{ type: Input, args: ['cdkConnectedOverlayViewportMargin',] }],
        scrollStrategy: [{ type: Input, args: ['cdkConnectedOverlayScrollStrategy',] }],
        open: [{ type: Input, args: ['cdkConnectedOverlayOpen',] }],
        transformOriginSelector: [{ type: Input, args: ['cdkConnectedOverlayTransformOriginOn',] }],
        hasBackdrop: [{ type: Input, args: ['cdkConnectedOverlayHasBackdrop',] }],
        lockPosition: [{ type: Input, args: ['cdkConnectedOverlayLockPosition',] }],
        flexibleDimensions: [{ type: Input, args: ['cdkConnectedOverlayFlexibleDimensions',] }],
        growAfterOpen: [{ type: Input, args: ['cdkConnectedOverlayGrowAfterOpen',] }],
        push: [{ type: Input, args: ['cdkConnectedOverlayPush',] }],
        backdropClick: [{ type: Output }],
        positionChange: [{ type: Output }],
        attach: [{ type: Output }],
        detach: [{ type: Output }],
        overlayKeydown: [{ type: Output }]
    };
    return CdkConnectedOverlay;
}());
/** @docs-private */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/** @docs-private */
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var OverlayModule = /** @class */ (function () {
    function OverlayModule() {
    }
    OverlayModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BidiModule, PortalModule, ScrollingModule],
                    exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
                    declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                    providers: [
                        Overlay,
                        CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                    ],
                },] }
    ];
    return OverlayModule;
}());
/**
 * @deprecated Use `OverlayModule` instead.
 * @breaking-change 8.0.0
 * @docs-private
 */
var OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];

/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
var FullscreenOverlayContainer = /** @class */ (function (_super) {
    __extends(FullscreenOverlayContainer, _super);
    function FullscreenOverlayContainer(_document, 
    /**
     * @deprecated `platform` parameter to become required.
     * @breaking-change 10.0.0
     */
    platform) {
        return _super.call(this, _document, platform) || this;
    }
    FullscreenOverlayContainer.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
        }
    };
    FullscreenOverlayContainer.prototype._createContainer = function () {
        var _this = this;
        _super.prototype._createContainer.call(this);
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(function () { return _this._adjustParentForFullscreenChange(); });
    };
    FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = function () {
        if (!this._containerElement) {
            return;
        }
        var fullscreenElement = this.getFullscreenElement();
        var parent = fullscreenElement || this._document.body;
        parent.appendChild(this._containerElement);
    };
    FullscreenOverlayContainer.prototype._addFullscreenChangeListener = function (fn) {
        var eventName = this._getEventName();
        if (eventName) {
            if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
            }
            this._document.addEventListener(eventName, fn);
            this._fullScreenListener = fn;
        }
    };
    FullscreenOverlayContainer.prototype._getEventName = function () {
        if (!this._fullScreenEventName) {
            var _document = this._document;
            if (_document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
            }
            else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
            }
            else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
            }
            else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
            }
        }
        return this._fullScreenEventName;
    };
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    FullscreenOverlayContainer.prototype.getFullscreenElement = function () {
        var _document = this._document;
        return _document.fullscreenElement ||
            _document.webkitFullscreenElement ||
            _document.mozFullScreenElement ||
            _document.msFullscreenElement ||
            null;
    };
    FullscreenOverlayContainer.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    FullscreenOverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform }
    ]; };
    FullscreenOverlayContainer.ɵprov = ɵɵdefineInjectable({ factory: function FullscreenOverlayContainer_Factory() { return new FullscreenOverlayContainer(ɵɵinject(DOCUMENT), ɵɵinject(Platform)); }, token: FullscreenOverlayContainer, providedIn: "root" });
    return FullscreenOverlayContainer;
}(OverlayContainer));

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

export { BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, OVERLAY_PROVIDERS, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, OVERLAY_CONTAINER_PROVIDER_FACTORY as ɵangular_material_src_cdk_overlay_overlay_a, OVERLAY_CONTAINER_PROVIDER as ɵangular_material_src_cdk_overlay_overlay_b, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY as ɵangular_material_src_cdk_overlay_overlay_c, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY as ɵangular_material_src_cdk_overlay_overlay_d, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER as ɵangular_material_src_cdk_overlay_overlay_e, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY as ɵangular_material_src_cdk_overlay_overlay_f, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER as ɵangular_material_src_cdk_overlay_overlay_g };
//# sourceMappingURL=overlay.js.map
