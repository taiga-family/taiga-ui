import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';

import {TuiUnmaskDateDemoDirective, unmaskDate} from '../../unmask-date-demo.directive';

@Component({
    imports: [ReactiveFormsModule, TuiTextfield, TuiUnmaskDateDemoDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('25121990', {nonNullable: true});
    protected readonly unmask = unmaskDate;
}
