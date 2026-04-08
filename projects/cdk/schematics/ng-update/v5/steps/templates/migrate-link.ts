import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {
    findElementsWithAttributeOnTag,
    hasElementAttribute,
} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

const PSEUDO_ATTRS = ['[pseudo]', 'pseudo'];

export function migrateLink({
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

    findElementsWithAttributeOnTag(template, PSEUDO_ATTRS, ['a', 'button'], (el) =>
        hasElementAttribute(el, 'tuiLink'),
    ).forEach((element) => {
        const pseudoAttr = element.attrs.find((attr) => PSEUDO_ATTRS.includes(attr.name));

        if (!pseudoAttr) {
            return;
        }

        const pseudoLoc = element.sourceCodeLocation?.attrs?.[pseudoAttr.name];

        if (!pseudoLoc) {
            return;
        }

        const appearanceAttr = element.attrs.find(
            (attr) => attr.name === 'appearance' || attr.name === '[appearance]',
        );

        const isFalsy =
            pseudoAttr.name === '[pseudo]' &&
            (pseudoAttr.value === 'false' || pseudoAttr.value === '');

        recorder.remove(
            templateOffset + pseudoLoc.startOffset,
            pseudoLoc.endOffset - pseudoLoc.startOffset,
        );

        if (isFalsy) {
            return;
        }

        if (appearanceAttr) {
            const isEmptyAppearance =
                appearanceAttr.name === 'appearance' && appearanceAttr.value === '';

            recorder.insertRight(
                templateOffset + pseudoLoc.startOffset,
                isEmptyAppearance
                    ? '[style.text-decoration-style]="\'dashed\'"'
                    : '[style.text-decoration-line]="\'underline\'"',
            );
        } else {
            recorder.insertRight(
                templateOffset + pseudoLoc.startOffset,
                'appearance="" [style.text-decoration-style]="\'dashed\'"',
            );
        }
    });
}
