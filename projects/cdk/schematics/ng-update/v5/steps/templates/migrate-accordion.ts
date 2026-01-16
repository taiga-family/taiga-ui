import {type UpdateRecorder} from '@angular-devkit/schematics';
import {hasAncestor} from '../../../utils/templates';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {
    findElementsByFn,
    findElementsByTagName,
    hasElementAttribute,
} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

type Element = DefaultTreeAdapterTypes.Element;

export function migrateAccordionItem({
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
    const items = findElementsByTagName(template, 'tui-accordion-item').filter(
        (element) => !hasAncestor(element, 'tui-accordion-item'),
    );

    const replacements = items
        .map((element) =>
            buildReplacement(template, element, {
                isStandalone: !hasAncestor(element, 'tui-accordion'),
            }),
        )
        .filter((x): x is Replacement => Boolean(x))
        .sort((a, b) => b.startOffset - a.startOffset);

    replacements.forEach(({startOffset, endOffset, replacement}) => {
        recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        recorder.insertRight(templateOffset + startOffset, replacement);
    });
}

interface Replacement {
    startOffset: number;
    endOffset: number;
    replacement: string;
}

function buildReplacement(
    template: string,
    element: Element,
    options: {isStandalone: boolean},
): Replacement | null {
    const loc = element.sourceCodeLocation;
    const startTag = loc?.startTag;
    const endTag = loc?.endTag;

    if (!startTag || !endTag) {
        return null;
    }

    // cspell:disable
    const contentElements = findElementsByFn([element], (el) =>
        hasElementAttribute(el, 'tuiaccordionitemcontent'),
    );
    const contentElement = contentElements[contentElements.length - 1];

    if (!contentElement?.sourceCodeLocation?.startTag) {
        return null;
    }

    const contentStart = contentElement.sourceCodeLocation.startTag.startOffset;
    const contentEnd = contentElement.sourceCodeLocation.endTag?.endOffset;
    const headerRaw = template.slice(startTag.endOffset, contentStart);
    const header = normalizePlainText(normalizeBlock(headerRaw));
    const contentRaw =
        contentEnd !== undefined
            ? template.slice(
                  contentElement.sourceCodeLocation.startTag.endOffset,
                  contentElement.sourceCodeLocation.endTag?.startOffset ?? contentEnd,
              )
            : '';
    const contentBlock = normalizeBlock(transformAccordionItems(contentRaw));
    const content = normalizePlainText(contentBlock);
    const forceBlock = contentBlock.includes('\n');

    const {indent, startOffset} = getLineIndent(template, startTag.startOffset);
    const buttonAttr = getButtonAttr(element);
    const isLazy = options.isStandalone && contentElement.tagName === 'ng-template';
    const lineIndent = options.isStandalone ? `${indent}    ` : indent;

    const ATTRS_TO_REMOVE = [
        'borders',
        'disableHover',
        'showArrow',
        'async',
        'rounded',
        'tuiaccordionitemcontent',
    ];

    const attributes = element.attrs
        .filter(
            (attr) =>
                !isOpenAttr(attr.name) &&
                !ATTRS_TO_REMOVE.includes(attr.name.toLowerCase()),
        )
        .map((attr) => `${attr.name}${attr.value ? `="${attr.value}"` : ''}`);

    const classAttr = attributes.find((attr) => attr.startsWith('class'));

    if (classAttr) {
        attributes.splice(attributes.indexOf(classAttr), 1);
    }

    const otherAttrs = attributes.length ? ` ${attributes.join(' ')}` : '';
    const classAttrStr = classAttr ? ` ${classAttr}` : '';

    const button = buildButton(header, `${buttonAttr}${otherAttrs}`, lineIndent);
    const expand = buildExpand(content, isLazy, lineIndent, forceBlock, classAttrStr);

    const replacement = options.isStandalone
        ? [`${indent}<tui-accordion>`, button, expand, `${indent}</tui-accordion>`].join(
              '\n',
          )
        : [button, expand].join('\n');

    return {
        startOffset,
        endOffset: endTag.endOffset,
        replacement,
    };
}

function getButtonAttr(element: Element): string {
    const openAttr = element.attrs.find((attr) => isOpenAttr(attr.name));

    if (!openAttr) {
        return 'tuiAccordion';
    }

    if (openAttr.name === 'open') {
        return openAttr.value ? `tuiAccordion="${openAttr.value}"` : 'tuiAccordion';
    }

    if (openAttr.name === '[open]') {
        return openAttr.value ? `[tuiAccordion]="${openAttr.value}"` : '[tuiAccordion]';
    }

    if (openAttr.name === '[(open)]') {
        return openAttr.value
            ? `[(tuiAccordion)]="${openAttr.value}"`
            : '[(tuiAccordion)]';
    }

    return 'tuiAccordion';
}

function isOpenAttr(name: string): boolean {
    return name === 'open' || name === '[open]' || name === '[(open)]';
}

function transformAccordionItems(html: string): string {
    const items = findElementsByTagName(html, 'tui-accordion-item').filter(
        (element) => !hasAncestor(element, 'tui-accordion-item'),
    );

    if (!items.length) {
        return html;
    }

    const replacements = items
        .map((element) =>
            buildReplacement(html, element, {
                isStandalone: !hasAncestor(element, 'tui-accordion'),
            }),
        )
        .filter((x): x is Replacement => Boolean(x))
        .sort((a, b) => b.startOffset - a.startOffset);

    let next = html;

    replacements.forEach(({startOffset, endOffset, replacement}) => {
        next = `${next.slice(0, startOffset)}${replacement}${next.slice(endOffset)}`;
    });

    return next;
}

function getLineIndent(
    template: string,
    offset: number,
): {indent: string; startOffset: number} {
    const lastLineBreak = template.lastIndexOf('\n', offset);

    if (lastLineBreak === -1) {
        return {indent: '', startOffset: offset};
    }

    const lineStart = lastLineBreak + 1;
    const indentation = template.slice(lineStart, offset);

    if (indentation.trim()) {
        return {indent: '', startOffset: offset};
    }

    return {indent: indentation, startOffset: lineStart};
}

function normalizeBlock(value: string): string {
    const lines = value.split('\n');

    while (lines.length && lines[0]?.trim() === '') {
        lines.shift();
    }

    while (lines.length && lines[lines.length - 1]?.trim() === '') {
        lines.pop();
    }

    let minIndent = Infinity;

    lines.forEach((line) => {
        if (line.trim()) {
            const indent = /^\s*/.exec(line)?.[0].length ?? 0;

            minIndent = Math.min(minIndent, indent);
        }
    });

    if (!Number.isFinite(minIndent)) {
        minIndent = 0;
    }

    return lines.map((line) => line.slice(minIndent)).join('\n');
}

function normalizePlainText(value: string): string {
    const trimmed = value.trim();
    const hasMarkup = /<[^>]+>/.test(trimmed) || /{{|}}/.test(trimmed);

    if (hasMarkup) {
        return value;
    }

    return trimmed.replaceAll(/\s+/g, ' ');
}

function buildButton(content: string, attr: string, indent: string): string {
    if (!content.includes('\n')) {
        return `${indent}<button ${attr}>${content}</button>`;
    }

    return [
        `${indent}<button ${attr}>`,
        ...indentLines(content, `${indent}    `),
        `${indent}</button>`,
    ].join('\n');
}

function buildExpand(
    content: string,
    isLazy: boolean,
    indent: string,
    forceBlock: boolean,
    classAttr = '',
): string {
    if (!content.includes('\n') && !isLazy && !forceBlock) {
        return `${indent}<tui-expand${classAttr}>${content}</tui-expand>`;
    }

    if (!content.includes('\n') && isLazy && !forceBlock) {
        return [
            `${indent}<tui-expand${classAttr}>`,
            `${indent}    <ng-container *tuiItem>${content}</ng-container>`,
            `${indent}</tui-expand>`,
        ].join('\n');
    }

    const contentLines = indentLines(content, `${indent}    `);

    if (!isLazy) {
        return [
            `${indent}<tui-expand${classAttr}>`,
            ...contentLines,
            `${indent}</tui-expand>`,
        ].join('\n');
    }

    return [
        `${indent}<tui-expand${classAttr}>`,
        `${indent}    <ng-container *tuiItem>`,
        ...indentLines(content, `${indent}        `),
        `${indent}    </ng-container>`,
        `${indent}</tui-expand>`,
    ].join('\n');
}

function indentLines(value: string, indent: string): string[] {
    return value.split('\n').map((line) => (line ? `${indent}${line}` : line));
}
