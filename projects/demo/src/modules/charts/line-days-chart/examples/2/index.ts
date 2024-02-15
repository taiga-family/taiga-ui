import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_IS_E2E,
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    tuiPure,
    TuiTypedMapper,
    TuiTypedMatcher,
} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';

@Component({
    selector: 'tui-line-days-chart-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiLineDaysChartExample2 {
    private readonly isE2E = inject(TUI_IS_E2E);

    data = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({month: 5}),
    );

    show = this.data;

    days: ReadonlyArray<ReadonlyArray<[TuiDay, number]>> = this.computeArrays(this.data);

    readonly maxLength: TuiDayLike = {month: 6};

    get range(): TuiDayRange {
        return this.computeRange(this.show);
    }

    @tuiPure
    getWidth({from, to}: TuiDayRange): number {
        return TuiDay.lengthBetween(from, to);
    }

    @tuiPure
    getDate(day: TuiDay | number, date: TuiDay): TuiDay {
        return day instanceof TuiDay ? day : date.append({day});
    }

    readonly filter: TuiTypedMatcher<[readonly [TuiDay, number], TuiDayRange]> = (
        [day],
        {from, to},
    ) => day.daySameOrAfter(from) && day.daySameOrBefore(to);

    readonly toNumbers: TuiTypedMapper<
        [ReadonlyArray<readonly [TuiDay, number]>, TuiDayRange],
        readonly TuiPoint[]
    > = (days, {from}) =>
        days.map(([day, value]) => [TuiDay.lengthBetween(from, day), value]);

    onDataChange(data: TuiDayRange): void {
        this.days = this.computeArrays(data);
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

    // Random data generation
    @tuiPure
    private computeData(
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

    private computeArrays(
        data: TuiDayRange,
    ): ReadonlyArray<ReadonlyArray<[TuiDay, number]>> {
        return [
            this.computeData(data, 100),
            this.computeData(data, 75),
            this.computeData(data, 50),
        ];
    }
}
