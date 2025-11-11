import {inject, InjectionToken, type Signal, signal} from '@angular/core';
import {TUI_ENGLISH_LANGUAGE} from '@taiga-ui/i18n/languages/english';
import {type TuiLanguage} from '@taiga-ui/i18n/types';

/**
 * Default Language for Taiga UI libraries i18n
 */
export const TUI_DEFAULT_LANGUAGE = new InjectionToken<TuiLanguage>(
    ngDevMode ? 'TUI_DEFAULT_LANGUAGE' : '',
    {
        factory: () => TUI_ENGLISH_LANGUAGE,
    },
);

/**
 * Language for Taiga UI libraries i18n
 */
export const TUI_LANGUAGE = new InjectionToken<Signal<TuiLanguage>>(
    ngDevMode ? 'TUI_LANGUAGE' : '',
    {
        factory: () => signal(inject(TUI_DEFAULT_LANGUAGE)),
    },
);
