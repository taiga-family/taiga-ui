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

const NGFOR_ATTR = '*ngfor';
const NGFOR_SEARCH_ATTR = '*ngFor';
const TUI_REPEAT_TIMES_DIRECTIVE_ATTR = '*tuirepeattimes';
const TUI_REPEAT_TIMES_DIRECTIVE_PATTERN = /^(?:let\s+(\w+)\s+)?of\s+(\S.*)$/;
const FOR_BLOCK_PATTERN = /@for\s*\(/g;

const NGFOR_REPEAT_TIMES_PIPE_PATTERN =
    /let\s+(\w+)\s+of\s+([^\s|]+)\s*\|\s*tuiRepeatTimes\s*/;

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

    for (const element of findElementsWithAttribute(template, NGFOR_SEARCH_ATTR)) {
        migrateNgForRepeatTimesPipe(element, template, recorder, templateOffset);
    }

    for (const element of findElementsWithAttribute(
        template,
        TUI_REPEAT_TIMES_DIRECTIVE_ATTR,
    )) {
        migrateTuiRepeatTimesDirective(element, template, recorder, templateOffset);
    }

    migrateAtForRepeatTimes(template, recorder, templateOffset);
}

function migrateNgForRepeatTimesPipe(
    element: Element,
    template: string,
    recorder: UpdateRecorder,
    offset: number,
): void {
    const attr = element.attrs.find(
        (a) => a.name === NGFOR_ATTR && a.value.includes('tuiRepeatTimes'),
    );

    if (!attr) {
        return;
    }

    const parsed = NGFOR_REPEAT_TIMES_PIPE_PATTERN.exec(attr.value);

    if (!parsed) {
        return;
    }

    const [, variable = '', expression = ''] = parsed;

    const wrapped = replaceStructuralDirectiveWithForBlock({
        element,
        template,
        recorder,
        offset,
        attrName: NGFOR_ATTR,
        header: buildRepeatTimesForHeader({expression}),
    });

    if (wrapped && variable && variable !== '_' && variable !== '$index') {
        replaceVariableInElement(element, template, recorder, offset, variable);
    }
}

function migrateTuiRepeatTimesDirective(
    element: Element,
    template: string,
    recorder: UpdateRecorder,
    offset: number,
): void {
    const attr = element.attrs.find((a) => a.name === TUI_REPEAT_TIMES_DIRECTIVE_ATTR);

    if (!attr) {
        return;
    }

    const parsed = TUI_REPEAT_TIMES_DIRECTIVE_PATTERN.exec(attr.value.trim());

    if (!parsed) {
        return;
    }

    const [, variable = '', expression = ''] = parsed;

    // Preserve the declared variable with `let variable = $index` to avoid rewriting the body.
    replaceStructuralDirectiveWithForBlock({
        element,
        template,
        recorder,
        offset,
        attrName: TUI_REPEAT_TIMES_DIRECTIVE_ATTR,
        header: buildRepeatTimesForHeader({expression, indexAliasName: variable}),
    });
}

function buildRepeatTimesForHeader({
    expression,
    indexAliasName = '',
}: {
    expression: string;
    indexAliasName?: string;
}): string {
    const alias =
        indexAliasName && indexAliasName !== '_' && indexAliasName !== '$index'
            ? `; let ${indexAliasName} = $index`
            : '';

    return `@for (_ of '-'.repeat(${expression.trim()}); track $index${alias})`;
}

function replaceStructuralDirectiveWithForBlock({
    element,
    template,
    recorder,
    offset,
    attrName,
    header,
}: {
    attrName: string;
    element: Element;
    header: string;
    offset: number;
    recorder: UpdateRecorder;
    template: string;
}): boolean {
    const loc = element.sourceCodeLocation;
    const attrLoc = loc?.attrs?.[attrName];

    if (!loc || !attrLoc) {
        return false;
    }

    const indentStr = ' '.repeat(computeIndent(template, loc.startOffset));

    const isPureNgContainer =
        element.tagName === 'ng-container' && element.attrs.length === 1;

    if (isPureNgContainer) {
        const startTag = loc.startTag;

        if (!startTag) {
            return false;
        }

        const endTag = loc.endTag;

        recorder.remove(offset + loc.startOffset, startTag.endOffset - loc.startOffset);
        recorder.insertRight(offset + loc.startOffset, `${header} {`);

        if (endTag) {
            recorder.remove(
                offset + endTag.startOffset,
                endTag.endOffset - endTag.startOffset,
            );
            recorder.insertRight(offset + endTag.startOffset, `${indentStr}}`);
        }

        return true;
    }

    recorder.remove(
        offset + attrLoc.startOffset - 1,
        attrLoc.endOffset - attrLoc.startOffset + 1,
    );
    recorder.insertLeft(offset + loc.startOffset, `${header} {\n${indentStr}`);
    recorder.insertRight(offset + loc.endOffset, `\n${indentStr}}`);

    return true;
}

function replaceVariableInElement(
    element: Element,
    template: string,
    recorder: UpdateRecorder,
    offset: number,
    variable: string,
): void {
    const loc = element.sourceCodeLocation;

    if (!loc) {
        return;
    }

    const ngForLoc = loc.attrs?.[NGFOR_ATTR];
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
