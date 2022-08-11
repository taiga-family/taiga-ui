import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {
    createProject,
    saveActiveProject,
    setActiveProject,
    DevkitFileSystem,
} from 'ng-morph';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
import {Schema} from '../ng-add/schema';
import {replaceEnums} from './steps/replace-enums';
import {renameTypes} from './steps/rename-types';
import {replaceConstants} from './steps/replace-const';
import {replaceDeepImports} from './steps/replace-deep-import';
import {showWarnings} from './steps/show-warnings';
import {replaceServices} from './steps/replace-services';
import {migrateTemplates} from './steps/migrate-templates';
import {migrateSliders} from './steps/migrate-sliders';
import {removeModules} from './steps/remove-module';
import {miscellaneousMigrations} from './steps/miscellaneous';
import {replaceFunctions} from './steps/replace-functions';
import {migrateProgress} from './steps/migrate-progress';
import {FINISH_SYMBOL, START_SYMBOL, titleLog} from '../utils/colored-log';
import {dateTimeMigrations} from './steps/migrate-date-time';

export function updateToV3(_: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const t0 = performance.now();

        titleLog(
            `\n\n${START_SYMBOL} Your packages will be updated to @taiga-ui/*@${TAIGA_VERSION}\n`,
        );

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

        const t1 = performance.now();
        const sum = t1 - t0;
        const result =
            sum > 1000 ? `${(sum / 1000).toFixed(2)} sec.` : `${sum.toFixed(2)} ms.`;

        titleLog(
            `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION} in ${result} \n`,
        );
    };
}

function getFileSystem(tree: Tree): DevkitFileSystem {
    const project = createProject(tree, '/', '**/**.{html,ts}');
    setActiveProject(project);
    return project.getFileSystem().fs;
}
