import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTagModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(['I', 'love', 'Angular']),
    });
}
