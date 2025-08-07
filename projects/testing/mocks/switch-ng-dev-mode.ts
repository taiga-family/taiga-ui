declare const global: Record<any, any> & Window;

export function tuiSwitchNgDevMode(enable: boolean): void {
    if (global) {
        global.ngDevMode = enable;
    }
}
