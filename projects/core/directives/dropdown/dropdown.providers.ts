import {Type} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

import {TuiDropdownComponent} from './dropdown.component';

/**
 * A component to display a dropdown
 */
export const TUI_DROPDOWN_COMPONENT = tuiCreateTokenFromFactory<Type<any>>(
    () => TuiDropdownComponent,
);
