import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {
    tuiFadeInList,
    tuiHeightCollapseList,
    tuiSlideInRightList,
} from '@taiga-ui/core/animations';
import {TuiAnimationOptions} from '@taiga-ui/core/interfaces';
import {TUI_ANIMATION_OPTIONS} from '@taiga-ui/core/tokens';
import {TuiNotificationsService} from '../notifications.service';

@Component({
    selector: 'tui-notifications-host',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './notifications-host.template.html',
    styleUrls: ['./notifications-host.style.less'],
    animations: [tuiFadeInList, tuiSlideInRightList, tuiHeightCollapseList],
})
export class TuiNotificationsHostComponent {
    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(TuiNotificationsService) readonly service: TuiNotificationsService,
    ) {}

    @tuiPure
    getAnimation(value: number): TuiAnimationOptions {
        return {
            value: String(value),
            ...this.options,
        };
    }
}
