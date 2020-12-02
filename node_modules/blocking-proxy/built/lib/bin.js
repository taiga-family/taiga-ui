#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockingproxy_1 = require("./blockingproxy");
const config_1 = require("./config");
/**
 * Starts up a proxy server which modifies calls between the test process
 * and the selenium server.
 */
const argv = config_1.processArgs(process.argv.slice(2));
if (argv.help) {
    config_1.printHelp();
    process.exit(0);
}
const proxy = new blockingproxy_1.BlockingProxy(argv.seleniumAddress, parseInt(argv.highlightDelay));
if (argv.logDir) {
    proxy.enableLogging(argv.logDir);
}
let port = proxy.listen(argv.port);
console.log(`Listening on :${port}`);
if (argv.fork) {
    process.send({ ready: true, port: port });
    process.on('disconnect', function () {
        console.log('parent exited, quitting');
        process.exit();
    });
}
//# sourceMappingURL=bin.js.map