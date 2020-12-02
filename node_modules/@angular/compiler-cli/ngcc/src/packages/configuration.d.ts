/// <amd-module name="@angular/compiler-cli/ngcc/src/packages/configuration" />
import { AbsoluteFsPath, FileSystem } from '../../../src/ngtsc/file_system';
import { PackageJsonFormatPropertiesMap } from './entry_point';
/**
 * The format of a project level configuration file.
 */
export interface NgccProjectConfig<T = NgccPackageConfig> {
    /**
     * The packages that are configured by this project config.
     */
    packages: {
        [packagePath: string]: T;
    };
}
/**
 * The format of a package level configuration file.
 */
export interface NgccPackageConfig {
    /**
     * The entry-points to configure for this package.
     *
     * In the config file the keys can be paths relative to the package path;
     * but when being read back from the `NgccConfiguration` service, these paths
     * will be absolute.
     */
    entryPoints: {
        [entryPointPath: string]: NgccEntryPointConfig;
    };
    /**
     * A collection of regexes that match deep imports to ignore, for this package, rather than
     * displaying a warning.
     */
    ignorableDeepImportMatchers?: RegExp[];
}
/**
 * Configuration options for an entry-point.
 *
 * The existence of a configuration for a path tells ngcc that this should be considered for
 * processing as an entry-point.
 */
export interface NgccEntryPointConfig {
    /** Do not process (or even acknowledge the existence of) this entry-point, if true. */
    ignore?: boolean;
    /**
     * This property, if provided, holds values that will override equivalent properties in an
     * entry-point's package.json file.
     */
    override?: PackageJsonFormatPropertiesMap;
    /**
     * Normally, ngcc will skip compilation of entrypoints that contain imports that can't be resolved
     * or understood. If this option is specified, ngcc will proceed with compiling the entrypoint
     * even in the face of such missing dependencies.
     */
    ignoreMissingDependencies?: boolean;
    /**
     * Enabling this option for an entrypoint tells ngcc that deep imports might be used for the files
     * it contains, and that it should generate private re-exports alongside the NgModule of all the
     * directives/pipes it makes available in support of those imports.
     */
    generateDeepReexports?: boolean;
}
/**
 * The default configuration for ngcc.
 *
 * This is the ultimate fallback configuration that ngcc will use if there is no configuration
 * for a package at the package level or project level.
 *
 * This configuration is for packages that are "dead" - i.e. no longer maintained and so are
 * unlikely to be fixed to work with ngcc, nor provide a package level config of their own.
 *
 * The fallback process for looking up configuration is:
 *
 * Project -> Package -> Default
 *
 * If a package provides its own configuration then that would override this default one.
 *
 * Also application developers can always provide configuration at their project level which
 * will override everything else.
 *
 * Note that the fallback is package based not entry-point based.
 * For example, if a there is configuration for a package at the project level this will replace all
 * entry-point configurations that may have been provided in the package level or default level
 * configurations, even if the project level configuration does not provide for a given entry-point.
 */
export declare const DEFAULT_NGCC_CONFIG: NgccProjectConfig;
interface VersionedPackageConfig extends NgccPackageConfig {
    versionRange: string;
}
/**
 * Ngcc has a hierarchical configuration system that lets us "fix up" packages that do not
 * work with ngcc out of the box.
 *
 * There are three levels at which configuration can be declared:
 *
 * * Default level - ngcc comes with built-in configuration for well known cases.
 * * Package level - a library author publishes a configuration with their package to fix known
 *   issues.
 * * Project level - the application developer provides a configuration that fixes issues specific
 *   to the libraries used in their application.
 *
 * Ngcc will match configuration based on the package name but also on its version. This allows
 * configuration to provide different fixes to different version ranges of a package.
 *
 * * Package level configuration is specific to the package version where the configuration is
 *   found.
 * * Default and project level configuration should provide version ranges to ensure that the
 *   configuration is only applied to the appropriate versions of a package.
 *
 * When getting a configuration for a package (via `getConfig()`) the caller should provide the
 * version of the package in question, if available. If it is not provided then the first available
 * configuration for a package is returned.
 */
export declare class NgccConfiguration {
    private fs;
    private defaultConfig;
    private projectConfig;
    private cache;
    readonly hash: string;
    constructor(fs: FileSystem, baseDir: AbsoluteFsPath);
    /**
     * Get a configuration for the given `version` of a package at `packagePath`.
     *
     * @param packagePath The path to the package whose config we want.
     * @param version The version of the package whose config we want, or `null` if the package's
     * package.json did not exist or was invalid.
     */
    getConfig(packagePath: AbsoluteFsPath, version: string | null): VersionedPackageConfig;
    private processProjectConfig;
    private loadProjectConfig;
    private loadPackageConfig;
    private evalSrcFile;
    private processEntryPoints;
    private splitPathAndVersion;
    private computeHash;
}
export {};
