import {InjectionToken} from '@angular/core';
import {Language} from '@taiga-ui/i18n/interfaces';
import {
    TUI_DUTCH_LANGUAGE,
    TUI_ENGLISH_LANGUAGE,
    TUI_FRENCH_LANGUAGE,
    TUI_GERMAN_LANGUAGE,
    TUI_ITALIAN_LANGUAGE,
    TUI_POLISH_LANGUAGE,
    TUI_PORTUGUESE_LANGUAGE,
    TUI_RUSSIAN_LANGUAGE,
    TUI_TURKISH_LANGUAGE,
    TUI_UKRAINIAN_LANGUAGE,
    TUI_VIETNAMESE_LANGUAGE,
} from '@taiga-ui/i18n/languages';
import {Observable, of} from 'rxjs';

export const TUI_LANGUAGE = new InjectionToken<Observable<Language>>(
    `Language for Taiga UI libraries i18n`,
    {
        factory: () => of(TUI_ENGLISH_LANGUAGE),
    },
);

export const TUI_LANGUAGE_MAP = new Map<string, Language>(
    Object.entries({
        [TUI_ENGLISH_LANGUAGE.code]: TUI_ENGLISH_LANGUAGE,
        [TUI_DUTCH_LANGUAGE.code]: TUI_DUTCH_LANGUAGE,
        [TUI_RUSSIAN_LANGUAGE.code]: TUI_RUSSIAN_LANGUAGE,
        [TUI_GERMAN_LANGUAGE.code]: TUI_GERMAN_LANGUAGE,
        [TUI_POLISH_LANGUAGE.code]: TUI_POLISH_LANGUAGE,
        [TUI_PORTUGUESE_LANGUAGE.code]: TUI_PORTUGUESE_LANGUAGE,
        [TUI_FRENCH_LANGUAGE.code]: TUI_FRENCH_LANGUAGE,
        [TUI_TURKISH_LANGUAGE.code]: TUI_TURKISH_LANGUAGE,
        [TUI_ITALIAN_LANGUAGE.code]: TUI_ITALIAN_LANGUAGE,
        [TUI_UKRAINIAN_LANGUAGE.code]: TUI_UKRAINIAN_LANGUAGE,
        [TUI_VIETNAMESE_LANGUAGE.code]: TUI_VIETNAMESE_LANGUAGE,
    }),
);
