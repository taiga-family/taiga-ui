import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotificationsService} from '@taiga-ui/core';

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

    onClick(item: string): void {
        this.notifications.show(item).subscribe();
    }
}
