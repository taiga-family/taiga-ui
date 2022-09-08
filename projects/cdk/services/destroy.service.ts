import {Injectable, OnDestroy} from '@angular/core';
import {ReplaySubject} from 'rxjs';

/**
 * @note:
 * Observable abstraction over ngOnDestroy to use with takeUntil
 *
 * Why we use `ReplaySubject` instead of `Subject`?
 * Well, we’ll use ReplaySubject to emit the last message in case
 * the subscription is ended after the component is destroyed.
 */
@Injectable()
export class TuiDestroyService extends ReplaySubject<void> implements OnDestroy {
    constructor() {
        super(1);
    }

    ngOnDestroy(): void {
        this.next();
        this.complete();
    }
}
