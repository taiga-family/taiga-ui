import type {TuiDay} from '@taiga-ui/cdk';

export function tuiToggleDay(
    days: readonly TuiDay[] | null = [],
    day: TuiDay,
): readonly TuiDay[] {
    return (
        (days?.find(item => item.daySame(day))
            ? days.filter(item => !item.daySame(day))
            : days?.concat(day)) || []
    );
}
