import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {findElementsInTemplateByFn} from '../../../../utils/templates/elements';
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

export function migrateFieldError(data: Input): void {
    migrateFieldErrorContentPipe(data);
    migrateFieldErrorPipe(data);
}

function migrateFieldErrorContentPipe({resource, recorder, fileSystem}: Input): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);
    const elements = findElementsInTemplateByFn(template, (el) =>
        el.attrs?.some((attr) => attr.value.includes('tuiFieldErrorContent')),
    );

    elements.forEach(({attrs, sourceCodeLocation}) => {
        const attr = attrs.find((attr) => attr.value.includes('tuiFieldErrorContent'));

        if (!attr || !sourceCodeLocation) {
            return;
        }

        const {startOffset, endOffset} = sourceCodeLocation?.attrs?.[attr.name] || {
            startOffset: 0,
            endOffset: 0,
        };

        recorder.remove(
            templateOffset + startOffset + attr.name.length,
            endOffset - (startOffset + attr.name.length),
        );
        recorder.insertRight(
            templateOffset + startOffset + attr.name.length,
            `="${attr.value.replace(/\|\s*tuiFieldErrorContent/, '| tuiError')}"`,
        );
    });
}

function migrateFieldErrorPipe({resource, recorder, fileSystem}: Input): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);
    const elements = findElementsInTemplateByFn(template, (el) =>
        el.attrs?.some(
            (attr) =>
                attr.value.includes('tuiFieldError') &&
                !attr.value.includes('tuiFieldErrorContent'),
        ),
    );

    elements.forEach(({tagName, attrs, sourceCodeLocation}) => {
        const attr = attrs.find(
            (attr) =>
                attr.value.includes('tuiFieldError') &&
                !attr.value.includes('tuiFieldErrorContent'),
        );

        if (!attr || !sourceCodeLocation) {
            return;
        }

        if (tagName !== 'tui-error') {
            recorder.insertLeft(
                templateOffset + sourceCodeLocation.startOffset,
                '<!-- TODO: Could not migrate `tuiFieldError` automatically. The directive must be used on a <tui-error> element. Likely, you want to use `tuiError` pipe. -->',
            );

            return;
        }

        const order = attr.value.split(/\s*\|\s*tuiFieldError/)[0] || '';
        const {startOffset, endOffset} = sourceCodeLocation?.attrs?.[attr.name] || {
            startOffset: 0,
            endOffset: 0,
        };

        recorder.remove(templateOffset + startOffset, endOffset - startOffset);

        if (order === '[]') {
            return;
        }

        recorder.insertRight(templateOffset + startOffset, `[order]="${order}"`);
    });
}
