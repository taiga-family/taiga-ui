import type {Type} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

import {TuiHintComponent} from './hint.component';

/**
 * A component to display a hint
 */
export const TUI_HINT_COMPONENT = tuiCreateTokenFromFactory<Type<unknown>>(
    () => TuiHintComponent,
);
