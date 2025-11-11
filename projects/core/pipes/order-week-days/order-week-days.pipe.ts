import {inject, Pipe, type PipeTransform} from '@angular/core';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core/tokens';
import {map, type Observable} from 'rxjs';

function convertToSundayFirstWeekFormat(
    weekDaysNames: readonly string[],
): readonly string[] {
    const sundayIndex = weekDaysNames.length - 1;

    return [weekDaysNames[sundayIndex] || '', ...weekDaysNames.slice(0, sundayIndex)];
}

@Pipe({
    standalone: true,
    name: 'tuiOrderWeekDays',
})
export class TuiOrderWeekDaysPipe implements PipeTransform {
    private readonly firstDayOfWeekIndex = inject(TUI_FIRST_DAY_OF_WEEK);

    public transform(
        mondayFirstWeekDays$: Observable<readonly string[]>,
    ): Observable<readonly string[]> {
        return mondayFirstWeekDays$.pipe(
            map(convertToSundayFirstWeekFormat),
            map((weekDays) => [
                ...weekDays.slice(this.firstDayOfWeekIndex()),
                ...weekDays.slice(0, this.firstDayOfWeekIndex()),
            ]),
        );
    }
}
