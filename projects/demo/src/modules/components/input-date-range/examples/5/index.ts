import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiDayRangePeriod} from '@taiga-ui/kit';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

const today = TuiDay.currentLocal();
const yesterday = today.append({day: -1});

@Component({
    standalone: true,
    imports: [TuiInputDateRangeModule, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
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
        new TuiDayRangePeriod(
            new TuiDayRange(yesterday, yesterday),
            'Yet another yesterday',
            ({$implicit}) => `Yet another yesterday (${$implicit.from})`,
        ),
    ];
}
