import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

/**
 * Webkit browser engine detection
 */
export const TUI_IS_WEBKIT = new InjectionToken<boolean>(`[TUI_IS_WEBKIT]`, {
    factory: () =>
        !!(inject(WINDOW) as unknown as {webkitConvertPointFromNodeToPage?: unknown})
            ?.webkitConvertPointFromNodeToPage,
});
