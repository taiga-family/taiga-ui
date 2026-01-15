import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type ElementLocation} from 'parse5/dist/common/token';

const START_TAG_OFFSET = 1;
const END_TAG_OFFSET = 2;

const NON_SELF_CLOSING_NATIVE_TAGS = new Set(['a', 'button', 'div', 'span']);

// eslint-disable-next-line @typescript-eslint/max-params,max-params
export function replaceTag(
    recorder: UpdateRecorder,
    sourceCodeLocation: ElementLocation | null | undefined,
    from: string,
    to: string,
    template: string,
    templateOffset = 0,
    addAttributes: string[] = [],
): void {
    const startTag = sourceCodeLocation?.startTag;
    const startTagOffset = startTag?.startOffset ?? 0;
    const endTagOffset = sourceCodeLocation?.endTag?.startOffset;

    if (
        startTag &&
        !endTagOffset &&
        NON_SELF_CLOSING_NATIVE_TAGS.has(to) &&
        template.slice(startTag.startOffset, startTag.endOffset).trimEnd().endsWith('/>')
    ) {
        const slashPos = templateOffset + startTag.endOffset - 2;

        if (slashPos >= 0) {
            recorder.remove(slashPos, 1);
            recorder.insertRight(templateOffset + startTag.endOffset, `</${to}>`);
        }
    }

    if (endTagOffset) {
        recorder.remove(endTagOffset + templateOffset + END_TAG_OFFSET, from.length);
        recorder.insertRight(endTagOffset + templateOffset + END_TAG_OFFSET, to);
    }

    recorder.remove(
        (startTagOffset ?? 0) + templateOffset + START_TAG_OFFSET,
        from.length,
    );

    const extraAttrs = addAttributes.filter(Boolean).join(' ');

    recorder.insertRight(
        (startTagOffset ?? 0) + templateOffset + START_TAG_OFFSET,
        extraAttrs ? `${to} ${extraAttrs}` : to,
    );
}
