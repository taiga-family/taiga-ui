/**
 * @deprecated: use {@link tuiIsInsideIframe} instead
 * Checks if an app is running inside <iframe /> tag
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isInsideIframe(windowRef: Window): boolean {
    return windowRef.parent !== windowRef;
}

export const tuiIsInsideIframe = isInsideIframe;
