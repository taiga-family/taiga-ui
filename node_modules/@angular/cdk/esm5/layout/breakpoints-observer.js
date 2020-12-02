/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, NgZone } from '@angular/core';
import { MediaMatcher } from './media-matcher';
import { combineLatest, concat, Observable, Subject } from 'rxjs';
import { debounceTime, map, skip, startWith, take, takeUntil } from 'rxjs/operators';
import { coerceArray } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "./media-matcher";
/** Utility for checking the matching state of @media queries. */
var BreakpointObserver = /** @class */ (function () {
    function BreakpointObserver(_mediaMatcher, _zone) {
        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**  A map of all media queries currently being listened for. */
        this._queries = new Map();
        /** A subject for all other observables to takeUntil based on. */
        this._destroySubject = new Subject();
    }
    /** Completes the active subject, signalling to all other observables to complete. */
    BreakpointObserver.prototype.ngOnDestroy = function () {
        this._destroySubject.next();
        this._destroySubject.complete();
    };
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    BreakpointObserver.prototype.isMatched = function (value) {
        var _this = this;
        var queries = splitQueries(coerceArray(value));
        return queries.some(function (mediaQuery) { return _this._registerQuery(mediaQuery).mql.matches; });
    };
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    BreakpointObserver.prototype.observe = function (value) {
        var _this = this;
        var queries = splitQueries(coerceArray(value));
        var observables = queries.map(function (query) { return _this._registerQuery(query).observable; });
        var stateObservable = combineLatest(observables);
        // Emit the first state immediately, and then debounce the subsequent emissions.
        stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
        return stateObservable.pipe(map(function (breakpointStates) {
            var response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach(function (state) {
                response.matches = response.matches || state.matches;
                response.breakpoints[state.query] = state.matches;
            });
            return response;
        }));
    };
    /** Registers a specific query to be listened for. */
    BreakpointObserver.prototype._registerQuery = function (query) {
        var _this = this;
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return this._queries.get(query);
        }
        var mql = this._mediaMatcher.matchMedia(query);
        // Create callback for match changes and add it is as a listener.
        var queryObservable = new Observable(function (observer) {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.
            var handler = function (e) { return _this._zone.run(function () { return observer.next(e); }); };
            mql.addListener(handler);
            return function () {
                mql.removeListener(handler);
            };
        }).pipe(startWith(mql), map(function (nextMql) { return ({ query: query, matches: nextMql.matches }); }), takeUntil(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        var output = { observable: queryObservable, mql: mql };
        this._queries.set(query, output);
        return output;
    };
    BreakpointObserver.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    BreakpointObserver.ctorParameters = function () { return [
        { type: MediaMatcher },
        { type: NgZone }
    ]; };
    BreakpointObserver.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(i0.ɵɵinject(i1.MediaMatcher), i0.ɵɵinject(i0.NgZone)); }, token: BreakpointObserver, providedIn: "root" });
    return BreakpointObserver;
}());
export { BreakpointObserver };
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
    return queries.map(function (query) { return query.split(','); })
        .reduce(function (a1, a2) { return a1.concat(a2); })
        .map(function (query) { return query.trim(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludHMtb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2xheW91dC9icmVha3BvaW50cy1vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUMxRSxPQUFPLEVBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7OztBQTZCbEQsaUVBQWlFO0FBQ2pFO0lBT0UsNEJBQW9CLGFBQTJCLEVBQVUsS0FBYTtRQUFsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7UUFMdEUsZ0VBQWdFO1FBQ3hELGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztRQUM1QyxpRUFBaUU7UUFDekQsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRTJCLENBQUM7SUFFMUUscUZBQXFGO0lBQ3JGLHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxzQ0FBUyxHQUFULFVBQVUsS0FBd0I7UUFBbEMsaUJBR0M7UUFGQyxJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsb0NBQU8sR0FBUCxVQUFRLEtBQXdCO1FBQWhDLGlCQW9CQztRQW5CQyxJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFyQyxDQUFxQyxDQUFDLENBQUM7UUFFaEYsSUFBSSxlQUFlLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELGdGQUFnRjtRQUNoRixlQUFlLEdBQUcsTUFBTSxDQUN0QixlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM3QixlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxnQkFBMkM7WUFDMUUsSUFBTSxRQUFRLEdBQW9CO2dCQUNoQyxPQUFPLEVBQUUsS0FBSztnQkFDZCxXQUFXLEVBQUUsRUFBRTthQUNoQixDQUFDO1lBQ0YsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBOEI7Z0JBQ3RELFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNyRCxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxxREFBcUQ7SUFDN0MsMkNBQWMsR0FBdEIsVUFBdUIsS0FBYTtRQUFwQyxpQkErQkM7UUE5QkMsNEVBQTRFO1FBQzVFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUUsQ0FBQztTQUNsQztRQUVELElBQU0sR0FBRyxHQUFtQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqRSxpRUFBaUU7UUFDakUsSUFBTSxlQUFlLEdBQUcsSUFBSSxVQUFVLENBQWlCLFVBQUMsUUFBa0M7WUFDeEYsOEZBQThGO1lBQzlGLG1GQUFtRjtZQUNuRiw4RkFBOEY7WUFDOUYsNEZBQTRGO1lBQzVGLGNBQWM7WUFDZCxJQUFNLE9BQU8sR0FBRyxVQUFDLENBQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFDLEVBQXRDLENBQXNDLENBQUM7WUFDbkUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV6QixPQUFPO2dCQUNMLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNMLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDZCxHQUFHLENBQUMsVUFBQyxPQUF1QixJQUFLLE9BQUEsQ0FBQyxFQUFDLEtBQUssT0FBQSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxFQUNyRSxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUNoQyxDQUFDO1FBRUYsZ0RBQWdEO1FBQ2hELElBQU0sTUFBTSxHQUFHLEVBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUEsRUFBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkFyRkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztnQkFqQ3hCLFlBQVk7Z0JBREEsTUFBTTs7OzZCQVIxQjtDQWdJQyxBQXRGRCxJQXNGQztTQXJGWSxrQkFBa0I7QUF1Ri9COzs7R0FHRztBQUNILFNBQVMsWUFBWSxDQUFDLE9BQWlCO0lBQ3JDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUM7U0FDeEMsTUFBTSxDQUFDLFVBQUMsRUFBWSxFQUFFLEVBQVksSUFBSyxPQUFBLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQWIsQ0FBYSxDQUFDO1NBQ3JELEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQztBQUM1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lLCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZWRpYU1hdGNoZXJ9IGZyb20gJy4vbWVkaWEtbWF0Y2hlcic7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIGNvbmNhdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIG1hcCwgc2tpcCwgc3RhcnRXaXRoLCB0YWtlLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Y29lcmNlQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cblxuLyoqIFRoZSBjdXJyZW50IHN0YXRlIG9mIGEgbGF5b3V0IGJyZWFrcG9pbnQuICovXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFrcG9pbnRTdGF0ZSB7XG4gIC8qKiBXaGV0aGVyIHRoZSBicmVha3BvaW50IGlzIGN1cnJlbnRseSBtYXRjaGluZy4gKi9cbiAgbWF0Y2hlczogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEga2V5IGJvb2xlYW4gcGFpciBmb3IgZWFjaCBxdWVyeSBwcm92aWRlZCB0byB0aGUgb2JzZXJ2ZSBtZXRob2QsXG4gICAqIHdpdGggaXRzIGN1cnJlbnQgbWF0Y2hlZCBzdGF0ZS5cbiAgICovXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcbiAgfTtcbn1cblxuLyoqIFRoZSBjdXJyZW50IHN0YXRlIG9mIGEgbGF5b3V0IGJyZWFrcG9pbnQuICovXG5pbnRlcmZhY2UgSW50ZXJuYWxCcmVha3BvaW50U3RhdGUge1xuICAvKiogV2hldGhlciB0aGUgYnJlYWtwb2ludCBpcyBjdXJyZW50bHkgbWF0Y2hpbmcuICovXG4gIG1hdGNoZXM6IGJvb2xlYW47XG4gIC8qKiBUaGUgbWVkaWEgcXVlcnkgYmVpbmcgdG8gYmUgbWF0Y2hlZCAqL1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUXVlcnkge1xuICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPEludGVybmFsQnJlYWtwb2ludFN0YXRlPjtcbiAgbXFsOiBNZWRpYVF1ZXJ5TGlzdDtcbn1cblxuLyoqIFV0aWxpdHkgZm9yIGNoZWNraW5nIHRoZSBtYXRjaGluZyBzdGF0ZSBvZiBAbWVkaWEgcXVlcmllcy4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEJyZWFrcG9pbnRPYnNlcnZlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiAgQSBtYXAgb2YgYWxsIG1lZGlhIHF1ZXJpZXMgY3VycmVudGx5IGJlaW5nIGxpc3RlbmVkIGZvci4gKi9cbiAgcHJpdmF0ZSBfcXVlcmllcyA9IG5ldyBNYXA8c3RyaW5nLCBRdWVyeT4oKTtcbiAgLyoqIEEgc3ViamVjdCBmb3IgYWxsIG90aGVyIG9ic2VydmFibGVzIHRvIHRha2VVbnRpbCBiYXNlZCBvbi4gKi9cbiAgcHJpdmF0ZSBfZGVzdHJveVN1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLCBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHt9XG5cbiAgLyoqIENvbXBsZXRlcyB0aGUgYWN0aXZlIHN1YmplY3QsIHNpZ25hbGxpbmcgdG8gYWxsIG90aGVyIG9ic2VydmFibGVzIHRvIGNvbXBsZXRlLiAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95U3ViamVjdC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveVN1YmplY3QuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9uZSBvciBtb3JlIG1lZGlhIHF1ZXJpZXMgbWF0Y2ggdGhlIGN1cnJlbnQgdmlld3BvcnQgc2l6ZS5cbiAgICogQHBhcmFtIHZhbHVlIE9uZSBvciBtb3JlIG1lZGlhIHF1ZXJpZXMgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgYW55IG9mIHRoZSBtZWRpYSBxdWVyaWVzIG1hdGNoLlxuICAgKi9cbiAgaXNNYXRjaGVkKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHF1ZXJpZXMgPSBzcGxpdFF1ZXJpZXMoY29lcmNlQXJyYXkodmFsdWUpKTtcbiAgICByZXR1cm4gcXVlcmllcy5zb21lKG1lZGlhUXVlcnkgPT4gdGhpcy5fcmVnaXN0ZXJRdWVyeShtZWRpYVF1ZXJ5KS5tcWwubWF0Y2hlcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBvYnNlcnZhYmxlIG9mIHJlc3VsdHMgZm9yIHRoZSBnaXZlbiBxdWVyaWVzIHRoYXQgd2lsbCBlbWl0IG5ldyByZXN1bHRzIGZvciBhbnkgY2hhbmdlc1xuICAgKiBpbiBtYXRjaGluZyBvZiB0aGUgZ2l2ZW4gcXVlcmllcy5cbiAgICogQHBhcmFtIHZhbHVlIE9uZSBvciBtb3JlIG1lZGlhIHF1ZXJpZXMgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIEEgc3RyZWFtIG9mIG1hdGNoZXMgZm9yIHRoZSBnaXZlbiBxdWVyaWVzLlxuICAgKi9cbiAgb2JzZXJ2ZSh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pOiBPYnNlcnZhYmxlPEJyZWFrcG9pbnRTdGF0ZT4ge1xuICAgIGNvbnN0IHF1ZXJpZXMgPSBzcGxpdFF1ZXJpZXMoY29lcmNlQXJyYXkodmFsdWUpKTtcbiAgICBjb25zdCBvYnNlcnZhYmxlcyA9IHF1ZXJpZXMubWFwKHF1ZXJ5ID0+IHRoaXMuX3JlZ2lzdGVyUXVlcnkocXVlcnkpLm9ic2VydmFibGUpO1xuXG4gICAgbGV0IHN0YXRlT2JzZXJ2YWJsZSA9IGNvbWJpbmVMYXRlc3Qob2JzZXJ2YWJsZXMpO1xuICAgIC8vIEVtaXQgdGhlIGZpcnN0IHN0YXRlIGltbWVkaWF0ZWx5LCBhbmQgdGhlbiBkZWJvdW5jZSB0aGUgc3Vic2VxdWVudCBlbWlzc2lvbnMuXG4gICAgc3RhdGVPYnNlcnZhYmxlID0gY29uY2F0KFxuICAgICAgc3RhdGVPYnNlcnZhYmxlLnBpcGUodGFrZSgxKSksXG4gICAgICBzdGF0ZU9ic2VydmFibGUucGlwZShza2lwKDEpLCBkZWJvdW5jZVRpbWUoMCkpKTtcbiAgICByZXR1cm4gc3RhdGVPYnNlcnZhYmxlLnBpcGUobWFwKChicmVha3BvaW50U3RhdGVzOiBJbnRlcm5hbEJyZWFrcG9pbnRTdGF0ZVtdKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZTogQnJlYWtwb2ludFN0YXRlID0ge1xuICAgICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHt9LFxuICAgICAgfTtcbiAgICAgIGJyZWFrcG9pbnRTdGF0ZXMuZm9yRWFjaCgoc3RhdGU6IEludGVybmFsQnJlYWtwb2ludFN0YXRlKSA9PiB7XG4gICAgICAgIHJlc3BvbnNlLm1hdGNoZXMgPSByZXNwb25zZS5tYXRjaGVzIHx8IHN0YXRlLm1hdGNoZXM7XG4gICAgICAgIHJlc3BvbnNlLmJyZWFrcG9pbnRzW3N0YXRlLnF1ZXJ5XSA9IHN0YXRlLm1hdGNoZXM7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KSk7XG4gIH1cblxuICAvKiogUmVnaXN0ZXJzIGEgc3BlY2lmaWMgcXVlcnkgdG8gYmUgbGlzdGVuZWQgZm9yLiAqL1xuICBwcml2YXRlIF9yZWdpc3RlclF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiBRdWVyeSB7XG4gICAgLy8gT25seSBzZXQgdXAgYSBuZXcgTWVkaWFRdWVyeUxpc3QgaWYgaXQgaXMgbm90IGFscmVhZHkgYmVpbmcgbGlzdGVuZWQgZm9yLlxuICAgIGlmICh0aGlzLl9xdWVyaWVzLmhhcyhxdWVyeSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzLmdldChxdWVyeSkhO1xuICAgIH1cblxuICAgIGNvbnN0IG1xbDogTWVkaWFRdWVyeUxpc3QgPSB0aGlzLl9tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShxdWVyeSk7XG5cbiAgICAvLyBDcmVhdGUgY2FsbGJhY2sgZm9yIG1hdGNoIGNoYW5nZXMgYW5kIGFkZCBpdCBpcyBhcyBhIGxpc3RlbmVyLlxuICAgIGNvbnN0IHF1ZXJ5T2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE1lZGlhUXVlcnlMaXN0Pigob2JzZXJ2ZXI6IE9ic2VydmVyPE1lZGlhUXVlcnlMaXN0PikgPT4ge1xuICAgICAgLy8gTGlzdGVuZXIgY2FsbGJhY2sgbWV0aG9kcyBhcmUgd3JhcHBlZCB0byBiZSBwbGFjZWQgYmFjayBpbiBuZ1pvbmUuIENhbGxiYWNrcyBtdXN0IGJlIHBsYWNlZFxuICAgICAgLy8gYmFjayBpbnRvIHRoZSB6b25lIGJlY2F1c2UgbWF0Y2hNZWRpYSBpcyBvbmx5IGluY2x1ZGVkIGluIFpvbmUuanMgYnkgbG9hZGluZyB0aGVcbiAgICAgIC8vIHdlYmFwaXMtbWVkaWEtcXVlcnkuanMgZmlsZSBhbG9uZ3NpZGUgdGhlIHpvbmUuanMgZmlsZS4gIEFkZGl0aW9uYWxseSwgc29tZSBicm93c2VycyBkbyBub3RcbiAgICAgIC8vIGhhdmUgTWVkaWFRdWVyeUxpc3QgaW5oZXJpdCBmcm9tIEV2ZW50VGFyZ2V0LCB3aGljaCBjYXVzZXMgaW5jb25zaXN0ZW5jaWVzIGluIGhvdyBab25lLmpzXG4gICAgICAvLyBwYXRjaGVzIGl0LlxuICAgICAgY29uc3QgaGFuZGxlciA9IChlOiBhbnkpID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpO1xuICAgICAgbXFsLmFkZExpc3RlbmVyKGhhbmRsZXIpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBtcWwucmVtb3ZlTGlzdGVuZXIoaGFuZGxlcik7XG4gICAgICB9O1xuICAgIH0pLnBpcGUoXG4gICAgICBzdGFydFdpdGgobXFsKSxcbiAgICAgIG1hcCgobmV4dE1xbDogTWVkaWFRdWVyeUxpc3QpID0+ICh7cXVlcnksIG1hdGNoZXM6IG5leHRNcWwubWF0Y2hlc30pKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95U3ViamVjdClcbiAgICApO1xuXG4gICAgLy8gQWRkIHRoZSBNZWRpYVF1ZXJ5TGlzdCB0byB0aGUgc2V0IG9mIHF1ZXJpZXMuXG4gICAgY29uc3Qgb3V0cHV0ID0ge29ic2VydmFibGU6IHF1ZXJ5T2JzZXJ2YWJsZSwgbXFsfTtcbiAgICB0aGlzLl9xdWVyaWVzLnNldChxdWVyeSwgb3V0cHV0KTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG59XG5cbi8qKlxuICogU3BsaXQgZWFjaCBxdWVyeSBzdHJpbmcgaW50byBzZXBhcmF0ZSBxdWVyeSBzdHJpbmdzIGlmIHR3byBxdWVyaWVzIGFyZSBwcm92aWRlZCBhcyBjb21tYVxuICogc2VwYXJhdGVkLlxuICovXG5mdW5jdGlvbiBzcGxpdFF1ZXJpZXMocXVlcmllczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBxdWVyaWVzLm1hcCgocXVlcnk6IHN0cmluZykgPT4gcXVlcnkuc3BsaXQoJywnKSlcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhMTogc3RyaW5nW10sIGEyOiBzdHJpbmdbXSkgPT4gYTEuY29uY2F0KGEyKSlcbiAgICAgICAgICAgICAgICAubWFwKHF1ZXJ5ID0+IHF1ZXJ5LnRyaW0oKSk7XG59XG4iXX0=