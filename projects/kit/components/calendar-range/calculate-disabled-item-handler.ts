import type {TuiDay, TuiDayLike} from '@taiga-ui/cdk/date-time';
import {TuiDayRange} from '@taiga-ui/cdk/date-time';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';

export const calculateDisabledItemHandler: (
    disabledItemHandler: TuiBooleanHandler<TuiDay>,
    value: TuiDay | TuiDayRange | null,
    minLength: TuiDayLike | null,
) => TuiBooleanHandler<TuiDay> = (disabledItemHandler, value, minLength) => (item) => {
    if (!value || value instanceof TuiDayRange || !minLength) {
        return disabledItemHandler(item);
    }

    const negativeMinLength = Object.fromEntries(
        Object.entries(minLength).map(([key, value]) => [key, -value]),
    );
    const disabledBefore = value.append(negativeMinLength).append({day: 1});
    const disabledAfter = value.append(minLength).append({day: -1});
    const inDisabledRange =
        disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);

    return inDisabledRange || disabledItemHandler(item);
};
