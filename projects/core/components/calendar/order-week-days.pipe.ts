import {inject, Pipe, type PipeTransform} from '@angular/core';
import {map, type Observable} from 'rxjs';

import {TUI_CALENDAR_OPTIONS} from './calendar.options';

function convertToSundayFirstWeekFormat(
    weekDaysNames: readonly string[],
): readonly string[] {
    const sundayIndex = weekDaysNames.length - 1;

    return [weekDaysNames[sundayIndex] || '', ...weekDaysNames.slice(0, sundayIndex)];
}

@Pipe({
    name: 'tuiOrderWeekDays',
})
export class TuiOrderWeekDaysPipe implements PipeTransform {
    private readonly options = inject(TUI_CALENDAR_OPTIONS);

    public transform(
        mondayFirstWeekDays$: Observable<readonly string[]>,
    ): Observable<readonly string[]> {
        return mondayFirstWeekDays$.pipe(
            map(convertToSundayFirstWeekFormat),
            map((weekDays) => [
                ...weekDays.slice(this.options.weekStart()),
                ...weekDays.slice(0, this.options.weekStart()),
            ]),
        );
    }
}
