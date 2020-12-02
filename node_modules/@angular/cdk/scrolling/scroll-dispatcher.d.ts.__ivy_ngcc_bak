/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { ElementRef, NgZone, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { CdkScrollable } from './scrollable';
/** Time in ms to throttle the scrolling events by default. */
export declare const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
export declare class ScrollDispatcher implements OnDestroy {
    private _ngZone;
    private _platform;
    /** Used to reference correct document/window */
    protected _document?: Document;
    constructor(_ngZone: NgZone, _platform: Platform, 
    /** @breaking-change 11.0.0 make document required */
    document?: any);
    /** Subject for notifying that a registered scrollable reference element has been scrolled. */
    private _scrolled;
    /** Keeps track of the global `scroll` and `resize` subscriptions. */
    _globalSubscription: Subscription | null;
    /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
    private _scrolledCount;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     */
    scrollContainers: Map<CdkScrollable, Subscription>;
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    register(scrollable: CdkScrollable): void;
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    deregister(scrollable: CdkScrollable): void;
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    scrolled(auditTimeInMs?: number): Observable<CdkScrollable | void>;
    ngOnDestroy(): void;
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    ancestorScrolled(elementRef: ElementRef, auditTimeInMs?: number): Observable<CdkScrollable | void>;
    /** Returns all registered Scrollables that contain the provided element. */
    getAncestorScrollContainers(elementRef: ElementRef): CdkScrollable[];
    /** Access injected document if available or fallback to global document reference */
    private _getDocument;
    /** Use defaultView of injected document if available or fallback to global window reference */
    private _getWindow;
    /** Returns true if the element is contained within the provided Scrollable. */
    private _scrollableContainsElement;
    /** Sets up the global scroll listeners. */
    private _addGlobalListener;
    /** Cleans up the global scroll listener. */
    private _removeGlobalListener;
}
