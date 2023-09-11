import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TUI_PLATFORM, TuiPlatform} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_ANIMATION_OPTIONS,
    TUI_MODE,
    TuiBrightness,
    tuiPop,
    TuiSizeS,
    TuiSizeXL,
} from '@taiga-ui/core';
import {TuiBadgeAppearance} from '@taiga-ui/experimental/types';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-badge',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badge.template.html',
    styleUrls: ['./badge.style.less'],
    providers: [MODE_PROVIDER],
    animations: [tuiPop],
    host: {
        '[tabIndex]': 'hoverable ? 0 : -1',
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiBadgeComponent {
    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeS | TuiSizeXL = 'l';

    @Input()
    @HostBinding('attr.data-appearance')
    appearance: TuiBadgeAppearance = 'default';

    @Input()
    @HostBinding('class._hoverable')
    hoverable = false;

    @HostBinding('attr.data-platform')
    platform = this.tuiPlatform;

    @HostBinding('@tuiPop')
    readonly entrance = this.animationOption;

    constructor(
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PLATFORM) readonly tuiPlatform: TuiPlatform,
        @Inject(TUI_ANIMATION_OPTIONS) private readonly animationOption: AnimationOptions,
    ) {}
}
