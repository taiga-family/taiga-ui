import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-calendar-month-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiMonthExample2 {
    protected value: TuiMonthRange | null = null;

    protected max = new TuiMonth(2021, 7);
    protected min = new TuiMonth(2019, 7);

    protected onMonthClick(month: TuiMonth): void {
        if (this.value === null || !this.value.isSingleMonth) {
            this.value = new TuiMonthRange(month, month);

            return;
        }

        this.value = TuiMonthRange.sort(this.value.from, month);
    }
}
