import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownMobile, TuiMobileCalendarDropdownNew} from '@taiga-ui/addon-mobile';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDropdownMobile,
        TuiForm,
        TuiInputDateRange,
        TuiMobileCalendarDropdownNew,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        mobile: new FormControl(),
        fullscreen: new FormControl(),
    });
}
