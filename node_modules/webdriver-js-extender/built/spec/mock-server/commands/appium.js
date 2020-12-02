"use strict";
/**
 * Custom appium commands
 *
 * In this file we define all the custom commands which are part of the appium API but will probably
 * never be part of the webdriver spec or JsonWireProtocol.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const selenium_mock_1 = require("selenium-mock");
const helpers_1 = require("./helpers");
let app = {};
let device = {};
exports.appium = {
    app: app,
    device: device
};
app.toBackground =
    new selenium_mock_1.Command('POST', 'appium/app/background', (session, params) => {
        return new Promise((resolve) => {
            setTimeout(resolve, (params['seconds'] || 0) * 1000);
        });
    });
app.closeApp = helpers_1.noopFactory('appium/app/close');
app.getStrings = helpers_1.constFactory('POST', '/appium/app/strings', ['Hello', 'World']);
app.launch = helpers_1.noopFactory('appium/app/launch');
app.reset = helpers_1.noopFactory('appium/app/reset');
device.getActivity = helpers_1.getterFactory('/appium/device/current_activity', 'activity');
device.startActivity = helpers_1.setterFactory('/appium/device/start_activity', 'activity', 'appActivity');
device.hideKeyboard = helpers_1.noopFactory('/appium/device/hide_keyboard');
device.sendKeyEvent = helpers_1.noopFactory('/appium/device/keyevent');
device.pressKeyCode = helpers_1.noopFactory('/appium/device/press_keycode');
device.longPressKeyCode = helpers_1.noopFactory('/appium/device/long_press_keycode');
device.installApp =
    new selenium_mock_1.Command('POST', 'appium/device/install_app', (session, params) => {
        fs.readFile(params['appPath'], (err, contents) => {
            if (err) {
                throw 'Error while trying to read "' + params['appPath'] + ': ' + err;
            }
            session.installedApps.push(contents.toString().trim());
        });
    });
device.isAppInstalled =
    new selenium_mock_1.Command('POST', 'appium/device/app_installed', (session, params) => {
        return session.installedApps.some((app) => {
            return app === params['bundleId'] || app === params['appId'];
        });
    });
device.removeApp =
    new selenium_mock_1.Command('POST', '/appium/device/remove_app', (session, params) => {
        session.installedApps = session.installedApps.filter((app) => {
            return app !== params['bundleId'] && app !== params['appId'];
        });
    });
device.isLocked = helpers_1.getterFactory('/appium/device/is_locked', 'locked', 'POST');
device.lock =
    new selenium_mock_1.Command('POST', 'appium/device/lock', (session, params) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                session.locked = true;
                resolve();
            }, (params['seconds'] || 0) * 1000);
        });
    });
device.unlock =
    new selenium_mock_1.Command('POST', 'appium/device/unlock', (session) => {
        session.locked = false;
    });
device.pullFile =
    new selenium_mock_1.Command('POST', '/appium/device/pull_file', (session, params) => {
        let path = params['path'].split('/');
        if (path[0].length == 0) {
            path = path.slice(1);
        }
        ;
        let file = session.files;
        for (let folder of path) {
            file = file[folder];
        }
        return file;
    });
device.pullFolder =
    new selenium_mock_1.Command('POST', '/appium/device/pull_folder', (session, params) => {
        let path = params['path'].split('/');
        if (path[0].length == 0) {
            path = path.slice(1);
        }
        ;
        let folder = session.files;
        for (let name of path) {
            folder = folder[name];
        }
        return folder;
    });
device.pushFile =
    new selenium_mock_1.Command('POST', 'appium/device/push_file', (session, params) => {
        let path = params['path'].split('/');
        if (path[0].length == 0) {
            path = path.slice(1);
        }
        ;
        let folder = session.files;
        for (let i = 0; i < path.length - 1; i++) {
            if (folder[path[i]] === undefined) {
                folder[path[i]] = {};
            }
            folder = folder[path[i]];
        }
        folder[path[path.length - 1]] = params['data'];
    });
device.getTime = helpers_1.constFactory('GET', '/appium/device/system_time', new Date().toString());
device.openNotifications = helpers_1.noopFactory('/appium/device/open_notifications');
device.rotate = helpers_1.noopFactory('appium/device/rotate');
device.shake = helpers_1.noopFactory('appium/device/shake');
exports.appium.getSettings = helpers_1.getterFactory('/appium/settings');
exports.appium.setSettings = helpers_1.setterFactory('/appium/settings');
exports.appium.setImmediateValue = helpers_1.noopFactory('/appium/element/:id/value');
//# sourceMappingURL=appium.js.map