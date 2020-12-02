/// <amd-module name="@angular/compiler-cli/ngcc/src/dependencies/module_resolver" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteFsPath, FileSystem } from '../../../src/ngtsc/file_system';
import { PathMappings } from '../path_mappings';
/**
 * This is a very cut-down implementation of the TypeScript module resolution strategy.
 *
 * It is specific to the needs of ngcc and is not intended to be a drop-in replacement
 * for the TS module resolver. It is used to compute the dependencies between entry-points
 * that may be compiled by ngcc.
 *
 * The algorithm only finds `.js` files for internal/relative imports and paths to
 * the folder containing the `package.json` of the entry-point for external imports.
 *
 * It can cope with nested `node_modules` folders and also supports `paths`/`baseUrl`
 * configuration properties, as provided in a `ts.CompilerOptions` object.
 */
export declare class ModuleResolver {
    private fs;
    readonly relativeExtensions: string[];
    private pathMappings;
    constructor(fs: FileSystem, pathMappings?: PathMappings, relativeExtensions?: string[]);
    /**
     * Resolve an absolute path for the `moduleName` imported into a file at `fromPath`.
     * @param moduleName The name of the import to resolve.
     * @param fromPath The path to the file containing the import.
     * @returns A path to the resolved module or null if missing.
     * Specifically:
     *  * the absolute path to the package.json of an external module
     *  * a JavaScript file of an internal module
     *  * null if none exists.
     */
    resolveModuleImport(moduleName: string, fromPath: AbsoluteFsPath): ResolvedModule | null;
    /**
     * Convert the `pathMappings` into a collection of `PathMapper` functions.
     */
    private processPathMappings;
    /**
     * Try to resolve a module name, as a relative path, from the `fromPath`.
     *
     * As it is relative, it only looks for files that end in one of the `relativeExtensions`.
     * For example: `${moduleName}.js` or `${moduleName}/index.js`.
     * If neither of these files exist then the method returns `null`.
     */
    private resolveAsRelativePath;
    /**
     * Try to resolve the `moduleName`, by applying the computed `pathMappings` and
     * then trying to resolve the mapped path as a relative or external import.
     *
     * Whether the mapped path is relative is defined as it being "below the `fromPath`" and not
     * containing `node_modules`.
     *
     * If the mapped path is not relative but does not resolve to an external entry-point, then we
     * check whether it would have resolved to a relative path, in which case it is marked as a
     * "deep-import".
     */
    private resolveByPathMappings;
    /**
     * Try to resolve the `moduleName` as an external entry-point by searching the `node_modules`
     * folders up the tree for a matching `.../node_modules/${moduleName}`.
     *
     * If a folder is found but the path does not contain a `package.json` then it is marked as a
     * "deep-import".
     */
    private resolveAsEntryPoint;
    /**
     * Can we consider the given path as an entry-point to a package?
     *
     * This is achieved by checking for the existence of `${modulePath}/package.json`.
     */
    private isEntryPoint;
    /**
     * Apply the `pathMappers` to the `moduleName` and return all the possible
     * paths that match.
     *
     * The mapped path is computed for each template in `mapping.templates` by
     * replacing the `matcher.prefix` and `matcher.postfix` strings in `path with the
     * `template.prefix` and `template.postfix` strings.
     */
    private findMappedPaths;
    /**
     * Attempt to find a mapped path for the given `path` and a `mapping`.
     *
     * The `path` matches the `mapping` if if it starts with `matcher.prefix` and ends with
     * `matcher.postfix`.
     *
     * @returns the wildcard segment of a matched `path`, or `null` if no match.
     */
    private matchMapping;
    /**
     * Compute the candidate paths from the given mapping's templates using the matched
     * string.
     */
    private computeMappedTemplates;
    /**
     * Search up the folder tree for the first folder that contains `package.json`
     * or `null` if none is found.
     */
    private findPackagePath;
}
/** The result of resolving an import to a module. */
export declare type ResolvedModule = ResolvedExternalModule | ResolvedRelativeModule | ResolvedDeepImport;
/**
 * A module that is external to the package doing the importing.
 * In this case we capture the folder containing the entry-point.
 */
export declare class ResolvedExternalModule {
    entryPointPath: AbsoluteFsPath;
    constructor(entryPointPath: AbsoluteFsPath);
}
/**
 * A module that is relative to the module doing the importing, and so internal to the
 * source module's package.
 */
export declare class ResolvedRelativeModule {
    modulePath: AbsoluteFsPath;
    constructor(modulePath: AbsoluteFsPath);
}
/**
 * A module that is external to the package doing the importing but pointing to a
 * module that is deep inside a package, rather than to an entry-point of the package.
 */
export declare class ResolvedDeepImport {
    importPath: AbsoluteFsPath;
    constructor(importPath: AbsoluteFsPath);
}
