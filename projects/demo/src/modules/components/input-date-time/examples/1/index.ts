import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-input-date-time-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputDateTimeExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl([new TuiDay(2017, 2, 15), null]),
    });

    readonly min = new TuiDay(2017, 2, 25);

    readonly max = new TuiDay(2040, 2, 20);
}
