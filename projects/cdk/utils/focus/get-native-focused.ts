/**
 * Returns current active element, including shadow dom
 *
 * @return element or null
 */
export function tuiGetNativeFocused(documentRef: Document): Element | null {
    if (!documentRef.activeElement || !documentRef.activeElement.shadowRoot) {
        return documentRef.activeElement;
    }

    let element = documentRef.activeElement.shadowRoot.activeElement;

    while (element?.shadowRoot) {
        element = element.shadowRoot.activeElement;
    }

    return element;
}
