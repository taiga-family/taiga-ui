import type {PipeTransform, Signal} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TuiObservablePipe, tuiPure} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

type WeekDays<T> = [T, T, T, T, T, T, T];

function convertToSundayFirstWeekFormat<T>(weekDaysNames: WeekDays<T>): WeekDays<T> {
    const sundayIndex = weekDaysNames.length - 1;

    return [
        weekDaysNames[sundayIndex],
        ...weekDaysNames.slice(0, sundayIndex),
    ] as WeekDays<T>;
}

@Pipe({
    standalone: true,
    name: 'tuiOrderWeekDays',
    pure: false,
})
export class TuiOrderWeekDaysPipe extends TuiObservablePipe implements PipeTransform {
    private readonly firstDayOfWeekIndex = inject(TUI_FIRST_DAY_OF_WEEK);

    public transform<T>(
        mondayFirstWeekDays$: Observable<WeekDays<T>>,
    ): WeekDays<T> | null {
        return this.getSignal(mondayFirstWeekDays$)();
    }

    @tuiPure
    private getSignal<T>(
        mondayFirstWeekDays$: Observable<WeekDays<T>>,
    ): Signal<WeekDays<T> | null> {
        return this.toSignal(
            mondayFirstWeekDays$.pipe(
                map(convertToSundayFirstWeekFormat),
                map(
                    weekDays =>
                        [
                            ...weekDays.slice(this.firstDayOfWeekIndex),
                            ...weekDays.slice(0, this.firstDayOfWeekIndex),
                        ] as WeekDays<T>,
                ),
            ),
            null,
        );
    }
}
