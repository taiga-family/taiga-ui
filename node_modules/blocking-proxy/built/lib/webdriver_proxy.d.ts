/// <reference types="node" />
import * as http from 'http';
import { WebDriverCommand } from './webdriver_commands';
/**
 * A proxy that understands WebDriver commands. Users can add barriers (similar to middleware in
 * express) that will be called before forwarding the request to WebDriver. The proxy will wait for
 * each barrier to finish, calling them in the order in which they were added.
 */
export declare class WebDriverProxy {
    barriers: WebDriverBarrier[];
    seleniumAddress: string;
    constructor(seleniumAddress: string);
    addBarrier(barrier: WebDriverBarrier): void;
    handleRequest(originalRequest: http.IncomingMessage, response: http.ServerResponse): Promise<void>;
}
/**
 * When the proxy receives a WebDriver command, it will call onCommand() for each of it's barriers.
 * Barriers may return a promise for the proxy to wait for before proceeding. If the promise is
 * rejected, the proxy will reply with an error code and the result of the promise and the command
 * will not be forwarded to Selenium.
 */
export interface WebDriverBarrier {
    onCommand(command: WebDriverCommand): Promise<void>;
}
