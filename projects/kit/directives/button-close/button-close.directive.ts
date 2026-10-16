import {Directive, inject} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_COMMON_ICONS, TUI_ICON_START} from '@taiga-ui/core/tokens';

import {TUI_BUTTON_CLOSE_OPTIONS} from './button-close.options';

@Directive({
    standalone: true,
    selector: '[tuiIconButton][tuiButtonClose]',
    providers: [
        tuiButtonOptionsProvider(() => inject(TUI_BUTTON_CLOSE_OPTIONS)),
        {
            provide: TUI_ICON_START,
            useFactory: () => inject(TUI_COMMON_ICONS).close,
        },
    ],
    host: {
        '[style.--t-radius.%]': '100',
    },
})
export class TuiButtonClose {}
