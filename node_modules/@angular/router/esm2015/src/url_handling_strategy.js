/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/url_handling_strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * \@publicApi
 * @abstract
 */
export class UrlHandlingStrategy {
}
if (false) {
    /**
     * Tells the router if this URL should be processed.
     *
     * When it returns true, the router will execute the regular navigation.
     * When it returns false, the router will set the router state to an empty state.
     * As a result, all the active components will be destroyed.
     *
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { };
    /**
     * Extracts the part of the URL that should be handled by the router.
     * The rest of the URL will remain untouched.
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlHandlingStrategy.prototype.extract = function (url) { };
    /**
     * Merges the URL fragment with the rest of the URL.
     * @abstract
     * @param {?} newUrlPart
     * @param {?} rawUrl
     * @return {?}
     */
    UrlHandlingStrategy.prototype.merge = function (newUrlPart, rawUrl) { };
}
/**
 * \@publicApi
 */
export class DefaultUrlHandlingStrategy {
    /**
     * @param {?} url
     * @return {?}
     */
    shouldProcessUrl(url) {
        return true;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    extract(url) {
        return url;
    }
    /**
     * @param {?} newUrlPart
     * @param {?} wholeUrl
     * @return {?}
     */
    merge(newUrlPart, wholeUrl) {
        return newUrlPart;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX2hhbmRsaW5nX3N0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy91cmxfaGFuZGxpbmdfc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsTUFBTSxPQUFnQixtQkFBbUI7Q0FxQnhDOzs7Ozs7Ozs7Ozs7O0lBWkMsb0VBQWlEOzs7Ozs7OztJQU1qRCwyREFBd0M7Ozs7Ozs7O0lBS3hDLHdFQUE4RDs7Ozs7QUFNaEUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFDckMsZ0JBQWdCLENBQUMsR0FBWTtRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBQ0QsT0FBTyxDQUFDLEdBQVk7UUFDbEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFDRCxLQUFLLENBQUMsVUFBbUIsRUFBRSxRQUFpQjtRQUMxQyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VXJsVHJlZX0gZnJvbSAnLi91cmxfdHJlZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogUHJvdmlkZXMgYSB3YXkgdG8gbWlncmF0ZSBBbmd1bGFySlMgYXBwbGljYXRpb25zIHRvIEFuZ3VsYXIuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVXJsSGFuZGxpbmdTdHJhdGVneSB7XG4gIC8qKlxuICAgKiBUZWxscyB0aGUgcm91dGVyIGlmIHRoaXMgVVJMIHNob3VsZCBiZSBwcm9jZXNzZWQuXG4gICAqXG4gICAqIFdoZW4gaXQgcmV0dXJucyB0cnVlLCB0aGUgcm91dGVyIHdpbGwgZXhlY3V0ZSB0aGUgcmVndWxhciBuYXZpZ2F0aW9uLlxuICAgKiBXaGVuIGl0IHJldHVybnMgZmFsc2UsIHRoZSByb3V0ZXIgd2lsbCBzZXQgdGhlIHJvdXRlciBzdGF0ZSB0byBhbiBlbXB0eSBzdGF0ZS5cbiAgICogQXMgYSByZXN1bHQsIGFsbCB0aGUgYWN0aXZlIGNvbXBvbmVudHMgd2lsbCBiZSBkZXN0cm95ZWQuXG4gICAqXG4gICAqL1xuICBhYnN0cmFjdCBzaG91bGRQcm9jZXNzVXJsKHVybDogVXJsVHJlZSk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBwYXJ0IG9mIHRoZSBVUkwgdGhhdCBzaG91bGQgYmUgaGFuZGxlZCBieSB0aGUgcm91dGVyLlxuICAgKiBUaGUgcmVzdCBvZiB0aGUgVVJMIHdpbGwgcmVtYWluIHVudG91Y2hlZC5cbiAgICovXG4gIGFic3RyYWN0IGV4dHJhY3QodXJsOiBVcmxUcmVlKTogVXJsVHJlZTtcblxuICAvKipcbiAgICogTWVyZ2VzIHRoZSBVUkwgZnJhZ21lbnQgd2l0aCB0aGUgcmVzdCBvZiB0aGUgVVJMLlxuICAgKi9cbiAgYWJzdHJhY3QgbWVyZ2UobmV3VXJsUGFydDogVXJsVHJlZSwgcmF3VXJsOiBVcmxUcmVlKTogVXJsVHJlZTtcbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0VXJsSGFuZGxpbmdTdHJhdGVneSBpbXBsZW1lbnRzIFVybEhhbmRsaW5nU3RyYXRlZ3kge1xuICBzaG91bGRQcm9jZXNzVXJsKHVybDogVXJsVHJlZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGV4dHJhY3QodXJsOiBVcmxUcmVlKTogVXJsVHJlZSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICBtZXJnZShuZXdVcmxQYXJ0OiBVcmxUcmVlLCB3aG9sZVVybDogVXJsVHJlZSk6IFVybFRyZWUge1xuICAgIHJldHVybiBuZXdVcmxQYXJ0O1xuICB9XG59Il19