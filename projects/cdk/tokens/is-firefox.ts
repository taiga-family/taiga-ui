import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

/**
 * Firefox browser engine detection
 */
export const TUI_IS_FIREFOX = new InjectionToken<boolean>(`[TUI_IS_FIREFOX]`, {
    factory: () =>
        typeof (inject(WINDOW) as Window & {mozCancelFullScreen: unknown})
            ?.mozCancelFullScreen !== `undefined`,
});
