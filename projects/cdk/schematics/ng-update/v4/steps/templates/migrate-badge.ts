import {UpdateRecorder} from '@angular-devkit/schematics';
import {DevkitFileSystem} from 'ng-morph';

import {findElementsWithAttributeOnTag} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {TemplateResource} from '../../../interfaces';

export function migrateBadgeValue({
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

    const elements = findElementsWithAttributeOnTag(
        template,
        ['[value]', 'value'],
        ['tui-badge'],
    );

    elements.forEach(({attrs, sourceCodeLocation}) => {
        const attr = attrs.find(attr => attr.name === '[value]' || attr.name === 'value');

        if (!attr) {
            return;
        }

        const attrValue = attr?.value;
        const insertTo = sourceCodeLocation?.endTag.startOffset;

        if (!attrValue || !insertTo) {
            return;
        }

        recorder.insertRight(
            insertTo + templateOffset,
            attr.name === 'value' ? attrValue : `{{ ${attrValue} }}`,
        );

        const attrOffset = sourceCodeLocation?.attrs?.[attr.name];

        if (attrOffset) {
            const {startOffset, endOffset} = attrOffset;

            recorder.remove(
                templateOffset + startOffset - 1,
                endOffset - startOffset + 1,
            );
        }
    });
}
