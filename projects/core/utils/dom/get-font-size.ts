export function getFontSize(windowRef: Window): number {
    return parseFloat(
        windowRef.getComputedStyle(windowRef.document.documentElement).fontSize,
    );
}
