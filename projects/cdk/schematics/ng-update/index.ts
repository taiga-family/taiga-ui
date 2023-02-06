import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {
    createProject,
    DevkitFileSystem,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {ALL_FILES} from '../constants';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
import {FINISH_SYMBOL, START_SYMBOL, titleLog} from '../utils/colored-log';
import {getExecutionTime} from '../utils/get-execution-time';
import {dateTimeMigrations} from './steps/migrate-date-time';
import {migrateProgress} from './steps/migrate-progress';
import {migrateSliders} from './steps/migrate-sliders';
import {migrateTemplates} from './steps/migrate-templates';
import {miscellaneousMigrations} from './steps/miscellaneous';
import {removeModules} from './steps/remove-module';
import {renameTypes} from './steps/rename-types';
import {replaceConstants} from './steps/replace-const';
import {replaceDeepImports} from './steps/replace-deep-import';
import {replaceEnums} from './steps/replace-enums';
import {replaceFunctions} from './steps/replace-functions';
import {replaceServices} from './steps/replace-services';
import {showWarnings} from './steps/show-warnings';

interface Schema {
    /**
     * @example
     * ```console
     * schematics ./dist/cdk:updateToV3 --allow-private --skip-deep-imports --dry-run false
     * ```
     */
    'skip-deep-imports': boolean;
}

export function updateToV3(cliFlags: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const t0 = performance.now();

        titleLog(
            `\n\n${START_SYMBOL} Your packages will be updated to @taiga-ui/*@${TAIGA_VERSION}\n`,
        );

        const fileSystem = getFileSystem(tree);

        !cliFlags[`skip-deep-imports`] && replaceDeepImports();
        replaceEnums();
        renameTypes();
        replaceConstants();
        replaceServices();
        showWarnings(context);
        migrateTemplates(fileSystem);

        fileSystem.commitEdits();
        saveActiveProject();
        const updatedFileSystem = getFileSystem(tree);

        migrateSliders(updatedFileSystem);
        migrateProgress(updatedFileSystem);
        removeModules();
        dateTimeMigrations();
        replaceFunctions();
        miscellaneousMigrations();
        saveActiveProject();

        const executionTime = getExecutionTime(t0, performance.now());

        titleLog(
            `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION} in ${executionTime}. \n`,
        );
    };
}

function getFileSystem(tree: Tree): DevkitFileSystem {
    const project = createProject(tree, `/`, [ALL_FILES]);

    setActiveProject(project);

    return project.getFileSystem().fs;
}
