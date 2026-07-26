import {Directive, inject} from '@angular/core';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_COMMON_ICONS, TUI_ICON_START} from '@taiga-ui/core/tokens';

import {TUI_BUTTON_X_OPTIONS} from './button-x.options';

@Directive({
    selector: '[tuiButtonX]',
    providers: [
        tuiButtonOptionsProvider(() => inject(TUI_BUTTON_X_OPTIONS)),
        {
            provide: TUI_ICON_START,
            useFactory: () => inject(TUI_COMMON_ICONS).close,
        },
    ],
    hostDirectives: [{directive: TuiButton, inputs: ['size']}],
    host: {
        tuiIconButton: '',
        type: 'button',
        '[style.--t-radius.%]': '100',
        '(pointerdown.prevent.zoneless)': '(0)',
    },
})
export class TuiButtonX {}
