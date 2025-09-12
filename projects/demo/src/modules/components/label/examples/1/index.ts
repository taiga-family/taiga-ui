import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiCheckbox, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiCheckbox, TuiIcon, TuiLabel, TuiTitle, TuiTooltip],
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
