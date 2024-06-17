import type {PipeTransform, Signal} from '@angular/core';
import {inject, INJECTOR, Pipe, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiPure} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {map, Subject, takeUntil} from 'rxjs';

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
export class TuiOrderWeekDaysPipe implements PipeTransform {
    private readonly firstDayOfWeekIndex = inject(TUI_FIRST_DAY_OF_WEEK);
    private readonly injector = inject(INJECTOR);
    private readonly destroy$ = new Subject<void>();

    public transform<T>(
        mondayFirstWeekDays$: Observable<WeekDays<T>>,
    ): WeekDays<T> | null {
        return this.getSignal(mondayFirstWeekDays$)();
    }

    @tuiPure
    private getSignal<T>(
        mondayFirstWeekDays$: Observable<WeekDays<T>>,
    ): Signal<WeekDays<T> | null> {
        this.destroy$.next();

        return untracked(() =>
            toSignal(
                mondayFirstWeekDays$.pipe(
                    map(convertToSundayFirstWeekFormat),
                    map(
                        weekDays =>
                            [
                                ...weekDays.slice(this.firstDayOfWeekIndex),
                                ...weekDays.slice(0, this.firstDayOfWeekIndex),
                            ] as WeekDays<T>,
                    ),
                    takeUntil(this.destroy$),
                ),
                {injector: this.injector, initialValue: null},
            ),
        );
    }
}
