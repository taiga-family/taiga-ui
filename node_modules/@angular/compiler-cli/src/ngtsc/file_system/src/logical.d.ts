/// <amd-module name="@angular/compiler-cli/src/ngtsc/file_system/src/logical" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { AbsoluteFsPath, BrandedPath } from './types';
/**
 * A path that's relative to the logical root of a TypeScript project (one of the project's
 * rootDirs).
 *
 * Paths in the type system use POSIX format.
 */
export declare type LogicalProjectPath = BrandedPath<'LogicalProjectPath'>;
export declare const LogicalProjectPath: {
    /**
     * Get the relative path between two `LogicalProjectPath`s.
     *
     * This will return a `PathSegment` which would be a valid module specifier to use in `from` when
     * importing from `to`.
     */
    relativePathBetween: (from: BrandedPath<"LogicalProjectPath">, to: BrandedPath<"LogicalProjectPath">) => BrandedPath<"PathSegment">;
};
/**
 * A utility class which can translate absolute paths to source files into logical paths in
 * TypeScript's logical file system, based on the root directories of the project.
 */
export declare class LogicalFileSystem {
    /**
     * The root directories of the project, sorted with the longest path first.
     */
    private rootDirs;
    /**
     * A cache of file paths to project paths, because computation of these paths is slightly
     * expensive.
     */
    private cache;
    constructor(rootDirs: AbsoluteFsPath[]);
    /**
     * Get the logical path in the project of a `ts.SourceFile`.
     *
     * This method is provided as a convenient alternative to calling
     * `logicalPathOfFile(absoluteFromSourceFile(sf))`.
     */
    logicalPathOfSf(sf: ts.SourceFile): LogicalProjectPath | null;
    /**
     * Get the logical path in the project of a source file.
     *
     * @returns A `LogicalProjectPath` to the source file, or `null` if the source file is not in any
     * of the TS project's root directories.
     */
    logicalPathOfFile(physicalFile: AbsoluteFsPath): LogicalProjectPath | null;
    private createLogicalProjectPath;
}
