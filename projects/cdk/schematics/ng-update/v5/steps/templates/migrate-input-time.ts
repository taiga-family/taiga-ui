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

const DOCS_LINK = 'https://taiga-ui.dev/components/input-time';

/**
 * Attrs that move from <tui-input-time> to <input tuiInputTime> unchanged.
 */
const INPUT_ATTRS = new Set(['[mode]'.toLowerCase(), 'mode'.toLowerCase()]);

/**
 * Attrs that had a dropdown-related purpose in v4 and have no equivalent in v5.
 * In v5 tui-input-time is a plain text input (no dropdown).
 */
const DROPPED_DROPDOWN_ATTRS = new Set([
    '[disabledItemHandler]'.toLowerCase(),
    '[items]'.toLowerCase(),
    '[itemsHidden]'.toLowerCase(),
    '[itemSize]'.toLowerCase(),
    '[strict]'.toLowerCase(),
    'itemsHidden'.toLowerCase(),
    'itemSize'.toLowerCase(),
    'strict'.toLowerCase(),
]);

const TODO_ATTRS_WITH_MESSAGE = new Set(['[items]'.toLowerCase()]);

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

        const controlAttrs = [...element.attrs].filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const inputAttrs = [...element.attrs].filter((attr) =>
            INPUT_ATTRS.has(attr.name.toLowerCase()),
        );

        const droppedAttrs = [...element.attrs].filter((attr) =>
            DROPPED_DROPDOWN_ATTRS.has(attr.name.toLowerCase()),
        );

        for (const attr of [...controlAttrs, ...inputAttrs, ...droppedAttrs]) {
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

        const needsTodo = droppedAttrs.some((a) =>
            TODO_ATTRS_WITH_MESSAGE.has(a.name.toLowerCase()),
        );

        if (needsTodo) {
            const todoComment = [
                `<!-- ${TODO_MARK} tui-input-time migration (see ${DOCS_LINK}):`,
                '     - [items]: removed in v5. TuiInputTime is now a plain text input with no dropdown.',
                '       Remove this binding and update your component logic accordingly. -->',
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
            const name = normalizeAttrName(attr.name);

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
        case '[mode]'.toLowerCase():
            return '[mode]';
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
        case 'mode':
            return 'mode';
        default:
            return name;
    }
}
