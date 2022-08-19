import {chain, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {
    createProject,
    DevkitFileSystem,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
import {Schema} from '../ng-add/schema';
import {replaceEnums} from './steps/replace-enums';
import {renameTypes} from './steps/rename-types';
import {replaceConstants} from './steps/replace-const';
import {replaceDeepImports} from './steps/replace-deep-import';
import {showWarnings} from './steps/show-warnings';
import {replaceServices} from './steps/replace-services';
import {dateTimeMigrations} from './steps/migrate-date-time';
import {migrateTemplates} from './steps/migrate-templates';
import {migrateSliders} from './steps/migrate-sliders';
import {removeModules} from './steps/remove-module';
import {miscellaneousMigrations} from './steps/miscellaneous';
import {replaceFunctions} from './steps/replace-functions';
import {migrateProgress} from './steps/migrate-progress';
import {FINISH_SYMBOL, START_SYMBOL, titleLog} from '../utils/colored-log';
import {ALL_FILES} from '../constants';
import {getExecutionTime} from '../utils/get-execution-time';
import {migrateTaigaProprietaryIcons} from './steps/migrate-taiga-proprietary-icons';

export function updateToV3(options: Schema): Rule {
    const t0 = performance.now();

    titleLog(
        `\n\n${START_SYMBOL} Your packages will be updated to @taiga-ui/*@${TAIGA_VERSION}\n`,
    );

    return chain([
        main(options),
        migrateTaigaProprietaryIcons(options),
        () => {
            const executionTime = getExecutionTime(t0, performance.now());

            titleLog(
                `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION} in ${executionTime}. \n`,
            );
        },
    ]);
}

function main(_: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        replaceDeepImports();
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
    };
}

function getFileSystem(tree: Tree): DevkitFileSystem {
    const project = createProject(tree, '/', [ALL_FILES]);
    setActiveProject(project);
    return project.getFileSystem().fs;
}
