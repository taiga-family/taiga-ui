import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';

import {
    findAttributeOnElementWithAttrs,
    findAttributeOnElementWithTag,
} from '../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import type {ReplacementAttribute} from '../../interfaces/replacement-attribute';
import type {TemplateResource} from '../../interfaces/template-resource';

export function replaceAttrs({
    resource,
    recorder,
    fileSystem,
    data,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
    data: readonly ReplacementAttribute[];
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    data.forEach(({from, to}) => {
        const offsets = [
            ...findAttributeOnElementWithTag(
                template,
                from.attrName,
                from.withTagNames || [],
                from.filterFn,
            ),
            ...findAttributeOnElementWithAttrs(
                template,
                from.attrName,
                from.withAttrsNames || [],
                from.filterFn,
            ),
        ];

        offsets.forEach(offset => {
            recorder.remove(offset + templateOffset, from.attrName.length);
            recorder.insertRight(offset + templateOffset, to.attrName);
        });
    });
}
