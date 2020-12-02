/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/hover" />
import { NgAnalyzedModules } from '@angular/compiler';
import * as ts from 'typescript';
import * as ng from './types';
/**
 * Traverse the template AST and look for the symbol located at `position`, then
 * return the corresponding quick info.
 * @param info template AST
 * @param position location of the symbol
 * @param analyzedModules all NgModules in the program.
 */
export declare function getTemplateHover(info: ng.AstResult, position: number, analyzedModules: NgAnalyzedModules): ts.QuickInfo | undefined;
/**
 * Get quick info for Angular semantic entities in TypeScript files, like Directives.
 * @param position location of the symbol in the source file
 * @param declarations All Directive-like declarations in the source file.
 * @param analyzedModules all NgModules in the program.
 */
export declare function getTsHover(position: number, declarations: ng.Declaration[], analyzedModules: NgAnalyzedModules): ts.QuickInfo | undefined;
