import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiNotification} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiNotification],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Full preview',
        'Preview with directive',
        'Simple mode',
        'With loading and unavailable image',
    ];
}
