import {Directive, inject} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {
    TUI_ICON_RESOLVER,
    tuiButtonOptionsProvider,
    TuiIconsDirective,
} from '@taiga-ui/core';

import {TUI_BUTTON_CLOSE_ICON} from './button-close.options';

@Directive({
    standalone: true,
    selector: '[tuiIconButton][tuiButtonClose]',
    providers: [tuiButtonOptionsProvider({appearance: 'neutral', size: 's'})],
    host: {
        '[style.--t-radius.%]': '100',
        '[style.--tui-height-s.rem]': '1.875',
    },
})
export class TuiButtonClose {
    protected readonly resolver = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);

    constructor() {
        inject(TuiIconsDirective).iconLeft = inject(TUI_BUTTON_CLOSE_ICON);
    }
}
