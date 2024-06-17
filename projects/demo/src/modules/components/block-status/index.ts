import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiBlockStatus, TuiButton],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected card = false;

    protected readonly examples = [
        'Basic',
        'With actions',
        'Cards',
        'Customization',
        'Mobile',
    ];
}
