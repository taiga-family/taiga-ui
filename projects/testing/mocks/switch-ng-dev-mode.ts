declare const global: (Record<any, any> & Window) | undefined;

export function tuiSwitchNgDevMode(enable: boolean): void {
    if (global) {
        global.ngDevMode = enable;
    }
}
