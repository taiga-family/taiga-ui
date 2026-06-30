import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiDatePicker} from '@taiga-ui/experimental';
import {TuiInputDate, TuiInputDateMulti, TuiInputDateRange} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDatePicker,
        TuiForm,
        TuiInputDate,
        TuiInputDateMulti,
        TuiInputDateRange,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = TuiDay.currentLocal().append({month: -2, year: -10});
    protected readonly max = TuiDay.currentLocal().append({month: 2, year: 10});

    protected readonly form = new FormGroup({
        single: new FormControl(),
        multi: new FormControl(),
        range: new FormControl(),
    });

    protected readonly disabledItemHandler = (item: TuiDay): boolean => item.day === 13;
}
`;export{o as default};
