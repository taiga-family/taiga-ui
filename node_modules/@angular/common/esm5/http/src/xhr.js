/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from './headers';
import { HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse } from './response';
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
var XhrFactory = /** @class */ (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
export { XhrFactory };
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () {
        return (new XMLHttpRequest());
    };
    BrowserXhr = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());
export { BrowserXhr };
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */
var HttpXhrBackend = /** @class */ (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new Observable(function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var status = xhr.status === 1223 ? 204 : xhr.status;
                var statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    var originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error: error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var onError = function (error) {
                var url = partialFromXhr().url;
                var res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [XhrFactory])
    ], HttpXhrBackend);
    return HttpXhrBackend;
}());
export { HttpXhrBackend };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGhyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2h0dHAvc3JjL3hoci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBRzFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFdEMsT0FBTyxFQUE0QixpQkFBaUIsRUFBYSxhQUFhLEVBQUUsa0JBQWtCLEVBQXNCLFlBQVksRUFBMEIsTUFBTSxZQUFZLENBQUM7QUFFakwsSUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDO0FBRW5DOzs7R0FHRztBQUNILFNBQVMsY0FBYyxDQUFDLEdBQVE7SUFDOUIsSUFBSSxhQUFhLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQUU7UUFDM0MsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDO0tBQ3hCO0lBQ0QsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUMsRUFBRTtRQUN4RCxPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUMvQztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSDtJQUFBO0lBRUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBRUQ7OztHQUdHO0FBRUg7SUFDRTtJQUFlLENBQUM7SUFDaEIsMEJBQUssR0FBTDtRQUNFLE9BQVksQ0FBQyxJQUFJLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUpVLFVBQVU7UUFEdEIsVUFBVSxFQUFFOztPQUNBLFVBQVUsQ0FLdEI7SUFBRCxpQkFBQztDQUFBLEFBTEQsSUFL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SUFrUkM7U0FsUlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge0h0dHBCYWNrZW5kfSBmcm9tICcuL2JhY2tlbmQnO1xuaW1wb3J0IHtIdHRwSGVhZGVyc30gZnJvbSAnLi9oZWFkZXJzJztcbmltcG9ydCB7SHR0cFJlcXVlc3R9IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQge0h0dHBEb3dubG9hZFByb2dyZXNzRXZlbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJSZXNwb25zZSwgSHR0cEpzb25QYXJzZUVycm9yLCBIdHRwUmVzcG9uc2UsIEh0dHBVcGxvYWRQcm9ncmVzc0V2ZW50fSBmcm9tICcuL3Jlc3BvbnNlJztcblxuY29uc3QgWFNTSV9QUkVGSVggPSAvXlxcKVxcXVxcfScsP1xcbi87XG5cbi8qKlxuICogRGV0ZXJtaW5lIGFuIGFwcHJvcHJpYXRlIFVSTCBmb3IgdGhlIHJlc3BvbnNlLCBieSBjaGVja2luZyBlaXRoZXJcbiAqIFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlVVJMIG9yIHRoZSBYLVJlcXVlc3QtVVJMIGhlYWRlci5cbiAqL1xuZnVuY3Rpb24gZ2V0UmVzcG9uc2VVcmwoeGhyOiBhbnkpOiBzdHJpbmd8bnVsbCB7XG4gIGlmICgncmVzcG9uc2VVUkwnIGluIHhociAmJiB4aHIucmVzcG9uc2VVUkwpIHtcbiAgICByZXR1cm4geGhyLnJlc3BvbnNlVVJMO1xuICB9XG4gIGlmICgvXlgtUmVxdWVzdC1VUkw6L20udGVzdCh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKSB7XG4gICAgcmV0dXJuIHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1SZXF1ZXN0LVVSTCcpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgdGhlIGBYTUxIdHRwUmVxdWVzdGAgY29uc3RydWN0b3IuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgWGhyRmFjdG9yeSB7XG4gIGFic3RyYWN0IGJ1aWxkKCk6IFhNTEh0dHBSZXF1ZXN0O1xufVxuXG4vKipcbiAqIEEgZmFjdG9yeSBmb3IgYEh0dHBYaHJCYWNrZW5kYCB0aGF0IHVzZXMgdGhlIGBYTUxIdHRwUmVxdWVzdGAgYnJvd3NlciBBUEkuXG4gKlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3NlclhociBpbXBsZW1lbnRzIFhockZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGJ1aWxkKCk6IGFueSB7XG4gICAgcmV0dXJuIDxhbnk+KG5ldyBYTUxIdHRwUmVxdWVzdCgpKTtcbiAgfVxufVxuXG4vKipcbiAqIFRyYWNrcyBhIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlciB0aGF0IGRvZXMgbm90IHlldCBoYXZlIGEgYm9keS5cbiAqL1xuaW50ZXJmYWNlIFBhcnRpYWxSZXNwb25zZSB7XG4gIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICBzdGF0dXM6IG51bWJlcjtcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn1cblxuLyoqXG4gKiBVc2VzIGBYTUxIdHRwUmVxdWVzdGAgdG8gc2VuZCByZXF1ZXN0cyB0byBhIGJhY2tlbmQgc2VydmVyLlxuICogQHNlZSBgSHR0cEhhbmRsZXJgXG4gKiBAc2VlIGBKc29ucENsaWVudEJhY2tlbmRgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cFhockJhY2tlbmQgaW1wbGVtZW50cyBIdHRwQmFja2VuZCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgeGhyRmFjdG9yeTogWGhyRmFjdG9yeSkge31cblxuICAvKipcbiAgICogUHJvY2Vzc2VzIGEgcmVxdWVzdCBhbmQgcmV0dXJucyBhIHN0cmVhbSBvZiByZXNwb25zZSBldmVudHMuXG4gICAqIEBwYXJhbSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSBldmVudHMuXG4gICAqL1xuICBoYW5kbGUocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIC8vIFF1aWNrIGNoZWNrIHRvIGdpdmUgYSBiZXR0ZXIgZXJyb3IgbWVzc2FnZSB3aGVuIGEgdXNlciBhdHRlbXB0cyB0byB1c2VcbiAgICAvLyBIdHRwQ2xpZW50Lmpzb25wKCkgd2l0aG91dCBpbnN0YWxsaW5nIHRoZSBKc29ucENsaWVudE1vZHVsZVxuICAgIGlmIChyZXEubWV0aG9kID09PSAnSlNPTlAnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGVtcHRlZCB0byBjb25zdHJ1Y3QgSnNvbnAgcmVxdWVzdCB3aXRob3V0IEpzb25wQ2xpZW50TW9kdWxlIGluc3RhbGxlZC5gKTtcbiAgICB9XG5cbiAgICAvLyBFdmVyeXRoaW5nIGhhcHBlbnMgb24gT2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24uXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XG4gICAgICAvLyBTdGFydCBieSBzZXR0aW5nIHVwIHRoZSBYSFIgb2JqZWN0IHdpdGggcmVxdWVzdCBtZXRob2QsIFVSTCwgYW5kIHdpdGhDcmVkZW50aWFscyBmbGFnLlxuICAgICAgY29uc3QgeGhyID0gdGhpcy54aHJGYWN0b3J5LmJ1aWxkKCk7XG4gICAgICB4aHIub3BlbihyZXEubWV0aG9kLCByZXEudXJsV2l0aFBhcmFtcyk7XG4gICAgICBpZiAoISFyZXEud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgYWxsIHRoZSByZXF1ZXN0ZWQgaGVhZGVycy5cbiAgICAgIHJlcS5oZWFkZXJzLmZvckVhY2goKG5hbWUsIHZhbHVlcykgPT4geGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWVzLmpvaW4oJywnKSkpO1xuXG4gICAgICAvLyBBZGQgYW4gQWNjZXB0IGhlYWRlciBpZiBvbmUgaXNuJ3QgcHJlc2VudCBhbHJlYWR5LlxuICAgICAgaWYgKCFyZXEuaGVhZGVycy5oYXMoJ0FjY2VwdCcpKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEF1dG8tZGV0ZWN0IHRoZSBDb250ZW50LVR5cGUgaGVhZGVyIGlmIG9uZSBpc24ndCBwcmVzZW50IGFscmVhZHkuXG4gICAgICBpZiAoIXJlcS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykpIHtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWRUeXBlID0gcmVxLmRldGVjdENvbnRlbnRUeXBlSGVhZGVyKCk7XG4gICAgICAgIC8vIFNvbWV0aW1lcyBDb250ZW50LVR5cGUgZGV0ZWN0aW9uIGZhaWxzLlxuICAgICAgICBpZiAoZGV0ZWN0ZWRUeXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIGRldGVjdGVkVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHRoZSByZXNwb25zZVR5cGUgaWYgb25lIHdhcyByZXF1ZXN0ZWQuXG4gICAgICBpZiAocmVxLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICBjb25zdCByZXNwb25zZVR5cGUgPSByZXEucmVzcG9uc2VUeXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gSlNPTiByZXNwb25zZXMgbmVlZCB0byBiZSBwcm9jZXNzZWQgYXMgdGV4dC4gVGhpcyBpcyBiZWNhdXNlIGlmIHRoZSBzZXJ2ZXJcbiAgICAgICAgLy8gcmV0dXJucyBhbiBYU1NJLXByZWZpeGVkIEpTT04gcmVzcG9uc2UsIHRoZSBicm93c2VyIHdpbGwgZmFpbCB0byBwYXJzZSBpdCxcbiAgICAgICAgLy8geGhyLnJlc3BvbnNlIHdpbGwgYmUgbnVsbCwgYW5kIHhoci5yZXNwb25zZVRleHQgY2Fubm90IGJlIGFjY2Vzc2VkIHRvXG4gICAgICAgIC8vIHJldHJpZXZlIHRoZSBwcmVmaXhlZCBKU09OIGRhdGEgaW4gb3JkZXIgdG8gc3RyaXAgdGhlIHByZWZpeC4gVGh1cywgYWxsIEpTT05cbiAgICAgICAgLy8gaXMgcGFyc2VkIGJ5IGZpcnN0IHJlcXVlc3RpbmcgdGV4dCBhbmQgdGhlbiBhcHBseWluZyBKU09OLnBhcnNlLlxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gKChyZXNwb25zZVR5cGUgIT09ICdqc29uJykgPyByZXNwb25zZVR5cGUgOiAndGV4dCcpIGFzIGFueTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VyaWFsaXplIHRoZSByZXF1ZXN0IGJvZHkgaWYgb25lIGlzIHByZXNlbnQuIElmIG5vdCwgdGhpcyB3aWxsIGJlIHNldCB0byBudWxsLlxuICAgICAgY29uc3QgcmVxQm9keSA9IHJlcS5zZXJpYWxpemVCb2R5KCk7XG5cbiAgICAgIC8vIElmIHByb2dyZXNzIGV2ZW50cyBhcmUgZW5hYmxlZCwgcmVzcG9uc2UgaGVhZGVycyB3aWxsIGJlIGRlbGl2ZXJlZFxuICAgICAgLy8gaW4gdHdvIGV2ZW50cyAtIHRoZSBIdHRwSGVhZGVyUmVzcG9uc2UgZXZlbnQgYW5kIHRoZSBmdWxsIEh0dHBSZXNwb25zZVxuICAgICAgLy8gZXZlbnQuIEhvd2V2ZXIsIHNpbmNlIHJlc3BvbnNlIGhlYWRlcnMgZG9uJ3QgY2hhbmdlIGluIGJldHdlZW4gdGhlc2VcbiAgICAgIC8vIHR3byBldmVudHMsIGl0IGRvZXNuJ3QgbWFrZSBzZW5zZSB0byBwYXJzZSB0aGVtIHR3aWNlLiBTbyBoZWFkZXJSZXNwb25zZVxuICAgICAgLy8gY2FjaGVzIHRoZSBkYXRhIGV4dHJhY3RlZCBmcm9tIHRoZSByZXNwb25zZSB3aGVuZXZlciBpdCdzIGZpcnN0IHBhcnNlZCxcbiAgICAgIC8vIHRvIGVuc3VyZSBwYXJzaW5nIGlzbid0IGR1cGxpY2F0ZWQuXG4gICAgICBsZXQgaGVhZGVyUmVzcG9uc2U6IEh0dHBIZWFkZXJSZXNwb25zZXxudWxsID0gbnVsbDtcblxuICAgICAgLy8gcGFydGlhbEZyb21YaHIgZXh0cmFjdHMgdGhlIEh0dHBIZWFkZXJSZXNwb25zZSBmcm9tIHRoZSBjdXJyZW50IFhNTEh0dHBSZXF1ZXN0XG4gICAgICAvLyBzdGF0ZSwgYW5kIG1lbW9pemVzIGl0IGludG8gaGVhZGVyUmVzcG9uc2UuXG4gICAgICBjb25zdCBwYXJ0aWFsRnJvbVhociA9ICgpOiBIdHRwSGVhZGVyUmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoaGVhZGVyUmVzcG9uc2UgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gaGVhZGVyUmVzcG9uc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWFkIHN0YXR1cyBhbmQgbm9ybWFsaXplIGFuIElFOSBidWcgKGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzE0NTApLlxuICAgICAgICBjb25zdCBzdGF0dXM6IG51bWJlciA9IHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzO1xuICAgICAgICBjb25zdCBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQgfHwgJ09LJztcblxuICAgICAgICAvLyBQYXJzZSBoZWFkZXJzIGZyb20gWE1MSHR0cFJlcXVlc3QgLSB0aGlzIHN0ZXAgaXMgbGF6eS5cbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuXG4gICAgICAgIC8vIFJlYWQgdGhlIHJlc3BvbnNlIFVSTCBmcm9tIHRoZSBYTUxIdHRwUmVzcG9uc2UgaW5zdGFuY2UgYW5kIGZhbGwgYmFjayBvbiB0aGVcbiAgICAgICAgLy8gcmVxdWVzdCBVUkwuXG4gICAgICAgIGNvbnN0IHVybCA9IGdldFJlc3BvbnNlVXJsKHhocikgfHwgcmVxLnVybDtcblxuICAgICAgICAvLyBDb25zdHJ1Y3QgdGhlIEh0dHBIZWFkZXJSZXNwb25zZSBhbmQgbWVtb2l6ZSBpdC5cbiAgICAgICAgaGVhZGVyUmVzcG9uc2UgPSBuZXcgSHR0cEhlYWRlclJlc3BvbnNlKHtoZWFkZXJzLCBzdGF0dXMsIHN0YXR1c1RleHQsIHVybH0pO1xuICAgICAgICByZXR1cm4gaGVhZGVyUmVzcG9uc2U7XG4gICAgICB9O1xuXG4gICAgICAvLyBOZXh0LCBhIGZldyBjbG9zdXJlcyBhcmUgZGVmaW5lZCBmb3IgdGhlIHZhcmlvdXMgZXZlbnRzIHdoaWNoIFhNTEh0dHBSZXF1ZXN0IGNhblxuICAgICAgLy8gZW1pdC4gVGhpcyBhbGxvd3MgdGhlbSB0byBiZSB1bnJlZ2lzdGVyZWQgYXMgZXZlbnQgbGlzdGVuZXJzIGxhdGVyLlxuXG4gICAgICAvLyBGaXJzdCB1cCBpcyB0aGUgbG9hZCBldmVudCwgd2hpY2ggcmVwcmVzZW50cyBhIHJlc3BvbnNlIGJlaW5nIGZ1bGx5IGF2YWlsYWJsZS5cbiAgICAgIGNvbnN0IG9uTG9hZCA9ICgpID0+IHtcbiAgICAgICAgLy8gUmVhZCByZXNwb25zZSBzdGF0ZSBmcm9tIHRoZSBtZW1vaXplZCBwYXJ0aWFsIGRhdGEuXG4gICAgICAgIGxldCB7aGVhZGVycywgc3RhdHVzLCBzdGF0dXNUZXh0LCB1cmx9ID0gcGFydGlhbEZyb21YaHIoKTtcblxuICAgICAgICAvLyBUaGUgYm9keSB3aWxsIGJlIHJlYWQgb3V0IGlmIHByZXNlbnQuXG4gICAgICAgIGxldCBib2R5OiBhbnl8bnVsbCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gMjA0KSB7XG4gICAgICAgICAgLy8gVXNlIFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlIGlmIHNldCwgcmVzcG9uc2VUZXh0IG90aGVyd2lzZS5cbiAgICAgICAgICBib2R5ID0gKHR5cGVvZiB4aHIucmVzcG9uc2UgPT09ICd1bmRlZmluZWQnKSA/IHhoci5yZXNwb25zZVRleHQgOiB4aHIucmVzcG9uc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3JtYWxpemUgYW5vdGhlciBwb3RlbnRpYWwgYnVnICh0aGlzIG9uZSBjb21lcyBmcm9tIENPUlMpLlxuICAgICAgICBpZiAoc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgc3RhdHVzID0gISFib2R5ID8gMjAwIDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9rIGRldGVybWluZXMgd2hldGhlciB0aGUgcmVzcG9uc2Ugd2lsbCBiZSB0cmFuc21pdHRlZCBvbiB0aGUgZXZlbnQgb3JcbiAgICAgICAgLy8gZXJyb3IgY2hhbm5lbC4gVW5zdWNjZXNzZnVsIHN0YXR1cyBjb2RlcyAobm90IDJ4eCkgd2lsbCBhbHdheXMgYmUgZXJyb3JzLFxuICAgICAgICAvLyBidXQgYSBzdWNjZXNzZnVsIHN0YXR1cyBjb2RlIGNhbiBzdGlsbCByZXN1bHQgaW4gYW4gZXJyb3IgaWYgdGhlIHVzZXJcbiAgICAgICAgLy8gYXNrZWQgZm9yIEpTT04gZGF0YSBhbmQgdGhlIGJvZHkgY2Fubm90IGJlIHBhcnNlZCBhcyBzdWNoLlxuICAgICAgICBsZXQgb2sgPSBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcblxuICAgICAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBib2R5IG5lZWRzIHRvIGJlIHBhcnNlZCBhcyBKU09OIChpbiBtYW55IGNhc2VzIHRoZSBicm93c2VyXG4gICAgICAgIC8vIHdpbGwgaGF2ZSBkb25lIHRoYXQgYWxyZWFkeSkuXG4gICAgICAgIGlmIChyZXEucmVzcG9uc2VUeXBlID09PSAnanNvbicgJiYgdHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgYm9keSwgYmVmb3JlIGF0dGVtcHRpbmcgWFNTSSBwcmVmaXggc3RyaXBwaW5nLlxuICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQm9keSA9IGJvZHk7XG4gICAgICAgICAgYm9keSA9IGJvZHkucmVwbGFjZShYU1NJX1BSRUZJWCwgJycpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBBdHRlbXB0IHRoZSBwYXJzZS4gSWYgaXQgZmFpbHMsIGEgcGFyc2UgZXJyb3Igc2hvdWxkIGJlIGRlbGl2ZXJlZCB0byB0aGUgdXNlci5cbiAgICAgICAgICAgIGJvZHkgPSBib2R5ICE9PSAnJyA/IEpTT04ucGFyc2UoYm9keSkgOiBudWxsO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGUgSlNPTi5wYXJzZSBmYWlsZWQsIGl0J3MgcmVhc29uYWJsZSB0byBhc3N1bWUgdGhpcyBtaWdodCBub3QgaGF2ZSBiZWVuIGFcbiAgICAgICAgICAgIC8vIEpTT04gcmVzcG9uc2UuIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGJvZHkgKGluY2x1ZGluZyBhbnkgWFNTSSBwcmVmaXgpIHRvIGRlbGl2ZXJcbiAgICAgICAgICAgIC8vIGEgYmV0dGVyIGVycm9yIHJlc3BvbnNlLlxuICAgICAgICAgICAgYm9keSA9IG9yaWdpbmFsQm9keTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyB3YXMgYW4gZXJyb3IgcmVxdWVzdCB0byBiZWdpbiB3aXRoLCBsZWF2ZSBpdCBhcyBhIHN0cmluZywgaXQgcHJvYmFibHlcbiAgICAgICAgICAgIC8vIGp1c3QgaXNuJ3QgSlNPTi4gT3RoZXJ3aXNlLCBkZWxpdmVyIHRoZSBwYXJzaW5nIGVycm9yIHRvIHRoZSB1c2VyLlxuICAgICAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgICAgIC8vIEV2ZW4gdGhvdWdoIHRoZSByZXNwb25zZSBzdGF0dXMgd2FzIDJ4eCwgdGhpcyBpcyBzdGlsbCBhbiBlcnJvci5cbiAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgLy8gVGhlIHBhcnNlIGVycm9yIGNvbnRhaW5zIHRoZSB0ZXh0IG9mIHRoZSBib2R5IHRoYXQgZmFpbGVkIHRvIHBhcnNlLlxuICAgICAgICAgICAgICBib2R5ID0ge2Vycm9yLCB0ZXh0OiBib2R5fSBhcyBIdHRwSnNvblBhcnNlRXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgLy8gQSBzdWNjZXNzZnVsIHJlc3BvbnNlIGlzIGRlbGl2ZXJlZCBvbiB0aGUgZXZlbnQgc3RyZWFtLlxuICAgICAgICAgIG9ic2VydmVyLm5leHQobmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQsXG4gICAgICAgICAgICB1cmw6IHVybCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIC8vIFRoZSBmdWxsIGJvZHkgaGFzIGJlZW4gcmVjZWl2ZWQgYW5kIGRlbGl2ZXJlZCwgbm8gZnVydGhlciBldmVudHNcbiAgICAgICAgICAvLyBhcmUgcG9zc2libGUuIFRoaXMgcmVxdWVzdCBpcyBjb21wbGV0ZS5cbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFuIHVuc3VjY2Vzc2Z1bCByZXF1ZXN0IGlzIGRlbGl2ZXJlZCBvbiB0aGUgZXJyb3IgY2hhbm5lbC5cbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgLy8gVGhlIGVycm9yIGluIHRoaXMgY2FzZSBpcyB0aGUgcmVzcG9uc2UgYm9keSAoZXJyb3IgZnJvbSB0aGUgc2VydmVyKS5cbiAgICAgICAgICAgIGVycm9yOiBib2R5LFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQsXG4gICAgICAgICAgICB1cmw6IHVybCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBUaGUgb25FcnJvciBjYWxsYmFjayBpcyBjYWxsZWQgd2hlbiBzb21ldGhpbmcgZ29lcyB3cm9uZyBhdCB0aGUgbmV0d29yayBsZXZlbC5cbiAgICAgIC8vIENvbm5lY3Rpb24gdGltZW91dCwgRE5TIGVycm9yLCBvZmZsaW5lLCBldGMuIFRoZXNlIGFyZSBhY3R1YWwgZXJyb3JzLCBhbmQgYXJlXG4gICAgICAvLyB0cmFuc21pdHRlZCBvbiB0aGUgZXJyb3IgY2hhbm5lbC5cbiAgICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3I6IFByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qge3VybH0gPSBwYXJ0aWFsRnJvbVhocigpO1xuICAgICAgICBjb25zdCByZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyB8fCAwLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0IHx8ICdVbmtub3duIEVycm9yJyxcbiAgICAgICAgICB1cmw6IHVybCB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5lcnJvcihyZXMpO1xuICAgICAgfTtcblxuICAgICAgLy8gVGhlIHNlbnRIZWFkZXJzIGZsYWcgdHJhY2tzIHdoZXRoZXIgdGhlIEh0dHBSZXNwb25zZUhlYWRlcnMgZXZlbnRcbiAgICAgIC8vIGhhcyBiZWVuIHNlbnQgb24gdGhlIHN0cmVhbS4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gdHJhY2sgaWYgcHJvZ3Jlc3NcbiAgICAgIC8vIGlzIGVuYWJsZWQgc2luY2UgdGhlIGV2ZW50IHdpbGwgYmUgc2VudCBvbiBvbmx5IHRoZSBmaXJzdCBkb3dubG9hZFxuICAgICAgLy8gcHJvZ2Vyc3MgZXZlbnQuXG4gICAgICBsZXQgc2VudEhlYWRlcnMgPSBmYWxzZTtcblxuICAgICAgLy8gVGhlIGRvd25sb2FkIHByb2dyZXNzIGV2ZW50IGhhbmRsZXIsIHdoaWNoIGlzIG9ubHkgcmVnaXN0ZXJlZCBpZlxuICAgICAgLy8gcHJvZ3Jlc3MgZXZlbnRzIGFyZSBlbmFibGVkLlxuICAgICAgY29uc3Qgb25Eb3duUHJvZ3Jlc3MgPSAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgICAgLy8gU2VuZCB0aGUgSHR0cFJlc3BvbnNlSGVhZGVycyBldmVudCBpZiBpdCBoYXNuJ3QgYmVlbiBzZW50IGFscmVhZHkuXG4gICAgICAgIGlmICghc2VudEhlYWRlcnMpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHBhcnRpYWxGcm9tWGhyKCkpO1xuICAgICAgICAgIHNlbnRIZWFkZXJzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YXJ0IGJ1aWxkaW5nIHRoZSBkb3dubG9hZCBwcm9ncmVzcyBldmVudCB0byBkZWxpdmVyIG9uIHRoZSByZXNwb25zZVxuICAgICAgICAvLyBldmVudCBzdHJlYW0uXG4gICAgICAgIGxldCBwcm9ncmVzc0V2ZW50OiBIdHRwRG93bmxvYWRQcm9ncmVzc0V2ZW50ID0ge1xuICAgICAgICAgIHR5cGU6IEh0dHBFdmVudFR5cGUuRG93bmxvYWRQcm9ncmVzcyxcbiAgICAgICAgICBsb2FkZWQ6IGV2ZW50LmxvYWRlZCxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTZXQgdGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyBpbiB0aGUgZXZlbnQgaWYgaXQncyBhdmFpbGFibGUuXG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgcHJvZ3Jlc3NFdmVudC50b3RhbCA9IGV2ZW50LnRvdGFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIGZvciB0ZXh0IGNvbnRlbnQgYW5kIGEgcGFydGlhbCByZXNwb25zZSBpc1xuICAgICAgICAvLyBhdmFpbGFibGUgb24gWE1MSHR0cFJlcXVlc3QsIGluY2x1ZGUgaXQgaW4gdGhlIHByb2dyZXNzIGV2ZW50XG4gICAgICAgIC8vIHRvIGFsbG93IGZvciBzdHJlYW1pbmcgcmVhZHMuXG4gICAgICAgIGlmIChyZXEucmVzcG9uc2VUeXBlID09PSAndGV4dCcgJiYgISF4aHIucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgICAgcHJvZ3Jlc3NFdmVudC5wYXJ0aWFsVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5hbGx5LCBmaXJlIHRoZSBldmVudC5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChwcm9ncmVzc0V2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFRoZSB1cGxvYWQgcHJvZ3Jlc3MgZXZlbnQgaGFuZGxlciwgd2hpY2ggaXMgb25seSByZWdpc3RlcmVkIGlmXG4gICAgICAvLyBwcm9ncmVzcyBldmVudHMgYXJlIGVuYWJsZWQuXG4gICAgICBjb25zdCBvblVwUHJvZ3Jlc3MgPSAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgICAgLy8gVXBsb2FkIHByb2dyZXNzIGV2ZW50cyBhcmUgc2ltcGxlci4gQmVnaW4gYnVpbGRpbmcgdGhlIHByb2dyZXNzXG4gICAgICAgIC8vIGV2ZW50LlxuICAgICAgICBsZXQgcHJvZ3Jlc3M6IEh0dHBVcGxvYWRQcm9ncmVzc0V2ZW50ID0ge1xuICAgICAgICAgIHR5cGU6IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MsXG4gICAgICAgICAgbG9hZGVkOiBldmVudC5sb2FkZWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyBiZWluZyB1cGxvYWRlZCBpcyBhdmFpbGFibGUsIGluY2x1ZGVcbiAgICAgICAgLy8gaXQuXG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgcHJvZ3Jlc3MudG90YWwgPSBldmVudC50b3RhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlbmQgdGhlIGV2ZW50LlxuICAgICAgICBvYnNlcnZlci5uZXh0KHByb2dyZXNzKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEJ5IGRlZmF1bHQsIHJlZ2lzdGVyIGZvciBsb2FkIGFuZCBlcnJvciBldmVudHMuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcblxuICAgICAgLy8gUHJvZ3Jlc3MgZXZlbnRzIGFyZSBvbmx5IGVuYWJsZWQgaWYgcmVxdWVzdGVkLlxuICAgICAgaWYgKHJlcS5yZXBvcnRQcm9ncmVzcykge1xuICAgICAgICAvLyBEb3dubG9hZCBwcm9ncmVzcyBpcyBhbHdheXMgZW5hYmxlZCBpZiByZXF1ZXN0ZWQuXG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIG9uRG93blByb2dyZXNzKTtcblxuICAgICAgICAvLyBVcGxvYWQgcHJvZ3Jlc3MgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZXJlIGlzIGEgYm9keSB0byB1cGxvYWQuXG4gICAgICAgIGlmIChyZXFCb2R5ICE9PSBudWxsICYmIHhoci51cGxvYWQpIHtcbiAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgb25VcFByb2dyZXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGaXJlIHRoZSByZXF1ZXN0LCBhbmQgbm90aWZ5IHRoZSBldmVudCBzdHJlYW0gdGhhdCBpdCB3YXMgZmlyZWQuXG4gICAgICB4aHIuc2VuZChyZXFCb2R5ISk7XG4gICAgICBvYnNlcnZlci5uZXh0KHt0eXBlOiBIdHRwRXZlbnRUeXBlLlNlbnR9KTtcblxuICAgICAgLy8gVGhpcyBpcyB0aGUgcmV0dXJuIGZyb20gdGhlIE9ic2VydmFibGUgZnVuY3Rpb24sIHdoaWNoIGlzIHRoZVxuICAgICAgLy8gcmVxdWVzdCBjYW5jZWxsYXRpb24gaGFuZGxlci5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIC8vIE9uIGEgY2FuY2VsbGF0aW9uLCByZW1vdmUgYWxsIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgICAgICBpZiAocmVxLnJlcG9ydFByb2dyZXNzKSB7XG4gICAgICAgICAgeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgb25Eb3duUHJvZ3Jlc3MpO1xuICAgICAgICAgIGlmIChyZXFCb2R5ICE9PSBudWxsICYmIHhoci51cGxvYWQpIHtcbiAgICAgICAgICAgIHhoci51cGxvYWQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBvblVwUHJvZ3Jlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmFsbHksIGFib3J0IHRoZSBpbi1mbGlnaHQgcmVxdWVzdC5cbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iXX0=