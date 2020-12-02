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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollDispatcher, [null, null, { optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWRpc3BhdGNoZXIuZC50cyIsInNvdXJjZXMiOlsic2Nyb2xsLWRpc3BhdGNoZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDZGtTY3JvbGxhYmxlIH0gZnJvbSAnLi9zY3JvbGxhYmxlJztcbi8qKiBUaW1lIGluIG1zIHRvIHRocm90dGxlIHRoZSBzY3JvbGxpbmcgZXZlbnRzIGJ5IGRlZmF1bHQuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBERUZBVUxUX1NDUk9MTF9USU1FID0gMjA7XG4vKipcbiAqIFNlcnZpY2UgY29udGFpbmVkIGFsbCByZWdpc3RlcmVkIFNjcm9sbGFibGUgcmVmZXJlbmNlcyBhbmQgZW1pdHMgYW4gZXZlbnQgd2hlbiBhbnkgb25lIG9mIHRoZVxuICogU2Nyb2xsYWJsZSByZWZlcmVuY2VzIGVtaXQgYSBzY3JvbGxlZCBldmVudC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2Nyb2xsRGlzcGF0Y2hlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIHByaXZhdGUgX3BsYXRmb3JtO1xuICAgIC8qKiBVc2VkIHRvIHJlZmVyZW5jZSBjb3JyZWN0IGRvY3VtZW50L3dpbmRvdyAqL1xuICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ/OiBEb2N1bWVudDtcbiAgICBjb25zdHJ1Y3Rvcihfbmdab25lOiBOZ1pvbmUsIF9wbGF0Zm9ybTogUGxhdGZvcm0sIFxuICAgIC8qKiBAYnJlYWtpbmctY2hhbmdlIDExLjAuMCBtYWtlIGRvY3VtZW50IHJlcXVpcmVkICovXG4gICAgZG9jdW1lbnQ/OiBhbnkpO1xuICAgIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhhdCBhIHJlZ2lzdGVyZWQgc2Nyb2xsYWJsZSByZWZlcmVuY2UgZWxlbWVudCBoYXMgYmVlbiBzY3JvbGxlZC4gKi9cbiAgICBwcml2YXRlIF9zY3JvbGxlZDtcbiAgICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIGdsb2JhbCBgc2Nyb2xsYCBhbmQgYHJlc2l6ZWAgc3Vic2NyaXB0aW9ucy4gKi9cbiAgICBfZ2xvYmFsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsO1xuICAgIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgYW1vdW50IG9mIHN1YnNjcmlwdGlvbnMgdG8gYHNjcm9sbGVkYC4gVXNlZCBmb3IgY2xlYW5pbmcgdXAgYWZ0ZXJ3YXJkcy4gKi9cbiAgICBwcml2YXRlIF9zY3JvbGxlZENvdW50O1xuICAgIC8qKlxuICAgICAqIE1hcCBvZiBhbGwgdGhlIHNjcm9sbGFibGUgcmVmZXJlbmNlcyB0aGF0IGFyZSByZWdpc3RlcmVkIHdpdGggdGhlIHNlcnZpY2UgYW5kIHRoZWlyXG4gICAgICogc2Nyb2xsIGV2ZW50IHN1YnNjcmlwdGlvbnMuXG4gICAgICovXG4gICAgc2Nyb2xsQ29udGFpbmVyczogTWFwPENka1Njcm9sbGFibGUsIFN1YnNjcmlwdGlvbj47XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgc2Nyb2xsYWJsZSBpbnN0YW5jZSB3aXRoIHRoZSBzZXJ2aWNlIGFuZCBsaXN0ZW5zIGZvciBpdHMgc2Nyb2xsZWQgZXZlbnRzLiBXaGVuIHRoZVxuICAgICAqIHNjcm9sbGFibGUgaXMgc2Nyb2xsZWQsIHRoZSBzZXJ2aWNlIGVtaXRzIHRoZSBldmVudCB0byBpdHMgc2Nyb2xsZWQgb2JzZXJ2YWJsZS5cbiAgICAgKiBAcGFyYW0gc2Nyb2xsYWJsZSBTY3JvbGxhYmxlIGluc3RhbmNlIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAgICovXG4gICAgcmVnaXN0ZXIoc2Nyb2xsYWJsZTogQ2RrU2Nyb2xsYWJsZSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRGVyZWdpc3RlcnMgYSBTY3JvbGxhYmxlIHJlZmVyZW5jZSBhbmQgdW5zdWJzY3JpYmVzIGZyb20gaXRzIHNjcm9sbCBldmVudCBvYnNlcnZhYmxlLlxuICAgICAqIEBwYXJhbSBzY3JvbGxhYmxlIFNjcm9sbGFibGUgaW5zdGFuY2UgdG8gYmUgZGVyZWdpc3RlcmVkLlxuICAgICAqL1xuICAgIGRlcmVnaXN0ZXIoc2Nyb2xsYWJsZTogQ2RrU2Nyb2xsYWJsZSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgYW4gZXZlbnQgd2hlbmV2ZXIgYW55IG9mIHRoZSByZWdpc3RlcmVkIFNjcm9sbGFibGVcbiAgICAgKiByZWZlcmVuY2VzIChvciB3aW5kb3csIGRvY3VtZW50LCBvciBib2R5KSBmaXJlIGEgc2Nyb2xsZWQgZXZlbnQuIENhbiBwcm92aWRlIGEgdGltZSBpbiBtc1xuICAgICAqIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IFwidGhyb3R0bGVcIiB0aW1lLlxuICAgICAqXG4gICAgICogKipOb3RlOioqIGluIG9yZGVyIHRvIGF2b2lkIGhpdHRpbmcgY2hhbmdlIGRldGVjdGlvbiBmb3IgZXZlcnkgc2Nyb2xsIGV2ZW50LFxuICAgICAqIGFsbCBvZiB0aGUgZXZlbnRzIGVtaXR0ZWQgZnJvbSB0aGlzIHN0cmVhbSB3aWxsIGJlIHJ1biBvdXRzaWRlIHRoZSBBbmd1bGFyIHpvbmUuXG4gICAgICogSWYgeW91IG5lZWQgdG8gdXBkYXRlIGFueSBkYXRhIGJpbmRpbmdzIGFzIGEgcmVzdWx0IG9mIGEgc2Nyb2xsIGV2ZW50LCB5b3UgaGF2ZVxuICAgICAqIHRvIHJ1biB0aGUgY2FsbGJhY2sgdXNpbmcgYE5nWm9uZS5ydW5gLlxuICAgICAqL1xuICAgIHNjcm9sbGVkKGF1ZGl0VGltZUluTXM/OiBudW1iZXIpOiBPYnNlcnZhYmxlPENka1Njcm9sbGFibGUgfCB2b2lkPjtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW5ldmVyIGFueSBvZiB0aGVcbiAgICAgKiBzY3JvbGxhYmxlIGFuY2VzdG9ycyBvZiBhbiBlbGVtZW50IGFyZSBzY3JvbGxlZC5cbiAgICAgKiBAcGFyYW0gZWxlbWVudFJlZiBFbGVtZW50IHdob3NlIGFuY2VzdG9ycyB0byBsaXN0ZW4gZm9yLlxuICAgICAqIEBwYXJhbSBhdWRpdFRpbWVJbk1zIFRpbWUgdG8gdGhyb3R0bGUgdGhlIHNjcm9sbCBldmVudHMuXG4gICAgICovXG4gICAgYW5jZXN0b3JTY3JvbGxlZChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBhdWRpdFRpbWVJbk1zPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxDZGtTY3JvbGxhYmxlIHwgdm9pZD47XG4gICAgLyoqIFJldHVybnMgYWxsIHJlZ2lzdGVyZWQgU2Nyb2xsYWJsZXMgdGhhdCBjb250YWluIHRoZSBwcm92aWRlZCBlbGVtZW50LiAqL1xuICAgIGdldEFuY2VzdG9yU2Nyb2xsQ29udGFpbmVycyhlbGVtZW50UmVmOiBFbGVtZW50UmVmKTogQ2RrU2Nyb2xsYWJsZVtdO1xuICAgIC8qKiBBY2Nlc3MgaW5qZWN0ZWQgZG9jdW1lbnQgaWYgYXZhaWxhYmxlIG9yIGZhbGxiYWNrIHRvIGdsb2JhbCBkb2N1bWVudCByZWZlcmVuY2UgKi9cbiAgICBwcml2YXRlIF9nZXREb2N1bWVudDtcbiAgICAvKiogVXNlIGRlZmF1bHRWaWV3IG9mIGluamVjdGVkIGRvY3VtZW50IGlmIGF2YWlsYWJsZSBvciBmYWxsYmFjayB0byBnbG9iYWwgd2luZG93IHJlZmVyZW5jZSAqL1xuICAgIHByaXZhdGUgX2dldFdpbmRvdztcbiAgICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIHByb3ZpZGVkIFNjcm9sbGFibGUuICovXG4gICAgcHJpdmF0ZSBfc2Nyb2xsYWJsZUNvbnRhaW5zRWxlbWVudDtcbiAgICAvKiogU2V0cyB1cCB0aGUgZ2xvYmFsIHNjcm9sbCBsaXN0ZW5lcnMuICovXG4gICAgcHJpdmF0ZSBfYWRkR2xvYmFsTGlzdGVuZXI7XG4gICAgLyoqIENsZWFucyB1cCB0aGUgZ2xvYmFsIHNjcm9sbCBsaXN0ZW5lci4gKi9cbiAgICBwcml2YXRlIF9yZW1vdmVHbG9iYWxMaXN0ZW5lcjtcbn1cbiJdfQ==