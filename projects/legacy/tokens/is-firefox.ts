import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
/**
 * @deprecated: drop in v5.0
 * Firefox browser engine detection
 */
export const TUI_IS_FIREFOX = new InjectionToken('TUI_IS_FIREFOX', {
    factory: () =>
        (inject(WA_WINDOW) as Window & {mozCancelFullScreen: unknown})
            ?.mozCancelFullScreen !== undefined,
});
