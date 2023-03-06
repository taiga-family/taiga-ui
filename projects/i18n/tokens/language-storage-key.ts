import {InjectionToken} from '@angular/core';

/**
 * Default key for search value in storage
 */
export const TUI_LANGUAGE_STORAGE_KEY = new InjectionToken<string>(
    `[TUI_LANGUAGE_STORAGE_KEY]`,
    {
        factory: () => `tuiLanguage`,
    },
);
