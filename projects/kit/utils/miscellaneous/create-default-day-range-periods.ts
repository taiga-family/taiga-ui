import {TUI_FIRST_DAY, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiDayRangePeriod} from '@taiga-ui/kit/classes';

export function tuiCreateDefaultDayRangePeriods(): ReadonlyArray<TuiDayRangePeriod> {
    const today = TuiDay.currentLocal();
    const yesterday = today.append({day: -1});
    const startOfWeek = today.append({day: -today.dayOfWeek()});
    const endOfWeek = startOfWeek.append({day: 6});
    const startOfMonth = today.append({day: 1 - today.day});
    const endOfMonth = startOfMonth.append({month: 1, day: -1});
    const startOfLastMonth = startOfMonth.append({month: -1});

    // TODO: i18n
    return [
        new TuiDayRangePeriod(new TuiDayRange(TUI_FIRST_DAY, today), 'За все время'),
        new TuiDayRangePeriod(new TuiDayRange(today, today), 'Сегодня'),
        new TuiDayRangePeriod(new TuiDayRange(yesterday, yesterday), 'Вчера'),
        new TuiDayRangePeriod(new TuiDayRange(startOfWeek, endOfWeek), 'Текущая неделя'),
        new TuiDayRangePeriod(new TuiDayRange(startOfMonth, endOfMonth), 'Текущий месяц'),
        new TuiDayRangePeriod(
            new TuiDayRange(startOfLastMonth, startOfMonth.append({day: -1})),
            'Прошлый месяц',
        ),
    ];
}
