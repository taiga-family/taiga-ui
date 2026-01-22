import {InjectionToken, signal} from '@angular/core';

/**
 * TODO: think about reorganization in @taiga-ui/i18n way
 */

/**
 * tui-doc-demo i18n texts
 * Works with a tuple
 */
export const TUI_DOC_DEMO_TEXTS = new InjectionToken<[string, string, string]>(
    ngDevMode ? 'TUI_DOC_DEMO_TEXTS' : '',
    {factory: () => ['Dark mode', 'Background', 'Value']},
);

/**
 * tui-doc-example i18n texts
 * Works with a tuple
 * [
 * @string default tab name,
 * @string link to a sample copied message text,
 * @string link to a sample copied message label
 * ]
 */
export const TUI_DOC_EXAMPLE_TEXTS = new InjectionToken<[string, string, string]>(
    ngDevMode ? 'TUI_DOC_EXAMPLE_TEXTS' : '',
    {factory: () => ['Preview', 'Link to a sample was successfully copied', 'Done']},
);

export const TUI_DOC_MENU_TEXT = new InjectionToken(
    ngDevMode ? 'TUI_DOC_MENU_TEXT' : '',
    {factory: () => 'Menu'},
);
export const TUI_DOC_SEARCH_TEXT = new InjectionToken(
    ngDevMode ? 'TUI_DOC_SEARCH_TEXT' : '',
    {factory: () => 'Search'},
);
export const TUI_DOC_SEE_ALSO_TEXT = new InjectionToken(
    ngDevMode ? 'TUI_DOC_SEE_ALSO_TEXT' : '',
    {factory: () => 'See also'},
);
export const TUI_DOC_TOC_TEXT = new InjectionToken(ngDevMode ? 'TUI_DOC_TOC_TEXT' : '', {
    factory: () => 'On this page',
});
export const TUI_DOC_SOURCE_CODE_TEXT = new InjectionToken(
    ngDevMode ? 'TUI_DOC_SOURCE_CODE_TEXT' : '',
    {factory: () => 'Source code'},
);
export const TUI_DOC_SEARCH_ENABLED = new InjectionToken(
    ngDevMode ? 'TUI_DOC_SEARCH_ENABLED' : '',
    {factory: () => signal(true)},
);
