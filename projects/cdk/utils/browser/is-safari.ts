export function isSafari(element: Element): boolean {
    const documentRef = element.ownerDocument;
    const windowRef = documentRef?.defaultView;

    return !!windowRef && 'safari' in windowRef;
}
