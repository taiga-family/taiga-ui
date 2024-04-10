import {tuiCreateToken} from '@taiga-ui/cdk';

export const TUI_DARK_THEME_DEFAULT_KEY = 'tuiNight';
export const TUI_DARK_THEME_KEY = tuiCreateToken(TUI_DARK_THEME_DEFAULT_KEY);
export const TUI_DARK_THEME = tuiCreateToken(false);
