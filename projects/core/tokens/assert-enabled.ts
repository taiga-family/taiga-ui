import {isDevMode} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

/**
 * @deprecated:
 * Flag to enable assertions across Taiga UI
 *
 * The current token no longer matters as
 * it will not be provided in production
 */
export const TUI_ASSERT_ENABLED = tuiCreateTokenFromFactory(() => isDevMode());
