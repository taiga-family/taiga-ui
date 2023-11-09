import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TUI_PLATFORM, TuiPlatform} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {Observable} from 'rxjs';

import {TUI_BADGE_OPTIONS, TuiBadgeOptions} from './badge.options';

@Component({
    selector: 'tui-badge',
    templateUrl: './badge.template.html',
    styleUrls: ['./badge.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '[attr.data-platform]': 'platform',
        '[attr.data-appearance]': 'appearance',
        '[attr.data-size]': 'size',
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiBadgeComponent {
    @Input()
    size = this.options.size;

    @Input()
    appearance = this.options.appearance;

    constructor(
        @Inject(TUI_BADGE_OPTIONS) private readonly options: TuiBadgeOptions,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
    ) {}
}
