import { LicenseTextOverrides } from './LicenseTextOverrides';
import { FileSystem } from './FileSystem';
import { Module } from './Module';
import { LicenseFileOverrides } from './LicenseFilesOverrides';
import { WebpackCompilation } from './WebpackCompilation';
import { Logger } from './Logger';
declare class LicenseTextReader {
    private logger;
    private fileSystem;
    private fileOverrides;
    private textOverrides;
    private templateDir;
    private handleMissingLicenseText;
    constructor(logger: Logger, fileSystem: FileSystem, fileOverrides: LicenseFileOverrides, textOverrides: LicenseTextOverrides, templateDir: string | undefined, handleMissingLicenseText: ((packageName: string, licenseType: string | null) => string | null));
    readLicense(compilation: WebpackCompilation, module: Module, licenseType: string | null): string | null;
    readText(directory: string, filename: string): string;
    private guessLicenseFilename(paths, modulePath);
}
export { LicenseTextReader };
