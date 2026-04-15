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
import {replaceTag} from '../../../utils/templates/replace-tag';

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type TextNode = DefaultTreeAdapterTypes.TextNode;

const DOCS_LINK = 'https://taiga-ui.dev/components/combo-box';

const CONTROL_ATTR_NAMES = [
    'formControlName',
    '[formControl]',
    'formControl',
    '[(ngModel)]',
    '[ngModel]',
    'ngModel',
] as const;

const CONTROL_ATTRS = new Set(CONTROL_ATTR_NAMES.map((name) => name.toLowerCase()));

const INPUT_ATTRS = new Set(['[strictMatcher]'.toLowerCase(), '[strict]']);

const REMOVE_ATTRS = new Set([
    '[tuiTextfieldLabelOutside]'.toLowerCase(),
    'tuiTextfieldLabelOutside'.toLowerCase(),
]);

export function migrateComboBox({
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
    const elements = findElementsByTagName(template, 'tui-combo-box');

    elements.forEach((element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        const controlAttrs = element.attrs.filter((attr) =>
            CONTROL_ATTRS.has(attr.name.toLowerCase()),
        );

        const inputAttrs = element.attrs.filter((attr) =>
            INPUT_ATTRS.has(attr.name.toLowerCase()),
        );

        const removeAttrs = element.attrs.filter((attr) =>
            REMOVE_ATTRS.has(attr.name.toLowerCase()),
        );

        const labelOutsideAttr = removeAttrs.find((attr) =>
            REMOVE_ATTRS.has(attr.name.toLowerCase()),
        );

        const searchAttr = element.attrs.find(
            (attr) => attr.name.toLowerCase() === '[search]',
        );

        const searchChangeAttr = element.attrs.find(
            (attr) => attr.name.toLowerCase() === '(searchChange)'.toLowerCase(),
        );

        const valueContentAttr = element.attrs.find(
            (attr) => attr.name.toLowerCase() === '[valueContent]'.toLowerCase(),
        );

        for (const attr of [...controlAttrs, ...inputAttrs, ...removeAttrs]) {
            removeAttr(recorder, templateOffset, element, attr.name, template);
        }

        if (searchAttr) {
            removeAttr(recorder, templateOffset, element, searchAttr.name, template);
        }

        if (searchChangeAttr) {
            removeAttr(
                recorder,
                templateOffset,
                element,
                searchChangeAttr.name,
                template,
            );
        }

        const addAttributes: string[] = [];

        if (valueContentAttr) {
            removeAttr(recorder, templateOffset, element, '[valueContent]', template);
            addAttributes.push(
                '#textfieldRef',
                `[content]="textfieldRef.focused() ? '' : ${valueContentAttr.value}"`,
            );
        }

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-combo-box',
            'tui-textfield',
            template,
            templateOffset,
            addAttributes,
        );

        if (searchAttr || searchChangeAttr) {
            const searchTodo = [
                `<!-- ${TODO_MARK} tui-combo-box migration (see ${DOCS_LINK}):`,
                '     - [search] / (searchChange): use native (input) event on <input tuiComboBox>',
                '-->\n',
            ].join('\n');
            const insertAt = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;

            recorder.insertLeft(insertAt, searchTodo);
        }

        const searchHandler = searchChangeAttr
            ? ` (input)="${searchChangeAttr.value.replaceAll('$event', '$event.target.value')}"`
            : '';

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        const isBinding = labelOutsideAttr?.name.startsWith('[') ?? false;
        const isLabelOutsideTrue =
            labelOutsideAttr?.value === 'true' ||
            (!!labelOutsideAttr && !isBinding && labelOutsideAttr.value === '');
        const isLabelOutsideDynamic =
            !!labelOutsideAttr &&
            !isLabelOutsideTrue &&
            labelOutsideAttr.value !== 'false';

        if (inputs.length) {
            handleExistingInput({
                inputs,
                recorder,
                templateOffset,
                template,
                controlAttrs,
                inputAttrs,
                searchHandler,
                placeholder: isLabelOutsideTrue ? getPlaceholderText(element) : '',
            });
        } else {
            handleGeneratedInput({
                element,
                recorder,
                templateOffset,
                controlAttrs,
                inputAttrs,
                searchHandler,
                sourceCodeLocation,
                isLabelOutsideTrue,
                template,
            });
        }

        if (!labelOutsideAttr || labelOutsideAttr.value === 'false') {
            wrapTextInLabel(recorder, templateOffset, element);
        } else if (isLabelOutsideTrue && inputs.length) {
            removeTextNode(recorder, templateOffset, element);
        } else if (isLabelOutsideDynamic) {
            addLabelOutsideTodo(recorder, templateOffset, element, template);
        }
    });
}

