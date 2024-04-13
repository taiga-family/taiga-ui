import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputDateModule, tuiInputDateOptionsProvider} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiInputDateModule, ReactiveFormsModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputDateOptionsProvider({nativePicker: true})],
})
export default class ExampleComponent {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 0, 15)),
    });
}
