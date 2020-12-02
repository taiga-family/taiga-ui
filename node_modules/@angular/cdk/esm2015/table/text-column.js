/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/text-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, Inject, Input, Optional, ViewChild, ViewEncapsulation, isDevMode, } from '@angular/core';
import { CdkCellDef, CdkColumnDef, CdkHeaderCellDef } from './cell';
import { CdkTable } from './table';
import { getTableTextColumnMissingParentTableError, getTableTextColumnMissingNameError, } from './table-errors';
import { TEXT_COLUMN_OPTIONS } from './tokens';
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 * @template T
 */
export class CdkTextColumn {
    /**
     * @param {?} _table
     * @param {?} _options
     */
    constructor(_table, _options) {
        this._table = _table;
        this._options = _options;
        /**
         * Alignment of the cell values.
         */
        this.justify = 'start';
        this._options = _options || {};
    }
    /**
     * Column name that should be used to reference this column.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
        // With Ivy, inputs can be initialized before static query results are
        // available. In that case, we defer the synchronization until "ngOnInit" fires.
        this._syncColumnDefName();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._syncColumnDefName();
        if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
        }
        if (!this.dataAccessor) {
            this.dataAccessor =
                this._options.defaultDataAccessor || ((/**
                 * @param {?} data
                 * @param {?} name
                 * @return {?}
                 */
                (data, name) => ((/** @type {?} */ (data)))[name]));
        }
        if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;
            this._table.addColumnDef(this.columnDef);
        }
        else {
            throw getTableTextColumnMissingParentTableError();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._table) {
            this._table.removeColumnDef(this.columnDef);
        }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     * @return {?}
     */
    _createDefaultHeaderText() {
        /** @type {?} */
        const name = this.name;
        if (isDevMode() && !name) {
            throw getTableTextColumnMissingNameError();
        }
        if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
        }
        return name[0].toUpperCase() + name.slice(1);
    }
    /**
     * Synchronizes the column definition name with the text column name.
     * @private
     * @return {?}
     */
    _syncColumnDefName() {
        if (this.columnDef) {
            this.columnDef.name = this.name;
        }
    }
}
CdkTextColumn.decorators = [
    { type: Component, args: [{
                selector: 'cdk-text-column',
                template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: ViewEncapsulation.None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default
            }] }
];
/** @nocollapse */
CdkTextColumn.ctorParameters = () => [
    { type: CdkTable, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [TEXT_COLUMN_OPTIONS,] }] }
];
CdkTextColumn.propDecorators = {
    name: [{ type: Input }],
    headerText: [{ type: Input }],
    dataAccessor: [{ type: Input }],
    justify: [{ type: Input }],
    columnDef: [{ type: ViewChild, args: [CdkColumnDef, { static: true },] }],
    cell: [{ type: ViewChild, args: [CdkCellDef, { static: true },] }],
    headerCell: [{ type: ViewChild, args: [CdkHeaderCellDef, { static: true },] }]
};
if (false) {
    /** @type {?} */
    CdkTextColumn.prototype._name;
    /**
     * Text label that should be used for the column header. If this property is not
     * set, the header text will default to the column name with its first letter capitalized.
     * @type {?}
     */
    CdkTextColumn.prototype.headerText;
    /**
     * Accessor function to retrieve the data rendered for each cell. If this
     * property is not set, the data cells will render the value found in the data's property matching
     * the column's name. For example, if the column is named `id`, then the rendered value will be
     * value defined by the data's `id` property.
     * @type {?}
     */
    CdkTextColumn.prototype.dataAccessor;
    /**
     * Alignment of the cell values.
     * @type {?}
     */
    CdkTextColumn.prototype.justify;
    /**
     * \@docs-private
     * @type {?}
     */
    CdkTextColumn.prototype.columnDef;
    /**
     * The column cell is provided to the column during `ngOnInit` with a static query.
     * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
     * column definition was provided in the same view as the table, which is not the case with this
     * component.
     * \@docs-private
     * @type {?}
     */
    CdkTextColumn.prototype.cell;
    /**
     * The column headerCell is provided to the column during `ngOnInit` with a static query.
     * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
     * column definition was provided in the same view as the table, which is not the case with this
     * component.
     * \@docs-private
     * @type {?}
     */
    CdkTextColumn.prototype.headerCell;
    /**
     * @type {?}
     * @private
     */
    CdkTextColumn.prototype._table;
    /**
     * @type {?}
     * @private
     */
    CdkTextColumn.prototype._options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb2x1bW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RhYmxlL3RleHQtY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxFQUNMLHlDQUF5QyxFQUN6QyxrQ0FBa0MsR0FDbkMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUMsbUJBQW1CLEVBQW9CLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztBQWlDaEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBcUR4QixZQUN3QixNQUFtQixFQUNVLFFBQThCO1FBRDNELFdBQU0sR0FBTixNQUFNLENBQWE7UUFDVSxhQUFRLEdBQVIsUUFBUSxDQUFzQjs7OztRQXpCMUUsWUFBTyxHQUFrQixPQUFPLENBQUM7UUEwQnhDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQXZERCxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLElBQUksQ0FBQyxJQUFZO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWxCLHNFQUFzRTtRQUN0RSxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQStDRCxRQUFRO1FBQ04sSUFBSSxD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ICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGlzRGV2TW9kZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0NlbGxEZWYsIENka0NvbHVtbkRlZiwgQ2RrSGVhZGVyQ2VsbERlZn0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7Q2RrVGFibGV9IGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHtcbiAgZ2V0VGFibGVUZXh0Q29sdW1uTWlzc2luZ1BhcmVudFRhYmxlRXJyb3IsXG4gIGdldFRhYmxlVGV4dENvbHVtbk1pc3NpbmdOYW1lRXJyb3IsXG59IGZyb20gJy4vdGFibGUtZXJyb3JzJztcbmltcG9ydCB7VEVYVF9DT0xVTU5fT1BUSU9OUywgVGV4dENvbHVtbk9wdGlvbnN9IGZyb20gJy4vdG9rZW5zJztcblxuXG4vKipcbiAqIENvbHVtbiB0aGF0IHNpbXBseSBzaG93cyB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBoZWFkZXIgYW5kIHJvdyBjZWxscy4gQXNzdW1lcyB0aGF0IHRoZSB0YWJsZVxuICogaXMgdXNpbmcgdGhlIG5hdGl2ZSB0YWJsZSBpbXBsZW1lbnRhdGlvbiAoYDx0YWJsZT5gKS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGUgbmFtZSBvZiB0aGlzIGNvbHVtbiB3aWxsIGJlIHRoZSBoZWFkZXIgdGV4dCBhbmQgZGF0YSBwcm9wZXJ0eSBhY2Nlc3Nvci5cbiAqIFRoZSBoZWFkZXIgdGV4dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSBgaGVhZGVyVGV4dGAgaW5wdXQuIENlbGwgdmFsdWVzIGNhbiBiZSBvdmVycmlkZGVuIHdpdGhcbiAqIHRoZSBgZGF0YUFjY2Vzc29yYCBpbnB1dC4gQ2hhbmdlIHRoZSB0ZXh0IGp1c3RpZmljYXRpb24gdG8gdGhlIHN0YXJ0IG9yIGVuZCB1c2luZyB0aGUgYGp1c3RpZnlgXG4gKiBpbnB1dC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRleHQtY29sdW1uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj5cbiAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWYgW3N0eWxlLnRleHQtYWxpZ25dPVwianVzdGlmeVwiPlxuICAgICAgICB7e2hlYWRlclRleHR9fVxuICAgICAgPC90aD5cbiAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBkYXRhXCIgW3N0eWxlLnRleHQtYWxpZ25dPVwianVzdGlmeVwiPlxuICAgICAgICB7e2RhdGFBY2Nlc3NvcihkYXRhLCBuYW1lKX19XG4gICAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyBDaGFuZ2UgZGV0ZWN0aW9uIGlzIGludGVudGlvbmFsbHkgbm90IHNldCB0byBPblB1c2guIFRoaXMgY29tcG9uZW50J3MgdGVtcGxhdGUgd2lsbCBiZSBwcm92aWRlZFxuICAvLyB0byB0aGUgdGFibGUgdG8gYmUgaW5zZXJ0ZWQgaW50byBpdHMgdmlldy4gVGhpcyBpcyBwcm9ibGVtYXRpYyB3aGVuIGNoYW5nZSBkZXRlY3Rpb24gcnVucyBzaW5jZVxuICAvLyB0aGUgYmluZGluZ3MgaW4gdGhpcyB0ZW1wbGF0ZSB3aWxsIGJlIGV2YWx1YXRlZCBfYWZ0ZXJfIHRoZSB0YWJsZSdzIHZpZXcgaXMgZXZhbHVhdGVkLCB3aGljaFxuICAvLyBtZWFuJ3MgdGhlIHRlbXBsYXRlIGluIHRoZSB0YWJsZSdzIHZpZXcgd2lsbCBub3QgaGF2ZSB0aGUgdXBkYXRlZCB2YWx1ZSAoYW5kIGluIGZhY3Qgd2lsbCBjYXVzZVxuICAvLyBhbiBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yKS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUZXh0Q29sdW1uPFQ+IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAvKiogQ29sdW1uIG5hbWUgdGhhdCBzaG91bGQgYmUgdXNlZCB0byByZWZlcmVuY2UgdGhpcyBjb2x1bW4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG5cbiAgICAvLyBXaXRoIEl2eSwgaW5wdXRzIGNhbiBiZSBpbml0aWFsaXplZCBiZWZvcmUgc3RhdGljIHF1ZXJ5IHJlc3VsdHMgYXJlXG4gICAgLy8gYXZhaWxhYmxlLiBJbiB0aGF0IGNhc2UsIHdlIGRlZmVyIHRoZSBzeW5jaHJvbml6YXRpb24gdW50aWwgXCJuZ09uSW5pdFwiIGZpcmVzLlxuICAgIHRoaXMuX3N5bmNDb2x1bW5EZWZOYW1lKCk7XG4gIH1cbiAgX25hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGV4dCBsYWJlbCB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgY29sdW1uIGhlYWRlci4gSWYgdGhpcyBwcm9wZXJ0eSBpcyBub3RcbiAgICogc2V0LCB0aGUgaGVhZGVyIHRleHQgd2lsbCBkZWZhdWx0IHRvIHRoZSBjb2x1bW4gbmFtZSB3aXRoIGl0cyBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWQuXG4gICAqL1xuICBASW5wdXQoKSBoZWFkZXJUZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFjY2Vzc29yIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBkYXRhIHJlbmRlcmVkIGZvciBlYWNoIGNlbGwuIElmIHRoaXNcbiAgICogcHJvcGVydHkgaXMgbm90IHNldCwgdGhlIGRhdGEgY2VsbHMgd2lsbCByZW5kZXIgdGhlIHZhbHVlIGZvdW5kIGluIHRoZSBkYXRhJ3MgcHJvcGVydHkgbWF0Y2hpbmdcbiAgICogdGhlIGNvbHVtbidzIG5hbWUuIEZvciBleGFtcGxlLCBpZiB0aGUgY29sdW1uIGlzIG5hbWVkIGBpZGAsIHRoZW4gdGhlIHJlbmRlcmVkIHZhbHVlIHdpbGwgYmVcbiAgICogdmFsdWUgZGVmaW5lZCBieSB0aGUgZGF0YSdzIGBpZGAgcHJvcGVydHkuXG4gICAqL1xuICBASW5wdXQoKSBkYXRhQWNjZXNzb3I6IChkYXRhOiBULCBuYW1lOiBzdHJpbmcpID0+IHN0cmluZztcblxuICAvKiogQWxpZ25tZW50IG9mIHRoZSBjZWxsIHZhbHVlcy4gKi9cbiAgQElucHV0KCkganVzdGlmeTogJ3N0YXJ0J3wnZW5kJyA9ICdzdGFydCc7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQFZpZXdDaGlsZChDZGtDb2x1bW5EZWYsIHtzdGF0aWM6IHRydWV9KSBjb2x1bW5EZWY6IENka0NvbHVtbkRlZjtcblxuICAvKipcbiAgICogVGhlIGNvbHVtbiBjZWxsIGlzIHByb3ZpZGVkIHRvIHRoZSBjb2x1bW4gZHVyaW5nIGBuZ09uSW5pdGAgd2l0aCBhIHN0YXRpYyBxdWVyeS5cbiAgICogTm9ybWFsbHksIHRoaXMgd2lsbCBiZSByZXRyaWV2ZWQgYnkgdGhlIGNvbHVtbiB1c2luZyBgQ29udGVudENoaWxkYCwgYnV0IHRoYXQgYXNzdW1lcyB0aGVcbiAgICogY29sdW1uIGRlZmluaXRpb24gd2FzIHByb3ZpZGVkIGluIHRoZSBzYW1lIHZpZXcgYXMgdGhlIHRhYmxlLCB3aGljaCBpcyBub3QgdGhlIGNhc2Ugd2l0aCB0aGlzXG4gICAqIGNvbXBvbmVudC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQFZpZXdDaGlsZChDZGtDZWxsRGVmLCB7c3RhdGljOiB0cnVlfSkgY2VsbDogQ2RrQ2VsbERlZjtcblxuICAvKipcbiAgICogVGhlIGNvbHVtbiBoZWFkZXJDZWxsIGlzIHByb3ZpZGVkIHRvIHRoZSBjb2x1bW4gZHVyaW5nIGBuZ09uSW5pdGAgd2l0aCBhIHN0YXRpYyBxdWVyeS5cbiAgICogTm9ybWFsbHksIHRoaXMgd2lsbCBiZSByZXRyaWV2ZWQgYnkgdGhlIGNvbHVtbiB1c2luZyBgQ29udGVudENoaWxkYCwgYnV0IHRoYXQgYXNzdW1lcyB0aGVcbiAgICogY29sdW1uIGRlZmluaXRpb24gd2FzIHByb3ZpZGVkIGluIHRoZSBzYW1lIHZpZXcgYXMgdGhlIHRhYmxlLCB3aGljaCBpcyBub3QgdGhlIGNhc2Ugd2l0aCB0aGlzXG4gICAqIGNvbXBvbmVudC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQFZpZXdDaGlsZChDZGtIZWFkZXJDZWxsRGVmLCB7c3RhdGljOiB0cnVlfSkgaGVhZGVyQ2VsbDogQ2RrSGVhZGVyQ2VsbERlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYmxlOiBDZGtUYWJsZTxUPixcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoVEVYVF9DT0xVTU5fT1BUSU9OUykgcHJpdmF0ZSBfb3B0aW9uczogVGV4dENvbHVtbk9wdGlvbnM8VD4pIHtcbiAgICB0aGlzLl9vcHRpb25zID0gX29wdGlvbnMgfHwge307XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zeW5jQ29sdW1uRGVmTmFtZSgpO1xuXG4gICAgaWYgKHRoaXMuaGVhZGVyVGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmhlYWRlclRleHQgPSB0aGlzLl9jcmVhdGVEZWZhdWx0SGVhZGVyVGV4dCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kYXRhQWNjZXNzb3IpIHtcbiAgICAgIHRoaXMuZGF0YUFjY2Vzc29yID1cbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmRlZmF1bHREYXRhQWNjZXNzb3IgfHwgKChkYXRhOiBULCBuYW1lOiBzdHJpbmcpID0+IChkYXRhIGFzIGFueSlbbmFtZV0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90YWJsZSkge1xuICAgICAgLy8gUHJvdmlkZSB0aGUgY2VsbCBhbmQgaGVhZGVyQ2VsbCBkaXJlY3RseSB0byB0aGUgdGFibGUgd2l0aCB0aGUgc3RhdGljIGBWaWV3Q2hpbGRgIHF1ZXJ5LFxuICAgICAgLy8gc2luY2UgdGhlIGNvbHVtbkRlZiB3aWxsIG5vdCBwaWNrIHVwIGl0cyBjb250ZW50IGJ5IHRoZSB0aW1lIHRoZSB0YWJsZSBmaW5pc2hlcyBjaGVja2luZ1xuICAgICAgLy8gaXRzIGNvbnRlbnQgYW5kIGluaXRpYWxpemluZyB0aGUgcm93cy5cbiAgICAgIHRoaXMuY29sdW1uRGVmLmNlbGwgPSB0aGlzLmNlbGw7XG4gICAgICB0aGlzLmNvbHVtbkRlZi5oZWFkZXJDZWxsID0gdGhpcy5oZWFkZXJDZWxsO1xuICAgICAgdGhpcy5fdGFibGUuYWRkQ29sdW1uRGVmKHRoaXMuY29sdW1uRGVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZ2V0VGFibGVUZXh0Q29sdW1uTWlzc2luZ1BhcmVudFRhYmxlRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fdGFibGUpIHtcbiAgICAgIHRoaXMuX3RhYmxlLnJlbW92ZUNvbHVtbkRlZih0aGlzLmNvbHVtbkRlZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBkZWZhdWx0IGhlYWRlciB0ZXh0LiBVc2UgdGhlIG9wdGlvbnMnIGhlYWRlciB0ZXh0IHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGlmIG9uZVxuICAgKiBoYXMgYmVlbiBwcm92aWRlZC4gT3RoZXJ3aXNlIHNpbXBseSBjYXBpdGFsaXplIHRoZSBjb2x1bW4gbmFtZS5cbiAgICovXG4gIF9jcmVhdGVEZWZhdWx0SGVhZGVyVGV4dCgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuXG4gICAgaWYgKGlzRGV2TW9kZSgpICYmICFuYW1lKSB7XG4gICAgICB0aHJvdyBnZXRUYWJsZVRleHRDb2x1bW5NaXNzaW5nTmFtZUVycm9yKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5kZWZhdWx0SGVhZGVyVGV4dFRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuZGVmYXVsdEhlYWRlclRleHRUcmFuc2Zvcm0obmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gIH1cblxuICAvKiogU3luY2hyb25pemVzIHRoZSBjb2x1bW4gZGVmaW5pdGlvbiBuYW1lIHdpdGggdGhlIHRleHQgY29sdW1uIG5hbWUuICovXG4gIHByaXZhdGUgX3N5bmNDb2x1bW5EZWZOYW1lKCkge1xuICAgIGlmICh0aGlzLmNvbHVtbkRlZikge1xuICAgICAgdGhpcy5jb2x1bW5EZWYubmFtZSA9IHRoaXMubmFtZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==