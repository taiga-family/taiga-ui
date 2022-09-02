import type {OnDestroy} from '@angular/core';
import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

/**
 * Observable abstraction over ngOnDestroy to use with takeUntil
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
