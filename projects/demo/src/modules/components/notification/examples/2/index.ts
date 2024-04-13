import {Component} from '@angular/core';
import {tuiNotificationOptionsProvider} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-notification-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiNotificationOptionsProvider({
            icon: 'tuiIconHelpCircle',
            status: 'warning',
        }),
    ],
})
export class TuiNotificationExample2 {}
