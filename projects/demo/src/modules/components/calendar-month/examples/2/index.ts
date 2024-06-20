import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';
import {TuiCalendarMonth} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCalendarMonth],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiMonthRange | null = null;

    protected max = new TuiMonth(2024, 11);
    protected min = new TuiMonth(2019, 7);

    protected onMonthClick(month: TuiMonth): void {
        if (!this.value?.isSingleMonth) {
            this.value = new TuiMonthRange(month, month);

            return;
        }

        this.value = TuiMonthRange.sort(this.value.from, month);
    }
}