function handleExistingInput({
    inputs,
    recorder,
    templateOffset,
    template,
    controlAttrs,
    inputAttrs,
    searchHandler,
    placeholder,
}: {
    controlAttrs: Array<{name: string; value: string}>;
    inputAttrs: Array<{name: string; value: string}>;
    inputs: Element[];
    placeholder: string;
    recorder: UpdateRecorder;
    searchHandler: string;
    template: string;
    templateOffset: number;
}): void {
    inputs.forEach((input) => {
        const legacyAttr = input.attrs.find((attr) =>
            /^tuitextfieldlegacy$/i.test(attr.name),
        );

        if (legacyAttr) {
            const {startOffset = 0, endOffset = 0} =
                input.sourceCodeLocation?.attrs?.[legacyAttr.name] ?? {};

            const lineStart = template.lastIndexOf('\n', startOffset) + 1;
            const lineEnd = template.indexOf('\n', endOffset);
            const lineText = lineEnd === -1 ? '' : template.slice(lineStart, lineEnd);
            const attrText = template.slice(startOffset, endOffset);

            if (lineText.trim() === attrText.trim() && lineEnd !== -1) {
                recorder.remove(templateOffset + lineStart, lineEnd - lineStart + 1);
            } else {
                recorder.remove(templateOffset + startOffset, endOffset - startOffset);
            }
        }

        const insertOffset =
            (input.sourceCodeLocation?.startTag?.startOffset ?? 0) + '<input'.length;
        const formAttrs = formatControlAttrs(controlAttrs);
        const inputAttrStr = formatInputAttrs(inputAttrs);
        const placeholderAttr = placeholder ? ` placeholder="${placeholder}"` : '';

        recorder.insertRight(
            templateOffset + insertOffset,
            ` tuiComboBox${formAttrs}${inputAttrStr}${searchHandler}${placeholderAttr}`,
        );
    });
}

function handleGeneratedInput({
    element,
    recorder,
    templateOffset,
    controlAttrs,
    inputAttrs,
    searchHandler,
    sourceCodeLocation,
    isLabelOutsideTrue,
}: {
    controlAttrs: Array<{name: string; value: string}>;
    element: Element;
    inputAttrs: Array<{name: string; value: string}>;
    isLabelOutsideTrue: boolean;
    recorder: UpdateRecorder;
    searchHandler: string;
    sourceCodeLocation: Element['sourceCodeLocation'];
    templateOffset: number;
}): void {
    const formAttrs = formatControlAttrs(controlAttrs);
    const inputAttrStr = formatInputAttrs(inputAttrs);

    const labelNode = findTextNode(element);

    if (isLabelOutsideTrue && labelNode) {
        const labelText = labelNode.value.trim();
        const textStart = labelNode.sourceCodeLocation?.startOffset ?? 0;
        const textEnd = labelNode.sourceCodeLocation?.endOffset ?? 0;

        recorder.remove(templateOffset + textStart, textEnd - textStart);

        recorder.insertRight(
            templateOffset + textStart,
            `\n<input tuiComboBox${formAttrs}${inputAttrStr}${searchHandler} placeholder="${labelText}" />\n`,
        );

        return;
    }

    const insertOffset = labelNode
        ? (labelNode.sourceCodeLocation?.endOffset ?? 0)
        : (sourceCodeLocation?.endTag?.startOffset ?? 0);

    recorder.insertRight(
        templateOffset + insertOffset,
        `\n<input tuiComboBox${formAttrs}${inputAttrStr}${searchHandler} />\n`,
    );
}

function findTextNode(element: Element): TextNode | undefined {
    return element.childNodes.find(
        (node: ChildNode): node is TextNode =>
            node.nodeName === '#text' && !!(node as TextNode).value.trim(),
    );
}

function getPlaceholderText(element: Element): string {
    return findTextNode(element)?.value.trim() ?? '';
}

function removeTextNode(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
): void {
    const labelNode = findTextNode(element);

    if (!labelNode) {
        return;
    }

    const textStart = labelNode.sourceCodeLocation?.startOffset ?? 0;
    const textEnd = labelNode.sourceCodeLocation?.endOffset ?? 0;

    recorder.remove(templateOffset + textStart, textEnd - textStart);
}

function addLabelOutsideTodo(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
    template: string,
): void {
    const elementStart = element.sourceCodeLocation?.startOffset ?? 0;
    const lineStart = template.lastIndexOf('\n', elementStart - 1) + 1;
    const indent = template.slice(lineStart, elementStart);

    recorder.insertRight(
        templateOffset + elementStart,
        `<!-- ${TODO_MARK} [tuiTextfieldLabelOutside] is dynamic and cannot be migrated automatically. Use <label tuiLabel> inside <tui-textfield> for floating label or input[placeholder] for outside label -->\n${indent}`,
    );
}

function wrapTextInLabel(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
): void {
    const labelNode = findTextNode(element);

    if (!labelNode) {
        return;
    }

    const labelTextStart =
        (labelNode.sourceCodeLocation?.startOffset ?? 0) + templateOffset;
    const labelTextEnd = (labelNode.sourceCodeLocation?.endOffset ?? 0) + templateOffset;

    recorder.insertRight(labelTextStart, '\n<label tuiLabel>');
    recorder.insertRight(labelTextEnd, '</label>\n');
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

function formatControlAttrs(attrs: Array<{name: string; value: string}>): string {
    return attrs
        .map(({name, value}) => ` ${normalizeAttrName(name)}="${value}"`)
        .join('');
}

function formatInputAttrs(attrs: Array<{name: string; value: string}>): string {
    return attrs
        .map(({name, value}) => {
            const attrName =
                name.toLowerCase() === '[strictMatcher]'.toLowerCase()
                    ? '[matcher]'
                    : normalizeAttrName(name);

            return ` ${attrName}="${value}"`;
        })
        .join('');
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
        case '[strict]':
            return '[strict]';
        default:
            return name;
    }
}
