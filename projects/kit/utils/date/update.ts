import {TuiDay} from '@taiga-ui/cdk';

export function tuiImmutableUpdateInputDateMulti(
    value: readonly TuiDay[],
    day: TuiDay,
): readonly TuiDay[] {
    return value.find(item => item.daySame(day))
        ? value.filter(item => !item.daySame(day))
        : value.concat(day);
}
