/**
 * @deprecated: use {@link tuiGetScreenWidth} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getScreenWidth(documentRef: Document): number {
    return Math.max(
        documentRef.documentElement.clientWidth,
        documentRef.defaultView ? documentRef.defaultView.innerWidth : 0,
    );
}

export const tuiGetScreenWidth = getScreenWidth;
