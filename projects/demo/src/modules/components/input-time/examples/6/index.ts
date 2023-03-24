import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-time-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        tuiInputTimeOptionsProvider({
            nativePicker: true,
        }),
    ],
})
export class TuiInputTimeExample6 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiTime(10, 30)),
        testValue2: new FormControl(new TuiTime(10, 30, 0)),
        testValue3: new FormControl(new TuiTime(10, 30, 0, 15)),
    });
}
