import { Session as BasicSession, Command } from 'selenium-mock';
export interface Location {
    latitude: number;
    longitude: number;
    altitude: number;
}
export interface FsFolder {
    [name: string]: (string | FsFolder);
}
export declare type Orientation = 'LANDSCAPE' | 'PORTRAIT';
export interface Session extends BasicSession {
    currentContext?: string;
    installedApps?: string[];
    locked?: boolean;
    localStorage?: {
        [key: string]: string;
    };
    location?: Location;
    locationEnabled?: boolean;
    orientation?: Orientation;
    files?: FsFolder;
    sessionStorage?: {
        [key: string]: string;
    };
    settings?: {
        [key: string]: any;
    };
    activity?: string;
    networkConnection?: number;
}
export interface CommandList {
    [name: string]: Command<Session> | CommandList;
}
export interface ElementCommandList extends CommandList {
    elementIdLocationInView: Command<Session>;
}
export interface StorageCommandList extends CommandList {
    getKeys: Command<Session>;
    getValue: Command<Session>;
    setValue: Command<Session>;
    deleteEntry: Command<Session>;
    deleteAll: Command<Session>;
    getSize: Command<Session>;
}
export interface AppiumAppCommandList extends CommandList {
    toBackground: Command<Session>;
    closeApp: Command<Session>;
    getStrings: Command<Session>;
    launch: Command<Session>;
    reset: Command<Session>;
}
export interface AppiumDeviceCommandList extends CommandList {
    getActivity: Command<Session>;
    startActivity: Command<Session>;
    hideKeyboard: Command<Session>;
    sendKeyEvent: Command<Session>;
    pressKeyCode: Command<Session>;
    longPressKeyCode: Command<Session>;
    installApp: Command<Session>;
    isAppInstalled: Command<Session>;
    removeApp: Command<Session>;
    isLocked: Command<Session>;
    lock: Command<Session>;
    unlock: Command<Session>;
    pullFile: Command<Session>;
    pullFolder: Command<Session>;
    pushFile: Command<Session>;
    getTime: Command<Session>;
    openNotifications: Command<Session>;
    rotate: Command<Session>;
    shake: Command<Session>;
}
export interface AppiumCommandList extends CommandList {
    getSettings: Command<Session>;
    setSettings: Command<Session>;
    setImmediateValue: Command<Session>;
    app: AppiumAppCommandList;
    device: AppiumDeviceCommandList;
}
export interface ChromiumCommandList extends CommandList {
    sendChromiumCommand: Command<Session>;
    sendChromiumCommandAndGetResult: Command<Session>;
}
export interface SessionCommandList extends CommandList {
    currentContext: Command<Session>;
    selectContext: Command<Session>;
    listContexts: Command<Session>;
    uploadFile: Command<Session>;
    getNetworkConnection: Command<Session>;
    setNetworkConnection: Command<Session>;
    toggleAirplaneMode: Command<Session>;
    toggleData: Command<Session>;
    toggleWiFi: Command<Session>;
    toggleLocationServices: Command<Session>;
    getGeolocation: Command<Session>;
    setGeolocation: Command<Session>;
    getOrientation: Command<Session>;
    setOrientation: Command<Session>;
    switchToParentFrame: Command<Session>;
    fullscreen: Command<Session>;
    performMultiAction: Command<Session>;
    performTouchAction: Command<Session>;
    element: ElementCommandList;
    sessionStorage: StorageCommandList;
    localStorage: StorageCommandList;
    appium: AppiumCommandList;
    chromium: ChromiumCommandList;
}
