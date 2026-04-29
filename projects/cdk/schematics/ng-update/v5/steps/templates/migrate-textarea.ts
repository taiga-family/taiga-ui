import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {TODO_MARK} from '../../../../utils/insert-todo';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {migrateAttrValue} from '../../../../utils/templates/migrate-attr-value';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces/template-resource';
import {
    getControlStateAttrs,
    stringifyControlStateAttrs,
} from '../../../utils/templates/control-state-attrs';
import {
    buildCustomContentIconStr,
    CUSTOM_CONTENT_ATTRS,
    type CustomContent,
    registerCustomContentImports,
} from './migrate-legacy-custom-content';

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type TextNode = DefaultTreeAdapterTypes.TextNode;

const DOCS_LINK = 'https://taiga-ui.dev/components/textarea';

const CONTROL_ATTR_NAMES = [
    'formControlName',
    '[formControl]',
    'formControl',
    '[(ngModel)]',
    '[ngModel]',
    'ngModel',
] as const;

const CONTROL_ATTRS = new Set(CONTROL_ATTR_NAMES.map((name) => name.toLowerCase()));

const TEXTFIELD_WRAPPER_ATTRS = new Set([
    '[tuiTextfieldAppearance]'.toLowerCase(),
    '[tuiTextfieldCleaner]'.toLowerCase(),
    '[tuiTextfieldSize]'.toLowerCase(),
    'tuiTextfieldAppearance'.toLowerCase(),
    'tuiTextfieldCleaner'.toLowerCase(),
    'tuiTextfieldSize'.toLowerCase(),
]);

const HINT_ATTRS = new Set([
    '[tuiHintAppearance]'.toLowerCase(),
    '[tuiHintContent]'.toLowerCase(),
    '[tuiHintDirection]'.toLowerCase(),
    'tuiHintAppearance'.toLowerCase(),
    'tuiHintContent'.toLowerCase(),
    'tuiHintDirection'.toLowerCase(),
]);

const ATTRS_TO_DROP = new Set([
    '[tuiTextfieldLabelOutside]'.toLowerCase(),
    'tuiTextfieldLabelOutside'.toLowerCase(),
]);

function hasHintContent(element: Element): boolean {
    return element.attrs.some((attr) => {
        const lower = attr.name.toLowerCase();

        return (
            lower === 'tuiHintContent'.toLowerCase() ||
            lower === '[tuiHintContent]'.toLowerCase()
        );
    });
}

export function buildTuiTextareaReplacement(
    template: string,
    element: Element,
    hintIconStr = '',
): {startOffset: number; endOffset: number; replacement: string} | null {
    return buildReplacement(template, element, hintIconStr);
}

