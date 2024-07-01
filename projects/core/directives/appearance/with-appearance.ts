import {Directive} from '@angular/core';

import {TuiAppearance} from './appearance.directive';

@Directive({
    standalone: true,
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
    ],
})
export class TuiWithAppearance {}
