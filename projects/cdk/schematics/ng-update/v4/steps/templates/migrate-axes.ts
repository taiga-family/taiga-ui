import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';
import {removeAttrs} from '../utils/remove-attrs';

const AXES_TAG_NAME = 'tui-axes';
const AXES_NEW_ATTRIBUTE = 'new';

export function migrateAxes({
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

    const elements = findElementsByTagName(template, AXES_TAG_NAME);

    elements.forEach(({attrs, sourceCodeLocation}) => {
        const axesNewAttr = attrs.find((attr) => attr.name === AXES_NEW_ATTRIBUTE);

        if (!sourceCodeLocation) {
            return;
        }

        if (axesNewAttr) {
            removeAttrs([axesNewAttr], sourceCodeLocation, recorder, templateOffset);
        } else {
            recorder.insertLeft(
                sourceCodeLocation.startOffset + templateOffset,
                '<!-- TODO: (Taiga UI migration) labels positioning on x axes were updated. Add empty string to axisXLabels array. See https://taiga-ui.dev/charts/axes -->\n',
            );
        }
    });
}
