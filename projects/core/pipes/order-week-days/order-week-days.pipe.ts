import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiInjectionTokenType} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core/tokens';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

type WeekDays<T> = [T, T, T, T, T, T, T];

/**
 * @internal
 */
@Pipe({
    name: `tuiOrderWeekDays`,
})
export class TuiOrderWeekDaysPipe implements PipeTransform {
    constructor(
        @Inject(TUI_FIRST_DAY_OF_WEEK)
        private readonly firstDayOfWeekIndex: TuiInjectionTokenType<
            typeof TUI_FIRST_DAY_OF_WEEK
        >,
    ) {}

    transform<T>(mondayFirstWeekDays$: Observable<WeekDays<T>>): Observable<WeekDays<T>> {
        return mondayFirstWeekDays$.pipe(
            map(convertToSundayFirstWeekFormat),
            map(
                weekDays =>
                    [
                        ...weekDays.slice(this.firstDayOfWeekIndex),
                        ...weekDays.slice(0, this.firstDayOfWeekIndex),
                    ] as WeekDays<T>,
            ),
        );
    }
}

function convertToSundayFirstWeekFormat<T>(weekDaysNames: WeekDays<T>): WeekDays<T> {
    const sundayIndex = weekDaysNames.length - 1;

    return [
        weekDaysNames[sundayIndex],
        ...weekDaysNames.slice(0, sundayIndex),
    ] as WeekDays<T>;
}
