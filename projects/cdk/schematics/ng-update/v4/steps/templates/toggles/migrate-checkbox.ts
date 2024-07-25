import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Attribute, ElementLocation} from 'parse5/dist/common/token';

import {findElementsByTagName} from '../../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../../interfaces';
import {closeStartTag, removeClosingTag, replaceOpenTag, replaceSizeAttr} from './common';

export function migrateCheckbox({
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

    const elements = findElementsByTagName(template, 'tui-checkbox');

    elements.forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        replaceSizeAttr(attrs, sourceCodeLocation, recorder, templateOffset);
        replaceOpenTag(sourceCodeLocation, recorder, templateOffset, {
            tag: 'tui-checkbox',
            directive: 'tuiCheckbox',
            type: 'checkbox',
        });
        closeStartTag(sourceCodeLocation, recorder, templateOffset);
        removeClosingTag(sourceCodeLocation, recorder, templateOffset);
    });

    findElementsByTagName(template, 'tui-primitive-checkbox').forEach(
        ({attrs, sourceCodeLocation}) => {
            if (!sourceCodeLocation) {
                return;
            }

            replaceSizeAttr(attrs, sourceCodeLocation, recorder, templateOffset);
            replaceValueAttr(attrs, sourceCodeLocation, recorder, templateOffset);
            replaceOpenTag(sourceCodeLocation, recorder, templateOffset, {
                tag: 'tui-primitive-checkbox',
                directive: 'tuiCheckbox',
                type: 'checkbox',
            });
            closeStartTag(sourceCodeLocation, recorder, templateOffset);
            removeClosingTag(sourceCodeLocation, recorder, templateOffset);
        },
    );
}

function replaceValueAttr(
    attrs: Attribute[],
    sourceCodeLocation: ElementLocation,
    recorder: UpdateRecorder,
    templateOffset: number,
): void {
    const valueAttr = attrs.find(
        (attr) => attr.name === 'value' || attr.name === '[value]',
    );

    if (valueAttr) {
        const {startOffset, endOffset} = sourceCodeLocation.attrs?.[valueAttr.name] || {
            startOffset: 0,
            endOffset: 0,
        };

        recorder.remove(templateOffset + startOffset, endOffset - startOffset);

        switch (valueAttr.value) {
            case 'false':
            case 'null':
                return;
            case 'true':
                recorder.insertRight(templateOffset + startOffset, 'checked ');

                return;
            default:
                recorder.insertRight(
                    templateOffset + startOffset,
                    `[checked]="${valueAttr.value}" `,
                );
        }
    }
}
