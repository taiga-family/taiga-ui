import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {TODO_MARK} from '../../../../utils/insert-todo';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

const PIPE_RENAME_REGEX = /(\|\s*)tuiFormatPhone\b/g;
const TODO_COMMENT_WITH_ARGS = `<!-- ${TODO_MARK} \`tuiFormatPhone\` pipe was replaced by \`maskito\` pipe. Replace its arguments with \`maskitoPhoneOptionsGenerator({countryIsoCode, metadata})\` from '@maskito/phone' (note: countryIsoCode is ISO format e.g. 'US', not '+1'). See: https://taiga-ui.dev/components/input-phone-international#phone-format-helpers -->`;
const TODO_COMMENT_NO_ARGS = `<!-- ${TODO_MARK} \`tuiFormatPhone\` pipe was replaced by \`maskito\` pipe. Add \`maskitoPhoneOptionsGenerator({countryIsoCode, metadata})\` from '@maskito/phone' as argument. See: https://taiga-ui.dev/components/input-phone-international#phone-format-helpers -->`;

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

    // For inline templates, getText() includes the opening quote character,
    // so offset 0 points to the quote itself (in TS territory).
    // We shift by 1 to insert inside the template string.
    const isInlineTemplate = 'template' in resource;
    const todoInsertedAtLines = new Set<number>();
    let match;

    while ((match = PIPE_RENAME_REGEX.exec(template)) !== null) {
        const pipeNameStart = match.index + (match[1]?.length ?? 0);
        const afterPipeName = template.slice(pipeNameStart + 'tuiFormatPhone'.length);
        const hasArgs = /^\s*:/.test(afterPipeName);

        recorder.remove(templateOffset + pipeNameStart, 'tuiFormatPhone'.length);
        recorder.insertRight(templateOffset + pipeNameStart, 'maskito');

        const lineStart = template.lastIndexOf('\n', match.index) + 1;

        if (!todoInsertedAtLines.has(lineStart)) {
            todoInsertedAtLines.add(lineStart);

            const todoComment = hasArgs ? TODO_COMMENT_WITH_ARGS : TODO_COMMENT_NO_ARGS;

            if (isInlineTemplate && lineStart === 0) {
                // The template string includes the opening quote (offset 0 = quote char).
                // Insert after the quote (position 1), without a trailing newline —
                // single/double-quoted JS strings cannot contain literal newlines.
                recorder.insertLeft(templateOffset + 1, `${todoComment} `);
            } else {
                recorder.insertLeft(templateOffset + lineStart, `${todoComment}\n`);
            }
        }
    }
}
