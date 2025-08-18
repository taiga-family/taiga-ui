import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDayRange} from '@taiga-ui/cdk';
import {tuiDateFormatProvider, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiInputDateRange, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'MDY', separator: '/'})],
})
export default class Example {
    protected value: TuiDayRange | null = null;
}
