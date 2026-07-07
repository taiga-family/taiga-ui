import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {TODO_MARK} from '../../../../utils/insert-todo';
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
import {buildTuiIconStr} from './migrate-hint-on-legacy-controls';

type TextNode = DefaultTreeAdapterTypes.TextNode;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type Element = DefaultTreeAdapterTypes.Element;

type Attribute = Element['attrs'][number];

const DOCS_LINK = 'https://taiga-ui.dev/components/input-chip';

const HINT_ATTRS = new Set(
    [
        '[tuiHintAppearance]',
        '[tuiHintContent]',
        '[tuiHintDirection]',
        'tuiHintAppearance',
        'tuiHintContent',
        'tuiHintDirection',
    ].map((name) => name.toLowerCase()),
);

const LABEL_OUTSIDE_ATTRS = new Set([
    '[tuiTextfieldLabelOutside]'.toLowerCase(),
    'tuiTextfieldLabelOutside'.toLowerCase(),
]);

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

        if (sourceCodeLocation?.startTag && !sourceCodeLocation.endTag) {
            migrateSelfClosingInputTag({
                element,
                template,
                recorder,
                templateOffset,
                resource,
            });

            return;
        }

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-tag',
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

        const controlStateAttrs = getControlStateAttrs(element);

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

        removeControlStateAttrs(
            recorder,
            templateOffset,
            element,
            template,
            controlStateAttrs,
        );

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

        const baseAttrs = [...controlAttrs, ...inputAttrs].reduce((result, attr) => {
            const name = normalizeAttrName(attr.name);

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        const migrationAttrs = `${baseAttrs}${stringifyControlStateAttrs(controlStateAttrs)}`;
        const itemChip = isLabelOutsideTrue ? '<tui-input-chip *tuiItem />\n' : '';

        recorder.insertRight(
            insertOffset,
            `\n<input tuiInputChip${migrationAttrs}${placeholderAttr} />\n${itemChip}`,
        );
    });
}

function getOriginalAttrText(
    template: string,
    element: Element,
    attrNameLower: string,
): string | null {
    const attrLoc = element.sourceCodeLocation?.attrs?.[attrNameLower];

    return attrLoc ? template.slice(attrLoc.startOffset, attrLoc.endOffset) : null;
}

