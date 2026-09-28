import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {
    findElementsByTagName,
    findElementsWithAttribute,
    getStartOffsetOfAttribute,
} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';
import {replaceTag} from '../../../utils/templates/replace-tag';

type Element = DefaultTreeAdapterTypes.Element;

interface OpenAttr {
    name: string;
    value: string;
}

const PIN = 'tuiPin';

// In v5 the pin directive dropped the `tui-pin` element selector and the `open`
// input: the open state is now the value of the aliased `tuiPin` input, so
// `tuiPin [open]="x"` becomes `[tuiPin]="x"`.
export function migratePin({
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

    findElementsByTagName(template, 'tui-pin').forEach((element) => {
        replaceTag(
            recorder,
            element.sourceCodeLocation,
            'tui-pin',
            'div',
            template,
            templateOffset,
            [pinAttribute(getOpenAttr(element))],
        );

        removeOpenAttr(recorder, element, templateOffset);
    });

    findElementsWithAttribute(template, PIN).forEach((element) => {
        const open = getOpenAttr(element);

        if (!open) {
            return;
        }

        const pinStart = getStartOffsetOfAttribute(element, PIN) + templateOffset;

        recorder.remove(pinStart, PIN.length);
        recorder.insertRight(pinStart, pinAttribute(open));
        removeOpenAttr(recorder, element, templateOffset);
    });
}

function getOpenAttr(element: Element): OpenAttr | null {
    const attr = element.attrs?.find(({name}) => name === 'open' || name === '[open]');

    return attr ? {name: attr.name, value: attr.value} : null;
}

function pinAttribute(open: OpenAttr | null): string {
    if (!open?.value) {
        return PIN;
    }

    return open.name === '[open]' ? `[${PIN}]="${open.value}"` : `${PIN}="${open.value}"`;
}

function removeOpenAttr(
    recorder: UpdateRecorder,
    element: Element,
    templateOffset: number,
): void {
    const open = getOpenAttr(element);
    const location = open && element.sourceCodeLocation?.attrs?.[open.name];

    if (!location) {
        return;
    }

    const start = location.startOffset + templateOffset;

    // eat the single leading whitespace that always precedes an attribute
    recorder.remove(start - 1, location.endOffset - location.startOffset + 1);
}
