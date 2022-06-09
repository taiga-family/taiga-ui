import {ChildNode, Element, parseFragment} from 'parse5';

export function findElementsByTagName(html: string, tagName: string) {
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
