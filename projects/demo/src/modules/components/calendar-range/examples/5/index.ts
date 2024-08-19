import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiDayRangePeriod} from '@taiga-ui/kit';

const today = TuiDay.currentLocal();
const startOfWeek = today.append({day: -today.dayOfWeek()});
const startOfMonth = today.append({day: 1 - today.day});
const startOfQuarter = startOfMonth.append({month: -(startOfMonth.month % 3)});

@Component({
    selector: 'tui-calendar-range-example-5',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiCalendarRangeExample5 {
    readonly items = [
        new TuiDayRangePeriod(
            new TuiDayRange(today.append({day: -30}), today),
            'Default',
        ),
        new TuiDayRangePeriod(new TuiDayRange(startOfWeek, today), 'Week'),
        new TuiDayRangePeriod(new TuiDayRange(startOfMonth, today), 'Month'),
        new TuiDayRangePeriod(new TuiDayRange(startOfQuarter, today), 'Quarter'),
    ];

    selected: TuiDayRangePeriod | null = this.default;
    value: TuiDayRange | null = null;

    get default(): TuiDayRangePeriod {
        return this.items[0];
    }

    get isDefault(): boolean {
        return this.selected === this.default;
    }

    get isSelected(): boolean {
        return !!this.items.find(item => item === this.selected);
    }

    get isLastVisible(): boolean {
        return this.selected === this.items[this.items.length - 1];
    }

    get opposite(): TuiDayRangePeriod | null {
        if (!this.isSelected) {
            return null;
        }

        switch (this.selected) {
            case this.default:
                return null;
            case this.items[1]:
                return this.items[2];
            case this.items[2]:
                return this.items[3];
            case this.items[3]:
                return null;
            default:
                return null;
        }
    }

    reset(): void {
        this.selected = this.default;
    }

    toggle(): void {
        this.selected = this.opposite;
    }
}
