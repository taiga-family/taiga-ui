import {tuiAssert} from '@taiga-ui/cdk/classes';
import {TuiDayOfWeek, TuiMonthNumber} from '@taiga-ui/cdk/enums';
import {
    InvalidDayException,
    InvalidMonthException,
    InvalidYearException,
} from '@taiga-ui/cdk/exceptions';
import {TuiDayLike} from '@taiga-ui/cdk/interfaces';
import {TuiDateMode} from '@taiga-ui/cdk/types';
import {inRange, normalizeToIntNumber} from '@taiga-ui/cdk/utils/math';

import {DATE_FILLER_LENGTH} from './date-fillers';
import {DAYS_IN_WEEK, MIN_DAY, MONTHS_IN_YEAR} from './date-time';
import {TuiMonth} from './month';
import {TuiYear} from './year';

// TODO: Localized formatting
/**
 * Immutable date object, consisting of day, month and year
 */
export class TuiDay extends TuiMonth {
    constructor(year: number, month: number, readonly day: number) {
        super(year, month);
        tuiAssert.assert(TuiDay.isValidDay(year, month, day));
    }

    /**
     * Creates {@link TuiDay} from native {@link Date} based on local time zone
     */
    static fromLocalNativeDate(date: Date): TuiDay {
        return new TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
    }

    /**
     * Creates {@link TuiDay} from native {@link Date} using UTC
     */
    static fromUtcNativeDate(date: Date): TuiDay {
        return new TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    }

    /**
     * Check validity of year, month and day
     *
     * @param year
     * @param month
     * @param day
     * @return boolean validity
     */
    static isValidDay(year: number, month: number, day: number): boolean {
        return (
            TuiMonth.isValidMonth(year, month) &&
            Number.isInteger(day) &&
            inRange(
                day,
                MIN_DAY,
                TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1,
            )
        );
    }

    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Calculated day on a calendar grid
     *
     * @param month
     * @param row row in a calendar
     * @param col column in a calendar
     * @return resulting day on these coordinates (could exceed passed month)
     */
    static getDayFromMonthRowCol(month: TuiMonth, row: number, col: number): TuiDay {
        tuiAssert.assert(Number.isInteger(row));
        tuiAssert.assert(inRange(row, 0, 6));
        tuiAssert.assert(Number.isInteger(col));
        tuiAssert.assert(inRange(col, 0, DAYS_IN_WEEK));

        let day = row * DAYS_IN_WEEK + col - month.monthStartDaysOffset + 1;

        if (day > month.daysCount) {
            day = day - month.daysCount;
            month = month.append({month: 1});
        }

        if (day <= 0) {
            month = month.append({month: -1});
            day = month.daysCount + day;
        }

        return new TuiDay(month.year, month.month, day);
    }

    /**
     * Current day based on local time zone
     */
    static currentLocal(): TuiDay {
        const nativeDate = new Date();
        const year = nativeDate.getFullYear();
        const month = nativeDate.getMonth();
        const day = nativeDate.getDate();

        return new TuiDay(year, month, day);
    }

    /**
     * Returns current day based on UTC
     */
    static currentUtc(): TuiDay {
        const nativeDate = new Date();
        const year = nativeDate.getUTCFullYear();
        const month = nativeDate.getUTCMonth();
        const day = nativeDate.getUTCDate();

        return new TuiDay(year, month, day);
    }

    /**
     * Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
     *
     * @param year any year value, including invalid
     * @param month any month value, including invalid (months start with 0)
     * @param day any day value, including invalid
     * @return normalized date
     */
    static normalizeOf(year: number, month: number, day: number): TuiDay {
        const normalizedYear = TuiYear.normalizeYearPart(year);
        const normalizedMonth = TuiMonth.normalizeMonthPart(month);
        const normalizedDay = TuiDay.normalizeDayPart(
            day,
            normalizedMonth,
            normalizedYear,
        );

        return new TuiDay(normalizedYear, normalizedMonth, normalizedDay);
    }

