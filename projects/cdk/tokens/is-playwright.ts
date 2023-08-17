import {InjectionToken} from '@angular/core';
import {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk';

/**
 * Detect if app is running under Playwright
 */
export const TUI_IS_PLAYWRIGHT = new InjectionToken<boolean>(`[TUI_IS_PLAYWRIGHT]`, {
    factory: ALWAYS_FALSE_HANDLER,
});
