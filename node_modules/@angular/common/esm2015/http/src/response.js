/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/response.ts
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
/** @enum {number} */
const HttpEventType = {
    /**
     * The request was sent out over the wire.
     */
    Sent: 0,
    /**
     * An upload progress event was received.
     */
    UploadProgress: 1,
    /**
     * The response status code and headers were received.
     */
    ResponseHeader: 2,
    /**
     * A download progress event was received.
     */
    DownloadProgress: 3,
    /**
     * The full response including the body was received.
     */
    Response: 4,
    /**
     * A custom event from an interceptor or a backend.
     */
    User: 5,
};
export { HttpEventType };
HttpEventType[HttpEventType.Sent] = 'Sent';
HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
HttpEventType[HttpEventType.Response] = 'Response';
HttpEventType[HttpEventType.User] = 'User';
/**
 * Base interface for progress events.
 *
 * \@publicApi
 * @record
 */
export function HttpProgressEvent() { }
if (false) {
    /**
     * Progress event type is either upload or download.
     * @type {?}
     */
    HttpProgressEvent.prototype.type;
    /**
     * Number of bytes uploaded or downloaded.
     * @type {?}
     */
    HttpProgressEvent.prototype.loaded;
    /**
     * Total number of bytes to upload or download. Depending on the request or
     * response, this may not be computable and thus may not be present.
     * @type {?|undefined}
     */
    HttpProgressEvent.prototype.total;
}
/**
 * A download progress event.
 *
 * \@publicApi
 * @record
 */
export function HttpDownloadProgressEvent() { }
if (false) {
    /** @type {?} */
    HttpDownloadProgressEvent.prototype.type;
    /**
     * The partial response body as downloaded so far.
     *
     * Only present if the responseType was `text`.
     * @type {?|undefined}
     */
    HttpDownloadProgressEvent.prototype.partialText;
}
/**
 * An upload progress event.
 *
 * \@publicApi
 * @record
 */
export function HttpUploadProgressEvent() { }
if (false) {
    /** @type {?} */
    HttpUploadProgressEvent.prototype.type;
}
/**
 * An event indicating that the request was sent to the server. Useful
 * when a request may be retried multiple times, to distinguish between
 * retries on the final event stream.
 *
 * \@publicApi
 * @record
 */
export function HttpSentEvent() { }
if (false) {
    /** @type {?} */
    HttpSentEvent.prototype.type;
}
/**
 * A user-defined event.
 *
 * Grouping all custom events under this type ensures they will be handled
 * and forwarded by all implementations of interceptors.
 *
 * \@publicApi
 * @record
 * @template T
 */
export function HttpUserEvent() { }
if (false) {
    /** @type {?} */
    HttpUserEvent.prototype.type;
}
/**
 * An error that represents a failed attempt to JSON.parse text coming back
 * from the server.
 *
 * It bundles the Error object with the actual response body that failed to parse.
 *
 *
 * @record
 */
export function HttpJsonParseError() { }
if (false) {
    /** @type {?} */
    HttpJsonParseError.prototype.error;
    /** @type {?} */
    HttpJsonParseError.prototype.text;
}
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@publicApi
 * @abstract
 */
