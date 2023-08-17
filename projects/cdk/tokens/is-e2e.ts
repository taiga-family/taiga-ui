import {inject, InjectionToken} from '@angular/core';

import {TUI_IS_CYPRESS} from './is-cypress';
import {TUI_IS_PLAYWRIGHT} from './is-playwright';

/**
 * Detect if app is running under any of test frameworks
 */
export const TUI_IS_E2E = new InjectionToken<boolean>(`[TUI_IS_E2E]`, {
    factory: () => inject(TUI_IS_CYPRESS) || inject(TUI_IS_PLAYWRIGHT),
});