export function migrateTextarea({
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
    const elements = findElementsByTagName(template, 'tui-textarea');
    const processable = elements.filter((element) => !hasHintContent(element));

    registerCustomContentImports(resource, processable);

    const replacements = processable
        .map((element) => buildReplacement(template, element))
        .filter((x): x is {startOffset: number; endOffset: number; replacement: string} =>
            Boolean(x),
        )
        .sort((a, b) => b.startOffset - a.startOffset);

    replacements.forEach(({startOffset, endOffset, replacement}) => {
        recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        recorder.insertRight(templateOffset + startOffset, replacement);
    });
}

function getOriginalAttrText(
    template: string,
    element: Element,
    attrNameLower: string,
): string | null {
    const attrLoc = element.sourceCodeLocation?.attrs?.[attrNameLower];

    if (!attrLoc) {
        return null;
    }

    return template.slice(attrLoc.startOffset, attrLoc.endOffset);
}

interface MigrationContext {
    expandableValue: string | null; // original value of expandable attr, null if absent
    rowsMigratedTo: string | null; // '[max]="N"' or 'max="N"' if rows was present
    placeholder: string;
    // true  = [tuiTextfieldLabelOutside]="true" → label wraps <tui-textfield>
    // false = absent or ="false" → <label tuiLabel> auto-added inside <tui-textfield>
    // 'dynamic' = value was a bound expression, cannot determine statically
    labelOutside: boolean | 'dynamic';
    unknownAttrs: string[]; // attrs not recognized — placed on <tui-textfield> with a TODO
    customContent: CustomContent | null;
}

function buildReplacement(
    template: string,
    element: Element,
    hintIconStr = '',
): {startOffset: number; endOffset: number; replacement: string} | null {
    const loc = element.sourceCodeLocation;

    if (!loc?.startTag || !loc.endTag) {
        return null;
    }

    const textfieldAttrs: string[] = [];
    const textareaAttrs = ['tuiTextarea'];
    const controlStateAttrs = getControlStateAttrs(element);
    const controlStateAttrsLower = new Set(
        controlStateAttrs.map((a) => a.name.toLowerCase()),
    );
    let maxLengthAttrText: string | null = null;
    let maxLengthIsBinding = false;
    const ctx: MigrationContext = {
        expandableValue: null,
        rowsMigratedTo: null,
        placeholder: '',
        labelOutside: false,
        unknownAttrs: [],
        customContent: null,
    };

    for (const attr of element.attrs) {
        const nameLower = attr.name.toLowerCase();

        if (controlStateAttrsLower.has(nameLower)) {
            continue;
        }

        if (CUSTOM_CONTENT_ATTRS.has(nameLower)) {
            ctx.customContent = {
                value: attr.value,
                isBinding: nameLower.startsWith('['),
            };
            continue;
        }

        if (nameLower === 'expandable' || nameLower === '[expandable]') {
            ctx.expandableValue = attr.value || 'true';
            continue;
        }

        if (ATTRS_TO_DROP.has(nameLower)) {
            // All attrs in ATTRS_TO_DROP are labelOutside variants — capture value before dropping
            const val = attr.value.trim();

            if (val === 'true' || val === '') {
                ctx.labelOutside = true;
            } else if (val === 'false') {
                ctx.labelOutside = false;
            } else {
                ctx.labelOutside = 'dynamic';
            }

            continue;
        }

        if (HINT_ATTRS.has(nameLower)) {
            continue;
        }

        if (TEXTFIELD_WRAPPER_ATTRS.has(nameLower)) {
            const original = getOriginalAttrText(template, element, nameLower);
            const migratedValue = migrateAttrValue(nameLower, attr.value);
            let attrText: string;

            if (original) {
                attrText = original.replace(`="${attr.value}"`, `="${migratedValue}"`);
            } else if (attr.value) {
                attrText = `${attr.name}="${migratedValue}"`;
            } else {
                attrText = attr.name;
            }

            textfieldAttrs.push(attrText);
            continue;
        }

        if (CONTROL_ATTRS.has(nameLower)) {
            const original = getOriginalAttrText(template, element, nameLower);

            textareaAttrs.push(
                original ??
                    (attr.value
                        ? `${normalizeAttrName(attr.name)}="${attr.value}"`
                        : attr.name),
            );
            continue;
        }

        if (nameLower === '[maxlength]' || nameLower === 'maxlength') {
            maxLengthAttrText = attr.value;
            maxLengthIsBinding = nameLower.startsWith('[');
            continue;
        }

        if (nameLower === '[rows]' || nameLower === 'rows') {
            const isBinding = nameLower.startsWith('[');
            const attrName = isBinding ? '[max]' : 'max';
            const attrText = `${attrName}="${attr.value}"`;

            ctx.rowsMigratedTo = attrText;
            textareaAttrs.push(attrText);
            continue;
        }

        const original = getOriginalAttrText(template, element, nameLower);
        const attrText =
            original ?? (attr.value ? `${attr.name}="${attr.value}"` : attr.name);

        // Unknown attrs go on <tui-textfield> (direct host replacement) with a TODO
        textfieldAttrs.push(attrText);
        ctx.unknownAttrs.push(attrText);
    }

    if (maxLengthAttrText !== null) {
        const attrName = maxLengthIsBinding ? '[limit]' : 'limit';

        textareaAttrs.push(`${attrName}="${maxLengthAttrText}"`);
    }

    const controlStateStr = stringifyControlStateAttrs(controlStateAttrs);

    ctx.placeholder = getPlaceholderText(element);

    const lineStart = template.lastIndexOf('\n', loc.startOffset) + 1;
    const indent = /^[ \t]*/.exec(template.slice(lineStart, loc.startOffset))?.[0] ?? '';

    const wrapperAttrsStr =
        textfieldAttrs.length > 0 ? ` ${textfieldAttrs.join(' ')}` : '';
    const innerContent = buildInnerContent({
        element,
        template,
        textareaAttrs,
        controlStateStr,
        ctx,
        indent,
        hintIconStr,
        customContentIconStr: buildCustomContentIconStr(ctx.customContent, indent),
    });
    const todoComment = buildTodoComment(ctx);

    const replacement = `${todoComment}${indent}<tui-textfield${wrapperAttrsStr}>\n${innerContent}${indent}</tui-textfield>`;

    return {
        startOffset: loc.startOffset,
        endOffset: loc.endOffset,
        replacement,
    };
}

function buildTodoComment(ctx: MigrationContext): string {
    const notes: string[] = [];

    if (ctx.placeholder && ctx.labelOutside === 'dynamic') {
        notes.push(
            '[tuiTextfieldLabelOutside] was dynamic and cannot be migrated automatically. Use <label tuiLabel> inside <tui-textfield> for floating label or outside for static label.',
        );
    }
    // labelOutside=true: text → placeholder — fully automatic, no note needed
    // labelOutside=false/absent: text → <label tuiLabel> inside — fully automatic, no note needed

    if (ctx.expandableValue !== null) {
        const wasFixed = ctx.expandableValue === 'false' || ctx.expandableValue === '';

        if (wasFixed) {
            if (ctx.rowsMigratedTo) {
                notes.push(
                    `expandable="false" was removed. New component always auto-resizes. To restore fixed height, also add the same value for [min] on <textarea tuiTextarea> (${ctx.rowsMigratedTo} was already migrated).`,
                );
            } else {
                notes.push(
                    'expandable="false" was removed. New component always auto-resizes. To restore fixed height, set [min] and [max] to the same value on <textarea tuiTextarea> (legacy default was 20 rows).',
                );
            }
        } else {
            notes.push(
                `[expandable] was removed. New component always auto-resizes between [min] (default: 1) and [max] (default: 3) rows.${ctx.rowsMigratedTo ? ` [rows] was migrated to ${ctx.rowsMigratedTo}.` : ''}`,
            );
        }
    } else if (ctx.rowsMigratedTo) {
        // rows present but expandable not specified — legacy default was fixed height
        notes.push(
            `[rows] was migrated to ${ctx.rowsMigratedTo}. Legacy tui-textarea had fixed height by default (expandable=false). To restore fixed height, also add the same value for [min] on <textarea tuiTextarea>.`,
        );
    } else {
        // Neither expandable nor rows — legacy default was 20 rows fixed height
        notes.push(
            'Legacy tui-textarea had a fixed height of 20 rows by default. New component auto-resizes between [min] (default: 1) and [max] (default: 3) rows. Set min and max explicitly if the previous layout needs to be preserved.',
        );
    }

    for (const attr of ctx.unknownAttrs) {
        notes.push(
            `Unrecognized attribute "${attr}" was placed on <tui-textfield>. Move it to <textarea tuiTextarea> if it targets the native element.`,
        );
    }

    const lines = [
        `<!-- ${TODO_MARK} tui-textarea migration (see ${DOCS_LINK}):`,
        ...notes.map((n) => `     - ${n}`),
        '-->',
    ];

    return `${lines.join('\n')}\n`;
}

const LEGACY_TEXTAREA_ATTRS = new Set([
    'tuiTextfield'.toLowerCase(),
    'tuiTextfieldLegacy'.toLowerCase(),
]);

function buildInnerContent({
    element,
    template,
    textareaAttrs,
    controlStateStr,
    ctx,
    indent,
    hintIconStr = '',
    customContentIconStr = '',
}: {
    controlStateStr: string;
    ctx: MigrationContext;
    customContentIconStr?: string;
    element: Element;
    hintIconStr?: string;
    indent: string;
    template: string;
    textareaAttrs: string[];
}): string {
    const {placeholder, labelOutside} = ctx;
    const childElements = element.childNodes.filter(
        (node: ChildNode): node is Element =>
            node.nodeName !== '#text' && node.nodeName !== '#comment',
    );

    // Auto-add <label tuiLabel> inside <tui-textfield> when text content is present
    // and labelOutside is false/absent (dynamic: left as-is with only TODO comment)
    const labelEl =
        placeholder && labelOutside === false
            ? `${indent}<label tuiLabel>${placeholder}</label>\n`
            : '';

    const hintIconLine = hintIconStr ? `${hintIconStr}\n` : '';
    const customContentLine = customContentIconStr ? `${customContentIconStr}\n` : '';

    // If user already put an explicit <textarea tuiTextfieldLegacy> inside,
    // reuse it instead of generating a new one.
    const legacyInnerTextarea = childElements.find(
        (node) =>
            node.nodeName === 'textarea' &&
            node.attrs.some((a) => LEGACY_TEXTAREA_ATTRS.has(a.name.toLowerCase())),
    );

    if (legacyInnerTextarea) {
        return `${labelEl}${migrateInnerTextarea({
            inner: legacyInnerTextarea,
            template,
            attrsToAdd: textareaAttrs,
            controlStateStr,
            allChildren: childElements,
            indent,
            hintIconLine,
            customContentLine,
        })}`;
    }

    const attrsStr = textareaAttrs.length > 0 ? ` ${textareaAttrs.join(' ')}` : '';
    // placeholder is added only when labelOutside=true (text → hint inside field)
    // when labelOutside=false/absent the text becomes <label tuiLabel> (floating label) instead
    const placeholderAttr =
        placeholder && labelOutside === true ? ` placeholder="${placeholder}"` : '';

    const otherChildren = childElements
        .map((child) => {
            const childLoc = child.sourceCodeLocation;

            return childLoc
                ? template.slice(childLoc.startOffset, childLoc.endOffset)
                : '';
        })
        .join('');

    return `${labelEl}${indent}<textarea${placeholderAttr}${attrsStr}${controlStateStr}></textarea>\n${otherChildren}${hintIconLine}${customContentLine}`;
}

/**
 * Rewrites an existing <textarea tuiTextfieldLegacy> to <textarea tuiTextarea ...>
 * by replacing the legacy directive attr and appending form control attrs.
 */
function migrateInnerTextarea({
    inner,
    template,
    attrsToAdd,
    controlStateStr,
    allChildren,
    indent,
    hintIconLine = '',
    customContentLine = '',
}: {
    allChildren: Element[];
    attrsToAdd: string[];
    controlStateStr: string;
    customContentLine?: string;
    hintIconLine?: string;
    indent: string;
    inner: Element;
    template: string;
}): string {
    const innerLoc = inner.sourceCodeLocation;

    if (!innerLoc?.startTag) {
        return '';
    }

    const legacyAttr = inner.attrs.find((a) =>
        LEGACY_TEXTAREA_ATTRS.has(a.name.toLowerCase()),
    );
    const legacyAttrLoc = legacyAttr
        ? innerLoc.attrs?.[legacyAttr.name.toLowerCase()]
        : undefined;

    // Rebuild the inner textarea: replace legacy attr with tuiTextarea, append extra attrs
    let startTag = template.slice(
        innerLoc.startTag.startOffset,
        innerLoc.startTag.endOffset,
    );

    if (legacyAttrLoc) {
        const relStart = legacyAttrLoc.startOffset - innerLoc.startTag.startOffset;
        const relEnd = legacyAttrLoc.endOffset - innerLoc.startTag.startOffset;

        startTag = `${startTag.slice(0, relStart)}tuiTextarea${startTag.slice(relEnd)}`;
    }

    // Append form control / other attrs from the outer <tui-textarea> before the closing >
    const closeAngle = startTag.lastIndexOf('>');
    const extraAttrs = attrsToAdd.filter((a) => a !== 'tuiTextarea').join(' ');
    const insertStr = `${extraAttrs ? ` ${extraAttrs}` : ''}${controlStateStr}`;

    // trimEnd() removes trailing whitespace/newlines before '>' to avoid a visual gap
    startTag = `${startTag.slice(0, closeAngle).trimEnd()}${insertStr}${startTag.slice(closeAngle)}`;

    // Reconstruct full inner element (self-closing or with end tag)
    const innerContent = innerLoc.endTag
        ? `${startTag}${template.slice(innerLoc.startTag.endOffset, innerLoc.endOffset)}`
        : startTag;

    // Include other sibling elements (e.g. tui-data-list-wrapper, tui-error)
    const siblings = allChildren
        .filter((c) => c !== inner)
        .map((c) => {
            const loc = c.sourceCodeLocation;

            return loc ? template.slice(loc.startOffset, loc.endOffset) : '';
        })
        .join('');

    return `${indent}${innerContent}\n${siblings}${hintIconLine}${customContentLine}`;
}

function getPlaceholderText(element: Element): string {
    const textNode = element.childNodes.find((node: ChildNode): node is TextNode => {
        if (node.nodeName !== '#text') {
            return false;
        }

        return !!(node as TextNode).value.trim();
    });

    return textNode?.value.trim() ?? '';
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
