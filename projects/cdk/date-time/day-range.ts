/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

import {DATE_FILLER_LENGTH, DATE_RANGE_FILLER_LENGTH} from './date-fillers';
import {RANGE_SEPARATOR_CHAR} from './date-time';
import {TuiDay} from './day';
import {TuiMonthRange} from './month-range';
import type {TuiDateMode} from './types';

/**
 * An immutable range of two {@link TuiDay} objects
 */
export class TuiDayRange extends TuiMonthRange {
    constructor(
        public override readonly from: TuiDay,
        public override readonly to: TuiDay,
    ) {
        super(from, to);

        ngDevMode && console.assert(from.daySameOrBefore(to));
    }

    /**
     * Creates range from two days after sorting them
     *
     * @param day1
     * @param day2
     * @return new range with sorted days
     */
    public static override sort(day1: TuiDay, day2: TuiDay): TuiDayRange {
        return day1.daySameOrBefore(day2)
            ? new TuiDayRange(day1, day2)
            : new TuiDayRange(day2, day1);
    }

    /**
     * Parse and correct a day range in string format
     *
     * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
     * @param dateMode {@link TuiDateMode}
     * @return normalized day range object
     */
    public static normalizeParse(
        rangeString: string,
        dateMode: TuiDateMode = 'DMY',
    ): TuiDayRange {
        const leftDay = TuiDay.normalizeParse(
            rangeString.slice(0, DATE_FILLER_LENGTH),
            dateMode,
        );

        if (rangeString.length < DATE_RANGE_FILLER_LENGTH) {
            return new TuiDayRange(leftDay, leftDay);
        }

        return TuiDayRange.sort(
            leftDay,
            TuiDay.normalizeParse(
                rangeString.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length),
                dateMode,
            ),
        );
    }

    public get isSingleDay(): boolean {
        return this.from.daySame(this.to);
    }

    /**
     * Tests ranges for identity
     *
     * @param another second range to test against current
     * @return `true` if days are identical
     */
    public daySame(another: TuiDayRange): boolean {
        return this.from.daySame(another.from) && this.to.daySame(another.to);
    }

    /**
     * Locks range between two days included, or limits from one side if the other is null
     *
     * @param min
     * @param max
     * @return range — clamped range
     */
    public dayLimit(min: TuiDay | null, max: TuiDay | null): TuiDayRange {
        return new TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
    }

    /**
     * Human readable format.
     */
    public getFormattedDayRange(dateFormat: TuiDateMode, dateSeparator: string): string {
        const from = this.from.getFormattedDay(dateFormat, dateSeparator);
        const to = this.to.getFormattedDay(dateFormat, dateSeparator);

        return `${from}${RANGE_SEPARATOR_CHAR}${to}`;
    }

    public override toString(
        dateFormat: TuiDateMode = 'DMY',
        dateSeparator = '.',
    ): string {
        return this.getFormattedDayRange(dateFormat, dateSeparator);
    }

    public toArray(): readonly TuiDay[] {
        const {from, to} = this;
        const arr = [];

        for (
            const day = from.toUtcNativeDate();
            day <= to.toUtcNativeDate();
            day.setDate(day.getDate() + 1)
        ) {
            arr.push(TuiDay.fromLocalNativeDate(day));
        }

        return arr;
    }
}
