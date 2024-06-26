import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiNotificationStatus} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Basic', 'Options', 'Sizes'];

    protected readonly statusVariants: TuiNotificationStatus[] = [
        'info',
        'error',
        'warning',
        'success',
        'neutral',
    ];

    protected status = this.statusVariants[0];
}
