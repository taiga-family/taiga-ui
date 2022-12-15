/**
 * Gets actual target from open Shadow DOM if event happened within it
 */
export function tuiGetActualTarget(event: Event): Node {
    return event.composedPath()[0] as Node;
}
