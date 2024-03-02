import {Directive, inject, Input} from '@angular/core';
import {type TuiStringHandler, tuiWithStyles} from '@taiga-ui/cdk';
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
    @Input()
    public iconLeft = '';

    @Input()
    public iconRight = '';

    protected readonly nothing = tuiWithStyles(TuiIconsComponent);

    protected readonly resolver = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);
}
