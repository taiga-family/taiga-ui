/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/cycles/src/imports" />
import * as ts from 'typescript';
import { ModuleResolver } from '../../imports';
/**
 * A cached graph of imports in the `ts.Program`.
 *
 * The `ImportGraph` keeps track of dependencies (imports) of individual `ts.SourceFile`s. Only
 * dependencies within the same program are tracked; imports into packages on NPM are not.
 */
export declare class ImportGraph {
    private resolver;
    private map;
    constructor(resolver: ModuleResolver);
    /**
     * List the direct (not transitive) imports of a given `ts.SourceFile`.
     *
     * This operation is cached.
     */
    importsOf(sf: ts.SourceFile): Set<ts.SourceFile>;
    /**
     * Lists the transitive imports of a given `ts.SourceFile`.
     */
    transitiveImportsOf(sf: ts.SourceFile): Set<ts.SourceFile>;
    private transitiveImportsOfHelper;
    /**
     * Add a record of an import from `sf` to `imported`, that's not present in the original
     * `ts.Program` but will be remembered by the `ImportGraph`.
     */
    addSyntheticImport(sf: ts.SourceFile, imported: ts.SourceFile): void;
    private scanImports;
}
