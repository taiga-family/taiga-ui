import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiBlockStatusModule} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiBlockStatusModule, TuiButtonDirective],
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
