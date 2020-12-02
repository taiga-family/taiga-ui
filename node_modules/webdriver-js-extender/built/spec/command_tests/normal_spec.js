"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const path = require("path");
describe('normal tests', () => {
    let driverFactory = helpers_1.initMockSeleniumStandaloneServerAndGetDriverFactory();
    it('should set/get device activity', (done) => {
        let driver = driverFactory();
        driver.startDeviceActivity('sjelin', '.is.cool').then(() => {
            return driver.getCurrentDeviceActivity();
        }).then((activity) => {
            expect(activity).toBe('.is.cool');
            return driver.startDeviceActivity('sjelin', '.is.the.coolest');
        }).then(() => {
            return driver.getCurrentDeviceActivity();
        }).then((activity) => {
            expect(activity).toBe('.is.the.coolest');
            done();
        });
    });
    it('should set/get appium settings', (done) => {
        let driver = driverFactory();
        driver.setAppiumSettings({ ignoreUnimportantViews: true }).then(() => {
            return driver.getAppiumSettings();
        }).then((settings) => {
            expect(settings['ignoreUnimportantViews']).toBe(true);
            return driver.setAppiumSettings({ ignoreUnimportantViews: false });
        }).then(() => {
            return driver.getAppiumSettings();
        }).then((settings) => {
            expect(settings['ignoreUnimportantViews']).toBe(false);
            done();
        });
    });
    it('should set/get the context', (done) => {
        let driver = driverFactory();
        driver.selectContext('NATIVE_APP').then(() => {
            return driver.getCurrentContext();
        }).then((context) => {
            expect(context).toBe('NATIVE_APP');
            return driver.selectContext('WEBVIEW_1');
        }).then(() => {
            return driver.getCurrentContext();
        }).then((context) => {
            expect(context).toBe('WEBVIEW_1');
            done();
        });
    });
    it('should set/get screen orientation', (done) => {
        let driver = driverFactory();
        driver.setScreenOrientation('landscape').then(() => {
            return driver.getScreenOrientation();
        }).then((orientation) => {
            expect(orientation).toBe('LANDSCAPE');
            return driver.setScreenOrientation('portrait');
        }).then(() => {
            return driver.getScreenOrientation();
        }).then((orientation) => {
            expect(orientation).toBe('PORTRAIT');
            done();
        });
    });
    it('should lock/unlcok the device', (done) => {
        let driver = driverFactory();
        driver.lockDevice().then(() => {
            return driver.isDeviceLocked();
        }).then((locked) => {
            expect(locked).toBe(true);
            return driver.unlockDevice();
        }).then(() => {
            return driver.isDeviceLocked();
        }).then((locked) => {
            expect(locked).toBe(false);
            done();
        });
    });
    it('should install/uninstall an app', (done) => {
        let driver = driverFactory();
        driver.installApp(path.resolve(__dirname, 'totally_real_apk.apk')).then(() => {
            return driver.isAppInstalled('sjelin.is.cool');
        }).then((isInstalled) => {
            expect(isInstalled).toBe(true);
            return driver.removeApp('sjelin.is.cool');
        }).then(() => {
            return driver.isAppInstalled('sjelin.is.cool');
        }).then((isInstalled) => {
            expect(isInstalled).toBe(false);
            done();
        });
    });
    it('should manipulate file system', (done) => {
        let driver = driverFactory();
        Promise.all([
            driver.pushFileToDevice('/tmp/wd_js_ext/foo.txt', 'bar'),
            driver.pushFileToDevice('/tmp/wd_js_ext/folder/a.txt', 'x'),
            driver.pushFileToDevice('/tmp/wd_js_ext/folder/b.txt', 'y'),
            driver.pushFileToDevice('/tmp/wd_js_ext/folder/c.txt', 'z'),
        ]).then(() => {
            return driver.pullFileFromDevice('/tmp/wd_js_ext/foo.txt');
        }).then((fileContents) => {
            expect(fileContents).toBe('bar');
            return driver.pullFolderFromDevice('/tmp/wd_js_ext/folder');
        }).then((folderContents) => {
            expect(folderContents['a.txt']).toBe('x');
            expect(folderContents['b.txt']).toBe('y');
            expect(folderContents['c.txt']).toBe('z');
            done();
        });
    });
    describe('network connection', () => {
        it('should get/set the network connection', (done) => {
            let driver = driverFactory();
            driver.setNetworkConnection(0).then(() => {
                return driver.getNetworkConnection();
            }).then((networkConnection) => {
                expect(networkConnection).toBe(0);
                return driver.setNetworkConnection(6);
            }).then(() => {
                return driver.getNetworkConnection();
            }).then((networkConnection) => {
                expect(networkConnection).toBe(6);
                done();
            });
        });
        it('should be able to toggle various settings', (done) => {
            let driver = driverFactory();
            driver.setNetworkConnection(0).then(() => {
                return driver.getNetworkConnection();
            }).then((networkConnection) => {
                expect(networkConnection).toBe(0);
                return driver.toggleAirplaneMode();
            }).then(() => {
                return driver.getNetworkConnection();
            }).then((networkConnection) => {
                expect(networkConnection).toBe(1);
                return driver.toggleWiFi();
            }).then(() => {
                return driver.getNetworkConnection();
            }).then((networkConnection) => {
                expect(networkConnection).toBe(3);
                return driver.toggleData();
            }).then(() => {
                return driver.getNetworkConnection();
            }).then((networkConnection) => {
                expect(networkConnection).toBe(7);
                return driver.toggleWiFi();
            }).then(() => {
                return driver.getNetworkConnection();
            }).then((networkConnection) => {
                expect(networkConnection).toBe(5);
                return driver.toggleAirplaneMode();
            }).then(() => {
                return driver.getNetworkConnection();
            }).then((networkConnection) => {
                expect(networkConnection).toBe(4);
                return driver.toggleWiFi();
            }).then(() => {
                return driver.getNetworkConnection();
            }).then((networkConnection) => {
                expect(networkConnection).toBe(6);
                return driver.toggleData();
            }).then(() => {
                return driver.getNetworkConnection();
            }).then((networkConnection) => {
                expect(networkConnection).toBe(2);
                done();
            });
        });
    });
    describe('geolocation', () => {
        it('should get/set the geolocation', (done) => {
            let driver = driverFactory();
            driver.setGeolocation(1, 2, 3).then(() => {
                return driver.getGeolocation();
            }).then((geolocation) => {
                expect(geolocation).toEqual({ latitude: 1, longitude: 2, altitude: 3 });
                return driver.setGeolocation(0, 0, 0);
            }).then(() => {
                return driver.getGeolocation();
            }).then((geolocation) => {
                expect(geolocation).toEqual({ latitude: 0, longitude: 0, altitude: 0 });
                done();
            });
        });
        it('should disable geolocation', (done) => {
            let driver = driverFactory();
            // Location should initially work
            driver.setGeolocation(1, 2, 3).then(() => {
                return driver.getGeolocation();
            }).then((geolocation) => {
                expect(geolocation).toEqual({ latitude: 1, longitude: 2, altitude: 3 });
                // Double toggle should do nothing
                return driver.toggleLocationServices();
            }).then(() => {
                return driver.toggleLocationServices();
            }).then(() => {
                return driver.setGeolocation(0, 0, 0);
            }).then(() => {
                return driver.getGeolocation();
            }).then((geolocation) => {
                expect(geolocation).toEqual({ latitude: 0, longitude: 0, altitude: 0 });
                // Single toggle should cause the command to fail
                return driver.toggleLocationServices();
            }).then(() => {
                return driver.getGeolocation().catch((error) => {
                    expect(error.toString()).toContain('Location services disabled');
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=normal_spec.js.map