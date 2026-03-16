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

const DOCS_LINK = 'https://taiga-ui.dev/components/input-month';

/** Attrs that move from <tui-input-month> to <input tuiInputMonth> (same name in v5). */
const INPUT_ATTRS = new Set([
    '[min]'.toLowerCase(),
    '[max]'.toLowerCase(),
    'min'.toLowerCase(),
    'max'.toLowerCase(),
]);

/** Attrs that move to <tui-calendar-month *tuiDropdown> (same name in v5). */
const CALENDAR_ATTRS = new Set(['[disabledItemHandler]'.toLowerCase()]);

/** Attrs with no v5 equivalent — removed with a TODO. */
const NO_EQUIVALENT_ATTRS = new Set([
    '[defaultActiveYear]'.toLowerCase(),
    'defaultActiveYear'.toLowerCase(),
]);

export function migrateInputMonth({
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
    const elements = findElementsByTagName(template, 'tui-input-month');

    elements.forEach((element: Element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-month',
            'tui-textfield',
            template,
            templateOffset,
        );

        const controlAttrs = [...element.attrs].filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const inputAttrs = [...element.attrs].filter((attr) =>
            INPUT_ATTRS.has(attr.name.toLowerCase()),
        );

        const calendarAttrs = [...element.attrs].filter((attr) =>
            CALENDAR_ATTRS.has(attr.name.toLowerCase()),
        );

        const noEquivalentAttrs = [...element.attrs].filter((attr) =>
            NO_EQUIVALENT_ATTRS.has(attr.name.toLowerCase()),
        );

        for (const attr of [
            ...controlAttrs,
            ...inputAttrs,
            ...calendarAttrs,
            ...noEquivalentAttrs,
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

        if (noEquivalentAttrs.length > 0) {
            const names = noEquivalentAttrs.map((a) => a.name).join(', ');
            const todoComment = [
                `<!-- ${TODO_MARK} tui-input-month migration (see ${DOCS_LINK}):`,
                `     - ${names}: no direct equivalent in v5. Remove and update component logic. -->`,
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
                `\n<input tuiInputMonth${migrationAttrs} />\n<tui-calendar-month *tuiDropdown${calendarAttrStr} />\n`,
            );
        } else {
            recorder.insertRight(
                insertOffset,
                `\n<tui-calendar-month *tuiDropdown${calendarAttrStr} />\n`,
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
                        `tuiInputMonth${migrationAttrs}`,
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
