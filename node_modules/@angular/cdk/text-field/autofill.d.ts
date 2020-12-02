/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
/** An event that is emitted when the autofill state of an input changes. */
import * as ɵngcc0 from '@angular/core';
export declare type AutofillEvent = {
    /** The element whose autofill state changes. */
    target: Element;
    /** Whether the element is currently autofilled. */
    isAutofilled: boolean;
};
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
export declare class AutofillMonitor implements OnDestroy {
    private _platform;
    private _ngZone;
    private _monitoredElements;
    constructor(_platform: Platform, _ngZone: NgZone);
    /**
     * Monitor for changes in the autofill state of the given input element.
     * @param element The element to monitor.
     * @return A stream of autofill state changes.
     */
    monitor(element: Element): Observable<AutofillEvent>;
    /**
     * Monitor for changes in the autofill state of the given input element.
     * @param element The element to monitor.
     * @return A stream of autofill state changes.
     */
    monitor(element: ElementRef<Element>): Observable<AutofillEvent>;
    /**
     * Stop monitoring the autofill state of the given input element.
     * @param element The element to stop monitoring.
     */
    stopMonitoring(element: Element): void;
    /**
     * Stop monitoring the autofill state of the given input element.
     * @param element The element to stop monitoring.
     */
    stopMonitoring(element: ElementRef<Element>): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AutofillMonitor, never>;
}
/** A directive that can be used to monitor the autofill state of an input. */
export declare class CdkAutofill implements OnDestroy, OnInit {
    private _elementRef;
    private _autofillMonitor;
    /** Emits when the autofill state of the element changes. */
    cdkAutofill: EventEmitter<AutofillEvent>;
    constructor(_elementRef: ElementRef<HTMLElement>, _autofillMonitor: AutofillMonitor);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkAutofill, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkAutofill, "[cdkAutofill]", never, {}, { "cdkAutofill": "cdkAutofill"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZpbGwuZC50cyIsInNvdXJjZXMiOlsiYXV0b2ZpbGwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuLyoqIEFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBhdXRvZmlsbCBzdGF0ZSBvZiBhbiBpbnB1dCBjaGFuZ2VzLiAqL1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBBdXRvZmlsbEV2ZW50ID0ge1xuICAgIC8qKiBUaGUgZWxlbWVudCB3aG9zZSBhdXRvZmlsbCBzdGF0ZSBjaGFuZ2VzLiAqL1xuICAgIHRhcmdldDogRWxlbWVudDtcbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgYXV0b2ZpbGxlZC4gKi9cbiAgICBpc0F1dG9maWxsZWQ6IGJvb2xlYW47XG59O1xuLyoqXG4gKiBBbiBpbmplY3RhYmxlIHNlcnZpY2UgdGhhdCBjYW4gYmUgdXNlZCB0byBtb25pdG9yIHRoZSBhdXRvZmlsbCBzdGF0ZSBvZiBhbiBpbnB1dC5cbiAqIEJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgYmxvZyBwb3N0OlxuICogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXV0b2ZpbGxNb25pdG9yIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9wbGF0Zm9ybTtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgcHJpdmF0ZSBfbW9uaXRvcmVkRWxlbWVudHM7XG4gICAgY29uc3RydWN0b3IoX3BsYXRmb3JtOiBQbGF0Zm9ybSwgX25nWm9uZTogTmdab25lKTtcbiAgICAvKipcbiAgICAgKiBNb25pdG9yIGZvciBjaGFuZ2VzIGluIHRoZSBhdXRvZmlsbCBzdGF0ZSBvZiB0aGUgZ2l2ZW4gaW5wdXQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBtb25pdG9yLlxuICAgICAqIEByZXR1cm4gQSBzdHJlYW0gb2YgYXV0b2ZpbGwgc3RhdGUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBtb25pdG9yKGVsZW1lbnQ6IEVsZW1lbnQpOiBPYnNlcnZhYmxlPEF1dG9maWxsRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIE1vbml0b3IgZm9yIGNoYW5nZXMgaW4gdGhlIGF1dG9maWxsIHN0YXRlIG9mIHRoZSBnaXZlbiBpbnB1dCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIG1vbml0b3IuXG4gICAgICogQHJldHVybiBBIHN0cmVhbSBvZiBhdXRvZmlsbCBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG1vbml0b3IoZWxlbWVudDogRWxlbWVudFJlZjxFbGVtZW50Pik6IE9ic2VydmFibGU8QXV0b2ZpbGxFdmVudD47XG4gICAgLyoqXG4gICAgICogU3RvcCBtb25pdG9yaW5nIHRoZSBhdXRvZmlsbCBzdGF0ZSBvZiB0aGUgZ2l2ZW4gaW5wdXQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBzdG9wIG1vbml0b3JpbmcuXG4gICAgICovXG4gICAgc3RvcE1vbml0b3JpbmcoZWxlbWVudDogRWxlbWVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU3RvcCBtb25pdG9yaW5nIHRoZSBhdXRvZmlsbCBzdGF0ZSBvZiB0aGUgZ2l2ZW4gaW5wdXQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBzdG9wIG1vbml0b3JpbmcuXG4gICAgICovXG4gICAgc3RvcE1vbml0b3JpbmcoZWxlbWVudDogRWxlbWVudFJlZjxFbGVtZW50Pik6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbi8qKiBBIGRpcmVjdGl2ZSB0aGF0IGNhbiBiZSB1c2VkIHRvIG1vbml0b3IgdGhlIGF1dG9maWxsIHN0YXRlIG9mIGFuIGlucHV0LiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrQXV0b2ZpbGwgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9hdXRvZmlsbE1vbml0b3I7XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIGF1dG9maWxsIHN0YXRlIG9mIHRoZSBlbGVtZW50IGNoYW5nZXMuICovXG4gICAgY2RrQXV0b2ZpbGw6IEV2ZW50RW1pdHRlcjxBdXRvZmlsbEV2ZW50PjtcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF9hdXRvZmlsbE1vbml0b3I6IEF1dG9maWxsTW9uaXRvcik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19