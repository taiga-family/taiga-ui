// TODO: Refactor to use this check everywhere
export function tuiIsElement(node: Node): node is Element {
    return node.nodeType === Node.ELEMENT_NODE;
}
