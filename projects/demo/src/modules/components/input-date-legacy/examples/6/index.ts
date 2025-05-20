import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';
import {TuiInputDateModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputDateOptionsProvider({nativePicker: true})],
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 0, 15)),
    });
}
