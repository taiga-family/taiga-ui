/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {inject, Pipe, type PipeTransform} from '@angular/core';
import {DAYS_IN_WEEK, TuiDay, type TuiMonth} from '@taiga-ui/cdk/date-time';
import {tuiInRange} from '@taiga-ui/cdk/utils/math';

import {TUI_CALENDAR_OPTIONS} from './calendar.options';

const CALENDAR_ROWS_COUNT = 6;

@Pipe({
    name: 'tuiCalendarSheet',
})
export class TuiCalendarSheetPipe implements PipeTransform {
    private readonly options = inject(TUI_CALENDAR_OPTIONS);
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
                    firstDayOfWeek: this.options.weekStart,
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

/**
 * Computes day of week offset of the beginning of the month
 */
function getMonthStartDaysOffset(
    month: TuiMonth,
    firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6,
): number {
    const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();

    return startMonthOffsetFromSunday >= firstDayOfWeek
        ? startMonthOffsetFromSunday - firstDayOfWeek
        : DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
}

/**
 * Calculated day on a calendar grid
 * @return resulting day on these coordinates (could exceed passed month)
 */
function getDayFromMonthRowCol({
    month,
    rowIndex,
    colIndex,
    firstDayOfWeek,
}: {
    /**
     * column in a calendar
     */
    colIndex: number;
    /**
     * first day of the week index (Sunday - 0, Saturday - 6)
     */
    firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    month: TuiMonth;
    /**
     * row in a calendar
     */
    rowIndex: number;
}): TuiDay {
    ngDevMode && console.assert(Number.isInteger(rowIndex));
    ngDevMode && console.assert(tuiInRange(rowIndex, 0, 6));
    ngDevMode && console.assert(Number.isInteger(colIndex));
    ngDevMode && console.assert(tuiInRange(colIndex, 0, DAYS_IN_WEEK));

    let day =
        rowIndex * DAYS_IN_WEEK +
        colIndex -
        getMonthStartDaysOffset(month, firstDayOfWeek) +
        1;

    if (day > month.daysCount) {
        day -= month.daysCount;
        month = month.append({month: 1});
    }

    if (day <= 0) {
        month = month.append({month: -1});
        day = month.daysCount + day;
    }

    return new TuiDay(month.year, month.month, day);
}
