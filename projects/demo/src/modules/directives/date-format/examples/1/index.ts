import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDateFormat} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputDateModule, TuiDateFormat, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl();
}
