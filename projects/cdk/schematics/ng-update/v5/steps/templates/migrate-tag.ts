import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {
    findElementsInTemplateByFn,
    hasElementAttribute,
} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';
import {replaceTag} from '../../../utils/templates/replace-tag';

type Element = DefaultTreeAdapterTypes.Element;

const VALUE_ATTRS = ['value', '[value]'] as const;
const HOVERABLE_ATTRS = ['hoverable', '[hoverable]'] as const;
const AUTO_COLOR_ATTRS = ['autoColor', '[autoColor]'] as const;
const INTERACTIVE_ATTRS = ['editable', '[editable]', 'removable', '[removable]'] as const;
const STATUS_ATTRS = ['status', '[status]'] as const;
const REMOVABLE_ATTRS = [
    ...VALUE_ATTRS,
    ...HOVERABLE_ATTRS,
    ...AUTO_COLOR_ATTRS,
    ...INTERACTIVE_ATTRS,
] as const;
const INTERACTIVE_CHIP_COMMENT =
    '<!-- TODO: (Taiga UI migration) Interactive chip behavior changed. See https://taiga-ui.dev/components/chip#interactive -->\n';
const VALUE_ATTR_SET = new Set(VALUE_ATTRS.map((name) => name.toLowerCase()));
const INTERACTIVE_ATTR_SET = new Set(INTERACTIVE_ATTRS.map((name) => name.toLowerCase()));
const REMOVABLE_ATTR_SET = new Set(REMOVABLE_ATTRS.map((name) => name.toLowerCase()));

export function migrateTagToChip({
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
    const allTargets = findTagTargets(template)
        .map((element) => buildTagMigration(template, element))
        .filter((item): item is TagMigration => Boolean(item))
        .sort((a, b) => b.startOffset - a.startOffset);

    allTargets.forEach((migration) => {
        migration.apply(recorder, templateOffset);
    });
}

interface TagMigration {
    startOffset: number;
    apply(recorder: UpdateRecorder, templateOffset: number): void;
}

function findTagTargets(template: string): Element[] {
    return findElementsInTemplateByFn(
        template,
        (el) => el.tagName === 'tui-tag' || hasElementAttribute(el, 'tuiTag'),
    );
}

function buildTagMigration(template: string, element: Element): TagMigration | null {
    const loc = element.sourceCodeLocation;
    const startTag = loc?.startTag;

    if (!startTag) {
        return null;
    }

    const valueAttr = getFirstAttr(element, VALUE_ATTR_SET);
    const valueContent = getValueContent(valueAttr);
    const contentIsEmpty = Boolean(
        loc?.endTag &&
        template.slice(loc.startTag!.endOffset, loc.endTag.startOffset).trim().length ===
            0,
    );

    if (element.tagName === 'tui-tag' && !loc?.endTag) {
        return buildSelfClosingTagReplacement(element);
    }

    return {
        startOffset: startTag.startOffset,
        apply(recorder, templateOffset) {
            const hasInteractiveAttrs = hasAnyAttr(element, INTERACTIVE_ATTR_SET);

            if (hasInteractiveAttrs) {
                recorder.insertLeft(
                    templateOffset + startTag.startOffset,
                    INTERACTIVE_CHIP_COMMENT,
                );
            }

            if (element.tagName === 'tui-tag') {
                replaceTag(recorder, loc, 'tui-tag', 'span', template, templateOffset, [
                    'tuiChip',
                ]);
            }

            renameAttr(recorder, templateOffset, element, 'status', 'appearance');
            renameAttr(recorder, templateOffset, element, '[status]', '[appearance]');

            removeAttrs(recorder, templateOffset, element, REMOVABLE_ATTRS);

            if (valueContent && contentIsEmpty && loc?.endTag) {
                recorder.insertLeft(
                    templateOffset + loc.endTag.startOffset,
                    valueContent,
                );
            }
        },
    };
}

function buildSelfClosingTagReplacement(element: Element): TagMigration | null {
    const loc = element.sourceCodeLocation;
    const startTag = loc?.startTag;

    if (!loc || !startTag) {
        return null;
    }

    const hasInteractiveAttrs = hasAnyAttr(element, INTERACTIVE_ATTR_SET);
    const attrs = element.attrs
        .filter(
            (attr) =>
                !REMOVABLE_ATTR_SET.has(attr.name) &&
                attr.name !== 'tuiChip'.toLowerCase(),
        )
        .map((attr) => ({
            ...attr,
            name: renameStatusAttr(attr.name),
        }))
        .map((attr) => `${attr.name}${attr.value ? `="${attr.value}"` : ''}`);
    const valueContent = getValueContent(getFirstAttr(element, VALUE_ATTR_SET)) ?? '';
    const attrsText = ['tuiChip', ...attrs].join(' ').trim();
    const replacement = `<span${attrsText ? ` ${attrsText}` : ''}>${valueContent}</span>`;

    return {
        startOffset: startTag.startOffset,
        apply(recorder, templateOffset) {
            if (hasInteractiveAttrs) {
                recorder.insertLeft(
                    templateOffset + loc.startOffset,
                    INTERACTIVE_CHIP_COMMENT,
                );
            }

            recorder.remove(
                templateOffset + loc.startOffset,
                startTag.endOffset - loc.startOffset,
            );
            recorder.insertRight(templateOffset + loc.startOffset, replacement);
        },
    };
}

function getFirstAttr(
    element: Element,
    names: ReadonlySet<string>,
): {name: string; value: string} | undefined {
    return element.attrs.find((attr) => names.has(attr.name));
}

function getValueContent(attr?: {name: string; value: string}): string | null {
    if (!attr) {
        return null;
    }

    if (attr.name === '[value]') {
        return `{{${attr.value}}}`;
    }

    return attr.value;
}

function removeAttrs(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
    names: readonly string[],
): void {
    const attrsLocations = element.sourceCodeLocation?.attrs;

    if (!attrsLocations) {
        return;
    }

    names.forEach((name) => {
        const attrLocation = attrsLocations[name.toLowerCase()];

        if (!attrLocation) {
            return;
        }

        recorder.remove(
            templateOffset + attrLocation.startOffset - 1,
            attrLocation.endOffset - attrLocation.startOffset + 1,
        );
    });
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

function hasAnyAttr(element: Element, names: ReadonlySet<string>): boolean {
    return element.attrs.some((attr) => names.has(attr.name));
}

function renameStatusAttr(name: string): string {
    if (name === STATUS_ATTRS[0]) {
        return 'appearance';
    }

    if (name === STATUS_ATTRS[1]) {
        return '[appearance]';
    }

    return name;
}
