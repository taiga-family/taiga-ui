export declare class BPClient {
    hostname: string;
    port: number;
    constructor(bpUrlValue: string);
    /**
     * Toggle whether waiting for Angular is enabled.
     *
     * @param enabled Whether or not to enable waiting for angular.
     * @returns {Promise<T>}
     */
    setWaitEnabled(enabled: boolean): Promise<any>;
    /**
     * Set the selector used to find the root element of the Angular application to wait for. See
     * AngularWaitBarrier for more details.
     *
     * @param selector A selector, or empty string to wait for all Angular apps.
     */
    setWaitParams(rootSelector: string): Promise<any>;
    isWaitEnabled(): Promise<{}>;
}
