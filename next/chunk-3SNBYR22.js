import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = new TuiDayRange(new TuiDay(2017, 0, 15), new TuiDay(2017, 0, 20));
}
`;export{t as default};
