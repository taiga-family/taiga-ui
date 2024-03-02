import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {findElementsByTagName} from '../../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../../interfaces';
import {closeStartTag, removeClosingTag, replaceOpenTag, replaceSizeAttr} from './common';

export function migrateToggle({
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

    const elements = findElementsByTagName(template, 'tui-toggle');

    elements.forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        replaceSizeAttr(attrs, sourceCodeLocation, recorder, templateOffset);
        replaceOpenTag(sourceCodeLocation, recorder, templateOffset, {
            tag: 'tui-toggle',
            directive: 'tuiToggle',
            type: 'checkbox',
        });
        closeStartTag(sourceCodeLocation, recorder, templateOffset);
        removeClosingTag(sourceCodeLocation, recorder, templateOffset);
    });
}
