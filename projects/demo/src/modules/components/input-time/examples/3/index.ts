import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCreateTimePeriods, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-time-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            icon: 'tuiIconCheckCircleLarge',
            mode: 'HH:MM:SS',
            itemSize: 's',
        }),
    ],
})
export class TuiInputTimeExample3 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(null),
    });

    items1 = tuiCreateTimePeriods();
}
