import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {
    findElementsByFn,
    findElementsByTagName,
    hasElementAttribute,
} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';
import {removeAttrs} from '../utils/remove-attrs';

export function migrateActiveZoneParent({
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

    const elements = findElementsByTagName(template, 'ng-template');

    elements.forEach(({attrs, sourceCodeLocation, childNodes}) => {
        const zoneAttr = findAttr(attrs, 'let-activeZone');

        if (!sourceCodeLocation) {
            return;
        }

        if (zoneAttr) {
            removeAttrs([zoneAttr], sourceCodeLocation, recorder, templateOffset);
        }

        const children = findElementsByFn(childNodes, (el) =>
            hasElementAttribute(el, 'tuiActiveZoneParent'),
        );

        children.forEach(({attrs, sourceCodeLocation}) => {
            const parentAttr = findAttr(attrs, 'tuiActiveZoneParent');

            if (!parentAttr || !sourceCodeLocation) {
                return;
            }

            removeAttrs([parentAttr], sourceCodeLocation, recorder, templateOffset);
        });
    });
}
