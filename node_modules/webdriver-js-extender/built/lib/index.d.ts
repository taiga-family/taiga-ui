import { promise as wdpromise, WebDriver } from 'selenium-webdriver';
export interface ExtendedWebDriver extends WebDriver {
    getNetworkConnection: () => wdpromise.Promise<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
    setNetworkConnection: (typeOrAirplaneMode: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | boolean, wifi?: boolean, data?: boolean) => wdpromise.Promise<void>;
    toggleAirplaneMode: () => wdpromise.Promise<void>;
    toggleWiFi: () => wdpromise.Promise<void>;
    toggleData: () => wdpromise.Promise<void>;
    toggleLocationServices: () => wdpromise.Promise<void>;
    getGeolocation: () => wdpromise.Promise<{
        latitude: number;
        longitude: number;
        altitude: number;
    }>;
    setGeolocation: (latitude?: number, longitude?: number, altitude?: number) => wdpromise.Promise<void>;
    getCurrentDeviceActivity: () => wdpromise.Promise<string>;
    startDeviceActivity: (appPackage: string, appActivity: string, appWaitPackage?: string, appWaitActivity?: string) => wdpromise.Promise<void>;
    getAppiumSettings: () => wdpromise.Promise<{
        [name: string]: any;
    }>;
    setAppiumSettings: (settings: {
        [name: string]: any;
    }) => wdpromise.Promise<void>;
    getCurrentContext: () => wdpromise.Promise<string>;
    selectContext: (name: string) => wdpromise.Promise<void>;
    listContexts: () => wdpromise.Promise<string[]>;
    getScreenOrientation: () => wdpromise.Promise<'LANDSCAPE' | 'PORTRAIT'>;
    setScreenOrientation: (orientation: string) => wdpromise.Promise<void>;
    isDeviceLocked: () => wdpromise.Promise<boolean>;
    lockDevice: (delay?: number) => wdpromise.Promise<void>;
    unlockDevice: () => wdpromise.Promise<void>;
    installApp: (appPath: string) => wdpromise.Promise<void>;
    isAppInstalled: (bundleId: string) => wdpromise.Promise<boolean>;
    removeApp: (appId: string) => wdpromise.Promise<void>;
    pullFileFromDevice: (path: string) => wdpromise.Promise<string>;
    pullFolderFromDevice: (path: string) => wdpromise.Promise<any>;
    pushFileToDevice: (path: string, base64Data: string) => wdpromise.Promise<void>;
    uploadFile: (base64Data: string) => wdpromise.Promise<void>;
    switchToParentFrame: () => wdpromise.Promise<void>;
    fullscreen: () => wdpromise.Promise<void>;
    sendAppToBackground: (delay?: number) => wdpromise.Promise<void>;
    closeApp: () => wdpromise.Promise<void>;
    getAppStrings: (language?: string) => wdpromise.Promise<string[]>;
    launchSession: () => wdpromise.Promise<void>;
    resetApp: () => wdpromise.Promise<void>;
    hideSoftKeyboard: (strategy?: 'default' | 'tapOutside' | 'tapOut' | 'swipeDown' | 'pressKey' | 'press', key?: string) => wdpromise.Promise<void>;
    getDeviceTime: () => wdpromise.Promise<string>;
    openDeviceNotifications: () => wdpromise.Promise<void>;
    rotationGesture: (x?: number, y?: number, duration?: number, rotation?: number, touchCount?: 1 | 2 | 3 | 4 | 5) => wdpromise.Promise<void>;
    shakeDevice: () => wdpromise.Promise<void>;
    sendChromiumCommand: (cmd: string, params: Object) => wdpromise.Promise<void>;
    sendChromiumCommandAndGetResult: (cmd: string, params: Object) => wdpromise.Promise<Object>;
}
export declare function extend(baseDriver: WebDriver, fallbackGracefully?: boolean): ExtendedWebDriver;
