import {performance} from 'node:perf_hooks';

import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {chain} from '@angular-devkit/schematics';
import {getPackageJsonDependency, saveActiveProject} from '@taiga-ui/morph';

import {
    TAIGA_GLOBAL_NEW_STYLE,
    TAIGA_GLOBAL_OLD_STYLE,
    TAIGA_THEME_FONTS,
} from '../../constants/taiga-styles';
import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import type {TuiSchema} from '../../ng-add/schema';
import {
    addStylesToAngularJson,
    isInvalidAngularJson,
} from '../../utils/angular-json-manipulations';
import {FINISH_SYMBOL, START_SYMBOL, titleLog} from '../../utils/colored-log';
import {getExecutionTime} from '../../utils/get-execution-time';
import {removeModules} from '../steps/remove-module';
import {renameTypes} from '../steps/rename-types';
import {replaceDeepImports} from '../steps/replace-deep-import';
import {replaceEnums} from '../steps/replace-enums';
import {replaceIdentifiers} from '../steps/replace-identifier';
import {replaceServices} from '../steps/replace-services';
import {showWarnings} from '../steps/show-warnings';
import {getFileSystem} from '../utils/get-file-system';
import {CONSTANTS_TO_REPLACE} from './constants/constants';
import {ENUMS_TO_REPLACE} from './constants/enums';
import {REMOVED_MODULES} from './constants/modules';
import {SERVICES_TO_REPLACE} from './constants/services';
import {TYPES_TO_RENAME} from './constants/types';
import {MIGRATION_WARNINGS} from './constants/warnings';
import {dateTimeMigrations} from './steps/migrate-date-time';
import {migrateProgress} from './steps/migrate-progress';
import {migrateSliders} from './steps/migrate-sliders';
import {migrateTaigaProprietaryIcons} from './steps/migrate-taiga-proprietary-icons';
import {migrateTemplates} from './steps/migrate-templates';
import {miscellaneousMigrations} from './steps/miscellaneous';
import {replaceFunctions} from './steps/replace-functions';
import {replaceStyles, TUI_WARNING_NORMALIZE} from './steps/replace-styles';

// TODO: drop in v4.x
function main(options: TuiSchema): Rule {
    return (tree: Tree, context: SchematicContext): void => {
        const fileSystem = getFileSystem(tree);

        replaceDeepImports(options);
        replaceEnums(options, ENUMS_TO_REPLACE);
        renameTypes(options, TYPES_TO_RENAME);
        replaceIdentifiers(options, CONSTANTS_TO_REPLACE);
        replaceServices(options, SERVICES_TO_REPLACE);
        replaceStyles();
        showWarnings(context, MIGRATION_WARNINGS);
        migrateTemplates(fileSystem, options);

        fileSystem.commitEdits();
        saveActiveProject();
        const updatedFileSystem = getFileSystem(tree);

        migrateSliders(updatedFileSystem, options);
        migrateProgress(updatedFileSystem, options);
        removeModules(options, REMOVED_MODULES);
        dateTimeMigrations(options);
        replaceFunctions(options);
        miscellaneousMigrations(options);
        saveActiveProject();
    };
}

function addTaigaStyles(options: TuiSchema): Rule {
    return async (tree: Tree, context) => {
        const proprietary = getPackageJsonDependency(tree, '@taiga-ui/proprietary-core');

        const taigaStyles = proprietary ? [] : [TAIGA_THEME_FONTS];
        const stylesToReplace = {
            from: TAIGA_GLOBAL_OLD_STYLE,
            to: [TAIGA_GLOBAL_NEW_STYLE],
        };

        if (await isInvalidAngularJson(tree)) {
            context.logger.warn(
                "[WARNING]: Schematics don't support this version of angular.json.\n" +
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
                !!existingStyles?.some(
                    style => typeof style === 'string' && style.includes('tinkoff-theme'),
                ),
            stylesToReplace,
            tree,
        );
    };
}

function showNormalizeWarning(): Rule {
    return (tree: Tree, context: SchematicContext): void => {
        try {
            if (getPackageJsonDependency(tree, '@taiga-ui/styles')?.version) {
                context.logger.warn(TUI_WARNING_NORMALIZE);
            }
        } catch {
            // noop
        }
    };
}

export function updateToV3(options: TuiSchema): Rule {
    const t0 = performance.now();

    !options['skip-logs'] &&
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

            !options['skip-logs'] &&
                titleLog(
                    `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION} in ${executionTime}. \n`,
                );
        },
    ]);
}
