import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {findElementsWithAttributeOnTag} from '../../../../utils/templates/elements';
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

const ATTRIBUTE_NAMES = [
    '[tuiDialogOptions]',
    '[tuiAlertOptions]',
    '[tuiNotificationOptions]',
].map((attr) => attr.toLowerCase());

export function migrateCloseable({resource, recorder, fileSystem}: Input): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const re = /(^|[,{]\s*)('?)closeable\2(\s*:)/g;

    findElementsWithAttributeOnTag(template, ATTRIBUTE_NAMES).forEach((element) => {
        element.attrs.forEach((attr) => {
            if (!ATTRIBUTE_NAMES.includes(attr.name)) {
                return;
            }

            const newValue = attr.value.replaceAll(re, '$1$2closable$2$3');

            if (newValue === attr.value) {
                return;
            }

            const {startOffset, endOffset} = element.sourceCodeLocation?.attrs?.[
                attr.name
            ] || {
                startOffset: 0,
                endOffset: 0,
            };

            recorder.remove(
                templateOffset + startOffset + attr.name.length,
                endOffset - (startOffset + attr.name.length),
            );
            recorder.insertRight(
                templateOffset + startOffset + attr.name.length,
                `="${newValue}"`,
            );
        });
    });
}
