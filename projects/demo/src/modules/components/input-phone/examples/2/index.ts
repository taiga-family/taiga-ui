import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputPhoneModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputPhoneModule, ReactiveFormsModule, JsonPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', Validators.minLength(12));
}
