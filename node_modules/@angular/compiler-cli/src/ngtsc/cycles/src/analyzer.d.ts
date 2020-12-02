/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/cycles/src/analyzer" />
import * as ts from 'typescript';
import { ImportGraph } from './imports';
/**
 * Analyzes a `ts.Program` for cycles.
 */
export declare class CycleAnalyzer {
    private importGraph;
    constructor(importGraph: ImportGraph);
    /**
     * Check whether adding an import from `from` to `to` would create a cycle in the `ts.Program`.
     */
    wouldCreateCycle(from: ts.SourceFile, to: ts.SourceFile): boolean;
    /**
     * Record a synthetic import from `from` to `to`.
     *
     * This is an import that doesn't exist in the `ts.Program` but will be considered as part of the
     * import graph for cycle creation.
     */
    recordSyntheticImport(from: ts.SourceFile, to: ts.SourceFile): void;
}
