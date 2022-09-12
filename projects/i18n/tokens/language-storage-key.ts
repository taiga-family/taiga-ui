import {InjectionToken} from '@angular/core';

export const TUI_LANGUAGE_STORAGE_KEY = new InjectionToken<string>(
    `[TUI_LANGUAGE_STORAGE_KEY]: Default key for search value in storage`,
    {
        factory: () => `tuiLanguage`,
    },
);
