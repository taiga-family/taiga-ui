/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollDispatcher } from './scroll-dispatcher';
import * as ɵngcc0 from '@angular/core';
export declare type _Without<T> = {
    [P in keyof T]?: never;
};
export declare type _XOR<T, U> = (_Without<T> & U) | (_Without<U> & T);
export declare type _Top = {
    top?: number;
};
export declare type _Bottom = {
    bottom?: number;
};
export declare type _Left = {
    left?: number;
};
export declare type _Right = {
    right?: number;
};
export declare type _Start = {
    start?: number;
};
export declare type _End = {
    end?: number;
};
export declare type _XAxis = _XOR<_XOR<_Left, _Right>, _XOR<_Start, _End>>;
export declare type _YAxis = _XOR<_Top, _Bottom>;
/**
 * An extended version of ScrollToOptions that allows expressing scroll offsets relative to the
 * top, bottom, left, right, start, or end of the viewport rather than just the top and left.
 * Please note: the top and bottom properties are mutually exclusive, as are the left, right,
 * start, and end properties.
 */
export declare type ExtendedScrollToOptions = _XAxis & _YAxis & ScrollOptions;
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
export declare class CdkScrollable implements OnInit, OnDestroy {
    protected elementRef: ElementRef<HTMLElement>;
    protected scrollDispatcher: ScrollDispatcher;
    protected ngZone: NgZone;
    protected dir?: Directionality | undefined;
    private _destroyed;
    private _elementScrolled;
    constructor(elementRef: ElementRef<HTMLElement>, scrollDispatcher: ScrollDispatcher, ngZone: NgZone, dir?: Directionality | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** Returns observable that emits when a scroll event is fired on the host element. */
    elementScrolled(): Observable<Event>;
    /** Gets the ElementRef for the viewport. */
    getElementRef(): ElementRef<HTMLElement>;
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    scrollTo(options: ExtendedScrollToOptions): void;
    private _applyScrollToOptions;
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    measureScrollOffset(from: 'top' | 'left' | 'right' | 'bottom' | 'start' | 'end'): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkScrollable, [null, null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkScrollable, "[cdk-scrollable], [cdkScrollable]", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5kLnRzIiwic291cmNlcyI6WyJzY3JvbGxhYmxlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2Nyb2xsRGlzcGF0Y2hlciB9IGZyb20gJy4vc2Nyb2xsLWRpc3BhdGNoZXInO1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBfV2l0aG91dDxUPiA9IHtcbiAgICBbUCBpbiBrZXlvZiBUXT86IG5ldmVyO1xufTtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgX1hPUjxULCBVPiA9IChfV2l0aG91dDxUPiAmIFUpIHwgKF9XaXRob3V0PFU+ICYgVCk7XG5leHBvcnQgZGVjbGFyZSB0eXBlIF9Ub3AgPSB7XG4gICAgdG9wPzogbnVtYmVyO1xufTtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgX0JvdHRvbSA9IHtcbiAgICBib3R0b20/OiBudW1iZXI7XG59O1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBfTGVmdCA9IHtcbiAgICBsZWZ0PzogbnVtYmVyO1xufTtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgX1JpZ2h0ID0ge1xuICAgIHJpZ2h0PzogbnVtYmVyO1xufTtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgX1N0YXJ0ID0ge1xuICAgIHN0YXJ0PzogbnVtYmVyO1xufTtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgX0VuZCA9IHtcbiAgICBlbmQ/OiBudW1iZXI7XG59O1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBfWEF4aXMgPSBfWE9SPF9YT1I8X0xlZnQsIF9SaWdodD4sIF9YT1I8X1N0YXJ0LCBfRW5kPj47XG5leHBvcnQgZGVjbGFyZSB0eXBlIF9ZQXhpcyA9IF9YT1I8X1RvcCwgX0JvdHRvbT47XG4vKipcbiAqIEFuIGV4dGVuZGVkIHZlcnNpb24gb2YgU2Nyb2xsVG9PcHRpb25zIHRoYXQgYWxsb3dzIGV4cHJlc3Npbmcgc2Nyb2xsIG9mZnNldHMgcmVsYXRpdmUgdG8gdGhlXG4gKiB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHN0YXJ0LCBvciBlbmQgb2YgdGhlIHZpZXdwb3J0IHJhdGhlciB0aGFuIGp1c3QgdGhlIHRvcCBhbmQgbGVmdC5cbiAqIFBsZWFzZSBub3RlOiB0aGUgdG9wIGFuZCBib3R0b20gcHJvcGVydGllcyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLCBhcyBhcmUgdGhlIGxlZnQsIHJpZ2h0LFxuICogc3RhcnQsIGFuZCBlbmQgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBFeHRlbmRlZFNjcm9sbFRvT3B0aW9ucyA9IF9YQXhpcyAmIF9ZQXhpcyAmIFNjcm9sbE9wdGlvbnM7XG4vKipcbiAqIFNlbmRzIGFuIGV2ZW50IHdoZW4gdGhlIGRpcmVjdGl2ZSdzIGVsZW1lbnQgaXMgc2Nyb2xsZWQuIFJlZ2lzdGVycyBpdHNlbGYgd2l0aCB0aGVcbiAqIFNjcm9sbERpc3BhdGNoZXIgc2VydmljZSB0byBpbmNsdWRlIGl0c2VsZiBhcyBwYXJ0IG9mIGl0cyBjb2xsZWN0aW9uIG9mIHNjcm9sbGluZyBldmVudHMgdGhhdCBpdFxuICogY2FuIGJlIGxpc3RlbmVkIHRvIHRocm91Z2ggdGhlIHNlcnZpY2UuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1Njcm9sbGFibGUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHByb3RlY3RlZCBzY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyO1xuICAgIHByb3RlY3RlZCBuZ1pvbmU6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZGlyPzogRGlyZWN0aW9uYWxpdHkgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkO1xuICAgIHByaXZhdGUgX2VsZW1lbnRTY3JvbGxlZDtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwgc2Nyb2xsRGlzcGF0Y2hlcjogU2Nyb2xsRGlzcGF0Y2hlciwgbmdab25lOiBOZ1pvbmUsIGRpcj86IERpcmVjdGlvbmFsaXR5IHwgdW5kZWZpbmVkKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqIFJldHVybnMgb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW4gYSBzY3JvbGwgZXZlbnQgaXMgZmlyZWQgb24gdGhlIGhvc3QgZWxlbWVudC4gKi9cbiAgICBlbGVtZW50U2Nyb2xsZWQoKTogT2JzZXJ2YWJsZTxFdmVudD47XG4gICAgLyoqIEdldHMgdGhlIEVsZW1lbnRSZWYgZm9yIHRoZSB2aWV3cG9ydC4gKi9cbiAgICBnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgdG8gdGhlIHNwZWNpZmllZCBvZmZzZXRzLiBUaGlzIGlzIGEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBicm93c2VyJ3MgbmF0aXZlIHNjcm9sbFRvXG4gICAgICogbWV0aG9kLCBzaW5jZSBicm93c2VycyBhcmUgbm90IGNvbnNpc3RlbnQgYWJvdXQgd2hhdCBzY3JvbGxMZWZ0IG1lYW5zIGluIFJUTC4gRm9yIHRoaXMgbWV0aG9kXG4gICAgICogbGVmdCBhbmQgcmlnaHQgYWx3YXlzIHJlZmVyIHRvIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlIG9mIHRoZSBzY3JvbGxpbmcgY29udGFpbmVyIGlycmVzcGVjdGl2ZVxuICAgICAqIG9mIHRoZSBsYXlvdXQgZGlyZWN0aW9uLiBzdGFydCBhbmQgZW5kIHJlZmVyIHRvIGxlZnQgYW5kIHJpZ2h0IGluIGFuIExUUiBjb250ZXh0IGFuZCB2aWNlLXZlcnNhXG4gICAgICogaW4gYW4gUlRMIGNvbnRleHQuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgc3BlY2lmaWVkIHRoZSBvZmZzZXRzIHRvIHNjcm9sbCB0by5cbiAgICAgKi9cbiAgICBzY3JvbGxUbyhvcHRpb25zOiBFeHRlbmRlZFNjcm9sbFRvT3B0aW9ucyk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfYXBwbHlTY3JvbGxUb09wdGlvbnM7XG4gICAgLyoqXG4gICAgICogTWVhc3VyZXMgdGhlIHNjcm9sbCBvZmZzZXQgcmVsYXRpdmUgdG8gdGhlIHNwZWNpZmllZCBlZGdlIG9mIHRoZSB2aWV3cG9ydC4gVGhpcyBtZXRob2QgY2FuIGJlXG4gICAgICogdXNlZCBpbnN0ZWFkIG9mIGRpcmVjdGx5IGNoZWNraW5nIHNjcm9sbExlZnQgb3Igc2Nyb2xsVG9wLCBzaW5jZSBicm93c2VycyBhcmUgbm90IGNvbnNpc3RlbnRcbiAgICAgKiBhYm91dCB3aGF0IHNjcm9sbExlZnQgbWVhbnMgaW4gUlRMLiBUaGUgdmFsdWVzIHJldHVybmVkIGJ5IHRoaXMgbWV0aG9kIGFyZSBub3JtYWxpemVkIHN1Y2ggdGhhdFxuICAgICAqIGxlZnQgYW5kIHJpZ2h0IGFsd2F5cyByZWZlciB0byB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZSBvZiB0aGUgc2Nyb2xsaW5nIGNvbnRhaW5lciBpcnJlc3BlY3RpdmVcbiAgICAgKiBvZiB0aGUgbGF5b3V0IGRpcmVjdGlvbi4gc3RhcnQgYW5kIGVuZCByZWZlciB0byBsZWZ0IGFuZCByaWdodCBpbiBhbiBMVFIgY29udGV4dCBhbmQgdmljZS12ZXJzYVxuICAgICAqIGluIGFuIFJUTCBjb250ZXh0LlxuICAgICAqIEBwYXJhbSBmcm9tIFRoZSBlZGdlIHRvIG1lYXN1cmUgZnJvbS5cbiAgICAgKi9cbiAgICBtZWFzdXJlU2Nyb2xsT2Zmc2V0KGZyb206ICd0b3AnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ3N0YXJ0JyB8ICdlbmQnKTogbnVtYmVyO1xufVxuIl19