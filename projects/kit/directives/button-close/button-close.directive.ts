import {Directive} from '@angular/core';
import {TUI_ICON, tuiButtonOptionsProvider} from '@taiga-ui/core';

import {TUI_BUTTON_CLOSE_ICON} from './button-close.options';

@Directive({
    standalone: true,
    selector: '[tuiIconButton][tuiButtonClose]',
    providers: [
        tuiButtonOptionsProvider({appearance: 'neutral', size: 's'}),
        {
            provide: TUI_ICON,
            useExisting: TUI_BUTTON_CLOSE_ICON,
        },
    ],
    host: {
        '[style.--t-radius.%]': '100',
        '[style.--tui-height-s.rem]': '1.875',
    },
})
export class TuiButtonClose {}
