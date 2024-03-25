import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabelDirective, TuiRadioComponent} from '@taiga-ui/experimental';

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
