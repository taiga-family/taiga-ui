import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';

import {
    findElementsByTagNames,
    findElementsWithAttributeOnTag,
} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';

export function migrateNotification({
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

    const elements = [
        ...findElementsByTagNames(template, ['tui-notification']),
        ...findElementsWithAttributeOnTag(template, ['tuiNotification'], ['button', 'a']),
    ];

    elements.forEach(({attrs, sourceCodeLocation, tagName}) => {
        const sizeAttr = findAttr(attrs, 'size');

        if (!sizeAttr) {
            recorder.insertRight(
                templateOffset +
                    (sourceCodeLocation?.startTag?.startOffset ?? 0) +
                    `<${tagName}`.length,
                ' size="m"',
            );
        }
    });
}
