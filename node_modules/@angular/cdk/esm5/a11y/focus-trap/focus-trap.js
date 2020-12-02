/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Injectable, Input, NgZone, isDevMode, } from '@angular/core';
import { take } from 'rxjs/operators';
import { InteractivityChecker } from '../interactivity-checker/interactivity-checker';
import * as i0 from "@angular/core";
import * as i1 from "../interactivity-checker/interactivity-checker";
import * as i2 from "@angular/common";
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change for 11.0.0 Remove this class.
 */
var FocusTrap = /** @class */ (function () {
    function FocusTrap(_element, _checker, _ngZone, _document, deferAnchors) {
        var _this = this;
        if (deferAnchors === void 0) { deferAnchors = false; }
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false;
        // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
        this.startAnchorListener = function () { return _this.focusLastTabbableElement(); };
        this.endAnchorListener = function () { return _this.focusFirstTabbableElement(); };
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    Object.defineProperty(FocusTrap.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: function () { return this._enabled; },
        set: function (value) {
            this._enabled = value;
            if (this._startAnchor && this._endAnchor) {
                this._toggleAnchorTabIndex(value, this._startAnchor);
                this._toggleAnchorTabIndex(value, this._endAnchor);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Destroys the focus trap by cleaning up the anchors. */
    FocusTrap.prototype.destroy = function () {
        var startAnchor = this._startAnchor;
        var endAnchor = this._endAnchor;
        if (startAnchor) {
            startAnchor.removeEventListener('focus', this.startAnchorListener);
            if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
            }
        }
        if (endAnchor) {
            endAnchor.removeEventListener('focus', this.endAnchorListener);
            if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
            }
        }
        this._startAnchor = this._endAnchor = null;
    };
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    FocusTrap.prototype.attachAnchors = function () {
        var _this = this;
        // If we're not on the browser, there can be no focus to trap.
        if (this._hasAttached) {
            return true;
        }
        this._ngZone.runOutsideAngular(function () {
            if (!_this._startAnchor) {
                _this._startAnchor = _this._createAnchor();
                _this._startAnchor.addEventListener('focus', _this.startAnchorListener);
            }
            if (!_this._endAnchor) {
                _this._endAnchor = _this._createAnchor();
                _this._endAnchor.addEventListener('focus', _this.endAnchorListener);
            }
        });
        if (this._element.parentNode) {
            this._element.parentNode.insertBefore(this._startAnchor, this._element);
            this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
            this._hasAttached = true;
        }
        return this._hasAttached;
    };
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElementWhenReady = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusInitialElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusFirstTabbableElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusLastTabbableElement()); });
        });
    };
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */
    FocusTrap.prototype._getRegionBoundary = function (bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var markers = this._element.querySelectorAll("[cdk-focus-region-" + bound + "], " +
            ("[cdkFocusRegion" + bound + "], ") +
            ("[cdk-focus-" + bound + "]"));
        for (var i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute("cdk-focus-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated ") +
                    "attribute will be removed in 8.0.0.", markers[i]);
            }
            else if (markers[i].hasAttribute("cdk-focus-region-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated attribute ") +
                    "will be removed in 8.0.0.", markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    };
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElement = function () {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var redirectToElement = this._element.querySelector("[cdk-focus-initial], " +
            "[cdkFocusInitial]");
        if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " +
                    "use 'cdkFocusInitial' instead. The deprecated attribute " +
                    "will be removed in 8.0.0", redirectToElement);
            }
            // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.
            if (isDevMode() && !this._checker.isFocusable(redirectToElement)) {
                console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
            }
            redirectToElement.focus();
            return true;
        }
        return this.focusFirstTabbableElement();
    };
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElement = function () {
        var redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElement = function () {
        var redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Checks whether the focus trap has successfuly been attached.
     */
    FocusTrap.prototype.hasAttached = function () {
        return this._hasAttached;
    };
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getFirstTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        var children = root.children || root.childNodes;
        for (var i = 0; i < children.length; i++) {
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getLastTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        var children = root.children || root.childNodes;
        for (var i = children.length - 1; i >= 0; i--) {
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Creates an anchor element. */
    FocusTrap.prototype._createAnchor = function () {
        var anchor = this._document.createElement('div');
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        anchor.setAttribute('aria-hidden', 'true');
        return anchor;
    };
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @param isEnabled Whether the focus trap is enabled.
     * @param anchor Anchor on which to toggle the tabindex.
     */
    FocusTrap.prototype._toggleAnchorTabIndex = function (isEnabled, anchor) {
        // Remove the tabindex completely, rather than setting it to -1, because if the
        // element has a tabindex, the user might still hit it when navigating with the arrow keys.
        isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
    };
    /**
     * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
     * @param enabled: Whether the anchors should trap Tab.
     */
    FocusTrap.prototype.toggleAnchors = function (enabled) {
        if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(enabled, this._startAnchor);
            this._toggleAnchorTabIndex(enabled, this._endAnchor);
        }
    };
    /** Executes a function when the zone is stable. */
    FocusTrap.prototype._executeOnStable = function (fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.asObservable().pipe(take(1)).subscribe(fn);
        }
    };
    return FocusTrap;
}());
export { FocusTrap };
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change for 11.0.0 Remove this class.
 */
