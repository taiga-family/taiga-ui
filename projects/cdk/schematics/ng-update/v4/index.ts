import {performance} from 'node:perf_hooks';

import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {chain} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {saveActiveProject} from 'ng-morph';

import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import type {TuiSchema} from '../../ng-add/schema';
import {FINISH_SYMBOL, START_SYMBOL, titleLog} from '../../utils/colored-log';
import {getExecutionTime} from '../../utils/get-execution-time';
import {
    removeModules,
    renameTypes,
    replaceEnums,
    replaceIdentifiers,
    showWarnings,
} from '../steps';
import {replaceServices} from '../steps/replace-services';
import {getFileSystem} from '../utils/get-file-system';
import {ENUMS_TO_REPLACE} from '../v4/steps/constants/enums';
import {
    migrateAlertService,
    migrateAllCountryIsoCodes,
    migrateDestroyService,
    migrateLegacyMask,
    migrateOptionProviders,
    migrateProprietary,
    migrateStyles,
    migrateTemplates,
    restoreTuiMapper,
    restoreTuiMatcher,
    updatePackages,
} from './steps';
import {
    IDENTIFIERS_TO_REPLACE,
    MIGRATION_WARNINGS,
    MODULES_TO_REMOVE,
    SERVICES_TO_REPLACE,
} from './steps/constants';
import {MODULES_TO_REPLACE_WITH_PROVIDERS} from './steps/constants/modules-to-replace';
import {TYPES_TO_RENAME} from './steps/constants/types';
import {migrateRoot} from './steps/migrate-root';
import {replaceModulesWithProviders} from './steps/utils/replace-modules-with-providers';

function main(options: TuiSchema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        replaceEnums(options, ENUMS_TO_REPLACE);
        migrateRoot(fileSystem, options);
        replaceServices(options, SERVICES_TO_REPLACE);
        replaceIdentifiers(options, IDENTIFIERS_TO_REPLACE);
        removeModules(options, MODULES_TO_REMOVE);
        replaceModulesWithProviders(options, MODULES_TO_REPLACE_WITH_PROVIDERS);
        renameTypes(options, TYPES_TO_RENAME);
        restoreTuiMapper(options);
        restoreTuiMatcher(options);
        migrateLegacyMask(options);
        migrateDestroyService(options);
        migrateOptionProviders(options);
        migrateAllCountryIsoCodes(options);
        migrateAlertService(options);

        saveActiveProject();
        migrateTemplates(fileSystem, options);
        showWarnings(context, MIGRATION_WARNINGS);

        fileSystem.commitEdits();
        saveActiveProject();

        migrateStyles();
        migrateProprietary(fileSystem, options);
        updatePackages(fileSystem, options);

        fileSystem.commitEdits();
        saveActiveProject();

        context.addTask(new NodePackageInstallTask());
    };
}

export function updateToV4(options: TuiSchema): Rule {
    const t0 = performance.now();

    !options['skip-logs'] &&
        titleLog(
            `\n\n${START_SYMBOL} Your packages will be updated to @taiga-ui/*@${TAIGA_VERSION}\n`,
        );

    return chain([
        main(options),
        () => {
            const executionTime = getExecutionTime(t0, performance.now());

            !options['skip-logs'] &&
                titleLog(
                    `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION} in ${executionTime}. \n`,
                );
        },
    ]);
}
