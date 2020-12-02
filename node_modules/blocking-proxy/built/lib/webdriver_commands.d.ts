/// <reference types="node" />
/**
 * Utilities for parsing WebDriver commands from HTTP Requests.
 */
import * as events from 'events';
export declare type HttpMethod = 'GET' | 'POST' | 'DELETE';
export declare type paramKey = 'sessionId' | 'elementId' | 'name' | 'propertyName';
export declare enum CommandName {
    NewSession = 0,
    DeleteSession = 1,
    Status = 2,
    GetTimeouts = 3,
    SetTimeouts = 4,
    Go = 5,
    GetCurrentURL = 6,
    Back = 7,
    Forward = 8,
    Refresh = 9,
    GetTitle = 10,
    FindElement = 11,
    FindElements = 12,
    FindElementFromElement = 13,
    FindElementsFromElement = 14,
    IsElementSelected = 15,
    GetElementAttribute = 16,
    GetElementProperty = 17,
    GetElementCSSValue = 18,
    GetElementText = 19,
    GetElementTagName = 20,
    GetElementRect = 21,
    IsElementEnabled = 22,
    ElementClick = 23,
    ElementClear = 24,
    ElementSendKeys = 25,
    WireMoveTo = 26,
    WireButtonDown = 27,
    WireButtonUp = 28,
    GetAlertText = 29,
    AcceptAlert = 30,
    DismissAlert = 31,
    UNKNOWN = 32,
}
/**
 * An instance of a WebDriver command, containing the params and data for that request.
 *
 * @param commandName The enum identifying the command.
 * @param params Parameters for the command taken from the request's url.
 * @param data Optional data included with the command, taken from the body of the request.
 */
export declare class WebDriverCommand extends events.EventEmitter {
    commandName: CommandName;
    readonly url: string;
    readonly method: HttpMethod;
    private params;
    data: any;
    responseStatus: number;
    responseData: any;
    readonly sessionId: string;
    constructor(commandName: CommandName, url: string, method: HttpMethod, params?: any);
    getParam(key: paramKey): string;
    handleData(data?: any): void;
    handleResponse(statusCode: number, data?: any): void;
}
/**
 * Returns a new WebdriverCommand object for the resource at the given URL.
 */
export declare function parseWebDriverCommand(url: any, method: any): WebDriverCommand;
