import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotificationComponent, tuiNotificationOptionsProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiNotificationComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiNotificationOptionsProvider({
            icon: '@tui.circle-help',
            status: 'warning',
        }),
    ],
})
export default class Example {}
