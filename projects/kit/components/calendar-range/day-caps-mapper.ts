import type {TuiDayLike, TuiDayRange} from '@taiga-ui/cdk/date-time';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk/date-time';
import type {TuiMapper} from '@taiga-ui/cdk/types';

export const TUI_DAY_CAPS_MAPPER: TuiMapper<
    [TuiDay | null, TuiDay | TuiDayRange | null, TuiDayLike | null, boolean],
    TuiDay
> = (current, value, maxLength, backwards) => {
    if (value instanceof TuiDay || !value?.isSingleDay || !maxLength) {
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
