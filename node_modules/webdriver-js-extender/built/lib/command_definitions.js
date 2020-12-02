"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_definition_1 = require("./command_definition");
exports.getNetworkConnection = new command_definition_1.CommandDefinition('getNetworkConnection', [], 'GET', '/network_connection');
exports.setNetworkConnection = new command_definition_1.CommandDefinition('setNetworkConnection', ['type'], 'POST', '/network_connection', (args) => {
    if (typeof args[0] == 'boolean') {
        // Transform into bitmask
        return [(args[0] ? 1 : 0) + (args[1] ? 2 : 0) + (args[2] ? 4 : 0)];
    }
    else {
        return args;
    }
});
exports.toggleAirplaneMode = new command_definition_1.CommandDefinition('toggleAirplaneMode', [], 'POST', 'appium/device/toggle_airplane_mode');
exports.toggleWiFi = new command_definition_1.CommandDefinition('toggleWiFi', [], 'POST', 'appium/device/toggle_wifi');
exports.toggleData = new command_definition_1.CommandDefinition('toggleData', [], 'POST', 'appium/device/toggle_data');
exports.toggleLocationServices = new command_definition_1.CommandDefinition('toggleLocationServices', [], 'POST', 'appium/device/toggle_location_services');
exports.getGeolocation = new command_definition_1.CommandDefinition('getGeolocation', [], 'GET', '/location');
exports.setGeolocation = new command_definition_1.CommandDefinition('setGeolocation', ['location'], 'POST', '/location', (args) => {
    return [{ latitude: args[0] || 0, longitude: args[1] || 0, altitude: args[2] || 0 }];
});
exports.getCurrentDeviceActivity = new command_definition_1.CommandDefinition('getCurrentDeviceActivity', [], 'GET', '/appium/device/current_activity');
exports.startDeviceActivity = new command_definition_1.CommandDefinition('startDeviceActivity', ['appPackage', 'appActivity', 'appWaitPackage', 'appWaitActivity'], 'POST', '/appium/device/start_activity', (args) => {
    if (args.length == 2) {
        // No appWait, default parameters to undefined
        args[2] = undefined;
        args[3] = undefined;
    }
    if (args.length == 4) {
        return args;
    }
    else {
        throw new RangeError('startDeviceActivity requires 2 or 4 arguments, got ' + args.length);
    }
});
exports.getAppiumSettings = new command_definition_1.CommandDefinition('getAppiumSettings', [], 'GET', '/appium/settings');
exports.setAppiumSettings = new command_definition_1.CommandDefinition('setAppiumSettings', ['settings'], 'POST', '/appium/settings');
exports.getCurrentContext = new command_definition_1.CommandDefinition('getCurrentContext', [], 'GET', '/context');
exports.selectContext = new command_definition_1.CommandDefinition('selectContext', ['name'], 'POST', '/context');
exports.getScreenOrientation = new command_definition_1.CommandDefinition('getScreenOrientation', [], 'GET', '/orientation');
exports.setScreenOrientation = new command_definition_1.CommandDefinition('setScreenOrientation', ['orientation'], 'POST', '/orientation', (args) => {
    let orientation = (args[0] || '').toUpperCase();
    if ((orientation != 'PORTRAIT') && (orientation != 'LANDSCAPE')) {
        throw new TypeError('Invalid orientation "' + args[0] + '"');
    }
    args[0] = orientation;
    return args;
});
exports.isDeviceLocked = new command_definition_1.CommandDefinition('isDeviceLocked', [], 'POST', '/appium/device/is_locked');
exports.lockDevice = new command_definition_1.CommandDefinition('lockDevice', ['seconds'], 'POST', '/appium/device/lock', (args) => {
    args[0] = args[0] || 0;
    return args;
});
exports.unlockDevice = new command_definition_1.CommandDefinition('unlockDevice', [], 'POST', '/appium/device/unlock');
exports.installApp = new command_definition_1.CommandDefinition('installApp', ['appPath'], 'POST', '/appium/device/install_app');
exports.isAppInstalled = new command_definition_1.CommandDefinition('isAppInstalled', ['bundleId'], 'POST', 'appium/device/app_installed');
exports.removeApp = new command_definition_1.CommandDefinition('removeApp', ['appId'], 'POST', '/appium/device/remove_app');
exports.pullFileFromDevice = new command_definition_1.CommandDefinition('pullFileFromDevice', ['path'], 'POST', '/appium/device/pull_file');
exports.pullFolderFromDevice = new command_definition_1.CommandDefinition('pullFolderFromDevice', ['path'], 'POST', '/appium/device/pull_folder');
exports.pushFileToDevice = new command_definition_1.CommandDefinition('pushFileToDevice', ['path', 'data'], 'POST', 'appium/device/push_file');
exports.listContexts = new command_definition_1.CommandDefinition('listContexts', [], 'GET', '/contexts');
exports.uploadFile = new command_definition_1.CommandDefinition('uploadFile', ['file'], 'POST', '/file');
exports.switchToParentFrame = new command_definition_1.CommandDefinition('switchToParentFrame', [], 'POST', '/frame/parent');
exports.fullscreen = new command_definition_1.CommandDefinition('fullscreen', [], 'POST', '/window/fullscreen');
exports.sendAppToBackground = new command_definition_1.CommandDefinition('sendAppToBackground', ['seconds'], 'POST', '/appium/app/background', (args) => {
    args[0] = args[0] || 0;
    return args;
});
exports.closeApp = new command_definition_1.CommandDefinition('closeApp', [], 'POST', '/appium/app/close');
exports.getAppStrings = new command_definition_1.CommandDefinition('getAppStrings', ['language'], 'POST', 'appium/app/strings', (args) => {
    args[0] = args.length ? args[0] : undefined; // Default to `undefined`
    return args;
});
exports.launchSession = new command_definition_1.CommandDefinition('launchSession', [], 'POST', '/appium/app/launch');
exports.resetApp = new command_definition_1.CommandDefinition('resetApp', [], 'POST', '/appium/app/reset');
exports.hideSoftKeyboard = new command_definition_1.CommandDefinition('hideSoftKeyboard', ['strategy', 'key'], 'POST', '/appium/device/hide_keyboard', (args) => {
    switch (args[0] || 'default') {
        case 'default':
            args[0] = 'default';
        case 'swipeDown':
        case 'tapOut':
        case 'tapOutside':
            if (args.length == 1) {
                args[1] = undefined; // Default to `undefined`
            }
        case 'press':
        case 'pressKey':
            return args;
        default:
            throw new RangeError('Invalid keyboard hiding strategy "' + args[0] + '"');
    }
});
exports.getDeviceTime = new command_definition_1.CommandDefinition('getDeviceTime', [], 'GET', '/appium/device/system_time');
exports.openDeviceNotifications = new command_definition_1.CommandDefinition('openDeviceNotifications', [], 'POST', '/appium/device/open_notifications');
exports.rotationGesture = new command_definition_1.CommandDefinition('rotationGesture', ['x', 'y', 'duration', 'rotation', 'touchCount'], 'POST', '/appium/device/rotate', (args) => {
    args[0] = args[0] || 0;
    args[1] = args[1] || 0;
    args[2] = args[2] === undefined ? 1 : args[2];
    args[3] = args[3] === undefined ? 180 : args[3];
    args[4] = args[4] == undefined ? 2 : args[4];
    return args;
});
exports.shakeDevice = new command_definition_1.CommandDefinition('shakeDevice', [], 'POST', 'appium/device/shake');
exports.sendChromiumCommand = new command_definition_1.CommandDefinition('sendChromiumCommand', ['cmd', 'params'], 'POST', '/chromium/send_command');
exports.sendChromiumCommandAndGetResult = new command_definition_1.CommandDefinition('sendChromiumCommandAndGetResult', ['cmd', 'params'], 'POST', '/chromium/send_command_and_get_result');
//# sourceMappingURL=command_definitions.js.map