import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes, type Token} from 'parse5';

import {findElementsWithAttribute} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

type Attribute = Token.Attribute;

type Element = DefaultTreeAdapterTypes.Element;

type ElementLocation = Token.ElementLocation;

export function migrateOptionNewAttribute({
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

    // Find elements with both tuiOption and new attributes
    const elementsWithOptionAndNew = findElementsWithAttribute(template, 'new').filter(
        (element) =>
            element.attrs.some(
                (attr) =>
                    attr.name === 'tuiOption' ||
                    attr.name === '[tuiOption]' ||
                    attr.name === 'tuioption',
            ),
    );

    elementsWithOptionAndNew.forEach((element: Element) => {
        const loc = element.sourceCodeLocation;

        if (!loc?.startTag) {
            return;
        }

        const newAttr = element.attrs.find((a) => a.name === 'new');

        if (!newAttr) {
            return;
        }

        const attrLoc = loc.attrs?.['new'];

        if (!attrLoc) {
            return;
        }

        const {startOffset, endOffset} = attrLoc;

        // Remove the 'new' attribute (including leading space)
        recorder.remove(templateOffset + startOffset - 1, endOffset - startOffset + 1);
    });
}
