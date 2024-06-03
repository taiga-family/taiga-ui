import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiErrorComponent, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputDateModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputDateModule,
        TuiErrorComponent,
        TuiTextfieldControllerModule,
        TuiFieldErrorPipe,
        ReactiveFormsModule,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 0, 15)),
    });
}
