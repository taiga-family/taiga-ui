import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-date-time-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputDateTimeExample1 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl([new TuiDay(2017, 2, 15), null]),
    });
}
