import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

/**
 * @deprecated: drop in v5.0
 * Chromium browser engine detection
 */
export const TUI_IS_CHROMIUM = new InjectionToken(ngDevMode ? 'TUI_IS_CHROMIUM' : '', {
    factory: () => !!(inject(WA_WINDOW) as Window & {chrome: unknown}).chrome,
});
