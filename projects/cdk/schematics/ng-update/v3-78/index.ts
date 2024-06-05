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
import {replaceText} from '../utils/replace-text';
import {ICONS} from './constants/icons';

function hasProprietaryCore(tree: Tree): boolean {
    return !!getPackageJsonDependency(tree, '@taiga-ui/proprietary-core');
}

export function updateToV3_78(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        if (!hasProprietaryCore(tree)) {
            !options['skip-logs'] &&
                titleLog(`${FINISH_SYMBOL} No migrations required\n`);

            return;
        }

        const fileSystem = getFileSystem(tree);

        !options['skip-logs'] &&
            infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing deprecated logos...`);
        replaceText(ICONS);

        fileSystem.commitEdits();
        saveActiveProject();

        !options['skip-logs'] &&
            titleLog(`${FINISH_SYMBOL} Icons successfully migrated \n`);
    };
}
