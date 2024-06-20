import {HOURS_IN_DAY, TuiTime} from '@taiga-ui/cdk/date-time';

export function tuiCreateTimePeriods(
    minHour = 0,
    maxHour: number = HOURS_IN_DAY,
    minutes: readonly number[] = [0, 30],
): readonly TuiTime[] {
    const timeArray: TuiTime[] = [];

    for (let i = minHour; i < maxHour; i++) {
        minutes.forEach(minute => {
            const time = new TuiTime(i, minute);

            timeArray.push(time);
        });
    }

    return timeArray;
}
