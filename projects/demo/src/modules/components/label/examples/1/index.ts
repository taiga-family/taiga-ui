import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiCheckboxComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiLabel, TuiCheckboxComponent, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl(false),
        testValue3: new FormControl(false),
    });
}
