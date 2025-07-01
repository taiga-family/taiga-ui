import {inject} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0
 * Firefox browser engine detection
 */
export const TUI_IS_FIREFOX = new InjectionToken(ngDevMode ? 'TUI_IS_FIREFOX' : '', {
    factory: () =>
        (inject(WA_WINDOW) as Window & {mozCancelFullScreen: unknown})
            ?.mozCancelFullScreen !== undefined,
});
