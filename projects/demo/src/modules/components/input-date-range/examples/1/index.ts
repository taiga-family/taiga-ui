import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiInputDateRangeModule, TuiUnfinishedValidator} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateRangeModule, TuiUnfinishedValidator],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(
            new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),
        ),
    });

    protected readonly min = new TuiDay(2018, 2, 25);
    protected readonly max = new TuiDay(2040, 2, 20);
}
