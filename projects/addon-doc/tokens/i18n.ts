import {InjectionToken, type Signal, signal} from '@angular/core';
import {tuiExtractI18n} from '@taiga-ui/i18n/utils';

export const TUI_DOC_DEMO_TEXTS = new InjectionToken<Signal<[string, string, string]>>(
    ngDevMode ? 'TUI_DOC_DEMO_TEXTS' : '',
    {factory: tuiExtractI18n('demoTexts')},
);

export const TUI_DOC_PREVIEW_TEXT = new InjectionToken<Signal<string>>(
    ngDevMode ? 'TUI_DOC_PREVIEW_TEXT' : '',
    {factory: tuiExtractI18n('preview')},
);

export const TUI_DOC_MENU_TEXT = new InjectionToken<Signal<string>>(
    ngDevMode ? 'TUI_DOC_MENU_TEXT' : '',
    {factory: tuiExtractI18n('menuText')},
);

export const TUI_DOC_SEARCH_TEXT = new InjectionToken<Signal<string>>(
    ngDevMode ? 'TUI_DOC_SEARCH_TEXT' : '',
    {factory: tuiExtractI18n('searchText')},
);

export const TUI_DOC_SEE_ALSO_TEXT = new InjectionToken<Signal<string>>(
    ngDevMode ? 'TUI_DOC_SEE_ALSO_TEXT' : '',
    {factory: tuiExtractI18n('seeAlsoText')},
);

export const TUI_DOC_TOC_TEXT = new InjectionToken<Signal<string>>(
    ngDevMode ? 'TUI_DOC_TOC_TEXT' : '',
    {factory: tuiExtractI18n('tocText')},
);

export const TUI_DOC_SOURCE_CODE_TEXT = new InjectionToken<Signal<string>>(
    ngDevMode ? 'TUI_DOC_SOURCE_CODE_TEXT' : '',
    {factory: tuiExtractI18n('sourceCodeText')},
);

export const TUI_DOC_SEARCH_ENABLED = new InjectionToken(
    ngDevMode ? 'TUI_DOC_SEARCH_ENABLED' : '',
    {factory: () => signal(true)},
);
