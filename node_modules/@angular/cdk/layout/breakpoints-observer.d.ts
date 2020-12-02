/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone, OnDestroy } from '@angular/core';
import { MediaMatcher } from './media-matcher';
import { Observable } from 'rxjs';
/** The current state of a layout breakpoint. */
import * as ɵngcc0 from '@angular/core';
export interface BreakpointState {
    /** Whether the breakpoint is currently matching. */
    matches: boolean;
    /**
     * A key boolean pair for each query provided to the observe method,
     * with its current matched state.
     */
    breakpoints: {
        [key: string]: boolean;
    };
}
/** Utility for checking the matching state of @media queries. */
export declare class BreakpointObserver implements OnDestroy {
    private _mediaMatcher;
    private _zone;
    /**  A map of all media queries currently being listened for. */
    private _queries;
    /** A subject for all other observables to takeUntil based on. */
    private _destroySubject;
    constructor(_mediaMatcher: MediaMatcher, _zone: NgZone);
    /** Completes the active subject, signalling to all other observables to complete. */
    ngOnDestroy(): void;
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    isMatched(value: string | string[]): boolean;
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    observe(value: string | string[]): Observable<BreakpointState>;
    /** Registers a specific query to be listened for. */
    private _registerQuery;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BreakpointObserver, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludHMtb2JzZXJ2ZXIuZC50cyIsInNvdXJjZXMiOlsiYnJlYWtwb2ludHMtb2JzZXJ2ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnLi9tZWRpYS1tYXRjaGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8qKiBUaGUgY3VycmVudCBzdGF0ZSBvZiBhIGxheW91dCBicmVha3BvaW50LiAqL1xuZXhwb3J0IGludGVyZmFjZSBCcmVha3BvaW50U3RhdGUge1xuICAgIC8qKiBXaGV0aGVyIHRoZSBicmVha3BvaW50IGlzIGN1cnJlbnRseSBtYXRjaGluZy4gKi9cbiAgICBtYXRjaGVzOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEEga2V5IGJvb2xlYW4gcGFpciBmb3IgZWFjaCBxdWVyeSBwcm92aWRlZCB0byB0aGUgb2JzZXJ2ZSBtZXRob2QsXG4gICAgICogd2l0aCBpdHMgY3VycmVudCBtYXRjaGVkIHN0YXRlLlxuICAgICAqL1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGJvb2xlYW47XG4gICAgfTtcbn1cbi8qKiBVdGlsaXR5IGZvciBjaGVja2luZyB0aGUgbWF0Y2hpbmcgc3RhdGUgb2YgQG1lZGlhIHF1ZXJpZXMuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCcmVha3BvaW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX21lZGlhTWF0Y2hlcjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIC8qKiAgQSBtYXAgb2YgYWxsIG1lZGlhIHF1ZXJpZXMgY3VycmVudGx5IGJlaW5nIGxpc3RlbmVkIGZvci4gKi9cbiAgICBwcml2YXRlIF9xdWVyaWVzO1xuICAgIC8qKiBBIHN1YmplY3QgZm9yIGFsbCBvdGhlciBvYnNlcnZhYmxlcyB0byB0YWtlVW50aWwgYmFzZWQgb24uICovXG4gICAgcHJpdmF0ZSBfZGVzdHJveVN1YmplY3Q7XG4gICAgY29uc3RydWN0b3IoX21lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLCBfem9uZTogTmdab25lKTtcbiAgICAvKiogQ29tcGxldGVzIHRoZSBhY3RpdmUgc3ViamVjdCwgc2lnbmFsbGluZyB0byBhbGwgb3RoZXIgb2JzZXJ2YWJsZXMgdG8gY29tcGxldGUuICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9uZSBvciBtb3JlIG1lZGlhIHF1ZXJpZXMgbWF0Y2ggdGhlIGN1cnJlbnQgdmlld3BvcnQgc2l6ZS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgT25lIG9yIG1vcmUgbWVkaWEgcXVlcmllcyB0byBjaGVjay5cbiAgICAgKiBAcmV0dXJucyBXaGV0aGVyIGFueSBvZiB0aGUgbWVkaWEgcXVlcmllcyBtYXRjaC5cbiAgICAgKi9cbiAgICBpc01hdGNoZWQodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIG9ic2VydmFibGUgb2YgcmVzdWx0cyBmb3IgdGhlIGdpdmVuIHF1ZXJpZXMgdGhhdCB3aWxsIGVtaXQgbmV3IHJlc3VsdHMgZm9yIGFueSBjaGFuZ2VzXG4gICAgICogaW4gbWF0Y2hpbmcgb2YgdGhlIGdpdmVuIHF1ZXJpZXMuXG4gICAgICogQHBhcmFtIHZhbHVlIE9uZSBvciBtb3JlIG1lZGlhIHF1ZXJpZXMgdG8gY2hlY2suXG4gICAgICogQHJldHVybnMgQSBzdHJlYW0gb2YgbWF0Y2hlcyBmb3IgdGhlIGdpdmVuIHF1ZXJpZXMuXG4gICAgICovXG4gICAgb2JzZXJ2ZSh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pOiBPYnNlcnZhYmxlPEJyZWFrcG9pbnRTdGF0ZT47XG4gICAgLyoqIFJlZ2lzdGVycyBhIHNwZWNpZmljIHF1ZXJ5IHRvIGJlIGxpc3RlbmVkIGZvci4gKi9cbiAgICBwcml2YXRlIF9yZWdpc3RlclF1ZXJ5O1xufVxuIl19