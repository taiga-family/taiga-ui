// TODO: Drop change to Document in v5
export function tuiIsSafari({ownerDocument: doc}: Element): boolean {
    const win = (doc as Document | undefined)?.defaultView as unknown as
        | (Window & {safari?: any})
        | undefined;

    const isMacOsSafari =
        win?.safari !== undefined &&
        win.safari?.pushNotification?.toString() === '[object SafariRemoteNotification]';

    const isIosSafari =
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        (win?.navigator?.vendor?.includes('Apple') &&
            !win.navigator.userAgent.includes('CriOS') &&
            !win.navigator.userAgent.includes('FxiOS')) ??
        false;

    return isMacOsSafari || isIosSafari;
}
