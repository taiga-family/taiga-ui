import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiNotificationModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiNotificationModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = [
        'Full preview',
        'Simple mode',
        'With loading and unavailable image',
    ];
}
