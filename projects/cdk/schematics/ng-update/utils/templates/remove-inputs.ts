import {UpdateRecorder} from '@angular-devkit/schematics';
import {DevkitFileSystem} from 'ng-morph';

import {getInputPropertyOffsets} from '../../../utils/templates/ng-component-input-manipulations';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import {RemovableInput} from '../../interfaces/removable-input';
import {TemplateResource} from '../../interfaces/template-resource';

export function removeInputs({
    resource,
    recorder,
    fileSystem,
    replaceableItems,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    replaceableItems: RemovableInput[];
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    replaceableItems.forEach(({inputName, tags}) => {
        const offsets = [
            ...getInputPropertyOffsets(template, inputName, tags),
            ...getInputPropertyOffsets(template, `[${inputName}]`, tags),
        ];

        offsets.forEach(([start, end]) => {
            recorder.remove(start + templateOffset, end - start);
        });
    });
}
