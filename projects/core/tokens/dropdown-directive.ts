import {InjectionToken} from '@angular/core';
import {TuiDropdown} from '@taiga-ui/core/interfaces';

export const TUI_DROPDOWN_DIRECTIVE = new InjectionToken<TuiDropdown>(
    `Directive controlling TuiDropdownBoxComponent`,
);
