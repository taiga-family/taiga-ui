import {inject, InjectionToken} from '@angular/core';
import {TuiLanguage} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE} from '@taiga-ui/i18n/languages/english';
import {Observable, of} from 'rxjs';

/**
 * Default Language for Taiga UI libraries i18n
 */
export const TUI_DEFAULT_LANGUAGE = new InjectionToken<TuiLanguage>(
    `[TUI_DEFAULT_LANGUAGE]`,
    {
        factory: () => TUI_ENGLISH_LANGUAGE,
    },
);

/**
 * Language for Taiga UI libraries i18n
 */
export const TUI_LANGUAGE = new InjectionToken<Observable<TuiLanguage>>(
    `[TUI_LANGUAGE]`,
    {
        factory: () => of(inject(TUI_DEFAULT_LANGUAGE)),
    },
);
