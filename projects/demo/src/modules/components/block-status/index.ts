import {Component} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiBlockStatusModule} from '@taiga-ui/layout';

import {changeDetection} from '#/demo/emulate/change-detection';
import {TuiDemoModule} from '#/demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemoModule, TuiBlockStatusModule, TuiButtonDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected card = false;

    protected readonly examples = [
        'Basic',
        'With actions',
        'Cards',
        'Customization',
        'Mobile',
    ];
}
