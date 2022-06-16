import {getComponentTemplates} from '../../utils/templates/get-component-templates';
import {Tree, UpdateRecorder} from '@angular-devkit/schematics';
import {
    ATTR_TO_DIRECTIVE,
    ATTRS_TO_REPLACE,
    TAGS_TO_REPLACE,
} from '../constants/templates';
import {
    findAttributeOnElementWithAttrs,
    findAttributeOnElementWithTag,
    findElementsByTagName,
} from '../../utils/templates/elements';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {TemplateResource} from '../interfaces/template-resourse';
import {replaceInputPropertyByDirective} from '../../utils/templates/ng-component-input-manipulations';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../utils/templates/template-resource';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph';

const START_TAG_OFFSET = 1;
const END_TAG_OFFSET = 2;

export function migrateTemplates(tree: Tree) {
    const templateResources = getComponentTemplates('**/**');
    const fileSystem = new DevkitFileSystem(tree);

    templateResources.forEach((resource: TemplateResource) => {
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const template = getTemplateFromTemplateResource(resource, fileSystem);
        const recorder = fileSystem.edit(path);
        const offset = getTemplateOffset(resource);

        replaceTags(template, recorder, offset);
        replaceAttrs(template, recorder, offset);
        replaceAttrsByDirective(fileSystem, resource);

        /**
         * We should update virtual file tree
         * otherwise all following ng-morph commands will overwrite all previous template manipulations
         * */
        fileSystem.commitEdits();
        saveActiveProject();
        setActiveProject(createProject(fileSystem.tree, '/', '**/**'));
    });
}

function replaceAttrsByDirective(
    fileSystem: DevkitFileSystem,
    templateResource: TemplateResource,
) {
    ATTR_TO_DIRECTIVE.forEach(
        ({componentSelector, directiveModule, directive, inputProperty}) => {
            replaceInputPropertyByDirective({
                componentSelector,
                directiveModule,
                directive,
                inputProperty,
                fileSystem,
                templateResource,
            });
        },
    );
}

function replaceAttrs(
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
}

function replaceTags(template: string, recorder: UpdateRecorder, templateOffset = 0) {
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
