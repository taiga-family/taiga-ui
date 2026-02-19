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
import {
    formatMigrationStats,
    type MigrationStepTiming,
} from '../../utils/format-migration-stats';
import {getExecutionTime} from '../../utils/get-execution-time';
import {runSteps} from '../../utils/run-steps';
import {removeModules, replaceIdentifiers, showWarnings} from '../steps';
import {getFileSystem} from '../utils/get-file-system';
import {replaceFunctions} from '../utils/replace-functions';
import {REPLACE_FUNCTIONS} from './steps/constants/functions';
import {IDENTIFIERS_TO_REPLACE} from './steps/constants/identifiers-to-replace';
import {MIGRATION_WARNINGS} from './steps/constants/migration-warnings';
import {MODULES_TO_REMOVE} from './steps/constants/modules-to-remove';
import {migrateCssVariables} from './steps/migrate-css-variables';
import {migratePackages} from './steps/migrate-packages';
import {migrateTemplates} from './steps/migrate-templates';
import {migrateTokens} from './steps/migrate-tokens/migrate-tokens';
import {updateTsConfig} from './steps/migrate-tokens/update-tsconfig';
import {tuiLetMigration} from './steps/migrate-tui-let';
import {migrateStyles} from './steps/styles';

function main(options: TuiSchema, timings: MigrationStepTiming[]): Rule {
    return (tree: Tree, context: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        runSteps(
            [
                {name: 'tuiLetMigration', step: () => tuiLetMigration(tree, options)},
                {name: 'migrateTokens', step: () => migrateTokens(tree, options)},
                {name: 'updateTsConfig', step: () => updateTsConfig(tree, options)},
                {
                    name: 'migrateCssVariables',
                    step: () => migrateCssVariables(tree, options),
                },
                {
                    name: 'replaceFunctions',
                    step: () => replaceFunctions(REPLACE_FUNCTIONS),
                },
                {
                    name: 'removeModules',
                    step: () => removeModules(options, MODULES_TO_REMOVE),
                },
                {
                    name: 'replaceIdentifiers',
                    step: () => replaceIdentifiers(options, IDENTIFIERS_TO_REPLACE),
                },
                {
                    name: 'updatePackages',
                    step: migratePackages,
                },
                {
                    name: 'migrateTemplates',
                    step: () => migrateTemplates(fileSystem, options),
                },
                {
                    name: 'showWarnings',
                    step: () => showWarnings(context, MIGRATION_WARNINGS),
                },
                {
                    name: 'migrateStyles',
                    step: migrateStyles,
                },
            ],
            timings,
        );

        fileSystem.commitEdits();
        saveActiveProject();

        context.addTask(new NodePackageInstallTask());
    };
}

export function updateToV5(options: TuiSchema): Rule {
    const t0 = performance.now();
    const timings: MigrationStepTiming[] = [];

    !options['skip-logs'] &&
        titleLog(
            `\n\n${START_SYMBOL} Your packages will be updated to @taiga-ui/*@${TAIGA_VERSION}\n`,
        );

    return chain([
        main(options, timings),
        () => {
            const finishedAt = performance.now();
            const executionTime = getExecutionTime(t0, finishedAt);

            if (options['skip-logs']) {
                return;
            }

            titleLog(
                `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION} in ${executionTime}. \n`,
            );
            titleLog(`${formatMigrationStats(timings, finishedAt - t0)}\n`);
        },
    ]);
}
