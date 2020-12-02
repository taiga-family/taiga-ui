export interface Schema {
    /**
     * When true, update all packages in `package.json`.
     */
    all?: boolean;
    /**
     * When false (the default), reports an error if installed packages are incompatible with
     * the update.
     */
    force?: boolean;
    /**
     * When using `--migrateOnly` for a single package, the version of that package from which
     * to migrate.
     */
    from?: string;
    migrateExternal?: boolean;
    /**
     * Perform a migration, but do not update the installed version.
     */
    migrateOnly?: boolean;
    /**
     * Update to the latest version, including beta and RCs.
     */
    next?: boolean;
    /**
     * The preferred package manager configuration files to use for registry settings.
     */
    packageManager?: PackageManager;
    /**
     * The package or packages to update.
     */
    packages?: string[];
    /**
     * The npm registry to use.
     */
    registry?: string;
    /**
     * When using `--migrateOnly` for a single package, the version of that package to which to
     * migrate.
     */
    to?: string;
    /**
     * When true, display additional details during the update process.
     */
    verbose?: boolean;
}
/**
 * The preferred package manager configuration files to use for registry settings.
 */
export declare enum PackageManager {
    Cnpm = "cnpm",
    Npm = "npm",
    Pnpm = "pnpm",
    Yarn = "yarn"
}
