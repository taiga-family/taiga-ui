import {CHAR_NO_BREAK_SPACE, CHAR_ZERO_WIDTH_SPACE, svgNodeFilter} from '@taiga-ui/cdk';

/**
 * Creates a cloned range with its boundaries set at word boundaries
 *
 * @param currentRange a range to clone
 * @return modified range
 */
export function getWordRange(currentRange: Range): Range {
    const range = currentRange.cloneRange();
    const {startContainer, startOffset, endContainer, endOffset} = range;
    const {ownerDocument} = startContainer;

    if (!ownerDocument) {
        return range;
    }

    const treeWalker = ownerDocument.createTreeWalker(
        ownerDocument.body,
        NodeFilter.SHOW_TEXT,
        svgNodeFilter,
        false,
    );

    treeWalker.currentNode = startContainer;

    do {
        const container = treeWalker.currentNode;
        const textContent = container.textContent || '';
        const content =
            container === startContainer
                ? textContent.slice(0, Math.max(0, startOffset + 1))
                : textContent;
        const offset =
            Math.max(
                content.lastIndexOf(' '),
                content.lastIndexOf(CHAR_NO_BREAK_SPACE),
                content.lastIndexOf(CHAR_ZERO_WIDTH_SPACE),
            ) + 1;

        range.setStart(container, 0);

        if (offset) {
            range.setStart(container, offset);
            break;
        }
    } while (treeWalker.previousNode());

    treeWalker.currentNode = endContainer;

    do {
        const container = treeWalker.currentNode;
        const textContent = container.textContent || '';
        const content =
            container === endContainer ? textContent.slice(endOffset + 1) : textContent;
        const offset = [
            content.indexOf(' '),
            content.indexOf(CHAR_NO_BREAK_SPACE),
            content.indexOf(CHAR_ZERO_WIDTH_SPACE),
        ].reduce(
            (result, item) =>
                result === -1 || item === -1
                    ? Math.max(result, item)
                    : Math.min(result, item),
            -1,
        );

        range.setEnd(container, textContent.length);

        if (offset !== -1) {
            range.setEnd(container, offset + textContent.length - content.length);
            break;
        }
    } while (treeWalker.nextNode());

    return range;
}
