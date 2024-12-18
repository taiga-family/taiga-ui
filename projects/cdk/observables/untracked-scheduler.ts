import {untracked} from '@angular/core';
import type {SchedulerAction, SchedulerLike, Subscription} from 'rxjs';
import {queueScheduler} from 'rxjs';

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
