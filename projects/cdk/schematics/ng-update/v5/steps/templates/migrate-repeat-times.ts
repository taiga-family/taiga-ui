import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {findElementsWithAttribute} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

type Element = DefaultTreeAdapterTypes.Element;

const NGFOR_REPEAT_TIMES_PATTERN = /let\s+(\w+)\s+of\s+(.+?)\s*\|\s*tuiRepeatTimes\s*/;

export function migrateRepeatTimes({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);
    const elements = findElementsWithAttribute(template, '*ngFor');

    for (const element of elements) {
        migrateNgForRepeatTimes(element, template, recorder, templateOffset);
    }
}

function migrateNgForRepeatTimes(
    element: Element,
    template: string,
    recorder: UpdateRecorder,
    offset: number,
): void {
    const attr = element.attrs.find(
        (a) => a.name === '*ngfor' && a.value.includes('tuiRepeatTimes'),
    );

    if (!attr) {
        return;
    }

    const parsed = NGFOR_REPEAT_TIMES_PATTERN.exec(attr.value);

    if (!parsed) {
        return;
    }

    const [, variable = '', expression = ''] = parsed;
    const loc = element.sourceCodeLocation!;
    const indent = computeIndent(template, loc.startOffset);
    const indentStr = ' '.repeat(indent);
    const attrLoc = loc.attrs?.['*ngfor'];

    if (!attrLoc) {
        return;
    }

    const isPureNgContainer =
        element.tagName === 'ng-container' && element.attrs.length === 1;

    if (isPureNgContainer) {
        const startTag = loc.startTag!;
        const endTag = loc.endTag;

        recorder.remove(offset + loc.startOffset, startTag.endOffset - loc.startOffset);
        recorder.insertRight(
            offset + loc.startOffset,
            `@for (_ of '-'.repeat(${expression}); track $index) {`,
        );

        if (endTag) {
            recorder.remove(
                offset + endTag.startOffset,
                endTag.endOffset - endTag.startOffset,
            );
            recorder.insertRight(offset + endTag.startOffset, `${indentStr}}`);
        }
    } else {
        recorder.remove(
            offset + attrLoc.startOffset - 1,
            attrLoc.endOffset - attrLoc.startOffset + 1,
        );

        recorder.insertLeft(
            offset + loc.startOffset,
            `@for (_ of '-'.repeat(${expression}); track $index) {\n${indentStr}`,
        );

        recorder.insertRight(offset + loc.endOffset, `\n${indentStr}}`);
    }

    if (variable && variable !== '_' && variable !== '$index') {
        replaceVariableInElement(element, template, recorder, offset, variable);
    }
}

function replaceVariableInElement(
    element: Element,
    template: string,
    recorder: UpdateRecorder,
    offset: number,
    variable: string,
): void {
    const loc = element.sourceCodeLocation!;
    const ngForLoc = loc.attrs?.['*ngfor'];
    const searchStart = loc.startOffset;
    const searchEnd = loc.endOffset;
    const content = template.slice(searchStart, searchEnd);

    const pattern = new RegExp(`\\b${variable}\\b`, 'g');
    let match;

    while ((match = pattern.exec(content)) !== null) {
        const absolutePos = searchStart + match.index;

        if (
            ngForLoc &&
            absolutePos >= ngForLoc.startOffset &&
            absolutePos < ngForLoc.endOffset
        ) {
            continue;
        }

        recorder.remove(offset + absolutePos, variable.length);
        recorder.insertRight(offset + absolutePos, '$index');
    }
}

function computeIndent(template: string, pos: number): number {
    const lastNewLine = template.lastIndexOf('\n', pos);

    return pos - (lastNewLine + 1);
}
