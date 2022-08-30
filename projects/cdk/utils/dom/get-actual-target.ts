/**
 * Gets actual target from open Shadow DOM if event happened within it
 */
export function tuiGetActualTarget(event: Event): Node {
    if (`composedPath` in event) {
        return (event as any).composedPath()[0];
    }

    return (event as any).target;
}
