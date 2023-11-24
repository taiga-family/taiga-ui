import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService, TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

import {TuiIconsComponent} from './icons.component';

// TODO: Turn into a hostDirective in 4.0
@Directive({
    selector:
        '[iconLeft]:is(button,tui-badge,tui-chip),[iconRight]:is(button,tui-badge,tui-chip),[tuiBadge][iconLeft],[tuiBadge][iconRight],[tuiChip][iconLeft],[tuiChip][iconRight],[tuiButtonClose]',
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
    iconLeft = '';

    @Input()
    iconRight = '';

    constructor(
        @Inject(TUI_ICON_RESOLVER) readonly resolver: TuiStringHandler<string>,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiIconsComponent);
    }
}
