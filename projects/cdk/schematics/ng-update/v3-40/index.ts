import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {
    createProject,
    DevkitFileSystem,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {ALL_FILES, ALL_TS_FILES} from '../../constants';
import {TuiSchema} from '../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../utils/colored-log';
import {projectRoot} from '../../utils/project-root';
import {replaceTag} from '../../utils/replace-tag';
import {findElementsByTagName} from '../../utils/templates/elements';
import {getComponentTemplates} from '../../utils/templates/get-component-templates';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
} from '../../utils/templates/template-resource';
import {getFileSystem} from '../utils/get-file-system';
import {replaceText} from '../utils/replace-text';

// eslint-disable-next-line @typescript-eslint/naming-convention
export function updateToV3_40(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        replaceTextareaTag(options, fileSystem);
        replaceTextareaReferenceTypes(options, fileSystem);
        !options[`skip-logs`] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
    };
}

function replaceTextareaTag(options: TuiSchema, fileSystem: DevkitFileSystem): void {
    !options[`skip-logs`] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing <tui-text-area /> to <tui-textarea />`,
        );

    const templateResources = getComponentTemplates(ALL_TS_FILES);

    for (const resource of templateResources) {
        const template = getTemplateFromTemplateResource(resource, fileSystem);
        const elements = findElementsByTagName(template, `tui-text-area`);
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        elements.forEach(({sourceCodeLocation}) => {
            if (sourceCodeLocation) {
                replaceTag(recorder, sourceCodeLocation, `tui-text-area`, `tui-textarea`);
            }
        });
    }

    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, projectRoot(), ALL_FILES));
}

function replaceTextareaReferenceTypes(
    options: TuiSchema,
    fileSystem: DevkitFileSystem,
): void {
    !options[`skip-logs`] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing TuiTextArea(Module|Directive|Component) to TuiTextarea(Module|Directive|Component)`,
        );

    replaceText([
        {
            from: `TuiTextAreaModule`,
            to: `TuiTextareaModule`,
        },
        {
            from: `TuiTextAreaDirective`,
            to: `TuiTextareaDirective`,
        },
        {
            from: `TuiTextAreaComponent`,
            to: `TuiTextareaComponent`,
        },
    ]);

    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, projectRoot(), ALL_FILES));
}
