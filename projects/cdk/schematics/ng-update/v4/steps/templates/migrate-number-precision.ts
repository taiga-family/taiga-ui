import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Attribute} from 'parse5/dist/common/token';

import type {TemplateResource} from '../../../../ng-update/interfaces';
import {removeAttrs} from '../../../../ng-update/v4/steps/utils/remove-attrs';
import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {cleanObject} from '../utils/clean-object';

export function migrateNumberPrecision({
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

    const elements = findElementsByTagName(template, 'tui-input-number');

    elements.forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const decimalAttr = findAttr(attrs, 'decimal');
        const precisionAttr = findAttr(attrs, 'precision');

        if (decimalAttr || precisionAttr) {
            addImportToClosestModule(
                resource.componentPath,
                'TuiNumberFormat',
                '@taiga-ui/core',
            );

            const format = JSON.stringify(
                cleanObject({
                    decimalMode: decimalAttr?.value,
                    precision: precisionAttr?.value,
                }),
            );

            const formatPart = `[tuiNumberFormat]='${format}'`;

            const insertTo =
                (sourceCodeLocation?.startTag?.startOffset || 0) +
                '<tui-input-number '.length;

            recorder.insertRight(templateOffset + insertTo, formatPart);
        }

        const attrsToRemove = [decimalAttr, precisionAttr].filter(
            (attr): attr is Attribute => attr !== undefined,
        );

        removeAttrs(attrsToRemove, sourceCodeLocation, recorder, templateOffset);
    });
}
