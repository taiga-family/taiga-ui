"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Utilities for parsing WebDriver commands from HTTP Requests.
 */
const events = require("events");
var CommandName;
(function (CommandName) {
    CommandName[CommandName["NewSession"] = 0] = "NewSession";
    CommandName[CommandName["DeleteSession"] = 1] = "DeleteSession";
    CommandName[CommandName["Status"] = 2] = "Status";
    CommandName[CommandName["GetTimeouts"] = 3] = "GetTimeouts";
    CommandName[CommandName["SetTimeouts"] = 4] = "SetTimeouts";
    CommandName[CommandName["Go"] = 5] = "Go";
    CommandName[CommandName["GetCurrentURL"] = 6] = "GetCurrentURL";
    CommandName[CommandName["Back"] = 7] = "Back";
    CommandName[CommandName["Forward"] = 8] = "Forward";
    CommandName[CommandName["Refresh"] = 9] = "Refresh";
    CommandName[CommandName["GetTitle"] = 10] = "GetTitle";
    CommandName[CommandName["FindElement"] = 11] = "FindElement";
    CommandName[CommandName["FindElements"] = 12] = "FindElements";
    CommandName[CommandName["FindElementFromElement"] = 13] = "FindElementFromElement";
    CommandName[CommandName["FindElementsFromElement"] = 14] = "FindElementsFromElement";
    CommandName[CommandName["IsElementSelected"] = 15] = "IsElementSelected";
    CommandName[CommandName["GetElementAttribute"] = 16] = "GetElementAttribute";
    CommandName[CommandName["GetElementProperty"] = 17] = "GetElementProperty";
    CommandName[CommandName["GetElementCSSValue"] = 18] = "GetElementCSSValue";
    CommandName[CommandName["GetElementText"] = 19] = "GetElementText";
    CommandName[CommandName["GetElementTagName"] = 20] = "GetElementTagName";
    CommandName[CommandName["GetElementRect"] = 21] = "GetElementRect";
    CommandName[CommandName["IsElementEnabled"] = 22] = "IsElementEnabled";
    CommandName[CommandName["ElementClick"] = 23] = "ElementClick";
    CommandName[CommandName["ElementClear"] = 24] = "ElementClear";
    CommandName[CommandName["ElementSendKeys"] = 25] = "ElementSendKeys";
    CommandName[CommandName["WireMoveTo"] = 26] = "WireMoveTo";
    CommandName[CommandName["WireButtonDown"] = 27] = "WireButtonDown";
    CommandName[CommandName["WireButtonUp"] = 28] = "WireButtonUp";
    CommandName[CommandName["GetAlertText"] = 29] = "GetAlertText";
    CommandName[CommandName["AcceptAlert"] = 30] = "AcceptAlert";
    CommandName[CommandName["DismissAlert"] = 31] = "DismissAlert";
    CommandName[CommandName["UNKNOWN"] = 32] = "UNKNOWN";
})(CommandName = exports.CommandName || (exports.CommandName = {}));
/**
 * Represents an endpoint in the WebDriver spec. Endpoints are defined by
 * the CommandName enum and the url pattern that they match.
 *
 * For example, the pattern
 *     /session/:sessionId/element/:elementId/click
 * will match urls such as
 *     /session/d9e52b96-9b6a-4cb3-b017-76e8b4236646/element/1c2855ba-213d-4466-ba16-b14a7e6c3699/click
 *
 * @param pattern The url pattern
 * @param method The HTTP method, ie GET, POST, DELETE
 * @param name The CommandName of this endpoint.
 */
