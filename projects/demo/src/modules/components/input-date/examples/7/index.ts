import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiTextfield, TuiInputDate],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;

    protected readonly today = TuiDay.currentLocal();
    protected readonly min = new TuiDay(this.today.year, this.today.month, 1);
    protected readonly max = new TuiDay(this.today.year, this.today.month, 1).append({
        month: 1,
        day: -1,
    });

    protected readonly handler = (day: TuiDay): boolean => day.daySame(this.today);
}
