import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';

import {findElementsByTagNames} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';
import {replaceAttrValues} from '../../../utils/templates';

export function migrateBlocked({
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

    replaceAttrValues({
        resource,
        fileSystem,
        recorder,
        data: [
            {
                attrNames: ['size'],
                values: [{from: 'xs', to: 's'}],
                withTagNames: ['tui-checkbox-block', 'tui-radio-block'],
            },
        ],
    });

    const elements = findElementsByTagNames(template, [
        'tui-checkbox-block',
        'tui-radio-block',
    ]);

    elements.forEach(({sourceCodeLocation, tagName}) => {
        if (!sourceCodeLocation) {
            return;
        }

        recorder.insertRight(
            templateOffset + (sourceCodeLocation.startTag?.startOffset || 1) - 1,
            '<label tuiBlock>',
        );

        recorder.remove(
            templateOffset + (sourceCodeLocation.endTag?.startOffset ?? 0),
            `<${tagName}/>`.length,
        );
        recorder.insertRight(
            templateOffset + (sourceCodeLocation.endTag?.startOffset || 1),
            '</label>',
        );
    });
}
