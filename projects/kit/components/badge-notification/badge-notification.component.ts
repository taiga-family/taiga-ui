import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core/types';

import {TUI_BADGE_NOTIFICATION_OPTIONS} from './badge-notification.options';

@Component({
    standalone: true,
    selector: 'tui-badge-notification',
    template: '<ng-content />',
    styleUrls: ['./badge-notification.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiBadgeNotification {
    @Input()
    public size: TuiSizeL | TuiSizeXS = inject(TUI_BADGE_NOTIFICATION_OPTIONS).size;
}
