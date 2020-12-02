/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/src/resource_loader/resource_loader_cache.ts
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
import { ɵglobal as global } from '@angular/core';
/**
 * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
 * ResourceLoader.
 *
 * The template cache needs to be built and loaded into window.$templateCache
 * via a separate mechanism.
 *
 * \@publicApi
 */
export class CachedResourceLoader extends ResourceLoader {
    constructor() {
        super();
        this._cache = ((/** @type {?} */ (global))).$templateCache;
        if (this._cache == null) {
            throw new Error('CachedResourceLoader: Template cache was not found in $templateCache.');
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        if (this._cache.hasOwnProperty(url)) {
            return Promise.resolve(this._cache[url]);
        }
        else {
            return (/** @type {?} */ (Promise.reject('CachedResourceLoader: Did not find cached template for ' + url)));
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CachedResourceLoader.prototype._cache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VfbG9hZGVyX2NhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3NyYy9yZXNvdXJjZV9sb2FkZXIvcmVzb3VyY2VfbG9hZGVyX2NhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQVdoRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsY0FBYztJQUd0RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1NBQzFGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsT0FBTyxtQkFBYyxPQUFPLENBQUMsTUFBTSxDQUMvQix5REFBeUQsR0FBRyxHQUFHLENBQUMsRUFBQSxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7SUFsQkMsc0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1Jlc291cmNlTG9hZGVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge8m1Z2xvYmFsIGFzIGdsb2JhbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgUmVzb3VyY2VMb2FkZXIgdGhhdCB1c2VzIGEgdGVtcGxhdGUgY2FjaGUgdG8gYXZvaWQgZG9pbmcgYW4gYWN0dWFsXG4gKiBSZXNvdXJjZUxvYWRlci5cbiAqXG4gKiBUaGUgdGVtcGxhdGUgY2FjaGUgbmVlZHMgdG8gYmUgYnVpbHQgYW5kIGxvYWRlZCBpbnRvIHdpbmRvdy4kdGVtcGxhdGVDYWNoZVxuICogdmlhIGEgc2VwYXJhdGUgbWVjaGFuaXNtLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIENhY2hlZFJlc291cmNlTG9hZGVyIGV4dGVuZHMgUmVzb3VyY2VMb2FkZXIge1xuICBwcml2YXRlIF9jYWNoZToge1t1cmw6IHN0cmluZ106IHN0cmluZ307XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jYWNoZSA9ICg8YW55Pmdsb2JhbCkuJHRlbXBsYXRlQ2FjaGU7XG4gICAgaWYgKHRoaXMuX2NhY2hlID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FjaGVkUmVzb3VyY2VMb2FkZXI6IFRlbXBsYXRlIGNhY2hlIHdhcyBub3QgZm91bmQgaW4gJHRlbXBsYXRlQ2FjaGUuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodGhpcy5fY2FjaGUuaGFzT3duUHJvcGVydHkodXJsKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9jYWNoZVt1cmxdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxQcm9taXNlPGFueT4+UHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgJ0NhY2hlZFJlc291cmNlTG9hZGVyOiBEaWQgbm90IGZpbmQgY2FjaGVkIHRlbXBsYXRlIGZvciAnICsgdXJsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==