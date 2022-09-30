/**
 * Checks if an app is running inside <iframe /> tag
 */
export function tuiIsInsideIframe(windowRef: Window): boolean {
    return windowRef.parent !== windowRef;
}
