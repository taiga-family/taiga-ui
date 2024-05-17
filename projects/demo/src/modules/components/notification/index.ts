import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiNotification} from '@taiga-ui/core';
import {TuiNotificationComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiNotificationComponent],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = ['Basic', 'Options', 'Sizes'];

    protected readonly statusVariants: TuiNotification[] = [
        'info',
        'error',
        'warning',
        'success',
        'neutral',
    ];

    protected status = this.statusVariants[0];
}
