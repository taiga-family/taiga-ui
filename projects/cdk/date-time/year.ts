import {tuiAssert} from '@taiga-ui/cdk/classes';
import {TuiYearLike} from '@taiga-ui/cdk/interfaces';
import {inRange, normalizeToIntNumber} from '@taiga-ui/cdk/utils/math';

import {
    DAYS_IN_LEAP_YEAR,
    DAYS_IN_NORMAL_YEAR,
    DAYS_IN_WEEK,
    MAX_YEAR,
    MIN_YEAR,
} from './date-time';

/**
 * Immutable year object
 * @nosideeffects
 */
export class TuiYear implements TuiYearLike {
    constructor(readonly year: number) {
        tuiAssert.assert(TuiYear.isValidYear(year));
    }

    /**
     * Checks year for validity
     */
    static isValidYear(year: number): boolean {
        return Number.isInteger(year) && inRange(year, MIN_YEAR, MAX_YEAR + 1);
    }

    /**
     * Check if passed year is a leap year
     */
    static isLeapYear(year: number): boolean {
        tuiAssert.assert(TuiYear.isValidYear(year));

        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }

    /**
     * Returns amount of leap years from year 0 to the passed one
     */
    static getAbsoluteLeapYears(year: number): number {
        tuiAssert.assert(TuiYear.isValidYear(year));

        return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
    }

    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Returns day of week offset of the beginning of the passed year
     *
     * @param year
     * @param absoluteLeapYears amount of leap years prior to the passed one
     * @return offset in days
     */
    static getYearStartDaysOffset(year: number, absoluteLeapYears: number): number {
        tuiAssert.assert(TuiYear.isValidYear(year));
        tuiAssert.assert(Number.isInteger(absoluteLeapYears));
        tuiAssert.assert(year >= absoluteLeapYears);
        tuiAssert.assert(absoluteLeapYears >= 0);

        return (
            (absoluteLeapYears * DAYS_IN_LEAP_YEAR +
                (year - absoluteLeapYears) * DAYS_IN_NORMAL_YEAR +
                5) %
            DAYS_IN_WEEK
        );
    }

    static lengthBetween(from: TuiYear, to: TuiYear): number {
        return to.year - from.year;
    }

    /**
     * Normalizes year by clamping it between min and max years
     */
    protected static normalizeYearPart(year: number): number {
        return normalizeToIntNumber(year, MIN_YEAR, MAX_YEAR);
    }

    get formattedYear(): string {
        return String(this.year).padStart(4, `0`);
    }

    get isLeapYear(): boolean {
        return TuiYear.isLeapYear(this.year);
    }

    /**
     * Returns amount of leap years from year 0 to current
     */
    get absoluteLeapYears(): number {
        return TuiYear.getAbsoluteLeapYears(this.year);
    }

    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Returns day of week offset of the beginning of the current year
     */
    get yearStartDaysOffset(): number {
        return TuiYear.getYearStartDaysOffset(this.year, this.absoluteLeapYears);
    }

    /**
     * Passed year is after current
     */
    yearBefore({year}: TuiYear): boolean {
        return this.year < year;
    }

    /**
     * Passed year is the same or after current
     */
    yearSameOrBefore({year}: TuiYear): boolean {
        return this.year <= year;
    }

    /**
     * Passed year is the same as current
     */
    yearSame({year}: TuiYear): boolean {
        return this.year === year;
    }

    /**
     * Passed year is either the same of before the current
     */
    yearSameOrAfter({year}: TuiYear): boolean {
        return this.year >= year;
    }

    /**
     * Passed year is before current
     */
    yearAfter({year}: TuiYear): boolean {
        return this.year > year;
    }

    // TODO: 3.0 Consider removing `backwards` option
    /**
     * Immutably offsets year
     */
    append({year = 0}: TuiYearLike, backwards: boolean = false): TuiYear {
        tuiAssert.assert(Number.isInteger(year));

        if (backwards) {
            year *= -1;
        }

        const resultYear = this.year + year;

        tuiAssert.assert(TuiYear.isValidYear(resultYear));

        return new TuiYear(resultYear);
    }

    toString(): string {
        return this.formattedYear;
    }

    valueOf(): number {
        return this.year;
    }

    /**
     * Returns the primitive value of the given Date object.
     * Depending on the argument, the method can return either a string or a number.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
     */
    [Symbol.toPrimitive](hint: string): string | number {
        return Date.prototype[Symbol.toPrimitive].call(this, hint);
    }

    toJSON(): string {
        return this.formattedYear;
    }
}
