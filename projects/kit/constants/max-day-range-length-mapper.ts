import {
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    tuiObjectFromEntries,
    TuiTypedMapper,
} from '@taiga-ui/cdk';

export const TUI_MAX_DAY_RANGE_LENGTH_MAPPER: TuiTypedMapper<
    [TuiDay, TuiDayRange | null, TuiDayLike | null, boolean],
    TuiDay
> = (min, value, maxLength, backwards) => {
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

    if (!min) {
        return dateShift;
    }

    return dateShift.dayAfter(min) ? min : dateShift;
};

/**
 * @deprecated: use {@link TUI_MAX_DAY_RANGE_LENGTH_MAPPER}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const MAX_DAY_RANGE_LENGTH_MAPPER = TUI_MAX_DAY_RANGE_LENGTH_MAPPER;
