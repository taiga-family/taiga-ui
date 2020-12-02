/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/locate_symbol" />
import { AstResult, SymbolInfo } from './types';
/**
 * Traverses a template AST and locates symbol(s) at a specified position.
 * @param info template AST information set
 * @param position location to locate symbols at
 */
export declare function locateSymbols(info: AstResult, position: number): SymbolInfo[];
