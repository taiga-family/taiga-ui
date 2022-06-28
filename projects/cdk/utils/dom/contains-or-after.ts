/**
 * @deprecated: use {@link tuiContainsOrAfter} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function containsOrAfter(current: Node, node: Node): boolean {
    return (
        current.contains(node) ||
        !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING)
    );
}

export const tuiContainsOrAfter = containsOrAfter;
