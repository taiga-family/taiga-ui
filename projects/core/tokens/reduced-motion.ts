import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';

export const TUI_REDUCED_MOTION = new InjectionToken(
    ngDevMode ? 'TUI_REDUCED_MOTION' : '',
    {
        factory: () =>
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            inject(DOCUMENT).defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)')
                .matches ?? false,
    },
);
