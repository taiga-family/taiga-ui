import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Attribute, Location} from 'parse5/dist/common/token';

import {findElementsWithAttributeOnTag} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';

const LEGACY_ATTRIBUTE_NAME = 'tuiFocusable';

export function migrateFocusable({
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

    const elements = findElementsWithAttributeOnTag(template, [
        `[${LEGACY_ATTRIBUTE_NAME}]`,
    ]);

    elements.forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const focusableAttr = findAttr(attrs, LEGACY_ATTRIBUTE_NAME);
        const attributeLocation = sourceCodeLocation.attrs?.[focusableAttr!.name];

        if (!focusableAttr || !attributeLocation) {
            return;
        }

        replaceAttribute({
            attr: focusableAttr,
            templateOffset,
            location: attributeLocation,
            recorder,
        });
    });
}

function replaceAttribute({
    attr,
    templateOffset,
    location,
    recorder,
}: {
    attr: Attribute;
    templateOffset: number;
    location: Location;
    recorder: UpdateRecorder;
}): void {
    const startOffset = templateOffset + location.startOffset;
    const length = location.endOffset - location.startOffset;

    recorder.remove(startOffset, length);

    const value = attr.value;

    if (isBooleanLiteral(value)) {
        recorder.insertRight(
            templateOffset + startOffset,
            `[tabIndex]="${value === 'true' ? '0' : '-1'}"`,
        );

        return;
    }

    if (isPropertyLike(value)) {
        recorder.insertRight(
            templateOffset + startOffset,
            `[tabIndex]="${attr.value} ? 0 : -1"`,
        );

        return;
    }

    recorder.insertRight(
        templateOffset + startOffset,
        `[tabIndex]="(${attr.value}) ? 0 : -1"`,
    );
}

function isPropertyLike(value: string): boolean {
    return !value.includes(' ');
}

function isBooleanLiteral(value: string): value is 'false' | 'true' {
    return value === 'false' || value === 'true';
}
