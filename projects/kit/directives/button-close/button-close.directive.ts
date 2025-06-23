import {Directive, inject} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_COMMON_ICONS, TUI_ICON_START} from '@taiga-ui/core/tokens';

@Directive({
    standalone: true,
    selector: '[tuiIconButton][tuiButtonClose]',
    providers: [
        tuiButtonOptionsProvider({appearance: 'neutral', size: 's'}),
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
