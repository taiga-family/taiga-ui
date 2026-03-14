import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

const PIPE_RENAME_REGEX = /(\|\s*)tuiFormatPhone\b/g;

export function migrateFormatPhonePipe({
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

    let match;

    while ((match = PIPE_RENAME_REGEX.exec(template)) !== null) {
        const pipeNameStart = match.index + (match[1]?.length ?? 0);
        const pipeNameLength = 'tuiFormatPhone'.length;

        recorder.remove(templateOffset + pipeNameStart, pipeNameLength);
        recorder.insertRight(templateOffset + pipeNameStart, 'maskito');
    }
}
