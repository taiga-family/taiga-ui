import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    TuiIconsDirective,
} from '@taiga-ui/core';

import {TUI_BADGE_OPTIONS} from './badge.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./badge.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-badge',
    },
})
class TuiBadgeStyles {}

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

    @Input()
    public size = this.options.size;

    @Input()
    public dot = this.options.dot;

    protected readonly nothing = tuiWithStyles(TuiBadgeStyles);
}
