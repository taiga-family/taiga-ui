import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type Token} from 'parse5';

type Attribute = Token.Attribute;

type ElementLocation = Token.ElementLocation;

export function removeAttrs(
    attrs: Attribute[],
    sourceCodeLocation: ElementLocation,
    recorder: UpdateRecorder,
    templateOffset: number,
): void {
    attrs.forEach((attr) => {
        const attrOffset = sourceCodeLocation.attrs?.[attr.name];

        if (attrOffset) {
            const {startOffset, endOffset} = attrOffset;

            recorder.remove(
                templateOffset + startOffset - 1,
                endOffset - startOffset + 1,
            );
        }
    });
}
