import { Config } from './config';
export declare class ConfigParser {
    private config_;
    constructor();
    /**
     * Resolve a list of file patterns into a list of individual file paths.
     *
     * @param {Array.<string> | string} patterns
     * @param {=boolean} opt_omitWarnings Whether to omit did not match warnings
     * @param {=string} opt_relativeTo Path to resolve patterns against
     *
     * @return {Array} The resolved file paths.
     */
    static resolveFilePatterns(patterns: string[] | string, opt_omitWarnings?: boolean, opt_relativeTo?: string): string[];
    /**
     * Returns only the specs that should run currently based on `config.suite`
     *
     * @return {Array} An array of globs locating the spec files
     */
    static getSpecs(config: Config): string[];
    /**
     * Add the options in the parameter config to this runner instance.
     *
     * @private
     * @param {Object} additionalConfig
     * @param {string} relativeTo the file path to resolve paths against
     */
    private addConfig_(additionalConfig, relativeTo);
    /**
     * Public function specialized towards merging in a file's config
     *
     * @public
     * @param {String} filename
     */
    addFileConfig(filename: string): ConfigParser;
    /**
     * Public function specialized towards merging in config from argv
     *
     * @public
     * @param {Object} argv
     */
    addConfig(argv: any): ConfigParser;
    /**
     * Public getter for the final, computed config object
     *
     * @public
     * @return {Object} config
     */
    getConfig(): Config;
}
