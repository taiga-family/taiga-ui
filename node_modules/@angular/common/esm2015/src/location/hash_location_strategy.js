/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/src/location/hash_location_strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy } from './location_strategy';
import { PlatformLocation } from './platform_location';
import { joinWithSlash, normalizeQueryParams } from './util';
/**
 * \@description
 * A {\@link LocationStrategy} used to configure the {\@link Location} service to
 * represent its state in the
 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
 * of the browser's URL.
 *
 * For instance, if you call `location.go('/foo')`, the browser's URL will become
 * `example.com#/foo`.
 *
 * \@usageNotes
 *
 * ### Example
 *
 * {\@example common/location/ts/hash_location_component.ts region='LocationComponent'}
 *
 * \@publicApi
 */
export class HashLocationStrategy extends LocationStrategy {
    /**
     * @param {?} _platformLocation
     * @param {?=} _baseHref
     */
    constructor(_platformLocation, _baseHref) {
        super();
        this._platformLocation = _platformLocation;
        this._baseHref = '';
        if (_baseHref != null) {
            this._baseHref = _baseHref;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onPopState(fn) {
        this._platformLocation.onPopState(fn);
        this._platformLocation.onHashChange(fn);
    }
    /**
     * @return {?}
     */
    getBaseHref() {
        return this._baseHref;
    }
    /**
     * @param {?=} includeHash
     * @return {?}
     */
    path(includeHash = false) {
        // the hash value is always prefixed with a `#`
        // and if it is empty then it will stay empty
        /** @type {?} */
        let path = this._platformLocation.hash;
        if (path == null)
            path = '#';
        return path.length > 0 ? path.substring(1) : path;
    }
    /**
     * @param {?} internal
     * @return {?}
     */
    prepareExternalUrl(internal) {
        /** @type {?} */
        const url = joinWithSlash(this._baseHref, internal);
        return url.length > 0 ? ('#' + url) : url;
    }
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} path
     * @param {?} queryParams
     * @return {?}
     */
    pushState(state, title, path, queryParams) {
        /** @type {?} */
        let url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams));
        if (url.length == 0) {
            url = this._platformLocation.pathname;
        }
        this._platformLocation.pushState(state, title, url);
    }
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} path
     * @param {?} queryParams
     * @return {?}
     */
    replaceState(state, title, path, queryParams) {
        /** @type {?} */
        let url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams));
        if (url.length == 0) {
            url = this._platformLocation.pathname;
        }
        this._platformLocation.replaceState(state, title, url);
    }
    /**
     * @return {?}
     */
    forward() {
        this._platformLocation.forward();
    }
    /**
     * @return {?}
     */
    back() {
        this._platformLocation.back();
    }
}
HashLocationStrategy.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HashLocationStrategy.ctorParameters = () => [
    { type: PlatformLocation },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [APP_BASE_HREF,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HashLocationStrategy.prototype._baseHref;
    /**
     * @type {?}
     * @private
     */
    HashLocationStrategy.prototype._platformLocation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaF9sb2NhdGlvbl9zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbG9jYXRpb24vaGFzaF9sb2NhdGlvbl9zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BFLE9BQU8sRUFBeUIsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUIzRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQWdCOzs7OztJQUV4RCxZQUNZLGlCQUFtQyxFQUNSLFNBQWtCO1FBQ3ZELEtBQUssRUFBRSxDQUFDO1FBRkUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUZ2QyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBSzdCLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEVBQTBCO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxjQUF1QixLQUFLOzs7O1lBRzNCLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSTtRQUN0QyxJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUU3QixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxRQUFnQjs7Y0FDM0IsR0FBRyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztRQUNuRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVUsRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLFdBQW1COztZQUNoRSxHQUFHLEdBQWdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEYsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNuQixHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7OztJQUVELFlBQVksQ0FBQyxLQUFVLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxXQUFtQjs7WUFDbkUsR0FBRyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0UsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNuQixHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7WUF6REYsVUFBVTs7OztZQXZCcUIsZ0JBQWdCO3lDQTRCekMsUUFBUSxZQUFJLE1BQU0sU0FBQyxhQUFhOzs7Ozs7O0lBSHJDLHlDQUErQjs7Ozs7SUFFM0IsaURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBUFBfQkFTRV9IUkVGLCBMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICcuL2xvY2F0aW9uX3N0cmF0ZWd5JztcbmltcG9ydCB7TG9jYXRpb25DaGFuZ2VMaXN0ZW5lciwgUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnLi9wbGF0Zm9ybV9sb2NhdGlvbic7XG5pbXBvcnQge2pvaW5XaXRoU2xhc2gsIG5vcm1hbGl6ZVF1ZXJ5UGFyYW1zfSBmcm9tICcuL3V0aWwnO1xuXG5cblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IHVzZWQgdG8gY29uZmlndXJlIHRoZSB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2UgdG9cbiAqIHJlcHJlc2VudCBpdHMgc3RhdGUgaW4gdGhlXG4gKiBbaGFzaCBmcmFnbWVudF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9SZXNvdXJjZV9Mb2NhdG9yI1N5bnRheClcbiAqIG9mIHRoZSBicm93c2VyJ3MgVVJMLlxuICpcbiAqIEZvciBpbnN0YW5jZSwgaWYgeW91IGNhbGwgYGxvY2F0aW9uLmdvKCcvZm9vJylgLCB0aGUgYnJvd3NlcidzIFVSTCB3aWxsIGJlY29tZVxuICogYGV4YW1wbGUuY29tIy9mb29gLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgY29tbW9uL2xvY2F0aW9uL3RzL2hhc2hfbG9jYXRpb25fY29tcG9uZW50LnRzIHJlZ2lvbj0nTG9jYXRpb25Db21wb25lbnQnfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhhc2hMb2NhdGlvblN0cmF0ZWd5IGV4dGVuZHMgTG9jYXRpb25TdHJhdGVneSB7XG4gIHByaXZhdGUgX2Jhc2VIcmVmOiBzdHJpbmcgPSAnJztcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9wbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uLFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChBUFBfQkFTRV9IUkVGKSBfYmFzZUhyZWY/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChfYmFzZUhyZWYgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fYmFzZUhyZWYgPSBfYmFzZUhyZWY7XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQge1xuICAgIHRoaXMuX3BsYXRmb3JtTG9jYXRpb24ub25Qb3BTdGF0ZShmbik7XG4gICAgdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5vbkhhc2hDaGFuZ2UoZm4pO1xuICB9XG5cbiAgZ2V0QmFzZUhyZWYoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUhyZWY7XG4gIH1cblxuICBwYXRoKGluY2x1ZGVIYXNoOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIC8vIHRoZSBoYXNoIHZhbHVlIGlzIGFsd2F5cyBwcmVmaXhlZCB3aXRoIGEgYCNgXG4gICAgLy8gYW5kIGlmIGl0IGlzIGVtcHR5IHRoZW4gaXQgd2lsbCBzdGF5IGVtcHR5XG4gICAgbGV0IHBhdGggPSB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLmhhc2g7XG4gICAgaWYgKHBhdGggPT0gbnVsbCkgcGF0aCA9ICcjJztcblxuICAgIHJldHVybiBwYXRoLmxlbmd0aCA+IDAgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGg7XG4gIH1cblxuICBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdXJsID0gam9pbldpdGhTbGFzaCh0aGlzLl9iYXNlSHJlZiwgaW50ZXJuYWwpO1xuICAgIHJldHVybiB1cmwubGVuZ3RoID4gMCA/ICgnIycgKyB1cmwpIDogdXJsO1xuICB9XG5cbiAgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZykge1xuICAgIGxldCB1cmw6IHN0cmluZ3xudWxsID0gdGhpcy5wcmVwYXJlRXh0ZXJuYWxVcmwocGF0aCArIG5vcm1hbGl6ZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKSk7XG4gICAgaWYgKHVybC5sZW5ndGggPT0gMCkge1xuICAgICAgdXJsID0gdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9XG4gICAgdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5wdXNoU3RhdGUoc3RhdGUsIHRpdGxlLCB1cmwpO1xuICB9XG5cbiAgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZykge1xuICAgIGxldCB1cmwgPSB0aGlzLnByZXBhcmVFeHRlcm5hbFVybChwYXRoICsgbm9ybWFsaXplUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpKTtcbiAgICBpZiAodXJsLmxlbmd0aCA9PSAwKSB7XG4gICAgICB1cmwgPSB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH1cbiAgICB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLnJlcGxhY2VTdGF0ZShzdGF0ZSwgdGl0bGUsIHVybCk7XG4gIH1cblxuICBmb3J3YXJkKCk6IHZvaWQge1xuICAgIHRoaXMuX3BsYXRmb3JtTG9jYXRpb24uZm9yd2FyZCgpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLmJhY2soKTtcbiAgfVxufVxuIl19