import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButtonDirective,
    TuiDropdownContextDirective,
    TuiDropdownDirective,
} from '@taiga-ui/core';
import {TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiDropdownContextDirective,
        TuiDropdownDirective,
        ReactiveFormsModule,
        TuiTextareaModule,
        TuiButtonDirective,
    ],
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
