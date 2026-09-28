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
    getOriginalAttrText,
    replaceAttrValue,
} from '../../../utils/templates/get-original-attr-text';

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type TextNode = DefaultTreeAdapterTypes.TextNode;

const DOCS_LINK = 'https://taiga-ui.dev/components/input';

const TEXTFIELD_WRAPPER_ATTRS = new Set(
    [
        '[tuiTextfieldAppearance]',
        '[tuiTextfieldCleaner]',
        '[tuiTextfieldSize]',
        'tuiTextfieldAppearance',
        'tuiTextfieldCleaner',
        'tuiTextfieldSize',
    ].map((name) => name.toLowerCase()),
);

const TEXTFIELD_WRAPPER_ATTR_RENAMES = new Map<string, string>([
    ['[tuiTextfieldFiller]'.toLowerCase(), '[filler]'],
    ['[tuiTextfieldIcon]'.toLowerCase(), '[iconEnd]'],
    ['[tuiTextfieldIconLeft]'.toLowerCase(), '[iconStart]'],
    ['tuiTextfieldFiller'.toLowerCase(), 'filler'],
    ['tuiTextfieldIcon'.toLowerCase(), 'iconEnd'],
    ['tuiTextfieldIconLeft'.toLowerCase(), 'iconStart'],
]);

const LABEL_OUTSIDE_ATTRS = new Set(
    ['[tuiTextfieldLabelOutside]', 'tuiTextfieldLabelOutside'].map((name) =>
        name.toLowerCase(),
    ),
);

// `<tui-primitive-textfield>` held the value via [(value)]; `<tui-textfield>` has no such
// property, so the binding moves to the projected `<input tuiTextfield>` as ngModel.
const VALUE_ATTR_RENAMES = new Map<string, string>([
    ['(valueChange)'.toLowerCase(), '(ngModelChange)'],
    ['[(value)]'.toLowerCase(), '[(ngModel)]'],
    ['[value]'.toLowerCase(), '[ngModel]'],
]);

const FOCUSED_CHANGE_ATTRS = new Set(['(focusedChange)'.toLowerCase()]);

// Standalone CDK directives that attach to any element (including <tui-textfield>) and stay
// on the wrapper unchanged — they must not be reported as unrecognized attributes.
const WRAPPER_PASSTHROUGH_ATTRS = new Set(
    [
        '(tuiHoveredChange)',
        'tuiActiveZone',
        '[tuiActiveZone]',
        '(tuiActiveZoneChange)',
    ].map((name) => name.toLowerCase()),
);

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

const CONTROL_ATTRS = new Set(
    [
        'formControlName',
        '[formControl]',
        'formControl',
        '[(ngModel)]',
        '[ngModel]',
        'ngModel',
        '(ngModelChange)',
    ].map((name) => name.toLowerCase()),
);

const LEGACY_INPUT_ATTRS = new Set(
    ['tuiTextfield', 'tuiTextfieldLegacy'].map((name) => name.toLowerCase()),
);

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

