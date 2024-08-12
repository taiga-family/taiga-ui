import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Element} from 'parse5/dist/tree-adapters/default';

import {addImportToClosestModule} from '../../../utils/add-import-to-closest-module';
import {findElementsWithAttributeOnTag} from '../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import type {ReplacementAttributeValue} from '../../interfaces/replacement-attribute-value';
import type {TemplateResource} from '../../interfaces/template-resource';

export function replaceAttrValues({
    resource,
    recorder,
    fileSystem,
    data,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    data: ReplacementAttributeValue[];
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    data.forEach(
        ({
            attrNames,
            valueReplacer,
            withTagNames,
            filterFn,
            newAttrName,
            directiveModule,
        }) => {
            const elements = [
                ...findElementsWithAttributeOnTag(
                    template,
                    attrNames,
                    withTagNames,
                    filterFn,
                ),
            ];

            elements.forEach((element) => {
                const {name, value} =
                    element.attrs.find((attr) =>
                        attrNames.map((name) => name.toLowerCase()).includes(attr.name),
                    ) || {};

                if (!name || !value) {
                    return;
                }

                const attributeName =
                    attrNames.find((attrName) => attrName.toLowerCase() === name) || '';

                if (Array.isArray(valueReplacer)) {
                    valueReplacer.forEach(({from, to}) => {
                        if (value === from) {
                            replaceValue({
                                element,
                                recorder,
                                templateOffset,
                                attrName: name,
                                attrNewName: newAttrName || attributeName,
                                attrValue: to,
                            });
                        }
                    });
                } else {
                    replaceValue({
                        element,
                        recorder,
                        templateOffset,
                        attrName: name,
                        attrNewName: newAttrName || attributeName,
                        attrValue: valueReplacer(value),
                    });
                }

                if (directiveModule) {
                    addImportToClosestModule(
                        resource.componentPath,
                        directiveModule.name,
                        directiveModule.moduleSpecifier,
                    );
                }
            });
        },
    );
}

function replaceValue({
    element,
    recorder,
    templateOffset,
    attrName,
    attrNewName,
    attrValue,
}: {
    element: Element;
    recorder: UpdateRecorder;
    templateOffset: number;
    attrName: string;
    attrNewName: string;
    attrValue: string;
}): void {
    const {startOffset, endOffset} = element.sourceCodeLocation?.attrs?.[attrName] || {
        startOffset: 0,
        endOffset: 0,
    };

    recorder.remove(templateOffset + startOffset, endOffset - startOffset);
    recorder.insertRight(templateOffset + startOffset, `${attrNewName}="${attrValue}"`);
}
