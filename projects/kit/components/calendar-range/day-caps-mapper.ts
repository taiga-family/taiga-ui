import type {TuiDayLike} from '@taiga-ui/cdk/date-time';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay, TuiDayRange} from '@taiga-ui/cdk/date-time';
import type {TuiMapper} from '@taiga-ui/cdk/types';

export const TUI_DAY_CAPS_MAPPER: TuiMapper<
    [TuiDay | null, TuiDay | TuiDayRange | null, TuiDayLike | null, boolean],
    TuiDay
> = (current, value, maxLength, backwards) => {
    if (
        // TODO(v5): replace with `if (!(value instanceof TuiDay) || !maxLength)` (backward compatibility)
        (value instanceof TuiDayRange && !value.isSingleDay) ||
        !value ||
        !maxLength
    ) {
        return backwards ? current || TUI_FIRST_DAY : current || TUI_LAST_DAY;
    }

    const negativeMaxLength = Object.fromEntries(
        Object.entries(maxLength).map(([key, value]) => [key, -value]),
    );

    // TODO(v5): `value instanceof TuiDay` always `true`
    const from = value instanceof TuiDay ? value : value.from;
    const dateShift = from
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
