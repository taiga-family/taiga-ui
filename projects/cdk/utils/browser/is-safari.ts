export function tuiIsSafari(element: Element): boolean {
    const {ownerDocument} = element as {ownerDocument: Document | undefined};
    const win = ownerDocument?.defaultView as unknown as Window & {safari?: any};
    const isMacOsSafari =
        typeof win.safari !== 'undefined' &&
        win.safari?.pushNotification?.toString() === '[object SafariRemoteNotification]';
    const navigator = win.navigator as Navigator | undefined;
    const vendor = navigator?.vendor as unknown as string | undefined;
    const isIosSafari =
        vendor?.includes('Apple') &&
        !navigator?.userAgent.includes('CriOS') &&
        !navigator?.userAgent.includes('FxiOS');

    return isMacOsSafari || isIosSafari || false;
}
