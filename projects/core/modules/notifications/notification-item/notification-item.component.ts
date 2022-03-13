import {Component, Inject} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import {NotificationAlert} from '../../notifications/notification-alert/notification-alert';

@Component({
    selector: 'tui-notification-item',
    templateUrl: './notification-item.component.html',
})
export class TuiNotificationItemComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) readonly item: NotificationAlert<any, any>,
    ) {}
}
