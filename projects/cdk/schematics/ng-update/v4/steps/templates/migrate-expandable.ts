import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {findElementsWithAttributeOnTag} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

export function migrateExpandable({
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

    const elements = findElementsWithAttributeOnTag(
        template,
        ['[expandable]'],
        ['tui-input-tag', 'tui-multi-select', 'tui-input-date'],
    );

    elements.forEach(({attrs, sourceCodeLocation}) => {
        const expandableAttr = attrs.find(attr => attr.name === '[expandable]');

        if (!expandableAttr) {
            return;
        }

        const expandableValue = expandableAttr?.value;
        const expandableStart =
            sourceCodeLocation?.attrs?.[expandableAttr.name].startOffset || 0;
        const expandableEnd =
            sourceCodeLocation?.attrs?.[expandableAttr.name].endOffset || 0;

        if (expandableValue === 'false') {
            const rowsAttr = attrs.find(attr => attr.name === '[rows]');

            const insertTo = (sourceCodeLocation?.startTag.endOffset || 0) - 1;

            recorder.insertRight(templateOffset + insertTo, rowsAttr ? '' : '[rows]="1"');
        }

        if (expandableValue !== 'false' && expandableValue !== 'true') {
            recorder.insertRight(
                templateOffset + (sourceCodeLocation?.startTag.startOffset || 0),
                '<!-- Taiga migration TODO: "expandable" property has been removed. Use "rows" property instead -->\n',
            );
        }

        recorder.remove(
            templateOffset + expandableStart,
            expandableEnd - expandableStart,
        );
    });
}
