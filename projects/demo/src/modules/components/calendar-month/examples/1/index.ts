import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiMonth} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-calendar-month-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiMonthExample1 {
    protected value: TuiMonth | null = null;
    protected hoveredMonth: TuiMonth | null = null;

    protected onMonthClick(month: TuiMonth): void {
        this.value = month;
    }

    protected onMonthHovered(month: TuiMonth | null): void {
        this.hoveredMonth = month;
    }
}
