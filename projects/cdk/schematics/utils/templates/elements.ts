import {ChildNode, Element, parseFragment} from 'parse5';

export function findElementsByTagName(html: string, tagName: string): Element[] {
    const document = parseFragment(html, {sourceCodeLocationInfo: true});
    const elements: Element[] = [];

    const visitNodes = (nodes: ChildNode[]) => {
        nodes.forEach(n => {
            const node = n as Element;

            if (node.childNodes) {
                visitNodes(node.childNodes);
            }

            if (node.tagName === tagName) {
                elements.push(node);
            }
        });
    };

    visitNodes(document.childNodes);

    return elements;
}

/**
 * Parses a HTML fragment and traverses all AST nodes in order find elements that
 * include the specified attribute.
 */
export function findElementsWithAttribute(
    html: string,
    attributeName: string,
): Element[] {
    const document = parseFragment(html, {sourceCodeLocationInfo: true});
    const elements: Element[] = [];

    const visitNodes = (nodes: ChildNode[]) => {
        nodes.forEach(n => {
            const node = n as Element;

            if (node.childNodes) {
                visitNodes(node.childNodes);
            }

            if (node.attrs?.some(attr => attr.name === attributeName.toLowerCase())) {
                elements.push(node);
            }
        });
    };

    visitNodes(document.childNodes);

    return elements;
}

/**
 * Finds elements with explicit tag names that also contain the specified attribute. Returns the
 * attribute start offset based on the specified HTML.
 */
export function findAttributeOnElementWithTag(
    html: string,
    name: string,
    tagNames: string[],
): number[] {
    return findElementsWithAttribute(html, name)
        .filter(element => tagNames.includes(element.tagName))
        .map(element => getStartOffsetOfAttribute(element, name));
}

/**
 * Finds elements that contain the given attribute and contain at least one of the other
 * specified attributes. Returns the primary attribute's start offset based on the specified HTML.
 */
export function findAttributeOnElementWithAttrs(
    html: string,
    name: string,
    attrs: string[],
): number[] {
    return findElementsWithAttribute(html, name)
        .filter(element => attrs.some(attr => hasElementAttribute(element, attr)))
        .map(element => getStartOffsetOfAttribute(element, name));
}

/** Shorthand function that checks if the specified element contains the given attribute. */
function hasElementAttribute(element: Element, attributeName: string): boolean {
    return (
        element.attrs &&
        element.attrs.some(attr => attr.name === attributeName.toLowerCase())
    );
}

/** Gets the start offset of the given attribute from a Parse5 element. */
export function getStartOffsetOfAttribute(
    element: Element,
    attributeName: string,
): number {
    return (
        (element.sourceCodeLocation?.attrs &&
            element.sourceCodeLocation.attrs[attributeName.toLowerCase()]?.startOffset) ||
        0
    );
}
