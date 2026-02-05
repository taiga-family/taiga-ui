import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {
    findElementsByFn,
    findElementsByTagName,
    hasElementAttribute,
} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

export function migrateInputRange({
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
    const elements = findElementsByTagName(template, 'tui-input-range');

    elements.forEach((element) => {
        const labels = findElementsByFn(
            element.childNodes,
            (el) => el.tagName === 'label' && hasElementAttribute(el, 'tuiLabel'),
        );

        labels.forEach((label) => {
            const loc = label.sourceCodeLocation;

            if (!loc?.startTag || !loc?.endTag) {
                return;
            }

            const startTag = loc.startTag;
            const endTag = loc.endTag;
            const content = template.slice(startTag.endOffset, endTag.startOffset);

            recorder.remove(
                templateOffset + loc.startOffset,
                loc.endOffset - loc.startOffset,
            );
            recorder.insertRight(templateOffset + loc.startOffset, content);
        });
    });
}
