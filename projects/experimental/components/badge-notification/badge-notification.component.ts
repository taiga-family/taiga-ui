import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {
    TUI_ANIMATION_OPTIONS,
    TuiAnimationOptions,
    tuiPop,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-badge-notification',
    template: '<ng-content></ng-content>',
    styleUrls: ['./badge-notification.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiPop],
    host: {
        '[attr.data-size]': 'size',
        '[@tuiPop]': 'animation',
    },
})
export class TuiBadgeNotificationComponent {
    @Input()
    size: TuiSizeL | TuiSizeXS = 'l';

    constructor(@Inject(TUI_ANIMATION_OPTIONS) readonly animation: TuiAnimationOptions) {}
}
