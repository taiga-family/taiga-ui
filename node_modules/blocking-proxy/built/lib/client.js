"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const url = require("url");
const blockingproxy_1 = require("./blockingproxy");
class BPClient {
    constructor(bpUrlValue) {
        let bpUrl = url.parse(bpUrlValue);
        this.hostname = bpUrl.hostname;
        this.port = parseInt(bpUrl.port);
    }
    /**
     * Toggle whether waiting for Angular is enabled.
     *
     * @param enabled Whether or not to enable waiting for angular.
     * @returns {Promise<T>}
     */
    setWaitEnabled(enabled) {
        return new Promise((resolve, reject) => {
            let options = { host: this.hostname, port: this.port, method: 'POST', path: `/${blockingproxy_1.BP_PREFIX}/waitEnabled` };
            let request = http.request(options, (response) => {
                response.on('data', () => { });
                response.on('error', (err) => reject(err));
                response.on('end', () => {
                    resolve();
                });
            });
            request.write(JSON.stringify({ value: enabled }));
            request.end();
        });
    }
    /**
     * Set the selector used to find the root element of the Angular application to wait for. See
     * AngularWaitBarrier for more details.
     *
     * @param selector A selector, or empty string to wait for all Angular apps.
     */
    setWaitParams(rootSelector) {
        return new Promise((resolve, reject) => {
            let options = { host: this.hostname, port: this.port, method: 'POST', path: `/${blockingproxy_1.BP_PREFIX}/waitParams` };
            let request = http.request(options, (response) => {
                response.on('data', () => { });
                response.on('error', (err) => reject(err));
                response.on('end', () => {
                    resolve();
                });
            });
            request.write(JSON.stringify({ rootSelector: rootSelector }));
            request.end();
        });
    }
    isWaitEnabled() {
        return new Promise((res) => {
            let options = { host: this.hostname, port: this.port, path: `/${blockingproxy_1.BP_PREFIX}/waitEnabled` };
            http.get(options, (response) => {
                let body = '';
                response.on('data', (data) => {
                    body += data;
                });
                response.on('end', () => {
                    res(JSON.parse(body).value);
                });
            });
        });
    }
}
exports.BPClient = BPClient;
//# sourceMappingURL=client.js.map