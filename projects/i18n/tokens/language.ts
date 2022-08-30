import {inject, InjectionToken} from '@angular/core';
import {TuiLanguage} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE} from '@taiga-ui/i18n/languages/english';
import {Observable, of} from 'rxjs';

export const TUI_DEFAULT_LANGUAGE = new InjectionToken<TuiLanguage>(
    `Default Language for Taiga UI libraries i18n`,
    {
        factory: () => TUI_ENGLISH_LANGUAGE,
    },
);

export const TUI_LANGUAGE = new InjectionToken<Observable<TuiLanguage>>(
    `Language for Taiga UI libraries i18n`,
    {
        factory: () => of(inject(TUI_DEFAULT_LANGUAGE)),
    },
);
