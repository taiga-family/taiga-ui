import {chain, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {
    createProject,
    getPackageJsonDependency,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
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
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {FINISH_SYMBOL, START_SYMBOL, titleLog} from '../utils/colored-log';
import {dateTimeMigrations} from './steps/migrate-date-time';
import {
    addStylesToAngularJson,
    isInvalidAngularJson,
} from '../utils/angular-json-manipulations';
import {
    TAIGA_GLOBAL_NEW_STYLE,
    TAIGA_GLOBAL_OLD_STYLE,
    TAIGA_THEME_FONTS,
} from '../constants/taiga-styles';
import {replaceStyles, TUI_WARNING_NORMALIZE} from './steps/replace-styles';
import {ALL_FILES} from '../constants';
import {getExecutionTime} from '../utils/get-execution-time';
import {migrateTaigaProprietaryIcons} from './steps/migrate-taiga-proprietary-icons';
import {Schema} from '../ng-add/schema';
import {migrateExpandTemplates} from './v3-5/steps/migrate-expand-templates';

export function updateToV3(options: Schema): Rule {
    const t0 = performance.now();

    titleLog(
        `\n\n${START_SYMBOL} Your packages will be updated to @taiga-ui/*@${TAIGA_VERSION}\n`,
    );

    return chain([
        main(options),
        addTaigaStyles(options),
        migrateTaigaProprietaryIcons(options),
        showNormalizeWarning(),
        () => {
            const executionTime = getExecutionTime(t0, performance.now());

            titleLog(
                `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION} in ${executionTime}. \n`,
            );
        },
    ]);
}

export function updateToV3_5(): Rule {
    return async (tree: Tree, _: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        migrateExpandTemplates(fileSystem);

        fileSystem.commitEdits();
        saveActiveProject();

        titleLog(
            `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION}\n`,
        );
    };
}

function main(options: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        !options['skip-deep-imports'] && replaceDeepImports();
        replaceEnums();
        renameTypes();
        replaceConstants();
        replaceServices();
        replaceStyles();
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

function addTaigaStyles(options: Schema): Rule {
    return async (tree: Tree, context) => {
        const taigaStyles = [TAIGA_THEME_FONTS];
        const stylesToReplace = {
            from: TAIGA_GLOBAL_OLD_STYLE,
            to: [TAIGA_GLOBAL_NEW_STYLE],
        };

        if (await isInvalidAngularJson(tree)) {
            context.logger.warn(
                `[WARNING]: Schematics don't support this version of angular.json.\n` +
                    `– Add styles ${taigaStyles.join(',')} to angular.json manually.\n` +
                    `– Manually replace "${TAIGA_GLOBAL_OLD_STYLE}" with "${TAIGA_GLOBAL_NEW_STYLE}" inside "styles" of angular.json (don't forget to install "@taiga-ui/styles")`,
            );
            return;
        }

        return addStylesToAngularJson(
            options,
            context,
            taigaStyles,
            existingStyles =>
                !!existingStyles?.some(s => String(s).includes('tinkoff-theme')),
            stylesToReplace,
            tree,
        );
    };
}

function getFileSystem(tree: Tree): DevkitFileSystem {
    const project = createProject(tree, '/', ALL_FILES);
    setActiveProject(project);
    return project.getFileSystem().fs;
}

function showNormalizeWarning(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        try {
            if (!!getPackageJsonDependency(tree, '@taiga-ui/styles')?.version) {
                context.logger.warn(TUI_WARNING_NORMALIZE);
            }
        } catch {
            // noop
        }
    };
}
