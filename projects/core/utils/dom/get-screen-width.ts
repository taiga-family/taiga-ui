export function tuiGetScreenWidth(documentRef: Document): number {
    return Math.max(
        documentRef.documentElement.clientWidth,
        documentRef.defaultView ? documentRef.defaultView.innerWidth : 0,
    );
}
