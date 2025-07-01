import {inject} from '@angular/core';
import {TUI_ENGLISH_LANGUAGE} from '@taiga-ui/i18n/languages/english';
import type {TuiLanguage} from '@taiga-ui/i18n/types';
import type {Observable} from 'rxjs';
import {of} from 'rxjs';
import {InjectionToken} from '@angular/core';

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
export const TUI_LANGUAGE = new InjectionToken<Observable<TuiLanguage>>(
    ngDevMode ? 'TUI_LANGUAGE' : '',
    {
        factory: () => of(inject(TUI_DEFAULT_LANGUAGE)),
    },
);
