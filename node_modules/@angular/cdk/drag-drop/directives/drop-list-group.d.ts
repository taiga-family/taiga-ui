/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnDestroy } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkDropListGroup<T> implements OnDestroy {
    /** Drop lists registered inside the group. */
    readonly _items: Set<T>;
    /** Whether starting a dragging sequence from inside this group is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    ngOnDestroy(): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkDropListGroup<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkDropListGroup<any>, "[cdkDropListGroup]", ["cdkDropListGroup"], { "disabled": "cdkDropListGroupDisabled"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1saXN0LWdyb3VwLmQudHMiLCJzb3VyY2VzIjpbImRyb3AtbGlzdC1ncm91cC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG4vKipcbiAqIERlY2xhcmF0aXZlbHkgY29ubmVjdHMgc2libGluZyBgY2RrRHJvcExpc3RgIGluc3RhbmNlcyB0b2dldGhlci4gQWxsIG9mIHRoZSBgY2RrRHJvcExpc3RgXG4gKiBlbGVtZW50cyB0aGF0IGFyZSBwbGFjZWQgaW5zaWRlIGEgYGNka0Ryb3BMaXN0R3JvdXBgIHdpbGwgYmUgY29ubmVjdGVkIHRvIGVhY2ggb3RoZXJcbiAqIGF1dG9tYXRpY2FsbHkuIENhbiBiZSB1c2VkIGFzIGFuIGFsdGVybmF0aXZlIHRvIHRoZSBgY2RrRHJvcExpc3RDb25uZWN0ZWRUb2AgaW5wdXRcbiAqIGZyb20gYGNka0Ryb3BMaXN0YC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrRHJvcExpc3RHcm91cDxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgLyoqIERyb3AgbGlzdHMgcmVnaXN0ZXJlZCBpbnNpZGUgdGhlIGdyb3VwLiAqL1xuICAgIHJlYWRvbmx5IF9pdGVtczogU2V0PFQ+O1xuICAgIC8qKiBXaGV0aGVyIHN0YXJ0aW5nIGEgZHJhZ2dpbmcgc2VxdWVuY2UgZnJvbSBpbnNpZGUgdGhpcyBncm91cCBpcyBkaXNhYmxlZC4gKi9cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbjtcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pO1xuICAgIHByaXZhdGUgX2Rpc2FibGVkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=