import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDateFormatDirective} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiInputDateModule, TuiDateFormatDirective, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl();
}
