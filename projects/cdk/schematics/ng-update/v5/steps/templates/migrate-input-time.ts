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

const DOCS_LINK = 'https://taiga-ui.dev/components/input-time';

const INPUT_ATTR_RENAMES = new Map([
    ['[items]'.toLowerCase(), '[accept]'],
    ['[mode]'.toLowerCase(), '[mode]'],
    ['mode'.toLowerCase(), 'mode'],
]);

// Silently dropped — no equivalent in v5
const DROPPED_ATTRS = new Set([
    '[itemSize]'.toLowerCase(),
    '[strict]'.toLowerCase(),
    'itemSize'.toLowerCase(),
    'strict'.toLowerCase(),
]);

// Dropped but require a TODO comment pointing to the new dropdown pattern
const TODO_DROPPED_ATTRS = new Set([
    '[itemsHidden]'.toLowerCase(),
    'itemsHidden'.toLowerCase(),
]);

export function migrateInputTime({
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
    const elements = findElementsByTagName(template, 'tui-input-time');

    elements.forEach((element: Element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-time',
            'tui-textfield',
            template,
            templateOffset,
        );

        removeAttr(element, 'tuiTextfieldLabelOutside', recorder, templateOffset);

        const controlAttrs = [...element.attrs].filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const inputAttrs = [...element.attrs].filter((attr) =>
            INPUT_ATTR_RENAMES.has(attr.name.toLowerCase()),
        );

        const droppedAttrs = [...element.attrs].filter((attr) =>
            DROPPED_ATTRS.has(attr.name.toLowerCase()),
        );

        const todoDroppedAttrs = [...element.attrs].filter((attr) =>
            TODO_DROPPED_ATTRS.has(attr.name.toLowerCase()),
        );

        for (const attr of [
            ...controlAttrs,
            ...inputAttrs,
            ...droppedAttrs,
            ...todoDroppedAttrs,
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

        // Build TODO notes for attrs that need manual follow-up
        const todoNotes: string[] = [];
        const hasItems = inputAttrs.some((attr) => attr.name.toLowerCase() === '[items]');
        const itemsAttr = inputAttrs.find(
            (attr) => attr.name.toLowerCase() === '[items]',
        );

        if (hasItems) {
            todoNotes.push(
                `[items] was renamed to [accept] on <input tuiInputTime>. For a dropdown list, also add <tui-data-list-wrapper *tuiDropdown [items]="${itemsAttr?.value ?? 'items'} | tuiFilterByInput: matcher" /> inside <tui-textfield>. See: ${DOCS_LINK}#dropdown-with--data-list`,
            );
        }

        if (todoDroppedAttrs.length > 0) {
            todoNotes.push(
                `[itemsHidden] was removed. Dropdown visibility is now controlled by mounting/detaching <tui-data-list-wrapper *tuiDropdown> into/from DOM inside <tui-textfield>. See: ${DOCS_LINK}#dropdown-with--data-list`,
            );
        }

        if (todoNotes.length > 0) {
            const todoComment = [
                `<!-- ${TODO_MARK} tui-input-time migration (see ${DOCS_LINK}):`,
                ...todoNotes.map((n) => `     - ${n}`),
                '-->',
            ].join('\n');
            const insertAt = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;

            recorder.insertLeft(insertAt, `${todoComment}\n`);
        }

        const insertOffset =
            (sourceCodeLocation?.endTag?.startOffset ?? 0) + templateOffset;

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        const migrationAttrs = [...controlAttrs, ...inputAttrs].reduce((result, attr) => {
            const name =
                INPUT_ATTR_RENAMES.get(attr.name.toLowerCase()) ??
                normalizeAttrName(attr.name);

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        if (!inputs.length) {
            recorder.insertRight(
                insertOffset,
                `\n<input tuiInputTime${migrationAttrs} />\n`,
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
                        `tuiInputTime${migrationAttrs}`,
                    );
                }
            });
        }
    });
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
