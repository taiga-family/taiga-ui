import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

export const TUI_TOUCH_SUPPORTED = new InjectionToken(`[TUI_TOUCH_SUPPORTED]`, {
    factory: () => inject(WINDOW).matchMedia(`(any-pointer: coarse)`).matches,
});
