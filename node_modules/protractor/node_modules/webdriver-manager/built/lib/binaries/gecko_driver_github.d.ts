import { BinaryUrl } from './binary';
import { GithubApiConfigSource } from './config_source';
export declare class GeckoDriverGithub extends GithubApiConfigSource {
    constructor();
    getUrl(version: string): Promise<BinaryUrl>;
    getVersionList(): Promise<string[]>;
    getVersionsLookup(): Promise<Array<{
        version: string;
        index: string;
    }>>;
    private getLatestGeckoDriverVersion();
    private getSpecificGeckoDrierVersion(inputVersion);
    private oshelper();
}
