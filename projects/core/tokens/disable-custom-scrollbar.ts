import {InjectionToken} from '@angular/core';

export const TUI_DISABLE_CUSTOM_SCROLLBAR = new InjectionToken(
    'Disables the tui-root scrollbar and enables a native scrollbar',
    {
        factory: () => false,
    },
);
