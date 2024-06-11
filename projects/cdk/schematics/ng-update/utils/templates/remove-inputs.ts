import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from '@taiga-ui/morph';

import {getInputPropertyOffsets} from '../../../utils/templates/ng-component-input-manipulations';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import type {RemovableInput} from '../../interfaces/removable-input';
import type {TemplateResource} from '../../interfaces/template-resource';

export function removeInputs({
    resource,
    recorder,
    fileSystem,
    data,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    data: readonly RemovableInput[];
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    data.forEach(({inputName, tags, filterFn}) => {
        const offsets = [
            ...getInputPropertyOffsets(template, inputName, tags, filterFn),
            ...getInputPropertyOffsets(template, `[${inputName}]`, tags, filterFn),
        ];

        offsets.forEach(([start, end]) => {
            recorder.remove(start + templateOffset, end - start);
        });
    });
}
