import {chain, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {createProject, saveActiveProject} from 'ng-morph';
import {performance} from 'perf_hooks';

import {ALL_FILES} from '../../constants';
import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import {TuiSchema} from '../../ng-add/schema';
import {FINISH_SYMBOL, START_SYMBOL, titleLog} from '../../utils/colored-log';
import {getExecutionTime} from '../../utils/get-execution-time';
import {projectRoot} from '../../utils/project-root';
import {replaceThumbnailCard} from './steps/replace-thumbnail-card';
import {restoreTuiMapper} from './steps/restore-tui-mapper';
import {restoreTuiMatcher} from './steps/restore-tui-matcher';

export function updateToV4(options: TuiSchema): Rule {
    const t0 = performance.now();

    !options[`skip-logs`] &&
        titleLog(
            `\n\n${START_SYMBOL} Your packages will be updated to @taiga-ui/*@${TAIGA_VERSION}\n`,
        );

    return chain([
        main(options),
        () => {
            const executionTime = getExecutionTime(t0, performance.now());

            !options[`skip-logs`] &&
                titleLog(
                    `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION} in ${executionTime}. \n`,
                );
        },
    ]);
}

function main(options: TuiSchema): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        const project = createProject(tree, projectRoot(), ALL_FILES);

        const fileSystem = project.getFileSystem().fs;

        replaceThumbnailCard(options, fileSystem);

        restoreTuiMapper(options);
        restoreTuiMatcher(options);

        fileSystem.commitEdits();
        saveActiveProject();
    };
}
