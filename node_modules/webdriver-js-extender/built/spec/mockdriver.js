"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webdriver = require("selenium-webdriver");
let buildPath = require('selenium-webdriver/lib/http').buildPath;
function buildMockDriver(sessionId, defineCallback, execCallback) {
    let paths = {};
    let methods = {};
    let mockSession = new webdriver.Session(sessionId, {});
    return new webdriver.WebDriver(mockSession, {
        execute: (command) => {
            command.setParameter('sessionId', sessionId);
            let params = command.getParameters();
            return webdriver.promise.fulfilled(execCallback(buildPath(paths[command.getName()], params), methods[command.getName()], params));
        },
        defineCommand: (name, method, path) => {
            paths[name] = path;
            methods[name] = method;
            defineCallback(name, method, path);
        }
    });
}
exports.buildMockDriver = buildMockDriver;
//# sourceMappingURL=mockdriver.js.map