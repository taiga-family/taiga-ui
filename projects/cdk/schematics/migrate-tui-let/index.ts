import type {Rule, Tree} from '@angular-devkit/schematics';
import {getWorkspace} from '@schematics/angular/utility/workspace';
import {createProject, errorLog, saveActiveProject, setActiveProject} from 'ng-morph';

import {ALL_FILES} from '../constants';
import type {TuiSchema} from '../ng-add/schema';
import {getProjects} from '../utils/get-projects';
import {removeModule} from '../utils/remove-module';
import {findElementsWithAttribute} from '../utils/templates/elements';
import {getComponentTemplates} from '../utils/templates/get-component-templates';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../utils/templates/template-resource';

export default function tuiLetMigrationGenerator(options: TuiSchema): Rule {
    return async (tree: Tree): Promise<void> => {
        const workspace = await getWorkspace(tree);
        const [project] = getProjects(options, workspace);

        const root = project?.root ?? project?.sourceRoot;

        if (root === undefined) {
            !options['skip-logs'] &&
                errorLog('[ERROR]: Target project not found in current workspace');

            return;
        }

        const prj = createProject(tree, root, ALL_FILES);
        const fileSystem = prj.getFileSystem().fs;

        setActiveProject(prj);

        removeModule('TuiLet', '@taiga-ui/cdk');

        const resources = getComponentTemplates(ALL_FILES);

        for (const resource of resources) {
            const path = fileSystem.resolve(getPathFromTemplateResource(resource));
            const recorder = fileSystem.edit(path);
            const template = getTemplateFromTemplateResource(resource, fileSystem);
            const templateOffset = getTemplateOffset(resource);
            const attributeName = '*tuiLet';

            const elements = findElementsWithAttribute(template, attributeName);

            for (const {sourceCodeLocation, attrs, tagName, childNodes} of elements) {
                const {name, value} = attrs.find(
                    (attr) => attr.name === attributeName.toLowerCase(),
                )!;

                const indent =
                    sourceCodeLocation!.startOffset -
                    (template.lastIndexOf('\n', sourceCodeLocation!.startOffset) + 1);
                const indentStr = ' '.repeat(indent);

                const [expr, key] = value.split(' as ').map((c) => c.trim());

                if (new RegExp(`@let\\s+${key}\\s+=`).test(template)) {
                    !options['skip-logs'] &&
                        errorLog(`The @let with key ${key} is already defined`);

                    continue;
                }

                recorder.insertLeft(
                    templateOffset + sourceCodeLocation!.startOffset,
                    `@let ${key} = ${expr};\n${indentStr}`,
                );

                if (tagName === 'ng-container' && attrs.length === 1) {
                    if (childNodes.length) {
                        const firstNode = childNodes.at(0)!;
                        const lastNode = childNodes.at(0)!;

                        recorder.remove(
                            templateOffset + sourceCodeLocation!.startOffset,
                            firstNode.sourceCodeLocation!.startOffset -
                                sourceCodeLocation!.startOffset,
                        );
                        recorder.remove(
                            templateOffset + lastNode.sourceCodeLocation!.endOffset,
                            sourceCodeLocation!.endOffset -
                                lastNode.sourceCodeLocation!.endOffset,
                        );
                    } else {
                        recorder.remove(
                            templateOffset + sourceCodeLocation!.startOffset,
                            sourceCodeLocation!.endOffset -
                                sourceCodeLocation!.startOffset,
                        );
                    }
                } else {
                    const {startOffset, endOffset} = sourceCodeLocation!.attrs![name]!;

                    recorder.remove(
                        templateOffset + startOffset - 1,
                        endOffset - startOffset + 1,
                    );
                }
            }
        }

        fileSystem.commitEdits();
        saveActiveProject();
    };
}
