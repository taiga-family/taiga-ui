import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
/**
 * @deprecated: drop in v5.0
 */
export const TUI_TOUCH_SUPPORTED = new InjectionToken('TUI_TOUCH_SUPPORTED', {
    factory: () => inject(WA_WINDOW).matchMedia('(any-pointer: coarse)').matches,
});
