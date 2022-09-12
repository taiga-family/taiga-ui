import {InjectionToken} from '@angular/core';

export const TUI_DOC_DEFAULT_TABS = new InjectionToken<readonly string[]>(
    `[TUI_DOC_DEFAULT_TABS]: Array of default tab names`,
    {
        factory: () => [],
    },
);
