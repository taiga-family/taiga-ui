import {Directive, inject} from '@angular/core';
import {tuiOverrideOptions} from '@taiga-ui/core/utils/miscellaneous';

import {
    TUI_DROPDOWN_DEFAULT_OPTIONS,
    TUI_DROPDOWN_OPTIONS,
    tuiDropdownOptionsProvider,
} from './dropdown-options.directive';

@Directive({
    standalone: true,
    providers: [tuiDropdownOptionsProvider({})],
})
export class TuiDropdownFixed {
    constructor() {
        const override = tuiOverrideOptions(
            {limitWidth: 'fixed'},
            TUI_DROPDOWN_DEFAULT_OPTIONS,
        );

        override(inject(TUI_DROPDOWN_OPTIONS, {self: true, optional: true}), null);
    }
}
