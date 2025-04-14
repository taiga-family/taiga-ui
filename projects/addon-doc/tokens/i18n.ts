import {signal} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * TODO: think about reorganization in @taiga-ui/i18n way
 */

export type TuiDocApiTopPanelTitles = [
    DarkMode: string,
    Background: string,
    FormValue: string,
    /**
     * TODO: drop optional in v5
     */
    FillScreen?: string,
];

/**
 * tui-doc-demo i18n texts
 * Works with a tuple
 */
export const TUI_DOC_DEMO_TEXTS = tuiCreateToken<TuiDocApiTopPanelTitles>([
    'Dark mode',
    'Background',
    'Form value',
    'Fullscreen',
]);

/**
 * tui-doc-documentation i18n texts
 * Works with a tuple
 * [
 * @string word 'argument',
 * @string word 'type',
 * @string 'name and description',
 * @string word 'value'
 * @string @deprecated message for tooltip about ng-polymorpheus
 * ]
 */
export const TUI_DOC_DOCUMENTATION_TEXTS = tuiCreateToken<
    [argument: string, type: string, name: string, value: string, tooltip: string]
>([
    'Argument',
    'Type',
    'Name and description',
    'Value',
    /**
     * @deprecated
     */
    'Learn about our dynamic templates from ',
]);

/**
 * tui-doc-example i18n texts
 * Works with a tuple
 * [
 * @string default tab name,
 * @string link to a sample copied message text,
 * @string link to a sample copied message label
 * ]
 */
export const TUI_DOC_EXAMPLE_TEXTS = tuiCreateToken<[string, string, string]>([
    'Preview',
    'Link to a sample was successfully copied',
    'Done',
]);

export const TUI_DOC_MENU_TEXT = tuiCreateToken('Menu');
export const TUI_DOC_SEARCH_TEXT = tuiCreateToken('Search');
export const TUI_DOC_SEE_ALSO_TEXT = tuiCreateToken('See also');
export const TUI_DOC_SOURCE_CODE_TEXT = tuiCreateToken('Source code');
export const TUI_DOC_SEARCH_ENABLED = tuiCreateToken(signal(true));
