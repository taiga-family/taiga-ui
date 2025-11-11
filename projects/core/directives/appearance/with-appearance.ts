import {Directive} from '@angular/core';

import {TuiAppearance} from './appearance.directive';

@Directive({
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
                'tuiAppearanceMode',
            ],
        },
    ],
})
export class TuiWithAppearance {}
