import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {saveActiveProject} from 'ng-morph';

import {ALL_HTML_FILES, ALL_TS_FILES} from '../../constants';
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
export function updateToV3_40(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        !options[`skip-logs`] &&
            infoLog(
                `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing <tui-text-area /> to <tui-textarea />`,
            );

        replaceText(
            [
                {from: `<tui-text-area`, to: `<tui-textarea`},
                {from: `tui-text-area>`, to: `tui-textarea>`},
            ],
            ALL_HTML_FILES,
        );

        !options[`skip-logs`] &&
            infoLog(
                `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing TuiTextArea(Module|Directive|Component) to TuiTextarea(Module|Directive|Component)`,
            );

        replaceText(
            [
                {
                    from: `TuiTextAreaModule`,
                    to: `TuiTextareaModule`,
                },
                {
                    from: `TuiTextAreaDirective`,
                    to: `TuiTextareaDirective`,
                },
                {
                    from: `TuiTextAreaComponent`,
                    to: `TuiTextareaComponent`,
                },
            ],
            ALL_TS_FILES,
        );

        fileSystem.commitEdits();
        saveActiveProject();

        !options[`skip-logs`] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
    };
}
