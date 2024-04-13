import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiInputDateModule, TuiTextfieldControllerModule, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 2, 15)),
    });
}
