import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {
    addPackageJsonDependency,
    getPackageJsonDependency,
    removePackageJsonDependency,
    saveActiveProject,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../constants';
import {TuiSchema} from '../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../utils/colored-log';
import {getFileSystem} from '../utils/get-file-system';
import {replaceText} from '../utils/replace-text';

const OLD_PACKAGE = `@taiga-ui/addon-editor`;
const NEW_PACKAGE = `@tinkoff/tui-editor`;
const NEW_PACKAGE_VERSION = `^1.0.1`;

// eslint-disable-next-line @typescript-eslint/naming-convention
export function updateToV3_36(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        if (!getPackageJsonDependency(tree, OLD_PACKAGE)) {
            !options[`skip-logs`] &&
                titleLog(`${FINISH_SYMBOL} No migrations required for ${OLD_PACKAGE}\n`);

            return;
        }

        const fileSystem = getFileSystem(tree);

        !options[`skip-logs`] &&
            infoLog(
                `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing imports for ${OLD_PACKAGE}...`,
            );

        replaceText([{from: OLD_PACKAGE, to: NEW_PACKAGE}], ALL_TS_FILES);
        removePackageJsonDependency(tree, OLD_PACKAGE);
        addPackageJsonDependency(tree, {name: NEW_PACKAGE, version: NEW_PACKAGE_VERSION});

        fileSystem.commitEdits();
        saveActiveProject();

        !options[`skip-logs`] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
    };
}
