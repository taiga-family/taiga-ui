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

const TEXTFIELD_ATTR_RENAMES = new Map([
    ['[disabledItemHandler]'.toLowerCase(), '[disabledItemHandler]'],
    ['[rows]'.toLowerCase(), '[rows]'],
    ['disabledItemHandler'.toLowerCase(), 'disabledItemHandler'],
    ['rows'.toLowerCase(), 'rows'],
]);

const TODO_ATTRS = new Set([
    '(searchChange)'.toLowerCase(),
    '[(search)]'.toLowerCase(),
    '[autoColor]'.toLowerCase(),
    '[editable]'.toLowerCase(),
    '[search]'.toLowerCase(),
    '[tagValidator]'.toLowerCase(),
    'autoColor'.toLowerCase(),
    'editable'.toLowerCase(),
]);

const DROPPED_ATTRS = new Set([
    '[inputHidden]'.toLowerCase(),
    '[removable]'.toLowerCase(),
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

        const openTagEnd = sourceCodeLocation?.startTag?.endOffset ?? 0;

        const controlAttrs = [...element.attrs].filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const inputAttrs = [...element.attrs].filter((attr) =>
            INPUT_ATTR_RENAMES.has(attr.name.toLowerCase()),
        );

        const textfieldAttrs = [...element.attrs].filter((attr) =>
            TEXTFIELD_ATTR_RENAMES.has(attr.name.toLowerCase()),
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
            ...textfieldAttrs,
            ...todoAttrs,
            ...droppedAttrs,
        ]) {
            const {startOffset = 0, endOffset = 0} =
                element.sourceCodeLocation?.attrs?.[attr.name] ?? {};

            recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        }

        const textfieldAttrStr = textfieldAttrs.reduce((result, attr) => {
            const name = TEXTFIELD_ATTR_RENAMES.get(attr.name.toLowerCase()) ?? attr.name;

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        recorder.insertRight(
            templateOffset + openTagEnd - 1,
            ` multi${textfieldAttrStr}`,
        );

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
            const lines = todoAttrs.map((attr, index, arr) => {
                const isLast = index === arr.length - 1;
                const hint = getHint(attr.name);

                return `     - ${attr.name}: ${hint}${isLast ? ' -->' : ''}`;
            });
            const todoComment = [
                `<!-- ${TODO_MARK} tui-input-tag migration (see ${DOCS_LINK}):`,
                ...lines,
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

function getHint(attrName: string): string {
    const lower = attrName.toLowerCase();

    if ('[tagValidator]'.toLowerCase() === lower) {
        return `use <tui-input-chip *tuiItem="let ctx" [appearance]="myValidator(ctx.item) ? '' : 'negative'"> inside <tui-textfield multi>. See ${DOCS_LINK}#customization`;
    }

    if ('[(search)]'.toLowerCase() === lower || '[search]'.toLowerCase() === lower) {
        return 'use (input) on <input tuiInputChip (input)="onSearch($any($event).target.value)"> to track changes; no direct equivalent for programmatic writes.';
    }

    if ('(searchChange)'.toLowerCase() === lower) {
        return 'use (input) on <input tuiInputChip (input)="onSearch($any($event).target.value)">.';
    }

    if ('[editable]'.toLowerCase() === lower || 'editable'.toLowerCase() === lower) {
        return `move to <tui-input-chip *tuiItem="let ctx" [editable]="..."> inside <tui-textfield multi>. See ${DOCS_LINK}.`;
    }

    if ('[autoColor]'.toLowerCase() === lower || 'autoColor'.toLowerCase() === lower) {
        return `use tuiChip with auto-color appearance instead. See https://taiga-ui.dev/components/chip#auto-color`;
    }

    return `no direct equivalent in v5. See ${DOCS_LINK}.`;
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
