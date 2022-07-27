import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

export const TUI_IS_CHROMIUM = new InjectionToken<boolean>(
    `Chromium browser engine detection`,
    {
        factory: () => !!(inject(WINDOW) as Window & {chrome: unknown}).chrome,
    },
);
