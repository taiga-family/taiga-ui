/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/global_symbols" />
import * as ng from '../src/types';
export declare const EMPTY_SYMBOL_TABLE: Readonly<ng.SymbolTable>;
/**
 * A factory function that returns a symbol table that contains all global symbols
 * available in an interpolation scope in a template.
 * This function creates the table the first time it is called, and return a cached
 * value for all subsequent calls.
 */
export declare const createGlobalSymbolTable: (query: ng.SymbolQuery) => ng.SymbolTable;
