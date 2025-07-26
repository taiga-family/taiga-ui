import {performance} from 'node:perf_hooks';

import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {chain} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {FINISH_SYMBOL, START_SYMBOL, titleLog} from 'ng-morph';

import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import type {TuiSchema} from '../../ng-add/schema';
import {getExecutionTime} from '../../utils/get-execution-time';
import {migrateTokens} from './steps/migrate-tokens/migrate-tokens';
import {updateTsConfig} from './steps/migrate-tokens/update-tsconfig';
import {migrateTuiOnboardingToResponsiveDialog} from './steps/onboarding-flow/migrate-onboarding-flow';

function main(options: TuiSchema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        migrateTokens(tree, options);
        updateTsConfig(tree, options);

        migrateTuiOnboardingToResponsiveDialog(tree);

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
