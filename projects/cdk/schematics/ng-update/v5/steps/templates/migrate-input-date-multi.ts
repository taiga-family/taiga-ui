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
import {removeAttr} from '../../../utils/templates/remove-attr';
import {replaceTag} from '../../../utils/templates/replace-tag';

type TextNode = DefaultTreeAdapterTypes.TextNode;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type Element = DefaultTreeAdapterTypes.Element;

const DOCS_LINK = 'https://taiga-ui.dev/components/input-date';

const INPUT_ATTRS = new Set([
    '[max]'.toLowerCase(),
    '[min]'.toLowerCase(),
    'max'.toLowerCase(),
    'min'.toLowerCase(),
]);

const CALENDAR_ATTRS = new Set([
    '[defaultActiveYearMonth]'.toLowerCase(),
    '[disabledItemHandler]'.toLowerCase(),
    '[markerHandler]'.toLowerCase(),
    'defaultActiveYearMonth'.toLowerCase(),
]);

const CALENDAR_ATTR_NAMES: ReadonlyMap<string, string> = new Map([
    ['[defaultActiveYearMonth]'.toLowerCase(), '[month]'],
    ['[disabledItemHandler]'.toLowerCase(), '[disabledItemHandler]'],
    ['[markerHandler]'.toLowerCase(), '[markerHandler]'],
    ['defaultActiveYearMonth'.toLowerCase(), 'month'],
]);

const TEXTFIELD_ATTRS = new Set(['[rows]'.toLowerCase(), 'rows'.toLowerCase()]);

const PLACEHOLDER_ATTRS = new Set([
    '[placeholder]'.toLowerCase(),
    'placeholder'.toLowerCase(),
]);

const TODO_ATTRS = new Set([
    '(searchChange)'.toLowerCase(),
    '[(search)]'.toLowerCase(),
    '[search]'.toLowerCase(),
    '[tagValidator]'.toLowerCase(),
]);

const TODO_ATTR_NAMES: ReadonlyMap<string, string> = new Map([
    ['(searchChange)'.toLowerCase(), '(searchChange)'],
    ['[(search)]', '[(search)]'],
    ['[search]', '[search]'],
    ['[tagValidator]'.toLowerCase(), '[tagValidator]'],
]);

