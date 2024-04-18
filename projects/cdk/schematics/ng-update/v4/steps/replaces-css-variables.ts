import type {DevkitFileSystem} from 'ng-morph';
import {saveActiveProject} from 'ng-morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {infoLog, REPLACE_SYMBOL, SMALL_TAB_SYMBOL} from '../../../utils/colored-log';
import {replaceText} from '../../utils/replace-text';
import {CSS_VARS_TO_REPLACE} from './constants/css-variables';

export function replacesCssVariables(fs: DevkitFileSystem, options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing css variables`);

    replaceText(CSS_VARS_TO_REPLACE);

    fs.commitEdits();
    saveActiveProject();
}
