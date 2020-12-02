export declare abstract class ConfigSource {
    ostype: string;
    osarch: string;
    out_dir: string;
    abstract getUrl(version: string): Promise<{
        url: string;
        version: string;
    }>;
    abstract getVersionList(): Promise<string[]>;
}
export declare abstract class XmlConfigSource extends ConfigSource {
    name: string;
    xmlUrl: string;
    constructor(name: string, xmlUrl: string);
    protected getFileName(): string;
    protected getXml(): Promise<any>;
    private readResponse();
    private requestXml();
    private convertXml2js(xml);
}
export declare abstract class JsonConfigSource extends ConfigSource {
    name: string;
    jsonUrl: string;
    constructor(name: string, jsonUrl: string);
    protected getFileName(): string;
    protected abstract getJson(): Promise<string>;
}
export declare abstract class GithubApiConfigSource extends JsonConfigSource {
    constructor(name: string, url: string);
    /**
     * This is an unauthenticated request and since Github limits the rate, we will cache this
     * to a file. { timestamp: number, response: response }. We will check the timestamp and renew
     * this request if the file is older than an hour.
     */
    getJson(): Promise<any>;
    private requestJson();
    private readResponse();
}
