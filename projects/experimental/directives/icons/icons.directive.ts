import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService, TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

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
