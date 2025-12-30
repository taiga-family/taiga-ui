import {InjectionToken, type Type} from '@angular/core';

import {TuiDropdownComponent} from './dropdown.component';

/**
 * A component to display a dropdown
 */
export const TUI_DROPDOWN_COMPONENT = new InjectionToken<Type<any>>(
    ngDevMode ? 'TUI_DROPDOWN_COMPONENT' : '',
    {
        factory: () => TuiDropdownComponent,
    },
);

export const TUI_DROPDOWN_CONTEXT = new InjectionToken<Record<any, any>>(
    ngDevMode ? 'TUI_DROPDOWN_CONTEXT' : '',
);
