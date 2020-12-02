"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In this file we define all the commands which run against a particular webdriver session, but
 * do not belong in `./appium.ts` or `./storage.ts`.
 */
const selenium_mock_1 = require("selenium-mock");
const helpers_1 = require("./helpers");
const appium_1 = require("./appium");
const chromium_1 = require("./chromium");
const storage_1 = require("./storage");
exports.session = {
    element: {},
    sessionStorage: storage_1.storageFactory('session'),
    localStorage: storage_1.storageFactory('local'),
    appium: appium_1.appium,
    chromium: chromium_1.chromium,
};
exports.session.currentContext = helpers_1.getterFactory('context', 'currentContext');
exports.session.selectContext = helpers_1.setterFactory('context', 'currentContext', 'name');
exports.session.listContexts = helpers_1.constFactory('GET', 'contexts', ['WEBVIEW_1']);
exports.session.uploadFile = helpers_1.noopFactory('file');
exports.session.getNetworkConnection = helpers_1.getterFactory('network_connection', 'networkConnection');
exports.session.setNetworkConnection = helpers_1.setterFactory('network_connection', 'networkConnection', 'type');
exports.session.toggleAirplaneMode =
    new selenium_mock_1.Command('POST', 'appium/device/toggle_airplane_mode', (session) => {
        session.networkConnection ^= 1;
    });
exports.session.toggleWiFi =
    new selenium_mock_1.Command('POST', 'appium/device/toggle_wifi', (session) => {
        session.networkConnection ^= 2;
    });
exports.session.toggleData =
    new selenium_mock_1.Command('POST', 'appium/device/toggle_data', (session) => {
        session.networkConnection ^= 4;
    });
exports.session.toggleLocationServices =
    new selenium_mock_1.Command('POST', 'appium/device/toggle_location_services', (session) => {
        session.locationEnabled = !session.locationEnabled;
    });
exports.session.getGeolocation =
    new selenium_mock_1.Command('GET', '/location', (session) => {
        if (!session.locationEnabled) {
            throw 'Location services disabled';
        }
        return session.location;
    });
exports.session.setGeolocation =
    new selenium_mock_1.Command('POST', '/location', (session, params) => {
        if (!session.locationEnabled) {
            throw 'Location services disabled';
        }
        session.location = params['location'];
    });
exports.session.getOrientation = helpers_1.getterFactory('orientation');
exports.session.setOrientation = helpers_1.setterFactory('orientation');
exports.session.switchToParentFrame = helpers_1.noopFactory('frame/parent');
exports.session.fullscreen = helpers_1.noopFactory('window/fullscreen');
exports.session.performMultiAction = helpers_1.noopFactory('touch/multi/perform');
exports.session.performTouchAction = helpers_1.noopFactory('touch/perform');
exports.session.element.elementIdLocationInView = helpers_1.constFactory('GET', '/element/:id/location_in_view', { x: 0, y: 0 });
//# sourceMappingURL=index.js.map