import {TuiDay, TuiDayLike, TuiDayRange, TuiMapper} from '@taiga-ui/cdk';

export const MAX_DAY_RANGE_LENGTH_MAPPER: TuiMapper<TuiDay, TuiDay> = (
    min,
    value: TuiDayRange,
    maxLength: TuiDayLike | null,
    backwards: boolean,
) => {
    if (!value?.isSingleDay || !maxLength) {
        return min;
    }

    const dateShift = value.from
        .append(maxLength, backwards)
        .append({day: 1}, !backwards);

    if (backwards) {
        return dateShift.dayBefore(min) ? min : dateShift;
    }

    if (!min) {
        return dateShift;
    }

    return dateShift.dayAfter(min) ? min : dateShift;
};
