/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
// The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
var InteractivityChecker = /** @class */ (function () {
    function InteractivityChecker(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    InteractivityChecker.prototype.isDisabled = function (element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    };
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    InteractivityChecker.prototype.isVisible = function (element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    };
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    InteractivityChecker.prototype.isTabbable = function (element) {
        // Nothing is tabbable on the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        var frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
            var frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        var nodeName = element.nodeName.toLowerCase();
        var tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    };
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @returns Whether the element is focusable.
     */
    InteractivityChecker.prototype.isFocusable = function (element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    };
    InteractivityChecker.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    InteractivityChecker.ctorParameters = function () { return [
        { type: Platform }
    ]; };
    InteractivityChecker.ɵprov = i0.ɵɵdefineInjectable({ factory: function InteractivityChecker_Factory() { return new InteractivityChecker(i0.ɵɵinject(i1.Platform)); }, token: InteractivityChecker, providedIn: "root" });
    return InteractivityChecker;
}());
export { InteractivityChecker };
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */
function getFrameElement(window) {
    try {
        return window.frameElement;
    }
    catch (_a) {
        return null;
    }
}
/** Checks whether the specified element has any geometry / rectangles. */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight ||
        (typeof element.getClientRects === 'function' && element.getClientRects().length));
}
/** Gets whether an element's  */
function isNativeFormElement(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    var tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */
function isPotentiallyTabbableIOS(element) {
    var nodeName = element.nodeName.toLowerCase();
    var inputType = nodeName === 'input' && element.type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */
function getWindow(node) {
    // ownerDocument is null if `node` itself *is* a document.
    return node.ownerDocument && node.ownerDocument.defaultView || window;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3Rpdml0eS1jaGVja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9hMTF5L2ludGVyYWN0aXZpdHktY2hlY2tlci9pbnRlcmFjdGl2aXR5LWNoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUd6QyxpRkFBaUY7QUFDakYsNkZBQTZGO0FBQzdGLGFBQWE7QUFFYjs7O0dBR0c7QUFDSDtJQUdFLDhCQUFvQixTQUFtQjtRQUFuQixjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQUcsQ0FBQztJQUUzQzs7Ozs7T0FLRztJQUNILHlDQUFVLEdBQVYsVUFBVyxPQUFvQjtRQUM3Qiw0RkFBNEY7UUFDNUYsc0ZBQXNGO1FBQ3RGLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILHdDQUFTLEdBQVQsVUFBVSxPQUFvQjtRQUM1QixPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDO0lBQ3BGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCx5Q0FBVSxHQUFWLFVBQVcsT0FBb0I7UUFDN0IsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXpELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQU0sU0FBUyxHQUFHLFlBQVksSUFB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O0lBQzlDLElBQUksU0FBUyxHQUFHLFFBQVEsS0FBSyxPQUFPLElBQUssT0FBNEIsQ0FBQyxJQUFJLENBQUM7SUFFM0UsT0FBTyxTQUFTLEtBQUssTUFBTTtXQUNwQixTQUFTLEtBQUssVUFBVTtXQUN4QixRQUFRLEtBQUssUUFBUTtXQUNyQixRQUFRLEtBQUssVUFBVSxDQUFDO0FBQ2pDLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLHNCQUFzQixDQUFDLE9BQW9CO0lBQ2xELG1FQUFtRTtJQUNuRSxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMxQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7UUFDL0IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFDdkMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELHNGQUFzRjtBQUN0RixTQUFTLFNBQVMsQ0FBQyxJQUFpQjtJQUNsQywwREFBMEQ7SUFDMUQsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQztBQUN4RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8vIFRoZSBJbnRlcmFjdGl2aXR5Q2hlY2tlciBsZWFucyBoZWF2aWx5IG9uIHRoZSBhbGx5LmpzIGFjY2Vzc2liaWxpdHkgdXRpbGl0aWVzLlxuLy8gTWV0aG9kcyBsaWtlIGBpc1RhYmJhYmxlYCBhcmUgb25seSBjb3ZlcmluZyBzcGVjaWZpYyBlZGdlLWNhc2VzIGZvciB0aGUgYnJvd3NlcnMgd2hpY2ggYXJlXG4vLyBzdXBwb3J0ZWQuXG5cbi8qKlxuICogVXRpbGl0eSBmb3IgY2hlY2tpbmcgdGhlIGludGVyYWN0aXZpdHkgb2YgYW4gZWxlbWVudCwgc3VjaCBhcyB3aGV0aGVyIGlzIGlzIGZvY3VzYWJsZSBvclxuICogdGFiYmFibGUuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEludGVyYWN0aXZpdHlDaGVja2VyIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgLyoqXG4gICAqIEdldHMgd2hldGhlciBhbiBlbGVtZW50IGlzIGRpc2FibGVkLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBpc0Rpc2FibGVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgLy8gVGhpcyBkb2VzIG5vdCBjYXB0dXJlIHNvbWUgY2FzZXMsIHN1Y2ggYXMgYSBub24tZm9ybSBjb250cm9sIHdpdGggYSBkaXNhYmxlZCBhdHRyaWJ1dGUgb3JcbiAgICAvLyBhIGZvcm0gY29udHJvbCBpbnNpZGUgb2YgYSBkaXNhYmxlZCBmb3JtLCBidXQgc2hvdWxkIGNhcHR1cmUgdGhlIG1vc3QgY29tbW9uIGNhc2VzLlxuICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyB2aXNpYmxlIGZvciB0aGUgcHVycG9zZXMgb2YgaW50ZXJhY3Rpdml0eS5cbiAgICpcbiAgICogVGhpcyB3aWxsIGNhcHR1cmUgc3RhdGVzIGxpa2UgYGRpc3BsYXk6IG5vbmVgIGFuZCBgdmlzaWJpbGl0eTogaGlkZGVuYCwgYnV0IG5vdCB0aGluZ3MgbGlrZVxuICAgKiBiZWluZyBjbGlwcGVkIGJ5IGFuIGBvdmVyZmxvdzogaGlkZGVuYCBwYXJlbnQgb3IgYmVpbmcgb3V0c2lkZSB0aGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZS5cbiAgICovXG4gIGlzVmlzaWJsZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBoYXNHZW9tZXRyeShlbGVtZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnZpc2liaWxpdHkgPT09ICd2aXNpYmxlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBjYW4gYmUgcmVhY2hlZCB2aWEgVGFiIGtleS5cbiAgICogQXNzdW1lcyB0aGF0IHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gY2hlY2tlZCB3aXRoIGlzRm9jdXNhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgdGFiYmFibGUuXG4gICAqL1xuICBpc1RhYmJhYmxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgLy8gTm90aGluZyBpcyB0YWJiYWJsZSBvbiB0aGUgc2VydmVyIPCfmI5cbiAgICBpZiAoIXRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZyYW1lRWxlbWVudCA9IGdldEZyYW1lRWxlbWVudChnZXRXaW5kb3coZWxlbWVudCkpO1xuXG4gICAgaWYgKGZyYW1lRWxlbWVudCkge1xuICAgICAgY29uc3QgZnJhbWVUeXBlID0gZnJhbWVFbGVtZW50ICYmIGZyYW1lRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAvLyBGcmFtZSBlbGVtZW50cyBpbmhlcml0IHRoZWlyIHRhYmluZGV4IG9udG8gYWxsIGNoaWxkIGVsZW1lbnRzLlxuICAgICAgaWYgKGdldFRhYkluZGV4VmFsdWUoZnJhbWVFbGVtZW50KSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBXZWJraXQgYW5kIEJsaW5rIGNvbnNpZGVyIGFueXRoaW5nIGluc2lkZSBvZiBhbiA8b2JqZWN0PiBlbGVtZW50IGFzIG5vbi10YWJiYWJsZS5cbiAgICAgIGlmICgodGhpcy5fcGxhdGZvcm0uQkxJTksgfHwgdGhpcy5fcGxhdGZvcm0uV0VCS0lUKSAmJiBmcmFtZVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gV2Via2l0IGFuZCBCbGluayBkaXNhYmxlIHRhYmJpbmcgdG8gYW4gZWxlbWVudCBpbnNpZGUgb2YgYW4gaW52aXNpYmxlIGZyYW1lLlxuICAgICAgaWYgKCh0aGlzLl9wbGF0Zm9ybS5CTElOSyB8fCB0aGlzLl9wbGF0Zm9ybS5XRUJLSVQpICYmICF0aGlzLmlzVmlzaWJsZShmcmFtZUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGxldCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgdGFiSW5kZXhWYWx1ZSA9IGdldFRhYkluZGV4VmFsdWUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpKSB7XG4gICAgICByZXR1cm4gdGFiSW5kZXhWYWx1ZSAhPT0gLTE7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVOYW1lID09PSAnaWZyYW1lJykge1xuICAgICAgLy8gVGhlIGZyYW1lcyBtYXkgYmUgdGFiYmFibGUgZGVwZW5kaW5nIG9uIGNvbnRlbnQsIGJ1dCBpdCdzIG5vdCBwb3NzaWJseSB0byByZWxpYWJseVxuICAgICAgLy8gaW52ZXN0aWdhdGUgdGhlIGNvbnRlbnQgb2YgdGhlIGZyYW1lcy5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZU5hbWUgPT09ICdhdWRpbycpIHtcbiAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbnRyb2xzJykpIHtcbiAgICAgICAgLy8gQnkgZGVmYXVsdCBhbiA8YXVkaW8+IGVsZW1lbnQgd2l0aG91dCB0aGUgY29udHJvbHMgZW5hYmxlZCBpcyBub3QgdGFiYmFibGUuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGxhdGZvcm0uQkxJTkspIHtcbiAgICAgICAgLy8gSW4gQmxpbmsgPGF1ZGlvIGNvbnRyb2xzPiBlbGVtZW50cyBhcmUgYWx3YXlzIHRhYmJhYmxlLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZU5hbWUgPT09ICd2aWRlbycpIHtcbiAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbnRyb2xzJykgJiYgdGhpcy5fcGxhdGZvcm0uVFJJREVOVCkge1xuICAgICAgICAvLyBJbiBUcmlkZW50IGEgPHZpZGVvPiBlbGVtZW50IHdpdGhvdXQgdGhlIGNvbnRyb2xzIGVuYWJsZWQgaXMgbm90IHRhYmJhYmxlLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BsYXRmb3JtLkJMSU5LIHx8IHRoaXMuX3BsYXRmb3JtLkZJUkVGT1gpIHtcbiAgICAgICAgLy8gSW4gQ2hyb21lIGFuZCBGaXJlZm94IDx2aWRlbyBjb250cm9scz4gZWxlbWVudHMgYXJlIGFsd2F5cyB0YWJiYWJsZS5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGVOYW1lID09PSAnb2JqZWN0JyAmJiAodGhpcy5fcGxhdGZvcm0uQkxJTksgfHwgdGhpcy5fcGxhdGZvcm0uV0VCS0lUKSkge1xuICAgICAgLy8gSW4gYWxsIEJsaW5rIGFuZCBXZWJLaXQgYmFzZWQgYnJvd3NlcnMgPG9iamVjdD4gZWxlbWVudHMgYXJlIG5ldmVyIHRhYmJhYmxlLlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEluIGlPUyB0aGUgYnJvd3NlciBvbmx5IGNvbnNpZGVycyBzb21lIHNwZWNpZmljIGVsZW1lbnRzIGFzIHRhYmJhYmxlLlxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5XRUJLSVQgJiYgdGhpcy5fcGxhdGZvcm0uSU9TICYmICFpc1BvdGVudGlhbGx5VGFiYmFibGVJT1MoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudC50YWJJbmRleCA+PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgd2hldGhlciBhbiBlbGVtZW50IGNhbiBiZSBmb2N1c2VkIGJ5IHRoZSB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZm9jdXNhYmxlLlxuICAgKi9cbiAgaXNGb2N1c2FibGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAvLyBQZXJmb3JtIGNoZWNrcyBpbiBvcmRlciBvZiBsZWZ0IHRvIG1vc3QgZXhwZW5zaXZlLlxuICAgIC8vIEFnYWluLCBuYWl2ZSBhcHByb2FjaCB0aGF0IGRvZXMgbm90IGNhcHR1cmUgbWFueSBlZGdlIGNhc2VzIGFuZCBicm93c2VyIHF1aXJrcy5cbiAgICByZXR1cm4gaXNQb3RlbnRpYWxseUZvY3VzYWJsZShlbGVtZW50KSAmJiAhdGhpcy5pc0Rpc2FibGVkKGVsZW1lbnQpICYmIHRoaXMuaXNWaXNpYmxlKGVsZW1lbnQpO1xuICB9XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmcmFtZSBlbGVtZW50IGZyb20gYSB3aW5kb3cgb2JqZWN0LiBTaW5jZSBicm93c2VycyBsaWtlIE1TIEVkZ2UgdGhyb3cgZXJyb3JzIGlmXG4gKiB0aGUgZnJhbWVFbGVtZW50IHByb3BlcnR5IGlzIGJlaW5nIGFjY2Vzc2VkIGZyb20gYSBkaWZmZXJlbnQgaG9zdCBhZGRyZXNzLCB0aGlzIHByb3BlcnR5XG4gKiBzaG91bGQgYmUgYWNjZXNzZWQgY2FyZWZ1bGx5LlxuICovXG5mdW5jdGlvbiBnZXRGcmFtZUVsZW1lbnQod2luZG93OiBXaW5kb3cpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmZyYW1lRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqIENoZWNrcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBoYXMgYW55IGdlb21ldHJ5IC8gcmVjdGFuZ2xlcy4gKi9cbmZ1bmN0aW9uIGhhc0dlb21ldHJ5KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIC8vIFVzZSBsb2dpYyBmcm9tIGpRdWVyeSB0byBjaGVjayBmb3IgYW4gaW52aXNpYmxlIGVsZW1lbnQuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iL21hc3Rlci9zcmMvY3NzL2hpZGRlblZpc2libGVTZWxlY3RvcnMuanMjTDEyXG4gIHJldHVybiAhIShlbGVtZW50Lm9mZnNldFdpZHRoIHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8XG4gICAgICAodHlwZW9mIGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMgPT09ICdmdW5jdGlvbicgJiYgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpO1xufVxuXG4vKiogR2V0cyB3aGV0aGVyIGFuIGVsZW1lbnQncyAgKi9cbmZ1bmN0aW9uIGlzTmF0aXZlRm9ybUVsZW1lbnQoZWxlbWVudDogTm9kZSkge1xuICBsZXQgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBub2RlTmFtZSA9PT0gJ2lucHV0JyB8fFxuICAgICAgbm9kZU5hbWUgPT09ICdzZWxlY3QnIHx8XG4gICAgICBub2RlTmFtZSA9PT0gJ2J1dHRvbicgfHxcbiAgICAgIG5vZGVOYW1lID09PSAndGV4dGFyZWEnO1xufVxuXG4vKiogR2V0cyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gYDxpbnB1dCB0eXBlPVwiaGlkZGVuXCI+YC4gKi9cbmZ1bmN0aW9uIGlzSGlkZGVuSW5wdXQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzSW5wdXRFbGVtZW50KGVsZW1lbnQpICYmIGVsZW1lbnQudHlwZSA9PSAnaGlkZGVuJztcbn1cblxuLyoqIEdldHMgd2hldGhlciBhbiBlbGVtZW50IGlzIGFuIGFuY2hvciB0aGF0IGhhcyBhbiBocmVmIGF0dHJpYnV0ZS4gKi9cbmZ1bmN0aW9uIGlzQW5jaG9yV2l0aEhyZWYoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzQW5jaG9yRWxlbWVudChlbGVtZW50KSAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaHJlZicpO1xufVxuXG4vKiogR2V0cyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gaW5wdXQgZWxlbWVudC4gKi9cbmZ1bmN0aW9uIGlzSW5wdXRFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogZWxlbWVudCBpcyBIVE1MSW5wdXRFbGVtZW50IHtcbiAgcmV0dXJuIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnaW5wdXQnO1xufVxuXG4vKiogR2V0cyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gYW5jaG9yIGVsZW1lbnQuICovXG5mdW5jdGlvbiBpc0FuY2hvckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxBbmNob3JFbGVtZW50IHtcbiAgcmV0dXJuIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnYSc7XG59XG5cbi8qKiBHZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBoYXMgYSB2YWxpZCB0YWJpbmRleC4gKi9cbmZ1bmN0aW9uIGhhc1ZhbGlkVGFiSW5kZXgoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSB8fCBlbGVtZW50LnRhYkluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgdGFiSW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcblxuICAvLyBJRTExIHBhcnNlcyB0YWJpbmRleD1cIlwiIGFzIHRoZSB2YWx1ZSBcIi0zMjc2OFwiXG4gIGlmICh0YWJJbmRleCA9PSAnLTMyNzY4Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhISh0YWJJbmRleCAmJiAhaXNOYU4ocGFyc2VJbnQodGFiSW5kZXgsIDEwKSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBhcnNlZCB0YWJpbmRleCBmcm9tIHRoZSBlbGVtZW50IGF0dHJpYnV0ZXMgaW5zdGVhZCBvZiByZXR1cm5pbmcgdGhlXG4gKiBldmFsdWF0ZWQgdGFiaW5kZXggZnJvbSB0aGUgYnJvd3NlcnMgZGVmYXVsdHMuXG4gKi9cbmZ1bmN0aW9uIGdldFRhYkluZGV4VmFsdWUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCFoYXNWYWxpZFRhYkluZGV4KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBTZWUgYnJvd3NlciBpc3N1ZSBpbiBHZWNrbyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMTI4MDU0XG4gIGNvbnN0IHRhYkluZGV4ID0gcGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgfHwgJycsIDEwKTtcblxuICByZXR1cm4gaXNOYU4odGFiSW5kZXgpID8gLTEgOiB0YWJJbmRleDtcbn1cblxuLyoqIENoZWNrcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBpcyBwb3RlbnRpYWxseSB0YWJiYWJsZSBvbiBpT1MgKi9cbmZ1bmN0aW9uIGlzUG90ZW50aWFsbHlUYWJiYWJsZUlPUyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICBsZXQgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGxldCBpbnB1dFR5cGUgPSBub2RlTmFtZSA9PT0gJ2lucHV0JyAmJiAoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlO1xuXG4gIHJldHVybiBpbnB1dFR5cGUgPT09ICd0ZXh0J1xuICAgICAgfHwgaW5wdXRUeXBlID09PSAncGFzc3dvcmQnXG4gICAgICB8fCBub2RlTmFtZSA9PT0gJ3NlbGVjdCdcbiAgICAgIHx8IG5vZGVOYW1lID09PSAndGV4dGFyZWEnO1xufVxuXG4vKipcbiAqIEdldHMgd2hldGhlciBhbiBlbGVtZW50IGlzIHBvdGVudGlhbGx5IGZvY3VzYWJsZSB3aXRob3V0IHRha2luZyBjdXJyZW50IHZpc2libGUvZGlzYWJsZWQgc3RhdGVcbiAqIGludG8gYWNjb3VudC5cbiAqL1xuZnVuY3Rpb24gaXNQb3RlbnRpYWxseUZvY3VzYWJsZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAvLyBJbnB1dHMgYXJlIHBvdGVudGlhbGx5IGZvY3VzYWJsZSAqdW5sZXNzKiB0aGV5J3JlIHR5cGU9XCJoaWRkZW5cIi5cbiAgaWYgKGlzSGlkZGVuSW5wdXQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOYXRpdmVGb3JtRWxlbWVudChlbGVtZW50KSB8fFxuICAgICAgaXNBbmNob3JXaXRoSHJlZihlbGVtZW50KSB8fFxuICAgICAgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpIHx8XG4gICAgICBoYXNWYWxpZFRhYkluZGV4KGVsZW1lbnQpO1xufVxuXG4vKiogR2V0cyB0aGUgcGFyZW50IHdpbmRvdyBvZiBhIERPTSBub2RlIHdpdGggcmVnYXJkcyBvZiBiZWluZyBpbnNpZGUgb2YgYW4gaWZyYW1lLiAqL1xuZnVuY3Rpb24gZ2V0V2luZG93KG5vZGU6IEhUTUxFbGVtZW50KTogV2luZG93IHtcbiAgLy8gb3duZXJEb2N1bWVudCBpcyBudWxsIGlmIGBub2RlYCBpdHNlbGYgKmlzKiBhIGRvY3VtZW50LlxuICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50ICYmIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG59XG4iXX0=