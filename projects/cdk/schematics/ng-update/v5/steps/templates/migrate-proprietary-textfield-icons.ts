import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {
    findElementsByTagName,
    hasElementAttributeWithValue,
} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces/template-resource';

const ICON_ATTRS = ['iconStart', 'iconEnd'] as const;

type Element = DefaultTreeAdapterTypes.Element;

export function migrateProprietaryTextfieldIcons({
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
    const elements = findElementsByTagName(template, 'tui-textfield', shouldMigrate);

    elements.forEach((element) => {
        ICON_ATTRS.forEach((name) => {
            const attr = findAttr(element.attrs, name);
            const attrLocation = attr && element.sourceCodeLocation?.attrs?.[attr.name];

            if (!attr || !attrLocation || !shouldMigrateIconValue(attr.value)) {
                return;
            }

            recorder.remove(
                templateOffset + attrLocation.startOffset + attr.name.length,
                attrLocation.endOffset - (attrLocation.startOffset + attr.name.length),
            );
            recorder.insertRight(
                templateOffset + attrLocation.startOffset + attr.name.length,
                `="${replaceMediumWithSmall(attr.value)}"`,
            );
        });
    });
}

function shouldMigrate(element: Element): boolean {
    return (
        !findAttr(element.attrs, 'tuiTextfieldSize') ||
        hasElementAttributeWithValue(element, 'tuiTextfieldSize', 'l')
    );
}

function shouldMigrateIconValue(value: string): boolean {
    const normalized = unwrapQuotes(value);

    return normalized.startsWith('@tui') && normalized.includes('medium');
}

function replaceMediumWithSmall(value: string): string {
    return value.replace('medium', 'small');
}

function unwrapQuotes(value: string): string {
    return value.replaceAll(/^['"]|['"]$/g, '');
}
