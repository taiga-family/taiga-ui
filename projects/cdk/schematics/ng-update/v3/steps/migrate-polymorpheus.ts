import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {type Element} from 'parse5';

import {
    findElementsByFn,
    findElementsWithAttribute,
    hasElementAttribute,
} from '../../../utils/templates/elements';
import {getInputPropertyOffsets} from '../../../utils/templates/ng-component-input-manipulations';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import {type TemplateResource} from '../../interfaces/template-resource';
import {replaceTag} from '../../utils/templates/replace-tag';

function insertPolymorpheus({
    element,
    contentVal,
    contextVal,
    recorder,
    templateOffset,
}: {
    contentVal: string;
    contextVal?: string;
    element: Element;
    recorder: UpdateRecorder;
    templateOffset: number;
}): void {
    const content = `
<ng-container *polymorpheusOutlet="${contentVal} as text${
        contextVal ? `; context: ${contextVal}` : ''
    }">
    {{ text }}
</ng-container>`;

    const insertTo = element.sourceCodeLocation?.startTag?.endOffset;

    if (insertTo) {
        recorder.insertRight(insertTo + templateOffset, content);
    }
}

function removeOldInputs(
    recorder: UpdateRecorder,
    template: string,
    templateOffset: number,
): void {
    const offsets = [
        ...getInputPropertyOffsets(template, '[content]', ['*'], el =>
            hasElementAttribute(el, 'polymorpheus-outlet'),
        ),
        ...getInputPropertyOffsets(template, '[context]', ['*'], el =>
            hasElementAttribute(el, 'polymorpheus-outlet'),
        ),
        ...getInputPropertyOffsets(template, 'polymorpheus-outlet', ['*'], el =>
            hasElementAttribute(el, 'polymorpheus-outlet'),
        ),
    ];

    offsets.forEach(([start, end]) => {
        recorder.remove(start + templateOffset, end - start);
    });
}

function insertPolymorpheusWithDefault({
    template,
    defaultTemplateEl,
    recorder,
    templateOffset,
    contentVal,
    contextVal,
}: {
    contentVal: string;
    contextVal?: string;
    defaultTemplateEl: Element;
    recorder: UpdateRecorder;
    template: string;
    templateOffset: number;
}): void {
    const templateVar = defaultTemplateEl.attrs.find(attr =>
        attr.name.startsWith('let-'),
    );

    let templateVarName = templateVar?.name;

    if (templateVarName?.startsWith('let-')) {
        templateVarName = template.match(new RegExp(templateVarName, 'i'))?.[0];
    }

    const varName = templateVarName?.replace('let-', '');
    const attr = `*polymorpheusOutlet="${contentVal} as ${varName}${
        contextVal ? `; context: ${contextVal}` : ''
    }"`;

    replaceTag(
        recorder,
        defaultTemplateEl.sourceCodeLocation,
        'ng-template',
        'ng-container',
        templateOffset,
        [attr],
    );

    if (defaultTemplateEl.sourceCodeLocation?.attrs && templateVar?.name) {
        recorder.remove(
            defaultTemplateEl.sourceCodeLocation.attrs[templateVar.name].startOffset +
                templateOffset,
            templateVar.name.length,
        );
    }
}

export function migratePolymorpheus({
    resource,
    fileSystem,
    recorder,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsWithAttribute(template, 'polymorpheus-outlet');

    elements.forEach(element => {
        const contentVal = element.attrs.find(attr => attr.name === '[content]')?.value;
        const contextVal = element.attrs.find(attr => attr.name === '[context]')?.value;

        const defaultTemplateEl = findElementsByFn(
            element.childNodes,
            el => el.tagName === 'ng-template',
        )[0];

        if (!contentVal) {
            return;
        }

        if (defaultTemplateEl) {
            insertPolymorpheusWithDefault({
                template,
                defaultTemplateEl,
                recorder,
                templateOffset,
                contentVal,
                contextVal,
            });
        } else {
            insertPolymorpheus({
                element,
                contentVal,
                contextVal,
                recorder,
                templateOffset,
            });
        }
    });

    removeOldInputs(recorder, template, templateOffset);
}
