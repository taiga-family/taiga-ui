import type {Sanitizer} from '@angular/core';
import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0
 * A custom Sanitizer to sanitize source before inlining
 */
export const TUI_SANITIZER = new InjectionToken<Sanitizer>('[TUI_SANITIZER]');
