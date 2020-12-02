/// <reference types="node" />
import * as http from 'http';
import { AngularWaitBarrier } from './angular_wait_barrier';
import { HighlightDelayBarrier } from './highlight_delay_barrier';
import { WebDriverLogger } from './webdriver_logger';
export declare const BP_PREFIX = "bpproxy";
/**
 * The stability proxy is an http server responsible for intercepting
 * JSON webdriver commands. It keeps track of whether the page under test
 * needs to wait for page stability, and initiates a wait if so.
 */
export declare class BlockingProxy {
    server: http.Server;
    logger: WebDriverLogger;
    waitBarrier: AngularWaitBarrier;
    highlightBarrier: HighlightDelayBarrier;
    private proxy;
    constructor(seleniumAddress: string, highlightDelay?: number);
    /**
     * This command is for the proxy server, not to be forwarded to Selenium.
     */
    static isProxyCommand(commandPath: string): boolean;
    /**
     * Turn on WebDriver logging.
     *
     * @param logDir The directory to create logs in.
     */
    enableLogging(logDir: string): void;
    /**
     * Override the logger instance. Only used for testing.
     */
    setLogger(logger: WebDriverLogger): void;
    /**
     * Change the parameters used by the wait function.
     */
    setWaitParams(rootEl: any): void;
    handleProxyCommand(message: any, data: any, response: any): void;
    requestListener(originalRequest: http.IncomingMessage, response: http.ServerResponse): void;
    listen(port: number): number;
    quit(): Promise<{}>;
}
