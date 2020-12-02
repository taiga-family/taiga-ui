/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/sanitization/bypass.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {string} */
const BypassType = {
    Url: "URL",
    Html: "HTML",
    ResourceUrl: "ResourceURL",
    Script: "Script",
    Style: "Style",
};
export { BypassType };
/**
 * Marker interface for a value that's safe to use in a particular context.
 *
 * \@publicApi
 * @record
 */
export function SafeValue() { }
/**
 * Marker interface for a value that's safe to use as HTML.
 *
 * \@publicApi
 * @record
 */
export function SafeHtml() { }
/**
 * Marker interface for a value that's safe to use as style (CSS).
 *
 * \@publicApi
 * @record
 */
export function SafeStyle() { }
/**
 * Marker interface for a value that's safe to use as JavaScript.
 *
 * \@publicApi
 * @record
 */
export function SafeScript() { }
/**
 * Marker interface for a value that's safe to use as a URL linking to a document.
 *
 * \@publicApi
 * @record
 */
export function SafeUrl() { }
/**
 * Marker interface for a value that's safe to use as a URL to load executable code from.
 *
 * \@publicApi
 * @record
 */
export function SafeResourceUrl() { }
/**
 * @abstract
 */
class SafeValueImpl {
    /**
     * @param {?} changingThisBreaksApplicationSecurity
     */
    constructor(changingThisBreaksApplicationSecurity) {
        this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
    }
    /**
     * @return {?}
     */
    toString() {
        return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` +
            ` (see http://g.co/ng/security#xss)`;
    }
}
if (false) {
    /** @type {?} */
    SafeValueImpl.prototype.changingThisBreaksApplicationSecurity;
    /**
     * @abstract
     * @return {?}
     */
    SafeValueImpl.prototype.getTypeName = function () { };
}
class SafeHtmlImpl extends SafeValueImpl {
    /**
     * @return {?}
     */
    getTypeName() {
        return "HTML" /* Html */;
    }
}
class SafeStyleImpl extends SafeValueImpl {
    /**
     * @return {?}
     */
    getTypeName() {
        return "Style" /* Style */;
    }
}
class SafeScriptImpl extends SafeValueImpl {
    /**
     * @return {?}
     */
    getTypeName() {
        return "Script" /* Script */;
    }
}
class SafeUrlImpl extends SafeValueImpl {
    /**
     * @return {?}
     */
    getTypeName() {
        return "URL" /* Url */;
    }
}
class SafeResourceUrlImpl extends SafeValueImpl {
    /**
     * @return {?}
     */
    getTypeName() {
        return "ResourceURL" /* ResourceUrl */;
    }
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
export function unwrapSafeValue(value) {
    return value instanceof SafeValueImpl ? (/** @type {?} */ ((/** @type {?} */ (value.changingThisBreaksApplicationSecurity)))) :
        (/** @type {?} */ ((/** @type {?} */ (value))));
}
/**
 * @param {?} value
 * @param {?} type
 * @return {?}
 */
export function allowSanitizationBypassAndThrow(value, type) {
    /** @type {?} */
    const actualType = getSanitizationBypassType(value);
    if (actualType != null && actualType !== type) {
        // Allow ResourceURLs in URL contexts, they are strictly more trusted.
        if (actualType === "ResourceURL" /* ResourceUrl */ && type === "URL" /* Url */)
            return true;
        throw new Error(`Required a safe ${type}, got a ${actualType} (see http://g.co/ng/security#xss)`);
    }
    return actualType === type;
}
/**
 * @param {?} value
 * @return {?}
 */
export function getSanitizationBypassType(value) {
    return value instanceof SafeValueImpl && (/** @type {?} */ (value.getTypeName())) || null;
}
/**
 * Mark `html` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {\@link htmlSanitizer} to be trusted implicitly.
 *
 * @param {?} trustedHtml `html` string which needs to be implicitly trusted.
 * @return {?} a `html` which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustHtml(trustedHtml) {
    return new SafeHtmlImpl(trustedHtml);
}
/**
 * Mark `style` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {\@link styleSanitizer} to be trusted implicitly.
 *
 * @param {?} trustedStyle `style` string which needs to be implicitly trusted.
 * @return {?} a `style` hich has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustStyle(trustedStyle) {
    return new SafeStyleImpl(trustedStyle);
}
/**
 * Mark `script` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {\@link scriptSanitizer} to be trusted implicitly.
 *
 * @param {?} trustedScript `script` string which needs to be implicitly trusted.
 * @return {?} a `script` which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustScript(trustedScript) {
    return new SafeScriptImpl(trustedScript);
}
/**
 * Mark `url` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {\@link urlSanitizer} to be trusted implicitly.
 *
 * @param {?} trustedUrl `url` string which needs to be implicitly trusted.
 * @return {?} a `url`  which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustUrl(trustedUrl) {
    return new SafeUrlImpl(trustedUrl);
}
/**
 * Mark `url` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {\@link resourceUrlSanitizer} to be trusted implicitly.
 *
 * @param {?} trustedResourceUrl `url` string which needs to be implicitly trusted.
 * @return {?} a `url` which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustResourceUrl(trustedResourceUrl) {
    return new SafeResourceUrlImpl(trustedResourceUrl);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnlwYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL2J5cGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsTUFBa0IsVUFBVTtJQUMxQixHQUFHLE9BQVE7SUFDWCxJQUFJLFFBQVM7SUFDYixXQUFXLGVBQWdCO0lBQzNCLE1BQU0sVUFBVztJQUNqQixLQUFLLFNBQVU7RUFDaEI7Ozs7Ozs7O0FBT0QsK0JBQTZCOzs7Ozs7O0FBTzdCLDhCQUE4Qzs7Ozs7OztBQU85QywrQkFBK0M7Ozs7Ozs7QUFPL0MsZ0NBQWdEOzs7Ozs7O0FBT2hELDZCQUE2Qzs7Ozs7OztBQU83QyxxQ0FBcUQ7Ozs7QUFHckQsTUFBZSxhQUFhOzs7O0lBQzFCLFlBQW1CLHFDQUE2QztRQUE3QywwQ0FBcUMsR0FBckMscUNBQXFDLENBQVE7SUFBRyxDQUFDOzs7O0lBSXBFLFFBQVE7UUFDTixPQUFPLDBDQUEwQyxJQUFJLENBQUMscUNBQXFDLEVBQUU7WUFDekYsb0NBQW9DLENBQUM7SUFDM0MsQ0FBQztDQUNGOzs7SUFSYSw4REFBb0Q7Ozs7O0lBRWhFLHNEQUErQjs7QUFRakMsTUFBTSxZQUFhLFNBQVEsYUFBYTs7OztJQUN0QyxXQUFXO1FBQ1QseUJBQXVCO0lBQ3pCLENBQUM7Q0FDRjtBQUNELE1BQU0sYUFBYyxTQUFRLGFBQWE7Ozs7SUFDdkMsV0FBVztRQUNULDJCQUF3QjtJQUMxQixDQUFDO0NBQ0Y7QUFDRCxNQUFNLGNBQWUsU0FBUSxhQUFhOzs7O0lBQ3hDLFdBQVc7UUFDVCw2QkFBeUI7SUFDM0IsQ0FBQztDQUNGO0FBQ0QsTUFBTSxXQUFZLFNBQVEsYUFBYTs7OztJQUNyQyxXQUFXO1FBQ1QsdUJBQXNCO0lBQ3hCLENBQUM7Q0FDRjtBQUNELE1BQU0sbUJBQW9CLFNBQVEsYUFBYTs7OztJQUM3QyxXQUFXO1FBQ1QsdUNBQThCO0lBQ2hDLENBQUM7Q0FDRjs7Ozs7O0FBSUQsTUFBTSxVQUFVLGVBQWUsQ0FBSSxLQUFrQjtJQUNuRCxPQUFPLEtBQUssWUFBWSxhQUFhLENBQUMsQ0FBQyxDQUFDLG1CQUFBLG1CQUFBLEtBQUssQ0FBQyxxQ0FBcUMsRUFBTyxFQUFLLENBQUMsQ0FBQztRQUN6RCxtQkFBQSxtQkFBQSxLQUFLLEVBQU8sRUFBSyxDQUFDO0FBQzVELENBQUM7Ozs7OztBQWFELE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxLQUFVLEVBQUUsSUFBZ0I7O1VBQ3BFLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7SUFDbkQsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDN0Msc0VBQXNFO1FBQ3RFLElBQUksVUFBVSxvQ0FBMkIsSUFBSSxJQUFJLG9CQUFtQjtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2xGLE1BQU0sSUFBSSxLQUFLLENBQ1gsbUJBQW1CLElBQUksV0FBVyxVQUFVLG9DQUFvQyxDQUFDLENBQUM7S0FDdkY7SUFDRCxPQUFPLFVBQVUsS0FBSyxJQUFJLENBQUM7QUFDN0IsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUseUJBQXlCLENBQUMsS0FBVTtJQUNsRCxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksbUJBQUEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFjLElBQUksSUFBSSxDQUFDO0FBQ3JGLENBQUM7Ozs7Ozs7Ozs7QUFXRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsV0FBbUI7SUFDN0QsT0FBTyxJQUFJLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxDQUFDOzs7Ozs7Ozs7O0FBVUQsTUFBTSxVQUFVLDRCQUE0QixDQUFDLFlBQW9CO0lBQy9ELE9BQU8sSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsQ0FBQzs7Ozs7Ozs7OztBQVVELE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxhQUFxQjtJQUNqRSxPQUFPLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNDLENBQUM7Ozs7Ozs7Ozs7QUFVRCxNQUFNLFVBQVUsMEJBQTBCLENBQUMsVUFBa0I7SUFDM0QsT0FBTyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyQyxDQUFDOzs7Ozs7Ozs7O0FBVUQsTUFBTSxVQUFVLGtDQUFrQyxDQUFDLGtCQUEwQjtJQUMzRSxPQUFPLElBQUksbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNyRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmV4cG9ydCBjb25zdCBlbnVtIEJ5cGFzc1R5cGUge1xuICBVcmwgPSAnVVJMJyxcbiAgSHRtbCA9ICdIVE1MJyxcbiAgUmVzb3VyY2VVcmwgPSAnUmVzb3VyY2VVUkwnLFxuICBTY3JpcHQgPSAnU2NyaXB0JyxcbiAgU3R5bGUgPSAnU3R5bGUnLFxufVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGluIGEgcGFydGljdWxhciBjb250ZXh0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBIVE1MLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlSHRtbCBleHRlbmRzIFNhZmVWYWx1ZSB7fVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIHN0eWxlIChDU1MpLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlU3R5bGUgZXh0ZW5kcyBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBKYXZhU2NyaXB0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlU2NyaXB0IGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgYSBVUkwgbGlua2luZyB0byBhIGRvY3VtZW50LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlVXJsIGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgYSBVUkwgdG8gbG9hZCBleGVjdXRhYmxlIGNvZGUgZnJvbS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVJlc291cmNlVXJsIGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cblxuYWJzdHJhY3QgY2xhc3MgU2FmZVZhbHVlSW1wbCBpbXBsZW1lbnRzIFNhZmVWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5OiBzdHJpbmcpIHt9XG5cbiAgYWJzdHJhY3QgZ2V0VHlwZU5hbWUoKTogc3RyaW5nO1xuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBgU2FmZVZhbHVlIG11c3QgdXNlIFtwcm9wZXJ0eV09YmluZGluZzogJHt0aGlzLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHl9YCArXG4gICAgICAgIGAgKHNlZSBodHRwOi8vZy5jby9uZy9zZWN1cml0eSN4c3MpYDtcbiAgfVxufVxuXG5jbGFzcyBTYWZlSHRtbEltcGwgZXh0ZW5kcyBTYWZlVmFsdWVJbXBsIGltcGxlbWVudHMgU2FmZUh0bWwge1xuICBnZXRUeXBlTmFtZSgpIHtcbiAgICByZXR1cm4gQnlwYXNzVHlwZS5IdG1sO1xuICB9XG59XG5jbGFzcyBTYWZlU3R5bGVJbXBsIGV4dGVuZHMgU2FmZVZhbHVlSW1wbCBpbXBsZW1lbnRzIFNhZmVTdHlsZSB7XG4gIGdldFR5cGVOYW1lKCkge1xuICAgIHJldHVybiBCeXBhc3NUeXBlLlN0eWxlO1xuICB9XG59XG5jbGFzcyBTYWZlU2NyaXB0SW1wbCBleHRlbmRzIFNhZmVWYWx1ZUltcGwgaW1wbGVtZW50cyBTYWZlU2NyaXB0IHtcbiAgZ2V0VHlwZU5hbWUoKSB7XG4gICAgcmV0dXJuIEJ5cGFzc1R5cGUuU2NyaXB0O1xuICB9XG59XG5jbGFzcyBTYWZlVXJsSW1wbCBleHRlbmRzIFNhZmVWYWx1ZUltcGwgaW1wbGVtZW50cyBTYWZlVXJsIHtcbiAgZ2V0VHlwZU5hbWUoKSB7XG4gICAgcmV0dXJuIEJ5cGFzc1R5cGUuVXJsO1xuICB9XG59XG5jbGFzcyBTYWZlUmVzb3VyY2VVcmxJbXBsIGV4dGVuZHMgU2FmZVZhbHVlSW1wbCBpbXBsZW1lbnRzIFNhZmVSZXNvdXJjZVVybCB7XG4gIGdldFR5cGVOYW1lKCkge1xuICAgIHJldHVybiBCeXBhc3NUeXBlLlJlc291cmNlVXJsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bndyYXBTYWZlVmFsdWUodmFsdWU6IFNhZmVWYWx1ZSk6IHN0cmluZztcbmV4cG9ydCBmdW5jdGlvbiB1bndyYXBTYWZlVmFsdWU8VD4odmFsdWU6IFQpOiBUO1xuZXhwb3J0IGZ1bmN0aW9uIHVud3JhcFNhZmVWYWx1ZTxUPih2YWx1ZTogVHxTYWZlVmFsdWUpOiBUIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgU2FmZVZhbHVlSW1wbCA/IHZhbHVlLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHkgYXMgYW55IGFzIFQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgYXMgYW55IGFzIFQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbG93U2FuaXRpemF0aW9uQnlwYXNzQW5kVGhyb3coXG4gICAgdmFsdWU6IGFueSwgdHlwZTogQnlwYXNzVHlwZS5IdG1sKTogdmFsdWUgaXMgU2FmZUh0bWw7XG5leHBvcnQgZnVuY3Rpb24gYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyhcbiAgICB2YWx1ZTogYW55LCB0eXBlOiBCeXBhc3NUeXBlLlJlc291cmNlVXJsKTogdmFsdWUgaXMgU2FmZVJlc291cmNlVXJsO1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG93U2FuaXRpemF0aW9uQnlwYXNzQW5kVGhyb3coXG4gICAgdmFsdWU6IGFueSwgdHlwZTogQnlwYXNzVHlwZS5TY3JpcHQpOiB2YWx1ZSBpcyBTYWZlU2NyaXB0O1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG93U2FuaXRpemF0aW9uQnlwYXNzQW5kVGhyb3coXG4gICAgdmFsdWU6IGFueSwgdHlwZTogQnlwYXNzVHlwZS5TdHlsZSk6IHZhbHVlIGlzIFNhZmVTdHlsZTtcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KHZhbHVlOiBhbnksIHR5cGU6IEJ5cGFzc1R5cGUuVXJsKTogdmFsdWUgaXMgU2FmZVVybDtcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KHZhbHVlOiBhbnksIHR5cGU6IEJ5cGFzc1R5cGUpOiBib29sZWFuO1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG93U2FuaXRpemF0aW9uQnlwYXNzQW5kVGhyb3codmFsdWU6IGFueSwgdHlwZTogQnlwYXNzVHlwZSk6IGJvb2xlYW4ge1xuICBjb25zdCBhY3R1YWxUeXBlID0gZ2V0U2FuaXRpemF0aW9uQnlwYXNzVHlwZSh2YWx1ZSk7XG4gIGlmIChhY3R1YWxUeXBlICE9IG51bGwgJiYgYWN0dWFsVHlwZSAhPT0gdHlwZSkge1xuICAgIC8vIEFsbG93IFJlc291cmNlVVJMcyBpbiBVUkwgY29udGV4dHMsIHRoZXkgYXJlIHN0cmljdGx5IG1vcmUgdHJ1c3RlZC5cbiAgICBpZiAoYWN0dWFsVHlwZSA9PT0gQnlwYXNzVHlwZS5SZXNvdXJjZVVybCAmJiB0eXBlID09PSBCeXBhc3NUeXBlLlVybCkgcmV0dXJuIHRydWU7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgUmVxdWlyZWQgYSBzYWZlICR7dHlwZX0sIGdvdCBhICR7YWN0dWFsVHlwZX0gKHNlZSBodHRwOi8vZy5jby9uZy9zZWN1cml0eSN4c3MpYCk7XG4gIH1cbiAgcmV0dXJuIGFjdHVhbFR5cGUgPT09IHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTYW5pdGl6YXRpb25CeXBhc3NUeXBlKHZhbHVlOiBhbnkpOiBCeXBhc3NUeXBlfG51bGwge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBTYWZlVmFsdWVJbXBsICYmIHZhbHVlLmdldFR5cGVOYW1lKCkgYXMgQnlwYXNzVHlwZSB8fCBudWxsO1xufVxuXG4vKipcbiAqIE1hcmsgYGh0bWxgIHN0cmluZyBhcyB0cnVzdGVkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd3JhcHMgdGhlIHRydXN0ZWQgc3RyaW5nIGluIGBTdHJpbmdgIGFuZCBicmFuZHMgaXQgaW4gYSB3YXkgd2hpY2ggbWFrZXMgaXRcbiAqIHJlY29nbml6YWJsZSB0byB7QGxpbmsgaHRtbFNhbml0aXplcn0gdG8gYmUgdHJ1c3RlZCBpbXBsaWNpdGx5LlxuICpcbiAqIEBwYXJhbSB0cnVzdGVkSHRtbCBgaHRtbGAgc3RyaW5nIHdoaWNoIG5lZWRzIHRvIGJlIGltcGxpY2l0bHkgdHJ1c3RlZC5cbiAqIEByZXR1cm5zIGEgYGh0bWxgIHdoaWNoIGhhcyBiZWVuIGJyYW5kZWQgdG8gYmUgaW1wbGljaXRseSB0cnVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RIdG1sKHRydXN0ZWRIdG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XG4gIHJldHVybiBuZXcgU2FmZUh0bWxJbXBsKHRydXN0ZWRIdG1sKTtcbn1cbi8qKlxuICogTWFyayBgc3R5bGVgIHN0cmluZyBhcyB0cnVzdGVkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd3JhcHMgdGhlIHRydXN0ZWQgc3RyaW5nIGluIGBTdHJpbmdgIGFuZCBicmFuZHMgaXQgaW4gYSB3YXkgd2hpY2ggbWFrZXMgaXRcbiAqIHJlY29nbml6YWJsZSB0byB7QGxpbmsgc3R5bGVTYW5pdGl6ZXJ9IHRvIGJlIHRydXN0ZWQgaW1wbGljaXRseS5cbiAqXG4gKiBAcGFyYW0gdHJ1c3RlZFN0eWxlIGBzdHlsZWAgc3RyaW5nIHdoaWNoIG5lZWRzIHRvIGJlIGltcGxpY2l0bHkgdHJ1c3RlZC5cbiAqIEByZXR1cm5zIGEgYHN0eWxlYCBoaWNoIGhhcyBiZWVuIGJyYW5kZWQgdG8gYmUgaW1wbGljaXRseSB0cnVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTdHlsZSh0cnVzdGVkU3R5bGU6IHN0cmluZyk6IFNhZmVTdHlsZSB7XG4gIHJldHVybiBuZXcgU2FmZVN0eWxlSW1wbCh0cnVzdGVkU3R5bGUpO1xufVxuLyoqXG4gKiBNYXJrIGBzY3JpcHRgIHN0cmluZyBhcyB0cnVzdGVkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd3JhcHMgdGhlIHRydXN0ZWQgc3RyaW5nIGluIGBTdHJpbmdgIGFuZCBicmFuZHMgaXQgaW4gYSB3YXkgd2hpY2ggbWFrZXMgaXRcbiAqIHJlY29nbml6YWJsZSB0byB7QGxpbmsgc2NyaXB0U2FuaXRpemVyfSB0byBiZSB0cnVzdGVkIGltcGxpY2l0bHkuXG4gKlxuICogQHBhcmFtIHRydXN0ZWRTY3JpcHQgYHNjcmlwdGAgc3RyaW5nIHdoaWNoIG5lZWRzIHRvIGJlIGltcGxpY2l0bHkgdHJ1c3RlZC5cbiAqIEByZXR1cm5zIGEgYHNjcmlwdGAgd2hpY2ggaGFzIGJlZW4gYnJhbmRlZCB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFNjcmlwdCh0cnVzdGVkU2NyaXB0OiBzdHJpbmcpOiBTYWZlU2NyaXB0IHtcbiAgcmV0dXJuIG5ldyBTYWZlU2NyaXB0SW1wbCh0cnVzdGVkU2NyaXB0KTtcbn1cbi8qKlxuICogTWFyayBgdXJsYCBzdHJpbmcgYXMgdHJ1c3RlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdyYXBzIHRoZSB0cnVzdGVkIHN0cmluZyBpbiBgU3RyaW5nYCBhbmQgYnJhbmRzIGl0IGluIGEgd2F5IHdoaWNoIG1ha2VzIGl0XG4gKiByZWNvZ25pemFibGUgdG8ge0BsaW5rIHVybFNhbml0aXplcn0gdG8gYmUgdHJ1c3RlZCBpbXBsaWNpdGx5LlxuICpcbiAqIEBwYXJhbSB0cnVzdGVkVXJsIGB1cmxgIHN0cmluZyB3aGljaCBuZWVkcyB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKiBAcmV0dXJucyBhIGB1cmxgICB3aGljaCBoYXMgYmVlbiBicmFuZGVkIHRvIGJlIGltcGxpY2l0bHkgdHJ1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0VXJsKHRydXN0ZWRVcmw6IHN0cmluZyk6IFNhZmVVcmwge1xuICByZXR1cm4gbmV3IFNhZmVVcmxJbXBsKHRydXN0ZWRVcmwpO1xufVxuLyoqXG4gKiBNYXJrIGB1cmxgIHN0cmluZyBhcyB0cnVzdGVkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd3JhcHMgdGhlIHRydXN0ZWQgc3RyaW5nIGluIGBTdHJpbmdgIGFuZCBicmFuZHMgaXQgaW4gYSB3YXkgd2hpY2ggbWFrZXMgaXRcbiAqIHJlY29nbml6YWJsZSB0byB7QGxpbmsgcmVzb3VyY2VVcmxTYW5pdGl6ZXJ9IHRvIGJlIHRydXN0ZWQgaW1wbGljaXRseS5cbiAqXG4gKiBAcGFyYW0gdHJ1c3RlZFJlc291cmNlVXJsIGB1cmxgIHN0cmluZyB3aGljaCBuZWVkcyB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKiBAcmV0dXJucyBhIGB1cmxgIHdoaWNoIGhhcyBiZWVuIGJyYW5kZWQgdG8gYmUgaW1wbGljaXRseSB0cnVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RSZXNvdXJjZVVybCh0cnVzdGVkUmVzb3VyY2VVcmw6IHN0cmluZyk6IFNhZmVSZXNvdXJjZVVybCB7XG4gIHJldHVybiBuZXcgU2FmZVJlc291cmNlVXJsSW1wbCh0cnVzdGVkUmVzb3VyY2VVcmwpO1xufVxuIl19