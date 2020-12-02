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
 */
var CdkTextColumn = /** @class */ (function () {
    function CdkTextColumn(_table, _options) {
        this._table = _table;
        this._options = _options;
        /** Alignment of the cell values. */
        this.justify = 'start';
        this._options = _options || {};
    }
    Object.defineProperty(CdkTextColumn.prototype, "name", {
        /** Column name that should be used to reference this column. */
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
            // With Ivy, inputs can be initialized before static query results are
            // available. In that case, we defer the synchronization until "ngOnInit" fires.
            this._syncColumnDefName();
        },
        enumerable: true,
        configurable: true
    });
    CdkTextColumn.prototype.ngOnInit = function () {
        this._syncColumnDefName();
        if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
        }
        if (!this.dataAccessor) {
            this.dataAccessor =
                this._options.defaultDataAccessor || (function (data, name) { return data[name]; });
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
    };
    CdkTextColumn.prototype.ngOnDestroy = function () {
        if (this._table) {
            this._table.removeColumnDef(this.columnDef);
        }
    };
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */
    CdkTextColumn.prototype._createDefaultHeaderText = function () {
        var name = this.name;
        if (isDevMode() && !name) {
            throw getTableTextColumnMissingNameError();
        }
        if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
        }
        return name[0].toUpperCase() + name.slice(1);
    };
    /** Synchronizes the column definition name with the text column name. */
    CdkTextColumn.prototype._syncColumnDefName = function () {
        if (this.columnDef) {
            this.columnDef.name = this.name;
        }
    };
    CdkTextColumn.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-text-column',
                    template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
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
    CdkTextColumn.ctorParameters = function () { return [
        { type: CdkTable, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [TEXT_COLUMN_OPTIONS,] }] }
    ]; };
    CdkTextColumn.propDecorators = {
        name: [{ type: Input }],
        headerText: [{ type: Input }],
        dataAccessor: [{ type: Input }],
        justify: [{ type: Input }],
        columnDef: [{ type: ViewChild, args: [CdkColumnDef, { static: true },] }],
        cell: [{ type: ViewChild, args: [CdkCellDef, { static: true },] }],
        headerCell: [{ type: ViewChild, args: [CdkHeaderCellDef, { static: true },] }]
    };
    return CdkTextColumn;
}());
export { CdkTextColumn };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb2x1bW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RhYmxlL3RleHQtY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxFQUNMLHlDQUF5QyxFQUN6QyxrQ0FBa0MsR0FDbkMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUMsbUJBQW1CLEVBQW9CLE1BQU0sVUFBVSxDQUFDO0FBR2hFOzs7Ozs7OztHQVFHO0FBQ0g7SUEwRUUsdUJBQ3dCLE1BQW1CLEVBQ1UsUUFBOEI7UUFEM0QsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUNVLGFBQVEsR0FBUixRQUFRLENBQXNCO1FBMUJuRixvQ0FBb0M7UUFDM0IsWUFBTyxHQUFrQixPQUFPLENBQUM7UUEwQnhDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBdkRELHNCQUNJLCtCQUFJO1FBRlIsZ0VBQWdFO2FBQ2hFO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFDRCxVQUFTLElBQVk7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFFbEIsc0VBQXNFO1lBQ3RFLGdGQUFnRjtZQUNoRixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FQQTtJQXNE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Y2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGlzRGV2TW9kZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0NlbGxEZWYsIENka0NvbHVtbkRlZiwgQ2RrSGVhZGVyQ2VsbERlZn0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7Q2RrVGFibGV9IGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHtcbiAgZ2V0VGFibGVUZXh0Q29sdW1uTWlzc2luZ1BhcmVudFRhYmxlRXJyb3IsXG4gIGdldFRhYmxlVGV4dENvbHVtbk1pc3NpbmdOYW1lRXJyb3IsXG59IGZyb20gJy4vdGFibGUtZXJyb3JzJztcbmltcG9ydCB7VEVYVF9DT0xVTU5fT1BUSU9OUywgVGV4dENvbHVtbk9wdGlvbnN9IGZyb20gJy4vdG9rZW5zJztcblxuXG4vKipcbiAqIENvbHVtbiB0aGF0IHNpbXBseSBzaG93cyB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBoZWFkZXIgYW5kIHJvdyBjZWxscy4gQXNzdW1lcyB0aGF0IHRoZSB0YWJsZVxuICogaXMgdXNpbmcgdGhlIG5hdGl2ZSB0YWJsZSBpbXBsZW1lbnRhdGlvbiAoYDx0YWJsZT5gKS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGUgbmFtZSBvZiB0aGlzIGNvbHVtbiB3aWxsIGJlIHRoZSBoZWFkZXIgdGV4dCBhbmQgZGF0YSBwcm9wZXJ0eSBhY2Nlc3Nvci5cbiAqIFRoZSBoZWFkZXIgdGV4dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSBgaGVhZGVyVGV4dGAgaW5wdXQuIENlbGwgdmFsdWVzIGNhbiBiZSBvdmVycmlkZGVuIHdpdGhcbiAqIHRoZSBgZGF0YUFjY2Vzc29yYCBpbnB1dC4gQ2hhbmdlIHRoZSB0ZXh0IGp1c3RpZmljYXRpb24gdG8gdGhlIHN0YXJ0IG9yIGVuZCB1c2luZyB0aGUgYGp1c3RpZnlgXG4gKiBpbnB1dC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRleHQtY29sdW1uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj5cbiAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWYgW3N0eWxlLnRleHQtYWxpZ25dPVwianVzdGlmeVwiPlxuICAgICAgICB7e2hlYWRlclRleHR9fVxuICAgICAgPC90aD5cbiAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBkYXRhXCIgW3N0eWxlLnRleHQtYWxpZ25dPVwianVzdGlmeVwiPlxuICAgICAgICB7e2RhdGFBY2Nlc3NvcihkYXRhLCBuYW1lKX19XG4gICAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyBDaGFuZ2UgZGV0ZWN0aW9uIGlzIGludGVudGlvbmFsbHkgbm90IHNldCB0byBPblB1c2guIFRoaXMgY29tcG9uZW50J3MgdGVtcGxhdGUgd2lsbCBiZSBwcm92aWRlZFxuICAvLyB0byB0aGUgdGFibGUgdG8gYmUgaW5zZXJ0ZWQgaW50byBpdHMgdmlldy4gVGhpcyBpcyBwcm9ibGVtYXRpYyB3aGVuIGNoYW5nZSBkZXRlY3Rpb24gcnVucyBzaW5jZVxuICAvLyB0aGUgYmluZGluZ3MgaW4gdGhpcyB0ZW1wbGF0ZSB3aWxsIGJlIGV2YWx1YXRlZCBfYWZ0ZXJfIHRoZSB0YWJsZSdzIHZpZXcgaXMgZXZhbHVhdGVkLCB3aGljaFxuICAvLyBtZWFuJ3MgdGhlIHRlbXBsYXRlIGluIHRoZSB0YWJsZSdzIHZpZXcgd2lsbCBub3QgaGF2ZSB0aGUgdXBkYXRlZCB2YWx1ZSAoYW5kIGluIGZhY3Qgd2lsbCBjYXVzZVxuICAvLyBhbiBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yKS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUZXh0Q29sdW1uPFQ+IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAvKiogQ29sdW1uIG5hbWUgdGhhdCBzaG91bGQgYmUgdXNlZCB0byByZWZlcmVuY2UgdGhpcyBjb2x1bW4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG5cbiAgICAvLyBXaXRoIEl2eSwgaW5wdXRzIGNhbiBiZSBpbml0aWFsaXplZCBiZWZvcmUgc3RhdGljIHF1ZXJ5IHJlc3VsdHMgYXJlXG4gICAgLy8gYXZhaWxhYmxlLiBJbiB0aGF0IGNhc2UsIHdlIGRlZmVyIHRoZSBzeW5jaHJvbml6YXRpb24gdW50aWwgXCJuZ09uSW5pdFwiIGZpcmVzLlxuICAgIHRoaXMuX3N5bmNDb2x1bW5EZWZOYW1lKCk7XG4gIH1cbiAgX25hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGV4dCBsYWJlbCB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgY29sdW1uIGhlYWRlci4gSWYgdGhpcyBwcm9wZXJ0eSBpcyBub3RcbiAgICogc2V0LCB0aGUgaGVhZGVyIHRleHQgd2lsbCBkZWZhdWx0IHRvIHRoZSBjb2x1bW4gbmFtZSB3aXRoIGl0cyBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWQuXG4gICAqL1xuICBASW5wdXQoKSBoZWFkZXJUZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFjY2Vzc29yIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBkYXRhIHJlbmRlcmVkIGZvciBlYWNoIGNlbGwuIElmIHRoaXNcbiAgICogcHJvcGVydHkgaXMgbm90IHNldCwgdGhlIGRhdGEgY2VsbHMgd2lsbCByZW5kZXIgdGhlIHZhbHVlIGZvdW5kIGluIHRoZSBkYXRhJ3MgcHJvcGVydHkgbWF0Y2hpbmdcbiAgICogdGhlIGNvbHVtbidzIG5hbWUuIEZvciBleGFtcGxlLCBpZiB0aGUgY29sdW1uIGlzIG5hbWVkIGBpZGAsIHRoZW4gdGhlIHJlbmRlcmVkIHZhbHVlIHdpbGwgYmVcbiAgICogdmFsdWUgZGVmaW5lZCBieSB0aGUgZGF0YSdzIGBpZGAgcHJvcGVydHkuXG4gICAqL1xuICBASW5wdXQoKSBkYXRhQWNjZXNzb3I6IChkYXRhOiBULCBuYW1lOiBzdHJpbmcpID0+IHN0cmluZztcblxuICAvKiogQWxpZ25tZW50IG9mIHRoZSBjZWxsIHZhbHVlcy4gKi9cbiAgQElucHV0KCkganVzdGlmeTogJ3N0YXJ0J3wnZW5kJyA9ICdzdGFydCc7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQFZpZXdDaGlsZChDZGtDb2x1bW5EZWYsIHtzdGF0aWM6IHRydWV9KSBjb2x1bW5EZWY6IENka0NvbHVtbkRlZjtcblxuICAvKipcbiAgICogVGhlIGNvbHVtbiBjZWxsIGlzIHByb3ZpZGVkIHRvIHRoZSBjb2x1bW4gZHVyaW5nIGBuZ09uSW5pdGAgd2l0aCBhIHN0YXRpYyBxdWVyeS5cbiAgICogTm9ybWFsbHksIHRoaXMgd2lsbCBiZSByZXRyaWV2ZWQgYnkgdGhlIGNvbHVtbiB1c2luZyBgQ29udGVudENoaWxkYCwgYnV0IHRoYXQgYXNzdW1lcyB0aGVcbiAgICogY29sdW1uIGRlZmluaXRpb24gd2FzIHByb3ZpZGVkIGluIHRoZSBzYW1lIHZpZXcgYXMgdGhlIHRhYmxlLCB3aGljaCBpcyBub3QgdGhlIGNhc2Ugd2l0aCB0aGlzXG4gICAqIGNvbXBvbmVudC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQFZpZXdDaGlsZChDZGtDZWxsRGVmLCB7c3RhdGljOiB0cnVlfSkgY2VsbDogQ2RrQ2VsbERlZjtcblxuICAvKipcbiAgICogVGhlIGNvbHVtbiBoZWFkZXJDZWxsIGlzIHByb3ZpZGVkIHRvIHRoZSBjb2x1bW4gZHVyaW5nIGBuZ09uSW5pdGAgd2l0aCBhIHN0YXRpYyBxdWVyeS5cbiAgICogTm9ybWFsbHksIHRoaXMgd2lsbCBiZSByZXRyaWV2ZWQgYnkgdGhlIGNvbHVtbiB1c2luZyBgQ29udGVudENoaWxkYCwgYnV0IHRoYXQgYXNzdW1lcyB0aGVcbiAgICogY29sdW1uIGRlZmluaXRpb24gd2FzIHByb3ZpZGVkIGluIHRoZSBzYW1lIHZpZXcgYXMgdGhlIHRhYmxlLCB3aGljaCBpcyBub3QgdGhlIGNhc2Ugd2l0aCB0aGlzXG4gICAqIGNvbXBvbmVudC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQFZpZXdDaGlsZChDZGtIZWFkZXJDZWxsRGVmLCB7c3RhdGljOiB0cnVlfSkgaGVhZGVyQ2VsbDogQ2RrSGVhZGVyQ2VsbERlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYmxlOiBDZGtUYWJsZTxUPixcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoVEVYVF9DT0xVTU5fT1BUSU9OUykgcHJpdmF0ZSBfb3B0aW9uczogVGV4dENvbHVtbk9wdGlvbnM8VD4pIHtcbiAgICB0aGlzLl9vcHRpb25zID0gX29wdGlvbnMgfHwge307XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zeW5jQ29sdW1uRGVmTmFtZSgpO1xuXG4gICAgaWYgKHRoaXMuaGVhZGVyVGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmhlYWRlclRleHQgPSB0aGlzLl9jcmVhdGVEZWZhdWx0SGVhZGVyVGV4dCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kYXRhQWNjZXNzb3IpIHtcbiAgICAgIHRoaXMuZGF0YUFjY2Vzc29yID1cbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmRlZmF1bHREYXRhQWNjZXNzb3IgfHwgKChkYXRhOiBULCBuYW1lOiBzdHJpbmcpID0+IChkYXRhIGFzIGFueSlbbmFtZV0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90YWJsZSkge1xuICAgICAgLy8gUHJvdmlkZSB0aGUgY2VsbCBhbmQgaGVhZGVyQ2VsbCBkaXJlY3RseSB0byB0aGUgdGFibGUgd2l0aCB0aGUgc3RhdGljIGBWaWV3Q2hpbGRgIHF1ZXJ5LFxuICAgICAgLy8gc2luY2UgdGhlIGNvbHVtbkRlZiB3aWxsIG5vdCBwaWNrIHVwIGl0cyBjb250ZW50IGJ5IHRoZSB0aW1lIHRoZSB0YWJsZSBmaW5pc2hlcyBjaGVja2luZ1xuICAgICAgLy8gaXRzIGNvbnRlbnQgYW5kIGluaXRpYWxpemluZyB0aGUgcm93cy5cbiAgICAgIHRoaXMuY29sdW1uRGVmLmNlbGwgPSB0aGlzLmNlbGw7XG4gICAgICB0aGlzLmNvbHVtbkRlZi5oZWFkZXJDZWxsID0gdGhpcy5oZWFkZXJDZWxsO1xuICAgICAgdGhpcy5fdGFibGUuYWRkQ29sdW1uRGVmKHRoaXMuY29sdW1uRGVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZ2V0VGFibGVUZXh0Q29sdW1uTWlzc2luZ1BhcmVudFRhYmxlRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fdGFibGUpIHtcbiAgICAgIHRoaXMuX3RhYmxlLnJlbW92ZUNvbHVtbkRlZih0aGlzLmNvbHVtbkRlZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBkZWZhdWx0IGhlYWRlciB0ZXh0LiBVc2UgdGhlIG9wdGlvbnMnIGhlYWRlciB0ZXh0IHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGlmIG9uZVxuICAgKiBoYXMgYmVlbiBwcm92aWRlZC4gT3RoZXJ3aXNlIHNpbXBseSBjYXBpdGFsaXplIHRoZSBjb2x1bW4gbmFtZS5cbiAgICovXG4gIF9jcmVhdGVEZWZhdWx0SGVhZGVyVGV4dCgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuXG4gICAgaWYgKGlzRGV2TW9kZSgpICYmICFuYW1lKSB7XG4gICAgICB0aHJvdyBnZXRUYWJsZVRleHRDb2x1bW5NaXNzaW5nTmFtZUVycm9yKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5kZWZhdWx0SGVhZGVyVGV4dFRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuZGVmYXVsdEhlYWRlclRleHRUcmFuc2Zvcm0obmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gIH1cblxuICAvKiogU3luY2hyb25pemVzIHRoZSBjb2x1bW4gZGVmaW5pdGlvbiBuYW1lIHdpdGggdGhlIHRleHQgY29sdW1uIG5hbWUuICovXG4gIHByaXZhdGUgX3N5bmNDb2x1bW5EZWZOYW1lKCkge1xuICAgIGlmICh0aGlzLmNvbHVtbkRlZikge1xuICAgICAgdGhpcy5jb2x1bW5EZWYubmFtZSA9IHRoaXMubmFtZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==