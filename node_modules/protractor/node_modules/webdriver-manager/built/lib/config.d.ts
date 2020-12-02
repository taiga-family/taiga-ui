export interface ConfigFile {
    [key: string]: string;
    selenium?: string;
    chrome?: string;
    gecko?: string;
    ie?: string;
    android?: string;
    appium?: string;
    maxChrome?: string;
}
/**
 * The configuration for webdriver-manager
 *
 * The config.json, package.json, and selenium directory are found in the
 * same location at the root directory in webdriver-manager.
 *
 */
export declare class Config {
    static runCommand: string;
    static configFile: string;
    static packageFile: string;
    static nodeModuleName: string;
    static cwd: string;
    static localInstall: string;
    static parentPath: string;
    static dir: string;
    static folder: string;
    static isProjectVersion: boolean;
    static isLocalVersion: boolean;
    static osArch_: string;
    static osType_: string;
    static noProxy_: any;
    static httpsProxy_: any;
    static httpProxy_: any;
    static osArch(): string;
    static osType(): string;
    static noProxy(): string;
    static httpProxy(): string;
    static httpsProxy(): string;
    static getConfigFile_(): string;
    static getPackageFile_(): string;
    static getSeleniumDir(): string;
    static getBaseDir(): string;
    /**
     * Get the binary versions from the configuration file.
     * @returns A map of the versions defined in the configuration file.
     */
    static binaryVersions(): ConfigFile;
    /**
     * Get the CDN urls from the configuration file.
     * @returns A map of the CDN versions defined in the configuration file.
     */
    static cdnUrls(): ConfigFile;
    /**
     * Get the package version.
     */
    static getVersion(): string;
}
