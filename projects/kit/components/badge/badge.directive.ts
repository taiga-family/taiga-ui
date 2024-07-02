import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

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
    hostDirectives: [TuiWithAppearance, TuiWithIcons],
    host: {
        '[class._dot]': 'dot',
        '[attr.data-size]': 'size',
    },
})
export class TuiBadge {
    private readonly options = inject(TUI_BADGE_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiBadgeStyles);

    @Input()
    public size = this.options.size;

    @Input()
    public dot = this.options.dot;
}
