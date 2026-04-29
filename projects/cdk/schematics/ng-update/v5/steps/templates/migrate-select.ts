import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {TODO_MARK} from '../../../../utils/insert-todo';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces/template-resource';
import {
    getControlStateAttrs,
    removeControlStateAttrs,
    stringifyControlStateAttrs,
} from '../../../utils/templates/control-state-attrs';
import {replaceTag} from '../../../utils/templates/replace-tag';

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type TextNode = DefaultTreeAdapterTypes.TextNode;

const SELECT_MIGRATION_TODO = `<!-- ${TODO_MARK} tui-select was partially migrated. Complete migration manually. See examples: https://taiga-ui.dev/components/select -->\n`;
const VALUE_CONTENT_ATTR = 'valueContent';
const CONTENT_ATTR = 'content';
const TEXTFIELD_LABEL_OUTSIDE_ATTR = 'tuiTextfieldLabelOutside';
const CONTROL_ATTR_NAMES = [
    'formControlName',
    '[formControl]',
    'formControl',
    '[(ngModel)]',
    '[ngModel]',
    'ngModel',
] as const;
const CONTROL_ATTRS = new Set(CONTROL_ATTR_NAMES.map((name) => name.toLowerCase()));

export function migrateSelect({
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
    const elements = findElementsByTagName(template, 'tui-select');

    elements.forEach((element) => {
        const startOffset = element.sourceCodeLocation?.startOffset;
        const controlAttrs = element.attrs.filter((attr) =>
            CONTROL_ATTRS.has(attr.name.toLowerCase()),
        );
        const controlStateAttrs = getControlStateAttrs(element);

        if (typeof startOffset === 'number') {
            recorder.insertLeft(templateOffset + startOffset, SELECT_MIGRATION_TODO);
        }

        renameAttr(
            recorder,
            templateOffset,
            element,
            `[${VALUE_CONTENT_ATTR}]`,
            `[${CONTENT_ATTR}]`,
        );
        renameAttr(recorder, templateOffset, element, VALUE_CONTENT_ATTR, CONTENT_ATTR);
        const labelOutsideAttr = element.attrs.find(
            (attr) =>
                attr.name.toLowerCase() ===
                    `[${TEXTFIELD_LABEL_OUTSIDE_ATTR}]`.toLowerCase() ||
                attr.name.toLowerCase() === TEXTFIELD_LABEL_OUTSIDE_ATTR.toLowerCase(),
        );
        const isBinding = labelOutsideAttr?.name.startsWith('[') ?? false;
        const isLabelOutsideTrue =
            labelOutsideAttr?.value === 'true' ||
            (!!labelOutsideAttr && !isBinding && labelOutsideAttr.value === '');
        const isLabelOutsideDynamic =
            !!labelOutsideAttr &&
            !isLabelOutsideTrue &&
            labelOutsideAttr.value !== 'false';

        removeAttr(
            recorder,
            templateOffset,
            element,
            `[${TEXTFIELD_LABEL_OUTSIDE_ATTR}]`,
            template,
        );
        removeAttr(
            recorder,
            templateOffset,
            element,
            TEXTFIELD_LABEL_OUTSIDE_ATTR,
            template,
        );
        controlAttrs.forEach((attr) => {
            removeAttr(recorder, templateOffset, element, attr.name, template);
        });
        removeControlStateAttrs(
            recorder,
            templateOffset,
            element,
            template,
            controlStateAttrs,
        );

        const hasChevron = element.attrs.some(
            (attr) => attr.name.toLowerCase() === 'tuiChevron'.toLowerCase(),
        );

        replaceTag(
            recorder,
            element.sourceCodeLocation,
            'tui-select',
            'tui-textfield',
            template,
            templateOffset,
            hasChevron ? [] : ['tuiChevron'],
        );

        const placeholder = getPlaceholderText(element);

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        if (inputs.length) {
            if (isLabelOutsideTrue && placeholder) {
                removeTextContent(recorder, templateOffset, element);
            } else if (!isLabelOutsideDynamic && !isLabelOutsideTrue) {
                wrapTextInLabel(recorder, templateOffset, element);
            }

            inputs.forEach((input) => {
                input.attrs.forEach((attr) => {
                    if (!/^tuitextfieldlegacy$|^tuitextfield$/i.test(attr.name)) {
                        return;
                    }

                    const {startOffset = 0, endOffset = 0} =
                        input.sourceCodeLocation?.attrs?.[attr.name] ?? {};

                    recorder.remove(
                        templateOffset + startOffset,
                        endOffset - startOffset,
                    );
                    recorder.insertRight(templateOffset + startOffset, 'tuiSelect');
                });

                const formAttrs = formatControlAttrs(controlAttrs);
                const controlStateStr = stringifyControlStateAttrs(controlStateAttrs);
                const placeholderAttr =
                    isLabelOutsideTrue && placeholder
                        ? ` placeholder="${placeholder}"`
                        : '';

                const insertOffset =
                    (input.sourceCodeLocation?.startTag?.startOffset ?? 0) +
                    '<input'.length;

                if (formAttrs || placeholderAttr || controlStateStr) {
                    recorder.insertRight(
                        templateOffset + insertOffset,
                        `${placeholderAttr}${formAttrs ? ` ${formAttrs}` : ''}${controlStateStr}`,
                    );
                }
            });
        } else {
            const formAttrs = formatControlAttrs(controlAttrs);
            const controlStateStr = stringifyControlStateAttrs(controlStateAttrs);
            const firstElementChildOffset = element.childNodes.find(
                (node): node is Element => node.nodeName !== '#text',
            )?.sourceCodeLocation?.startOffset;
            const insertOffset =
                firstElementChildOffset ??
                element.sourceCodeLocation?.endTag?.startOffset ??
                0;
            const placeholderAttr =
                isLabelOutsideTrue && placeholder ? ` placeholder="${placeholder}"` : '';
            const inputTemplate = `\n<input${placeholderAttr} tuiSelect${formAttrs ? ` ${formAttrs}` : ''}${controlStateStr} />\n`;

            if (isLabelOutsideTrue) {
                removeTextContent(recorder, templateOffset, element);
            } else if (!isLabelOutsideDynamic) {
                wrapTextInLabel(recorder, templateOffset, element);
            }

            recorder.insertRight(templateOffset + insertOffset, inputTemplate);
        }

        if (isLabelOutsideDynamic && typeof startOffset === 'number') {
            const lineStart = template.lastIndexOf('\n', startOffset - 1) + 1;
            const indent =
                /^[ \t]*/.exec(template.slice(lineStart, startOffset))?.[0] ?? '';

            recorder.insertRight(
                templateOffset + startOffset,
                `<!-- ${TODO_MARK} [tuiTextfieldLabelOutside] is dynamic and cannot be migrated automatically. Use <label tuiLabel> inside <tui-textfield> for floating label or input[placeholder] for outside label -->\n${indent}`,
            );
        }
    });
}

function renameAttr(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
    from: string,
    to: string,
): void {
    const attrLocation = element.sourceCodeLocation?.attrs?.[from.toLowerCase()];

    if (!attrLocation) {
        return;
    }

    recorder.remove(templateOffset + attrLocation.startOffset, from.length);
    recorder.insertRight(templateOffset + attrLocation.startOffset, to);
}

function removeAttr(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
    name: string,
    template: string,
): void {
    const attrLocation = element.sourceCodeLocation?.attrs?.[name.toLowerCase()];

    if (!attrLocation) {
        return;
    }

    const lineStart = template.lastIndexOf('\n', attrLocation.startOffset) + 1;
    const lineEnd = template.indexOf('\n', attrLocation.endOffset);
    const attrText = template.slice(attrLocation.startOffset, attrLocation.endOffset);
    const lineText = lineEnd === -1 ? '' : template.slice(lineStart, lineEnd);

    if (lineText.trim() === attrText.trim() && lineEnd !== -1) {
        recorder.remove(templateOffset + lineStart, lineEnd - lineStart + 1);

        return;
    }

    recorder.remove(
        templateOffset + attrLocation.startOffset - 1,
        attrLocation.endOffset - attrLocation.startOffset + 1,
    );
}

function getPlaceholderText(element: Element): string {
    const textNode = element.childNodes.find((node): node is TextNode => {
        if (!isTextNode(node)) {
            return false;
        }

        return !!node.value.trim();
    });

    return textNode?.value.trim() ?? '';
}

function removeTextContent(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
): void {
    element.childNodes.forEach((node) => {
        if (node.nodeName !== '#text') {
            return;
        }

        const textNode = node as TextNode;
        const start = textNode.sourceCodeLocation?.startOffset ?? 0;
        const end = textNode.sourceCodeLocation?.endOffset ?? start;

        if (!textNode.value.trim()) {
            return;
        }

        recorder.remove(templateOffset + start, end - start);
    });
}

function formatControlAttrs(attrs: Array<{name: string; value: string}>): string {
    return attrs
        .map(({name, value}) => `${normalizeAttrName(name)}="${value}"`)
        .join(' ');
}

function normalizeAttrName(name: string): string {
    switch (name.toLowerCase()) {
        case '[(ngModel)]'.toLowerCase():
            return '[(ngModel)]';
        case '[formControl]'.toLowerCase():
            return '[formControl]';
        case '[ngModel]'.toLowerCase():
            return '[ngModel]';
        case 'formControl'.toLowerCase():
            return 'formControl';
        case 'formControlName'.toLowerCase():
            return 'formControlName';
        case 'ngModel'.toLowerCase():
            return 'ngModel';
        default:
            return name;
    }
}

function wrapTextInLabel(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
): void {
    const textNode = element.childNodes.find(
        (node): node is TextNode => isTextNode(node) && !!node.value.trim(),
    );

    if (!textNode) {
        return;
    }

    const start = (textNode.sourceCodeLocation?.startOffset ?? 0) + templateOffset;
    const end = (textNode.sourceCodeLocation?.endOffset ?? 0) + templateOffset;

    recorder.insertRight(start, '\n<label tuiLabel>');
    recorder.insertRight(end, '</label>\n');
}

function isTextNode(node: ChildNode): node is TextNode {
    return node.nodeName === '#text';
}
