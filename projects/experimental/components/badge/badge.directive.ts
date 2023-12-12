import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {
    TUI_APPEARANCE,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/experimental/directives/appearance';
import {TUI_ICONS} from '@taiga-ui/experimental/directives/icons';

import {TuiBadgeComponent} from './badge.component';
import {TUI_BADGE_OPTIONS, TuiBadgeOptions} from './badge.options';

@Directive({
    selector: 'tui-badge,[tuiBadge]',
    providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
    hostDirectives: [TUI_APPEARANCE, TUI_ICONS],
    host: {
        tuiBadgeNew: '',
        '[class._dot]': 'dot',
        '[attr.data-size]': 'size',
    },
})
export class TuiBadgeDirective {
    @Input()
    size = this.options.size;

    @Input()
    dot = this.options.dot;

    constructor(
        @Inject(TUI_BADGE_OPTIONS) private readonly options: TuiBadgeOptions,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiBadgeComponent);
    }
}
