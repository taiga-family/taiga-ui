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
    const fileSystem = new DevkitFileSystem(tree);
    const componentWithTemplatesPaths = getComponentTemplates('**/**').map(
        ({componentPath}) => componentPath,
    );
    const actions = [replaceTags, replaceAttrs, replaceAttrsByDirective];

    actions.forEach(action => {
        componentWithTemplatesPaths.forEach(componentPath => {
            // get updated version of template after the previous action
            const [resource] = getComponentTemplates(componentPath);
            const path = fileSystem.resolve(getPathFromTemplateResource(resource));
            const recorder = fileSystem.edit(path);
            action({resource, fileSystem, recorder});
        });

        save(fileSystem);
    });
}

/**
 * We should update virtual file tree
 * otherwise all following ng-morph commands will overwrite all previous template manipulations
 * */
function save(fileSystem: DevkitFileSystem): void {
    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, '/', '**/**'));
}

function replaceAttrsByDirective({
    resource,
    fileSystem,
}: {
    resource: TemplateResource;
    fileSystem: DevkitFileSystem;
}) {
    ATTR_TO_DIRECTIVE.forEach(
        ({componentSelector, directiveModule, directive, inputProperty}) => {
            replaceInputPropertyByDirective({
                componentSelector,
                directiveModule,
                directive,
                inputProperty,
                fileSystem,
                templateResource: resource,
            });
        },
    );
}

function replaceAttrs({
    resource,
    recorder,
    fileSystem,
}: {
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

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

function replaceTags({
    resource,
    recorder,
    fileSystem,
}: {
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
}) {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

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
