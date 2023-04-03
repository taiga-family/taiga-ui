import {InjectionToken} from '@angular/core';

export const TUI_THEME_STORAGE_DEFAULT_KEY = `tuiTheme` as const;

export const TUI_THEME_STORAGE_KEY = new InjectionToken<string>(
    `[TUI_THEME_STORAGE_KEY]`,
    {factory: () => TUI_THEME_STORAGE_DEFAULT_KEY},
);

export const TUI_THEME_DEFAULT_NAME = `Taiga UI` as const;

export const TUI_THEME_NAME = new InjectionToken<string>(`[TUI_THEME_NAME]`, {
    factory: () => TUI_THEME_DEFAULT_NAME,
});