    static lengthBetween(from: TuiDay, to: TuiDay): number {
        return Math.round(
            (to.toLocalNativeDate().getTime() - from.toLocalNativeDate().getTime()) /
                (1000 * 60 * 60 * 24),
        );
    }

    static parseRawDateString(
        date: string,
        dateMode: TuiDateMode = `DMY`,
    ): {day: number; month: number; year: number} {
        tuiAssert.assert(
            date.length === DATE_FILLER_LENGTH,
            `[parseRawDateString]: wrong date string length`,
        );

        switch (dateMode) {
            case `YMD`:
                return {
                    day: parseInt(date.slice(8, 10), 10),
                    month: parseInt(date.slice(5, 7), 10) - 1,
                    year: parseInt(date.slice(0, 4), 10),
                };

            case `MDY`:
                return {
                    day: parseInt(date.slice(3, 5), 10),
                    month: parseInt(date.slice(0, 2), 10) - 1,
                    year: parseInt(date.slice(6, 10), 10),
                };

            default:
            case `DMY`:
                return {
                    day: parseInt(date.slice(0, 2), 10),
                    month: parseInt(date.slice(3, 5), 10) - 1,
                    year: parseInt(date.slice(6, 10), 10),
                };
        }
    }

    // TODO: Move month and year related code corresponding classes
    /**
     * Parsing a string with date with normalization
     *
     * @param rawDate date string
     * @param dateMode date format of the date string (DMY | MDY | YMD)
     * @return normalized date
     */
    static normalizeParse(rawDate: string, dateMode: TuiDateMode = `DMY`): TuiDay {
        const {day, month, year} = this.parseRawDateString(rawDate, dateMode);

        return TuiDay.normalizeOf(year, month, day);
    }

    /**
     * Parsing a date stringified in a toJSON format
     * @param yearMonthDayString date string in format of YYYY-MM-DD
     * @return date
     * @throws exceptions if any part of the date is invalid
     */
    static jsonParse(yearMonthDayString: string): TuiDay {
        const {day, month, year} = this.parseRawDateString(yearMonthDayString, `YMD`);

        if (!TuiYear.isValidYear(year)) {
            throw new InvalidYearException(year);
        }

        if (!TuiMonth.isValidMonth(year, month)) {
            throw new InvalidMonthException(month);
        }

        if (
            !Number.isInteger(day) ||
            !inRange(
                day,
                MIN_DAY,
                TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1,
            )
        ) {
            throw new InvalidDayException(day);
        }

        return new TuiDay(year, month, day);
    }

    protected static normalizeDayPart(day: number, month: number, year: number): number {
        tuiAssert.assert(TuiMonth.isValidMonth(year, month));

        const monthDaysCount = TuiMonth.getMonthDaysCount(
            month,
            TuiYear.isLeapYear(year),
        );

        return normalizeToIntNumber(day, 1, monthDaysCount);
    }

    get formattedDayPart(): string {
        return String(this.day).padStart(2, `0`);
    }

    /**
     * @deprecated use {@link getFormattedDay} instead
     * Formatted whole date
     */
    get formattedDay(): string {
        return `${this.formattedDayPart}.${this.formattedMonth}`;
    }

    get isWeekend(): boolean {
        const dayOfWeek = this.dayOfWeek(false);

        return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
    }

    /**
     * Returns day of week
     *
     * @param startFromMonday whether week starts from Monday and not from Sunday
     * @return day of week (from 0 to 6)
     */
    dayOfWeek(startFromMonday: boolean = true): number {
        const dayOfWeek = startFromMonday
            ? this.toLocalNativeDate().getDay() - 1
            : this.toLocalNativeDate().getDay();

        return dayOfWeek < 0 ? 6 : dayOfWeek;
    }

