import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsInTemplateByFn} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces/template-resource';

type Element = DefaultTreeAdapterTypes.Element;

export interface CustomContent {
    value: string;
    isBinding: boolean;
}

export const CUSTOM_CONTENT_ATTRS = new Set([
    '[tuiTextfieldCustomContent]'.toLowerCase(),
    'tuiTextfieldCustomContent'.toLowerCase(),
]);

/**
 * Legacy controls that support `tuiTextfieldCustomContent`. `tui-input` and
 * `tui-textarea` are excluded because their own migrations perform a full
 * element rewrite and handle the attribute inline.
 */
const TARGET_TAGS = new Set([
    'tui-combo-box',
    'tui-input-date',
    'tui-input-date-multi',
    'tui-input-date-range',
    'tui-input-month',
    'tui-input-password',
    'tui-input-phone',
    'tui-input-phone-international',
    'tui-input-tag',
    'tui-input-time',
    'tui-input-year',
    'tui-multi-select',
    'tui-select',
]);

export function findCustomContentAttr(element: Element): CustomContent | null {
    const attr = element.attrs.find((a) =>
        CUSTOM_CONTENT_ATTRS.has(a.name.toLowerCase()),
    );

    if (!attr) {
        return null;
    }

    return {
        value: attr.value,
        isBinding: attr.name.toLowerCase().startsWith('['),
    };
}

export function findCustomContentAttrName(element: Element): string | null {
    return (
        element.attrs.find((a) => CUSTOM_CONTENT_ATTRS.has(a.name.toLowerCase()))?.name ??
        null
    );
}

export function registerCustomContentImports(
    resource: TemplateResource,
    elements: Element[],
): void {
    const attrs = elements
        .map(findCustomContentAttr)
        .filter((x): x is CustomContent => !!x);

    if (attrs.length === 0) {
        return;
    }

    addImportToClosestModule(resource.componentPath, 'TuiIcon', '@taiga-ui/core');

    if (attrs.some((a) => a.isBinding)) {
        addImportToClosestModule(
            resource.componentPath,
            'PolymorpheusOutlet',
            '@taiga-ui/polymorpheus',
        );
    }
}

export function buildCustomContentIconStr(
    customContent: CustomContent | null,
    indent: string,
): string {
    if (!customContent) {
        return '';
    }

    if (customContent.isBinding) {
        return [
            '',
            `${indent}<tui-icon`,
            `${indent}    *polymorpheusOutlet="${customContent.value} as src"`,
            `${indent}    [icon]="src"`,
            `${indent}/>`,
        ].join('\n');
    }

    return `\n${indent}<tui-icon icon="${customContent.value}" />`;
}

export function migrateLegacyCustomContent({
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

    const elements = findElementsInTemplateByFn(
        template,
        (el) => TARGET_TAGS.has(el.tagName) && !!findCustomContentAttr(el),
    );

    if (elements.length === 0) {
        return;
    }

    registerCustomContentImports(resource, elements);

    elements.forEach((element) => {
        const customContent = findCustomContentAttr(element);

        if (!customContent) {
            return;
        }

        removeCustomContentAttr(element, recorder, templateOffset, template);
        insertIconBeforeEndTag(
            element,
            customContent,
            recorder,
            templateOffset,
            template,
        );
    });
}

function removeCustomContentAttr(
    element: Element,
    recorder: UpdateRecorder,
    templateOffset: number,
    template: string,
): void {
    const attrName = findCustomContentAttrName(element);

    if (!attrName) {
        return;
    }

    const loc = element.sourceCodeLocation?.attrs?.[attrName.toLowerCase()];

    if (!loc) {
        return;
    }

    const lineStart = template.lastIndexOf('\n', loc.startOffset) + 1;
    const lineEnd = template.indexOf('\n', loc.endOffset);
    const attrText = template.slice(loc.startOffset, loc.endOffset);
    const lineText = lineEnd === -1 ? '' : template.slice(lineStart, lineEnd);

    if (lineText.trim() === attrText.trim() && lineEnd !== -1) {
        recorder.remove(templateOffset + lineStart, lineEnd - lineStart + 1);

        return;
    }

    recorder.remove(
        templateOffset + loc.startOffset - 1,
        loc.endOffset - loc.startOffset + 1,
    );
}

function insertIconBeforeEndTag(
    element: Element,
    customContent: CustomContent,
    recorder: UpdateRecorder,
    templateOffset: number,
    template: string,
): void {
    const endTag = element.sourceCodeLocation?.endTag;

    if (!endTag) {
        return;
    }

    const lineStart = template.lastIndexOf('\n', endTag.startOffset) + 1;

    const indent =
        /^[ \t]*/.exec(template.slice(lineStart, endTag.startOffset))?.[0] ?? '';

    const iconStr = buildCustomContentIconStr(customContent, indent);

    recorder.insertRight(
        templateOffset + endTag.startOffset,
        `${iconStr.trimStart()}\n${indent}`,
    );
}
