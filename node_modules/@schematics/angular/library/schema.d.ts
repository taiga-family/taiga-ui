/**
 * Creates a new generic library project in the current workspace.
 */
export interface Schema {
    /**
     * The path at which to create the library's public API file, relative to the workspace root.
     */
    entryFile?: string;
    /**
     * When true, applies lint fixes after generating the library.
     */
    lintFix?: boolean;
    /**
     * The name of the library.
     */
    name?: string;
    /**
     * A prefix to apply to generated selectors.
     */
    prefix?: string;
    /**
     * When true, does not install dependency packages.
     */
    skipInstall?: boolean;
    /**
     * When true, does not add dependencies to the "package.json" file.
     */
    skipPackageJson?: boolean;
    /**
     * When true, does not update "tsconfig.json" to add a path mapping for the new library. The
     * path mapping is needed to use the library in an app, but can be disabled here to simplify
     * development.
     */
    skipTsConfig?: boolean;
}
