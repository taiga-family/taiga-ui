import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {
    addPackageJsonDependency,
    getPackageJsonDependency,
    saveActiveProject,
} from 'ng-morph';

import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import {TuiSchema} from '../../ng-add/schema';
import {FINISH_SYMBOL, titleLog} from '../../utils/colored-log';
import {getFileSystem} from '../utils/get-file-system';

export function updateToV3_55(options: TuiSchema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        if (!getPackageJsonDependency(tree, `@taiga-ui/proprietary-core`)) {
            !options[`skip-logs`] &&
                titleLog(`${FINISH_SYMBOL} No migrations required\n`);

            return;
        }

        const fileSystem = getFileSystem(tree);

        addPackageJsonDependency(tree, {
            name: `@taiga-ui/experimental`,
            version: TAIGA_VERSION,
        });

        context.addTask(new NodePackageInstallTask());

        fileSystem.commitEdits();
        saveActiveProject();

        !options[`skip-logs`] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
    };
}