    /**
     * Passed date is after current
     */
    dayBefore(another: TuiDay): boolean {
        return (
            this.monthBefore(another) ||
            (this.monthSame(another) && this.day < another.day)
        );
    }

    /**
     * Passed date is after or equals to current
     */
    daySameOrBefore(another: TuiDay): boolean {
        return (
            this.monthBefore(another) ||
            (this.monthSame(another) && this.day <= another.day)
        );
    }

    /**
     * Passed date is the same as current
     */
    daySame(another: TuiDay): boolean {
        return this.monthSame(another) && this.day === another.day;
    }

    /**
     * Passed date is either before or the same as current
     */
    daySameOrAfter(another: TuiDay): boolean {
        return (
            this.monthAfter(another) ||
            (this.monthSame(another) && this.day >= another.day)
        );
    }

    /**
     * Passed date is before current
     */
    dayAfter(another: TuiDay): boolean {
        return (
            this.monthAfter(another) ||
            (this.monthSame(another) && this.day > another.day)
        );
    }

    /**
     * Clamping date between two limits
     *
     * @param min
     * @param max
     * @return clamped date
     */
    dayLimit(min: TuiDay | null, max: TuiDay | null): TuiDay {
        if (min !== null && this.dayBefore(min)) {
            return min;
        }

        if (max !== null && this.dayAfter(max)) {
            return max;
        }

        return this;
    }

    // TODO: 3.0 Consider removing `backwards` option
    /**
     * Immutably alters current day by passed offset
     *
     * If resulting month has more days than original one, date is rounded to the maximum day
     * in the resulting month. Offset of days will be calculated based on the resulted year and month
     * to not interfere with parent classes methods
     *
     * @param offset
     * @param backwards shift date backwards
     * @return new date object as a result of offsetting current
     */
    append(
        {year = 0, month = 0, day = 0}: TuiDayLike,
        backwards: boolean = false,
    ): TuiDay {
        if (backwards) {
            year *= -1;
            month *= -1;
            day *= -1;
        }

        const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
        let years = Math.floor(totalMonths / MONTHS_IN_YEAR);
        let months = totalMonths % MONTHS_IN_YEAR;

        let days =
            Math.min(
                this.day,
                TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years)),
            ) + day;

        while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
            days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));

            if (months === TuiMonthNumber.December) {
                years++;
                months = TuiMonthNumber.January;
            } else {
                months++;
            }
        }

        while (days < MIN_DAY) {
            if (months === TuiMonthNumber.January) {
                years--;
                months = TuiMonthNumber.December;
            } else {
                months--;
            }

            days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
        }

        return new TuiDay(years, months, days);
    }

    /**
     * Returns formatted whole date
     */
    getFormattedDay(dateFormat: TuiDateMode, separator: string): string {
        tuiAssert.assert(
            separator.length === 1,
            `Separator should consist of only 1 symbol`,
        );

        const dd = this.formattedDayPart;
        const mm = this.formattedMonthPart;
        const yyyy = this.formattedYear;

        switch (dateFormat) {
            case `YMD`:
                return `${yyyy}${separator}${mm}${separator}${dd}`;
            case `MDY`:
                return `${mm}${separator}${dd}${separator}${yyyy}`;
            case `DMY`:
            default:
                return `${dd}${separator}${mm}${separator}${yyyy}`;
        }
    }

    toString(dateFormat: TuiDateMode = `DMY`, separator: string = `.`): string {
        return this.getFormattedDay(dateFormat, separator);
    }

    toJSON(): string {
        return `${super.toJSON()}-${this.formattedDayPart}`;
    }

    /**
     * Returns native {@link Date} based on local time zone
     */
    toLocalNativeDate(): Date {
        return new Date(this.year, this.month, this.day);
    }

    /**
     * Returns native {@link Date} based on UTC
     */
    toUtcNativeDate(): Date {
        return new Date(Date.UTC(this.year, this.month, this.day));
    }
}
