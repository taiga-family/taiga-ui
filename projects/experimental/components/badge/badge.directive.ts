import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiBadgeComponent} from './badge.component';
import {TUI_BADGE_OPTIONS, TuiBadgeOptions} from './badge.options';

@Directive({
    selector: 'tui-badge,[tuiBadge]',
    host: {
        tuiBadgeNew: '',
        tuiAppearance: '',
        '[class._dot]': 'dot',
        '[attr.data-appearance]': 'appearance',
        '[attr.data-size]': 'size',
    },
})
export class TuiBadgeDirective {
    @Input()
    size = this.options.size;

    @Input()
    appearance = this.options.appearance;

    @Input()
    dot = this.options.dot;

    constructor(
        @Inject(TUI_BADGE_OPTIONS) private readonly options: TuiBadgeOptions,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiBadgeComponent);
    }
}
