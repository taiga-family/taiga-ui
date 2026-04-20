import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsInTemplateByFn} from '../../../../utils/templates/elements';
import {migrateAttrValue} from '../../../../utils/templates/migrate-attr-value';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces/template-resource';
import {buildTuiInputReplacement} from './migrate-input';
import {registerCustomContentImports} from './migrate-legacy-custom-content';
import {buildTuiTextareaReplacement} from './migrate-textarea';

type Element = DefaultTreeAdapterTypes.Element;

/** Legacy controls that contain tuiHintContent and need migration. */
const LEGACY_CONTROLS = new Set([
    'tui-combo-box',
    'tui-input',
    'tui-input-date',
    'tui-input-date-range',
    'tui-input-number',
    'tui-input-phone',
    'tui-input-tag',
    'tui-input-time',
    'tui-multi-select',
    'tui-select',
    'tui-textarea',
]);

const HINT_ATTR_NAMES = [
    '[tuiHintAppearance]',
    '[tuiHintContent]',
    '[tuiHintDirection]',
    'tuiHintAppearance',
    'tuiHintContent',
    'tuiHintDirection',
];

function hasHintContent(element: Element): boolean {
    return element.attrs.some((attr) => {
        const lower = attr.name.toLowerCase();

        return (
            lower === 'tuiHintContent'.toLowerCase() ||
            lower === '[tuiHintContent]'.toLowerCase()
        );
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

export function buildTuiIconStr(element: Element, template: string): string {
    const contentAttr = element.attrs.find((a) => {
        const lower = a.name.toLowerCase();

        return (
            lower === '[tuiHintContent]'.toLowerCase() ||
            lower === 'tuiHintContent'.toLowerCase()
        );
    });

    if (!contentAttr) {
        return '';
    }

    const isBinding = contentAttr.name.toLowerCase() === '[tuiHintContent]'.toLowerCase();
    const tooltipAttr = isBinding
        ? `[tuiTooltip]="${contentAttr.value}"`
        : `tuiTooltip="${contentAttr.value}"`;

    const appearanceAttr = element.attrs.find((a) => {
        const lower = a.name.toLowerCase();

        return (
            lower === '[tuiHintAppearance]'.toLowerCase() ||
            lower === 'tuiHintAppearance'.toLowerCase()
        );
    });

    const directionAttr = element.attrs.find((a) => {
        const lower = a.name.toLowerCase();

        return (
            lower === '[tuiHintDirection]'.toLowerCase() ||
            lower === 'tuiHintDirection'.toLowerCase()
        );
    });

    const extraAttrs: string[] = [];

    if (appearanceAttr) {
        const original = getOriginalAttrText(
            template,
            element,
            appearanceAttr.name.toLowerCase(),
        );

        extraAttrs.push(
            original ??
                (appearanceAttr.value
                    ? `${appearanceAttr.name}="${appearanceAttr.value}"`
                    : appearanceAttr.name),
        );
    }

    if (directionAttr) {
        const nameLower = directionAttr.name.toLowerCase();
        const migratedValue = migrateAttrValue(nameLower, directionAttr.value);
        const original = getOriginalAttrText(template, element, nameLower);
        let attrText: string;

        if (original && directionAttr.value !== migratedValue) {
            attrText = original.replace(
                `="${directionAttr.value}"`,
                `="${migratedValue}"`,
            );
        } else {
            attrText =
                original ??
                (directionAttr.value
                    ? `${directionAttr.name}="${migratedValue}"`
                    : directionAttr.name);
        }

        extraAttrs.push(attrText);
    }

    const allAttrs = [tooltipAttr, ...extraAttrs];

    return `<tui-icon ${allAttrs.join(' ')} />`;
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

export function migrateHintOnLegacyControls({
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
        (el) => LEGACY_CONTROLS.has(el.tagName) && hasHintContent(el),
    );

    if (elements.length === 0) {
        return;
    }

    addImportToClosestModule(resource.componentPath, 'TuiIcon', '@taiga-ui/core');
    addImportToClosestModule(resource.componentPath, 'TuiTooltip', '@taiga-ui/kit');
    registerCustomContentImports(
        resource,
        elements.filter(
            (el) => el.tagName === 'tui-input' || el.tagName === 'tui-textarea',
        ),
    );

    elements.forEach((element) => {
        const loc = element.sourceCodeLocation;

        if (!loc) {
            return;
        }

        const isSelfClosing = !loc.endTag;
        const tagName = element.tagName;
        const tuiIconStr = buildTuiIconStr(element, template);

        if (!tuiIconStr) {
            return;
        }

        if (!isSelfClosing && tagName === 'tui-input') {
            const result = buildTuiInputReplacement(template, element, tuiIconStr);

            if (result) {
                recorder.remove(
                    templateOffset + result.startOffset,
                    result.endOffset - result.startOffset,
                );
                recorder.insertRight(
                    templateOffset + result.startOffset,
                    result.replacement,
                );
            }

            return;
        }

        if (!isSelfClosing && tagName === 'tui-textarea') {
            const result = buildTuiTextareaReplacement(template, element, tuiIconStr);

            if (result) {
                recorder.remove(
                    templateOffset + result.startOffset,
                    result.endOffset - result.startOffset,
                );
                recorder.insertRight(
                    templateOffset + result.startOffset,
                    result.replacement,
                );
            }

            return;
        }

        if (isSelfClosing) {
            const nonHintAttrs = element.attrs
                .filter(
                    (attr) =>
                        !HINT_ATTR_NAMES.some(
                            (n) => n.toLowerCase() === attr.name.toLowerCase(),
                        ),
                )
                .map((attr) => {
                    const original = getOriginalAttrText(
                        template,
                        element,
                        attr.name.toLowerCase(),
                    );

                    return (
                        original ??
                        (attr.value ? `${attr.name}="${attr.value}"` : attr.name)
                    );
                });

            const attrsStr = nonHintAttrs.length > 0 ? ` ${nonHintAttrs.join(' ')}` : '';
            const replacement = `<${tagName}${attrsStr}>${tuiIconStr}</${tagName}>`;

            recorder.remove(
                templateOffset + loc.startOffset,
                loc.endOffset - loc.startOffset,
            );
            recorder.insertRight(templateOffset + loc.startOffset, replacement);
        } else {
            for (const attrName of HINT_ATTR_NAMES) {
                removeAttr(recorder, templateOffset, element, attrName, template);
            }

            const insertOffset = loc.endTag?.startOffset;

            insertOffset &&
                recorder.insertRight(templateOffset + insertOffset, `${tuiIconStr}\n`);
        }
    });
}
