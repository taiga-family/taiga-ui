import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

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
import {removeAttr} from '../../../utils/templates/remove-attr';
import {replaceTag} from '../../../utils/templates/replace-tag';

type TextNode = DefaultTreeAdapterTypes.TextNode;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type Element = DefaultTreeAdapterTypes.Element;

// All domain attrs go directly to <tui-calendar-month> — the directive has no own inputs for them.
const CALENDAR_ATTR_RENAMES = new Map([
    ['[defaultActiveYear]'.toLowerCase(), '[year]'],
    ['[disabledItemHandler]'.toLowerCase(), '[disabledItemHandler]'],
    ['[max]', '[max]'],
    ['[maxLength]'.toLowerCase(), '[maxLength]'],
    ['[min]', '[min]'],
    ['[minLength]'.toLowerCase(), '[minLength]'],
    ['defaultActiveYear'.toLowerCase(), 'year'],
    ['disabledItemHandler'.toLowerCase(), 'disabledItemHandler'],
    ['max', 'max'],
    ['maxLength'.toLowerCase(), 'maxLength'],
    ['min', 'min'],
    ['minLength'.toLowerCase(), 'minLength'],
]);

export function migrateInputMonthRange({
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
    const elements = findElementsByTagName(template, 'tui-input-month-range');

    elements.forEach((element: Element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-month-range',
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

        const controlAttrs = [...element.attrs].filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const calendarAttrs = [...element.attrs].filter((attr) =>
            CALENDAR_ATTR_RENAMES.has(attr.name.toLowerCase()),
        );

        const controlStateAttrs = getControlStateAttrs(element);

        for (const attr of [...controlAttrs, ...calendarAttrs]) {
            const attributeLocation = element.sourceCodeLocation?.attrs?.[attr.name];

            if (attributeLocation) {
                recorder.remove(
                    templateOffset + attributeLocation.startOffset,
                    attributeLocation.endOffset - attributeLocation.startOffset,
                );
            }
        }

        removeControlStateAttrs(
            recorder,
            templateOffset,
            element,
            template,
            controlStateAttrs,
        );

        const labelIndex = element.childNodes.findIndex(
            (node: ChildNode) =>
                node.nodeName === '#text' && (node as TextNode)?.value.trim(),
        );

        let placeholderAttr = '';

        if (labelIndex !== -1) {
            const labelNode = element.childNodes[labelIndex];

            if (labelNode?.sourceCodeLocation) {
                const labelText = (labelNode as TextNode).value.trim();

                const labelTextStart =
                    labelNode.sourceCodeLocation.startOffset + templateOffset;

                const labelTextEnd =
                    labelNode.sourceCodeLocation.endOffset + templateOffset;

                if (isLabelOutsideTrue) {
                    recorder.remove(labelTextStart, labelTextEnd - labelTextStart);
                    placeholderAttr = ` placeholder="${labelText}"`;
                } else if (!isDynamic) {
                    recorder.insertRight(labelTextStart, '\n<label tuiLabel>');
                    recorder.insertRight(labelTextEnd, '</label>\n');
                }
            }
        }

        const endTagStartOffset = sourceCodeLocation?.endTag?.startOffset;

        if (endTagStartOffset === undefined) {
            return;
        }

        const insertOffset = endTagStartOffset + templateOffset;

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        const controlAttrStr = [...controlAttrs].reduce((result, attr) => {
            const name = normalizeAttrName(attr.name);

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        const migrationAttrs = `${controlAttrStr}${stringifyControlStateAttrs(controlStateAttrs)}`;

        const calendarAttrStr = calendarAttrs.reduce((result, attr) => {
            const name = CALENDAR_ATTR_RENAMES.get(attr.name.toLowerCase()) ?? attr.name;

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        if (inputs.length) {
            recorder.insertRight(
                insertOffset,
                `\n<tui-calendar-month *tuiDropdown${calendarAttrStr} />\n`,
            );
        } else {
            recorder.insertRight(
                insertOffset,
                `\n<input tuiInputMonthRange${migrationAttrs}${placeholderAttr} />\n<tui-calendar-month *tuiDropdown${calendarAttrStr} />\n`,
            );
        }

        for (const input of inputs) {
            input.attrs.forEach((attr) => {
                if (/^tuiTextfield$|^tuiTextfieldLegacy$/i.exec(attr.name)) {
                    const attributeLocation =
                        input.sourceCodeLocation?.attrs?.[attr.name];

                    if (attributeLocation) {
                        const {startOffset, endOffset} = attributeLocation;

                        recorder.remove(
                            templateOffset + startOffset,
                            endOffset - startOffset,
                        );

                        recorder.insertRight(
                            templateOffset + startOffset,
                            `tuiInputMonthRange${migrationAttrs}${placeholderAttr}`,
                        );
                    }
                }
            });
        }
    });
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
