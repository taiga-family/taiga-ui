import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsByTagNames} from '../../../../utils/templates/elements';
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
                values: [
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

    elements.forEach(({sourceCodeLocation, tagName}) => {
        if (!sourceCodeLocation) {
            return;
        }

        addImportToClosestModule(
            resource.componentPath,
            tagName === 'tui-checkbox-labeled'
                ? 'TuiCheckboxComponent'
                : 'TuiRadioComponent',
            '@taiga-ui/kit',
        );

        recorder.insertRight(
            templateOffset + sourceCodeLocation.startTag.startOffset - 1,
            '<label tuiLabel>',
        );
        recorder.insertRight(
            templateOffset + sourceCodeLocation.endTag.startOffset - 1,
            '\n</label>',
        );

        recorder.remove(
            templateOffset + sourceCodeLocation.endTag.startOffset,
            tagName === 'tui-checkbox-labeled'
                ? '<tui-checkbox-labeled/>'.length
                : '<tui-radio-labeled/>'.length,
        );
    });
}
