import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from '@taiga-ui/morph';

import {findElementsByTagName} from '../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import type {ReplacementTag} from '../../interfaces/replacement-tag';
import type {TemplateResource} from '../../interfaces/template-resource';
import {replaceTag} from './replace-tag';

export function replaceTags({
    resource,
    recorder,
    fileSystem,
    data,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    data: readonly ReplacementTag[];
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    data.forEach(({from, to, addAttributes, filterFn}) => {
        const elements = findElementsByTagName(template, from, filterFn);

        elements.forEach(({sourceCodeLocation}) => {
            if (sourceCodeLocation) {
                replaceTag(
                    recorder,
                    sourceCodeLocation,
                    from,
                    to,
                    templateOffset,
                    addAttributes,
                );
            }
        });
    });
}
