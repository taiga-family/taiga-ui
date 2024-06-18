import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel} from '@taiga-ui/core';
import {TuiTextareaModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiTextareaModule,
        TuiTextfieldControllerModule,
        TuiLabel,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue1: new FormControl('A field', Validators.required),
    });
}
