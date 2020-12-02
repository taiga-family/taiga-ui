import {InjectionToken} from '@angular/core';

export const TUI_DOC_DEFAULT_TABS = new InjectionToken<ReadonlyArray<string>>(
    'Array of default tab names',
    {
        factory: () => [],
    },
);
