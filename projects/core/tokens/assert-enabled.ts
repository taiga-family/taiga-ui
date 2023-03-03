import {InjectionToken, isDevMode} from '@angular/core';

/**
 * Flag to enable assertions across Taiga UI
 */
export const TUI_ASSERT_ENABLED = new InjectionToken(`[TUI_ASSERT_ENABLED]`, {
    factory: () => isDevMode(),
});
