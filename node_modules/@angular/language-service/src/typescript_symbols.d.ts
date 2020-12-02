/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/typescript_symbols" />
import { CompilePipeSummary, StaticSymbol } from '@angular/compiler';
import * as ts from 'typescript';
import { SymbolQuery, SymbolTable } from './symbols';
export declare function getSymbolQuery(program: ts.Program, checker: ts.TypeChecker, source: ts.SourceFile, fetchPipes: () => SymbolTable): SymbolQuery;
export declare function getClassMembers(program: ts.Program, checker: ts.TypeChecker, staticSymbol: StaticSymbol): SymbolTable | undefined;
export declare function getClassMembersFromDeclaration(program: ts.Program, checker: ts.TypeChecker, source: ts.SourceFile, declaration: ts.ClassDeclaration): SymbolTable;
export declare function getPipesTable(source: ts.SourceFile, program: ts.Program, checker: ts.TypeChecker, pipes: CompilePipeSummary[]): SymbolTable;
