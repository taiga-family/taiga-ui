import type {Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiDropdownComponent} from './dropdown.component';

/**
 * A component to display a dropdown
 */
export const TUI_DROPDOWN_COMPONENT = tuiCreateTokenFromFactory<Type<any>>(
    () => TuiDropdownComponent,
);

export const TUI_DROPDOWN_CONTEXT = new InjectionToken<Record<any, any>>('');
