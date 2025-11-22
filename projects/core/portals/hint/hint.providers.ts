import {InjectionToken, type Type} from '@angular/core';

import {TuiHintComponent} from './hint.component';

/**
 * A component to display a hint
 */
export const TUI_HINT_COMPONENT = new InjectionToken<Type<unknown>>(
    ngDevMode ? 'TUI_HINT_COMPONENT' : '',
    {
        factory: () => TuiHintComponent,
    },
);
