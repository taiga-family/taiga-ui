import {inject} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_IS_STACKBLITZ = new InjectionToken(
    ngDevMode ? 'TUI_IS_STACKBLITZ' : '',
    {
        factory: () => inject(WA_WINDOW).location.host.endsWith('stackblitz.io'),
    },
);
