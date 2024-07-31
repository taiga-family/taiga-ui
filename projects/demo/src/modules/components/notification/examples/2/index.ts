import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotification, tuiNotificationOptionsProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiNotification],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiNotificationOptionsProvider({
            icon: '@tui.circle-help',
            appearance: 'warning',
            size: 's',
        }),
    ],
})
export default class Example {}
