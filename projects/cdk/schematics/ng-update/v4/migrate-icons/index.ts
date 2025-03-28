import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {chain} from '@angular-devkit/schematics';
import {
    FINISH_SYMBOL,
    getPackageJsonDependency,
    infoLog,
    REPLACE_SYMBOL,
    saveActiveProject,
    SMALL_TAB_SYMBOL,
    titleLog,
} from 'ng-morph';

import {ALL_FILES} from '../../../constants/file-globs';
import type {TuiSchema} from '../../../ng-add/schema';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {findAttr} from '../../../utils/templates/inputs';
import {getPathFromTemplateResource} from '../../../utils/templates/template-resource';
import {getFileSystem} from '../../utils/get-file-system';
import {replaceTags} from '../../utils/templates/replace-tags';
import {getAction} from '../steps/migrate-templates';
import {renameIcons} from './rename-icons';
import {renameProprietaryIcons} from './rename-proprietary-icons';

export function migrateIcons(options: TuiSchema): Rule {
    return chain([
        (tree: Tree) => {
            const fileSystem = getFileSystem(tree);
            const resources = getComponentTemplates(ALL_FILES);

            for (const resource of resources) {
                const path = fileSystem.resolve(getPathFromTemplateResource(resource));
                const recorder = fileSystem.edit(path);
                const action = getAction({
                    action: replaceTags,
                    requiredData: [
                        {
                            from: 'tui-svg',
                            to: 'tui-svg',
                            addAttributes: ['[style.border-width.rem]="0.25"'],
                            filterFn: (element) =>
                                !!/tuiIcon.+Large/.exec(
                                    findAttr(element.attrs, 'src')?.value ?? '',
                                ),
                        },
                    ],
                });

                action({resource, fileSystem, recorder});
            }

            fileSystem.commitEdits();
        },
        (tree: Tree, context: SchematicContext) => {
            const fileSystem = getFileSystem(tree);

            !options['skip-logs'] &&
                infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing icons...`);

            if (hasProprietaryIcons(tree)) {
                renameProprietaryIcons(context);
            } else {
                renameIcons();
            }

            fileSystem.commitEdits();
            saveActiveProject();

            !options['skip-logs'] &&
                titleLog(`${FINISH_SYMBOL} Icons successfully migrated \n`);
        },
    ]);
}

function hasProprietaryIcons(tree: Tree): boolean {
    return (
        !!getPackageJsonDependency(tree, '@taiga-ui/proprietary-icons') ||
        !!getPackageJsonDependency(tree, '@taiga-ui/proprietary')
    );
}
