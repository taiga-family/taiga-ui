import {Component} from '@angular/core';
import {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-calendar-month-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiMonthExample2 {
    value: TuiMonthRange | null = null;

    max = new TuiMonth(2021, 7);
    min = new TuiMonth(2019, 7);

    onMonthClick(month: TuiMonth) {
        if (this.value === null || !this.value.isSingleMonth) {
            this.value = new TuiMonthRange(month, month);

            return;
        }

        this.value = TuiMonthRange.sort(this.value.from, month);
    }
}
