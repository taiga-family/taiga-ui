import {InjectionToken} from '@angular/core';

/**
 * Pull threshold in pixels until loading starts
 */

export const TUI_PULL_TO_REFRESH_THRESHOLD = new InjectionToken<number>(
    `[TUI_PULL_TO_REFRESH_THRESHOLD]`,
    {
        factory: () => 50,
    },
);
