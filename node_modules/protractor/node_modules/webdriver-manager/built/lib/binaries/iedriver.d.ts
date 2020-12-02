import { Binary, OS } from './binary';
export declare class IEDriver extends Binary {
    static id: string;
    static isDefault32: boolean;
    static isDefault64: boolean;
    static os: OS[];
    static versionDefault: string;
    constructor(opt_alternativeCdn?: string);
    id(): string;
    prefix(): string;
    suffix(): string;
    getVersionList(): Promise<string[]>;
}
