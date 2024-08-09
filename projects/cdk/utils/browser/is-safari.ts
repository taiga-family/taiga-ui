type SafeWindow =
    | (Omit<Window, 'navigator'> & {
          safari?: any;
          navigator?: Omit<Navigator, 'userAgent' | 'vendor'> & {
              vendor: string | undefined;
              userAgent: string | undefined;
          };
      })
    | undefined;

export function tuiIsSafari(element: Element): boolean {
    const win = (element.ownerDocument as Document | undefined)
        ?.defaultView as SafeWindow;
    const isMacOsSafari =
        typeof win?.safari !== 'undefined' &&
        win.safari?.pushNotification?.toString() === '[object SafariRemoteNotification]';
    const isIosSafari =
        !!win?.navigator?.vendor?.includes('Apple') &&
        !win.navigator.userAgent?.includes('CriOS') &&
        !win.navigator.userAgent?.includes('FxiOS');

    return isMacOsSafari || isIosSafari;
}
