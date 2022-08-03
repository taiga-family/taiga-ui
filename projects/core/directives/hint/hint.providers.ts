import {InjectionToken, Type} from '@angular/core';

import {TuiHintComponent} from './hint.component';

export const TUI_HINT_COMPONENT = new InjectionToken<Type<any>>(
    `[TUI_HINT_COMPONENT] A component to display a hint`,
    {
        factory: () => TuiHintComponent,
    },
);
