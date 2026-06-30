import"./chunk-HU6DUUP4.js";var i=`import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiDatePicker} from '@taiga-ui/experimental';
import {
    TuiButtonSelect,
    TuiInputDate,
    TuiInputDateMulti,
    TuiInputDateRange,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonSelect,
        TuiDatePicker,
        TuiInputDate,
        TuiInputDateMulti,
        TuiInputDateRange,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = signal<TuiDay | null>(null);
}
`;export{i as default};
