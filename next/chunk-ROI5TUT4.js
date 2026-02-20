import"./chunk-HU6DUUP4.js";var t=`import {Component, computed, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import {
    TuiDay,
    type TuiDayLike,
    TuiDayRange,
    TuiFilterPipe,
    type TuiMapper,
    TuiMapperPipe,
    type TuiMatcher,
    TuiMonth,
} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiNotification, type TuiPoint, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAxes,
        TuiFilterPipe,
        TuiInputDateRange,
        TuiLineChart,
        TuiLineDaysChart,
        TuiLineDaysChartHint,
        TuiMapperPipe,
        TuiNotification,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(WA_IS_E2E);
    private readonly months = inject(TUI_MONTHS);

    protected readonly data = signal(
        new TuiDayRange(TuiDay.currentLocal(), TuiDay.currentLocal().append({month: 5})),
    );

    protected readonly show = signal(this.data());
    protected readonly days = computed(() => this.random(this.data()));
    protected readonly maxLength: TuiDayLike = {month: 6};
    protected readonly range = computed(() => {
        const range = this.show();
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
    });

    protected readonly labels = computed(() => {
        const {from, to} = this.show();
        const length = TuiDay.lengthBetween(from, to);
        const months = this.months();

        if (length > 90) {
            return [
                ...Array.from(
                    {length: TuiMonth.lengthBetween(from, to) + 1},
                    (_, i) => months[from.append({month: i}).month] ?? '',
                ),
                '',
            ];
        }

        const range = Array.from({length}, (_, day) => from.append({day}));
        const mondays = onlyMondays(range);
        const days = range.map(String);

        if (length > 60) {
            return [...even(mondays), ''];
        }

        if (length > 14) {
            return [...mondays, ''];
        }

        if (length > 7) {
            return [...even(days), ''];
        }

        return [...days, ''];
    });

    protected getWidth({from, to}: TuiDayRange): number {
        return TuiDay.lengthBetween(from, to);
    }

    protected getDate(day: TuiDay | number, date: TuiDay): TuiDay {
        return day instanceof TuiDay ? day : date.append({day});
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

    private generateRandomData(
        {from, to}: TuiDayRange,
        initial: number,
    ): ReadonlyArray<[TuiDay, number]> {
        return Array.from({length: TuiDay.lengthBetween(from, to) + 1})
            .reduce<ReadonlyArray<[TuiDay, number]>>(
                (array, _, i) => [
                    ...array,
                    [
                        from.append({day: i}),
                        this.isE2E
                            ? initial
                            : Math.max(
                                  (i ? (array[i - 1]?.[1] ?? 0) : initial) +
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
    return range.filter((day) => !day.dayOfWeek()).map(String);
}

function even<T>(array: readonly T[]): readonly T[] {
    return array.filter((_, i) => !(i % 2));
}
`;export{t as default};
