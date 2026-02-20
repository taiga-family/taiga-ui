import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

const SIGNAL_BASED_PIPES = ['tuiAmount', 'tuiDecimal', 'tuiFormatNumber'];

/**
 * Matches `| tuiPipeName` (with optional args) followed by `| async`.
 *
 * Breakdown:
 *   \|\s*(tuiAmount|tuiDecimal|tuiFormatNumber) — pipe name
 *   (?::[^|]*\S)? — optional arguments (ends on non-whitespace)
 *   \s*\|\s*async — trailing `| async` to remove
 *
 * The arguments group ends on `\S` so it cannot exchange trailing
 * whitespace with the `\s*` that follows.
 */
const PIPE_ASYNC_REGEX = new RegExp(
    String.raw`(\|\s*(?:${SIGNAL_BASED_PIPES.join('|')})(?::[^|]*\S)?)\s*\|\s*async`,
    'g',
);

export function migrateAsyncPipes({
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

    while ((match = PIPE_ASYNC_REGEX.exec(template)) !== null) {
        const fullMatchStart = match.index;
        const fullMatchLength = match[0].length;
        const pipeWithoutAsync = match[1];

        recorder.remove(templateOffset + fullMatchStart, fullMatchLength);
        recorder.insertRight(templateOffset + fullMatchStart, pipeWithoutAsync ?? '');
    }
}
