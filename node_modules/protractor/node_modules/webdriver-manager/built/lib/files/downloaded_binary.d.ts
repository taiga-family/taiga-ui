import { Binary, BinaryUrl } from '../binaries';
/**
 * The downloaded binary is the binary with the list of versions downloaded.
 */
export declare class DownloadedBinary extends Binary {
    versions: string[];
    binary: Binary;
    constructor(binary: Binary);
    id(): string;
    prefix(): string;
    suffix(): string;
    getUrl(): Promise<BinaryUrl>;
    getVersionList(): Promise<string[]>;
}
