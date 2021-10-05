import {InjectionToken} from '@angular/core';

export const TUI_MOBILE_AWARE = new InjectionToken<boolean>(
    'A flag enabling mobile-specific behavior for supporting components',
    {
        factory: () => false,
    },
);
