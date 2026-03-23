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
    '[tuiHintAppearance]'.toLowerCase(),
    '[tuiHintContent]'.toLowerCase(),
    '[tuiHintDirection]'.toLowerCase(),
    '[tuiTextfieldAppearance]'.toLowerCase(),
    '[tuiTextfieldCleaner]'.toLowerCase(),
    '[tuiTextfieldSize]'.toLowerCase(),
    'tuiHintAppearance'.toLowerCase(),
    'tuiHintContent'.toLowerCase(),
    'tuiHintDirection'.toLowerCase(),
    'tuiTextfieldAppearance'.toLowerCase(),
    'tuiTextfieldCleaner'.toLowerCase(),
    'tuiTextfieldSize'.toLowerCase(),
]);

const ATTRS_TO_DROP = new Set([
    '[tuiTextfieldLabelOutside]'.toLowerCase(),
    'tuiTextfieldLabelOutside'.toLowerCase(),
]);

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

    const replacements = elements
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
}

function buildReplacement(
    template: string,
    element: Element,
): {startOffset: number; endOffset: number; replacement: string} | null {
    const loc = element.sourceCodeLocation;

    if (!loc?.startTag || !loc.endTag) {
        return null;
    }

    const textfieldAttrs: string[] = [];
    const textareaAttrs: string[] = ['tuiTextarea'];
    let maxLengthAttrText: string | null = null;
    let maxLengthIsBinding = false;
    const ctx: MigrationContext = {
        expandableValue: null,
        rowsMigratedTo: null,
        placeholder: '',
    };

    for (const attr of element.attrs) {
        const nameLower = attr.name.toLowerCase();

        if (nameLower === 'expandable' || nameLower === '[expandable]') {
            ctx.expandableValue = attr.value || 'true';
            continue;
        }

        if (ATTRS_TO_DROP.has(nameLower)) {
            continue;
        }

        if (TEXTFIELD_WRAPPER_ATTRS.has(nameLower)) {
            const original = getOriginalAttrText(template, element, nameLower);

            textfieldAttrs.push(
                original ?? (attr.value ? `${attr.name}="${attr.value}"` : attr.name),
            );
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

        textareaAttrs.push(
            original ?? (attr.value ? `${attr.name}="${attr.value}"` : attr.name),
        );
    }

    if (maxLengthAttrText !== null) {
        const attrName = maxLengthIsBinding ? '[limit]' : 'limit';

        textareaAttrs.push(`${attrName}="${maxLengthAttrText}"`);
    }

    ctx.placeholder = getPlaceholderText(element);

    const lineStart = template.lastIndexOf('\n', loc.startOffset) + 1;
    const indent = /^[ \t]*/.exec(template.slice(lineStart, loc.startOffset))?.[0] ?? '';

    const wrapperAttrsStr =
        textfieldAttrs.length > 0 ? ` ${textfieldAttrs.join(' ')}` : '';
    const innerContent = buildInnerContent(
        element,
        template,
        textareaAttrs,
        ctx.placeholder,
        indent,
    );
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

    if (ctx.placeholder) {
        notes.push(
            `Text content "${ctx.placeholder}" became placeholder on <textarea>. Add <label tuiLabel>${ctx.placeholder}</label> inside <tui-textfield> if a floating label is needed.`,
        );
    }

    if (ctx.expandableValue !== null) {
        const wasFixed = ctx.expandableValue === 'false' || ctx.expandableValue === '';

        if (wasFixed) {
            const maxVal = ctx.rowsMigratedTo ?? '[max]="N"';

            notes.push(
                `expandable="false" was removed. New component always auto-resizes. To restore fixed height set the same value for [min] and ${maxVal} on <textarea tuiTextarea>.`,
            );
        } else {
            notes.push(
                `[expandable] was removed. New component always auto-resizes between [min] (default: 1) and [max] (default: 3) rows.${ctx.rowsMigratedTo ? ` [rows] was migrated to ${ctx.rowsMigratedTo}.` : ''}`,
            );
        }
    }

    if (notes.length === 0) {
        return '';
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

function buildInnerContent(
    element: Element,
    template: string,
    textareaAttrs: string[],
    placeholder: string,
    indent: string,
): string {
    const childElements = element.childNodes.filter(
        (node: ChildNode): node is Element =>
            node.nodeName !== '#text' && node.nodeName !== '#comment',
    );

    // If user already put an explicit <textarea tuiTextfieldLegacy> inside,
    // reuse it instead of generating a new one.
    const legacyInnerTextarea = childElements.find(
        (node) =>
            node.nodeName === 'textarea' &&
            node.attrs.some((a) => LEGACY_TEXTAREA_ATTRS.has(a.name.toLowerCase())),
    );

    if (legacyInnerTextarea) {
        return migrateInnerTextarea(
            legacyInnerTextarea,
            template,
            textareaAttrs,
            childElements,
            indent,
        );
    }

    const attrsStr = textareaAttrs.length > 0 ? ` ${textareaAttrs.join(' ')}` : '';
    const placeholderAttr = placeholder ? ` placeholder="${placeholder}"` : '';

    const otherChildren = childElements
        .map((child) => {
            const childLoc = child.sourceCodeLocation;

            return childLoc
                ? template.slice(childLoc.startOffset, childLoc.endOffset)
                : '';
        })
        .join('');

    return `${indent}<textarea${placeholderAttr}${attrsStr}></textarea>\n${otherChildren}`;
}

/**
 * Rewrites an existing <textarea tuiTextfieldLegacy> to <textarea tuiTextarea ...>
 * by replacing the legacy directive attr and appending form control attrs.
 */
function migrateInnerTextarea(
    inner: Element,
    template: string,
    attrsToAdd: string[],
    allChildren: Element[],
    indent: string,
): string {
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
    const insertStr = extraAttrs ? ` ${extraAttrs}` : '';

    // trimEnd() removes trailing whitespace/newlines before '>' to avoid a visual gap
    startTag =
        startTag.slice(0, closeAngle).trimEnd() + insertStr + startTag.slice(closeAngle);

    // Reconstruct full inner element (self-closing or with end tag)
    const innerContent = innerLoc.endTag
        ? startTag + template.slice(innerLoc.startTag.endOffset, innerLoc.endOffset)
        : startTag;

    // Include other sibling elements (e.g. tui-data-list-wrapper, tui-error)
    const siblings = allChildren
        .filter((c) => c !== inner)
        .map((c) => {
            const loc = c.sourceCodeLocation;

            return loc ? template.slice(loc.startOffset, loc.endOffset) : '';
        })
        .join('');

    return `${indent}${innerContent}\n${siblings}`;
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
