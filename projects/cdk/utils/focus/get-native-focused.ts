/**
 * Returns current active element, including shadow dom
 *
 * @return element or null
 */
export function tuiGetNativeFocused(doc: Document): Element | null {
    if (!doc.activeElement?.shadowRoot) {
        return doc.activeElement;
    }

    let element = doc.activeElement.shadowRoot.activeElement;

    while (element?.shadowRoot) {
        element = element.shadowRoot.activeElement;
    }

    return element;
}
