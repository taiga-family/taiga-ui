export function tuiGetScreenWidth(doc: Document): number {
    return Math.max(
        doc.documentElement.clientWidth,
        doc.defaultView ? doc.defaultView.innerWidth : 0,
    );
}
