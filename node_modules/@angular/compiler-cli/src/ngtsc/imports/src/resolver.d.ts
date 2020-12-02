/// <amd-module name="@angular/compiler-cli/src/ngtsc/imports/src/resolver" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
/**
 * Used by `RouterEntryPointManager` and `NgModuleRouteAnalyzer` (which is in turn is used by
 * `NgModuleDecoratorHandler`) for resolving the module source-files references in lazy-loaded
 * routes (relative to the source-file containing the `NgModule` that provides the route
 * definitions).
 */
export declare class ModuleResolver {
    private program;
    private compilerOptions;
    private host;
    private moduleResolutionCache;
    constructor(program: ts.Program, compilerOptions: ts.CompilerOptions, host: ts.CompilerHost, moduleResolutionCache: ts.ModuleResolutionCache | null);
    resolveModule(moduleName: string, containingFile: string): ts.SourceFile | null;
}
