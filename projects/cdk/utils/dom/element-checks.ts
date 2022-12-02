export function tuiIsInput(element: Element): element is HTMLInputElement {
    return element.matches(`input`);
}

export function tuiIsTextarea(element: Element): element is HTMLTextAreaElement {
    return element.matches(`textarea`);
}

export function tuiIsTextfield(
    element: Element,
): element is HTMLInputElement | HTMLTextAreaElement {
    return tuiIsInput(element) || tuiIsTextarea(element);
}

export function tuiIsElement(
    node?: Element | EventTarget | Node | null,
): node is Element {
    return !!node && `nodeType` in node && node.nodeType === Node.ELEMENT_NODE;
}

export function tuiIsHTMLElement(node: unknown): node is HTMLElement {
    // TODO: iframe warning
    return node instanceof HTMLElement;
}

export function tuiIsTextNode(node: Node): node is Text {
    return node.nodeType === Node.TEXT_NODE;
}
