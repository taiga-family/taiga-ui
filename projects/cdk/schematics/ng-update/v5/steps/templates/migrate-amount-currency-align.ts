import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

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

export function migrateAmountCurrencyAlign({
    resource,
    recorder,
    fileSystem,
}: Input): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);
    const re = /(\|\s*tuiAmount\s*:\s*["'][^"']*["']\s*:\s*)['"](right|left)['"]/g;

    [...template.matchAll(re)].forEach((match) => {
        const start = templateOffset + match.index + match[1]!.length;
        const oldLen = match[0].length - match[1]!.length;
        const direction = match[2];

        recorder.remove(start, oldLen);
        recorder.insertLeft(start, `'${direction === 'right' ? 'end' : 'start'}'`);
    });
}
