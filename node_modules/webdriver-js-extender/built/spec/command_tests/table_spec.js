"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const path = require("path");
describe('table tests', () => {
    let driverFactory = helpers_1.initMockSeleniumStandaloneServerAndGetDriverFactory(true);
    let table = {
        getCurrentContext: { result: 'WEBVIEW_1' },
        selectContext: { args: ['WEBVIEW_1'], params: { name: 'WEBVIEW_1' } },
        listContexts: { result: ['WEBVIEW_1'] },
        uploadFile: { args: ['hello'], params: { file: 'hello' } },
        getNetworkConnection: { result: 6 },
        setNetworkConnection: [
            { args: [0], params: { 'type': 0 } },
            { args: [true, false, false], params: { 'type': 1 } },
            { args: [false, true, true], params: { 'type': 6 } }
        ],
        toggleAirplaneMode: {},
        toggleData: {},
        toggleWiFi: {},
        toggleLocationServices: {},
        getGeolocation: { result: { latitude: 0, longitude: 0, altitude: 0 } },
        setGeolocation: { args: [1, 2, 3], params: { location: { latitude: 1, longitude: 2, altitude: 3 } } },
        getScreenOrientation: { result: 'PORTRAIT' },
        setScreenOrientation: { args: ['landscape'], params: { orientation: 'LANDSCAPE' } },
        switchToParentFrame: {},
        fullscreen: {},
        getAppiumSettings: { result: { ignoreUnimportantViews: false } },
        setAppiumSettings: { args: [{ ignoreUnimportantViews: true }], params: { settings: { ignoreUnimportantViews: true } } },
        sendAppToBackground: [{ params: { seconds: 0 } }, { args: [1], params: { seconds: 1 } }],
        closeApp: {},
        getAppStrings: [{ result: ['Hello', 'World'] },
            { result: ['Hello', 'World'], args: ['en'], params: { language: 'en' } }],
        launchSession: {},
        resetApp: {},
        getCurrentDeviceActivity: {},
        startDeviceActivity: [{ args: ['a', 'b', 'c', 'd'], params: { appPackage: 'a', appActivity: 'b', appWaitPackage: 'c', appWaitActivity: 'd' } },
            { args: ['a', 'b'], params: { appPackage: 'a', appActivity: 'b' } }],
        hideSoftKeyboard: [{ params: { strategy: 'default' } },
            { args: ['pressKey', 'Done'], params: { strategy: 'pressKey', key: 'Done' } }],
        installApp: { args: [path.resolve(__dirname, 'totally_real_apk.apk')],
            params: { appPath: path.resolve(__dirname, 'totally_real_apk.apk') } },
        isAppInstalled: { result: false, args: ['sjelin.is.cool'], params: { bundleId: 'sjelin.is.cool' } },
        removeApp: { args: ['sjelin.is.cool'], params: { appId: 'sjelin.is.cool' } },
        isDeviceLocked: { result: false },
        lockDevice: [{ params: { seconds: 0 } }, { args: [1], params: { seconds: 1 } }],
        unlockDevice: {},
        //    pullFileFromDevice: null,  // No good way to test this
        pullFolderFromDevice: { result: {}, args: [''], params: { path: '' } },
        pushFileToDevice: { args: ['/a/b', 'cde'], params: { path: '/a/b', data: 'cde' } },
        getDeviceTime: { result: new Date().toString() },
        openDeviceNotifications: {},
        rotationGesture: [{ params: { x: 0, y: 0, duration: 1, rotation: 180, touchCount: 2 } },
            { args: [1, 2, 3, 90, 5], params: { x: 1, y: 2, duration: 3, rotation: 90, touchCount: 5 } }],
        shakeDevice: {},
        sendChromiumCommand: { args: ['DOM.enable', {}] },
        sendChromiumCommandAndGetResult: { args: ['DOM.enable', {}] }
    };
    function runTestcase(commandName) {
        let itName = 'should correctly call "' + commandName + '"';
        let tableEntry = table[commandName];
        if (tableEntry == null) {
            return it(itName);
        }
        let testcases = Array.isArray(tableEntry) ? tableEntry : [tableEntry];
        testcases.forEach((testcase, i) => {
            let caseName = itName + (tableEntry === testcases ? ' (#' + i + ')' : '');
            if (testcase.skip) {
                return it(caseName);
            }
            it(caseName, (done) => {
                let driver = driverFactory();
                driver[commandName].apply(driver, testcase.args || []).then((results) => {
                    expect(results.result).toEqual(testcase.result == null ? null : testcase.result);
                    if (testcase.session) {
                        for (let varname in testcase.session) {
                            expect(results.session[varname]).
                                toEqual(testcase.session[varname]);
                        }
                    }
                    if (testcase.params) {
                        for (let paramName in testcase.params) {
                            expect(results.params[paramName]).toEqual(testcase.params[paramName]);
                        }
                    }
                    done();
                });
            });
        });
    }
    for (let commandName in table) {
        runTestcase(commandName);
    }
});
//# sourceMappingURL=table_spec.js.map