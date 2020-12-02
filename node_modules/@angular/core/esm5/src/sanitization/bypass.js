/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
var SafeValueImpl = /** @class */ (function () {
    function SafeValueImpl(changingThisBreaksApplicationSecurity) {
        this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
    }
    SafeValueImpl.prototype.toString = function () {
        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)";
    };
    return SafeValueImpl;
}());
var SafeHtmlImpl = /** @class */ (function (_super) {
    __extends(SafeHtmlImpl, _super);
    function SafeHtmlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeHtmlImpl.prototype.getTypeName = function () {
        return "HTML" /* Html */;
    };
    return SafeHtmlImpl;
}(SafeValueImpl));
var SafeStyleImpl = /** @class */ (function (_super) {
    __extends(SafeStyleImpl, _super);
    function SafeStyleImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeStyleImpl.prototype.getTypeName = function () {
        return "Style" /* Style */;
    };
    return SafeStyleImpl;
}(SafeValueImpl));
var SafeScriptImpl = /** @class */ (function (_super) {
    __extends(SafeScriptImpl, _super);
    function SafeScriptImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeScriptImpl.prototype.getTypeName = function () {
        return "Script" /* Script */;
    };
    return SafeScriptImpl;
}(SafeValueImpl));
var SafeUrlImpl = /** @class */ (function (_super) {
    __extends(SafeUrlImpl, _super);
    function SafeUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeUrlImpl.prototype.getTypeName = function () {
        return "URL" /* Url */;
    };
    return SafeUrlImpl;
}(SafeValueImpl));
var SafeResourceUrlImpl = /** @class */ (function (_super) {
    __extends(SafeResourceUrlImpl, _super);
    function SafeResourceUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeResourceUrlImpl.prototype.getTypeName = function () {
        return "ResourceURL" /* ResourceUrl */;
    };
    return SafeResourceUrlImpl;
}(SafeValueImpl));
export function unwrapSafeValue(value) {
    return value instanceof SafeValueImpl ? value.changingThisBreaksApplicationSecurity :
        value;
}
export function allowSanitizationBypassAndThrow(value, type) {
    var actualType = getSanitizationBypassType(value);
    if (actualType != null && actualType !== type) {
        // Allow ResourceURLs in URL contexts, they are strictly more trusted.
        if (actualType === "ResourceURL" /* ResourceUrl */ && type === "URL" /* Url */)
            return true;
        throw new Error("Required a safe " + type + ", got a " + actualType + " (see http://g.co/ng/security#xss)");
    }
    return actualType === type;
}
export function getSanitizationBypassType(value) {
    return value instanceof SafeValueImpl && value.getTypeName() || null;
}
/**
 * Mark `html` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {@link htmlSanitizer} to be trusted implicitly.
 *
 * @param trustedHtml `html` string which needs to be implicitly trusted.
 * @returns a `html` which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustHtml(trustedHtml) {
    return new SafeHtmlImpl(trustedHtml);
}
/**
 * Mark `style` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {@link styleSanitizer} to be trusted implicitly.
 *
 * @param trustedStyle `style` string which needs to be implicitly trusted.
 * @returns a `style` hich has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustStyle(trustedStyle) {
    return new SafeStyleImpl(trustedStyle);
}
/**
 * Mark `script` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {@link scriptSanitizer} to be trusted implicitly.
 *
 * @param trustedScript `script` string which needs to be implicitly trusted.
 * @returns a `script` which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustScript(trustedScript) {
    return new SafeScriptImpl(trustedScript);
}
/**
 * Mark `url` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {@link urlSanitizer} to be trusted implicitly.
 *
 * @param trustedUrl `url` string which needs to be implicitly trusted.
 * @returns a `url`  which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustUrl(trustedUrl) {
    return new SafeUrlImpl(trustedUrl);
}
/**
 * Mark `url` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {@link resourceUrlSanitizer} to be trusted implicitly.
 *
 * @param trustedResourceUrl `url` string which needs to be implicitly trusted.
 * @returns a `url` which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustResourceUrl(trustedResourceUrl) {
    return new SafeResourceUrlImpl(trustedResourceUrl);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnlwYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL2J5cGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBc0RIO0lBQ0UsdUJBQW1CLHFDQUE2QztRQUE3QywwQ0FBcUMsR0FBckMscUNBQXFDLENBQVE7SUFBRyxDQUFDO0lBSXBFLGdDQUFRLEdBQVI7UUFDRSxPQUFPLDRDQUEwQyxJQUFJLENBQUMscUNBQXVDO1lBQ3pGLG9DQUFvQyxDQUFDO0lBQzNDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBRUQ7SUFBMkIsZ0NBQWE7SUFBeEM7O0lBSUEsQ0FBQztJQUhDLGtDQUFXLEdBQVg7UUFDRSx5QkFBdUI7SUFDekIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQUpELENBQTJCLGFBQWEsR0FJdkM7QUFDRDtJQUE0QixpQ0FBYTtJQUF6Qzs7SUFJQSxDQUFDO0lBSEMsbUNBQVcsR0FBWDtRQUNFLDJCQUF3QjtJQUMxQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBNEIsYUFBYSxHQUl4QztBQUNEO0lBQTZCLGtDQUFhO0lBQTFDOztJQUlBLENBQUM7SUFIQyxvQ0FBVyxHQUFYO1FBQ0UsNkJBQXlCO0lBQzNCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFKRCxDQUE2QixhQUFhLEdBSXpDO0FBQ0Q7SUFBMEIsK0JBQWE7SUFBdkM7O0lBSUEsQ0FBQztJQUhDLGlDQUFXLEdBQVg7UUFDRSx1QkFBc0I7SUFDeEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQUpELENBQTBCLGFBQWEsR0FJdEM7QUFDRDtJQUFrQyx1Q0FBYTtJQUEvQzs7SUFJQSxDQUFDO0lBSEMseUNBQVcsR0FBWDtRQUNFLHVDQUE4QjtJQUNoQyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBa0MsYUFBYSxHQUk5QztBQUlELE1BQU0sVUFBVSxlQUFlLENBQUksS0FBa0I7SUFDbkQsT0FBTyxLQUFLLFlBQVksYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMscUNBQWlELENBQUMsQ0FBQztRQUN6RCxLQUFpQixDQUFDO0FBQzVELENBQUM7QUFhRCxNQUFNLFVBQVUsK0JBQStCLENBQUMsS0FBVSxFQUFFLElBQWdCO0lBQzFFLElBQU0sVUFBVSxHQUFHLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO1FBQzdDLHNFQUFzRTtRQUN0RSxJQUFJLFVBQVUsb0NBQTJCLElBQUksSUFBSSxvQkFBbUI7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNsRixNQUFNLElBQUksS0FBSyxDQUNYLHFCQUFtQixJQUFJLGdCQUFXLFVBQVUsdUNBQW9DLENBQUMsQ0FBQztLQUN2RjtJQUNELE9BQU8sVUFBVSxLQUFLLElBQUksQ0FBQztBQUM3QixDQUFDO0FBRUQsTUFBTSxVQUFVLHlCQUF5QixDQUFDLEtBQVU7SUFDbEQsT0FBTyxLQUFLLFlBQVksYUFBYSxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQWdCLElBQUksSUFBSSxDQUFDO0FBQ3JGLENBQUM7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxXQUFtQjtJQUM3RCxPQUFPLElBQUksWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFDRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSw0QkFBNEIsQ0FBQyxZQUFvQjtJQUMvRCxPQUFPLElBQUksYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFDRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxhQUFxQjtJQUNqRSxPQUFPLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFDRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxVQUFrQjtJQUMzRCxPQUFPLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFDRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxrQ0FBa0MsQ0FBQyxrQkFBMEI7SUFDM0UsT0FBTyxJQUFJLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5leHBvcnQgY29uc3QgZW51bSBCeXBhc3NUeXBlIHtcbiAgVXJsID0gJ1VSTCcsXG4gIEh0bWwgPSAnSFRNTCcsXG4gIFJlc291cmNlVXJsID0gJ1Jlc291cmNlVVJMJyxcbiAgU2NyaXB0ID0gJ1NjcmlwdCcsXG4gIFN0eWxlID0gJ1N0eWxlJyxcbn1cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBpbiBhIHBhcnRpY3VsYXIgY29udGV4dC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgSFRNTC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2FmZUh0bWwgZXh0ZW5kcyBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBzdHlsZSAoQ1NTKS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVN0eWxlIGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgSmF2YVNjcmlwdC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVNjcmlwdCBleHRlbmRzIFNhZmVWYWx1ZSB7fVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIGEgVVJMIGxpbmtpbmcgdG8gYSBkb2N1bWVudC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVVybCBleHRlbmRzIFNhZmVWYWx1ZSB7fVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIGEgVVJMIHRvIGxvYWQgZXhlY3V0YWJsZSBjb2RlIGZyb20uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNhZmVSZXNvdXJjZVVybCBleHRlbmRzIFNhZmVWYWx1ZSB7fVxuXG5cbmFic3RyYWN0IGNsYXNzIFNhZmVWYWx1ZUltcGwgaW1wbGVtZW50cyBTYWZlVmFsdWUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eTogc3RyaW5nKSB7fVxuXG4gIGFic3RyYWN0IGdldFR5cGVOYW1lKCk6IHN0cmluZztcblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYFNhZmVWYWx1ZSBtdXN0IHVzZSBbcHJvcGVydHldPWJpbmRpbmc6ICR7dGhpcy5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5fWAgK1xuICAgICAgICBgIChzZWUgaHR0cDovL2cuY28vbmcvc2VjdXJpdHkjeHNzKWA7XG4gIH1cbn1cblxuY2xhc3MgU2FmZUh0bWxJbXBsIGV4dGVuZHMgU2FmZVZhbHVlSW1wbCBpbXBsZW1lbnRzIFNhZmVIdG1sIHtcbiAgZ2V0VHlwZU5hbWUoKSB7XG4gICAgcmV0dXJuIEJ5cGFzc1R5cGUuSHRtbDtcbiAgfVxufVxuY2xhc3MgU2FmZVN0eWxlSW1wbCBleHRlbmRzIFNhZmVWYWx1ZUltcGwgaW1wbGVtZW50cyBTYWZlU3R5bGUge1xuICBnZXRUeXBlTmFtZSgpIHtcbiAgICByZXR1cm4gQnlwYXNzVHlwZS5TdHlsZTtcbiAgfVxufVxuY2xhc3MgU2FmZVNjcmlwdEltcGwgZXh0ZW5kcyBTYWZlVmFsdWVJbXBsIGltcGxlbWVudHMgU2FmZVNjcmlwdCB7XG4gIGdldFR5cGVOYW1lKCkge1xuICAgIHJldHVybiBCeXBhc3NUeXBlLlNjcmlwdDtcbiAgfVxufVxuY2xhc3MgU2FmZVVybEltcGwgZXh0ZW5kcyBTYWZlVmFsdWVJbXBsIGltcGxlbWVudHMgU2FmZVVybCB7XG4gIGdldFR5cGVOYW1lKCkge1xuICAgIHJldHVybiBCeXBhc3NUeXBlLlVybDtcbiAgfVxufVxuY2xhc3MgU2FmZVJlc291cmNlVXJsSW1wbCBleHRlbmRzIFNhZmVWYWx1ZUltcGwgaW1wbGVtZW50cyBTYWZlUmVzb3VyY2VVcmwge1xuICBnZXRUeXBlTmFtZSgpIHtcbiAgICByZXR1cm4gQnlwYXNzVHlwZS5SZXNvdXJjZVVybDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW53cmFwU2FmZVZhbHVlKHZhbHVlOiBTYWZlVmFsdWUpOiBzdHJpbmc7XG5leHBvcnQgZnVuY3Rpb24gdW53cmFwU2FmZVZhbHVlPFQ+KHZhbHVlOiBUKTogVDtcbmV4cG9ydCBmdW5jdGlvbiB1bndyYXBTYWZlVmFsdWU8VD4odmFsdWU6IFR8U2FmZVZhbHVlKTogVCB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFNhZmVWYWx1ZUltcGwgPyB2YWx1ZS5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5IGFzIGFueSBhcyBUIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIGFzIGFueSBhcyBUO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KFxuICAgIHZhbHVlOiBhbnksIHR5cGU6IEJ5cGFzc1R5cGUuSHRtbCk6IHZhbHVlIGlzIFNhZmVIdG1sO1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG93U2FuaXRpemF0aW9uQnlwYXNzQW5kVGhyb3coXG4gICAgdmFsdWU6IGFueSwgdHlwZTogQnlwYXNzVHlwZS5SZXNvdXJjZVVybCk6IHZhbHVlIGlzIFNhZmVSZXNvdXJjZVVybDtcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KFxuICAgIHZhbHVlOiBhbnksIHR5cGU6IEJ5cGFzc1R5cGUuU2NyaXB0KTogdmFsdWUgaXMgU2FmZVNjcmlwdDtcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KFxuICAgIHZhbHVlOiBhbnksIHR5cGU6IEJ5cGFzc1R5cGUuU3R5bGUpOiB2YWx1ZSBpcyBTYWZlU3R5bGU7XG5leHBvcnQgZnVuY3Rpb24gYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyh2YWx1ZTogYW55LCB0eXBlOiBCeXBhc3NUeXBlLlVybCk6IHZhbHVlIGlzIFNhZmVVcmw7XG5leHBvcnQgZnVuY3Rpb24gYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyh2YWx1ZTogYW55LCB0eXBlOiBCeXBhc3NUeXBlKTogYm9vbGVhbjtcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KHZhbHVlOiBhbnksIHR5cGU6IEJ5cGFzc1R5cGUpOiBib29sZWFuIHtcbiAgY29uc3QgYWN0dWFsVHlwZSA9IGdldFNhbml0aXphdGlvbkJ5cGFzc1R5cGUodmFsdWUpO1xuICBpZiAoYWN0dWFsVHlwZSAhPSBudWxsICYmIGFjdHVhbFR5cGUgIT09IHR5cGUpIHtcbiAgICAvLyBBbGxvdyBSZXNvdXJjZVVSTHMgaW4gVVJMIGNvbnRleHRzLCB0aGV5IGFyZSBzdHJpY3RseSBtb3JlIHRydXN0ZWQuXG4gICAgaWYgKGFjdHVhbFR5cGUgPT09IEJ5cGFzc1R5cGUuUmVzb3VyY2VVcmwgJiYgdHlwZSA9PT0gQnlwYXNzVHlwZS5VcmwpIHJldHVybiB0cnVlO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFJlcXVpcmVkIGEgc2FmZSAke3R5cGV9LCBnb3QgYSAke2FjdHVhbFR5cGV9IChzZWUgaHR0cDovL2cuY28vbmcvc2VjdXJpdHkjeHNzKWApO1xuICB9XG4gIHJldHVybiBhY3R1YWxUeXBlID09PSB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2FuaXRpemF0aW9uQnlwYXNzVHlwZSh2YWx1ZTogYW55KTogQnlwYXNzVHlwZXxudWxsIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgU2FmZVZhbHVlSW1wbCAmJiB2YWx1ZS5nZXRUeXBlTmFtZSgpIGFzIEJ5cGFzc1R5cGUgfHwgbnVsbDtcbn1cblxuLyoqXG4gKiBNYXJrIGBodG1sYCBzdHJpbmcgYXMgdHJ1c3RlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdyYXBzIHRoZSB0cnVzdGVkIHN0cmluZyBpbiBgU3RyaW5nYCBhbmQgYnJhbmRzIGl0IGluIGEgd2F5IHdoaWNoIG1ha2VzIGl0XG4gKiByZWNvZ25pemFibGUgdG8ge0BsaW5rIGh0bWxTYW5pdGl6ZXJ9IHRvIGJlIHRydXN0ZWQgaW1wbGljaXRseS5cbiAqXG4gKiBAcGFyYW0gdHJ1c3RlZEh0bWwgYGh0bWxgIHN0cmluZyB3aGljaCBuZWVkcyB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKiBAcmV0dXJucyBhIGBodG1sYCB3aGljaCBoYXMgYmVlbiBicmFuZGVkIHRvIGJlIGltcGxpY2l0bHkgdHJ1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0SHRtbCh0cnVzdGVkSHRtbDogc3RyaW5nKTogU2FmZUh0bWwge1xuICByZXR1cm4gbmV3IFNhZmVIdG1sSW1wbCh0cnVzdGVkSHRtbCk7XG59XG4vKipcbiAqIE1hcmsgYHN0eWxlYCBzdHJpbmcgYXMgdHJ1c3RlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdyYXBzIHRoZSB0cnVzdGVkIHN0cmluZyBpbiBgU3RyaW5nYCBhbmQgYnJhbmRzIGl0IGluIGEgd2F5IHdoaWNoIG1ha2VzIGl0XG4gKiByZWNvZ25pemFibGUgdG8ge0BsaW5rIHN0eWxlU2FuaXRpemVyfSB0byBiZSB0cnVzdGVkIGltcGxpY2l0bHkuXG4gKlxuICogQHBhcmFtIHRydXN0ZWRTdHlsZSBgc3R5bGVgIHN0cmluZyB3aGljaCBuZWVkcyB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKiBAcmV0dXJucyBhIGBzdHlsZWAgaGljaCBoYXMgYmVlbiBicmFuZGVkIHRvIGJlIGltcGxpY2l0bHkgdHJ1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0U3R5bGUodHJ1c3RlZFN0eWxlOiBzdHJpbmcpOiBTYWZlU3R5bGUge1xuICByZXR1cm4gbmV3IFNhZmVTdHlsZUltcGwodHJ1c3RlZFN0eWxlKTtcbn1cbi8qKlxuICogTWFyayBgc2NyaXB0YCBzdHJpbmcgYXMgdHJ1c3RlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdyYXBzIHRoZSB0cnVzdGVkIHN0cmluZyBpbiBgU3RyaW5nYCBhbmQgYnJhbmRzIGl0IGluIGEgd2F5IHdoaWNoIG1ha2VzIGl0XG4gKiByZWNvZ25pemFibGUgdG8ge0BsaW5rIHNjcmlwdFNhbml0aXplcn0gdG8gYmUgdHJ1c3RlZCBpbXBsaWNpdGx5LlxuICpcbiAqIEBwYXJhbSB0cnVzdGVkU2NyaXB0IGBzY3JpcHRgIHN0cmluZyB3aGljaCBuZWVkcyB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKiBAcmV0dXJucyBhIGBzY3JpcHRgIHdoaWNoIGhhcyBiZWVuIGJyYW5kZWQgdG8gYmUgaW1wbGljaXRseSB0cnVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTY3JpcHQodHJ1c3RlZFNjcmlwdDogc3RyaW5nKTogU2FmZVNjcmlwdCB7XG4gIHJldHVybiBuZXcgU2FmZVNjcmlwdEltcGwodHJ1c3RlZFNjcmlwdCk7XG59XG4vKipcbiAqIE1hcmsgYHVybGAgc3RyaW5nIGFzIHRydXN0ZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3cmFwcyB0aGUgdHJ1c3RlZCBzdHJpbmcgaW4gYFN0cmluZ2AgYW5kIGJyYW5kcyBpdCBpbiBhIHdheSB3aGljaCBtYWtlcyBpdFxuICogcmVjb2duaXphYmxlIHRvIHtAbGluayB1cmxTYW5pdGl6ZXJ9IHRvIGJlIHRydXN0ZWQgaW1wbGljaXRseS5cbiAqXG4gKiBAcGFyYW0gdHJ1c3RlZFVybCBgdXJsYCBzdHJpbmcgd2hpY2ggbmVlZHMgdG8gYmUgaW1wbGljaXRseSB0cnVzdGVkLlxuICogQHJldHVybnMgYSBgdXJsYCAgd2hpY2ggaGFzIGJlZW4gYnJhbmRlZCB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFVybCh0cnVzdGVkVXJsOiBzdHJpbmcpOiBTYWZlVXJsIHtcbiAgcmV0dXJuIG5ldyBTYWZlVXJsSW1wbCh0cnVzdGVkVXJsKTtcbn1cbi8qKlxuICogTWFyayBgdXJsYCBzdHJpbmcgYXMgdHJ1c3RlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdyYXBzIHRoZSB0cnVzdGVkIHN0cmluZyBpbiBgU3RyaW5nYCBhbmQgYnJhbmRzIGl0IGluIGEgd2F5IHdoaWNoIG1ha2VzIGl0XG4gKiByZWNvZ25pemFibGUgdG8ge0BsaW5rIHJlc291cmNlVXJsU2FuaXRpemVyfSB0byBiZSB0cnVzdGVkIGltcGxpY2l0bHkuXG4gKlxuICogQHBhcmFtIHRydXN0ZWRSZXNvdXJjZVVybCBgdXJsYCBzdHJpbmcgd2hpY2ggbmVlZHMgdG8gYmUgaW1wbGljaXRseSB0cnVzdGVkLlxuICogQHJldHVybnMgYSBgdXJsYCB3aGljaCBoYXMgYmVlbiBicmFuZGVkIHRvIGJlIGltcGxpY2l0bHkgdHJ1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0UmVzb3VyY2VVcmwodHJ1c3RlZFJlc291cmNlVXJsOiBzdHJpbmcpOiBTYWZlUmVzb3VyY2VVcmwge1xuICByZXR1cm4gbmV3IFNhZmVSZXNvdXJjZVVybEltcGwodHJ1c3RlZFJlc291cmNlVXJsKTtcbn1cbiJdfQ==