import {type Tree} from '@angular-devkit/schematics';
import {
    infoLog,
    saveActiveProject,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {addCommentForStylesFiles} from '../../utils/add-comment-for-styles';
import {getFileSystem} from '../../utils/get-file-system';
import {replaceText} from '../../utils/replace-text';

const FONT_VARIABLES_REPLACEMENTS = [
    {from: String.raw`--tui-font-family-text`, to: '--tui-typography-family-text'},
    {from: String.raw`--tui-font-family-display`, to: '--tui-typography-family-display'},
    {from: '--tui-font-heading-([1-6])', to: '--tui-typography-heading-h$1'},
    {from: '--tui-font-heading-h([1-6])', to: '--tui-typography-heading-h$1'},
    {from: String.raw`--tui-font-text\)`, to: '--tui-typography-family-text)'},
    {from: '--tui-font-text-xl', to: '--tui-typography-legacy-body-xl'},
    {from: '--tui-font-text-l', to: '--tui-typography-body-l'},
    {from: '--tui-font-text-m', to: '--tui-typography-body-m'},
    {from: '--tui-font-text-s', to: '--tui-typography-body-s'},
    {from: '--tui-font-text-xs', to: '--tui-typography-body-xs'},
    {from: '--tui-font-text-ui-l', to: '--tui-typography-ui-l'},
    {from: '--tui-font-text-ui-m', to: '--tui-typography-ui-m'},
    {from: '--tui-font-text-ui-s', to: '--tui-typography-ui-s'},
    {from: '--tui-font-text-ui-xs', to: '--tui-typography-ui-2xs'},
    {from: '--tui-font-ui-l', to: '--tui-typography-ui-l'},
    {from: '--tui-font-ui-m', to: '--tui-typography-ui-m'},
    {from: '--tui-font-ui-s', to: '--tui-typography-ui-s'},
    {from: '--tui-font-ui-xs', to: '--tui-typography-ui-xs'},
    {from: '--tui-font-ui-2xs', to: '--tui-typography-ui-2xs'},
];

export const TUI_THICKNESS_COMMENT =
    'use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size';

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
    addCommentForStylesFiles(DEPRECATED_VARS_WITH_COMMENT);

    fileSystem.commitEdits();
    saveActiveProject();

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} css variables migrated \n`);
}
