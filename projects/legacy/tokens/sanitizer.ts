import type {Sanitizer} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 * A custom Sanitizer to sanitize source before inlining
 */
export const TUI_SANITIZER = tuiCreateToken<Sanitizer>();
