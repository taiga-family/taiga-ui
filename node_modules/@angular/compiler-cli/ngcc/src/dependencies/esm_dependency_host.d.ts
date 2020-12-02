/// <amd-module name="@angular/compiler-cli/ngcc/src/dependencies/esm_dependency_host" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../../../src/ngtsc/file_system';
import { DependencyHostBase } from './dependency_host';
/**
 * Helper functions for computing dependencies.
 */
export declare class EsmDependencyHost extends DependencyHostBase {
    /**
     * Compute the dependencies of the given file.
     *
     * @param file An absolute path to the file whose dependencies we want to get.
     * @param dependencies A set that will have the absolute paths of resolved entry points added to
     * it.
     * @param missing A set that will have the dependencies that could not be found added to it.
     * @param deepImports A set that will have the import paths that exist but cannot be mapped to
     * entry-points, i.e. deep-imports.
     * @param alreadySeen A set that is used to track internal dependencies to prevent getting stuck
     * in a circular dependency loop.
     */
    protected recursivelyCollectDependencies(file: AbsoluteFsPath, dependencies: Set<AbsoluteFsPath>, missing: Set<string>, deepImports: Set<string>, alreadySeen: Set<AbsoluteFsPath>): void;
    /**
     * Resolve the given `importPath` from `file` and add it to the appropriate set.
     *
     * @returns `true` if the import was resolved (to an entry-point, a local import, or a
     * deep-import).
     */
    protected processImport(importPath: string, file: AbsoluteFsPath, dependencies: Set<AbsoluteFsPath>, missing: Set<string>, deepImports: Set<string>, alreadySeen: Set<AbsoluteFsPath>): boolean;
}
/**
 * Check whether a source file needs to be parsed for imports.
 * This is a performance short-circuit, which saves us from creating
 * a TypeScript AST unnecessarily.
 *
 * @param source The content of the source file to check.
 *
 * @returns false if there are definitely no import or re-export statements
 * in this file, true otherwise.
 */
export declare function hasImportOrReexportStatements(source: string): boolean;
/**
 * Check whether the given statement is an import with a string literal module specifier.
 * @param stmt the statement node to check.
 * @returns true if the statement is an import with a string literal module specifier.
 */
export declare function isStringImportOrReexport(stmt: ts.Statement): stmt is ts.ImportDeclaration & {
    moduleSpecifier: ts.StringLiteral;
};
