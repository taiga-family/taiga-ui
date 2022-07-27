/**
 * @deprecated: use {@link tuiIsSafari} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isSafari(element: Element): boolean {
    const documentRef = element.ownerDocument;
    const windowRef = documentRef?.defaultView;

    return !!windowRef && `safari` in windowRef;
}

export const tuiIsSafari = isSafari;
