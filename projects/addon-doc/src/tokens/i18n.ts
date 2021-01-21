import {InjectionToken} from '@angular/core';

/**
 * TODO: think about reorganization in @taiga-ui/i18n way
 */

/**
 * Works with a tuple
 * [@string tuiMode tooltip content, @string word 'background', @string 'form value']
 */
export const TUI_DOC_DEMO_TEXTS = new InjectionToken<[string, string, string]>(
    'tui-doc-demo i18n texts',
    {factory: () => ['Read more more about modes: ', 'Background', 'Form value']},
);

/**
 * Works with a tuple
 * [
 * @string word 'argument',
 * @string word 'type',
 * @string 'name and description',
 * @string word 'value'
 * @string message for tooltip about ng-polymorpheus
 * ]
 */
export const TUI_DOC_DOCUMENTATION_TEXTS = new InjectionToken<
    [string, string, string, string, string]
>('tui-doc-documentation i18n texts', {
    factory: () => [
        'Argument',
        'Type',
        'Name and description',
        'Value',
        'Learn about our dynamic templates from ',
    ],
});

/**
 * Works with a tuple
 * [
 * @string default tab name,
 * @string link to a sample copied message text,
 * @string link to a sample copied message label
 * ]
 */
export const TUI_DOC_EXAMPLE_TEXTS = new InjectionToken<[string, string, string]>(
    'tui-doc-example i18n texts',
    {factory: () => ['Preview', 'Link to a sample was successfully copied', 'Done']},
);

export const TUI_DOC_MENU_TEXT = new InjectionToken<string>('menu i18n text', {
    factory: () => 'Menu',
});

export const TUI_DOC_SEARCH_TEXT = new InjectionToken<string>('search i18n text', {
    factory: () => 'Search',
});

export const TUI_DOC_SEE_ALSO_TEXT = new InjectionToken<string>(
    'tui-doc-see-also i18n text',
    {factory: () => 'See also'},
);

export const TUI_DOC_SOURCE_CODE_TEXT = new InjectionToken<string>(
    'tui-doc-source-code i18n text',
    {factory: () => 'Source code'},
);
