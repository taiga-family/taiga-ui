import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {findElementsInTemplateByFn} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

export function migrateFilterPipe({
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

    const elements = findElementsInTemplateByFn(template, (el) =>
        el.attrs?.some((attr) => attr.value.includes('tuiFilterByInputWith')),
    );

    elements.forEach(({attrs, sourceCodeLocation}) => {
        const attr = attrs.find((attr) => attr.value.includes('tuiFilterByInputWith'));

        if (!attr || !sourceCodeLocation) {
            return;
        }

        const {startOffset, endOffset} = sourceCodeLocation?.attrs?.[attr.name] || {
            startOffset: 0,
            endOffset: 0,
        };

        recorder.remove(
            templateOffset + startOffset + attr.name.length,
            endOffset - (startOffset + attr.name.length),
        );
        recorder.insertRight(
            templateOffset + startOffset + attr.name.length,
            `="${attr.value.replace(/\| tuiFilterByInputWith\s*:[^|]+/, '| tuiFilterByInput')}"`,
        );
    });
}
