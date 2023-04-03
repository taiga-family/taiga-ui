import {InjectionToken} from '@angular/core';

export const TUI_THEME_NIGHT_STORAGE_DEFAULT_KEY = `tuiNight` as const;

export const TUI_THEME_NIGHT_STORAGE_KEY = new InjectionToken<string>(
    `[TUI_THEME_NIGHT_STORAGE_KEY]`,
    {factory: () => TUI_THEME_NIGHT_STORAGE_DEFAULT_KEY},
);
