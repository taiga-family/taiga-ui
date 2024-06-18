import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel} from '@taiga-ui/core';
import {TuiRadioComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiLabel, TuiRadioComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue: new FormControl(),
    });
}
