import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiTextfieldModule} from '@taiga-ui/experimental';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiTextfieldModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected testForm = new FormGroup({
        testValue: new FormControl('Input value'),
    });
}
