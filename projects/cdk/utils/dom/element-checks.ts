export function tuiIsInput(element: Element): element is HTMLInputElement {
    return element.matches('input');
}

export function tuiIsTextarea(element: Element): element is HTMLTextAreaElement {
    return element.matches('textarea');
}

export function tuiIsTextfield(
    element: Element,
): element is HTMLInputElement | HTMLTextAreaElement {
    return tuiIsInput(element) || tuiIsTextarea(element);
}

export function tuiIsNode(node?: unknown): node is Node {
    return !!node && typeof node === 'object' && 'nodeType' in node;
}

export function tuiIsElement(node?: unknown): node is Element {
    return tuiIsNode(node) && node.nodeType === Node.ELEMENT_NODE;
}

export function tuiIsHTMLElement(node?: unknown): node is HTMLElement {
    return (
        tuiIsElement(node) &&
        !!node.ownerDocument.defaultView &&
        node instanceof node.ownerDocument.defaultView.HTMLElement
    );
}

export function tuiIsTextNode(node?: unknown): node is Text {
    return tuiIsNode(node) && node.nodeType === Node.TEXT_NODE;
}
