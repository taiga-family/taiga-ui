/**
 * TSlint target options for Build Facade.
 */
export interface Schema {
    /**
     * Files to exclude from linting.
     */
    exclude?: string[];
    /**
     * Files to include in linting.
     */
    files?: string[];
    /**
     * Fixes linting errors (may overwrite linted files).
     */
    fix?: boolean;
    /**
     * Succeeds even if there was linting errors.
     */
    force?: boolean;
    /**
     * Output format (prose, json, stylish, verbose, pmd, msbuild, checkstyle, vso, fileslist).
     */
    format?: string;
    /**
     * Show output text.
     */
    silent?: boolean;
    /**
     * The name of the TypeScript configuration file.
     */
    tsConfig?: TsConfig;
    /**
     * The name of the TSLint configuration file.
     */
    tslintConfig?: string;
    /**
     * Controls the type check for linting.
     */
    typeCheck?: boolean;
}
/**
 * The name of the TypeScript configuration file.
 */
export declare type TsConfig = string[] | string;
