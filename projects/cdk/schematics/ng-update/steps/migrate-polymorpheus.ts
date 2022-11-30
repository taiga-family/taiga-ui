import {UpdateRecorder} from '@angular-devkit/schematics';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {Element} from 'parse5';

import {replaceTag} from '../../utils/replace-tag';
import {
    findElementsByFn,
    findElementsWithAttribute,
    hasElementAttribute,
} from '../../utils/templates/elements';
import {getInputPropertyOffsets} from '../../utils/templates/ng-component-input-manipulations';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../utils/templates/template-resource';
import {TemplateResource} from '../interfaces/template-resourse';

export function migratePolymorpheus({
    resource,
    fileSystem,
    recorder,
}: {
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsWithAttribute(template, `polymorpheus-outlet`);

    elements.forEach(element => {
        const contentVal = element.attrs.find(attr => attr.name === `[content]`)?.value;
        const contextVal = element.attrs.find(attr => attr.name === `[context]`)?.value;

        const defaultTemplateEl = findElementsByFn(
            element.childNodes,
            el => el.tagName === `ng-template`,
        )[0];

        if (!contentVal) {
            return;
        }

        if (defaultTemplateEl) {
            insertPolymorpheusWithDefault({
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

function insertPolymorpheus({
    element,
    contentVal,
    contextVal,
    recorder,
    templateOffset,
}: {
    element: Element;
    contentVal: string;
    contextVal?: string;
    recorder: UpdateRecorder;
    templateOffset: number;
}): void {
    const content = `
<ng-container *polymorpheusOutlet="${contentVal} as text${
        contextVal ? `; context: ${  contextVal}` : ``
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
        ...getInputPropertyOffsets(template, `[content]`, [`*`], el =>
            hasElementAttribute(el, `polymorpheus-outlet`),
        ),
        ...getInputPropertyOffsets(template, `[context]`, [`*`], el =>
            hasElementAttribute(el, `polymorpheus-outlet`),
        ),
        ...getInputPropertyOffsets(template, `polymorpheus-outlet`, [`*`], el =>
            hasElementAttribute(el, `polymorpheus-outlet`),
        ),
    ];

    offsets.forEach(([start, end]) => {
        recorder.remove(start + templateOffset, end - start);
    });
}

function insertPolymorpheusWithDefault({
    defaultTemplateEl,
    recorder,
    templateOffset,
    contentVal,
    contextVal,
}: {
    defaultTemplateEl: Element;
    recorder: UpdateRecorder;
    templateOffset: number;
    contentVal: string;
    contextVal?: string;
}): void {
    const templateVar = defaultTemplateEl.attrs.find(attr =>
        attr.name.startsWith(`let-`),
    );
    const varName = templateVar?.name.replace(`let-`, ``);
    const attr = `*polymorpheusOutlet="${contentVal} as ${varName}${
        contextVal ? `; context: ${  contextVal}` : ``
    }"`;

    replaceTag(
        recorder,
        defaultTemplateEl.sourceCodeLocation,
        `ng-template`,
        `ng-container`,
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
