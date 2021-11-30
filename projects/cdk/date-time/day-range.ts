import {tuiAssert} from '@taiga-ui/cdk/classes';

import {DATE_FILLER_LENGTH, DATE_RANGE_FILLER_LENGTH} from './date-fillers';
import {RANGE_SEPARATOR_CHAR} from './date-time';
import {TuiDay} from './day';
import {TuiMonthRange} from './month-range';

/**
 * An immutable range of two {@link TuiDay} objects
 */
export class TuiDayRange extends TuiMonthRange {
    constructor(readonly from: TuiDay, readonly to: TuiDay) {
        super(from, to);

        tuiAssert.assert(from.daySameOrBefore(to));
    }

    /**
     * Creates range from two days after sorting them
     *
     * @param day1
     * @param day2
     * @return new range with sorted days
     */
    static sort(day1: TuiDay, day2: TuiDay): TuiDayRange {
        return day1.daySameOrBefore(day2)
            ? new TuiDayRange(day1, day2)
            : new TuiDayRange(day2, day1);
    }

    /**
     * @deprecated
     * TODO rm deprecated version in v3.0
     */
    static normalizeParse(
        rangeString: string,
        dateFiller: string,
        dateRangeFiller: string,
    ): TuiDayRange;
    static normalizeParse(rangeString: string): TuiDayRange;

    /**
     * Parse and correct a day range in string format
     *
     * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
     * @return normalized day range object
     */
    static normalizeParse(rangeString: string): TuiDayRange {
        const leftDay = TuiDay.normalizeParse(rangeString.slice(0, DATE_FILLER_LENGTH));

        if (rangeString.length < DATE_RANGE_FILLER_LENGTH) {
            return new TuiDayRange(leftDay, leftDay);
        }

        return TuiDayRange.sort(
            leftDay,
            TuiDay.normalizeParse(
                rangeString.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length),
            ),
        );
    }

    get isSingleDay(): boolean {
        return this.from.daySame(this.to);
    }

    /**
     * Human readable format.
     */
    get formattedDayRange(): string {
        return `${this.from.formattedDay}${RANGE_SEPARATOR_CHAR}${this.to.formattedDay}`;
    }

    /**
     * Tests ranges for identity
     *
     * @param another second range to test against current
     * @return `true` if days are identical
     */
    daySame(another: TuiDayRange): boolean {
        return this.from.daySame(another.from) && this.to.daySame(another.to);
    }

    /**
     * Locks range between two days included, or limits from one side if the other is null
     *
     * @param min
     * @param max
     * @return range — clamped range
     */
    dayLimit(min: TuiDay | null, max: TuiDay | null): TuiDayRange {
        return new TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
    }
}
