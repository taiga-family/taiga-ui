import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';

import type {TemplateResource} from '../../../../ng-update/interfaces';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';

export function migrateProgressSegmented({
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

    const elements = findElementsByTagName(template, 'tui-progress-segmented');

    elements.forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const maxAttr = findAttr(attrs, 'max');

        if (!maxAttr) {
            return;
        }

        const max = maxAttr.value;
        const insertTo = sourceCodeLocation?.attrs?.[maxAttr.name].endOffset || 0;

        recorder.insertRight(insertTo + templateOffset, `  [segments]="${max}"`);
    });
}
