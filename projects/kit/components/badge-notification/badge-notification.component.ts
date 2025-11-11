import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {type TuiSizeL, type TuiSizeXS} from '@taiga-ui/core/types';

import {TUI_BADGE_NOTIFICATION_OPTIONS} from './badge-notification.options';

@Component({
    selector: 'tui-badge-notification',
    template: '<ng-content />',
    styleUrl: './badge-notification.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiBadgeNotification {
    public readonly size = input<TuiSizeL | TuiSizeXS>(
        inject(TUI_BADGE_NOTIFICATION_OPTIONS).size,
    );
}
