import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {ElementLocation} from 'parse5/dist/common/token';
import type {Element} from 'parse5/dist/tree-adapters/default';

import {findElementsWithDirective} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';
import {removeAttrs} from '../utils/remove-attrs';

const overscrollAttrName = 'tuiOverscroll';

export function migrateOverscroll({
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

    const elements = findElementsWithDirective(template, overscrollAttrName).filter(
        ({sourceCodeLocation}) => !!sourceCodeLocation,
    );

    if (!elements.length) {
        return;
    }

    elements.forEach(({attrs, sourceCodeLocation}: Element) => {
        const attrToRemove = findAttr(attrs, overscrollAttrName);

        attrToRemove &&
            removeAttrs([attrToRemove], sourceCodeLocation!, recorder, templateOffset);
    });

    const element = elements[0]?.sourceCodeLocation as ElementLocation | undefined;

    if (element) {
        addTodo(recorder, element, templateOffset);
    }
}

function addTodo(
    recorder: UpdateRecorder,
    sourceCodeLocation: ElementLocation,
    templateOffset: number,
): void {
    recorder.insertRight(
        templateOffset + (sourceCodeLocation?.startTag?.startOffset ?? 0),
        '<!-- TODO: (Taiga UI migration) use "overscroll-behavior" ccs property instead of "tuiOverscroll" directive -->\n',
    );
}
