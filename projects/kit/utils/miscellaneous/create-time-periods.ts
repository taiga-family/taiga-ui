import {HOURS_IN_DAY, TuiTime} from '@taiga-ui/cdk';

export function tuiCreateTimePeriods(
    minHour: number = 0,
    maxHour: number = HOURS_IN_DAY,
    minutes: ReadonlyArray<number> = [0, 30],
): ReadonlyArray<TuiTime> {
    const timeArray: Array<TuiTime> = [];

    for (let i = minHour; i < maxHour; i++) {
        for (let j = 0; j < minutes.length; j++) {
            const time = new TuiTime(i, minutes[j]);

            timeArray.push(time);
        }
    }

    return timeArray;
}
