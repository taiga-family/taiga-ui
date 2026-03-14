import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {TODO_MARK} from '../../../../utils/insert-todo';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

const PIPE_RENAME_REGEX = /(\|\s*)tuiFormatPhone\b/g;

const TODO_COMMENT = `<!-- ${TODO_MARK} \`tuiFormatPhone\` pipe was renamed to \`maskito\`. Replace its arguments with \`maskitoPhoneOptionsGenerator({countryIsoCode, metadata})\` from '@maskito/phone'. See: https://taiga-ui.dev/components/input-phone-international -->`;

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
        const afterPipeName = template.slice(pipeNameStart + 'tuiFormatPhone'.length);
        const hasArgs = /^\s*:/.test(afterPipeName);

        recorder.remove(templateOffset + pipeNameStart, 'tuiFormatPhone'.length);
        recorder.insertRight(templateOffset + pipeNameStart, 'maskito');

        if (hasArgs) {
            const lineStart = template.lastIndexOf('\n', match.index) + 1;

            recorder.insertLeft(templateOffset + lineStart, `${TODO_COMMENT}\n`);
        }
    }
}
