/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata, __param } from "tslib";
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import * as url from 'url';
import { INITIAL_CONFIG } from './tokens';
function parseUrl(urlStr) {
    var parsedUrl = url.parse(urlStr);
    return {
        hostname: parsedUrl.hostname || '',
        protocol: parsedUrl.protocol || '',
        port: parsedUrl.port || '',
        pathname: parsedUrl.pathname || '',
        search: parsedUrl.search || '',
        hash: parsedUrl.hash || '',
    };
}
/**
 * Server-side implementation of URL state. Implements `pathname`, `search`, and `hash`
 * but not the state stack.
 */
var ServerPlatformLocation = /** @class */ (function () {
    function ServerPlatformLocation(_doc, _config) {
        this._doc = _doc;
        this.href = '/';
        this.hostname = '/';
        this.protocol = '/';
        this.port = '/';
        this.pathname = '/';
        this.search = '';
        this.hash = '';
        this._hashUpdate = new Subject();
        var config = _config;
        if (!!config && !!config.url) {
            var parsedUrl = parseUrl(config.url);
            this.hostname = parsedUrl.hostname;
            this.protocol = parsedUrl.protocol;
            this.port = parsedUrl.port;
            this.pathname = parsedUrl.pathname;
            this.search = parsedUrl.search;
            this.hash = parsedUrl.hash;
        }
    }
    ServerPlatformLocation.prototype.getBaseHrefFromDOM = function () {
        return getDOM().getBaseHref(this._doc);
    };
    ServerPlatformLocation.prototype.onPopState = function (fn) {
        // No-op: a state stack is not implemented, so
        // no events will ever come.
    };
    ServerPlatformLocation.prototype.onHashChange = function (fn) {
        this._hashUpdate.subscribe(fn);
    };
    Object.defineProperty(ServerPlatformLocation.prototype, "url", {
        get: function () {
            return "" + this.pathname + this.search + this.hash;
        },
        enumerable: true,
        configurable: true
    });
    ServerPlatformLocation.prototype.setHash = function (value, oldUrl) {
        var _this = this;
        if (this.hash === value) {
            // Don't fire events if the hash has not changed.
            return;
        }
        this.hash = value;
        var newUrl = this.url;
        scheduleMicroTask(function () { return _this._hashUpdate.next({ type: 'hashchange', state: null, oldUrl: oldUrl, newUrl: newUrl }); });
    };
    ServerPlatformLocation.prototype.replaceState = function (state, title, newUrl) {
        var oldUrl = this.url;
        var parsedUrl = parseUrl(newUrl);
        this.pathname = parsedUrl.pathname;
        this.search = parsedUrl.search;
        this.setHash(parsedUrl.hash, oldUrl);
    };
    ServerPlatformLocation.prototype.pushState = function (state, title, newUrl) {
        this.replaceState(state, title, newUrl);
    };
    ServerPlatformLocation.prototype.forward = function () {
        throw new Error('Not implemented');
    };
    ServerPlatformLocation.prototype.back = function () {
        throw new Error('Not implemented');
    };
    // History API isn't available on server, therefore return undefined
    ServerPlatformLocation.prototype.getState = function () {
        return undefined;
    };
    ServerPlatformLocation = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)), __param(1, Optional()), __param(1, Inject(INITIAL_CONFIG)),
        __metadata("design:paramtypes", [Object, Object])
    ], ServerPlatformLocation);
    return ServerPlatformLocation;
}());
export { ServerPlatformLocation };
export function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1zZXJ2ZXIvc3JjL2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFpRSxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDM0gsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDM0IsT0FBTyxFQUFDLGNBQWMsRUFBaUIsTUFBTSxVQUFVLENBQUM7QUFHeEQsU0FBUyxRQUFRLENBQUMsTUFBYztJQUM5QixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLE9BQU87UUFDTCxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFO1FBQ2xDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUU7UUFDbEMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRTtRQUMxQixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFO1FBQ2xDLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUU7UUFDOUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRTtLQUMzQixDQUFDO0FBQ0osQ0FBQztBQUVEOzs7R0FHRztBQUVIO0lBVUUsZ0NBQzhCLElBQVMsRUFBc0MsT0FBWTtRQUEzRCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBVnZCLFNBQUksR0FBVyxHQUFHLENBQUM7UUFDbkIsYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUN2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Q0FBQztJQUNyQyxDQUFDO0lBRUQscUNBQUksR0FBSjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLHlDQUFRLEdBQVI7UUFDRSxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBNUVVLHNCQUFzQjtRQURsQyxVQUFVLEVBQUU7UUFZTixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQSxFQUFxQixXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7O09BWGpFLHNCQUFzQixDQTZFbEM7SUFBRCw2QkFBQztDQUFBLEFBN0VELElBNkVDO1NBN0VZLHNCQUFzQjtBQStFbkMsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEVBQVk7SUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5ULCBMb2NhdGlvbkNoYW5nZUV2ZW50LCBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyLCBQbGF0Zm9ybUxvY2F0aW9uLCDJtWdldERPTSBhcyBnZXRET019IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHtJTklUSUFMX0NPTkZJRywgUGxhdGZvcm1Db25maWd9IGZyb20gJy4vdG9rZW5zJztcblxuXG5mdW5jdGlvbiBwYXJzZVVybCh1cmxTdHI6IHN0cmluZykge1xuICBjb25zdCBwYXJzZWRVcmwgPSB1cmwucGFyc2UodXJsU3RyKTtcbiAgcmV0dXJuIHtcbiAgICBob3N0bmFtZTogcGFyc2VkVXJsLmhvc3RuYW1lIHx8ICcnLFxuICAgIHByb3RvY29sOiBwYXJzZWRVcmwucHJvdG9jb2wgfHwgJycsXG4gICAgcG9ydDogcGFyc2VkVXJsLnBvcnQgfHwgJycsXG4gICAgcGF0aG5hbWU6IHBhcnNlZFVybC5wYXRobmFtZSB8fCAnJyxcbiAgICBzZWFyY2g6IHBhcnNlZFVybC5zZWFyY2ggfHwgJycsXG4gICAgaGFzaDogcGFyc2VkVXJsLmhhc2ggfHwgJycsXG4gIH07XG59XG5cbi8qKlxuICogU2VydmVyLXNpZGUgaW1wbGVtZW50YXRpb24gb2YgVVJMIHN0YXRlLiBJbXBsZW1lbnRzIGBwYXRobmFtZWAsIGBzZWFyY2hgLCBhbmQgYGhhc2hgXG4gKiBidXQgbm90IHRoZSBzdGF0ZSBzdGFjay5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZlclBsYXRmb3JtTG9jYXRpb24gaW1wbGVtZW50cyBQbGF0Zm9ybUxvY2F0aW9uIHtcbiAgcHVibGljIHJlYWRvbmx5IGhyZWY6IHN0cmluZyA9ICcvJztcbiAgcHVibGljIHJlYWRvbmx5IGhvc3RuYW1lOiBzdHJpbmcgPSAnLyc7XG4gIHB1YmxpYyByZWFkb25seSBwcm90b2NvbDogc3RyaW5nID0gJy8nO1xuICBwdWJsaWMgcmVhZG9ubHkgcG9ydDogc3RyaW5nID0gJy8nO1xuICBwdWJsaWMgcmVhZG9ubHkgcGF0aG5hbWU6IHN0cmluZyA9ICcvJztcbiAgcHVibGljIHJlYWRvbmx5IHNlYXJjaDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyByZWFkb25seSBoYXNoOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfaGFzaFVwZGF0ZSA9IG5ldyBTdWJqZWN0PExvY2F0aW9uQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IGFueSwgQE9wdGlvbmFsKCkgQEluamVjdChJTklUSUFMX0NPTkZJRykgX2NvbmZpZzogYW55KSB7XG4gICAgY29uc3QgY29uZmlnID0gX2NvbmZpZyBhcyBQbGF0Zm9ybUNvbmZpZyB8IG51bGw7XG4gICAgaWYgKCEhY29uZmlnICYmICEhY29uZmlnLnVybCkge1xuICAgICAgY29uc3QgcGFyc2VkVXJsID0gcGFyc2VVcmwoY29uZmlnLnVybCk7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gcGFyc2VkVXJsLmhvc3RuYW1lO1xuICAgICAgdGhpcy5wcm90b2NvbCA9IHBhcnNlZFVybC5wcm90b2NvbDtcbiAgICAgIHRoaXMucG9ydCA9IHBhcnNlZFVybC5wb3J0O1xuICAgICAgdGhpcy5wYXRobmFtZSA9IHBhcnNlZFVybC5wYXRobmFtZTtcbiAgICAgIHRoaXMuc2VhcmNoID0gcGFyc2VkVXJsLnNlYXJjaDtcbiAgICAgIHRoaXMuaGFzaCA9IHBhcnNlZFVybC5oYXNoO1xuICAgIH1cbiAgfVxuXG4gIGdldEJhc2VIcmVmRnJvbURPTSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRET00oKS5nZXRCYXNlSHJlZih0aGlzLl9kb2MpITtcbiAgfVxuXG4gIG9uUG9wU3RhdGUoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkIHtcbiAgICAvLyBOby1vcDogYSBzdGF0ZSBzdGFjayBpcyBub3QgaW1wbGVtZW50ZWQsIHNvXG4gICAgLy8gbm8gZXZlbnRzIHdpbGwgZXZlciBjb21lLlxuICB9XG5cbiAgb25IYXNoQ2hhbmdlKGZuOiBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKTogdm9pZCB7XG4gICAgdGhpcy5faGFzaFVwZGF0ZS5zdWJzY3JpYmUoZm4pO1xuICB9XG5cbiAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLnBhdGhuYW1lfSR7dGhpcy5zZWFyY2h9JHt0aGlzLmhhc2h9YDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SGFzaCh2YWx1ZTogc3RyaW5nLCBvbGRVcmw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmhhc2ggPT09IHZhbHVlKSB7XG4gICAgICAvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiB0aGUgaGFzaCBoYXMgbm90IGNoYW5nZWQuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICh0aGlzIGFzIHtoYXNoOiBzdHJpbmd9KS5oYXNoID0gdmFsdWU7XG4gICAgY29uc3QgbmV3VXJsID0gdGhpcy51cmw7XG4gICAgc2NoZWR1bGVNaWNyb1Rhc2soXG4gICAgICAgICgpID0+IHRoaXMuX2hhc2hVcGRhdGUubmV4dChcbiAgICAgICAgICAgIHt0eXBlOiAnaGFzaGNoYW5nZScsIHN0YXRlOiBudWxsLCBvbGRVcmwsIG5ld1VybH0gYXMgTG9jYXRpb25DaGFuZ2VFdmVudCkpO1xuICB9XG5cbiAgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIG5ld1VybDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgb2xkVXJsID0gdGhpcy51cmw7XG4gICAgY29uc3QgcGFyc2VkVXJsID0gcGFyc2VVcmwobmV3VXJsKTtcbiAgICAodGhpcyBhcyB7cGF0aG5hbWU6IHN0cmluZ30pLnBhdGhuYW1lID0gcGFyc2VkVXJsLnBhdGhuYW1lO1xuICAgICh0aGlzIGFzIHtzZWFyY2g6IHN0cmluZ30pLnNlYXJjaCA9IHBhcnNlZFVybC5zZWFyY2g7XG4gICAgdGhpcy5zZXRIYXNoKHBhcnNlZFVybC5oYXNoLCBvbGRVcmwpO1xuICB9XG5cbiAgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIG5ld1VybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXBsYWNlU3RhdGUoc3RhdGUsIHRpdGxlLCBuZXdVcmwpO1xuICB9XG5cbiAgZm9yd2FyZCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgLy8gSGlzdG9yeSBBUEkgaXNuJ3QgYXZhaWxhYmxlIG9uIHNlcnZlciwgdGhlcmVmb3JlIHJldHVybiB1bmRlZmluZWRcbiAgZ2V0U3RhdGUoKTogdW5rbm93biB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVNaWNyb1Rhc2soZm46IEZ1bmN0aW9uKSB7XG4gIFpvbmUuY3VycmVudC5zY2hlZHVsZU1pY3JvVGFzaygnc2NoZWR1bGVNaWNyb3Rhc2snLCBmbik7XG59XG4iXX0=