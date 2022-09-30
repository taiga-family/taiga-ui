import {UpdateRecorder} from '@angular-devkit/schematics';
import {ElementLocation} from 'parse5';

const START_TAG_OFFSET = 1;
const END_TAG_OFFSET = 2;

export function replaceTag(
    recorder: UpdateRecorder,
    sourceCodeLocation: ElementLocation,
    from: string,
    to: string,
    templateOffset = 0,
    addAttributes: string[] = [],
) {
    const startTagOffset = sourceCodeLocation.startTag.startOffset;
    const endTagOffset = sourceCodeLocation.endTag?.startOffset;

    if (endTagOffset) {
        recorder.remove(endTagOffset + templateOffset + END_TAG_OFFSET, from.length);
        recorder.insertRight(endTagOffset + templateOffset + END_TAG_OFFSET, to);
    }

    recorder.remove(startTagOffset + templateOffset + START_TAG_OFFSET, from.length);
    recorder.insertRight(
        startTagOffset + templateOffset + START_TAG_OFFSET,
        `${to} ${addAttributes.join(' ')}`,
    );
}
