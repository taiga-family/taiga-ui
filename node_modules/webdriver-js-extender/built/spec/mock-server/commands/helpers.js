"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helpers for defining commands more quickly.
 *
 * In this file we define some helpers for quickly defining commands with either do nothing,
 * set/get a value on the session, or return a constant value.
 */
const selenium_mock_1 = require("selenium-mock");
function noopFactory(path, method = 'POST') {
    return new selenium_mock_1.Command(method, path, () => { });
}
exports.noopFactory = noopFactory;
function getterFactory(path, name, method = 'GET') {
    name = name || path.split('/').pop();
    return new selenium_mock_1.Command(method, path, (session) => {
        return session[name];
    });
}
exports.getterFactory = getterFactory;
function setterFactory(path, name, paramName) {
    name = name || path.split('/').pop();
    paramName = paramName || name;
    return new selenium_mock_1.Command('POST', path, (session, params) => {
        session[name] = params[paramName];
    });
}
exports.setterFactory = setterFactory;
function constFactory(method, path, val) {
    return new selenium_mock_1.Command(method, path, () => {
        return val;
    });
}
exports.constFactory = constFactory;
//# sourceMappingURL=helpers.js.map