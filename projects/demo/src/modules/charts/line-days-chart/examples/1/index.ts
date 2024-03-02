import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_IS_E2E,
    TuiDay,
    type TuiDayLike,
    TuiDayRange,
    TuiMonth,
    tuiPure,
    type TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core';
import {map, type Observable} from 'rxjs';

@Component({
    selector: 'tui-line-days-chart-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiLineDaysChartExample1 {
    private readonly isE2E = inject(TUI_IS_E2E);
    private readonly months$ = inject(TUI_MONTHS);

    protected range = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1}),
    );

    protected readonly maxLength: TuiDayLike = {month: 12};

    protected readonly xStringify$: Observable<TuiStringHandler<TuiDay>> =
        this.months$.pipe(
            map(
                months =>
                    ({month, day}) =>
                        `${months[month]}, ${day}`,
            ),
        );

    protected get value(): ReadonlyArray<[TuiDay, number]> {
        return this.computeValue(this.range);
    }

    @tuiPure
    protected computeLabels$({from, to}: TuiDayRange): Observable<readonly string[]> {
        return this.months$.pipe(
            map(months =>
                Array.from(
                    {length: TuiMonth.lengthBetween(from, to) + 1},
                    (_, i) => months[from.append({month: i}).month],
                ),
            ),
        );
    }

    protected readonly yStringify: TuiStringHandler<number> = y =>
        `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`;

    @tuiPure
    private computeValue({from, to}: TuiDayRange): ReadonlyArray<[TuiDay, number]> {
        return new Array(TuiDay.lengthBetween(from, to) + 1)
            .fill(0)
            .reduce<
                ReadonlyArray<[TuiDay, number]>
            >((array, _, i) => [...array, [from.append({day: i}), this.isE2E ? 100 : (i ? array[i - 1][1] : 100) + Math.random() * 10 - 5]], []);
    }
}
