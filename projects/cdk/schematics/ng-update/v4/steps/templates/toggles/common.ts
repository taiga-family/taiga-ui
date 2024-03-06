import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {Attribute, ElementLocation} from 'parse5';

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
    const {startOffset, startCol} = startTag;

    const spaces = ' '.repeat(startCol + 3);

    recorder.remove(templateOffset + startOffset, `<${tag}`.length);
    recorder.insertRight(
        templateOffset + startOffset,
        `<input\n${spaces}${directive}\n${spaces}type="${type}"`,
    );
}

export function replaceSizeAttr(
    attrs: Attribute[],
    sourceCodeLocation: ElementLocation,
    recorder: UpdateRecorder,
    templateOffset: number,
): void {
    const sizeAttr = attrs.find(attr => attr.name === 'size');

    if (sizeAttr) {
        const {startOffset, endOffset} = sourceCodeLocation.attrs?.[sizeAttr.name] || {
            startOffset: 0,
            endOffset: 0,
        };

        recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        recorder.insertRight(
            templateOffset + startOffset,
            `size="${sizeMap[sizeAttr.value] || sizeAttr.value}"`,
        );
    }
}

export function removeClosingTag(
    sourceCodeLocation: ElementLocation,
    recorder: UpdateRecorder,
    templateOffset: number,
): void {
    const {endTag} = sourceCodeLocation;
    const {startOffset, endOffset} = endTag;

    const from = templateOffset + startOffset;
    const to = endOffset - startOffset;

    recorder.remove(from, to);
}

export function closeStartTag(
    {startTag}: ElementLocation,
    recorder: UpdateRecorder,
    templateOffset: number,
): void {
    recorder.insertRight(templateOffset + startTag.endOffset - 1, '/');
}
