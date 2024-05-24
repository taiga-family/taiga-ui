import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiAxesComponent,
    TuiLineChartComponent,
    TuiLineDaysChartComponent,
    TuiLineDaysChartHintDirective,
} from '@taiga-ui/addon-charts';
import type {TuiDayLike, TuiMapper, TuiMatcher} from '@taiga-ui/cdk';
import {
    TUI_IS_E2E,
    TuiDay,
    TuiDayRange,
    TuiFilterPipe,
    TuiMapperPipe,
    TuiMonth,
    tuiPure,
} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import {TUI_MONTHS, TuiNotificationComponent} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {map, of} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        TuiNotificationComponent,
        TuiInputDateRangeModule,
        FormsModule,
        TuiAxesComponent,
        NgForOf,
        NgIf,
        AsyncPipe,
        TuiLineDaysChartHintDirective,
        TuiLineDaysChartComponent,
        TuiFilterPipe,
        TuiLineChartComponent,
        TuiMapperPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleComponent {
    private readonly isE2E = inject(TUI_IS_E2E);
    private readonly months$ = inject(TUI_MONTHS);

    protected data = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({month: 5}),
    );

    protected show = this.data;

    protected days = this.random(this.data);

    protected readonly maxLength: TuiDayLike = {month: 6};

    protected get range(): TuiDayRange {
        return this.computeRange(this.show);
    }

    @tuiPure
    protected getWidth({from, to}: TuiDayRange): number {
        return TuiDay.lengthBetween(from, to);
    }

    @tuiPure
    protected getDate(day: TuiDay | number, date: TuiDay): TuiDay {
        return day instanceof TuiDay ? day : date.append({day});
    }

    @tuiPure
    protected labels({from, to}: TuiDayRange): Observable<readonly string[]> {
        const length = TuiDay.lengthBetween(from, to);

        if (length > 90) {
            return this.months$.pipe(
                map(months =>
                    Array.from(
                        {length: TuiMonth.lengthBetween(from, to) + 1},
                        (_, i) => months[from.append({month: i}).month],
                    ),
                ),
            );
        }

        const range = Array.from({length}, (_, day) => from.append({day}));
        const mondays = onlyMondays(range);
        const days = range.map(String);

        if (length > 60) {
            return of(even(mondays));
        }

        if (length > 14) {
            return of(mondays);
        }

        if (length > 7) {
            return of(even(days));
        }

        return of(days);
    }

    protected readonly filter: TuiMatcher<[readonly [TuiDay, number], TuiDayRange]> = (
        [day],
        {from, to},
    ) => day.daySameOrAfter(from) && day.daySameOrBefore(to);

    protected readonly toNumbers: TuiMapper<
        [ReadonlyArray<readonly [TuiDay, number]>, TuiDayRange],
        readonly TuiPoint[]
    > = (days, {from}) =>
        days.map(([day, value]) => [TuiDay.lengthBetween(from, day), value]);

    protected onDataChange(data: TuiDayRange): void {
        this.days = this.random(data);
    }

    @tuiPure
    private computeRange(range: TuiDayRange): TuiDayRange {
        const {from, to} = range;
        const length = TuiDay.lengthBetween(from, to);
        const dayOfWeekFrom = from.dayOfWeek();
        const dayOfWeekTo = to.dayOfWeek();
        const mondayFrom = dayOfWeekFrom ? from.append({day: 7 - dayOfWeekFrom}) : from;
        const mondayTo = dayOfWeekTo ? to.append({day: 7 - dayOfWeekTo}) : to;
        const mondaysLength = TuiDay.lengthBetween(mondayFrom, mondayTo);

        if (length > 90) {
            return range;
        }

        if (length > 60) {
            return new TuiDayRange(
                mondayFrom,
                mondayTo.append({day: mondaysLength % 14}),
            );
        }

        if (length > 14) {
            return new TuiDayRange(mondayFrom, mondayTo);
        }

        return new TuiDayRange(from, to.append({day: length % 2}));
    }

    @tuiPure
    private generateRandomData(
        {from, to}: TuiDayRange,
        initial: number,
    ): ReadonlyArray<[TuiDay, number]> {
        return new Array(TuiDay.lengthBetween(from, to) + 1)
            .fill(0)
            .reduce<ReadonlyArray<[TuiDay, number]>>(
                (array, _, i) => [
                    ...array,
                    [
                        from.append({day: i}),
                        this.isE2E
                            ? initial
                            : Math.max(
                                  (i ? array[i - 1][1] : initial) +
                                      Math.random() * 10 -
                                      5,
                                  0,
                              ),
                    ],
                ],
                [],
            )
            .filter(([day]) => day.dayOfWeek() < 5);
    }

    private random(data: TuiDayRange): ReadonlyArray<ReadonlyArray<[TuiDay, number]>> {
        return [
            this.generateRandomData(data, 100),
            this.generateRandomData(data, 75),
            this.generateRandomData(data, 50),
        ];
    }
}

function onlyMondays(range: readonly TuiDay[]): readonly string[] {
    return range.filter(day => !day.dayOfWeek()).map(String);
}

function even<T>(array: readonly T[]): readonly T[] {
    return array.filter((_, i) => !(i % 2));
}
