import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHintModule, TuiIconComponent, TuiNotificationComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [CommonModule, TuiNotificationComponent, TuiIconComponent, TuiHintModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly statuses = [
        'neutral',
        'info',
        'success',
        'warning',
        'error',
    ] as const;

    protected readonly sizes = ['s', 'm', 'l'] as const;
}
