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

type TextNode = DefaultTreeAdapterTypes.TextNode;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type Element = DefaultTreeAdapterTypes.Element;

const DOCS_LINK = 'https://taiga-ui.dev/components/input-date';

const INPUT_ATTRS = new Set([
    '[min]'.toLowerCase(),
    '[max]'.toLowerCase(),
    'min'.toLowerCase(),
    'max'.toLowerCase(),
]);

const CALENDAR_ATTRS = new Set([
    '[disabledItemHandler]'.toLowerCase(),
    '[markerHandler]'.toLowerCase(),
]);

const TODO_ATTRS = new Set([
    '[tagValidator]'.toLowerCase(),
    '[search]'.toLowerCase(),
    '[(search)]'.toLowerCase(),
    '(searchChange)'.toLowerCase(),
    '[rows]'.toLowerCase(),
    'rows'.toLowerCase(),
    '[defaultActiveYearMonth]'.toLowerCase(),
    'defaultActiveYearMonth'.toLowerCase(),
    '[placeholder]'.toLowerCase(),
    'placeholder'.toLowerCase(),
]);

const DROPPED_ATTRS = new Set([
    '[editable]'.toLowerCase(),
    'editable'.toLowerCase(),
    '[inputHidden]'.toLowerCase(),
    'inputHidden'.toLowerCase(),
]);

export function migrateInputDateMulti({
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
    const elements = findElementsByTagName(template, 'tui-input-date');

    elements.forEach((element: Element) => {
        // Only process elements with `multiple` attribute
        if (!element.attrs.some((attr) => attr.name === 'multiple')) {
            return;
        }

        const sourceCodeLocation = element.sourceCodeLocation;

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-date',
            'tui-textfield',
            template,
            templateOffset,
        );

        const allAttrs = [...element.attrs];

        // Remove `multiple` attribute
        const multipleAttr = allAttrs.find((attr) => attr.name === 'multiple');

        if (multipleAttr) {
            const {startOffset = 0, endOffset = 0} =
                element.sourceCodeLocation?.attrs?.['multiple'] ?? {};

            recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        }

        // Add `multi` to the new tui-textfield opening tag
        const openTagEnd = sourceCodeLocation?.startTag?.endOffset ?? 0;

        recorder.insertRight(templateOffset + openTagEnd - 1, ' multi');

        const controlAttrs = allAttrs.filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const inputAttrs = allAttrs.filter((attr) =>
            INPUT_ATTRS.has(attr.name.toLowerCase()),
        );

        const calendarAttrs = allAttrs.filter((attr) =>
            CALENDAR_ATTRS.has(attr.name.toLowerCase()),
        );

        const todoAttrs = allAttrs.filter((attr) =>
            TODO_ATTRS.has(attr.name.toLowerCase()),
        );

        const droppedAttrs = allAttrs.filter((attr) =>
            DROPPED_ATTRS.has(attr.name.toLowerCase()),
        );

        for (const attr of [
            ...controlAttrs,
            ...inputAttrs,
            ...calendarAttrs,
            ...todoAttrs,
            ...droppedAttrs,
        ]) {
            const {startOffset = 0, endOffset = 0} =
                element.sourceCodeLocation?.attrs?.[attr.name] ?? {};

            recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        }

        const labelIndex = element.childNodes.findIndex(
            (node: ChildNode) =>
                node.nodeName === '#text' && (node as TextNode)?.value.trim(),
        );

        if (labelIndex !== -1) {
            const labelNode = element.childNodes[labelIndex];
            const labelTextStart =
                (labelNode?.sourceCodeLocation?.startOffset ?? 0) + templateOffset;
            const labelTextEnd =
                (labelNode?.sourceCodeLocation?.endOffset ?? 0) + templateOffset;

            recorder.insertRight(labelTextStart, '\n<label tuiLabel>');
            recorder.insertRight(labelTextEnd, '</label>\n');
        }

        if (todoAttrs.length > 0) {
            const names = todoAttrs.map((a) => a.name).join(', ');
            const todoComment = [
                `<!-- ${TODO_MARK} tui-input-date multiple migration (see ${DOCS_LINK}):`,
                `     - ${names}: no direct equivalent in v5. Update component logic manually. -->`,
            ].join('\n');
            const insertAt = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;

            recorder.insertLeft(insertAt, `${todoComment}\n`);
        }

        const insertOffset =
            (sourceCodeLocation?.endTag?.startOffset ?? 0) + templateOffset;

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        const migrationAttrs = [...controlAttrs, ...inputAttrs].reduce(
            (result, attr) => {
                const name = normalizeAttrName(attr.name);

                return attr.value
                    ? `${result} ${name}="${attr.value}"`
                    : `${result} ${name}`;
            },
            '',
        );

        const calendarAttrStr = calendarAttrs.reduce((result, attr) => {
            return attr.value
                ? `${result} ${attr.name}="${attr.value}"`
                : `${result} ${attr.name}`;
        }, '');

        if (!inputs.length) {
            recorder.insertRight(
                insertOffset,
                `\n<input tuiInputDateMulti${migrationAttrs} />\n<tui-calendar *tuiDropdown${calendarAttrStr} />\n`,
            );
        } else {
            recorder.insertRight(
                insertOffset,
                `\n<tui-calendar *tuiDropdown${calendarAttrStr} />\n`,
            );
        }

        for (const input of inputs) {
            input.attrs.forEach((attr) => {
                if (/^tuiTextfield$|^tuiTextfieldLegacy$/i.exec(attr.name)) {
                    const {startOffset = 0, endOffset = 0} =
                        input.sourceCodeLocation?.attrs?.[attr.name] ?? {};

                    recorder.remove(
                        templateOffset + startOffset,
                        endOffset - startOffset,
                    );

                    recorder.insertRight(
                        templateOffset + startOffset,
                        `tuiInputDateMulti${migrationAttrs}`,
                    );
                }
            });
        }
    });
}

function normalizeAttrName(name: string): string {
    switch (name.toLowerCase()) {
        case '[(ngmodel)]':
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
