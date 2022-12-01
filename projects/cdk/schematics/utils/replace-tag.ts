import {UpdateRecorder} from '@angular-devkit/schematics';
import {ElementLocation} from 'parse5';

const START_TAG_OFFSET = 1;
const END_TAG_OFFSET = 2;

export function replaceTag(
    recorder: UpdateRecorder,
    sourceCodeLocation: ElementLocation | undefined,
    from: string,
    to: string,
    templateOffset = 0,
    addAttributes: string[] = [],
): void {
    const startTagOffset = sourceCodeLocation?.startTag.startOffset;
    const endTagOffset = sourceCodeLocation?.endTag?.startOffset;

    if (endTagOffset) {
        recorder.remove(endTagOffset + templateOffset + END_TAG_OFFSET, from.length);
        recorder.insertRight(endTagOffset + templateOffset + END_TAG_OFFSET, to);
    }

    recorder.remove(
        (startTagOffset ?? 0) + templateOffset + START_TAG_OFFSET,
        from.length,
    );
    recorder.insertRight(
        (startTagOffset ?? 0) + templateOffset + START_TAG_OFFSET,
        `${to} ${addAttributes.join(` `)}`,
    );
}
