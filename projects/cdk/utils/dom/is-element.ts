// TODO: Refactor to use this check everywhere
export function tuiIsElement(
    node?: Element | EventTarget | Node | null,
): node is Element {
    return !!node && `nodeType` in node && node.nodeType === Node.ELEMENT_NODE;
}
