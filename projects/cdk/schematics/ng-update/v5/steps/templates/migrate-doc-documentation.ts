import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

interface Replacement {
    startOffset: number;
    endOffset: number;
    replacement: string;
}

const DOC_PROPERTY_ATTRS = [
    'documentationPropertyMode',
    'documentationPropertyName',
    'documentationPropertyType',
    '[documentationPropertyValue]',
    '[(documentationPropertyValue)]',
    '(documentationPropertyValueChange)',
    '[documentationPropertyValues]',
].map((x) => x.toLowerCase());

export function migrateDocDocumentation({
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
    const elements = findElementsByTagName(template, 'tui-doc-documentation');

    const replacements: Replacement[] = [];

    elements.forEach((element) => {
        replacements.push(...buildOuterReplacement(template, element));
        collectInnerTemplates(element).forEach((inner) => {
            replacements.push(...buildInnerReplacement(template, inner));
        });
    });

    replacements
        .sort((a, b) => b.startOffset - a.startOffset)
        .forEach(({startOffset, endOffset, replacement}) => {
            recorder.remove(templateOffset + startOffset, endOffset - startOffset);
            recorder.insertRight(templateOffset + startOffset, replacement);
        });
}

function collectInnerTemplates(element: Element): Element[] {
    const found: Element[] = [];
    const visit = (nodes: ChildNode[] | undefined): void => {
        nodes?.forEach((node) => {
            const el = node as Element;

            if (el.tagName === 'ng-template' && hasDocPropertyAttr(el)) {
                found.push(el);
            }

            visit(el.childNodes);
        });
    };

    visit(element.childNodes);

    return found;
}

function hasDocPropertyAttr(element: Element): boolean {
    return (element.attrs ?? []).some((attr) =>
        DOC_PROPERTY_ATTRS.includes(attr.name.toLowerCase()),
    );
}

function buildOuterReplacement(template: string, element: Element): Replacement[] {
    const loc = element.sourceCodeLocation;
    const startTag = loc?.startTag;

    if (!startTag) {
        return [];
    }

    const replacements: Replacement[] = [];
    const startTagStr = template.slice(startTag.startOffset, startTag.endOffset);
    const isSelfClosing = startTagStr.trimEnd().endsWith('/>');

    const headingAttr = element.attrs.find((attr) => attr.name === 'heading');
    const otherAttrs = element.attrs.filter((attr) => attr.name !== 'heading');

    const attrsStr = ['tuiDocAPI', ...otherAttrs.map(formatAttr)].join(' ');
    const close = isSelfClosing ? ' />' : '>';
    let newStartTag = `<table ${attrsStr}${close}`;

    if (headingAttr?.value) {
        const indent = getLineIndent(template, startTag.startOffset);

        newStartTag = `<h3>${headingAttr.value}</h3>\n${indent}${newStartTag}`;
    }

    replacements.push({
        startOffset: startTag.startOffset,
        endOffset: startTag.endOffset,
        replacement: newStartTag,
    });

    if (loc.endTag) {
        replacements.push({
            startOffset: loc.endTag.startOffset,
            endOffset: loc.endTag.endOffset,
            replacement: '</table>',
        });
    }

    return replacements;
}

function buildInnerReplacement(template: string, element: Element): Replacement[] {
    const loc = element.sourceCodeLocation;
    const startTag = loc?.startTag;

    if (!startTag) {
        return [];
    }

    const replacements: Replacement[] = [];
    const startTagStr = template.slice(startTag.startOffset, startTag.endOffset);
    const isSelfClosing = startTagStr.trimEnd().endsWith('/>');

    const mode = getAttrValue(element, 'documentationPropertyMode');
    const name = getAttrValue(element, 'documentationPropertyName') ?? '';
    const type = getAttrValue(element, 'documentationPropertyType');
    const items = getAttrValue(element, '[documentationPropertyValues]');
    const twoWayValue = getAttrValue(element, '[(documentationPropertyValue)]');
    const oneWayValue = getAttrValue(element, '[documentationPropertyValue]');
    const valueChange = getAttrValue(element, '(documentationPropertyValueChange)');

    const refAttr = element.attrs.find(
        (attr) => attr.name.startsWith('#') && attr.value === 'documentationProperty',
    );
    const wrappedName = wrapName(name, mode);

    const orderedAttrs: string[] = [];

    if (refAttr) {
        orderedAttrs.push(getOriginalAttrName(template, element, refAttr.name));
    }

    if (wrappedName) {
        orderedAttrs.push(`name="${wrappedName}"`);
    }

    orderedAttrs.push('tuiDocAPIItem');

    if (type !== undefined) {
        orderedAttrs.push(`type="${type}"`);
    }

    if (items !== undefined) {
        orderedAttrs.push(`[items]="${items}"`);
    }

    if (twoWayValue !== undefined) {
        orderedAttrs.push(`[(value)]="${twoWayValue}"`);
    } else if (oneWayValue !== undefined) {
        orderedAttrs.push(`[value]="${oneWayValue}"`);
    }

    if (valueChange !== undefined) {
        orderedAttrs.push(`(valueChange)="${valueChange}"`);
    }

    const isMultiline = startTagStr.includes('\n');
    let newStartTag: string;

    if (isMultiline) {
        const elementIndent = getLineIndent(template, startTag.startOffset);
        const attrIndent = getAttrIndent(template, element) ?? `${elementIndent}    `;

        const lines = ['<tr'];

        orderedAttrs.forEach((attr) => lines.push(`${attrIndent}${attr}`));
        lines.push(isSelfClosing ? `${elementIndent}/>` : `${elementIndent}>`);
        newStartTag = lines.join('\n');
    } else {
        const close = isSelfClosing ? ' />' : '>';

        newStartTag = `<tr ${orderedAttrs.join(' ')}${close}`;
    }

    replacements.push({
        startOffset: startTag.startOffset,
        endOffset: startTag.endOffset,
        replacement: newStartTag,
    });

    if (loc.endTag) {
        replacements.push({
            startOffset: loc.endTag.startOffset,
            endOffset: loc.endTag.endOffset,
            replacement: '</tr>',
        });
    }

    return replacements;
}

function getAttrValue(element: Element, name: string): string | undefined {
    return element.attrs.find((attr) => attr.name === name.toLowerCase())?.value;
}

function getOriginalAttrName(template: string, element: Element, name: string): string {
    const loc = element.sourceCodeLocation?.attrs?.[name];

    if (!loc) {
        return name;
    }

    const slice = template.slice(loc.startOffset, loc.endOffset);
    const eqIdx = slice.indexOf('=');

    return eqIdx === -1 ? slice : slice.slice(0, eqIdx);
}

function getAttrIndent(template: string, element: Element): string | null {
    const firstAttr = element.attrs[0];

    if (!firstAttr) {
        return null;
    }

    const loc = element.sourceCodeLocation?.attrs?.[firstAttr.name];

    if (!loc) {
        return null;
    }

    const prevNl = template.lastIndexOf('\n', loc.startOffset - 1);

    if (prevNl === -1) {
        return null;
    }

    const candidate = template.slice(prevNl + 1, loc.startOffset);

    return /^\s*$/.test(candidate) ? candidate : null;
}

function formatAttr(attr: {name: string; value: string}): string {
    return attr.value ? `${attr.name}="${attr.value}"` : attr.name;
}

function wrapName(name: string, mode?: string): string {
    switch (mode) {
        case 'input':
            return `[${name}]`;
        case 'input-output':
            return `[(${name})]`;
        case 'output':
            return `(${name})`;
        default:
            return name;
    }
}

function getLineIndent(template: string, offset: number): string {
    const lastLineBreak = template.lastIndexOf('\n', offset - 1);

    if (lastLineBreak === -1) {
        return '';
    }

    const candidate = template.slice(lastLineBreak + 1, offset);

    return /^\s*$/.test(candidate) ? candidate : '';
}
