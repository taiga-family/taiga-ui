/**
 * @deprecated: use {@link tuiGetNativeFocused} instead
 * Returns current active element, including shadow dom
 *
 * @return element or null
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getNativeFocused(documentRef: Document): Element | null {
    if (!documentRef.activeElement || !documentRef.activeElement.shadowRoot) {
        return documentRef.activeElement;
    }

    let element = documentRef.activeElement.shadowRoot.activeElement;

    while (element?.shadowRoot) {
        element = element.shadowRoot.activeElement;
    }

    return element;
}

export const tuiGetNativeFocused = getNativeFocused;
