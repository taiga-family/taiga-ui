/**
 * @deprecated: use {@link tuiGetActualTarget} instead
 * Gets actual target from open Shadow DOM if event happened within it
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getActualTarget(event: Event): Node {
    if (`composedPath` in event) {
        return (event as any).composedPath()[0];
    }

    return (event as any).target;
}

export const tuiGetActualTarget = getActualTarget;
