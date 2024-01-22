import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {
    TUI_ANIMATION_OPTIONS,
    TuiAnimationOptions,
    tuiPop,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';

import {
    TUI_BADGE_NOTIFICATION_OPTIONS,
    TuiBadgeNotificationOptions,
} from './badge-notification.options';

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
    size: TuiSizeL | TuiSizeXS = this.options.size;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) readonly animation: TuiAnimationOptions,
        @Inject(TUI_BADGE_NOTIFICATION_OPTIONS)
        private readonly options: TuiBadgeNotificationOptions,
    ) {}
}
