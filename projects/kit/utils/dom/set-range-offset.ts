import {svgNodeFilter} from '@taiga-ui/cdk';

/**
 * @deprecated: use {@link tuiSetRangeOffset} instead
 * Range.setStart/set-end, except it uses offset in characters only
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function setRangeOffset(
    range: Range,
    node: HTMLElement,
    offset: number,
    method: 'setStart' | 'setEnd',
): void {
    const {ownerDocument} = node;

    if (!ownerDocument) {
        return;
    }

    const treeWalker = ownerDocument.createTreeWalker(
        node,
        NodeFilter.SHOW_TEXT,
        svgNodeFilter,
        false,
    );

    treeWalker.currentNode = node;

    while (treeWalker.nextNode()) {
        if (treeWalker.currentNode.nodeType === Node.TEXT_NODE) {
            const length = treeWalker.currentNode.nodeValue
                ? treeWalker.currentNode.nodeValue.length
                : 0;

            if (offset > length) {
                offset -= length;
            } else {
                range[method](treeWalker.currentNode, offset);
            }
        }
    }
}

export const tuiSetRangeOffset = setRangeOffset;
