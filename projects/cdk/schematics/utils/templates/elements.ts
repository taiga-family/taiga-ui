import {type DefaultTreeAdapterTypes, parseFragment} from 'parse5';

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

export function findElementsByFn(
    nodes: ChildNode[],
    predicateFn: (el: Element) => boolean,
): Element[] {
    const elements: Element[] = [];

    const visitNodes = (nodes: ChildNode[]): void => {
        nodes.forEach((n) => {
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

export function findElementsInTemplateByFn(
    html: string,
    predicateFn: (el: Element) => boolean,
): Element[] {
    // utf8 with BOM adds an extra character to the beginning of the string
    if (html.charCodeAt(0) === 0xfeff) {
        html = html.slice(1);
    }

    const document = parseFragment(html, {sourceCodeLocationInfo: true});

    return findElementsByFn(document.childNodes, predicateFn);
}

export function findElementsByTagName(
    html: string,
    tagName: string,
    filterFn: (element: Element) => boolean = () => true,
): Element[] {
    return findElementsInTemplateByFn(
        html,
        (el) => el.tagName === tagName && filterFn(el),
    );
}

export function findElementsByTagNames(html: string, tagNames: string[]): Element[] {
    return findElementsInTemplateByFn(html, (el) => tagNames.includes(el.tagName));
}

/**
 * Parses a HTML fragment and traverses all AST nodes in order find elements that
 * include the specified directive as attribute or input.
 */
export function findElementsWithDirective(
    html: string,
    attributeName: string,
): Element[] {
    const lowercasedAttrName = attributeName.toLowerCase();
    const inputName = `[${lowercasedAttrName}]`;

    return findElementsInTemplateByFn(html, (el) =>
        el.attrs?.some(({name}) => name === lowercasedAttrName || name === inputName),
    );
}

/**
 * Parses a HTML fragment and traverses all AST nodes in order find elements that
 * include the specified attribute.
 */
export function findElementsWithAttribute(
    html: string,
    attributeName: string,
): Element[] {
    return findElementsInTemplateByFn(html, (el) =>
        el.attrs?.some((attr) => attr.name === attributeName.toLowerCase()),
    );
}

/**
 * Parses a HTML fragment and traverses all AST nodes in order find elements that include the specified attribute and tag name.
 * @param html
 * @param attributeName
 */
export function findElementsWithAttributeOnTag(
    html: string,
    attributeNames: string[],
    tagNames: string[] = [],
    filterFn: (element: Element) => boolean = () => true,
): Element[] {
    return findElementsInTemplateByFn(
        html,
        (el) =>
            (!attributeNames.length ||
                el.attrs?.some((attr) =>
                    attributeNames.map((name) => name.toLowerCase()).includes(attr.name),
                )) &&
            (tagNames.includes(el.tagName) ||
                tagNames.includes('*') ||
                !tagNames.length) &&
            filterFn(el),
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
    filterFn: (element: Element) => boolean = () => true,
): number[] {
    return findElementsWithAttribute(html, name)
        .filter(
            (element) =>
                (tagNames.includes(element.tagName) || tagNames.includes('*')) &&
                filterFn(element),
        )
        .map((element) => getStartOffsetOfAttribute(element, name));
}

/**
 * Finds elements that contain the given attribute and contain at least one of the other
 * specified attributes. Returns the primary attribute's start offset based on the specified HTML.
 */
export function findAttributeOnElementWithAttrs(
    html: string,
    name: string,
    attrs: string[],
    filterFn: (element: Element) => boolean = () => true,
): number[] {
    return findElementsWithAttribute(html, name)
        .filter(
            (element) =>
                attrs.some((attr) => hasElementAttribute(element, attr)) &&
                filterFn(element),
        )
        .map((element) => getStartOffsetOfAttribute(element, name));
}

/** Shorthand function that checks if the specified element contains the given attribute. */
export function hasElementAttribute(element: Element, attributeName: string): boolean {
    const lowercasedAttrName = attributeName.toLowerCase();

    return element.attrs?.some(
        (attr) =>
            attr.name === lowercasedAttrName || attr.name === `[${lowercasedAttrName}]`,
    );
}

export function hasElementAttributeWithValue(
    element: Element,
    attributeName: string,
    attributeValue: string,
): boolean {
    const lowercasedAttrName = attributeName.toLowerCase();
    const lowercasedValue = attributeValue.toLowerCase();

    return element.attrs?.some(
        (attr) =>
            (attr.name === lowercasedAttrName && attr.value === lowercasedValue) ||
            (attr.name === `[${lowercasedAttrName}]` &&
                (attr.value === `'${attributeValue}'` ||
                    attr.value === `"${attributeValue}"`)),
    );
}

/** Gets the start offset of the given attribute from a Parse5 element. */
export function getStartOffsetOfAttribute(
    element: Element,
    attributeName: string,
): number {
    return (
        element.sourceCodeLocation?.attrs?.[attributeName.toLowerCase()]?.startOffset || 0
    );
}
