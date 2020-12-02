/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { ElementRef, TemplateRef } from '@angular/core';
import { CanStick, CanStickCtor } from './can-stick';
/** Base interface for a cell definition. Captures a column's cell template definition. */
import * as ɵngcc0 from '@angular/core';
export interface CellDef {
    template: TemplateRef<any>;
}
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export declare class CdkCellDef implements CellDef {
    template: TemplateRef<any>;
    constructor(/** @docs-private */ template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkCellDef, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkCellDef, "[cdkCellDef]", never, {}, {}, never>;
}
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export declare class CdkHeaderCellDef implements CellDef {
    template: TemplateRef<any>;
    constructor(/** @docs-private */ template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkHeaderCellDef, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkHeaderCellDef, "[cdkHeaderCellDef]", never, {}, {}, never>;
}
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export declare class CdkFooterCellDef implements CellDef {
    template: TemplateRef<any>;
    constructor(/** @docs-private */ template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFooterCellDef, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkFooterCellDef, "[cdkFooterCellDef]", never, {}, {}, never>;
}
/** @docs-private */
declare class CdkColumnDefBase {
}
declare const _CdkColumnDefBase: CanStickCtor & typeof CdkColumnDefBase;
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
export declare class CdkColumnDef extends _CdkColumnDefBase implements CanStick {
    _table?: any;
    /** Unique name for this column. */
    get name(): string;
    set name(name: string);
    _name: string;
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */
    get stickyEnd(): boolean;
    set stickyEnd(v: boolean);
    _stickyEnd: boolean;
    /** @docs-private */
    cell: CdkCellDef;
    /** @docs-private */
    headerCell: CdkHeaderCellDef;
    /** @docs-private */
    footerCell: CdkFooterCellDef;
    /**
     * Transformed version of the column name that can be used as part of a CSS classname. Excludes
     * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
     * do not match are replaced by the '-' character.
     */
    cssClassFriendlyName: string;
    constructor(_table?: any);
    static ngAcceptInputType_sticky: BooleanInput;
    static ngAcceptInputType_stickyEnd: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkColumnDef, [{ optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkColumnDef, "[cdkColumnDef]", never, { "sticky": "sticky"; "name": "cdkColumnDef"; "stickyEnd": "stickyEnd"; }, {}, ["cell", "headerCell", "footerCell"]>;
}
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
export declare class BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
}
/** Header cell template container that adds the right classes and role. */
export declare class CdkHeaderCell extends BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkHeaderCell, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkHeaderCell, "cdk-header-cell, th[cdk-header-cell]", never, {}, {}, never>;
}
/** Footer cell template container that adds the right classes and role. */
export declare class CdkFooterCell extends BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFooterCell, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkFooterCell, "cdk-footer-cell, td[cdk-footer-cell]", never, {}, {}, never>;
}
/** Cell template container that adds the right classes and role. */
export declare class CdkCell extends BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkCell, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkCell, "cdk-cell, td[cdk-cell]", never, {}, {}, never>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5kLnRzIiwic291cmNlcyI6WyJjZWxsLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhblN0aWNrLCBDYW5TdGlja0N0b3IgfSBmcm9tICcuL2Nhbi1zdGljayc7XG4vKiogQmFzZSBpbnRlcmZhY2UgZm9yIGEgY2VsbCBkZWZpbml0aW9uLiBDYXB0dXJlcyBhIGNvbHVtbidzIGNlbGwgdGVtcGxhdGUgZGVmaW5pdGlvbi4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbERlZiB7XG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG4vKipcbiAqIENlbGwgZGVmaW5pdGlvbiBmb3IgYSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBkYXRhIHJvdyBjZWxsIGFzIHdlbGwgYXMgY2VsbC1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtDZWxsRGVmIGltcGxlbWVudHMgQ2VsbERlZiB7XG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgY29uc3RydWN0b3IoLyoqIEBkb2NzLXByaXZhdGUgKi8gdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pO1xufVxuLyoqXG4gKiBIZWFkZXIgY2VsbCBkZWZpbml0aW9uIGZvciBhIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGhlYWRlciBjZWxsIGFuZCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrSGVhZGVyQ2VsbERlZiBpbXBsZW1lbnRzIENlbGxEZWYge1xuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKC8qKiBAZG9jcy1wcml2YXRlICovIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KTtcbn1cbi8qKlxuICogRm9vdGVyIGNlbGwgZGVmaW5pdGlvbiBmb3IgYSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBmb290ZXIgY2VsbCBhbmQgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0Zvb3RlckNlbGxEZWYgaW1wbGVtZW50cyBDZWxsRGVmIHtcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBjb25zdHJ1Y3RvcigvKiogQGRvY3MtcHJpdmF0ZSAqLyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pik7XG59XG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZGVjbGFyZSBjbGFzcyBDZGtDb2x1bW5EZWZCYXNlIHtcbn1cbmRlY2xhcmUgY29uc3QgX0Nka0NvbHVtbkRlZkJhc2U6IENhblN0aWNrQ3RvciAmIHR5cGVvZiBDZGtDb2x1bW5EZWZCYXNlO1xuLyoqXG4gKiBDb2x1bW4gZGVmaW5pdGlvbiBmb3IgdGhlIENESyB0YWJsZS5cbiAqIERlZmluZXMgYSBzZXQgb2YgY2VsbHMgYXZhaWxhYmxlIGZvciBhIHRhYmxlIGNvbHVtbi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrQ29sdW1uRGVmIGV4dGVuZHMgX0Nka0NvbHVtbkRlZkJhc2UgaW1wbGVtZW50cyBDYW5TdGljayB7XG4gICAgX3RhYmxlPzogYW55O1xuICAgIC8qKiBVbmlxdWUgbmFtZSBmb3IgdGhpcyBjb2x1bW4uICovXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nO1xuICAgIHNldCBuYW1lKG5hbWU6IHN0cmluZyk7XG4gICAgX25hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoaXMgY29sdW1uIHNob3VsZCBiZSBzdGlja3kgcG9zaXRpb25lZCBvbiB0aGUgZW5kIG9mIHRoZSByb3cuIFNob3VsZCBtYWtlIHN1cmVcbiAgICAgKiB0aGF0IGl0IG1pbWljcyB0aGUgYENhblN0aWNrYCBtaXhpbiBzdWNoIHRoYXQgYF9oYXNTdGlja3lDaGFuZ2VkYCBpcyBzZXQgdG8gdHJ1ZSBpZiB0aGUgdmFsdWVcbiAgICAgKiBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGdldCBzdGlja3lFbmQoKTogYm9vbGVhbjtcbiAgICBzZXQgc3RpY2t5RW5kKHY6IGJvb2xlYW4pO1xuICAgIF9zdGlja3lFbmQ6IGJvb2xlYW47XG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBjZWxsOiBDZGtDZWxsRGVmO1xuICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgaGVhZGVyQ2VsbDogQ2RrSGVhZGVyQ2VsbERlZjtcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIGZvb3RlckNlbGw6IENka0Zvb3RlckNlbGxEZWY7XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtZWQgdmVyc2lvbiBvZiB0aGUgY29sdW1uIG5hbWUgdGhhdCBjYW4gYmUgdXNlZCBhcyBwYXJ0IG9mIGEgQ1NTIGNsYXNzbmFtZS4gRXhjbHVkZXNcbiAgICAgKiBhbGwgbm9uLWFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGFuZCB0aGUgc3BlY2lhbCBjaGFyYWN0ZXJzICctJyBhbmQgJ18nLiBBbnkgY2hhcmFjdGVycyB0aGF0XG4gICAgICogZG8gbm90IG1hdGNoIGFyZSByZXBsYWNlZCBieSB0aGUgJy0nIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICBjc3NDbGFzc0ZyaWVuZGx5TmFtZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKF90YWJsZT86IGFueSk7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreTogQm9vbGVhbklucHV0O1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdGlja3lFbmQ6IEJvb2xlYW5JbnB1dDtcbn1cbi8qKiBCYXNlIGNsYXNzIGZvciB0aGUgY2VsbHMuIEFkZHMgYSBDU1MgY2xhc3NuYW1lIHRoYXQgaWRlbnRpZmllcyB0aGUgY29sdW1uIGl0IHJlbmRlcnMgaW4uICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCYXNlQ2RrQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpO1xufVxuLyoqIEhlYWRlciBjZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtIZWFkZXJDZWxsIGV4dGVuZHMgQmFzZUNka0NlbGwge1xuICAgIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTtcbn1cbi8qKiBGb290ZXIgY2VsbCB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBhZGRzIHRoZSByaWdodCBjbGFzc2VzIGFuZCByb2xlLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrRm9vdGVyQ2VsbCBleHRlbmRzIEJhc2VDZGtDZWxsIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZik7XG59XG4vKiogQ2VsbCB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBhZGRzIHRoZSByaWdodCBjbGFzc2VzIGFuZCByb2xlLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrQ2VsbCBleHRlbmRzIEJhc2VDZGtDZWxsIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZik7XG59XG5leHBvcnQge307XG4iXX0=