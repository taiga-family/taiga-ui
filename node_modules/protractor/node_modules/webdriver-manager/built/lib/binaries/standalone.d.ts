import { Binary, OS } from './binary';
export declare class Standalone extends Binary {
    static id: string;
    static isDefault: boolean;
    static os: OS[];
    static versionDefault: string;
    constructor(opt_alternativeCdn?: string);
    id(): string;
    prefix(): string;
    suffix(): string;
    executableSuffix(): string;
    getVersionList(): Promise<string[]>;
}
