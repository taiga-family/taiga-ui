/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/entry_point/src/private_export_checker" />
import * as ts from 'typescript';
import { ReferenceGraph } from './reference_graph';
/**
 * Produce `ts.Diagnostic`s for classes that are visible from exported types (e.g. directives
 * exposed by exported `NgModule`s) that are not themselves exported.
 *
 * This function reconciles two concepts:
 *
 * A class is Exported if it's exported from the main library `entryPoint` file.
 * A class is Visible if, via Angular semantics, a downstream consumer can import an Exported class
 * and be affected by the class in question. For example, an Exported NgModule may expose a
 * directive class to its consumers. Consumers that import the NgModule may have the directive
 * applied to elements in their templates. In this case, the directive is considered Visible.
 *
 * `checkForPrivateExports` attempts to verify that all Visible classes are Exported, and report
 * `ts.Diagnostic`s for those that aren't.
 *
 * @param entryPoint `ts.SourceFile` of the library's entrypoint, which should export the library's
 * public API.
 * @param checker `ts.TypeChecker` for the current program.
 * @param refGraph `ReferenceGraph` tracking the visibility of Angular types.
 * @returns an array of `ts.Diagnostic`s representing errors when visible classes are not exported
 * properly.
 */
export declare function checkForPrivateExports(entryPoint: ts.SourceFile, checker: ts.TypeChecker, refGraph: ReferenceGraph): ts.Diagnostic[];
