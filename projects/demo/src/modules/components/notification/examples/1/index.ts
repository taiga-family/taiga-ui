import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-notification-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiNotificationExample1 {}
