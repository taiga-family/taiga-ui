/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/testing/src/api.ts
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
 * Defines a matcher for requests based on URL, method, or both.
 *
 * \@publicApi
 * @record
 */
export function RequestMatch() { }
if (false) {
    /** @type {?|undefined} */
    RequestMatch.prototype.method;
    /** @type {?|undefined} */
    RequestMatch.prototype.url;
}
/**
 * Controller to be injected into tests, that allows for mocking and flushing
 * of requests.
 *
 * \@publicApi
 * @abstract
 */
export class HttpTestingController {
}
if (false) {
    /**
     * Search for requests that match the given parameter, without any expectations.
     * @abstract
     * @param {?} match
     * @return {?}
     */
    HttpTestingController.prototype.match = function (match) { };
    /**
     * Expect that a single request has been made which matches the given URL, and return its
     * mock.
     *
     * If no such request has been made, or more than one such request has been made, fail with an
     * error message including the given request description, if any.
     * @abstract
     * @param {?} url
     * @param {?=} description
     * @return {?}
     */
    HttpTestingController.prototype.expectOne = function (url, description) { };
    /**
     * Expect that a single request has been made which matches the given parameters, and return
     * its mock.
     *
     * If no such request has been made, or more than one such request has been made, fail with an
     * error message including the given request description, if any.
     * @abstract
     * @param {?} params
     * @param {?=} description
     * @return {?}
     */
    HttpTestingController.prototype.expectOne = function (params, description) { };
    /**
     * Expect that a single request has been made which matches the given predicate function, and
     * return its mock.
     *
     * If no such request has been made, or more than one such request has been made, fail with an
     * error message including the given request description, if any.
     * @abstract
     * @param {?} matchFn
     * @param {?=} description
     * @return {?}
     */
    HttpTestingController.prototype.expectOne = function (matchFn, description) { };
    /**
     * Expect that a single request has been made which matches the given condition, and return
     * its mock.
     *
     * If no such request has been made, or more than one such request has been made, fail with an
     * error message including the given request description, if any.
     * @abstract
     * @param {?} match
     * @param {?=} description
     * @return {?}
     */
    HttpTestingController.prototype.expectOne = function (match, description) { };
    /**
     * Expect that no requests have been made which match the given URL.
     *
     * If a matching request has been made, fail with an error message including the given request
     * description, if any.
     * @abstract
     * @param {?} url
     * @param {?=} description
     * @return {?}
     */
    HttpTestingController.prototype.expectNone = function (url, description) { };
    /**
     * Expect that no requests have been made which match the given parameters.
     *
     * If a matching request has been made, fail with an error message including the given request
     * description, if any.
     * @abstract
     * @param {?} params
     * @param {?=} description
     * @return {?}
     */
    HttpTestingController.prototype.expectNone = function (params, description) { };
    /**
     * Expect that no requests have been made which match the given predicate function.
     *
     * If a matching request has been made, fail with an error message including the given request
     * description, if any.
     * @abstract
     * @param {?} matchFn
     * @param {?=} description
     * @return {?}
     */
    HttpTestingController.prototype.expectNone = function (matchFn, description) { };
    /**
     * Expect that no requests have been made which match the given condition.
     *
     * If a matching request has been made, fail with an error message including the given request
     * description, if any.
     * @abstract
     * @param {?} match
     * @param {?=} description
     * @return {?}
     */
    HttpTestingController.prototype.expectNone = function (match, description) { };
    /**
     * Verify that no unmatched requests are outstanding.
     *
     * If any requests are outstanding, fail with an error message indicating which requests were not
     * handled.
     *
     * If `ignoreCancelled` is not set (the default), `verify()` will also fail if cancelled requests
     * were not explicitly matched.
     * @abstract
     * @param {?=} opts
     * @return {?}
     */
    HttpTestingController.prototype.verify = function (opts) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2h0dHAvdGVzdGluZy9zcmMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxrQ0FHQzs7O0lBRkMsOEJBQWdCOztJQUNoQiwyQkFBYTs7Ozs7Ozs7O0FBU2YsTUFBTSxPQUFnQixxQkFBcUI7Q0F3RjFDOzs7Ozs7OztJQXBGQyw2REFBK0Y7Ozs7Ozs7Ozs7OztJQVMvRiw0RUFBbUU7Ozs7Ozs7Ozs7OztJQVNuRSwrRUFBNEU7Ozs7Ozs7Ozs7OztJQVM1RSxnRkFDZ0I7Ozs7Ozs7Ozs7OztJQVNoQiw4RUFFdUM7Ozs7Ozs7Ozs7O0lBUXZDLDZFQUE2RDs7Ozs7Ozs7Ozs7SUFRN0QsZ0ZBQXNFOzs7Ozs7Ozs7OztJQVF0RSxpRkFBK0Y7Ozs7Ozs7Ozs7O0lBUS9GLCtFQUNpRzs7Ozs7Ozs7Ozs7OztJQVdqRyw2REFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHtUZXN0UmVxdWVzdH0gZnJvbSAnLi9yZXF1ZXN0JztcblxuLyoqXG4gKiBEZWZpbmVzIGEgbWF0Y2hlciBmb3IgcmVxdWVzdHMgYmFzZWQgb24gVVJMLCBtZXRob2QsIG9yIGJvdGguXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RNYXRjaCB7XG4gIG1ldGhvZD86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIENvbnRyb2xsZXIgdG8gYmUgaW5qZWN0ZWQgaW50byB0ZXN0cywgdGhhdCBhbGxvd3MgZm9yIG1vY2tpbmcgYW5kIGZsdXNoaW5nXG4gKiBvZiByZXF1ZXN0cy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIdHRwVGVzdGluZ0NvbnRyb2xsZXIge1xuICAvKipcbiAgICogU2VhcmNoIGZvciByZXF1ZXN0cyB0aGF0IG1hdGNoIHRoZSBnaXZlbiBwYXJhbWV0ZXIsIHdpdGhvdXQgYW55IGV4cGVjdGF0aW9ucy5cbiAgICovXG4gIGFic3RyYWN0IG1hdGNoKG1hdGNoOiBzdHJpbmd8UmVxdWVzdE1hdGNofCgocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBib29sZWFuKSk6IFRlc3RSZXF1ZXN0W107XG5cbiAgLyoqXG4gICAqIEV4cGVjdCB0aGF0IGEgc2luZ2xlIHJlcXVlc3QgaGFzIGJlZW4gbWFkZSB3aGljaCBtYXRjaGVzIHRoZSBnaXZlbiBVUkwsIGFuZCByZXR1cm4gaXRzXG4gICAqIG1vY2suXG4gICAqXG4gICAqIElmIG5vIHN1Y2ggcmVxdWVzdCBoYXMgYmVlbiBtYWRlLCBvciBtb3JlIHRoYW4gb25lIHN1Y2ggcmVxdWVzdCBoYXMgYmVlbiBtYWRlLCBmYWlsIHdpdGggYW5cbiAgICogZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGdpdmVuIHJlcXVlc3QgZGVzY3JpcHRpb24sIGlmIGFueS5cbiAgICovXG4gIGFic3RyYWN0IGV4cGVjdE9uZSh1cmw6IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcpOiBUZXN0UmVxdWVzdDtcblxuICAvKipcbiAgICogRXhwZWN0IHRoYXQgYSBzaW5nbGUgcmVxdWVzdCBoYXMgYmVlbiBtYWRlIHdoaWNoIG1hdGNoZXMgdGhlIGdpdmVuIHBhcmFtZXRlcnMsIGFuZCByZXR1cm5cbiAgICogaXRzIG1vY2suXG4gICAqXG4gICAqIElmIG5vIHN1Y2ggcmVxdWVzdCBoYXMgYmVlbiBtYWRlLCBvciBtb3JlIHRoYW4gb25lIHN1Y2ggcmVxdWVzdCBoYXMgYmVlbiBtYWRlLCBmYWlsIHdpdGggYW5cbiAgICogZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGdpdmVuIHJlcXVlc3QgZGVzY3JpcHRpb24sIGlmIGFueS5cbiAgICovXG4gIGFic3RyYWN0IGV4cGVjdE9uZShwYXJhbXM6IFJlcXVlc3RNYXRjaCwgZGVzY3JpcHRpb24/OiBzdHJpbmcpOiBUZXN0UmVxdWVzdDtcblxuICAvKipcbiAgICogRXhwZWN0IHRoYXQgYSBzaW5nbGUgcmVxdWVzdCBoYXMgYmVlbiBtYWRlIHdoaWNoIG1hdGNoZXMgdGhlIGdpdmVuIHByZWRpY2F0ZSBmdW5jdGlvbiwgYW5kXG4gICAqIHJldHVybiBpdHMgbW9jay5cbiAgICpcbiAgICogSWYgbm8gc3VjaCByZXF1ZXN0IGhhcyBiZWVuIG1hZGUsIG9yIG1vcmUgdGhhbiBvbmUgc3VjaCByZXF1ZXN0IGhhcyBiZWVuIG1hZGUsIGZhaWwgd2l0aCBhblxuICAgKiBlcnJvciBtZXNzYWdlIGluY2x1ZGluZyB0aGUgZ2l2ZW4gcmVxdWVzdCBkZXNjcmlwdGlvbiwgaWYgYW55LlxuICAgKi9cbiAgYWJzdHJhY3QgZXhwZWN0T25lKG1hdGNoRm46ICgocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBib29sZWFuKSwgZGVzY3JpcHRpb24/OiBzdHJpbmcpOlxuICAgICAgVGVzdFJlcXVlc3Q7XG5cbiAgLyoqXG4gICAqIEV4cGVjdCB0aGF0IGEgc2luZ2xlIHJlcXVlc3QgaGFzIGJlZW4gbWFkZSB3aGljaCBtYXRjaGVzIHRoZSBnaXZlbiBjb25kaXRpb24sIGFuZCByZXR1cm5cbiAgICogaXRzIG1vY2suXG4gICAqXG4gICAqIElmIG5vIHN1Y2ggcmVxdWVzdCBoYXMgYmVlbiBtYWRlLCBvciBtb3JlIHRoYW4gb25lIHN1Y2ggcmVxdWVzdCBoYXMgYmVlbiBtYWRlLCBmYWlsIHdpdGggYW5cbiAgICogZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGdpdmVuIHJlcXVlc3QgZGVzY3JpcHRpb24sIGlmIGFueS5cbiAgICovXG4gIGFic3RyYWN0IGV4cGVjdE9uZShcbiAgICAgIG1hdGNoOiBzdHJpbmd8UmVxdWVzdE1hdGNofCgocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBib29sZWFuKSxcbiAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nKTogVGVzdFJlcXVlc3Q7XG5cbiAgLyoqXG4gICAqIEV4cGVjdCB0aGF0IG5vIHJlcXVlc3RzIGhhdmUgYmVlbiBtYWRlIHdoaWNoIG1hdGNoIHRoZSBnaXZlbiBVUkwuXG4gICAqXG4gICAqIElmIGEgbWF0Y2hpbmcgcmVxdWVzdCBoYXMgYmVlbiBtYWRlLCBmYWlsIHdpdGggYW4gZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGdpdmVuIHJlcXVlc3RcbiAgICogZGVzY3JpcHRpb24sIGlmIGFueS5cbiAgICovXG4gIGFic3RyYWN0IGV4cGVjdE5vbmUodXJsOiBzdHJpbmcsIGRlc2NyaXB0aW9uPzogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogRXhwZWN0IHRoYXQgbm8gcmVxdWVzdHMgaGF2ZSBiZWVuIG1hZGUgd2hpY2ggbWF0Y2ggdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIElmIGEgbWF0Y2hpbmcgcmVxdWVzdCBoYXMgYmVlbiBtYWRlLCBmYWlsIHdpdGggYW4gZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGdpdmVuIHJlcXVlc3RcbiAgICogZGVzY3JpcHRpb24sIGlmIGFueS5cbiAgICovXG4gIGFic3RyYWN0IGV4cGVjdE5vbmUocGFyYW1zOiBSZXF1ZXN0TWF0Y2gsIGRlc2NyaXB0aW9uPzogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogRXhwZWN0IHRoYXQgbm8gcmVxdWVzdHMgaGF2ZSBiZWVuIG1hZGUgd2hpY2ggbWF0Y2ggdGhlIGdpdmVuIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAgICpcbiAgICogSWYgYSBtYXRjaGluZyByZXF1ZXN0IGhhcyBiZWVuIG1hZGUsIGZhaWwgd2l0aCBhbiBlcnJvciBtZXNzYWdlIGluY2x1ZGluZyB0aGUgZ2l2ZW4gcmVxdWVzdFxuICAgKiBkZXNjcmlwdGlvbiwgaWYgYW55LlxuICAgKi9cbiAgYWJzdHJhY3QgZXhwZWN0Tm9uZShtYXRjaEZuOiAoKHJlcTogSHR0cFJlcXVlc3Q8YW55PikgPT4gYm9vbGVhbiksIGRlc2NyaXB0aW9uPzogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogRXhwZWN0IHRoYXQgbm8gcmVxdWVzdHMgaGF2ZSBiZWVuIG1hZGUgd2hpY2ggbWF0Y2ggdGhlIGdpdmVuIGNvbmRpdGlvbi5cbiAgICpcbiAgICogSWYgYSBtYXRjaGluZyByZXF1ZXN0IGhhcyBiZWVuIG1hZGUsIGZhaWwgd2l0aCBhbiBlcnJvciBtZXNzYWdlIGluY2x1ZGluZyB0aGUgZ2l2ZW4gcmVxdWVzdFxuICAgKiBkZXNjcmlwdGlvbiwgaWYgYW55LlxuICAgKi9cbiAgYWJzdHJhY3QgZXhwZWN0Tm9uZShcbiAgICAgIG1hdGNoOiBzdHJpbmd8UmVxdWVzdE1hdGNofCgocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBib29sZWFuKSwgZGVzY3JpcHRpb24/OiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBWZXJpZnkgdGhhdCBubyB1bm1hdGNoZWQgcmVxdWVzdHMgYXJlIG91dHN0YW5kaW5nLlxuICAgKlxuICAgKiBJZiBhbnkgcmVxdWVzdHMgYXJlIG91dHN0YW5kaW5nLCBmYWlsIHdpdGggYW4gZXJyb3IgbWVzc2FnZSBpbmRpY2F0aW5nIHdoaWNoIHJlcXVlc3RzIHdlcmUgbm90XG4gICAqIGhhbmRsZWQuXG4gICAqXG4gICAqIElmIGBpZ25vcmVDYW5jZWxsZWRgIGlzIG5vdCBzZXQgKHRoZSBkZWZhdWx0KSwgYHZlcmlmeSgpYCB3aWxsIGFsc28gZmFpbCBpZiBjYW5jZWxsZWQgcmVxdWVzdHNcbiAgICogd2VyZSBub3QgZXhwbGljaXRseSBtYXRjaGVkLlxuICAgKi9cbiAgYWJzdHJhY3QgdmVyaWZ5KG9wdHM/OiB7aWdub3JlQ2FuY2VsbGVkPzogYm9vbGVhbn0pOiB2b2lkO1xufVxuIl19