/**
 * Focuses or blurs element with mouse action imitation (to spoof {@link TuiFocusVisibleService})
 *
 * @param element
 * @param focused desired focused state
 * @param preventScroll optionally prevent native browser scroll after focus
 */
export function tuiSetNativeMouseFocused(
    element: HTMLOrSVGElement & Element,
    focused: boolean = true,
    preventScroll: boolean = false,
): void {
    if (!element.ownerDocument) {
        return;
    }

    if (typeof Event === `function`) {
        element.dispatchEvent(new Event(`mousedown`, {bubbles: true, cancelable: true}));
    } else {
        const event = element.ownerDocument.createEvent(`Event`);

        event.initEvent(`mousedown`, true, true);
        element.dispatchEvent(event);
    }

    if (focused) {
        element.focus({preventScroll});
    } else {
        element.blur();
    }
}
