import {Directive} from '@angular/core';

import {TuiDropdownOpen} from './dropdown-open.directive';

@Directive({
    standalone: true,
    hostDirectives: [
        {
            directive: TuiDropdownOpen,
            inputs: ['tuiDropdownOpen: open', 'tuiDropdownEnabled'],
            outputs: ['tuiDropdownOpenChange: openChange'],
        },
    ],
})
export class TuiWithDropdownOpen {}
