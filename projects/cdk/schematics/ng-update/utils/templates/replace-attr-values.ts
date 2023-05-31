import {UpdateRecorder} from '@angular-devkit/schematics';
import {DevkitFileSystem} from 'ng-morph';

import {findElementsWithAttributeOnTag} from '../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import {TemplateResource} from '../../interfaces/template-resource';
import {ReplaceableAttributeValue} from '../../v3/interfaces/replaceable-attribute-value';

export function replaceAttrValues({
    resource,
    recorder,
    fileSystem,
    replaceableItems,
}: {
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
    replaceableItems: ReplaceableAttributeValue[];
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    replaceableItems.forEach(({attrNames, values, withTagNames}) => {
        const elements = [
            ...findElementsWithAttributeOnTag(template, attrNames, withTagNames),
        ];

        elements.forEach(element => {
            const {name, value} =
                element.attrs.find(attr =>
                    attrNames.map(name => name.toLowerCase()).includes(attr.name),
                ) || {};

            if (!name || !value) {
                return;
            }

            const attributeName = attrNames.find(
                attrName => attrName.toLowerCase() === name,
            );

            values.forEach(({from, to}) => {
                if (value === from) {
                    const {startOffset, endOffset} = element.sourceCodeLocation?.attrs?.[
                        name
                    ] || {startOffset: 0, endOffset: 0};

                    recorder.remove(
                        templateOffset + startOffset,
                        endOffset - startOffset,
                    );
                    recorder.insertRight(
                        templateOffset + startOffset,
                        `${attributeName}="${to}"`,
                    );
                }
            });
        });
    });
}
