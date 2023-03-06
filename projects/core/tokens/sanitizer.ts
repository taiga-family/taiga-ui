import {InjectionToken, Sanitizer} from '@angular/core';

/**
 * A custom Sanitizer to sanitize source before inlining
 */
export const TUI_SANITIZER = new InjectionToken<Sanitizer>(`[TUI_SANITIZER]`);
