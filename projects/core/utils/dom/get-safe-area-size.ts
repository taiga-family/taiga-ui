/**
 * Calculates size of safe area on mobile devices (status bars)
 *
 * ATTENTION: Only use in browser environment
 */
export function tuiGetSafeAreaSize(): number {
    if (!CSS.supports(`padding-top: env(safe-area-inset-top)`)) {
        return 0;
    }

    const div = document.createElement(`div`);

    div.style.paddingTop = `env(safe-area-inset-top)`;
    document.body.appendChild(div);

    const safeAreaSize = parseInt(window.getComputedStyle(div).paddingTop!, 10) || 0;

    document.body.removeChild(div);

    return safeAreaSize;
}
