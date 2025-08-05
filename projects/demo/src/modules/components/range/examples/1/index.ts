import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiRange],
    templateUrl: './index.html',
    styles: [':host {display: flex; flex-direction: column;}'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [0, 40];

    protected readonly formControl = new FormControl([40, 60]);
}
