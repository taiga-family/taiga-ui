import {InjectionToken} from '@angular/core';

export const TUI_TAB_MARGIN = new InjectionToken<number>(
    `[TUI_TAB_MARGIN]: Margin between tabs`,
    {
        factory: () => 24,
    },
);
