/// <amd-module name="@angular/compiler-cli/ngcc/src/dependencies/commonjs_dependency_host" />
import { AbsoluteFsPath } from '../../../src/ngtsc/file_system';
import { DependencyHostBase } from './dependency_host';
/**
 * Helper functions for computing dependencies.
 */
export declare class CommonJsDependencyHost extends DependencyHostBase {
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
    protected recursivelyCollectDependencies(file: AbsoluteFsPath, dependencies: Set<AbsoluteFsPath>, missing: Set<string>, deepImports: Set<AbsoluteFsPath>, alreadySeen: Set<AbsoluteFsPath>): void;
    /**
     * Check whether a source file needs to be parsed for imports.
     * This is a performance short-circuit, which saves us from creating
     * a TypeScript AST unnecessarily.
     *
     * @param source The content of the source file to check.
     *
     * @returns false if there are definitely no require calls
     * in this file, true otherwise.
     */
    private hasRequireCalls;
}
