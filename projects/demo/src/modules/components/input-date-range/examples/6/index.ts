import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDayLike} from '@taiga-ui/cdk';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiInputDateRangeModule, TuiUnfinishedValidator} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        JsonPipe,
        ReactiveFormsModule,
        TuiInputDateRangeModule,
        TuiUnfinishedValidator,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly minlength: TuiDayLike = {day: 15};

    protected readonly testForm = new FormGroup({
        testValue: new FormControl(
            new TuiDayRange(new TuiDay(2017, 11, 3), new TuiDay(2017, 11, 5)),
        ),
    });
}
