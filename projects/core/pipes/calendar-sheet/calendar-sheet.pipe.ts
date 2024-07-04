import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiDay, TuiMonth} from '@taiga-ui/cdk/date-time';
import {DAYS_IN_WEEK} from '@taiga-ui/cdk/date-time';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core/tokens';

import {getDayFromMonthRowCol} from './utils';

const CALENDAR_ROWS_COUNT = 6;

@Pipe({
    standalone: true,
    name: 'tuiCalendarSheet',
})
export class TuiCalendarSheetPipe implements PipeTransform {
    private readonly firstDayOfWeek = inject(TUI_FIRST_DAY_OF_WEEK);
    private currentMonth: TuiMonth | null = null;
    private currentSheet: ReadonlyArray<readonly TuiDay[]> = [];

    public transform(
        month: TuiMonth,
        showAdjacentDays = false,
    ): ReadonlyArray<readonly TuiDay[]> {
        if (this.currentMonth?.monthSame(month)) {
            return this.currentSheet;
        }

        const sheet: Array<readonly TuiDay[]> = [];

        for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
            const row: TuiDay[] = [];

            for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
                const day = getDayFromMonthRowCol({
                    month,
                    rowIndex,
                    colIndex,
                    firstDayOfWeek: this.firstDayOfWeek,
                });

                const isPrevMonthDay = (day: TuiDay, relativeToMonth = month): boolean =>
                    day.year < relativeToMonth.year || day.month < relativeToMonth.month;

                const isNextMonthDay = (day: TuiDay, relativeToMonth = month): boolean =>
                    day.year > relativeToMonth.year || day.month > relativeToMonth.month;

                if (isPrevMonthDay(day) && !showAdjacentDays) {
                    continue;
                }

                if (isNextMonthDay(day) && !showAdjacentDays) {
                    break;
                }

                row.push(day);
            }

            sheet.push(row);
        }

        this.currentSheet = sheet.filter((row) => row.length);
        this.currentMonth = month;

        return this.currentSheet;
    }
}
