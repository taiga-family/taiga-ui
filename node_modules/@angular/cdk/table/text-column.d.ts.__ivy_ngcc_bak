/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnDestroy, OnInit } from '@angular/core';
import { CdkCellDef, CdkColumnDef, CdkHeaderCellDef } from './cell';
import { CdkTable } from './table';
import { TextColumnOptions } from './tokens';
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
export declare class CdkTextColumn<T> implements OnDestroy, OnInit {
    private _table;
    private _options;
    /** Column name that should be used to reference this column. */
    get name(): string;
    set name(name: string);
    _name: string;
    /**
     * Text label that should be used for the column header. If this property is not
     * set, the header text will default to the column name with its first letter capitalized.
     */
    headerText: string;
    /**
     * Accessor function to retrieve the data rendered for each cell. If this
     * property is not set, the data cells will render the value found in the data's property matching
     * the column's name. For example, if the column is named `id`, then the rendered value will be
     * value defined by the data's `id` property.
     */
    dataAccessor: (data: T, name: string) => string;
    /** Alignment of the cell values. */
    justify: 'start' | 'end';
    /** @docs-private */
    columnDef: CdkColumnDef;
    /**
     * The column cell is provided to the column during `ngOnInit` with a static query.
     * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
     * column definition was provided in the same view as the table, which is not the case with this
     * component.
     * @docs-private
     */
    cell: CdkCellDef;
    /**
     * The column headerCell is provided to the column during `ngOnInit` with a static query.
     * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
     * column definition was provided in the same view as the table, which is not the case with this
     * component.
     * @docs-private
     */
    headerCell: CdkHeaderCellDef;
    constructor(_table: CdkTable<T>, _options: TextColumnOptions<T>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */
    _createDefaultHeaderText(): string;
    /** Synchronizes the column definition name with the text column name. */
    private _syncColumnDefName;
}
