/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ContentChild, Directive, ElementRef, Input, TemplateRef, Inject, Optional, } from '@angular/core';
import { mixinHasStickyInput } from './can-stick';
import { CDK_TABLE } from './tokens';
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
var CdkCellDef = /** @class */ (function () {
    function CdkCellDef(/** @docs-private */ template) {
        this.template = template;
    }
    CdkCellDef.decorators = [
        { type: Directive, args: [{ selector: '[cdkCellDef]' },] }
    ];
    /** @nocollapse */
    CdkCellDef.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return CdkCellDef;
}());
export { CdkCellDef };
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var CdkHeaderCellDef = /** @class */ (function () {
    function CdkHeaderCellDef(/** @docs-private */ template) {
        this.template = template;
    }
    CdkHeaderCellDef.decorators = [
        { type: Directive, args: [{ selector: '[cdkHeaderCellDef]' },] }
    ];
    /** @nocollapse */
    CdkHeaderCellDef.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return CdkHeaderCellDef;
}());
export { CdkHeaderCellDef };
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
var CdkFooterCellDef = /** @class */ (function () {
    function CdkFooterCellDef(/** @docs-private */ template) {
        this.template = template;
    }
    CdkFooterCellDef.decorators = [
        { type: Directive, args: [{ selector: '[cdkFooterCellDef]' },] }
    ];
    /** @nocollapse */
    CdkFooterCellDef.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return CdkFooterCellDef;
}());
export { CdkFooterCellDef };
// Boilerplate for applying mixins to CdkColumnDef.
/** @docs-private */
var CdkColumnDefBase = /** @class */ (function () {
    function CdkColumnDefBase() {
    }
    return CdkColumnDefBase;
}());
var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
var CdkColumnDef = /** @class */ (function (_super) {
    __extends(CdkColumnDef, _super);
    function CdkColumnDef(_table) {
        var _this = _super.call(this) || this;
        _this._table = _table;
        _this._stickyEnd = false;
        return _this;
    }
    Object.defineProperty(CdkColumnDef.prototype, "name", {
        /** Unique name for this column. */
        get: function () {
            return this._name;
        },
        set: function (name) {
            // If the directive is set without a name (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (name) {
                this._name = name;
                this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkColumnDef.prototype, "stickyEnd", {
        /**
         * Whether this column should be sticky positioned on the end of the row. Should make sure
         * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
         * has been changed.
         */
        get: function () {
            return this._stickyEnd;
        },
        set: function (v) {
            var prevValue = this._stickyEnd;
            this._stickyEnd = coerceBooleanProperty(v);
            this._hasStickyChanged = prevValue !== this._stickyEnd;
        },
        enumerable: true,
        configurable: true
    });
    CdkColumnDef.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkColumnDef]',
                    inputs: ['sticky'],
                    providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }],
                },] }
    ];
    /** @nocollapse */
    CdkColumnDef.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CDK_TABLE,] }, { type: Optional }] }
    ]; };
    CdkColumnDef.propDecorators = {
        name: [{ type: Input, args: ['cdkColumnDef',] }],
        stickyEnd: [{ type: Input, args: ['stickyEnd',] }],
        cell: [{ type: ContentChild, args: [CdkCellDef,] }],
        headerCell: [{ type: ContentChild, args: [CdkHeaderCellDef,] }],
        footerCell: [{ type: ContentChild, args: [CdkFooterCellDef,] }]
    };
    return CdkColumnDef;
}(_CdkColumnDefBase));
export { CdkColumnDef };
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
var BaseCdkCell = /** @class */ (function () {
    function BaseCdkCell(columnDef, elementRef) {
        var columnClassName = "cdk-column-" + columnDef.cssClassFriendlyName;
        elementRef.nativeElement.classList.add(columnClassName);
    }
    return BaseCdkCell;
}());
export { BaseCdkCell };
/** Header cell template container that adds the right classes and role. */
var CdkHeaderCell = /** @class */ (function (_super) {
    __extends(CdkHeaderCell, _super);
    function CdkHeaderCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    CdkHeaderCell.decorators = [
        { type: Directive, args: [{
                    selector: 'cdk-header-cell, th[cdk-header-cell]',
                    host: {
                        'class': 'cdk-header-cell',
                        'role': 'columnheader',
                    },
                },] }
    ];
    /** @nocollapse */
    CdkHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef }
    ]; };
    return CdkHeaderCell;
}(BaseCdkCell));
export { CdkHeaderCell };
/** Footer cell template container that adds the right classes and role. */
var CdkFooterCell = /** @class */ (function (_super) {
    __extends(CdkFooterCell, _super);
    function CdkFooterCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    CdkFooterCell.decorators = [
        { type: Directive, args: [{
                    selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                    host: {
                        'class': 'cdk-footer-cell',
                        'role': 'gridcell',
                    },
                },] }
    ];
    /** @nocollapse */
    CdkFooterCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef }
    ]; };
    return CdkFooterCell;
}(BaseCdkCell));
export { CdkFooterCell };
/** Cell template container that adds the right classes and role. */
var CdkCell = /** @class */ (function (_super) {
    __extends(CdkCell, _super);
    function CdkCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    CdkCell.decorators = [
        { type: Directive, args: [{
                    selector: 'cdk-cell, td[cdk-cell]',
                    host: {
                        'class': 'cdk-cell',
                        'role': 'gridcell',
                    },
                },] }
    ];
    /** @nocollapse */
    CdkCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef }
    ]; };
    return CdkCell;
}(BaseCdkCell));
export { CdkCell };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGFibGUvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUNMLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxXQUFXLEVBQ1gsTUFBTSxFQUNOLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlCLG1CQUFtQixFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFRbkM7OztHQUdHO0FBQ0g7SUFFRSxvQkFBWSxvQkFBb0IsQ0FBUSxRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFHLENBQUM7O2dCQUZ2RSxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsY0FBYyxFQUFDOzs7O2dCQWpCbkMsV0FBVzs7SUFvQmIsaUJBQUM7Q0FBQSxBQUhELElBR0M7U0FGWSxVQUFVO0FBSXZCOzs7R0FHRztBQUNIO0lBRUUsMEJBQVksb0JBQW9CLENBQVEsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBRyxDQUFDOztnQkFGdkUsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFDOzs7O2dCQTFCekMsV0FBVzs7SUE2QmIsdUJBQUM7Q0FBQSxBQUhELElBR0M7U0FGWSxnQkFBZ0I7QUFJN0I7OztHQUdHO0FBQ0g7SUFFRSwwQkFBWSxvQkFBb0IsQ0FBUSxRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFHLENBQUM7O2dCQUZ2RSxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7Ozs7Z0JBbkN6QyxXQUFXOztJQXNDYix1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O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsTUFBTSxFQUFFLFVBQVU7cUJBQ25CO2lCQUNGOzs7O2dCQUV3QixZQUFZO2dCQWhKbkMsVUFBVTs7SUFtSlosb0JBQUM7Q0FBQSxBQVhELENBT21DLFdBQVcsR0FJN0M7U0FKWSxhQUFhO0FBTTFCLG9FQUFvRTtBQUNwRTtJQU82QiwyQkFBVztJQUN0QyxpQkFBWSxTQUF1QixFQUFFLFVBQXNCO2VBQ3pELGtCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDOUIsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLFVBQVU7cUJBQ25CO2lCQUNGOzs7O2dCQUV3QixZQUFZO2dCQTlKbkMsVUFBVTs7SUFpS1osY0FBQztDQUFBLEFBWEQsQ0FPNkIsV0FBVyxHQUl2QztTQUpZLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIENvbnRlbnRDaGlsZCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYW5TdGljaywgQ2FuU3RpY2tDdG9yLCBtaXhpbkhhc1N0aWNreUlucHV0fSBmcm9tICcuL2Nhbi1zdGljayc7XG5pbXBvcnQge0NES19UQUJMRX0gZnJvbSAnLi90b2tlbnMnO1xuXG5cbi8qKiBCYXNlIGludGVyZmFjZSBmb3IgYSBjZWxsIGRlZmluaXRpb24uIENhcHR1cmVzIGEgY29sdW1uJ3MgY2VsbCB0ZW1wbGF0ZSBkZWZpbml0aW9uLiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZWxsRGVmIHtcbiAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG5cbi8qKlxuICogQ2VsbCBkZWZpbml0aW9uIGZvciBhIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGRhdGEgcm93IGNlbGwgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2Nka0NlbGxEZWZdJ30pXG5leHBvcnQgY2xhc3MgQ2RrQ2VsbERlZiBpbXBsZW1lbnRzIENlbGxEZWYge1xuICBjb25zdHJ1Y3RvcigvKiogQGRvY3MtcHJpdmF0ZSAqLyBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8qKlxuICogSGVhZGVyIGNlbGwgZGVmaW5pdGlvbiBmb3IgYSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBoZWFkZXIgY2VsbCBhbmQgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2Nka0hlYWRlckNlbGxEZWZdJ30pXG5leHBvcnQgY2xhc3MgQ2RrSGVhZGVyQ2VsbERlZiBpbXBsZW1lbnRzIENlbGxEZWYge1xuICBjb25zdHJ1Y3RvcigvKiogQGRvY3MtcHJpdmF0ZSAqLyBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8qKlxuICogRm9vdGVyIGNlbGwgZGVmaW5pdGlvbiBmb3IgYSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBmb290ZXIgY2VsbCBhbmQgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2Nka0Zvb3RlckNlbGxEZWZdJ30pXG5leHBvcnQgY2xhc3MgQ2RrRm9vdGVyQ2VsbERlZiBpbXBsZW1lbnRzIENlbGxEZWYge1xuICBjb25zdHJ1Y3RvcigvKiogQGRvY3MtcHJpdmF0ZSAqLyBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gQ2RrQ29sdW1uRGVmLlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIENka0NvbHVtbkRlZkJhc2Uge31cbmNvbnN0IF9DZGtDb2x1bW5EZWZCYXNlOiBDYW5TdGlja0N0b3ImdHlwZW9mIENka0NvbHVtbkRlZkJhc2UgPVxuICAgIG1peGluSGFzU3RpY2t5SW5wdXQoQ2RrQ29sdW1uRGVmQmFzZSk7XG5cbi8qKlxuICogQ29sdW1uIGRlZmluaXRpb24gZm9yIHRoZSBDREsgdGFibGUuXG4gKiBEZWZpbmVzIGEgc2V0IG9mIGNlbGxzIGF2YWlsYWJsZSBmb3IgYSB0YWJsZSBjb2x1bW4uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtDb2x1bW5EZWZdJyxcbiAgaW5wdXRzOiBbJ3N0aWNreSddLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogJ01BVF9TT1JUX0hFQURFUl9DT0xVTU5fREVGJywgdXNlRXhpc3Rpbmc6IENka0NvbHVtbkRlZn1dLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtDb2x1bW5EZWYgZXh0ZW5kcyBfQ2RrQ29sdW1uRGVmQmFzZSBpbXBsZW1lbnRzIENhblN0aWNrIHtcbiAgLyoqIFVuaXF1ZSBuYW1lIGZvciB0aGlzIGNvbHVtbi4gKi9cbiAgQElucHV0KCdjZGtDb2x1bW5EZWYnKVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIC8vIElmIHRoZSBkaXJlY3RpdmUgaXMgc2V0IHdpdGhvdXQgYSBuYW1lICh1cGRhdGVkIHByb2dyYW1hdGljYWxseSksIHRoZW4gdGhpcyBzZXR0ZXIgd2lsbFxuICAgIC8vIHRyaWdnZXIgd2l0aCBhbiBlbXB0eSBzdHJpbmcgYW5kIHNob3VsZCBub3Qgb3ZlcndyaXRlIHRoZSBwcm9ncmFtYXRpY2FsbHkgc2V0IHZhbHVlLlxuICAgIGlmIChuYW1lKSB7XG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuY3NzQ2xhc3NGcmllbmRseU5hbWUgPSBuYW1lLnJlcGxhY2UoL1teYS16MC05Xy1dL2lnLCAnLScpO1xuICAgIH1cbiAgfVxuICBfbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgY29sdW1uIHNob3VsZCBiZSBzdGlja3kgcG9zaXRpb25lZCBvbiB0aGUgZW5kIG9mIHRoZSByb3cuIFNob3VsZCBtYWtlIHN1cmVcbiAgICogdGhhdCBpdCBtaW1pY3MgdGhlIGBDYW5TdGlja2AgbWl4aW4gc3VjaCB0aGF0IGBfaGFzU3RpY2t5Q2hhbmdlZGAgaXMgc2V0IHRvIHRydWUgaWYgdGhlIHZhbHVlXG4gICAqIGhhcyBiZWVuIGNoYW5nZWQuXG4gICAqL1xuICBASW5wdXQoJ3N0aWNreUVuZCcpXG4gIGdldCBzdGlja3lFbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0aWNreUVuZDtcbiAgfVxuICBzZXQgc3RpY2t5RW5kKHY6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLl9zdGlja3lFbmQ7XG4gICAgdGhpcy5fc3RpY2t5RW5kID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgIHRoaXMuX2hhc1N0aWNreUNoYW5nZWQgPSBwcmV2VmFsdWUgIT09IHRoaXMuX3N0aWNreUVuZDtcbiAgfVxuICBfc3RpY2t5RW5kOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQENvbnRlbnRDaGlsZChDZGtDZWxsRGVmKSBjZWxsOiBDZGtDZWxsRGVmO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBDb250ZW50Q2hpbGQoQ2RrSGVhZGVyQ2VsbERlZikgaGVhZGVyQ2VsbDogQ2RrSGVhZGVyQ2VsbERlZjtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBAQ29udGVudENoaWxkKENka0Zvb3RlckNlbGxEZWYpIGZvb3RlckNlbGw6IENka0Zvb3RlckNlbGxEZWY7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybWVkIHZlcnNpb24gb2YgdGhlIGNvbHVtbiBuYW1lIHRoYXQgY2FuIGJlIHVzZWQgYXMgcGFydCBvZiBhIENTUyBjbGFzc25hbWUuIEV4Y2x1ZGVzXG4gICAqIGFsbCBub24tYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYW5kIHRoZSBzcGVjaWFsIGNoYXJhY3RlcnMgJy0nIGFuZCAnXycuIEFueSBjaGFyYWN0ZXJzIHRoYXRcbiAgICogZG8gbm90IG1hdGNoIGFyZSByZXBsYWNlZCBieSB0aGUgJy0nIGNoYXJhY3Rlci5cbiAgICovXG4gIGNzc0NsYXNzRnJpZW5kbHlOYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChDREtfVEFCTEUpIEBPcHRpb25hbCgpIHB1YmxpYyBfdGFibGU/OiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2t5RW5kOiBCb29sZWFuSW5wdXQ7XG59XG5cbi8qKiBCYXNlIGNsYXNzIGZvciB0aGUgY2VsbHMuIEFkZHMgYSBDU1MgY2xhc3NuYW1lIHRoYXQgaWRlbnRpZmllcyB0aGUgY29sdW1uIGl0IHJlbmRlcnMgaW4uICovXG5leHBvcnQgY2xhc3MgQmFzZUNka0NlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGNvbnN0IGNvbHVtbkNsYXNzTmFtZSA9IGBjZGstY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWA7XG4gICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY29sdW1uQ2xhc3NOYW1lKTtcbiAgfVxufVxuXG4vKiogSGVhZGVyIGNlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Nkay1oZWFkZXItY2VsbCwgdGhbY2RrLWhlYWRlci1jZWxsXScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnY2RrLWhlYWRlci1jZWxsJyxcbiAgICAncm9sZSc6ICdjb2x1bW5oZWFkZXInLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDZGtIZWFkZXJDZWxsIGV4dGVuZHMgQmFzZUNka0NlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gIH1cbn1cblxuLyoqIEZvb3RlciBjZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjZGstZm9vdGVyLWNlbGwsIHRkW2Nkay1mb290ZXItY2VsbF0nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay1mb290ZXItY2VsbCcsXG4gICAgJ3JvbGUnOiAnZ3JpZGNlbGwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDZGtGb290ZXJDZWxsIGV4dGVuZHMgQmFzZUNka0NlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gIH1cbn1cblxuLyoqIENlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Nkay1jZWxsLCB0ZFtjZGstY2VsbF0nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay1jZWxsJyxcbiAgICAncm9sZSc6ICdncmlkY2VsbCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENka0NlbGwgZXh0ZW5kcyBCYXNlQ2RrQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgfVxufVxuIl19