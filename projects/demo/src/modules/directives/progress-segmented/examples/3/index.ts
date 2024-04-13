import {Component} from '@angular/core';
import {TuiProgressModule} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiProgressModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly arrayColors = [
        '#39b54a',
        '#ffd450',
        '#ffd450',
        '#fcc521',
        '#fab619',
        '#f8a34d',
        '#e01f19',
    ];
}
