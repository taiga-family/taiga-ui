import {performance} from 'node:perf_hooks';

import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {chain} from '@angular-devkit/schematics';
import {saveActiveProject} from 'ng-morph';

import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import type {TuiSchema} from '../../ng-add/schema';
import {FINISH_SYMBOL, START_SYMBOL, titleLog} from '../../utils/colored-log';
import {getExecutionTime} from '../../utils/get-execution-time';
import {removeModules, replaceIdentifiers, showWarnings} from '../steps';
import {getFileSystem} from '../utils/get-file-system';
import {
    migrateDestroyService,
    migrateLegacyMask,
    migrateTemplates,
    restoreTuiMapper,
    restoreTuiMatcher,
} from './steps';
import {
    IDENTIFIERS_TO_REPLACE,
    MIGRATION_WARNINGS,
    MODULES_TO_REMOVE,
} from './steps/constants';

function main(options: TuiSchema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        replaceIdentifiers(options, IDENTIFIERS_TO_REPLACE);
        removeModules(options, MODULES_TO_REMOVE);

        restoreTuiMapper(options);
        restoreTuiMatcher(options);
        migrateLegacyMask(options);
        migrateDestroyService(options);

        migrateTemplates(fileSystem, options);
        showWarnings(context, MIGRATION_WARNINGS);

        fileSystem.commitEdits();
        saveActiveProject();
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
