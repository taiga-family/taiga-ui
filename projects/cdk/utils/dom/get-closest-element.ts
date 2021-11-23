/**
 * Gets closest element by selector i.e. {@link Element.closest}
 * @deprecated only needed for IE, remove in 3.0
 */
export function getClosestElement(value: Element, selector: string): Element | null {
    let element: Element = value;
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

        (element as Element | null) = element.parentElement;
    } while (element !== null);

    return null;
}
