import {TUI_FIRST_DAY, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiDayRangePeriod} from '@taiga-ui/kit/classes';

export function tuiCreateDefaultDayRangePeriods(
    periodTitles: [string, string, string, string, string, string] = [
        `For all the time`,
        `Today`,
        `Yesterday`,
        `Current week`,
        `Current month`,
        `Previous month`,
    ],
): readonly TuiDayRangePeriod[] {
    const today = TuiDay.currentLocal();
    const yesterday = today.append({day: -1});
    const startOfWeek = today.append({day: -today.dayOfWeek()});
    const endOfWeek = startOfWeek.append({day: 6});
    const startOfMonth = today.append({day: 1 - today.day});
    const endOfMonth = startOfMonth.append({month: 1, day: -1});
    const startOfLastMonth = startOfMonth.append({month: -1});

    return [
        new TuiDayRangePeriod(new TuiDayRange(TUI_FIRST_DAY, today), periodTitles[0]),
        new TuiDayRangePeriod(new TuiDayRange(today, today), periodTitles[1]),
        new TuiDayRangePeriod(new TuiDayRange(yesterday, yesterday), periodTitles[2]),
        new TuiDayRangePeriod(new TuiDayRange(startOfWeek, endOfWeek), periodTitles[3]),
        new TuiDayRangePeriod(new TuiDayRange(startOfMonth, endOfMonth), periodTitles[4]),
        new TuiDayRangePeriod(
            new TuiDayRange(startOfLastMonth, startOfMonth.append({day: -1})),
            periodTitles[5],
        ),
    ];
}
