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

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

const DOCS_LINK = 'https://taiga-ui.dev/components/input-chip';
const VALUE_CONTENT_ATTR = 'valueContent';
const CONTENT_ATTR = 'content';
const TEXTFIELD_LABEL_OUTSIDE_ATTR = 'tuiTextfieldLabelOutside';
const AUTO_COLOR_ATTR = 'autoColor';
const AUTO_COLOR_TODO = `<!-- ${TODO_MARK} [autoColor] was removed. Use tuiChip with auto-color appearance instead. See https://taiga-ui.dev/components/chip#auto-color -->\n`;
const LABEL_OUTSIDE_TODO = `<!-- ${TODO_MARK} tuiTextfieldLabelOutside was removed. In v5, wrap <tui-textfield> in <label tuiLabel> for label-outside pattern. See: https://taiga-ui.dev/components/label -->\n`;
const PLACEHOLDER_ATTR = 'placeholder';
const PLACEHOLDER_BINDING_ATTR = '[placeholder]';
const EDITABLE_ATTR = 'editable';
const EDITABLE_BINDING_ATTR = '[editable]';
const TAG_VALIDATOR_BINDING_ATTR = '[tagValidator]';
const SEARCH_CHANGE_OUTPUT = '(searchChange)';
// [search] has no template-level v5 equivalent (requires viewChild + signal)
const MANUAL_SEARCH_BINDING_ATTRS = new Set(['[(search)]', '[search]', 'search']);
const CONTROL_ATTR_NAMES = [
    'formControlName',
    '[formControl]',
    'formControl',
    '[(ngModel)]',
    '[ngModel]',
    'ngModel',
] as const;
const CONTROL_ATTRS = new Set(CONTROL_ATTR_NAMES.map((name) => name.toLowerCase()));

