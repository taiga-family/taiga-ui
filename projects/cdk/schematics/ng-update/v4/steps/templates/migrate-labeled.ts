import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Location} from 'parse5/dist/common/token';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsByTagNames} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';
import {replaceAttrValues} from '../../../utils/templates';

export function migrateLabeled({
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
                valueReplacer: [
                    {from: 'l', to: 'm'},
                    {from: 'm', to: 's'},
                ],
                withTagNames: ['tui-checkbox-labeled', 'tui-radio-labeled'],
            },
        ],
    });

    const elements = findElementsByTagNames(template, [
        'tui-checkbox-labeled',
        'tui-radio-labeled',
    ]);

    elements.forEach(({sourceCodeLocation, tagName, attrs}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const [, ngForAttrLocation] =
            Object.entries(sourceCodeLocation.attrs || {}).find(([name]) =>
                name.includes('*ngfor'),
            ) || [];
        const [, contentAlignAttrLocation] =
            Object.entries(sourceCodeLocation.attrs || {}).find(([name]) =>
                name.includes('contentalign'),
            ) || [];
        const ngForAttr = findAttr(attrs, '*ngFor');

        addImportToClosestModule(
            resource.componentPath,
            tagName === 'tui-checkbox-labeled' ? 'TuiCheckbox' : 'TuiRadio',
            '@taiga-ui/kit',
        );

        recorder.insertRight(
            templateOffset + (sourceCodeLocation.startTag?.startOffset || 1) - 1,
            `<label${ngForAttr ? ` *ngFor="${ngForAttr.value}"` : ''} tuiLabel>`,
        );
        recorder.remove(
            templateOffset + (sourceCodeLocation.endTag?.startOffset ?? 0),
            (sourceCodeLocation.endTag?.endOffset ?? 0) -
                (sourceCodeLocation.endTag?.startOffset ?? 0),
        );
        recorder.insertRight(
            templateOffset + (sourceCodeLocation.endTag?.startOffset || 1),
            '</label>',
        );

        const attrsToRemove = [ngForAttrLocation, contentAlignAttrLocation].filter(
            (location): location is Location => Boolean(location),
        );

        attrsToRemove.forEach((location) => {
            recorder.remove(
                templateOffset + location.startOffset,
                location.endOffset - location.startOffset,
            );
        });
    });
}