class Endpoint {
    constructor(pattern, method, name) {
        this.pattern = pattern;
        this.method = method;
        this.name = name;
    }
    /**
     * Tests whether a given url from a request matches this endpoint.
     *
     * @param url A url from a request to test against the endpoint.
     * @param method The HTTP method.
     * @returns {boolean} Whether the endpoint matches.
     */
    matches(url, method) {
        let urlParts = url.split('/');
        let patternParts = this.pattern.split('/');
        if (method != this.method || urlParts.length != patternParts.length) {
            return false;
        }
        // TODO: Replace this naive search with better parsing.
        for (let idx in patternParts) {
            if (!patternParts[idx].startsWith(':') && patternParts[idx] != urlParts[idx]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Given a url from a http request, create an object containing parameters from the URL.
     *
     * Parameters are the parts of the endpoint's pattern that start with ':'. The ':' is dropped
     * from the parameter key.
     *
     * @param url The url from the request.
     * @returns An object mapping parameter keys to values from the url.
     */
    getParams(url) {
        let urlParts = url.split('/');
        let patternParts = this.pattern.split('/');
        let params = {};
        for (let idx in patternParts) {
            if (patternParts[idx].startsWith(':')) {
                let paramName = patternParts[idx].slice(1);
                params[paramName] = urlParts[idx];
            }
        }
        return params;
    }
}
/**
 * An instance of a WebDriver command, containing the params and data for that request.
 *
 * @param commandName The enum identifying the command.
 * @param params Parameters for the command taken from the request's url.
 * @param data Optional data included with the command, taken from the body of the request.
 */
class WebDriverCommand extends events.EventEmitter {
    constructor(commandName, url, method, params) {
        super();
        this.commandName = commandName;
        this.url = url;
        this.method = method;
        this.params = params;
    }
    // All WebDriver commands have a session Id, except for two.
    // NewSession will have a session Id in the data
    // Status just doesn't
    get sessionId() {
        if (!this.getParam('sessionId') && this.url.startsWith('/session')) {
            return this.url.split('/')[2];
        }
        return this.getParam('sessionId');
    }
    getParam(key) {
        return this.params[key];
    }
    handleData(data) {
        try {
            this.data = JSON.parse(data);
        }
        catch (err) {
            this.data = data;
        }
        this.emit('data');
    }
    handleResponse(statusCode, data) {
        this.responseStatus = statusCode;
        try {
            this.responseData = JSON.parse(data);
        }
        catch (err) {
            this.responseData = data;
        }
        this.emit('response');
    }
}
exports.WebDriverCommand = WebDriverCommand;
/**
 * The set of known endpoints.
 */
let endpoints = [];
function addWebDriverCommand(command, method, pattern) {
    endpoints.push(new Endpoint(pattern, method, command));
}
/**
 * Returns a new WebdriverCommand object for the resource at the given URL.
 */
function parseWebDriverCommand(url, method) {
    for (let endpoint of endpoints) {
        if (endpoint.matches(url, method)) {
            let params = endpoint.getParams(url);
            return new WebDriverCommand(endpoint.name, url, method, params);
        }
    }
    return new WebDriverCommand(CommandName.UNKNOWN, url, method, {});
}
exports.parseWebDriverCommand = parseWebDriverCommand;
let sessionPrefix = '/session/:sessionId';
addWebDriverCommand(CommandName.NewSession, 'POST', '/session');
addWebDriverCommand(CommandName.DeleteSession, 'DELETE', '/session/:sessionId');
addWebDriverCommand(CommandName.Status, 'GET', '/status');
addWebDriverCommand(CommandName.GetTimeouts, 'GET', sessionPrefix + '/timeouts');
addWebDriverCommand(CommandName.SetTimeouts, 'POST', sessionPrefix + '/timeouts');
addWebDriverCommand(CommandName.Go, 'POST', sessionPrefix + '/url');
addWebDriverCommand(CommandName.GetCurrentURL, 'GET', sessionPrefix + '/url');
addWebDriverCommand(CommandName.Back, 'POST', sessionPrefix + '/back');
addWebDriverCommand(CommandName.Forward, 'POST', sessionPrefix + '/forward');
addWebDriverCommand(CommandName.Refresh, 'POST', sessionPrefix + '/refresh');
addWebDriverCommand(CommandName.GetTitle, 'GET', sessionPrefix + '/title');
addWebDriverCommand(CommandName.FindElement, 'POST', sessionPrefix + '/element');
addWebDriverCommand(CommandName.FindElements, 'POST', sessionPrefix + '/elements');
addWebDriverCommand(CommandName.FindElementFromElement, 'POST', sessionPrefix + '/element/:elementId/element');
addWebDriverCommand(CommandName.FindElementsFromElement, 'POST', sessionPrefix + '/element/:elementId/elements');
addWebDriverCommand(CommandName.IsElementSelected, 'POST', sessionPrefix + '/element/:elementId/selected');
addWebDriverCommand(CommandName.GetElementAttribute, 'GET', sessionPrefix + '/element/:elementId/attribute/:attributeName');
addWebDriverCommand(CommandName.GetElementProperty, 'GET', sessionPrefix + '/element/:elementId/property/:propertyName');
addWebDriverCommand(CommandName.GetElementCSSValue, 'GET', sessionPrefix + '/element/:elementId/css/:cssPropertyName');
addWebDriverCommand(CommandName.GetElementText, 'GET', sessionPrefix + '/element/:elementId/text');
addWebDriverCommand(CommandName.GetElementTagName, 'GET', sessionPrefix + '/element/:elementId/name');
addWebDriverCommand(CommandName.GetElementRect, 'GET', sessionPrefix + '/element/:elementId/rect');
addWebDriverCommand(CommandName.GetElementRect, 'GET', sessionPrefix + '/element/:elementId/size');
addWebDriverCommand(CommandName.IsElementEnabled, 'GET', sessionPrefix + '/element/:elementId/enabled');
addWebDriverCommand(CommandName.ElementClick, 'POST', sessionPrefix + '/element/:elementId/click');
addWebDriverCommand(CommandName.ElementClear, 'POST', sessionPrefix + '/element/:elementId/clear');
addWebDriverCommand(CommandName.ElementSendKeys, 'POST', sessionPrefix + '/element/:elementId/value');
addWebDriverCommand(CommandName.GetAlertText, 'GET', sessionPrefix + '/alert_text');
addWebDriverCommand(CommandName.GetAlertText, 'GET', sessionPrefix + '/alert/text');
addWebDriverCommand(CommandName.AcceptAlert, 'POST', sessionPrefix + '/alert/accept');
addWebDriverCommand(CommandName.AcceptAlert, 'POST', sessionPrefix + '/accept_alert');
addWebDriverCommand(CommandName.DismissAlert, 'POST', sessionPrefix + '/alert/dismiss');
addWebDriverCommand(CommandName.DismissAlert, 'POST', sessionPrefix + '/dismiss_alert');
// These commands are part of the JSON protocol, and were replaced by Perform Actions in the W3C
// spec
addWebDriverCommand(CommandName.WireMoveTo, 'POST', sessionPrefix + '/moveto');
addWebDriverCommand(CommandName.WireButtonDown, 'POST', sessionPrefix + '/buttondown');
addWebDriverCommand(CommandName.WireButtonUp, 'POST', sessionPrefix + '/buttonup');
//# sourceMappingURL=webdriver_commands.js.map