#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require("minimist");
const opts = {
    boolean: ['help', 'fork'],
    string: ['port', 'seleniumAddress', 'highlightDelay', 'logDir'],
    alias: {
        help: ['h'],
        port: ['p'],
        seleniumAddress: ['s'],
    },
    default: {
        port: process.env.BP_PORT || 0,
        seleniumAddress: process.env.BP_SELENIUM_ADDRESS || 'http://localhost:4444/wd/hub',
    }
};
function processArgs(argv) {
    return minimist(argv, opts);
}
exports.processArgs = processArgs;
function printHelp() {
    console.log(`
Usage: blocking-proxy <options>

Options:
    --help, -h              Show help.
    --port, -p              The port to listen on. If unset, will choose a random free port.
    --fork                  Start in fork mode. BlockingProxy will use process.send() to communicate
                                with the parent process.
    --selenumAddress, -s    The address of the selenium remote server to proxy.
    --highlightDelay        If specified, will highlight elements before interacting with them and 
                                wait the specified amount of time (in ms) before allowing WebDriver
                                to continue.
    --logDir                If specified, will create a log of WebDriver commands in this directory.
    --rootElement           Element housing ng-app, if not html or body.
`);
}
exports.printHelp = printHelp;
//# sourceMappingURL=config.js.map