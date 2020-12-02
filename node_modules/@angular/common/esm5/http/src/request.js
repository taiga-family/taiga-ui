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
 * Determine whether the given HTTP method may include a body.
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
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
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
 * @publicApi
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, url, third, fourth) {
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
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
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
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    HttpRequest.prototype.serializeBody = function () {
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
        return this.body.toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
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
    };
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var method = update.method || this.method;
        var url = update.url || this.url;
        var responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var headers = update.headers || this.headers;
        var params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, update.setHeaders[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, update.setParams[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params,
            headers: headers,
            reportProgress: reportProgress,
            responseType: responseType,
            withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());
export { HttpRequest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9odHRwL3NyYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQWVwQzs7R0FFRztBQUNILFNBQVMsYUFBYSxDQUFDLE1BQWM7SUFDbkMsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssS0FBSyxDQUFDO1FBQ1gsS0FBSyxNQUFNLENBQUM7UUFDWixLQUFLLFNBQVMsQ0FBQztRQUNmLEtBQUssT0FBTztZQUNWLE9BQU8sS0FBSyxDQUFDO1FBQ2Y7WUFDRSxPQUFPLElBQUksQ0FBQztLQUNmO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLGFBQWEsQ0FBQyxLQUFVO0lBQy9CLE9BQU8sT0FBTyxXQUFXLEtBQUssV0FBVyxJQUFJLEtBQUssWUFBWSxXQUFXLENBQUM7QUFDNUUsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLE1BQU0sQ0FBQyxLQUFVO0lBQ3hCLE9BQU8sT0FBTyxJQUFJLEtBQUssV0FBVyxJQUFJLEtBQUssWUFBWSxJQUFJLENBQUM7QUFDOUQsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLFVBQVUsQ0FBQyxLQUFVO0lBQzVCLE9BQU8sT0FBTyxRQUFRLEtBQUssV0FBVyxJQUFJLEtBQUssWUFBWSxRQUFRLENBQUM7QUFDdEUsQ0FBQztBQUVEOzs7Ozs7Ozs7R0FTRztBQUNIO0lBMEVFLHFCQUNJLE1BQWMsRUFBVyxHQUFXLEVBQUUsS0FNaEMsRUFDTixNQU1DO1FBYndCLFFBQUcsR0FBSCxHQUFHLENBQVE7UUExRXhDOzs7Ozs7V0FNRztRQUNNLFNB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TUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2lCQUN4QixNQUFNLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUEzQyxDQUEyQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlGO1FBRUQsc0VBQXNFO1FBQ3RFLE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7WUFDeEMsTUFBTSxRQUFBO1lBQ04sT0FBTyxTQUFBO1lBQ1AsY0FBYyxnQkFBQTtZQUNkLFlBQVksY0FBQTtZQUNaLGVBQWUsaUJBQUE7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXhURCxJQXdUQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtIdHRwSGVhZGVyc30gZnJvbSAnLi9oZWFkZXJzJztcbmltcG9ydCB7SHR0cFBhcmFtc30gZnJvbSAnLi9wYXJhbXMnO1xuXG4vKipcbiAqIENvbnN0cnVjdGlvbiBpbnRlcmZhY2UgZm9yIGBIdHRwUmVxdWVzdGBzLlxuICpcbiAqIEFsbCB2YWx1ZXMgYXJlIG9wdGlvbmFsIGFuZCB3aWxsIG92ZXJyaWRlIGRlZmF1bHQgdmFsdWVzIGlmIHByb3ZpZGVkLlxuICovXG5pbnRlcmZhY2UgSHR0cFJlcXVlc3RJbml0IHtcbiAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gIHBhcmFtcz86IEh0dHBQYXJhbXM7XG4gIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcid8J2Jsb2InfCdqc29uJ3wndGV4dCc7XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIEhUVFAgbWV0aG9kIG1heSBpbmNsdWRlIGEgYm9keS5cbiAqL1xuZnVuY3Rpb24gbWlnaHRIYXZlQm9keShtZXRob2Q6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgY2FzZSAnR0VUJzpcbiAgICBjYXNlICdIRUFEJzpcbiAgICBjYXNlICdPUFRJT05TJzpcbiAgICBjYXNlICdKU09OUCc6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogU2FmZWx5IGFzc2VydCB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlci5cbiAqXG4gKiBJbiBzb21lIGV4ZWN1dGlvbiBlbnZpcm9ubWVudHMgQXJyYXlCdWZmZXIgaXMgbm90IGRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsdWU6IGFueSk6IHZhbHVlIGlzIEFycmF5QnVmZmVyIHtcbiAgcmV0dXJuIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn1cblxuLyoqXG4gKiBTYWZlbHkgYXNzZXJ0IHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGlzIGEgQmxvYi5cbiAqXG4gKiBJbiBzb21lIGV4ZWN1dGlvbiBlbnZpcm9ubWVudHMgQmxvYiBpcyBub3QgZGVmaW5lZC5cbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBCbG9iIHtcbiAgcmV0dXJuIHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEJsb2I7XG59XG5cbi8qKlxuICogU2FmZWx5IGFzc2VydCB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIEZvcm1EYXRhIGluc3RhbmNlLlxuICpcbiAqIEluIHNvbWUgZXhlY3V0aW9uIGVudmlyb25tZW50cyBGb3JtRGF0YSBpcyBub3QgZGVmaW5lZC5cbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWx1ZTogYW55KTogdmFsdWUgaXMgRm9ybURhdGEge1xuICByZXR1cm4gdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhO1xufVxuXG4vKipcbiAqIEFuIG91dGdvaW5nIEhUVFAgcmVxdWVzdCB3aXRoIGFuIG9wdGlvbmFsIHR5cGVkIGJvZHkuXG4gKlxuICogYEh0dHBSZXF1ZXN0YCByZXByZXNlbnRzIGFuIG91dGdvaW5nIHJlcXVlc3QsIGluY2x1ZGluZyBVUkwsIG1ldGhvZCxcbiAqIGhlYWRlcnMsIGJvZHksIGFuZCBvdGhlciByZXF1ZXN0IGNvbmZpZ3VyYXRpb24gb3B0aW9ucy4gSW5zdGFuY2VzIHNob3VsZCBiZVxuICogYXNzdW1lZCB0byBiZSBpbW11dGFibGUuIFRvIG1vZGlmeSBhIGBIdHRwUmVxdWVzdGAsIHRoZSBgY2xvbmVgXG4gKiBtZXRob2Qgc2hvdWxkIGJlIHVzZWQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgSHR0cFJlcXVlc3Q8VD4ge1xuICAvKipcbiAgICogVGhlIHJlcXVlc3QgYm9keSwgb3IgYG51bGxgIGlmIG9uZSBpc24ndCBzZXQuXG4gICAqXG4gICAqIEJvZGllcyBhcmUgbm90IGVuZm9yY2VkIHRvIGJlIGltbXV0YWJsZSwgYXMgdGhleSBjYW4gaW5jbHVkZSBhIHJlZmVyZW5jZSB0byBhbnlcbiAgICogdXNlci1kZWZpbmVkIGRhdGEgdHlwZS4gSG93ZXZlciwgaW50ZXJjZXB0b3JzIHNob3VsZCB0YWtlIGNhcmUgdG8gcHJlc2VydmVcbiAgICogaWRlbXBvdGVuY2UgYnkgdHJlYXRpbmcgdGhlbSBhcyBzdWNoLlxuICAgKi9cbiAgcmVhZG9ubHkgYm9keTogVHxudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogT3V0Z29pbmcgaGVhZGVycyBmb3IgdGhpcyByZXF1ZXN0LlxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHJlYWRvbmx5IGhlYWRlcnMhOiBIdHRwSGVhZGVycztcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIHJlcXVlc3Qgc2hvdWxkIGJlIG1hZGUgaW4gYSB3YXkgdGhhdCBleHBvc2VzIHByb2dyZXNzIGV2ZW50cy5cbiAgICpcbiAgICogUHJvZ3Jlc3MgZXZlbnRzIGFyZSBleHBlbnNpdmUgKGNoYW5nZSBkZXRlY3Rpb24gcnVucyBvbiBlYWNoIGV2ZW50KSBhbmQgc29cbiAgICogdGhleSBzaG91bGQgb25seSBiZSByZXF1ZXN0ZWQgaWYgdGhlIGNvbnN1bWVyIGludGVuZHMgdG8gbW9uaXRvciB0aGVtLlxuICAgKi9cbiAgcmVhZG9ubHkgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIHJlcXVlc3Qgc2hvdWxkIGJlIHNlbnQgd2l0aCBvdXRnb2luZyBjcmVkZW50aWFscyAoY29va2llcykuXG4gICAqL1xuICByZWFkb25seSB3aXRoQ3JlZGVudGlhbHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGV4cGVjdGVkIHJlc3BvbnNlIHR5cGUgb2YgdGhlIHNlcnZlci5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VkIHRvIHBhcnNlIHRoZSByZXNwb25zZSBhcHByb3ByaWF0ZWx5IGJlZm9yZSByZXR1cm5pbmcgaXQgdG9cbiAgICogdGhlIHJlcXVlc3RlZS5cbiAgICovXG4gIHJlYWRvbmx5IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJ3wnYmxvYid8J2pzb24nfCd0ZXh0JyA9ICdqc29uJztcblxuICAvKipcbiAgICogVGhlIG91dGdvaW5nIEhUVFAgcmVxdWVzdCBtZXRob2QuXG4gICAqL1xuICByZWFkb25seSBtZXRob2Q6IHN0cmluZztcblxuICAvKipcbiAgICogT3V0Z29pbmcgVVJMIHBhcmFtZXRlcnMuXG4gICAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcmVhZG9ubHkgcGFyYW1zITogSHR0cFBhcmFtcztcblxuICAvKipcbiAgICogVGhlIG91dGdvaW5nIFVSTCB3aXRoIGFsbCBVUkwgcGFyYW1ldGVycyBzZXQuXG4gICAqL1xuICByZWFkb25seSB1cmxXaXRoUGFyYW1zOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobWV0aG9kOiAnREVMRVRFJ3wnR0VUJ3wnSEVBRCd8J0pTT05QJ3wnT1BUSU9OUycsIHVybDogc3RyaW5nLCBpbml0Pzoge1xuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyxcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sXG4gICAgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInfCdibG9iJ3wnanNvbid8J3RleHQnLFxuICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW4sXG4gIH0pO1xuICBjb25zdHJ1Y3RvcihtZXRob2Q6ICdQT1NUJ3wnUFVUJ3wnUEFUQ0gnLCB1cmw6IHN0cmluZywgYm9keTogVHxudWxsLCBpbml0Pzoge1xuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyxcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sXG4gICAgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInfCdibG9iJ3wnanNvbid8J3RleHQnLFxuICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW4sXG4gIH0pO1xuICBjb25zdHJ1Y3RvcihtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIGJvZHk6IFR8bnVsbCwgaW5pdD86IHtcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLFxuICAgIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJ3wnYmxvYid8J2pzb24nfCd0ZXh0JyxcbiAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuLFxuICB9KTtcbiAgY29uc3RydWN0b3IoXG4gICAgICBtZXRob2Q6IHN0cmluZywgcmVhZG9ubHkgdXJsOiBzdHJpbmcsIHRoaXJkPzogVHx7XG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyxcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLFxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInfCdibG9iJ3wnanNvbid8J3RleHQnLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuLFxuICAgICAgfXxudWxsLFxuICAgICAgZm91cnRoPzoge1xuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbixcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJ3wnYmxvYid8J2pzb24nfCd0ZXh0JyxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbixcbiAgICAgIH0pIHtcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIC8vIE5leHQsIG5lZWQgdG8gZmlndXJlIG91dCB3aGljaCBhcmd1bWVudCBob2xkcyB0aGUgSHR0cFJlcXVlc3RJbml0XG4gICAgLy8gb3B0aW9ucywgaWYgYW55LlxuICAgIGxldCBvcHRpb25zOiBIdHRwUmVxdWVzdEluaXR8dW5kZWZpbmVkO1xuXG4gICAgLy8gQ2hlY2sgd2hldGhlciBhIGJvZHkgYXJndW1lbnQgaXMgZXhwZWN0ZWQuIFRoZSBvbmx5IHZhbGlkIHdheSB0byBvbWl0XG4gICAgLy8gdGhlIGJvZHkgYXJndW1lbnQgaXMgdG8gdXNlIGEga25vd24gbm8tYm9keSBtZXRob2QgbGlrZSBHRVQuXG4gICAgaWYgKG1pZ2h0SGF2ZUJvZHkodGhpcy5tZXRob2QpIHx8ICEhZm91cnRoKSB7XG4gICAgICAvLyBCb2R5IGlzIHRoZSB0aGlyZCBhcmd1bWVudCwgb3B0aW9ucyBhcmUgdGhlIGZvdXJ0aC5cbiAgICAgIHRoaXMuYm9keSA9ICh0aGlyZCAhPT0gdW5kZWZpbmVkKSA/IHRoaXJkIGFzIFQgOiBudWxsO1xuICAgICAgb3B0aW9ucyA9IGZvdXJ0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gYm9keSByZXF1aXJlZCwgb3B0aW9ucyBhcmUgdGhlIHRoaXJkIGFyZ3VtZW50LiBUaGUgYm9keSBzdGF5cyBudWxsLlxuICAgICAgb3B0aW9ucyA9IHRoaXJkIGFzIEh0dHBSZXF1ZXN0SW5pdDtcbiAgICB9XG5cbiAgICAvLyBJZiBvcHRpb25zIGhhdmUgYmVlbiBwYXNzZWQsIGludGVycHJldCB0aGVtLlxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAvLyBOb3JtYWxpemUgcmVwb3J0UHJvZ3Jlc3MgYW5kIHdpdGhDcmVkZW50aWFscy5cbiAgICAgIHRoaXMucmVwb3J0UHJvZ3Jlc3MgPSAhIW9wdGlvbnMucmVwb3J0UHJvZ3Jlc3M7XG4gICAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG5cbiAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgcmVzcG9uc2UgdHlwZSBvZiAnanNvbicgaWYgb25lIGlzIHByb3ZpZGVkLlxuICAgICAgaWYgKCEhb3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgLy8gT3ZlcnJpZGUgaGVhZGVycyBpZiB0aGV5J3JlIHByb3ZpZGVkLlxuICAgICAgaWYgKCEhb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcbiAgICAgIH1cblxuICAgICAgaWYgKCEhb3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBvcHRpb25zLnBhcmFtcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBubyBoZWFkZXJzIGhhdmUgYmVlbiBwYXNzZWQgaW4sIGNvbnN0cnVjdCBhIG5ldyBIdHRwSGVhZGVycyBpbnN0YW5jZS5cbiAgICBpZiAoIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gcGFyYW1ldGVycyBoYXZlIGJlZW4gcGFzc2VkIGluLCBjb25zdHJ1Y3QgYSBuZXcgSHR0cFVybEVuY29kZWRQYXJhbXMgaW5zdGFuY2UuXG4gICAgaWYgKCF0aGlzLnBhcmFtcykge1xuICAgICAgdGhpcy5wYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgICAgdGhpcy51cmxXaXRoUGFyYW1zID0gdXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBFbmNvZGUgdGhlIHBhcmFtZXRlcnMgdG8gYSBzdHJpbmcgaW4gcHJlcGFyYXRpb24gZm9yIGluY2x1c2lvbiBpbiB0aGUgVVJMLlxuICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5wYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIE5vIHBhcmFtZXRlcnMsIHRoZSB2aXNpYmxlIFVSTCBpcyBqdXN0IHRoZSBVUkwgZ2l2ZW4gYXQgY3JlYXRpb24gdGltZS5cbiAgICAgICAgdGhpcy51cmxXaXRoUGFyYW1zID0gdXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRG9lcyB0aGUgVVJMIGFscmVhZHkgaGF2ZSBxdWVyeSBwYXJhbWV0ZXJzPyBMb29rIGZvciAnPycuXG4gICAgICAgIGNvbnN0IHFJZHggPSB1cmwuaW5kZXhPZignPycpO1xuICAgICAgICAvLyBUaGVyZSBhcmUgMyBjYXNlcyB0byBoYW5kbGU6XG4gICAgICAgIC8vIDEpIE5vIGV4aXN0aW5nIHBhcmFtZXRlcnMgLT4gYXBwZW5kICc/JyBmb2xsb3dlZCBieSBwYXJhbXMuXG4gICAgICAgIC8vIDIpICc/JyBleGlzdHMgYW5kIGlzIGZvbGxvd2VkIGJ5IGV4aXN0aW5nIHF1ZXJ5IHN0cmluZyAtPlxuICAgICAgICAvLyAgICBhcHBlbmQgJyYnIGZvbGxvd2VkIGJ5IHBhcmFtcy5cbiAgICAgICAgLy8gMykgJz8nIGV4aXN0cyBhdCB0aGUgZW5kIG9mIHRoZSB1cmwgLT4gYXBwZW5kIHBhcmFtcyBkaXJlY3RseS5cbiAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgYW1vdW50cyB0byBkZXRlcm1pbmluZyB0aGUgY2hhcmFjdGVyLCBpZiBhbnksIHdpdGhcbiAgICAgICAgLy8gd2hpY2ggdG8gam9pbiB0aGUgVVJMIGFuZCBwYXJhbWV0ZXJzLlxuICAgICAgICBjb25zdCBzZXA6IHN0cmluZyA9IHFJZHggPT09IC0xID8gJz8nIDogKHFJZHggPCB1cmwubGVuZ3RoIC0gMSA/ICcmJyA6ICcnKTtcbiAgICAgICAgdGhpcy51cmxXaXRoUGFyYW1zID0gdXJsICsgc2VwICsgcGFyYW1zO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdGhlIGZyZWUtZm9ybSBib2R5IGludG8gYSBzZXJpYWxpemVkIGZvcm1hdCBzdWl0YWJsZSBmb3JcbiAgICogdHJhbnNtaXNzaW9uIHRvIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXJpYWxpemVCb2R5KCk6IEFycmF5QnVmZmVyfEJsb2J8Rm9ybURhdGF8c3RyaW5nfG51bGwge1xuICAgIC8vIElmIG5vIGJvZHkgaXMgcHJlc2VudCwgbm8gbmVlZCB0byBzZXJpYWxpemUgaXQuXG4gICAgaWYgKHRoaXMuYm9keSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGJvZHkgaXMgYWxyZWFkeSBpbiBhIHNlcmlhbGl6ZWQgZm9ybS4gSWYgc28sXG4gICAgLy8gaXQgY2FuIGp1c3QgYmUgcmV0dXJuZWQgZGlyZWN0bHkuXG4gICAgaWYgKGlzQXJyYXlCdWZmZXIodGhpcy5ib2R5KSB8fCBpc0Jsb2IodGhpcy5ib2R5KSB8fCBpc0Zvcm1EYXRhKHRoaXMuYm9keSkgfHxcbiAgICAgICAgdHlwZW9mIHRoaXMuYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgfVxuICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGJvZHkgaXMgYW4gaW5zdGFuY2Ugb2YgSHR0cFVybEVuY29kZWRQYXJhbXMuXG4gICAgaWYgKHRoaXMuYm9keSBpbnN0YW5jZW9mIEh0dHBQYXJhbXMpIHtcbiAgICAgIHJldHVybiB0aGlzLmJvZHkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgYm9keSBpcyBhbiBvYmplY3Qgb3IgYXJyYXksIGFuZCBzZXJpYWxpemUgd2l0aCBKU09OIGlmIHNvLlxuICAgIGlmICh0eXBlb2YgdGhpcy5ib2R5ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdGhpcy5ib2R5ID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLmJvZHkpKSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5ib2R5KTtcbiAgICB9XG4gICAgLy8gRmFsbCBiYWNrIG9uIHRvU3RyaW5nKCkgZm9yIGV2ZXJ5dGhpbmcgZWxzZS5cbiAgICByZXR1cm4gKHRoaXMuYm9keSBhcyBhbnkpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogRXhhbWluZSB0aGUgYm9keSBhbmQgYXR0ZW1wdCB0byBpbmZlciBhbiBhcHByb3ByaWF0ZSBNSU1FIHR5cGVcbiAgICogZm9yIGl0LlxuICAgKlxuICAgKiBJZiBubyBzdWNoIHR5cGUgY2FuIGJlIGluZmVycmVkLCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiBgbnVsbGAuXG4gICAqL1xuICBkZXRlY3RDb250ZW50VHlwZUhlYWRlcigpOiBzdHJpbmd8bnVsbCB7XG4gICAgLy8gQW4gZW1wdHkgYm9keSBoYXMgbm8gY29udGVudCB0eXBlLlxuICAgIGlmICh0aGlzLmJvZHkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBGb3JtRGF0YSBib2RpZXMgcmVseSBvbiB0aGUgYnJvd3NlcidzIGNvbnRlbnQgdHlwZSBhc3NpZ25tZW50LlxuICAgIGlmIChpc0Zvcm1EYXRhKHRoaXMuYm9keSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBCbG9icyB1c3VhbGx5IGhhdmUgdGhlaXIgb3duIGNvbnRlbnQgdHlwZS4gSWYgaXQgZG9lc24ndCwgdGhlblxuICAgIC8vIG5vIHR5cGUgY2FuIGJlIGluZmVycmVkLlxuICAgIGlmIChpc0Jsb2IodGhpcy5ib2R5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuYm9keS50eXBlIHx8IG51bGw7XG4gICAgfVxuICAgIC8vIEFycmF5IGJ1ZmZlcnMgaGF2ZSB1bmtub3duIGNvbnRlbnRzIGFuZCB0aHVzIG5vIHR5cGUgY2FuIGJlIGluZmVycmVkLlxuICAgIGlmIChpc0FycmF5QnVmZmVyKHRoaXMuYm9keSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBUZWNobmljYWxseSwgc3RyaW5ncyBjb3VsZCBiZSBhIGZvcm0gb2YgSlNPTiBkYXRhLCBidXQgaXQncyBzYWZlIGVub3VnaFxuICAgIC8vIHRvIGFzc3VtZSB0aGV5J3JlIHBsYWluIHN0cmluZ3MuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJ3RleHQvcGxhaW4nO1xuICAgIH1cbiAgICAvLyBgSHR0cFVybEVuY29kZWRQYXJhbXNgIGhhcyBpdHMgb3duIGNvbnRlbnQtdHlwZS5cbiAgICBpZiAodGhpcy5ib2R5IGluc3RhbmNlb2YgSHR0cFBhcmFtcykge1xuICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCc7XG4gICAgfVxuICAgIC8vIEFycmF5cywgb2JqZWN0cywgYW5kIG51bWJlcnMgd2lsbCBiZSBlbmNvZGVkIGFzIEpTT04uXG4gICAgaWYgKHR5cGVvZiB0aGlzLmJvZHkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB0aGlzLmJvZHkgPT09ICdudW1iZXInIHx8XG4gICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5ib2R5KSkge1xuICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICB9XG4gICAgLy8gTm8gdHlwZSBjb3VsZCBiZSBpbmZlcnJlZC5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNsb25lKCk6IEh0dHBSZXF1ZXN0PFQ+O1xuICBjbG9uZSh1cGRhdGU6IHtcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLFxuICAgIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJ3wnYmxvYid8J2pzb24nfCd0ZXh0JyxcbiAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuLFxuICAgIGJvZHk/OiBUfG51bGwsXG4gICAgbWV0aG9kPzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZyxcbiAgICBzZXRIZWFkZXJzPzoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd8c3RyaW5nW119LFxuICAgIHNldFBhcmFtcz86IHtbcGFyYW06IHN0cmluZ106IHN0cmluZ30sXG4gIH0pOiBIdHRwUmVxdWVzdDxUPjtcbiAgY2xvbmU8Vj4odXBkYXRlOiB7XG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzLFxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbixcbiAgICBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcid8J2Jsb2InfCdqc29uJ3wndGV4dCcsXG4gICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbixcbiAgICBib2R5PzogVnxudWxsLFxuICAgIG1ldGhvZD86IHN0cmluZyxcbiAgICB1cmw/OiBzdHJpbmcsXG4gICAgc2V0SGVhZGVycz86IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfHN0cmluZ1tdfSxcbiAgICBzZXRQYXJhbXM/OiB7W3BhcmFtOiBzdHJpbmddOiBzdHJpbmd9LFxuICB9KTogSHR0cFJlcXVlc3Q8Vj47XG4gIGNsb25lKHVwZGF0ZToge1xuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyxcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sXG4gICAgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInfCdibG9iJ3wnanNvbid8J3RleHQnLFxuICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW4sXG4gICAgYm9keT86IGFueXxudWxsLFxuICAgIG1ldGhvZD86IHN0cmluZyxcbiAgICB1cmw/OiBzdHJpbmcsXG4gICAgc2V0SGVhZGVycz86IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfHN0cmluZ1tdfSxcbiAgICBzZXRQYXJhbXM/OiB7W3BhcmFtOiBzdHJpbmddOiBzdHJpbmd9O1xuICB9ID0ge30pOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICAvLyBGb3IgbWV0aG9kLCB1cmwsIGFuZCByZXNwb25zZVR5cGUsIHRha2UgdGhlIGN1cnJlbnQgdmFsdWUgdW5sZXNzXG4gICAgLy8gaXQgaXMgb3ZlcnJpZGRlbiBpbiB0aGUgdXBkYXRlIGhhc2guXG4gICAgY29uc3QgbWV0aG9kID0gdXBkYXRlLm1ldGhvZCB8fCB0aGlzLm1ldGhvZDtcbiAgICBjb25zdCB1cmwgPSB1cGRhdGUudXJsIHx8IHRoaXMudXJsO1xuICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHVwZGF0ZS5yZXNwb25zZVR5cGUgfHwgdGhpcy5yZXNwb25zZVR5cGU7XG5cbiAgICAvLyBUaGUgYm9keSBpcyBzb21ld2hhdCBzcGVjaWFsIC0gYSBgbnVsbGAgdmFsdWUgaW4gdXBkYXRlLmJvZHkgbWVhbnNcbiAgICAvLyB3aGF0ZXZlciBjdXJyZW50IGJvZHkgaXMgcHJlc2VudCBpcyBiZWluZyBvdmVycmlkZGVuIHdpdGggYW4gZW1wdHlcbiAgICAvLyBib2R5LCB3aGVyZWFzIGFuIGB1bmRlZmluZWRgIHZhbHVlIGluIHVwZGF0ZS5ib2R5IGltcGxpZXMgbm9cbiAgICAvLyBvdmVycmlkZS5cbiAgICBjb25zdCBib2R5ID0gKHVwZGF0ZS5ib2R5ICE9PSB1bmRlZmluZWQpID8gdXBkYXRlLmJvZHkgOiB0aGlzLmJvZHk7XG5cbiAgICAvLyBDYXJlZnVsbHkgaGFuZGxlIHRoZSBib29sZWFuIG9wdGlvbnMgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuXG4gICAgLy8gYGZhbHNlYCBhbmQgYHVuZGVmaW5lZGAgaW4gdGhlIHVwZGF0ZSBhcmdzLlxuICAgIGNvbnN0IHdpdGhDcmVkZW50aWFscyA9XG4gICAgICAgICh1cGRhdGUud2l0aENyZWRlbnRpYWxzICE9PSB1bmRlZmluZWQpID8gdXBkYXRlLndpdGhDcmVkZW50aWFscyA6IHRoaXMud2l0aENyZWRlbnRpYWxzO1xuICAgIGNvbnN0IHJlcG9ydFByb2dyZXNzID1cbiAgICAgICAgKHVwZGF0ZS5yZXBvcnRQcm9ncmVzcyAhPT0gdW5kZWZpbmVkKSA/IHVwZGF0ZS5yZXBvcnRQcm9ncmVzcyA6IHRoaXMucmVwb3J0UHJvZ3Jlc3M7XG5cbiAgICAvLyBIZWFkZXJzIGFuZCBwYXJhbXMgbWF5IGJlIGFwcGVuZGVkIHRvIGlmIGBzZXRIZWFkZXJzYCBvclxuICAgIC8vIGBzZXRQYXJhbXNgIGFyZSB1c2VkLlxuICAgIGxldCBoZWFkZXJzID0gdXBkYXRlLmhlYWRlcnMgfHwgdGhpcy5oZWFkZXJzO1xuICAgIGxldCBwYXJhbXMgPSB1cGRhdGUucGFyYW1zIHx8IHRoaXMucGFyYW1zO1xuXG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgY2FsbGVyIGhhcyBhc2tlZCB0byBhZGQgaGVhZGVycy5cbiAgICBpZiAodXBkYXRlLnNldEhlYWRlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU2V0IGV2ZXJ5IHJlcXVlc3RlZCBoZWFkZXIuXG4gICAgICBoZWFkZXJzID1cbiAgICAgICAgICBPYmplY3Qua2V5cyh1cGRhdGUuc2V0SGVhZGVycylcbiAgICAgICAgICAgICAgLnJlZHVjZSgoaGVhZGVycywgbmFtZSkgPT4gaGVhZGVycy5zZXQobmFtZSwgdXBkYXRlLnNldEhlYWRlcnMhW25hbWVdKSwgaGVhZGVycyk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgY2FsbGVyIGhhcyBhc2tlZCB0byBzZXQgcGFyYW1zLlxuICAgIGlmICh1cGRhdGUuc2V0UGFyYW1zKSB7XG4gICAgICAvLyBTZXQgZXZlcnkgcmVxdWVzdGVkIHBhcmFtLlxuICAgICAgcGFyYW1zID0gT2JqZWN0LmtleXModXBkYXRlLnNldFBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAucmVkdWNlKChwYXJhbXMsIHBhcmFtKSA9PiBwYXJhbXMuc2V0KHBhcmFtLCB1cGRhdGUuc2V0UGFyYW1zIVtwYXJhbV0pLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEZpbmFsbHksIGNvbnN0cnVjdCB0aGUgbmV3IEh0dHBSZXF1ZXN0IHVzaW5nIHRoZSBwaWVjZXMgZnJvbSBhYm92ZS5cbiAgICByZXR1cm4gbmV3IEh0dHBSZXF1ZXN0KG1ldGhvZCwgdXJsLCBib2R5LCB7XG4gICAgICBwYXJhbXMsXG4gICAgICBoZWFkZXJzLFxuICAgICAgcmVwb3J0UHJvZ3Jlc3MsXG4gICAgICByZXNwb25zZVR5cGUsXG4gICAgICB3aXRoQ3JlZGVudGlhbHMsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==