/**
 * @deprecated: use {@link tuiGetScrollParent} instead
 * Finds the nearest parent with scroll in it
 *
 * @param element initial element
 * @param vertical flag for orientation of scroll
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getScrollParent(
    element: Element | null,
    vertical: boolean = true,
): Element | null {
    if (element === null) {
        return null;
    }

    if (vertical && element.scrollHeight > element.clientHeight) {
        return element;
    }

    if (!vertical && element.scrollWidth > element.clientWidth) {
        return element;
    }

    return getScrollParent(element.parentElement, vertical);
}

export const tuiGetScrollParent = getScrollParent;
