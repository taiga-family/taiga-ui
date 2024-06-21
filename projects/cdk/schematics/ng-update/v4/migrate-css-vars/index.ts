import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {chain} from '@angular-devkit/schematics';
import {saveActiveProject} from 'ng-morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../../utils/colored-log';
import {getFileSystem} from '../../utils/get-file-system';
import {renameCssVars} from './rename-css-vars';

export function migrateCssVars(options: TuiSchema): Rule {
    return chain([
        (tree: Tree, _: SchematicContext) => {
            const fileSystem = getFileSystem(tree);

            !options['skip-logs'] &&
                infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing css vars...`);

            renameCssVars();

            fileSystem.commitEdits();
            saveActiveProject();

            !options['skip-logs'] &&
                titleLog(`${FINISH_SYMBOL} Css vars successfully migrated \n`);
        },
    ]);
}
