import {Directive} from '@angular/core';

import {TuiDropdownOpen} from './dropdown-open.directive';

@Directive({
    standalone: true,
    hostDirectives: [
        {
            directive: TuiDropdownOpen,
            inputs: ['tuiDropdownOpen: open'],
            outputs: ['tuiDropdownOpenChange: openChange'],
        },
    ],
})
export class TuiWithDropdownOpen {}
