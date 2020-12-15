import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
    tuiFadeInList,
    tuiHeightCollapseList,
    tuiSlideInRightList,
} from '@taiga-ui/core/animations';
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
        @Inject(TuiNotificationsService) readonly service: TuiNotificationsService,
    ) {}
}
