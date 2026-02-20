import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDayRange} from '@taiga-ui/cdk';
import {tuiDateFormatProvider} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiInputDateRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'mm/dd/yyyy', separator: '/'})],
})
export default class Example {
    protected value: TuiDayRange | null = null;
}
`;export{t as default};
