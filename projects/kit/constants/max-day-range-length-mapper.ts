import type {TuiDay, TuiDayLike, TuiDayRange, TuiMapper} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY, TUI_LAST_DAY} from '@taiga-ui/cdk';

export const MAX_DAY_RANGE_LENGTH_MAPPER: TuiMapper<
    [TuiDay | null, TuiDayRange | null, TuiDayLike | null, boolean],
    TuiDay
> = (current, value, maxLength, backwards) => {
    if (!value?.isSingleDay || !maxLength) {
        return backwards ? current || TUI_FIRST_DAY : current || TUI_LAST_DAY;
    }

    const negativeMaxLength = Object.fromEntries(
        Object.entries(maxLength).map(([key, value]) => [key, -value]),
    );

    const dateShift = value.from
        .append(backwards ? negativeMaxLength : maxLength)
        .append({day: !backwards ? -1 : 1});

    if (backwards) {
        return dateShift.dayBefore(current || TUI_FIRST_DAY)
            ? current || TUI_FIRST_DAY
            : dateShift;
    }

    if (!current) {
        return dateShift;
    }

    return dateShift.dayAfter(current) ? current : dateShift;
};
