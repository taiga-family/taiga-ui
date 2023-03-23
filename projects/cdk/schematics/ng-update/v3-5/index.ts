import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {saveActiveProject} from 'ng-morph';

import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import type {TuiSchema} from '../../ng-add/schema';
import {FINISH_SYMBOL, titleLog} from '../../utils/colored-log';
import {getFileSystem} from '../utils/get-file-system';
import {migrateExpandTemplates} from './steps/migrate-expand-templates';

// eslint-disable-next-line @typescript-eslint/naming-convention
export function updateToV3_5(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        migrateExpandTemplates(fileSystem, options);

        fileSystem.commitEdits();
        saveActiveProject();

        !options[`skip-logs`] &&
            titleLog(
                `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION}\n`,
            );
    };
}
