import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DefaultTreeAdapterTypes} from 'parse5';

type Element = DefaultTreeAdapterTypes.Element;

type Attribute = Element['attrs'][number];

const CONTROL_STATE_ATTR_NAMES_LOWER: ReadonlySet<string> = new Set([
    '[disabled]'.toLowerCase(),
    '[readOnly]'.toLowerCase(),
    'disabled'.toLowerCase(),
    'readOnly'.toLowerCase(),
]);

const CANONICAL_NAME_BY_LOWER: ReadonlyMap<string, string> = new Map([
    ['[disabled]'.toLowerCase(), '[disabled]'],
    ['[readOnly]'.toLowerCase(), '[readOnly]'],
    ['disabled'.toLowerCase(), 'disabled'],
    ['readOnly'.toLowerCase(), 'readOnly'],
]);

export function getControlStateAttrs(element: Element): Attribute[] {
    return element.attrs.filter((attr) =>
        CONTROL_STATE_ATTR_NAMES_LOWER.has(attr.name.toLowerCase()),
    );
}

export function removeControlStateAttrs(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
    template: string,
    attrs: Attribute[] = getControlStateAttrs(element),
): void {
    for (const attr of attrs) {
        const {startOffset = 0, endOffset = 0} =
            element.sourceCodeLocation?.attrs?.[attr.name] ?? {};
        const lineStart = template.lastIndexOf('\n', startOffset) + 1;
        const lineEnd = template.indexOf('\n', endOffset);
        const attrText = template.slice(startOffset, endOffset);
        const lineText = lineEnd === -1 ? '' : template.slice(lineStart, lineEnd);

        if (lineText.trim() === attrText.trim() && lineEnd !== -1) {
            recorder.remove(templateOffset + lineStart, lineEnd - lineStart + 1);
            continue;
        }

        recorder.remove(templateOffset + startOffset - 1, endOffset - startOffset + 1);
    }
}

export function stringifyControlStateAttrs(attrs: Attribute[]): string {
    return attrs
        .map(({name, value}) => {
            const normalized = CANONICAL_NAME_BY_LOWER.get(name.toLowerCase()) ?? name;
            const token = value ? `${normalized}="${value}"` : normalized;

            return ` ${token}`;
        })
        .join('');
}