var FocusTrapFactory = /** @class */ (function () {
    function FocusTrapFactory(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    FocusTrapFactory.prototype.create = function (element, deferCaptureElements) {
        if (deferCaptureElements === void 0) { deferCaptureElements = false; }
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    };
    FocusTrapFactory.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    FocusTrapFactory.ctorParameters = function () { return [
        { type: InteractivityChecker },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    FocusTrapFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function FocusTrapFactory_Factory() { return new FocusTrapFactory(i0.ɵɵinject(i1.InteractivityChecker), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.DOCUMENT)); }, token: FocusTrapFactory, providedIn: "root" });
    return FocusTrapFactory;
}());
export { FocusTrapFactory };
/** Directive for trapping focus within a region. */
var CdkTrapFocus = /** @class */ (function () {
    function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /** Previously focused element to restore focus to upon destroy when using autoCapture. */
        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(CdkTrapFocus.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: function () { return this.focusTrap.enabled; },
        set: function (value) { this.focusTrap.enabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTrapFocus.prototype, "autoCapture", {
        /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         */
        get: function () { return this._autoCapture; },
        set: function (value) { this._autoCapture = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    CdkTrapFocus.prototype.ngOnDestroy = function () {
        this.focusTrap.destroy();
        // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    };
    CdkTrapFocus.prototype.ngAfterContentInit = function () {
        this.focusTrap.attachAnchors();
        if (this.autoCapture) {
            this._previouslyFocusedElement = this._document.activeElement;
            this.focusTrap.focusInitialElementWhenReady();
        }
    };
    CdkTrapFocus.prototype.ngDoCheck = function () {
        if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
        }
    };
    CdkTrapFocus.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkTrapFocus]',
                    exportAs: 'cdkTrapFocus',
                },] }
    ];
    /** @nocollapse */
    CdkTrapFocus.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FocusTrapFactory },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    CdkTrapFocus.propDecorators = {
        enabled: [{ type: Input, args: ['cdkTrapFocus',] }],
        autoCapture: [{ type: Input, args: ['cdkTrapFocusAutoCapture',] }]
    };
    return CdkTrapFocus;
}());
export { CdkTrapFocus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYTExeS9mb2N1cy10cmFwL2ZvY3VzLXRyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFHTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDOzs7O0FBR3BGOzs7Ozs7Ozs7R0FTRztBQUNIO0lBcUJFLG1CQUNXLFFBQXFCLEVBQ3RCLFFBQThCLEVBQzdCLE9BQWUsRUFDZixTQUFtQixFQUM1QixZQUFvQjtRQUx0QixpQkFVQztRQUxDLDZCQUFBLEVBQUEsb0JBQW9CO1FBSlgsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQXRCdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFN0Isa0dBQWtHO1FBQ3hGLHdCQUFtQixHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQztRQUM1RCxzQkFBaUIsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLHlCQUF5QixFQUFFLEVBQWhDLENBQWdDLENBQUM7UUFZM0QsYUFBUSxHQUFZLElBQUksQ0FBQztRQVNqQyxJQUFJLENBQUMsWUFB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Q3BCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQTRCLENBQUM7WUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBOVdDLFVBQVU7Z0JBd1lxQixnQkFBZ0I7Z0RBQzFDLE1BQU0sU0FBQyxRQUFROzs7MEJBaEJuQixLQUFLLFNBQUMsY0FBYzs4QkFRcEIsS0FBSyxTQUFDLHlCQUF5Qjs7SUEwQ2xDLG1CQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0E1RFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG4gIGlzRGV2TW9kZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SW50ZXJhY3Rpdml0eUNoZWNrZXJ9IGZyb20gJy4uL2ludGVyYWN0aXZpdHktY2hlY2tlci9pbnRlcmFjdGl2aXR5LWNoZWNrZXInO1xuXG5cbi8qKlxuICogQ2xhc3MgdGhhdCBhbGxvd3MgZm9yIHRyYXBwaW5nIGZvY3VzIHdpdGhpbiBhIERPTSBlbGVtZW50LlxuICpcbiAqIFRoaXMgY2xhc3MgY3VycmVudGx5IHVzZXMgYSByZWxhdGl2ZWx5IHNpbXBsZSBhcHByb2FjaCB0byBmb2N1cyB0cmFwcGluZy5cbiAqIEl0IGFzc3VtZXMgdGhhdCB0aGUgdGFiIG9yZGVyIGlzIHRoZSBzYW1lIGFzIERPTSBvcmRlciwgd2hpY2ggaXMgbm90IG5lY2Vzc2FyaWx5IHRydWUuXG4gKiBUaGluZ3MgbGlrZSBgdGFiSW5kZXggPiAwYCwgZmxleCBgb3JkZXJgLCBhbmQgc2hhZG93IHJvb3RzIGNhbiBjYXVzZSB0byB0d28gdG8gbWlzYWxpZ24uXG4gKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBDb25maWd1cmFibGVGb2N1c1RyYXBgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIGZvciAxMS4wLjAgUmVtb3ZlIHRoaXMgY2xhc3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBGb2N1c1RyYXAge1xuICBwcml2YXRlIF9zdGFydEFuY2hvcjogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIF9lbmRBbmNob3I6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBfaGFzQXR0YWNoZWQgPSBmYWxzZTtcblxuICAvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBhbmNob3JzLiBOZWVkIHRvIGJlIHJlZ3VsYXIgZnVuY3Rpb25zIHNvIHRoYXQgd2UgY2FuIHVuYmluZCB0aGVtIGxhdGVyLlxuICBwcm90ZWN0ZWQgc3RhcnRBbmNob3JMaXN0ZW5lciA9ICgpID0+IHRoaXMuZm9jdXNMYXN0VGFiYmFibGVFbGVtZW50KCk7XG4gIHByb3RlY3RlZCBlbmRBbmNob3JMaXN0ZW5lciA9ICgpID0+IHRoaXMuZm9jdXNGaXJzdFRhYmJhYmxlRWxlbWVudCgpO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBmb2N1cyB0cmFwIGlzIGFjdGl2ZS4gKi9cbiAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9lbmFibGVkOyB9XG4gIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX3N0YXJ0QW5jaG9yICYmIHRoaXMuX2VuZEFuY2hvcikge1xuICAgICAgdGhpcy5fdG9nZ2xlQW5jaG9yVGFiSW5kZXgodmFsdWUsIHRoaXMuX3N0YXJ0QW5jaG9yKTtcbiAgICAgIHRoaXMuX3RvZ2dsZUFuY2hvclRhYkluZGV4KHZhbHVlLCB0aGlzLl9lbmRBbmNob3IpO1xuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX2VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IF9lbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF9jaGVja2VyOiBJbnRlcmFjdGl2aXR5Q2hlY2tlcixcbiAgICByZWFkb25seSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcmVhZG9ubHkgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICBkZWZlckFuY2hvcnMgPSBmYWxzZSkge1xuXG4gICAgaWYgKCFkZWZlckFuY2hvcnMpIHtcbiAgICAgIHRoaXMuYXR0YWNoQW5jaG9ycygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEZXN0cm95cyB0aGUgZm9jdXMgdHJhcCBieSBjbGVhbmluZyB1cCB0aGUgYW5jaG9ycy4gKi9cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBzdGFydEFuY2hvciA9IHRoaXMuX3N0YXJ0QW5jaG9yO1xuICAgIGNvbnN0IGVuZEFuY2hvciA9IHRoaXMuX2VuZEFuY2hvcjtcblxuICAgIGlmIChzdGFydEFuY2hvcikge1xuICAgICAgc3RhcnRBbmNob3IucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLnN0YXJ0QW5jaG9yTGlzdGVuZXIpO1xuXG4gICAgICBpZiAoc3RhcnRBbmNob3IucGFyZW50Tm9kZSkge1xuICAgICAgICBzdGFydEFuY2hvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0YXJ0QW5jaG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW5kQW5jaG9yKSB7XG4gICAgICBlbmRBbmNob3IucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmVuZEFuY2hvckxpc3RlbmVyKTtcblxuICAgICAgaWYgKGVuZEFuY2hvci5wYXJlbnROb2RlKSB7XG4gICAgICAgIGVuZEFuY2hvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVuZEFuY2hvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRBbmNob3IgPSB0aGlzLl9lbmRBbmNob3IgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgdGhlIGFuY2hvcnMgaW50byB0aGUgRE9NLiBUaGlzIGlzIHVzdWFsbHkgZG9uZSBhdXRvbWF0aWNhbGx5XG4gICAqIGluIHRoZSBjb25zdHJ1Y3RvciwgYnV0IGNhbiBiZSBkZWZlcnJlZCBmb3IgY2FzZXMgbGlrZSBkaXJlY3RpdmVzIHdpdGggYCpuZ0lmYC5cbiAgICogQHJldHVybnMgV2hldGhlciB0aGUgZm9jdXMgdHJhcCBtYW5hZ2VkIHRvIGF0dGFjaCBzdWNjZXNzZnVseS4gVGhpcyBtYXkgbm90IGJlIHRoZSBjYXNlXG4gICAqIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpc24ndCBjdXJyZW50bHkgaW4gdGhlIERPTS5cbiAgICovXG4gIGF0dGFjaEFuY2hvcnMoKTogYm9vbGVhbiB7XG4gICAgLy8gSWYgd2UncmUgbm90IG9uIHRoZSBicm93c2VyLCB0aGVyZSBjYW4gYmUgbm8gZm9jdXMgdG8gdHJhcC5cbiAgICBpZiAodGhpcy5faGFzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3N0YXJ0QW5jaG9yKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0QW5jaG9yID0gdGhpcy5fY3JlYXRlQW5jaG9yKCk7XG4gICAgICAgIHRoaXMuX3N0YXJ0QW5jaG9yIS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuc3RhcnRBbmNob3JMaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fZW5kQW5jaG9yKSB7XG4gICAgICAgIHRoaXMuX2VuZEFuY2hvciA9IHRoaXMuX2NyZWF0ZUFuY2hvcigpO1xuICAgICAgICB0aGlzLl9lbmRBbmNob3IhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5lbmRBbmNob3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuX3N0YXJ0QW5jaG9yISwgdGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuX2VuZEFuY2hvciEsIHRoaXMuX2VsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgdGhpcy5faGFzQXR0YWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYXNBdHRhY2hlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYWl0cyBmb3IgdGhlIHpvbmUgdG8gc3RhYmlsaXplLCB0aGVuIGVpdGhlciBmb2N1c2VzIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgdGhlXG4gICAqIHVzZXIgc3BlY2lmaWVkLCBvciB0aGUgZmlyc3QgdGFiYmFibGUgZWxlbWVudC5cbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiwgZGVwZW5kaW5nXG4gICAqIG9uIHdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgKi9cbiAgZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9leGVjdXRlT25TdGFibGUoKCkgPT4gcmVzb2x2ZSh0aGlzLmZvY3VzSW5pdGlhbEVsZW1lbnQoKSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhaXRzIGZvciB0aGUgem9uZSB0byBzdGFiaWxpemUsIHRoZW4gZm9jdXNlc1xuICAgKiB0aGUgZmlyc3QgdGFiYmFibGUgZWxlbWVudCB3aXRoaW4gdGhlIGZvY3VzIHRyYXAgcmVnaW9uLlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuLCBkZXBlbmRpbmdcbiAgICogb24gd2hldGhlciBmb2N1cyB3YXMgbW92ZWQgc3VjY2Vzc2Z1bHkuXG4gICAqL1xuICBmb2N1c0ZpcnN0VGFiYmFibGVFbGVtZW50V2hlblJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuX2V4ZWN1dGVPblN0YWJsZSgoKSA9PiByZXNvbHZlKHRoaXMuZm9jdXNGaXJzdFRhYmJhYmxlRWxlbWVudCgpKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2FpdHMgZm9yIHRoZSB6b25lIHRvIHN0YWJpbGl6ZSwgdGhlbiBmb2N1c2VzXG4gICAqIHRoZSBsYXN0IHRhYmJhYmxlIGVsZW1lbnQgd2l0aGluIHRoZSBmb2N1cyB0cmFwIHJlZ2lvbi5cbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiwgZGVwZW5kaW5nXG4gICAqIG9uIHdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgKi9cbiAgZm9jdXNMYXN0VGFiYmFibGVFbGVtZW50V2hlblJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuX2V4ZWN1dGVPblN0YWJsZSgoKSA9PiByZXNvbHZlKHRoaXMuZm9jdXNMYXN0VGFiYmFibGVFbGVtZW50KCkpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNwZWNpZmllZCBib3VuZGFyeSBlbGVtZW50IG9mIHRoZSB0cmFwcGVkIHJlZ2lvbi5cbiAgICogQHBhcmFtIGJvdW5kIFRoZSBib3VuZGFyeSB0byBnZXQgKHN0YXJ0IG9yIGVuZCBvZiB0cmFwcGVkIHJlZ2lvbikuXG4gICAqIEByZXR1cm5zIFRoZSBib3VuZGFyeSBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0UmVnaW9uQm91bmRhcnkoYm91bmQ6ICdzdGFydCcgfCAnZW5kJyk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgLy8gQ29udGFpbnMgdGhlIGRlcHJlY2F0ZWQgdmVyc2lvbiBvZiBzZWxlY3RvciwgZm9yIHRlbXBvcmFyeSBiYWNrd2FyZHMgY29tcGFyYWJpbGl0eS5cbiAgICBsZXQgbWFya2VycyA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2Nkay1mb2N1cy1yZWdpb24tJHtib3VuZH1dLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgW2Nka0ZvY3VzUmVnaW9uJHtib3VuZH1dLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgW2Nkay1mb2N1cy0ke2JvdW5kfV1gKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgICAgaWYgKG1hcmtlcnNbaV0uaGFzQXR0cmlidXRlKGBjZGstZm9jdXMtJHtib3VuZH1gKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEZvdW5kIHVzZSBvZiBkZXByZWNhdGVkIGF0dHJpYnV0ZSAnY2RrLWZvY3VzLSR7Ym91bmR9JywgYCArXG4gICAgICAgICAgICAgICAgICAgICBgdXNlICdjZGtGb2N1c1JlZ2lvbiR7Ym91bmR9JyBpbnN0ZWFkLiBUaGUgZGVwcmVjYXRlZCBgICtcbiAgICAgICAgICAgICAgICAgICAgIGBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkIGluIDguMC4wLmAsIG1hcmtlcnNbaV0pO1xuICAgICAgfSBlbHNlIGlmIChtYXJrZXJzW2ldLmhhc0F0dHJpYnV0ZShgY2RrLWZvY3VzLXJlZ2lvbi0ke2JvdW5kfWApKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRm91bmQgdXNlIG9mIGRlcHJlY2F0ZWQgYXR0cmlidXRlICdjZGstZm9jdXMtcmVnaW9uLSR7Ym91bmR9JywgYCArXG4gICAgICAgICAgICAgICAgICAgICBgdXNlICdjZGtGb2N1c1JlZ2lvbiR7Ym91bmR9JyBpbnN0ZWFkLiBUaGUgZGVwcmVjYXRlZCBhdHRyaWJ1dGUgYCArXG4gICAgICAgICAgICAgICAgICAgICBgd2lsbCBiZSByZW1vdmVkIGluIDguMC4wLmAsIG1hcmtlcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChib3VuZCA9PSAnc3RhcnQnKSB7XG4gICAgICByZXR1cm4gbWFya2Vycy5sZW5ndGggPyBtYXJrZXJzWzBdIDogdGhpcy5fZ2V0Rmlyc3RUYWJiYWJsZUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBtYXJrZXJzLmxlbmd0aCA/XG4gICAgICAgIG1hcmtlcnNbbWFya2Vycy5sZW5ndGggLSAxXSA6IHRoaXMuX2dldExhc3RUYWJiYWJsZUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBmb2N1c2VkIHdoZW4gdGhlIGZvY3VzIHRyYXAgaXMgaW5pdGlhbGl6ZWQuXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgKi9cbiAgZm9jdXNJbml0aWFsRWxlbWVudCgpOiBib29sZWFuIHtcbiAgICAvLyBDb250YWlucyB0aGUgZGVwcmVjYXRlZCB2ZXJzaW9uIG9mIHNlbGVjdG9yLCBmb3IgdGVtcG9yYXJ5IGJhY2t3YXJkcyBjb21wYXJhYmlsaXR5LlxuICAgIGNvbnN0IHJlZGlyZWN0VG9FbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbY2RrLWZvY3VzLWluaXRpYWxdLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgW2Nka0ZvY3VzSW5pdGlhbF1gKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGlmIChyZWRpcmVjdFRvRWxlbWVudCkge1xuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgICAgaWYgKHJlZGlyZWN0VG9FbGVtZW50Lmhhc0F0dHJpYnV0ZShgY2RrLWZvY3VzLWluaXRpYWxgKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEZvdW5kIHVzZSBvZiBkZXByZWNhdGVkIGF0dHJpYnV0ZSAnY2RrLWZvY3VzLWluaXRpYWwnLCBgICtcbiAgICAgICAgICAgICAgICAgICAgYHVzZSAnY2RrRm9jdXNJbml0aWFsJyBpbnN0ZWFkLiBUaGUgZGVwcmVjYXRlZCBhdHRyaWJ1dGUgYCArXG4gICAgICAgICAgICAgICAgICAgIGB3aWxsIGJlIHJlbW92ZWQgaW4gOC4wLjBgLCByZWRpcmVjdFRvRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdhcm4gdGhlIGNvbnN1bWVyIGlmIHRoZSBlbGVtZW50IHRoZXkndmUgcG9pbnRlZCB0b1xuICAgICAgLy8gaXNuJ3QgZm9jdXNhYmxlLCB3aGVuIG5vdCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICBpZiAoaXNEZXZNb2RlKCkgJiYgIXRoaXMuX2NoZWNrZXIuaXNGb2N1c2FibGUocmVkaXJlY3RUb0VsZW1lbnQpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRWxlbWVudCBtYXRjaGluZyAnW2Nka0ZvY3VzSW5pdGlhbF0nIGlzIG5vdCBmb2N1c2FibGUuYCwgcmVkaXJlY3RUb0VsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICByZWRpcmVjdFRvRWxlbWVudC5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZm9jdXNGaXJzdFRhYmJhYmxlRWxlbWVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIGZpcnN0IHRhYmJhYmxlIGVsZW1lbnQgd2l0aGluIHRoZSBmb2N1cyB0cmFwIHJlZ2lvbi5cbiAgICogQHJldHVybnMgV2hldGhlciBmb2N1cyB3YXMgbW92ZWQgc3VjY2Vzc2Z1bHkuXG4gICAqL1xuICBmb2N1c0ZpcnN0VGFiYmFibGVFbGVtZW50KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZGlyZWN0VG9FbGVtZW50ID0gdGhpcy5fZ2V0UmVnaW9uQm91bmRhcnkoJ3N0YXJ0Jyk7XG5cbiAgICBpZiAocmVkaXJlY3RUb0VsZW1lbnQpIHtcbiAgICAgIHJlZGlyZWN0VG9FbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhcmVkaXJlY3RUb0VsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgbGFzdCB0YWJiYWJsZSBlbGVtZW50IHdpdGhpbiB0aGUgZm9jdXMgdHJhcCByZWdpb24uXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgKi9cbiAgZm9jdXNMYXN0VGFiYmFibGVFbGVtZW50KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZGlyZWN0VG9FbGVtZW50ID0gdGhpcy5fZ2V0UmVnaW9uQm91bmRhcnkoJ2VuZCcpO1xuXG4gICAgaWYgKHJlZGlyZWN0VG9FbGVtZW50KSB7XG4gICAgICByZWRpcmVjdFRvRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHJldHVybiAhIXJlZGlyZWN0VG9FbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSBmb2N1cyB0cmFwIGhhcyBzdWNjZXNzZnVseSBiZWVuIGF0dGFjaGVkLlxuICAgKi9cbiAgaGFzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0F0dGFjaGVkO1xuICB9XG5cbiAgLyoqIEdldCB0aGUgZmlyc3QgdGFiYmFibGUgZWxlbWVudCBmcm9tIGEgRE9NIHN1YnRyZWUgKGluY2x1c2l2ZSkuICovXG4gIHByaXZhdGUgX2dldEZpcnN0VGFiYmFibGVFbGVtZW50KHJvb3Q6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5fY2hlY2tlci5pc0ZvY3VzYWJsZShyb290KSAmJiB0aGlzLl9jaGVja2VyLmlzVGFiYmFibGUocm9vdCkpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIC8vIEl0ZXJhdGUgaW4gRE9NIG9yZGVyLiBOb3RlIHRoYXQgSUUgZG9lc24ndCBoYXZlIGBjaGlsZHJlbmAgZm9yIFNWRyBzbyB3ZSBmYWxsXG4gICAgLy8gYmFjayB0byBgY2hpbGROb2Rlc2Agd2hpY2ggaW5jbHVkZXMgdGV4dCBub2RlcywgY29tbWVudHMgZXRjLlxuICAgIGxldCBjaGlsZHJlbiA9IHJvb3QuY2hpbGRyZW4gfHwgcm9vdC5jaGlsZE5vZGVzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYmJhYmxlQ2hpbGQgPSBjaGlsZHJlbltpXS5ub2RlVHlwZSA9PT0gdGhpcy5fZG9jdW1lbnQuRUxFTUVOVF9OT0RFID9cbiAgICAgICAgdGhpcy5fZ2V0Rmlyc3RUYWJiYWJsZUVsZW1lbnQoY2hpbGRyZW5baV0gYXMgSFRNTEVsZW1lbnQpIDpcbiAgICAgICAgbnVsbDtcblxuICAgICAgaWYgKHRhYmJhYmxlQ2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHRhYmJhYmxlQ2hpbGQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogR2V0IHRoZSBsYXN0IHRhYmJhYmxlIGVsZW1lbnQgZnJvbSBhIERPTSBzdWJ0cmVlIChpbmNsdXNpdmUpLiAqL1xuICBwcml2YXRlIF9nZXRMYXN0VGFiYmFibGVFbGVtZW50KHJvb3Q6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5fY2hlY2tlci5pc0ZvY3VzYWJsZShyb290KSAmJiB0aGlzLl9jaGVja2VyLmlzVGFiYmFibGUocm9vdCkpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIC8vIEl0ZXJhdGUgaW4gcmV2ZXJzZSBET00gb3JkZXIuXG4gICAgbGV0IGNoaWxkcmVuID0gcm9vdC5jaGlsZHJlbiB8fCByb290LmNoaWxkTm9kZXM7XG5cbiAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCB0YWJiYWJsZUNoaWxkID0gY2hpbGRyZW5baV0ubm9kZVR5cGUgPT09IHRoaXMuX2RvY3VtZW50LkVMRU1FTlRfTk9ERSA/XG4gICAgICAgIHRoaXMuX2dldExhc3RUYWJiYWJsZUVsZW1lbnQoY2hpbGRyZW5baV0gYXMgSFRNTEVsZW1lbnQpIDpcbiAgICAgICAgbnVsbDtcblxuICAgICAgaWYgKHRhYmJhYmxlQ2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHRhYmJhYmxlQ2hpbGQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhbiBhbmNob3IgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlQW5jaG9yKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl90b2dnbGVBbmNob3JUYWJJbmRleCh0aGlzLl9lbmFibGVkLCBhbmNob3IpO1xuICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdjZGstdmlzdWFsbHktaGlkZGVuJyk7XG4gICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2Nkay1mb2N1cy10cmFwLWFuY2hvcicpO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICByZXR1cm4gYW5jaG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGB0YWJpbmRleGAgb2YgYW4gYW5jaG9yLCBiYXNlZCBvbiB0aGUgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgZm9jdXMgdHJhcC5cbiAgICogQHBhcmFtIGlzRW5hYmxlZCBXaGV0aGVyIHRoZSBmb2N1cyB0cmFwIGlzIGVuYWJsZWQuXG4gICAqIEBwYXJhbSBhbmNob3IgQW5jaG9yIG9uIHdoaWNoIHRvIHRvZ2dsZSB0aGUgdGFiaW5kZXguXG4gICAqL1xuICBwcml2YXRlIF90b2dnbGVBbmNob3JUYWJJbmRleChpc0VuYWJsZWQ6IGJvb2xlYW4sIGFuY2hvcjogSFRNTEVsZW1lbnQpIHtcbiAgICAvLyBSZW1vdmUgdGhlIHRhYmluZGV4IGNvbXBsZXRlbHksIHJhdGhlciB0aGFuIHNldHRpbmcgaXQgdG8gLTEsIGJlY2F1c2UgaWYgdGhlXG4gICAgLy8gZWxlbWVudCBoYXMgYSB0YWJpbmRleCwgdGhlIHVzZXIgbWlnaHQgc3RpbGwgaGl0IGl0IHdoZW4gbmF2aWdhdGluZyB3aXRoIHRoZSBhcnJvdyBrZXlzLlxuICAgIGlzRW5hYmxlZCA/IGFuY2hvci5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKSA6IGFuY2hvci5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGVgdGFiaW5kZXhgIG9mIGJvdGggYW5jaG9ycyB0byBlaXRoZXIgdHJhcCBUYWIgZm9jdXMgb3IgYWxsb3cgaXQgdG8gZXNjYXBlLlxuICAgKiBAcGFyYW0gZW5hYmxlZDogV2hldGhlciB0aGUgYW5jaG9ycyBzaG91bGQgdHJhcCBUYWIuXG4gICAqL1xuICBwcm90ZWN0ZWQgdG9nZ2xlQW5jaG9ycyhlbmFibGVkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX3N0YXJ0QW5jaG9yICYmIHRoaXMuX2VuZEFuY2hvcikge1xuICAgICAgdGhpcy5fdG9nZ2xlQW5jaG9yVGFiSW5kZXgoZW5hYmxlZCwgdGhpcy5fc3RhcnRBbmNob3IpO1xuICAgICAgdGhpcy5fdG9nZ2xlQW5jaG9yVGFiSW5kZXgoZW5hYmxlZCwgdGhpcy5fZW5kQW5jaG9yKTtcbiAgICB9XG4gIH1cblxuICAvKiogRXhlY3V0ZXMgYSBmdW5jdGlvbiB3aGVuIHRoZSB6b25lIGlzIHN0YWJsZS4gKi9cbiAgcHJpdmF0ZSBfZXhlY3V0ZU9uU3RhYmxlKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbmdab25lLmlzU3RhYmxlKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoZm4pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEZhY3RvcnkgdGhhdCBhbGxvd3MgZWFzeSBpbnN0YW50aWF0aW9uIG9mIGZvY3VzIHRyYXBzLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBDb25maWd1cmFibGVGb2N1c1RyYXBGYWN0b3J5YCBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSBmb3IgMTEuMC4wIFJlbW92ZSB0aGlzIGNsYXNzLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBGb2N1c1RyYXBGYWN0b3J5IHtcbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY2hlY2tlcjogSW50ZXJhY3Rpdml0eUNoZWNrZXIsXG4gICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55KSB7XG5cbiAgICB0aGlzLl9kb2N1bWVudCA9IF9kb2N1bWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZm9jdXMtdHJhcHBlZCByZWdpb24gYXJvdW5kIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBhcm91bmQgd2hpY2ggZm9jdXMgd2lsbCBiZSB0cmFwcGVkLlxuICAgKiBAcGFyYW0gZGVmZXJDYXB0dXJlRWxlbWVudHMgRGVmZXJzIHRoZSBjcmVhdGlvbiBvZiBmb2N1cy1jYXB0dXJpbmcgZWxlbWVudHMgdG8gYmUgZG9uZVxuICAgKiAgICAgbWFudWFsbHkgYnkgdGhlIHVzZXIuXG4gICAqIEByZXR1cm5zIFRoZSBjcmVhdGVkIGZvY3VzIHRyYXAgaW5zdGFuY2UuXG4gICAqL1xuICBjcmVhdGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRlZmVyQ2FwdHVyZUVsZW1lbnRzOiBib29sZWFuID0gZmFsc2UpOiBGb2N1c1RyYXAge1xuICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKFxuICAgICAgICBlbGVtZW50LCB0aGlzLl9jaGVja2VyLCB0aGlzLl9uZ1pvbmUsIHRoaXMuX2RvY3VtZW50LCBkZWZlckNhcHR1cmVFbGVtZW50cyk7XG4gIH1cbn1cblxuLyoqIERpcmVjdGl2ZSBmb3IgdHJhcHBpbmcgZm9jdXMgd2l0aGluIGEgcmVnaW9uLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1RyYXBGb2N1c10nLFxuICBleHBvcnRBczogJ2Nka1RyYXBGb2N1cycsXG59KVxuZXhwb3J0IGNsYXNzIENka1RyYXBGb2N1cyBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgRG9DaGVjayB7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKiogVW5kZXJseWluZyBGb2N1c1RyYXAgaW5zdGFuY2UuICovXG4gIGZvY3VzVHJhcDogRm9jdXNUcmFwO1xuXG4gIC8qKiBQcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCB0byByZXN0b3JlIGZvY3VzIHRvIHVwb24gZGVzdHJveSB3aGVuIHVzaW5nIGF1dG9DYXB0dXJlLiAqL1xuICBwcml2YXRlIF9wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGZvY3VzIHRyYXAgaXMgYWN0aXZlLiAqL1xuICBASW5wdXQoJ2Nka1RyYXBGb2N1cycpXG4gIGdldCBlbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5mb2N1c1RyYXAuZW5hYmxlZDsgfVxuICBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLmZvY3VzVHJhcC5lbmFibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkaXJlY3RpdmUgc2hvdWxkIGF1dG9tYXRpYWxseSBtb3ZlIGZvY3VzIGludG8gdGhlIHRyYXBwZWQgcmVnaW9uIHVwb25cbiAgICogaW5pdGlhbGl6YXRpb24gYW5kIHJldHVybiBmb2N1cyB0byB0aGUgcHJldmlvdXMgYWN0aXZlRWxlbWVudCB1cG9uIGRlc3RydWN0aW9uLlxuICAgKi9cbiAgQElucHV0KCdjZGtUcmFwRm9jdXNBdXRvQ2FwdHVyZScpXG4gIGdldCBhdXRvQ2FwdHVyZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2F1dG9DYXB0dXJlOyB9XG4gIHNldCBhdXRvQ2FwdHVyZSh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9hdXRvQ2FwdHVyZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgcHJpdmF0ZSBfYXV0b0NhcHR1cmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgIHByaXZhdGUgX2ZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXG4gICAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSkge1xuXG4gICAgdGhpcy5fZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XG4gICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLl9mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xuXG4gICAgLy8gSWYgd2Ugc3RvcmVkIGEgcHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQgd2hlbiB1c2luZyBhdXRvQ2FwdHVyZSwgcmV0dXJuIGZvY3VzIHRvIHRoYXRcbiAgICAvLyBlbGVtZW50IG5vdyB0aGF0IHRoZSB0cmFwcGVkIHJlZ2lvbiBpcyBiZWluZyBkZXN0cm95ZWQuXG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCkge1xuICAgICAgdGhpcy5fcHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl9wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmZvY3VzVHJhcC5hdHRhY2hBbmNob3JzKCk7XG5cbiAgICBpZiAodGhpcy5hdXRvQ2FwdHVyZSkge1xuICAgICAgdGhpcy5fcHJldmlvdXNseUZvY3VzZWRFbGVtZW50ID0gdGhpcy5fZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLmZvY3VzVHJhcC5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcC5hdHRhY2hBbmNob3JzKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VuYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9DYXB0dXJlOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=