import {tuiInRange, tuiNormalizeToIntNumber} from '@taiga-ui/cdk/utils/math';

import {YEAR_FILLER_LENGTH} from './date-fillers';
import {MAX_YEAR, MIN_YEAR} from './date-time';
import {type TuiYearLike} from './types';

/**
 * Immutable year object
 * @nosideeffects
 */
export class TuiYear implements TuiYearLike {
    constructor(public readonly year: number) {
        ngDevMode && console.assert(TuiYear.isValidYear(year));
    }

    /**
     * Checks year for validity
     */
    public static isValidYear(year: number): boolean {
        return Number.isInteger(year) && tuiInRange(year, MIN_YEAR, MAX_YEAR + 1);
    }

    /**
     * Check if passed year is a leap year
     */
    public static isLeapYear(year: number): boolean {
        ngDevMode && console.assert(TuiYear.isValidYear(year));

        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }

    /**
     * Returns amount of leap years from year 0 to the passed one
     */
    public static getAbsoluteLeapYears(year: number): number {
        ngDevMode && console.assert(TuiYear.isValidYear(year));

        return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
    }

    public static lengthBetween(from: TuiYear, to: TuiYear): number {
        return to.year - from.year;
    }

    /**
     * Normalizes year by clamping it between min and max years
     */
    public static normalizeYearPart(year: number): number {
        return tuiNormalizeToIntNumber(year, MIN_YEAR, MAX_YEAR);
    }

    /**
     * Parsing a string with year with normalization
     *
     * @param rawYear year string in format of YYYY
     * @return normalized year
     */
    public static normalizeParse(rawYear: string): TuiYear {
        ngDevMode &&
            console.assert(
                rawYear.length === YEAR_FILLER_LENGTH,
                '[normalizeParse]: wrong year string length',
            );

        return new TuiYear(TuiYear.normalizeYearPart(Number.parseInt(rawYear, 10)));
    }

    /**
     * Parsing a year stringified in a toJSON format
     * @param yearString year string in format of YYYY
     * @return year
     * @throws exceptions if year is invalid
     */
    public static jsonParse(yearString: string): TuiYear {
        const year = Number.parseInt(yearString, 10);

        if (!TuiYear.isValidYear(year)) {
            throw new TuiInvalidYearException(year);
        }

        return new TuiYear(year);
    }

    public get formattedYear(): string {
        return String(this.year).padStart(4, '0');
    }

    public get isLeapYear(): boolean {
        return TuiYear.isLeapYear(this.year);
    }

    /**
     * Returns amount of leap years from year 0 to current
     */
    public get absoluteLeapYears(): number {
        return TuiYear.getAbsoluteLeapYears(this.year);
    }

    /**
     * Passed year is after current
     */
    public yearBefore({year}: TuiYear): boolean {
        return this.year < year;
    }

    /**
     * Passed year is the same or after current
     */
    public yearSameOrBefore({year}: TuiYear): boolean {
        return this.year <= year;
    }

    /**
     * Passed year is the same as current
     */
    public yearSame({year}: TuiYear): boolean {
        return this.year === year;
    }

    /**
     * Passed year is either the same of before the current
     */
    public yearSameOrAfter({year}: TuiYear): boolean {
        return this.year >= year;
    }

    /**
     * Passed year is before current
     */
    public yearAfter({year}: TuiYear): boolean {
        return this.year > year;
    }

    /**
     * Immutably offsets year
     */
    public append({year = 0}: TuiYearLike): TuiYear {
        ngDevMode && console.assert(Number.isInteger(year));

        const resultYear = this.year + year;

        ngDevMode && console.assert(TuiYear.isValidYear(resultYear));

        return new TuiYear(resultYear);
    }

    public toString(): string {
        return this.formattedYear;
    }

    public valueOf(): number {
        return this.year;
    }

    /**
     * Returns the primitive value of the given Date object.
     * Depending on the argument, the method can return either a string or a number.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
     */
    public [Symbol.toPrimitive](hint: string): number | string {
        return Date.prototype[Symbol.toPrimitive].call(this, hint);
    }

    public toJSON(): string {
        return this.formattedYear;
    }
}

export class TuiInvalidYearException extends Error {
    constructor(year: number) {
        super(ngDevMode ? `Invalid year: ${year}` : '');
    }
}
