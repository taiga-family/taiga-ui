/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/scroll-dispatcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { Injectable, NgZone, Optional, Inject } from '@angular/core';
import { fromEvent, of as observableOf, Subject, Observable } from 'rxjs';
import { auditTime, filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
import * as i2 from "@angular/common";
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
export const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
export class ScrollDispatcher {
    /**
     * @param {?} _ngZone
     * @param {?} _platform
     * @param {?=} document
     */
    constructor(_ngZone, _platform, 
    /** @breaking-change 11.0.0 make document required */
    document) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new Subject();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
        this._document = document;
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe((/**
             * @return {?}
             */
            () => this._scrolled.next(scrollable))));
        }
    }
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    deregister(scrollable) {
        /** @type {?} */
        const scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    }
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
            return observableOf();
        }
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            if (!this._globalSubscription) {
                this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            /** @type {?} */
            const subscription = auditTimeInMs > 0 ?
                this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) :
                this._scrolled.subscribe(observer);
            this._scrolledCount++;
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
                this._scrolledCount--;
                if (!this._scrolledCount) {
                    this._removeGlobalListener();
                }
            });
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeGlobalListener();
        this.scrollContainers.forEach((/**
         * @param {?} _
         * @param {?} container
         * @return {?}
         */
        (_, container) => this.deregister(container)));
        this._scrolled.complete();
    }
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ancestorScrolled(elementRef, auditTimeInMs) {
        /** @type {?} */
        const ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(filter((/**
         * @param {?} target
         * @return {?}
         */
        target => {
            return !target || ancestors.indexOf(target) > -1;
        })));
    }
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    getAncestorScrollContainers(elementRef) {
        /** @type {?} */
        const scrollingContainers = [];
        this.scrollContainers.forEach((/**
         * @param {?} _subscription
         * @param {?} scrollable
         * @return {?}
         */
        (_subscription, scrollable) => {
            if (this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        }));
        return scrollingContainers;
    }
    /**
     * Access injected document if available or fallback to global document reference
     * @private
     * @return {?}
     */
    _getDocument() {
        return this._document || document;
    }
    /**
     * Use defaultView of injected document if available or fallback to global window reference
     * @private
     * @return {?}
     */
    _getWindow() {
        /** @type {?} */
        const doc = this._getDocument();
        return doc.defaultView || window;
    }
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    _scrollableContainsElement(scrollable, elementRef) {
        /** @type {?} */
        let element = elementRef.nativeElement;
        /** @type {?} */
        let scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = (/** @type {?} */ (element)).parentElement);
        return false;
    }
    /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const window = this._getWindow();
            return fromEvent(window.document, 'scroll').subscribe((/**
             * @return {?}
             */
            () => this._scrolled.next()));
        }));
    }
    /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    _removeGlobalListener() {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    }
}
ScrollDispatcher.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ScrollDispatcher.ctorParameters = () => [
    { type: NgZone },
    { type: Platform },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ ScrollDispatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i1.Platform), i0.ɵɵinject(i2.DOCUMENT, 8)); }, token: ScrollDispatcher, providedIn: "root" });
