import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';

import {findElementsByTagNames} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';

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

    const elements = findElementsByTagNames(template, [
        'tui-checkbox-block',
        'tui-radio-block',
    ]);

    elements.forEach(({sourceCodeLocation, tagName, attrs}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const [, hideIconAttrLocation] =
            Object.entries(sourceCodeLocation.attrs || {}).find(
                ([name]) =>
                    name.includes('hideCheckbox'.toLowerCase()) ||
                    name.includes('hideRadio'.toLowerCase()),
            ) || [];

        const [, sizeAttrLocation] =
            Object.entries(sourceCodeLocation.attrs || {}).find(([name]) =>
                name.includes('size'),
            ) || [];
        const sizeAttr = attrs.find(({name}) => name.includes('size'));

        const newBlockAttr = `tuiBlock${sizeAttr ? `="${sizeAttr.value === 'xs' ? 's' : sizeAttr.value}"` : ''}`;

        recorder.insertRight(
            templateOffset + (sourceCodeLocation.startTag?.startOffset || 1) - 1,
            `<label ${newBlockAttr}${hideIconAttrLocation ? ' appearance=""' : ''}>`,
        );

        recorder.remove(
            templateOffset + (sourceCodeLocation.endTag?.startOffset ?? 0),
            `<${tagName}/>`.length,
        );
        recorder.insertRight(
            templateOffset + (sourceCodeLocation.endTag?.startOffset || 1),
            '</label>',
        );

        if (hideIconAttrLocation) {
            recorder.remove(
                templateOffset + hideIconAttrLocation.startOffset,
                hideIconAttrLocation.endOffset - hideIconAttrLocation.startOffset,
            );
        }

        if (sizeAttrLocation) {
            recorder.remove(
                templateOffset + sizeAttrLocation.startOffset,
                sizeAttrLocation.endOffset - sizeAttrLocation.startOffset,
            );
        }
    });
}
