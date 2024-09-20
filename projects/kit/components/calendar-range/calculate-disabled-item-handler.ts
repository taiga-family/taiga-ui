import type {TuiDay, TuiDayLike, TuiDayRange} from '@taiga-ui/cdk/date-time';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';

export const calculateDisabledItemHandler: (
    disabledItemHandler: TuiBooleanHandler<TuiDay>,
    value: TuiDayRange | null,
    minLength: TuiDayLike | null,
) => TuiBooleanHandler<TuiDay> = (disabledItemHandler, value, minLength) => (item) => {
    if (!value?.isSingleDay || !minLength) {
        return disabledItemHandler(item);
    }

    const negativeMinLength = Object.fromEntries(
        Object.entries(minLength).map(([key, value]) => [key, -value]),
    );
    const disabledBefore = value.from.append(negativeMinLength).append({day: 1});
    const disabledAfter = value.from.append(minLength).append({day: -1});
    const inDisabledRange =
        disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);

    return inDisabledRange || disabledItemHandler(item);
};
