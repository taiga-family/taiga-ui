export function getDocumentOrShadowRoot(node: Node): DocumentOrShadowRoot {
    return 'getRootNode' in node &&
        node.ownerDocument &&
        node.ownerDocument.body.contains(node)
        ? (node.getRootNode() as Document)
        : node.ownerDocument!;
}
