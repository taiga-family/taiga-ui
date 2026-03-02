import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;

    protected readonly today = TuiDay.currentLocal();
    protected readonly min = new TuiDay(this.today.year, this.today.month, 1);
    protected readonly max = this.min.append({month: 2, day: -1});

    protected readonly handler = (day: TuiDay): boolean => day.dayOfWeek() > 4;
}
`;export{a as default};
