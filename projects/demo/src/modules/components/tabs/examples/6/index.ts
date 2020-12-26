import {Component, Inject} from '@angular/core';
import {TuiNotificationsService} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-tabs-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTabsExample6 {
    activeItemIndex = 0;

    readonly steps = ['Sales', 'Settings', 'News'];

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    onClick(item: string) {
        this.notifications.show(item).subscribe();
    }
}
