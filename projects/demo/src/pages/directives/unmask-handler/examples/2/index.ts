import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';

import {TuiUnmaskDateDemoDirective, unmaskDate} from '../../unmask-date-demo.directive';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiTextfield, TuiUnmaskDateDemoDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', {nonNullable: true});
    protected readonly unmask = unmaskDate;

    protected patch(): void {
        this.control.patchValue('01012000');
    }
}
