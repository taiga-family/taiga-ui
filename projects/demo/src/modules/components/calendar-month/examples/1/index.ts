import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiMonth} from '@taiga-ui/cdk';

@Component({
    selector: `tui-calendar-month-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiMonthExample1 {
    value: TuiMonth | null = null;
    hoveredMonth: TuiMonth | null = null;

    onMonthClick(month: TuiMonth): void {
        this.value = month;
    }

    onMonthHovered(month: TuiMonth | null): void {
        this.hoveredMonth = month;
    }
}
