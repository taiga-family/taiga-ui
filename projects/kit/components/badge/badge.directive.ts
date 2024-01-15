import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    TuiIconsDirective,
} from '@taiga-ui/core';

import {TuiBadgeComponent} from './badge.component';
import {TUI_BADGE_OPTIONS, TuiBadgeOptions} from './badge.options';

@Directive({
    standalone: true,
    selector: 'tui-badge,[tuiBadge]',
    providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
    host: {
        '[class._dot]': 'dot',
        '[attr.data-size]': 'size',
    },
    hostDirectives: [
        {
            directive: TuiAppearanceDirective,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        {
            directive: TuiIconsDirective,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
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
