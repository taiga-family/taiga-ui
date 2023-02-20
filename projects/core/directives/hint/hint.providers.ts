import {InjectionToken, Type} from '@angular/core';

// eslint-disable-next-line import/no-cycle
import {TuiHintComponent} from './hint.component';

export const TUI_HINT_COMPONENT = new InjectionToken<Type<unknown>>(
    `[TUI_HINT_COMPONENT] A component to display a hint`,
    {
        factory: () => TuiHintComponent,
    },
);
