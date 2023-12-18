import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth} from '@taiga-ui/cdk';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'input-month-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputDateOptionsProvider({nativePicker: true})],
})
export class InputMonthExample3 {
    readonly control = new UntypedFormControl();
    readonly min = TuiMonth.currentLocal().append({month: -12});
    readonly max = TuiMonth.currentLocal().append({month: 12});
}
