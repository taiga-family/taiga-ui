/**
 * @deprecated: use {@link tuiCanScroll} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function canScroll(
    element: Element,
    rootElement: Element,
    vertical: boolean,
    scrollEnd: boolean,
): boolean {
    return vertical
        ? canScrollVertical(element, rootElement, scrollEnd)
        : canScrollHorizontal(element, rootElement, scrollEnd);
}

export const tuiCanScroll = canScroll;

function canScrollVertical(
    element: Element,
    rootElement: Element,
    scrollEnd: boolean,
): boolean {
    let currentElement = element;

    while (currentElement !== rootElement.parentElement) {
        if (
            (Math.floor(currentElement.scrollTop) > 0 && !scrollEnd) ||
            (Math.ceil(currentElement.scrollTop + currentElement.clientHeight) <
                currentElement.scrollHeight &&
                scrollEnd)
        ) {
            return true;
        }

        if (currentElement.parentElement) {
            currentElement = currentElement.parentElement;
        } else {
            return false;
        }
    }

    return false;
}

function canScrollHorizontal(
    element: Element,
    rootElement: Element,
    scrollEnd: boolean,
): boolean {
    let currentElement = element;

    while (currentElement !== rootElement.parentElement) {
        if (
            (Math.floor(currentElement.scrollLeft) > 0 && !scrollEnd) ||
            (Math.ceil(currentElement.scrollLeft + currentElement.clientWidth) <
                currentElement.scrollWidth &&
                scrollEnd)
        ) {
            return true;
        }

        if (currentElement.parentElement) {
            currentElement = currentElement.parentElement;
        } else {
            return false;
        }
    }

    return false;
}
