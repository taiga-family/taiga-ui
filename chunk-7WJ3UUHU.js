import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';
import {TuiCalendar, type TuiMarkerHandler} from '@taiga-ui/core';

const TWO_DOTS: [string, string] = [
    'var(--tui-background-accent-1)',
    'var(--tui-status-info)',
];
const ONE_DOT: [string] = ['var(--tui-status-positive)'];

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDayRange | null = null;

    protected firstMonth = TuiMonth.currentLocal();

    protected middleMonth = TuiMonth.currentLocal().append({month: 1});

    protected lastMonth = TuiMonth.currentLocal().append({month: 2});

    protected hoveredItem: TuiDay | null = null;

    protected readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>
        // Attention: do not create new arrays in handler, use constants instead
        day.day % 2 === 0 ? TWO_DOTS : ONE_DOT;

    protected onDayClick(day: TuiDay): void {
        if (!this.value?.isSingleDay) {
            this.value = new TuiDayRange(day, day);
        }

        this.value = TuiDayRange.sort(this.value.from, day);
    }

    protected onMonthChangeFirst(month: TuiMonth): void {
        this.firstMonth = month;
        this.middleMonth = month.append({month: 1});
        this.lastMonth = month.append({month: 2});
    }

    protected onMonthChangeMiddle(month: TuiMonth): void {
        this.firstMonth = month.append({month: -1});
        this.middleMonth = month;
        this.lastMonth = month.append({month: 1});
    }

    protected onMonthChangeLast(month: TuiMonth): void {
        this.firstMonth = month.append({month: -2});
        this.middleMonth = month.append({month: -1});
        this.lastMonth = month;
    }
}
`;export{e as default};
