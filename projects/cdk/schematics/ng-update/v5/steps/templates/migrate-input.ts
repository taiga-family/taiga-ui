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
    buildCustomContentIconStr,
    CUSTOM_CONTENT_ATTRS,
    type CustomContent,
    registerCustomContentImports,
} from './migrate-legacy-custom-content';

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

const DOCS_LINK = 'https://taiga-ui.dev/components/input';

const CONTROL_ATTR_NAMES = [
    'formControlName',
    '[formControl]',
    'formControl',
    '[(ngModel)]',
    '[ngModel]',
    'ngModel',
] as const;

const CONTROL_ATTRS = new Set(CONTROL_ATTR_NAMES.map((name) => name.toLowerCase()));

const HINT_ATTRS = new Set([
    '[tuiHintAppearance]'.toLowerCase(),
    '[tuiHintContent]'.toLowerCase(),
    '[tuiHintDirection]'.toLowerCase(),
    'tuiHintAppearance'.toLowerCase(),
    'tuiHintContent'.toLowerCase(),
    'tuiHintDirection'.toLowerCase(),
]);

const TEXTFIELD_WRAPPER_ATTRS = new Set([
    '[tuiTextfieldAppearance]'.toLowerCase(),
    '[tuiTextfieldCleaner]'.toLowerCase(),
    '[tuiTextfieldSize]'.toLowerCase(),
    'tuiTextfieldAppearance'.toLowerCase(),
    'tuiTextfieldCleaner'.toLowerCase(),
    'tuiTextfieldSize'.toLowerCase(),
]);

const TEXTFIELD_WRAPPER_ATTR_RENAMES = new Map<string, string>([
    ['[tuiTextfieldFiller]'.toLowerCase(), '[filler]'],
    ['[tuiTextfieldIcon]'.toLowerCase(), '[iconEnd]'],
    ['[tuiTextfieldIconLeft]'.toLowerCase(), '[iconStart]'],
    ['tuiTextfieldFiller'.toLowerCase(), 'filler'],
    ['tuiTextfieldIcon'.toLowerCase(), 'iconEnd'],
    ['tuiTextfieldIconLeft'.toLowerCase(), 'iconStart'],
]);

const ATTRS_WITH_NO_EQUIVALENT = new Set([
    '[tuiTextfieldPostfix]'.toLowerCase(),
    '[tuiTextfieldPrefix]'.toLowerCase(),
    'tuiTextfieldPostfix'.toLowerCase(),
    'tuiTextfieldPrefix'.toLowerCase(),
]);

const LABEL_OUTSIDE_ATTRS = new Set([
    '[tuiTextfieldLabelOutside]'.toLowerCase(),
    'tuiTextfieldLabelOutside'.toLowerCase(),
]);

const LEGACY_INPUT_ATTRS = new Set([
    'tuiTextfield'.toLowerCase(),
    'tuiTextfieldLegacy'.toLowerCase(),
]);

function isDropdownAttr(nameLower: string): boolean {
    const prefix = 'TuiDropdown'.toLowerCase();
    const stripped = nameLower.replaceAll(/^\[|\]$|\(|\)/g, '');

    return stripped.startsWith(prefix);
}

function isClassOrStyleAttr(nameLower: string): boolean {
    const stripped = nameLower.replaceAll(/^\[|\]$/g, '');

    return (
        stripped === 'class' ||
        stripped === 'style' ||
        stripped === 'ngclass' ||
        stripped === 'ngstyle' ||
        stripped.startsWith('class.') ||
        stripped.startsWith('style.')
    );
}

function hasHintContent(element: Element): boolean {
    return element.attrs.some((attr) => {
        const lower = attr.name.toLowerCase();

        return (
            lower === 'tuiHintContent'.toLowerCase() ||
            lower === '[tuiHintContent]'.toLowerCase()
        );
    });
}

