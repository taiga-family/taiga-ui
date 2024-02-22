import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-notification-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiNotificationExample1 {
    protected readonly statuses = [
        'neutral',
        'info',
        'success',
        'warning',
        'error',
    ] as const;

    protected readonly sizes = ['s', 'm', 'l'] as const;
}
