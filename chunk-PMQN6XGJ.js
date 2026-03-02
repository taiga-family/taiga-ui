import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiLink} from '@taiga-ui/core';
import {TuiCalendarRange, TuiDayRangePeriod} from '@taiga-ui/kit';

const today = TuiDay.currentLocal();
const startOfWeek = today.append({day: -today.dayOfWeek()});
const startOfMonth = today.append({day: 1 - today.day});
const startOfQuarter = startOfMonth.append({month: -(startOfMonth.month % 3)});

@Component({
    imports: [TuiCalendarRange, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        new TuiDayRangePeriod(
            new TuiDayRange(today.append({day: -30}), today),
            'Default',
        ),
        new TuiDayRangePeriod(new TuiDayRange(startOfWeek, today), 'Week'),
        new TuiDayRangePeriod(new TuiDayRange(startOfMonth, today), 'Month'),
        new TuiDayRangePeriod(new TuiDayRange(startOfQuarter, today), 'Quarter'),
    ];

    protected selected: TuiDayRangePeriod | null = this.default;
    protected value: TuiDayRange | null = this.default.range;

    public get default(): TuiDayRangePeriod {
        return this.items[0]!;
    }

    public get isDefault(): boolean {
        return this.selected === this.default;
    }

    public get isSelected(): boolean {
        return !!this.items.find((item) => item === this.selected);
    }

    public get isLastVisible(): boolean {
        return this.selected === this.items[this.items.length - 1];
    }

    public get opposite(): TuiDayRangePeriod | null {
        if (!this.isSelected) {
            return null;
        }

        switch (this.selected) {
            case this.default:
                return null;
            case this.items[1]:
                return this.items[2]!;
            case this.items[2]:
                return this.items[3]!;
            case this.items[3]:
                return null;
            default:
                return null;
        }
    }

    public onValue(value: TuiDayRange | null): void {
        this.value = value;
    }

    public reset(): void {
        this.selected = this.default;
        this.value = this.selected.range;
    }

    public toggle(): void {
        this.selected = this.opposite;
        this.value = this.selected?.range ?? null;
    }
}
`;export{a as default};
