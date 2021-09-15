/**
 * Checks if an app is running inside <iframe /> tag
 */
export function isInsideIframe(windowRef: Window): boolean {
    return windowRef.parent !== windowRef;
}
