/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {DAYS_IN_WEEK, TuiDay, type TuiMonth} from '@taiga-ui/cdk/date-time';
import {tuiInRange} from '@taiga-ui/cdk/utils/math';

/**
 * Computes day of week offset of the beginning of the month
 */
const getMonthStartDaysOffset = (
    month: TuiMonth,
    firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6,
): number => {
    const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();

    return startMonthOffsetFromSunday >= firstDayOfWeek
        ? startMonthOffsetFromSunday - firstDayOfWeek
        : DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
};

/**
 * Calculated day on a calendar grid
 * @return resulting day on these coordinates (could exceed passed month)
 */
export const getDayFromMonthRowCol = ({
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
}): TuiDay => {
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
};
