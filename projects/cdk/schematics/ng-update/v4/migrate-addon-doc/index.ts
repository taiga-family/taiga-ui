import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {chain} from '@angular-devkit/schematics';
import {
    FINISH_SYMBOL,
    getPackageJsonDependency,
    getSourceFiles,
    infoLog,
    REPLACE_SYMBOL,
    saveActiveProject,
    SMALL_TAB_SYMBOL,
    titleLog,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants/file-globs';
import type {TuiSchema} from '../../../ng-add/schema';
import {renameTypes, replaceIdentifiers} from '../../steps';
import {removeModules} from '../../steps/remove-module';
import {getFileSystem} from '../../utils/get-file-system';
import {DOC_SYMBOLS_TO_REPLACE} from './replace-symbols';

export function migrateAddonDoc(options: TuiSchema): Rule {
    return chain([
        (tree: Tree, _context: SchematicContext) => {
            const fileSystem = getFileSystem(tree);

            if (!getPackageJsonDependency(fileSystem.tree, '@taiga-ui/addon-doc')) {
                return;
            }

            !options['skip-logs'] &&
                infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing...`);

            removeModules(options, [
                {
                    name: 'tuiGenerateRoutes',
                    moduleSpecifier: '@taiga-ui/addon-doc',
                },
            ]);

            renameTypes(options, [
                {
                    from: 'TuiDocExample',
                    to: 'Record<string, TuiRawLoaderContent>',
                    moduleSpecifier: ['@taiga-ui/addon-doc'],
                    removeImport: true,
                    newImports: [
                        {
                            name: 'TuiRawLoaderContent',
                            moduleSpecifier: '@taiga-ui/addon-doc',
                        },
                    ],
                },
            ]);

            getSourceFiles(ALL_TS_FILES).forEach((file) =>
                file.replaceWithText(
                    file
                        .getFullText()
                        .replaceAll(
                            /RouterModule\.forChild\(tuiGenerateRoutes\(\w+\)\)/g,
                            'RouterModule',
                        ),
                ),
            );

            replaceIdentifiers(options, DOC_SYMBOLS_TO_REPLACE);

            fileSystem.commitEdits();
            saveActiveProject();

            !options['skip-logs'] &&
                titleLog(`${FINISH_SYMBOL} addon-doc successfully migrated \n`);
        },
    ]);
}
