/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

import {tuiInRange, tuiNormalizeToIntNumber} from '@taiga-ui/cdk/utils/math';

import {DATE_FILLER_LENGTH} from './date-fillers';
import {MIN_DAY, MONTHS_IN_YEAR} from './date-time';
import {TuiDayOfWeek} from './day-of-week';
import {TuiMonth} from './month';
import {TuiMonthNumber} from './month-number';
import {type TuiDateMode, type TuiDayLike} from './types';
import {TuiYear} from './year';

/**
 * Immutable date object, consisting of day, month and year
 */
export class TuiDay extends TuiMonth {
    /**
     * @param year
     * @param month (starting with 0)
     * @param day
     */
    constructor(
        year: number,
        month: number,
        public readonly day: number,
    ) {
        super(year, month);
        ngDevMode && console.assert(TuiDay.isValidDay(year, month, day));
    }

    /**
     * Creates {@link TuiDay} from native {@link Date} based on local time zone
     */
    public static fromLocalNativeDate(date: Date): TuiDay {
        return new TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
    }

    /**
     * Creates {@link TuiDay} from native {@link Date} using UTC
     */
    public static fromUtcNativeDate(date: Date): TuiDay {
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
    public static isValidDay(year: number, month: number, day: number): boolean {
        return (
            TuiMonth.isValidMonth(year, month) &&
            Number.isInteger(day) &&
            tuiInRange(
                day,
                MIN_DAY,
                TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1,
            )
        );
    }

    /**
     * Current day based on local time zone
     */
    public static override currentLocal(): TuiDay {
        const nativeDate = new Date();
        const year = nativeDate.getFullYear();
        const month = nativeDate.getMonth();
        const day = nativeDate.getDate();

        return new TuiDay(year, month, day);
    }

    /**
     * Returns current day based on UTC
     */
    public static override currentUtc(): TuiDay {
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
    public static normalizeOf(year: number, month: number, day: number): TuiDay {
        const normalizedYear = TuiYear.normalizeYearPart(year);
        const normalizedMonth = TuiMonth.normalizeMonthPart(month);
        const normalizedDay = TuiDay.normalizeDayPart(
            day,
            normalizedMonth,
            normalizedYear,
        );

        return new TuiDay(normalizedYear, normalizedMonth, normalizedDay);
    }

    public static override lengthBetween(from: TuiDay, to: TuiDay): number {
        return Math.round(
            (to.toLocalNativeDate().getTime() - from.toLocalNativeDate().getTime()) /
                (1000 * 60 * 60 * 24),
        );
    }

    public static parseRawDateString(
        date: string,
        dateMode: TuiDateMode = 'DMY',
    ): {day: number; month: number; year: number} {
        ngDevMode &&
            console.assert(
                date.length === DATE_FILLER_LENGTH,
                '[parseRawDateString]: wrong date string length',
            );

        switch (dateMode) {
            case 'MDY':
                return {
                    day: parseInt(date.slice(3, 5), 10),
                    month: parseInt(date.slice(0, 2), 10) - 1,
                    year: parseInt(date.slice(6, 10), 10),
                };

            case 'YMD':
                return {
                    day: parseInt(date.slice(8, 10), 10),
                    month: parseInt(date.slice(5, 7), 10) - 1,
                    year: parseInt(date.slice(0, 4), 10),
                };

            case 'DMY':
            default:
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
    public static normalizeParse(rawDate: string, dateMode: TuiDateMode = 'DMY'): TuiDay {
        const {day, month, year} = this.parseRawDateString(rawDate, dateMode);

        return TuiDay.normalizeOf(year, month, day);
    }

    /**
     * Parsing a date stringified in a toJSON format
     * @param yearMonthDayString date string in format of YYYY-MM-DD
     * @return date
     * @throws exceptions if any part of the date is invalid
     */
    public static jsonParse(yearMonthDayString: string): TuiDay {
        const {day, month, year} = this.parseRawDateString(yearMonthDayString, 'YMD');

        if (
            !TuiMonth.isValidMonth(year, month) ||
            !Number.isInteger(day) ||
            !tuiInRange(
                day,
                MIN_DAY,
                TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1,
            )
        ) {
            throw new TuiInvalidDayException(year, month, day);
        }

        return new TuiDay(year, month, day);
    }

    public static normalizeDayPart(day: number, month: number, year: number): number {
        ngDevMode && console.assert(TuiMonth.isValidMonth(year, month));

        const monthDaysCount = TuiMonth.getMonthDaysCount(
            month,
            TuiYear.isLeapYear(year),
        );

        return tuiNormalizeToIntNumber(day, 1, monthDaysCount);
    }

    public get formattedDayPart(): string {
        return String(this.day).padStart(2, '0');
    }

    public get isWeekend(): boolean {
        const dayOfWeek = this.dayOfWeek(false);

        return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
    }

    /**
     * Returns day of week
     *
     * @param startFromMonday whether week starts from Monday and not from Sunday
     * @return day of week (from 0 to 6)
     */
    public dayOfWeek(startFromMonday = true): number {
        const dayOfWeek = startFromMonday
            ? this.toLocalNativeDate().getDay() - 1
            : this.toLocalNativeDate().getDay();

        return dayOfWeek < 0 ? 6 : dayOfWeek;
    }

    /**
     * Passed date is after current
     */
    public dayBefore(another: TuiDay): boolean {
        return (
            this.monthBefore(another) ||
            (this.monthSame(another) && this.day < another.day)
        );
    }

    /**
     * Passed date is after or equal to current
     */
    public daySameOrBefore(another: TuiDay): boolean {
        return (
            this.monthBefore(another) ||
            (this.monthSame(another) && this.day <= another.day)
        );
    }

    /**
     * Passed date is the same as current
     */
    public daySame(another: TuiDay): boolean {
        return this.monthSame(another) && this.day === another.day;
    }

    /**
     * Passed date is either before or the same as current
     */
    public daySameOrAfter(another: TuiDay): boolean {
        return (
            this.monthAfter(another) ||
            (this.monthSame(another) && this.day >= another.day)
        );
    }

    /**
     * Passed date is before current
     */
    public dayAfter(another: TuiDay): boolean {
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
    public dayLimit(min: TuiDay | null, max: TuiDay | null): TuiDay {
        if (min !== null && this.dayBefore(min)) {
            return min;
        }

        if (max !== null && this.dayAfter(max)) {
            return max;
        }

        return this;
    }

    /**
     * Immutably alters current day by passed offset
     *
     * If resulting month has more days than original one, date is rounded to the maximum day
     * in the resulting month. Offset of days will be calculated based on the resulted year and month
     * to not interfere with parent classes methods
     *
     * @param offset
     * @return new date object as a result of offsetting current
     */
    public override append({year = 0, month = 0, day = 0}: TuiDayLike): TuiDay {
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
    public getFormattedDay(dateFormat: TuiDateMode, separator: string): string {
        ngDevMode &&
            console.assert(
                separator.length === 1,
                'Separator should consist of only 1 symbol',
            );

        const dd = this.formattedDayPart;
        const mm = this.formattedMonthPart;
        const yyyy = this.formattedYear;

        switch (dateFormat) {
            case 'MDY':
                return `${mm}${separator}${dd}${separator}${yyyy}`;
            case 'YMD':
                return `${yyyy}${separator}${mm}${separator}${dd}`;
            case 'DMY':
            default:
                return `${dd}${separator}${mm}${separator}${yyyy}`;
        }
    }

    public override toString(dateFormat: TuiDateMode = 'DMY', separator = '.'): string {
        return this.getFormattedDay(dateFormat, separator);
    }

    public override toJSON(): string {
        return `${super.toJSON()}-${this.formattedDayPart}`;
    }

    /**
     * Returns native {@link Date} based on local time zone
     */
    public override toLocalNativeDate(): Date {
        const date = super.toLocalNativeDate();

        date.setDate(this.day);

        return date;
    }

    /**
     * Returns native {@link Date} based on UTC
     */
    public override toUtcNativeDate(): Date {
        return new Date(Date.UTC(this.year, this.month, this.day));
    }
}

export class TuiInvalidDayException extends Error {
    constructor(year: number, month: number, day: number) {
        super(ngDevMode ? `Invalid day: ${year}-${month}-${day}` : '');
    }
}
