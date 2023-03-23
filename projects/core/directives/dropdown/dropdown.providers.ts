import type {Type} from '@angular/core';
import {InjectionToken} from '@angular/core';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
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
