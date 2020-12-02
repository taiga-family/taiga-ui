/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/dependencies/dependency_resolver" />
import { DepGraph } from 'dependency-graph';
import { FileSystem } from '../../../src/ngtsc/file_system';
import { Logger } from '../logging/logger';
import { NgccConfiguration } from '../packages/configuration';
import { EntryPoint, EntryPointFormat } from '../packages/entry_point';
import { PartiallyOrderedList } from '../utils';
import { DependencyHost, EntryPointWithDependencies } from './dependency_host';
/**
 * Holds information about entry points that are removed because
 * they have dependencies that are missing (directly or transitively).
 *
 * This might not be an error, because such an entry point might not actually be used
 * in the application. If it is used then the `ngc` application compilation would
 * fail also, so we don't need ngcc to catch this.
 *
 * For example, consider an application that uses the `@angular/router` package.
 * This package includes an entry-point called `@angular/router/upgrade`, which has a dependency
 * on the `@angular/upgrade` package.
 * If the application never uses code from `@angular/router/upgrade` then there is no need for
 * `@angular/upgrade` to be installed.
 * In this case the ngcc tool should just ignore the `@angular/router/upgrade` end-point.
 */
export interface InvalidEntryPoint {
    entryPoint: EntryPoint;
    missingDependencies: string[];
}
/**
 * Holds information about dependencies of an entry-point that do not need to be processed
 * by the ngcc tool.
 *
 * For example, the `rxjs` package does not contain any Angular decorators that need to be
 * compiled and so this can be safely ignored by ngcc.
 */
export interface IgnoredDependency {
    entryPoint: EntryPoint;
    dependencyPath: string;
}
export interface DependencyDiagnostics {
    invalidEntryPoints: InvalidEntryPoint[];
    ignoredDependencies: IgnoredDependency[];
}
/**
 * Represents a partially ordered list of entry-points.
 *
 * The entry-points' order/precedence is such that dependent entry-points always come later than
 * their dependencies in the list.
 *
 * See `DependencyResolver#sortEntryPointsByDependency()`.
 */
export declare type PartiallyOrderedEntryPoints = PartiallyOrderedList<EntryPoint>;
/**
 * A list of entry-points, sorted by their dependencies, and the dependency graph.
 *
 * The `entryPoints` array will be ordered so that no entry point depends upon an entry point that
 * appears later in the array.
 *
 * Some entry points or their dependencies may have been ignored. These are captured for
 * diagnostic purposes in `invalidEntryPoints` and `ignoredDependencies` respectively.
 */
export interface SortedEntryPointsInfo extends DependencyDiagnostics {
    entryPoints: PartiallyOrderedEntryPoints;
    graph: DepGraph<EntryPoint>;
}
/**
 * A class that resolves dependencies between entry-points.
 */
export declare class DependencyResolver {
    private fs;
    private logger;
    private config;
    private hosts;
    private typingsHost;
    constructor(fs: FileSystem, logger: Logger, config: NgccConfiguration, hosts: Partial<Record<EntryPointFormat, DependencyHost>>, typingsHost: DependencyHost);
    /**
     * Sort the array of entry points so that the dependant entry points always come later than
     * their dependencies in the array.
     * @param entryPoints An array entry points to sort.
     * @param target If provided, only return entry-points depended on by this entry-point.
     * @returns the result of sorting the entry points by dependency.
     */
    sortEntryPointsByDependency(entryPoints: EntryPointWithDependencies[], target?: EntryPoint): SortedEntryPointsInfo;
    getEntryPointWithDependencies(entryPoint: EntryPoint): EntryPointWithDependencies;
    /**
     * Computes a dependency graph of the given entry-points.
     *
     * The graph only holds entry-points that ngcc cares about and whose dependencies
     * (direct and transitive) all exist.
     */
    private computeDependencyGraph;
    private getEntryPointFormatInfo;
    /**
     * Filter out the deepImports that can be ignored, according to this entryPoint's config.
     */
    private filterIgnorableDeepImports;
}
