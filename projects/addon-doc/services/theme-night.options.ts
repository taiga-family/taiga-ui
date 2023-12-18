import {tuiCreateToken} from '@taiga-ui/cdk';

export const TUI_THEME_NIGHT_STORAGE_DEFAULT_KEY = 'tuiNight' as const;
export const TUI_THEME_NIGHT_STORAGE_KEY = tuiCreateToken<string>(
    TUI_THEME_NIGHT_STORAGE_DEFAULT_KEY,
);
export const TUI_USE_DEFAULT_NIGHT_THEME = tuiCreateToken(true);
