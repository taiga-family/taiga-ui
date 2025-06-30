import type {Type} from '@angular/core';
import {InjectionToken} from '@angular/core';

import {TuiHintComponent} from './hint.component';

/**
 * A component to display a hint
 */
export const TUI_HINT_COMPONENT = new InjectionToken<Type<unknown>>(
    'TUI_HINT_COMPONENT',
    {
        factory: () => TuiHintComponent,
    },
);
