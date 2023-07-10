import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {saveActiveProject} from 'ng-morph';

import {ALL_FILES, ALL_TS_FILES} from '../../constants';
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

// eslint-disable-next-line @typescript-eslint/naming-convention
export function updateToV3_37(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        !options[`skip-logs`] &&
            infoLog(
                `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing TuiTextArea* to TuiTextarea*...`,
            );

        replaceText([{from: `tui-text-area`, to: `tui-textarea`}], ALL_FILES);

        replaceText(
            [
                {from: `TuiTextAreaComponent`, to: `TuiTextareaComponent`},
                {from: `TuiTextAreaDirective`, to: `TuiTextareaDirective`},
                {from: `TuiTextAreaModule`, to: `TuiTextareaModule`},
            ],
            ALL_TS_FILES,
        );

        fileSystem.commitEdits();
        saveActiveProject();

        !options[`skip-logs`] &&
            titleLog(`${FINISH_SYMBOL} TuiTextarea* successfully migrated \n`);
    };
}
