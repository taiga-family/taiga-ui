import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgressModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiProgressModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
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
