import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DefaultTreeAdapterTypes} from 'parse5';

type Element = DefaultTreeAdapterTypes.Element;

/**
 * Finds an attribute on a parsed element by name (checks both `attrName` and `[attrName]` forms),
 * removes it via the recorder, and returns the value.
 *
 * @returns `value` is `null` when the attribute was not present.
 */
export function removeAttr(
    element: Element,
    attrName: string,
    recorder: UpdateRecorder,
    templateOffset: number,
): {value: string | null; isBinding: boolean} {
    const nameLower = attrName.toLowerCase();
    const bindingLower = `[${nameLower}]`;

    for (const attr of element.attrs) {
        const attrNameLower = attr.name.toLowerCase();

        if (attrNameLower !== nameLower && attrNameLower !== bindingLower) {
            continue;
        }

        const {startOffset = 0, endOffset = 0} =
            element.sourceCodeLocation?.attrs?.[attr.name] ?? {};

        recorder.remove(templateOffset + startOffset, endOffset - startOffset);

        return {
            value: attr.value,
            isBinding: attrNameLower.startsWith('['),
        };
    }

    return {value: null, isBinding: false};
}
