import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitleDirective} from '@taiga-ui/core';
import {TuiCheckboxModule, TuiLabelDirective} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiLabelDirective,
        TuiCheckboxModule,
        TuiTitleDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl(false),
        testValue3: new FormControl(false),
    });
}