export function migrateInput({
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
    const elements = findElementsByTagName(template, 'tui-input');
    const processable = elements.filter((element) => !hasHintContent(element));

    registerCustomContentImports(resource, processable);

    const replacements = processable
        .map((element) => buildTuiInputReplacement(template, element))
        .filter((x): x is {startOffset: number; endOffset: number; replacement: string} =>
            Boolean(x),
        )
        .sort((a, b) => b.startOffset - a.startOffset);

    replacements.forEach(({startOffset, endOffset, replacement}) => {
        recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        recorder.insertRight(templateOffset + startOffset, replacement);
    });
}

export function buildTuiInputReplacement(
    template: string,
    element: Element,
    hintIconStr = '',
): {startOffset: number; endOffset: number; replacement: string} | null {
    return buildReplacement(template, element, hintIconStr);
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
    placeholder: string;
    /** null = attr absent; string = the raw attr value (may be 'true', 'false', or expression) */
    labelOutsideValue: string | null;
    /** whether the label binding had square-bracket syntax, i.e. [tuiTextfieldLabelOutside] */
    labelOutsideIsBinding: boolean;
    /** prefix/postfix attr names that have no v5 equivalent */
    noEquivalentAttrs: string[];
    /** unrecognized attrs placed on <tui-textfield> that may need manual review */
    unknownAttrs: string[];
    /** tuiTextfieldCustomContent value; converted to <tui-icon> inside the textfield */
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
    const inputAttrs = ['tuiInput'];
    const ctx: MigrationContext = {
        placeholder: '',
        labelOutsideValue: null,
        labelOutsideIsBinding: false,
        noEquivalentAttrs: [],
        unknownAttrs: [],
        customContent: null,
    };

    for (const attr of element.attrs) {
        const nameLower = attr.name.toLowerCase();

        if (CUSTOM_CONTENT_ATTRS.has(nameLower)) {
            ctx.customContent = {
                value: attr.value,
                isBinding: nameLower.startsWith('['),
            };
            continue;
        }

        if (LABEL_OUTSIDE_ATTRS.has(nameLower)) {
            ctx.labelOutsideValue = attr.value || 'true';
            ctx.labelOutsideIsBinding = nameLower.startsWith('[');
            continue;
        }

        const renamedAttr = TEXTFIELD_WRAPPER_ATTR_RENAMES.get(nameLower);

        if (renamedAttr !== undefined) {
            textfieldAttrs.push(
                attr.value ? `${renamedAttr}="${attr.value}"` : renamedAttr,
            );
            continue;
        }

        if (ATTRS_WITH_NO_EQUIVALENT.has(nameLower)) {
            const original = getOriginalAttrText(template, element, nameLower);
            const originalName = original?.match(/^[\w[\]()]+/)?.[0] ?? attr.name;

            ctx.noEquivalentAttrs.push(originalName);
            // Still place it on the wrapper so the code at least compiles with a warning
            textfieldAttrs.push(
                original ?? (attr.value ? `${attr.name}="${attr.value}"` : attr.name),
            );
            continue;
        }

        if (isClassOrStyleAttr(nameLower)) {
            const original = getOriginalAttrText(template, element, nameLower);

            textfieldAttrs.push(
                original ?? (attr.value ? `${attr.name}="${attr.value}"` : attr.name),
            );
            continue;
        }

        if (TEXTFIELD_WRAPPER_ATTRS.has(nameLower) || isDropdownAttr(nameLower)) {
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

        if (HINT_ATTRS.has(nameLower)) {
            continue;
        }

        if (CONTROL_ATTRS.has(nameLower)) {
            const original = getOriginalAttrText(template, element, nameLower);

            inputAttrs.push(
                original ??
                    (attr.value
                        ? `${normalizeAttrName(attr.name)}="${attr.value}"`
                        : attr.name),
            );
            continue;
        }

        // Unrecognized attr — place on <tui-textfield> (the host replacement) with TODO
        const original = getOriginalAttrText(template, element, nameLower);
        const originalText =
            original ?? (attr.value ? `${attr.name}="${attr.value}"` : attr.name);
        const originalName = original?.match(/^[\w[\]()]+/)?.[0] ?? attr.name;

        ctx.unknownAttrs.push(originalName);
        textfieldAttrs.push(originalText);
    }

    ctx.placeholder = getPlaceholderText(element);

    const lineStart = template.lastIndexOf('\n', loc.startOffset) + 1;
    const indent = /^[ \t]*/.exec(template.slice(lineStart, loc.startOffset))?.[0] ?? '';

    const isLabelOutsideTrue =
        ctx.labelOutsideValue === 'true' ||
        (!ctx.labelOutsideIsBinding && ctx.labelOutsideValue === '');
    const isLabelOutsideDynamic =
        ctx.labelOutsideValue !== null &&
        !isLabelOutsideTrue &&
        ctx.labelOutsideValue !== 'false';

    const wrapperAttrsStr =
        textfieldAttrs.length > 0 ? ` ${textfieldAttrs.join(' ')}` : '';
    const innerContent = buildInnerContent({
        element,
        template,
        inputAttrs,
        placeholder: ctx.placeholder,
        indent,
        labelOutsideIsTrue: isLabelOutsideTrue,
        labelOutsideIsDynamic: isLabelOutsideDynamic,
        hintIconStr,
        customContentIconStr: buildCustomContentIconStr(ctx.customContent, indent),
    });
    const todoComment = buildTodoComment(ctx);
    // `indent` is added before <tui-textfield> only when there is a TODO — in that case
    // todoComment ends with `\n` so the tag would otherwise start at column 0.
    // Without a TODO the preserved whitespace before startOffset already provides the indent.
    const tagIndent = todoComment ? indent : '';
    const core = `${tagIndent}<tui-textfield${wrapperAttrsStr}>\n${innerContent}${indent}</tui-textfield>`;

    const replacement = `${todoComment}${core}`;

    return {
        startOffset: loc.startOffset,
        endOffset: loc.endOffset,
        replacement,
    };
}

function buildTodoComment(ctx: MigrationContext): string {
    const notes: string[] = [];

    const isLabelOutsideTrue =
        ctx.labelOutsideValue === 'true' ||
        (!ctx.labelOutsideIsBinding && ctx.labelOutsideValue === '');

    if (ctx.placeholder && !isLabelOutsideTrue) {
        // labelOutside=false/absent: text → <label tuiLabel> inside — fully automatic, no note needed
    }

    if (ctx.noEquivalentAttrs.length > 0) {
        notes.push(
            `${ctx.noEquivalentAttrs.join(', ')} has no direct equivalent in v5. Implement using custom content inside <tui-textfield>.`,
        );
    }

    if (
        ctx.labelOutsideValue !== null &&
        ctx.labelOutsideValue !== 'false' &&
        !isLabelOutsideTrue
    ) {
        notes.push(
            `[tuiTextfieldLabelOutside]="${ctx.labelOutsideValue}" is dynamic and cannot be migrated automatically. Use <label tuiLabel> inside <tui-textfield> for floating label or outside for static label.`,
        );
    }

    for (const name of ctx.unknownAttrs) {
        notes.push(
            `"${name}" is an unrecognized attribute and was placed on <tui-textfield>. Move it to <input tuiInput> if it targets the native element.`,
        );
    }

    if (notes.length === 0) {
        return '';
    }

    const lines = [
        `<!-- ${TODO_MARK} tui-input migration (see ${DOCS_LINK}):`,
        ...notes.map((n) => `     - ${n}`),
        '-->',
    ];

    return `${lines.join('\n')}\n`;
}

function buildInnerContent({
    element,
    template,
    inputAttrs,
    placeholder,
    indent,
    labelOutsideIsTrue,
    labelOutsideIsDynamic,
    hintIconStr,
    customContentIconStr,
}: {
    customContentIconStr: string;
    element: Element;
    hintIconStr: string;
    indent: string;
    inputAttrs: string[];
    labelOutsideIsDynamic: boolean;
    labelOutsideIsTrue: boolean;
    placeholder: string;
    template: string;
}): string {
    const childElements = element.childNodes.filter(
        (node: ChildNode): node is Element =>
            node.nodeName !== '#text' && node.nodeName !== '#comment',
    );

    const legacyInnerInput = childElements.find(
        (node) =>
            node.nodeName === 'input' &&
            node.attrs.some((a) => LEGACY_INPUT_ATTRS.has(a.name.toLowerCase())),
    );

    const hintIconLine = hintIconStr ? `${hintIconStr}\n` : '';
    const customContentLine = customContentIconStr ? `${customContentIconStr}\n` : '';

    if (legacyInnerInput) {
        return migrateInnerInput({
            inner: legacyInnerInput,
            template,
            attrsToAdd: inputAttrs,
            allChildren: childElements,
            indent,
            hintIconLine,
            customContentLine,
        });
    }

    const attrsStr = inputAttrs.length > 0 ? ` ${inputAttrs.join(' ')}` : '';

    const otherChildren = childElements
        .map((child) => {
            const childLoc = child.sourceCodeLocation;

            return childLoc
                ? template.slice(childLoc.startOffset, childLoc.endOffset)
                : '';
        })
        .join('');

    if (labelOutsideIsTrue) {
        // labelOutside=true: text → placeholder on <input>, no label inside
        const placeholderAttr = placeholder ? ` placeholder="${placeholder}"` : '';

        return `${indent}<input${placeholderAttr}${attrsStr} />\n${otherChildren}${hintIconLine}${customContentLine}`;
    }

    // labelOutside=false/absent: text → <label tuiLabel> inside (floating label)
    // dynamic: text left as-is, only TODO comment is added
    let labelEl = '';

    if (placeholder && labelOutsideIsDynamic) {
        labelEl = `${indent}${placeholder}\n`;
    } else if (placeholder) {
        labelEl = `${indent}<label tuiLabel>${placeholder}</label>\n`;
    }

    return `${labelEl}${indent}<input${attrsStr} />\n${otherChildren}${hintIconLine}${customContentLine}`;
}

/**
 * Rewrites an existing <input tuiTextfieldLegacy> to <input tuiInput ...>
 * by replacing the legacy directive attr and appending form control attrs.
 */
function migrateInnerInput({
    inner,
    template,
    attrsToAdd,
    allChildren,
    indent,
    hintIconLine = '',
    customContentLine = '',
}: {
    allChildren: Element[];
    attrsToAdd: string[];
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
        LEGACY_INPUT_ATTRS.has(a.name.toLowerCase()),
    );
    const legacyAttrLoc = legacyAttr
        ? innerLoc.attrs?.[legacyAttr.name.toLowerCase()]
        : undefined;

    let startTag = template.slice(
        innerLoc.startTag.startOffset,
        innerLoc.startTag.endOffset,
    );

    if (legacyAttrLoc) {
        const relStart = legacyAttrLoc.startOffset - innerLoc.startTag.startOffset;
        const relEnd = legacyAttrLoc.endOffset - innerLoc.startTag.startOffset;

        startTag = `${startTag.slice(0, relStart)}tuiInput${startTag.slice(relEnd)}`;
    }

    // <input> is a void element — insert extra attrs before the closing > or />
    // trimEnd() removes trailing whitespace/newlines before '>' to avoid a visual gap
    const closePos = getVoidClosePos(startTag);
    const extraAttrs = attrsToAdd.filter((a) => a !== 'tuiInput').join(' ');
    const insertStr = extraAttrs ? ` ${extraAttrs}` : '';

    startTag = `${startTag.slice(0, closePos).trimEnd()}${insertStr}${startTag.slice(closePos)}`;

    const siblings = allChildren
        .filter((c) => c !== inner)
        .map((c) => {
            const loc = c.sourceCodeLocation;

            return loc ? template.slice(loc.startOffset, loc.endOffset) : '';
        })
        .join('');

    return `${indent}${startTag}\n${siblings}${hintIconLine}${customContentLine}`;
}

/**
 * Returns the position just before the closing `>` or `/>` in a void element tag string.
 */
function getVoidClosePos(tag: string): number {
    if (tag.endsWith('/>')) {
        return tag.length - 2;
    }

    return tag.lastIndexOf('>');
}

function getPlaceholderText(element: Element): string {
    const textNode = element.childNodes.find((node: ChildNode) => {
        if (node.nodeName !== '#text') {
            return false;
        }

        return !!(node as DefaultTreeAdapterTypes.TextNode).value.trim();
    });

    return (textNode as DefaultTreeAdapterTypes.TextNode | undefined)?.value.trim() ?? '';
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
