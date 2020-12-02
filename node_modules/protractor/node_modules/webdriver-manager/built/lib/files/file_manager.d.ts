import { Binary, BinaryMap } from '../binaries';
import { DownloadedBinary } from './downloaded_binary';
/**
 * The File Manager class is where the webdriver manager will compile a list of
 * binaries that could be downloaded and get a list of previously downloaded
 * file versions.
 */
export declare class FileManager {
    /**
     * Create a directory if it does not exist.
     * @param outputDir The directory to create.
     */
    static makeOutputDirectory(outputDir: string): void;
    /**
     * For the operating system, check against the list of operating systems that the
     * binary is available for.
     * @param osType The operating system.
     * @param binary The class type to have access to the static properties.
     * @returns If the binary is available for the operating system.
     */
    static checkOS_(osType: string, binary: typeof Binary): boolean;
    /**
     * For the operating system, create a list that includes the binaries
     * for selenium standalone, chrome, and internet explorer.
     * @param osType The operating system.
     * @param alternateCDN URL of the alternative CDN to be used instead of the default ones.
     * @returns A binary map that are available for the operating system.
     */
    static compileBinaries_(osType: string, alternateCDN?: string): BinaryMap<Binary>;
    /**
     * Look up the operating system and compile a list of binaries that are available
     * for the system.
     * @param alternateCDN URL of the alternative CDN to be used instead of the default ones.
     * @returns A binary map that is available for the operating system.
     */
    static setupBinaries(alternateCDN?: string): BinaryMap<Binary>;
    /**
     * Get the list of existing files from the output directory
     * @param outputDir The directory where binaries are saved
     * @returns A list of existing files.
     */
    static getExistingFiles(outputDir: string): string[];
    /**
     * For the binary, operating system, and system architecture, look through
     * the existing files and the downloaded binary
     * @param binary The binary of interest
     * @param osType The operating system.
     * @param existingFiles A list of existing files.
     * @returns The downloaded binary with all the versions found.
     */
    static downloadedVersions_<T extends Binary>(binary: T, osType: string, arch: string, existingFiles: string[]): DownloadedBinary;
    /**
     * Finds all the downloaded binary versions stored in the output directory.
     * @param outputDir The directory where files are downloaded and stored.
     * @returns An dictionary map of all the downloaded binaries found in the output folder.
     */
    static downloadedBinaries(outputDir: string): BinaryMap<DownloadedBinary>;
    /**
     * Try to download the binary version.
     * @param binary The binary of interest.
     * @param outputDir The directory where files are downloaded and stored.
     * @returns Promise resolved to true for files downloaded, resolved to false for files not
     *          downloaded because they exist, rejected if there is an error.
     */
    static downloadFile<T extends Binary>(binary: T, outputDir: string, callback?: Function): Promise<boolean>;
    /**
     * Removes the existing files found in the output directory that match the
     * binary prefix names.
     * @param outputDir The directory where files are downloaded and stored.
     */
    static removeExistingFiles(outputDir: string): void;
}
