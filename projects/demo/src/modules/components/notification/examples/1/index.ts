import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiIcon, TuiNotificationComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [CommonModule, TuiNotificationComponent, TuiIcon, TuiHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly statuses = [
        'neutral',
        'info',
        'success',
        'warning',
        'error',
    ] as const;

    protected readonly sizes = ['s', 'm', 'l'] as const;
}
