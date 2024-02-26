import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonthRange} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-input-month-range-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputMonthRangeExample2 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiMonthRange | null>(null),
    });
}