if (false) {
    /**
     * Used to reference correct document/window
     * @type {?}
     * @protected
     */
    ScrollDispatcher.prototype._document;
    /**
     * Subject for notifying that a registered scrollable reference element has been scrolled.
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._scrolled;
    /**
     * Keeps track of the global `scroll` and `resize` subscriptions.
     * @type {?}
     */
    ScrollDispatcher.prototype._globalSubscription;
    /**
     * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._scrolledCount;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     * @type {?}
     */
    ScrollDispatcher.prototype.scrollContainers;
    /**
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3Njcm9sbGluZy9zY3JvbGwtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFhLFVBQVUsRUFBRSxNQUFNLEVBQWEsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsT0FBTyxFQUFnQixVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDaEcsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7O0FBR3pDLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxFQUFFOzs7OztBQU9yQyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFJM0IsWUFBb0IsT0FBZSxFQUNmLFNBQW1CO0lBQzNCLHFEQUFxRDtJQUN2QixRQUFjO1FBSHBDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFVOzs7O1FBTy9CLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBc0IsQ0FBQzs7OztRQUd0RCx3QkFBbUIsR0FBd0IsSUFBSSxDQUFDOzs7O1FBR3hDLG1CQUFjLEdBQUcsQ0FBQyxDQUFDOzs7OztRQU0zQixxQkFBZ0IsR0FBcUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQWhCN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7Ozs7OztJQXNCRCxRQUFRLENBQUMsVUFBeUI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMs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RSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUFuS0YsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztZQWJBLE1BQU07WUFEOUIsUUFBUTs0Q0FzQkQsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7Ozs7Ozs7SUFMeEMscUNBQStCOzs7Ozs7SUFVL0IscUNBQXNEOzs7OztJQUd0RCwrQ0FBZ0Q7Ozs7OztJQUdoRCwwQ0FBMkI7Ozs7OztJQU0zQiw0Q0FBK0Q7Ozs7O0lBcEJuRCxtQ0FBdUI7Ozs7O0lBQ3ZCLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBOZ1pvbmUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2Zyb21FdmVudCwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7YXVkaXRUaW1lLCBmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Q2RrU2Nyb2xsYWJsZX0gZnJvbSAnLi9zY3JvbGxhYmxlJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKiBUaW1lIGluIG1zIHRvIHRocm90dGxlIHRoZSBzY3JvbGxpbmcgZXZlbnRzIGJ5IGRlZmF1bHQuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9TQ1JPTExfVElNRSA9IDIwO1xuXG4vKipcbiAqIFNlcnZpY2UgY29udGFpbmVkIGFsbCByZWdpc3RlcmVkIFNjcm9sbGFibGUgcmVmZXJlbmNlcyBhbmQgZW1pdHMgYW4gZXZlbnQgd2hlbiBhbnkgb25lIG9mIHRoZVxuICogU2Nyb2xsYWJsZSByZWZlcmVuY2VzIGVtaXQgYSBzY3JvbGxlZCBldmVudC5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgU2Nyb2xsRGlzcGF0Y2hlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBVc2VkIHRvIHJlZmVyZW5jZSBjb3JyZWN0IGRvY3VtZW50L3dpbmRvdyAqL1xuICBwcm90ZWN0ZWQgX2RvY3VtZW50PzogRG9jdW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgLyoqIEBicmVha2luZy1jaGFuZ2UgMTEuMC4wIG1ha2UgZG9jdW1lbnQgcmVxdWlyZWQgKi9cbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ/OiBhbnkpIHtcbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgLyoqIFN1YmplY3QgZm9yIG5vdGlmeWluZyB0aGF0IGEgcmVnaXN0ZXJlZCBzY3JvbGxhYmxlIHJlZmVyZW5jZSBlbGVtZW50IGhhcyBiZWVuIHNjcm9sbGVkLiAqL1xuICBwcml2YXRlIF9zY3JvbGxlZCA9IG5ldyBTdWJqZWN0PENka1Njcm9sbGFibGV8dm9pZD4oKTtcblxuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIGdsb2JhbCBgc2Nyb2xsYCBhbmQgYHJlc2l6ZWAgc3Vic2NyaXB0aW9ucy4gKi9cbiAgX2dsb2JhbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBhbW91bnQgb2Ygc3Vic2NyaXB0aW9ucyB0byBgc2Nyb2xsZWRgLiBVc2VkIGZvciBjbGVhbmluZyB1cCBhZnRlcndhcmRzLiAqL1xuICBwcml2YXRlIF9zY3JvbGxlZENvdW50ID0gMDtcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCB0aGUgc2Nyb2xsYWJsZSByZWZlcmVuY2VzIHRoYXQgYXJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgc2VydmljZSBhbmQgdGhlaXJcbiAgICogc2Nyb2xsIGV2ZW50IHN1YnNjcmlwdGlvbnMuXG4gICAqL1xuICBzY3JvbGxDb250YWluZXJzOiBNYXA8Q2RrU2Nyb2xsYWJsZSwgU3Vic2NyaXB0aW9uPiA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgc2Nyb2xsYWJsZSBpbnN0YW5jZSB3aXRoIHRoZSBzZXJ2aWNlIGFuZCBsaXN0ZW5zIGZvciBpdHMgc2Nyb2xsZWQgZXZlbnRzLiBXaGVuIHRoZVxuICAgKiBzY3JvbGxhYmxlIGlzIHNjcm9sbGVkLCB0aGUgc2VydmljZSBlbWl0cyB0aGUgZXZlbnQgdG8gaXRzIHNjcm9sbGVkIG9ic2VydmFibGUuXG4gICAqIEBwYXJhbSBzY3JvbGxhYmxlIFNjcm9sbGFibGUgaW5zdGFuY2UgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICovXG4gIHJlZ2lzdGVyKHNjcm9sbGFibGU6IENka1Njcm9sbGFibGUpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsQ29udGFpbmVycy5oYXMoc2Nyb2xsYWJsZSkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVycy5zZXQoc2Nyb2xsYWJsZSwgc2Nyb2xsYWJsZS5lbGVtZW50U2Nyb2xsZWQoKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc2Nyb2xsZWQubmV4dChzY3JvbGxhYmxlKSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhIFNjcm9sbGFibGUgcmVmZXJlbmNlIGFuZCB1bnN1YnNjcmliZXMgZnJvbSBpdHMgc2Nyb2xsIGV2ZW50IG9ic2VydmFibGUuXG4gICAqIEBwYXJhbSBzY3JvbGxhYmxlIFNjcm9sbGFibGUgaW5zdGFuY2UgdG8gYmUgZGVyZWdpc3RlcmVkLlxuICAgKi9cbiAgZGVyZWdpc3RlcihzY3JvbGxhYmxlOiBDZGtTY3JvbGxhYmxlKTogdm9pZCB7XG4gICAgY29uc3Qgc2Nyb2xsYWJsZVJlZmVyZW5jZSA9IHRoaXMuc2Nyb2xsQ29udGFpbmVycy5nZXQoc2Nyb2xsYWJsZSk7XG5cbiAgICBpZiAoc2Nyb2xsYWJsZVJlZmVyZW5jZSkge1xuICAgICAgc2Nyb2xsYWJsZVJlZmVyZW5jZS51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zY3JvbGxDb250YWluZXJzLmRlbGV0ZShzY3JvbGxhYmxlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgYW4gZXZlbnQgd2hlbmV2ZXIgYW55IG9mIHRoZSByZWdpc3RlcmVkIFNjcm9sbGFibGVcbiAgICogcmVmZXJlbmNlcyAob3Igd2luZG93LCBkb2N1bWVudCwgb3IgYm9keSkgZmlyZSBhIHNjcm9sbGVkIGV2ZW50LiBDYW4gcHJvdmlkZSBhIHRpbWUgaW4gbXNcbiAgICogdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgXCJ0aHJvdHRsZVwiIHRpbWUuXG4gICAqXG4gICAqICoqTm90ZToqKiBpbiBvcmRlciB0byBhdm9pZCBoaXR0aW5nIGNoYW5nZSBkZXRlY3Rpb24gZm9yIGV2ZXJ5IHNjcm9sbCBldmVudCxcbiAgICogYWxsIG9mIHRoZSBldmVudHMgZW1pdHRlZCBmcm9tIHRoaXMgc3RyZWFtIHdpbGwgYmUgcnVuIG91dHNpZGUgdGhlIEFuZ3VsYXIgem9uZS5cbiAgICogSWYgeW91IG5lZWQgdG8gdXBkYXRlIGFueSBkYXRhIGJpbmRpbmdzIGFzIGEgcmVzdWx0IG9mIGEgc2Nyb2xsIGV2ZW50LCB5b3UgaGF2ZVxuICAgKiB0byBydW4gdGhlIGNhbGxiYWNrIHVzaW5nIGBOZ1pvbmUucnVuYC5cbiAgICovXG4gIHNjcm9sbGVkKGF1ZGl0VGltZUluTXM6IG51bWJlciA9IERFRkFVTFRfU0NST0xMX1RJTUUpOiBPYnNlcnZhYmxlPENka1Njcm9sbGFibGV8dm9pZD4ge1xuICAgIGlmICghdGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mPHZvaWQ+KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8Q2RrU2Nyb2xsYWJsZXx2b2lkPikgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9nbG9iYWxTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5fYWRkR2xvYmFsTGlzdGVuZXIoKTtcbiAgICAgIH1cblxuICAgICAgLy8gSW4gdGhlIGNhc2Ugb2YgYSAwbXMgZGVsYXksIHVzZSBhbiBvYnNlcnZhYmxlIHdpdGhvdXQgYXVkaXRUaW1lXG4gICAgICAvLyBzaW5jZSBpdCBkb2VzIGFkZCBhIHBlcmNlcHRpYmxlIGRlbGF5IGluIHByb2Nlc3Npbmcgb3ZlcmhlYWQuXG4gICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBhdWRpdFRpbWVJbk1zID4gMCA/XG4gICAgICAgIHRoaXMuX3Njcm9sbGVkLnBpcGUoYXVkaXRUaW1lKGF1ZGl0VGltZUluTXMpKS5zdWJzY3JpYmUob2JzZXJ2ZXIpIDpcbiAgICAgICAgdGhpcy5fc2Nyb2xsZWQuc3Vic2NyaWJlKG9ic2VydmVyKTtcblxuICAgICAgdGhpcy5fc2Nyb2xsZWRDb3VudCsrO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsZWRDb3VudC0tO1xuXG4gICAgICAgIGlmICghdGhpcy5fc2Nyb2xsZWRDb3VudCkge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcigpO1xuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVycy5mb3JFYWNoKChfLCBjb250YWluZXIpID0+IHRoaXMuZGVyZWdpc3Rlcihjb250YWluZXIpKTtcbiAgICB0aGlzLl9zY3JvbGxlZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW5ldmVyIGFueSBvZiB0aGVcbiAgICogc2Nyb2xsYWJsZSBhbmNlc3RvcnMgb2YgYW4gZWxlbWVudCBhcmUgc2Nyb2xsZWQuXG4gICAqIEBwYXJhbSBlbGVtZW50UmVmIEVsZW1lbnQgd2hvc2UgYW5jZXN0b3JzIHRvIGxpc3RlbiBmb3IuXG4gICAqIEBwYXJhbSBhdWRpdFRpbWVJbk1zIFRpbWUgdG8gdGhyb3R0bGUgdGhlIHNjcm9sbCBldmVudHMuXG4gICAqL1xuICBhbmNlc3RvclNjcm9sbGVkKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGF1ZGl0VGltZUluTXM/OiBudW1iZXIpOiBPYnNlcnZhYmxlPENka1Njcm9sbGFibGV8dm9pZD4ge1xuICAgIGNvbnN0IGFuY2VzdG9ycyA9IHRoaXMuZ2V0QW5jZXN0b3JTY3JvbGxDb250YWluZXJzKGVsZW1lbnRSZWYpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsZWQoYXVkaXRUaW1lSW5NcykucGlwZShmaWx0ZXIodGFyZ2V0ID0+IHtcbiAgICAgIHJldHVybiAhdGFyZ2V0IHx8IGFuY2VzdG9ycy5pbmRleE9mKHRhcmdldCkgPiAtMTtcbiAgICB9KSk7XG4gIH1cblxuICAvKiogUmV0dXJucyBhbGwgcmVnaXN0ZXJlZCBTY3JvbGxhYmxlcyB0aGF0IGNvbnRhaW4gdGhlIHByb3ZpZGVkIGVsZW1lbnQuICovXG4gIGdldEFuY2VzdG9yU2Nyb2xsQ29udGFpbmVycyhlbGVtZW50UmVmOiBFbGVtZW50UmVmKTogQ2RrU2Nyb2xsYWJsZVtdIHtcbiAgICBjb25zdCBzY3JvbGxpbmdDb250YWluZXJzOiBDZGtTY3JvbGxhYmxlW10gPSBbXTtcblxuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVycy5mb3JFYWNoKChfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24sIHNjcm9sbGFibGU6IENka1Njcm9sbGFibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxhYmxlQ29udGFpbnNFbGVtZW50KHNjcm9sbGFibGUsIGVsZW1lbnRSZWYpKSB7XG4gICAgICAgIHNjcm9sbGluZ0NvbnRhaW5lcnMucHVzaChzY3JvbGxhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzY3JvbGxpbmdDb250YWluZXJzO1xuICB9XG5cbiAgLyoqIEFjY2VzcyBpbmplY3RlZCBkb2N1bWVudCBpZiBhdmFpbGFibGUgb3IgZmFsbGJhY2sgdG8gZ2xvYmFsIGRvY3VtZW50IHJlZmVyZW5jZSAqL1xuICBwcml2YXRlIF9nZXREb2N1bWVudCgpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50IHx8IGRvY3VtZW50O1xuICB9XG5cbiAgLyoqIFVzZSBkZWZhdWx0VmlldyBvZiBpbmplY3RlZCBkb2N1bWVudCBpZiBhdmFpbGFibGUgb3IgZmFsbGJhY2sgdG8gZ2xvYmFsIHdpbmRvdyByZWZlcmVuY2UgKi9cbiAgcHJpdmF0ZSBfZ2V0V2luZG93KCk6IFdpbmRvdyB7XG4gICAgY29uc3QgZG9jID0gdGhpcy5fZ2V0RG9jdW1lbnQoKTtcbiAgICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiB0aGUgcHJvdmlkZWQgU2Nyb2xsYWJsZS4gKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsYWJsZUNvbnRhaW5zRWxlbWVudChzY3JvbGxhYmxlOiBDZGtTY3JvbGxhYmxlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTogYm9vbGVhbiB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgc2Nyb2xsYWJsZUVsZW1lbnQgPSBzY3JvbGxhYmxlLmdldEVsZW1lbnRSZWYoKS5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gVHJhdmVyc2UgdGhyb3VnaCB0aGUgZWxlbWVudCBwYXJlbnRzIHVudGlsIHdlIHJlYWNoIG51bGwsIGNoZWNraW5nIGlmIGFueSBvZiB0aGUgZWxlbWVudHNcbiAgICAvLyBhcmUgdGhlIHNjcm9sbGFibGUncyBlbGVtZW50LlxuICAgIGRvIHtcbiAgICAgIGlmIChlbGVtZW50ID09IHNjcm9sbGFibGVFbGVtZW50KSB7IHJldHVybiB0cnVlOyB9XG4gICAgfSB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQhLnBhcmVudEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIFNldHMgdXAgdGhlIGdsb2JhbCBzY3JvbGwgbGlzdGVuZXJzLiAqL1xuICBwcml2YXRlIF9hZGRHbG9iYWxMaXN0ZW5lcigpIHtcbiAgICB0aGlzLl9nbG9iYWxTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgY29uc3Qgd2luZG93ID0gdGhpcy5fZ2V0V2luZG93KCk7XG4gICAgICByZXR1cm4gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ3Njcm9sbCcpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zY3JvbGxlZC5uZXh0KCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIENsZWFucyB1cCB0aGUgZ2xvYmFsIHNjcm9sbCBsaXN0ZW5lci4gKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuX2dsb2JhbFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fZ2xvYmFsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9nbG9iYWxTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19