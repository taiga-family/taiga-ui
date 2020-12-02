import { Binary, OS } from './binary';
export declare class GeckoDriver extends Binary {
    static id: string;
    static isDefault: boolean;
    static os: OS[];
    static versionDefault: string;
    private static suffixes;
    constructor(opt_alternativeCdn?: string);
    id(): string;
    prefix(): string;
    suffix(): string;
    getVersionList(): Promise<string[]>;
}
