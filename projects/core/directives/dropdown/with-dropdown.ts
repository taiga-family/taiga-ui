import {Directive} from '@angular/core';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';

@Directive({
    hostDirectives: [
        TuiDropdownDirective,
        {
            directive: TuiDropdownPosition,
            outputs: ['tuiDropdownDirectionChange'],
        },
    ],
})
export class TuiWithDropdown {}
