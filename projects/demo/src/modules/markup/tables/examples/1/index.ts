import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCheckbox} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiCheckbox],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testValue = new FormControl(true);
}
