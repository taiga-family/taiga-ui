import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-date-range-example-2',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
})
export class TuiInputDateRangeExample2 {
    readonly control = new FormControl(
        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),
    );
}
