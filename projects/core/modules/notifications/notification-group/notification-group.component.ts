import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {
    tuiFadeInList,
    tuiHeightCollapseList,
    tuiSlideInRightList,
} from '@taiga-ui/core/animations';
import {
    TuiAnimationOptions,
    TuiNotificationGroupService,
} from '@taiga-ui/core/interfaces';
import {TUI_ANIMATION_OPTIONS} from '@taiga-ui/core/tokens';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-notification-group',
    templateUrl: './notification-group.component.html',
    styleUrls: ['./notification-group.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeInList, tuiSlideInRightList, tuiHeightCollapseList],
})
export class TuiNotificationGroupComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) readonly service: TuiNotificationGroupService,
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
    ) {}

    @tuiPure
    getAnimation(value: number): TuiAnimationOptions {
        return {value: String(value), ...this.options};
    }
}
