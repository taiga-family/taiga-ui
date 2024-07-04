import {Directive} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_ICON_START} from '@taiga-ui/core/tokens';

import {TUI_BUTTON_CLOSE_ICON} from './button-close.options';

@Directive({
    standalone: true,
    selector: '[tuiIconButton][tuiButtonClose]',
    providers: [
        tuiButtonOptionsProvider({appearance: 'neutral', size: 's'}),
        {
            provide: TUI_ICON_START,
            useExisting: TUI_BUTTON_CLOSE_ICON,
        },
    ],
    host: {
        '[style.--t-radius.%]': '100',
        '[style.--tui-height-s.rem]': '1.875',
    },
})
export class TuiButtonClose {}
