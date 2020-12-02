/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { IterableChanges, IterableDiffer, IterableDiffers, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { CanStick, CanStickCtor } from './can-stick';
import { CdkCellDef, CdkColumnDef } from './cell';
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
import * as ɵngcc0 from '@angular/core';
export declare const CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */
export declare abstract class BaseRowDef implements OnChanges {
    /** @docs-private */ template: TemplateRef<any>;
    protected _differs: IterableDiffers;
    /** The columns to be displayed on this row. */
    columns: Iterable<string>;
    /** Differ used to check if any changes were made to the columns. */
    protected _columnsDiffer: IterableDiffer<any>;
    constructor(
    /** @docs-private */ template: TemplateRef<any>, _differs: IterableDiffers);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    getColumnsDiff(): IterableChanges<any> | null;
    /** Gets this row def's relevant cell template from the provided column def. */
    extractCellTemplate(column: CdkColumnDef): TemplateRef<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseRowDef, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseRowDef, never, never, {}, {}, never>;
}
/** @docs-private */
declare class CdkHeaderRowDefBase extends BaseRowDef {
}
declare const _CdkHeaderRowDefBase: CanStickCtor & typeof CdkHeaderRowDefBase;
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
export declare class CdkHeaderRowDef extends _CdkHeaderRowDefBase implements CanStick, OnChanges {
    _table?: any;
    constructor(template: TemplateRef<any>, _differs: IterableDiffers, _table?: any);
    ngOnChanges(changes: SimpleChanges): void;
    static ngAcceptInputType_sticky: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkHeaderRowDef, [null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkHeaderRowDef, "[cdkHeaderRowDef]", never, { "columns": "cdkHeaderRowDef"; "sticky": "cdkHeaderRowDefSticky"; }, {}, never>;
}
/** @docs-private */
declare class CdkFooterRowDefBase extends BaseRowDef {
}
declare const _CdkFooterRowDefBase: CanStickCtor & typeof CdkFooterRowDefBase;
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
export declare class CdkFooterRowDef extends _CdkFooterRowDefBase implements CanStick, OnChanges {
    _table?: any;
    constructor(template: TemplateRef<any>, _differs: IterableDiffers, _table?: any);
    ngOnChanges(changes: SimpleChanges): void;
    static ngAcceptInputType_sticky: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFooterRowDef, [null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkFooterRowDef, "[cdkFooterRowDef]", never, { "columns": "cdkFooterRowDef"; "sticky": "cdkFooterRowDefSticky"; }, {}, never>;
}
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
export declare class CdkRowDef<T> extends BaseRowDef {
    _table?: any;
    /**
     * Function that should return true if this row template should be used for the provided index
     * and row data. If left undefined, this row will be considered the default row template to use
     * when no other when functions return true for the data.
     * For every row, there must be at least one when function that passes or an undefined to default.
     */
    when: (index: number, rowData: T) => boolean;
    constructor(template: TemplateRef<any>, _differs: IterableDiffers, _table?: any);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkRowDef<any>, [null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkRowDef<any>, "[cdkRowDef]", never, { "columns": "cdkRowDefColumns"; "when": "cdkRowDefWhen"; }, {}, never>;
}
/** Context provided to the row cells when `multiTemplateDataRows` is false */
export interface CdkCellOutletRowContext<T> {
    /** Data for the row that this cell is located within. */
    $implicit?: T;
    /** Index of the data object in the provided data array. */
    index?: number;
    /** Length of the number of total rows. */
    count?: number;
    /** True if this cell is contained in the first row. */
    first?: boolean;
    /** True if this cell is contained in the last row. */
    last?: boolean;
    /** True if this cell is contained in a row with an even-numbered index. */
    even?: boolean;
    /** True if this cell is contained in a row with an odd-numbered index. */
    odd?: boolean;
}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is true. This context is the same
 * as CdkCellOutletRowContext except that the single `index` value is replaced by `dataIndex` and
 * `renderIndex`.
 */
export interface CdkCellOutletMultiRowContext<T> {
    /** Data for the row that this cell is located within. */
    $implicit?: T;
    /** Index of the data object in the provided data array. */
    dataIndex?: number;
    /** Index location of the rendered row that this cell is located within. */
    renderIndex?: number;
    /** Length of the number of total rows. */
    count?: number;
    /** True if this cell is contained in the first row. */
    first?: boolean;
    /** True if this cell is contained in the last row. */
    last?: boolean;
    /** True if this cell is contained in a row with an even-numbered index. */
    even?: boolean;
    /** True if this cell is contained in a row with an odd-numbered index. */
    odd?: boolean;
}
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
export declare class CdkCellOutlet implements OnDestroy {
    _viewContainer: ViewContainerRef;
    /** The ordered list of cells to render within this outlet's view container */
    cells: CdkCellDef[];
    /** The data context to be provided to each cell */
    context: any;
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    static mostRecentCellOutlet: CdkCellOutlet | null;
    constructor(_viewContainer: ViewContainerRef);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkCellOutlet, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkCellOutlet, "[cdkCellOutlet]", never, {}, {}, never>;
}
/** Header template container that contains the cell outlet. Adds the right class and role. */
export declare class CdkHeaderRow {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkHeaderRow, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkHeaderRow, "cdk-header-row, tr[cdk-header-row]", never, {}, {}, never, never>;
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export declare class CdkFooterRow {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFooterRow, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkFooterRow, "cdk-footer-row, tr[cdk-footer-row]", never, {}, {}, never, never>;
}
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export declare class CdkRow {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkRow, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkRow, "cdk-row, tr[cdk-row]", never, {}, {}, never, never>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmQudHMiLCJzb3VyY2VzIjpbInJvdy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgSXRlcmFibGVDaGFuZ2VzLCBJdGVyYWJsZURpZmZlciwgSXRlcmFibGVEaWZmZXJzLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhblN0aWNrLCBDYW5TdGlja0N0b3IgfSBmcm9tICcuL2Nhbi1zdGljayc7XG5pbXBvcnQgeyBDZGtDZWxsRGVmLCBDZGtDb2x1bW5EZWYgfSBmcm9tICcuL2NlbGwnO1xuLyoqXG4gKiBUaGUgcm93IHRlbXBsYXRlIHRoYXQgY2FuIGJlIHVzZWQgYnkgdGhlIG1hdC10YWJsZS4gU2hvdWxkIG5vdCBiZSB1c2VkIG91dHNpZGUgb2YgdGhlXG4gKiBtYXRlcmlhbCBsaWJyYXJ5LlxuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBDREtfUk9XX1RFTVBMQVRFID0gXCI8bmctY29udGFpbmVyIGNka0NlbGxPdXRsZXQ+PC9uZy1jb250YWluZXI+XCI7XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHRoZSBDZGtIZWFkZXJSb3dEZWYgYW5kIENka1Jvd0RlZiB0aGF0IGhhbmRsZXMgY2hlY2tpbmcgdGhlaXIgY29sdW1ucyBpbnB1dHNcbiAqIGZvciBjaGFuZ2VzIGFuZCBub3RpZnlpbmcgdGhlIHRhYmxlLlxuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBCYXNlUm93RGVmIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqLyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBwcm90ZWN0ZWQgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycztcbiAgICAvKiogVGhlIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkIG9uIHRoaXMgcm93LiAqL1xuICAgIGNvbHVtbnM6IEl0ZXJhYmxlPHN0cmluZz47XG4gICAgLyoqIERpZmZlciB1c2VkIHRvIGNoZWNrIGlmIGFueSBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgY29sdW1ucy4gKi9cbiAgICBwcm90ZWN0ZWQgX2NvbHVtbnNEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPGFueT47XG4gICAgY29uc3RydWN0b3IoXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi8gdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgY3VycmVudCBjb2x1bW5zIGFuZCB0aGUgY29sdW1ucyBmcm9tIHRoZSBsYXN0IGRpZmYsIG9yIG51bGxcbiAgICAgKiBpZiB0aGVyZSBpcyBubyBkaWZmZXJlbmNlLlxuICAgICAqL1xuICAgIGdldENvbHVtbnNEaWZmKCk6IEl0ZXJhYmxlQ2hhbmdlczxhbnk+IHwgbnVsbDtcbiAgICAvKiogR2V0cyB0aGlzIHJvdyBkZWYncyByZWxldmFudCBjZWxsIHRlbXBsYXRlIGZyb20gdGhlIHByb3ZpZGVkIGNvbHVtbiBkZWYuICovXG4gICAgZXh0cmFjdENlbGxUZW1wbGF0ZShjb2x1bW46IENka0NvbHVtbkRlZik6IFRlbXBsYXRlUmVmPGFueT47XG59XG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZGVjbGFyZSBjbGFzcyBDZGtIZWFkZXJSb3dEZWZCYXNlIGV4dGVuZHMgQmFzZVJvd0RlZiB7XG59XG5kZWNsYXJlIGNvbnN0IF9DZGtIZWFkZXJSb3dEZWZCYXNlOiBDYW5TdGlja0N0b3IgJiB0eXBlb2YgQ2RrSGVhZGVyUm93RGVmQmFzZTtcbi8qKlxuICogSGVhZGVyIHJvdyBkZWZpbml0aW9uIGZvciB0aGUgQ0RLIHRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIGhlYWRlciByb3cncyB0ZW1wbGF0ZSBhbmQgb3RoZXIgaGVhZGVyIHByb3BlcnRpZXMgc3VjaCBhcyB0aGUgY29sdW1ucyB0byBkaXNwbGF5LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtIZWFkZXJSb3dEZWYgZXh0ZW5kcyBfQ2RrSGVhZGVyUm93RGVmQmFzZSBpbXBsZW1lbnRzIENhblN0aWNrLCBPbkNoYW5nZXMge1xuICAgIF90YWJsZT86IGFueTtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycywgX3RhYmxlPzogYW55KTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2t5OiBCb29sZWFuSW5wdXQ7XG59XG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZGVjbGFyZSBjbGFzcyBDZGtGb290ZXJSb3dEZWZCYXNlIGV4dGVuZHMgQmFzZVJvd0RlZiB7XG59XG5kZWNsYXJlIGNvbnN0IF9DZGtGb290ZXJSb3dEZWZCYXNlOiBDYW5TdGlja0N0b3IgJiB0eXBlb2YgQ2RrRm9vdGVyUm93RGVmQmFzZTtcbi8qKlxuICogRm9vdGVyIHJvdyBkZWZpbml0aW9uIGZvciB0aGUgQ0RLIHRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIGZvb3RlciByb3cncyB0ZW1wbGF0ZSBhbmQgb3RoZXIgZm9vdGVyIHByb3BlcnRpZXMgc3VjaCBhcyB0aGUgY29sdW1ucyB0byBkaXNwbGF5LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtGb290ZXJSb3dEZWYgZXh0ZW5kcyBfQ2RrRm9vdGVyUm93RGVmQmFzZSBpbXBsZW1lbnRzIENhblN0aWNrLCBPbkNoYW5nZXMge1xuICAgIF90YWJsZT86IGFueTtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycywgX3RhYmxlPzogYW55KTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2t5OiBCb29sZWFuSW5wdXQ7XG59XG4vKipcbiAqIERhdGEgcm93IGRlZmluaXRpb24gZm9yIHRoZSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgaGVhZGVyIHJvdydzIHRlbXBsYXRlIGFuZCBvdGhlciByb3cgcHJvcGVydGllcyBzdWNoIGFzIHRoZSBjb2x1bW5zIHRvIGRpc3BsYXkgYW5kXG4gKiBhIHdoZW4gcHJlZGljYXRlIHRoYXQgZGVzY3JpYmVzIHdoZW4gdGhpcyByb3cgc2hvdWxkIGJlIHVzZWQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1Jvd0RlZjxUPiBleHRlbmRzIEJhc2VSb3dEZWYge1xuICAgIF90YWJsZT86IGFueTtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHNob3VsZCByZXR1cm4gdHJ1ZSBpZiB0aGlzIHJvdyB0ZW1wbGF0ZSBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHByb3ZpZGVkIGluZGV4XG4gICAgICogYW5kIHJvdyBkYXRhLiBJZiBsZWZ0IHVuZGVmaW5lZCwgdGhpcyByb3cgd2lsbCBiZSBjb25zaWRlcmVkIHRoZSBkZWZhdWx0IHJvdyB0ZW1wbGF0ZSB0byB1c2VcbiAgICAgKiB3aGVuIG5vIG90aGVyIHdoZW4gZnVuY3Rpb25zIHJldHVybiB0cnVlIGZvciB0aGUgZGF0YS5cbiAgICAgKiBGb3IgZXZlcnkgcm93LCB0aGVyZSBtdXN0IGJlIGF0IGxlYXN0IG9uZSB3aGVuIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIG9yIGFuIHVuZGVmaW5lZCB0byBkZWZhdWx0LlxuICAgICAqL1xuICAgIHdoZW46IChpbmRleDogbnVtYmVyLCByb3dEYXRhOiBUKSA9PiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBfdGFibGU/OiBhbnkpO1xufVxuLyoqIENvbnRleHQgcHJvdmlkZWQgdG8gdGhlIHJvdyBjZWxscyB3aGVuIGBtdWx0aVRlbXBsYXRlRGF0YVJvd3NgIGlzIGZhbHNlICovXG5leHBvcnQgaW50ZXJmYWNlIENka0NlbGxPdXRsZXRSb3dDb250ZXh0PFQ+IHtcbiAgICAvKiogRGF0YSBmb3IgdGhlIHJvdyB0aGF0IHRoaXMgY2VsbCBpcyBsb2NhdGVkIHdpdGhpbi4gKi9cbiAgICAkaW1wbGljaXQ/OiBUO1xuICAgIC8qKiBJbmRleCBvZiB0aGUgZGF0YSBvYmplY3QgaW4gdGhlIHByb3ZpZGVkIGRhdGEgYXJyYXkuICovXG4gICAgaW5kZXg/OiBudW1iZXI7XG4gICAgLyoqIExlbmd0aCBvZiB0aGUgbnVtYmVyIG9mIHRvdGFsIHJvd3MuICovXG4gICAgY291bnQ/OiBudW1iZXI7XG4gICAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiB0aGUgZmlyc3Qgcm93LiAqL1xuICAgIGZpcnN0PzogYm9vbGVhbjtcbiAgICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIHRoZSBsYXN0IHJvdy4gKi9cbiAgICBsYXN0PzogYm9vbGVhbjtcbiAgICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIGEgcm93IHdpdGggYW4gZXZlbi1udW1iZXJlZCBpbmRleC4gKi9cbiAgICBldmVuPzogYm9vbGVhbjtcbiAgICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIGEgcm93IHdpdGggYW4gb2RkLW51bWJlcmVkIGluZGV4LiAqL1xuICAgIG9kZD86IGJvb2xlYW47XG59XG4vKipcbiAqIENvbnRleHQgcHJvdmlkZWQgdG8gdGhlIHJvdyBjZWxscyB3aGVuIGBtdWx0aVRlbXBsYXRlRGF0YVJvd3NgIGlzIHRydWUuIFRoaXMgY29udGV4dCBpcyB0aGUgc2FtZVxuICogYXMgQ2RrQ2VsbE91dGxldFJvd0NvbnRleHQgZXhjZXB0IHRoYXQgdGhlIHNpbmdsZSBgaW5kZXhgIHZhbHVlIGlzIHJlcGxhY2VkIGJ5IGBkYXRhSW5kZXhgIGFuZFxuICogYHJlbmRlckluZGV4YC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZGtDZWxsT3V0bGV0TXVsdGlSb3dDb250ZXh0PFQ+IHtcbiAgICAvKiogRGF0YSBmb3IgdGhlIHJvdyB0aGF0IHRoaXMgY2VsbCBpcyBsb2NhdGVkIHdpdGhpbi4gKi9cbiAgICAkaW1wbGljaXQ/OiBUO1xuICAgIC8qKiBJbmRleCBvZiB0aGUgZGF0YSBvYmplY3QgaW4gdGhlIHByb3ZpZGVkIGRhdGEgYXJyYXkuICovXG4gICAgZGF0YUluZGV4PzogbnVtYmVyO1xuICAgIC8qKiBJbmRleCBsb2NhdGlvbiBvZiB0aGUgcmVuZGVyZWQgcm93IHRoYXQgdGhpcyBjZWxsIGlzIGxvY2F0ZWQgd2l0aGluLiAqL1xuICAgIHJlbmRlckluZGV4PzogbnVtYmVyO1xuICAgIC8qKiBMZW5ndGggb2YgdGhlIG51bWJlciBvZiB0b3RhbCByb3dzLiAqL1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gdGhlIGZpcnN0IHJvdy4gKi9cbiAgICBmaXJzdD86IGJvb2xlYW47XG4gICAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiB0aGUgbGFzdCByb3cuICovXG4gICAgbGFzdD86IGJvb2xlYW47XG4gICAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiBhIHJvdyB3aXRoIGFuIGV2ZW4tbnVtYmVyZWQgaW5kZXguICovXG4gICAgZXZlbj86IGJvb2xlYW47XG4gICAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiBhIHJvdyB3aXRoIGFuIG9kZC1udW1iZXJlZCBpbmRleC4gKi9cbiAgICBvZGQ/OiBib29sZWFuO1xufVxuLyoqXG4gKiBPdXRsZXQgZm9yIHJlbmRlcmluZyBjZWxscyBpbnNpZGUgb2YgYSByb3cgb3IgaGVhZGVyIHJvdy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrQ2VsbE91dGxldCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gICAgLyoqIFRoZSBvcmRlcmVkIGxpc3Qgb2YgY2VsbHMgdG8gcmVuZGVyIHdpdGhpbiB0aGlzIG91dGxldCdzIHZpZXcgY29udGFpbmVyICovXG4gICAgY2VsbHM6IENka0NlbGxEZWZbXTtcbiAgICAvKiogVGhlIGRhdGEgY29udGV4dCB0byBiZSBwcm92aWRlZCB0byBlYWNoIGNlbGwgKi9cbiAgICBjb250ZXh0OiBhbnk7XG4gICAgLyoqXG4gICAgICogU3RhdGljIHByb3BlcnR5IGNvbnRhaW5pbmcgdGhlIGxhdGVzdCBjb25zdHJ1Y3RlZCBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzLlxuICAgICAqIFVzZWQgYnkgdGhlIENESyB0YWJsZSB3aGVuIGVhY2ggQ2RrSGVhZGVyUm93IGFuZCBDZGtSb3cgY29tcG9uZW50IGlzIGNyZWF0ZWQgdXNpbmdcbiAgICAgKiBjcmVhdGVFbWJlZGRlZFZpZXcuIEFmdGVyIG9uZSBvZiB0aGVzZSBjb21wb25lbnRzIGFyZSBjcmVhdGVkLCB0aGlzIHByb3BlcnR5IHdpbGwgcHJvdmlkZVxuICAgICAqIGEgaGFuZGxlIHRvIHByb3ZpZGUgdGhhdCBjb21wb25lbnQncyBjZWxscyBhbmQgY29udGV4dC4gQWZ0ZXIgaW5pdCwgdGhlIENka0NlbGxPdXRsZXQgd2lsbFxuICAgICAqIGNvbnN0cnVjdCB0aGUgY2VsbHMgd2l0aCB0aGUgcHJvdmlkZWQgY29udGV4dC5cbiAgICAgKi9cbiAgICBzdGF0aWMgbW9zdFJlY2VudENlbGxPdXRsZXQ6IENka0NlbGxPdXRsZXQgfCBudWxsO1xuICAgIGNvbnN0cnVjdG9yKF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuLyoqIEhlYWRlciB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgY2VsbCBvdXRsZXQuIEFkZHMgdGhlIHJpZ2h0IGNsYXNzIGFuZCByb2xlLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrSGVhZGVyUm93IHtcbn1cbi8qKiBGb290ZXIgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0Zvb3RlclJvdyB7XG59XG4vKiogRGF0YSByb3cgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1JvdyB7XG59XG5leHBvcnQge307XG4iXX0=