import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownSheet, TuiMobileCalendarDropdown} from '@taiga-ui/addon-mobile';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiInputDateTime} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDropdownSheet,
        TuiForm,
        TuiInputDateTime,
        TuiMobileCalendarDropdown,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        native: new FormControl([TuiDay.currentLocal(), new TuiTime(12, 34, 56, 789)]),
        mobile: new FormControl([TuiDay.currentLocal().append({day: 1})]),
        fullscreen: new FormControl([
            TuiDay.currentLocal().append({day: 2}),
            new TuiTime(23, 59),
        ]),
    });
}
`;export{r as default};
