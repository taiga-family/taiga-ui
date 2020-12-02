/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { HttpHeaders } from './headers';
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
export var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
var HttpResponseBase = /** @class */ (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
export { HttpResponseBase };
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
var HttpHeaderResponse = /** @class */ (function (_super) {
    __extends(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
export { HttpHeaderResponse };
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
var HttpResponse = /** @class */ (function (_super) {
    __extends(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body !== undefined ? init.body : null;
        return _this;
    }
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
export { HttpResponse };
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
 * @publicApi
 */
var HttpErrorResponse = /** @class */ (function (_super) {
    __extends(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message = "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));
export { HttpErrorResponse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vaHR0cC9zcmMvcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFdEM7Ozs7R0FJRztBQUNILE1BQU0sQ0FBTixJQUFZLGFBOEJYO0FBOUJELFdBQVksYUFBYTtJQUN2Qjs7T0FFRztJQUNILGlEQUFJLENBQUE7SUFFSjs7T0FFRztJQUNILHFFQUFjLENBQUE7SUFFZDs7T0FFRztJQUNILHFFQUFjLENBQUE7SUFFZDs7T0FFRztJQUNILHlFQUFnQixDQUFBO0lBRWhCOztPQUVHO0lBQ0gseURBQVEsQ0FBQTtJQUVSOztPQUVHO0lBQ0gsaURBQUksQ0FBQTtBQUNOLENBQUMsRUE5QlcsYUFBYSxLQUFiLGFBQWEsUUE4QnhCO0FBZ0dEOzs7O0dBSUc7QUFDSDtJQWtDRTs7Ozs7T0FLRztJQUNILDBCQUNJLElBS0MsRUFDRCxhQUEyQixFQUFFLGlCQUFnQztRQUE3RCw4QkFBQSxFQUFBLG1CQUEyQjtRQUFFLGtDQUFBLEVBQUEsd0JBQWdDO1FBQy9ELHNFQUFzRTtRQUN0RSxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksV0FBVyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxpQkFBaUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxD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LEtBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQzNDLEtBQUksQ0FBQyxPQUFPLEdBQUcsc0NBQW1DLElBQUksQ0FBQyxHQUFHLElBQUksZUFBZSxDQUFFLENBQUM7U0FDakY7YUFBTTtZQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcsZ0NBQTZCLElBQUksQ0FBQyxHQUFHLElBQUksZUFBZSxXQUFLLElBQUksQ0FBQyxNQUFNLFNBQ25GLElBQUksQ0FBQyxVQUFZLENBQUM7U0FDdkI7UUFDRCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDOztJQUNsQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBL0JELENBQXVDLGdCQUFnQixHQStCdEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SHR0cEhlYWRlcnN9IGZyb20gJy4vaGVhZGVycyc7XG5cbi8qKlxuICogVHlwZSBlbnVtZXJhdGlvbiBmb3IgdGhlIGRpZmZlcmVudCBraW5kcyBvZiBgSHR0cEV2ZW50YC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBlbnVtIEh0dHBFdmVudFR5cGUge1xuICAvKipcbiAgICogVGhlIHJlcXVlc3Qgd2FzIHNlbnQgb3V0IG92ZXIgdGhlIHdpcmUuXG4gICAqL1xuICBTZW50LFxuXG4gIC8qKlxuICAgKiBBbiB1cGxvYWQgcHJvZ3Jlc3MgZXZlbnQgd2FzIHJlY2VpdmVkLlxuICAgKi9cbiAgVXBsb2FkUHJvZ3Jlc3MsXG5cbiAgLyoqXG4gICAqIFRoZSByZXNwb25zZSBzdGF0dXMgY29kZSBhbmQgaGVhZGVycyB3ZXJlIHJlY2VpdmVkLlxuICAgKi9cbiAgUmVzcG9uc2VIZWFkZXIsXG5cbiAgLyoqXG4gICAqIEEgZG93bmxvYWQgcHJvZ3Jlc3MgZXZlbnQgd2FzIHJlY2VpdmVkLlxuICAgKi9cbiAgRG93bmxvYWRQcm9ncmVzcyxcblxuICAvKipcbiAgICogVGhlIGZ1bGwgcmVzcG9uc2UgaW5jbHVkaW5nIHRoZSBib2R5IHdhcyByZWNlaXZlZC5cbiAgICovXG4gIFJlc3BvbnNlLFxuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSBldmVudCBmcm9tIGFuIGludGVyY2VwdG9yIG9yIGEgYmFja2VuZC5cbiAgICovXG4gIFVzZXIsXG59XG5cbi8qKlxuICogQmFzZSBpbnRlcmZhY2UgZm9yIHByb2dyZXNzIGV2ZW50cy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cFByb2dyZXNzRXZlbnQge1xuICAvKipcbiAgICogUHJvZ3Jlc3MgZXZlbnQgdHlwZSBpcyBlaXRoZXIgdXBsb2FkIG9yIGRvd25sb2FkLlxuICAgKi9cbiAgdHlwZTogSHR0cEV2ZW50VHlwZS5Eb3dubG9hZFByb2dyZXNzfEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3M7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBieXRlcyB1cGxvYWRlZCBvciBkb3dubG9hZGVkLlxuICAgKi9cbiAgbG9hZGVkOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRvdGFsIG51bWJlciBvZiBieXRlcyB0byB1cGxvYWQgb3IgZG93bmxvYWQuIERlcGVuZGluZyBvbiB0aGUgcmVxdWVzdCBvclxuICAgKiByZXNwb25zZSwgdGhpcyBtYXkgbm90IGJlIGNvbXB1dGFibGUgYW5kIHRodXMgbWF5IG5vdCBiZSBwcmVzZW50LlxuICAgKi9cbiAgdG90YWw/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQSBkb3dubG9hZCBwcm9ncmVzcyBldmVudC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cERvd25sb2FkUHJvZ3Jlc3NFdmVudCBleHRlbmRzIEh0dHBQcm9ncmVzc0V2ZW50IHtcbiAgdHlwZTogSHR0cEV2ZW50VHlwZS5Eb3dubG9hZFByb2dyZXNzO1xuXG4gIC8qKlxuICAgKiBUaGUgcGFydGlhbCByZXNwb25zZSBib2R5IGFzIGRvd25sb2FkZWQgc28gZmFyLlxuICAgKlxuICAgKiBPbmx5IHByZXNlbnQgaWYgdGhlIHJlc3BvbnNlVHlwZSB3YXMgYHRleHRgLlxuICAgKi9cbiAgcGFydGlhbFRleHQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQW4gdXBsb2FkIHByb2dyZXNzIGV2ZW50LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIdHRwVXBsb2FkUHJvZ3Jlc3NFdmVudCBleHRlbmRzIEh0dHBQcm9ncmVzc0V2ZW50IHtcbiAgdHlwZTogSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcztcbn1cblxuLyoqXG4gKiBBbiBldmVudCBpbmRpY2F0aW5nIHRoYXQgdGhlIHJlcXVlc3Qgd2FzIHNlbnQgdG8gdGhlIHNlcnZlci4gVXNlZnVsXG4gKiB3aGVuIGEgcmVxdWVzdCBtYXkgYmUgcmV0cmllZCBtdWx0aXBsZSB0aW1lcywgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICogcmV0cmllcyBvbiB0aGUgZmluYWwgZXZlbnQgc3RyZWFtLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIdHRwU2VudEV2ZW50IHtcbiAgdHlwZTogSHR0cEV2ZW50VHlwZS5TZW50O1xufVxuXG4vKipcbiAqIEEgdXNlci1kZWZpbmVkIGV2ZW50LlxuICpcbiAqIEdyb3VwaW5nIGFsbCBjdXN0b20gZXZlbnRzIHVuZGVyIHRoaXMgdHlwZSBlbnN1cmVzIHRoZXkgd2lsbCBiZSBoYW5kbGVkXG4gKiBhbmQgZm9yd2FyZGVkIGJ5IGFsbCBpbXBsZW1lbnRhdGlvbnMgb2YgaW50ZXJjZXB0b3JzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIdHRwVXNlckV2ZW50PFQ+IHtcbiAgdHlwZTogSHR0cEV2ZW50VHlwZS5Vc2VyO1xufVxuXG4vKipcbiAqIEFuIGVycm9yIHRoYXQgcmVwcmVzZW50cyBhIGZhaWxlZCBhdHRlbXB0IHRvIEpTT04ucGFyc2UgdGV4dCBjb21pbmcgYmFja1xuICogZnJvbSB0aGUgc2VydmVyLlxuICpcbiAqIEl0IGJ1bmRsZXMgdGhlIEVycm9yIG9iamVjdCB3aXRoIHRoZSBhY3R1YWwgcmVzcG9uc2UgYm9keSB0aGF0IGZhaWxlZCB0byBwYXJzZS5cbiAqXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBKc29uUGFyc2VFcnJvciB7XG4gIGVycm9yOiBFcnJvcjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIFVuaW9uIHR5cGUgZm9yIGFsbCBwb3NzaWJsZSBldmVudHMgb24gdGhlIHJlc3BvbnNlIHN0cmVhbS5cbiAqXG4gKiBUeXBlZCBhY2NvcmRpbmcgdG8gdGhlIGV4cGVjdGVkIHR5cGUgb2YgdGhlIHJlc3BvbnNlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgSHR0cEV2ZW50PFQ+ID1cbiAgICBIdHRwU2VudEV2ZW50fEh0dHBIZWFkZXJSZXNwb25zZXxIdHRwUmVzcG9uc2U8VD58SHR0cFByb2dyZXNzRXZlbnR8SHR0cFVzZXJFdmVudDxUPjtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBib3RoIGBIdHRwUmVzcG9uc2VgIGFuZCBgSHR0cEhlYWRlclJlc3BvbnNlYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIdHRwUmVzcG9uc2VCYXNlIHtcbiAgLyoqXG4gICAqIEFsbCByZXNwb25zZSBoZWFkZXJzLlxuICAgKi9cbiAgcmVhZG9ubHkgaGVhZGVyczogSHR0cEhlYWRlcnM7XG5cbiAgLyoqXG4gICAqIFJlc3BvbnNlIHN0YXR1cyBjb2RlLlxuICAgKi9cbiAgcmVhZG9ubHkgc3RhdHVzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRleHR1YWwgZGVzY3JpcHRpb24gb2YgcmVzcG9uc2Ugc3RhdHVzIGNvZGUuXG4gICAqXG4gICAqIERvIG5vdCBkZXBlbmQgb24gdGhpcy5cbiAgICovXG4gIHJlYWRvbmx5IHN0YXR1c1RleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogVVJMIG9mIHRoZSByZXNvdXJjZSByZXRyaWV2ZWQsIG9yIG51bGwgaWYgbm90IGF2YWlsYWJsZS5cbiAgICovXG4gIHJlYWRvbmx5IHVybDogc3RyaW5nfG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHN0YXR1cyBjb2RlIGZhbGxzIGluIHRoZSAyeHggcmFuZ2UuXG4gICAqL1xuICByZWFkb25seSBvazogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgcmVzcG9uc2UsIG5hcnJvd2VkIHRvIGVpdGhlciB0aGUgZnVsbCByZXNwb25zZSBvciB0aGUgaGVhZGVyLlxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHJlYWRvbmx5IHR5cGUhOiBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlfEh0dHBFdmVudFR5cGUuUmVzcG9uc2VIZWFkZXI7XG5cbiAgLyoqXG4gICAqIFN1cGVyLWNvbnN0cnVjdG9yIGZvciBhbGwgcmVzcG9uc2VzLlxuICAgKlxuICAgKiBUaGUgc2luZ2xlIHBhcmFtZXRlciBhY2NlcHRlZCBpcyBhbiBpbml0aWFsaXphdGlvbiBoYXNoLiBBbnkgcHJvcGVydGllc1xuICAgKiBvZiB0aGUgcmVzcG9uc2UgcGFzc2VkIHRoZXJlIHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICBpbml0OiB7XG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyxcbiAgICAgICAgc3RhdHVzPzogbnVtYmVyLFxuICAgICAgICBzdGF0dXNUZXh0Pzogc3RyaW5nLFxuICAgICAgICB1cmw/OiBzdHJpbmcsXG4gICAgICB9LFxuICAgICAgZGVmYXVsdFN0YXR1czogbnVtYmVyID0gMjAwLCBkZWZhdWx0U3RhdHVzVGV4dDogc3RyaW5nID0gJ09LJykge1xuICAgIC8vIElmIHRoZSBoYXNoIGhhcyB2YWx1ZXMgcGFzc2VkLCB1c2UgdGhlbSB0byBpbml0aWFsaXplIHRoZSByZXNwb25zZS5cbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBkZWZhdWx0IHZhbHVlcy5cbiAgICB0aGlzLmhlYWRlcnMgPSBpbml0LmhlYWRlcnMgfHwgbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgdGhpcy5zdGF0dXMgPSBpbml0LnN0YXR1cyAhPT0gdW5kZWZpbmVkID8gaW5pdC5zdGF0dXMgOiBkZWZhdWx0U3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9IGluaXQuc3RhdHVzVGV4dCB8fCBkZWZhdWx0U3RhdHVzVGV4dDtcbiAgICB0aGlzLnVybCA9IGluaXQudXJsIHx8IG51bGw7XG5cbiAgICAvLyBDYWNoZSB0aGUgb2sgdmFsdWUgdG8gYXZvaWQgZGVmaW5pbmcgYSBnZXR0ZXIuXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMDtcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFydGlhbCBIVFRQIHJlc3BvbnNlIHdoaWNoIG9ubHkgaW5jbHVkZXMgdGhlIHN0YXR1cyBhbmQgaGVhZGVyIGRhdGEsXG4gKiBidXQgbm8gcmVzcG9uc2UgYm9keS5cbiAqXG4gKiBgSHR0cEhlYWRlclJlc3BvbnNlYCBpcyBhIGBIdHRwRXZlbnRgIGF2YWlsYWJsZSBvbiB0aGUgcmVzcG9uc2VcbiAqIGV2ZW50IHN0cmVhbSwgb25seSB3aGVuIHByb2dyZXNzIGV2ZW50cyBhcmUgcmVxdWVzdGVkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIEh0dHBIZWFkZXJSZXNwb25zZSBleHRlbmRzIEh0dHBSZXNwb25zZUJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBIdHRwSGVhZGVyUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihpbml0OiB7XG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzLFxuICAgIHN0YXR1cz86IG51bWJlcixcbiAgICBzdGF0dXNUZXh0Pzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZyxcbiAgfSA9IHt9KSB7XG4gICAgc3VwZXIoaW5pdCk7XG4gIH1cblxuICByZWFkb25seSB0eXBlOiBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlSGVhZGVyID0gSHR0cEV2ZW50VHlwZS5SZXNwb25zZUhlYWRlcjtcblxuICAvKipcbiAgICogQ29weSB0aGlzIGBIdHRwSGVhZGVyUmVzcG9uc2VgLCBvdmVycmlkaW5nIGl0cyBjb250ZW50cyB3aXRoIHRoZVxuICAgKiBnaXZlbiBwYXJhbWV0ZXIgaGFzaC5cbiAgICovXG4gIGNsb25lKHVwZGF0ZToge2hlYWRlcnM/OiBIdHRwSGVhZGVyczsgc3RhdHVzPzogbnVtYmVyOyBzdGF0dXNUZXh0Pzogc3RyaW5nOyB1cmw/OiBzdHJpbmc7fSA9IHt9KTpcbiAgICAgIEh0dHBIZWFkZXJSZXNwb25zZSB7XG4gICAgLy8gUGVyZm9ybSBhIHN0cmFpZ2h0Zm9yd2FyZCBpbml0aWFsaXphdGlvbiBvZiB0aGUgbmV3IEh0dHBIZWFkZXJSZXNwb25zZSxcbiAgICAvLyBvdmVycmlkaW5nIHRoZSBjdXJyZW50IHBhcmFtZXRlcnMgd2l0aCBuZXcgb25lcyBpZiBnaXZlbi5cbiAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJSZXNwb25zZSh7XG4gICAgICBoZWFkZXJzOiB1cGRhdGUuaGVhZGVycyB8fCB0aGlzLmhlYWRlcnMsXG4gICAgICBzdGF0dXM6IHVwZGF0ZS5zdGF0dXMgIT09IHVuZGVmaW5lZCA/IHVwZGF0ZS5zdGF0dXMgOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHVwZGF0ZS5zdGF0dXNUZXh0IHx8IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIHVybDogdXBkYXRlLnVybCB8fCB0aGlzLnVybCB8fCB1bmRlZmluZWQsXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGZ1bGwgSFRUUCByZXNwb25zZSwgaW5jbHVkaW5nIGEgdHlwZWQgcmVzcG9uc2UgYm9keSAod2hpY2ggbWF5IGJlIGBudWxsYFxuICogaWYgb25lIHdhcyBub3QgcmV0dXJuZWQpLlxuICpcbiAqIGBIdHRwUmVzcG9uc2VgIGlzIGEgYEh0dHBFdmVudGAgYXZhaWxhYmxlIG9uIHRoZSByZXNwb25zZSBldmVudFxuICogc3RyZWFtLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIEh0dHBSZXNwb25zZTxUPiBleHRlbmRzIEh0dHBSZXNwb25zZUJhc2Uge1xuICAvKipcbiAgICogVGhlIHJlc3BvbnNlIGJvZHksIG9yIGBudWxsYCBpZiBvbmUgd2FzIG5vdCByZXR1cm5lZC5cbiAgICovXG4gIHJlYWRvbmx5IGJvZHk6IFR8bnVsbDtcblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgbmV3IGBIdHRwUmVzcG9uc2VgLlxuICAgKi9cbiAgY29uc3RydWN0b3IoaW5pdDoge1xuICAgIGJvZHk/OiBUfG51bGwsXG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xuICAgIHN0YXR1cz86IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgfSA9IHt9KSB7XG4gICAgc3VwZXIoaW5pdCk7XG4gICAgdGhpcy5ib2R5ID0gaW5pdC5ib2R5ICE9PSB1bmRlZmluZWQgPyBpbml0LmJvZHkgOiBudWxsO1xuICB9XG5cbiAgcmVhZG9ubHkgdHlwZTogSHR0cEV2ZW50VHlwZS5SZXNwb25zZSA9IEh0dHBFdmVudFR5cGUuUmVzcG9uc2U7XG5cbiAgY2xvbmUoKTogSHR0cFJlc3BvbnNlPFQ+O1xuICBjbG9uZSh1cGRhdGU6IHtoZWFkZXJzPzogSHR0cEhlYWRlcnM7IHN0YXR1cz86IG51bWJlcjsgc3RhdHVzVGV4dD86IHN0cmluZzsgdXJsPzogc3RyaW5nO30pOlxuICAgICAgSHR0cFJlc3BvbnNlPFQ+O1xuICBjbG9uZTxWPih1cGRhdGU6IHtcbiAgICBib2R5PzogVnxudWxsLFxuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcbiAgICBzdGF0dXM/OiBudW1iZXI7XG4gICAgc3RhdHVzVGV4dD86IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG4gIH0pOiBIdHRwUmVzcG9uc2U8Vj47XG4gIGNsb25lKHVwZGF0ZToge1xuICAgIGJvZHk/OiBhbnl8bnVsbDtcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XG4gICAgc3RhdHVzPzogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ/OiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICB9ID0ge30pOiBIdHRwUmVzcG9uc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2U8YW55Pih7XG4gICAgICBib2R5OiAodXBkYXRlLmJvZHkgIT09IHVuZGVmaW5lZCkgPyB1cGRhdGUuYm9keSA6IHRoaXMuYm9keSxcbiAgICAgIGhlYWRlcnM6IHVwZGF0ZS5oZWFkZXJzIHx8IHRoaXMuaGVhZGVycyxcbiAgICAgIHN0YXR1czogKHVwZGF0ZS5zdGF0dXMgIT09IHVuZGVmaW5lZCkgPyB1cGRhdGUuc3RhdHVzIDogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB1cGRhdGUuc3RhdHVzVGV4dCB8fCB0aGlzLnN0YXR1c1RleHQsXG4gICAgICB1cmw6IHVwZGF0ZS51cmwgfHwgdGhpcy51cmwgfHwgdW5kZWZpbmVkLFxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQSByZXNwb25zZSB0aGF0IHJlcHJlc2VudHMgYW4gZXJyb3Igb3IgZmFpbHVyZSwgZWl0aGVyIGZyb20gYVxuICogbm9uLXN1Y2Nlc3NmdWwgSFRUUCBzdGF0dXMsIGFuIGVycm9yIHdoaWxlIGV4ZWN1dGluZyB0aGUgcmVxdWVzdCxcbiAqIG9yIHNvbWUgb3RoZXIgZmFpbHVyZSB3aGljaCBvY2N1cnJlZCBkdXJpbmcgdGhlIHBhcnNpbmcgb2YgdGhlIHJlc3BvbnNlLlxuICpcbiAqIEFueSBlcnJvciByZXR1cm5lZCBvbiB0aGUgYE9ic2VydmFibGVgIHJlc3BvbnNlIHN0cmVhbSB3aWxsIGJlXG4gKiB3cmFwcGVkIGluIGFuIGBIdHRwRXJyb3JSZXNwb25zZWAgdG8gcHJvdmlkZSBhZGRpdGlvbmFsIGNvbnRleHQgYWJvdXRcbiAqIHRoZSBzdGF0ZSBvZiB0aGUgSFRUUCBsYXllciB3aGVuIHRoZSBlcnJvciBvY2N1cnJlZC4gVGhlIGVycm9yIHByb3BlcnR5XG4gKiB3aWxsIGNvbnRhaW4gZWl0aGVyIGEgd3JhcHBlZCBFcnJvciBvYmplY3Qgb3IgdGhlIGVycm9yIHJlc3BvbnNlIHJldHVybmVkXG4gKiBmcm9tIHRoZSBzZXJ2ZXIuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yUmVzcG9uc2UgZXh0ZW5kcyBIdHRwUmVzcG9uc2VCYXNlIGltcGxlbWVudHMgRXJyb3Ige1xuICByZWFkb25seSBuYW1lID0gJ0h0dHBFcnJvclJlc3BvbnNlJztcbiAgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nO1xuICByZWFkb25seSBlcnJvcjogYW55fG51bGw7XG5cbiAgLyoqXG4gICAqIEVycm9ycyBhcmUgbmV2ZXIgb2theSwgZXZlbiB3aGVuIHRoZSBzdGF0dXMgY29kZSBpcyBpbiB0aGUgMnh4IHN1Y2Nlc3MgcmFuZ2UuXG4gICAqL1xuICByZWFkb25seSBvayA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGluaXQ6IHtcbiAgICBlcnJvcj86IGFueTtcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XG4gICAgc3RhdHVzPzogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ/OiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICB9KSB7XG4gICAgLy8gSW5pdGlhbGl6ZSB3aXRoIGEgZGVmYXVsdCBzdGF0dXMgb2YgMCAvIFVua25vd24gRXJyb3IuXG4gICAgc3VwZXIoaW5pdCwgMCwgJ1Vua25vd24gRXJyb3InKTtcblxuICAgIC8vIElmIHRoZSByZXNwb25zZSB3YXMgc3VjY2Vzc2Z1bCwgdGhlbiB0aGlzIHdhcyBhIHBhcnNlIGVycm9yLiBPdGhlcndpc2UsIGl0IHdhc1xuICAgIC8vIGEgcHJvdG9jb2wtbGV2ZWwgZmFpbHVyZSBvZiBzb21lIHNvcnQuIEVpdGhlciB0aGUgcmVxdWVzdCBmYWlsZWQgaW4gdHJhbnNpdFxuICAgIC8vIG9yIHRoZSBzZXJ2ZXIgcmV0dXJuZWQgYW4gdW5zdWNjZXNzZnVsIHN0YXR1cyBjb2RlLlxuICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IGBIdHRwIGZhaWx1cmUgZHVyaW5nIHBhcnNpbmcgZm9yICR7aW5pdC51cmwgfHwgJyh1bmtub3duIHVybCknfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IGBIdHRwIGZhaWx1cmUgcmVzcG9uc2UgZm9yICR7aW5pdC51cmwgfHwgJyh1bmtub3duIHVybCknfTogJHtpbml0LnN0YXR1c30gJHtcbiAgICAgICAgICBpbml0LnN0YXR1c1RleHR9YDtcbiAgICB9XG4gICAgdGhpcy5lcnJvciA9IGluaXQuZXJyb3IgfHwgbnVsbDtcbiAgfVxufVxuIl19