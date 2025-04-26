import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown, TuiTextfield} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiDropdown, TuiTextarea, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        reportText: new FormControl('Misspell HERE!'),
    });

    protected report(): void {
        console.info(this.testForm.value);
    }
}
