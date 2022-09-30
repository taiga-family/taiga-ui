/**
 * Finds the nearest parent with scroll in it
 *
 * @param element initial element
 * @param vertical flag for orientation of scroll
 */
export function tuiGetScrollParent(
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

    return tuiGetScrollParent(element.parentElement, vertical);
}
