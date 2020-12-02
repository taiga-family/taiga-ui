/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/diagnostics" />
import { NgAnalyzedModules } from '@angular/compiler';
import * as ts from 'typescript';
import * as ng from './types';
import { TypeScriptServiceHost } from './typescript_host';
/**
 * Return diagnostic information for the parsed AST of the template.
 * @param ast contains HTML and template AST
 */
export declare function getTemplateDiagnostics(ast: ng.AstResult): ng.Diagnostic[];
/**
 * Performs a variety diagnostics on directive declarations.
 *
 * @param declarations Angular directive declarations
 * @param modules NgModules in the project
 * @param host TypeScript service host used to perform TypeScript queries
 * @return diagnosed errors, if any
 */
export declare function getDeclarationDiagnostics(declarations: ng.Declaration[], modules: NgAnalyzedModules, host: Readonly<TypeScriptServiceHost>): ng.Diagnostic[];
/**
 * Convert ng.Diagnostic to ts.Diagnostic.
 * @param d diagnostic
 * @param file
 */
export declare function ngDiagnosticToTsDiagnostic(d: ng.Diagnostic, file: ts.SourceFile | undefined): ts.Diagnostic;