const DROPPED_ATTRS = new Set([
    '[editable]'.toLowerCase(),
    '[inputHidden]'.toLowerCase(),
    'editable'.toLowerCase(),
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

        const {value: labelOutside, isBinding: labelOutsideIsBinding} = removeAttr(
            element,
            'tuiTextfieldLabelOutside',
            recorder,
            templateOffset,
        );

        const isLabelOutsideTrue =
            labelOutside === 'true' || (!labelOutsideIsBinding && labelOutside === '');

        const isDynamic =
            labelOutside !== null && !isLabelOutsideTrue && labelOutside !== 'false';

        const allAttrs = [...element.attrs];

        // Remove `multiple` attribute
        const multipleAttr = allAttrs.find((attr) => attr.name === 'multiple');

        if (multipleAttr) {
            const {startOffset = 0, endOffset = 0} =
                element.sourceCodeLocation?.attrs?.['multiple'] ?? {};

            recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        }

        const controlAttrs = allAttrs.filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const inputAttrs = allAttrs.filter((attr) =>
            INPUT_ATTRS.has(attr.name.toLowerCase()),
        );

        const calendarAttrs = allAttrs.filter((attr) =>
            CALENDAR_ATTRS.has(attr.name.toLowerCase()),
        );

        const textfieldAttrs = allAttrs.filter((attr) =>
            TEXTFIELD_ATTRS.has(attr.name.toLowerCase()),
        );

        // Add `multi` (and textfield-level attrs) to the new tui-textfield opening tag
        const openTagEnd = sourceCodeLocation?.startTag?.endOffset ?? 0;

        const textfieldAttrStr = textfieldAttrs.reduce(
            (result, attr) =>
                attr.value
                    ? `${result} ${attr.name}="${attr.value}"`
                    : `${result} ${attr.name}`,
            '',
        );

        recorder.insertRight(
            templateOffset + openTagEnd - 1,
            ` multi${textfieldAttrStr}`,
        );

        const placeholderAttrs = allAttrs.filter((attr) =>
            PLACEHOLDER_ATTRS.has(attr.name.toLowerCase()),
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
            ...textfieldAttrs,
            ...placeholderAttrs,
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

        let placeholderAttr = '';

        if (labelIndex !== -1) {
            const labelNode = element.childNodes[labelIndex];
            const labelText = (labelNode as TextNode).value.trim();

            const labelTextStart =
                (labelNode?.sourceCodeLocation?.startOffset ?? 0) + templateOffset;

            const labelTextEnd =
                (labelNode?.sourceCodeLocation?.endOffset ?? 0) + templateOffset;

            if (isLabelOutsideTrue) {
                recorder.remove(labelTextStart, labelTextEnd - labelTextStart);
                placeholderAttr = ` placeholder="${labelText}"`;
            } else if (!isDynamic) {
                recorder.insertRight(labelTextStart, '\n<label tuiLabel>');
                recorder.insertRight(labelTextEnd, '</label>\n');
            }
        }

        if (isDynamic) {
            const insertAt = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;

            recorder.insertLeft(
                insertAt,
                `<!-- ${TODO_MARK} [tuiTextfieldLabelOutside] is dynamic — cannot be migrated automatically. Use <label tuiLabel> inside <tui-textfield> for label-outside pattern.\n-->\n`,
            );
        }

        if (todoAttrs.length > 0) {
            const attrLines = todoAttrs.map((attr, index, arr) => {
                const isLast = index === arr.length - 1;
                const name = TODO_ATTR_NAMES.get(attr.name.toLowerCase()) ?? attr.name;
                const hint = getHint(attr.name);

                return `     - ${name}: ${hint}${isLast ? ' -->' : ''}`;
            });

            const todoComment = [
                `<!-- ${TODO_MARK} tui-input-date multiple migration (see ${DOCS_LINK}):`,
                ...attrLines,
            ].join('\n');

            const insertAt = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;

            recorder.insertLeft(insertAt, `${todoComment}\n`);
        }

        const insertOffset =
            (sourceCodeLocation?.endTag?.startOffset ?? 0) + templateOffset;

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        const migrationAttrs = [
            ...controlAttrs,
            ...inputAttrs,
            ...placeholderAttrs,
        ].reduce((result, attr) => {
            const name = normalizeAttrName(attr.name);

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        const calendarAttrStr = calendarAttrs.reduce((result, attr) => {
            const name = CALENDAR_ATTR_NAMES.get(attr.name.toLowerCase()) ?? attr.name;

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        if (inputs.length) {
            recorder.insertRight(
                insertOffset,
                `\n<tui-calendar *tuiDropdown${calendarAttrStr} />\n`,
            );
        } else {
            recorder.insertRight(
                insertOffset,
                `\n<input tuiInputDateMulti${migrationAttrs}${placeholderAttr} />\n<tui-calendar *tuiDropdown${calendarAttrStr} />\n`,
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
                        `tuiInputDateMulti${migrationAttrs}${placeholderAttr}`,
                    );
                }
            });
        }
    });
}

function getHint(attrName: string): string {
    const lower = attrName.toLowerCase();

    if (lower.includes('tagValidator'.toLowerCase())) {
        return 'use <tui-input-chip *tuiItem="let ctx" [appearance]="myValidator(ctx.item) ? \'\' : \'negative\'"> inside <tui-textfield multi>. See https://taiga-ui.dev/components/input-chip#customization';
    }

    if (lower.includes('search')) {
        return 'use native (input) event on <input tuiInputDateMulti (input)="onSearch($any($event).target.value)"> instead.';
    }

    return 'no direct equivalent in v5. Update component logic manually.';
}

function normalizeAttrName(name: string): string {
    switch (name.toLowerCase()) {
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
        case '[(ngmodel)]':
            return '[(ngModel)]';
        default:
            return name;
    }
}
