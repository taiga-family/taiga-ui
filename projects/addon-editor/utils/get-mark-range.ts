import type {Range} from '@tiptap/core';
import type {Mark as ProseMirrorMark, MarkType, ResolvedPos} from 'prosemirror-model';

function hasAttributes(
    markAttributes: Record<string, unknown>,
    attributes: Record<string, unknown>,
): boolean {
    const keys = Object.keys(attributes);

    return (
        !keys.length ||
        !!keys.filter(key => attributes[key] === markAttributes[key]).length
    );
}

function findMarkInSet(
    marks: readonly ProseMirrorMark[],
    markType: MarkType,
    attributes: Record<string, unknown> = {},
): ProseMirrorMark | null {
    return (
        marks.find(
            ({attrs, type}) => type === markType && hasAttributes(attrs, attributes),
        ) || null
    );
}

/**
 * @deprecated: use {@link tuiGetMarkRange} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getMarkRange(
    pos?: ResolvedPos,
    type?: MarkType,
    attributes: Record<string, unknown> = {},
): Range | null {
    if (!pos || !type) {
        return null;
    }

    const {node, offset} = pos.parent.childAfter(pos.parentOffset);

    if (!node) {
        return null;
    }

    const mark = findMarkInSet(node.marks, type, attributes);

    if (!mark) {
        return null;
    }

    let startIndex = pos.index();
    let startPos = pos.start() + offset;
    let endIndex = startIndex + 1;
    let endPos = startPos + node.nodeSize;

    findMarkInSet(node.marks, type, attributes);

    while (startIndex > 0 && mark.isInSet(pos.parent.child(startIndex - 1).marks)) {
        startIndex -= 1;
        startPos -= pos.parent.child(startIndex).nodeSize;
    }

    while (
        endIndex < pos.parent.childCount &&
        !!findMarkInSet(pos.parent.child(endIndex).marks, type, attributes)
    ) {
        endPos += pos.parent.child(endIndex).nodeSize;
        endIndex += 1;
    }

    return {
        from: startPos,
        to: endPos,
    };
}

export const tuiGetMarkRange = getMarkRange;
