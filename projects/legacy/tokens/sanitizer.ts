import type {Sanitizer} from '@angular/core';
import {InjectionToken} from '@angular/core';

/**
 * A custom Sanitizer to sanitize source before inlining
 * TODO: Move to legacy package before 4.0
 */
export const TUI_SANITIZER = new InjectionToken<Sanitizer>('[TUI_SANITIZER]');
