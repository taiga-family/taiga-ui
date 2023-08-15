import {InjectionToken} from '@angular/core';
// eslint-disable-next-line @taiga-ui/experience/no-deep-imports
import {ALWAYS_TRUE_HANDLER} from '@taiga-ui/cdk/constants';

export const TUI_THEME_NIGHT_STORAGE_DEFAULT_KEY = `tuiNight` as const;

export const TUI_THEME_NIGHT_STORAGE_KEY = new InjectionToken<string>(
    `[TUI_THEME_NIGHT_STORAGE_KEY]`,
    {factory: () => TUI_THEME_NIGHT_STORAGE_DEFAULT_KEY},
);

export const TUI_USE_DEFAULT_NIGHT_THEME = new InjectionToken<boolean>(
    `[TUI_USE_DEFAULT_NIGHT_THEME]`,
    {factory: ALWAYS_TRUE_HANDLER},
);