function migrateSelfClosingInputTag({
    element,
    template,
    recorder,
    templateOffset,
    resource,
}: {
    element: Element;
    recorder: UpdateRecorder;
    template: string;
    templateOffset: number;
    resource: TemplateResource;
}): void {
    const loc = element.sourceCodeLocation;

    if (!loc?.startTag) {
        return;
    }

    const controlStateAttrs = getControlStateAttrs(element);

    const controlStateLower = new Set(
        controlStateAttrs.map((attr) => attr.name.toLowerCase()),
    );

    const inputAttrParts: string[] = [];
    const wrapperAttrParts: string[] = [];
    const todoAttrs: Attribute[] = [];
    let hasHintContent = false;
    let labelOutsideIsDynamic = false;
    let labelOutsideIsTrue = false;

    for (const attr of element.attrs) {
        const nameLower = attr.name.toLowerCase();

        if (controlStateLower.has(nameLower)) {
            continue;
        }

        if (HINT_ATTRS.has(nameLower)) {
            hasHintContent ||=
                nameLower === '[tuihintcontent]' || nameLower === 'tuihintcontent';
            continue;
        }

        if (LABEL_OUTSIDE_ATTRS.has(nameLower)) {
            const value = attr.value.trim();
            const isBinding = nameLower.startsWith('[');
            const isLabelOutsideTrue = value === 'true' || (!isBinding && value === '');

            labelOutsideIsTrue = isLabelOutsideTrue;
            labelOutsideIsDynamic =
                !isLabelOutsideTrue && value !== 'false' && value !== '';
            continue;
        }

        if (DROPPED_ATTRS.has(nameLower)) {
            continue;
        }

        if (TODO_ATTRS.has(nameLower)) {
            todoAttrs.push(attr);
            continue;
        }

        if (/formcontrol|ngmodel/.exec(nameLower)) {
            const name = normalizeAttrName(attr.name);

            inputAttrParts.push(attr.value ? `${name}="${attr.value}"` : name);
            continue;
        }

        const inputRename = INPUT_ATTR_RENAMES.get(nameLower);

        if (inputRename) {
            inputAttrParts.push(
                attr.value ? `${inputRename}="${attr.value}"` : inputRename,
            );
            continue;
        }

        const textfieldRename = TEXTFIELD_ATTR_RENAMES.get(nameLower);

        if (textfieldRename) {
            wrapperAttrParts.push(
                attr.value ? `${textfieldRename}="${attr.value}"` : textfieldRename,
            );
            continue;
        }

        const original = getOriginalAttrText(template, element, nameLower);

        wrapperAttrParts.push(
            original ?? (attr.value ? `${attr.name}="${attr.value}"` : attr.name),
        );
    }

    const lineStart = template.lastIndexOf('\n', loc.startOffset) + 1;
    const indent = /^[ \t]*/.exec(template.slice(lineStart, loc.startOffset))?.[0] ?? '';

    const wrapperStr =
        wrapperAttrParts.length > 0 ? ` ${wrapperAttrParts.join(' ')}` : '';

    const inputStr = inputAttrParts.length > 0 ? ` ${inputAttrParts.join(' ')}` : '';
    const controlStateStr = stringifyControlStateAttrs(controlStateAttrs);

    if (hasHintContent) {
        addImportToClosestModule(resource.componentPath, 'TuiIcon', '@taiga-ui/core');
        addImportToClosestModule(resource.componentPath, 'TuiTooltip', '@taiga-ui/kit');
    }

    const iconStr = hasHintContent ? buildTuiIconStr(element, template) : '';
    const iconLine = iconStr ? `${indent}${iconStr}\n` : '';
    const todoComment = buildSelfClosingTodo(todoAttrs, labelOutsideIsDynamic, indent);

    const itemChipLine = labelOutsideIsTrue
        ? `${indent}<tui-input-chip *tuiItem />\n`
        : '';

    const replacement =
        `${todoComment}<tui-textfield multi${wrapperStr}>\n` +
        `${indent}<input tuiInputChip${inputStr}${controlStateStr} />\n` +
        `${itemChipLine}${iconLine}${indent}</tui-textfield>`;

    recorder.remove(
        templateOffset + loc.startOffset,
        loc.startTag.endOffset - loc.startOffset,
    );
    recorder.insertRight(templateOffset + loc.startOffset, replacement);
}

function buildSelfClosingTodo(
    todoAttrs: Attribute[],
    labelOutsideIsDynamic: boolean,
    indent: string,
): string {
    const notes: string[] = [];

    if (labelOutsideIsDynamic) {
        notes.push(
            '[tuiTextfieldLabelOutside] was dynamic and cannot be migrated automatically. Use <label tuiLabel> inside <tui-textfield> for the label-outside pattern.',
        );
    }

    for (const attr of todoAttrs) {
        notes.push(`${attr.name}: ${getHint(attr.name)}`);
    }

    if (notes.length === 0) {
        return '';
    }

    const lines = [
        `<!-- ${TODO_MARK} tui-input-tag migration (see ${DOCS_LINK}):`,
        ...notes.map((note) => `     - ${note}`),
        '-->',
    ];

    return `${lines.join('\n')}\n${indent}`;
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

    return '[autoColor]'.toLowerCase() === lower || 'autoColor'.toLowerCase() === lower
        ? 'use tuiChip with auto-color appearance instead. See https://taiga-ui.dev/components/chip#auto-color'
        : `no direct equivalent in v5. See ${DOCS_LINK}.`;
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
