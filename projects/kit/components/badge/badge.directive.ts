import {Directive, inject, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    TuiIconsDirective,
} from '@taiga-ui/core';

import {TuiBadgeComponent} from './badge.component';
import {TUI_BADGE_OPTIONS} from './badge.options';

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
    private readonly options = inject(TUI_BADGE_OPTIONS);
    protected readonly nothing = tuiWithStyles(TuiBadgeComponent);

    @Input()
    public size = this.options.size;

    @Input()
    public dot = this.options.dot;
}
