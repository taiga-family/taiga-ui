import {InjectionToken} from '@angular/core';
import {TuiDayOfWeek} from '@taiga-ui/cdk/date-time';
import {BehaviorSubject} from 'rxjs';

export type TuiDayOfWeekType = (typeof TuiDayOfWeek)[keyof typeof TuiDayOfWeek];

export type TuiFirstDayOfWeekSubject = BehaviorSubject<TuiDayOfWeekType> & {
    valueOf(): TuiDayOfWeekType;
};

/**
 * The first day of the week index
 */
export const TUI_FIRST_DAY_OF_WEEK = new InjectionToken<
    TuiDayOfWeekType & TuiFirstDayOfWeekSubject
>(ngDevMode ? 'TUI_FIRST_DAY_OF_WEEK' : '', {
    factory: () => {
        const subject = new BehaviorSubject<TuiDayOfWeekType>(
            TuiDayOfWeek.Monday,
        ) as TuiFirstDayOfWeekSubject;

        subject.valueOf = () => subject.getValue();

        return subject as TuiDayOfWeekType & TuiFirstDayOfWeekSubject;
    },
});
