import {InjectionToken, isDevMode} from '@angular/core';

export const TUI_ASSERT_ENABLED = new InjectionToken(
    'Flag to enable assertions across Taiga UI',
    {
        factory: () => isDevMode(),
    },
);
