"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const binaries_1 = require("../binaries");
const cli_1 = require("../cli");
const config_1 = require("../config");
const downloaded_binary_1 = require("./downloaded_binary");
const downloader_1 = require("./downloader");
let logger = new cli_1.Logger('file_manager');
/**
 * The File Manager class is where the webdriver manager will compile a list of
 * binaries that could be downloaded and get a list of previously downloaded
 * file versions.
 */
class FileManager {
    /**
     * Create a directory if it does not exist.
     * @param outputDir The directory to create.
     */
    static makeOutputDirectory(outputDir) {
        try {
            fs.statSync(outputDir);
        }
        catch (e) {
            logger.info('creating folder ' + outputDir);
            fs.mkdirSync(outputDir);
        }
    }
    /**
     * For the operating system, check against the list of operating systems that the
     * binary is available for.
     * @param osType The operating system.
     * @param binary The class type to have access to the static properties.
     * @returns If the binary is available for the operating system.
     */
    static checkOS_(osType, binary) {
        for (let os in binary.os) {
            if (binaries_1.OS[os] == osType) {
                return true;
            }
        }
        return false;
    }
    /**
     * For the operating system, create a list that includes the binaries
     * for selenium standalone, chrome, and internet explorer.
     * @param osType The operating system.
     * @param alternateCDN URL of the alternative CDN to be used instead of the default ones.
     * @returns A binary map that are available for the operating system.
     */
    static compileBinaries_(osType, alternateCDN) {
        let binaries = {};
        if (FileManager.checkOS_(osType, binaries_1.Standalone)) {
            binaries[binaries_1.Standalone.id] = new binaries_1.Standalone(alternateCDN);
        }
        if (FileManager.checkOS_(osType, binaries_1.ChromeDriver)) {
            binaries[binaries_1.ChromeDriver.id] = new binaries_1.ChromeDriver(alternateCDN);
        }
        if (FileManager.checkOS_(osType, binaries_1.GeckoDriver)) {
            binaries[binaries_1.GeckoDriver.id] = new binaries_1.GeckoDriver(alternateCDN);
        }
        if (FileManager.checkOS_(osType, binaries_1.IEDriver)) {
            binaries[binaries_1.IEDriver.id] = new binaries_1.IEDriver(alternateCDN);
        }
        if (FileManager.checkOS_(osType, binaries_1.AndroidSDK)) {
            binaries[binaries_1.AndroidSDK.id] = new binaries_1.AndroidSDK(alternateCDN);
        }
        if (FileManager.checkOS_(osType, binaries_1.Appium)) {
            binaries[binaries_1.Appium.id] = new binaries_1.Appium(alternateCDN);
        }
        return binaries;
    }
    /**
     * Look up the operating system and compile a list of binaries that are available
     * for the system.
     * @param alternateCDN URL of the alternative CDN to be used instead of the default ones.
     * @returns A binary map that is available for the operating system.
     */
    static setupBinaries(alternateCDN) {
        return FileManager.compileBinaries_(config_1.Config.osType(), alternateCDN);
    }
    /**
     * Get the list of existing files from the output directory
     * @param outputDir The directory where binaries are saved
     * @returns A list of existing files.
     */
    static getExistingFiles(outputDir) {
        try {
            return fs.readdirSync(outputDir);
        }
        catch (e) {
            return [];
        }
    }
    /**
     * For the binary, operating system, and system architecture, look through
     * the existing files and the downloaded binary
     * @param binary The binary of interest
     * @param osType The operating system.
     * @param existingFiles A list of existing files.
     * @returns The downloaded binary with all the versions found.
     */
    static downloadedVersions_(binary, osType, arch, existingFiles) {
        let versions = [];
        for (let existPos in existingFiles) {
            let existFile = existingFiles[existPos];
            // use only files that have a prefix and suffix that we care about
            if (existFile.indexOf(binary.prefix()) === 0) {
                let editExistFile = existFile.replace(binary.prefix(), '');
                // if the suffix matches the executable suffix, add it
                if (binary.suffix() === binary.executableSuffix()) {
                    versions.push(editExistFile.replace(binary.suffix(), ''));
                }
                else if (!existFile.endsWith('.zip') && !existFile.endsWith('.tar.gz') &&
                    existFile.indexOf(binary.suffix()) === -1) {
                    editExistFile = editExistFile.replace(binary.executableSuffix(), '');
                    editExistFile = editExistFile.indexOf('_') === 0 ?
                        editExistFile.substring(1, editExistFile.length) :
                        editExistFile;
                    versions.push(editExistFile);
                }
            }
        }
        if (versions.length === 0) {
            return null;
        }
        let downloadedBinary = new downloaded_binary_1.DownloadedBinary(binary);
        downloadedBinary.versions = versions;
        return downloadedBinary;
    }
    /**
     * Finds all the downloaded binary versions stored in the output directory.
     * @param outputDir The directory where files are downloaded and stored.
     * @returns An dictionary map of all the downloaded binaries found in the output folder.
     */
    static downloadedBinaries(outputDir) {
        let ostype = config_1.Config.osType();
        let arch = config_1.Config.osArch();
        let binaries = FileManager.setupBinaries();
        let existingFiles = FileManager.getExistingFiles(outputDir);
        let downloaded = {};
        for (let bin in binaries) {
            let binary = FileManager.downloadedVersions_(binaries[bin], ostype, arch, existingFiles);
            if (binary != null) {
                downloaded[binary.id()] = binary;
            }
        }
        return downloaded;
    }
    /**
     * Try to download the binary version.
     * @param binary The binary of interest.
     * @param outputDir The directory where files are downloaded and stored.
     * @returns Promise resolved to true for files downloaded, resolved to false for files not
     *          downloaded because they exist, rejected if there is an error.
     */
    static downloadFile(binary, outputDir, callback) {
        return new Promise((resolve, reject) => {
            let outDir = config_1.Config.getSeleniumDir();
            let downloaded = FileManager.downloadedBinaries(outputDir);
            let contentLength = 0;
            // Pass options down to binary to make request to get the latest version to download.
            binary.getUrl(binary.version()).then(fileUrl => {
                binary.versionCustom = fileUrl.version;
                let filePath = path.resolve(outputDir, binary.filename());
                let fileName = binary.filename();
                // If we have downloaded the file before, check the content length
                if (downloaded[binary.id()]) {
                    let downloadedBinary = downloaded[binary.id()];
                    let versions = downloadedBinary.versions;
                    let version = binary.versionCustom;
                    for (let index in versions) {
                        let v = versions[index];
                        if (v === version) {
                            contentLength = fs.statSync(filePath).size;
                            downloader_1.Downloader.getFile(binary, fileUrl.url, fileName, outputDir, contentLength, callback)
                                .then(downloaded => {
                                resolve(downloaded);
                            });
                        }
                    }
                }
                // We have not downloaded it before, or the version does not exist. Use the default content
                // length of zero and download the file.
                downloader_1.Downloader.getFile(binary, fileUrl.url, fileName, outputDir, contentLength, callback)
                    .then(downloaded => {
                    resolve(downloaded);
                });
            });
        });
    }
    /**
     * Removes the existing files found in the output directory that match the
     * binary prefix names.
     * @param outputDir The directory where files are downloaded and stored.
     */
    static removeExistingFiles(outputDir) {
        try {
            fs.statSync(outputDir);
        }
        catch (e) {
            logger.warn('path does not exist ' + outputDir);
            return;
        }
        let existingFiles = FileManager.getExistingFiles(outputDir);
        if (existingFiles.length === 0) {
            logger.warn('no files found in path ' + outputDir);
            return;
        }
        let binaries = FileManager.setupBinaries();
        existingFiles.forEach((file) => {
            for (let binPos in binaries) {
                let bin = binaries[binPos];
                if (file.indexOf(bin.prefix()) !== -1) {
                    bin.remove(path.resolve(outputDir, file));
                    logger.info('removed ' + file);
                }
            }
        });
        let metaFiles = [
            'chrome-response.xml', 'gecko-response.json', 'iedriver-response.xml',
            'standalone-response.xml', 'update-config.json'
        ];
        for (let metaFile of metaFiles) {
            try {
                let metaFilePath = path.resolve(outputDir, metaFile);
                if (fs.statSync(metaFilePath)) {
                    fs.unlinkSync(metaFilePath);
                    logger.info('removed ' + metaFile);
                }
            }
            catch (e) {
            }
        }
    }
}
exports.FileManager = FileManager;
//# sourceMappingURL=file_manager.js.map