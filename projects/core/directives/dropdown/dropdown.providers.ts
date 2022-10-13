import {InjectionToken, Type} from '@angular/core';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiDropdownComponent} from './dropdown.component';

export const TUI_DROPDOWN_COMPONENT = new InjectionToken<Type<any>>(
    `[TUI_DROPDOWN_COMPONENT] A component to display a dropdown`,
    {
        factory: () => TuiDropdownComponent,
    },
);
