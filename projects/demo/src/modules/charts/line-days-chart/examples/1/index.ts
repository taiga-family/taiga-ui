import {Component, Inject} from '@angular/core';
import {
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    TuiMonth,
    tuiPure,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

// @dynamic
@Component({
    selector: 'tui-line-days-chart-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiLineDaysChartExample1 {
    range = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1}),
    );

    readonly maxLength: TuiDayLike = {month: 12};

    readonly xStringify: TuiStringHandler<TuiDay> = ({month, day}) =>
        `${this.months[month]}, ${day}`;

    readonly yStringify: TuiStringHandler<number> = y =>
        `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`;

    constructor(@Inject(TUI_MONTHS) private readonly months: readonly string[]) {}

    get labels(): readonly string[] {
        return this.computeLabels(this.range, this.months);
    }

    get value(): ReadonlyArray<[TuiDay, number]> {
        return this.computeValue(this.range);
    }

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

    @tuiPure
    private computeLabels(
        {from, to}: TuiDayRange,
        months: readonly string[],
    ): readonly string[] {
        return Array.from(
            {length: TuiMonth.lengthBetween(from, to) + 1},
            (_, i) => months[from.append({month: i}).month],
        );
    }
}
