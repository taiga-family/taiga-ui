import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_NOTIFICATION_DEFAULT_OPTIONS,
    TUI_NOTIFICATION_OPTIONS,
    TuiNotification,
} from '@taiga-ui/core';

@Component({
    selector: `tui-notification-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_NOTIFICATION_OPTIONS,
            useValue: {
                ...TUI_NOTIFICATION_DEFAULT_OPTIONS,
                status: TuiNotification.Error,
                hasIcon: false,
            },
        },
    ],
})
export class TuiNotificationExample2 {}
