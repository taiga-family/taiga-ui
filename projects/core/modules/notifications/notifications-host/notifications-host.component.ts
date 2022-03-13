import {ChangeDetectionStrategy, Component, Inject, Injector} from '@angular/core';
import {TuiNotificationGroupService} from '@taiga-ui/core/interfaces';

import {TUI_NOTIFICATIONS_GROUP} from '../notifications-group-token';

@Component({
    selector: 'tui-notifications-host',
    templateUrl: './notifications-host.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNotificationsHostComponent {
    constructor(
        @Inject(TUI_NOTIFICATIONS_GROUP)
        readonly groups: TuiNotificationGroupService[],
        private injector: Injector,
    ) {
        console.log(groups);
    }

    get() {
        console.log(this.injector.get(TUI_NOTIFICATIONS_GROUP));
    }
}
