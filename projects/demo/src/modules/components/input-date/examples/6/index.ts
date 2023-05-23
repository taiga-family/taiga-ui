import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-date-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [tuiInputDateOptionsProvider({nativePicker: true})],
})
export class TuiInputDateExample6 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 0, 15)),
        testValue2: new FormControl(new TuiDay(2019, 2, 25)),
    });

    max = new TuiDay(2019, 3, 15);
    min = new TuiDay(2019, 2, 15);
}
