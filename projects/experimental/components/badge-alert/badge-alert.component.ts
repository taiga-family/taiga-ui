import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TUI_PLATFORM, TuiPlatform} from '@taiga-ui/cdk';
import {
    TUI_ANIMATION_OPTIONS,
    TuiAnimationOptions,
    tuiPop,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-badge-alert',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    styleUrls: ['./badge-alert.style.less'],
    animations: [tuiPop],
    host: {
        '[attr.data-platform]': 'platform',
        '[attr.data-size]': 'size',
        '[@tuiPop]': 'animation',
    },
})
export class TuiBadgeAlertComponent {
    @Input()
    size: TuiSizeL | TuiSizeXS = 'l';

    constructor(
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
        @Inject(TUI_ANIMATION_OPTIONS) readonly animation: TuiAnimationOptions,
    ) {}
}
