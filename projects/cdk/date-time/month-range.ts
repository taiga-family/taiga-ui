/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

import {RANGE_SEPARATOR_CHAR} from './date-time';
import type {TuiMonth} from './month';

/**
 * An immutable range of two {@link TuiMonth} objects
 */
export class TuiMonthRange {
    constructor(
        public readonly from: TuiMonth,
        public readonly to: TuiMonth,
    ) {
        ngDevMode && console.assert(from.monthSameOrBefore(to));
    }

    public static sort(month1: TuiMonth, month2: TuiMonth): TuiMonthRange {
        return month1.monthSameOrBefore(month2)
            ? new TuiMonthRange(month1, month2)
            : new TuiMonthRange(month2, month1);
    }

    public get isSingleMonth(): boolean {
        return this.from.monthSame(this.to);
    }

    public monthSame(another: TuiMonthRange): boolean {
        return this.from.monthSame(another.from) && this.to.monthSame(another.to);
    }

    public toString(): string {
        return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
    }
}
