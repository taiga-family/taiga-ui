import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';
import {TuiInputTimeModule, tuiInputTimeOptionsProvider} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTimeModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            nativePicker: true,
        }),
    ],
})
export default class ExampleComponent {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiTime(10, 30)),
        testValue2: new FormControl(new TuiTime(10, 30, 0)),
        testValue3: new FormControl(new TuiTime(14, 30)),
        testValue4: new FormControl(new TuiTime(10, 30, 0)),
    });

    protected readonly items = tuiCreateTimePeriods(14, 16, [0, 30]);
}
