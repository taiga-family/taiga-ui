import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {TuiRadioComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiLabelDirective, TuiRadioComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected testForm = new FormGroup({
        testValue: new FormControl(),
    });
}
