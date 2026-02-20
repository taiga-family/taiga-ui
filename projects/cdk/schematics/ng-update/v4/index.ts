import {performance} from 'node:perf_hooks';

import {
    chain,
    type Rule,
    type SchematicContext,
    type Tree,
} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {FINISH_SYMBOL, saveActiveProject, START_SYMBOL, titleLog} from 'ng-morph';

import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import {type TuiSchema} from '../../ng-add/schema';
import {getExecutionTime} from '../../utils/get-execution-time';
import {
    removeDuplicates,
    removeModules,
    renameTypes,
    replaceEnums,
    replaceIdentifiers,
    showWarnings,
} from '../steps';
import {replaceServices} from '../steps/replace-services';
import {getFileSystem} from '../utils/get-file-system';
import {replaceFunctions} from '../utils/replace-functions';
import {
    migrateAlertService,
    migrateAllCountryIsoCodes,
    migrateDestroyService,
    migrateLegacyMask,
    migrateMonthContext,
    migrateNumberFormatSettings,
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
import {ENUMS_TO_REPLACE} from './steps/constants/enums';
import {REPLACE_FUNCTIONS} from './steps/constants/functions';
import {MODULES_TO_REPLACE_WITH_PROVIDERS} from './steps/constants/modules-to-replace';
import {TYPES_TO_RENAME} from './steps/constants/types';
import {dropUniversalMock} from './steps/drop-universal-mock';
import {migrateEditor} from './steps/migrate-editor';
import {migrateImportProvidersFrom} from './steps/migrate-providers-from';
import {migrateRoot} from './steps/migrate-root';
import {replaceModulesWithProviders} from './steps/utils/replace-modules-with-providers';

function main(options: TuiSchema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        migrateEditor(fileSystem, options);
        replaceFunctions(REPLACE_FUNCTIONS);
        migrateImportProvidersFrom(options);
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
        migrateNumberFormatSettings(options);
        migrateMonthContext(options);
        dropUniversalMock(options);

        saveActiveProject();
        migrateTemplates(fileSystem, options);
        showWarnings(context, MIGRATION_WARNINGS);

        fileSystem.commitEdits();
        saveActiveProject();

        removeDuplicates(options);
        migrateStyles();
        migrateProprietary(fileSystem, options);
        updatePackages(fileSystem);

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
