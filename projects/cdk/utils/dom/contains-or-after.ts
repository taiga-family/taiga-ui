export function tuiContainsOrAfter(current: Node, node: Node): boolean {
    try {
        return (
            current.contains(node) ||
            !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING)
        );
    } catch {
        return false;
    }
}
