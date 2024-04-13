import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiBlockDirective, TuiCheckboxComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiBlockDirective, TuiCheckboxComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl({value: false, disabled: true}),
        testValue3: new FormControl({value: true, disabled: true}),
        testValue4: new FormControl(false),
    });
}
