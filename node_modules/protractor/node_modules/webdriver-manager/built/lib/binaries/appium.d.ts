import { Binary, BinaryUrl, OS } from './binary';
/**
 * The appium binary.
 */
export declare class Appium extends Binary {
    static os: OS[];
    static id: string;
    static versionDefault: string;
    static isDefault: boolean;
    constructor(alternateCDN?: string);
    id(): string;
    prefix(): string;
    suffix(): string;
    executableSuffix(): string;
    getUrl(version?: string): Promise<BinaryUrl>;
    getVersionList(): Promise<string[]>;
    remove(sdkPath: string): void;
}
