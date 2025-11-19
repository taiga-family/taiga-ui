import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineDaysChart} from '@taiga-ui/addon-charts';
import {
    TUI_IS_E2E,
    TuiDay,
    type TuiDayLike,
    TuiDayRange,
    TuiMonth,
    tuiPure,
    type TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';
import {map, type Observable} from 'rxjs';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        TuiAxes,
        TuiInputDateRange,
        TuiLineDaysChart,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(TUI_IS_E2E);
    private readonly months$ = toObservable(inject(TUI_MONTHS));

    protected range = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1}),
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

    protected get value(): ReadonlyArray<[TuiDay, number]> {
        return this.computeValue(this.range);
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
        const length = TuiDay.lengthBetween(from, to) + 1;

        return Array.from({length}).reduce<ReadonlyArray<[TuiDay, number]>>(
            (array, _, i) => [
                ...array,
                [
                    from.append({day: i}),
                    this.isE2E
                        ? 100
                        : (i ? (array[i - 1]?.[1] ?? 0) : 100) + Math.random() * 10 - 5,
                ],
            ],
            [],
        );
    }
}
