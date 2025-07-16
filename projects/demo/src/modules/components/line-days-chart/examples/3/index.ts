import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineDaysChart} from '@taiga-ui/addon-charts';
import type {TuiDayLike, TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_IS_E2E, TuiDay, TuiDayRange, TuiMonth, tuiPure} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgIf,
        TuiAxes,
        TuiInputDateRangeModule,
        TuiLineDaysChart,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(TUI_IS_E2E);
    private readonly months$ = inject(TUI_MONTHS);

    // Data range - only July data
    protected dataRange = new TuiDayRange(
        new TuiDay(2023, 6, 1),  // July 1st
        new TuiDay(2023, 6, 31), // July 31st
    );

    // Custom range - April to September to demonstrate the feature
    protected customRange = new TuiDayRange(
        new TuiDay(2023, 3, 1),  // April 1st
        new TuiDay(2023, 8, 30), // September 30th
    );

    protected readonly maxLength: TuiDayLike = {month: 12};

    protected readonly xStringify$: Observable<TuiStringHandler<TuiDay>> =
        this.months$.pipe(
            map(
                (months) =>
                    ({month, day}) =>
                        `${months[month]}, ${day}`,
            ),
        );

    // Generate data only for July (sparse data)
    protected get value(): ReadonlyArray<[TuiDay, number]> {
        return this.computeValue(this.dataRange);
    }

    @tuiPure
    protected computeLabels$({
        from,
        to,
    }: TuiDayRange): Observable<ReadonlyArray<string | null>> {
        return this.months$.pipe(
            map((months) => [
                ...Array.from(
                    {length: TuiMonth.lengthBetween(from, to) + 1},
                    (_, i) => months[from.append({month: i}).month] ?? '',
                ),
                null,
            ]),
        );
    }

    protected readonly yStringify: TuiStringHandler<number> = (y) =>
        `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`;

    @tuiPure
    private computeValue({from, to}: TuiDayRange): ReadonlyArray<[TuiDay, number]> {
        // Generate sparse data only for some days in July
        const julyData: [TuiDay, number][] = [
            [new TuiDay(2023, 6, 5), 100],
            [new TuiDay(2023, 6, 10), 120],
            [new TuiDay(2023, 6, 15), 150],
            [new TuiDay(2023, 6, 20), 130],
            [new TuiDay(2023, 6, 25), 140],
        ];
        
        return julyData;
    }
}