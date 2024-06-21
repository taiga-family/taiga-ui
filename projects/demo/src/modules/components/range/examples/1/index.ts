import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiRange, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl([4, 6]);
}
