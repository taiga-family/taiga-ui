import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {tuiPop} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core/types';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';

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
export class TuiBadgeNotification {
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    @Input()
    public size: TuiSizeL | TuiSizeXS = inject(TUI_BADGE_NOTIFICATION_OPTIONS).size;
}
