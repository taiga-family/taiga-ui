import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { isDataSource } from '@angular/cdk/collections';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from '@angular/cdk/platform';

const _c0 = [[["caption"]]];
const _c1 = ["caption"];
function CdkTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("text-align", ctx_r0.justify);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.headerText, " ");
} }
function CdkTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("text-align", ctx_r1.justify);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
} }
export { DataSource } from '@angular/cdk/collections';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { InjectionToken, Directive, TemplateRef, Inject, Optional, Input, ContentChild, ElementRef, IterableDiffers, ViewContainerRef, Component, ChangeDetectionStrategy, ViewEncapsulation, EmbeddedViewRef, isDevMode, ChangeDetectorRef, Attribute, ViewChild, ContentChildren, NgModule } from '@angular/core';
import { Subject, BehaviorSubject, isObservable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/can-stick.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface for a mixin to provide a directive with a function that checks if the sticky input has
 * been changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @record
 */
function CanStick() { }
if (false) {
    /**
     * Whether sticky positioning should be applied.
     * @type {?}
     */
    CanStick.prototype.sticky;
    /**
     * Whether the sticky input has changed since it was last checked.
     * @type {?}
     */
    CanStick.prototype._hasStickyChanged;
    /**
     * Whether the sticky value has changed since this was last called.
     * @return {?}
     */
    CanStick.prototype.hasStickyChanged = function () { };
    /**
     * Resets the dirty check for cases where the sticky state has been used without checking.
     * @return {?}
     */
    CanStick.prototype.resetStickyChanged = function () { };
}
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinHasStickyInput(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._sticky = false;
            /**
             * Whether the sticky input has changed since it was last checked.
             */
            this._hasStickyChanged = false;
        }
        /**
         * Whether sticky positioning should be applied.
         * @return {?}
         */
        get sticky() { return this._sticky; }
        /**
         * @param {?} v
         * @return {?}
         */
        set sticky(v) {
            /** @type {?} */
            const prevValue = this._sticky;
            this._sticky = coerceBooleanProperty(v);
            this._hasStickyChanged = prevValue !== this._sticky;
        }
        /**
         * Whether the sticky value has changed since this was last called.
         * @return {?}
         */
        hasStickyChanged() {
            /** @type {?} */
            const hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        }
        /**
         * Resets the dirty check for cases where the sticky state has been used without checking.
         * @return {?}
         */
        resetStickyChanged() {
            this._hasStickyChanged = false;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * \@docs-private
 * @type {?}
 */
const CDK_TABLE = new InjectionToken('CDK_TABLE');
/**
 * Configurable options for `CdkTextColumn`.
 * @record
 * @template T
 */
function TextColumnOptions() { }
if (false) {
    /**
     * Default function that provides the header text based on the column name if a header
     * text is not provided.
     * @type {?|undefined}
     */
    TextColumnOptions.prototype.defaultHeaderTextTransform;
    /**
     * Default data accessor to use if one is not provided.
     * @type {?|undefined}
     */
    TextColumnOptions.prototype.defaultDataAccessor;
}
/**
 * Injection token that can be used to specify the text column options.
 * @type {?}
 */
const TEXT_COLUMN_OPTIONS = new InjectionToken('text-column-options');

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base interface for a cell definition. Captures a column's cell template definition.
 * @record
 */
function CellDef() { }
if (false) {
    /** @type {?} */
    CellDef.prototype.template;
}
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class CdkCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkCellDef.ɵfac = function CdkCellDef_Factory(t) { return new (t || CdkCellDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCellDef, selectors: [["", "cdkCellDef", ""]] });
/** @nocollapse */
CdkCellDef.ctorParameters = () => [
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCellDef, [{
        type: Directive,
        args: [{ selector: '[cdkCellDef]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    CdkCellDef.prototype.template;
}
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class CdkHeaderCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) { return new (t || CdkHeaderCellDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkHeaderCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkHeaderCellDef, selectors: [["", "cdkHeaderCellDef", ""]] });
/** @nocollapse */
CdkHeaderCellDef.ctorParameters = () => [
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderCellDef, [{
        type: Directive,
        args: [{ selector: '[cdkHeaderCellDef]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    CdkHeaderCellDef.prototype.template;
}
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class CdkFooterCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) { return new (t || CdkFooterCellDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkFooterCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkFooterCellDef, selectors: [["", "cdkFooterCellDef", ""]] });
/** @nocollapse */
CdkFooterCellDef.ctorParameters = () => [
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterCellDef, [{
        type: Directive,
        args: [{ selector: '[cdkFooterCellDef]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    CdkFooterCellDef.prototype.template;
}
// Boilerplate for applying mixins to CdkColumnDef.
/**
 * \@docs-private
 */
class CdkColumnDefBase {
}
/** @type {?} */
const _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
class CdkColumnDef extends _CdkColumnDefBase {
    /**
     * @param {?=} _table
     */
    constructor(_table) {
        super();
        this._table = _table;
        this._stickyEnd = false;
    }
    /**
     * Unique name for this column.
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
        // If the directive is set without a name (updated programatically), then this setter will
        // trigger with an empty string and should not overwrite the programatically set value.
        if (name) {
            this._name = name;
            this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
        }
    }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     * @return {?}
     */
    get stickyEnd() {
        return this._stickyEnd;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set stickyEnd(v) {
        /** @type {?} */
        const prevValue = this._stickyEnd;
        this._stickyEnd = coerceBooleanProperty(v);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
}
CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) { return new (t || CdkColumnDef)(ɵngcc0.ɵɵdirectiveInject(CDK_TABLE, 8)); };
CdkColumnDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkColumnDef, selectors: [["", "cdkColumnDef", ""]], contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkCellDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkHeaderCellDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkFooterCellDef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cell = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerCell = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerCell = _t.first);
    } }, inputs: { sticky: "sticky", name: ["cdkColumnDef", "name"], stickyEnd: "stickyEnd" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkColumnDef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CDK_TABLE,] }, { type: Optional }] }
];
CdkColumnDef.propDecorators = {
    name: [{ type: Input, args: ['cdkColumnDef',] }],
    stickyEnd: [{ type: Input, args: ['stickyEnd',] }],
    cell: [{ type: ContentChild, args: [CdkCellDef,] }],
    headerCell: [{ type: ContentChild, args: [CdkHeaderCellDef,] }],
    footerCell: [{ type: ContentChild, args: [CdkFooterCellDef,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkColumnDef, [{
        type: Directive,
        args: [{
                selector: '[cdkColumnDef]',
                inputs: ['sticky'],
                providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [CDK_TABLE]
            }, {
                type: Optional
            }] }]; }, { name: [{
            type: Input,
            args: ['cdkColumnDef']
        }], stickyEnd: [{
            type: Input,
            args: ['stickyEnd']
        }], cell: [{
            type: ContentChild,
            args: [CdkCellDef]
        }], headerCell: [{
            type: ContentChild,
            args: [CdkHeaderCellDef]
        }], footerCell: [{
            type: ContentChild,
            args: [CdkFooterCellDef]
        }] }); })();
if (false) {
    /** @type {?} */
    CdkColumnDef.ngAcceptInputType_sticky;
    /** @type {?} */
    CdkColumnDef.ngAcceptInputType_stickyEnd;
    /** @type {?} */
    CdkColumnDef.prototype._name;
    /** @type {?} */
    CdkColumnDef.prototype._stickyEnd;
    /**
     * \@docs-private
     * @type {?}
     */
    CdkColumnDef.prototype.cell;
    /**
     * \@docs-private
     * @type {?}
     */
    CdkColumnDef.prototype.headerCell;
    /**
     * \@docs-private
     * @type {?}
     */
    CdkColumnDef.prototype.footerCell;
    /**
     * Transformed version of the column name that can be used as part of a CSS classname. Excludes
     * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
     * do not match are replaced by the '-' character.
     * @type {?}
     */
    CdkColumnDef.prototype.cssClassFriendlyName;
    /** @type {?} */
    CdkColumnDef.prototype._table;
}
/**
 * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
 */
class BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        /** @type {?} */
        const columnClassName = `cdk-column-${columnDef.cssClassFriendlyName}`;
        elementRef.nativeElement.classList.add(columnClassName);
    }
}
/**
 * Header cell template container that adds the right classes and role.
 */
class CdkHeaderCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) { return new (t || CdkHeaderCell)(ɵngcc0.ɵɵdirectiveInject(CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkHeaderCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkHeaderCell, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderCell, [{
        type: Directive,
        args: [{
                selector: 'cdk-header-cell, th[cdk-header-cell]',
                host: {
                    'class': 'cdk-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
/**
 * Footer cell template container that adds the right classes and role.
 */
class CdkFooterCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) { return new (t || CdkFooterCell)(ɵngcc0.ɵɵdirectiveInject(CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkFooterCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkFooterCell, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkFooterCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterCell, [{
        type: Directive,
        args: [{
                selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                host: {
                    'class': 'cdk-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
/**
 * Cell template container that adds the right classes and role.
 */
class CdkCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkCell.ɵfac = function CdkCell_Factory(t) { return new (t || CdkCell)(ɵngcc0.ɵɵdirectiveInject(CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCell, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCell, [{
        type: Directive,
        args: [{
                selector: 'cdk-cell, td[cdk-cell]',
                host: {
                    'class': 'cdk-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @type {?}
 */
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 * @abstract
 */
class BaseRowDef {
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            /** @type {?} */
            const columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     * @return {?}
     */
    getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
    }
    /**
     * Gets this row def's relevant cell template from the provided column def.
     * @param {?} column
     * @return {?}
     */
    extractCellTemplate(column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    }
}
BaseRowDef.ɵfac = function BaseRowDef_Factory(t) { return new (t || BaseRowDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
BaseRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BaseRowDef, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
BaseRowDef.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseRowDef, [{
        type: Directive
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }]; }, null); })();
if (false) {
    /**
     * The columns to be displayed on this row.
     * @type {?}
     */
    BaseRowDef.prototype.columns;
    /**
     * Differ used to check if any changes were made to the columns.
     * @type {?}
     * @protected
     */
    BaseRowDef.prototype._columnsDiffer;
    /**
     * \@docs-private
     * @type {?}
     */
    BaseRowDef.prototype.template;
    /**
     * @type {?}
     * @protected
     */
    BaseRowDef.prototype._differs;
}
// Boilerplate for applying mixins to CdkHeaderRowDef.
/**
 * \@docs-private
 */
class CdkHeaderRowDefBase extends BaseRowDef {
}
/** @type {?} */
const _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
    /**
     * @param {?} template
     * @param {?} _differs
     * @param {?=} _table
     */
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) { return new (t || CdkHeaderRowDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵdirectiveInject(CDK_TABLE, 8)); };
CdkHeaderRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkHeaderRowDef, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: ["cdkHeaderRowDef", "columns"], sticky: ["cdkHeaderRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
CdkHeaderRowDef.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_TABLE,] }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderRowDef, [{
        type: Directive,
        args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_TABLE]
            }, {
                type: Optional
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    CdkHeaderRowDef.ngAcceptInputType_sticky;
    /** @type {?} */
    CdkHeaderRowDef.prototype._table;
}
// Boilerplate for applying mixins to CdkFooterRowDef.
/**
 * \@docs-private
 */
class CdkFooterRowDefBase extends BaseRowDef {
}
/** @type {?} */
const _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class CdkFooterRowDef extends _CdkFooterRowDefBase {
    /**
     * @param {?} template
     * @param {?} _differs
     * @param {?=} _table
     */
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) { return new (t || CdkFooterRowDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵdirectiveInject(CDK_TABLE, 8)); };
CdkFooterRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkFooterRowDef, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: ["cdkFooterRowDef", "columns"], sticky: ["cdkFooterRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
CdkFooterRowDef.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_TABLE,] }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterRowDef, [{
        type: Directive,
        args: [{
                selector: '[cdkFooterRowDef]',
                inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_TABLE]
            }, {
                type: Optional
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    CdkFooterRowDef.ngAcceptInputType_sticky;
    /** @type {?} */
    CdkFooterRowDef.prototype._table;
}
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */
class CdkRowDef extends BaseRowDef {
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    /**
     * @param {?} template
     * @param {?} _differs
     * @param {?=} _table
     */
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
}
CdkRowDef.ɵfac = function CdkRowDef_Factory(t) { return new (t || CdkRowDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵdirectiveInject(CDK_TABLE, 8)); };
CdkRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkRowDef, selectors: [["", "cdkRowDef", ""]], inputs: { columns: ["cdkRowDefColumns", "columns"], when: ["cdkRowDefWhen", "when"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkRowDef.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_TABLE,] }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkRowDef, [{
        type: Directive,
        args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_TABLE]
            }, {
                type: Optional
            }] }]; }, null); })();
if (false) {
    /**
     * Function that should return true if this row template should be used for the provided index
     * and row data. If left undefined, this row will be considered the default row template to use
     * when no other when functions return true for the data.
     * For every row, there must be at least one when function that passes or an undefined to default.
     * @type {?}
     */
    CdkRowDef.prototype.when;
    /** @type {?} */
    CdkRowDef.prototype._table;
}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is false
 * @record
 * @template T
 */
function CdkCellOutletRowContext() { }
if (false) {
    /**
     * Data for the row that this cell is located within.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.$implicit;
    /**
     * Index of the data object in the provided data array.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.index;
    /**
     * Length of the number of total rows.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.count;
    /**
     * True if this cell is contained in the first row.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.first;
    /**
     * True if this cell is contained in the last row.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.last;
    /**
     * True if this cell is contained in a row with an even-numbered index.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.even;
    /**
     * True if this cell is contained in a row with an odd-numbered index.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.odd;
}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is true. This context is the same
 * as CdkCellOutletRowContext except that the single `index` value is replaced by `dataIndex` and
 * `renderIndex`.
 * @record
 * @template T
 */
function CdkCellOutletMultiRowContext() { }
if (false) {
    /**
     * Data for the row that this cell is located within.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.$implicit;
    /**
     * Index of the data object in the provided data array.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.dataIndex;
    /**
     * Index location of the rendered row that this cell is located within.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.renderIndex;
    /**
     * Length of the number of total rows.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.count;
    /**
     * True if this cell is contained in the first row.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.first;
    /**
     * True if this cell is contained in the last row.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.last;
    /**
     * True if this cell is contained in a row with an even-numbered index.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.even;
    /**
     * True if this cell is contained in a row with an odd-numbered index.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.odd;
}
/**
 * Outlet for rendering cells inside of a row or header row.
 * \@docs-private
 */
class CdkCellOutlet {
    /**
     * @param {?} _viewContainer
     */
    constructor(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    }
}
CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) { return new (t || CdkCellOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
CdkCellOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCellOutlet, selectors: [["", "cdkCellOutlet", ""]] });
/**
 * Static property containing the latest constructed instance of this class.
 * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
 * createEmbeddedView. After one of these components are created, this property will provide
 * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
 * construct the cells with the provided context.
 */
CdkCellOutlet.mostRecentCellOutlet = null;
/** @nocollapse */
CdkCellOutlet.ctorParameters = () => [
    { type: ViewContainerRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCellOutlet, [{
        type: Directive,
        args: [{ selector: '[cdkCellOutlet]' }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, null); })();
if (false) {
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     * @type {?}
     */
    CdkCellOutlet.mostRecentCellOutlet;
    /**
     * The ordered list of cells to render within this outlet's view container
     * @type {?}
     */
    CdkCellOutlet.prototype.cells;
    /**
     * The data context to be provided to each cell
     * @type {?}
     */
    CdkCellOutlet.prototype.context;
    /** @type {?} */
    CdkCellOutlet.prototype._viewContainer;
}
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
class CdkHeaderRow {
}
CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) { return new (t || CdkHeaderRow)(); };
CdkHeaderRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkHeaderRow, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkHeaderRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderRow, [{
        type: Component,
        args: [{
                selector: 'cdk-header-row, tr[cdk-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, null); })();
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
class CdkFooterRow {
}
CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) { return new (t || CdkFooterRow)(); };
CdkFooterRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkFooterRow, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkFooterRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterRow, [{
        type: Component,
        args: [{
                selector: 'cdk-footer-row, tr[cdk-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, null); })();
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
class CdkRow {
}
CdkRow.ɵfac = function CdkRow_Factory(t) { return new (t || CdkRow)(); };
CdkRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkRow, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkRow, [{
        type: Component,
        args: [{
                selector: 'cdk-row, tr[cdk-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/sticky-styler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * List of all possible directions that can be used for sticky positioning.
 * \@docs-private
 * @type {?}
 */
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * \@docs-private
 */
class StickyStyler {
    /**
     * @param {?} _isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param {?} _stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param {?} direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param {?=} _isBrowser Whether the table is currently being rendered on the server or the client.
     */
    constructor(_isNativeHtmlTable, _stickCellCss, direction, _isBrowser = true) {
        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._isBrowser = _isBrowser;
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
     * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
     * @return {?}
     */
    clearStickyPositioning(rows, stickyDirections) {
        for (const row of rows) {
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            this._removeStickyStyle(row, stickyDirections);
            for (let i = 0; i < row.children.length; i++) {
                /** @type {?} */
                const cell = (/** @type {?} */ (row.children[i]));
                this._removeStickyStyle(cell, stickyDirections);
            }
        }
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
     * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @return {?}
     */
    updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
        /** @type {?} */
        const hasStickyColumns = stickyStartStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => state)) || stickyEndStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => state));
        if (!rows.length || !hasStickyColumns || !this._isBrowser) {
            return;
        }
        /** @type {?} */
        const firstRow = rows[0];
        /** @type {?} */
        const numCells = firstRow.children.length;
        /** @type {?} */
        const cellWidths = this._getCellWidths(firstRow);
        /** @type {?} */
        const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        /** @type {?} */
        const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        /** @type {?} */
        const isRtl = this.direction === 'rtl';
        for (const row of rows) {
            for (let i = 0; i < numCells; i++) {
                /** @type {?} */
                const cell = (/** @type {?} */ (row.children[i]));
                if (stickyStartStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                }
                if (stickyEndStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                }
            }
        }
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param {?} stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param {?} position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     * @return {?}
     */
    stickRows(rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        // If positioning the rows to the bottom, reverse their order when evaluating the sticky
        // position such that the last row stuck will be "bottom: 0px" and so on.
        /** @type {?} */
        const rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
        /** @type {?} */
        let stickyHeight = 0;
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            if (!stickyStates[rowIndex]) {
                continue;
            }
            /** @type {?} */
            const row = rows[rowIndex];
            if (this._isNativeHtmlTable) {
                for (let j = 0; j < row.children.length; j++) {
                    /** @type {?} */
                    const cell = (/** @type {?} */ (row.children[j]));
                    this._addStickyStyle(cell, position, stickyHeight);
                }
            }
            else {
                // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
                // If this is applied on a native table, Safari causes the header to fly in wrong direction.
                this._addStickyStyle(row, position, stickyHeight);
            }
            if (rowIndex === rows.length - 1) {
                // prevent unnecessary reflow from getBoundingClientRect()
                return;
            }
            stickyHeight += row.getBoundingClientRect().height;
        }
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     * @param {?} tableElement
     * @param {?} stickyStates
     * @return {?}
     */
    updateStickyFooterContainer(tableElement, stickyStates) {
        if (!this._isNativeHtmlTable) {
            return;
        }
        /** @type {?} */
        const tfoot = (/** @type {?} */ (tableElement.querySelector('tfoot')));
        if (stickyStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => !state))) {
            this._removeStickyStyle(tfoot, ['bottom']);
        }
        else {
            this._addStickyStyle(tfoot, 'bottom', 0);
        }
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     * @param {?} element
     * @param {?} stickyDirections
     * @return {?}
     */
    _removeStickyStyle(element, stickyDirections) {
        for (const dir of stickyDirections) {
            element.style[dir] = '';
        }
        element.style.zIndex = this._getCalculatedZIndex(element);
        // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        /** @type {?} */
        const hasDirection = STICKY_DIRECTIONS.some((/**
         * @param {?} dir
         * @return {?}
         */
        dir => !!element.style[dir]));
        if (!hasDirection) {
            element.style.position = '';
            element.classList.remove(this._stickCellCss);
        }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     * @param {?} element
     * @param {?} dir
     * @param {?} dirValue
     * @return {?}
     */
    _addStickyStyle(element, dir, dirValue) {
        element.classList.add(this._stickCellCss);
        element.style[dir] = `${dirValue}px`;
        element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
        element.style.zIndex = this._getCalculatedZIndex(element);
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     * @param {?} element
     * @return {?}
     */
    _getCalculatedZIndex(element) {
        /** @type {?} */
        const zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        /** @type {?} */
        let zIndex = 0;
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        for (const dir of (/** @type {?} */ (STICKY_DIRECTIONS))) {
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? `${zIndex}` : '';
    }
    /**
     * Gets the widths for each cell in the provided row.
     * @param {?} row
     * @return {?}
     */
    _getCellWidths(row) {
        /** @type {?} */
        const cellWidths = [];
        /** @type {?} */
        const firstRowCells = row.children;
        for (let i = 0; i < firstRowCells.length; i++) {
            /** @type {?} */
            let cell = (/** @type {?} */ (firstRowCells[i]));
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    _getStickyStartColumnPositions(widths, stickyStates) {
        /** @type {?} */
        const positions = [];
        /** @type {?} */
        let nextPosition = 0;
        for (let i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    _getStickyEndColumnPositions(widths, stickyStates) {
        /** @type {?} */
        const positions = [];
        /** @type {?} */
        let nextPosition = 0;
        for (let i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StickyStyler.prototype._isNativeHtmlTable;
    /**
     * @type {?}
     * @private
     */
    StickyStyler.prototype._stickCellCss;
    /** @type {?} */
    StickyStyler.prototype.direction;
    /**
     * @type {?}
     * @private
     */
    StickyStyler.prototype._isBrowser;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table-errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * \@docs-private
 * @param {?} id Id whose lookup failed.
 * @return {?}
 */
function getTableUnknownColumnError(id) {
    return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * \@docs-private
 * @param {?} name
 * @return {?}
 */
function getTableDuplicateColumnNameError(name) {
    return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * \@docs-private
 * @return {?}
 */
function getTableMultipleDefaultRowDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * \@docs-private
 * @param {?} data
 * @return {?}
 */
function getTableMissingMatchingRowDefError(data) {
    return Error(`Could not find a matching row definition for the` +
        `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * \@docs-private
 * @return {?}
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * \@docs-private
 * @return {?}
 */
function getTableUnknownDataSourceError() {
    return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * \@docs-private
 * @return {?}
 */
function getTableTextColumnMissingParentTableError() {
    return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * \@docs-private
 * @return {?}
 */
function getTableTextColumnMissingNameError() {
    return Error(`Table text column must have a name.`);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface used to provide an outlet for rows to be inserted into.
 * @record
 */
function RowOutlet() { }
if (false) {
    /** @type {?} */
    RowOutlet.prototype.viewContainer;
}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * \@docs-private
 */
class DataRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) { return new (t || DataRowOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DataRowOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DataRowOutlet, selectors: [["", "rowOutlet", ""]] });
/** @nocollapse */
DataRowOutlet.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataRowOutlet, [{
        type: Directive,
        args: [{ selector: '[rowOutlet]' }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ElementRef }]; }, null); })();
if (false) {
    /** @type {?} */
    DataRowOutlet.prototype.viewContainer;
    /** @type {?} */
    DataRowOutlet.prototype.elementRef;
}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * \@docs-private
 */
class HeaderRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) { return new (t || HeaderRowOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
HeaderRowOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: HeaderRowOutlet, selectors: [["", "headerRowOutlet", ""]] });
/** @nocollapse */
HeaderRowOutlet.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeaderRowOutlet, [{
        type: Directive,
        args: [{ selector: '[headerRowOutlet]' }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ElementRef }]; }, null); })();
if (false) {
    /** @type {?} */
    HeaderRowOutlet.prototype.viewContainer;
    /** @type {?} */
    HeaderRowOutlet.prototype.elementRef;
}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * \@docs-private
 */
class FooterRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) { return new (t || FooterRowOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FooterRowOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FooterRowOutlet, selectors: [["", "footerRowOutlet", ""]] });
/** @nocollapse */
FooterRowOutlet.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FooterRowOutlet, [{
        type: Directive,
        args: [{ selector: '[footerRowOutlet]' }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ElementRef }]; }, null); })();
if (false) {
    /** @type {?} */
    FooterRowOutlet.prototype.viewContainer;
    /** @type {?} */
    FooterRowOutlet.prototype.elementRef;
}
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * \@docs-private
 * @type {?}
 */
const CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Interface used to conveniently type the possible context interfaces for the render row.
 * \@docs-private
 * @record
 * @template T
 */
function RowContext() { }
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * \@docs-private
 * @abstract
 * @template T
 */
class RowViewRef extends EmbeddedViewRef {
}
/**
 * Set of properties that represents the identity of a single rendered row.
 *
 * When the table needs to determine the list of rows to render, it will do so by iterating through
 * each data object and evaluating its list of row templates to display (when multiTemplateDataRows
 * is false, there is only one template per data object). For each pair of data object and row
 * template, a `RenderRow` is added to the list of rows to render. If the data object and row
 * template pair has already been rendered, the previously used `RenderRow` is added; else a new
 * `RenderRow` is * created. Once the list is complete and all data objects have been itereated
 * through, a diff is performed to determine the changes that need to be made to the rendered rows.
 *
 * \@docs-private
 * @record
 * @template T
 */
function RenderRow() { }
if (false) {
    /** @type {?} */
    RenderRow.prototype.data;
    /** @type {?} */
    RenderRow.prototype.dataIndex;
    /** @type {?} */
    RenderRow.prototype.rowDef;
}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 * @template T
 */
class CdkTable {
    /**
     * @param {?} _differs
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} role
     * @param {?} _dir
     * @param {?} _document
     * @param {?} _platform
     */
    constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new Subject();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        this._multiTemplateDataRows = false;
        // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * \@docs-private
         */
        this.viewChange = new BehaviorSubject({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     * @return {?}
     */
    get trackBy() {
        return this._trackByFn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set trackBy(fn) {
        if (isDevMode() && fn != null && typeof fn !== 'function' && (/** @type {?} */ (console)) &&
            (/** @type {?} */ (console.warn))) {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     * @return {?}
     */
    get multiTemplateDataRows() {
        return this._multiTemplateDataRows;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set multiTemplateDataRows(v) {
        this._multiTemplateDataRows = coerceBooleanProperty(v);
        // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
        // this setter will be invoked before the row outlet has been defined hence the null check.
        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create((/**
         * @param {?} _i
         * @param {?} dataRow
         * @return {?}
         */
        (_i, dataRow) => {
            return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        this._renderUpdatedColumns();
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        this._checkStickyStates();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (isDataSource(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     * @return {?}
     */
    renderRows() {
        this._renderRows = this._getAllRenderRows();
        /** @type {?} */
        const changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            return;
        }
        /** @type {?} */
        const viewContainer = this._rowOutlet.viewContainer;
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} prevIndex
         * @param {?} currentIndex
         * @return {?}
         */
        (record, prevIndex, currentIndex) => {
            if (record.previousIndex == null) {
                this._insertRow(record.item, (/** @type {?} */ (currentIndex)));
            }
            else if (currentIndex == null) {
                viewContainer.remove((/** @type {?} */ (prevIndex)));
            }
            else {
                /** @type {?} */
                const view = (/** @type {?} */ (viewContainer.get((/** @type {?} */ (prevIndex)))));
                viewContainer.move((/** @type {?} */ (view)), currentIndex);
            }
        }));
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        (record) => {
            /** @type {?} */
            const rowView = (/** @type {?} */ (viewContainer.get((/** @type {?} */ (record.currentIndex)))));
            rowView.context.$implicit = record.item.data;
        }));
        this.updateStickyColumnStyles();
    }
    /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} headerRowDef
     * @return {?}
     */
    setHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs = new Set([headerRowDef]);
        this._headerRowDefChanged = true;
    }
    /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} footerRowDef
     * @return {?}
     */
    setFooterRowDef(footerRowDef) {
        this._customFooterRowDefs = new Set([footerRowDef]);
        this._footerRowDefChanged = true;
    }
    /**
     * Adds a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    addColumnDef(columnDef) {
        this._customColumnDefs.add(columnDef);
    }
    /**
     * Removes a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    removeColumnDef(columnDef) {
        this._customColumnDefs.delete(columnDef);
    }
    /**
     * Adds a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    addRowDef(rowDef) {
        this._customRowDefs.add(rowDef);
    }
    /**
     * Removes a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    removeRowDef(rowDef) {
        this._customRowDefs.delete(rowDef);
    }
    /**
     * Adds a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    addHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /**
     * Removes a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    removeHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /**
     * Adds a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    addFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /**
     * Removes a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    removeFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    updateStickyHeaderRowStyles() {
        /** @type {?} */
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        const tableElement = (/** @type {?} */ (this._elementRef.nativeElement));
        // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        /** @type {?} */
        const thead = tableElement.querySelector('thead');
        if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
        }
        /** @type {?} */
        const stickyStates = this._headerRowDefs.map((/**
         * @param {?} def
         * @return {?}
         */
        def => def.sticky));
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    updateStickyFooterRowStyles() {
        /** @type {?} */
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        /** @type {?} */
        const tableElement = (/** @type {?} */ (this._elementRef.nativeElement));
        // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        /** @type {?} */
        const tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
        }
        /** @type {?} */
        const stickyStates = this._footerRowDefs.map((/**
         * @param {?} def
         * @return {?}
         */
        def => def.sticky));
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     * @return {?}
     */
    updateStickyColumnStyles() {
        /** @type {?} */
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        const dataRows = this._getRenderedRows(this._rowOutlet);
        /** @type {?} */
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach((/**
         * @param {?} headerRow
         * @param {?} i
         * @return {?}
         */
        (headerRow, i) => {
            this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
        }));
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => {
            // Collect all the rows rendered with this row definition.
            /** @type {?} */
            const rows = [];
            for (let i = 0; i < dataRows.length; i++) {
                if (this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            this._addStickyColumnStyles(rows, rowDef);
        }));
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach((/**
         * @param {?} footerRow
         * @param {?} i
         * @return {?}
         */
        (footerRow, i) => {
            this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
        }));
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     * @private
     * @return {?}
     */
    _getAllRenderRows() {
        /** @type {?} */
        const renderRows = [];
        // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.
        /** @type {?} */
        const prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (let i = 0; i < this._data.length; i++) {
            /** @type {?} */
            let data = this._data[i];
            /** @type {?} */
            const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (let j = 0; j < renderRowsForData.length; j++) {
                /** @type {?} */
                let renderRow = renderRowsForData[j];
                /** @type {?} */
                const cache = (/** @type {?} */ (this._cachedRenderRowsMap.get(renderRow.data)));
                if (cache.has(renderRow.rowDef)) {
                    (/** @type {?} */ (cache.get(renderRow.rowDef))).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     * @private
     * @param {?} data
     * @param {?} dataIndex
     * @param {?=} cache
     * @return {?}
     */
    _getRenderRowsForData(data, dataIndex, cache) {
        /** @type {?} */
        const rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => {
            /** @type {?} */
            const cachedRenderRows = (cache && cache.has(rowDef)) ? (/** @type {?} */ (cache.get(rowDef))) : [];
            if (cachedRenderRows.length) {
                /** @type {?} */
                const dataRow = (/** @type {?} */ (cachedRenderRows.shift()));
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data, rowDef, dataIndex };
            }
        }));
    }
    /**
     * Update the map containing the content's column definitions.
     * @private
     * @return {?}
     */
    _cacheColumnDefs() {
        this._columnDefsByName.clear();
        /** @type {?} */
        const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
        columnDefs.forEach((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => {
            if (this._columnDefsByName.has(columnDef.name)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            this._columnDefsByName.set(columnDef.name, columnDef);
        }));
    }
    /**
     * Update the list of all available row definitions that can be used.
     * @private
     * @return {?}
     */
    _cacheRowDefs() {
        this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
        this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
        this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
        // After all row definitions are determined, find the row definition to be considered default.
        /** @type {?} */
        const defaultRowDefs = this._rowDefs.filter((/**
         * @param {?} def
         * @return {?}
         */
        def => !def.when));
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     * @private
     * @return {?}
     */
    _renderUpdatedColumns() {
        /** @type {?} */
        const columnsDiffReducer = (/**
         * @param {?} acc
         * @param {?} def
         * @return {?}
         */
        (acc, def) => acc || !!def.getColumnsDiff());
        // Force re-render data rows if the list of column definitions have changed.
        if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed..
        if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderHeaderRows();
        }
        if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderFooterRows();
        }
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     * @private
     * @param {?} dataSource
     * @return {?}
     */
    _switchDataSource(dataSource) {
        this._data = [];
        if (isDataSource(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    }
    /**
     * Set up a subscription for the data provided by the data source.
     * @private
     * @return {?}
     */
    _observeRenderChanges() {
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        /** @type {?} */
        let dataStream;
        if (isDataSource(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (isObservable(this.dataSource)) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = of(this.dataSource);
        }
        if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this._data = data || [];
            this.renderRows();
        }));
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     * @private
     * @return {?}
     */
    _forceRenderHeaderRows() {
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach((/**
         * @param {?} def
         * @param {?} i
         * @return {?}
         */
        (def, i) => this._renderRow(this._headerRowOutlet, def, i)));
        this.updateStickyHeaderRowStyles();
        this.updateStickyColumnStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     * @private
     * @return {?}
     */
    _forceRenderFooterRows() {
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach((/**
         * @param {?} def
         * @param {?} i
         * @return {?}
         */
        (def, i) => this._renderRow(this._footerRowOutlet, def, i)));
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    }
    /**
     * Adds the sticky column styles for the rows according to the columns' stick states.
     * @private
     * @param {?} rows
     * @param {?} rowDef
     * @return {?}
     */
    _addStickyColumnStyles(rows, rowDef) {
        /** @type {?} */
        const columnDefs = Array.from(rowDef.columns || []).map((/**
         * @param {?} columnName
         * @return {?}
         */
        columnName => {
            /** @type {?} */
            const columnDef = this._columnDefsByName.get(columnName);
            if (!columnDef) {
                throw getTableUnknownColumnError(columnName);
            }
            return (/** @type {?} */ (columnDef));
        }));
        /** @type {?} */
        const stickyStartStates = columnDefs.map((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => columnDef.sticky));
        /** @type {?} */
        const stickyEndStates = columnDefs.map((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => columnDef.stickyEnd));
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
    }
    /**
     * Gets the list of rows that have been rendered in the row outlet.
     * @param {?} rowOutlet
     * @return {?}
     */
    _getRenderedRows(rowOutlet) {
        /** @type {?} */
        const renderedRows = [];
        for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
            /** @type {?} */
            const viewRef = ((/** @type {?} */ ((/** @type {?} */ (rowOutlet.viewContainer.get(i))))));
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     * @param {?} data
     * @param {?} dataIndex
     * @return {?}
     */
    _getRowDefs(data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        /** @type {?} */
        let rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter((/**
             * @param {?} def
             * @return {?}
             */
            def => !def.when || def.when(dataIndex, data)));
        }
        else {
            /** @type {?} */
            let rowDef = this._rowDefs.find((/**
             * @param {?} def
             * @return {?}
             */
            def => def.when && def.when(dataIndex, data))) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    }
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     * @private
     * @param {?} renderRow
     * @param {?} renderIndex
     * @return {?}
     */
    _insertRow(renderRow, renderIndex) {
        /** @type {?} */
        const rowDef = renderRow.rowDef;
        /** @type {?} */
        const context = { $implicit: renderRow.data };
        this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     * @private
     * @param {?} outlet
     * @param {?} rowDef
     * @param {?} index
     * @param {?=} context
     * @return {?}
     */
    _renderRow(outlet, rowDef, index, context = {}) {
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        for (let cellTemplate of this._getCellTemplates(rowDef)) {
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @private
     * @return {?}
     */
    _updateRowIndexContext() {
        /** @type {?} */
        const viewContainer = this._rowOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    }
    /**
     * Gets the column definitions for the provided row def.
     * @private
     * @param {?} rowDef
     * @return {?}
     */
    _getCellTemplates(rowDef) {
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, (/**
         * @param {?} columnId
         * @return {?}
         */
        columnId => {
            /** @type {?} */
            const column = this._columnDefsByName.get(columnId);
            if (!column) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        }));
    }
    /**
     * Adds native table sections (e.g. tbody) and moves the row outlets into them.
     * @private
     * @return {?}
     */
    _applyNativeTableSections() {
        /** @type {?} */
        const documentFragment = this._document.createDocumentFragment();
        /** @type {?} */
        const sections = [
            { tag: 'thead', outlet: this._headerRowOutlet },
            { tag: 'tbody', outlet: this._rowOutlet },
            { tag: 'tfoot', outlet: this._footerRowOutlet },
        ];
        for (const section of sections) {
            /** @type {?} */
            const element = this._document.createElement(section.tag);
            element.setAttribute('role', 'rowgroup');
            element.appendChild(section.outlet.elementRef.nativeElement);
            documentFragment.appendChild(element);
        }
        // Use a DocumentFragment so we don't hit the DOM on each iteration.
        this._elementRef.nativeElement.appendChild(documentFragment);
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     * @private
     * @return {?}
     */
    _forceRenderDataRows() {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
        this.updateStickyColumnStyles();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     * @private
     * @return {?}
     */
    _checkStickyStates() {
        /** @type {?} */
        const stickyCheckReducer = (/**
         * @param {?} acc
         * @param {?} d
         * @return {?}
         */
        (acc, d) => {
            return acc || d.hasStickyChanged();
        });
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     * @private
     * @return {?}
     */
    _setupStickyStyler() {
        /** @type {?} */
        const direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
        (this._dir ? this._dir.change : of())
            .pipe(takeUntil(this._onDestroy))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this._stickyStyler.direction = value;
            this.updateStickyColumnStyles();
        }));
    }
    /**
     * Filters definitions that belong to this table from a QueryList.
     * @private
     * @template I
     * @param {?} items
     * @return {?}
     */
    _getOwnDefs(items) {
        return items.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item._table || item._table === this));
    }
}
CdkTable.ɵfac = function CdkTable_Factory(t) { return new (t || CdkTable)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵinjectAttribute('role'), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform)); };
CdkTable.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkTable, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkColumnDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkRowDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkHeaderRowDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkFooterRowDef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentColumnDefs = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentRowDefs = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentHeaderRowDefs = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentFooterRowDefs = _t);
    } }, viewQuery: function CdkTable_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(DataRowOutlet, true);
        ɵngcc0.ɵɵstaticViewQuery(HeaderRowOutlet, true);
        ɵngcc0.ɵɵstaticViewQuery(FooterRowOutlet, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._rowOutlet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._headerRowOutlet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._footerRowOutlet = _t.first);
    } }, hostAttrs: [1, "cdk-table"], inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows" }, exportAs: ["cdkTable"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CDK_TABLE, useExisting: CdkTable }])], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]], template: function CdkTable_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementContainer(1, 0);
        ɵngcc0.ɵɵelementContainer(2, 1);
        ɵngcc0.ɵɵelementContainer(3, 2);
    } }, directives: [HeaderRowOutlet,
        DataRowOutlet,
        FooterRowOutlet], encapsulation: 2 });
/** @nocollapse */
CdkTable.ctorParameters = () => [
    { type: IterableDiffers },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform }
];
CdkTable.propDecorators = {
    trackBy: [{ type: Input }],
    dataSource: [{ type: Input }],
    multiTemplateDataRows: [{ type: Input }],
    _rowOutlet: [{ type: ViewChild, args: [DataRowOutlet, { static: true },] }],
    _headerRowOutlet: [{ type: ViewChild, args: [HeaderRowOutlet, { static: true },] }],
    _footerRowOutlet: [{ type: ViewChild, args: [FooterRowOutlet, { static: true },] }],
    _contentColumnDefs: [{ type: ContentChildren, args: [CdkColumnDef, { descendants: true },] }],
    _contentRowDefs: [{ type: ContentChildren, args: [CdkRowDef, { descendants: true },] }],
    _contentHeaderRowDefs: [{ type: ContentChildren, args: [CdkHeaderRowDef, {
                    descendants: true
                },] }],
    _contentFooterRowDefs: [{ type: ContentChildren, args: [CdkFooterRowDef, {
                    descendants: true
                },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTable, [{
        type: Component,
        args: [{
                selector: 'cdk-table, table[cdk-table]',
                exportAs: 'cdkTable',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table'
                },
                encapsulation: ViewEncapsulation.None,
                // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                // The view for `MatTable` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                providers: [{ provide: CDK_TABLE, useExisting: CdkTable }]
            }]
    }], function () { return [{ type: ɵngcc0.IterableDiffers }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: String, decorators: [{
                type: Attribute,
                args: ['role']
            }] }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc2.Platform }]; }, { trackBy: [{
            type: Input
        }], dataSource: [{
            type: Input
        }], multiTemplateDataRows: [{
            type: Input
        }], _rowOutlet: [{
            type: ViewChild,
            args: [DataRowOutlet, { static: true }]
        }], _headerRowOutlet: [{
            type: ViewChild,
            args: [HeaderRowOutlet, { static: true }]
        }], _footerRowOutlet: [{
            type: ViewChild,
            args: [FooterRowOutlet, { static: true }]
        }], _contentColumnDefs: [{
            type: ContentChildren,
            args: [CdkColumnDef, { descendants: true }]
        }], _contentRowDefs: [{
            type: ContentChildren,
            args: [CdkRowDef, { descendants: true }]
        }], _contentHeaderRowDefs: [{
            type: ContentChildren,
            args: [CdkHeaderRowDef, {
                    descendants: true
                }]
        }], _contentFooterRowDefs: [{
            type: ContentChildren,
            args: [CdkFooterRowDef, {
                    descendants: true
                }]
        }] }); })();
if (false) {
    /** @type {?} */
    CdkTable.ngAcceptInputType_multiTemplateDataRows;
    /**
     * @type {?}
     * @private
     */
    CdkTable.prototype._document;
    /**
     * Latest data provided by the data source.
     * @type {?}
     * @protected
     */
    CdkTable.prototype._data;
    /**
     * Subject that emits when the component has been destroyed.
     * @type {?}
     * @private
     */
    CdkTable.prototype._onDestroy;
    /**
     * List of the rendered rows as identified by their `RenderRow` object.
     * @type {?}
     * @private
     */
    CdkTable.prototype._renderRows;
    /**
     * Subscription that listens for the data provided by the data source.
     * @type {?}
     * @private
     */
    CdkTable.prototype._renderChangeSubscription;
    /**
     * Map of all the user's defined columns (header, data, and footer cell template) identified by
     * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
     * any custom column definitions added to `_customColumnDefs`.
     * @type {?}
     * @private
     */
    CdkTable.prototype._columnDefsByName;
    /**
     * Set of all row definitions that can be used by this table. Populated by the rows gathered by
     * using `ContentChildren` as well as any custom row definitions added to `_customRowDefs`.
     * @type {?}
     * @private
     */
    CdkTable.prototype._rowDefs;
    /**
     * Set of all header row definitions that can be used by this table. Populated by the rows
     * gathered by using `ContentChildren` as well as any custom row definitions added to
     * `_customHeaderRowDefs`.
     * @type {?}
     * @private
     */
    CdkTable.prototype._headerRowDefs;
    /**
     * Set of all row definitions that can be used by this table. Populated by the rows gathered by
     * using `ContentChildren` as well as any custom row definitions added to
     * `_customFooterRowDefs`.
     * @type {?}
     * @private
     */
    CdkTable.prototype._footerRowDefs;
    /**
     * Differ used to find the changes in the data provided by the data source.
     * @type {?}
     * @private
     */
    CdkTable.prototype._dataDiffer;
    /**
     * Stores the row definition that does not have a when predicate.
     * @type {?}
     * @private
     */
    CdkTable.prototype._defaultRowDef;
    /**
     * Column definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * column definitions as *its* content child.
     * @type {?}
     * @private
     */
    CdkTable.prototype._customColumnDefs;
    /**
     * Data row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in data rows as *its* content child.
     * @type {?}
     * @private
     */
    CdkTable.prototype._customRowDefs;
    /**
     * Header row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in header rows as *its* content child.
     * @type {?}
     * @private
     */
    CdkTable.prototype._customHeaderRowDefs;
    /**
     * Footer row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
     * built-in footer row as *its* content child.
     * @type {?}
     * @private
     */
    CdkTable.prototype._customFooterRowDefs;
    /**
     * Whether the header row definition has been changed. Triggers an update to the header row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     * @type {?}
     * @private
     */
    CdkTable.prototype._headerRowDefChanged;
    /**
     * Whether the footer row definition has been changed. Triggers an update to the footer row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     * @type {?}
     * @private
     */
    CdkTable.prototype._footerRowDefChanged;
    /**
     * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
     * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
     * the cached `RenderRow` objects when possible, the row identity is preserved when the data
     * and row template matches, which allows the `IterableDiffer` to check rows by reference
     * and understand which rows are added/moved/removed.
     *
     * Implemented as a map of maps where the first key is the `data: T` object and the second is the
     * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
     * contains an array of created pairs. The array is necessary to handle cases where the data
     * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
     * stored.
     * @type {?}
     * @private
     */
    CdkTable.prototype._cachedRenderRowsMap;
    /**
     * Whether the table is applied to a native `<table>`.
     * @type {?}
     * @private
     */
    CdkTable.prototype._isNativeHtmlTable;
    /**
     * Utility class that is responsible for applying the appropriate sticky positioning styles to
     * the table's rows and cells.
     * @type {?}
     * @private
     */
    CdkTable.prototype._stickyStyler;
    /**
     * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
     * table subclasses.
     * @type {?}
     * @protected
     */
    CdkTable.prototype.stickyCssClass;
    /**
     * @type {?}
     * @private
     */
    CdkTable.prototype._trackByFn;
    /**
     * @type {?}
     * @private
     */
    CdkTable.prototype._dataSource;
    /** @type {?} */
    CdkTable.prototype._multiTemplateDataRows;
    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     *
     * \@docs-private
     * @type {?}
     */
    CdkTable.prototype.viewChange;
    /** @type {?} */
    CdkTable.prototype._rowOutlet;
    /** @type {?} */
    CdkTable.prototype._headerRowOutlet;
    /** @type {?} */
    CdkTable.prototype._footerRowOutlet;
    /**
     * The column definitions provided by the user that contain what the header, data, and footer
     * cells should render for each column.
     * @type {?}
     */
    CdkTable.prototype._contentColumnDefs;
    /**
     * Set of data row definitions that were provided to the table as content children.
     * @type {?}
     */
    CdkTable.prototype._contentRowDefs;
    /**
     * Set of header row definitions that were provided to the table as content children.
     * @type {?}
     */
    CdkTable.prototype._contentHeaderRowDefs;
    /**
     * Set of footer row definitions that were provided to the table as content children.
     * @type {?}
     */
    CdkTable.prototype._contentFooterRowDefs;
    /**
     * @type {?}
     * @protected
     */
    CdkTable.prototype._differs;
    /**
     * @type {?}
     * @protected
     */
    CdkTable.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @protected
     */
    CdkTable.prototype._elementRef;
    /**
     * @type {?}
     * @protected
     */
    CdkTable.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    CdkTable.prototype._platform;
}
/**
 * Utility function that gets a merged list of the entries in an array and values of a Set.
 * @template T
 * @param {?} array
 * @param {?} set
 * @return {?}
 */
function mergeArrayAndSet(array, set) {
    return array.concat(Array.from(set));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/text-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class CdkTextColumn {
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
CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) { return new (t || CdkTextColumn)(ɵngcc0.ɵɵdirectiveInject(CdkTable, 8), ɵngcc0.ɵɵdirectiveInject(TEXT_COLUMN_OPTIONS, 8)); };
CdkTextColumn.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkTextColumn, selectors: [["cdk-text-column"]], viewQuery: function CdkTextColumn_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(CdkColumnDef, true);
        ɵngcc0.ɵɵstaticViewQuery(CdkCellDef, true);
        ɵngcc0.ɵɵstaticViewQuery(CdkHeaderCellDef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.columnDef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cell = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerCell = _t.first);
    } }, inputs: { justify: "justify", name: "name", headerText: "headerText", dataAccessor: "dataAccessor" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function CdkTextColumn_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainerStart(0, 0);
        ɵngcc0.ɵɵtemplate(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
        ɵngcc0.ɵɵtemplate(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        ɵngcc0.ɵɵelementContainerEnd();
    } }, directives: [CdkColumnDef,
        CdkHeaderCellDef,
        CdkCellDef,
        CdkHeaderCell,
        CdkCell], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTextColumn, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: CdkTable, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [TEXT_COLUMN_OPTIONS]
            }] }]; }, { justify: [{
            type: Input
        }], name: [{
            type: Input
        }], headerText: [{
            type: Input
        }], dataAccessor: [{
            type: Input
        }], columnDef: [{
            type: ViewChild,
            args: [CdkColumnDef, { static: true }]
        }], cell: [{
            type: ViewChild,
            args: [CdkCellDef, { static: true }]
        }], headerCell: [{
            type: ViewChild,
            args: [CdkHeaderCellDef, { static: true }]
        }] }); })();
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
];
class CdkTableModule {
}
CdkTableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CdkTableModule });
CdkTableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CdkTableModule_Factory(t) { return new (t || CdkTableModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CdkTableModule, { declarations: [CdkTable,
        CdkRowDef,
        CdkCellDef,
        CdkCellOutlet,
        CdkHeaderCellDef,
        CdkFooterCellDef,
        CdkColumnDef,
        CdkCell,
        CdkRow,
        CdkHeaderCell,
        CdkFooterCell,
        CdkHeaderRow,
        CdkHeaderRowDef,
        CdkFooterRow,
        CdkFooterRowDef,
        DataRowOutlet,
        HeaderRowOutlet,
        FooterRowOutlet,
        CdkTextColumn], exports: [CdkTable,
        CdkRowDef,
        CdkCellDef,
        CdkCellOutlet,
        CdkHeaderCellDef,
        CdkFooterCellDef,
        CdkColumnDef,
        CdkCell,
        CdkRow,
        CdkHeaderCell,
        CdkFooterCell,
        CdkHeaderRow,
        CdkHeaderRowDef,
        CdkFooterRow,
        CdkFooterRowDef,
        DataRowOutlet,
        HeaderRowOutlet,
        FooterRowOutlet,
        CdkTextColumn] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTableModule, [{
        type: NgModule,
        args: [{
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, mixinHasStickyInput };

//# sourceMappingURL=table.js.map