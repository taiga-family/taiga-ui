import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
import {Schema} from '../ng-add/schema';
import {replaceEnums} from './steps/replace-enums';
import {renameTypes} from './steps/rename-types';
import {replaceConsts} from './steps/replace-const';
import {replaceDeepImports} from './steps/replace-deep-import';
import {showWarnings} from './steps/show-warnings';
import {replaceServices} from './steps/replace-services';
import {migrateTemplates} from './steps/migrate-templates';
import {migrateSliders} from './steps/migrate-sliders';
import {removeModules} from './steps/remove-module';
import {miscellaneousMigrations} from './steps/miscellaneous';
import {replaceFunctions} from './steps/replace-functions';
import {migrateProgress} from './steps/migrate-progress';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {infoLog, successLog} from '../utils/colored-log';

export function updateToV3(_: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        console.info('\x1b[35m', `taiga packages will be updated to ${TAIGA_VERSION}`);

        const fileSystem = getFileSystem(tree);

        infoLog('replacing deep imports...');
        replaceDeepImports();
        successLog('deep imports replaced');

        infoLog('replacing enums imports...');
        replaceEnums();
        successLog('enums replaced');

        infoLog('renaming types...');
        renameTypes();
        successLog('types renamed');

        infoLog('replacing consts...');
        replaceConsts();
        successLog('constants replaced');

        infoLog('replacing services...');
        replaceServices();
        successLog('services replaced');

        showWarnings(context);

        infoLog('migrating templates...');
        migrateTemplates(fileSystem);
        successLog('templates migrated');

        fileSystem.commitEdits();
        saveActiveProject();
        const updatedFileSystem = getFileSystem(tree);

        infoLog('migrating sliders...');
        migrateSliders(updatedFileSystem);
        successLog('sliders migrated');

        infoLog('removing modules...');
        removeModules();
        successLog('modules removed');

        infoLog('miscellaneous migrating...');
        replaceFunctions();
        miscellaneousMigrations();
        successLog('miscellaneous migrated');

        saveActiveProject();
    };
}

function getFileSystem(tree: Tree): DevkitFileSystem {
    const project = createProject(tree, '/', '**/**.{html,ts}');
    setActiveProject(project);
    return project.getFileSystem().fs;
}