export function migratePrimitiveTextfield({
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
    const elements = findElementsByTagName(template, 'tui-primitive-textfield');
    const processable = elements.filter((element) => !hasHintContent(element));

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

interface MigrationContext {
    placeholder: string;
    // true = [tuiTextfieldLabelOutside]="true" → text becomes placeholder on the input
    // false = absent/="false" → text becomes <label tuiLabel> inside <tui-textfield>
    // 'dynamic' = bound expression, cannot be resolved statically → left as-is with a TODO
    labelOutside: boolean | 'dynamic';
    focusedChangeAttr: string | null;
    unknownAttrs: string[];
}

function buildReplacement(
    template: string,
    element: Element,
): {startOffset: number; endOffset: number; replacement: string} | null {
    const loc = element.sourceCodeLocation;

    if (!loc?.startTag) {
        return null;
    }

    const isSelfClosing = !loc.endTag;
    const endOffset = isSelfClosing ? loc.startTag.endOffset : loc.endOffset;
    const textfieldAttrs: string[] = [];
    const inputAttrs = ['tuiTextfield'];
    const controlStateAttrs = getControlStateAttrs(element);

    const controlStateAttrsLower = new Set(
        controlStateAttrs.map((a) => a.name.toLowerCase()),
    );

    const ctx: MigrationContext = {
        placeholder: '',
        labelOutside: false,
        focusedChangeAttr: null,
        unknownAttrs: [],
    };

    for (const attr of element.attrs) {
        const nameLower = attr.name.toLowerCase();

        if (controlStateAttrsLower.has(nameLower)) {
            continue;
        }

        if (LABEL_OUTSIDE_ATTRS.has(nameLower)) {
            const val = attr.value.trim();

            if (val === 'true' || (!nameLower.startsWith('[') && val === '')) {
                ctx.labelOutside = true;
            } else if (val === 'false') {
                ctx.labelOutside = false;
            } else {
                ctx.labelOutside = 'dynamic';
            }

            continue;
        }

        const renamedWrapperAttr = TEXTFIELD_WRAPPER_ATTR_RENAMES.get(nameLower);

        if (renamedWrapperAttr !== undefined) {
            textfieldAttrs.push(
                attr.value ? `${renamedWrapperAttr}="${attr.value}"` : renamedWrapperAttr,
            );
            continue;
        }

        if (TEXTFIELD_WRAPPER_ATTRS.has(nameLower)) {
            const original = getOriginalAttrText(template, element, attr);
            const migratedValue = migrateAttrValue(nameLower, attr.value);

            textfieldAttrs.push(replaceAttrValue(original, migratedValue));
            continue;
        }

        const renamedValueAttr = VALUE_ATTR_RENAMES.get(nameLower);

        if (renamedValueAttr !== undefined) {
            inputAttrs.push(
                attr.value ? `${renamedValueAttr}="${attr.value}"` : renamedValueAttr,
            );
            continue;
        }

        if (CONTROL_ATTRS.has(nameLower)) {
            inputAttrs.push(getOriginalAttrText(template, element, attr));
            continue;
        }

        if (FOCUSED_CHANGE_ATTRS.has(nameLower)) {
            ctx.focusedChangeAttr = getOriginalAttrText(template, element, attr);
            continue;
        }

        if (HINT_ATTRS.has(nameLower)) {
            continue;
        }

        if (isClassOrStyleAttr(nameLower) || WRAPPER_PASSTHROUGH_ATTRS.has(nameLower)) {
            textfieldAttrs.push(getOriginalAttrText(template, element, attr));
            continue;
        }

        const original = getOriginalAttrText(template, element, attr);
        const originalName = /^[\w[\]()]+/.exec(original)?.[0] ?? attr.name;

        ctx.unknownAttrs.push(originalName);
        textfieldAttrs.push(original);
    }

    const controlStateStr = stringifyControlStateAttrs(controlStateAttrs);

    ctx.placeholder = isSelfClosing ? '' : getPlaceholderText(element);

    const lineStart = template.lastIndexOf('\n', loc.startOffset) + 1;
    const indent = /^[ \t]*/.exec(template.slice(lineStart, loc.startOffset))?.[0] ?? '';

    const wrapperAttrsStr =
        textfieldAttrs.length > 0 ? ` ${textfieldAttrs.join(' ')}` : '';

    const innerContent = buildInnerContent({
        element,
        template,
        inputAttrs,
        controlStateStr,
        ctx,
        indent,
        isSelfClosing,
    });

    const todoComment = buildTodoComment(ctx);
    // With a TODO the comment ends in `\n`, so the tag needs its own indent; without one the
    // whitespace preserved before startOffset already positions the tag.
    const tagIndent = todoComment ? indent : '';
    const core = `${tagIndent}<tui-textfield${wrapperAttrsStr}>\n${innerContent}${indent}</tui-textfield>`;

    return {
        startOffset: loc.startOffset,
        endOffset,
        replacement: `${todoComment}${core}`,
    };
}

function buildTodoComment(ctx: MigrationContext): string {
    const notes: string[] = [];

    if (ctx.focusedChangeAttr) {
        notes.push(
            `${ctx.focusedChangeAttr} has no direct equivalent. Read focus state from the TuiTextfieldComponent.focused signal, or bind (focusin)/(focusout) on <input tuiTextfield>.`,
        );
    }

    if (ctx.placeholder && ctx.labelOutside === 'dynamic') {
        notes.push(
            '[tuiTextfieldLabelOutside] was dynamic and cannot be migrated automatically. Use <label tuiLabel> inside <tui-textfield> for a floating label, or place a static label outside.',
        );
    }

    for (const name of ctx.unknownAttrs) {
        notes.push(
            `"${name}" is an unrecognized attribute and was placed on <tui-textfield>. Move it to <input tuiTextfield> if it targets the native element.`,
        );
    }

    if (notes.length === 0) {
        return '';
    }

    const lines = [
        `<!-- ${TODO_MARK} tui-primitive-textfield migration (see ${DOCS_LINK}):`,
        ...notes.map((n) => `     - ${n}`),
        '-->',
    ];

    return `${lines.join('\n')}\n`;
}

function buildInnerContent({
    element,
    template,
    inputAttrs,
    controlStateStr,
    ctx,
    indent,
    isSelfClosing,
}: {
    controlStateStr: string;
    ctx: MigrationContext;
    element: Element;
    indent: string;
    inputAttrs: string[];
    isSelfClosing: boolean;
    template: string;
}): string {
    const {placeholder, labelOutside} = ctx;

    const childElements = isSelfClosing
        ? []
        : element.childNodes.filter(
              (node: ChildNode): node is Element =>
                  node.nodeName !== '#text' && node.nodeName !== '#comment',
          );

    const labelEl = buildLabelEl(placeholder, labelOutside, indent);

    const placeholderAttr =
        placeholder && labelOutside === true ? `placeholder="${placeholder}"` : '';

    const legacyInnerInput = childElements.find(
        (node) =>
            node.nodeName === 'input' &&
            node.attrs.some((a) => LEGACY_INPUT_ATTRS.has(a.name.toLowerCase())),
    );

    if (legacyInnerInput) {
        const extraAttrs = [
            ...inputAttrs.filter((a) => a !== 'tuiTextfield'),
            ...(placeholderAttr ? [placeholderAttr] : []),
        ];

        return `${labelEl}${migrateInnerInput({
            parent: element,
            inner: legacyInnerInput,
            template,
            attrsToAdd: extraAttrs,
            controlStateStr,
            indent,
        })}`;
    }

    const genAttrs = [...inputAttrs, ...(placeholderAttr ? [placeholderAttr] : [])];
    const attrsStr = genAttrs.length > 0 ? ` ${genAttrs.join(' ')}` : '';

    const otherChildren = childElements
        .map((child) => {
            const childLoc = child.sourceCodeLocation;

            return childLoc
                ? template.slice(childLoc.startOffset, childLoc.endOffset)
                : '';
        })
        .join('');

    return `${labelEl}${indent}<input${attrsStr}${controlStateStr} />\n${otherChildren}`;
}

/**
 * Rewrites an existing `<input tuiTextfieldLegacy>` to `<input tuiTextfield ...>` by
 * replacing the legacy directive and appending the value/control attrs moved off the host.
 */
function migrateInnerInput({
    parent,
    inner,
    template,
    attrsToAdd,
    controlStateStr,
    indent,
}: {
    attrsToAdd: string[];
    controlStateStr: string;
    indent: string;
    inner: Element;
    parent: Element;
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

        startTag = `${startTag.slice(0, relStart)}tuiTextfield${startTag.slice(relEnd)}`;
    }

    // <input> is a void element — insert the extra attrs before the closing `>` or `/>`.
    const closePos = startTag.endsWith('/>')
        ? startTag.length - 2
        : startTag.lastIndexOf('>');

    const extraAttrs = attrsToAdd.filter((a) => a !== 'tuiTextfield').join(' ');
    const insertStr = `${extraAttrs ? ` ${extraAttrs}` : ''}${controlStateStr}`;

    startTag = `${startTag.slice(0, closePos).trimEnd()}${insertStr}${startTag.slice(closePos)}`;

    const innerStart = innerLoc.startOffset;

    const siblingsAfter = parent.childNodes
        .filter((child): child is Element => {
            if (
                child === inner ||
                child.nodeName === '#text' ||
                child.nodeName === '#comment'
            ) {
                return false;
            }

            const childLoc = (child as Element).sourceCodeLocation;

            return !!childLoc && childLoc.startOffset > innerStart;
        })
        .map((child) => {
            const childLoc = child.sourceCodeLocation;

            return childLoc
                ? template.slice(childLoc.startOffset, childLoc.endOffset)
                : '';
        })
        .join('');

    return `${indent}${startTag}\n${siblingsAfter}`;
}

// labelOutside=false → floating <label tuiLabel>; ='dynamic' → keep raw text (a TODO explains it);
// =true → text becomes the input placeholder, handled by the caller, so no label element here.
function buildLabelEl(
    placeholder: string,
    labelOutside: boolean | 'dynamic',
    indent: string,
): string {
    if (!placeholder) {
        return '';
    }

    if (labelOutside === false) {
        return `${indent}<label tuiLabel>${placeholder}</label>\n`;
    }

    return labelOutside === 'dynamic' ? `${indent}${placeholder}\n` : '';
}

function getPlaceholderText(element: Element): string {
    const textNode = element.childNodes.find((node: ChildNode): node is TextNode =>
        node.nodeName === '#text' ? !!(node as TextNode).value.trim() : false,
    );

    return textNode?.value.trim() ?? '';
}
