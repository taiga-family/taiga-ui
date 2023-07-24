import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNotificationOptionsProvider} from '@taiga-ui/core';

@Component({
    selector: 'tui-notification-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        tuiNotificationOptionsProvider({
            icon: 'tuiIconHelpCircle',
            status: 'warning',
        }),
    ],
})
export class TuiNotificationExample2 {}
