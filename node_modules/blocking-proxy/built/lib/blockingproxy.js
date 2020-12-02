"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const angular_wait_barrier_1 = require("./angular_wait_barrier");
const highlight_delay_barrier_1 = require("./highlight_delay_barrier");
const simple_webdriver_client_1 = require("./simple_webdriver_client");
const webdriver_proxy_1 = require("./webdriver_proxy");
exports.BP_PREFIX = 'bpproxy';
/**
 * The stability proxy is an http server responsible for intercepting
 * JSON webdriver commands. It keeps track of whether the page under test
 * needs to wait for page stability, and initiates a wait if so.
 */
class BlockingProxy {
    constructor(seleniumAddress, highlightDelay = null) {
        this.server = http.createServer(this.requestListener.bind(this));
        this.proxy = new webdriver_proxy_1.WebDriverProxy(seleniumAddress);
        let client = new simple_webdriver_client_1.SimpleWebDriverClient(seleniumAddress);
        this.waitBarrier = new angular_wait_barrier_1.AngularWaitBarrier(client);
        this.highlightBarrier = new highlight_delay_barrier_1.HighlightDelayBarrier(client, highlightDelay);
        this.proxy.addBarrier(this.waitBarrier);
        this.proxy.addBarrier(this.highlightBarrier);
    }
    /**
     * This command is for the proxy server, not to be forwarded to Selenium.
     */
    static isProxyCommand(commandPath) {
        return (commandPath.split('/')[1] === exports.BP_PREFIX);
    }
    /**
     * Turn on WebDriver logging.
     *
     * @param logDir The directory to create logs in.
     */
    enableLogging(logDir) {
        this.waitBarrier.enableLogging(logDir);
    }
    /**
     * Override the logger instance. Only used for testing.
     */
    setLogger(logger) {
        this.waitBarrier.setLogger(logger);
    }
    /**
     * Change the parameters used by the wait function.
     */
    setWaitParams(rootEl) {
        this.waitBarrier.setRootSelector(rootEl);
    }
    handleProxyCommand(message, data, response) {
        let command = message.url.split('/')[2];
        switch (command) {
            case 'waitEnabled':
                if (message.method === 'GET') {
                    response.writeHead(200);
                    response.write(JSON.stringify({ value: this.waitBarrier.enabled }));
                    response.end();
                }
                else if (message.method === 'POST') {
                    response.writeHead(200);
                    this.waitBarrier.enabled = JSON.parse(data).value;
                    response.end();
                }
                else {
                    response.writeHead(405);
                    response.write('Invalid method');
                    response.end();
                }
                break;
            case 'waitParams':
                if (message.method === 'GET') {
                    response.writeHead(200);
                    response.write(JSON.stringify({ rootSelector: this.waitBarrier.rootSelector }));
                    response.end();
                }
                else if (message.method === 'POST') {
                    response.writeHead(200);
                    this.waitBarrier.rootSelector = JSON.parse(data).rootSelector;
                    response.end();
                }
                else {
                    response.writeHead(405);
                    response.write('Invalid method');
                    response.end();
                }
                break;
            default:
                response.writeHead(404);
                response.write('Unknown stabilizer proxy command');
                response.end();
        }
    }
    requestListener(originalRequest, response) {
        if (BlockingProxy.isProxyCommand(originalRequest.url)) {
            let commandData = '';
            originalRequest.on('data', (d) => {
                commandData += d;
            });
            originalRequest.on('end', () => {
                this.handleProxyCommand(originalRequest, commandData, response);
            });
            return;
        }
        // OK to ignore the promise returned by this.
        this.proxy.handleRequest(originalRequest, response);
    }
    listen(port) {
        this.server.listen(port);
        let actualPort = this.server.address().port;
        return actualPort;
    }
    quit() {
        return new Promise((resolve) => {
            this.server.close(resolve);
        });
    }
}
exports.BlockingProxy = BlockingProxy;
//# sourceMappingURL=blockingproxy.js.map