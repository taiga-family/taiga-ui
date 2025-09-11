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
    styles: ['@import "@taiga-ui/kit/styles/components/badge.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-badge',
    },
})
class TuiBadgeStyles {}

@Directive({
    standalone: true,
    // tui-icon[tuiBadge] is required to avoid double matching of TuiIcons
    selector: 'tui-badge,[tuiBadge],tui-icon[tuiBadge]',
    providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
    hostDirectives: [TuiWithAppearance, TuiWithIcons],
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiBadge {
    protected readonly nothing = tuiWithStyles(TuiBadgeStyles);

    @Input()
    public size = inject(TUI_BADGE_OPTIONS).size;
}
