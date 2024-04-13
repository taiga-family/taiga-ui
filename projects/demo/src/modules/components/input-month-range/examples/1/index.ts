import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import type {TuiMonthRange} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-month-range-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputMonthRangeExample1 {
    protected readonly control = new FormControl<TuiMonthRange | null>(null);
}
