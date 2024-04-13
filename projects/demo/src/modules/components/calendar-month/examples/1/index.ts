import {Component} from '@angular/core';
import type {TuiMonth} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

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
