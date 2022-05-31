export function getDocumentOrShadowRoot(node: Node): DocumentOrShadowRoot {
    return 'getRootNode' in node && node.isConnected
        ? (node.getRootNode() as Document)
        : node.ownerDocument;
}
