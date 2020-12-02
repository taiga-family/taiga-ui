import { ConfigSource } from './config_source';
/**
 * operating system enum
 */
export declare enum OS {
    Windows_NT = 0,
    Linux = 1,
    Darwin = 2,
}
export interface BinaryUrl {
    url: string;
    version: string;
}
/**
 * Dictionary to map the binary's id to the binary object
 */
export interface BinaryMap<T extends Binary> {
    [id: string]: T;
}
export declare abstract class Binary {
    static os: OS[];
    configSource: ConfigSource;
    ostype: string;
    osarch: string;
    alternativeDownloadUrl: string;
    cdn: string;
    name: string;
    versionDefault: string;
    versionCustom: string;
    constructor(opt_alternativeCdn?: string);
    abstract prefix(): string;
    abstract suffix(): string;
    executableSuffix(): string;
    version(): string;
    filename(): string;
    /**
     * @param ostype The operating system.
     * @returns The file name for the executable.
     */
    executableFilename(): string;
    /**
     * Gets the id of the binary.
     */
    abstract id(): string;
    /**
     * Gets the url to download the file set by the version. This will use the XML if available.
     * If not, it will download from an existing url.
     *
     * @param {string} version The version we are looking for. This could also be 'latest'.
     */
    getUrl(version?: string): Promise<BinaryUrl>;
    /**
     * Gets the list of available versions available based on the xml. If no XML exists, return an
     * empty list.
     */
    abstract getVersionList(): Promise<string[]>;
    /**
     * Delete an instance of this binary from the file system
     */
    remove(filename: string): void;
    /**
     * @param ostype The operating system.
     * @returns The file name for the file inside the downloaded zip file
     */
    zipContentName(): string;
}
