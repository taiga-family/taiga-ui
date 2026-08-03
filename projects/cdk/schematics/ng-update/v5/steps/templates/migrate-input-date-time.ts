import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {LABEL_OUTSIDE_TODO_MESSAGE, TODO_MARK} from '../../../../utils/insert-todo';
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
import {getOriginalAttrText} from '../../../utils/templates/get-original-attr-text';
import {removeAttr} from '../../../utils/templates/remove-attr';
import {replaceTag} from '../../../utils/templates/replace-tag';

type TextNode = DefaultTreeAdapterTypes.TextNode;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type Element = DefaultTreeAdapterTypes.Element;

/** Attributes that map 1:1 onto the v5 `<input tuiInputDateTime>` directive. */
const INPUT_ATTRS = new Set(
    ['min', 'max', 'timeMode'].flatMap((name) => [
        name.toLowerCase(),
        `[${name.toLowerCase()}]`,
    ]),
);

/**
 * Attributes that move onto the `<tui-calendar>` dropdown in v5.
 *
 * `disabledItemHandler` is intentionally NOT here: in v5 it stays on `<tui-textfield>`
 * (the `tuiInputDateTime` directive forwards it to the calendar internally), matching
 * the official demo: https://taiga-ui.dev/components/input-date-time
 */
const CALENDAR_ATTR_RENAMES = new Map([
    ['[defaultActiveYearMonth]'.toLowerCase(), '[month]'],
    ['defaultActiveYearMonth'.toLowerCase(), 'month'],
]);

export function migrateInputDateTime({
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
    const elements = findElementsByTagName(template, 'tui-input-date-time');

    elements.forEach((element: Element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        // Self-closing/unclosed elements have no end tag, so there is no inside to place
        // the migrated `<input>`/`<tui-calendar>` — skip to avoid inserting at offset 0.
        if (!sourceCodeLocation?.endTag) {
            return;
        }

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-date-time',
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
            /formcontrol|ngmodel/.exec(attr.name.toLowerCase()),
        );

        const inputAttrs = [...element.attrs].filter((attr) =>
            INPUT_ATTRS.has(attr.name.toLowerCase()),
        );

        const calendarAttrs = [...element.attrs].filter((attr) =>
            CALENDAR_ATTR_RENAMES.has(attr.name.toLowerCase()),
        );

        const controlStateAttrs = getControlStateAttrs(element);

        removeControlStateAttrs(recorder, templateOffset, element, template, [
            ...controlAttrs,
            ...inputAttrs,
            ...calendarAttrs,
            ...controlStateAttrs,
        ]);

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
                placeholderAttr = ` placeholder="${labelText.replaceAll('"', '&quot;')}"`;
            } else if (!isDynamic) {
                recorder.insertRight(labelTextStart, '\n<label tuiLabel>');
                recorder.insertRight(labelTextEnd, '</label>\n');
            }
        }

        if (isDynamic) {
            const insertAt = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;

            recorder.insertLeft(
                insertAt,
                `<!-- ${TODO_MARK} ${LABEL_OUTSIDE_TODO_MESSAGE}\n-->\n`,
            );
        }

        const insertOffset =
            (sourceCodeLocation?.endTag?.startOffset ?? 0) + templateOffset;

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        const baseAttrs = [...controlAttrs, ...inputAttrs].reduce((result, attr) => {
            const original = getOriginalAttrText(template, element, attr);

            return `${result} ${original}`;
        }, '');

        const migrationAttrs = `${baseAttrs}${stringifyControlStateAttrs(controlStateAttrs)}`;

        const calendarAttrStr = calendarAttrs.reduce((result, attr) => {
            const name = CALENDAR_ATTR_RENAMES.get(attr.name.toLowerCase()) ?? attr.name;

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
                `\n<input tuiInputDateTime${migrationAttrs}${placeholderAttr} />\n<tui-calendar *tuiDropdown${calendarAttrStr} />\n`,
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
                        `tuiInputDateTime${migrationAttrs}${placeholderAttr}`,
                    );
                }
            });
        }
    });
}
