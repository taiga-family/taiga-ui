import {tuiAssert} from '@taiga-ui/cdk/classes';
import {TuiMonthNumber} from '@taiga-ui/cdk/enums';
import {TuiMonthLike} from '@taiga-ui/cdk/interfaces';
import {padStart} from '@taiga-ui/cdk/utils/format';
import {inRange, normalizeToIntNumber} from '@taiga-ui/cdk/utils/math';

import {DAYS_IN_WEEK, MAX_MONTH, MIN_MONTH, MONTHS_IN_YEAR} from './date-time';
import {TuiYear} from './year';

/**
 * Immutable object consisting of year and month
 */
export class TuiMonth extends TuiYear implements TuiMonthLike {
    /**
     * @param year
     * @param month (starting with 0)
     */
    constructor(year: number, readonly month: number) {
        super(year);
        tuiAssert.assert(TuiMonth.isValidMonth(year, month));
    }

    /**
     * Tests month and year for validity
     */
    static isValidMonth(year: number, month: number): boolean {
        return TuiYear.isValidYear(year) && TuiMonth.isValidMonthPart(month);
    }

    /**
     * Returns number of days in a month
     */
    static getMonthDaysCount(month: number, isLeapYear: boolean): number {
        tuiAssert.assert(TuiMonth.isValidMonthPart(month));

        switch (month) {
            case TuiMonthNumber.February:
                return isLeapYear ? 29 : 28;
            case TuiMonthNumber.April:
            case TuiMonthNumber.June:
            case TuiMonthNumber.September:
            case TuiMonthNumber.November:
                return 30;
            default:
                return 31;
        }
    }

    /**
     * Returns current month and year based on local time zone
     * @nosideeffects
     */
    static currentLocal(): TuiMonth {
        const nativeDate = new Date();

        return new TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
    }

    /**
     * Returns current month and year based on UTC
     */
    static currentUtc(): TuiMonth {
        const nativeDate = new Date();

        return new TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
    }

    static lengthBetween(from: TuiMonth, to: TuiMonth): number {
        const absoluteFrom = from.month + from.year * 12;
        const absoluteTo = to.month + to.year * 12;

        return absoluteTo - absoluteFrom;
    }

    /**
     * Normalizes number by clamping it between min and max month
     */
    protected static normalizeMonthPart(month: number): number {
        return normalizeToIntNumber(month, MIN_MONTH, MAX_MONTH);
    }

    /**
     * Tests month for validity
     */
    private static isValidMonthPart(month: number): boolean {
        return Number.isInteger(month) && inRange(month, MIN_MONTH, MAX_MONTH + 1);
    }

    get formattedMonthPart(): string {
        return padStart(String(this.month + 1), 2, `0`);
    }

    /**
     * @deprecated
     * Formatter month and year
     */
    get formattedMonth(): string {
        return `${this.formattedMonthPart}.${this.formattedYear}`;
    }

    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Calculates number of weeks in a month (counting non-full weeks)
     */
    get weeksRowsCount(): number {
        return Math.ceil((this.monthStartDaysOffset + this.daysCount) / DAYS_IN_WEEK);
    }

    /**
     * Returns days in a month
     */
    get daysCount(): number {
        return TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
    }

    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Computes day of week offset of the beginning of the month
     */
    get monthStartDaysOffset(): number {
        let result = this.yearStartDaysOffset;

        for (let currentMonth = 0; currentMonth <= this.month - 1; currentMonth++) {
            result += TuiMonth.getMonthDaysCount(currentMonth, this.isLeapYear);
        }

        return result % DAYS_IN_WEEK;
    }

    /**
     * Passed month and year are after current
     */
    monthBefore(another: TuiMonth): boolean {
        return (
            this.yearBefore(another) ||
            (this.yearSame(another) && this.month < another.month)
        );
    }

    /**
     * Passed month and year are after or the same as current
     */
    monthSameOrBefore(another: TuiMonth): boolean {
        return (
            this.yearBefore(another) ||
            (this.yearSame(another) && this.month <= another.month)
        );
    }

    /**
     * Passed month and year are the same as current
     */
    monthSame(another: TuiMonth): boolean {
        return this.yearSame(another) && this.month === another.month;
    }

    /**
     * Passed month and year are either before or equal to current
     */
    monthSameOrAfter(another: TuiMonth): boolean {
        return (
            this.yearAfter(another) ||
            (this.yearSame(another) && this.month >= another.month)
        );
    }

    /**
     * Passed month and year are before current
     */
    monthAfter(another: TuiMonth): boolean {
        return (
            this.yearAfter(another) ||
            (this.yearSame(another) && this.month > another.month)
        );
    }

    // TODO: 3.0 Consider removing `backwards` option
    /**
     * Immutably alters current month and year by passed offset
     *
     * @param offset
     * @param backwards shift date backwards
     * @return new month and year object as a result of offsetting current
     */
    append({year = 0, month = 0}: TuiMonthLike, backwards: boolean = false): TuiMonth {
        if (backwards) {
            year *= -1;
            month *= -1;
        }

        const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;

        return new TuiMonth(
            Math.floor(totalMonths / MONTHS_IN_YEAR),
            totalMonths % MONTHS_IN_YEAR,
        );
    }

    toString(): string {
        return this.formattedMonth;
    }

    valueOf(): number {
        return this.toLocalNativeDate().valueOf();
    }

    toJSON(): string {
        return `${super.toJSON()}-${this.formattedMonthPart}`;
    }

    /**
     * Returns native {@link Date} based on local time zone
     */
    toLocalNativeDate(): Date {
        return new Date(this.year, this.month);
    }

    /**
     * Returns native {@link Date} based on UTC
     */
    toUtcNativeDate(): Date {
        return new Date(Date.UTC(this.year, this.month));
    }
}