export class HttpResponseBase {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    constructor(init, defaultStatus = 200, defaultStatusText = 'OK') {
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
}
if (false) {
    /**
     * All response headers.
     * @type {?}
     */
    HttpResponseBase.prototype.headers;
    /**
     * Response status code.
     * @type {?}
     */
    HttpResponseBase.prototype.status;
    /**
     * Textual description of response status code.
     *
     * Do not depend on this.
     * @type {?}
     */
    HttpResponseBase.prototype.statusText;
    /**
     * URL of the resource retrieved, or null if not available.
     * @type {?}
     */
    HttpResponseBase.prototype.url;
    /**
     * Whether the status code falls in the 2xx range.
     * @type {?}
     */
    HttpResponseBase.prototype.ok;
    /**
     * Type of the response, narrowed to either the full response or the header.
     * @type {?}
     */
    HttpResponseBase.prototype.type;
}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@publicApi
 */
export class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.ResponseHeader;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
if (false) {
    /** @type {?} */
    HttpHeaderResponse.prototype.type;
}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@publicApi
 * @template T
 */
export class HttpResponse extends HttpResponseBase {
    /**
     * Construct a new `HttpResponse`.
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.Response;
        this.body = init.body !== undefined ? init.body : null;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
if (false) {
    /**
     * The response body, or `null` if one was not returned.
     * @type {?}
     */
    HttpResponse.prototype.body;
    /** @type {?} */
    HttpResponse.prototype.type;
}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@publicApi
 */
export class HttpErrorResponse extends HttpResponseBase {
    /**
     * @param {?} init
     */
    constructor(init) {
        // Initialize with a default status of 0 / Unknown Error.
        super(init, 0, 'Unknown Error');
        this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (this.status >= 200 && this.status < 300) {
            this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
        }
        else {
            this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
    }
}
if (false) {
    /** @type {?} */
    HttpErrorResponse.prototype.name;
    /** @type {?} */
    HttpErrorResponse.prototype.message;
    /** @type {?} */
    HttpErrorResponse.prototype.error;
    /**
     * Errors are never okay, even when the status code is in the 2xx success range.
     * @type {?}
     */
    HttpErrorResponse.prototype.ok;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vaHR0cC9zcmMvcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFdBQVcsQ0FBQzs7QUFPdEMsTUFBWSxhQUFhO0lBQ3ZCOztPQUVHO0lBQ0gsSUFBSSxHQUFBO0lBRUo7O09BRUc7SUFDSCxjQUFjLEdBQUE7SUFFZDs7T0FFRztJQUNILGNBQWMsR0FBQTtJQUVkOztPQUVHO0lBQ0gsZ0JBQWdCLEdBQUE7SUFFaEI7O09BRUc7SUFDSCxRQUFRLEdBQUE7SUFFUjs7T0FFRztJQUNILElBQUksR0FBQTtFQUNMOzs7Ozs7Ozs7Ozs7OztBQU9ELHVDQWdCQzs7Ozs7O0lBWkMsaUNBQWtFOzs7OztJQUtsRSxtQ0FBZTs7Ozs7O0lBTWYsa0NBQWU7Ozs7Ozs7O0FBUWpCLCtDQVNDOzs7SUFSQyx5Q0FBcUM7Ozs7Ozs7SUFPckMsZ0RBQXFCOzs7Ozs7OztBQVF2Qiw2Q0FFQzs7O0lBREMsdUNBQW1DOzs7Ozs7Ozs7O0FBVXJDLG1DQUVDOzs7SUFEQyw2QkFBeUI7Ozs7Ozs7Ozs7OztBQVczQixtQ0FFQzs7O0lBREMsNkJBQXlCOzs7Ozs7Ozs7OztBQVczQix3Q0FHQzs7O0lBRkMsbUNBQWE7O0lBQ2Isa0NBQWE7Ozs7Ozs7O0FBa0JmLE1BQU0sT0FBZ0IsZ0JBQWdCOzs7Ozs7Ozs7O0lBd0NwQyxZQUNJLElBS0MsRUFDRCxnQkFBd0IsR0FBRyxFQUFFLG9CQUE0QixJQUFJO1FBQy9ELHNFQUFzRTtRQUN0RSxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksV0FBVyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxpQkFBaUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO1FBRTVCLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3BELENBQUM7Q0FDRjs7Ozs7O0lBdERDLG1DQUE4Qjs7Ozs7SUFLOUIsa0NBQXdCOzs7Ozs7O0lBT3hCLHNDQUE0Qjs7Ozs7SUFLNUIsK0JBQTBCOzs7OztJQUsxQiw4QkFBcUI7Ozs7O0lBTXJCLGdDQUFvRTs7Ozs7Ozs7Ozs7QUFxQ3RFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7Ozs7O0lBSXRELFlBQVksT0FLUixFQUFFO1FBQ0osS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR0wsU0FBSSxHQUFpQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBRjNFLENBQUM7Ozs7Ozs7SUFRRCxLQUFLLENBQUMsU0FBdUYsRUFBRTtRQUU3RiwwRUFBMEU7UUFDMUUsNERBQTREO1FBQzVELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztZQUM1QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTztZQUN2QyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2pFLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQ2hELEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUztTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7OztJQWpCQyxrQ0FBMkU7Ozs7Ozs7Ozs7OztBQTRCN0UsTUFBTSxPQUFPLFlBQWdCLFNBQVEsZ0JBQWdCOzs7OztJQVNuRCxZQUFZLE9BTVIsRUFBRTtRQUNKLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUlMLFNBQUksR0FBMkIsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUg3RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFjRCxLQUFLLENBQUMsU0FNRixFQUFFO1FBQ0osT0FBTyxJQUFJLFlBQVksQ0FBTTtZQUMzQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUMzRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTztZQUN2QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNuRSxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUNoRCxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVM7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUEzQ0MsNEJBQXNCOztJQWdCdEIsNEJBQStEOzs7Ozs7Ozs7Ozs7Ozs7QUEwQ2pFLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7Ozs7SUFVckQsWUFBWSxJQU1YO1FBQ0MseURBQXlEO1FBQ3pELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBakJ6QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7Ozs7UUFPM0IsT0FBRSxHQUFHLEtBQUssQ0FBQztRQVlsQixpRkFBaUY7UUFDakYsOEVBQThFO1FBQzlFLHNEQUFzRDtRQUN0RCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsbUNBQW1DLElBQUksQ0FBQyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7U0FDakY7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLElBQUksQ0FBQyxHQUFHLElBQUksZUFBZSxLQUFLLElBQUksQ0FBQyxNQUFNLElBQ25GLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDbEMsQ0FBQztDQUNGOzs7SUE5QkMsaUNBQW9DOztJQUNwQyxvQ0FBeUI7O0lBQ3pCLGtDQUF5Qjs7Ozs7SUFLekIsK0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0h0dHBIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuXG4vKipcbiAqIFR5cGUgZW51bWVyYXRpb24gZm9yIHRoZSBkaWZmZXJlbnQga2luZHMgb2YgYEh0dHBFdmVudGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZW51bSBIdHRwRXZlbnRUeXBlIHtcbiAgLyoqXG4gICAqIFRoZSByZXF1ZXN0IHdhcyBzZW50IG91dCBvdmVyIHRoZSB3aXJlLlxuICAgKi9cbiAgU2VudCxcblxuICAvKipcbiAgICogQW4gdXBsb2FkIHByb2dyZXNzIGV2ZW50IHdhcyByZWNlaXZlZC5cbiAgICovXG4gIFVwbG9hZFByb2dyZXNzLFxuXG4gIC8qKlxuICAgKiBUaGUgcmVzcG9uc2Ugc3RhdHVzIGNvZGUgYW5kIGhlYWRlcnMgd2VyZSByZWNlaXZlZC5cbiAgICovXG4gIFJlc3BvbnNlSGVhZGVyLFxuXG4gIC8qKlxuICAgKiBBIGRvd25sb2FkIHByb2dyZXNzIGV2ZW50IHdhcyByZWNlaXZlZC5cbiAgICovXG4gIERvd25sb2FkUHJvZ3Jlc3MsXG5cbiAgLyoqXG4gICAqIFRoZSBmdWxsIHJlc3BvbnNlIGluY2x1ZGluZyB0aGUgYm9keSB3YXMgcmVjZWl2ZWQuXG4gICAqL1xuICBSZXNwb25zZSxcblxuICAvKipcbiAgICogQSBjdXN0b20gZXZlbnQgZnJvbSBhbiBpbnRlcmNlcHRvciBvciBhIGJhY2tlbmQuXG4gICAqL1xuICBVc2VyLFxufVxuXG4vKipcbiAqIEJhc2UgaW50ZXJmYWNlIGZvciBwcm9ncmVzcyBldmVudHMuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBQcm9ncmVzc0V2ZW50IHtcbiAgLyoqXG4gICAqIFByb2dyZXNzIGV2ZW50IHR5cGUgaXMgZWl0aGVyIHVwbG9hZCBvciBkb3dubG9hZC5cbiAgICovXG4gIHR5cGU6IEh0dHBFdmVudFR5cGUuRG93bmxvYWRQcm9ncmVzc3xIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzO1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgYnl0ZXMgdXBsb2FkZWQgb3IgZG93bmxvYWRlZC5cbiAgICovXG4gIGxvYWRlZDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUb3RhbCBudW1iZXIgb2YgYnl0ZXMgdG8gdXBsb2FkIG9yIGRvd25sb2FkLiBEZXBlbmRpbmcgb24gdGhlIHJlcXVlc3Qgb3JcbiAgICogcmVzcG9uc2UsIHRoaXMgbWF5IG5vdCBiZSBjb21wdXRhYmxlIGFuZCB0aHVzIG1heSBub3QgYmUgcHJlc2VudC5cbiAgICovXG4gIHRvdGFsPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgZG93bmxvYWQgcHJvZ3Jlc3MgZXZlbnQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBEb3dubG9hZFByb2dyZXNzRXZlbnQgZXh0ZW5kcyBIdHRwUHJvZ3Jlc3NFdmVudCB7XG4gIHR5cGU6IEh0dHBFdmVudFR5cGUuRG93bmxvYWRQcm9ncmVzcztcblxuICAvKipcbiAgICogVGhlIHBhcnRpYWwgcmVzcG9uc2UgYm9keSBhcyBkb3dubG9hZGVkIHNvIGZhci5cbiAgICpcbiAgICogT25seSBwcmVzZW50IGlmIHRoZSByZXNwb25zZVR5cGUgd2FzIGB0ZXh0YC5cbiAgICovXG4gIHBhcnRpYWxUZXh0Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEFuIHVwbG9hZCBwcm9ncmVzcyBldmVudC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cFVwbG9hZFByb2dyZXNzRXZlbnQgZXh0ZW5kcyBIdHRwUHJvZ3Jlc3NFdmVudCB7XG4gIHR5cGU6IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3M7XG59XG5cbi8qKlxuICogQW4gZXZlbnQgaW5kaWNhdGluZyB0aGF0IHRoZSByZXF1ZXN0IHdhcyBzZW50IHRvIHRoZSBzZXJ2ZXIuIFVzZWZ1bFxuICogd2hlbiBhIHJlcXVlc3QgbWF5IGJlIHJldHJpZWQgbXVsdGlwbGUgdGltZXMsIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAqIHJldHJpZXMgb24gdGhlIGZpbmFsIGV2ZW50IHN0cmVhbS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cFNlbnRFdmVudCB7XG4gIHR5cGU6IEh0dHBFdmVudFR5cGUuU2VudDtcbn1cblxuLyoqXG4gKiBBIHVzZXItZGVmaW5lZCBldmVudC5cbiAqXG4gKiBHcm91cGluZyBhbGwgY3VzdG9tIGV2ZW50cyB1bmRlciB0aGlzIHR5cGUgZW5zdXJlcyB0aGV5IHdpbGwgYmUgaGFuZGxlZFxuICogYW5kIGZvcndhcmRlZCBieSBhbGwgaW1wbGVtZW50YXRpb25zIG9mIGludGVyY2VwdG9ycy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cFVzZXJFdmVudDxUPiB7XG4gIHR5cGU6IEh0dHBFdmVudFR5cGUuVXNlcjtcbn1cblxuLyoqXG4gKiBBbiBlcnJvciB0aGF0IHJlcHJlc2VudHMgYSBmYWlsZWQgYXR0ZW1wdCB0byBKU09OLnBhcnNlIHRleHQgY29taW5nIGJhY2tcbiAqIGZyb20gdGhlIHNlcnZlci5cbiAqXG4gKiBJdCBidW5kbGVzIHRoZSBFcnJvciBvYmplY3Qgd2l0aCB0aGUgYWN0dWFsIHJlc3BvbnNlIGJvZHkgdGhhdCBmYWlsZWQgdG8gcGFyc2UuXG4gKlxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIdHRwSnNvblBhcnNlRXJyb3Ige1xuICBlcnJvcjogRXJyb3I7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBVbmlvbiB0eXBlIGZvciBhbGwgcG9zc2libGUgZXZlbnRzIG9uIHRoZSByZXNwb25zZSBzdHJlYW0uXG4gKlxuICogVHlwZWQgYWNjb3JkaW5nIHRvIHRoZSBleHBlY3RlZCB0eXBlIG9mIHRoZSByZXNwb25zZS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIEh0dHBFdmVudDxUPiA9XG4gICAgSHR0cFNlbnRFdmVudHxIdHRwSGVhZGVyUmVzcG9uc2V8SHR0cFJlc3BvbnNlPFQ+fEh0dHBQcm9ncmVzc0V2ZW50fEh0dHBVc2VyRXZlbnQ8VD47XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgYm90aCBgSHR0cFJlc3BvbnNlYCBhbmQgYEh0dHBIZWFkZXJSZXNwb25zZWAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHR0cFJlc3BvbnNlQmFzZSB7XG4gIC8qKlxuICAgKiBBbGwgcmVzcG9uc2UgaGVhZGVycy5cbiAgICovXG4gIHJlYWRvbmx5IGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zZSBzdGF0dXMgY29kZS5cbiAgICovXG4gIHJlYWRvbmx5IHN0YXR1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHJlc3BvbnNlIHN0YXR1cyBjb2RlLlxuICAgKlxuICAgKiBEbyBub3QgZGVwZW5kIG9uIHRoaXMuXG4gICAqL1xuICByZWFkb25seSBzdGF0dXNUZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFVSTCBvZiB0aGUgcmVzb3VyY2UgcmV0cmlldmVkLCBvciBudWxsIGlmIG5vdCBhdmFpbGFibGUuXG4gICAqL1xuICByZWFkb25seSB1cmw6IHN0cmluZ3xudWxsO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBzdGF0dXMgY29kZSBmYWxscyBpbiB0aGUgMnh4IHJhbmdlLlxuICAgKi9cbiAgcmVhZG9ubHkgb2s6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIHJlc3BvbnNlLCBuYXJyb3dlZCB0byBlaXRoZXIgdGhlIGZ1bGwgcmVzcG9uc2Ugb3IgdGhlIGhlYWRlci5cbiAgICovXG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICByZWFkb25seSB0eXBlITogSHR0cEV2ZW50VHlwZS5SZXNwb25zZXxIdHRwRXZlbnRUeXBlLlJlc3BvbnNlSGVhZGVyO1xuXG4gIC8qKlxuICAgKiBTdXBlci1jb25zdHJ1Y3RvciBmb3IgYWxsIHJlc3BvbnNlcy5cbiAgICpcbiAgICogVGhlIHNpbmdsZSBwYXJhbWV0ZXIgYWNjZXB0ZWQgaXMgYW4gaW5pdGlhbGl6YXRpb24gaGFzaC4gQW55IHByb3BlcnRpZXNcbiAgICogb2YgdGhlIHJlc3BvbnNlIHBhc3NlZCB0aGVyZSB3aWxsIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgaW5pdDoge1xuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgICAgIHN0YXR1cz86IG51bWJlcixcbiAgICAgICAgc3RhdHVzVGV4dD86IHN0cmluZyxcbiAgICAgICAgdXJsPzogc3RyaW5nLFxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRTdGF0dXM6IG51bWJlciA9IDIwMCwgZGVmYXVsdFN0YXR1c1RleHQ6IHN0cmluZyA9ICdPSycpIHtcbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgdmFsdWVzIHBhc3NlZCwgdXNlIHRoZW0gdG8gaW5pdGlhbGl6ZSB0aGUgcmVzcG9uc2UuXG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgdGhpcy5oZWFkZXJzID0gaW5pdC5oZWFkZXJzIHx8IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIHRoaXMuc3RhdHVzID0gaW5pdC5zdGF0dXMgIT09IHVuZGVmaW5lZCA/IGluaXQuc3RhdHVzIDogZGVmYXVsdFN0YXR1cztcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBpbml0LnN0YXR1c1RleHQgfHwgZGVmYXVsdFN0YXR1c1RleHQ7XG4gICAgdGhpcy51cmwgPSBpbml0LnVybCB8fCBudWxsO1xuXG4gICAgLy8gQ2FjaGUgdGhlIG9rIHZhbHVlIHRvIGF2b2lkIGRlZmluaW5nIGEgZ2V0dGVyLlxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDA7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHBhcnRpYWwgSFRUUCByZXNwb25zZSB3aGljaCBvbmx5IGluY2x1ZGVzIHRoZSBzdGF0dXMgYW5kIGhlYWRlciBkYXRhLFxuICogYnV0IG5vIHJlc3BvbnNlIGJvZHkuXG4gKlxuICogYEh0dHBIZWFkZXJSZXNwb25zZWAgaXMgYSBgSHR0cEV2ZW50YCBhdmFpbGFibGUgb24gdGhlIHJlc3BvbnNlXG4gKiBldmVudCBzdHJlYW0sIG9ubHkgd2hlbiBwcm9ncmVzcyBldmVudHMgYXJlIHJlcXVlc3RlZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBIdHRwSGVhZGVyUmVzcG9uc2UgZXh0ZW5kcyBIdHRwUmVzcG9uc2VCYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgSHR0cEhlYWRlclJlc3BvbnNlYCB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoaW5pdDoge1xuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyxcbiAgICBzdGF0dXM/OiBudW1iZXIsXG4gICAgc3RhdHVzVGV4dD86IHN0cmluZyxcbiAgICB1cmw/OiBzdHJpbmcsXG4gIH0gPSB7fSkge1xuICAgIHN1cGVyKGluaXQpO1xuICB9XG5cbiAgcmVhZG9ubHkgdHlwZTogSHR0cEV2ZW50VHlwZS5SZXNwb25zZUhlYWRlciA9IEh0dHBFdmVudFR5cGUuUmVzcG9uc2VIZWFkZXI7XG5cbiAgLyoqXG4gICAqIENvcHkgdGhpcyBgSHR0cEhlYWRlclJlc3BvbnNlYCwgb3ZlcnJpZGluZyBpdHMgY29udGVudHMgd2l0aCB0aGVcbiAgICogZ2l2ZW4gcGFyYW1ldGVyIGhhc2guXG4gICAqL1xuICBjbG9uZSh1cGRhdGU6IHtoZWFkZXJzPzogSHR0cEhlYWRlcnM7IHN0YXR1cz86IG51bWJlcjsgc3RhdHVzVGV4dD86IHN0cmluZzsgdXJsPzogc3RyaW5nO30gPSB7fSk6XG4gICAgICBIdHRwSGVhZGVyUmVzcG9uc2Uge1xuICAgIC8vIFBlcmZvcm0gYSBzdHJhaWdodGZvcndhcmQgaW5pdGlhbGl6YXRpb24gb2YgdGhlIG5ldyBIdHRwSGVhZGVyUmVzcG9uc2UsXG4gICAgLy8gb3ZlcnJpZGluZyB0aGUgY3VycmVudCBwYXJhbWV0ZXJzIHdpdGggbmV3IG9uZXMgaWYgZ2l2ZW4uXG4gICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVyUmVzcG9uc2Uoe1xuICAgICAgaGVhZGVyczogdXBkYXRlLmhlYWRlcnMgfHwgdGhpcy5oZWFkZXJzLFxuICAgICAgc3RhdHVzOiB1cGRhdGUuc3RhdHVzICE9PSB1bmRlZmluZWQgPyB1cGRhdGUuc3RhdHVzIDogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB1cGRhdGUuc3RhdHVzVGV4dCB8fCB0aGlzLnN0YXR1c1RleHQsXG4gICAgICB1cmw6IHVwZGF0ZS51cmwgfHwgdGhpcy51cmwgfHwgdW5kZWZpbmVkLFxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQSBmdWxsIEhUVFAgcmVzcG9uc2UsIGluY2x1ZGluZyBhIHR5cGVkIHJlc3BvbnNlIGJvZHkgKHdoaWNoIG1heSBiZSBgbnVsbGBcbiAqIGlmIG9uZSB3YXMgbm90IHJldHVybmVkKS5cbiAqXG4gKiBgSHR0cFJlc3BvbnNlYCBpcyBhIGBIdHRwRXZlbnRgIGF2YWlsYWJsZSBvbiB0aGUgcmVzcG9uc2UgZXZlbnRcbiAqIHN0cmVhbS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBIdHRwUmVzcG9uc2U8VD4gZXh0ZW5kcyBIdHRwUmVzcG9uc2VCYXNlIHtcbiAgLyoqXG4gICAqIFRoZSByZXNwb25zZSBib2R5LCBvciBgbnVsbGAgaWYgb25lIHdhcyBub3QgcmV0dXJuZWQuXG4gICAqL1xuICByZWFkb25seSBib2R5OiBUfG51bGw7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIG5ldyBgSHR0cFJlc3BvbnNlYC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGluaXQ6IHtcbiAgICBib2R5PzogVHxudWxsLFxuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcbiAgICBzdGF0dXM/OiBudW1iZXI7XG4gICAgc3RhdHVzVGV4dD86IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG4gIH0gPSB7fSkge1xuICAgIHN1cGVyKGluaXQpO1xuICAgIHRoaXMuYm9keSA9IGluaXQuYm9keSAhPT0gdW5kZWZpbmVkID8gaW5pdC5ib2R5IDogbnVsbDtcbiAgfVxuXG4gIHJlYWRvbmx5IHR5cGU6IEh0dHBFdmVudFR5cGUuUmVzcG9uc2UgPSBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlO1xuXG4gIGNsb25lKCk6IEh0dHBSZXNwb25zZTxUPjtcbiAgY2xvbmUodXBkYXRlOiB7aGVhZGVycz86IEh0dHBIZWFkZXJzOyBzdGF0dXM/OiBudW1iZXI7IHN0YXR1c1RleHQ/OiBzdHJpbmc7IHVybD86IHN0cmluZzt9KTpcbiAgICAgIEh0dHBSZXNwb25zZTxUPjtcbiAgY2xvbmU8Vj4odXBkYXRlOiB7XG4gICAgYm9keT86IFZ8bnVsbCxcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XG4gICAgc3RhdHVzPzogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ/OiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICB9KTogSHR0cFJlc3BvbnNlPFY+O1xuICBjbG9uZSh1cGRhdGU6IHtcbiAgICBib2R5PzogYW55fG51bGw7XG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xuICAgIHN0YXR1cz86IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgfSA9IHt9KTogSHR0cFJlc3BvbnNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlPGFueT4oe1xuICAgICAgYm9keTogKHVwZGF0ZS5ib2R5ICE9PSB1bmRlZmluZWQpID8gdXBkYXRlLmJvZHkgOiB0aGlzLmJvZHksXG4gICAgICBoZWFkZXJzOiB1cGRhdGUuaGVhZGVycyB8fCB0aGlzLmhlYWRlcnMsXG4gICAgICBzdGF0dXM6ICh1cGRhdGUuc3RhdHVzICE9PSB1bmRlZmluZWQpID8gdXBkYXRlLnN0YXR1cyA6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdXBkYXRlLnN0YXR1c1RleHQgfHwgdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgdXJsOiB1cGRhdGUudXJsIHx8IHRoaXMudXJsIHx8IHVuZGVmaW5lZCxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgcmVzcG9uc2UgdGhhdCByZXByZXNlbnRzIGFuIGVycm9yIG9yIGZhaWx1cmUsIGVpdGhlciBmcm9tIGFcbiAqIG5vbi1zdWNjZXNzZnVsIEhUVFAgc3RhdHVzLCBhbiBlcnJvciB3aGlsZSBleGVjdXRpbmcgdGhlIHJlcXVlc3QsXG4gKiBvciBzb21lIG90aGVyIGZhaWx1cmUgd2hpY2ggb2NjdXJyZWQgZHVyaW5nIHRoZSBwYXJzaW5nIG9mIHRoZSByZXNwb25zZS5cbiAqXG4gKiBBbnkgZXJyb3IgcmV0dXJuZWQgb24gdGhlIGBPYnNlcnZhYmxlYCByZXNwb25zZSBzdHJlYW0gd2lsbCBiZVxuICogd3JhcHBlZCBpbiBhbiBgSHR0cEVycm9yUmVzcG9uc2VgIHRvIHByb3ZpZGUgYWRkaXRpb25hbCBjb250ZXh0IGFib3V0XG4gKiB0aGUgc3RhdGUgb2YgdGhlIEhUVFAgbGF5ZXIgd2hlbiB0aGUgZXJyb3Igb2NjdXJyZWQuIFRoZSBlcnJvciBwcm9wZXJ0eVxuICogd2lsbCBjb250YWluIGVpdGhlciBhIHdyYXBwZWQgRXJyb3Igb2JqZWN0IG9yIHRoZSBlcnJvciByZXNwb25zZSByZXR1cm5lZFxuICogZnJvbSB0aGUgc2VydmVyLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIEh0dHBFcnJvclJlc3BvbnNlIGV4dGVuZHMgSHR0cFJlc3BvbnNlQmFzZSBpbXBsZW1lbnRzIEVycm9yIHtcbiAgcmVhZG9ubHkgbmFtZSA9ICdIdHRwRXJyb3JSZXNwb25zZSc7XG4gIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZztcbiAgcmVhZG9ubHkgZXJyb3I6IGFueXxudWxsO1xuXG4gIC8qKlxuICAgKiBFcnJvcnMgYXJlIG5ldmVyIG9rYXksIGV2ZW4gd2hlbiB0aGUgc3RhdHVzIGNvZGUgaXMgaW4gdGhlIDJ4eCBzdWNjZXNzIHJhbmdlLlxuICAgKi9cbiAgcmVhZG9ubHkgb2sgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihpbml0OiB7XG4gICAgZXJyb3I/OiBhbnk7XG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xuICAgIHN0YXR1cz86IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgfSkge1xuICAgIC8vIEluaXRpYWxpemUgd2l0aCBhIGRlZmF1bHQgc3RhdHVzIG9mIDAgLyBVbmtub3duIEVycm9yLlxuICAgIHN1cGVyKGluaXQsIDAsICdVbmtub3duIEVycm9yJyk7XG5cbiAgICAvLyBJZiB0aGUgcmVzcG9uc2Ugd2FzIHN1Y2Nlc3NmdWwsIHRoZW4gdGhpcyB3YXMgYSBwYXJzZSBlcnJvci4gT3RoZXJ3aXNlLCBpdCB3YXNcbiAgICAvLyBhIHByb3RvY29sLWxldmVsIGZhaWx1cmUgb2Ygc29tZSBzb3J0LiBFaXRoZXIgdGhlIHJlcXVlc3QgZmFpbGVkIGluIHRyYW5zaXRcbiAgICAvLyBvciB0aGUgc2VydmVyIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCBzdGF0dXMgY29kZS5cbiAgICBpZiAodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBgSHR0cCBmYWlsdXJlIGR1cmluZyBwYXJzaW5nIGZvciAke2luaXQudXJsIHx8ICcodW5rbm93biB1cmwpJ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBgSHR0cCBmYWlsdXJlIHJlc3BvbnNlIGZvciAke2luaXQudXJsIHx8ICcodW5rbm93biB1cmwpJ306ICR7aW5pdC5zdGF0dXN9ICR7XG4gICAgICAgICAgaW5pdC5zdGF0dXNUZXh0fWA7XG4gICAgfVxuICAgIHRoaXMuZXJyb3IgPSBpbml0LmVycm9yIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==