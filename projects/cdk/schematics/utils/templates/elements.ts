import {ChildNode, Element, parseFragment} from 'parse5';

const ALWAYS_TRUE_HANDLER = (): true => true;

export function findElementByFn(
    nodes: ChildNode[],
    predicateFn: (el: Element) => boolean,
): Element[] {
    const elements: Element[] = [];

    const visitNodes = (nodes: ChildNode[]) => {
        nodes.forEach(n => {
            const node = n as Element;

            if (node.childNodes) {
                visitNodes(node.childNodes);
            }

            if (predicateFn(node)) {
                elements.push(node);
            }
        });
    };

    visitNodes(nodes);

    return elements;
}

export function findElementInTemplateByFn(
    html: string,
    predicateFn: (el: Element) => boolean,
): Element[] {
    const document = parseFragment(html, {sourceCodeLocationInfo: true});
    return findElementByFn(document.childNodes, predicateFn);
}

export function findElementsByTagName(html: string, tagName: string): Element[] {
    return findElementInTemplateByFn(html, el => el.tagName === tagName);
}

/**
 * Parses a HTML fragment and traverses all AST nodes in order find elements that
 * include the specified attribute.
 */
export function findElementsWithAttribute(
    html: string,
    attributeName: string,
): Element[] {
    return findElementInTemplateByFn(html, el =>
        el.attrs?.some(attr => attr.name === attributeName.toLowerCase()),
    );
}

/**
 * Finds elements with explicit tag names that also contain the specified attribute. Returns the
 * attribute start offset based on the specified HTML.
 */
export function findAttributeOnElementWithTag(
    html: string,
    name: string,
    tagNames: string[],
    filterFn: (element: Element) => boolean = ALWAYS_TRUE_HANDLER,
): number[] {
    return findElementsWithAttribute(html, name)
        .filter(
            element =>
                (tagNames.includes(element.tagName) || tagNames.includes('*')) &&
                filterFn(element),
        )
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
    filterFn: (element: Element) => boolean = ALWAYS_TRUE_HANDLER,
): number[] {
    return findElementsWithAttribute(html, name)
        .filter(
            element =>
                attrs.some(attr => hasElementAttribute(element, attr)) &&
                filterFn(element),
        )
        .map(element => getStartOffsetOfAttribute(element, name));
}

/** Shorthand function that checks if the specified element contains the given attribute. */
export function hasElementAttribute(element: Element, attributeName: string): boolean {
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
