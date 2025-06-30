import {InjectionToken} from '@angular/core';

export const TUI_DOC_SUPPORT_LANGUAGE = new InjectionToken<Set<string>>(
    'TUI_DOC_SUPPORT_LANGUAGE',
    {
        factory: () => new Set(),
    },
);
