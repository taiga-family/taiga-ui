import {getComponentTemplates} from '../../utils/templates/get-component-templates';
import {Tree, UpdateRecorder} from '@angular-devkit/schematics';
import {ATTRS_TO_REPLACE, TAGS_TO_REPLACE} from '../constants/templates';
import {
    findAttributeOnElementWithAttrs,
    findAttributeOnElementWithTag,
    findElementsByTagName,
} from '../../utils/templates/elements';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {TemplateResource} from '../interfaces/template-resourse';

const START_TAG_OFFSET = 1;
const END_TAG_OFFSET = 2;

export function migrateTemplates(tree: Tree) {
    const templateResources = getComponentTemplates('**/**');
    const fileSystem = new DevkitFileSystem(tree);

    templateResources.forEach((resource: TemplateResource) => {
        if ('template' in resource) {
            const template = resource.template;
            const path = fileSystem.resolve(resource.componentPath);
            const recorder = fileSystem.edit(path);

            processTemplateUrl(template, recorder, resource.offset);
        } else {
            const path = fileSystem.resolve(resource.templatePath);
            const template = fileSystem.read(path);
            const recorder = fileSystem.edit(path);

            processTemplateUrl(template, recorder);
        }

        fileSystem.commitEdits();
    });
}

function processTemplateUrl(
    template: string,
    recorder: UpdateRecorder,
    templateOffset = 0,
): void {
    ATTRS_TO_REPLACE.forEach(({from, to}) => {
        const offsets = [
            ...findAttributeOnElementWithTag(
                template,
                from.attrName,
                from.withTagNames || [],
            ),
            ...findAttributeOnElementWithAttrs(
                template,
                from.attrName,
                from.withAttrsNames || [],
            ),
        ];

        offsets.forEach(offset => {
            recorder.remove(
                offset + templateOffset,
                from.attrName.length + (to.attrName.length ? 0 : 1),
            );
            recorder.insertRight(offset + templateOffset, to.attrName);
        });
    });

    TAGS_TO_REPLACE.forEach(({from, to, addAttributes}) => {
        const elements = findElementsByTagName(template, from);

        elements.forEach(({sourceCodeLocation}) => {
            if (sourceCodeLocation) {
                const startTagOffset = sourceCodeLocation.startTag.startOffset;
                const endTagOffset = sourceCodeLocation.endTag?.startOffset;

                if (endTagOffset) {
                    recorder.remove(
                        endTagOffset + templateOffset + END_TAG_OFFSET,
                        from.length,
                    );
                    recorder.insertRight(
                        endTagOffset + templateOffset + END_TAG_OFFSET,
                        to,
                    );
                }

                recorder.remove(
                    startTagOffset + templateOffset + START_TAG_OFFSET,
                    from.length,
                );
                recorder.insertRight(
                    startTagOffset + templateOffset + START_TAG_OFFSET,
                    `${to} ${addAttributes.join(' ')}`,
                );
            }
        });
    });
}
