import {
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    TuiMapper,
    tuiObjectFromEntries,
} from '@taiga-ui/cdk';

export const MAX_DAY_RANGE_LENGTH_MAPPER: TuiMapper<TuiDay, TuiDay> = (
    min,
    value: TuiDayRange,
    maxLength: TuiDayLike | null,
    backwards: boolean,
) => {
    if (!value?.isSingleDay || !maxLength) {
        return min;
    }

    const negativeMaxLength = tuiObjectFromEntries(
        Object.entries(maxLength).map(([key, value]) => [key, -value]),
    );

    const dateShift = value.from
        .append(backwards ? negativeMaxLength : maxLength)
        .append({day: !backwards ? -1 : 1});

    if (backwards) {
        return dateShift.dayBefore(min) ? min : dateShift;
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!min) {
        return dateShift;
    }

    return dateShift.dayAfter(min) ? min : dateShift;
};
