/**
 * Returns current active element, including shadow dom
 *
 * @return element or null
 */
export function tuiGetFocused({activeElement}: Document): Element | null {
    if (!activeElement?.shadowRoot) {
        return activeElement;
    }

    let element = activeElement.shadowRoot.activeElement;

    while (element?.shadowRoot) {
        element = element.shadowRoot.activeElement;
    }

    return element;
}
