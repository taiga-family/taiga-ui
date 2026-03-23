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

const INPUT_ATTRS = new Set(['[strict]', '[strictmatcher]']);

const REMOVE_ATTRS = new Set(['[tuitextfieldlabeloutside]', 'tuitextfieldlabeloutside']);

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

        const searchAttr = element.attrs.find(
            (attr) => attr.name.toLowerCase() === '[search]',
        );

        const searchChangeAttr = element.attrs.find(
            (attr) => attr.name.toLowerCase() === '(searchchange)',
        );

        const valueContentAttr = element.attrs.find(
            (attr) => attr.name.toLowerCase() === '[valuecontent]',
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
            // Handle [valueContent] → #textfieldRef [content]="textfieldRef.focused() ? '' : VALUE"
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

        if (inputs.length) {
            handleExistingInput({
                inputs,
                recorder,
                templateOffset,
                template,
                controlAttrs,
                inputAttrs,
                searchHandler,
            });
            wrapTextInLabel(recorder, templateOffset, element);
        } else {
            handleGeneratedInput({
                element,
                recorder,
                templateOffset,
                controlAttrs,
                inputAttrs,
                searchHandler,
                sourceCodeLocation,
            });
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
}: {
    controlAttrs: Array<{name: string; value: string}>;
    inputAttrs: Array<{name: string; value: string}>;
    inputs: Element[];
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

        recorder.insertRight(
            templateOffset + insertOffset,
            ` tuiComboBox${formAttrs}${inputAttrStr}${searchHandler}`,
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
}: {
    controlAttrs: Array<{name: string; value: string}>;
    element: Element;
    inputAttrs: Array<{name: string; value: string}>;
    recorder: UpdateRecorder;
    searchHandler: string;
    sourceCodeLocation: Element['sourceCodeLocation'];
    templateOffset: number;
}): void {
    const formAttrs = formatControlAttrs(controlAttrs);
    const inputAttrStr = formatInputAttrs(inputAttrs);

    wrapTextInLabel(recorder, templateOffset, element);

    const labelNode = element.childNodes.find(
        (node): node is TextNode =>
            node.nodeName === '#text' && !!(node as TextNode).value.trim(),
    );
    const insertOffset = labelNode
        ? (labelNode.sourceCodeLocation?.endOffset ?? 0)
        : (sourceCodeLocation?.endTag?.startOffset ?? 0);

    recorder.insertRight(
        templateOffset + insertOffset,
        `\n<input tuiComboBox${formAttrs}${inputAttrStr}${searchHandler} />\n`,
    );
}

function wrapTextInLabel(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
): void {
    const labelNode = element.childNodes.find(
        (node: ChildNode): node is TextNode =>
            node.nodeName === '#text' && !!(node as TextNode).value.trim(),
    );

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
                name.toLowerCase() === '[strictmatcher]'
                    ? '[matcher]'
                    : normalizeAttrName(name);

            return ` ${attrName}="${value}"`;
        })
        .join('');
}

function normalizeAttrName(name: string): string {
    switch (name.toLowerCase()) {
        case '[(ngmodel)]':
            return '[(ngModel)]';
        case '[formcontrol]':
            return '[formControl]';
        case '[ngmodel]':
            return '[ngModel]';
        case '[strict]':
            return '[strict]';
        case 'formcontrol':
            return 'formControl';
        case 'formcontrolname':
            return 'formControlName';
        case 'ngmodel':
            return 'ngModel';
        default:
            return name;
    }
}
