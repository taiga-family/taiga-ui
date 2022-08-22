import {isPlatformBrowser} from '@angular/common';
import {inject, InjectionToken, PLATFORM_ID} from '@angular/core';

export const TUI_RANGE = new InjectionToken<Range>(
    `[TUI_RANGE] SSR safe default empty Range`,
    {
        factory: () =>
            isPlatformBrowser(inject(PLATFORM_ID))
                ? new Range()
                : ({} as unknown as Range),
    },
);
