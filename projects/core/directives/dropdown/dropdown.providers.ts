import type {Type} from '@angular/core';
import {InjectionToken} from '@angular/core';

import {TuiDropdownComponent} from './dropdown.component';

export const TUI_DROPDOWN_COMPONENT = new InjectionToken<Type<any>>(
    `[TUI_DROPDOWN_COMPONENT] A component to display a dropdown`,
    {
        factory: () => TuiDropdownComponent,
    },
);
