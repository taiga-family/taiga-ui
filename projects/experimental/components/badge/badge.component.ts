import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TUI_PLATFORM, TuiPlatform} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {Observable} from 'rxjs';

import {TUI_BADGE_OPTIONS, TuiBadgeOptions} from './badge.options';

@Component({
    selector: 'tui-badge',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badge.template.html',
    styleUrls: ['./badge.style.less'],
    providers: [MODE_PROVIDER],
    host: {
        '[attr.data-platform]': 'platform',
        '[attr.data-appearance]': 'appearance',
        '[attr.data-size]': 'size',
        '[class._hoverable]': 'hoverable',
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiBadgeComponent {
    @Input()
    size = this.options.size;

    @Input()
    appearance = this.options.appearance;

    @Input()
    hoverable = this.options.hoverable;

    constructor(
        @Inject(TUI_BADGE_OPTIONS) private readonly options: TuiBadgeOptions,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
    ) {}
}
