/// <amd-module name="@angular/compiler-cli/ngcc/src/entry_point_finder/targeted_entry_point_finder" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteFsPath, FileSystem } from '../../../src/ngtsc/file_system';
import { DependencyResolver, SortedEntryPointsInfo } from '../dependencies/dependency_resolver';
import { Logger } from '../logging/logger';
import { NgccConfiguration } from '../packages/configuration';
import { EntryPointJsonProperty } from '../packages/entry_point';
import { PathMappings } from '../path_mappings';
import { EntryPointFinder } from './interface';
/**
 * An EntryPointFinder that starts from a target entry-point and only finds
 * entry-points that are dependencies of the target.
 *
 * This is faster than searching the entire file-system for all the entry-points,
 * and is used primarily by the CLI integration.
 */
export declare class TargetedEntryPointFinder implements EntryPointFinder {
    private fs;
    private config;
    private logger;
    private resolver;
    private basePath;
    private targetPath;
    private pathMappings;
    private unprocessedPaths;
    private unsortedEntryPoints;
    private basePaths;
    private getBasePaths;
    constructor(fs: FileSystem, config: NgccConfiguration, logger: Logger, resolver: DependencyResolver, basePath: AbsoluteFsPath, targetPath: AbsoluteFsPath, pathMappings: PathMappings | undefined);
    findEntryPoints(): SortedEntryPointsInfo;
    targetNeedsProcessingOrCleaning(propertiesToConsider: EntryPointJsonProperty[], compileAllFormats: boolean): boolean;
    private processNextPath;
    private getEntryPoint;
    private computePackagePath;
    /**
     * Search down to the `entryPointPath` from the `containingPath` for the first `package.json` that
     * we come to. This is the path to the entry-point's containing package. For example if
     * `containingPath` is `/a/b/c` and `entryPointPath` is `/a/b/c/d/e` and there exists
     * `/a/b/c/d/package.json` and `/a/b/c/d/e/package.json`, then we will return `/a/b/c/d`.
     *
     * To account for nested `node_modules` we actually start the search at the last `node_modules` in
     * the `entryPointPath` that is below the `containingPath`. E.g. if `containingPath` is `/a/b/c`
     * and `entryPointPath` is `/a/b/c/d/node_modules/x/y/z`, we start the search at
     * `/a/b/c/d/node_modules`.
     */
    private computePackagePathFromContainingPath;
    /**
     * Search up the directory tree from the `entryPointPath` looking for a `node_modules` directory
     * that we can use as a potential starting point for computing the package path.
     */
    private computePackagePathFromNearestNodeModules;
    /**
     * Split the given `path` into path segments using an FS independent algorithm.
     * @param path The path to split.
     */
    private splitPath;
}
