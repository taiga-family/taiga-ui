import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-date-range-example-1',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
})
export class TuiInputDateRangeExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(
            new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),
        ),
    });

    readonly min = new TuiDay(2000, 2, 20);

    readonly max = new TuiDay(2040, 2, 20);
}
