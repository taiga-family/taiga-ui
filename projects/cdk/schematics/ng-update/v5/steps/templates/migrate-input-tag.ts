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

const DOCS_LINK = 'https://taiga-ui.dev/components/input-chip';

const INPUT_ATTR_RENAMES = new Map<string, string>([
    ['[maxLength]'.toLowerCase(), '[maxlength]'],
    ['[placeholder]'.toLowerCase(), '[placeholder]'],
    ['[separator]'.toLowerCase(), '[separator]'],
    ['[uniqueTags]'.toLowerCase(), '[unique]'],
    ['maxLength'.toLowerCase(), 'maxlength'],
    ['placeholder'.toLowerCase(), 'placeholder'],
    ['separator'.toLowerCase(), 'separator'],
    ['uniqueTags'.toLowerCase(), 'unique'],
]);

const TODO_ATTRS = new Set([
    '(searchChange)'.toLowerCase(),
    '[(search)]'.toLowerCase(),
    '[rows]'.toLowerCase(),
    '[search]'.toLowerCase(),
    '[tagValidator]'.toLowerCase(),
    'rows'.toLowerCase(),
]);

const DROPPED_ATTRS = new Set([
    '[autoColor]'.toLowerCase(),
    '[disabledItemHandler]'.toLowerCase(),
    '[editable]'.toLowerCase(),
    '[inputHidden]'.toLowerCase(),
    '[removable]'.toLowerCase(),
    'autoColor'.toLowerCase(),
    'editable'.toLowerCase(),
    'inputHidden'.toLowerCase(),
    'removable'.toLowerCase(),
]);

export function migrateInputTag({
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
    const elements = findElementsByTagName(template, 'tui-input-tag');

    elements.forEach((element: Element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-tag',
            'tui-textfield',
            template,
            templateOffset,
        );

        // Add `multi` attribute to the new opening tag
        const openTagEnd = sourceCodeLocation?.startTag?.endOffset ?? 0;

        recorder.insertRight(templateOffset + openTagEnd - 1, ' multi');

        const controlAttrs = [...element.attrs].filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const inputAttrs = [...element.attrs].filter((attr) =>
            INPUT_ATTR_RENAMES.has(attr.name.toLowerCase()),
        );

        const todoAttrs = [...element.attrs].filter((attr) =>
            TODO_ATTRS.has(attr.name.toLowerCase()),
        );

        const droppedAttrs = [...element.attrs].filter((attr) =>
            DROPPED_ATTRS.has(attr.name.toLowerCase()),
        );

        for (const attr of [
            ...controlAttrs,
            ...inputAttrs,
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
                `<!-- ${TODO_MARK} tui-input-tag migration (see ${DOCS_LINK}):`,
                `     - ${names}: no direct equivalent in v5. See docs for alternatives. -->`,
            ].join('\n');
            const insertAt = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;

            recorder.insertLeft(insertAt, `${todoComment}\n`);
        }

        const insertOffset =
            (sourceCodeLocation?.endTag?.startOffset ?? 0) + templateOffset;

        const migrationAttrs = [...controlAttrs, ...inputAttrs].reduce((result, attr) => {
            const name = normalizeAttrName(attr.name);

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        recorder.insertRight(insertOffset, `\n<input tuiInputChip${migrationAttrs} />\n`);
    });
}

function normalizeAttrName(name: string): string {
    const renamed = INPUT_ATTR_RENAMES.get(name.toLowerCase());

    if (renamed) {
        return renamed;
    }

    switch (name.toLowerCase()) {
        case '[formControl]'.toLowerCase():
            return '[formControl]';
        case '[maxLength]'.toLowerCase():
            return '[maxlength]';
        case '[ngModel]'.toLowerCase():
            return '[ngModel]';
        case 'formControl'.toLowerCase():
            return 'formControl';
        case 'formControlName'.toLowerCase():
            return 'formControlName';
        case 'maxLength'.toLowerCase():
            return 'maxlength';
        case 'ngModel'.toLowerCase():
            return 'ngModel';
        case '[(ngmodel)]':
            return '[(ngModel)]';
        default:
            return name;
    }
}
