import {inject, InjectionToken} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_I18N_STORAGE_KEY} from '@taiga-ui/i18n';
import {TUI_LANGUAGE_MAP} from '@taiga-ui/i18n';
import {Language, TUI_ENGLISH_LANGUAGE} from '..';
import {TUI_DEFAULT_LANGUAGE} from './default-lanuage';

export const TUI_STORED_LANGUAGE = new InjectionToken<Language>(
    `Stored language for Taiga UI libraries i18n`,
    {
        factory: () => {
            const storage = inject(LOCAL_STORAGE);
            const defaultLanguage = inject(TUI_DEFAULT_LANGUAGE);
            const storageKey = inject(TUI_I18N_STORAGE_KEY);
            const storedLanguageCode = storage.getItem(storageKey);
            const storedLanguage =
                storedLanguageCode &&
                TUI_LANGUAGE_MAP.has(storedLanguageCode) &&
                TUI_LANGUAGE_MAP.get(storedLanguageCode);

            return storedLanguage
                ? storedLanguage
                : defaultLanguage || TUI_ENGLISH_LANGUAGE;
        },
    },
);
