import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiDayRangePeriod} from '@taiga-ui/kit';

const today = TuiDay.currentLocal();
const yesterday = today.append({day: -1});

@Component({
    selector: 'tui-input-date-range-example-5',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputDateRangeExample5 {
    protected readonly control = new FormControl(new TuiDayRange(today, today));

    protected readonly items = [
        new TuiDayRangePeriod(
            new TuiDayRange(today, today),
            'Today',
            ({$implicit}) => `Today (${$implicit.from})`,
        ),
        new TuiDayRangePeriod(
            new TuiDayRange(yesterday, yesterday),
            'Yesterday',
            ({$implicit}) => `Yesterday (${$implicit.from})`,
        ),
    ];
}
