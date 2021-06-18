import {tuiAssert} from '@taiga-ui/cdk/classes';
import {DEFAULT_TIME_LOCALIZATION_OPTIONS} from '@taiga-ui/cdk/constants';
import {DAY_OF_WEEK_INDEX} from '@taiga-ui/cdk/enums';
import {TuiTimeLocalizationOptions, TuiYearLike} from '@taiga-ui/cdk/interfaces';
import {padStart} from '@taiga-ui/cdk/utils/format';
import {inRange, normalizeToIntNumber} from '@taiga-ui/cdk/utils/math';
import {
    DAYS_IN_LEAP_YEAR,
    DAYS_IN_NORMAL_YEAR,
    DAYS_IN_WEEK,
    MAX_YEAR,
    MIN_YEAR,
} from './date-time';

interface GetYearStartDaysOffsetArgs {
    year: number;
    /**
     * amount of leap years prior to the passed one
     */
    absoluteLeapYears: number;
    /**
     * first day of the week index (monday - 0, sunday - 6)
     */
    startWeekDayIndex: DAY_OF_WEEK_INDEX;
}

/**
 * Immutable year object
 * @nosideeffects
 */
export class TuiYear implements TuiYearLike {
    localizationOptions: Required<TuiTimeLocalizationOptions>;

    constructor(readonly year: number, localizationOptions?: TuiTimeLocalizationOptions) {
        tuiAssert.assert(TuiYear.isValidYear(year));
        this.localizationOptions = {
            ...DEFAULT_TIME_LOCALIZATION_OPTIONS,
            ...localizationOptions,
        };
    }

    get formattedYear(): string {
        return padStart(this.year.toString(), 4, '0');
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
     * Returns day of week offset of the beginning of the current year
     */
    get yearStartDaysOffset(): number {
        return TuiYear.getYearStartDaysOffset({
            year: this.year,
            absoluteLeapYears: this.absoluteLeapYears,
            startWeekDayIndex: this.localizationOptions.startWeekDayIndex,
        });
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

    // TODO: Consider removing `backwards` option
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

    toJSON(): string {
        return this.formattedYear;
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
     * @deprecated pass args as object
     *
     * Returns day of week offset of the beginning of the passed year
     * @param year
     * @param absoluteLeapYears amount of leap years prior to the passed one
     * @return offset in days
     */
    static getYearStartDaysOffset(year: number, absoluteLeapYears: number): number;
    static getYearStartDaysOffset(args: GetYearStartDaysOffsetArgs): number;
    /**
     * Returns day of week offset of the beginning of the passed year
     * @return offset in days
     */
    static getYearStartDaysOffset(
        argOrObj: GetYearStartDaysOffsetArgs | number,
        possibleSecondArg?: number,
    ): number {
        /* backward compatibility part starts */
        const isGetYearStartDaysOffsetArgs = (
            argOrObj: GetYearStartDaysOffsetArgs | number,
        ): argOrObj is GetYearStartDaysOffsetArgs => {
            return !!argOrObj && typeof argOrObj === 'object';
        };

        const {
            year,
            absoluteLeapYears = 0,
            startWeekDayIndex,
        } = isGetYearStartDaysOffsetArgs(argOrObj)
            ? argOrObj
            : {
                  year: argOrObj,
                  absoluteLeapYears: possibleSecondArg,
                  startWeekDayIndex: DEFAULT_TIME_LOCALIZATION_OPTIONS.startWeekDayIndex,
              };
        /* backward compatibility part ends */

        // 01.01.0000 (1y B.C.) => Saturday
        const CALENDAR_START_WEEK_DAY_INDEX = DAY_OF_WEEK_INDEX.SATURDAY;
        const calendarStartDaysOffset =
            CALENDAR_START_WEEK_DAY_INDEX >= startWeekDayIndex
                ? CALENDAR_START_WEEK_DAY_INDEX - startWeekDayIndex
                : startWeekDayIndex;

        tuiAssert.assert(TuiYear.isValidYear(year));
        tuiAssert.assert(Number.isInteger(absoluteLeapYears));
        tuiAssert.assert(year >= absoluteLeapYears);
        tuiAssert.assert(absoluteLeapYears >= 0);

        return (
            (absoluteLeapYears * DAYS_IN_LEAP_YEAR +
                (year - absoluteLeapYears) * DAYS_IN_NORMAL_YEAR +
                calendarStartDaysOffset) %
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
}
