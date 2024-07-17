import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Attribute, ElementLocation} from 'parse5/dist/common/token';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';

export function migrateLabel({
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

    const labelElements = findElementsByTagName(template, 'label', ({attrs}) =>
        attrs.some(({name}) => name === 'tuilabel' || name === '[tuilabel]'),
    );

    labelElements.forEach(({attrs, sourceCodeLocation}) => {
        const labelAttr = findAttr(attrs, 'tuilabel');

        if (!labelAttr || !sourceCodeLocation) {
            return;
        }

        migrateValue({
            valueAttr: labelAttr,
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

    if (!attrValue || !insertTo) {
        return;
    }

    recorder.insertRight(
        insertTo + templateOffset,
        valueAttr.name === 'tuilabel' ? attrValue : `{{ ${attrValue} }}`,
    );

    const attrOffset = sourceCodeLocation?.attrs?.[valueAttr.name];

    if (attrOffset) {
        const {startOffset, endOffset} = attrOffset;

        recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        recorder.insertRight(templateOffset + startOffset, 'tuiLabel');
    }
}
