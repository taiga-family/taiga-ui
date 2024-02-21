import {Directive, inject} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER} from '@taiga-ui/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental/components';

import {TUI_BUTTON_CLOSE_ICON} from './button-close.options';

// TODO: 4.0 revisit after turning tuiIcon to host directive
@Directive({
    selector: '[tuiIconButton][tuiButtonClose]',
    providers: [tuiButtonOptionsProvider({appearance: 'neutral', size: 's'})],
    host: {
        '[style.--t-mask-left]': '"url(" + resolver(icon) + ")"',
        '[style.--t-radius.%]': '100',
        '[style.--tui-height-s.rem]': '1.875',
        '[class._icon-left]': 'true',
    },
})
export class TuiButtonCloseDirective {
    readonly resolver = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);
    readonly icon = inject(TUI_BUTTON_CLOSE_ICON);
}
