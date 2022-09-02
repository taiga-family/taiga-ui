import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    TuiMonth,
    tuiPure,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: `tui-line-days-chart-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiLineDaysChartExample1 {
    range = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1}),
    );

    readonly maxLength: TuiDayLike = {month: 12};

    readonly xStringify$: Observable<TuiStringHandler<TuiDay>> = this.months$.pipe(
        map(
            months =>
                ({month, day}) =>
                    `${months[month]}, ${day}`,
        ),
    );

    constructor(
        @Inject(TUI_MONTHS) private readonly months$: Observable<readonly string[]>,
    ) {}

    get value(): ReadonlyArray<[TuiDay, number]> {
        return this.computeValue(this.range);
    }

    @tuiPure
    computeLabels$({from, to}: TuiDayRange): Observable<readonly string[]> {
        return this.months$.pipe(
            map(months =>
                Array.from(
                    {length: TuiMonth.lengthBetween(from, to) + 1},
                    (_, i) => months[from.append({month: i}).month],
                ),
            ),
        );
    }

    readonly yStringify: TuiStringHandler<number> = y =>
        `${(10 * y).toLocaleString(`en-US`, {maximumFractionDigits: 0})} $`;

    @tuiPure
    private computeValue({from, to}: TuiDayRange): ReadonlyArray<[TuiDay, number]> {
        return new Array(TuiDay.lengthBetween(from, to) + 1)
            .fill(0)
            .reduce<ReadonlyArray<[TuiDay, number]>>(
                (array, _, i) => [
                    ...array,
                    [
                        from.append({day: i}),
                        (i ? array[i - 1][1] : 100) + Math.random() * 10 - 5,
                    ],
                ],
                [],
            );
    }
}
