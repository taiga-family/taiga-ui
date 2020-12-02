import { Binary, BinaryUrl, OS } from './binary';
/**
 * The android sdk binary.
 */
export declare class AndroidSDK extends Binary {
    static os: OS[];
    static id: string;
    static versionDefault: string;
    static isDefault: boolean;
    static DEFAULT_API_LEVELS: string;
    static DEFAULT_ARCHITECTURES: string;
    static DEFAULT_PLATFORMS: string;
    static VERSIONS: {
        [api_level: number]: string;
    };
    constructor(alternateCDN?: string);
    id(): string;
    prefix(): string;
    suffix(): string;
    getUrl(): Promise<BinaryUrl>;
    getVersionList(): Promise<string[]>;
    url(ostype: string): string;
    zipContentName(): string;
    executableSuffix(): string;
    remove(sdkPath: string): void;
}
