import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Attribute, ElementLocation} from 'parse5/dist/common/token';

import {findElementsByTagNames} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';

export function migrateThumbnailCard({
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

    const elements = findElementsByTagNames(template, ['tui-thumbnail-card', 'tui-card']);

    elements.forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const valueAttr = attrs.find(
            (attr) => attr.name === '[cardnumber]' || attr.name === 'cardnumber',
        );

        if (!valueAttr) {
            return;
        }

        migrateValue({
            valueAttr,
            sourceCodeLocation,
            recorder,
            templateOffset,
        });
    });
}

function migrateValue({
    valueAttr,
    sourceCodeLocation,
    recorder,
    templateOffset,
}: {
    valueAttr: Attribute;
    sourceCodeLocation: ElementLocation;
    recorder: UpdateRecorder;
    templateOffset: number;
}): void {
    const attrValue = valueAttr?.value;
    const insertTo = sourceCodeLocation?.startTag?.endOffset ?? 0;
    const selfClosing = !sourceCodeLocation?.endTag;

    if (!attrValue || !insertTo) {
        return;
    }

    recorder.insertRight(
        insertTo + templateOffset,
        valueAttr.name === 'cardnumber'
            ? attrValue
            : `{{ ${attrValue} }}${selfClosing ? '</tui-thumbnail-card>' : ''}`,
    );

    const attrOffset = sourceCodeLocation?.attrs?.[valueAttr.name];

    if (attrOffset) {
        const {startOffset, endOffset} = attrOffset;

        recorder.remove(templateOffset + startOffset - 1, endOffset - startOffset + 1);
    }

    if (selfClosing) {
        recorder.remove((sourceCodeLocation.startTag?.endOffset ?? 2) - 2, 1);
    }
}
