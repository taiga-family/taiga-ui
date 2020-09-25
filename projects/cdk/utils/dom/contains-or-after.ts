export function containsOrAfter(current: Node, node: Node): boolean {
    return (
        current.contains(node) ||
        !!(
            // tslint:disable:no-bitwise
            (node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING)
        )
    );
}
