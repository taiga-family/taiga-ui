import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-input-date-multi-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputDateMultiExample1 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl([
            new TuiDay(2017, 0, 7),
            new TuiDay(2017, 0, 10),
            new TuiDay(2017, 0, 15),
        ]),
    });
}
