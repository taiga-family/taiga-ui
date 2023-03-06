import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

/**
 * Chromium browser engine detection
 */
export const TUI_IS_CHROMIUM = new InjectionToken<boolean>(`[TUI_IS_CHROMIUM]`, {
    factory: () => !!(inject(WINDOW) as Window & {chrome: unknown}).chrome,
});
