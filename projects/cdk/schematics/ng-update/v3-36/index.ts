import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';

import type {TuiSchema} from '../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../utils/colored-log';
import {replacePackageName} from '../steps';

const OLD_PACKAGE = '@taiga-ui/addon-editor';
const NEW_PACKAGE = '@taiga-ui/editor';
const NEW_PACKAGE_VERSION = '^2.0.0';

// TODO: drop in v4.x
export function updateToV3_36(options: TuiSchema): Rule {
    return (tree: Tree, context: SchematicContext): void => {
        !options['skip-logs'] &&
            infoLog(
                `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing imports for ${OLD_PACKAGE}...`,
            );

        replacePackageName(
            OLD_PACKAGE,
            {
                name: NEW_PACKAGE,
                version: NEW_PACKAGE_VERSION,
            },
            tree,
        );
        context.addTask(new NodePackageInstallTask());

        !options['skip-logs'] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
    };
}
