/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { AfterContentInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
export declare class MutationObserverFactory {
    create(callback: MutationCallback): MutationObserver | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MutationObserverFactory, never>;
}
/** An injectable service that allows watching elements for changes to their content. */
export declare class ContentObserver implements OnDestroy {
    private _mutationObserverFactory;
    /** Keeps track of the existing MutationObservers so they can be reused. */
    private _observedElements;
    constructor(_mutationObserverFactory: MutationObserverFactory);
    ngOnDestroy(): void;
    /**
     * Observe content changes on an element.
     * @param element The element to observe for content changes.
     */
    observe(element: Element): Observable<MutationRecord[]>;
    /**
     * Observe content changes on an element.
     * @param element The element to observe for content changes.
     */
    observe(element: ElementRef<Element>): Observable<MutationRecord[]>;
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    private _observeElement;
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    private _unobserveElement;
    /** Clean up the underlying MutationObserver for the specified element. */
    private _cleanupObserver;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ContentObserver, never>;
}
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
export declare class CdkObserveContent implements AfterContentInit, OnDestroy {
    private _contentObserver;
    private _elementRef;
    private _ngZone;
    /** Event emitted for each change in the element's content. */
    event: EventEmitter<MutationRecord[]>;
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     */
    get disabled(): any;
    set disabled(value: any);
    private _disabled;
    /** Debounce interval for emitting the changes. */
    get debounce(): number;
    set debounce(value: number);
    private _debounce;
    private _currentSubscription;
    constructor(_contentObserver: ContentObserver, _elementRef: ElementRef<HTMLElement>, _ngZone: NgZone);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private _subscribe;
    private _unsubscribe;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_debounce: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkObserveContent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkObserveContent, "[cdkObserveContent]", ["cdkObserveContent"], { "disabled": "cdkObserveContentDisabled"; "debounce": "debounce"; }, { "event": "cdkObserveContent"; }, never>;
}
export declare class ObserversModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ObserversModule, [typeof CdkObserveContent], never, [typeof CdkObserveContent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ObserversModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZS1jb250ZW50LmQudHMiLCJzb3VyY2VzIjpbIm9ic2VydmUtY29udGVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8qKlxuICogRmFjdG9yeSB0aGF0IGNyZWF0ZXMgYSBuZXcgTXV0YXRpb25PYnNlcnZlciBhbmQgYWxsb3dzIHVzIHRvIHN0dWIgaXQgb3V0IGluIHVuaXQgdGVzdHMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE11dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5IHtcbiAgICBjcmVhdGUoY2FsbGJhY2s6IE11dGF0aW9uQ2FsbGJhY2spOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbDtcbn1cbi8qKiBBbiBpbmplY3RhYmxlIHNlcnZpY2UgdGhhdCBhbGxvd3Mgd2F0Y2hpbmcgZWxlbWVudHMgZm9yIGNoYW5nZXMgdG8gdGhlaXIgY29udGVudC4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbnRlbnRPYnNlcnZlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfbXV0YXRpb25PYnNlcnZlckZhY3Rvcnk7XG4gICAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBleGlzdGluZyBNdXRhdGlvbk9ic2VydmVycyBzbyB0aGV5IGNhbiBiZSByZXVzZWQuICovXG4gICAgcHJpdmF0ZSBfb2JzZXJ2ZWRFbGVtZW50cztcbiAgICBjb25zdHJ1Y3RvcihfbXV0YXRpb25PYnNlcnZlckZhY3Rvcnk6IE11dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5KTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE9ic2VydmUgY29udGVudCBjaGFuZ2VzIG9uIGFuIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gb2JzZXJ2ZSBmb3IgY29udGVudCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9ic2VydmUoZWxlbWVudDogRWxlbWVudCk6IE9ic2VydmFibGU8TXV0YXRpb25SZWNvcmRbXT47XG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZSBjb250ZW50IGNoYW5nZXMgb24gYW4gZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBvYnNlcnZlIGZvciBjb250ZW50IGNoYW5nZXMuXG4gICAgICovXG4gICAgb2JzZXJ2ZShlbGVtZW50OiBFbGVtZW50UmVmPEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxNdXRhdGlvblJlY29yZFtdPjtcbiAgICAvKipcbiAgICAgKiBPYnNlcnZlcyB0aGUgZ2l2ZW4gZWxlbWVudCBieSB1c2luZyB0aGUgZXhpc3RpbmcgTXV0YXRpb25PYnNlcnZlciBpZiBhdmFpbGFibGUsIG9yIGNyZWF0aW5nIGFcbiAgICAgKiBuZXcgb25lIGlmIG5vdC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9vYnNlcnZlRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBVbi1vYnNlcnZlcyB0aGUgZ2l2ZW4gZWxlbWVudCBhbmQgY2xlYW5zIHVwIHRoZSB1bmRlcmx5aW5nIE11dGF0aW9uT2JzZXJ2ZXIgaWYgbm9ib2R5IGVsc2UgaXNcbiAgICAgKiBvYnNlcnZpbmcgdGhpcyBlbGVtZW50LlxuICAgICAqL1xuICAgIHByaXZhdGUgX3Vub2JzZXJ2ZUVsZW1lbnQ7XG4gICAgLyoqIENsZWFuIHVwIHRoZSB1bmRlcmx5aW5nIE11dGF0aW9uT2JzZXJ2ZXIgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudC4gKi9cbiAgICBwcml2YXRlIF9jbGVhbnVwT2JzZXJ2ZXI7XG59XG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IHRyaWdnZXJzIGEgY2FsbGJhY2sgd2hlbmV2ZXIgdGhlIGNvbnRlbnQgb2ZcbiAqIGl0cyBhc3NvY2lhdGVkIGVsZW1lbnQgaGFzIGNoYW5nZWQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka09ic2VydmVDb250ZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9jb250ZW50T2JzZXJ2ZXI7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgLyoqIEV2ZW50IGVtaXR0ZWQgZm9yIGVhY2ggY2hhbmdlIGluIHRoZSBlbGVtZW50J3MgY29udGVudC4gKi9cbiAgICBldmVudDogRXZlbnRFbWl0dGVyPE11dGF0aW9uUmVjb3JkW10+O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb2JzZXJ2aW5nIGNvbnRlbnQgaXMgZGlzYWJsZWQuIFRoaXMgb3B0aW9uIGNhbiBiZSB1c2VkXG4gICAgICogdG8gZGlzY29ubmVjdCB0aGUgdW5kZXJseWluZyBNdXRhdGlvbk9ic2VydmVyIHVudGlsIGl0IGlzIG5lZWRlZC5cbiAgICAgKi9cbiAgICBnZXQgZGlzYWJsZWQoKTogYW55O1xuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcbiAgICAvKiogRGVib3VuY2UgaW50ZXJ2YWwgZm9yIGVtaXR0aW5nIHRoZSBjaGFuZ2VzLiAqL1xuICAgIGdldCBkZWJvdW5jZSgpOiBudW1iZXI7XG4gICAgc2V0IGRlYm91bmNlKHZhbHVlOiBudW1iZXIpO1xuICAgIHByaXZhdGUgX2RlYm91bmNlO1xuICAgIHByaXZhdGUgX2N1cnJlbnRTdWJzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3IoX2NvbnRlbnRPYnNlcnZlcjogQ29udGVudE9ic2VydmVyLCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF9uZ1pvbmU6IE5nWm9uZSk7XG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBwcml2YXRlIF9zdWJzY3JpYmU7XG4gICAgcHJpdmF0ZSBfdW5zdWJzY3JpYmU7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlYm91bmNlOiBCb29sZWFuSW5wdXQ7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPYnNlcnZlcnNNb2R1bGUge1xufVxuIl19