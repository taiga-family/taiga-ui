import {Directive, inject} from '@angular/core';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_COMMON_ICONS, TUI_ICON_START} from '@taiga-ui/core/tokens';

@Directive({
    standalone: true,
    selector: '[tuiButtonClose]',
    providers: [
        tuiButtonOptionsProvider({appearance: 'neutral', size: 's'}),
        {
            provide: TUI_ICON_START,
            useFactory: () => inject(TUI_COMMON_ICONS).close,
        },
    ],
    hostDirectives: [
        {
            directive: TuiButton,
            inputs: ['size'],
        },
    ],
    host: {
        tuiIconButton: '',
        '[style.--t-radius.%]': '100',
        '[attr.type]': '"button"',
    },
})
export class TuiButtonClose {}
