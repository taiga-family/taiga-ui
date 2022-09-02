import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDay} from '@taiga-ui/cdk';
import {TuiDayRange, TuiMonth} from '@taiga-ui/cdk';

@Component({
    selector: `tui-calendar-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiCalendarExample2 {
    value: TuiDayRange | null = null;

    firstMonth = TuiMonth.currentLocal();

    middleMonth = TuiMonth.currentLocal().append({month: 1});

    lastMonth = TuiMonth.currentLocal().append({month: 2});

    hoveredItem: TuiDay | null = null;

    onDayClick(day: TuiDay): void {
        if (this.value === null || !this.value.isSingleDay) {
            this.value = new TuiDayRange(day, day);
        }

        this.value = TuiDayRange.sort(this.value.from, day);
    }

    onMonthChangeFirst(month: TuiMonth): void {
        this.firstMonth = month;
        this.middleMonth = month.append({month: 1});
        this.lastMonth = month.append({month: 2});
    }

    onMonthChangeMiddle(month: TuiMonth): void {
        this.firstMonth = month.append({month: -1});
        this.middleMonth = month;
        this.lastMonth = month.append({month: 1});
    }

    onMonthChangeLast(month: TuiMonth): void {
        this.firstMonth = month.append({month: -2});
        this.middleMonth = month.append({month: -1});
        this.lastMonth = month;
    }
}
