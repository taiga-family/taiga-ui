import {Directive} from '@angular/core';

import {TuiIcons} from './icons.directive';

@Directive({
    hostDirectives: [
        {
            directive: TuiIcons,
            inputs: ['iconStart', 'iconEnd'],
        },
    ],
})
export class TuiWithIcons {}
