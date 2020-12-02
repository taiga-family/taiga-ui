/// <amd-module name="@angular/compiler-cli/ngcc/src/writing/cleaning/cleaning_strategies" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteFsPath, FileSystem, PathSegment } from '../../../../src/ngtsc/file_system';
/**
 * Implement this interface to extend the cleaning strategies of the `PackageCleaner`.
 */
export interface CleaningStrategy {
    canClean(path: AbsoluteFsPath, basename: PathSegment): boolean;
    clean(path: AbsoluteFsPath, basename: PathSegment): void;
}
/**
 * A CleaningStrategy that reverts changes to package.json files by removing the build marker and
 * other properties.
 */
export declare class PackageJsonCleaner implements CleaningStrategy {
    private fs;
    constructor(fs: FileSystem);
    canClean(_path: AbsoluteFsPath, basename: PathSegment): boolean;
    clean(path: AbsoluteFsPath, _basename: PathSegment): void;
}
/**
 * A CleaningStrategy that removes the extra directory containing generated entry-point formats.
 */
export declare class NgccDirectoryCleaner implements CleaningStrategy {
    private fs;
    constructor(fs: FileSystem);
    canClean(path: AbsoluteFsPath, basename: PathSegment): boolean;
    clean(path: AbsoluteFsPath, _basename: PathSegment): void;
}
/**
 * A CleaningStrategy that reverts files that were overwritten and removes the backup files that
 * ngcc created.
 */
export declare class BackupFileCleaner implements CleaningStrategy {
    private fs;
    constructor(fs: FileSystem);
    canClean(path: AbsoluteFsPath, basename: PathSegment): boolean;
    clean(path: AbsoluteFsPath, _basename: PathSegment): void;
}
