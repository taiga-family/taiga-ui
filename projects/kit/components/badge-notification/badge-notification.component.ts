import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {TUI_ANIMATIONS_SPEED, tuiPop, tuiToAnimationOptions} from '@taiga-ui/core';

import {TUI_BADGE_NOTIFICATION_OPTIONS} from './badge-notification.options';

@Component({
    standalone: true,
    selector: 'tui-badge-notification',
    template: '<ng-content></ng-content>',
    styleUrls: ['./badge-notification.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiPop],
    host: {
        '[attr.data-size]': 'size',
        '[@tuiPop]': 'options',
    },
})
export class TuiBadgeNotificationComponent {
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    @Input()
    public size: TuiSizeL | TuiSizeXS = inject(TUI_BADGE_NOTIFICATION_OPTIONS).size;
}
