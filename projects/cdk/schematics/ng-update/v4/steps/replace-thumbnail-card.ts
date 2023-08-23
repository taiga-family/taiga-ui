import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {
    createProject,
    DevkitFileSystem,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {ALL_FILES, ALL_TS_FILES} from '../../../constants';
import {TuiSchema} from '../../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../../utils/colored-log';
import {projectRoot} from '../../../utils/project-root';
import {replaceTag} from '../../../utils/replace-tag';
import {findElementsByTagName} from '../../../utils/templates/elements';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
} from '../../../utils/templates/template-resource';
import {getFileSystem} from '../../utils/get-file-system';
import {replaceText} from '../../utils/replace-text';

export function replaceThumbnailCard(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        replaceCardTag(options, fileSystem);
        replaceReferenceTypes(options, fileSystem);
        !options[`skip-logs`] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
    };
}

function replaceCardTag(options: TuiSchema, fileSystem: DevkitFileSystem): void {
    !options[`skip-logs`] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing <tui-card /> to <tui-thumbnail-card />`,
        );

    const templateResources = getComponentTemplates(ALL_TS_FILES);

    for (const resource of templateResources) {
        const template = getTemplateFromTemplateResource(resource, fileSystem);
        const elements = findElementsByTagName(template, `tui-card`);
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        elements.forEach(({sourceCodeLocation}) => {
            if (sourceCodeLocation) {
                replaceTag(
                    recorder,
                    sourceCodeLocation,
                    `tui-card`,
                    `tui-thumbnail-card`,
                );
            }
        });
    }

    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, projectRoot(), ALL_FILES));
}

function replaceReferenceTypes(options: TuiSchema, fileSystem: DevkitFileSystem): void {
    !options[`skip-logs`] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing TuiCard(Module|Component) to TuiThumbnailCard(Module|Component)`,
        );

    replaceText([
        {
            from: `TuiCardModule`,
            to: `TuiThumbnailCardModule`,
        },
        {
            from: `TuiCardComponent`,
            to: `TuiThumbnailCardComponent`,
        },
    ]);

    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, projectRoot(), ALL_FILES));
}
