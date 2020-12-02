/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { ChangeDetectionStrategy, Component, Directive, IterableDiffers, TemplateRef, ViewContainerRef, ViewEncapsulation, Inject, Optional } from '@angular/core';
import { mixinHasStickyInput } from './can-stick';
import { CDK_TABLE } from './tokens';
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
export var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */
var BaseRowDef = /** @class */ (function () {
    function BaseRowDef(
    /** @docs-private */ template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    BaseRowDef.prototype.ngOnChanges = function (changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            var columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    };
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    BaseRowDef.prototype.getColumnsDiff = function () {
        return this._columnsDiffer.diff(this.columns);
    };
    /** Gets this row def's relevant cell template from the provided column def. */
    BaseRowDef.prototype.extractCellTemplate = function (column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    };
    BaseRowDef.decorators = [
        { type: Directive }
    ];
    /** @nocollapse */
    BaseRowDef.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: IterableDiffers }
    ]; };
    return BaseRowDef;
}());
export { BaseRowDef };
// Boilerplate for applying mixins to CdkHeaderRowDef.
/** @docs-private */
var CdkHeaderRowDefBase = /** @class */ (function (_super) {
    __extends(CdkHeaderRowDefBase, _super);
    function CdkHeaderRowDefBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CdkHeaderRowDefBase;
}(BaseRowDef));
var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
var CdkHeaderRowDef = /** @class */ (function (_super) {
    __extends(CdkHeaderRowDef, _super);
    function CdkHeaderRowDef(template, _differs, _table) {
        var _this = _super.call(this, template, _differs) || this;
        _this._table = _table;
        return _this;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    CdkHeaderRowDef.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    CdkHeaderRowDef.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkHeaderRowDef]',
                    inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky'],
                },] }
    ];
    /** @nocollapse */
    CdkHeaderRowDef.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: IterableDiffers },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_TABLE,] }, { type: Optional }] }
    ]; };
    return CdkHeaderRowDef;
}(_CdkHeaderRowDefBase));
export { CdkHeaderRowDef };
// Boilerplate for applying mixins to CdkFooterRowDef.
/** @docs-private */
var CdkFooterRowDefBase = /** @class */ (function (_super) {
    __extends(CdkFooterRowDefBase, _super);
    function CdkFooterRowDefBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CdkFooterRowDefBase;
}(BaseRowDef));
var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
var CdkFooterRowDef = /** @class */ (function (_super) {
    __extends(CdkFooterRowDef, _super);
    function CdkFooterRowDef(template, _differs, _table) {
        var _this = _super.call(this, template, _differs) || this;
        _this._table = _table;
        return _this;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    CdkFooterRowDef.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    CdkFooterRowDef.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkFooterRowDef]',
                    inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky'],
                },] }
    ];
    /** @nocollapse */
    CdkFooterRowDef.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: IterableDiffers },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_TABLE,] }, { type: Optional }] }
    ]; };
    return CdkFooterRowDef;
}(_CdkFooterRowDefBase));
export { CdkFooterRowDef };
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
var CdkRowDef = /** @class */ (function (_super) {
    __extends(CdkRowDef, _super);
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    function CdkRowDef(template, _differs, _table) {
        var _this = _super.call(this, template, _differs) || this;
        _this._table = _table;
        return _this;
    }
    CdkRowDef.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkRowDef]',
                    inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen'],
                },] }
    ];
    /** @nocollapse */
    CdkRowDef.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: IterableDiffers },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_TABLE,] }, { type: Optional }] }
    ]; };
    return CdkRowDef;
}(BaseRowDef));
export { CdkRowDef };
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
var CdkCellOutlet = /** @class */ (function () {
    function CdkCellOutlet(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    CdkCellOutlet.prototype.ngOnDestroy = function () {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    };
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    CdkCellOutlet.mostRecentCellOutlet = null;
    CdkCellOutlet.decorators = [
        { type: Directive, args: [{ selector: '[cdkCellOutlet]' },] }
    ];
    /** @nocollapse */
    CdkCellOutlet.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    return CdkCellOutlet;
}());
export { CdkCellOutlet };
/** Header template container that contains the cell outlet. Adds the right class and role. */
var CdkHeaderRow = /** @class */ (function () {
    function CdkHeaderRow() {
    }
    CdkHeaderRow.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-header-row, tr[cdk-header-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'cdk-header-row',
                        'role': 'row',
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return CdkHeaderRow;
}());
export { CdkHeaderRow };
/** Footer template container that contains the cell outlet. Adds the right class and role. */
var CdkFooterRow = /** @class */ (function () {
    function CdkFooterRow() {
    }
    CdkFooterRow.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-footer-row, tr[cdk-footer-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'cdk-footer-row',
                        'role': 'row',
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return CdkFooterRow;
}());
export { CdkFooterRow };
/** Data row template container that contains the cell outlet. Adds the right class and role. */
var CdkRow = /** @class */ (function () {
    function CdkRow() {
    }
    CdkRow.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-row, tr[cdk-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'cdk-row',
                        'role': 'row',
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return CdkRow;
}());
export { CdkRow };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90YWJsZS9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUdILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFNBQVMsRUFHVCxlQUFlLEVBSWYsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlCLG1CQUFtQixFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXhFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFbkM7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsNkNBQTZDLENBQUM7QUFFOUU7OztHQUdHO0FBQ0g7SUFRRTtJQUNJLG9CQUFvQixDQUFRLFFBQTBCLEVBQVksUUFBeUI7UUFBL0QsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUMvRixDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLDhGQUE4RjtRQUM5RixpRUFBaUU7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNI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QUFDLElBQUk7aUJBQ3RDOztJQUVELG1CQUFDO0NBQUEsQUFiRCxJQWFDO1NBRFksWUFBWTtBQUl6Qiw4RkFBOEY7QUFDOUY7SUFBQTtJQWFBLENBQUM7O2dCQWJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0NBQW9DO29CQUM5QyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLGdCQUFnQjt3QkFDekIsTUFBTSxFQUFFLEtBQUs7cUJBQ2Q7b0JBQ0QsK0ZBQStGO29CQUMvRiwrQ0FBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO29CQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0lBRUQsbUJBQUM7Q0FBQSxBQWJELElBYUM7U0FEWSxZQUFZO0FBR3pCLGdHQUFnRztBQUNoRztJQUFBO0lBYUEsQ0FBQzs7Z0JBYkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsU0FBUzt3QkFDbEIsTUFBTSxFQUFFLEtBQUs7cUJBQ2Q7b0JBQ0QsK0ZBQStGO29CQUMvRiwrQ0FBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO29CQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0lBRUQsYUFBQztDQUFBLEFBYkQsSUFhQztTQURZLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIEl0ZXJhYmxlQ2hhbmdlcyxcbiAgSXRlcmFibGVEaWZmZXIsXG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5qZWN0LFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FuU3RpY2ssIENhblN0aWNrQ3RvciwgbWl4aW5IYXNTdGlja3lJbnB1dH0gZnJvbSAnLi9jYW4tc3RpY2snO1xuaW1wb3J0IHtDZGtDZWxsRGVmLCBDZGtDb2x1bW5EZWZ9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQge0NES19UQUJMRX0gZnJvbSAnLi90b2tlbnMnO1xuXG4vKipcbiAqIFRoZSByb3cgdGVtcGxhdGUgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGUgbWF0LXRhYmxlLiBTaG91bGQgbm90IGJlIHVzZWQgb3V0c2lkZSBvZiB0aGVcbiAqIG1hdGVyaWFsIGxpYnJhcnkuXG4gKi9cbmV4cG9ydCBjb25zdCBDREtfUk9XX1RFTVBMQVRFID0gYDxuZy1jb250YWluZXIgY2RrQ2VsbE91dGxldD48L25nLWNvbnRhaW5lcj5gO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHRoZSBDZGtIZWFkZXJSb3dEZWYgYW5kIENka1Jvd0RlZiB0aGF0IGhhbmRsZXMgY2hlY2tpbmcgdGhlaXIgY29sdW1ucyBpbnB1dHNcbiAqIGZvciBjaGFuZ2VzIGFuZCBub3RpZnlpbmcgdGhlIHRhYmxlLlxuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUm93RGVmIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqIFRoZSBjb2x1bW5zIHRvIGJlIGRpc3BsYXllZCBvbiB0aGlzIHJvdy4gKi9cbiAgY29sdW1uczogSXRlcmFibGU8c3RyaW5nPjtcblxuICAvKiogRGlmZmVyIHVzZWQgdG8gY2hlY2sgaWYgYW55IGNoYW5nZXMgd2VyZSBtYWRlIHRvIHRoZSBjb2x1bW5zLiAqL1xuICBwcm90ZWN0ZWQgX2NvbHVtbnNEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogQGRvY3MtcHJpdmF0ZSAqLyBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIHByb3RlY3RlZCBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gQ3JlYXRlIGEgbmV3IGNvbHVtbnMgZGlmZmVyIGlmIG9uZSBkb2VzIG5vdCB5ZXQgZXhpc3QuIEluaXRpYWxpemUgaXQgYmFzZWQgb24gaW5pdGlhbCB2YWx1ZVxuICAgIC8vIG9mIHRoZSBjb2x1bW5zIHByb3BlcnR5IG9yIGFuIGVtcHR5IGFycmF5IGlmIG5vbmUgaXMgcHJvdmlkZWQuXG4gICAgaWYgKCF0aGlzLl9jb2x1bW5zRGlmZmVyKSB7XG4gICAgICBjb25zdCBjb2x1bW5zID0gKGNoYW5nZXNbJ2NvbHVtbnMnXSAmJiBjaGFuZ2VzWydjb2x1bW5zJ10uY3VycmVudFZhbHVlKSB8fCBbXTtcbiAgICAgIHRoaXMuX2NvbHVtbnNEaWZmZXIgPSB0aGlzLl9kaWZmZXJzLmZpbmQoY29sdW1ucykuY3JlYXRlKCk7XG4gICAgICB0aGlzLl9jb2x1bW5zRGlmZmVyLmRpZmYoY29sdW1ucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgY3VycmVudCBjb2x1bW5zIGFuZCB0aGUgY29sdW1ucyBmcm9tIHRoZSBsYXN0IGRpZmYsIG9yIG51bGxcbiAgICogaWYgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZS5cbiAgICovXG4gIGdldENvbHVtbnNEaWZmKCk6IEl0ZXJhYmxlQ2hhbmdlczxhbnk+fG51bGwge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zRGlmZmVyLmRpZmYodGhpcy5jb2x1bW5zKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoaXMgcm93IGRlZidzIHJlbGV2YW50IGNlbGwgdGVtcGxhdGUgZnJvbSB0aGUgcHJvdmlkZWQgY29sdW1uIGRlZi4gKi9cbiAgZXh0cmFjdENlbGxUZW1wbGF0ZShjb2x1bW46IENka0NvbHVtbkRlZik6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQ2RrSGVhZGVyUm93RGVmKSB7XG4gICAgICByZXR1cm4gY29sdW1uLmhlYWRlckNlbGwudGVtcGxhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQ2RrRm9vdGVyUm93RGVmKSB7XG4gICAgICByZXR1cm4gY29sdW1uLmZvb3RlckNlbGwudGVtcGxhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb2x1bW4uY2VsbC50ZW1wbGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBDZGtIZWFkZXJSb3dEZWYuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY2xhc3MgQ2RrSGVhZGVyUm93RGVmQmFzZSBleHRlbmRzIEJhc2VSb3dEZWYge31cbmNvbnN0IF9DZGtIZWFkZXJSb3dEZWZCYXNlOiBDYW5TdGlja0N0b3ImdHlwZW9mIENka0hlYWRlclJvd0RlZkJhc2UgPVxuICAgIG1peGluSGFzU3RpY2t5SW5wdXQoQ2RrSGVhZGVyUm93RGVmQmFzZSk7XG5cbi8qKlxuICogSGVhZGVyIHJvdyBkZWZpbml0aW9uIGZvciB0aGUgQ0RLIHRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIGhlYWRlciByb3cncyB0ZW1wbGF0ZSBhbmQgb3RoZXIgaGVhZGVyIHByb3BlcnRpZXMgc3VjaCBhcyB0aGUgY29sdW1ucyB0byBkaXNwbGF5LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrSGVhZGVyUm93RGVmXScsXG4gIGlucHV0czogWydjb2x1bW5zOiBjZGtIZWFkZXJSb3dEZWYnLCAnc3RpY2t5OiBjZGtIZWFkZXJSb3dEZWZTdGlja3knXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrSGVhZGVyUm93RGVmIGV4dGVuZHMgX0Nka0hlYWRlclJvd0RlZkJhc2UgaW1wbGVtZW50cyBDYW5TdGljaywgT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICBASW5qZWN0KENES19UQUJMRSkgQE9wdGlvbmFsKCkgcHVibGljIF90YWJsZT86IGFueSkge1xuICAgIHN1cGVyKHRlbXBsYXRlLCBfZGlmZmVycyk7XG4gIH1cblxuICAvLyBQcmVyZW5kZXIgZmFpbHMgdG8gcmVjb2duaXplIHRoYXQgbmdPbkNoYW5nZXMgaW4gYSBwYXJ0IG9mIHRoaXMgY2xhc3MgdGhyb3VnaCBpbmhlcml0YW5jZS5cbiAgLy8gRXhwbGljaXRseSBkZWZpbmUgaXQgc28gdGhhdCB0aGUgbWV0aG9kIGlzIGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBBbmd1bGFyIGxpZmVjeWNsZS5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreTogQm9vbGVhbklucHV0O1xufVxuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIENka0Zvb3RlclJvd0RlZi5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBDZGtGb290ZXJSb3dEZWZCYXNlIGV4dGVuZHMgQmFzZVJvd0RlZiB7fVxuY29uc3QgX0Nka0Zvb3RlclJvd0RlZkJhc2U6IENhblN0aWNrQ3RvciZ0eXBlb2YgQ2RrRm9vdGVyUm93RGVmQmFzZSA9XG4gICAgbWl4aW5IYXNTdGlja3lJbnB1dChDZGtGb290ZXJSb3dEZWZCYXNlKTtcblxuLyoqXG4gKiBGb290ZXIgcm93IGRlZmluaXRpb24gZm9yIHRoZSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgZm9vdGVyIHJvdydzIHRlbXBsYXRlIGFuZCBvdGhlciBmb290ZXIgcHJvcGVydGllcyBzdWNoIGFzIHRoZSBjb2x1bW5zIHRvIGRpc3BsYXkuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtGb290ZXJSb3dEZWZdJyxcbiAgaW5wdXRzOiBbJ2NvbHVtbnM6IGNka0Zvb3RlclJvd0RlZicsICdzdGlja3k6IGNka0Zvb3RlclJvd0RlZlN0aWNreSddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtGb290ZXJSb3dEZWYgZXh0ZW5kcyBfQ2RrRm9vdGVyUm93RGVmQmFzZSBpbXBsZW1lbnRzIENhblN0aWNrLCBPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcbiAgICBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgIEBJbmplY3QoQ0RLX1RBQkxFKSBAT3B0aW9uYWwoKSBwdWJsaWMgX3RhYmxlPzogYW55KSB7XG4gICAgc3VwZXIodGVtcGxhdGUsIF9kaWZmZXJzKTtcbiAgfVxuXG4gIC8vIFByZXJlbmRlciBmYWlscyB0byByZWNvZ25pemUgdGhhdCBuZ09uQ2hhbmdlcyBpbiBhIHBhcnQgb2YgdGhpcyBjbGFzcyB0aHJvdWdoIGluaGVyaXRhbmNlLlxuICAvLyBFeHBsaWNpdGx5IGRlZmluZSBpdCBzbyB0aGF0IHRoZSBtZXRob2QgaXMgY2FsbGVkIGFzIHBhcnQgb2YgdGhlIEFuZ3VsYXIgbGlmZWN5Y2xlLlxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2t5OiBCb29sZWFuSW5wdXQ7XG59XG5cbi8qKlxuICogRGF0YSByb3cgZGVmaW5pdGlvbiBmb3IgdGhlIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSBoZWFkZXIgcm93J3MgdGVtcGxhdGUgYW5kIG90aGVyIHJvdyBwcm9wZXJ0aWVzIHN1Y2ggYXMgdGhlIGNvbHVtbnMgdG8gZGlzcGxheSBhbmRcbiAqIGEgd2hlbiBwcmVkaWNhdGUgdGhhdCBkZXNjcmliZXMgd2hlbiB0aGlzIHJvdyBzaG91bGQgYmUgdXNlZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1Jvd0RlZl0nLFxuICBpbnB1dHM6IFsnY29sdW1uczogY2RrUm93RGVmQ29sdW1ucycsICd3aGVuOiBjZGtSb3dEZWZXaGVuJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka1Jvd0RlZjxUPiBleHRlbmRzIEJhc2VSb3dEZWYge1xuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBzaG91bGQgcmV0dXJuIHRydWUgaWYgdGhpcyByb3cgdGVtcGxhdGUgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBwcm92aWRlZCBpbmRleFxuICAgKiBhbmQgcm93IGRhdGEuIElmIGxlZnQgdW5kZWZpbmVkLCB0aGlzIHJvdyB3aWxsIGJlIGNvbnNpZGVyZWQgdGhlIGRlZmF1bHQgcm93IHRlbXBsYXRlIHRvIHVzZVxuICAgKiB3aGVuIG5vIG90aGVyIHdoZW4gZnVuY3Rpb25zIHJldHVybiB0cnVlIGZvciB0aGUgZGF0YS5cbiAgICogRm9yIGV2ZXJ5IHJvdywgdGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgd2hlbiBmdW5jdGlvbiB0aGF0IHBhc3NlcyBvciBhbiB1bmRlZmluZWQgdG8gZGVmYXVsdC5cbiAgICovXG4gIHdoZW46IChpbmRleDogbnVtYmVyLCByb3dEYXRhOiBUKSA9PiBib29sZWFuO1xuXG4gIC8vIFRPRE8oYW5kcmV3c2VndWluKTogQWRkIGFuIGlucHV0IGZvciBwcm92aWRpbmcgYSBzd2l0Y2ggZnVuY3Rpb24gdG8gZGV0ZXJtaW5lXG4gIC8vICAgaWYgdGhpcyB0ZW1wbGF0ZSBzaG91bGQgYmUgdXNlZC5cbiAgY29uc3RydWN0b3IoXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICBASW5qZWN0KENES19UQUJMRSkgQE9wdGlvbmFsKCkgcHVibGljIF90YWJsZT86IGFueSkge1xuICAgIHN1cGVyKHRlbXBsYXRlLCBfZGlmZmVycyk7XG4gIH1cbn1cblxuLyoqIENvbnRleHQgcHJvdmlkZWQgdG8gdGhlIHJvdyBjZWxscyB3aGVuIGBtdWx0aVRlbXBsYXRlRGF0YVJvd3NgIGlzIGZhbHNlICovXG5leHBvcnQgaW50ZXJmYWNlIENka0NlbGxPdXRsZXRSb3dDb250ZXh0PFQ+IHtcbiAgLyoqIERhdGEgZm9yIHRoZSByb3cgdGhhdCB0aGlzIGNlbGwgaXMgbG9jYXRlZCB3aXRoaW4uICovXG4gICRpbXBsaWNpdD86IFQ7XG5cbiAgLyoqIEluZGV4IG9mIHRoZSBkYXRhIG9iamVjdCBpbiB0aGUgcHJvdmlkZWQgZGF0YSBhcnJheS4gKi9cbiAgaW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqIExlbmd0aCBvZiB0aGUgbnVtYmVyIG9mIHRvdGFsIHJvd3MuICovXG4gIGNvdW50PzogbnVtYmVyO1xuXG4gIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gdGhlIGZpcnN0IHJvdy4gKi9cbiAgZmlyc3Q/OiBib29sZWFuO1xuXG4gIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gdGhlIGxhc3Qgcm93LiAqL1xuICBsYXN0PzogYm9vbGVhbjtcblxuICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIGEgcm93IHdpdGggYW4gZXZlbi1udW1iZXJlZCBpbmRleC4gKi9cbiAgZXZlbj86IGJvb2xlYW47XG5cbiAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiBhIHJvdyB3aXRoIGFuIG9kZC1udW1iZXJlZCBpbmRleC4gKi9cbiAgb2RkPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDb250ZXh0IHByb3ZpZGVkIHRvIHRoZSByb3cgY2VsbHMgd2hlbiBgbXVsdGlUZW1wbGF0ZURhdGFSb3dzYCBpcyB0cnVlLiBUaGlzIGNvbnRleHQgaXMgdGhlIHNhbWVcbiAqIGFzIENka0NlbGxPdXRsZXRSb3dDb250ZXh0IGV4Y2VwdCB0aGF0IHRoZSBzaW5nbGUgYGluZGV4YCB2YWx1ZSBpcyByZXBsYWNlZCBieSBgZGF0YUluZGV4YCBhbmRcbiAqIGByZW5kZXJJbmRleGAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrQ2VsbE91dGxldE11bHRpUm93Q29udGV4dDxUPiB7XG4gIC8qKiBEYXRhIGZvciB0aGUgcm93IHRoYXQgdGhpcyBjZWxsIGlzIGxvY2F0ZWQgd2l0aGluLiAqL1xuICAkaW1wbGljaXQ/OiBUO1xuXG4gIC8qKiBJbmRleCBvZiB0aGUgZGF0YSBvYmplY3QgaW4gdGhlIHByb3ZpZGVkIGRhdGEgYXJyYXkuICovXG4gIGRhdGFJbmRleD86IG51bWJlcjtcblxuICAvKiogSW5kZXggbG9jYXRpb24gb2YgdGhlIHJlbmRlcmVkIHJvdyB0aGF0IHRoaXMgY2VsbCBpcyBsb2NhdGVkIHdpdGhpbi4gKi9cbiAgcmVuZGVySW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqIExlbmd0aCBvZiB0aGUgbnVtYmVyIG9mIHRvdGFsIHJvd3MuICovXG4gIGNvdW50PzogbnVtYmVyO1xuXG4gIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gdGhlIGZpcnN0IHJvdy4gKi9cbiAgZmlyc3Q/OiBib29sZWFuO1xuXG4gIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gdGhlIGxhc3Qgcm93LiAqL1xuICBsYXN0PzogYm9vbGVhbjtcblxuICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIGEgcm93IHdpdGggYW4gZXZlbi1udW1iZXJlZCBpbmRleC4gKi9cbiAgZXZlbj86IGJvb2xlYW47XG5cbiAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiBhIHJvdyB3aXRoIGFuIG9kZC1udW1iZXJlZCBpbmRleC4gKi9cbiAgb2RkPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBPdXRsZXQgZm9yIHJlbmRlcmluZyBjZWxscyBpbnNpZGUgb2YgYSByb3cgb3IgaGVhZGVyIHJvdy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbY2RrQ2VsbE91dGxldF0nfSlcbmV4cG9ydCBjbGFzcyBDZGtDZWxsT3V0bGV0IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIFRoZSBvcmRlcmVkIGxpc3Qgb2YgY2VsbHMgdG8gcmVuZGVyIHdpdGhpbiB0aGlzIG91dGxldCdzIHZpZXcgY29udGFpbmVyICovXG4gIGNlbGxzOiBDZGtDZWxsRGVmW107XG5cbiAgLyoqIFRoZSBkYXRhIGNvbnRleHQgdG8gYmUgcHJvdmlkZWQgdG8gZWFjaCBjZWxsICovXG4gIGNvbnRleHQ6IGFueTtcblxuICAvKipcbiAgICogU3RhdGljIHByb3BlcnR5IGNvbnRhaW5pbmcgdGhlIGxhdGVzdCBjb25zdHJ1Y3RlZCBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzLlxuICAgKiBVc2VkIGJ5IHRoZSBDREsgdGFibGUgd2hlbiBlYWNoIENka0hlYWRlclJvdyBhbmQgQ2RrUm93IGNvbXBvbmVudCBpcyBjcmVhdGVkIHVzaW5nXG4gICAqIGNyZWF0ZUVtYmVkZGVkVmlldy4gQWZ0ZXIgb25lIG9mIHRoZXNlIGNvbXBvbmVudHMgYXJlIGNyZWF0ZWQsIHRoaXMgcHJvcGVydHkgd2lsbCBwcm92aWRlXG4gICAqIGEgaGFuZGxlIHRvIHByb3ZpZGUgdGhhdCBjb21wb25lbnQncyBjZWxscyBhbmQgY29udGV4dC4gQWZ0ZXIgaW5pdCwgdGhlIENka0NlbGxPdXRsZXQgd2lsbFxuICAgKiBjb25zdHJ1Y3QgdGhlIGNlbGxzIHdpdGggdGhlIHByb3ZpZGVkIGNvbnRleHQuXG4gICAqL1xuICBzdGF0aWMgbW9zdFJlY2VudENlbGxPdXRsZXQ6IENka0NlbGxPdXRsZXR8bnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgQ2RrQ2VsbE91dGxldC5tb3N0UmVjZW50Q2VsbE91dGxldCA9IHRoaXM7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBJZiB0aGlzIHdhcyB0aGUgbGFzdCBvdXRsZXQgYmVpbmcgcmVuZGVyZWQgaW4gdGhlIHZpZXcsIHJlbW92ZSB0aGUgcmVmZXJlbmNlXG4gICAgLy8gZnJvbSB0aGUgc3RhdGljIHByb3BlcnR5IGFmdGVyIGl0IGhhcyBiZWVuIGRlc3Ryb3llZCB0byBhdm9pZCBsZWFraW5nIG1lbW9yeS5cbiAgICBpZiAoQ2RrQ2VsbE91dGxldC5tb3N0UmVjZW50Q2VsbE91dGxldCA9PT0gdGhpcykge1xuICAgICAgQ2RrQ2VsbE91dGxldC5tb3N0UmVjZW50Q2VsbE91dGxldCA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbi8qKiBIZWFkZXIgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1oZWFkZXItcm93LCB0cltjZGstaGVhZGVyLXJvd10nLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstaGVhZGVyLXJvdycsXG4gICAgJ3JvbGUnOiAncm93JyxcbiAgfSxcbiAgLy8gU2VlIG5vdGUgb24gQ2RrVGFibGUgZm9yIGV4cGxhbmF0aW9uIG9uIHdoeSB0aGlzIHVzZXMgdGhlIGRlZmF1bHQgY2hhbmdlIGRldGVjdGlvbiBzdHJhdGVneS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtIZWFkZXJSb3cge1xufVxuXG5cbi8qKiBGb290ZXIgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1mb290ZXItcm93LCB0cltjZGstZm9vdGVyLXJvd10nLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstZm9vdGVyLXJvdycsXG4gICAgJ3JvbGUnOiAncm93JyxcbiAgfSxcbiAgLy8gU2VlIG5vdGUgb24gQ2RrVGFibGUgZm9yIGV4cGxhbmF0aW9uIG9uIHdoeSB0aGlzIHVzZXMgdGhlIGRlZmF1bHQgY2hhbmdlIGRldGVjdGlvbiBzdHJhdGVneS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtGb290ZXJSb3cge1xufVxuXG4vKiogRGF0YSByb3cgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1yb3csIHRyW2Nkay1yb3ddJyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnY2RrLXJvdycsXG4gICAgJ3JvbGUnOiAncm93JyxcbiAgfSxcbiAgLy8gU2VlIG5vdGUgb24gQ2RrVGFibGUgZm9yIGV4cGxhbmF0aW9uIG9uIHdoeSB0aGlzIHVzZXMgdGhlIGRlZmF1bHQgY2hhbmdlIGRldGVjdGlvbiBzdHJhdGVneS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtSb3cge1xufVxuIl19