/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/routing/src/lazy" />
import * as ts from 'typescript';
import { PartialEvaluator } from '../../partial_evaluator';
import { NgModuleRawRouteData } from './analyzer';
import { RouterEntryPoint, RouterEntryPointManager } from './route';
export interface LazyRouteEntry {
    loadChildren: string;
    from: RouterEntryPoint;
    resolvedTo: RouterEntryPoint;
}
export declare function scanForCandidateTransitiveModules(expr: ts.Expression | null, evaluator: PartialEvaluator): string[];
export declare function scanForRouteEntryPoints(ngModule: ts.SourceFile, moduleName: string, data: NgModuleRawRouteData, entryPointManager: RouterEntryPointManager, evaluator: PartialEvaluator): LazyRouteEntry[];
