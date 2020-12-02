/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, OnDestroy } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
/** Handle that can be used to drag and CdkDrag instance. */
import * as ɵngcc0 from '@angular/core';
export declare class CdkDragHandle implements OnDestroy {
    element: ElementRef<HTMLElement>;
    /** Closest parent draggable instance. */
    _parentDrag: {} | undefined;
    /** Emits when the state of the handle has changed. */
    _stateChanges: Subject<CdkDragHandle>;
    /** Whether starting to drag through this handle is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    constructor(element: ElementRef<HTMLElement>, parentDrag?: any);
    ngOnDestroy(): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkDragHandle, [null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkDragHandle, "[cdkDragHandle]", never, { "disabled": "cdkDragHandleDisabled"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1oYW5kbGUuZC50cyIsInNvdXJjZXMiOlsiZHJhZy1oYW5kbGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuLyoqIEhhbmRsZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGRyYWcgYW5kIENka0RyYWcgaW5zdGFuY2UuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtEcmFnSGFuZGxlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICAvKiogQ2xvc2VzdCBwYXJlbnQgZHJhZ2dhYmxlIGluc3RhbmNlLiAqL1xuICAgIF9wYXJlbnREcmFnOiB7fSB8IHVuZGVmaW5lZDtcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgc3RhdGUgb2YgdGhlIGhhbmRsZSBoYXMgY2hhbmdlZC4gKi9cbiAgICBfc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PENka0RyYWdIYW5kbGU+O1xuICAgIC8qKiBXaGV0aGVyIHN0YXJ0aW5nIHRvIGRyYWcgdGhyb3VnaCB0aGlzIGhhbmRsZSBpcyBkaXNhYmxlZC4gKi9cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbjtcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pO1xuICAgIHByaXZhdGUgX2Rpc2FibGVkO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwYXJlbnREcmFnPzogYW55KTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19