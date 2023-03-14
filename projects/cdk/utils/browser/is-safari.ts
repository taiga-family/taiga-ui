/**
 * @deprecated: use {@link tuiIsSafari} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isSafari({ownerDocument: documentRef}: Element): boolean {
    const windowRef = documentRef?.defaultView as unknown as Window & {safari?: any};

    const isMacOsSafari =
        typeof windowRef.safari !== `undefined` &&
        windowRef.safari?.pushNotification?.toString() ===
            `[object SafariRemoteNotification]`;

    const isIosSafari =
        !!windowRef.navigator?.vendor?.includes(`Apple`) &&
        !windowRef.navigator?.userAgent?.includes(`CriOS`) &&
        !windowRef.navigator?.userAgent?.includes(`FxiOS`);

    return isMacOsSafari || isIosSafari;
}

export const tuiIsSafari = isSafari;
