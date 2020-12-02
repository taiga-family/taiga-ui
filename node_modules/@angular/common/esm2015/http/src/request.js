/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/request.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HttpHeaders } from './headers';
import { HttpParams } from './params';
/**
 * Construction interface for `HttpRequest`s.
 *
 * All values are optional and will override default values if provided.
 * @record
 */
function HttpRequestInit() { }
if (false) {
    /** @type {?|undefined} */
    HttpRequestInit.prototype.headers;
    /** @type {?|undefined} */
    HttpRequestInit.prototype.reportProgress;
    /** @type {?|undefined} */
    HttpRequestInit.prototype.params;
    /** @type {?|undefined} */
    HttpRequestInit.prototype.responseType;
    /** @type {?|undefined} */
    HttpRequestInit.prototype.withCredentials;
}
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@publicApi
 * @template T
 */
export class HttpRequest {
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} third
     * @param {?=} fourth
     */
    constructor(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        /** @type {?} */
        let options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? (/** @type {?} */ (third)) : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = (/** @type {?} */ (third));
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            /** @type {?} */
            const params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                /** @type {?} */
                const qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                /** @type {?} */
                const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return ((/** @type {?} */ (this.body))).toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        /** @type {?} */
        const method = update.method || this.method;
        /** @type {?} */
        const url = update.url || this.url;
        /** @type {?} */
        const responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        /** @type {?} */
        const body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        /** @type {?} */
        const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        /** @type {?} */
        const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        /** @type {?} */
        let headers = update.headers || this.headers;
        /** @type {?} */
        let params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce((/**
                 * @param {?} headers
                 * @param {?} name
                 * @return {?}
                 */
                (headers, name) => headers.set(name, (/** @type {?} */ (update.setHeaders))[name])), headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce((/**
             * @param {?} params
             * @param {?} param
             * @return {?}
             */
            (params, param) => params.set(param, (/** @type {?} */ (update.setParams))[param])), params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params,
            headers,
            reportProgress,
            responseType,
            withCredentials,
        });
    }
}
if (false) {
    /**
     * The request body, or `null` if one isn't set.
     *
     * Bodies are not enforced to be immutable, as they can include a reference to any
     * user-defined data type. However, interceptors should take care to preserve
     * idempotence by treating them as such.
     * @type {?}
     */
    HttpRequest.prototype.body;
    /**
     * Outgoing headers for this request.
     * @type {?}
     */
    HttpRequest.prototype.headers;
    /**
     * Whether this request should be made in a way that exposes progress events.
     *
     * Progress events are expensive (change detection runs on each event) and so
     * they should only be requested if the consumer intends to monitor them.
     * @type {?}
     */
    HttpRequest.prototype.reportProgress;
    /**
     * Whether this request should be sent with outgoing credentials (cookies).
     * @type {?}
     */
    HttpRequest.prototype.withCredentials;
    /**
     * The expected response type of the server.
     *
     * This is used to parse the response appropriately before returning it to
     * the requestee.
     * @type {?}
     */
    HttpRequest.prototype.responseType;
    /**
     * The outgoing HTTP request method.
     * @type {?}
     */
    HttpRequest.prototype.method;
    /**
     * Outgoing URL parameters.
     * @type {?}
     */
    HttpRequest.prototype.params;
    /**
     * The outgoing URL with all URL parameters set.
     * @type {?}
     */
    HttpRequest.prototype.urlWithParams;
    /** @type {?} */
    HttpRequest.prototype.url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9odHRwL3NyYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFVBQVUsQ0FBQzs7Ozs7OztBQU9wQyw4QkFNQzs7O0lBTEMsa0NBQXNCOztJQUN0Qix5Q0FBeUI7O0lBQ3pCLGlDQUFvQjs7SUFDcEIsdUNBQWtEOztJQUNsRCwwQ0FBMEI7Ozs7Ozs7QUFNNUIsU0FBUyxhQUFhLENBQUMsTUFBYztJQUNuQyxRQUFRLE1BQU0sRUFBRTtRQUNkLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxLQUFLLENBQUM7UUFDWCxLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssU0FBUyxDQUFDO1FBQ2YsS0FBSyxPQUFPO1lBQ1YsT0FBTyxLQUFLLENBQUM7UUFDZjtZQUNFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDSCxDQUFDOzs7Ozs7OztBQU9ELFNBQVMsYUFBYSxDQUFDLEtBQVU7SUFDL0IsT0FBTyxPQUFPLFdBQVcsS0FBSyxXQUFXLElBQUksS0FBSyxZQUFZLFdBQVcsQ0FBQztBQUM1RSxDQUFDOzs7Ozs7OztBQU9ELFNBQVMsTUFBTSxDQUFDLEtBQVU7SUFDeEIsT0FBTyxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksS0FBSyxZQUFZLElBQUksQ0FBQztBQUM5RCxDQUFDOzs7Ozs7OztBQU9ELFNBQVMsVUFBVSxDQUFDLEtBQVU7SUFDNUIsT0FBTyxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksS0FBSyxZQUFZLFFBQVEsQ0FBQztBQUN0RSxDQUFDOzs7Ozs7Ozs7Ozs7QUFZRCxNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQTBFdEIsWUFDSSxNQUFjLEVBQVcsR0FBVyxFQUFFLEtB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Q0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7Ozs7O0lBaFRDLDJCQUE2Qjs7Ozs7SUFNN0IsOEJBQStCOzs7Ozs7OztJQVEvQixxQ0FBeUM7Ozs7O0lBS3pDLHNDQUEwQzs7Ozs7Ozs7SUFRMUMsbUNBQW1FOzs7OztJQUtuRSw2QkFBd0I7Ozs7O0lBTXhCLDZCQUE2Qjs7Ozs7SUFLN0Isb0NBQStCOztJQXdCWCwwQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SHR0cEhlYWRlcnN9IGZyb20gJy4vaGVhZGVycyc7XG5pbXBvcnQge0h0dHBQYXJhbXN9IGZyb20gJy4vcGFyYW1zJztcblxuLyoqXG4gKiBDb25zdHJ1Y3Rpb24gaW50ZXJmYWNlIGZvciBgSHR0cFJlcXVlc3Rgcy5cbiAqXG4gKiBBbGwgdmFsdWVzIGFyZSBvcHRpb25hbCBhbmQgd2lsbCBvdmVycmlkZSBkZWZhdWx0IHZhbHVlcyBpZiBwcm92aWRlZC5cbiAqL1xuaW50ZXJmYWNlIEh0dHBSZXF1ZXN0SW5pdCB7XG4gIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICBwYXJhbXM/OiBIdHRwUGFyYW1zO1xuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInfCdibG9iJ3wnanNvbid8J3RleHQnO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBIVFRQIG1ldGhvZCBtYXkgaW5jbHVkZSBhIGJvZHkuXG4gKi9cbmZ1bmN0aW9uIG1pZ2h0SGF2ZUJvZHkobWV0aG9kOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlICdERUxFVEUnOlxuICAgIGNhc2UgJ0dFVCc6XG4gICAgY2FzZSAnSEVBRCc6XG4gICAgY2FzZSAnT1BUSU9OUyc6XG4gICAgY2FzZSAnSlNPTlAnOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFNhZmVseSBhc3NlcnQgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIuXG4gKlxuICogSW4gc29tZSBleGVjdXRpb24gZW52aXJvbm1lbnRzIEFycmF5QnVmZmVyIGlzIG5vdCBkZWZpbmVkLlxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBBcnJheUJ1ZmZlciB7XG4gIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59XG5cbi8qKlxuICogU2FmZWx5IGFzc2VydCB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIEJsb2IuXG4gKlxuICogSW4gc29tZSBleGVjdXRpb24gZW52aXJvbm1lbnRzIEJsb2IgaXMgbm90IGRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWx1ZTogYW55KTogdmFsdWUgaXMgQmxvYiB7XG4gIHJldHVybiB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBCbG9iO1xufVxuXG4vKipcbiAqIFNhZmVseSBhc3NlcnQgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBGb3JtRGF0YSBpbnN0YW5jZS5cbiAqXG4gKiBJbiBzb21lIGV4ZWN1dGlvbiBlbnZpcm9ubWVudHMgRm9ybURhdGEgaXMgbm90IGRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsdWU6IGFueSk6IHZhbHVlIGlzIEZvcm1EYXRhIHtcbiAgcmV0dXJuIHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YTtcbn1cblxuLyoqXG4gKiBBbiBvdXRnb2luZyBIVFRQIHJlcXVlc3Qgd2l0aCBhbiBvcHRpb25hbCB0eXBlZCBib2R5LlxuICpcbiAqIGBIdHRwUmVxdWVzdGAgcmVwcmVzZW50cyBhbiBvdXRnb2luZyByZXF1ZXN0LCBpbmNsdWRpbmcgVVJMLCBtZXRob2QsXG4gKiBoZWFkZXJzLCBib2R5LCBhbmQgb3RoZXIgcmVxdWVzdCBjb25maWd1cmF0aW9uIG9wdGlvbnMuIEluc3RhbmNlcyBzaG91bGQgYmVcbiAqIGFzc3VtZWQgdG8gYmUgaW1tdXRhYmxlLiBUbyBtb2RpZnkgYSBgSHR0cFJlcXVlc3RgLCB0aGUgYGNsb25lYFxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0PFQ+IHtcbiAgLyoqXG4gICAqIFRoZSByZXF1ZXN0IGJvZHksIG9yIGBudWxsYCBpZiBvbmUgaXNuJ3Qgc2V0LlxuICAgKlxuICAgKiBCb2RpZXMgYXJlIG5vdCBlbmZvcmNlZCB0byBiZSBpbW11dGFibGUsIGFzIHRoZXkgY2FuIGluY2x1ZGUgYSByZWZlcmVuY2UgdG8gYW55XG4gICAqIHVzZXItZGVmaW5lZCBkYXRhIHR5cGUuIEhvd2V2ZXIsIGludGVyY2VwdG9ycyBzaG91bGQgdGFrZSBjYXJlIHRvIHByZXNlcnZlXG4gICAqIGlkZW1wb3RlbmNlIGJ5IHRyZWF0aW5nIHRoZW0gYXMgc3VjaC5cbiAgICovXG4gIHJlYWRvbmx5IGJvZHk6IFR8bnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIE91dGdvaW5nIGhlYWRlcnMgZm9yIHRoaXMgcmVxdWVzdC5cbiAgICovXG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICByZWFkb25seSBoZWFkZXJzITogSHR0cEhlYWRlcnM7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyByZXF1ZXN0IHNob3VsZCBiZSBtYWRlIGluIGEgd2F5IHRoYXQgZXhwb3NlcyBwcm9ncmVzcyBldmVudHMuXG4gICAqXG4gICAqIFByb2dyZXNzIGV2ZW50cyBhcmUgZXhwZW5zaXZlIChjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMgb24gZWFjaCBldmVudCkgYW5kIHNvXG4gICAqIHRoZXkgc2hvdWxkIG9ubHkgYmUgcmVxdWVzdGVkIGlmIHRoZSBjb25zdW1lciBpbnRlbmRzIHRvIG1vbml0b3IgdGhlbS5cbiAgICovXG4gIHJlYWRvbmx5IHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyByZXF1ZXN0IHNob3VsZCBiZSBzZW50IHdpdGggb3V0Z29pbmcgY3JlZGVudGlhbHMgKGNvb2tpZXMpLlxuICAgKi9cbiAgcmVhZG9ubHkgd2l0aENyZWRlbnRpYWxzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBleHBlY3RlZCByZXNwb25zZSB0eXBlIG9mIHRoZSBzZXJ2ZXIuXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZCB0byBwYXJzZSB0aGUgcmVzcG9uc2UgYXBwcm9wcmlhdGVseSBiZWZvcmUgcmV0dXJuaW5nIGl0IHRvXG4gICAqIHRoZSByZXF1ZXN0ZWUuXG4gICAqL1xuICByZWFkb25seSByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcid8J2Jsb2InfCdqc29uJ3wndGV4dCcgPSAnanNvbic7XG5cbiAgLyoqXG4gICAqIFRoZSBvdXRnb2luZyBIVFRQIHJlcXVlc3QgbWV0aG9kLlxuICAgKi9cbiAgcmVhZG9ubHkgbWV0aG9kOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE91dGdvaW5nIFVSTCBwYXJhbWV0ZXJzLlxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHJlYWRvbmx5IHBhcmFtcyE6IEh0dHBQYXJhbXM7XG5cbiAgLyoqXG4gICAqIFRoZSBvdXRnb2luZyBVUkwgd2l0aCBhbGwgVVJMIHBhcmFtZXRlcnMgc2V0LlxuICAgKi9cbiAgcmVhZG9ubHkgdXJsV2l0aFBhcmFtczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1ldGhvZDogJ0RFTEVURSd8J0dFVCd8J0hFQUQnfCdKU09OUCd8J09QVElPTlMnLCB1cmw6IHN0cmluZywgaW5pdD86IHtcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLFxuICAgIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJ3wnYmxvYid8J2pzb24nfCd0ZXh0JyxcbiAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuLFxuICB9KTtcbiAgY29uc3RydWN0b3IobWV0aG9kOiAnUE9TVCd8J1BVVCd8J1BBVENIJywgdXJsOiBzdHJpbmcsIGJvZHk6IFR8bnVsbCwgaW5pdD86IHtcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLFxuICAgIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJ3wnYmxvYid8J2pzb24nfCd0ZXh0JyxcbiAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuLFxuICB9KTtcbiAgY29uc3RydWN0b3IobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBib2R5OiBUfG51bGwsIGluaXQ/OiB7XG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzLFxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbixcbiAgICBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcid8J2Jsb2InfCdqc29uJ3wndGV4dCcsXG4gICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbixcbiAgfSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbWV0aG9kOiBzdHJpbmcsIHJlYWRvbmx5IHVybDogc3RyaW5nLCB0aGlyZD86IFR8e1xuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbixcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJ3wnYmxvYid8J2pzb24nfCd0ZXh0JyxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbixcbiAgICAgIH18bnVsbCxcbiAgICAgIGZvdXJ0aD86IHtcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzLFxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcid8J2Jsb2InfCdqc29uJ3wndGV4dCcsXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW4sXG4gICAgICB9KSB7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICAvLyBOZXh0LCBuZWVkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggYXJndW1lbnQgaG9sZHMgdGhlIEh0dHBSZXF1ZXN0SW5pdFxuICAgIC8vIG9wdGlvbnMsIGlmIGFueS5cbiAgICBsZXQgb3B0aW9uczogSHR0cFJlcXVlc3RJbml0fHVuZGVmaW5lZDtcblxuICAgIC8vIENoZWNrIHdoZXRoZXIgYSBib2R5IGFyZ3VtZW50IGlzIGV4cGVjdGVkLiBUaGUgb25seSB2YWxpZCB3YXkgdG8gb21pdFxuICAgIC8vIHRoZSBib2R5IGFyZ3VtZW50IGlzIHRvIHVzZSBhIGtub3duIG5vLWJvZHkgbWV0aG9kIGxpa2UgR0VULlxuICAgIGlmIChtaWdodEhhdmVCb2R5KHRoaXMubWV0aG9kKSB8fCAhIWZvdXJ0aCkge1xuICAgICAgLy8gQm9keSBpcyB0aGUgdGhpcmQgYXJndW1lbnQsIG9wdGlvbnMgYXJlIHRoZSBmb3VydGguXG4gICAgICB0aGlzLmJvZHkgPSAodGhpcmQgIT09IHVuZGVmaW5lZCkgPyB0aGlyZCBhcyBUIDogbnVsbDtcbiAgICAgIG9wdGlvbnMgPSBmb3VydGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGJvZHkgcmVxdWlyZWQsIG9wdGlvbnMgYXJlIHRoZSB0aGlyZCBhcmd1bWVudC4gVGhlIGJvZHkgc3RheXMgbnVsbC5cbiAgICAgIG9wdGlvbnMgPSB0aGlyZCBhcyBIdHRwUmVxdWVzdEluaXQ7XG4gICAgfVxuXG4gICAgLy8gSWYgb3B0aW9ucyBoYXZlIGJlZW4gcGFzc2VkLCBpbnRlcnByZXQgdGhlbS5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgLy8gTm9ybWFsaXplIHJlcG9ydFByb2dyZXNzIGFuZCB3aXRoQ3JlZGVudGlhbHMuXG4gICAgICB0aGlzLnJlcG9ydFByb2dyZXNzID0gISFvcHRpb25zLnJlcG9ydFByb2dyZXNzO1xuICAgICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuXG4gICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IHJlc3BvbnNlIHR5cGUgb2YgJ2pzb24nIGlmIG9uZSBpcyBwcm92aWRlZC5cbiAgICAgIGlmICghIW9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIC8vIE92ZXJyaWRlIGhlYWRlcnMgaWYgdGhleSdyZSBwcm92aWRlZC5cbiAgICAgIGlmICghIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gICAgICB9XG5cbiAgICAgIGlmICghIW9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIHRoaXMucGFyYW1zID0gb3B0aW9ucy5wYXJhbXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gaGVhZGVycyBoYXZlIGJlZW4gcGFzc2VkIGluLCBjb25zdHJ1Y3QgYSBuZXcgSHR0cEhlYWRlcnMgaW5zdGFuY2UuXG4gICAgaWYgKCF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIH1cblxuICAgIC8vIElmIG5vIHBhcmFtZXRlcnMgaGF2ZSBiZWVuIHBhc3NlZCBpbiwgY29uc3RydWN0IGEgbmV3IEh0dHBVcmxFbmNvZGVkUGFyYW1zIGluc3RhbmNlLlxuICAgIGlmICghdGhpcy5wYXJhbXMpIHtcbiAgICAgIHRoaXMucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICAgIHRoaXMudXJsV2l0aFBhcmFtcyA9IHVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRW5jb2RlIHRoZSBwYXJhbWV0ZXJzIHRvIGEgc3RyaW5nIGluIHByZXBhcmF0aW9uIGZvciBpbmNsdXNpb24gaW4gdGhlIFVSTC5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMucGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBObyBwYXJhbWV0ZXJzLCB0aGUgdmlzaWJsZSBVUkwgaXMganVzdCB0aGUgVVJMIGdpdmVuIGF0IGNyZWF0aW9uIHRpbWUuXG4gICAgICAgIHRoaXMudXJsV2l0aFBhcmFtcyA9IHVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERvZXMgdGhlIFVSTCBhbHJlYWR5IGhhdmUgcXVlcnkgcGFyYW1ldGVycz8gTG9vayBmb3IgJz8nLlxuICAgICAgICBjb25zdCBxSWR4ID0gdXJsLmluZGV4T2YoJz8nKTtcbiAgICAgICAgLy8gVGhlcmUgYXJlIDMgY2FzZXMgdG8gaGFuZGxlOlxuICAgICAgICAvLyAxKSBObyBleGlzdGluZyBwYXJhbWV0ZXJzIC0+IGFwcGVuZCAnPycgZm9sbG93ZWQgYnkgcGFyYW1zLlxuICAgICAgICAvLyAyKSAnPycgZXhpc3RzIGFuZCBpcyBmb2xsb3dlZCBieSBleGlzdGluZyBxdWVyeSBzdHJpbmcgLT5cbiAgICAgICAgLy8gICAgYXBwZW5kICcmJyBmb2xsb3dlZCBieSBwYXJhbXMuXG4gICAgICAgIC8vIDMpICc/JyBleGlzdHMgYXQgdGhlIGVuZCBvZiB0aGUgdXJsIC0+IGFwcGVuZCBwYXJhbXMgZGlyZWN0bHkuXG4gICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IGFtb3VudHMgdG8gZGV0ZXJtaW5pbmcgdGhlIGNoYXJhY3RlciwgaWYgYW55LCB3aXRoXG4gICAgICAgIC8vIHdoaWNoIHRvIGpvaW4gdGhlIFVSTCBhbmQgcGFyYW1ldGVycy5cbiAgICAgICAgY29uc3Qgc2VwOiBzdHJpbmcgPSBxSWR4ID09PSAtMSA/ICc/JyA6IChxSWR4IDwgdXJsLmxlbmd0aCAtIDEgPyAnJicgOiAnJyk7XG4gICAgICAgIHRoaXMudXJsV2l0aFBhcmFtcyA9IHVybCArIHNlcCArIHBhcmFtcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBmcmVlLWZvcm0gYm9keSBpbnRvIGEgc2VyaWFsaXplZCBmb3JtYXQgc3VpdGFibGUgZm9yXG4gICAqIHRyYW5zbWlzc2lvbiB0byB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2VyaWFsaXplQm9keSgpOiBBcnJheUJ1ZmZlcnxCbG9ifEZvcm1EYXRhfHN0cmluZ3xudWxsIHtcbiAgICAvLyBJZiBubyBib2R5IGlzIHByZXNlbnQsIG5vIG5lZWQgdG8gc2VyaWFsaXplIGl0LlxuICAgIGlmICh0aGlzLmJvZHkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBib2R5IGlzIGFscmVhZHkgaW4gYSBzZXJpYWxpemVkIGZvcm0uIElmIHNvLFxuICAgIC8vIGl0IGNhbiBqdXN0IGJlIHJldHVybmVkIGRpcmVjdGx5LlxuICAgIGlmIChpc0FycmF5QnVmZmVyKHRoaXMuYm9keSkgfHwgaXNCbG9iKHRoaXMuYm9keSkgfHwgaXNGb3JtRGF0YSh0aGlzLmJvZHkpIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLmJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5ib2R5O1xuICAgIH1cbiAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBib2R5IGlzIGFuIGluc3RhbmNlIG9mIEh0dHBVcmxFbmNvZGVkUGFyYW1zLlxuICAgIGlmICh0aGlzLmJvZHkgaW5zdGFuY2VvZiBIdHRwUGFyYW1zKSB7XG4gICAgICByZXR1cm4gdGhpcy5ib2R5LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGJvZHkgaXMgYW4gb2JqZWN0IG9yIGFycmF5LCBhbmQgc2VyaWFsaXplIHdpdGggSlNPTiBpZiBzby5cbiAgICBpZiAodHlwZW9mIHRoaXMuYm9keSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHRoaXMuYm9keSA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5ib2R5KSkge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuYm9keSk7XG4gICAgfVxuICAgIC8vIEZhbGwgYmFjayBvbiB0b1N0cmluZygpIGZvciBldmVyeXRoaW5nIGVsc2UuXG4gICAgcmV0dXJuICh0aGlzLmJvZHkgYXMgYW55KS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4YW1pbmUgdGhlIGJvZHkgYW5kIGF0dGVtcHQgdG8gaW5mZXIgYW4gYXBwcm9wcmlhdGUgTUlNRSB0eXBlXG4gICAqIGZvciBpdC5cbiAgICpcbiAgICogSWYgbm8gc3VjaCB0eXBlIGNhbiBiZSBpbmZlcnJlZCwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYG51bGxgLlxuICAgKi9cbiAgZGV0ZWN0Q29udGVudFR5cGVIZWFkZXIoKTogc3RyaW5nfG51bGwge1xuICAgIC8vIEFuIGVtcHR5IGJvZHkgaGFzIG5vIGNvbnRlbnQgdHlwZS5cbiAgICBpZiAodGhpcy5ib2R5ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gRm9ybURhdGEgYm9kaWVzIHJlbHkgb24gdGhlIGJyb3dzZXIncyBjb250ZW50IHR5cGUgYXNzaWdubWVudC5cbiAgICBpZiAoaXNGb3JtRGF0YSh0aGlzLmJvZHkpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gQmxvYnMgdXN1YWxseSBoYXZlIHRoZWlyIG93biBjb250ZW50IHR5cGUuIElmIGl0IGRvZXNuJ3QsIHRoZW5cbiAgICAvLyBubyB0eXBlIGNhbiBiZSBpbmZlcnJlZC5cbiAgICBpZiAoaXNCbG9iKHRoaXMuYm9keSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmJvZHkudHlwZSB8fCBudWxsO1xuICAgIH1cbiAgICAvLyBBcnJheSBidWZmZXJzIGhhdmUgdW5rbm93biBjb250ZW50cyBhbmQgdGh1cyBubyB0eXBlIGNhbiBiZSBpbmZlcnJlZC5cbiAgICBpZiAoaXNBcnJheUJ1ZmZlcih0aGlzLmJvZHkpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gVGVjaG5pY2FsbHksIHN0cmluZ3MgY291bGQgYmUgYSBmb3JtIG9mIEpTT04gZGF0YSwgYnV0IGl0J3Mgc2FmZSBlbm91Z2hcbiAgICAvLyB0byBhc3N1bWUgdGhleSdyZSBwbGFpbiBzdHJpbmdzLlxuICAgIGlmICh0eXBlb2YgdGhpcy5ib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICd0ZXh0L3BsYWluJztcbiAgICB9XG4gICAgLy8gYEh0dHBVcmxFbmNvZGVkUGFyYW1zYCBoYXMgaXRzIG93biBjb250ZW50LXR5cGUuXG4gICAgaWYgKHRoaXMuYm9keSBpbnN0YW5jZW9mIEh0dHBQYXJhbXMpIHtcbiAgICAgIHJldHVybiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnO1xuICAgIH1cbiAgICAvLyBBcnJheXMsIG9iamVjdHMsIGFuZCBudW1iZXJzIHdpbGwgYmUgZW5jb2RlZCBhcyBKU09OLlxuICAgIGlmICh0eXBlb2YgdGhpcy5ib2R5ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdGhpcy5ib2R5ID09PSAnbnVtYmVyJyB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KHRoaXMuYm9keSkpIHtcbiAgICAgIHJldHVybiAnYXBwbGljYXRpb24vanNvbic7XG4gICAgfVxuICAgIC8vIE5vIHR5cGUgY291bGQgYmUgaW5mZXJyZWQuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjbG9uZSgpOiBIdHRwUmVxdWVzdDxUPjtcbiAgY2xvbmUodXBkYXRlOiB7XG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzLFxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbixcbiAgICBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcid8J2Jsb2InfCdqc29uJ3wndGV4dCcsXG4gICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbixcbiAgICBib2R5PzogVHxudWxsLFxuICAgIG1ldGhvZD86IHN0cmluZyxcbiAgICB1cmw/OiBzdHJpbmcsXG4gICAgc2V0SGVhZGVycz86IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfHN0cmluZ1tdfSxcbiAgICBzZXRQYXJhbXM/OiB7W3BhcmFtOiBzdHJpbmddOiBzdHJpbmd9LFxuICB9KTogSHR0cFJlcXVlc3Q8VD47XG4gIGNsb25lPFY+KHVwZGF0ZToge1xuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyxcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sXG4gICAgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInfCdibG9iJ3wnanNvbid8J3RleHQnLFxuICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW4sXG4gICAgYm9keT86IFZ8bnVsbCxcbiAgICBtZXRob2Q/OiBzdHJpbmcsXG4gICAgdXJsPzogc3RyaW5nLFxuICAgIHNldEhlYWRlcnM/OiB7W25hbWU6IHN0cmluZ106IHN0cmluZ3xzdHJpbmdbXX0sXG4gICAgc2V0UGFyYW1zPzoge1twYXJhbTogc3RyaW5nXTogc3RyaW5nfSxcbiAgfSk6IEh0dHBSZXF1ZXN0PFY+O1xuICBjbG9uZSh1cGRhdGU6IHtcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLFxuICAgIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJ3wnYmxvYid8J2pzb24nfCd0ZXh0JyxcbiAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuLFxuICAgIGJvZHk/OiBhbnl8bnVsbCxcbiAgICBtZXRob2Q/OiBzdHJpbmcsXG4gICAgdXJsPzogc3RyaW5nLFxuICAgIHNldEhlYWRlcnM/OiB7W25hbWU6IHN0cmluZ106IHN0cmluZ3xzdHJpbmdbXX0sXG4gICAgc2V0UGFyYW1zPzoge1twYXJhbTogc3RyaW5nXTogc3RyaW5nfTtcbiAgfSA9IHt9KTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgLy8gRm9yIG1ldGhvZCwgdXJsLCBhbmQgcmVzcG9uc2VUeXBlLCB0YWtlIHRoZSBjdXJyZW50IHZhbHVlIHVubGVzc1xuICAgIC8vIGl0IGlzIG92ZXJyaWRkZW4gaW4gdGhlIHVwZGF0ZSBoYXNoLlxuICAgIGNvbnN0IG1ldGhvZCA9IHVwZGF0ZS5tZXRob2QgfHwgdGhpcy5tZXRob2Q7XG4gICAgY29uc3QgdXJsID0gdXBkYXRlLnVybCB8fCB0aGlzLnVybDtcbiAgICBjb25zdCByZXNwb25zZVR5cGUgPSB1cGRhdGUucmVzcG9uc2VUeXBlIHx8IHRoaXMucmVzcG9uc2VUeXBlO1xuXG4gICAgLy8gVGhlIGJvZHkgaXMgc29tZXdoYXQgc3BlY2lhbCAtIGEgYG51bGxgIHZhbHVlIGluIHVwZGF0ZS5ib2R5IG1lYW5zXG4gICAgLy8gd2hhdGV2ZXIgY3VycmVudCBib2R5IGlzIHByZXNlbnQgaXMgYmVpbmcgb3ZlcnJpZGRlbiB3aXRoIGFuIGVtcHR5XG4gICAgLy8gYm9keSwgd2hlcmVhcyBhbiBgdW5kZWZpbmVkYCB2YWx1ZSBpbiB1cGRhdGUuYm9keSBpbXBsaWVzIG5vXG4gICAgLy8gb3ZlcnJpZGUuXG4gICAgY29uc3QgYm9keSA9ICh1cGRhdGUuYm9keSAhPT0gdW5kZWZpbmVkKSA/IHVwZGF0ZS5ib2R5IDogdGhpcy5ib2R5O1xuXG4gICAgLy8gQ2FyZWZ1bGx5IGhhbmRsZSB0aGUgYm9vbGVhbiBvcHRpb25zIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlblxuICAgIC8vIGBmYWxzZWAgYW5kIGB1bmRlZmluZWRgIGluIHRoZSB1cGRhdGUgYXJncy5cbiAgICBjb25zdCB3aXRoQ3JlZGVudGlhbHMgPVxuICAgICAgICAodXBkYXRlLndpdGhDcmVkZW50aWFscyAhPT0gdW5kZWZpbmVkKSA/IHVwZGF0ZS53aXRoQ3JlZGVudGlhbHMgOiB0aGlzLndpdGhDcmVkZW50aWFscztcbiAgICBjb25zdCByZXBvcnRQcm9ncmVzcyA9XG4gICAgICAgICh1cGRhdGUucmVwb3J0UHJvZ3Jlc3MgIT09IHVuZGVmaW5lZCkgPyB1cGRhdGUucmVwb3J0UHJvZ3Jlc3MgOiB0aGlzLnJlcG9ydFByb2dyZXNzO1xuXG4gICAgLy8gSGVhZGVycyBhbmQgcGFyYW1zIG1heSBiZSBhcHBlbmRlZCB0byBpZiBgc2V0SGVhZGVyc2Agb3JcbiAgICAvLyBgc2V0UGFyYW1zYCBhcmUgdXNlZC5cbiAgICBsZXQgaGVhZGVycyA9IHVwZGF0ZS5oZWFkZXJzIHx8IHRoaXMuaGVhZGVycztcbiAgICBsZXQgcGFyYW1zID0gdXBkYXRlLnBhcmFtcyB8fCB0aGlzLnBhcmFtcztcblxuICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGNhbGxlciBoYXMgYXNrZWQgdG8gYWRkIGhlYWRlcnMuXG4gICAgaWYgKHVwZGF0ZS5zZXRIZWFkZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFNldCBldmVyeSByZXF1ZXN0ZWQgaGVhZGVyLlxuICAgICAgaGVhZGVycyA9XG4gICAgICAgICAgT2JqZWN0LmtleXModXBkYXRlLnNldEhlYWRlcnMpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKGhlYWRlcnMsIG5hbWUpID0+IGhlYWRlcnMuc2V0KG5hbWUsIHVwZGF0ZS5zZXRIZWFkZXJzIVtuYW1lXSksIGhlYWRlcnMpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGNhbGxlciBoYXMgYXNrZWQgdG8gc2V0IHBhcmFtcy5cbiAgICBpZiAodXBkYXRlLnNldFBhcmFtcykge1xuICAgICAgLy8gU2V0IGV2ZXJ5IHJlcXVlc3RlZCBwYXJhbS5cbiAgICAgIHBhcmFtcyA9IE9iamVjdC5rZXlzKHVwZGF0ZS5zZXRQYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocGFyYW1zLCBwYXJhbSkgPT4gcGFyYW1zLnNldChwYXJhbSwgdXBkYXRlLnNldFBhcmFtcyFbcGFyYW1dKSwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBGaW5hbGx5LCBjb25zdHJ1Y3QgdGhlIG5ldyBIdHRwUmVxdWVzdCB1c2luZyB0aGUgcGllY2VzIGZyb20gYWJvdmUuXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVxdWVzdChtZXRob2QsIHVybCwgYm9keSwge1xuICAgICAgcGFyYW1zLFxuICAgICAgaGVhZGVycyxcbiAgICAgIHJlcG9ydFByb2dyZXNzLFxuICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgIH0pO1xuICB9XG59XG4iXX0=