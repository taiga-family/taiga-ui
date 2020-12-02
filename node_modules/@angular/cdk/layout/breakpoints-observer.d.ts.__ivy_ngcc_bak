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
}
