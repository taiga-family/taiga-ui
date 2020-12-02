/// <amd-module name="@angular/compiler-cli/ngcc/src/entry_point_finder/directory_walker_entry_point_finder" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteFsPath, FileSystem } from '../../../src/ngtsc/file_system';
import { EntryPointWithDependencies } from '../dependencies/dependency_host';
import { DependencyResolver, SortedEntryPointsInfo } from '../dependencies/dependency_resolver';
import { Logger } from '../logging/logger';
import { NgccConfiguration } from '../packages/configuration';
import { EntryPointManifest } from '../packages/entry_point_manifest';
import { PathMappings } from '../path_mappings';
import { EntryPointFinder } from './interface';
/**
 * An EntryPointFinder that searches for all entry-points that can be found given a `basePath` and
 * `pathMappings`.
 */
export declare class DirectoryWalkerEntryPointFinder implements EntryPointFinder {
    private fs;
    private config;
    private logger;
    private resolver;
    private entryPointManifest;
    private sourceDirectory;
    private pathMappings;
    private basePaths;
    constructor(fs: FileSystem, config: NgccConfiguration, logger: Logger, resolver: DependencyResolver, entryPointManifest: EntryPointManifest, sourceDirectory: AbsoluteFsPath, pathMappings: PathMappings | undefined);
    /**
     * Search the `sourceDirectory`, and sub-directories, using `pathMappings` as necessary, to find
     * all package entry-points.
     */
    findEntryPoints(): SortedEntryPointsInfo;
    /**
     * Search the `basePath` for possible Angular packages and entry-points.
     *
     * @param basePath The path at which to start the search
     * @returns an array of `EntryPoint`s that were found within `basePath`.
     */
    walkBasePathForPackages(basePath: AbsoluteFsPath): EntryPointWithDependencies[];
    /**
     * Look for Angular packages that need to be compiled, starting at the source directory.
     * The function will recurse into directories that start with `@...`, e.g. `@angular/...`.
     *
     * @param sourceDirectory An absolute path to the root directory where searching begins.
     * @returns an array of `EntryPoint`s that were found within `sourceDirectory`.
     */
    walkDirectoryForPackages(sourceDirectory: AbsoluteFsPath): EntryPointWithDependencies[];
    /**
     * Search the `directory` looking for any secondary entry-points for a package, adding any that
     * are found to the `entryPoints` array.
     *
     * @param entryPoints An array where we will add any entry-points found in this directory
     * @param packagePath The absolute path to the package that may contain entry-points
     * @param directory The current directory being searched
     * @param paths The paths contained in the current `directory`.
     */
    private collectSecondaryEntryPoints;
}
