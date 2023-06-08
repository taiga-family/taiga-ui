import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {getPackageJsonDependency, saveActiveProject} from 'ng-morph';

import {TuiSchema} from '../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../utils/colored-log';
import {getFileSystem} from '../utils/get-file-system';
import {ICONS_TS} from './constants/constants';
import {ICONS} from './constants/icons';
import {replaceImports} from './steps/replace-imports';
import {replaceText} from './steps/replace-text';

// eslint-disable-next-line @typescript-eslint/naming-convention
export function updateToV3_30(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        if (!hasProprietaryIcons(tree)) {
            !options[`skip-logs`] &&
                titleLog(`${FINISH_SYMBOL} No migrations required\n`);

            return;
        }

        const fileSystem = getFileSystem(tree);

        replaceImports(ICONS_TS, options);

        !options[`skip-logs`] &&
            infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing strings...`);
        replaceText(ICONS);

        fileSystem.commitEdits();
        saveActiveProject();

        !options[`skip-logs`] &&
            titleLog(`${FINISH_SYMBOL} Icons successfully migrated \n`);
    };
}

function hasProprietaryIcons(tree: Tree): boolean {
    return !!getPackageJsonDependency(tree, `@taiga-ui/proprietary-icons`);
}