export function migrateMultiSelect({
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
    const elements = findElementsByTagName(template, 'tui-multi-select');

    elements.forEach((element) => {
        const startOffset = element.sourceCodeLocation?.startOffset;
        const controlAttrs = element.attrs.filter((attr) =>
            CONTROL_ATTRS.has(attr.name.toLowerCase()),
        );

        renameAttr(
            recorder,
            templateOffset,
            element,
            `[${VALUE_CONTENT_ATTR}]`,
            `[${CONTENT_ATTR}]`,
        );
        renameAttr(recorder, templateOffset, element, VALUE_CONTENT_ATTR, CONTENT_ATTR);

        const labelOutsideAttr = element.attrs.find((attr) =>
            [
                `[${TEXTFIELD_LABEL_OUTSIDE_ATTR}]`.toLowerCase(),
                TEXTFIELD_LABEL_OUTSIDE_ATTR.toLowerCase(),
            ].includes(attr.name.toLowerCase()),
        );
        const labelOutsideTruthy =
            labelOutsideAttr !== undefined && labelOutsideAttr.value !== 'false';

        removeAttr(
            recorder,
            templateOffset,
            element,
            `[${TEXTFIELD_LABEL_OUTSIDE_ATTR}]`,
            template,
        );
        removeAttr(
            recorder,
            templateOffset,
            element,
            TEXTFIELD_LABEL_OUTSIDE_ATTR,
            template,
        );

        if (labelOutsideTruthy && typeof startOffset === 'number') {
            const lineStart = template.lastIndexOf('\n', startOffset) + 1;
            const indent =
                /^[ \t]*/.exec(template.slice(lineStart, startOffset))?.[0] ?? '';

            recorder.insertLeft(
                templateOffset + startOffset,
                `${LABEL_OUTSIDE_TODO}${indent}`,
            );
        }

        const hasAutoColor = element.attrs.some((attr) =>
            [
                `[${AUTO_COLOR_ATTR}]`.toLowerCase(),
                AUTO_COLOR_ATTR.toLowerCase(),
            ].includes(attr.name.toLowerCase()),
        );

        removeAttr(recorder, templateOffset, element, `[${AUTO_COLOR_ATTR}]`, template);
        removeAttr(recorder, templateOffset, element, AUTO_COLOR_ATTR, template);

        if (hasAutoColor && typeof startOffset === 'number') {
            const lineStart = template.lastIndexOf('\n', startOffset) + 1;
            const indent =
                /^[ \t]*/.exec(template.slice(lineStart, startOffset))?.[0] ?? '';

            recorder.insertLeft(
                templateOffset + startOffset,
                `${AUTO_COLOR_TODO}${indent}`,
            );
        }

        const placeholder = extractPlaceholder(element);

        removeAttr(recorder, templateOffset, element, PLACEHOLDER_ATTR, template);
        removeAttr(recorder, templateOffset, element, PLACEHOLDER_BINDING_ATTR, template);

        const selectLike = extractSelectLike(element);

        removeAttr(recorder, templateOffset, element, EDITABLE_ATTR, template);
        removeAttr(recorder, templateOffset, element, EDITABLE_BINDING_ATTR, template);

        // Extract [tagValidator] → <tui-input-chip *tuiItem="let ctx" [appearance]="...">
        const tagValidatorExpr = extractTagValidator(element);

        if (tagValidatorExpr !== null) {
            removeAttr(
                recorder,
                templateOffset,
                element,
                TAG_VALIDATOR_BINDING_ATTR,
                template,
            );
        }

        // (searchChange) → (input) on <input> with type narrowing
        const searchChangeExpr = extractSearchChange(element);

        if (searchChangeExpr !== null) {
            removeAttr(recorder, templateOffset, element, SEARCH_CHANGE_OUTPUT, template);
        }

        // [search] / [(search)] / search — no template-level v5 equivalent, remove from element
        const hasManualSearchAttrs = element.attrs.some((attr) =>
            MANUAL_SEARCH_BINDING_ATTRS.has(attr.name.toLowerCase()),
        );

        if (hasManualSearchAttrs) {
            for (const attrName of MANUAL_SEARCH_BINDING_ATTRS) {
                removeAttr(recorder, templateOffset, element, attrName, template);
            }
        }

        // Remove form control attrs from element (they go on <input>)
        controlAttrs.forEach((attr) => {
            removeAttr(recorder, templateOffset, element, attr.name, template);
        });

        const hasChevron = element.attrs.some(
            (attr) => attr.name.toLowerCase() === 'tuiChevron'.toLowerCase(),
        );

        replaceTag(
            recorder,
            element.sourceCodeLocation,
            'tui-multi-select',
            'tui-textfield',
            template,
            templateOffset,
            ['multi', ...(hasChevron ? [] : ['tuiChevron'])],
        );

        // Check if <input> already exists inside
        const existingInputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        if (existingInputs.length) {
            existingInputs.forEach((input) => {
                const hasInputChip = input.attrs.some(
                    (attr) => attr.name.toLowerCase() === 'tuiInputChip'.toLowerCase(),
                );

                if (!hasInputChip) {
                    const inputStartOffset =
                        (input.sourceCodeLocation?.startTag?.startOffset ??
                            input.sourceCodeLocation?.startOffset ??
                            0) + '<input'.length;

                    recorder.insertRight(
                        templateOffset + inputStartOffset,
                        ' tuiInputChip',
                    );
                }

                const formAttrs = formatControlAttrs(controlAttrs);

                if (!formAttrs) {
                    return;
                }

                const insertOffset =
                    (input.sourceCodeLocation?.startTag?.startOffset ??
                        input.sourceCodeLocation?.startOffset ??
                        0) + '<input'.length;

                recorder.insertRight(templateOffset + insertOffset, ` ${formAttrs}`);
            });

            return;
        }

        // Insert new <input tuiInputChip /> before first element child
        const formAttrs = formatControlAttrs(controlAttrs);
        const placeholderAttr = formatPlaceholderAttr(placeholder);
        const selectLikeAttr = selectLike === true ? ' tuiSelectLike' : '';
        // selectLike is a string when [editable]="someExpr" was dynamic
        const readonlyAttr =
            typeof selectLike === 'string' ? ` [readOnly]="!${selectLike}"` : '';
        const searchChangeAttr = searchChangeExpr
            ? ` (input)="${searchChangeExpr}(($event.target as HTMLInputElement).value)"`
            : '';
        const manualSearchTodo = hasManualSearchAttrs
            ? `<!-- ${TODO_MARK} [search] was removed. Use (input) on <input tuiInputChip (input)="onSearch($any($event).target.value)"> to track changes; no direct equivalent for programmatic writes. See: ${DOCS_LINK} -->\n`
            : '';
        const searchChangeTodo = searchChangeExpr
            ? `<!-- ${TODO_MARK} (searchChange) was replaced by (input) on <input tuiInputChip (input)="onSearch($any($event).target.value)">. See: ${DOCS_LINK} -->\n`
            : '';
        const firstElementChildOffset = element.childNodes.find(
            (node): node is Element => node.nodeName !== '#text',
        )?.sourceCodeLocation?.startOffset;
        const insertOffset =
            firstElementChildOffset ??
            element.sourceCodeLocation?.endTag?.startOffset ??
            0;
        const chipItemTemplate =
            tagValidatorExpr !== null
                ? `<tui-input-chip *tuiItem="let ctx" [appearance]="${tagValidatorExpr}(ctx.item) ? '' : 'negative'" />\n`
                : '';
        const inputTemplate = `${manualSearchTodo}${searchChangeTodo}<input tuiInputChip${selectLikeAttr}${readonlyAttr}${placeholderAttr ? ` ${placeholderAttr}` : ''}${formAttrs ? ` ${formAttrs}` : ''}${searchChangeAttr} />\n${chipItemTemplate}`;

        recorder.insertRight(templateOffset + insertOffset, inputTemplate);
    });
}

/**
 * Returns:
 *   true          — [editable]="false" → add tuiSelectLike
 *   false         — [editable]="true" or absent → nothing to do
 *   string (expr) — [editable]="someExpr" → add [readOnly]="!someExpr" on <input>
 */
function extractSelectLike(element: Element): boolean | string {
    const bindingAttr = element.attrs.find(
        (attr) => attr.name.toLowerCase() === EDITABLE_BINDING_ATTR,
    );

    if (bindingAttr) {
        if (bindingAttr.value === 'false') {
            return true;
        }

        if (bindingAttr.value === 'true') {
            return false;
        }

        // Dynamic expression — return it so caller can generate [readOnly]="!expr"
        return bindingAttr.value;
    }

    const plainAttr = element.attrs.find(
        (attr) => attr.name.toLowerCase() === EDITABLE_ATTR,
    );

    if (plainAttr) {
        return plainAttr.value === 'false';
    }

    return false;
}

/**
 * Extracts the handler expression from (searchChange)="handler($event)".
 * Returns just "handler" so we can generate (input)="handler(($event.target as HTMLInputElement).value)".
 * Returns null if the attr is absent.
 */
function extractSearchChange(element: Element): string | null {
    const attr = element.attrs.find(
        (a) => a.name.toLowerCase() === SEARCH_CHANGE_OUTPUT.toLowerCase(),
    );

    if (!attr) {
        return null;
    }

    // Strip trailing ($event) call if present: "fn($event)" → "fn"
    return attr.value.replace(/\(\$event\)\s*$/, '').trim();
}

/**
 * Extracts the expression from [tagValidator]="expr".
 * Returns the expression string, or null if attr is absent.
 * The expression is used to generate:
 *   <tui-input-chip *tuiItem="let ctx" [appearance]="expr(ctx.item) ? '' : 'negative'" />
 */
function extractTagValidator(element: Element): string | null {
    const attr = element.attrs.find(
        (a) => a.name.toLowerCase() === TAG_VALIDATOR_BINDING_ATTR.toLowerCase(),
    );

    return attr?.value ?? null;
}

interface PlaceholderInfo {
    readonly attr: string;
    readonly value: string;
}

function extractPlaceholder(element: Element): PlaceholderInfo | null {
    const bindingAttr = element.attrs.find(
        (attr) => attr.name.toLowerCase() === PLACEHOLDER_BINDING_ATTR,
    );

    if (bindingAttr) {
        return {attr: PLACEHOLDER_BINDING_ATTR, value: bindingAttr.value};
    }

    const plainAttr = element.attrs.find(
        (attr) => attr.name.toLowerCase() === PLACEHOLDER_ATTR,
    );

    if (plainAttr) {
        return {attr: PLACEHOLDER_ATTR, value: plainAttr.value};
    }

    return null;
}

function formatPlaceholderAttr(placeholder: PlaceholderInfo | null): string {
    if (!placeholder) {
        return '';
    }

    return `${placeholder.attr}="${placeholder.value}"`;
}

function renameAttr(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
    from: string,
    to: string,
): void {
    const attrLocation = element.sourceCodeLocation?.attrs?.[from.toLowerCase()];

    if (!attrLocation) {
        return;
    }

    recorder.remove(templateOffset + attrLocation.startOffset, from.length);
    recorder.insertRight(templateOffset + attrLocation.startOffset, to);
}

function removeAttr(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
    name: string,
    template: string,
): void {
    const attrLocation = element.sourceCodeLocation?.attrs?.[name.toLowerCase()];

    if (!attrLocation) {
        return;
    }

    const lineStart = template.lastIndexOf('\n', attrLocation.startOffset) + 1;
    const lineEnd = template.indexOf('\n', attrLocation.endOffset);
    const attrText = template.slice(attrLocation.startOffset, attrLocation.endOffset);
    const lineText = lineEnd === -1 ? '' : template.slice(lineStart, lineEnd);

    if (lineText.trim() === attrText.trim() && lineEnd !== -1) {
        recorder.remove(templateOffset + lineStart, lineEnd - lineStart + 1);

        return;
    }

    recorder.remove(
        templateOffset + attrLocation.startOffset - 1,
        attrLocation.endOffset - attrLocation.startOffset + 1,
    );
}

function formatControlAttrs(attrs: Array<{name: string; value: string}>): string {
    return attrs
        .map(({name, value}) => `${normalizeAttrName(name)}="${value}"`)
        .join(' ');
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
        case '[(ngmodel)]':
            return '[(ngModel)]';
        case 'ngmodel':
            return 'ngModel';
        default:
            return name;
    }
}
