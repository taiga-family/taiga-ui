/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { BooleanInput } from '@angular/cdk/coercion';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Platform } from '@angular/cdk/platform';
import { AfterContentChecked, ChangeDetectorRef, ElementRef, IterableDiffers, OnDestroy, OnInit, QueryList, TrackByFunction, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CdkColumnDef } from './cell';
import { CdkCellOutletMultiRowContext, CdkCellOutletRowContext, CdkFooterRowDef, CdkHeaderRowDef, CdkRowDef } from './row';
/** Interface used to provide an outlet for rows to be inserted into. */
import * as ɵngcc0 from '@angular/core';
export interface RowOutlet {
    viewContainer: ViewContainerRef;
}
/**
 * Union of the types that can be set as the data source for a `CdkTable`.
 * @docs-private
 */
declare type CdkTableDataSourceInput<T> = DataSource<T> | Observable<ReadonlyArray<T> | T[]> | ReadonlyArray<T> | T[];
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
export declare class DataRowOutlet implements RowOutlet {
    viewContainer: ViewContainerRef;
    elementRef: ElementRef;
    constructor(viewContainer: ViewContainerRef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataRowOutlet, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DataRowOutlet, "[rowOutlet]", never, {}, {}, never>;
}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */
export declare class HeaderRowOutlet implements RowOutlet {
    viewContainer: ViewContainerRef;
    elementRef: ElementRef;
    constructor(viewContainer: ViewContainerRef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HeaderRowOutlet, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<HeaderRowOutlet, "[headerRowOutlet]", never, {}, {}, never>;
}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */
export declare class FooterRowOutlet implements RowOutlet {
    viewContainer: ViewContainerRef;
    elementRef: ElementRef;
    constructor(viewContainer: ViewContainerRef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FooterRowOutlet, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FooterRowOutlet, "[footerRowOutlet]", never, {}, {}, never>;
}
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */
export declare const CDK_TABLE_TEMPLATE = "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
/**
 * Interface used to conveniently type the possible context interfaces for the render row.
 * @docs-private
 */
export interface RowContext<T> extends CdkCellOutletMultiRowContext<T>, CdkCellOutletRowContext<T> {
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
 * @docs-private
 */
export interface RenderRow<T> {
    data: T;
    dataIndex: number;
    rowDef: CdkRowDef<T>;
}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */
export declare class CdkTable<T> implements AfterContentChecked, CollectionViewer, OnDestroy, OnInit {
    protected readonly _differs: IterableDiffers;
    protected readonly _changeDetectorRef: ChangeDetectorRef;
    protected readonly _elementRef: ElementRef;
    protected readonly _dir: Directionality;
    private _platform;
    private _document;
    /** Latest data provided by the data source. */
    protected _data: T[] | ReadonlyArray<T>;
    /** Subject that emits when the component has been destroyed. */
    private _onDestroy;
    /** List of the rendered rows as identified by their `RenderRow` object. */
    private _renderRows;
    /** Subscription that listens for the data provided by the data source. */
    private _renderChangeSubscription;
    /**
     * Map of all the user's defined columns (header, data, and footer cell template) identified by
     * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
     * any custom column definitions added to `_customColumnDefs`.
     */
    private _columnDefsByName;
    /**
     * Set of all row definitions that can be used by this table. Populated by the rows gathered by
     * using `ContentChildren` as well as any custom row definitions added to `_customRowDefs`.
     */
    private _rowDefs;
    /**
     * Set of all header row definitions that can be used by this table. Populated by the rows
     * gathered by using `ContentChildren` as well as any custom row definitions added to
     * `_customHeaderRowDefs`.
     */
    private _headerRowDefs;
    /**
     * Set of all row definitions that can be used by this table. Populated by the rows gathered by
     * using `ContentChildren` as well as any custom row definitions added to
     * `_customFooterRowDefs`.
     */
    private _footerRowDefs;
    /** Differ used to find the changes in the data provided by the data source. */
    private _dataDiffer;
    /** Stores the row definition that does not have a when predicate. */
    private _defaultRowDef;
    /**
     * Column definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * column definitions as *its* content child.
     */
    private _customColumnDefs;
    /**
     * Data row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in data rows as *its* content child.
     */
    private _customRowDefs;
    /**
     * Header row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in header rows as *its* content child.
     */
    private _customHeaderRowDefs;
    /**
     * Footer row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
     * built-in footer row as *its* content child.
     */
    private _customFooterRowDefs;
    /**
     * Whether the header row definition has been changed. Triggers an update to the header row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     */
    private _headerRowDefChanged;
    /**
     * Whether the footer row definition has been changed. Triggers an update to the footer row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     */
    private _footerRowDefChanged;
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
    private _cachedRenderRowsMap;
    /** Whether the table is applied to a native `<table>`. */
    private _isNativeHtmlTable;
    /**
     * Utility class that is responsible for applying the appropriate sticky positioning styles to
     * the table's rows and cells.
     */
    private _stickyStyler;
    /**
     * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
     * table subclasses.
     */
    protected stickyCssClass: string;
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    get trackBy(): TrackByFunction<T>;
    set trackBy(fn: TrackByFunction<T>);
    private _trackByFn;
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
     */
    get dataSource(): CdkTableDataSourceInput<T>;
    set dataSource(dataSource: CdkTableDataSourceInput<T>);
    private _dataSource;
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     */
    get multiTemplateDataRows(): boolean;
    set multiTemplateDataRows(v: boolean);
    _multiTemplateDataRows: boolean;
    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     *
     * @docs-private
     */
    viewChange: BehaviorSubject<{
        start: number;
        end: number;
    }>;
    _rowOutlet: DataRowOutlet;
    _headerRowOutlet: HeaderRowOutlet;
    _footerRowOutlet: FooterRowOutlet;
    /**
     * The column definitions provided by the user that contain what the header, data, and footer
     * cells should render for each column.
     */
    _contentColumnDefs: QueryList<CdkColumnDef>;
    /** Set of data row definitions that were provided to the table as content children. */
    _contentRowDefs: QueryList<CdkRowDef<T>>;
    /** Set of header row definitions that were provided to the table as content children. */
    _contentHeaderRowDefs: QueryList<CdkHeaderRowDef>;
    /** Set of footer row definitions that were provided to the table as content children. */
    _contentFooterRowDefs: QueryList<CdkFooterRowDef>;
    constructor(_differs: IterableDiffers, _changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef, role: string, _dir: Directionality, _document: any, _platform: Platform);
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    renderRows(): void;
    /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * @docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * @breaking-change 8.0.0
     */
    setHeaderRowDef(headerRowDef: CdkHeaderRowDef): void;
    /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * @docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * @breaking-change 8.0.0
     */
    setFooterRowDef(footerRowDef: CdkFooterRowDef): void;
    /** Adds a column definition that was not included as part of the content children. */
    addColumnDef(columnDef: CdkColumnDef): void;
    /** Removes a column definition that was not included as part of the content children. */
    removeColumnDef(columnDef: CdkColumnDef): void;
    /** Adds a row definition that was not included as part of the content children. */
    addRowDef(rowDef: CdkRowDef<T>): void;
    /** Removes a row definition that was not included as part of the content children. */
    removeRowDef(rowDef: CdkRowDef<T>): void;
    /** Adds a header row definition that was not included as part of the content children. */
    addHeaderRowDef(headerRowDef: CdkHeaderRowDef): void;
    /** Removes a header row definition that was not included as part of the content children. */
    removeHeaderRowDef(headerRowDef: CdkHeaderRowDef): void;
    /** Adds a footer row definition that was not included as part of the content children. */
    addFooterRowDef(footerRowDef: CdkFooterRowDef): void;
    /** Removes a footer row definition that was not included as part of the content children. */
    removeFooterRowDef(footerRowDef: CdkFooterRowDef): void;
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyHeaderRowStyles(): void;
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyFooterRowStyles(): void;
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    updateStickyColumnStyles(): void;
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */
    private _getAllRenderRows;
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */
    private _getRenderRowsForData;
    /** Update the map containing the content's column definitions. */
    private _cacheColumnDefs;
    /** Update the list of all available row definitions that can be used. */
    private _cacheRowDefs;
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */
    private _renderUpdatedColumns;
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */
    private _switchDataSource;
    /** Set up a subscription for the data provided by the data source. */
    private _observeRenderChanges;
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */
    private _forceRenderHeaderRows;
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */
    private _forceRenderFooterRows;
    /** Adds the sticky column styles for the rows according to the columns' stick states. */
    private _addStickyColumnStyles;
    /** Gets the list of rows that have been rendered in the row outlet. */
    _getRenderedRows(rowOutlet: RowOutlet): HTMLElement[];
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    _getRowDefs(data: T, dataIndex: number): CdkRowDef<T>[];
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     */
    private _insertRow;
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */
    private _renderRow;
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    private _updateRowIndexContext;
    /** Gets the column definitions for the provided row def. */
    private _getCellTemplates;
    /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
    private _applyNativeTableSections;
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */
    private _forceRenderDataRows;
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */
    private _checkStickyStates;
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */
    private _setupStickyStyler;
    /** Filters definitions that belong to this table from a QueryList. */
    private _getOwnDefs;
    static ngAcceptInputType_multiTemplateDataRows: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTable<any>, [null, null, null, { attribute: "role"; }, { optional: true; }, null, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkTable<any>, "cdk-table, table[cdk-table]", ["cdkTable"], { "trackBy": "trackBy"; "dataSource": "dataSource"; "multiTemplateDataRows": "multiTemplateDataRows"; }, {}, ["_contentColumnDefs", "_contentRowDefs", "_contentHeaderRowDefs", "_contentFooterRowDefs"], ["caption"]>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuZC50cyIsInNvdXJjZXMiOlsidGFibGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQ29sbGVjdGlvblZpZXdlciwgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgSXRlcmFibGVEaWZmZXJzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0LCBUcmFja0J5RnVuY3Rpb24sIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2RrQ29sdW1uRGVmIH0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IENka0NlbGxPdXRsZXRNdWx0aVJvd0NvbnRleHQsIENka0NlbGxPdXRsZXRSb3dDb250ZXh0LCBDZGtGb290ZXJSb3dEZWYsIENka0hlYWRlclJvd0RlZiwgQ2RrUm93RGVmIH0gZnJvbSAnLi9yb3cnO1xuLyoqIEludGVyZmFjZSB1c2VkIHRvIHByb3ZpZGUgYW4gb3V0bGV0IGZvciByb3dzIHRvIGJlIGluc2VydGVkIGludG8uICovXG5leHBvcnQgaW50ZXJmYWNlIFJvd091dGxldCB7XG4gICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcbn1cbi8qKlxuICogVW5pb24gb2YgdGhlIHR5cGVzIHRoYXQgY2FuIGJlIHNldCBhcyB0aGUgZGF0YSBzb3VyY2UgZm9yIGEgYENka1RhYmxlYC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZGVjbGFyZSB0eXBlIENka1RhYmxlRGF0YVNvdXJjZUlucHV0PFQ+ID0gRGF0YVNvdXJjZTxUPiB8IE9ic2VydmFibGU8UmVhZG9ubHlBcnJheTxUPiB8IFRbXT4gfCBSZWFkb25seUFycmF5PFQ+IHwgVFtdO1xuLyoqXG4gKiBQcm92aWRlcyBhIGhhbmRsZSBmb3IgdGhlIHRhYmxlIHRvIGdyYWIgdGhlIHZpZXcgY29udGFpbmVyJ3MgbmctY29udGFpbmVyIHRvIGluc2VydCBkYXRhIHJvd3MuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERhdGFSb3dPdXRsZXQgaW1wbGVtZW50cyBSb3dPdXRsZXQge1xuICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTtcbn1cbi8qKlxuICogUHJvdmlkZXMgYSBoYW5kbGUgZm9yIHRoZSB0YWJsZSB0byBncmFiIHRoZSB2aWV3IGNvbnRhaW5lcidzIG5nLWNvbnRhaW5lciB0byBpbnNlcnQgdGhlIGhlYWRlci5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSGVhZGVyUm93T3V0bGV0IGltcGxlbWVudHMgUm93T3V0bGV0IHtcbiAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZik7XG59XG4vKipcbiAqIFByb3ZpZGVzIGEgaGFuZGxlIGZvciB0aGUgdGFibGUgdG8gZ3JhYiB0aGUgdmlldyBjb250YWluZXIncyBuZy1jb250YWluZXIgdG8gaW5zZXJ0IHRoZSBmb290ZXIuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZvb3RlclJvd091dGxldCBpbXBsZW1lbnRzIFJvd091dGxldCB7XG4gICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIGNvbnN0cnVjdG9yKHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpO1xufVxuLyoqXG4gKiBUaGUgdGFibGUgdGVtcGxhdGUgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGUgbWF0LXRhYmxlLiBTaG91bGQgbm90IGJlIHVzZWQgb3V0c2lkZSBvZiB0aGVcbiAqIG1hdGVyaWFsIGxpYnJhcnkuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENES19UQUJMRV9URU1QTEFURSA9IFwiXFxuICA8bmctY29udGVudCBzZWxlY3Q9XFxcImNhcHRpb25cXFwiPjwvbmctY29udGVudD5cXG4gIDxuZy1jb250YWluZXIgaGVhZGVyUm93T3V0bGV0PjwvbmctY29udGFpbmVyPlxcbiAgPG5nLWNvbnRhaW5lciByb3dPdXRsZXQ+PC9uZy1jb250YWluZXI+XFxuICA8bmctY29udGFpbmVyIGZvb3RlclJvd091dGxldD48L25nLWNvbnRhaW5lcj5cXG5cIjtcbi8qKlxuICogSW50ZXJmYWNlIHVzZWQgdG8gY29udmVuaWVudGx5IHR5cGUgdGhlIHBvc3NpYmxlIGNvbnRleHQgaW50ZXJmYWNlcyBmb3IgdGhlIHJlbmRlciByb3cuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm93Q29udGV4dDxUPiBleHRlbmRzIENka0NlbGxPdXRsZXRNdWx0aVJvd0NvbnRleHQ8VD4sIENka0NlbGxPdXRsZXRSb3dDb250ZXh0PFQ+IHtcbn1cbi8qKlxuICogU2V0IG9mIHByb3BlcnRpZXMgdGhhdCByZXByZXNlbnRzIHRoZSBpZGVudGl0eSBvZiBhIHNpbmdsZSByZW5kZXJlZCByb3cuXG4gKlxuICogV2hlbiB0aGUgdGFibGUgbmVlZHMgdG8gZGV0ZXJtaW5lIHRoZSBsaXN0IG9mIHJvd3MgdG8gcmVuZGVyLCBpdCB3aWxsIGRvIHNvIGJ5IGl0ZXJhdGluZyB0aHJvdWdoXG4gKiBlYWNoIGRhdGEgb2JqZWN0IGFuZCBldmFsdWF0aW5nIGl0cyBsaXN0IG9mIHJvdyB0ZW1wbGF0ZXMgdG8gZGlzcGxheSAod2hlbiBtdWx0aVRlbXBsYXRlRGF0YVJvd3NcbiAqIGlzIGZhbHNlLCB0aGVyZSBpcyBvbmx5IG9uZSB0ZW1wbGF0ZSBwZXIgZGF0YSBvYmplY3QpLiBGb3IgZWFjaCBwYWlyIG9mIGRhdGEgb2JqZWN0IGFuZCByb3dcbiAqIHRlbXBsYXRlLCBhIGBSZW5kZXJSb3dgIGlzIGFkZGVkIHRvIHRoZSBsaXN0IG9mIHJvd3MgdG8gcmVuZGVyLiBJZiB0aGUgZGF0YSBvYmplY3QgYW5kIHJvd1xuICogdGVtcGxhdGUgcGFpciBoYXMgYWxyZWFkeSBiZWVuIHJlbmRlcmVkLCB0aGUgcHJldmlvdXNseSB1c2VkIGBSZW5kZXJSb3dgIGlzIGFkZGVkOyBlbHNlIGEgbmV3XG4gKiBgUmVuZGVyUm93YCBpcyAqIGNyZWF0ZWQuIE9uY2UgdGhlIGxpc3QgaXMgY29tcGxldGUgYW5kIGFsbCBkYXRhIG9iamVjdHMgaGF2ZSBiZWVuIGl0ZXJlYXRlZFxuICogdGhyb3VnaCwgYSBkaWZmIGlzIHBlcmZvcm1lZCB0byBkZXRlcm1pbmUgdGhlIGNoYW5nZXMgdGhhdCBuZWVkIHRvIGJlIG1hZGUgdG8gdGhlIHJlbmRlcmVkIHJvd3MuXG4gKlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlclJvdzxUPiB7XG4gICAgZGF0YTogVDtcbiAgICBkYXRhSW5kZXg6IG51bWJlcjtcbiAgICByb3dEZWY6IENka1Jvd0RlZjxUPjtcbn1cbi8qKlxuICogQSBkYXRhIHRhYmxlIHRoYXQgY2FuIHJlbmRlciBhIGhlYWRlciByb3csIGRhdGEgcm93cywgYW5kIGEgZm9vdGVyIHJvdy5cbiAqIFVzZXMgdGhlIGRhdGFTb3VyY2UgaW5wdXQgdG8gZGV0ZXJtaW5lIHRoZSBkYXRhIHRvIGJlIHJlbmRlcmVkLiBUaGUgZGF0YSBjYW4gYmUgcHJvdmlkZWQgZWl0aGVyXG4gKiBhcyBhIGRhdGEgYXJyYXksIGFuIE9ic2VydmFibGUgc3RyZWFtIHRoYXQgZW1pdHMgdGhlIGRhdGEgYXJyYXkgdG8gcmVuZGVyLCBvciBhIERhdGFTb3VyY2Ugd2l0aCBhXG4gKiBjb25uZWN0IGZ1bmN0aW9uIHRoYXQgd2lsbCByZXR1cm4gYW4gT2JzZXJ2YWJsZSBzdHJlYW0gdGhhdCBlbWl0cyB0aGUgZGF0YSBhcnJheSB0byByZW5kZXIuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1RhYmxlPFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29sbGVjdGlvblZpZXdlciwgT25EZXN0cm95LCBPbkluaXQge1xuICAgIHByb3RlY3RlZCByZWFkb25seSBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2RpcjogRGlyZWN0aW9uYWxpdHk7XG4gICAgcHJpdmF0ZSBfcGxhdGZvcm07XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgLyoqIExhdGVzdCBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgICBwcm90ZWN0ZWQgX2RhdGE6IFRbXSB8IFJlYWRvbmx5QXJyYXk8VD47XG4gICAgLyoqIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLiAqL1xuICAgIHByaXZhdGUgX29uRGVzdHJveTtcbiAgICAvKiogTGlzdCBvZiB0aGUgcmVuZGVyZWQgcm93cyBhcyBpZGVudGlmaWVkIGJ5IHRoZWlyIGBSZW5kZXJSb3dgIG9iamVjdC4gKi9cbiAgICBwcml2YXRlIF9yZW5kZXJSb3dzO1xuICAgIC8qKiBTdWJzY3JpcHRpb24gdGhhdCBsaXN0ZW5zIGZvciB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgZGF0YSBzb3VyY2UuICovXG4gICAgcHJpdmF0ZSBfcmVuZGVyQ2hhbmdlU3Vic2NyaXB0aW9uO1xuICAgIC8qKlxuICAgICAqIE1hcCBvZiBhbGwgdGhlIHVzZXIncyBkZWZpbmVkIGNvbHVtbnMgKGhlYWRlciwgZGF0YSwgYW5kIGZvb3RlciBjZWxsIHRlbXBsYXRlKSBpZGVudGlmaWVkIGJ5XG4gICAgICogbmFtZS4gQ29sbGVjdGlvbiBwb3B1bGF0ZWQgYnkgdGhlIGNvbHVtbiBkZWZpbml0aW9ucyBnYXRoZXJlZCBieSBgQ29udGVudENoaWxkcmVuYCBhcyB3ZWxsIGFzXG4gICAgICogYW55IGN1c3RvbSBjb2x1bW4gZGVmaW5pdGlvbnMgYWRkZWQgdG8gYF9jdXN0b21Db2x1bW5EZWZzYC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jb2x1bW5EZWZzQnlOYW1lO1xuICAgIC8qKlxuICAgICAqIFNldCBvZiBhbGwgcm93IGRlZmluaXRpb25zIHRoYXQgY2FuIGJlIHVzZWQgYnkgdGhpcyB0YWJsZS4gUG9wdWxhdGVkIGJ5IHRoZSByb3dzIGdhdGhlcmVkIGJ5XG4gICAgICogdXNpbmcgYENvbnRlbnRDaGlsZHJlbmAgYXMgd2VsbCBhcyBhbnkgY3VzdG9tIHJvdyBkZWZpbml0aW9ucyBhZGRlZCB0byBgX2N1c3RvbVJvd0RlZnNgLlxuICAgICAqL1xuICAgIHByaXZhdGUgX3Jvd0RlZnM7XG4gICAgLyoqXG4gICAgICogU2V0IG9mIGFsbCBoZWFkZXIgcm93IGRlZmluaXRpb25zIHRoYXQgY2FuIGJlIHVzZWQgYnkgdGhpcyB0YWJsZS4gUG9wdWxhdGVkIGJ5IHRoZSByb3dzXG4gICAgICogZ2F0aGVyZWQgYnkgdXNpbmcgYENvbnRlbnRDaGlsZHJlbmAgYXMgd2VsbCBhcyBhbnkgY3VzdG9tIHJvdyBkZWZpbml0aW9ucyBhZGRlZCB0b1xuICAgICAqIGBfY3VzdG9tSGVhZGVyUm93RGVmc2AuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaGVhZGVyUm93RGVmcztcbiAgICAvKipcbiAgICAgKiBTZXQgb2YgYWxsIHJvdyBkZWZpbml0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIGJ5IHRoaXMgdGFibGUuIFBvcHVsYXRlZCBieSB0aGUgcm93cyBnYXRoZXJlZCBieVxuICAgICAqIHVzaW5nIGBDb250ZW50Q2hpbGRyZW5gIGFzIHdlbGwgYXMgYW55IGN1c3RvbSByb3cgZGVmaW5pdGlvbnMgYWRkZWQgdG9cbiAgICAgKiBgX2N1c3RvbUZvb3RlclJvd0RlZnNgLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2Zvb3RlclJvd0RlZnM7XG4gICAgLyoqIERpZmZlciB1c2VkIHRvIGZpbmQgdGhlIGNoYW5nZXMgaW4gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAqL1xuICAgIHByaXZhdGUgX2RhdGFEaWZmZXI7XG4gICAgLyoqIFN0b3JlcyB0aGUgcm93IGRlZmluaXRpb24gdGhhdCBkb2VzIG5vdCBoYXZlIGEgd2hlbiBwcmVkaWNhdGUuICovXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFJvd0RlZjtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4gZGVmaW5pdGlvbnMgdGhhdCB3ZXJlIGRlZmluZWQgb3V0c2lkZSBvZiB0aGUgZGlyZWN0IGNvbnRlbnQgY2hpbGRyZW4gb2YgdGhlIHRhYmxlLlxuICAgICAqIFRoZXNlIHdpbGwgYmUgZGVmaW5lZCB3aGVuLCBlLmcuLCBjcmVhdGluZyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBjZGtUYWJsZSB0aGF0IGhhc1xuICAgICAqIGNvbHVtbiBkZWZpbml0aW9ucyBhcyAqaXRzKiBjb250ZW50IGNoaWxkLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2N1c3RvbUNvbHVtbkRlZnM7XG4gICAgLyoqXG4gICAgICogRGF0YSByb3cgZGVmaW5pdGlvbnMgdGhhdCB3ZXJlIGRlZmluZWQgb3V0c2lkZSBvZiB0aGUgZGlyZWN0IGNvbnRlbnQgY2hpbGRyZW4gb2YgdGhlIHRhYmxlLlxuICAgICAqIFRoZXNlIHdpbGwgYmUgZGVmaW5lZCB3aGVuLCBlLmcuLCBjcmVhdGluZyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBjZGtUYWJsZSB0aGF0IGhhc1xuICAgICAqIGJ1aWx0LWluIGRhdGEgcm93cyBhcyAqaXRzKiBjb250ZW50IGNoaWxkLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2N1c3RvbVJvd0RlZnM7XG4gICAgLyoqXG4gICAgICogSGVhZGVyIHJvdyBkZWZpbml0aW9ucyB0aGF0IHdlcmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBkaXJlY3QgY29udGVudCBjaGlsZHJlbiBvZiB0aGUgdGFibGUuXG4gICAgICogVGhlc2Ugd2lsbCBiZSBkZWZpbmVkIHdoZW4sIGUuZy4sIGNyZWF0aW5nIGEgd3JhcHBlciBhcm91bmQgdGhlIGNka1RhYmxlIHRoYXQgaGFzXG4gICAgICogYnVpbHQtaW4gaGVhZGVyIHJvd3MgYXMgKml0cyogY29udGVudCBjaGlsZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jdXN0b21IZWFkZXJSb3dEZWZzO1xuICAgIC8qKlxuICAgICAqIEZvb3RlciByb3cgZGVmaW5pdGlvbnMgdGhhdCB3ZXJlIGRlZmluZWQgb3V0c2lkZSBvZiB0aGUgZGlyZWN0IGNvbnRlbnQgY2hpbGRyZW4gb2YgdGhlIHRhYmxlLlxuICAgICAqIFRoZXNlIHdpbGwgYmUgZGVmaW5lZCB3aGVuLCBlLmcuLCBjcmVhdGluZyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBjZGtUYWJsZSB0aGF0IGhhcyBhXG4gICAgICogYnVpbHQtaW4gZm9vdGVyIHJvdyBhcyAqaXRzKiBjb250ZW50IGNoaWxkLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2N1c3RvbUZvb3RlclJvd0RlZnM7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgaGVhZGVyIHJvdyBkZWZpbml0aW9uIGhhcyBiZWVuIGNoYW5nZWQuIFRyaWdnZXJzIGFuIHVwZGF0ZSB0byB0aGUgaGVhZGVyIHJvdyBhZnRlclxuICAgICAqIGNvbnRlbnQgaXMgY2hlY2tlZC4gSW5pdGlhbGl6ZWQgYXMgdHJ1ZSBzbyB0aGF0IHRoZSB0YWJsZSByZW5kZXJzIHRoZSBpbml0aWFsIHNldCBvZiByb3dzLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2hlYWRlclJvd0RlZkNoYW5nZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgZm9vdGVyIHJvdyBkZWZpbml0aW9uIGhhcyBiZWVuIGNoYW5nZWQuIFRyaWdnZXJzIGFuIHVwZGF0ZSB0byB0aGUgZm9vdGVyIHJvdyBhZnRlclxuICAgICAqIGNvbnRlbnQgaXMgY2hlY2tlZC4gSW5pdGlhbGl6ZWQgYXMgdHJ1ZSBzbyB0aGF0IHRoZSB0YWJsZSByZW5kZXJzIHRoZSBpbml0aWFsIHNldCBvZiByb3dzLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2Zvb3RlclJvd0RlZkNoYW5nZWQ7XG4gICAgLyoqXG4gICAgICogQ2FjaGUgb2YgdGhlIGxhdGVzdCByZW5kZXJlZCBgUmVuZGVyUm93YCBvYmplY3RzIGFzIGEgbWFwIGZvciBlYXN5IHJldHJpZXZhbCB3aGVuIGNvbnN0cnVjdGluZ1xuICAgICAqIGEgbmV3IGxpc3Qgb2YgYFJlbmRlclJvd2Agb2JqZWN0cyBmb3IgcmVuZGVyaW5nIHJvd3MuIFNpbmNlIHRoZSBuZXcgbGlzdCBpcyBjb25zdHJ1Y3RlZCB3aXRoXG4gICAgICogdGhlIGNhY2hlZCBgUmVuZGVyUm93YCBvYmplY3RzIHdoZW4gcG9zc2libGUsIHRoZSByb3cgaWRlbnRpdHkgaXMgcHJlc2VydmVkIHdoZW4gdGhlIGRhdGFcbiAgICAgKiBhbmQgcm93IHRlbXBsYXRlIG1hdGNoZXMsIHdoaWNoIGFsbG93cyB0aGUgYEl0ZXJhYmxlRGlmZmVyYCB0byBjaGVjayByb3dzIGJ5IHJlZmVyZW5jZVxuICAgICAqIGFuZCB1bmRlcnN0YW5kIHdoaWNoIHJvd3MgYXJlIGFkZGVkL21vdmVkL3JlbW92ZWQuXG4gICAgICpcbiAgICAgKiBJbXBsZW1lbnRlZCBhcyBhIG1hcCBvZiBtYXBzIHdoZXJlIHRoZSBmaXJzdCBrZXkgaXMgdGhlIGBkYXRhOiBUYCBvYmplY3QgYW5kIHRoZSBzZWNvbmQgaXMgdGhlXG4gICAgICogYENka1Jvd0RlZjxUPmAgb2JqZWN0LiBXaXRoIHRoZSB0d28ga2V5cywgdGhlIGNhY2hlIHBvaW50cyB0byBhIGBSZW5kZXJSb3c8VD5gIG9iamVjdCB0aGF0XG4gICAgICogY29udGFpbnMgYW4gYXJyYXkgb2YgY3JlYXRlZCBwYWlycy4gVGhlIGFycmF5IGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgY2FzZXMgd2hlcmUgdGhlIGRhdGFcbiAgICAgKiBhcnJheSBjb250YWlucyBtdWx0aXBsZSBkdXBsaWNhdGUgZGF0YSBvYmplY3RzIGFuZCBlYWNoIGluc3RhbnRpYXRlZCBgUmVuZGVyUm93YCBtdXN0IGJlXG4gICAgICogc3RvcmVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2NhY2hlZFJlbmRlclJvd3NNYXA7XG4gICAgLyoqIFdoZXRoZXIgdGhlIHRhYmxlIGlzIGFwcGxpZWQgdG8gYSBuYXRpdmUgYDx0YWJsZT5gLiAqL1xuICAgIHByaXZhdGUgX2lzTmF0aXZlSHRtbFRhYmxlO1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgY2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgYXBwbHlpbmcgdGhlIGFwcHJvcHJpYXRlIHN0aWNreSBwb3NpdGlvbmluZyBzdHlsZXMgdG9cbiAgICAgKiB0aGUgdGFibGUncyByb3dzIGFuZCBjZWxscy5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zdGlja3lTdHlsZXI7XG4gICAgLyoqXG4gICAgICogQ1NTIGNsYXNzIGFkZGVkIHRvIGFueSByb3cgb3IgY2VsbCB0aGF0IGhhcyBzdGlja3kgcG9zaXRpb25pbmcgYXBwbGllZC4gTWF5IGJlIG92ZXJyaWRlbiBieVxuICAgICAqIHRhYmxlIHN1YmNsYXNzZXMuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHN0aWNreUNzc0NsYXNzOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVHJhY2tpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2hlY2sgdGhlIGRpZmZlcmVuY2VzIGluIGRhdGEgY2hhbmdlcy4gVXNlZCBzaW1pbGFybHlcbiAgICAgKiB0byBgbmdGb3JgIGB0cmFja0J5YCBmdW5jdGlvbi4gT3B0aW1pemUgcm93IG9wZXJhdGlvbnMgYnkgaWRlbnRpZnlpbmcgYSByb3cgYmFzZWQgb24gaXRzIGRhdGFcbiAgICAgKiByZWxhdGl2ZSB0byB0aGUgZnVuY3Rpb24gdG8ga25vdyBpZiBhIHJvdyBzaG91bGQgYmUgYWRkZWQvcmVtb3ZlZC9tb3ZlZC5cbiAgICAgKiBBY2NlcHRzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycywgYGluZGV4YCBhbmQgYGl0ZW1gLlxuICAgICAqL1xuICAgIGdldCB0cmFja0J5KCk6IFRyYWNrQnlGdW5jdGlvbjxUPjtcbiAgICBzZXQgdHJhY2tCeShmbjogVHJhY2tCeUZ1bmN0aW9uPFQ+KTtcbiAgICBwcml2YXRlIF90cmFja0J5Rm47XG4gICAgLyoqXG4gICAgICogVGhlIHRhYmxlJ3Mgc291cmNlIG9mIGRhdGEsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCBpbiB0aHJlZSB3YXlzIChpbiBvcmRlciBvZiBjb21wbGV4aXR5KTpcbiAgICAgKiAgIC0gU2ltcGxlIGRhdGEgYXJyYXkgKGVhY2ggb2JqZWN0IHJlcHJlc2VudHMgb25lIHRhYmxlIHJvdylcbiAgICAgKiAgIC0gU3RyZWFtIHRoYXQgZW1pdHMgYSBkYXRhIGFycmF5IGVhY2ggdGltZSB0aGUgYXJyYXkgY2hhbmdlc1xuICAgICAqICAgLSBgRGF0YVNvdXJjZWAgb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgY29ubmVjdC9kaXNjb25uZWN0IGludGVyZmFjZS5cbiAgICAgKlxuICAgICAqIElmIGEgZGF0YSBhcnJheSBpcyBwcm92aWRlZCwgdGhlIHRhYmxlIG11c3QgYmUgbm90aWZpZWQgd2hlbiB0aGUgYXJyYXkncyBvYmplY3RzIGFyZVxuICAgICAqIGFkZGVkLCByZW1vdmVkLCBvciBtb3ZlZC4gVGhpcyBjYW4gYmUgZG9uZSBieSBjYWxsaW5nIHRoZSBgcmVuZGVyUm93cygpYCBmdW5jdGlvbiB3aGljaCB3aWxsXG4gICAgICogcmVuZGVyIHRoZSBkaWZmIHNpbmNlIHRoZSBsYXN0IHRhYmxlIHJlbmRlci4gSWYgdGhlIGRhdGEgYXJyYXkgcmVmZXJlbmNlIGlzIGNoYW5nZWQsIHRoZSB0YWJsZVxuICAgICAqIHdpbGwgYXV0b21hdGljYWxseSB0cmlnZ2VyIGFuIHVwZGF0ZSB0byB0aGUgcm93cy5cbiAgICAgKlxuICAgICAqIFdoZW4gcHJvdmlkaW5nIGFuIE9ic2VydmFibGUgc3RyZWFtLCB0aGUgdGFibGUgd2lsbCB0cmlnZ2VyIGFuIHVwZGF0ZSBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlXG4gICAgICogc3RyZWFtIGVtaXRzIGEgbmV3IGFycmF5IG9mIGRhdGEuXG4gICAgICpcbiAgICAgKiBGaW5hbGx5LCB3aGVuIHByb3ZpZGluZyBhIGBEYXRhU291cmNlYCBvYmplY3QsIHRoZSB0YWJsZSB3aWxsIHVzZSB0aGUgT2JzZXJ2YWJsZSBzdHJlYW1cbiAgICAgKiBwcm92aWRlZCBieSB0aGUgY29ubmVjdCBmdW5jdGlvbiBhbmQgdHJpZ2dlciB1cGRhdGVzIHdoZW4gdGhhdCBzdHJlYW0gZW1pdHMgbmV3IGRhdGEgYXJyYXlcbiAgICAgKiB2YWx1ZXMuIER1cmluZyB0aGUgdGFibGUncyBuZ09uRGVzdHJveSBvciB3aGVuIHRoZSBkYXRhIHNvdXJjZSBpcyByZW1vdmVkIGZyb20gdGhlIHRhYmxlLCB0aGVcbiAgICAgKiB0YWJsZSB3aWxsIGNhbGwgdGhlIERhdGFTb3VyY2UncyBgZGlzY29ubmVjdGAgZnVuY3Rpb24gKG1heSBiZSB1c2VmdWwgZm9yIGNsZWFuaW5nIHVwIGFueVxuICAgICAqIHN1YnNjcmlwdGlvbnMgcmVnaXN0ZXJlZCBkdXJpbmcgdGhlIGNvbm5lY3QgcHJvY2VzcykuXG4gICAgICovXG4gICAgZ2V0IGRhdGFTb3VyY2UoKTogQ2RrVGFibGVEYXRhU291cmNlSW5wdXQ8VD47XG4gICAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogQ2RrVGFibGVEYXRhU291cmNlSW5wdXQ8VD4pO1xuICAgIHByaXZhdGUgX2RhdGFTb3VyY2U7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBhbGxvdyBtdWx0aXBsZSByb3dzIHBlciBkYXRhIG9iamVjdCBieSBldmFsdWF0aW5nIHdoaWNoIHJvd3MgZXZhbHVhdGUgdGhlaXIgJ3doZW4nXG4gICAgICogcHJlZGljYXRlIHRvIHRydWUuIElmIGBtdWx0aVRlbXBsYXRlRGF0YVJvd3NgIGlzIGZhbHNlLCB3aGljaCBpcyB0aGUgZGVmYXVsdCB2YWx1ZSwgdGhlbiBlYWNoXG4gICAgICogZGF0YW9iamVjdCB3aWxsIHJlbmRlciB0aGUgZmlyc3Qgcm93IHRoYXQgZXZhbHVhdGVzIGl0cyB3aGVuIHByZWRpY2F0ZSB0byB0cnVlLCBpbiB0aGUgb3JkZXJcbiAgICAgKiBkZWZpbmVkIGluIHRoZSB0YWJsZSwgb3Igb3RoZXJ3aXNlIHRoZSBkZWZhdWx0IHJvdyB3aGljaCBkb2VzIG5vdCBoYXZlIGEgd2hlbiBwcmVkaWNhdGUuXG4gICAgICovXG4gICAgZ2V0IG11bHRpVGVtcGxhdGVEYXRhUm93cygpOiBib29sZWFuO1xuICAgIHNldCBtdWx0aVRlbXBsYXRlRGF0YVJvd3ModjogYm9vbGVhbik7XG4gICAgX211bHRpVGVtcGxhdGVEYXRhUm93czogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTdHJlYW0gY29udGFpbmluZyB0aGUgbGF0ZXN0IGluZm9ybWF0aW9uIG9uIHdoYXQgcm93cyBhcmUgYmVpbmcgZGlzcGxheWVkIG9uIHNjcmVlbi5cbiAgICAgKiBDYW4gYmUgdXNlZCBieSB0aGUgZGF0YSBzb3VyY2UgdG8gYXMgYSBoZXVyaXN0aWMgb2Ygd2hhdCBkYXRhIHNob3VsZCBiZSBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIEBkb2NzLXByaXZhdGVcbiAgICAgKi9cbiAgICB2aWV3Q2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8e1xuICAgICAgICBzdGFydDogbnVtYmVyO1xuICAgICAgICBlbmQ6IG51bWJlcjtcbiAgICB9PjtcbiAgICBfcm93T3V0bGV0OiBEYXRhUm93T3V0bGV0O1xuICAgIF9oZWFkZXJSb3dPdXRsZXQ6IEhlYWRlclJvd091dGxldDtcbiAgICBfZm9vdGVyUm93T3V0bGV0OiBGb290ZXJSb3dPdXRsZXQ7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbHVtbiBkZWZpbml0aW9ucyBwcm92aWRlZCBieSB0aGUgdXNlciB0aGF0IGNvbnRhaW4gd2hhdCB0aGUgaGVhZGVyLCBkYXRhLCBhbmQgZm9vdGVyXG4gICAgICogY2VsbHMgc2hvdWxkIHJlbmRlciBmb3IgZWFjaCBjb2x1bW4uXG4gICAgICovXG4gICAgX2NvbnRlbnRDb2x1bW5EZWZzOiBRdWVyeUxpc3Q8Q2RrQ29sdW1uRGVmPjtcbiAgICAvKiogU2V0IG9mIGRhdGEgcm93IGRlZmluaXRpb25zIHRoYXQgd2VyZSBwcm92aWRlZCB0byB0aGUgdGFibGUgYXMgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgICBfY29udGVudFJvd0RlZnM6IFF1ZXJ5TGlzdDxDZGtSb3dEZWY8VD4+O1xuICAgIC8qKiBTZXQgb2YgaGVhZGVyIHJvdyBkZWZpbml0aW9ucyB0aGF0IHdlcmUgcHJvdmlkZWQgdG8gdGhlIHRhYmxlIGFzIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gICAgX2NvbnRlbnRIZWFkZXJSb3dEZWZzOiBRdWVyeUxpc3Q8Q2RrSGVhZGVyUm93RGVmPjtcbiAgICAvKiogU2V0IG9mIGZvb3RlciByb3cgZGVmaW5pdGlvbnMgdGhhdCB3ZXJlIHByb3ZpZGVkIHRvIHRoZSB0YWJsZSBhcyBjb250ZW50IGNoaWxkcmVuLiAqL1xuICAgIF9jb250ZW50Rm9vdGVyUm93RGVmczogUXVlcnlMaXN0PENka0Zvb3RlclJvd0RlZj47XG4gICAgY29uc3RydWN0b3IoX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycywgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJvbGU6IHN0cmluZywgX2RpcjogRGlyZWN0aW9uYWxpdHksIF9kb2N1bWVudDogYW55LCBfcGxhdGZvcm06IFBsYXRmb3JtKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVuZGVycyByb3dzIGJhc2VkIG9uIHRoZSB0YWJsZSdzIGxhdGVzdCBzZXQgb2YgZGF0YSwgd2hpY2ggd2FzIGVpdGhlciBwcm92aWRlZCBkaXJlY3RseSBhcyBhblxuICAgICAqIGlucHV0IG9yIHJldHJpZXZlZCB0aHJvdWdoIGFuIE9ic2VydmFibGUgc3RyZWFtIChkaXJlY3RseSBvciBmcm9tIGEgRGF0YVNvdXJjZSkuXG4gICAgICogQ2hlY2tzIGZvciBkaWZmZXJlbmNlcyBpbiB0aGUgZGF0YSBzaW5jZSB0aGUgbGFzdCBkaWZmIHRvIHBlcmZvcm0gb25seSB0aGUgbmVjZXNzYXJ5XG4gICAgICogY2hhbmdlcyAoYWRkL3JlbW92ZS9tb3ZlIHJvd3MpLlxuICAgICAqXG4gICAgICogSWYgdGhlIHRhYmxlJ3MgZGF0YSBzb3VyY2UgaXMgYSBEYXRhU291cmNlIG9yIE9ic2VydmFibGUsIHRoaXMgd2lsbCBiZSBpbnZva2VkIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBlYWNoIHRpbWUgdGhlIHByb3ZpZGVkIE9ic2VydmFibGUgc3RyZWFtIGVtaXRzIGEgbmV3IGRhdGEgYXJyYXkuIE90aGVyd2lzZSBpZiB5b3VyIGRhdGEgaXNcbiAgICAgKiBhbiBhcnJheSwgdGhpcyBmdW5jdGlvbiB3aWxsIG5lZWQgdG8gYmUgY2FsbGVkIHRvIHJlbmRlciBhbnkgY2hhbmdlcy5cbiAgICAgKi9cbiAgICByZW5kZXJSb3dzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaGVhZGVyIHJvdyBkZWZpbml0aW9uIHRvIGJlIHVzZWQuIE92ZXJyaWRlcyB0aGUgaGVhZGVyIHJvdyBkZWZpbml0aW9uIGdhdGhlcmVkIGJ5XG4gICAgICogdXNpbmcgYENvbnRlbnRDaGlsZGAsIGlmIG9uZSBleGlzdHMuIFNldHMgYSBmbGFnIHRoYXQgd2lsbCByZS1yZW5kZXIgdGhlIGhlYWRlciByb3cgYWZ0ZXIgdGhlXG4gICAgICogdGFibGUncyBjb250ZW50IGlzIGNoZWNrZWQuXG4gICAgICogQGRvY3MtcHJpdmF0ZVxuICAgICAqIEBkZXByZWNhdGVkIFVzZSBgYWRkSGVhZGVyUm93RGVmYCBhbmQgYHJlbW92ZUhlYWRlclJvd0RlZmAgaW5zdGVhZFxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiAgICAgKi9cbiAgICBzZXRIZWFkZXJSb3dEZWYoaGVhZGVyUm93RGVmOiBDZGtIZWFkZXJSb3dEZWYpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGZvb3RlciByb3cgZGVmaW5pdGlvbiB0byBiZSB1c2VkLiBPdmVycmlkZXMgdGhlIGZvb3RlciByb3cgZGVmaW5pdGlvbiBnYXRoZXJlZCBieVxuICAgICAqIHVzaW5nIGBDb250ZW50Q2hpbGRgLCBpZiBvbmUgZXhpc3RzLiBTZXRzIGEgZmxhZyB0aGF0IHdpbGwgcmUtcmVuZGVyIHRoZSBmb290ZXIgcm93IGFmdGVyIHRoZVxuICAgICAqIHRhYmxlJ3MgY29udGVudCBpcyBjaGVja2VkLlxuICAgICAqIEBkb2NzLXByaXZhdGVcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgYGFkZEZvb3RlclJvd0RlZmAgYW5kIGByZW1vdmVGb290ZXJSb3dEZWZgIGluc3RlYWRcbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gICAgICovXG4gICAgc2V0Rm9vdGVyUm93RGVmKGZvb3RlclJvd0RlZjogQ2RrRm9vdGVyUm93RGVmKTogdm9pZDtcbiAgICAvKiogQWRkcyBhIGNvbHVtbiBkZWZpbml0aW9uIHRoYXQgd2FzIG5vdCBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBjb250ZW50IGNoaWxkcmVuLiAqL1xuICAgIGFkZENvbHVtbkRlZihjb2x1bW5EZWY6IENka0NvbHVtbkRlZik6IHZvaWQ7XG4gICAgLyoqIFJlbW92ZXMgYSBjb2x1bW4gZGVmaW5pdGlvbiB0aGF0IHdhcyBub3QgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgICByZW1vdmVDb2x1bW5EZWYoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYpOiB2b2lkO1xuICAgIC8qKiBBZGRzIGEgcm93IGRlZmluaXRpb24gdGhhdCB3YXMgbm90IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gICAgYWRkUm93RGVmKHJvd0RlZjogQ2RrUm93RGVmPFQ+KTogdm9pZDtcbiAgICAvKiogUmVtb3ZlcyBhIHJvdyBkZWZpbml0aW9uIHRoYXQgd2FzIG5vdCBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBjb250ZW50IGNoaWxkcmVuLiAqL1xuICAgIHJlbW92ZVJvd0RlZihyb3dEZWY6IENka1Jvd0RlZjxUPik6IHZvaWQ7XG4gICAgLyoqIEFkZHMgYSBoZWFkZXIgcm93IGRlZmluaXRpb24gdGhhdCB3YXMgbm90IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gICAgYWRkSGVhZGVyUm93RGVmKGhlYWRlclJvd0RlZjogQ2RrSGVhZGVyUm93RGVmKTogdm9pZDtcbiAgICAvKiogUmVtb3ZlcyBhIGhlYWRlciByb3cgZGVmaW5pdGlvbiB0aGF0IHdhcyBub3QgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgICByZW1vdmVIZWFkZXJSb3dEZWYoaGVhZGVyUm93RGVmOiBDZGtIZWFkZXJSb3dEZWYpOiB2b2lkO1xuICAgIC8qKiBBZGRzIGEgZm9vdGVyIHJvdyBkZWZpbml0aW9uIHRoYXQgd2FzIG5vdCBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBjb250ZW50IGNoaWxkcmVuLiAqL1xuICAgIGFkZEZvb3RlclJvd0RlZihmb290ZXJSb3dEZWY6IENka0Zvb3RlclJvd0RlZik6IHZvaWQ7XG4gICAgLyoqIFJlbW92ZXMgYSBmb290ZXIgcm93IGRlZmluaXRpb24gdGhhdCB3YXMgbm90IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gICAgcmVtb3ZlRm9vdGVyUm93RGVmKGZvb3RlclJvd0RlZjogQ2RrRm9vdGVyUm93RGVmKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBoZWFkZXIgc3RpY2t5IHN0eWxlcy4gRmlyc3QgcmVzZXRzIGFsbCBhcHBsaWVkIHN0eWxlcyB3aXRoIHJlc3BlY3QgdG8gdGhlIGNlbGxzXG4gICAgICogc3RpY2tpbmcgdG8gdGhlIHRvcC4gVGhlbiwgZXZhbHVhdGluZyB3aGljaCBjZWxscyBuZWVkIHRvIGJlIHN0dWNrIHRvIHRoZSB0b3AuIFRoaXMgaXNcbiAgICAgKiBhdXRvbWF0aWNhbGx5IGNhbGxlZCB3aGVuIHRoZSBoZWFkZXIgcm93IGNoYW5nZXMgaXRzIGRpc3BsYXllZCBzZXQgb2YgY29sdW1ucywgb3IgaWYgaXRzXG4gICAgICogc3RpY2t5IGlucHV0IGNoYW5nZXMuIE1heSBiZSBjYWxsZWQgbWFudWFsbHkgZm9yIGNhc2VzIHdoZXJlIHRoZSBjZWxsIGNvbnRlbnQgY2hhbmdlcyBvdXRzaWRlXG4gICAgICogb2YgdGhlc2UgZXZlbnRzLlxuICAgICAqL1xuICAgIHVwZGF0ZVN0aWNreUhlYWRlclJvd1N0eWxlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGZvb3RlciBzdGlja3kgc3R5bGVzLiBGaXJzdCByZXNldHMgYWxsIGFwcGxpZWQgc3R5bGVzIHdpdGggcmVzcGVjdCB0byB0aGUgY2VsbHNcbiAgICAgKiBzdGlja2luZyB0byB0aGUgYm90dG9tLiBUaGVuLCBldmFsdWF0aW5nIHdoaWNoIGNlbGxzIG5lZWQgdG8gYmUgc3R1Y2sgdG8gdGhlIGJvdHRvbS4gVGhpcyBpc1xuICAgICAqIGF1dG9tYXRpY2FsbHkgY2FsbGVkIHdoZW4gdGhlIGZvb3RlciByb3cgY2hhbmdlcyBpdHMgZGlzcGxheWVkIHNldCBvZiBjb2x1bW5zLCBvciBpZiBpdHNcbiAgICAgKiBzdGlja3kgaW5wdXQgY2hhbmdlcy4gTWF5IGJlIGNhbGxlZCBtYW51YWxseSBmb3IgY2FzZXMgd2hlcmUgdGhlIGNlbGwgY29udGVudCBjaGFuZ2VzIG91dHNpZGVcbiAgICAgKiBvZiB0aGVzZSBldmVudHMuXG4gICAgICovXG4gICAgdXBkYXRlU3RpY2t5Rm9vdGVyUm93U3R5bGVzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY29sdW1uIHN0aWNreSBzdHlsZXMuIEZpcnN0IHJlc2V0cyBhbGwgYXBwbGllZCBzdHlsZXMgd2l0aCByZXNwZWN0IHRvIHRoZSBjZWxsc1xuICAgICAqIHN0aWNraW5nIHRvIHRoZSBsZWZ0IGFuZCByaWdodC4gVGhlbiBzdGlja3kgc3R5bGVzIGFyZSBhZGRlZCBmb3IgdGhlIGxlZnQgYW5kIHJpZ2h0IGFjY29yZGluZ1xuICAgICAqIHRvIHRoZSBjb2x1bW4gZGVmaW5pdGlvbnMgZm9yIGVhY2ggY2VsbCBpbiBlYWNoIHJvdy4gVGhpcyBpcyBhdXRvbWF0aWNhbGx5IGNhbGxlZCB3aGVuXG4gICAgICogdGhlIGRhdGEgc291cmNlIHByb3ZpZGVzIGEgbmV3IHNldCBvZiBkYXRhIG9yIHdoZW4gYSBjb2x1bW4gZGVmaW5pdGlvbiBjaGFuZ2VzIGl0cyBzdGlja3lcbiAgICAgKiBpbnB1dC4gTWF5IGJlIGNhbGxlZCBtYW51YWxseSBmb3IgY2FzZXMgd2hlcmUgdGhlIGNlbGwgY29udGVudCBjaGFuZ2VzIG91dHNpZGUgb2YgdGhlc2UgZXZlbnRzLlxuICAgICAqL1xuICAgIHVwZGF0ZVN0aWNreUNvbHVtblN0eWxlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGlzdCBvZiBSZW5kZXJSb3cgb2JqZWN0cyB0byByZW5kZXIgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IGxpc3Qgb2YgZGF0YSBhbmQgZGVmaW5lZFxuICAgICAqIHJvdyBkZWZpbml0aW9ucy4gSWYgdGhlIHByZXZpb3VzIGxpc3QgYWxyZWFkeSBjb250YWluZWQgYSBwYXJ0aWN1bGFyIHBhaXIsIGl0IHNob3VsZCBiZSByZXVzZWRcbiAgICAgKiBzbyB0aGF0IHRoZSBkaWZmZXIgZXF1YXRlcyB0aGVpciByZWZlcmVuY2VzLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2dldEFsbFJlbmRlclJvd3M7XG4gICAgLyoqXG4gICAgICogR2V0cyBhIGxpc3Qgb2YgYFJlbmRlclJvdzxUPmAgZm9yIHRoZSBwcm92aWRlZCBkYXRhIG9iamVjdCBhbmQgYW55IGBDZGtSb3dEZWZgIG9iamVjdHMgdGhhdFxuICAgICAqIHNob3VsZCBiZSByZW5kZXJlZCBmb3IgdGhpcyBkYXRhLiBSZXVzZXMgdGhlIGNhY2hlZCBSZW5kZXJSb3cgb2JqZWN0cyBpZiB0aGV5IG1hdGNoIHRoZSBzYW1lXG4gICAgICogYChULCBDZGtSb3dEZWYpYCBwYWlyLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2dldFJlbmRlclJvd3NGb3JEYXRhO1xuICAgIC8qKiBVcGRhdGUgdGhlIG1hcCBjb250YWluaW5nIHRoZSBjb250ZW50J3MgY29sdW1uIGRlZmluaXRpb25zLiAqL1xuICAgIHByaXZhdGUgX2NhY2hlQ29sdW1uRGVmcztcbiAgICAvKiogVXBkYXRlIHRoZSBsaXN0IG9mIGFsbCBhdmFpbGFibGUgcm93IGRlZmluaXRpb25zIHRoYXQgY2FuIGJlIHVzZWQuICovXG4gICAgcHJpdmF0ZSBfY2FjaGVSb3dEZWZzO1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBoZWFkZXIsIGRhdGEsIG9yIGZvb3RlciByb3dzIGhhdmUgY2hhbmdlZCB3aGF0IGNvbHVtbnMgdGhleSB3YW50IHRvIGRpc3BsYXkgb3JcbiAgICAgKiB3aGV0aGVyIHRoZSBzdGlja3kgc3RhdGVzIGhhdmUgY2hhbmdlZCBmb3IgdGhlIGhlYWRlciBvciBmb290ZXIuIElmIHRoZXJlIGlzIGEgZGlmZiwgdGhlblxuICAgICAqIHJlLXJlbmRlciB0aGF0IHNlY3Rpb24uXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVuZGVyVXBkYXRlZENvbHVtbnM7XG4gICAgLyoqXG4gICAgICogU3dpdGNoIHRvIHRoZSBwcm92aWRlZCBkYXRhIHNvdXJjZSBieSByZXNldHRpbmcgdGhlIGRhdGEgYW5kIHVuc3Vic2NyaWJpbmcgZnJvbSB0aGUgY3VycmVudFxuICAgICAqIHJlbmRlciBjaGFuZ2Ugc3Vic2NyaXB0aW9uIGlmIG9uZSBleGlzdHMuIElmIHRoZSBkYXRhIHNvdXJjZSBpcyBudWxsLCBpbnRlcnByZXQgdGhpcyBieVxuICAgICAqIGNsZWFyaW5nIHRoZSByb3cgb3V0bGV0LiBPdGhlcndpc2Ugc3RhcnQgbGlzdGVuaW5nIGZvciBuZXcgZGF0YS5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zd2l0Y2hEYXRhU291cmNlO1xuICAgIC8qKiBTZXQgdXAgYSBzdWJzY3JpcHRpb24gZm9yIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcztcbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IGV4aXN0aW5nIGNvbnRlbnQgaW4gdGhlIGhlYWRlciByb3cgb3V0bGV0IGFuZCBjcmVhdGVzIGEgbmV3IGVtYmVkZGVkIHZpZXdcbiAgICAgKiBpbiB0aGUgb3V0bGV0IHVzaW5nIHRoZSBoZWFkZXIgcm93IGRlZmluaXRpb24uXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZm9yY2VSZW5kZXJIZWFkZXJSb3dzO1xuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgZXhpc3RpbmcgY29udGVudCBpbiB0aGUgZm9vdGVyIHJvdyBvdXRsZXQgYW5kIGNyZWF0ZXMgYSBuZXcgZW1iZWRkZWQgdmlld1xuICAgICAqIGluIHRoZSBvdXRsZXQgdXNpbmcgdGhlIGZvb3RlciByb3cgZGVmaW5pdGlvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9mb3JjZVJlbmRlckZvb3RlclJvd3M7XG4gICAgLyoqIEFkZHMgdGhlIHN0aWNreSBjb2x1bW4gc3R5bGVzIGZvciB0aGUgcm93cyBhY2NvcmRpbmcgdG8gdGhlIGNvbHVtbnMnIHN0aWNrIHN0YXRlcy4gKi9cbiAgICBwcml2YXRlIF9hZGRTdGlja3lDb2x1bW5TdHlsZXM7XG4gICAgLyoqIEdldHMgdGhlIGxpc3Qgb2Ygcm93cyB0aGF0IGhhdmUgYmVlbiByZW5kZXJlZCBpbiB0aGUgcm93IG91dGxldC4gKi9cbiAgICBfZ2V0UmVuZGVyZWRSb3dzKHJvd091dGxldDogUm93T3V0bGV0KTogSFRNTEVsZW1lbnRbXTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1hdGNoaW5nIHJvdyBkZWZpbml0aW9ucyB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGlzIHJvdyBkYXRhLiBJZiB0aGVyZSBpcyBvbmx5XG4gICAgICogb25lIHJvdyBkZWZpbml0aW9uLCBpdCBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlLCBmaW5kIHRoZSByb3cgZGVmaW5pdGlvbnMgdGhhdCBoYXMgYSB3aGVuXG4gICAgICogcHJlZGljYXRlIHRoYXQgcmV0dXJucyB0cnVlIHdpdGggdGhlIGRhdGEuIElmIG5vbmUgcmV0dXJuIHRydWUsIHJldHVybiB0aGUgZGVmYXVsdCByb3dcbiAgICAgKiBkZWZpbml0aW9uLlxuICAgICAqL1xuICAgIF9nZXRSb3dEZWZzKGRhdGE6IFQsIGRhdGFJbmRleDogbnVtYmVyKTogQ2RrUm93RGVmPFQ+W107XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSBlbWJlZGRlZCB2aWV3IGZvciB0aGUgZGF0YSByb3cgdGVtcGxhdGUgYW5kIHBsYWNlIGl0IGluIHRoZSBjb3JyZWN0IGluZGV4IGxvY2F0aW9uXG4gICAgICogd2l0aGluIHRoZSBkYXRhIHJvdyB2aWV3IGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbnNlcnRSb3c7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByb3cgdGVtcGxhdGUgaW4gdGhlIG91dGxldCBhbmQgZmlsbHMgaXQgd2l0aCB0aGUgc2V0IG9mIGNlbGwgdGVtcGxhdGVzLlxuICAgICAqIE9wdGlvbmFsbHkgdGFrZXMgYSBjb250ZXh0IHRvIHByb3ZpZGUgdG8gdGhlIHJvdyBhbmQgY2VsbHMsIGFzIHdlbGwgYXMgYW4gb3B0aW9uYWwgaW5kZXhcbiAgICAgKiBvZiB3aGVyZSB0byBwbGFjZSB0aGUgbmV3IHJvdyB0ZW1wbGF0ZSBpbiB0aGUgb3V0bGV0LlxuICAgICAqL1xuICAgIHByaXZhdGUgX3JlbmRlclJvdztcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBpbmRleC1yZWxhdGVkIGNvbnRleHQgZm9yIGVhY2ggcm93IHRvIHJlZmxlY3QgYW55IGNoYW5nZXMgaW4gdGhlIGluZGV4IG9mIHRoZSByb3dzLFxuICAgICAqIGUuZy4gZmlyc3QvbGFzdC9ldmVuL29kZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVSb3dJbmRleENvbnRleHQ7XG4gICAgLyoqIEdldHMgdGhlIGNvbHVtbiBkZWZpbml0aW9ucyBmb3IgdGhlIHByb3ZpZGVkIHJvdyBkZWYuICovXG4gICAgcHJpdmF0ZSBfZ2V0Q2VsbFRlbXBsYXRlcztcbiAgICAvKiogQWRkcyBuYXRpdmUgdGFibGUgc2VjdGlvbnMgKGUuZy4gdGJvZHkpIGFuZCBtb3ZlcyB0aGUgcm93IG91dGxldHMgaW50byB0aGVtLiAqL1xuICAgIHByaXZhdGUgX2FwcGx5TmF0aXZlVGFibGVTZWN0aW9ucztcbiAgICAvKipcbiAgICAgKiBGb3JjZXMgYSByZS1yZW5kZXIgb2YgdGhlIGRhdGEgcm93cy4gU2hvdWxkIGJlIGNhbGxlZCBpbiBjYXNlcyB3aGVyZSB0aGVyZSBoYXMgYmVlbiBhbiBpbnB1dFxuICAgICAqIGNoYW5nZSB0aGF0IGFmZmVjdHMgdGhlIGV2YWx1YXRpb24gb2Ygd2hpY2ggcm93cyBzaG91bGQgYmUgcmVuZGVyZWQsIGUuZy4gdG9nZ2xpbmdcbiAgICAgKiBgbXVsdGlUZW1wbGF0ZURhdGFSb3dzYCBvciBhZGRpbmcvcmVtb3Zpbmcgcm93IGRlZmluaXRpb25zLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2ZvcmNlUmVuZGVyRGF0YVJvd3M7XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZXJlIGhhcyBiZWVuIGEgY2hhbmdlIGluIHN0aWNreSBzdGF0ZXMgc2luY2UgbGFzdCBjaGVjayBhbmQgYXBwbGllcyB0aGUgY29ycmVjdFxuICAgICAqIHN0aWNreSBzdHlsZXMuIFNpbmNlIGNoZWNraW5nIHJlc2V0cyB0aGUgXCJkaXJ0eVwiIHN0YXRlLCB0aGlzIHNob3VsZCBvbmx5IGJlIHBlcmZvcm1lZCBvbmNlXG4gICAgICogZHVyaW5nIGEgY2hhbmdlIGRldGVjdGlvbiBhbmQgYWZ0ZXIgdGhlIGlucHV0cyBhcmUgc2V0dGxlZCAoYWZ0ZXIgY29udGVudCBjaGVjaykuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2hlY2tTdGlja3lTdGF0ZXM7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgc3RpY2t5IHN0eWxlciB0aGF0IHdpbGwgYmUgdXNlZCBmb3Igc3RpY2t5IHJvd3MgYW5kIGNvbHVtbnMuIExpc3RlbnNcbiAgICAgKiBmb3IgZGlyZWN0aW9uYWxpdHkgY2hhbmdlcyBhbmQgcHJvdmlkZXMgdGhlIGxhdGVzdCBkaXJlY3Rpb24gdG8gdGhlIHN0eWxlci4gUmUtYXBwbGllcyBjb2x1bW5cbiAgICAgKiBzdGlja2luZXNzIHdoZW4gZGlyZWN0aW9uYWxpdHkgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zZXR1cFN0aWNreVN0eWxlcjtcbiAgICAvKiogRmlsdGVycyBkZWZpbml0aW9ucyB0aGF0IGJlbG9uZyB0byB0aGlzIHRhYmxlIGZyb20gYSBRdWVyeUxpc3QuICovXG4gICAgcHJpdmF0ZSBfZ2V0T3duRGVmcztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbXVsdGlUZW1wbGF0ZURhdGFSb3dzOiBCb29sZWFuSW5wdXQ7XG59XG5leHBvcnQge307XG4iXX0=