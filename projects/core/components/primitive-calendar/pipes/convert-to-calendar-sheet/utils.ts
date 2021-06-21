import {
    DAYS_IN_LEAP_YEAR,
    DAYS_IN_NORMAL_YEAR,
    DAYS_IN_WEEK,
    inRange,
    tuiAssert,
    TuiDay,
    TuiDayOfWeek,
    TuiMonth,
    TuiYear,
} from '@taiga-ui/cdk';

/**
 * Returns day of week offset of the beginning of the passed year
 */
const getYearStartDaysOffset = (
    tuiYear: TuiYear,
    firstDayOfWeek: TuiDayOfWeek,
): number => {
    // 01.01.0000 (1y B.C.) => Saturday
    const CALENDAR_START_WEEK_DAY_INDEX = TuiDayOfWeek.Saturday;
    const calendarStartDaysOffset =
        CALENDAR_START_WEEK_DAY_INDEX >= firstDayOfWeek
            ? CALENDAR_START_WEEK_DAY_INDEX - firstDayOfWeek
            : firstDayOfWeek;
    const absoluteLeapYears = tuiYear.absoluteLeapYears;
    const year = tuiYear.year;

    tuiAssert.assert(year >= absoluteLeapYears);
    tuiAssert.assert(absoluteLeapYears >= 0);

    return (
        (absoluteLeapYears * DAYS_IN_LEAP_YEAR +
            (year - absoluteLeapYears) * DAYS_IN_NORMAL_YEAR +
            calendarStartDaysOffset) %
        DAYS_IN_WEEK
    );
};

/**
 * Computes day of week offset of the beginning of the month
 */
const getMonthStartDaysOffset = (
    month: TuiMonth,
    firstDayOfWeek: TuiDayOfWeek,
): number => {
    let result = getYearStartDaysOffset(new TuiYear(month.year), firstDayOfWeek);

    for (let currentMonth = 0; currentMonth <= month.month - 1; currentMonth++) {
        result += TuiMonth.getMonthDaysCount(currentMonth, month.isLeapYear);
    }

    return result % DAYS_IN_WEEK;
};

/*
TODO delete:
 * TuiDay.getDayFromMonthRowCol
 * TuiMonth.monthStartDaysOffset
 * TuiMonth.weeksRowsCount
 * TuiYear.yearStartDaysOffset
 * TuiYear.getYearStartDaysOffset
 */
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
    month: TuiMonth;
    /**
     * row in a calendar
     */
    rowIndex: number;
    /**
     * column in a calendar
     */
    colIndex: number;
    /**
     * first day of the week index (Sunday - 0, Saturday - 6)
     */
    firstDayOfWeek: TuiDayOfWeek;
}): TuiDay => {
    tuiAssert.assert(Number.isInteger(rowIndex));
    tuiAssert.assert(inRange(rowIndex, 0, 6));
    tuiAssert.assert(Number.isInteger(colIndex));
    tuiAssert.assert(inRange(colIndex, 0, DAYS_IN_WEEK));

    let day =
        rowIndex * DAYS_IN_WEEK +
        colIndex -
        getMonthStartDaysOffset(month, firstDayOfWeek) +
        1;

    if (day > month.daysCount) {
        day = day - month.daysCount;
        month = month.append({month: 1});
    }

    if (day <= 0) {
        month = month.append({month: -1});
        day = month.daysCount + day;
    }

    return new TuiDay(month.year, month.month, day);
};
