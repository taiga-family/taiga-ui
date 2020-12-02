import { BinaryUrl } from './binary';
import { XmlConfigSource } from './config_source';
export declare class IEDriverXml extends XmlConfigSource {
    constructor();
    getUrl(version: string): Promise<BinaryUrl>;
    getVersionList(): Promise<string[]>;
    private getLatestIEDriverVersion();
    private getSpecificIEDriverVersion(inputVersion);
}
