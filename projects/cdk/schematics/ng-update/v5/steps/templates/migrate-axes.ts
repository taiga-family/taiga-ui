import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

interface Input {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}

const REMOVE_ATTRIBUTES = ['axisX', 'axisY', '[axisX]', '[axisY]'].map((attr) =>
    attr.toLowerCase(),
);

const PLUS_ONE_ATTRIBUTES = ['[verticalLines]', '[horizontalLines]'].map((attr) =>
    attr.toLowerCase(),
);

export function migrateAxes({resource, recorder, fileSystem}: Input): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);
    const elements = findElementsByTagName(template, 'tui-axes');

    elements.forEach((element) => {
        element.attrs?.forEach((attr) => {
            const {startOffset, endOffset} = element.sourceCodeLocation?.attrs?.[
                attr.name
            ] || {
                startOffset: 0,
                endOffset: 0,
            };

            if (REMOVE_ATTRIBUTES.includes(attr.name)) {
                recorder.remove(templateOffset + startOffset, endOffset - startOffset);
            } else if (PLUS_ONE_ATTRIBUTES.includes(attr.name)) {
                let newValue: string;

                if (/^\d+$/.test(attr.value)) {
                    newValue = `${Number(attr.value) + 1}`;
                } else {
                    newValue = `(${attr.value}) + 1`;
                }

                recorder.remove(
                    templateOffset + startOffset + attr.name.length,
                    endOffset - (startOffset + attr.name.length),
                );
                recorder.insertRight(
                    templateOffset + startOffset + attr.name.length,
                    `="${newValue}"`,
                );
            }
        });
    });
}
