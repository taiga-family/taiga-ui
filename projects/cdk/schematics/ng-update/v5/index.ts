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
import {replaceIdentifiers} from '../steps/replace-identifier';
import {getFileSystem} from '../utils/get-file-system';
import {replaceFunctions} from '../utils/replace-functions';
import {REPLACE_FUNCTIONS} from './steps/constants/functions';
import {IDENTIFIERS_TO_REPLACE} from './steps/constants/identifiers-to-replace';
import {migrateCssVariables} from './steps/migrate-css-variables';
import {migrateTemplates} from './steps/migrate-templates';
import {migrateTokens} from './steps/migrate-tokens/migrate-tokens';
import {updateTsConfig} from './steps/migrate-tokens/update-tsconfig';
import {tuiLetMigration} from './steps/migrate-tui-let';

function main(options: TuiSchema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        tuiLetMigration(tree, options);
        migrateTokens(tree, options);
        updateTsConfig(tree, options);
        migrateCssVariables(tree, options);
        replaceFunctions(REPLACE_FUNCTIONS);
        replaceIdentifiers(options, IDENTIFIERS_TO_REPLACE);
        migrateTemplates(fileSystem, options);

        fileSystem.commitEdits();
        saveActiveProject();

        context.addTask(new NodePackageInstallTask());
    };
}

export function updateToV5(options: TuiSchema): Rule {
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
