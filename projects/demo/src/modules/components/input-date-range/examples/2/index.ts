import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';

@Component({
    selector: `tui-input-date-range-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputDateRangeExample2 {
    readonly control = new FormControl(
        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),
    );
}
