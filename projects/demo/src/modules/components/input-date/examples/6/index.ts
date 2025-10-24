import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownSheet, TuiMobileCalendarDropdownNew} from '@taiga-ui/addon-mobile';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDropdownSheet,
        TuiForm,
        TuiInputDate,
        TuiMobileCalendarDropdownNew,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        native: new FormControl(TuiDay.currentLocal()),
        mobile: new FormControl(TuiDay.currentLocal().append({day: 1})),
        fullscreen: new FormControl(TuiDay.currentLocal().append({day: 2})),
    });
}
