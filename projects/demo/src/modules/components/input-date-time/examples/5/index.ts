import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-date-time-example-5',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [tuiInputDateOptionsProvider({nativePicker: true})],
})
export class TuiInputDateTimeExample5 {
    readonly testForm = new FormGroup({
        testValue: new FormControl([new TuiDay(2017, 2, 15), new TuiTime(12, 30)]),
        testValue2: new FormControl([new TuiDay(2017, 2, 15), new TuiTime(12, 30, 0)]),
    });
}
