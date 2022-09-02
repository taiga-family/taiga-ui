import {tuiAssert} from '@taiga-ui/cdk/classes';

import {RANGE_SEPARATOR_CHAR} from './date-time';
import type {TuiMonth} from './month';

/**
 * An immutable range of two {@link TuiMonth} objects
 */
export class TuiMonthRange {
    constructor(readonly from: TuiMonth, readonly to: TuiMonth) {
        tuiAssert.assert(from.monthSameOrBefore(to));
    }

    static sort(month1: TuiMonth, month2: TuiMonth): TuiMonthRange {
        return month1.monthSameOrBefore(month2)
            ? new TuiMonthRange(month1, month2)
            : new TuiMonthRange(month2, month1);
    }

    get isSingleMonth(): boolean {
        return this.from.monthSame(this.to);
    }

    monthSame(another: TuiMonthRange): boolean {
        return this.from.monthSame(another.from) && this.to.monthSame(another.to);
    }

    toString(): string {
        return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
    }
}
