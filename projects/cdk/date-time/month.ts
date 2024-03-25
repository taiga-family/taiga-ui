/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

import {TuiMonthNumber} from '@taiga-ui/cdk/enums';
import type {TuiMonthLike} from '@taiga-ui/cdk/interfaces';
import {tuiInRange, tuiNormalizeToIntNumber} from '@taiga-ui/cdk/utils/math';

import {MAX_MONTH, MIN_MONTH, MONTHS_IN_YEAR} from './date-time';
import {TuiYear} from './year';

/**
 * Immutable object consisting of year and month
 */
export class TuiMonth extends TuiYear implements TuiMonthLike {
    /**
     * @param year
     * @param month (starting with 0)
     */
    constructor(
        year: number,
        public readonly month: number,
    ) {
        super(year);
        ngDevMode && console.assert(TuiMonth.isValidMonth(year, month));
    }

    /**
     * Tests month and year for validity
     */
    public static isValidMonth(year: number, month: number): boolean {
        return TuiYear.isValidYear(year) && TuiMonth.isValidMonthPart(month);
    }

    /**
     * Returns number of days in a month
     */
    public static getMonthDaysCount(month: number, isLeapYear: boolean): number {
        ngDevMode && console.assert(TuiMonth.isValidMonthPart(month));

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
    public static currentLocal(): TuiMonth {
        const nativeDate = new Date();

        return new TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
    }

    /**
     * Returns current month and year based on UTC
     */
    public static currentUtc(): TuiMonth {
        const nativeDate = new Date();

        return new TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
    }

    public static override lengthBetween(from: TuiMonth, to: TuiMonth): number {
        const absoluteFrom = from.month + from.year * 12;
        const absoluteTo = to.month + to.year * 12;

        return absoluteTo - absoluteFrom;
    }

    /**
     * Normalizes number by clamping it between min and max month
     */
    public static normalizeMonthPart(month: number): number {
        return tuiNormalizeToIntNumber(month, MIN_MONTH, MAX_MONTH);
    }

    /**
     * Tests month for validity
     */
    private static isValidMonthPart(month: number): boolean {
        return Number.isInteger(month) && tuiInRange(month, MIN_MONTH, MAX_MONTH + 1);
    }

    public get formattedMonthPart(): string {
        return String(this.month + 1).padStart(2, '0');
    }

    /**
     * Returns days in a month
     */
    public get daysCount(): number {
        return TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
    }

    /**
     * Passed month and year are after current
     */
    public monthBefore(another: TuiMonth): boolean {
        return (
            this.yearBefore(another) ||
            (this.yearSame(another) && this.month < another.month)
        );
    }

    /**
     * Passed month and year are after or the same as current
     */
    public monthSameOrBefore(another: TuiMonth): boolean {
        return (
            this.yearBefore(another) ||
            (this.yearSame(another) && this.month <= another.month)
        );
    }

    /**
     * Passed month and year are the same as current
     */
    public monthSame(another: TuiMonth): boolean {
        return this.yearSame(another) && this.month === another.month;
    }

    /**
     * Passed month and year are either before or equal to current
     */
    public monthSameOrAfter(another: TuiMonth): boolean {
        return (
            this.yearAfter(another) ||
            (this.yearSame(another) && this.month >= another.month)
        );
    }

    /**
     * Passed month and year are before current
     */
    public monthAfter(another: TuiMonth): boolean {
        return (
            this.yearAfter(another) ||
            (this.yearSame(another) && this.month > another.month)
        );
    }

    /**
     * Immutably alters current month and year by passed offset
     *
     * @param offset
     * @return new month and year object as a result of offsetting current
     */
    public override append({year = 0, month = 0}: TuiMonthLike): TuiMonth {
        const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;

        return new TuiMonth(
            Math.floor(totalMonths / MONTHS_IN_YEAR),
            totalMonths % MONTHS_IN_YEAR,
        );
    }

    public override toString(): string {
        return `${this.formattedMonthPart}.${this.formattedYear}`;
    }

    public override valueOf(): number {
        return this.toLocalNativeDate().valueOf();
    }

    public override toJSON(): string {
        return `${super.toJSON()}-${this.formattedMonthPart}`;
    }

    /**
     * Returns native {@link Date} based on local time zone
     */
    public toLocalNativeDate(): Date {
        return new Date(this.year, this.month);
    }

    /**
     * Returns native {@link Date} based on UTC
     */
    public toUtcNativeDate(): Date {
        return new Date(Date.UTC(this.year, this.month));
    }
}
