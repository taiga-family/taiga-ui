import type {Type} from '@angular/core';
import {TuiDropdownComponent} from './dropdown.component';
import {InjectionToken} from '@angular/core';

/**
 * A component to display a dropdown
 */
export const TUI_DROPDOWN_COMPONENT = new InjectionToken<Type<any>>(
    'TUI_DROPDOWN_COMPONENT',
    {
        factory: () => TuiDropdownComponent,
    },
);

export const TUI_DROPDOWN_CONTEXT = new InjectionToken<Record<any, any>>(
    'TUI_DROPDOWN_CONTEXT',
);
