import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

export const TUI_IS_STACKBLITZ = new InjectionToken<boolean>(`[TUI_IS_STACKBLITZ]`, {
    factory: () => inject(WINDOW).location.host.endsWith(`stackblitz.io`),
});
