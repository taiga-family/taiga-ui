import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-date-range-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputDateRangeExample2 {
    protected readonly control = new FormControl(
        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),
    );
}
