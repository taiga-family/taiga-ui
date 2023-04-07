import {InjectionToken, isDevMode} from '@angular/core';

/**
 * @deprecated:
 * Flag to enable assertions across Taiga UI
 *
 * The current token no longer matters as
 * it will not be provided in production
 */
export const TUI_ASSERT_ENABLED = new InjectionToken(`[TUI_ASSERT_ENABLED]`, {
    factory: () => isDevMode(),
});
