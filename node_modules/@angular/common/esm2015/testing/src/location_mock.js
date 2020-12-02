/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/testing/src/location_mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, Injectable } from '@angular/core';
/**
 * A spy for {\@link Location} that allows tests to fire simulated location events.
 *
 * \@publicApi
 */
export class SpyLocation {
    constructor() {
        this.urlChanges = [];
        this._history = [new LocationState('', '', null)];
        this._historyIndex = 0;
        /**
         * \@internal
         */
        this._subject = new EventEmitter();
        /**
         * \@internal
         */
        this._baseHref = '';
        /**
         * \@internal
         */
        this._platformStrategy = (/** @type {?} */ (null));
        /**
         * \@internal
         */
        this._platformLocation = (/** @type {?} */ (null));
        /**
         * \@internal
         */
        this._urlChangeListeners = [];
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setInitialPath(url) {
        this._history[this._historyIndex].path = url;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setBaseHref(url) {
        this._baseHref = url;
    }
    /**
     * @return {?}
     */
    path() {
        return this._history[this._historyIndex].path;
    }
    /**
     * @return {?}
     */
    getState() {
        return this._history[this._historyIndex].state;
    }
    /**
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    isCurrentPathEqualTo(path, query = '') {
        /** @type {?} */
        const givenPath = path.endsWith('/') ? path.substring(0, path.length - 1) : path;
        /** @type {?} */
        const currPath = this.path().endsWith('/') ? this.path().substring(0, this.path().length - 1) : this.path();
        return currPath == givenPath + (query.length > 0 ? ('?' + query) : '');
    }
    /**
     * @param {?} pathname
     * @return {?}
     */
    simulateUrlPop(pathname) {
        this._subject.emit({ 'url': pathname, 'pop': true, 'type': 'popstate' });
    }
    /**
     * @param {?} pathname
     * @return {?}
     */
    simulateHashChange(pathname) {
        // Because we don't prevent the native event, the browser will independently update the path
        this.setInitialPath(pathname);
        this.urlChanges.push('hash: ' + pathname);
        this._subject.emit({ 'url': pathname, 'pop': true, 'type': 'hashchange' });
    }
    /**
     * @param {?} url
     * @return {?}
     */
    prepareExternalUrl(url) {
        if (url.length > 0 && !url.startsWith('/')) {
            url = '/' + url;
        }
        return this._baseHref + url;
    }
    /**
     * @param {?} path
     * @param {?=} query
     * @param {?=} state
     * @return {?}
     */
    go(path, query = '', state = null) {
        path = this.prepareExternalUrl(path);
        if (this._historyIndex > 0) {
            this._history.splice(this._historyIndex + 1);
        }
        this._history.push(new LocationState(path, query, state));
        this._historyIndex = this._history.length - 1;
        /** @type {?} */
        const locationState = this._history[this._historyIndex - 1];
        if (locationState.path == path && locationState.query == query) {
            return;
        }
        /** @type {?} */
        const url = path + (query.length > 0 ? ('?' + query) : '');
        this.urlChanges.push(url);
        this._subject.emit({ 'url': url, 'pop': false });
    }
    /**
     * @param {?} path
     * @param {?=} query
     * @param {?=} state
     * @return {?}
     */
    replaceState(path, query = '', state = null) {
        path = this.prepareExternalUrl(path);
        /** @type {?} */
        const history = this._history[this._historyIndex];
        if (history.path == path && history.query == query) {
            return;
        }
        history.path = path;
        history.query = query;
        history.state = state;
        /** @type {?} */
        const url = path + (query.length > 0 ? ('?' + query) : '');
        this.urlChanges.push('replace: ' + url);
    }
    /**
     * @return {?}
     */
    forward() {
        if (this._historyIndex < (this._history.length - 1)) {
            this._historyIndex++;
            this._subject.emit({ 'url': this.path(), 'state': this.getState(), 'pop': true });
        }
    }
    /**
     * @return {?}
     */
    back() {
        if (this._historyIndex > 0) {
            this._historyIndex--;
            this._subject.emit({ 'url': this.path(), 'state': this.getState(), 'pop': true });
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onUrlChange(fn) {
        this._urlChangeListeners.push(fn);
        this.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            this._notifyUrlChangeListeners(v.url, v.state);
        }));
    }
    /**
     * \@internal
     * @param {?=} url
     * @param {?=} state
     * @return {?}
     */
    _notifyUrlChangeListeners(url = '', state) {
        this._urlChangeListeners.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn(url, state)));
    }
    /**
     * @param {?} onNext
     * @param {?=} onThrow
     * @param {?=} onReturn
     * @return {?}
     */
    subscribe(onNext, onThrow, onReturn) {
        return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
    }
    /**
     * @param {?} url
     * @return {?}
     */
    normalize(url) {
        return (/** @type {?} */ (null));
    }
}
SpyLocation.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    SpyLocation.prototype.urlChanges;
    /**
     * @type {?}
     * @private
     */
    SpyLocation.prototype._history;
    /**
     * @type {?}
     * @private
     */
    SpyLocation.prototype._historyIndex;
    /**
     * \@internal
     * @type {?}
     */
    SpyLocation.prototype._subject;
    /**
     * \@internal
     * @type {?}
     */
    SpyLocation.prototype._baseHref;
    /**
     * \@internal
     * @type {?}
     */
    SpyLocation.prototype._platformStrategy;
    /**
     * \@internal
     * @type {?}
     */
    SpyLocation.prototype._platformLocation;
    /**
     * \@internal
     * @type {?}
     */
    SpyLocation.prototype._urlChangeListeners;
}
class LocationState {
    /**
     * @param {?} path
     * @param {?} query
     * @param {?} state
     */
    constructor(path, query, state) {
        this.path = path;
        this.query = query;
        this.state = state;
    }
}
if (false) {
    /** @type {?} */
    LocationState.prototype.path;
    /** @type {?} */
    LocationState.prototype.query;
    /** @type {?} */
    LocationState.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25fbW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi90ZXN0aW5nL3NyYy9sb2NhdGlvbl9tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFTdkQsTUFBTSxPQUFPLFdBQVc7SUFEeEI7UUFFRSxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBb0IsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUQsa0JBQWEsR0FBVyxDQUFDLENBQUM7Ozs7UUFFbEMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRWpELGNBQVMsR0FBVyxFQUFFLENBQUM7Ozs7UUFFdkIsc0JBQWlCLEdBQXFCLG1CQUFBLElBQUksRUFBQyxDQUFDOzs7O1FBRTVDLHNCQUFpQixHQUFxQixtQkFBQSxJQUFJLEVBQUMsQ0FBQzs7OztRQUU1Qyx3QkFBbUIsR0FBOEMsRUFBRSxDQUFDO0lBaUh0RSxDQUFDOzs7OztJQS9HQyxjQUFjLENBQUMsR0FBVztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEdBQVc7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMs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QyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNuQixPQUFPLG1CQUFBLElBQUksRUFBQyxDQUFDO0lBQ2YsQ0FBQzs7O1lBOUhGLFVBQVU7Ozs7SUFFVCxpQ0FBMEI7Ozs7O0lBQzFCLCtCQUFzRTs7Ozs7SUFDdEUsb0NBQWtDOzs7OztJQUVsQywrQkFBaUQ7Ozs7O0lBRWpELGdDQUF1Qjs7Ozs7SUFFdkIsd0NBQTRDOzs7OztJQUU1Qyx3Q0FBNEM7Ozs7O0lBRTVDLDBDQUFvRTs7QUFtSHRFLE1BQU0sYUFBYTs7Ozs7O0lBQ2pCLFlBQW1CLElBQVksRUFBUyxLQUFhLEVBQVMsS0FBVTtRQUFyRCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQUs7SUFBRyxDQUFDO0NBQzdFOzs7SUFEYSw2QkFBbUI7O0lBQUUsOEJBQW9COztJQUFFLDhCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneSwgUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9uTGlrZX0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQSBzcHkgZm9yIHtAbGluayBMb2NhdGlvbn0gdGhhdCBhbGxvd3MgdGVzdHMgdG8gZmlyZSBzaW11bGF0ZWQgbG9jYXRpb24gZXZlbnRzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNweUxvY2F0aW9uIGltcGxlbWVudHMgTG9jYXRpb24ge1xuICB1cmxDaGFuZ2VzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIF9oaXN0b3J5OiBMb2NhdGlvblN0YXRlW10gPSBbbmV3IExvY2F0aW9uU3RhdGUoJycsICcnLCBudWxsKV07XG4gIHByaXZhdGUgX2hpc3RvcnlJbmRleDogbnVtYmVyID0gMDtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc3ViamVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Jhc2VIcmVmOiBzdHJpbmcgPSAnJztcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGxhdGZvcm1TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSA9IG51bGwhO1xuICAvKiogQGludGVybmFsICovXG4gIF9wbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uID0gbnVsbCE7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3VybENoYW5nZUxpc3RlbmVyczogKCh1cmw6IHN0cmluZywgc3RhdGU6IHVua25vd24pID0+IHZvaWQpW10gPSBbXTtcblxuICBzZXRJbml0aWFsUGF0aCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuX2hpc3RvcnlbdGhpcy5faGlzdG9yeUluZGV4XS5wYXRoID0gdXJsO1xuICB9XG5cbiAgc2V0QmFzZUhyZWYodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iYXNlSHJlZiA9IHVybDtcbiAgfVxuXG4gIHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faGlzdG9yeVt0aGlzLl9oaXN0b3J5SW5kZXhdLnBhdGg7XG4gIH1cblxuICBnZXRTdGF0ZSgpOiB1bmtub3duIHtcbiAgICByZXR1cm4gdGhpcy5faGlzdG9yeVt0aGlzLl9oaXN0b3J5SW5kZXhdLnN0YXRlO1xuICB9XG5cbiAgaXNDdXJyZW50UGF0aEVxdWFsVG8ocGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nID0gJycpOiBib29sZWFuIHtcbiAgICBjb25zdCBnaXZlblBhdGggPSBwYXRoLmVuZHNXaXRoKCcvJykgPyBwYXRoLnN1YnN0cmluZygwLCBwYXRoLmxlbmd0aCAtIDEpIDogcGF0aDtcbiAgICBjb25zdCBjdXJyUGF0aCA9XG4gICAgICAgIHRoaXMucGF0aCgpLmVuZHNXaXRoKCcvJykgPyB0aGlzLnBhdGgoKS5zdWJzdHJpbmcoMCwgdGhpcy5wYXRoKCkubGVuZ3RoIC0gMSkgOiB0aGlzLnBhdGgoKTtcblxuICAgIHJldHVybiBjdXJyUGF0aCA9PSBnaXZlblBhdGggKyAocXVlcnkubGVuZ3RoID4gMCA/ICgnPycgKyBxdWVyeSkgOiAnJyk7XG4gIH1cblxuICBzaW11bGF0ZVVybFBvcChwYXRobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3ViamVjdC5lbWl0KHsndXJsJzogcGF0aG5hbWUsICdwb3AnOiB0cnVlLCAndHlwZSc6ICdwb3BzdGF0ZSd9KTtcbiAgfVxuXG4gIHNpbXVsYXRlSGFzaENoYW5nZShwYXRobmFtZTogc3RyaW5nKSB7XG4gICAgLy8gQmVjYXVzZSB3ZSBkb24ndCBwcmV2ZW50IHRoZSBuYXRpdmUgZXZlbnQsIHRoZSBicm93c2VyIHdpbGwgaW5kZXBlbmRlbnRseSB1cGRhdGUgdGhlIHBhdGhcbiAgICB0aGlzLnNldEluaXRpYWxQYXRoKHBhdGhuYW1lKTtcbiAgICB0aGlzLnVybENoYW5nZXMucHVzaCgnaGFzaDogJyArIHBhdGhuYW1lKTtcbiAgICB0aGlzLl9zdWJqZWN0LmVtaXQoeyd1cmwnOiBwYXRobmFtZSwgJ3BvcCc6IHRydWUsICd0eXBlJzogJ2hhc2hjaGFuZ2UnfSk7XG4gIH1cblxuICBwcmVwYXJlRXh0ZXJuYWxVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh1cmwubGVuZ3RoID4gMCAmJiAhdXJsLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgdXJsID0gJy8nICsgdXJsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYmFzZUhyZWYgKyB1cmw7XG4gIH1cblxuICBnbyhwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcgPSAnJywgc3RhdGU6IGFueSA9IG51bGwpIHtcbiAgICBwYXRoID0gdGhpcy5wcmVwYXJlRXh0ZXJuYWxVcmwocGF0aCk7XG5cbiAgICBpZiAodGhpcy5faGlzdG9yeUluZGV4ID4gMCkge1xuICAgICAgdGhpcy5faGlzdG9yeS5zcGxpY2UodGhpcy5faGlzdG9yeUluZGV4ICsgMSk7XG4gICAgfVxuICAgIHRoaXMuX2hpc3RvcnkucHVzaChuZXcgTG9jYXRpb25TdGF0ZShwYXRoLCBxdWVyeSwgc3RhdGUpKTtcbiAgICB0aGlzLl9oaXN0b3J5SW5kZXggPSB0aGlzLl9oaXN0b3J5Lmxlbmd0aCAtIDE7XG5cbiAgICBjb25zdCBsb2NhdGlvblN0YXRlID0gdGhpcy5faGlzdG9yeVt0aGlzLl9oaXN0b3J5SW5kZXggLSAxXTtcbiAgICBpZiAobG9jYXRpb25TdGF0ZS5wYXRoID09IHBhdGggJiYgbG9jYXRpb25TdGF0ZS5xdWVyeSA9PSBxdWVyeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHBhdGggKyAocXVlcnkubGVuZ3RoID4gMCA/ICgnPycgKyBxdWVyeSkgOiAnJyk7XG4gICAgdGhpcy51cmxDaGFuZ2VzLnB1c2godXJsKTtcbiAgICB0aGlzLl9zdWJqZWN0LmVtaXQoeyd1cmwnOiB1cmwsICdwb3AnOiBmYWxzZX0pO1xuICB9XG5cbiAgcmVwbGFjZVN0YXRlKHBhdGg6IHN0cmluZywgcXVlcnk6IHN0cmluZyA9ICcnLCBzdGF0ZTogYW55ID0gbnVsbCkge1xuICAgIHBhdGggPSB0aGlzLnByZXBhcmVFeHRlcm5hbFVybChwYXRoKTtcblxuICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLl9oaXN0b3J5W3RoaXMuX2hpc3RvcnlJbmRleF07XG4gICAgaWYgKGhpc3RvcnkucGF0aCA9PSBwYXRoICYmIGhpc3RvcnkucXVlcnkgPT0gcXVlcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoaXN0b3J5LnBhdGggPSBwYXRoO1xuICAgIGhpc3RvcnkucXVlcnkgPSBxdWVyeTtcbiAgICBoaXN0b3J5LnN0YXRlID0gc3RhdGU7XG5cbiAgICBjb25zdCB1cmwgPSBwYXRoICsgKHF1ZXJ5Lmxlbmd0aCA+IDAgPyAoJz8nICsgcXVlcnkpIDogJycpO1xuICAgIHRoaXMudXJsQ2hhbmdlcy5wdXNoKCdyZXBsYWNlOiAnICsgdXJsKTtcbiAgfVxuXG4gIGZvcndhcmQoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnlJbmRleCA8ICh0aGlzLl9oaXN0b3J5Lmxlbmd0aCAtIDEpKSB7XG4gICAgICB0aGlzLl9oaXN0b3J5SW5kZXgrKztcbiAgICAgIHRoaXMuX3N1YmplY3QuZW1pdCh7J3VybCc6IHRoaXMucGF0aCgpLCAnc3RhdGUnOiB0aGlzLmdldFN0YXRlKCksICdwb3AnOiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgYmFjaygpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeUluZGV4ID4gMCkge1xuICAgICAgdGhpcy5faGlzdG9yeUluZGV4LS07XG4gICAgICB0aGlzLl9zdWJqZWN0LmVtaXQoeyd1cmwnOiB0aGlzLnBhdGgoKSwgJ3N0YXRlJzogdGhpcy5nZXRTdGF0ZSgpLCAncG9wJzogdHJ1ZX0pO1xuICAgIH1cbiAgfVxuICBvblVybENoYW5nZShmbjogKHVybDogc3RyaW5nLCBzdGF0ZTogdW5rbm93bikgPT4gdm9pZCkge1xuICAgIHRoaXMuX3VybENoYW5nZUxpc3RlbmVycy5wdXNoKGZuKTtcbiAgICB0aGlzLnN1YnNjcmliZSh2ID0+IHtcbiAgICAgIHRoaXMuX25vdGlmeVVybENoYW5nZUxpc3RlbmVycyh2LnVybCwgdi5zdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9ub3RpZnlVcmxDaGFuZ2VMaXN0ZW5lcnModXJsOiBzdHJpbmcgPSAnJywgc3RhdGU6IHVua25vd24pIHtcbiAgICB0aGlzLl91cmxDaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbih1cmwsIHN0YXRlKSk7XG4gIH1cblxuICBzdWJzY3JpYmUoXG4gICAgICBvbk5leHQ6ICh2YWx1ZTogYW55KSA9PiB2b2lkLCBvblRocm93PzogKChlcnJvcjogYW55KSA9PiB2b2lkKXxudWxsLFxuICAgICAgb25SZXR1cm4/OiAoKCkgPT4gdm9pZCl8bnVsbCk6IFN1YnNjcmlwdGlvbkxpa2Uge1xuICAgIHJldHVybiB0aGlzLl9zdWJqZWN0LnN1YnNjcmliZSh7bmV4dDogb25OZXh0LCBlcnJvcjogb25UaHJvdywgY29tcGxldGU6IG9uUmV0dXJufSk7XG4gIH1cblxuICBub3JtYWxpemUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBudWxsITtcbiAgfVxufVxuXG5jbGFzcyBMb2NhdGlvblN0YXRlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHBhdGg6IHN0cmluZywgcHVibGljIHF1ZXJ5OiBzdHJpbmcsIHB1YmxpYyBzdGF0ZTogYW55KSB7fVxufVxuIl19