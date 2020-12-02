/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * @param id Id whose lookup failed.
 * @docs-private
 */
export declare function getTableUnknownColumnError(id: string): Error;
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */
export declare function getTableDuplicateColumnNameError(name: string): Error;
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */
export declare function getTableMultipleDefaultRowDefsError(): Error;
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */
export declare function getTableMissingMatchingRowDefError(data: any): Error;
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */
export declare function getTableMissingRowDefsError(): Error;
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */
export declare function getTableUnknownDataSourceError(): Error;
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */
export declare function getTableTextColumnMissingParentTableError(): Error;
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */
export declare function getTableTextColumnMissingNameError(): Error;
