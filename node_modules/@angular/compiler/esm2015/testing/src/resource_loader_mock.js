/**
 * @fileoverview added by tsickle
 * Generated from: packages/compiler/testing/src/resource_loader_mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResourceLoader } from '@angular/compiler';
/**
 * A mock implementation of {\@link ResourceLoader} that allows outgoing requests to be mocked
 * and responded to within a single test, without going to the network.
 */
export class MockResourceLoader extends ResourceLoader {
    constructor() {
        super(...arguments);
        this._expectations = [];
        this._definitions = new Map();
        this._requests = [];
    }
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        /** @type {?} */
        const request = new _PendingRequest(url);
        this._requests.push(request);
        return request.getPromise();
    }
    /**
     * @return {?}
     */
    hasPendingRequests() {
        return !!this._requests.length;
    }
    /**
     * Add an expectation for the given URL. Incoming requests will be checked against
     * the next expectation (in FIFO order). The `verifyNoOutstandingExpectations` method
     * can be used to check if any expectations have not yet been met.
     *
     * The response given will be returned if the expectation matches.
     * @param {?} url
     * @param {?} response
     * @return {?}
     */
    expect(url, response) {
        /** @type {?} */
        const expectation = new _Expectation(url, response);
        this._expectations.push(expectation);
    }
    /**
     * Add a definition for the given URL to return the given response. Unlike expectations,
     * definitions have no order and will satisfy any matching request at any time. Also
     * unlike expectations, unused definitions do not cause `verifyNoOutstandingExpectations`
     * to return an error.
     * @param {?} url
     * @param {?} response
     * @return {?}
     */
    when(url, response) {
        this._definitions.set(url, response);
    }
    /**
     * Process pending requests and verify there are no outstanding expectations. Also fails
     * if no requests are pending.
     * @return {?}
     */
    flush() {
        if (this._requests.length === 0) {
            throw new Error('No pending requests to flush');
        }
        do {
            this._processRequest((/** @type {?} */ (this._requests.shift())));
        } while (this._requests.length > 0);
        this.verifyNoOutstandingExpectations();
    }
    /**
     * Throw an exception if any expectations have not been satisfied.
     * @return {?}
     */
    verifyNoOutstandingExpectations() {
        if (this._expectations.length === 0)
            return;
        /** @type {?} */
        const urls = [];
        for (let i = 0; i < this._expectations.length; i++) {
            /** @type {?} */
            const expectation = this._expectations[i];
            urls.push(expectation.url);
        }
        throw new Error(`Unsatisfied requests: ${urls.join(', ')}`);
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    _processRequest(request) {
        /** @type {?} */
        const url = request.url;
        if (this._expectations.length > 0) {
            /** @type {?} */
            const expectation = this._expectations[0];
            if (expectation.url == url) {
                remove(this._expectations, expectation);
                request.complete(expectation.response);
                return;
            }
        }
        if (this._definitions.has(url)) {
            /** @type {?} */
            const response = this._definitions.get(url);
            request.complete(response == null ? null : response);
            return;
        }
        throw new Error(`Unexpected request ${url}`);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockResourceLoader.prototype._expectations;
    /**
     * @type {?}
     * @private
     */
    MockResourceLoader.prototype._definitions;
    /**
     * @type {?}
     * @private
     */
    MockResourceLoader.prototype._requests;
}
class _PendingRequest {
    /**
     * @param {?} url
     */
    constructor(url) {
        this.url = url;
        this.promise = new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            this.resolve = res;
            this.reject = rej;
        }));
    }
    /**
     * @param {?} response
     * @return {?}
     */
    complete(response) {
        if (response == null) {
            this.reject(`Failed to load ${this.url}`);
        }
        else {
            this.resolve(response);
        }
    }
    /**
     * @return {?}
     */
    getPromise() {
        return this.promise;
    }
}
if (false) {
    /** @type {?} */
    _PendingRequest.prototype.resolve;
    /** @type {?} */
    _PendingRequest.prototype.reject;
    /** @type {?} */
    _PendingRequest.prototype.promise;
    /** @type {?} */
    _PendingRequest.prototype.url;
}
class _Expectation {
    /**
     * @param {?} url
     * @param {?} response
     */
    constructor(url, response) {
        this.url = url;
        this.response = response;
    }
}
if (false) {
    /** @type {?} */
    _Expectation.prototype.url;
    /** @type {?} */
    _Expectation.prototype.response;
}
/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */
function remove(list, el) {
    /** @type {?} */
    const index = list.indexOf(el);
    if (index > -1) {
        list.splice(index, 1);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VfbG9hZGVyX21vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci90ZXN0aW5nL3NyYy9yZXNvdXJjZV9sb2FkZXJfbW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBTWpELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxjQUFjO0lBQXREOztRQUNVLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3pDLGNBQVMsR0FBc0IsRUFBRSxDQUFDO0lBcUY1QyxDQUFDOzs7OztJQW5GQyxHQUFHLENBQUMsR0FBVzs7Y0FDUCxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQzs7Ozs7Ozs7Ozs7SUFTRCxNQUFNLENBQUMsR0FBVyxFQUFFLFFBQWdCOztjQUM1QixXQUFXLEdBQUcsSUFBSSxZQUFZLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7Ozs7O0lBUUQsSUFBSSxDQUFDLEdBQVcsRUFBRSxRQUFnQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBTUQsS0FBSztR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QztDQUNGOzs7SUF2QkMsa0NBQW1DOztJQUVuQyxpQ0FBOEI7O0lBQzlCLGtDQUF5Qjs7SUFFYiw4QkFBa0I7O0FBb0JoQyxNQUFNLFlBQVk7Ozs7O0lBR2hCLFlBQVksR0FBVyxFQUFFLFFBQWdCO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztDQUNGOzs7SUFOQywyQkFBWTs7SUFDWixnQ0FBaUI7Ozs7Ozs7O0FBT25CLFNBQVMsTUFBTSxDQUFJLElBQVMsRUFBRSxFQUFLOztVQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2QjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UmVzb3VyY2VMb2FkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuLyoqXG4gKiBBIG1vY2sgaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIFJlc291cmNlTG9hZGVyfSB0aGF0IGFsbG93cyBvdXRnb2luZyByZXF1ZXN0cyB0byBiZSBtb2NrZWRcbiAqIGFuZCByZXNwb25kZWQgdG8gd2l0aGluIGEgc2luZ2xlIHRlc3QsIHdpdGhvdXQgZ29pbmcgdG8gdGhlIG5ldHdvcmsuXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrUmVzb3VyY2VMb2FkZXIgZXh0ZW5kcyBSZXNvdXJjZUxvYWRlciB7XG4gIHByaXZhdGUgX2V4cGVjdGF0aW9uczogX0V4cGVjdGF0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfZGVmaW5pdGlvbnMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBwcml2YXRlIF9yZXF1ZXN0czogX1BlbmRpbmdSZXF1ZXN0W10gPSBbXTtcblxuICBnZXQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgX1BlbmRpbmdSZXF1ZXN0KHVybCk7XG4gICAgdGhpcy5fcmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcbiAgICByZXR1cm4gcmVxdWVzdC5nZXRQcm9taXNlKCk7XG4gIH1cblxuICBoYXNQZW5kaW5nUmVxdWVzdHMoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fcmVxdWVzdHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBleHBlY3RhdGlvbiBmb3IgdGhlIGdpdmVuIFVSTC4gSW5jb21pbmcgcmVxdWVzdHMgd2lsbCBiZSBjaGVja2VkIGFnYWluc3RcbiAgICogdGhlIG5leHQgZXhwZWN0YXRpb24gKGluIEZJRk8gb3JkZXIpLiBUaGUgYHZlcmlmeU5vT3V0c3RhbmRpbmdFeHBlY3RhdGlvbnNgIG1ldGhvZFxuICAgKiBjYW4gYmUgdXNlZCB0byBjaGVjayBpZiBhbnkgZXhwZWN0YXRpb25zIGhhdmUgbm90IHlldCBiZWVuIG1ldC5cbiAgICpcbiAgICogVGhlIHJlc3BvbnNlIGdpdmVuIHdpbGwgYmUgcmV0dXJuZWQgaWYgdGhlIGV4cGVjdGF0aW9uIG1hdGNoZXMuXG4gICAqL1xuICBleHBlY3QodXJsOiBzdHJpbmcsIHJlc3BvbnNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBleHBlY3RhdGlvbiA9IG5ldyBfRXhwZWN0YXRpb24odXJsLCByZXNwb25zZSk7XG4gICAgdGhpcy5fZXhwZWN0YXRpb25zLnB1c2goZXhwZWN0YXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGRlZmluaXRpb24gZm9yIHRoZSBnaXZlbiBVUkwgdG8gcmV0dXJuIHRoZSBnaXZlbiByZXNwb25zZS4gVW5saWtlIGV4cGVjdGF0aW9ucyxcbiAgICogZGVmaW5pdGlvbnMgaGF2ZSBubyBvcmRlciBhbmQgd2lsbCBzYXRpc2Z5IGFueSBtYXRjaGluZyByZXF1ZXN0IGF0IGFueSB0aW1lLiBBbHNvXG4gICAqIHVubGlrZSBleHBlY3RhdGlvbnMsIHVudXNlZCBkZWZpbml0aW9ucyBkbyBub3QgY2F1c2UgYHZlcmlmeU5vT3V0c3RhbmRpbmdFeHBlY3RhdGlvbnNgXG4gICAqIHRvIHJldHVybiBhbiBlcnJvci5cbiAgICovXG4gIHdoZW4odXJsOiBzdHJpbmcsIHJlc3BvbnNlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZpbml0aW9ucy5zZXQodXJsLCByZXNwb25zZSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyBwZW5kaW5nIHJlcXVlc3RzIGFuZCB2ZXJpZnkgdGhlcmUgYXJlIG5vIG91dHN0YW5kaW5nIGV4cGVjdGF0aW9ucy4gQWxzbyBmYWlsc1xuICAgKiBpZiBubyByZXF1ZXN0cyBhcmUgcGVuZGluZy5cbiAgICovXG4gIGZsdXNoKCkge1xuICAgIGlmICh0aGlzLl9yZXF1ZXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcGVuZGluZyByZXF1ZXN0cyB0byBmbHVzaCcpO1xuICAgIH1cblxuICAgIGRvIHtcbiAgICAgIHRoaXMuX3Byb2Nlc3NSZXF1ZXN0KHRoaXMuX3JlcXVlc3RzLnNoaWZ0KCkhKTtcbiAgICB9IHdoaWxlICh0aGlzLl9yZXF1ZXN0cy5sZW5ndGggPiAwKTtcblxuICAgIHRoaXMudmVyaWZ5Tm9PdXRzdGFuZGluZ0V4cGVjdGF0aW9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93IGFuIGV4Y2VwdGlvbiBpZiBhbnkgZXhwZWN0YXRpb25zIGhhdmUgbm90IGJlZW4gc2F0aXNmaWVkLlxuICAgKi9cbiAgdmVyaWZ5Tm9PdXRzdGFuZGluZ0V4cGVjdGF0aW9ucygpIHtcbiAgICBpZiAodGhpcy5fZXhwZWN0YXRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdXJsczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2V4cGVjdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZXhwZWN0YXRpb24gPSB0aGlzLl9leHBlY3RhdGlvbnNbaV07XG4gICAgICB1cmxzLnB1c2goZXhwZWN0YXRpb24udXJsKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc2F0aXNmaWVkIHJlcXVlc3RzOiAke3VybHMuam9pbignLCAnKX1gKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Byb2Nlc3NSZXF1ZXN0KHJlcXVlc3Q6IF9QZW5kaW5nUmVxdWVzdCkge1xuICAgIGNvbnN0IHVybCA9IHJlcXVlc3QudXJsO1xuXG4gICAgaWYgKHRoaXMuX2V4cGVjdGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBleHBlY3RhdGlvbiA9IHRoaXMuX2V4cGVjdGF0aW9uc1swXTtcbiAgICAgIGlmIChleHBlY3RhdGlvbi51cmwgPT0gdXJsKSB7XG4gICAgICAgIHJlbW92ZSh0aGlzLl9leHBlY3RhdGlvbnMsIGV4cGVjdGF0aW9uKTtcbiAgICAgICAgcmVxdWVzdC5jb21wbGV0ZShleHBlY3RhdGlvbi5yZXNwb25zZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGVmaW5pdGlvbnMuaGFzKHVybCkpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5fZGVmaW5pdGlvbnMuZ2V0KHVybCk7XG4gICAgICByZXF1ZXN0LmNvbXBsZXRlKHJlc3BvbnNlID09IG51bGwgPyBudWxsIDogcmVzcG9uc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCByZXF1ZXN0ICR7dXJsfWApO1xuICB9XG59XG5cbmNsYXNzIF9QZW5kaW5nUmVxdWVzdCB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICByZXNvbHZlITogKHJlc3VsdDogc3RyaW5nKSA9PiB2b2lkO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcmVqZWN0ITogKGVycm9yOiBhbnkpID0+IHZvaWQ7XG4gIHByb21pc2U6IFByb21pc2U8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlcztcbiAgICAgIHRoaXMucmVqZWN0ID0gcmVqO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGxldGUocmVzcG9uc2U6IHN0cmluZ3xudWxsKSB7XG4gICAgaWYgKHJlc3BvbnNlID09IG51bGwpIHtcbiAgICAgIHRoaXMucmVqZWN0KGBGYWlsZWQgdG8gbG9hZCAke3RoaXMudXJsfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIGdldFByb21pc2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICB9XG59XG5cbmNsYXNzIF9FeHBlY3RhdGlvbiB7XG4gIHVybDogc3RyaW5nO1xuICByZXNwb25zZTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgcmVzcG9uc2U6IHN0cmluZykge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmU8VD4obGlzdDogVFtdLCBlbDogVCk6IHZvaWQge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZihlbCk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iXX0=