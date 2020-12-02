/**
 * Karma target options for Build Facade.
 */
export interface Schema {
    /**
     * List of static application assets.
     */
    assets?: AssetPattern[];
    /**
     * Override which browsers tests are run against.
     */
    browsers?: string;
    /**
     * Output a code coverage report.
     */
    codeCoverage?: boolean;
    /**
     * Globs to exclude from code coverage.
     */
    codeCoverageExclude?: string[];
    /**
     * Defines the build environment.
     * @deprecated This option has no effect.
     */
    environment?: string;
    /**
     * Output in-file eval sourcemaps.
     * @deprecated
     */
    evalSourceMap?: boolean;
    /**
     * Replace files with other files in the build.
     */
    fileReplacements?: FileReplacement[];
    /**
     * Globs of files to include, relative to workspace or project root.
     * There are 2 special cases:
     * - when a path to directory is provided, all spec files ending ".spec.@(ts|tsx)" will be
     * included
     * - when a path to a file is provided, and a matching spec file exists it will be included
     * instead
     */
    include?: string[];
    /**
     * The name of the Karma configuration file.
     */
    karmaConfig: string;
    /**
     * The name of the main entry-point file.
     */
    main: string;
    /**
     * Enable and define the file watching poll time period in milliseconds.
     */
    poll?: number;
    /**
     * The name of the polyfills file.
     */
    polyfills?: string;
    /**
     * Do not use the real path when resolving modules.
     */
    preserveSymlinks?: boolean;
    /**
     * Log progress to the console while building.
     */
    progress?: boolean;
    /**
     * Karma reporters to use. Directly passed to the karma runner.
     */
    reporters?: string[];
    /**
     * Global scripts to be included in the build.
     */
    scripts?: ExtraEntryPoint[];
    /**
     * Output sourcemaps.
     */
    sourceMap?: SourceMapUnion;
    /**
     * Options to pass to style preprocessors
     */
    stylePreprocessorOptions?: StylePreprocessorOptions;
    /**
     * Global styles to be included in the build.
     */
    styles?: ExtraEntryPoint[];
    /**
     * The name of the TypeScript configuration file.
     */
    tsConfig: string;
    /**
     * Resolve vendor packages sourcemaps.
     * @deprecated
     */
    vendorSourceMap?: boolean;
    /**
     * Run build when files change.
     */
    watch?: boolean;
    /**
     * TypeScript configuration for Web Worker modules.
     */
    webWorkerTsConfig?: string;
}
export declare type AssetPattern = AssetPatternClass | string;
export interface AssetPatternClass {
    /**
     * The pattern to match.
     */
    glob: string;
    /**
     * An array of globs to ignore.
     */
    ignore?: string[];
    /**
     * The input directory path in which to apply 'glob'. Defaults to the project root.
     */
    input: string;
    /**
     * Absolute path within the output.
     */
    output: string;
}
export interface FileReplacement {
    replace?: string;
    replaceWith?: string;
    src?: string;
    with?: string;
}
export declare type ExtraEntryPoint = ExtraEntryPointClass | string;
export interface ExtraEntryPointClass {
    /**
     * The bundle name for this extra entry point.
     */
    bundleName?: string;
    /**
     * If the bundle will be referenced in the HTML file.
     */
    inject?: boolean;
    /**
     * The file to include.
     */
    input: string;
    /**
     * If the bundle will be lazy loaded.
     */
    lazy?: boolean;
}
/**
 * Output sourcemaps.
 */
export declare type SourceMapUnion = boolean | SourceMapClass;
export interface SourceMapClass {
    /**
     * Output sourcemaps for all scripts.
     */
    scripts?: boolean;
    /**
     * Output sourcemaps for all styles.
     */
    styles?: boolean;
    /**
     * Resolve vendor packages sourcemaps.
     */
    vendor?: boolean;
}
/**
 * Options to pass to style preprocessors
 */
export interface StylePreprocessorOptions {
    /**
     * Paths to include. Paths will be resolved to project root.
     */
    includePaths?: string[];
}
