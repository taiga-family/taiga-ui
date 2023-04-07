export function tuiIsSafari({ownerDocument: doc}: Element): boolean {
    const win = doc?.defaultView as unknown as Window & {safari?: any};

    const isMacOsSafari =
        typeof win.safari !== `undefined` &&
        win.safari?.pushNotification?.toString() === `[object SafariRemoteNotification]`;

    const isIosSafari =
        !!win.navigator?.vendor?.includes(`Apple`) &&
        !win.navigator?.userAgent?.includes(`CriOS`) &&
        !win.navigator?.userAgent?.includes(`FxiOS`);

    return isMacOsSafari || isIosSafari;
}
