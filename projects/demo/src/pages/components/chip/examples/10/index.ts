import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChip, TuiChipGroup} from '@taiga-ui/kit';

@Component({
    imports: [TuiChip, TuiChipGroup],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly chips = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
    ];
}
