/**
 * Checks if an app is running inside <iframe /> tag
 */
export function tuiIsInsideIframe(win: Window): boolean {
    return win.parent !== win;
}
