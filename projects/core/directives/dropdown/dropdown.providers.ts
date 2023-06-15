import {InjectionToken, Type} from '@angular/core';

import {TuiDropdownComponent} from './dropdown.component';

/**
 * A component to display a dropdown
 */
export const TUI_DROPDOWN_COMPONENT = new InjectionToken<Type<any>>(
    `[TUI_DROPDOWN_COMPONENT]`,
    {
        factory: () => TuiDropdownComponent,
    },
);
