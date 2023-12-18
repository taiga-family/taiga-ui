import {tuiCreateToken} from '@taiga-ui/cdk';

export const TUI_THEME_STORAGE_DEFAULT_KEY = 'tuiTheme' as const;
export const TUI_THEME_DEFAULT_NAME = 'Taiga UI' as const;
export const TUI_THEME_STORAGE_KEY = tuiCreateToken<string>(
    TUI_THEME_STORAGE_DEFAULT_KEY,
);
export const TUI_THEME_NAME = tuiCreateToken<string>(TUI_THEME_DEFAULT_NAME);
