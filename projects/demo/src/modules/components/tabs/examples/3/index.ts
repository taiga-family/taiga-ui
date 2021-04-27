import {Component, Inject} from '@angular/core';
import {TuiNotificationsService} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-tabs-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTabsExample3 {
    activeItemIndex = 0;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    onClick(item: string) {
        this.notifications.show(item).subscribe();
    }
}
