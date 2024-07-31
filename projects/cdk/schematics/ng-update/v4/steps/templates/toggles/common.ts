import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {Attribute, ElementLocation} from 'parse5/dist/common/token';

import {findAttr} from '../../../../../utils/templates/inputs';

const sizeMap: Record<string, string> = {
    l: 'm',
    m: 's',
};
export function replaceOpenTag(
    sourceCodeLocation: ElementLocation,
    recorder: UpdateRecorder,
    templateOffset: number,
    {tag, directive, type}: {tag: string; directive: string; type: string},
): void {
    const {startTag} = sourceCodeLocation;

    if (!startTag) {
        return;
    }

    const spaces = ' '.repeat(startTag.startCol + 3);

    recorder.remove(templateOffset + startTag.startOffset, `<${tag}`.length);
    recorder.insertRight(
        templateOffset + startTag.startOffset,
        `<input\n${spaces}${directive}\n${spaces}type="${type}"`,
    );
}

export function replaceSizeAttr(
    attrs: Attribute[],
    sourceCodeLocation: ElementLocation,
    recorder: UpdateRecorder,
    templateOffset: number,
    map = sizeMap,
): void {
    const sizeAttr = findAttr(attrs, 'size');

    if (sizeAttr) {
        const {startOffset, endOffset} = sourceCodeLocation.attrs?.[sizeAttr.name] || {
            startOffset: 0,
            endOffset: 0,
        };

        recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        recorder.insertRight(
            templateOffset + startOffset,
            `${sizeAttr.name}="${map[sizeAttr.value] || sizeAttr.value}"`,
        );
    }
}

export function removeClosingTag(
    sourceCodeLocation: ElementLocation,
    recorder: UpdateRecorder,
    templateOffset: number,
): void {
    const {endTag} = sourceCodeLocation;

    if (!endTag) {
        return;
    }

    const {startOffset, endOffset} = endTag;

    const from = templateOffset + startOffset;
    const to = endOffset - startOffset;

    recorder.remove(from, to);
}

export function closeStartTag(
    {startTag, endTag}: ElementLocation,
    recorder: UpdateRecorder,
    templateOffset: number,
): void {
    if (!endTag) {
        return;
    }

    recorder.insertRight(templateOffset + (startTag?.endOffset ?? 1) - 1, '/');
}
