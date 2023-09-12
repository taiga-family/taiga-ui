import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

import {TUI_IS_CYPRESS} from './is-cypress';
import {TUI_IS_PLAYWRIGHT} from './is-playwright';

/**
 * Detect if app is running under any of test frameworks
 */
export const TUI_IS_E2E = tuiCreateTokenFromFactory(
    () => inject(TUI_IS_CYPRESS) || inject(TUI_IS_PLAYWRIGHT),
);
