import {inject, InjectionToken} from '@angular/core';
import {TuiLanguage} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE} from '@taiga-ui/i18n/languages';
import {Observable, of} from 'rxjs';

// TODO: move to @taiga-ui/i18n/tokens in v3.0
export const TUI_DEFAULT_LANGUAGE: InjectionToken<TuiLanguage> = new InjectionToken(
    `Default Language for Taiga UI libraries i18n`,
    {
        factory: () => TUI_ENGLISH_LANGUAGE,
    },
);

// TODO: move to @taiga-ui/i18n/tokens in v3.0
export const TUI_LANGUAGE: InjectionToken<Observable<TuiLanguage>> = new InjectionToken(
    `Language for Taiga UI libraries i18n`,
    {
        factory: () => of(inject(TUI_DEFAULT_LANGUAGE)),
    },
);
