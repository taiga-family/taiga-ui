import {type Tree} from '@angular-devkit/schematics';
import {
    infoLog,
    saveActiveProject,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {addComment} from '../../utils/add-comment';
import {getFileSystem} from '../../utils/get-file-system';
import {replaceText} from '../../utils/replace-text';

const FONT_VARIABLES_REPLACEMENTS = [
    {from: String.raw`--tui-font-text\)`, to: '--tui-font-family-text)'},
    {from: '--tui-font-heading-([1-6])', to: '--tui-font-heading-h$1'},
    {from: '--tui-font-text-xl', to: '--tui-font-legacy-body-xl'},
    {from: '--tui-font-text-l', to: '--tui-font-body-l'},
    {from: '--tui-font-text-m', to: '--tui-font-body-m'},
    {from: '--tui-font-text-s', to: '--tui-font-body-s'},
    {from: '--tui-font-text-xs', to: '--tui-font-body-xs'},
    {from: '--tui-font-text-ui-l', to: '--tui-font-ui-l'},
    {from: '--tui-font-text-ui-m', to: '--tui-font-ui-m'},
    {from: '--tui-font-text-ui-s', to: '--tui-font-ui-s'},
    {from: '--tui-font-text-ui-xs', to: '--tui-font-ui-xs'},
];

export const TUI_THICKNESS_COMMENT =
    'use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#thumb-size';

const DEPRECATED_VARS_WITH_COMMENT = [
    {
        sourceText: '--tui-thickness',
        comment: `TODO: (Taiga UI migration) ${TUI_THICKNESS_COMMENT}`,
    },
];

export function migrateCssVariables(tree: Tree, options: TuiSchema): void {
    if (!options['skip-logs']) {
        infoLog('Starting migration css variables...');
    }

    const fileSystem = getFileSystem(tree);

    replaceText(FONT_VARIABLES_REPLACEMENTS);
    addComment(DEPRECATED_VARS_WITH_COMMENT);

    fileSystem.commitEdits();
    saveActiveProject();

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} css variables migrated \n`);
}
