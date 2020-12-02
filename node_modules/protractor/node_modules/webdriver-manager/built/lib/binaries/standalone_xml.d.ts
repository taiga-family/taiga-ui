import { BinaryUrl } from './binary';
import { XmlConfigSource } from './config_source';
export declare class StandaloneXml extends XmlConfigSource {
    constructor();
    getUrl(version: string): Promise<BinaryUrl>;
    getVersionList(): Promise<string[]>;
    private getLatestStandaloneVersion();
    private getSpecificStandaloneVersion(inputVersion);
}
