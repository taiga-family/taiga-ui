import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDayRange} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {tuiCreateDefaultDayRangePeriods, TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputDateRange, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiDayRange | null>(null);
    protected readonly items = tuiCreateDefaultDayRangePeriods();

    public get content(): string {
        const {value} = this.control;

        return value
            ? String(this.items.find((period) => period.range.daySame(value)) || '')
            : '';
    }
}
