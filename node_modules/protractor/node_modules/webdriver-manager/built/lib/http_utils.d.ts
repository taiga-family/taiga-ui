/// <reference types="request" />
import { OptionsWithUrl } from 'request';
export interface RequestOptionsValue {
    proxy?: string;
    ignoreSSL?: boolean;
}
export declare class HttpUtils {
    static requestOpts: RequestOptionsValue;
    static assignOptions(options: RequestOptionsValue): void;
    static initOptions(url: string, timeout?: number): OptionsWithUrl;
    static optionsSSL(options: OptionsWithUrl, opt_ignoreSSL: boolean): OptionsWithUrl;
    static optionsProxy(options: OptionsWithUrl, requestUrl: string, opt_proxy: string): OptionsWithUrl;
    static optionsHeader(options: OptionsWithUrl, key: string, value: string): OptionsWithUrl;
    /**
     * Resolves proxy based on values set
     * @param fileUrl The url to download the file.
     * @param opt_proxy The proxy to connect to to download files.
     * @return Either undefined or the proxy.
     */
    static resolveProxy(fileUrl: string, opt_proxy?: string): string;
}
/**
 * Request the body from the url.
 * @param requestUrl The request url.
 * @returns A promise string of the response body.
 */
export declare function requestBody(requestUrl: string): Promise<string>;
