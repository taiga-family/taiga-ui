import {InjectionToken} from '@angular/core';

export const TUI_MATCHING_ITEMS = false;

export const TUI_ONLY_MATCHING_ITEMS = new InjectionToken<boolean>(
    ngDevMode ? 'TUI_ONLY_MATCHING_ITEMS' : '',
    {
        factory: () => TUI_MATCHING_ITEMS,
    },
);
