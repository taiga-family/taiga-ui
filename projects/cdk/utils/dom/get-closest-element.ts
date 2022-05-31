/**
 * Gets closest element by selector i.e. {@link Element.closest}
 * @deprecated only needed for IE, remove in 3.0
 */
export function getClosestElement(element: Element, selector: string): Element | null {
    const closest = Element.prototype.closest;

    if (closest) {
        return closest.call(element, selector);
    }

    const matchesSelector =
        Element.prototype.matches || (Element.prototype as any).msMatchesSelector;

    do {
        if (matchesSelector.call(element, selector)) {
            return element;
        }

        (element ) = element.parentElement;
    } while (element !== null);

    return null;
}
