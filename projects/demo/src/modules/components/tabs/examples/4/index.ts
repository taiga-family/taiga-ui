import {Component, Inject} from '@angular/core';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiNotificationsService} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-tabs-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_IS_IOS,
            useValue: false,
        },
        {
            provide: TUI_IS_ANDROID,
            useValue: false,
        },
    ],
})
export class TuiTabsExample4 {
    activeItemIndex = 0;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    onClick(item: string) {
        this.notifications.showNotification(item).subscribe();
    }
}
