import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-time-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            nativePicker: true,
        }),
    ],
})
export class TuiInputTimeExample6 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(new TuiTime(10, 30)),
        testValue2: new UntypedFormControl(new TuiTime(10, 30, 0)),
        testValue3: new UntypedFormControl(new TuiTime(14, 30)),
        testValue4: new UntypedFormControl(new TuiTime(10, 30, 0)),
    });

    readonly items = tuiCreateTimePeriods(14, 16, [0, 30]);
}
