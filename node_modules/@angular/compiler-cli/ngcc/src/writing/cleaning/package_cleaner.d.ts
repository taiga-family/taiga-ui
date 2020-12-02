/// <amd-module name="@angular/compiler-cli/ngcc/src/writing/cleaning/package_cleaner" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteFsPath, FileSystem } from '../../../../src/ngtsc/file_system';
import { EntryPoint } from '../../packages/entry_point';
import { CleaningStrategy } from './cleaning_strategies';
/**
 * A class that can clean ngcc artifacts from a directory.
 */
export declare class PackageCleaner {
    private fs;
    private cleaners;
    constructor(fs: FileSystem, cleaners: CleaningStrategy[]);
    /**
     * Recurse through the file-system cleaning files and directories as determined by the configured
     * cleaning-strategies.
     *
     * @param directory the current directory to clean
     */
    clean(directory: AbsoluteFsPath): void;
}
/**
 * Iterate through the given `entryPoints` identifying the package for each that has at least one
 * outdated processed format, then cleaning those packages.
 *
 * Note that we have to clean entire packages because there is no clear file-system boundary
 * between entry-points within a package. So if one entry-point is outdated we have to clean
 * everything within that package.
 *
 * @param fileSystem the current file-system
 * @param entryPoints the entry-points that have been collected for this run of ngcc
 * @returns true if packages needed to be cleaned.
 */
export declare function cleanOutdatedPackages(fileSystem: FileSystem, entryPoints: EntryPoint[]): boolean;
