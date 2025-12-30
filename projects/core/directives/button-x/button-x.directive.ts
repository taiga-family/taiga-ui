import {Directive, inject} from '@angular/core';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core/components/data-list';
import {TUI_COMMON_ICONS, TUI_ICON_START} from '@taiga-ui/core/tokens';

@Directive({
    selector: '[tuiButtonX]',
    providers: [
        tuiButtonOptionsProvider(
            (host = inject(TUI_DATA_LIST_HOST, {optional: true})) => ({
                appearance: host ? 'icon' : 'neutral',
                size: host ? 'xs' : 's',
            }),
        ),
        {
            provide: TUI_ICON_START,
            useFactory: () => inject(TUI_COMMON_ICONS).close,
        },
    ],
    hostDirectives: [{directive: TuiButton, inputs: ['size']}],
    host: {
        tuiIconButton: '',
        type: 'button',
        tabindex: '-1',
        '[style.--t-radius.%]': '100',
        '(pointerdown.prevent.zoneless)': '(0)',
    },
})
export class TuiButtonX {}
