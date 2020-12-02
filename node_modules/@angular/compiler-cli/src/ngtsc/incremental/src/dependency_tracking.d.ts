/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/incremental/src/dependency_tracking" />
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../../file_system';
import { DependencyTracker } from '../api';
/**
 * An implementation of the `DependencyTracker` dependency graph API.
 *
 * The `FileDependencyGraph`'s primary job is to determine whether a given file has "logically"
 * changed, given the set of physical changes (direct changes to files on disk).
 *
 * A file is logically changed if at least one of three conditions is met:
 *
 * 1. The file itself has physically changed.
 * 2. One of its dependencies has physically changed.
 * 3. One of its resource dependencies has physically changed.
 */
export declare class FileDependencyGraph<T extends {
    fileName: string;
} = ts.SourceFile> implements DependencyTracker<T> {
    private nodes;
    addDependency(from: T, on: T): void;
    addResourceDependency(from: T, resource: AbsoluteFsPath): void;
    addTransitiveDependency(from: T, on: T): void;
    addTransitiveResources(from: T, resourcesOf: T): void;
    isStale(sf: T, changedTsPaths: Set<string>, changedResources: Set<AbsoluteFsPath>): boolean;
    /**
     * Update the current dependency graph from a previous one, incorporating a set of physical
     * changes.
     *
     * This method performs two tasks:
     *
     * 1. For files which have not logically changed, their dependencies from `previous` are added to
     *    `this` graph.
     * 2. For files which have logically changed, they're added to a set of logically changed files
     *    which is eventually returned.
     *
     * In essence, for build `n`, this method performs:
     *
     * G(n) + L(n) = G(n - 1) + P(n)
     *
     * where:
     *
     * G(n) = the dependency graph of build `n`
     * L(n) = the logically changed files from build n - 1 to build n.
     * P(n) = the physically changed files from build n - 1 to build n.
     */
    updateWithPhysicalChanges(previous: FileDependencyGraph<T>, changedTsPaths: Set<string>, deletedTsPaths: Set<string>, changedResources: Set<AbsoluteFsPath>): Set<string>;
    private nodeFor;
}
