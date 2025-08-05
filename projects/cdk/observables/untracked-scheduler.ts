import {untracked} from '@angular/core';
import {
    queueScheduler,
    type SchedulerAction,
    type SchedulerLike,
    type Subscription,
} from 'rxjs';

export const tuiUntrackedScheduler: SchedulerLike = {
    now: queueScheduler.now.bind(queueScheduler),

    schedule<T>(
        work: (this: SchedulerAction<T>, state?: T) => void,
        delay?: number,
        state?: T,
    ): Subscription {
        return queueScheduler.schedule(
            function (this: SchedulerAction<T>, s?: T) {
                return untracked(() => work.call(this, s));
            },
            delay,
            state,
        );
    },
};
