import {Directive, inject, Input} from '@angular/core';
import {TuiStringHandler, tuiWithStyles} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER} from '@taiga-ui/core/tokens';

import {TuiIconsComponent} from './icons.component';

@Directive({
    standalone: true,
    selector: '[tuiIcons]:is(never)',
    host: {
        tuiIcons: '',
        '[class._icon-left]': 'iconLeft',
        '[class._icon-right]': 'iconRight',
        '[style.--t-mask-left]': '"url(" + resolver(iconLeft) + ")"',
        '[style.--t-mask-right]': '"url(" + resolver(iconRight) + ")"',
    },
})
export class TuiIconsDirective {
    protected readonly nothing = tuiWithStyles(TuiIconsComponent);

    @Input()
    iconLeft = '';

    @Input()
    iconRight = '';

    readonly resolver = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);
}
