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

const NGFOR_REPEAT_TIMES_PATTERN =
    /let\s+(\w+)\s+of\s+([^\s|]+)\s*\|\s*tuiRepeatTimes\s*/;

const FOR_BLOCK_PATTERN = /@for\s*\(/g;

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

    migrateAtForRepeatTimes(template, recorder, templateOffset);
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
    const pattern = new RegExp(String.raw`\b${variable}\b`, 'g');
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

function migrateAtForRepeatTimes(
    template: string,
    recorder: UpdateRecorder,
    offset: number,
): void {
    const replacements: Array<{start: number; end: number; replacement: string}> = [];

    for (const match of template.matchAll(FOR_BLOCK_PATTERN)) {
        const start = match.index;

        if (start === undefined) {
            continue;
        }

        const openParen = start + (match[0]?.length ?? 0) - 1;
        const closeParen = findMatchingParen(template, openParen);

        if (closeParen === -1) {
            continue;
        }

        const header = template.slice(openParen + 1, closeParen);
        const replacementHeader = replaceRepeatTimesInForHeader(header);

        if (!replacementHeader) {
            continue;
        }

        replacements.push({
            start: openParen + 1,
            end: closeParen,
            replacement: replacementHeader,
        });
    }

    replacements
        .sort((a, b) => b.start - a.start)
        .forEach(({start, end, replacement}) => {
            recorder.remove(offset + start, end - start);
            recorder.insertRight(offset + start, replacement);
        });
}

function replaceRepeatTimesInForHeader(header: string): string | null {
    const pipeMatch = /\|\s*tuiRepeatTimes\b/.exec(header);

    if (pipeMatch?.index === undefined) {
        return null;
    }

    const beforePipe = header.slice(0, pipeMatch.index);
    const ofIndex = beforePipe.lastIndexOf(' of ');

    if (ofIndex === -1) {
        return null;
    }

    const expression = beforePipe.slice(ofIndex + ' of '.length).trim();

    if (!expression) {
        return null;
    }

    const beforeExpression = beforePipe.slice(0, ofIndex + ' of '.length);
    const afterPipe = header.slice(pipeMatch.index + pipeMatch[0].length);

    return `${beforeExpression}'-'.repeat(${expression})${afterPipe}`;
}

function findMatchingParen(template: string, openParen: number): number {
    let depth = 0;

    for (let i = openParen; i < template.length; i++) {
        const char = template[i];

        if (char === '(') {
            depth++;
        } else if (char === ')') {
            depth--;

            if (depth === 0) {
                return i;
            }
        }
    }

    return -1;
}
