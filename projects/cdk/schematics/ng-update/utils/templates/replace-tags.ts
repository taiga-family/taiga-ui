import {UpdateRecorder} from '@angular-devkit/schematics';
import {DevkitFileSystem} from 'ng-morph';

import {findElementsByTagName} from '../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import {ReplaceableTag} from '../../interfaces/replaceable-tag';
import {TemplateResource} from '../../interfaces/template-resource';
import {replaceTag} from './replace-tag';

export function replaceTags({
    resource,
    recorder,
    fileSystem,
    replaceableItems,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    replaceableItems: ReplaceableTag[];
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    replaceableItems.forEach(({from, to, addAttributes}) => {
        const elements = findElementsByTagName(template, from);

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
