import { BinaryUrl } from './binary';
import { XmlConfigSource } from './config_source';
export declare class ChromeXml extends XmlConfigSource {
    maxVersion: string;
    constructor();
    getUrl(version: string): Promise<BinaryUrl>;
    /**
     * Get a list of chrome drivers paths available for the configuration OS type and architecture.
     */
    getVersionList(): Promise<string[]>;
    /**
     * Helper method, gets the ostype and gets the name used by the XML
     */
    getOsTypeName(): string;
    /**
     * Gets the latest item from the XML.
     */
    private getLatestChromeDriverVersion();
    /**
     * Gets a specific item from the XML.
     */
    private getSpecificChromeDriverVersion(inputVersion);
}
/**
 * Chromedriver is the only binary that does not conform to semantic versioning
 * and either has too little number of digits or too many. To get this to be in
 * semver, we will either add a '.0' at the end or chop off the last set of
 * digits. This is so we can compare to find the latest and greatest.
 *
 * Example:
 *   2.46 -> 2.46.0
 *   75.0.3770.8 -> 75.0.3770
 *
 * @param version
 */
export declare function getValidSemver(version: string): string;
