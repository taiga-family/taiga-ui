/**
 * @deprecated: use {@link tuiGetDocumentOrShadowRoot} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getDocumentOrShadowRoot(node: Node): DocumentOrShadowRoot {
    return `getRootNode` in node && node.isConnected
        ? (node.getRootNode() as Document)
        : node.ownerDocument!;
}

export const tuiGetDocumentOrShadowRoot = getDocumentOrShadowRoot;
