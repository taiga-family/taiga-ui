/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/routing/src/analyzer" />
import * as ts from 'typescript';
import { ModuleResolver } from '../../imports';
import { PartialEvaluator } from '../../partial_evaluator';
export interface NgModuleRawRouteData {
    sourceFile: ts.SourceFile;
    moduleName: string;
    imports: ts.Expression | null;
    exports: ts.Expression | null;
    providers: ts.Expression | null;
}
export interface LazyRoute {
    route: string;
    module: {
        name: string;
        filePath: string;
    };
    referencedModule: {
        name: string;
        filePath: string;
    };
}
export declare class NgModuleRouteAnalyzer {
    private evaluator;
    private modules;
    private entryPointManager;
    constructor(moduleResolver: ModuleResolver, evaluator: PartialEvaluator);
    add(sourceFile: ts.SourceFile, moduleName: string, imports: ts.Expression | null, exports: ts.Expression | null, providers: ts.Expression | null): void;
    listLazyRoutes(entryModuleKey?: string | undefined): LazyRoute[];
}
