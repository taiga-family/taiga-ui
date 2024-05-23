import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiMonthRange} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-input-month-range-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputMonthRangeExample3 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiMonthRange | null>(null),
    });
}
